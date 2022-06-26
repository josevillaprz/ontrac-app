const { Note, Workout } = require("../models");

exports.getAllNotes = async (req, res, next) => {
  try {
    const allNotes = await Note.findAll();
    res.status(200).json(allNotes);
  } catch (err) {
    next(err);
  }
};

exports.getNote = async (req, res, next) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      res.status(404).json({ message: "Note not found" });
    } else {
      res.status(200).json(note);
    }
  } catch (err) {
    next(err);
  }
};

exports.createNote = async (req, res, next) => {
  // get inputs from request body
  const { text, workoutId } = req.body;
  try {
    const note = await Note.create({ text, workoutId });
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
};

exports.editNote = async (req, res, next) => {
  try {
    // check if note is in the db
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      res.status(404).json({ message: "Note not found" });
    } else {
      await Note.update(req.body, { where: { id: req.params.id } });
      res.sendStatus(201);
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteNote = async function deleteNote(req, res, next) {
  try {
    // check if note exists
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      res.status(404).json({ message: "Note not found" });
    } else {
      await Note.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    }
  } catch (err) {
    next(err);
  }
};
