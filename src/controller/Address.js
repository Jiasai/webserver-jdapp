/**
 * @description  address controller
 * @author Masion
 */
// Address 数据model
 const Address = require("../models/Address");


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
  * 创建地址
  * @param {String} username 用户名
  * @param {Object} data  地址的详细信息
  */
 const createAddress =async(username,data)=>{
	 //判断defaultAddress 的状态
	const addressList =getAddressList(username);
	if(!addressList || addressList?.length<1){
		data.defaultAddress = true;
	}else{
		if(data.defaultAddress){
			await Address.updateMany({username},{defaultAddress:false},{new:true})
		}
	}	
    //在数据库创建1个收货地址
    const newAddress = await Address.create({
        username,
        ...data //展开运算符展开对象
    })
    return newAddress
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

/**
 * 更新单个地址
 * @param {String} id 地址id
 * @param {Object} data 更新的数据
 * @returns {Object} 更新后的地址信息
 */
const updateAddress=async(id,username,data)=>{
     //defaultAddress 的状态
    if(data.defaultAddress){
        await Address.updateMany({username},{defaultAddress:false},{new:true})
    }	
    //更新数据库地址
    const resultAddress = await Address.findOneAndUpdate(
        {_id:id,username},//查询条件
        {username,...data},//要更新的数据
        {new:true} //返回新的
    );
    return resultAddress
}


 module.exports = {
     createAddress,
     getAddressList,
     getAddressById,
     updateAddress
}


