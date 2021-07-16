/**
 * @description Address Model
 * @author Masion
*/

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username:{
        type:String,
        require:true//必需
    },
    city:String,
    department:String, 
    houseNumber:String, 
    name:String, 
    phone:String,
	defaultAddress:{
		type:Boolean,
		default:false
	}
},{timestamps:true})

const Address = mongoose.model('address',Schema);

module.exports = Address;