import{s as f}from"./pinia-be7e992d.js";import{u}from"./index-037cc65e.js";import{k as r,$ as h,j as k,ah as g,o as e,c as i,a as n,V as v,u as C,F as w,a9 as N,W as T}from"./@vue-d9027515.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-0a4428f9.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-0d97455d.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-08a53ce8.js";import"./axios-707ed124.js";import"./qs-de266cd2.js";import"./side-channel-53d8bc92.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-6799e9cc.js";import"./object-inspect-8fd4bade.js";import"./element-plus-53094f07.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-17dc42b6.js";const y={class:"workflow-tool"},D={class:"pl15"},S={class:"workflow-tool-right"},B=["title","onClick"],F=r({name:"pagesWorkflowTool"}),I=r({...F,emits:["tool"],setup(L,{emit:s}){const l=u(),{themeConfig:m}=f(l),p=h({toolList:[{icon:"ele-Help",title:"帮助",fnName:"help"},{icon:"ele-Download",title:"下载",fnName:"download"},{icon:"ele-Check",title:"提交",fnName:"submit"},{icon:"ele-DocumentCopy",title:"复制",fnName:"copy"},{icon:"ele-Delete",title:"删除",fnName:"del"},{icon:"ele-FullScreen",title:"全屏",fnName:"fullscreen"}]}),a=k(()=>{const{globalTitle:o}=m.value;return`${o}工作流`}),c=o=>{s("tool",o)};return(o,V)=>{const _=g("SvgIcon");return e(),i("div",y,[n("div",D,v(C(a)),1),n("div",S,[(e(!0),i(w,null,N(p.toolList,(t,d)=>(e(),i("div",{key:d,class:"workflow-tool-icon",title:t.title,onClick:$=>c(t.fnName)},[T(_,{name:t.icon},null,8,["name"])],8,B))),128))])])}}});const ho=x(I,[["__scopeId","data-v-d46d9dd0"]]);export{ho as default};
