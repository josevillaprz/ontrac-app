module.exports = function errorHandler(err, req, res, next) {
  // catch all error handler
  res.status(err.status || 500).json({ message: err.message });
};
