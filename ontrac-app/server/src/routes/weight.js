const router = require("express").Router();
const weightCtrl = require("../controllers/weight");

// ROUTES
router.get("/:id", weightCtrl.getAllWeights);
router.post("/", weightCtrl.createWeight);
router.get("/delete/:id", weightCtrl.deleteWeight);

// EXPORT
module.exports = router;
