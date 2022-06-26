const router = require("express").Router();
const authCtrl = require("../controllers/auth");

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);

module.exports = router;
