"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("../style/index.css");const u=Object.assign({name:"DemoButton"},{__name:"button",props:{type:{type:String,default:"primary"}},setup(o){const t=o,n=e.computed(()=>({[`whoo-button--${t.type}`]:t.type}));return(r,s)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["whoo-button",n.value])},[e.renderSlot(r.$slots,"default")],2))}});exports.default=u;
