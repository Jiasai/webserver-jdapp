(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderCreation"],{"00bc":function(t,e,a){},"091c":function(t,e,a){"use strict";a("00bc")},"4b92":function(t,e,a){},"656c":function(t,e,a){},"6f57":function(t,e,a){"use strict";a("ce88")},"83fb":function(t,e,a){"use strict";a("656c")},b037:function(t,e,a){"use strict";a.r(e);var s=a("7a23"),c=Object(s["P"])("data-v-228409cd");Object(s["z"])("data-v-228409cd");var o={class:"main"},n={class:"shopBootomBar"},r={class:"shopBootomBar__cartTotal"},i=Object(s["h"])(" 实付金额："),d=Object(s["i"])("i",null,"¥",-1),u=Object(s["i"])("div",{class:"pagetopBg"},null,-1),b=Object(s["i"])("div",{class:"pageMainBg"},null,-1);Object(s["x"])();var l=c((function(t,e,a,c,l,p){var O=Object(s["D"])("top-title"),h=Object(s["D"])("Address"),f=Object(s["D"])("shop-cart"),v=Object(s["D"])("order-popup");return Object(s["w"])(),Object(s["e"])(s["a"],null,[Object(s["i"])(O,{whiteColor:!0,pageTitle:"确认订单"}),Object(s["i"])("div",o,[Object(s["i"])(h),Object(s["i"])(f,{shopId:c.shopId},null,8,["shopId"])]),c.showMask?(Object(s["w"])(),Object(s["e"])(v,{key:0,closeMask:c.handleShowMask},null,8,["closeMask"])):Object(s["f"])("",!0),Object(s["i"])("div",n,[Object(s["i"])("div",r,[i,Object(s["i"])("span",null,[d,Object(s["h"])(Object(s["F"])(c.calculations.price),1)])]),Object(s["i"])("div",{class:"shopBootomBar__orderButton",onClick:e[1]||(e[1]=function(){return c.handleShowMask()})}," 提交订单 ")]),u,b],64)})),p=a("dea4"),O=a("6ec8"),h=a("1871"),f=Object(s["P"])("data-v-3324f9f8");Object(s["z"])("data-v-3324f9f8");var v={class:"address"},j=Object(s["g"])('<div class="address__left" data-v-3324f9f8><div class="address__title" data-v-3324f9f8>收货地址</div><p class="address__content" data-v-3324f9f8>北京理工大学国防科技园2号楼10层</p><p class="address__text" data-v-3324f9f8><span class="address__textP__name" data-v-3324f9f8>瑶妹（先生）</span><span class="address__text__phone" data-v-3324f9f8>18911024266</span></p></div><div class="address__right" data-v-3324f9f8><span class="iconfont icon-fanhui1" data-v-3324f9f8></span></div>',2);Object(s["x"])();var w=f((function(t,e,a,c,o,n){return Object(s["w"])(),Object(s["e"])("div",v,[j])})),_={name:"Address"};a("091c");_.render=w,_.__scopeId="data-v-3324f9f8";var m=_,k=Object(s["P"])("data-v-1e65a770");Object(s["z"])("data-v-1e65a770");var g={key:1,class:"popup"},I=Object(s["i"])("div",{class:"popup__title"},"进入收银台",-1),M=Object(s["i"])("div",{class:"popup__notice"},"请尽快完成支付，否则将被取消",-1),S={class:"popup__button"};Object(s["x"])();var T=k((function(t,e,a,c,o,n){var r=Object(s["D"])("Toast");return Object(s["w"])(),Object(s["e"])(s["a"],null,[c.showmask?(Object(s["w"])(),Object(s["e"])("div",{key:0,class:"mask",onClick:e[1]||(e[1]=function(){return a.closeMask()})})):Object(s["f"])("",!0),c.showmask?(Object(s["w"])(),Object(s["e"])("div",g,[I,M,Object(s["i"])("div",S,[Object(s["i"])("div",{class:"popup__button__cancel",onClick:e[2]||(e[2]=function(){return c.handleSubmitOrder(!1)})},"待会支付"),Object(s["i"])("div",{class:"popup__button__confirm",onClick:e[3]||(e[3]=function(){return c.handleSubmitOrder(!0)})},"立即支付")])])):Object(s["f"])("",!0),c.show?(Object(s["w"])(),Object(s["e"])(r,{key:2,message:c.toastMessage,iconstate:c.iconstate,showIcon:c.showIcon},null,8,["message","iconstate","showIcon"])):Object(s["f"])("",!0)],64)})),x=a("b85c"),B=a("1da1"),C=(a("96cf"),a("6c02")),y=a("b775"),P=a("c537"),D=function(t,e,a,c,o){var n=Object(C["d"])(),r=Object(s["B"])(!0),i=function(){var s=Object(B["a"])(regeneratorRuntime.mark((function s(i){var d,u,b,l,p,O;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:d=[],u=Object(x["a"])(a);try{for(u.s();!(b=u.n()).done;)l=b.value,p={},p.id=l._id,p.num=l.count,d.push(p)}catch(h){u.e(h)}finally{u.f()}return s.prev=3,s.next=6,Object(y["d"])("/api/order",{addressId:"60ebe08736774544a4bf0071",shopId:t,shopName:e.shopName,isCanceled:i,products:d});case 6:O=s.sent,0===(null===O||void 0===O?void 0:O.errno)?(r.value=!1,localStorage.shopNull=!0,o(i?"支付成功":"订单已提交，请尽快支付","success"),c(t),setTimeout((function(){i?n.push({name:"Order"}):n.push("/shop/".concat(t))}),1800)):o("提交失败","defeat"),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](3),o("订单提交失败","defeat");case 13:case"end":return s.stop()}}),s,null,[[3,10]])})));return function(t){return s.apply(this,arguments)}}();return{handleSubmitOrder:i,showmask:r}},z={name:"OrderPopup",props:["closeMask"],components:{Toast:P["a"]},setup:function(){var t=Object(p["a"])(),e=t.shopId,a=t.cartList,s=t.clearCart,c=Object(p["c"])(e,a),o=c.ShopInfos,n=c.cartProductList,r=Object(P["b"])(),i=r.show,d=r.toastMessage,u=r.showToast,b=r.iconstate,l=r.showIcon,O=D(e,o.value,n.value,s,u),h=O.handleSubmitOrder,f=O.showmask;return{handleSubmitOrder:h,showmask:f,show:i,toastMessage:d,showToast:u,iconstate:b,showIcon:l}}};a("e077");z.render=T,z.__scopeId="data-v-1e65a770";var A=z,L=function(){var t=Object(s["B"])(!1),e=function(){t.value=!t.value};return{showMask:t,handleShowMask:e}},N={name:"OrderCreation",components:{TopTitle:O["a"],ShopCart:h["a"],Address:m,OrderPopup:A},setup:function(){Object(p["b"])();var t=Object(p["a"])(),e=t.shopId,a=t.cartList,s=t.calculations,c=L(),o=c.showMask,n=c.handleShowMask;return{shopId:e,cartList:a,calculations:s,showMask:o,handleShowMask:n}}};a("6f57");N.render=l,N.__scopeId="data-v-228409cd";e["default"]=N},c537:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var s=a("7a23"),c=Object(s["P"])("data-v-a8bd786c");Object(s["z"])("data-v-a8bd786c");var o={class:"toast"},n={class:"toast-text"};Object(s["x"])();var r=c((function(t,e,a,c,r,i){return Object(s["w"])(),Object(s["e"])("div",o,[a.showIcon?(Object(s["w"])(),Object(s["e"])("span",{key:0,class:a.iconstate},null,2)):Object(s["f"])("",!0),Object(s["i"])("span",n,Object(s["F"])(a.message),1)])})),i=function(){var t=Object(s["A"])({show:!1,toastMessage:"",icon:{success:"iconfont icon-chenggong2",defeat:"iconfont icon-shibai1"},iconstate:"",showIcon:!1}),e=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a||(t.showIcon=!1),void 0!==t.icon[a]&&(t.showIcon=!0,t.iconstate=t.icon[a]),t.show=!0,t.toastMessage=e,setTimeout((function(){t.show=!1,t.showIcon=!1,t.toastMessage=""}),1800)},a=Object(s["G"])(t),c=a.show,o=a.toastMessage,n=a.iconstate,r=a.showIcon;return{show:c,toastMessage:o,showToast:e,iconstate:n,showIcon:r}},d={name:"Toast",props:["message","iconstate","showIcon"]};a("83fb");d.render=r,d.__scopeId="data-v-a8bd786c";e["a"]=d},ce88:function(t,e,a){},e077:function(t,e,a){"use strict";a("4b92")}}]);
//# sourceMappingURL=orderCreation.5b0610d8.js.map