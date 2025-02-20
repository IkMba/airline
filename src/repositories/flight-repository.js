const CrudRepository = require("./crud-repository");
const {Flight} = require('../models')

class AirplaneRespository extends CrudRepository {
    constructor(){
        super(Flight)
    }
}

module.exports = AirplaneRespository