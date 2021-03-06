/**
 * @description address router
 * @author Masion
 */
const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require("../res-model");

//登录校验中间件
const loginCheck = require("../middlewares/loginCheck")
//Address的 controller方法
const { createAddress,getAddressList,getAddressById,updateAddress } = require("../controller/Address")

//路由前缀
router.prefix('/api/user/address')

//创建收货地址
router.post("/", loginCheck, async (ctx, next) => {

    //因为进行了登录验证，session有值
    const username = ctx.session.userInfo.username;	
    const data = ctx.request.body;

    try {//创建数据适合用try、catch做错误捕获
        //创建地址数据
        const newAddress = await createAddress(username, data);

        ctx.body = new SuccessModel(newAddress);

    } catch (err) {
        console.error(err);
        ctx.body = new ErrorModel(10004, `创建收货地址失败-${err.message}`);
    }
})

//获取收货地址列表
router.get("/",loginCheck,async(ctx,next)=>{
    const username = ctx.session.userInfo.username;
    
    //查询数据库获取地址列表
    const addressList = await getAddressList(username);
    ctx.body = new SuccessModel(addressList);
})

//获取单个收货地址
router.get("/:id",loginCheck,async(ctx,next)=>{
    //获取id
    const id = ctx.params.id;
    //查询单个地址
    const newaddress = await getAddressById(id)
    ctx.body = new SuccessModel(newaddress)

})

//更新收货地址
router.patch('/:id',loginCheck,async(ctx,next)=>{
    const id = ctx.params.id;
    const username = ctx.session.userInfo.username;
    const data = ctx.request.body;
    //数据库更新地址
    const newaddress = await updateAddress(id,username,data);
    ctx.body = new SuccessModel(newaddress)
})


module.exports = router


