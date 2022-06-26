const { Workout, Workout_exercise, Exercise } = require("../models");

exports.getAllWorkouts = async (req, res, next) => {
  try {
    // query database for all workouts
    const workouts = await Workout.findAll({
      where: { userId: req.params.userId },
      include: [{ model: Exercise }],
    });
    res.status(200).json(workouts);
  } catch (err) {
    next(err);
  }
};

exports.getWorkout = async (req, res, next) => {
  try {
    // query database for workout by id
    const workout = await Workout.findByPk(req.params.id, {
      include: [{ model: Exercise }],
    });
    if (!workout) {
      res.status(404).json({ message: "Workout not found" });
    } else {
      res.status(200).json(workout);
    }
  } catch (err) {
    next(err);
  }
};

exports.createWorkout = async (req, res, next) => {
  // get values from request body
  const { name, userId } = req.body;
  try {
    // query database to create user
    const workout = await Workout.create({
      name,
      userId,
    });
    // ********** will need to add to joining table aswell *************
    // respond back to client
    res.status(200).send(workout);
  } catch (err) {
    next(err);
  }
};

exports.updateWorkout = async (req, res, next) => {
  try {
    // check if workout is stored
    const workout = await Workout.findByPk(req.params.id);
    // if not found respond with not found
    if (!workout) {
      res.status(404).json({ message: "Workout not found" });
    } else {
      // if found update
      await Workout.update(req.body, { where: { id: req.params.id } });
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteWorkout = async (req, res, next) => {
  try {
    // check if workout is stored
    const workout = await Workout.findByPk(req.params.id);
    // if not found respond with not found
    if (!workout) {
      res.status(404).json({ message: "Workout not found" });
    } else {
      // if found delete
      await Workout.destroy({ where: { id: req.params.id } });
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
