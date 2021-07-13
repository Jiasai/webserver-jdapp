/**
 * @description  address controller
 * @author Masion
 */
// Address 数据model
 const Address = require("../models/Address");


 /**
  * 创建地址
  * @param {String} username 用户名
  * @param {Object} data  地址的详细信息
  */
 const createAddress =async(username,data)=>{
    //在数据库创建1个收货地址
    const newAddress = await Address.create({
        username,
        ...data //展开运算符展开对象
    })
    return newAddress
 }

/**
 * 获取地址列表
 * @param {String} username 用户名
 * @returns {Array} AddressList 地址列表
 */
const getAddressList = async(username)=>{
    //查询数据库用户所有Address
    const resultList = await Address.find({username}).sort({updatedAt:-1});
    return resultList
}

/**
 * 获取单个地址
 * @param {String} id 
 * @returns {Object} 1个地址信息
 */
const getAddressById = async(id)=>{
    //查询一个地址
    const resultAddress = await Address.findById(id);
    return resultAddress
}




 module.exports = {
     createAddress,
     getAddressList,
     getAddressById
}


