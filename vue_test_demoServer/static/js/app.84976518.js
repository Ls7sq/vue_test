(function(t){function e(e){for(var i,o,s=e[0],l=e[1],u=e[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticClass:"row"},[n("Banner")],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"guanyu"}}},[t._v("About")]),n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])])])},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[t._m(0),n("button",{on:{click:t.back}},[t._v("后退")]),n("button",{on:{click:t.forward}},[t._v("前进")]),n("button",{on:{click:t.test}},[t._v("go")])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")])])}],l={name:"Banner",methods:{back:function(){this.$router.back()},forward:function(){this.$router.forward()},test:function(){this.$router.go(-2)}}},u=l,c=n("2877"),f=Object(c["a"])(u,o,s,!1,null,null,null),p=f.exports,v={name:"App",components:{Banner:p},mounted:function(){}},m=v,d=Object(c["a"])(m,r,a,!1,null,null,null),h=d.exports,_=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("我是About的内容")])},b=[],y={name:"About",beforeDestroy:function(){},mounted:function(){},beforeRouteEnter:function(t,e,n){t.meta.isAuth?"atguigu"===localStorage.getItem("school")?n():alert("没有权限"):n()},beforeRouteLeave:function(t,e,n){n()}},w=y,x=Object(c["a"])(w,g,b,!1,null,null,null),k=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item ",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),n("li",[n("router-link",{staticClass:"list-group-item ",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),n("keep-alive",{attrs:{include:"News"}},[n("router-view")],1)],1)])},$=[],j={name:"Home",beforeDestroy:function(){},mounted:function(){}},C=j,E=Object(c["a"])(C,O,$,!1,null,null,null),P=E.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("li",{style:{opacity:t.opacity}},[t._v("welcome vue")]),t._m(0),t._m(1),t._m(2)])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news001 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news002 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news003 "),n("input",{attrs:{type:"text"}})])}],q={name:"News",data:function(){return{opacity:1}},activated:function(){var t=this;setInterval((function(){t.timer=t.opacity-=.01,t.opacity<=0&&(t.opacity=1)}),16)},deactivated:function(){clearInterval(this.timer)}},M=q,D=Object(c["a"])(M,A,S,!1,null,null,null),H=D.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.messageList,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"xiangqing",query:{id:e.id,title:e.title}}}},[t._v(" "+t._s(e.title)+" ")]),n("button",{on:{click:function(n){return t.pushShow(e)}}},[t._v("push查看")]),n("button",{on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace查看")])],1)})),0),n("hr"),n("router-view")],1)},N=[],B=(n("ac1f"),n("5319"),{name:"Message",data:function(){return{messageList:[{id:"001",title:"message1"},{id:"002",title:"message2"},{id:"003",title:"message3"}]}},methods:{pushShow:function(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow:function(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}},beforeDestroy:function(){console.log("message组件即将被销毁")}}),I=B,R=Object(c["a"])(I,L,N,!1,null,null,null),T=R.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("消息编号: "+t._s(t.id))]),n("li",[t._v("消息标题: "+t._s(t.title))])])},z=[],V={name:"Detail",props:["id","title"]},F=V,G=Object(c["a"])(F,J,z,!1,null,null,null),K=G.exports,Q=new _["a"]({mode:"hash",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"AboutPage"}},{name:"zhuye",path:"/home",component:P,meta:{title:"HomePage"},children:[{name:"xinwen",path:"news",component:H,meta:{isAuth:!0,title:"NewsPage"}},{name:"xiaoxi",path:"message",component:T,meta:{isAuth:!0,title:"MessagePage"},children:[{name:"xiangqing",path:"detail",component:K,meta:{isAuth:!1,title:"DetailsPage"},props:function(t){var e=t.query;return{id:e.id,title:e.title}}}]}]}]});Q.afterEach((function(t,e){console.log("后置路由守卫",t,e),document.title=t.meta.title||"Ls7"}));var U=Q;i["a"].use(_["a"]),i["a"].config.productionTip=!1,new i["a"]({el:"#app",render:function(t){return t(h)},router:U,beforeCreate:function(){i["a"].prototype.$bus=this}})}});
//# sourceMappingURL=app.84976518.js.map