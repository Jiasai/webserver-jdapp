/**
 * @description 用户数据操作
 * @author Masion
*/

const User = require('../../models/User')

!(async()=>{ //函数自执行为使用async

    //注册:创建一个新的用户
/*     await User.create({
        username:'13816431258',
        password:'zjs123456'
    }) */

    //再创建一个用户
    // await User.create({
    //     username:'15136174028',
    //     password:'wh123456'
    // })

    //查询：单个用户
 /*   const finduser = await User.findOne({username:'13816431250'});
   console.log('查询结果是：',finduser)
 */


})();

console.log('顺利执行')