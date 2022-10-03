const router = require("express").Router();
const userCtrl = require("../controllers/user");

router.get("/", userCtrl.getUser);
router.get("/all", userCtrl.getAllUsers);
router.post("/:id", userCtrl.updateUser);
router.get("/delete/:id", userCtrl.deleteUser);

module.exports = router;
