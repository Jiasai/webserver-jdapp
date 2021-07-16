/**
 * @description 商店数据操作
 * @author Masion
*/
const Shop = require('../../models/Shop')

!(async () => {

    //创建4个商店
     const newShop1 = await Shop.create({
         name:'沃尔玛（南京中路）',
         imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
         sales:5000,//月售
         expressLimit:0,//起送价格
         expressPrice:3,//快递价格
         slogan:'VIP尊享满89元减4元运费券' 
     })
 const newShop2 = await Shop.create({
         name:'山姆会员商店（人广）',
         imgUrl:'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/180491/34/6104/136049/60b514d1E6f4eca58/b8dc9e74b693a14a.png',
         sales:2000,//月售
         expressLimit:0,//起送价格
         expressPrice:5,//快递价格
         slogan:'联合利华洗护满10减5' 
     })
      const newShop3 = await Shop.create({
         name:'联华超市（富民LH店）',
         imgUrl:'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/173143/11/11835/54634/60b0f79aE0e268652/df19f56ac76d8fe2.png',
         sales:1800,//月售
         expressLimit:0,//起送价格
         expressPrice:4,//快递价格
         slogan:'统一饮料满15减3' 
     })
      const newShop4 = await Shop.create({
         name:'ALDI奥乐齐超市（静安店）',
         imgUrl:'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/173016/38/12422/79978/60b52bedE16e389ad/8384ebb022193c24.png',
         sales:1300,//月售
         expressLimit:0,//起送价格
         expressPrice:5,//快递价格
         slogan:'满¥129免运费' 
     })
    //获取商铺列表
    /*     const shopList = await Shop.find().sort({_id:-1})
    
        console.log('商铺列表是：',shopList) */

    //获取单个商店详情
 /*    const id = '60ebecc6a7b44d4fb47a73bb';
    const shopInfo = await Shop.findById(id);
    console.log('商店详情是：', shopInfo) */


})();

console.log('成功执行')