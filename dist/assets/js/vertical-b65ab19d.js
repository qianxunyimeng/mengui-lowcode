import{_ as V,u as W,o as $}from"./index-037cc65e.js";import{k as y,aN as w,$ as x,j as C,i as R,f as q,ah as p,o as s,P as c,Q as n,c as k,F as g,a9 as v,u,W as d,a as f,V as h,ab as E,a4 as M}from"./@vue-d9027515.js";import{u as N,o as O}from"./vue-router-a2fac16f.js";import{s as j}from"./pinia-be7e992d.js";import"./vue-i18n-0a4428f9.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-0d97455d.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-08a53ce8.js";import"./axios-707ed124.js";import"./qs-de266cd2.js";import"./side-channel-53d8bc92.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-6799e9cc.js";import"./object-inspect-8fd4bade.js";import"./element-plus-53094f07.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-17dc42b6.js";import"./vue-demi-71ba0ef2.js";const F=y({name:"navMenuVertical"}),Pe=y({...F,props:{menuList:{type:Array,default:()=>[]}},setup(L){const A=L,b=w(()=>V(()=>import("./subItem-f0fb8c4b.js"),["assets/js/subItem-f0fb8c4b.js","assets/js/@vue-d9027515.js","assets/js/index-037cc65e.js","assets/js/pinia-be7e992d.js","assets/js/vue-demi-71ba0ef2.js","assets/js/vue-router-a2fac16f.js","assets/js/vue-i18n-0a4428f9.js","assets/js/@intlify-ea47d1db.js","assets/js/source-map-7d7e1c08.js","assets/js/vue-0d97455d.js","assets/js/js-cookie-cf83ad76.js","assets/js/@element-plus-96a31696.js","assets/js/nprogress-08a53ce8.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-707ed124.js","assets/js/qs-de266cd2.js","assets/js/side-channel-53d8bc92.js","assets/js/get-intrinsic-b9397c9a.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/function-bind-22e7ee79.js","assets/js/has-26d28e02.js","assets/js/call-bind-6799e9cc.js","assets/js/object-inspect-8fd4bade.js","assets/js/element-plus-53094f07.js","assets/js/lodash-es-36eb724a.js","assets/js/@vueuse-2d9216d7.js","assets/js/@sxzz-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-f6fdf7b4.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-b8998962.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-8a8891e3.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-17dc42b6.js","assets/css/index-ed582937.css"])),D=W(),{themeConfig:l}=j(D),a=N(),i=x({defaultActive:a.meta.isDynamic?a.meta.isDynamicPath:a.path,isCollapse:!1}),P=C(()=>A.menuList),S=C(()=>l.value),_=t=>{const{path:r,meta:o}=t,m=o!=null&&o.isDynamic?o.isDynamicPath.split("/"):r.split("/");return m.length>=4&&(o!=null&&o.isHide)?m.splice(0,3).join("/"):r},B=t=>{$.handleOpenLink(t)};return R(()=>{i.defaultActive=_(a)}),O(t=>{i.defaultActive=_(t),document.body.clientWidth<1e3&&(l.value.isCollapse=!1)}),q(()=>l.value.isCollapse,t=>{document.body.clientWidth<=1e3?i.isCollapse=!1:i.isCollapse=t},{immediate:!0}),(t,r)=>{const o=p("SvgIcon"),m=p("el-sub-menu"),I=p("el-menu-item"),T=p("el-menu");return s(),c(T,{router:"","default-active":i.defaultActive,"background-color":"transparent",collapse:i.isCollapse,"unique-opened":u(S).isUniqueOpened,"collapse-transition":!1},{default:n(()=>[(s(!0),k(g,null,v(u(P),e=>(s(),k(g,null,[e.children&&e.children.length>0?(s(),c(m,{index:e.path,key:e.path},{title:n(()=>[d(o,{name:e.meta.icon},null,8,["name"]),f("span",null,h(t.$t(e.meta.title)),1)]),default:n(()=>[d(u(b),{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(s(),c(I,{index:e.path,key:e.path},E({default:n(()=>[d(o,{name:e.meta.icon},null,8,["name"])]),_:2},[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?{name:"title",fn:n(()=>[f("span",null,h(t.$t(e.meta.title)),1)]),key:"0"}:{name:"title",fn:n(()=>[f("a",{class:"w100",onClick:M(H=>B(e),["prevent"])},h(t.$t(e.meta.title)),9,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active","collapse","unique-opened"])}}});export{Pe as default};
