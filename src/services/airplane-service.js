const { StatusCodes } = require("http-status-codes");
const { AirplaneRespository } = require("../repositories");
const { AppError } = require("../utils");

const airplaneRespository = new AirplaneRespository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRespository.create(data);
    return airplane;
  } catch (error) {
    console.log(error);
    // if (error.name = 'TypeError'){
    //     throw new AppError('Cannot create a new airplane object',StatusCodes.BAD_REQUEST)
    // }
    if ((error.name = "SequelizeValidationError")) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError("Cannot create airplane", StatusCodes.BAD_REQUEST);
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRespository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError("Cannot fetch data", StatusCodes.BAD_REQUEST);
  }
}
async function getAirplane(id) {
  try {
    const airplane = await airplaneRespository.get(id);
    return airplane;
  } catch (error) {
    if ((error.statusCode = StatusCodes.NOT_FOUND)) {
      throw new AppError("Arplane was not found", StatusCodes.NOT_FOUND);
    }
    throw new AppError("Cannot fetch data", StatusCodes.BAD_REQUEST);
  }
}
async function destroyAirplane(id) {
  try {
    const response = await airplaneRespository.destroy(id);
    return response;
  } catch (error) {
    if ((error.statusCode = StatusCodes.NOT_FOUND)) {
        throw new AppError("Airplane to delete was not found", StatusCodes.NOT_FOUND);
      }
    throw new AppError("Cannot fetch data", StatusCodes.ACCEPTED);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane
};
