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

router.
get(
  "/:id",
  AirplaneController.getAirplane
);
router.
delete(
  "/:id",
  AirplaneController.destroyAirplane
);

module.exports = router;
