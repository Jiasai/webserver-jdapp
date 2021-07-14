/**
 * @description Order router
 * @author Masion
 */

const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require("../res-model");

//登录校验中间件
const loginCheck = require("../middlewares/loginCheck")

//Shop和Product 的controller方法
const { createOrder, getOrderList } = require("../controller/Order")

//路由前缀
router.prefix('/api/order')

//创建订单
router.post("/", loginCheck, async (ctx, next) => {
    try {
        const username = ctx.session.userInfo?.username;
        const body = ctx.request.body;
        //创建订单
        const newOrder = await createOrder(username,body);

        ctx.body = new SuccessModel(newOrder)
    } catch (err) {
        console.error(err);
        ctx.body = new ErrorModel(10005, `订单创建失败-${err.message}`);
    }

})

//获取所有订单
router.get("/", loginCheck, async (ctx, next) => {
    const username = ctx.session.userInfo.username;
    //查询订单列表
    const orderList = await getOrderList(username);

    ctx.body = new SuccessModel(orderList);

})

module.exports = router