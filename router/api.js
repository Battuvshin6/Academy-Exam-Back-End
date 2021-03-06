const express = require("express");
const router = express.Router();
const controllerData = require("../controller/Controller.js");
router.get("/get", controllerData.getData);
router.post("/post", controllerData.createData);
router.put("/update", controllerData.updateData);
router.delete("/delete", controllerData.deleteData);
module.exports = router;
