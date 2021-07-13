/**
 * @description 登录注册路由
 * @author Masion
*/
const router = require('koa-router')()

const { register, login } = require('../controller/User')

const { SuccessModel, ErrorModel } = require("../res-model");

//路由前缀
router.prefix('/api/user')

//注册路由
router.post('/register', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  try {
    //数据库创建用户
    const newUser = await register(username, password)

    //返回
    ctx.body = new SuccessModel(newUser);

  } catch (err) {
    console.error(err);
    ctx.body = new ErrorModel(1001, `注册失败-${err.message}`);
  }

})

//登录路由
router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  try {

    //查询用户
    const userInfo = await login(username, password);

    if (userInfo && userInfo?.username) {
      //返回设置cookie
      ctx.session.userInfo = userInfo;
      ctx.body = new SuccessModel(userInfo);
    } else {
      ctx.body = new ErrorModel(-1, '用户名或密码错误')
    }

  } catch (err) {
    console.error(err);
    ctx.body = new ErrorModel(1002, `登录失败-${err.message}`);
  }

})


module.exports = router
