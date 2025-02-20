const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while creating city";

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// async function getCities(req,res) {
//   try {
//   const airplanes = await AirplaneService.getAirplanes()
//   SuccessResponse.data = airplanes;
//   return res.status(StatusCodes.OK).json(SuccessResponse);
// } catch (error) {
//   ErrorResponse.error = error;
//   ErrorResponse.message = "Something went wrong while fetcching airplanes";

//   return res.status(error.statusCode).json(ErrorResponse);
// }
// }
// async function getCity(req,res) {
//   try {
//   const airplane = await AirplaneService.getAirplane(req.params.id)
//   SuccessResponse.data = airplane;
//   return res.status(StatusCodes.OK).json(SuccessResponse);
// } catch (error) {
//   ErrorResponse.error = error;
//   ErrorResponse.message = "Something went wrong while fetching the airplane";

//   return res.status(error.statusCode).json(ErrorResponse);
// }
// }
// async function destroyAirplane(req,res) {
//   try {
//   const airplane = await AirplaneService.destroyAirplane(req.params.id)
//   SuccessResponse.data = airplane;
//   return res.status(StatusCodes.OK).json(SuccessResponse);
// } catch (error) {
//   ErrorResponse.error = error;
//   ErrorResponse.message = "Something went wrong while fetching the airplane";

//   return res.status(error.statusCode).json(ErrorResponse);
// }
// }

module.exports = {
  createCity,

};
