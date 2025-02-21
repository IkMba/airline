const express = require("express");
const {  AirportController, FlightController } = require("../../controllers");
const {  AirportMiddleWares, FlightMiddleWares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  FlightMiddleWares.validateCreateRequest,
  FlightController.createFlight
);
router.get(
  "/",
  FlightController.getAllFlights
);


module.exports = router;
