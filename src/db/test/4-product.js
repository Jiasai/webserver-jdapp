/**
 * @description 商品数据操作
 * @author Masion
*/

const Product = require('../../models/Product')

!(async()=>{

    // tabs:['全部商品','乳品烘焙','新鲜水果','品质蔬菜','肉禽蛋类','速冻食品'],
    //创建几个商品
   /*  await Product.create({
        shopId:'60ebec074c403b4ce0d01b88',
        tabs:['全部商品','肉禽蛋类'],
        name:"澳洲进口 澳洲肥牛火锅片 900g",
        imgUrl:'https://img30.360buyimg.com/n1//s160x160_jfs/t1/166755/29/11235/74317/6047351aEc08085d7/482f82cc43e03597.jpg',
        sales:47,
        price:80.8,
        oldPrice:98.72
    }) */
    
    //查询某个商店某个tab的商品列表
    const shopId = '60ebec074c403b4ce0d01b88';
    const result = await Product.find({shopId,tabs:{$in:'新鲜水果'}}).sort({_id:-1})
    if(result.length===0) return;
    console.log('沃尔玛商店乳品烘焙分类的商品是：',result)


})();

console.log("成功执行")