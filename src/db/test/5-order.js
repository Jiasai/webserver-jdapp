/**
 * @description 订单数据操作
 * @author Masion
*/
const Product = require("../../models/Product")
const Address = require("../../models/Address")
const Order = require("../../models/Order")

!(async () => {
    //从request body中 拿到信息
    const requestBody = {
        username: "13816431250",
        addressId: '60ebe1924400a12b1cb991f0',
        shopId: "60ebec074c403b4ce0d01b88",
        shopName: '沃尔玛（南京中路）',
        isCanceled: true,//订单是否被取消
        products: [
            {
                _id: '60ebf22b0ada9a20245c7ae2',
                num: 3 //购买数量
            },
            {
                _id: '60ebf15dfb4ca52bb8fa50da',
                num: 2 //购买数量
            },
            {
                _id: '60ebf32ab12cc94be40f131e',
                num: 4 //购买数量
            }
        ]
    };

    //获取Address 信息
    const address = await Address.findById(requestBody.addressId);

    //获取products 信息(商品列表)
    /*     const pIds = requestBody.products.map(p=>p._id); // ['xxxxid','xxxxid']
        const productList = await Product.find({
            shopId:requestBody.shopId,
            _id:{
                $in:pIds
            }
        }) */

    let resultProducts = [];
    for (const item of requestBody.products) { //使用for...of遍历，forEach不可以
        const itemProduct = {};
        itemProduct.orderSales = item.num;
        itemProduct.product = await Product.findById(item._id);
        resultProducts.push(itemProduct);
    }
    console.log("商品列表：", resultProducts)

    //数据库创建一个新订单
    const newOrder = await Order.create({
        username: requestBody.username,
        shopId: requestBody.shopId,
        shopName: requestBody.shopName,
        isCanceled: requestBody.isCanceled,
        address,
        products: resultProducts
    })


})()

console.log('成功执行')