const router = require("express").Router();
const workoutCtrl = require("../controllers/workout");

router.get("/all/:userId", workoutCtrl.getAllWorkouts);
router.post("/create", workoutCtrl.createWorkout);
router.post("/edit/:id", workoutCtrl.updateWorkout);
router.get("/delete/:id", workoutCtrl.deleteWorkout);
router.get("/:id", workoutCtrl.getWorkout);

module.exports = router;
