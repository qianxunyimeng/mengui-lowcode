import{g as f}from"./get-intrinsic-b9397c9a.js";import{f as B}from"./function-bind-22e7ee79.js";var v={exports:{}};(function(a){var n=B,r=f,e=r("%Function.prototype.apply%"),p=r("%Function.prototype.call%"),l=r("%Reflect.apply%",!0)||n.call(p,e),o=r("%Object.getOwnPropertyDescriptor%",!0),t=r("%Object.defineProperty%",!0),g=r("%Math.max%");if(t)try{t({},"a",{value:1})}catch{t=null}a.exports=function(d){var i=l(n,p,arguments);if(o&&t){var x=o(i,"length");x.configurable&&t(i,"length",{value:1+g(0,d.length-(arguments.length-1))})}return i};var c=function(){return l(n,e,arguments)};t?t(a.exports,"apply",{value:c}):a.exports.apply=c})(v);var $=v.exports,s=f,y=$,h=y(s("String.prototype.indexOf")),b=function(n,r){var e=s(n,!!r);return typeof e=="function"&&h(n,".prototype.")>-1?y(e):e};export{b as c};
