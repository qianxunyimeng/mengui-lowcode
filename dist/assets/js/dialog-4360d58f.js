import{c as E,K as H,_ as O}from"./index-037cc65e.js";import{s as J}from"./pinia-be7e992d.js";import{k as D,aN as Q,e as W,$,i as j,ah as s,o as _,c as b,W as e,Q as l,a as S,U as u,V,T as c,F as U,u as q,P as G}from"./@vue-d9027515.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-0a4428f9.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-0d97455d.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-08a53ce8.js";import"./axios-707ed124.js";import"./qs-de266cd2.js";import"./side-channel-53d8bc92.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-6799e9cc.js";import"./object-inspect-8fd4bade.js";import"./element-plus-53094f07.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-17dc42b6.js";import"./vue-demi-71ba0ef2.js";const X={class:"system-menu-dialog-container"},Y={key:0},Z={class:"dialog-footer"},ee=D({name:"systemMenuDialog"}),Me=D({...ee,emits:["refresh"],setup(le,{expose:T,emit:w}){const L=Q(()=>O(()=>import("./index-bb31c59e.js"),["assets/js/index-bb31c59e.js","assets/js/index-037cc65e.js","assets/js/@vue-d9027515.js","assets/js/pinia-be7e992d.js","assets/js/vue-demi-71ba0ef2.js","assets/js/vue-router-a2fac16f.js","assets/js/vue-i18n-0a4428f9.js","assets/js/@intlify-ea47d1db.js","assets/js/source-map-7d7e1c08.js","assets/js/vue-0d97455d.js","assets/js/js-cookie-cf83ad76.js","assets/js/@element-plus-96a31696.js","assets/js/nprogress-08a53ce8.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-707ed124.js","assets/js/qs-de266cd2.js","assets/js/side-channel-53d8bc92.js","assets/js/get-intrinsic-b9397c9a.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/function-bind-22e7ee79.js","assets/js/has-26d28e02.js","assets/js/call-bind-6799e9cc.js","assets/js/object-inspect-8fd4bade.js","assets/js/element-plus-53094f07.js","assets/js/lodash-es-36eb724a.js","assets/js/@vueuse-2d9216d7.js","assets/js/@sxzz-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-f6fdf7b4.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-b8998962.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-8a8891e3.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-17dc42b6.js","assets/css/index-ed582937.css","assets/js/getStyleSheets-aae39d8c.js","assets/css/index-47b5c078.css"])),A=W(),C=E(),{routesList:v}=J(C),o=$({ruleForm:{menuSuperior:[],menuType:"menu",name:"",component:"",componentAlias:"",isLink:!1,menuSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""},btnPower:""},menuData:[],dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),g=f=>{const a=[];return f.map(n=>{var m;n.title=H.global.t((m=n.meta)==null?void 0:m.title),a.push({...n}),n.children&&g(n.children)}),a},I=(f,a)=>{f==="edit"?(a.menuType="menu",a.menuSort=Math.floor(Math.random()*100),o.ruleForm=JSON.parse(JSON.stringify(a)),o.dialog.title="修改菜单",o.dialog.submitTxt="修 改"):(o.dialog.title="新增菜单",o.dialog.submitTxt="新 增"),o.dialog.type=f,o.dialog.isShowDialog=!0},x=()=>{o.dialog.isShowDialog=!1},h=()=>{o.ruleForm.meta.isIframe?o.ruleForm.isLink=!0:o.ruleForm.isLink=!1},N=()=>{x()},P=()=>{x(),w("refresh")};return j(()=>{o.menuData=g(v.value)}),T({openDialog:I}),(f,a)=>{const n=s("el-cascader"),m=s("el-form-item"),r=s("el-col"),d=s("el-radio"),p=s("el-radio-group"),i=s("el-input"),F=s("el-option"),M=s("el-select"),R=s("el-input-number"),B=s("el-row"),K=s("el-form"),k=s("el-button"),z=s("el-dialog");return _(),b("div",X,[e(z,{modelValue:o.dialog.isShowDialog,"onUpdate:modelValue":a[17]||(a[17]=t=>o.dialog.isShowDialog=t),title:o.dialog.title,width:"769px"},{footer:l(()=>[S("span",Z,[e(k,{size:"default",onClick:N},{default:l(()=>[u("取 消")]),_:1}),e(k,{type:"primary",size:"default",onClick:P},{default:l(()=>[u(V(o.dialog.submitTxt),1)]),_:1})])]),default:l(()=>[e(K,{ref_key:"menuDialogFormRef",ref:A,model:o.ruleForm,size:"default","label-width":"80px"},{default:l(()=>[e(B,{gutter:35},{default:l(()=>[e(r,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"上级菜单"},{default:l(()=>[e(n,{modelValue:o.ruleForm.menuSuperior,"onUpdate:modelValue":a[0]||(a[0]=t=>o.ruleForm.menuSuperior=t),options:o.menuData,props:{checkStrictly:!0,value:"path",label:"title"},placeholder:"请选择上级菜单",clearable:"",class:"w100"},{default:l(({node:t,data:y})=>[S("span",null,V(y.title),1),t.isLeaf?c("",!0):(_(),b("span",Y," ("+V(y.children.length)+") ",1))]),_:1},8,["modelValue","options"])]),_:1})]),_:1}),e(r,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"菜单类型"},{default:l(()=>[e(p,{modelValue:o.ruleForm.menuType,"onUpdate:modelValue":a[1]||(a[1]=t=>o.ruleForm.menuType=t)},{default:l(()=>[e(d,{label:"menu"},{default:l(()=>[u("菜单")]),_:1}),e(d,{label:"btn"},{default:l(()=>[u("按钮")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单名称"},{default:l(()=>[e(i,{modelValue:o.ruleForm.meta.title,"onUpdate:modelValue":a[2]||(a[2]=t=>o.ruleForm.meta.title=t),placeholder:"格式：message.router.xxx",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(_(),b(U,{key:0},[e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由名称"},{default:l(()=>[e(i,{modelValue:o.ruleForm.name,"onUpdate:modelValue":a[3]||(a[3]=t=>o.ruleForm.name=t),placeholder:"路由中的 name 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由路径"},{default:l(()=>[e(i,{modelValue:o.ruleForm.path,"onUpdate:modelValue":a[4]||(a[4]=t=>o.ruleForm.path=t),placeholder:"路由中的 path 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"重定向"},{default:l(()=>[e(i,{modelValue:o.ruleForm.redirect,"onUpdate:modelValue":a[5]||(a[5]=t=>o.ruleForm.redirect=t),placeholder:"请输入路由重定向",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单图标"},{default:l(()=>[e(q(L),{modelValue:o.ruleForm.meta.icon,"onUpdate:modelValue":a[6]||(a[6]=t=>o.ruleForm.meta.icon=t),placeholder:"请输入菜单图标"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"组件路径"},{default:l(()=>[e(i,{modelValue:o.ruleForm.componentAlias,"onUpdate:modelValue":a[7]||(a[7]=t=>o.ruleForm.componentAlias=t),placeholder:"组件路径",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"链接地址"},{default:l(()=>[e(i,{modelValue:o.ruleForm.meta.isLink,"onUpdate:modelValue":a[8]||(a[8]=t=>o.ruleForm.meta.isLink=t),placeholder:"外链/内嵌时链接地址（http:xxx.com）",clearable:"",disabled:!o.ruleForm.isLink},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(M,{modelValue:o.ruleForm.meta.roles,"onUpdate:modelValue":a[9]||(a[9]=t=>o.ruleForm.meta.roles=t),multiple:"",placeholder:"取角色管理",clearable:"",class:"w100"},{default:l(()=>[e(F,{label:"admin",value:"admin"}),e(F,{label:"common",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):c("",!0),o.ruleForm.menuType==="btn"?(_(),G(r,{key:1,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(i,{modelValue:o.ruleForm.btnPower,"onUpdate:modelValue":a[10]||(a[10]=t=>o.ruleForm.btnPower=t),placeholder:"请输入权限标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):c("",!0),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单排序"},{default:l(()=>[e(R,{modelValue:o.ruleForm.menuSort,"onUpdate:modelValue":a[11]||(a[11]=t=>o.ruleForm.menuSort=t),"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(_(),b(U,{key:2},[e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否隐藏"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isHide,"onUpdate:modelValue":a[12]||(a[12]=t=>o.ruleForm.meta.isHide=t)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("隐藏")]),_:1}),e(d,{label:!1},{default:l(()=>[u("不隐藏")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"页面缓存"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isKeepAlive,"onUpdate:modelValue":a[13]||(a[13]=t=>o.ruleForm.meta.isKeepAlive=t)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("缓存")]),_:1}),e(d,{label:!1},{default:l(()=>[u("不缓存")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否固定"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isAffix,"onUpdate:modelValue":a[14]||(a[14]=t=>o.ruleForm.meta.isAffix=t)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("固定")]),_:1}),e(d,{label:!1},{default:l(()=>[u("不固定")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否外链"},{default:l(()=>[e(p,{modelValue:o.ruleForm.isLink,"onUpdate:modelValue":a[15]||(a[15]=t=>o.ruleForm.isLink=t),disabled:o.ruleForm.meta.isIframe},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("是")]),_:1}),e(d,{label:!1},{default:l(()=>[u("否")]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否内嵌"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isIframe,"onUpdate:modelValue":a[16]||(a[16]=t=>o.ruleForm.meta.isIframe=t),onChange:h},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("是")]),_:1}),e(d,{label:!1},{default:l(()=>[u("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):c("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{Me as default};
