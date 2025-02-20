const { StatusCodes } = require("http-status-codes");
const {  AirportRespository } = require("../repositories");
const { AppError } = require("../utils");

const airportRespository = new AirportRespository();

async function createAirport(data) {
  try {
    const airport = await airportRespository.create(data);
    return airport;
  } catch (error) {
    if ((error.name = "SequelizeUniqueConstraintError") || ( error.name = "SequelizeValidationError")){
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.path + ' ' + err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
}
}

async function getAirports() {
  try {
    const airports = await airportRespository.getAll();
    return airports;
  } catch (error) {
    throw new AppError("Cannot fetch data", StatusCodes.BAD_REQUEST);
  }
}

async function getAirport(id) {
  try {
    const airport = await airportRespository.get(id);
    return airport;
  } catch (error) {
    if ((error.statusCode = StatusCodes.NOT_FOUND)) {
      throw new AppError("Airport was not found", StatusCodes.NOT_FOUND);
    }
    throw new AppError("Cannot fetch data", StatusCodes.BAD_REQUEST);
  }
}

async function destroyAirport(id) {
  try {
    const response = await airportRespository.destroy(id);
    return response;
  } catch (error) {
    if ((error.statusCode = StatusCodes.NOT_FOUND)) {
        throw new AppError("Airport to delete was not found", StatusCodes.NOT_FOUND);
      }
    throw new AppError("Cannot fetch data", StatusCodes.ACCEPTED);
  }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
   
}