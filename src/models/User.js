/**
 * @description User model
 * @author Masion
*/

const mongoose = require('../db/db');

const Schema = mongoose.Schema({
    username:{
        type:String,
        required:true, //规定必填,否则不存储
        unique:true //唯一性，不可重复
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})//时间戳

//使用Schema定义User的Model 
//(数据库中没有'user'集合会自动创建)
const User = mongoose.model('user',Schema)

module.exports = User;