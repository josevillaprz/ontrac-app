const router = require("express").Router();
const exerciseCtrl = require("../controllers/exercise");

// ROUTES
router.get("/all", exerciseCtrl.getAllExercises);
router.post("/create", exerciseCtrl.createExercise);
router.get("/:id", exerciseCtrl.getExercise);
router.post("/edit/:id", exerciseCtrl.updateExercise);
router.get("/delete/:id", exerciseCtrl.deleteExercise);

// EXPORT
module.exports = router;
