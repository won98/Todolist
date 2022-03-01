const express = require("express");
const router = express.Router();
const { listController: controller } = require("../controller");

router.post("/list", controller.List);
router.get("/read", controller.Read);
router.post("/change", controller.Change);
router.post("/delete", controller.Delete);
module.exports = router;
