const express = require("express");
const {  AirportController } = require("../../controllers");
const {  AirportMiddleWares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  AirportMiddleWares.validateCreateRequest,
  AirportController.createAirport
);

router.
get(
  "/",
  AirportController.getAirports
);

router.
get(
  "/:id",
  AirportController.getAirport
);

router.
delete(
  "/:id",
  AirportController.destroyAirport
);

module.exports = router;
