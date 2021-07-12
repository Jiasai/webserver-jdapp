# 数据模型设计
列举各个数据模型的示例，写明属性
## 用户
```js
{
    _id:'xxx',
    username:'18677568425', //唯一
    password:'zjs123'
}
```

## 地址
```js
{
    _id:'xxx',
    username:'18677568425',//和用户产生关联
    city:'北京',
    department:'xxx小区',
    houseNumber:'门牌号',
    name:'张三',
    phone:'18677854562'
}
```

## 商店
```js
{
    _id:'xxx',
    name:'沃尔玛',
    imgUrl:'商品的图片url',
    sales:10000,//月售
    expressLimit:0,//起送价格
    expressPrice:5,//快递价格
    slogan:'VIP尊享满39元减4元运费券' 
}
```

## 商品
```js
{
    _id:'xxx',
    shopId:'xxxx',//对应商店的_id
    tabs:['all','fruits'],//左侧tab类型
    name:'番茄250g / 份',
    imgUrl:'xxx.png',
    sales:153,
    price:36.8,
    oldPrice:49.8
}
```

## 订单
```js
{
    _id:'xxx',
    addressId:'收货地址的 id ',
    shopId:'商店的id',
    shopName:'沃尔玛',
    isCanceled:false,//订单是否被取消
    products:[
        {
            _id:'商品1 id',
            num:3 //购买数量
        },
        {
            _id:'商品2 id',
            num:5 //购买数量
        }
    ]
}
```



