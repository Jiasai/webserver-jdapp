const Shop = require("../models/Shop")
const Product = require("../models/Product")
/**
 * 获取商店列表（热门商店）
 * @returns {Array} 商店列表
 */
const getShopList = async()=>{  
    //查询商店列表
    const shopList  = await Shop.find().sort({updatedAt:-1});
    return shopList;
}

/**
 * 获取单个店铺详情
 * @param {String} id 店铺id 
 * @returns {Object}  店铺详情
 */
const getShopById = async(id)=>{
    //查询单个商店
    const shopInfo = await Shop.findById(id);
    return shopInfo
}

/**
 * //查询某个商店某个tab的商品列表
 * @param {String} shopId 店铺id
 * @param {Object} query url参数tabs= 
 * @returns 不同tabs分类商品列表
 */
const getShopProductList = async(shopId,query)=>{
    //查询某个商店某个tab的商品列表
    const productList = await Product.find({shopId,tabs:{$in:query.tabs}})
//Product.find({shopId,tabs:query.tabs})
    return productList;
}


module.exports = {
    getShopList,
    getShopById,
    getShopProductList
}