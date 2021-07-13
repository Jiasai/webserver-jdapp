const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session');
const cors = require('koa2-cors');

const index = require('./routes/index')
const users = require('./routes/users')
const address = require("./routes/address");

// error handler
onerror(app)


//配置跨域
app.use(cors({
  origin:'http://localhost:8080',
  credentials:true //允许跨域带cookie
}));

//使用session和cookie
app.keys=["@JDapp*#^123"] //密钥，用于加密
app.use(session({
  //配置cookie
  path:'/',
  httpOnly:true, //只能通过后端修改cookie
  maxAge:15*24*60*60*1000 //有效期15天
}));


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 注册使用routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(address.routes(),address.allowedMethods())

//allowedMethods():响应 options 方法, 告诉它所支持的请求方法

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
