/**
 * @description user controller
 * @author Masion
*/
const User = require("../models/User");

/**
 * 注册
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns newUser 新用户
 */
const register = async(username,password)=>{
    //在数据库创建
    const newUser = await User.create({username,password});
    return newUser;
}


/**
 * 登录
 * @param {string} username 
 * @param {string} password 
 * @returns {Boolean} true||false
 */
const login =async(username,password)=>{
//查询数据库
const resultUser = await User.findOne({ username, password });
return resultUser;

}




module.exports = {register,login}
