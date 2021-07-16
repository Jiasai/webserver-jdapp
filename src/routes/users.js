/**
 * @description 登录注册路由
 * @author Masion
*/
const router = require('koa-router')()

const { register, login ,findUser } = require('../controller/User')

const { SuccessModel, ErrorModel } = require("../res-model");

//Controller
// router这一层,不做业务处理,仅仅只是将路由和路由的处理函数结合起来.

// 路由的处理函数由Controller层实现

//路由前缀
router.prefix('/api/user')

//查询用户名是否可用
router.get("/register/:username",async(ctx,next)=>{
	const username = ctx.params.username;
	const user = await findUser(username);	
	if(!user&&!user?.username){
		ctx.body = new SuccessModel();
	}else{
		ctx.body = new ErrorModel(-1, '用户名已存在')
	}
})

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
    ctx.body = new ErrorModel(10001, `注册失败-${err.message}`);
  }

})

//登录路由
router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  try {

    //查询用户
    const userInfo = await login(username, password);

    if (userInfo && userInfo?.username) {
      //登录成功，返回,设置session
      ctx.session.userInfo = userInfo;
      ctx.body = new SuccessModel();
    } else {
      ctx.body = new ErrorModel(-1, '用户名或密码错误')
    }

  } catch (err) {
    console.error(err);
    ctx.body = new ErrorModel(10002, `登录失败-${err.message}`);
  }

})

//退出登录路由
router.get("/logout",async(ctx,next)=>{
	ctx.session.userInfo = {};
	ctx.body = new ErrorModel(10003, '退出登录')
})







module.exports = router
