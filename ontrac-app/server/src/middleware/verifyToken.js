const jwt = require("jsonwebtoken");

module.exports = function verifyToken(req, res, next) {
  const tokenSecret = process.env.TOKEN_SECRET || "6f9idif1zo"; // this will be a dotenv variable
  const token = req.header("token");
  if (!token) {
    return res.status(403).send("Access denied");
  }
  try {
    // gets payload from the verify
    const verified = jwt.verify(token, tokenSecret);
    if (!verified) {
      return res.status(403).send("invalid token");
    }
    req.user = verified;
    next();
  } catch (err) {
    next(err);
  }
};
