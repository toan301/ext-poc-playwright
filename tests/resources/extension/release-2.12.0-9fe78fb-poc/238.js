(self.webpackChunkbrowser_extension_wallet=self.webpackChunkbrowser_extension_wallet||[]).push([[238],{62705:(m,R,r)=>{var t=r(55639),f=t.Symbol;m.exports=f},44239:(m,R,r)=>{var t=r(62705),f=r(89607),T=r(2333),S="[object Null]",p="[object Undefined]",g=t?t.toStringTag:void 0;function u(O){return O==null?O===void 0?p:S:g&&g in Object(O)?f(O):T(O)}m.exports=u},27561:(m,R,r)=>{var t=r(67990),f=/^\s+/;function T(S){return S&&S.slice(0,t(S)+1).replace(f,"")}m.exports=T},31957:(m,R,r)=>{var t=typeof r.g=="object"&&r.g&&r.g.Object===Object&&r.g;m.exports=t},89607:(m,R,r)=>{var t=r(62705),f=Object.prototype,T=f.hasOwnProperty,S=f.toString,p=t?t.toStringTag:void 0;function g(u){var O=T.call(u,p),b=u[p];try{u[p]=void 0;var x=!0}catch{}var L=S.call(u);return x&&(O?u[p]=b:delete u[p]),L}m.exports=g},2333:m=>{var R=Object.prototype,r=R.toString;function t(f){return r.call(f)}m.exports=t},55639:(m,R,r)=>{var t=r(31957),f=typeof self=="object"&&self&&self.Object===Object&&self,T=t||f||Function("return this")();m.exports=T},67990:m=>{var R=/\s/;function r(t){for(var f=t.length;f--&&R.test(t.charAt(f)););return f}m.exports=r},23279:(m,R,r)=>{var t=r(13218),f=r(7771),T=r(14841),S="Expected a function",p=Math.max,g=Math.min;function u(O,b,x){var L,A,W,V,N,$,J=0,ee=!1,U=!1,te=!0;if(typeof O!="function")throw new TypeError(S);b=T(b)||0,t(x)&&(ee=!!x.leading,U="maxWait"in x,W=U?p(T(x.maxWait)||0,b):W,te="trailing"in x?!!x.trailing:te);function ne(v){var Q=L,X=A;return L=A=void 0,J=v,V=O.apply(X,Q),V}function C(v){return J=v,N=setTimeout(Y,b),ee?ne(v):V}function de(v){var Q=v-$,X=v-J,ae=b-Q;return U?g(ae,W-X):ae}function _(v){var Q=v-$,X=v-J;return $===void 0||Q>=b||Q<0||U&&X>=W}function Y(){var v=f();if(_(v))return ie(v);N=setTimeout(Y,de(v))}function ie(v){return N=void 0,te&&L?ne(v):(L=A=void 0,V)}function H(){N!==void 0&&clearTimeout(N),J=0,L=$=A=N=void 0}function fe(){return N===void 0?V:ie(f())}function D(){var v=f(),Q=_(v);if(L=arguments,A=this,$=v,Q){if(N===void 0)return C($);if(U)return clearTimeout(N),N=setTimeout(Y,b),ne($)}return N===void 0&&(N=setTimeout(Y,b)),V}return D.cancel=H,D.flush=fe,D}m.exports=u},13218:m=>{function R(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}m.exports=R},37005:m=>{function R(r){return r!=null&&typeof r=="object"}m.exports=R},33448:(m,R,r)=>{var t=r(44239),f=r(37005),T="[object Symbol]";function S(p){return typeof p=="symbol"||f(p)&&t(p)==T}m.exports=S},7771:(m,R,r)=>{var t=r(55639),f=function(){return t.Date.now()};m.exports=f},14841:(m,R,r)=>{var t=r(27561),f=r(13218),T=r(33448),S=0/0,p=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,u=/^0o[0-7]+$/i,O=parseInt;function b(x){if(typeof x=="number")return x;if(T(x))return S;if(f(x)){var L=typeof x.valueOf=="function"?x.valueOf():x;x=f(L)?L+"":L}if(typeof x!="string")return x===0?x:+x;x=t(x);var A=g.test(x);return A||u.test(x)?O(x.slice(2),A?2:8):p.test(x)?S:+x}m.exports=b},75498:(m,R,r)=>{"use strict";r.d(R,{R:()=>Ne});var t=r(67294),f=r(16723),T=r(3855);function S(e,a){let[o,i]=(0,t.useState)(e),s=(0,T.E)(e);return(0,f.e)(()=>i(s.current),[s,i,...a]),o}var p=r(31147),g=r(85563),u=r(73781),O=r(19946),b=r(43986),x=r(14157),L=r(23784);let A=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function W(e){var a,o;let i=(a=e.innerText)!=null?a:"",s=e.cloneNode(!0);if(!(s instanceof HTMLElement))return i;let n=!1;for(let d of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))d.remove(),n=!0;let l=n?(o=s.innerText)!=null?o:"":i;return A.test(l)&&(l=l.replace(A,"")),l}function V(e){let a=e.getAttribute("aria-label");if(typeof a=="string")return a.trim();let o=e.getAttribute("aria-labelledby");if(o){let i=o.split(" ").map(s=>{let n=document.getElementById(s);if(n){let l=n.getAttribute("aria-label");return typeof l=="string"?l.trim():W(n).trim()}return null}).filter(Boolean);if(i.length>0)return i.join(", ")}return W(e).trim()}function N(e){let a=(0,t.useRef)(""),o=(0,t.useRef)("");return(0,u.z)(()=>{let i=e.current;if(!i)return"";let s=i.innerText;if(a.current===s)return o.current;let n=V(i).trim().toLowerCase();return a.current=s,o.current=n,n})}function $(e){return[e.screenX,e.screenY]}function J(){let e=(0,t.useRef)([-1,-1]);return{wasMoved(a){let o=$(a);return e.current[0]===o[0]&&e.current[1]===o[1]?!1:(e.current=o,!0)},update(a){e.current=$(a)}}}var ee=r(46045),U=r(16567),te=r(64103);function ne(e){throw new Error("Unexpected object: "+e)}var C=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(C||{});function de(e,a){let o=a.resolveItems();if(o.length<=0)return null;let i=a.resolveActiveIndex(),s=i??-1;switch(e.focus){case 0:{for(let n=0;n<o.length;++n)if(!a.resolveDisabled(o[n],n,o))return n;return i}case 1:{for(let n=s-1;n>=0;--n)if(!a.resolveDisabled(o[n],n,o))return n;return i}case 2:{for(let n=s+1;n<o.length;++n)if(!a.resolveDisabled(o[n],n,o))return n;return i}case 3:{for(let n=o.length-1;n>=0;--n)if(!a.resolveDisabled(o[n],n,o))return n;return i}case 4:{for(let n=0;n<o.length;++n)if(a.resolveId(o[n],n,o)===e.id)return n;return i}case 5:return null;default:ne(e)}}var _=r(9362),Y=r(84575),ie=r(18689),H=r(32984),fe=r(15466),D=r(12351),v=r(61363),Q=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Q||{}),X=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(X||{}),ae=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ae||{}),he=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(he||{});function pe(e,a=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,i=(0,Y.z2)(a(e.options.slice()),n=>n.dataRef.current.domRef.current),s=o?i.indexOf(o):null;return s===-1&&(s=null),{options:i,activeOptionIndex:s}}let Oe={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let a=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,i=e.options.findIndex(s=>o(s.dataRef.current.value));return i!==-1&&(a=i),{...e,listboxState:0,activeOptionIndex:a}},2(e,a){var o;if(e.dataRef.current.disabled||e.listboxState===1)return e;let i=pe(e),s=de(a,{resolveItems:()=>i.options,resolveActiveIndex:()=>i.activeOptionIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.current.disabled});return{...e,...i,searchQuery:"",activeOptionIndex:s,activationTrigger:(o=a.trigger)!=null?o:1}},3:(e,a)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=e.searchQuery!==""?0:1,i=e.searchQuery+a.value.toLowerCase(),s=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+o).concat(e.options.slice(0,e.activeOptionIndex+o)):e.options).find(l=>{var d;return!l.dataRef.current.disabled&&((d=l.dataRef.current.textValue)==null?void 0:d.startsWith(i))}),n=s?e.options.indexOf(s):-1;return n===-1||n===e.activeOptionIndex?{...e,searchQuery:i}:{...e,searchQuery:i,activeOptionIndex:n,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,a)=>{let o={id:a.id,dataRef:a.dataRef},i=pe(e,s=>[...s,o]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(a.dataRef.current.value)&&(i.activeOptionIndex=i.options.indexOf(o)),{...e,...i}},6:(e,a)=>{let o=pe(e,i=>{let s=i.findIndex(n=>n.id===a.id);return s!==-1&&i.splice(s,1),i});return{...e,...o,activationTrigger:1}},7:(e,a)=>({...e,labelId:a.id})},ve=(0,t.createContext)(null);ve.displayName="ListboxActionsContext";function re(e){let a=(0,t.useContext)(ve);if(a===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,re),o}return a}let be=(0,t.createContext)(null);be.displayName="ListboxDataContext";function oe(e){let a=(0,t.useContext)(be);if(a===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,oe),o}return a}function ye(e,a){return(0,H.E)(a.type,Oe,e,a)}let Re=t.Fragment;function Se(e,a){let{value:o,defaultValue:i,form:s,name:n,onChange:l,by:d=(h,y)=>h===y,disabled:E=!1,horizontal:j=!1,multiple:z=!1,...G}=e;const q=j?"horizontal":"vertical";let K=(0,L.T)(a),[F=z?[]:void 0,B]=(0,p.q)(o,l,i),[P,c]=(0,t.useReducer)(ye,{dataRef:(0,t.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),M=(0,t.useRef)({static:!1,hold:!1}),le=(0,t.useRef)(null),ue=(0,t.useRef)(null),xe=(0,t.useRef)(null),k=(0,u.z)(typeof d=="string"?(h,y)=>{let w=d;return h?.[w]===y?.[w]}:d),Z=(0,t.useCallback)(h=>(0,H.E)(I.mode,{1:()=>F.some(y=>k(y,h)),0:()=>k(F,h)}),[F]),I=(0,t.useMemo)(()=>({...P,value:F,disabled:E,mode:z?1:0,orientation:q,compare:k,isSelected:Z,optionsPropsRef:M,labelRef:le,buttonRef:ue,optionsRef:xe}),[F,E,z,P]);(0,f.e)(()=>{P.dataRef.current=I},[I]),(0,b.O)([I.buttonRef,I.optionsRef],(h,y)=>{var w;c({type:1}),(0,Y.sP)(y,Y.tJ.Loose)||(h.preventDefault(),(w=I.buttonRef.current)==null||w.focus())},I.listboxState===0);let Be=(0,t.useMemo)(()=>({open:I.listboxState===0,disabled:E,value:F}),[I,E,F]),Ue=(0,u.z)(h=>{let y=I.options.find(w=>w.id===h);y&&ge(y.dataRef.current.value)}),Ge=(0,u.z)(()=>{if(I.activeOptionIndex!==null){let{dataRef:h,id:y}=I.options[I.activeOptionIndex];ge(h.current.value),c({type:2,focus:C.Specific,id:y})}}),We=(0,u.z)(()=>c({type:0})),$e=(0,u.z)(()=>c({type:1})),Qe=(0,u.z)((h,y,w)=>h===C.Specific?c({type:2,focus:C.Specific,id:y,trigger:w}):c({type:2,focus:h,trigger:w})),Ve=(0,u.z)((h,y)=>(c({type:5,id:h,dataRef:y}),()=>c({type:6,id:h}))),Ye=(0,u.z)(h=>(c({type:7,id:h}),()=>c({type:7,id:null}))),ge=(0,u.z)(h=>(0,H.E)(I.mode,{0(){return B?.(h)},1(){let y=I.value.slice(),w=y.findIndex(ce=>k(ce,h));return w===-1?y.push(h):y.splice(w,1),B?.(y)}})),He=(0,u.z)(h=>c({type:3,value:h})),Ke=(0,u.z)(()=>c({type:4})),Ze=(0,t.useMemo)(()=>({onChange:ge,registerOption:Ve,registerLabel:Ye,goToOption:Qe,closeListbox:$e,openListbox:We,selectActiveOption:Ge,selectOption:Ue,search:He,clearSearch:Ke}),[]),Je={ref:K},se=(0,t.useRef)(null),Xe=(0,g.G)();return(0,t.useEffect)(()=>{se.current&&i!==void 0&&Xe.addEventListener(se.current,"reset",()=>{B?.(i)})},[se,B]),t.createElement(ve.Provider,{value:Ze},t.createElement(be.Provider,{value:I},t.createElement(U.up,{value:(0,H.E)(I.listboxState,{0:U.ZM.Open,1:U.ZM.Closed})},n!=null&&F!=null&&(0,ie.t)({[n]:F}).map(([h,y],w)=>t.createElement(ee._,{features:ee.A.Hidden,ref:w===0?ce=>{var me;se.current=(me=ce?.closest("form"))!=null?me:null}:void 0,...(0,D.oA)({key:h,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,name:h,value:y})})),(0,D.sY)({ourProps:Je,theirProps:G,slot:Be,defaultTag:Re,name:"Listbox"}))))}let Te="button";function Le(e,a){var o;let i=(0,O.M)(),{id:s=`headlessui-listbox-button-${i}`,...n}=e,l=oe("Listbox.Button"),d=re("Listbox.Button"),E=(0,L.T)(l.buttonRef,a),j=(0,g.G)(),z=(0,u.z)(P=>{switch(P.key){case v.R.Space:case v.R.Enter:case v.R.ArrowDown:P.preventDefault(),d.openListbox(),j.nextFrame(()=>{l.value||d.goToOption(C.First)});break;case v.R.ArrowUp:P.preventDefault(),d.openListbox(),j.nextFrame(()=>{l.value||d.goToOption(C.Last)});break}}),G=(0,u.z)(P=>{switch(P.key){case v.R.Space:P.preventDefault();break}}),q=(0,u.z)(P=>{if((0,te.P)(P.currentTarget))return P.preventDefault();l.listboxState===0?(d.closeListbox(),j.nextFrame(()=>{var c;return(c=l.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})})):(P.preventDefault(),d.openListbox())}),K=S(()=>{if(l.labelId)return[l.labelId,s].join(" ")},[l.labelId,s]),F=(0,t.useMemo)(()=>({open:l.listboxState===0,disabled:l.disabled,value:l.value}),[l]),B={ref:E,id:s,type:(0,x.f)(e,l.buttonRef),"aria-haspopup":"listbox","aria-controls":(o=l.optionsRef.current)==null?void 0:o.id,"aria-expanded":l.listboxState===0,"aria-labelledby":K,disabled:l.disabled,onKeyDown:z,onKeyUp:G,onClick:q};return(0,D.sY)({ourProps:B,theirProps:n,slot:F,defaultTag:Te,name:"Listbox.Button"})}let Ie="label";function Ee(e,a){let o=(0,O.M)(),{id:i=`headlessui-listbox-label-${o}`,...s}=e,n=oe("Listbox.Label"),l=re("Listbox.Label"),d=(0,L.T)(n.labelRef,a);(0,f.e)(()=>l.registerLabel(i),[i]);let E=(0,u.z)(()=>{var z;return(z=n.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})}),j=(0,t.useMemo)(()=>({open:n.listboxState===0,disabled:n.disabled}),[n]);return(0,D.sY)({ourProps:{ref:d,id:i,onClick:E},theirProps:s,slot:j,defaultTag:Ie,name:"Listbox.Label"})}let Pe="ul",De=D.AN.RenderStrategy|D.AN.Static;function Me(e,a){var o;let i=(0,O.M)(),{id:s=`headlessui-listbox-options-${i}`,...n}=e,l=oe("Listbox.Options"),d=re("Listbox.Options"),E=(0,L.T)(l.optionsRef,a),j=(0,g.G)(),z=(0,g.G)(),G=(0,U.oJ)(),q=(()=>G!==null?(G&U.ZM.Open)===U.ZM.Open:l.listboxState===0)();(0,t.useEffect)(()=>{var c;let M=l.optionsRef.current;M&&l.listboxState===0&&M!==((c=(0,fe.r)(M))==null?void 0:c.activeElement)&&M.focus({preventScroll:!0})},[l.listboxState,l.optionsRef]);let K=(0,u.z)(c=>{switch(z.dispose(),c.key){case v.R.Space:if(l.searchQuery!=="")return c.preventDefault(),c.stopPropagation(),d.search(c.key);case v.R.Enter:if(c.preventDefault(),c.stopPropagation(),l.activeOptionIndex!==null){let{dataRef:M}=l.options[l.activeOptionIndex];d.onChange(M.current.value)}l.mode===0&&(d.closeListbox(),(0,_.k)().nextFrame(()=>{var M;return(M=l.buttonRef.current)==null?void 0:M.focus({preventScroll:!0})}));break;case(0,H.E)(l.orientation,{vertical:v.R.ArrowDown,horizontal:v.R.ArrowRight}):return c.preventDefault(),c.stopPropagation(),d.goToOption(C.Next);case(0,H.E)(l.orientation,{vertical:v.R.ArrowUp,horizontal:v.R.ArrowLeft}):return c.preventDefault(),c.stopPropagation(),d.goToOption(C.Previous);case v.R.Home:case v.R.PageUp:return c.preventDefault(),c.stopPropagation(),d.goToOption(C.First);case v.R.End:case v.R.PageDown:return c.preventDefault(),c.stopPropagation(),d.goToOption(C.Last);case v.R.Escape:return c.preventDefault(),c.stopPropagation(),d.closeListbox(),j.nextFrame(()=>{var M;return(M=l.buttonRef.current)==null?void 0:M.focus({preventScroll:!0})});case v.R.Tab:c.preventDefault(),c.stopPropagation();break;default:c.key.length===1&&(d.search(c.key),z.setTimeout(()=>d.clearSearch(),350));break}}),F=S(()=>{var c;return(c=l.buttonRef.current)==null?void 0:c.id},[l.buttonRef.current]),B=(0,t.useMemo)(()=>({open:l.listboxState===0}),[l]),P={"aria-activedescendant":l.activeOptionIndex===null||(o=l.options[l.activeOptionIndex])==null?void 0:o.id,"aria-multiselectable":l.mode===1?!0:void 0,"aria-labelledby":F,"aria-orientation":l.orientation,id:s,onKeyDown:K,role:"listbox",tabIndex:0,ref:E};return(0,D.sY)({ourProps:P,theirProps:n,slot:B,defaultTag:Pe,features:De,visible:q,name:"Listbox.Options"})}let Ce="li";function je(e,a){let o=(0,O.M)(),{id:i=`headlessui-listbox-option-${o}`,disabled:s=!1,value:n,...l}=e,d=oe("Listbox.Option"),E=re("Listbox.Option"),j=d.activeOptionIndex!==null?d.options[d.activeOptionIndex].id===i:!1,z=d.isSelected(n),G=(0,t.useRef)(null),q=N(G),K=(0,T.E)({disabled:s,value:n,domRef:G,get textValue(){return q()}}),F=(0,L.T)(a,G);(0,f.e)(()=>{if(d.listboxState!==0||!j||d.activationTrigger===0)return;let k=(0,_.k)();return k.requestAnimationFrame(()=>{var Z,I;(I=(Z=G.current)==null?void 0:Z.scrollIntoView)==null||I.call(Z,{block:"nearest"})}),k.dispose},[G,j,d.listboxState,d.activationTrigger,d.activeOptionIndex]),(0,f.e)(()=>E.registerOption(i,K),[K,i]);let B=(0,u.z)(k=>{if(s)return k.preventDefault();E.onChange(n),d.mode===0&&(E.closeListbox(),(0,_.k)().nextFrame(()=>{var Z;return(Z=d.buttonRef.current)==null?void 0:Z.focus({preventScroll:!0})}))}),P=(0,u.z)(()=>{if(s)return E.goToOption(C.Nothing);E.goToOption(C.Specific,i)}),c=J(),M=(0,u.z)(k=>c.update(k)),le=(0,u.z)(k=>{c.wasMoved(k)&&(s||j||E.goToOption(C.Specific,i,0))}),ue=(0,u.z)(k=>{c.wasMoved(k)&&(s||j&&E.goToOption(C.Nothing))}),xe=(0,t.useMemo)(()=>({active:j,selected:z,disabled:s}),[j,z,s]);return(0,D.sY)({ourProps:{id:i,ref:F,role:"option",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-selected":z,disabled:void 0,onClick:B,onFocus:P,onPointerEnter:M,onMouseEnter:M,onPointerMove:le,onMouseMove:le,onPointerLeave:ue,onMouseLeave:ue},theirProps:l,slot:xe,defaultTag:Ce,name:"Listbox.Option"})}let Ae=(0,D.yV)(Se),ze=(0,D.yV)(Le),Fe=(0,D.yV)(Ee),ke=(0,D.yV)(Me),we=(0,D.yV)(je),Ne=Object.assign(Ae,{Button:ze,Label:Fe,Options:ke,Option:we})},31147:(m,R,r)=>{"use strict";r.d(R,{q:()=>T});var t=r(67294),f=r(73781);function T(S,p,g){let[u,O]=(0,t.useState)(g),b=S!==void 0,x=(0,t.useRef)(b),L=(0,t.useRef)(!1),A=(0,t.useRef)(!1);return b&&!x.current&&!L.current?(L.current=!0,x.current=b,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!b&&x.current&&!A.current&&(A.current=!0,x.current=b,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[b?S:u,(0,f.z)(W=>(b||O(W),p?.(W)))]}},18689:(m,R,r)=>{"use strict";r.d(R,{g:()=>S,t:()=>t});function t(p={},g=null,u=[]){for(let[O,b]of Object.entries(p))T(u,f(g,O),b);return u}function f(p,g){return p?p+"["+g+"]":g}function T(p,g,u){if(Array.isArray(u))for(let[O,b]of u.entries())T(p,f(g,O.toString()),b);else u instanceof Date?p.push([g,u.toISOString()]):typeof u=="boolean"?p.push([g,u?"1":"0"]):typeof u=="string"?p.push([g,u]):typeof u=="number"?p.push([g,`${u}`]):u==null?p.push([g,""]):t(u,g,p)}function S(p){var g,u;let O=(g=p?.form)!=null?g:p.closest("form");if(O){for(let b of O.elements)if(b!==p&&(b.tagName==="INPUT"&&b.type==="submit"||b.tagName==="BUTTON"&&b.type==="submit"||b.nodeName==="INPUT"&&b.type==="image")){b.click();return}(u=O.requestSubmit)==null||u.call(O)}}}}]);