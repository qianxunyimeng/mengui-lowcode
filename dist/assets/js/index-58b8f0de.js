import{C as x}from"./cropperjs-3e95362b.js";import{k as d,$ as C,ah as l,o as I,c as b,W as a,Q as r,a as e,U as n,n as S,bb as D,b9 as k}from"./@vue-d9027515.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const p=s=>(D("data-v-8f2aa5af"),s=s(),k(),s),V={class:"cropper-warp"},y={class:"cropper-warp-left"},z=["src"],N={class:"cropper-warp-right"},R=p(()=>e("div",{class:"cropper-warp-right-title"},"预览",-1)),U={class:"cropper-warp-right-item"},A={class:"cropper-warp-right-value"},M=["src"],T=p(()=>e("div",{class:"cropper-warp-right-label"},"100 x 100",-1)),W={class:"cropper-warp-right-item"},j={class:"cropper-warp-right-value"},q=["src"],E=p(()=>e("div",{class:"cropper-warp-right-label"},"50 x 50",-1)),L={class:"dialog-footer"},O=d({name:"cropper"}),Q=d({...O,setup(s,{expose:_}){const o=C({isShowDialog:!1,cropperImg:"",cropperImgBase64:"",cropper:""}),g=t=>{o.cropperImg=t,o.isShowDialog=!0,S(()=>{f()})},m=()=>{o.isShowDialog=!1},h=()=>{m()},u=()=>{},f=()=>{const t=document.querySelector(".cropper-warp-left-img");o.cropper=new x(t,{viewMode:1,dragMode:"none",initialAspectRatio:1,aspectRatio:1,preview:".before",background:!1,autoCropArea:.6,zoomOnWheel:!1,crop:()=>{o.cropperImgBase64=o.cropper.getCroppedCanvas().toDataURL("image/jpeg")}})};return _({openDialog:g}),(t,c)=>{const i=l("el-button"),w=l("el-dialog");return I(),b("div",null,[a(w,{title:"更换头像",modelValue:o.isShowDialog,"onUpdate:modelValue":c[0]||(c[0]=v=>o.isShowDialog=v),width:"769px"},{footer:r(()=>[e("span",L,[a(i,{onClick:h,size:"default"},{default:r(()=>[n("取 消")]),_:1}),a(i,{type:"primary",onClick:u,size:"default"},{default:r(()=>[n("更 换")]),_:1})])]),default:r(()=>[e("div",V,[e("div",y,[e("img",{src:o.cropperImg,class:"cropper-warp-left-img"},null,8,z)]),e("div",N,[R,e("div",U,[e("div",A,[e("img",{src:o.cropperImgBase64,class:"cropper-warp-right-value-img"},null,8,M)]),T]),e("div",W,[e("div",j,[e("img",{src:o.cropperImgBase64,class:"cropper-warp-right-value-img cropper-size"},null,8,q)]),E])])])]),_:1},8,["modelValue"])])}}});const H=B(Q,[["__scopeId","data-v-8f2aa5af"]]);export{H as default};
