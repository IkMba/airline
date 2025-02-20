const { StatusCodes } = require("http-status-codes");
const {  FlightRespository } = require("../repositories");
const { AppError } = require("../utils");

const flightRespository = new FlightRespository();

async function createFlight(data) {
  try {
    const flight = await flightRespository.create(data);
    return flight;
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



module.exports = {
    createFlight,
   
}