const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils");

function validateCreateRequest(req,res,next){
    if (!req.body.flightNumber){
        ErrorResponse.message = 'Something went wrong while creating flight'
       
        ErrorResponse.error =  new AppError(['flightNumber was not found'])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.airplaneId){
        ErrorResponse.message = 'Something went wrong while creating flight'
       
        ErrorResponse.error =  new AppError(['airplaneId was not found'])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.arrivalTime){
        ErrorResponse.message = 'Something went wrong while creating flight'
       
        ErrorResponse.error =  new AppError(['arrivalTime was not found'])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.departureTime){
        ErrorResponse.message = 'Something went wrong while creating flight'
       
        ErrorResponse.error =  new AppError(['departureTime was not found'])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.arrivalAirportId){
        ErrorResponse.message = 'Something went wrong while creating flight'
       
        ErrorResponse.error =  new AppError(['arrivalAirportId was not found'])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.departureAirportId){
        ErrorResponse.message = 'Something went wrong while creating flight'
       
        ErrorResponse.error =  new AppError(['departureAirportId was not found'])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.price){
        ErrorResponse.message = 'Something went wrong while creating flight'
       
        ErrorResponse.error =  new AppError(['price was not found'])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.totalSeats){
        ErrorResponse.message = 'Something went wrong while creating flight'
       
        ErrorResponse.error =  new AppError(['totalSeats was not found'])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    next()
}

module.exports = {
    validateCreateRequest
}