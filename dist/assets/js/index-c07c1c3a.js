import{k as u,e as c,$ as k,i as b,ah as w,R as S,X as T,o as i,c as o,a as d,K as W,T as f,V as B,J as I,P as O,L as m,n as $}from"./@vue-d9027515.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const R={key:1,class:"notice-bar-warp-slot"},_=u({name:"noticeBar"}),C=u({..._,props:{mode:{type:String,default:()=>""},text:{type:String,default:()=>""},color:{type:String,default:()=>"var(--el-color-warning)"},background:{type:String,default:()=>"var(--el-color-warning-light-9)"},size:{type:[Number,String],default:()=>14},height:{type:Number,default:()=>40},delay:{type:Number,default:()=>1},speed:{type:Number,default:()=>100},scrollable:{type:Boolean,default:()=>!1},leftIcon:{type:String,default:()=>""},rightIcon:{type:String,default:()=>""}},emits:["close","link"],setup(t,{emit:s}){const a=t,l=c(),n=c(),e=k({order:1,oneTime:0,twoTime:0,warpOWidth:0,textOWidth:0,isMode:!1}),y=()=>{$(()=>{e.warpOWidth=l.value.offsetWidth,e.textOWidth=n.value.offsetWidth,document.styleSheets[0].insertRule(`@keyframes oneAnimation {0% {left: 0px;} 100% {left: -${e.textOWidth}px;}}`),document.styleSheets[0].insertRule(`@keyframes twoAnimation {0% {left: ${e.warpOWidth}px;} 100% {left: -${e.textOWidth}px;}}`),h(),setTimeout(()=>{r()},a.delay*1e3)})},h=()=>{e.oneTime=e.textOWidth/a.speed,e.twoTime=(e.textOWidth+e.warpOWidth)/a.speed},r=()=>{e.order===1?(n.value.style.cssText=`animation: oneAnimation ${e.oneTime}s linear; opactity: 1;}`,e.order=2):n.value.style.cssText=`animation: twoAnimation ${e.twoTime}s linear infinite; opacity: 1;`},p=()=>{n.value.addEventListener("animationend",()=>{r()},!1)},x=()=>{if(!a.mode)return!1;a.mode==="closeable"?(e.isMode=!0,s("close")):a.mode==="link"&&s("link")};return b(()=>{if(a.scrollable)return!1;y(),p()}),(g,N)=>{const v=w("SvgIcon");return S((i(),o("div",{class:"notice-bar",style:m({background:t.background,height:`${t.height}px`})},[d("div",{class:"notice-bar-warp",style:m({color:t.color,fontSize:`${t.size}px`})},[t.leftIcon?(i(),o("i",{key:0,class:W(["notice-bar-warp-left-icon",t.leftIcon])},null,2)):f("",!0),d("div",{ref_key:"noticeBarWarpRef",ref:l,class:"notice-bar-warp-text-box"},[t.scrollable?(i(),o("div",R,[I(g.$slots,"default",{},void 0,!0)])):(i(),o("div",{key:0,ref_key:"noticeBarTextRef",ref:n,class:"notice-bar-warp-text"},B(t.text),513))],512),t.rightIcon?(i(),O(v,{key:1,name:t.rightIcon,class:"notice-bar-warp-right-icon",onClick:x},null,8,["name"])):f("",!0)],4)],4)),[[T,!e.isMode]])}}});const V=A(C,[["__scopeId","data-v-3a67e7a8"]]);export{V as default};
