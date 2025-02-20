const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddleWares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/", CityMiddleWares.validateCreateRequest,
  CityController.createCity
);

// router.
// get(
//   "/",
//   AirplaneController.getAirplanes
// );

// router.
// get(
//   "/:id",
//   AirplaneController.getAirplane
// );
// router.
// delete(
//   "/:id",
//   AirplaneController.destroyAirplane
// );

module.exports = router;
