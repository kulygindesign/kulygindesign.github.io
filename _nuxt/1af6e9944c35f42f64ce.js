(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{409:function(t,e,o){var content=o(473);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("2224205c",content,!0,{sourceMap:!1})},411:function(t,e,o){var content=o(478);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("3910bfb2",content,!0,{sourceMap:!1})},472:function(t,e,o){"use strict";var n=o(409);o.n(n).a},473:function(t,e,o){(e=o(8)(!1)).push([t.i,".invalid-message{color:red;font-size:16px;display:block;margin-bottom:10px}",""]),t.exports=e},477:function(t,e,o){"use strict";var n=o(411);o.n(n).a},478:function(t,e,o){(e=o(8)(!1)).push([t.i,".admin-section-intro .container{max-width:800px}.admin-section .v-tabs{min-height:380px}.admin-section .image-holder{max-width:270px;width:100%}",""]),t.exports=e},514:function(t,e,o){"use strict";o.r(e);o(14),o(10),o(7),o(5),o(12);var n=o(2),r=(o(28),{name:"admin-intro",layout:"admin",props:{post:{type:Object,required:!1}},data:function(){return{editedPost:{id:"",title:"",img:"",visible:!0},isError:!1,valid:!0,errorMsg:"Input empty please fill all fields"}},watch:{post:function(){null!=this.post?this.editedPost=this.post:this.$refs.form.reset()}},methods:{submit:function(){var t=this;if(!this.editedPost.title||!this.editedPost.img)return this.isError=!0,void setTimeout((function(){t.isError=!1}),3e3);setTimeout((function(){t.$refs.form.reset()}),600),this.$emit("submitForm",this.editedPost)},editSubmit:function(){var t=this;if(!this.editedPost.title||!this.editedPost.img)return this.isError=!0,void setTimeout((function(){t.isError=!1}),3e3);this.$emit("editSubmitForm",this.editedPost)}}}),l=(o(472),o(13)),d=o(37),c=o.n(d),v=o(155),m=o(471),f=o(508),h=o(500),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-layout",{staticClass:"mb-5"},[o("v-text-field",{attrs:{label:"Title product img",required:""},model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}})],1),t._v(" "),t.editedPost.img?o("v-layout",{staticClass:"mb-5"},[o("div",{staticClass:"image-holder"},[o("img",{attrs:{src:t.editedPost.img,alt:t.editedPost.title}})])]):t._e(),t._v(" "),o("v-layout",[o("v-text-field",{attrs:{label:"Image url",required:""},model:{value:t.editedPost.img,callback:function(e){t.$set(t.editedPost,"img",e)},expression:"editedPost.img"}})],1),t._v(" "),o("v-layout",{staticClass:"mb-5"},[t.isError?o("span",{staticClass:"invalid-message"},[t._v(t._s(t.errorMsg))]):t._e()]),t._v(" "),null===t.post?o("v-btn",{staticClass:"success",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Create slide")]):t._e(),t._v(" "),null!=t.post?o("v-btn",{staticClass:"warning",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.editSubmit(e)}}},[t._v("Edit slide")]):t._e()],1)}),[],!1,null,null,null),_=component.exports;c()(component,{VBtn:v.a,VForm:m.a,VLayout:f.a,VTextField:h.a});var C={name:"PreviewCard",props:["img","title","id","visible"],data:function(){return{show:!1}},mounted:function(){this.show=this.visible},methods:{remove:function(t,e){this.$emit("removeSlide",{id:t,name:e})},hide:function(t){this.show=!this.show,this.$emit("hidePost",{id:t,visible:this.show})},edit:function(t){this.$emit("editPost",{id:t})}}},P=o(406),x=o(355),y=o(509),O=o(116),S=o(353),w=Object(l.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"mx-auto",attrs:{fluid:""}},[o("v-card",[o("v-img",{staticClass:"white--text align-end",attrs:{src:t.img,height:"200px"}},[o("v-card-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"primary",on:{click:function(e){return t.hide(t.id)}}},[o("i",{class:{"fas fa-eye":1==t.show,"fas fa-eye-slash":0==t.show}})]),t._v(" "),o("v-btn",{staticClass:"warning",on:{click:function(e){return t.edit(t.id)}}},[o("i",{staticClass:"fas fa-pencil-alt"})]),t._v(" "),o("v-btn",{staticClass:"ml-2 error",on:{click:function(e){return t.remove(t.id,t.title)}}},[o("i",{staticClass:"fas fa-trash"})])],1)],1),t._v(" "),t._t("default")],2)}),[],!1,null,null,null),V=w.exports;c()(w,{VBtn:v.a,VCard:P.a,VCardActions:x.a,VCardTitle:x.c,VContainer:y.a,VImg:O.a,VSpacer:S.a});var k={name:"ModalCard",props:["isOpen"],data:function(){return{}},methods:{agree:function(){this.$emit("agreeModalEvent",{state:!0,isOpen:!1})},close:function(){this.$emit("closeModal",!1)}}},$=o(510),j=Object(l.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"500"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[o("v-card",[t._t("default"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"green darken-1 mb-3",text:""},on:{click:t.agree}},[t._v("Agree")]),t._v(" "),o("v-btn",{attrs:{color:"green darken-1 mb-3",text:""},on:{click:t.close}},[t._v("Disagree")])],1)],2)],1)}),[],!1,null,null,null),E=j.exports;c()(j,{VBtn:v.a,VCard:P.a,VCardActions:x.a,VDialog:$.a,VSpacer:S.a});var I=o(202),T=o.n(I);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function F(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D={name:"admin-intro",layout:"admin",data:function(){return{nameRemovedSlide:"",idRemovedSlide:0,tab:null,modalIsOpen:!1,editedPost:null}},mounted:function(){this.$store.dispatch("loadSlides")},methods:{submitForm:function(t){this.$store.dispatch("createIntroSlide",t)},removeSlide:function(t){this.nameRemovedSlide=t.name,this.idRemovedSlide=t.id,this.modalIsOpen=!0},agreeModalEvent:function(){this.$store.dispatch("removeIntroSlide",this.idRemovedSlide),this.modalIsOpen=!1},closeModal:function(t){this.modalIsOpen=t},hidePost:function(t){this.$store.dispatch("hideIntroSlide",t)},editPost:function(t){var e=this;T.a.get("".concat("https://kuligindesign.firebaseio.com","/").concat("intro-slides","/").concat(t.id,".json")).then((function(t){return t.data})).then((function(data){e.$nextTick((function(){e.tab="tab-2",setTimeout((function(){e.editedPost=F(F({},data),{},{id:t.id})}),10)}))}))},tabResetForm:function(){null!=this.editedPost&&(this.editedPost=null)},editSubmitForm:function(t){var e=this;this.$store.dispatch("editIntroSlide",t),this.$nextTick((function(){setTimeout((function(){e.tab="tab-1"}),300)}))}},computed:{loadedSlides:function(){return this.$store.getters.getIntroSlides},isLoad:function(){return this.$store.getters.getLoadStatus}},components:{FormIntroSlider:_,PreviewCard:V,ModalCard:E}},R=(o(477),o(532)),L=o(511),B=o(512),A=o(513),J=o(533),z=o(531),Y=o(487),G=Object(l.a)(D,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"admin-page pb-10"},[o("div",{staticClass:"admin-section admin-section-intro"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("v-tabs",{staticClass:"elevation-2",attrs:{"background-color":"deep-purple accent-4",dark:"",centered:!0},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("v-tabs-slider"),t._v(" "),o("v-tab",{attrs:{href:"#tab-1"}},[o("v-badge",{attrs:{color:"green",content:t.loadedSlides.length}},[t._v("Preview slides")])],1),t._v(" "),o("v-tab",{attrs:{href:"#tab-2"},on:{click:t.tabResetForm}},[t._v("Create slide")]),t._v(" "),o("v-tab-item",{staticClass:"px-5 py-5",attrs:{value:"tab-1"}},[o("ProgressCircle",{attrs:{isProgress:t.isLoad}}),t._v(" "),t.isLoad&&0==t.loadedSlides.length?o("v-layout",{staticClass:"text-center my-10",attrs:{"d-block":""}},[o("p",[t._v("You are have not any slides")])]):t._e(),t._v(" "),t.isLoad?o("v-layout",[o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{dense:""}},t._l(t.loadedSlides,(function(e){return o("v-col",{key:e.id,attrs:{sm:"12",md:"6","d-flex":""}},[o("PreviewCard",{attrs:{id:e.id,title:e.title,img:e.img,visible:e.visible},on:{removeSlide:t.removeSlide,hidePost:t.hidePost,editPost:t.editPost}},[o("ModalCard",{attrs:{isOpen:t.modalIsOpen},on:{agreeModalEvent:t.agreeModalEvent,closeModal:t.closeModal}},[o("v-card",[o("v-card-title",{staticClass:"headline text-center"},[t._v("Do you agree delete this post")]),t._v(" "),o("v-card-text",{staticClass:"product-name"},[t._v(t._s(t.nameRemovedSlide))])],1)],1)],1)],1)})),1)],1)],1):t._e()],1),t._v(" "),o("v-tab-item",{staticClass:"px-5 py-5",attrs:{value:"tab-2"}},[o("div",{staticClass:"create-intro-slide"},[o("h3",[t._v("Create intro slide")]),t._v(" "),o("FormIntroSlider",{attrs:{post:t.editedPost},on:{submitForm:t.submitForm,editSubmitForm:t.editSubmitForm}})],1)])],1)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center py-10"},[e("h1",[this._v("Intro page")])])}],!1,null,null,null);e.default=G.exports;c()(G,{VBadge:R.a,VCard:P.a,VCardText:x.b,VCardTitle:x.c,VCol:L.a,VContainer:y.a,VLayout:f.a,VRow:B.a,VTab:A.a,VTabItem:J.a,VTabs:z.a,VTabsSlider:Y.a})}}]);