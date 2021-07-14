/**
 * @description shop router
 * @author Masion
 */

const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require("../res-model");

//Shop和Product 的controller方法
const { getShopList, getShopById, getShopProductList } = require("../controller/Shop")

//路由前缀
router.prefix('/api/shop')

//附近（热门）店铺路由
router.get("/hot-list", async (ctx, next) => {
    //查询商店列表
    const resultList = await getShopList();
    ctx.body = new SuccessModel(resultList)
})


//单个商店详情
router.get("/:id", async (ctx, next) => {
    const id = ctx.params.id;
    //获取单个商店详情
    const resultShop = await getShopById(id)
    ctx.body = new SuccessModel(resultShop)
})


//某个商店的商品列表
router.get("/:id/products", async (ctx, next) => {
    const query = ctx.query;  //url参数
    const id = ctx.params.id; //店铺id
    //从数据库获取商店商品列表
    const productList = await getShopProductList(id, query?.tabs);

    ctx.body = new SuccessModel(productList);
})

//导出
module.exports = router