/**
 * @description mongoose连接数据库
 * @author masion
 */

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017' //本地默认mongodb地址

const dbName = 'jdapp';//数据库名称

//配置
mongoose.set('useCreateIndex',true)
mongoose.set('useFindAndModify',false)

//开始连接
mongoose.connect(`${url}/${dbName}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//连接对象
const db = mongoose.connection

//错误处理
db.on('error',err=>{
    console.error('Mongoose connect error',err)
})

//导出
module.exports = mongoose