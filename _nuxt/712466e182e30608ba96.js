(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{367:function(e,t,l){var content=l(413);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(9).default)("7500044a",content,!0,{sourceMap:!1})},373:function(e,t,l){var content=l(439);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(9).default)("5f09d170",content,!0,{sourceMap:!1})},374:function(e,t,l){var content=l(443);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(9).default)("660cede2",content,!0,{sourceMap:!1})},412:function(e,t,l){"use strict";var c=l(367);l.n(c).a},413:function(e,t,l){(t=l(8)(!1)).push([e.i,".form-select option:first-child{display:none}.theme--light.v-list-item--active:focus:before,.theme--light.v-list-item.v-list-item--highlighted:before{background-color:#545e64}.theme--light.v-list-item--active:before,.theme--light.v-list-item--active:hover:before,.theme--light.v-list-item:focus:before{background-color:#bdc3c7}.v-list-item .v-list-item__subtitle,.v-list-item .v-list-item__title{color:#455a64}.v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after{border-bottom-color:#455a64}",""]),e.exports=t},438:function(e,t,l){"use strict";var c=l(373);l.n(c).a},439:function(e,t,l){(t=l(8)(!1)).push([e.i,".v-slider__thumb-container[data-v-0a79551e]:hover{cursor:pointer}",""]),e.exports=t},442:function(e,t,l){"use strict";var c=l(374);l.n(c).a},443:function(e,t,l){(t=l(8)(!1)).push([e.i,".price-page[data-v-61bdcceb]{padding:40px 0}.price-page__content[data-v-61bdcceb]{max-width:1000px;width:100%;margin:0 auto}.price[data-v-61bdcceb]{color:rgba(0,0,0,.6)}.price__text[data-v-61bdcceb]{margin-bottom:50px}.price__result[data-v-61bdcceb]{color:#000;font-size:16px;background-color:#455a64;padding:10px;color:#fff;border-radius:3px;text-align:center}.price__result p[data-v-61bdcceb]{margin-bottom:0}",""]),e.exports=t},515:function(e,t,l){"use strict";l.r(t);var c={props:{selectList:{type:Array,required:!0,default:null},nameSelect:{type:String,required:!1,default:""},classSelect:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data:function(){return{selected:""}},methods:{getValueSelect:function(e){this.$emit("selectValue",e)}},components:{}},r=(l(412),l(14)),n=l(42),o=l.n(n),d=l(516),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"form-select"},[l("v-select",{attrs:{items:e.selectList,"item-text":"name","item-value":"value",label:e.placeholder,"persistent-hint":"","return-object":"","single-line":""},on:{input:function(t){return e.getValueSelect(e.selected)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)}),[],!1,null,null,null),v=component.exports;o()(component,{VSelect:d.a});l(23);var f={props:{label:{type:String,required:!1,default:""},value:{type:Number,required:!1,default:1},color:{type:String,required:!1,default:"#455A64"},trackColor:{type:String,required:!1,default:"#455A64"},thumbcolor:{type:String,required:!1,default:"#455A64"},min:{type:Number,required:!1,default:1},max:{type:Number,required:!1,default:100}},data:function(){return{valueRange:1}},methods:{getValueRange:function(e){this.$emit("valueRange",e)}}},m=(l(438),l(507)),h=l(500),_=Object(r.a)(f,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"form-range"},[l("v-slider",{attrs:{label:e.label,"track-color":e.trackColor,"thumb-color":e.thumbcolor,max:e.max,min:e.min,color:e.color,"thumb-label":"always"},on:{input:function(t){return e.getValueRange(e.valueRange)}},model:{value:e.valueRange,callback:function(t){e.valueRange=t},expression:"valueRange"}}),e._v(" "),l("v-text-field",{attrs:{label:"Введите площадь"},model:{value:e.valueRange,callback:function(t){e.valueRange=t},expression:"valueRange"}})],1)}),[],!1,null,"0a79551e",null),x=_.exports;o()(_,{VSlider:m.a,VTextField:h.a});var R={head:{title:"Kuligin Design - Цены"},data:function(){return{selectList:[{id:1,value:"full-project",name:"Полный проект",price:450,calculate:!0},{id:2,value:"full-project-support",name:"Полный проект c сопровождением",price:900,calculate:!0},{id:3,value:"draft-sketch",name:"Эскиз проекта",price:250,calculate:!0},{id:4,value:"drawing-planning",name:"Составление планировочных решений",price:2500,calculate:!1}],selectObject:null,valueRange:1}},methods:{getValueSelect:function(e){this.selectObject=e},getValueRange:function(e){this.valueRange=e}},components:{FormSelect:v,FormRange:x},computed:{getCalculateValue:function(){if(this.selectObject)return this.valueRange*this.selectObject.price}}},y=(l(442),Object(r.a)(R,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"price-page"},[l("div",{staticClass:"container"},[l("section-title",{attrs:{title:"Цены"}}),e._v(" "),l("div",{staticClass:"price-page__content"},[l("h3",[e._v("Выберите тип проекта")]),e._v(" "),l("form-select",{attrs:{selectList:e.selectList,placeholder:"Выберите тип проекта"},on:{selectValue:e.getValueSelect}}),e._v(" "),e.selectObject?l("div",{staticClass:"price"},[l("div",{staticClass:"price__text"},[l("p",[e._v(e._s(e.selectObject.name)+" - "+e._s(e.selectObject.price)+" м"),l("sup",[e._v("2")])])]),e._v(" "),e.selectObject.calculate?l("div",{staticClass:"calculate-panel"},[l("div",{staticClass:"range-holder"},[l("form-range",{attrs:{label:"Выбрать площадь",value:1,min:1,max:300},on:{valueRange:e.getValueRange}})],1),e._v(" "),l("div",{staticClass:"price__result"},[l("p",[e._v("Стоимость - "),l("span",[e._v(e._s(e.getCalculateValue)+" грн.")])])])]):e._e()]):e._e()],1)],1)])}),[],!1,null,"61bdcceb",null));t.default=y.exports}}]);