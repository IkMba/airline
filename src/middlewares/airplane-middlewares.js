const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils");

function validateCreateRequest(req,res,next){
    if (!req.body.modelNumber){
        ErrorResponse.message = 'Something went wrong while creating airplane'
       
        ErrorResponse.error =  new AppError(['modelNumber not found in the incoming request'])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    next()
}

module.exports = {
    validateCreateRequest
}