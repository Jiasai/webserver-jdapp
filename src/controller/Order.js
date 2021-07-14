/**
 * @description Order Controller
 * @author Masion
 */

const Product = require("../models/Product")
const Address = require("../models/Address")
const Order = require("../models/Order")

/**
 * 创建新订单
 * @param {Object} body 创建订单请求信息 
 */
const createOrder = async (username,body) => {

    //获取Address 信息
    const address = await Address.findById(body.addressId);

    //复制商品列表信息
    let resultProducts = [];
    for (const item of body.products) { //使用for...of遍历，forEach不可以
        const itemProduct = {};
        itemProduct.orderSales = item.num;
        itemProduct.product = await Product.findById(item.id);
        resultProducts.push(itemProduct);
    }

    //数据库创建一个新订单
    const newOrder = await Order.create({
        username,
        shopId: body.shopId,
        shopName: body.shopName,
        isCanceled: body.isCanceled,
        address,
        products: resultProducts
    })

    return newOrder
}

/**
 * 查询订单列表
 * @param {String} username 用户名
 */
const getOrderList = async (username) => {

    //查找订单列表
    const orderList = await Order.find({ username }).sort({ updatedAt: -1 });

    return orderList

}

//导出
module.exports = {
    createOrder,
    getOrderList
}