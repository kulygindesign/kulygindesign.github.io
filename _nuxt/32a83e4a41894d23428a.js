(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{251:function(t,e,n){var map={"./intro-home-img-1.jpg":252,"./intro-home-img-2.jpg":253,"./intro-home-img-3.jpg":254,"./logo-footer.svg":147,"./logo-header.svg":146,"./service-img-1.jpg":255,"./service-img-2.jpg":256,"./service-img-3.jpg":257,"./service-img-4.jpg":258};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=251},252:function(t,e,n){t.exports=n.p+"img/c099745.jpg"},253:function(t,e,n){t.exports=n.p+"img/48b70ad.jpg"},254:function(t,e,n){t.exports=n.p+"img/05d49a8.jpg"},255:function(t,e,n){t.exports=n.p+"img/4930bd0.jpg"},256:function(t,e,n){t.exports=n.p+"img/3610226.jpg"},257:function(t,e,n){t.exports=n.p+"img/fa69d92.jpg"},258:function(t,e,n){t.exports=n.p+"img/40f3804.jpg"},264:function(t,e,n){var content=n(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("809ba58c",content,!0,{sourceMap:!1})},265:function(t,e,n){var content=n(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("fcc38c02",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";var r=n(264);n.n(r).a},374:function(t,e,n){(e=n(19)(!1)).push([t.i,".section-intro-slider[data-v-0b814ed6]{height:63vw}@media(min-width:1024px){.section-intro-slider[data-v-0b814ed6]{margin-top:-84px;height:calc(100vh - 90px)}}@media(min-width:1366px){.section-intro-slider[data-v-0b814ed6]{margin-top:-84px;height:calc(100vh - 90px)}}.intro-slider[data-v-0b814ed6]{height:100%}.intro-slider__image[data-v-0b814ed6]{width:100%;height:100%;background-position:50%;background-size:cover}.intro-slider__image img[data-v-0b814ed6]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.intro-slider .swiper-button[data-v-0b814ed6]{transition:transform .3s ease-in-out}.intro-slider .swiper-button[data-v-0b814ed6]:hover{transform:scale(1.2)}.intro-slider .swiper-button[data-v-0b814ed6]:after{color:#000}.intro-slider .swiper-button-next[data-v-0b814ed6]{right:20px}.intro-slider .swiper-button-prev[data-v-0b814ed6]{left:20px}",""]),t.exports=e},375:function(t,e,n){"use strict";var r=n(265);n.n(r).a},376:function(t,e,n){(e=n(19)(!1)).push([t.i,".page-intro[data-v-2595ee17]{background-color:#bdc3c7;min-height:calc(100vh - 161px)}@media(min-width:768px){.page-intro[data-v-2595ee17]{min-height:calc(100vh - 174px)}}@media(min-width:1024px){.page-intro[data-v-2595ee17]{min-height:calc(100vh - 174px)}}@media(min-width:1366px){.page-intro[data-v-2595ee17]{min-height:calc(100vh - 227px)}}",""]),t.exports=e},389:function(t,e,n){"use strict";n.r(e);var r=n(370),o=(n(371),{name:"IntroSlider",props:{slides:{type:Array,required:!0}},components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},data:function(){return{swiperOptions:{effect:"fade",loop:!0,autoplay:{autoplay:!0,delay:5100},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),d=(n(373),n(3)),c={data:function(){return{slides:[{id:1,img:"intro-home-img-1.jpg"},{id:2,img:"intro-home-img-2.jpg"},{id:3,img:"intro-home-img-3.jpg"}]}},head:{title:"Kuligin Design - Главная"},components:{IntroSlider:Object(d.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section-intro-slider"},[e("swiper",{staticClass:"intro-slider",attrs:{options:this.swiperOptions}},[this._l(this.slides,(function(t,i){return e("swiper-slide",{key:i},[e("div",{staticClass:"intro-slider__image",style:{backgroundImage:"url("+n(251)("./"+t.img)+")"}})])})),this._v(" "),e("span",{staticClass:"swiper-button swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),this._v(" "),e("span",{staticClass:"swiper-button swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)}),[],!1,null,"0b814ed6",null).exports}},l=(n(375),Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-intro"},[e("IntroSlider",{attrs:{slides:this.slides}})],1)}),[],!1,null,"2595ee17",null));e.default=l.exports}}]);