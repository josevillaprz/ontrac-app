const { Weight } = require("../models");

exports.getAllWeights = async (req, res, next) => {
  try {
    const weights = await Weight.findAll({ where: { userId: req.user.id } });
    if (weights.length === 0) {
      res.sendStatus(204);
    } else {
      res.status(200).json(weights);
    }
  } catch (err) {
    next(err);
  }
};

exports.createWeight = async (req, res, next) => {
  const { pounds } = req.body;
  try {
    const weight = await Weight.create({ pounds, userId: req.user.id });
    res.status(202).json(weight);
  } catch (err) {
    next(err);
  }
};

exports.deleteWeight = async (req, res, next) => {
  try {
    const weight = await Weight.findByPk(req.params.id);
    if (!weight) {
      res.status(204).json({ message: "Weight not found" });
    } else {
      await Weight.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    }
  } catch (err) {
    next(err);
  }
};
