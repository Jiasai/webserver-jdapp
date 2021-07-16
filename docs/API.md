# API(接口)设计

## 查询用户名

### url 
`/api/user/register:username`

### method  
`get`

### request body
无

### response body
```js
{
    errno:0,
    message:'errno !== 0 的话，报错提示信息'
}
```

## 注册

### url 
`/api/user/register`

### method  
`post`

### request body
```js
{
    username:'18633348621',
    password:'123sdf'
}
```

### response body
```js
{
    errno:0,
    message:'errno !== 0 的话，报错提示信息'
}
```
## 登录

### url 
`/api/user/login`

### method  
`post`

### request body
```js
{
    username:'18633348621',
    password:'123sdf'
}
```

### response body
```js
{
   errno:0,
   message:'errno !== 0 的话，报错提示信息'
}
```
## 获取用户信息

### url 
`/api/user/info`

### method  
`get`

### request body
无

### response body
```js
{
   errno:0,
   data:{
      username:'xxx' 
   },
   message:'errno !== 0 的话，报错提示信息'
}
```

## 创建收货地址

### url 
`/api/user/address`

### method  
`post`

### request body
```js
{
    city:'北京',
    department:'xxx小区',
    houseNumber:'门牌号',
    name:'张三',
    phone:'18677854562',
	defaultAddress:true
}
```

### response body
```js
{
   errno:0,
   data:{
       _id:'收货地址的 id',
       city:'北京',
       department:'xxx小区',
       houseNumber:'门牌号',
       name:'张三',
       phone:'18677854562',
	   defaultAddress:true,
       createdAt: Date,
       createdAt: Date
   }
   message:'errno !== 0 的话，报错提示信息'
}
```
## 获取收货地址列表

### url 
`/api/user/address`

### method  
`get`

### request body
无

### response body
```js
{
   errno:0,
   data:[
       {
         _id:'收货地址的 id',
         city:'北京',
         department:'xxx小区',
         houseNumber:'门牌号',
         name:'张三',
         phone:'18677854562',
		 defaultAddress:true,
         createdAt: Date,
         createdAt: Date
       },
       {
         _id:'收货地址的 id',
         city:'北京',
         department:'xxx小区',
         houseNumber:'门牌号',
         name:'张三',
         phone:'18677854562',
		 defaultAddress:true,
         createdAt: Date,
         createdAt: Date          
       }
   ]
   message:'errno !== 0 的错误信息'
}
```
## 获取单个收货地址

### url 
`/api/user/address/:id`(`:id`是一个动态参数，服务端可获取具体的参数值)
示例：`/api/user/address/101`

### method  
`get`

### request body
无

### response body
```js
{
   errno:0,
   data:{
       _id:'收货地址的 id',
       city:'北京',
       department:'xxx小区',
       houseNumber:'门牌号',
       name:'张三',
       phone:'18677854562',
	   defaultAddress:true,
       createdAt: Date,
       createdAt: Date       
   },
   message:'errno !== 0 的错误信息'
}
```
## 更新收货地址

### url 
`/api/user/address/:id`

### method  
`patch` （Restful API规范，更新数据用patch）

### request body
```js
{
     city:'北京',
     department:'xxx小区',
     houseNumber:'门牌号',
     name:'张三',
     phone:'18677854562',
	 defaultAddress:true
}
```

### response body
```js
{
   errno:0,
   message:'errno !== 0 的错误信息'
}
```
## 附近（热门）店铺

### url 
`/api/shop/hot-list`

### method  
`get`

### request body
无

### response body
```js
{
   errno:0,
   data:[
       {
           _id:'店铺id',
           name:'沃尔玛',
           imgUrl:'商品的图片url',
           sales:10000,//月售
           expressLimit:0,//起送价格
           expressPrice:5,//快递价格
           slogan:'VIP尊享满39元减4元运费券'
       }
   ]
   message:'errno !== 0 时错误信息'
}
```
## 商店详情

### url 
`/api/shop/:id`

### method  
`get`

### request body
无

### response body
```js
{
   errno:0,
   data:{
        _id:'店铺id',
        name:'沃尔玛',
        imgUrl:'商品的图片url',
        sales:10000,//月售
        expressLimit:0,//起送价格
        expressPrice:5,//快递价格
        slogan:'VIP尊享满39元减4元运费券'       
   }
   message:'errno !== 0时错误信息'
}
```
## 查询某个商店的商品列表

### url 
`/api/shop/:id/products`

### query
`tab=全部商品`
举例：`/api/shop/8/products?tab=全部商品`

### method  
`get`

### request body
无

### response body
```js
{
   errno:0,
   data:[
       {
           _id:'商品的id',
           name:'番茄250g / 份',
           imgUrl:'xxx.png',
           sales:153,
           price:36.8,
           oldPrice:49.8
       }
   ]
   message:'errno !== 0时错误信息'
}
```
## 创建订单

### url 
`/api/order`

### method  
`post`

### request body
```js
{
    username:'18677568425', 
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

### response body
```js
{
   errno:0,
   data:{
       _id:'订单的 id'
   },
   message:'errno !==0 时错误信息'
}
```
## 查询订单列表

### url 
`/api/order`

### method  
`get`

### request body
无

### response body
```js
{
   errno:0,
   data:[
       {
       _id:'订单的 id',
        username:'13816431250', 
        addressId:'收货地址的 id ',
        shopId:'商店的id',
        shopName:'沃尔玛',
        isCanceled:false,//订单是否被取消
        address:{
           username:"13816431250",city:"上海市",
           department:"甜水园东街7号道家园小区",
           houseNumber:"8栋306",
           name:"韩梅梅",
           phone:"13826581688" 
        },
        products:[
            {
                product:{
                   tabs:["全部商品","新鲜水果"],
                   shopId:"60ebec074c403b4ce0d01b88",
                   name:"甘肃苹果 2kg",imgUrl:"https://img30.360buyimg.com/n1//s160x160_jfs/t1/172941/22/14122/47483/...",sales:28,
                   price:36.5,
                   oldPrice:49.8 
                },
                orderSales:3
            }
        ]
      }
   ],
   message:'errno !==0 时错误信息'
}
```





