(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{388:function(t,e,r){var content=r(479);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("755d0b42",content,!0,{sourceMap:!1})},389:function(t,e,r){var content=r(481);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("2224205c",content,!0,{sourceMap:!1})},390:function(t,e,r){var content=r(485);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("3910bfb2",content,!0,{sourceMap:!1})},478:function(t,e,r){"use strict";var o=r(388);r.n(o).a},479:function(t,e,r){(e=r(9)(!1)).push([t.i,".v-progress-linear__content{font-size:14px}",""]),t.exports=e},480:function(t,e,r){"use strict";var o=r(389);r.n(o).a},481:function(t,e,r){(e=r(9)(!1)).push([t.i,".invalid-message{color:red;font-size:16px;display:block;margin-bottom:10px}",""]),t.exports=e},484:function(t,e,r){"use strict";var o=r(390);r.n(o).a},485:function(t,e,r){(e=r(9)(!1)).push([t.i,".admin-section-intro .container{max-width:800px}.admin-section .v-tabs{min-height:380px}.admin-section .image-holder{max-width:270px;width:100%}",""]),t.exports=e},521:function(t,e,r){"use strict";r.r(e);r(15),r(11),r(7),r(5),r(13);var o=r(2),n=(r(27),{name:"UploadImage",props:["image"],data:function(){return{imageObject:"",imageUrl:""}},watch:{image:function(){this.imageUrl=this.image}},methods:{onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,r=t.target.files;if(r[0].name.lastIndexOf(".")<=0)return alert("Please add a valid file");var o=new FileReader;o.addEventListener("load",(function(){e.imageUrl=o.result})),o.readAsDataURL(r[0]),this.imageObject=r[0];var n=this.imageObject.name,l=n.slice(n.lastIndexOf("."));this.$emit("onFilePicked",{imageObject:this.imageObject,imageExt:l})}}}),l=r(14),c=r(36),d=r.n(c),m=r(156),v=r(515),f=r(516),h=r(517),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-row",[t.imageUrl?r("v-col",{staticClass:"col-12"},[r("div",{staticClass:"image-holder"},[r("img",{attrs:{src:t.imageUrl}})])]):t._e(),t._v(" "),r("v-col",{staticClass:"col-12"},[r("v-btn",{staticClass:"primary",attrs:{raised:""},on:{click:t.onPickFile}},[t._v("Upload image")]),t._v(" "),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1)],1)}),[],!1,null,null,null),_=component.exports;d()(component,{VBtn:m.a,VCol:v.a,VLayout:f.a,VRow:h.a});r(24);var P={props:{progress:{type:Number,required:!1,default:0}},data:function(){return{}}},x=(r(478),r(402)),C=Object(l.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-progress-linear",{attrs:{color:"primary",height:"20",reactive:""},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}},[r("strong",[t._v(t._s(Math.ceil(t.progress))+"%")])])}),[],!1,null,null,null),y=C.exports;d()(C,{VProgressLinear:x.a});var O={name:"FormIntroSlider",layout:"admin",props:{post:{type:Object,required:!1}},data:function(){return{editedPost:{title:"",visible:!0,image:null,imageExt:null},error:{isError:!1,valid:!0,errorMsg:"Input empty please fill all fields"},progressUploadPost:0,isProgress:!1}},watch:{post:function(){null!=this.post?this.editedPost=this.post:(this.$refs.form.reset(),this.editedPost.image=null)}},methods:{submit:function(t){var e=this;if(!this.editedPost.title||!this.editedPost.image)return this.error.isError=!0,void setTimeout((function(){e.error.isError=!1}),3e3);this.$emit("submitForm",this.editedPost)},editSubmit:function(){var t=this;if(!this.editedPost.title||!this.editedPost.image)return this.error.isError=!0,void setTimeout((function(){t.error.isError=!1}),3e3);this.$emit("editSubmitForm",this.editedPost)},onFilePicked:function(t){var e=t.imageObject,r=t.imageExt;this.editedPost.image=e,this.editedPost.imageExt=r}},components:{UploadImage:_,ProgressLine:y}},w=(r(480),r(476)),k=r(507),E=Object(l.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",model:{value:t.error.valid,callback:function(e){t.$set(t.error,"valid",e)},expression:"error.valid"}},[r("v-layout",[r("v-text-field",{attrs:{label:"Title product img",required:""},model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}})],1),t._v(" "),r("UploadImage",{attrs:{image:t.editedPost.image},on:{onFilePicked:t.onFilePicked}}),t._v(" "),r("v-layout",{staticClass:"mb-5"},[t.error.isError?r("span",{staticClass:"invalid-message"},[t._v(t._s(t.error.errorMsg))]):t._e()]),t._v(" "),t.isProgress?r("v-layout",{staticClass:"mb-5"},[r("ProgressLine",{attrs:{progress:t.progressUploadPost}})],1):t._e(),t._v(" "),r("v-layout",[null===t.post?r("v-btn",{staticClass:"success",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Create slide")]):t._e(),t._v(" "),null!=t.post?r("v-btn",{staticClass:"warning",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.editSubmit(e)}}},[t._v("Edit slide")]):t._e()],1)],1)}),[],!1,null,null,null),V=E.exports;d()(E,{VBtn:m.a,VForm:w.a,VLayout:f.a,VTextField:k.a});var S={name:"PreviewCard",props:["image","imageExt","title","id","visible"],data:function(){return{show:!1}},mounted:function(){this.show=this.visible},methods:{remove:function(t){this.$emit("removeSlide",{post:t})},hide:function(t){this.show=!this.show,this.$emit("hidePost",{id:t,visible:this.show})},edit:function(t,e){this.$emit("editPost",{id:t,imageExt:e})}}},$=r(384),j=r(332),F=r(518),I=r(116),M=r(329),T=Object(l.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mx-auto",attrs:{fluid:""}},[r("v-card",[r("v-img",{staticClass:"white--text align-end",attrs:{src:t.image,height:"200px"}},[r("v-card-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"primary",on:{click:function(e){return t.hide(t.id)}}},[r("i",{class:{"fas fa-eye":1==t.show,"fas fa-eye-slash":0==t.show}})]),t._v(" "),r("v-btn",{staticClass:"warning",on:{click:function(e){return t.edit(t.id,t.imageExt)}}},[r("i",{staticClass:"fas fa-pencil-alt"})]),t._v(" "),r("v-btn",{staticClass:"ml-2 error",on:{click:function(e){return t.remove({id:t.id,imageExt:t.imageExt})}}},[r("i",{staticClass:"fas fa-trash"})])],1)],1),t._v(" "),t._t("default")],2)}),[],!1,null,null,null),L=T.exports;d()(T,{VBtn:m.a,VCard:$.a,VCardActions:j.a,VCardTitle:j.c,VContainer:F.a,VImg:I.a,VSpacer:M.a});var U={name:"ModalCard",props:["isOpen"],data:function(){return{}},methods:{agree:function(){this.$emit("agreeModalEvent",{state:!0,isOpen:!1})},close:function(){this.$emit("closeModal",!1)}}},D=r(519),R=Object(l.a)(U,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"500"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[r("v-card",[t._t("default"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1 mb-3",text:""},on:{click:t.agree}},[t._v("Agree")]),t._v(" "),r("v-btn",{attrs:{color:"green darken-1 mb-3",text:""},on:{click:t.close}},[t._v("Disagree")])],1)],2)],1)}),[],!1,null,null,null),B=R.exports;d()(R,{VBtn:m.a,VCard:$.a,VCardActions:j.a,VDialog:D.a,VSpacer:M.a});var A=r(335),z=r.n(A);function J(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?J(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):J(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var Y={name:"admin-intro",layout:"admin",data:function(){return{post:{id:0,name:"",image:"",imageExt:""},tab:null,modalIsOpen:!1,editedPost:null}},mounted:function(){this.$store.dispatch("loadSlides")},methods:{submitForm:function(t){this.$store.dispatch("createIntroSlide",t)},removeSlide:function(t){this.post=N({},t),this.modalIsOpen=!0},agreeModalEvent:function(){this.$store.dispatch("removeIntroSlide",this.post),this.modalIsOpen=!1},closeModal:function(t){this.modalIsOpen=t},hidePost:function(t){this.$store.dispatch("hideIntroSlide",t)},editPost:function(t){var e=this;z.a.get("".concat("https://kuligindesign.firebaseio.com","/").concat("intro-slides","/").concat(t.id,".json")).then((function(t){return t.data})).then((function(data){e.$nextTick((function(){e.tab="tab-2",setTimeout((function(){e.editedPost=N(N({},data),{},{id:t.id})}),10)}))}))},tabResetForm:function(){null!=this.editedPost&&(this.editedPost=null)},editSubmitForm:function(t){var e=this;this.$store.dispatch("editIntroSlide",t),this.$nextTick((function(){setTimeout((function(){e.tab="tab-1"}),300)}))}},computed:{loadedSlides:function(){return this.$store.getters.getIntroSlides},isLoad:function(){return this.$store.getters.getLoadStatus}},components:{FormIntroSlider:V,PreviewCard:L,ModalCard:B}},G=(r(484),r(539)),H=r(520),K=r(540),Q=r(538),W=r(494),X=Object(l.a)(Y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"admin-page pb-10"},[r("div",{staticClass:"admin-section admin-section-intro"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("v-tabs",{staticClass:"elevation-2",attrs:{"background-color":"deep-purple accent-4",dark:"",centered:!0},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider"),t._v(" "),r("v-tab",{attrs:{href:"#tab-1"}},[r("v-badge",{attrs:{color:"green",content:t.loadedSlides.length}},[t._v("Preview slides")])],1),t._v(" "),r("v-tab",{attrs:{href:"#tab-2"},on:{click:t.tabResetForm}},[t._v("Create slide")]),t._v(" "),r("v-tab-item",{staticClass:"px-5 py-5",attrs:{value:"tab-1"}},[r("ProgressCircle",{attrs:{isProgress:t.isLoad}}),t._v(" "),t.isLoad&&0==t.loadedSlides.length?r("v-layout",{staticClass:"text-center my-10",attrs:{"d-block":""}},[r("p",[t._v("You are have not any slides")])]):t._e(),t._v(" "),t.isLoad?r("v-layout",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},t._l(t.loadedSlides,(function(e){return r("v-col",{key:e.id,attrs:{sm:"12",md:"6","d-flex":""}},[r("PreviewCard",{attrs:{id:e.id,title:e.title,image:e.image,imageExt:e.imageExt,visible:e.visible},on:{removeSlide:t.removeSlide,hidePost:t.hidePost,editPost:t.editPost}})],1)})),1)],1)],1):t._e(),t._v(" "),r("ModalCard",{attrs:{isOpen:t.modalIsOpen},on:{agreeModalEvent:t.agreeModalEvent,closeModal:t.closeModal}},[r("v-card",[r("v-card-title",{staticClass:"headline text-center"},[t._v("Do you agree delete this post")]),t._v(" "),r("v-card-text",{staticClass:"product-name"},[t._v(t._s(t.post.name))])],1)],1)],1),t._v(" "),r("v-tab-item",{staticClass:"px-5 py-5",attrs:{value:"tab-2"}},[r("div",{staticClass:"create-intro-slide"},[r("h3",[t._v("Create intro slide")]),t._v(" "),r("FormIntroSlider",{attrs:{post:t.editedPost},on:{submitForm:t.submitForm,editSubmitForm:t.editSubmitForm}})],1)])],1)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center py-10"},[e("h1",[this._v("Intro page")])])}],!1,null,null,null);e.default=X.exports;d()(X,{VBadge:G.a,VCard:$.a,VCardText:j.b,VCardTitle:j.c,VCol:v.a,VContainer:F.a,VLayout:f.a,VRow:h.a,VTab:H.a,VTabItem:K.a,VTabs:Q.a,VTabsSlider:W.a})}}]);