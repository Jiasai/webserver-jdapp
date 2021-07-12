/**
 * @description 地址数据操作
 * @author Masion
*/

const Address = require('../../models/Address');

!(async()=>{

    //创建1个收货地址
   /*  await Address.create({
        username:"13816431250",
        city:'北京市',
        department:'昌平区展思门路50号佳美小区',
        houseNumber:'12栋1204',
        name:'韩梅梅',
        phone:'13826581688'
    }) */

    //获取用户的收货地址列表
    //{updatedAt:-1}根据更新时间排序，最新的在最上面
  /*   const addressList = await Address.find({username:"13816431250"}).sort({updatedAt:-1})
  console.log('用户的收货地址是：',addressList) */

    //根据id 获取单个收货地址
  /*   const id = '60ebe1924400a12b1cb991f0';

    const addressInfo = await Address.findById(id);

    console.log('id的地址是：',addressInfo)
 */

    //根据 id 更新收货地址
    const id = '60ebe08736774544a4bf0071';
    const newData={       
        department: '昌朝阳区甜水园东街7号道家园小区',
        houseNumber: '8栋306',
        name: '韩梅梅',
        phone: '13826581688'
    }
    const result = await Address.findOneAndUpdate(
        {_id:id},
        newData,
        {new:true} //返回更新后的最新数据
    )    
    console.log('更新后的地址：',result)


})();

console.log("顺利执行")