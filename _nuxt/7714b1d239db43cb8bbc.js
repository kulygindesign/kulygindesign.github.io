(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{267:function(t,e,n){var content=n(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("eebadd9c",content,!0,{sourceMap:!1})},268:function(t,e,n){var content=n(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("81279efc",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";var c=n(267);n.n(c).a},379:function(t,e,n){(e=n(18)(!1)).push([t.i,'.service-item[data-v-1f7cc9f4]{margin-bottom:40px}h3[data-v-1f7cc9f4]{margin-bottom:20px;font-size:24px}.unstyled-list[data-v-1f7cc9f4]{margin:0;padding:0;list-style-type:none}.unstyled-list__item[data-v-1f7cc9f4]{position:relative;padding-left:25px}.unstyled-list__item[data-v-1f7cc9f4]:not(:last-child){margin-bottom:5px}.unstyled-list__item[data-v-1f7cc9f4]:before{content:"";position:absolute;top:10px;left:0;width:20px;height:1px;background-color:#000}',""]),t.exports=e},380:function(t,e,n){"use strict";var c=n(268);n.n(c).a},381:function(t,e,n){(e=n(18)(!1)).push([t.i,".single-service-content[data-v-2577c8aa]{font-size:18px}@media(min-width:768px){.single-service-content[data-v-2577c8aa]{display:flex;flex-wrap:wrap;margin:0 -15px}}@media(min-width:768px){.single-service-content .col[data-v-2577c8aa]{padding:0 15px;width:50%}}",""]),t.exports=e},395:function(t,e,n){"use strict";n.r(e);var c=n(282),l=n.n(c),r={name:"ServiceList",props:{title:{type:String,required:!0,default:null},list:{type:Array,required:!0,default:null}}},o=(n(378),n(3)),d={data:function(){return{serviceTitle:"",id:0,serviceList:[],autorAccompaniment:[]}},methods:{back:function(){this.$router.back()}},components:{ServiceList:Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-item"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"unstyled-list"},t._l(t.list,(function(e,i){return n("li",{key:i,staticClass:"unstyled-list__item"},[t._v(t._s(e.value))])})),0)])}),[],!1,null,"1f7cc9f4",null).exports},mounted:function(){var t=this;l.a.get("/services.json").then((function(t){return t.data})).then((function(data){t.id=t.$route.params.id-1,t.serviceTitle=data[t.id].title,t.serviceList=data[t.id].listWork,t.autorAccompaniment=data[t.id].autorAccompaniment}))}},v=(n(380),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"single-service"},[n("div",{staticClass:"container"},[n("section-title",{attrs:{title:t.serviceTitle}},[n("span",{staticClass:"icon-arrow-back link-back",on:{click:function(e){return t.back()}}})]),t._v(" "),n("div",{staticClass:"single-service-content"},[0==!t.serviceList.length?n("div",{staticClass:"col"},[n("service-list",{attrs:{title:"Cостав проекта",list:t.serviceList}})],1):t._e(),t._v(" "),0==!t.autorAccompaniment.length?n("div",{staticClass:"col"},[n("service-list",{attrs:{title:"Авторское сопровождение",list:t.autorAccompaniment}})],1):t._e()])],1)])}),[],!1,null,"2577c8aa",null));e.default=v.exports}}]);