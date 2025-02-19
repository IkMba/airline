const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleWares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  AirplaneMiddleWares.validateCreateRequest,
  AirplaneController.createAirplane
);

router.
get(
  "/",
  AirplaneController.getAirplanes
);

module.exports = router;
