const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { log } = require("winston");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while creating airplane";

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req,res) {
  try {
  const airplanes = await AirplaneService.getAirplanes()
  SuccessResponse.data = airplanes;
  return res.status(StatusCodes.OK).json(SuccessResponse);
} catch (error) {
  ErrorResponse.error = error;
  ErrorResponse.message = "Something went wrong while fetcching airplanes";

  return res.status(error.statusCode).json(ErrorResponse);
}
}
async function getAirplane(req,res) {
  try {
  const airplane = await AirplaneService.getAirplane(req.params.id)
  SuccessResponse.data = airplane;
  return res.status(StatusCodes.OK).json(SuccessResponse);
} catch (error) {
  ErrorResponse.error = error;
  ErrorResponse.message = "Something went wrong while fetching the airplane";

  return res.status(error.statusCode).json(ErrorResponse);
}
}
async function destroyAirplane(req,res) {
  try {
  const airplane = await AirplaneService.destroyAirplane(req.params.id)
  SuccessResponse.data = airplane;
  return res.status(StatusCodes.OK).json(SuccessResponse);
} catch (error) {
  ErrorResponse.error = error;
  ErrorResponse.message = "Something went wrong while fetching the airplane";

  return res.status(error.statusCode).json(ErrorResponse);
}
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane
};
