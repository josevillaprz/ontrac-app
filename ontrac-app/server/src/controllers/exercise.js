const { Exercise } = require("../models");

exports.getAllExercises = async (req, res, next) => {
  try {
    // query db for all exercises
    const exercises = await Exercise.findAll({
      where: { userId: req.user.id },
    });
    // respond back to client
    res.status(200).json(exercises);
  } catch (err) {
    next(err);
  }
};

exports.getExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.findByPk(req.params.id);
    if (!exercise) {
      res.status(404).json({ message: "Exercise not found" });
    } else {
      res.status(200).json(exercise);
    }
  } catch (err) {
    next(err);
  }
};

exports.createExercise = async (req, res, next) => {
  const { name, sets, reps, pounds } = req.body;
  try {
    const exercise = await Exercise.create({
      name,
      sets,
      reps,
      pounds,
      userId: req.user.id,
    });
    res.status(201).json(exercise);
  } catch (err) {
    next(err);
  }
};

exports.updateExercise = async (req, res, next) => {
  try {
    // query database for id
    const exercise = await Exercise.findByPk(req.params.id);
    if (!exercise) {
      res.status(404).json({ message: "Exercise not found" });
    } else {
      await Exercise.update(req.body, { where: { id: req.params.id } });
      res.sendStatus(201);
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteExercise = async (req, res, next) => {
  try {
    // query database for id
    const exercise = await Exercise.findByPk(req.params.id);
    if (!exercise) {
      res.status(404).json({ message: "Exercise not found" });
    } else {
      await Exercise.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    }
  } catch (err) {
    next(err);
  }
};
