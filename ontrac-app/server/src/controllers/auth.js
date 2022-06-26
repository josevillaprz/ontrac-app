const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  // get data from the reqest body
  const { firstName, lastName, email, password } = req.body;
  // checking if the user is already registered
  const emailExist = await User.findOne({ where: { email: email } });
  if (emailExist) {
    return res.status(400).json({ message: "Email already exists" });
  }
  // Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  try {
    // save user to the database with hashed password
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPass,
    });
    // generate a token
    const tokenSecret = process.env.TOKEN_SECRET || "6f9idif1zo"; // this will be a dotenv
    const token = jwt.sign({ id: user.id }, tokenSecret);
    res.status(200).json({ id: user.id, token });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  // get data from request body
  const { email, password } = req.body;
  // checking if the email exists
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return res.status(403).json({ message: "Credentials are invalid." });
  }
  // compare password input to hashed password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(403).json({ message: "Credentials are invalid." });
  }
  // generate a token
  const tokenSecret = process.env.TOKEN_SECRET || "6f9idif1zo"; // this will be a dotenv
  const token = jwt.sign({ id: user.id }, tokenSecret);
  res.status(200).json({ id: user.id, token });
};
