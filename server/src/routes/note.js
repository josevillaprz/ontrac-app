const router = require("express").Router();
const noteCtrl = require("../controllers/note");

// ROUTES
router.get("/", noteCtrl.getAllNotes);
router.get("/:id", noteCtrl.getNote);
router.post("/create", noteCtrl.createNote);
router.post("/edit/:id", noteCtrl.editNote);
router.get("/delete/:id", noteCtrl.deleteNote);

// EXPORT
module.exports = router;
