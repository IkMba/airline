const express = require("express");
const {  FlightController } = require("../../controllers");
const {  FlightMiddleWares } = require("../../middlewares");

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
router.get(
  "/:id",
  FlightController.getFlight
);


module.exports = router;
