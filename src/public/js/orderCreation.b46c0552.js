(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderCreation"],{"45e3":function(e,t,s){"use strict";s("5dab")},"480d":function(e,t,s){"use strict";s("b6c3")},"54ce":function(e,t,s){"use strict";s("7ff7")},"5dab":function(e,t,s){},"656c":function(e,t,s){},"7ff7":function(e,t,s){},"83fb":function(e,t,s){"use strict";s("656c")},b037:function(e,t,s){"use strict";s.r(t);var a=s("7a23"),c=Object(a["O"])("data-v-0cd829c8");Object(a["y"])("data-v-0cd829c8");var n={class:"main"},o={class:"shopBootomBar"},d={class:"shopBootomBar__cartTotal"},r=Object(a["g"])(" 实付金额："),i=Object(a["h"])("i",null,"¥",-1),u={key:0,class:"shopBootomBar__orderButton nullClick"},l=Object(a["h"])("div",{class:"pagetopBg"},null,-1),b=Object(a["h"])("div",{class:"pageMainBg"},null,-1);Object(a["w"])();var h=c((function(e,t,s,c,h,O){var p,j,v=Object(a["C"])("top-title"),f=Object(a["C"])("Address"),w=Object(a["C"])("shop-cart"),_=Object(a["C"])("order-popup");return Object(a["v"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(v,{whiteColor:!0,pageTitle:"确认订单"}),Object(a["h"])("div",n,[Object(a["h"])(f,{address:c.address,handlePushTo:c.handlePushTo},null,8,["address","handlePushTo"]),Object(a["h"])(w,{shopId:c.shopId},null,8,["shopId"])]),c.showMask?(Object(a["v"])(),Object(a["e"])(_,{key:0,closeMask:c.handleShowMask,addressId:c.addressId},null,8,["closeMask","addressId"])):Object(a["f"])("",!0),Object(a["h"])("div",o,[Object(a["h"])("div",d,[r,Object(a["h"])("span",null,[i,Object(a["g"])(Object(a["E"])(c.calculations.price),1)])]),null!==(p=c.address)&&void 0!==p&&p.city?Object(a["f"])("",!0):(Object(a["v"])(),Object(a["e"])("div",u," 提交订单 ")),null!==(j=c.address)&&void 0!==j&&j.city?(Object(a["v"])(),Object(a["e"])("div",{key:1,class:"shopBootomBar__orderButton",onClick:t[1]||(t[1]=function(){return c.handleShowMask()})}," 提交订单 ")):Object(a["f"])("",!0)]),l,b],64)})),O=s("b85c"),p=s("1da1"),j=(s("96cf"),s("6c02")),v=s("dea4"),f=s("6ec8"),w=s("1871"),_=(s("99af"),s("b0c0"),Object(a["O"])("data-v-9de09886"));Object(a["y"])("data-v-9de09886");var m={class:"address__left"},k=Object(a["h"])("div",{class:"address__title"},"默认收货地址",-1),I={key:0,class:"address__text",style:{color:"#d60a0a"}},g={key:1,class:"address__content"},y={key:2,class:"address__text"},M={class:"address__text__name"},T={class:"address__text__phone"},C=Object(a["h"])("div",{class:"address__right"},[Object(a["h"])("span",{class:"iconfont icon-fanhui1"})],-1);Object(a["w"])();var S=_((function(e,t,s,c,n,o){var d,r,i;return Object(a["v"])(),Object(a["e"])("div",{class:"address",onClick:t[1]||(t[1]=function(){return s.handlePushTo&&s.handlePushTo.apply(s,arguments)})},[Object(a["h"])("div",m,[k,null!==(d=s.address)&&void 0!==d&&d.city?Object(a["f"])("",!0):(Object(a["v"])(),Object(a["e"])("p",I,"暂无地址，去新建地址 ")),null!==(r=s.address)&&void 0!==r&&r.city?(Object(a["v"])(),Object(a["e"])("p",g,Object(a["E"])("".concat(s.address.city).concat(s.address.department).concat(s.address.houseNumber)),1)):Object(a["f"])("",!0),null!==(i=s.address)&&void 0!==i&&i.city?(Object(a["v"])(),Object(a["e"])("p",y,[Object(a["h"])("span",M,Object(a["E"])(s.address.name),1),Object(a["h"])("span",T,Object(a["E"])(s.address.phone),1)])):Object(a["f"])("",!0)]),C])})),B={name:"Address",props:["address","handlePushTo"]};s("480d");B.render=S,B.__scopeId="data-v-9de09886";var P=B,x=Object(a["O"])("data-v-314c4bd9");Object(a["y"])("data-v-314c4bd9");var A={key:1,class:"popup"},L=Object(a["h"])("div",{class:"popup__title"},"进入收银台",-1),E=Object(a["h"])("div",{class:"popup__notice"},"请尽快完成支付，否则将被取消",-1),N={class:"popup__button"};Object(a["w"])();var R=x((function(e,t,s,c,n,o){var d=Object(a["C"])("Toast");return Object(a["v"])(),Object(a["e"])(a["a"],null,[c.showmask?(Object(a["v"])(),Object(a["e"])("div",{key:0,class:"mask",onClick:t[1]||(t[1]=function(){return s.closeMask()})})):Object(a["f"])("",!0),c.showmask?(Object(a["v"])(),Object(a["e"])("div",A,[L,E,Object(a["h"])("div",N,[Object(a["h"])("div",{class:"popup__button__cancel",onClick:t[2]||(t[2]=function(){return c.handleSubmitOrder(!1)})},"待会支付"),Object(a["h"])("div",{class:"popup__button__confirm",onClick:t[3]||(t[3]=function(){return c.handleSubmitOrder(!0)})},"立即支付")])])):Object(a["f"])("",!0),c.show?(Object(a["v"])(),Object(a["e"])(d,{key:2,message:c.toastMessage,iconstate:c.iconstate,showIcon:c.showIcon},null,8,["message","iconstate","showIcon"])):Object(a["f"])("",!0)],64)})),J=s("b775"),z=s("c537"),F=function(e,t,s,c,n,o){var d=Object(j["d"])(),r=Object(a["A"])(!0),i=function(){var a=Object(p["a"])(regeneratorRuntime.mark((function a(i){var u,l,b,h,p,j;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:u=[],l=Object(O["a"])(s);try{for(l.s();!(b=l.n()).done;)h=b.value,p={},p.id=h._id,p.num=h.count,u.push(p)}catch(v){l.e(v)}finally{l.f()}return a.prev=3,a.next=6,Object(J["d"])("/api/order",{addressId:o,shopId:e,shopName:t.shopName,isCanceled:i,products:u});case 6:j=a.sent,0===(null===j||void 0===j?void 0:j.errno)?(r.value=!1,localStorage.shopNull=!0,n(i?"支付成功":"订单已提交，请尽快支付","success"),c(e),setTimeout((function(){i?d.push({name:"Order"}):d.push("/shop/".concat(e))}),1800)):n("提交失败","defeat"),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](3),n("订单提交失败","defeat");case 13:case"end":return a.stop()}}),a,null,[[3,10]])})));return function(e){return a.apply(this,arguments)}}();return{handleSubmitOrder:i,showmask:r}},q={name:"OrderPopup",props:["closeMask","addressId"],components:{Toast:z["a"]},setup:function(e){var t=Object(v["a"])(),s=t.shopId,a=t.cartList,c=t.clearCart,n=Object(v["c"])(s,a),o=n.ShopInfos,d=n.cartProductList,r=Object(z["b"])(),i=r.show,u=r.toastMessage,l=r.showToast,b=r.iconstate,h=r.showIcon,O=F(s,o.value,d.value,c,l,e.addressId),p=O.handleSubmitOrder,j=O.showmask;return{handleSubmitOrder:p,showmask:j,show:i,toastMessage:u,showToast:l,iconstate:b,showIcon:h}}};s("54ce");q.render=R,q.__scopeId="data-v-314c4bd9";var D=q,G=function(){var e=Object(j["d"])(),t=Object(a["A"])({}),s=Object(a["A"])(""),c=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var a,c,n,o,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(J["a"])("/api/user/address");case 3:if(c=e.sent,0===(null===c||void 0===c?void 0:c.errno)&&(null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.length)>=1){n=Object(O["a"])(c.data);try{for(n.s();!(o=n.n()).done;)d=o.value,null!==d&&void 0!==d&&d.defaultAddress&&(t.value=d,s.value=d._id)}catch(r){n.e(r)}finally{n.f()}}e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),n=function(){e.push("/address")};return{address:t,getAddressList:c,handlePushTo:n,addressId:s}},H=function(){var e=Object(a["A"])(!1),t=function(){e.value=!e.value};return{showMask:e,handleShowMask:t}},K={name:"OrderCreation",components:{TopTitle:f["a"],ShopCart:w["a"],Address:P,OrderPopup:D},setup:function(){Object(v["b"])();var e=Object(v["a"])(),t=e.shopId,s=e.cartList,a=e.calculations,c=H(),n=c.showMask,o=c.handleShowMask,d=G(),r=d.address,i=d.getAddressList,u=d.handlePushTo,l=d.addressId;return i(),{shopId:t,cartList:s,calculations:a,showMask:n,handleShowMask:o,address:r,handlePushTo:u,addressId:l}}};s("45e3");K.render=h,K.__scopeId="data-v-0cd829c8";t["default"]=K},b6c3:function(e,t,s){},c537:function(e,t,s){"use strict";s.d(t,"b",(function(){return r}));var a=s("7a23"),c=Object(a["O"])("data-v-a8bd786c");Object(a["y"])("data-v-a8bd786c");var n={class:"toast"},o={class:"toast-text"};Object(a["w"])();var d=c((function(e,t,s,c,d,r){return Object(a["v"])(),Object(a["e"])("div",n,[s.showIcon?(Object(a["v"])(),Object(a["e"])("span",{key:0,class:s.iconstate},null,2)):Object(a["f"])("",!0),Object(a["h"])("span",o,Object(a["E"])(s.message),1)])})),r=function(){var e=Object(a["z"])({show:!1,toastMessage:"",icon:{success:"iconfont icon-chenggong2",defeat:"iconfont icon-shibai1"},iconstate:"",showIcon:!1}),t=function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";s||(e.showIcon=!1),void 0!==e.icon[s]&&(e.showIcon=!0,e.iconstate=e.icon[s]),e.show=!0,e.toastMessage=t,setTimeout((function(){e.show=!1,e.showIcon=!1,e.toastMessage=""}),1800)},s=Object(a["F"])(e),c=s.show,n=s.toastMessage,o=s.iconstate,d=s.showIcon;return{show:c,toastMessage:n,showToast:t,iconstate:o,showIcon:d}},i={name:"Toast",props:["message","iconstate","showIcon"]};s("83fb");i.render=d,i.__scopeId="data-v-a8bd786c";t["a"]=i}}]);
//# sourceMappingURL=orderCreation.b46c0552.js.map