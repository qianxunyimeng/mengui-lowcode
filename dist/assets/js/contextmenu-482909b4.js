import{k as p,$ as k,j as y,i as v,_ as L,f as V,ah as I,o,P as S,Q as M,R as b,c as a,L as d,u,a as l,F as m,a9 as E,W as $,V as W,T as B,X as T,Y as j}from"./@vue-d9027515.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const F={class:"el-dropdown-menu"},N=["onClick"],O=p({name:"layoutTagsViewContextmenu"}),R=p({...O,props:{dropdown:{type:Object,default:()=>({x:0,y:0})}},emits:["currentContextmenuClick"],setup(f,{expose:x,emit:_}){const n=f,e=k({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"message.tagsView.refresh",affix:!1,icon:"ele-RefreshRight"},{contextMenuClickId:1,txt:"message.tagsView.close",affix:!1,icon:"ele-Close"},{contextMenuClickId:2,txt:"message.tagsView.closeOther",affix:!1,icon:"ele-CircleClose"},{contextMenuClickId:3,txt:"message.tagsView.closeAll",affix:!1,icon:"ele-FolderDelete"},{contextMenuClickId:4,txt:"message.tagsView.fullscreen",affix:!1,icon:"iconfont icon-fullscreen"}],item:{},arrowLeft:10}),r=y(()=>n.dropdown.x+117>document.documentElement.clientWidth?{x:document.documentElement.clientWidth-117-5,y:n.dropdown.y}:n.dropdown),w=t=>{_("currentContextmenuClick",Object.assign({},{contextMenuClickId:t},e.item))},C=t=>{var i;e.item=t,(i=t.meta)!=null&&i.isAffix?e.dropdownList[1].affix=!0:e.dropdownList[1].affix=!1,c(),setTimeout(()=>{e.isShow=!0},10)},c=()=>{e.isShow=!1};return v(()=>{document.body.addEventListener("click",c)}),L(()=>{document.body.removeEventListener("click",c)}),V(()=>n.dropdown,({x:t})=>{t+117>document.documentElement.clientWidth?e.arrowLeft=117-(document.documentElement.clientWidth-t):e.arrowLeft=10},{deep:!0}),x({openContextmenu:C}),(t,i)=>{const h=I("SvgIcon");return o(),S(j,{name:"el-zoom-in-center"},{default:M(()=>[b((o(),a("div",{key:Math.random(),"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:d(`top: ${u(r).y+5}px;left: ${u(r).x}px;`)},[l("ul",F,[(o(!0),a(m,null,E(e.dropdownList,(s,g)=>(o(),a(m,null,[s.affix?B("",!0):(o(),a("li",{key:g,class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",onClick:z=>w(s.contextMenuClickId)},[$(h,{name:s.icon},null,8,["name"]),l("span",null,W(t.$t(s.txt)),1)],8,N))],64))),256))]),l("div",{class:"el-popper__arrow",style:d({left:`${e.arrowLeft}px`})},null,4)],4)),[[T,e.isShow]])]),_:1})}}});const Q=D(R,[["__scopeId","data-v-71c581e4"]]);export{Q as default};
