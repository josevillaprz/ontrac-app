module.exports = function errorHandler(err, req, res, next) {
  res.send(err.message);
};
