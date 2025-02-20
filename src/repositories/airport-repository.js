const CrudRepository = require("./crud-repository");
const {Airport} = require('../models')

class AirplaneRespository extends CrudRepository {
    constructor(){
        super(Airport)
    }
}

module.exports = AirplaneRespository