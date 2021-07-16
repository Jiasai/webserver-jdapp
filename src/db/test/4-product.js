/**
 * @description 商品数据操作
 * @author Masion
*/

const Product = require('../../models/Product')

!(async()=>{

    // tabs:['全部商品','乳品烘焙','新鲜水果','品质蔬菜','肉禽蛋类','速冻食品'],
    //创建几个商品
    /* 
    await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','fruit'],
        name: "Member's Mark 网纹瓜 2个",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/172323/31/14112/54776/60c2d570Ebe61edc7/dffc8a4e8de3668c.jpg",
				sales: 9,
				price: 39.8,
				oldPrice: 47.76
    })
    await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','fruit'],
				name: "甘肃苹果 2kg",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/172941/22/14122/47483/60c21cb9E5a9d4437/9de1725c51512fb8.jpg",
				sales: 28,
				price: 36.5,
				oldPrice: 49.8
    })
    await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','fruit'],
				name: "菲律宾进口 超甜蕉 1袋 1.4kg",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/189011/11/7603/49121/60c21f30E4d7163de/58bcf1f84621eea8.jpg",
				sales: 102,
				price: 19.8,
				oldPrice: 23.88
    })
    await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','fruit'],
				name: "Member's Mark 车厘茄（樱桃番茄）1.25kg",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/117802/7/3683/140717/5ea9402eE49a5551b/c71133ec9d6d7b42.jpg",
				sales: 10,
				price: 24.8,
				oldPrice: 29.76
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','cake'],
				name: "Member's Mark 葡式蛋挞 9个装",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/196589/10/7417/72543/60c1b1ffEeceb2306/fae9d8a66aa26e87.jpg",
				sales: 36,
				price: 35.8,
				oldPrice: 42.96
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','cake'],
				name: "Member's Mark 玛德琳蛋糕 24个",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/161059/32/17985/60440/6073de9cEd2326a11/2e77be93965d1d33.jpg",
				sales: 19,
				price: 69.8,
				oldPrice: 83.76
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','cake'],
				name: "Member's Mark 提子蔓越莓司康 7个",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/174615/28/3521/98497/6073de6fEceed3d57/7bf8b524b064b823.jpg",
				sales: 44,
				price: 42.8,
				oldPrice: 51.36
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','vegetables'],
				name: "昶裕隆 牛心包 750g",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/153186/6/14678/83225/5ffea1deEcbe23130/a95d5103f04f36ea.jpg",
				sales: 39,
				price: 12.8,
				oldPrice: 16.68
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','vegetables'],
				name: "宁夏有机菜心 600g",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/184921/3/5611/54140/60ab04b2Ec7b5a33b/ce802fb0bec2680e.jpg",
				sales: 9,
				price: 14.8,
				oldPrice: 17.76
    })
    await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','vegetables'],
				name: "东升 杭白菜苗 600g/份",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/156143/11/5860/55933/5ffea204E74508fe6/499b0077f146659d.jpg",
				sales: 74,
				price: 12.4,
				oldPrice: 18.9
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','vegetables'],
				name: "昶裕隆 透心红胡萝卜 1kg",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/169266/11/4400/34212/600f8c7dE081e9bc8/99b28fe289ca715f.jpg",
				sales: 186,
				price: 9.8,
				oldPrice: 15.3
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','vegetables'],
				name: "Member's Mark 有机土豆 800g",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/194850/10/6767/48799/60bd8c15E58db2ca8/c460d0b5e598d90a.jpg",
				sales: 146,
				price: 10.2,
				oldPrice: 19.9
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','vegetables'],
				name: "Member's Mark 香菇 320g",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/183317/17/8040/61132/60bf1d6aE436d7775/8367264c6e24c1f3.jpg",
				sales: 83,
				price: 12.3,
				oldPrice: 18.96
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','meat'],
				name: "澳洲进口 澳洲肥牛火锅片 900g",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/166755/29/11235/74317/6047351aEc08085d7/482f82cc43e03597.jpg",
				sales: 47,
				price: 80.8,
				oldPrice: 98.72
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','meat'],
				name: "特大号鲜鸡蛋 1.2kg 20枚",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/182111/26/8545/53958/60c21f32Ee02ce557/32b7b2ff457776f9.jpg",
				sales: 39,
				price: 34.5,
				oldPrice: 42.96
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','meat'],
				name: "黑猪腿肉 1.1kg",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/168097/11/11415/61773/604736c7E991944ce/6ca7a55f794688c7.jpg",
				sales: 77,
				price: 55.2,
				oldPrice: 68.16
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','frozen'],
				name: "吴大嫂 黄瓜鸡蛋木耳馅水饺 2kg",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/166326/24/4/55781/5fec1c0fE21eab9dc/8d4064db479ac64b.jpg",
				sales: 13,
				price: 40.12,
				oldPrice: 58.56
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','frozen'],
				name: "哈根达斯（Haagen-Dazs） 夏威夷果仁 品脱  392g*2杯",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/120105/38/7166/100439/5f0ea1a0E74025f46/6d7bc97f72a6a607.jpg",
				sales: 9,
				price: 118,
				oldPrice: 151
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','frozen'],
				name: "Member's Mark 潮汕牛肉丸 700g(350g*2)/份",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/133812/34/17583/51022/60b6ed2fEc2e16c2a/e4f40df8bc4b45e7.jpg",
				sales: 16,
				price: 91.6,
				oldPrice: 102.68
    })
  await Product.create({
        shopId:'60f1e8d24241ca45e82afac8',
        tabs:['all','frozen'],
				name: "鲜香小龙虾 1.2kg(600g*2盒)",
				imgUrl: "https://img30.360buyimg.com/n1//s160x160_jfs/t1/178505/30/7898/60830/60bdbed8E7fad405b/3777d958a62b276c.jpg",
				sales: 29,
				price: 115.6,
				oldPrice: 153.86
    })

 */

    //查询某个商店某个tab的商品列表
    const shopId = '60f1e8d24241ca45e82afac8'
    const shopId2 = '60f1e8d24241ca45e82afacb'
    const shopId3 = '60f1e8d24241ca45e82afacd'
    const shopId4 = '60f1e8d24241ca45e82afacf'

    const productList = await Product.find({shopId}).sort({updatedAt:-1});
    for (const item of productList) { //批量复制，创建
        item.shopId = shopId2;
        const {
            tabs,
            shopId,
            name,
            imgUrl,
            sales,
            price,
            oldPrice
          }=item;
        await Product.create({
            tabs,
            shopId,
            name,
            imgUrl,
            sales,
            price,
            oldPrice
          });
    }

    //批量更新
    //const result = await Product.updateMany({shopId,tabs:{$in:'frozen'}},{tabs:["all","frozen"]},{})
    // if(result.length===0) return;
    // console.log('沃尔玛商店乳品烘焙分类的商品是：',result)


})();

console.log("成功执行")