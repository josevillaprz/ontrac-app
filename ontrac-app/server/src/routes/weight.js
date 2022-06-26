const router = require("express").Router();
const weightCtrl = require("../controllers/weight");

// ROUTES
router.get("/", weightCtrl.getAllWeights);
router.get("/:id", weightCtrl.getWeight);
router.post("/create", weightCtrl.createWeight);
router.post("/edit/:id", weightCtrl.editWeight);
router.get("/delete/:id", weightCtrl.deleteWeight);

// EXPORT
module.exports = router;
