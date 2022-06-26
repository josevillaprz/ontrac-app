const { User, Workout, Exercise, Weight } = require("../models");

exports.getAllUsers = async (req, res, next) => {
  try {
    // query the database for all users
    const allUsers = await User.findAll({
      attributes: { exclude: ["password"] },
      include: [{ model: Workout }, { model: Exercise }, { model: Weight }],
    });
    // send back the user except the password
    res.json(allUsers);
  } catch (err) {
    // if error run the error handler middleware
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    // query database for user with request id
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Workout }, { model: Exercise }, { model: Weight }],
    });
    // if no user found respond to client
    if (!user) {
      res.json({ message: "User not found" });
    } else {
      // if user found respond back with user details except password
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    // look for user in the database
    const user = await User.findByPk(req.user.id);
    // if no user is found respond with not found
    if (!user) {
      res.json({ message: "User not found" });
    } else {
      // if user found query database to update the user at id
      await User.update(req.body, { where: { id: req.params.id } });
      //respond back to user
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    // look for user in the database
    const user = await User.findByPk(req.user.id);
    // if no user is found respond with not found
    if (!user) {
      res.json({ message: "User not found" });
    } else {
      // query database to delete user with id
      await User.destroy({ where: { id: req.params.id } });
      // respond back to client with status code
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
