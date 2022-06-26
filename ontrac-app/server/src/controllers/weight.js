const { Weight } = require("../models");

exports.getAllWeights = async (req, res, next) => {
  try {
    const allWeights = await Weight.findAll();
    res.status(200).json(allWeights);
  } catch (err) {
    next(err);
  }
};

exports.getWeight = async (req, res, next) => {
  try {
    const weight = await Weight.findByPk(req.params.id);
    if (!weight) {
      res.status(404).json({ message: "Weight not found" });
    } else {
      res.status(200).json(weight);
    }
  } catch (err) {
    next(err);
  }
};

exports.createWeight = async (req, res, next) => {
  const { pounds, userId } = req.body;
  try {
    const weight = await Weight.create({ pounds, userId });
    res.status(201).json(weight);
  } catch (err) {
    next(err);
  }
};

exports.editWeight = async (req, res, next) => {
  try {
    const weight = await Weight.findByPk(req.params.id);
    if (!weight) {
      res.status(404).json({ message: "Weight not found" });
    } else {
      await Weight.update(req.body, { where: { id: req.params.id } });
      res.sendStatus(201);
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteWeight = async (req, res, next) => {
  try {
    const weight = await Weight.findByPk(req.params.id);
    if (!weight) {
      res.status(404).json({ message: "Weight not found" });
    } else {
      await Weight.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    }
  } catch (err) {
    next(err);
  }
};
