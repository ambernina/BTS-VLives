const router = require("express").Router();
const controller = require("../controller/controller");

router.route("/").get(controller.findAll);

module.exports = router;
