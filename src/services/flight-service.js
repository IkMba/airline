const { StatusCodes } = require("http-status-codes");
const {  FlightRespository } = require("../repositories");
const { AppError } = require("../utils");
const { get } = require("../routes/v1");
const { Op } = require("sequelize");

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

async function getAllFlights(query){
    let customFilter = {}
    let sortFilter = []
    const endingTripTime = ' 23:59:00'
    if (query.trips){
        [departureAirportId,arrivalAirportId] = query.trips.split("-")
        customFilter.departureAirportId = departureAirportId
        customFilter.arrivalAirportId = arrivalAirportId
    }

    if (query.price){
        [minPrice,maxPrice] = query.price.split('-')
        customFilter.price = {
            [Op.between]:[minPrice,(maxPrice === undefined ? 2000 : maxPrice)]
        }
    }
    if (query.travellers){
        customFilter.totalSeats = {
            [Op.gte]:query.travellers
        }
    }
    if (query.tripDate){
        customFilter.departureTime = {
            [Op.between]: [query.tripDate,query.tripDate+ endingTripTime]
        }
    }

    if (query.sort){
        const params = query.sort.split(',')
        const sortFilters = params.map((param) => param.split('_'))
        sortFilter = sortFilters
    }

    try {
        const flights = await flightRespository.getAllFlights(customFilter,sortFilter)
        return flights
    }
    catch(error){
        throw new AppError('Cannot fetch all flights data',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createFlight,
    getAllFlights
   
}