/**
 * @description Product Model
 * @author Masion
*/

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    shopId:{
        type:String,
        require:true
    },//对应商店的_id 
    tabs:[String], //示例：tabs:['all','fruits']
    name:String, 
    imgUrl:String, 
    sales:Number, 
    price:Number, 
    oldPrice:Number
},{timestamps:true})

const Product = mongoose.model('product',Schema);

module.exports = Product;