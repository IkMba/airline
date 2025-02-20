const { StatusCodes } = require("http-status-codes");
const { CityRespository } = require("../repositories");
const { AppError } = require("../utils");

const cityRespository = new CityRespository();

async function createCity(data) {
  try {
    const city = await cityRespository.create(data);
    return city;
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

// async function getAirplanes() {
//   try {
//     const airplanes = await airplaneRespository.getAll();
//     return airplanes;
//   } catch (error) {
//     throw new AppError("Cannot fetch data", StatusCodes.BAD_REQUEST);
//   }
// }
// async function getAirplane(id) {
//   try {
//     const airplane = await airplaneRespository.get(id);
//     return airplane;
//   } catch (error) {
//     if ((error.statusCode = StatusCodes.NOT_FOUND)) {
//       throw new AppError("Arplane was not found", StatusCodes.NOT_FOUND);
//     }
//     throw new AppError("Cannot fetch data", StatusCodes.BAD_REQUEST);
//   }
// }
// async function destroyAirplane(id) {
//   try {
//     const response = await airplaneRespository.destroy(id);
//     return response;
//   } catch (error) {
//     if ((error.statusCode = StatusCodes.NOT_FOUND)) {
//         throw new AppError("Airplane to delete was not found", StatusCodes.NOT_FOUND);
//       }
//     throw new AppError("Cannot fetch data", StatusCodes.ACCEPTED);
//   }
// }

module.exports = {
    createCity,
    // getCities,
    // getCity,
    // destroyCity,
}