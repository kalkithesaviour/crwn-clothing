(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),c=n.n(a),i=n(33),s=n.n(i),l=n(17),o=n(8),u=n(50),d=n(18),b=n(32),p=(n(64),n(51)),m=n.n(p),h=n(4),j="SET_CURRENT_USER",g={currentUser:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(h.a)(Object(h.a)({},e),{},{currentUser:t.payload});default:return e}},f={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},v=n(54),x=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(v.a)(e),[Object(h.a)(Object(h.a)({},t),{},{quantity:1})])},y=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity-1}):e}))},w={hidden:!0,cartItems:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.TOGGLE_CART_HIDDEN:return Object(h.a)(Object(h.a)({},e),{},{hidden:!e.hidden});case f.ADD_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:x(e.cartItems,t.payload)});case f.REMOVE_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:y(e.cartItems,t.payload)});case f.CLEAR_ITEM_FROM_CART:return Object(h.a)(Object(h.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},N={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},C={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={key:"root",storage:m.a,whitelist:["cart"]},T=Object(d.c)({user:O,cart:k,directory:E,shop:U}),S=Object(b.a)(I,T);var A=Object(d.d)(S,d.a.apply(void 0,[])),M=Object(b.b)(A),P=(b.b,n(67),n(14)),R=n.n(P),B=n(20),_=n(26),D=n(27),G=n(29),H=n(28),L=n(9),q=n(6),W=(n(69),n(21)),V=Object(q.a)([function(e){return e.directory}],(function(e){return e.sections})),z=(n(70),Object(L.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,s=e.match;return Object(r.jsxs)("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(s.url).concat(i))},children:[Object(r.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),F=(n(72),Object(q.b)({sections:V})),J=Object(o.b)(F)((function(e){var t=e.sections;return Object(r.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(W.a)(e,["id"]);return Object(r.jsx)(z,Object(h.a)({},n),t)}))})})),K=(n(73),function(){return Object(r.jsx)("div",{className:"homepage",children:Object(r.jsx)(J,{})})}),Q=(n(74),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(W.a)(e,["children","isGoogleSignIn","inverted"]);return Object(r.jsx)("button",Object(h.a)(Object(h.a)({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),{},{children:t}))}),Y=function(){return{type:f.TOGGLE_CART_HIDDEN}},X=function(e){return{type:f.ADD_ITEM,payload:e}},Z=(n(75),Object(o.b)(null,(function(e){return{addItem:function(t){return e(X(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return Object(r.jsxs)("div",{className:"collection-item",children:[Object(r.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(r.jsxs)("div",{className:"collection-footer",children:[Object(r.jsx)("span",{className:"name",children:a}),Object(r.jsx)("span",{className:"price",children:c})]}),Object(r.jsx)(Q,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),$=(n(76),function(e){var t=e.title,n=e.items;return Object(r.jsxs)("div",{className:"collection-preview",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(r.jsx)(Z,{item:e},e.id)}))})]})}),ee=Object(q.a)([function(e){return e.shop}],(function(e){return e.collections})),te=Object(q.a)([ee],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),ne=(n(77),Object(q.b)({collections:te})),re=Object(o.b)(ne)((function(e){var t=e.collections;return Object(r.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(W.a)(e,["id"]);return Object(r.jsx)($,Object(h.a)({},n),t)}))})})),ae=(n(78),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(q.a)([ee],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return Object(r.jsxs)("div",{className:"collection-page",children:[Object(r.jsx)("h2",{className:"title",children:n}),Object(r.jsx)("div",{className:"items",children:a.map((function(e){return Object(r.jsx)(Z,{item:e},e.id)}))})]})}))),ce=function(e){var t=e.match;return Object(r.jsxs)("div",{className:"shop-page",children:[Object(r.jsx)(L.b,{exact:!0,path:"".concat(t.path),component:re}),Object(r.jsx)(L.b,{path:"".concat(t.path,"/:collectionId"),component:ae})]})},ie=n(25),se=(n(79),function(e){var t=e.handleChange,n=e.label,a=Object(W.a)(e,["handleChange","label"]);return Object(r.jsxs)("div",{className:"group",children:[Object(r.jsx)("input",Object(h.a)({className:"form-input",onChange:t},a)),n?Object(r.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:n}):null]})}),le=n(30);n(80),n(82);le.a.initializeApp({apiKey:"AIzaSyBzFwFKSZ9sqwaG41f-oJ2FiHGXuAKRkZM",authDomain:"crwn-clothing-400c3.firebaseapp.com",databaseURL:"https://crwn-clothing-400c3.firebaseio.com",projectId:"crwn-clothing-400c3",storageBucket:"crwn-clothing-400c3.appspot.com",messagingSenderId:"202317664991",appId:"1:202317664991:web:8e1df8db185d8ceb8c4f6a",measurementId:"G-8H77T4VPLH"});var oe=function(){var e=Object(B.a)(R.a.mark((function e(t,n){var r,a,c,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=de.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(h.a)({displayName:a,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),ue=le.a.auth(),de=le.a.firestore(),be=new le.a.auth.GoogleAuthProvider;be.setCustomParameters({prompt:"select_account"});var pe=function(){return ue.signInWithPopup(be)},me=(le.a,n(84),function(e){Object(G.a)(n,e);var t=Object(H.a)(n);function n(e){var r;return Object(_.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(B.a)(R.a.mark((function e(t){var n,a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,a=n.email,c=n.password,e.prev=2,e.next=5,ue.signInWithEmailAndPassword(a,c);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,a=t.name;r.setState(Object(ie.a)({},a,n))},r.state={email:"",password:""},r}return Object(D.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"sign-in",children:[Object(r.jsx)("h2",{children:"I already have an account"}),Object(r.jsx)("span",{children:"Sign in with your email and password"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)(se,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(r.jsx)(se,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(Q,{type:"submit",children:" Sign in "}),Object(r.jsx)(Q,{onClick:pe,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(c.a.Component)),he=(n(85),function(e){Object(G.a)(n,e);var t=Object(H.a)(n);function n(){var e;return Object(_.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(B.a)(R.a.mark((function t(n){var r,a,c,i,s,l,o;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,a=r.displayName,c=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,ue.createUserWithEmailAndPassword(c,i);case 8:return l=t.sent,o=l.user,t.next=12,oe(o,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(ie.a)({},r,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(D.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return Object(r.jsxs)("div",{className:"sign-up",children:[Object(r.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(r.jsx)("span",{children:"Sign up with your email and password"}),Object(r.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(r.jsx)(se,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(r.jsx)(se,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(r.jsx)(se,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),Object(r.jsx)(se,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(r.jsx)(Q,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(c.a.Component)),je=(n(86),function(){return Object(r.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(r.jsx)(me,{}),Object(r.jsx)(he,{})]})}),ge=(n(87),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:f.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(X(t))},removeItem:function(t){return e(function(e){return{type:f.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,s=t.imageUrl,l=t.price,o=t.quantity;return Object(r.jsxs)("div",{className:"checkout-item",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{src:s,alt:"item"})}),Object(r.jsx)("span",{className:"name",children:i}),Object(r.jsxs)("span",{className:"quantity",children:[Object(r.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276e"}),Object(r.jsx)("span",{className:"value",children:o}),Object(r.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276f"})]}),Object(r.jsx)("span",{className:"price",children:l}),Object(r.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),Oe=n(52),fe=n.n(Oe),ve=n(53),xe=n.n(ve),ye=function(e){var t=e.price,n=100*t;return Object(r.jsx)(fe.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){xe()({url:"/payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("Succesful Payment!")})).catch((function(e){console.log("Payment Error: ",e),alert("There was an issue with your payment! Please make sure to use the provided credit card data")}))},stripeKey:"pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H"})},we=function(e){return e.cart},ke=Object(q.a)([we],(function(e){return e.cartItems})),Ne=Object(q.a)([we],(function(e){return e.hidden})),Ee=Object(q.a)([ke],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ce=Object(q.a)([ke],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Ue=(n(104),Object(q.b)({cartItems:ke,total:Ce})),Ie=Object(o.b)(Ue)((function(e){var t=e.cartItems,n=e.total;return Object(r.jsxs)("div",{className:"checkout-page",children:[Object(r.jsxs)("div",{className:"checkout-header",children:[Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Product"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Description"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Quantity"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Price"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(r.jsx)(ge,{cartItem:e},e.id)})),Object(r.jsxs)("div",{className:"total",children:["TOTAL: $",n]}),Object(r.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(r.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"]}),Object(r.jsx)(ye,{price:n})]})}));function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ae=a.createElement("g",null),Me=a.createElement("g",null),Pe=a.createElement("g",null),Re=a.createElement("g",null),Be=a.createElement("g",null),_e=a.createElement("g",null),De=a.createElement("g",null),Ge=a.createElement("g",null),He=a.createElement("g",null),Le=a.createElement("g",null),qe=a.createElement("g",null),We=a.createElement("g",null),Ve=a.createElement("g",null),ze=a.createElement("g",null),Fe=a.createElement("g",null);function Je(e,t){var n=e.title,r=e.titleId,c=Se(e,["title","titleId"]);return a.createElement("svg",Te({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,a.createElement("g",null,a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ae,Me,Pe,Re,Be,_e,De,Ge,He,Le,qe,We,Ve,ze,Fe)}var Ke=a.forwardRef(Je),Qe=(n.p,n(105),Object(q.b)({itemCount:Ee})),Ye=Object(o.b)(Qe,(function(e){return{toggleCartHidden:function(){return e(Y())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(r.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(r.jsx)(Ke,{className:"shopping-icon"}),Object(r.jsx)("span",{className:"item-count",children:n})]})})),Xe=(n(106),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("img",{src:n,alt:"item"}),Object(r.jsxs)("div",{className:"item-details",children:[Object(r.jsx)("span",{className:"name",children:c}),Object(r.jsxs)("span",{className:"price",children:[i," x $",a]})]})]})}),Ze=(n(107),Object(q.b)({cartItems:ke})),$e=Object(L.g)(Object(o.b)(Ze)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return Object(r.jsxs)("div",{className:"cart-dropdown",children:[Object(r.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(r.jsx)(Xe,{item:e},e.id)})):Object(r.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(r.jsx)(Q,{onClick:function(){n.push("/checkout"),a(Y())},children:"GO TO CHECKOUT"})]})}))),et=Object(q.a)([function(e){return e.user}],(function(e){return e.currentUser}));function tt(){return(tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function nt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var rt=a.createElement("desc",null,"Created with Sketch."),at=a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function ct(e,t){var n=e.title,r=e.titleId,c=nt(e,["title","titleId"]);return a.createElement("svg",tt({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"Group"):n?a.createElement("title",{id:r},n):null,rt,at)}var it=a.forwardRef(ct),st=(n.p,n(108),Object(q.b)({currentUser:et,hidden:Ne})),lt=Object(o.b)(st)((function(e){var t=e.currentUser,n=e.hidden;return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)(l.b,{className:"logo-container",to:"/",children:Object(r.jsx)(it,{className:"logo"})}),Object(r.jsxs)("div",{className:"options",children:[Object(r.jsx)(l.b,{className:"option",to:"/shop",children:"SHOP"}),Object(r.jsx)(l.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(r.jsx)("div",{className:"option",onClick:function(){return ue.signOut()},children:"SIGN OUT"}):Object(r.jsx)(l.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(r.jsx)(Ye,{})]}),n?null:Object(r.jsx)($e,{})]})})),ot=function(e){Object(G.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(_.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ue.onAuthStateChanged(function(){var t=Object(B.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,oe(n);case 3:t.sent.onSnapshot((function(t){e(Object(h.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)(lt,{}),Object(r.jsxs)(L.d,{children:[Object(r.jsx)(L.b,{exact:!0,path:"/",component:K}),Object(r.jsx)(L.b,{path:"/shop",component:ce}),Object(r.jsx)(L.b,{exact:!0,path:"/checkout",component:Ie}),Object(r.jsx)(L.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(r.jsx)(L.a,{to:"/"}):Object(r.jsx)(je,{})}})]})]})}}]),n}(c.a.Component),ut=Object(q.b)({currentUser:et}),dt=Object(o.b)(ut,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:j,payload:e}}(t))}}}))(ot);s.a.render(Object(r.jsx)(o.a,{store:A,children:Object(r.jsx)(l.a,{children:Object(r.jsx)(u.a,{persistor:M,children:Object(r.jsx)(dt,{})})})}),document.getElementById("root"))},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.5d693f75.chunk.js.map