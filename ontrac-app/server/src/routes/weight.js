const router = require("express").Router();
const weightCtrl = require("../controllers/weight");

// ROUTES
// router.get("/", weightCtrl.getAllWeights);
router.get("/:id", weightCtrl.getAllWeights);
router.post("/", weightCtrl.createWeight);
// router.post("/edit/:id", weightCtrl.editWeight);
// router.get("/delete/:id", weightCtrl.deleteWeight);

// EXPORT
module.exports = router;
