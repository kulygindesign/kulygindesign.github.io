(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{220:function(t,e,r){var map={"./intro-home-img-1.jpg":221,"./intro-home-img-2.jpg":222,"./intro-home-img-3.jpg":223,"./logo-footer.svg":128,"./logo-header.svg":127,"./service-img-1.jpg":224,"./service-img-2.jpg":225,"./service-img-3.jpg":226,"./service-img-4.jpg":227};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=220},221:function(t,e,r){t.exports=r.p+"img/c099745.jpg"},222:function(t,e,r){t.exports=r.p+"img/48b70ad.jpg"},223:function(t,e,r){t.exports=r.p+"img/05d49a8.jpg"},224:function(t,e,r){t.exports=r.p+"img/4930bd0.jpg"},225:function(t,e,r){t.exports=r.p+"img/3610226.jpg"},226:function(t,e,r){t.exports=r.p+"img/fa69d92.jpg"},227:function(t,e,r){t.exports=r.p+"img/40f3804.jpg"},231:function(t,e,r){var content=r(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("720aadc6",content,!0,{sourceMap:!1})},232:function(t,e,r){var content=r(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("50d6cdfb",content,!0,{sourceMap:!1})},246:function(t,e,r){"use strict";var n=r(231);r.n(n).a},247:function(t,e,r){(e=r(12)(!1)).push([t.i,".section-intro-slider[data-v-3ee0dfda]{height:63vw}@media (min-width:1366px){.section-intro-slider[data-v-3ee0dfda]{height:62vw;max-height:62vw;margin-top:-87px}}.intro-slider[data-v-3ee0dfda]{height:100%}.intro-slider__image[data-v-3ee0dfda]{width:100%;height:100%;background-position:50%;background-size:cover}.intro-slider__image img[data-v-3ee0dfda]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.intro-slider .swiper-button[data-v-3ee0dfda]{transition:transform .3s ease-in-out}.intro-slider .swiper-button[data-v-3ee0dfda]:hover{transform:scale(1.2)}.intro-slider .swiper-button[data-v-3ee0dfda]:after{color:#000}.intro-slider .swiper-button-next[data-v-3ee0dfda]{right:20px}.intro-slider .swiper-button-prev[data-v-3ee0dfda]{left:20px}",""]),t.exports=e},248:function(t,e,r){"use strict";var n=r(232);r.n(n).a},249:function(t,e,r){(e=r(12)(!1)).push([t.i,".page-intro[data-v-51f2a418]{background-color:#bdc3c7;min-height:calc(100vh - 161px)}@media (min-width:1024px){.page-intro[data-v-51f2a418]{min-height:calc(100vh - 177px)}}@media (min-width:1366px){.page-intro[data-v-51f2a418]{min-height:calc(100vh - 227px)}}",""]),t.exports=e},253:function(t,e,r){"use strict";r.r(e);var n=r(243),o=(r(244),{name:"IntroSlider",props:{slides:{type:Array,required:!0}},components:{Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},data:function(){return{swiperOptions:{effect:"fade",loop:!0,autoplay:{autoplay:!0,delay:5100},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),d=(r(246),r(3)),c={data:function(){return{slides:[{id:1,img:"intro-home-img-1.jpg"},{id:2,img:"intro-home-img-2.jpg"},{id:3,img:"intro-home-img-3.jpg"}]}},beforeCreate:function(){this.$store.dispatch("onAuthUser")},head:{title:"Kuligin Design - Главная"},components:{IntroSlider:Object(d.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section-intro-slider"},[e("swiper",{staticClass:"intro-slider",attrs:{options:this.swiperOptions}},[this._l(this.slides,(function(t,i){return e("swiper-slide",{key:i},[e("div",{staticClass:"intro-slider__image",style:{backgroundImage:"url("+r(220)("./"+t.img)+")"}})])})),this._v(" "),e("span",{staticClass:"swiper-button swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),this._v(" "),e("span",{staticClass:"swiper-button swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)}),[],!1,null,"3ee0dfda",null).exports}},l=(r(248),Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-intro"},[e("IntroSlider",{attrs:{slides:this.slides}})],1)}),[],!1,null,"51f2a418",null));e.default=l.exports}}]);