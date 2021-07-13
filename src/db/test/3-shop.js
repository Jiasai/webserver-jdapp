/**
 * @description 商店数据操作
 * @author Masion
*/
const Shop = require('../../models/Shop')

!(async () => {

    //创建2个商店
    /*  const newShop = await Shop.create({
         name:'ALDI奥乐齐超市（静安店）',
         imgUrl:'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/173016/38/12422/79978/60b52bedE16e389ad/8384ebb022193c24.png',
         sales:1300,//月售
         expressLimit:0,//起送价格
         expressPrice:5,//快递价格
         slogan:'满¥129免运费' 
     }) */

    //获取商铺列表
    /*     const shopList = await Shop.find().sort({_id:-1})
    
        console.log('商铺列表是：',shopList) */

    //获取单个商店详情
    const id = '60ebecc6a7b44d4fb47a73bb';
    const shopInfo = await Shop.findById(id);
    console.log('商店详情是：', shopInfo)


})();

console.log('成功执行')