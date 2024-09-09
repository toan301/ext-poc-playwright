"use strict";(self.webpackChunkbrowser_extension_wallet=self.webpackChunkbrowser_extension_wallet||[]).push([[906,304],{74906:(B,v,e)=>{e.r(v),e.d(v,{App:()=>X,default:()=>st});var n=e(85893),m=e(34439),L=e(64064),c=e(82911),p=e(35708),h=e(1942),d=e(32193),D=e(69671),A=e(48303),y=e(45618),l=e(58533);const r=({nfts:f,loadMoreItems:x,hasNextPage:a,onClick:E})=>{const g=window.innerHeight-38-16-16;return(0,n.jsx)(l.Z,{dataLength:f.length,next:x,height:g,className:"tw-scrollbar",hasMore:!!a,loader:(0,n.jsx)("div",{className:"flex items-center justify-center py-4",children:(0,n.jsx)(D.$,{size:d.m.LARGE})}),children:(0,n.jsx)("div",{className:"grid grid-cols-3 gap-4",children:f.map((T,S)=>(0,n.jsx)(h.e,{onClick:()=>E(T.id),testid:"nft-collection-item",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"md:w-[7rem] md:h-[7rem] w-[6rem] h-[6rem]",children:(0,n.jsx)(p.t,{mainMedia:T.previewImageURL,fallbackMedia:T.originalMediaURL,name:T.name,asListItem:!0})}),(0,n.jsx)("div",{className:"md:w-[7rem] w-[6rem]",children:(0,n.jsx)(A.x,{type:y.Xi.SUBTITLE,truncated:!0,children:T.name})})]})},S))})})};var o=e(65047),t=e(96854),s=e(48161),i=e(99136),u=e(51819),O=e(59078),N=e(36807);const _={COLLECTION_NFTS_REQUESTED:(0,N.Jp)("CollectionNFTsRequested"),REPORT_NFT_COLLECTION:(0,N.Jp)("ReportNFTCollection")};var Y=e(31643),C=e(67294),I=e(50533),V=e(48414);const Q=f=>{const x=(0,I.v9)(g=>g.nft.nfts),a=(0,V.g)(),E=x[f];return(0,C.useMemo)(()=>{var g;return{total:(g=E?.items)!=null?g:[],reported:a.includes(f)}},[f,E,a])};var z=e(12790),k=e(86896),G=e(89250),q=e(79655),j=e(41304),tt=e(94061),H=e(70473),et=e(44525),nt=(f,x,a)=>new Promise((E,g)=>{var T=P=>{try{M(a.next(P))}catch(F){g(F)}},S=P=>{try{M(a.throw(P))}catch(F){g(F)}},M=P=>P.done?E(P.value):Promise.resolve(P.value).then(T,S);M((a=a.apply(f,x)).next())});const ot=()=>{const f=(0,G.s0)(),{formatMessage:x}=(0,k.Z)(),{collectionId:a}=(0,G.UO)(),[E]=(0,q.lr)(),{trackAnalytics:g}=(0,et.z)(),T=E.get("loadCachedItems"),S=E.get("initPage"),M=E.get(j.OriginParam.key),[P,F]=(0,C.useState)(!T),[w,rt]=(0,C.useState)(S?parseInt(S):0),[Z,it]=(0,C.useState)(!1);if(!a)throw new Error("Collection Id is missing.");const R=(0,Y.C)(a);if(!R)throw new Error(`Could not find collection for collectionId "${a}"`);const{total:b,reported:W}=Q(a);(0,tt.d)({event:H.pG.NFT_COLLECTION,props:{collectionName:R.name,reported:W}});const $=()=>f(M===j.OriginParam.value?c.Z.NFT_REPORTED_COLLECTIONS:c.Z.DEFAULT),lt=(0,C.useCallback)(U=>{f(`${c.Z.NFT_COLLECTIONS}/${a}/nfts/${U}?initPage=${Z?w+1:0}${M===j.OriginParam.value?`&${j.OriginParam.key}=${j.OriginParam.value}`:""}`)},[a,Z,M,w,f]),at=(0,C.useCallback)(()=>rt(U=>U+1),[]),J=()=>{O.Tl.emit(_.REPORT_NFT_COLLECTION,{collection:R,report:!W}).catch(z.G1),g({event:W?H.ih.NFT_COLLECTION_UNHIDE:H.ih.NFT_COLLECTION_HIDE_AND_REPORT,props:{pageViewSource:H.pG.NFT_COLLECTION,collectionName:R.name}}),$()},ct={key:"hide",label:x({id:"nft-collection.hide-and-report"}),textTheme:y.W5.PRIMARY,onClick:J,type:u.j.BUTTON},ht={key:"unhide",label:x({id:"nft-collection.unhide"}),textTheme:y.W5.PRIMARY,onClick:J,type:u.j.BUTTON};return(0,C.useEffect)(()=>{(!T||w>0)&&(()=>nt(void 0,null,function*(){const{hasNextPage:U}=yield O.Tl.emit(_.COLLECTION_NFTS_REQUESTED,{collectionId:a,page:w});it(U)}))().catch(z.G1).finally(()=>F(!1))},[a,T,w]),P?(0,n.jsxs)(s._z,{children:[(0,n.jsx)(s.mr,{backAction:$,title:R.name}),(0,n.jsx)(s.xV,{children:(0,n.jsx)(t.M,{children:(0,n.jsx)("div",{children:(0,n.jsx)(D.$,{size:d.m.XLARGE})})})})]}):b.length===0?(0,n.jsxs)(s._z,{children:[(0,n.jsx)(s.mr,{backAction:$,title:R.name}),(0,n.jsx)(s.xV,{children:(0,n.jsx)(m.r,{title:x({id:"nft-collection.nothing-bought"}),action:{label:x({id:"generic.receive"}),handler:()=>f(c.Z.RECEIVE)}})})]}):(0,n.jsxs)(s._z,{children:[(0,n.jsx)(s.mr,{title:R.name,backAction:$,infoAction:(0,n.jsx)(i.h,{actions:W?[ht]:[ct],button:(0,n.jsx)(o.X,{colorClass:"text-iconNormal hover:text-textPrimary transition"})})}),(0,n.jsx)(s.xV,{children:(0,n.jsx)(r,{nfts:b,onClick:lt,hasNextPage:Z,loadMoreItems:at})})]})},X=()=>(0,n.jsx)(L.P,{messageFileId:"app_src_popup_modules_home_locales",children:(0,n.jsx)(ot,{})}),st=X},41304:(B,v,e)=>{e.r(v),e.d(v,{App:()=>t,OriginParam:()=>r,default:()=>s});var n=e(85893),m=e(78804),L=e(34439),c=e(64064),p=e(82911),h=e(94061),d=e(48161),D=e(70473),A=e(68957),y=e(86896),l=e(89250);const r={key:"origin",value:"reported"},o=()=>{(0,h.d)({event:D.pG.NFT_REPORTED_COLLECTIONS,props:null});const i=(0,l.s0)(),{formatMessage:u}=(0,y.Z)(),{reportedItems:O}=(0,A.L)();return O.length===0?(0,n.jsxs)(d._z,{children:[(0,n.jsx)(d.mr,{title:u({id:"nft-reported-collections.hidden-collections"}),backAction:()=>i(`${p.Z.DEFAULT}`)}),(0,n.jsx)(d.xV,{children:(0,n.jsx)(L.r,{title:u({id:"nft-collection.nothing-hidden"}),testid:"no-nfts-hidden"})})]}):(0,n.jsxs)(d._z,{children:[(0,n.jsx)(d.mr,{title:u({id:"nft-reported-collections.hidden-collections"}),backAction:()=>i(`${p.Z.DEFAULT}`)}),(0,n.jsx)(d.xV,{children:(0,n.jsx)(d.Wo,{children:(0,n.jsx)(m.z,{collections:O,onClick:N=>{i(`${p.Z.NFT_COLLECTIONS}/${N.id}?${r.key}=${r.value}`)}})})})]})},t=()=>(0,n.jsx)(c.P,{messageFileId:"app_src_popup_modules_home_locales",children:(0,n.jsx)(o,{})}),s=t},65047:(B,v,e)=>{e.d(v,{X:()=>c});var n=e(85893);const m=24,L=24,c=({width:p,height:h,colorClass:d})=>(0,n.jsx)("svg",{className:d,fill:"none",width:p??m,height:h??L,viewBox:`0 0 ${m} ${L}`,xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 3H14V7H10V3ZM10 10H14V14H10V10ZM14 17H10V21H14V17Z",fill:"currentColor"})})},31643:(B,v,e)=>{e.d(v,{C:()=>L});var n=e(67294),m=e(51953);const L=c=>{const p=(0,m.x)();return(0,n.useMemo)(()=>p.find(h=>h.id===c),[c,p])}},58533:(B,v,e)=>{e.d(v,{Z:()=>y});var n=e(67294);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var m=function(l,r){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var s in t)t.hasOwnProperty(s)&&(o[s]=t[s])},m(l,r)};function L(l,r){m(l,r);function o(){this.constructor=l}l.prototype=r===null?Object.create(r):(o.prototype=r.prototype,new o)}var c=function(){return c=Object.assign||function(r){for(var o,t=1,s=arguments.length;t<s;t++){o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])}return r},c.apply(this,arguments)};function p(l,r,o,t){var s,i=!1,u=0;function O(){s&&clearTimeout(s)}function N(){O(),i=!0}typeof r!="boolean"&&(t=o,o=r,r=void 0);function K(){var _=this,Y=Date.now()-u,C=arguments;if(i)return;function I(){u=Date.now(),o.apply(_,C)}function V(){s=void 0}t&&!s&&I(),O(),t===void 0&&Y>l?I():r!==!0&&(s=setTimeout(t?V:I,t===void 0?l-Y:l))}return K.cancel=N,K}var h={Pixel:"Pixel",Percent:"Percent"},d={unit:h.Percent,value:.8};function D(l){return typeof l=="number"?{unit:h.Percent,value:l*100}:typeof l=="string"?l.match(/^(\d*(\.\d+)?)px$/)?{unit:h.Pixel,value:parseFloat(l)}:l.match(/^(\d*(\.\d+)?)%$/)?{unit:h.Percent,value:parseFloat(l)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),d):(console.warn("scrollThreshold should be string or number"),d)}var A=function(l){L(r,l);function r(o){var t=l.call(this,o)||this;return t.lastScrollTop=0,t.actionTriggered=!1,t.startY=0,t.currentY=0,t.dragging=!1,t.maxPullDownDistance=0,t.getScrollableTarget=function(){return t.props.scrollableTarget instanceof HTMLElement?t.props.scrollableTarget:typeof t.props.scrollableTarget=="string"?document.getElementById(t.props.scrollableTarget):(t.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},t.onStart=function(s){t.lastScrollTop||(t.dragging=!0,s instanceof MouseEvent?t.startY=s.pageY:s instanceof TouchEvent&&(t.startY=s.touches[0].pageY),t.currentY=t.startY,t._infScroll&&(t._infScroll.style.willChange="transform",t._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},t.onMove=function(s){t.dragging&&(s instanceof MouseEvent?t.currentY=s.pageY:s instanceof TouchEvent&&(t.currentY=s.touches[0].pageY),!(t.currentY<t.startY)&&(t.currentY-t.startY>=Number(t.props.pullDownToRefreshThreshold)&&t.setState({pullToRefreshThresholdBreached:!0}),!(t.currentY-t.startY>t.maxPullDownDistance*1.5)&&t._infScroll&&(t._infScroll.style.overflow="visible",t._infScroll.style.transform="translate3d(0px, "+(t.currentY-t.startY)+"px, 0px)")))},t.onEnd=function(){t.startY=0,t.currentY=0,t.dragging=!1,t.state.pullToRefreshThresholdBreached&&(t.props.refreshFunction&&t.props.refreshFunction(),t.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){t._infScroll&&(t._infScroll.style.overflow="auto",t._infScroll.style.transform="none",t._infScroll.style.willChange="unset")})},t.onScrollListener=function(s){typeof t.props.onScroll=="function"&&setTimeout(function(){return t.props.onScroll&&t.props.onScroll(s)},0);var i=t.props.height||t._scrollableNode?s.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!t.actionTriggered){var u=t.props.inverse?t.isElementAtTop(i,t.props.scrollThreshold):t.isElementAtBottom(i,t.props.scrollThreshold);u&&t.props.hasMore&&(t.actionTriggered=!0,t.setState({showLoader:!0}),t.props.next&&t.props.next()),t.lastScrollTop=i.scrollTop}},t.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:o.dataLength},t.throttledOnScrollListener=p(150,t.onScrollListener).bind(t),t.onStart=t.onStart.bind(t),t.onMove=t.onMove.bind(t),t.onEnd=t.onEnd.bind(t),t}return r.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},r.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},r.prototype.componentDidUpdate=function(o){this.props.dataLength!==o.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},r.getDerivedStateFromProps=function(o,t){var s=o.dataLength!==t.prevDataLength;return s?c(c({},t),{prevDataLength:o.dataLength}):null},r.prototype.isElementAtTop=function(o,t){t===void 0&&(t=.8);var s=o===document.body||o===document.documentElement?window.screen.availHeight:o.clientHeight,i=D(t);return i.unit===h.Pixel?o.scrollTop<=i.value+s-o.scrollHeight+1:o.scrollTop<=i.value/100+s-o.scrollHeight+1},r.prototype.isElementAtBottom=function(o,t){t===void 0&&(t=.8);var s=o===document.body||o===document.documentElement?window.screen.availHeight:o.clientHeight,i=D(t);return i.unit===h.Pixel?o.scrollTop+s>=o.scrollHeight-i.value:o.scrollTop+s>=i.value/100*o.scrollHeight},r.prototype.render=function(){var o=this,t=c({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),s=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),i=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return n.createElement("div",{style:i,className:"infinite-scroll-component__outerdiv"},n.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(u){return o._infScroll=u},style:t},this.props.pullDownToRefresh&&n.createElement("div",{style:{position:"relative"},ref:function(u){return o._pullDown=u}},n.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!s&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},r}(n.Component);const y=A}}]);
