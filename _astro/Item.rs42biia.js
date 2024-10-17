import{_ as u,o as g,n as w,t as h,s as D}from"./_plugin-vue_export-helper.DHGwuR6g.js";import{s as b}from"./_pid_.f64e200c.Bo4d--rB.js";import{d as _,o as s,c as l,w as r,r as a,a as i,q as m,s as y,v as M,x as d,y as c,z as v}from"./runtime-dom.esm-bundler.BdZGCqXL.js";import{I as x}from"./Icon.CQePs--7.js";const z=_({__name:"Dropdown",props:{align:{},offset:{}},setup(n,{expose:o}){o();const e={get DropdownMenuContent(){return g},get DropdownMenuPortal(){return w},get DropdownMenuRoot(){return h}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function C(n,o,e,t,p,f){return s(),l(t.DropdownMenuRoot,null,{default:r(()=>[a(n.$slots,"trigger"),i(t.DropdownMenuPortal,null,{default:r(()=>[i(t.DropdownMenuContent,{align:e.align,"side-offset":e.offset??4,"avoid-collisions":"",class:m(["z-1 grid min-w-64 w-min rounded-lg bg-white/95 p-1 shadow-lg ring-1 ring-zinc-200 backdrop-blur-xl lg:min-w-56",n.$style.columns])},{default:r(()=>[a(n.$slots,"default")]),_:3},8,["align","side-offset","class"])]),_:3})]),_:3})}const I={$style:b},O=u(z,[["render",C],["__cssModules",I]]),k=_({__name:"Item",props:{as:{},label:{},icon:{},variant:{}},setup(n,{expose:o}){o();const e={get DropdownMenuItem(){return D},Icon:x};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),S={key:0,class:"col-start-2 truncate"};function P(n,o,e,t,p,f){return s(),l(t.DropdownMenuItem,{"as-child":""},{default:r(()=>[(s(),l(y(e.as),M(n.$attrs,{class:["group grid col-span-full grid-cols-subgrid h-9 items-center gap-2 rounded-md px-3 text-sm data-[highlighted]:bg-zinc-950/5",e.variant==="danger"&&"text-red-600"]}),{default:r(()=>[a(n.$slots,"icon",{},()=>[e.icon?(s(),d("span",{key:0,class:m(e.variant==="danger"?"text-red-500":"text-zinc-500 group-hover:text-zinc-600")},[i(t.Icon,{name:e.icon},null,8,["name"])],2)):c("",!0)]),a(n.$slots,"label",{},()=>[e.label?(s(),d("span",S,v(e.label),1)):c("",!0)])]),_:3},16,["class"]))]),_:3})}const R=u(k,[["render",P]]);export{O as D,R as a};
