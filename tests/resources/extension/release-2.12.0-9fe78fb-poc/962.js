"use strict";(self.webpackChunkbrowser_extension_wallet=self.webpackChunkbrowser_extension_wallet||[]).push([[962,304],{82962:(D,v,t)=>{t.r(v),t.d(v,{App:()=>K,default:()=>Q});var n=t(85893),E=t(35708),u=t(64064),p=t(82911),s=t(48303),c=t(45618),i=t(86896);const R=({name:a,value:e,rarity:o})=>{const{formatMessage:l}=(0,i.Z)(),r=e.toLowerCase().startsWith("http")?e.toLowerCase():e;return(0,n.jsxs)("div",{className:"flex flex-col bg-bg3 rounded-3xl p-4",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.x,{type:c.Xi.CAPTION,children:a})}),(0,n.jsx)("div",{children:(0,n.jsx)(s.x,{type:c.Xi.TITLE,children:r})}),o>0&&(0,n.jsx)("div",{children:(0,n.jsx)(s.x,{weight:c.kx.NORMAL,children:l({id:"nft-item.rarity-text"},{rarity:o})})})]})},U=({properties:a})=>{const{formatMessage:e}=(0,i.Z)();return!a||a.length===0?null:(0,n.jsxs)("div",{className:"pt-4",children:[(0,n.jsx)("div",{className:"pb-2",children:(0,n.jsx)(s.x,{type:c.Xi.TITLE,children:e({id:"nft-item.attributes"})})}),(0,n.jsx)("div",{className:"grid grid-cols-2 gap-2",children:a.map((o,l)=>(0,n.jsx)(R,{name:o.key,value:o.value,rarity:o.rarity},l))})]})};var C=t(49756),I=t(60333),P=t(63118),T=t(48161),x=t(28461),O=t(67294);const M=({text:a,maxChars:e=150,testid:o})=>{const{formatMessage:l}=(0,i.Z)(),[r,j]=(0,O.useState)(!0),f=a.length>e,g=f?`${a.substring(0,e)}...`:a,m=r?g:a;return(0,n.jsx)("div",{"data-testid":o,className:"mx-auto",children:(0,n.jsxs)("div",{children:[m,f&&(0,n.jsx)(C.z,{theme:P.jM.TRANSPARENT,onClick:()=>j(!r),children:(0,n.jsx)(s.x,{theme:c.W5.BRAND,children:l(r?{id:"generic.view-more"}:{id:"generic.view-less"})})})]})})};var A=t(31643),N=t(38058),B=t(38195),$=t(89171),W=t(12790),F=t(89250),z=t(79655),y=t(41304),X=t(94061),S=t(70473),G=t(44525),V=(a,e,o)=>new Promise((l,r)=>{var j=m=>{try{g(o.next(m))}catch(L){r(L)}},f=m=>{try{g(o.throw(m))}catch(L){r(L)}},g=m=>m.done?l(m.value):Promise.resolve(m.value).then(j,f);g((o=o.apply(a,e)).next())});function H(a,e,o){var l;return`https://opensea.io/assets/${(l={avalanchec:"avalanche",smartchain:"bsc",polygon:"matic"}[a])!=null?l:a}/${e}/${o}`}const J=()=>{(0,X.d)({event:S.pG.NFT_ITEM,props:null});const a=(0,F.s0)(),{formatMessage:e}=(0,i.Z)(),{collectionId:o,nftId:l}=(0,F.UO)(),[r]=(0,z.lr)(),[j,f]=(0,O.useState)(null),[g,m]=(0,O.useState)(!0),{trackAnalytics:L}=(0,G.z)();if(!o)throw new Error("Collection Id is missing.");const h=(0,A.C)(o);if(!h)throw new Error(`Could not find collection for collectionId "${o}"`);if(!l)throw new Error("NFT Id is missing.");const d=(0,N.s)(o,l);if(!d)throw new Error(`Could not find NFT item for nftId "${l}"`);const Y=h.blockchain.blockchain.toLowerCase()===B.G1.ethereum,k=!g&&!!j,w=`loadCachedItems=true${r.get("initPage")?"&initPage="+parseInt(r.get("initPage")):""}${r.get(y.OriginParam.key)===y.OriginParam.value?`&${y.OriginParam.key}=${y.OriginParam.value}`:""}`,b=()=>a(`${p.Z.NFT_COLLECTIONS}/${h.id}?${w}`),_=()=>a(`${p.Z.SEND}/${o}/${l}`);return(0,O.useEffect)(()=>{(()=>V(void 0,null,function*(){const Z=H(h.blockchain.id,h.metadata.Evm.contractAddress,d.onChainId);(yield fetch(Z)).ok&&f(Z)}))().catch(W.G1).finally(()=>m(!1))},[h.blockchain.id,h.metadata.Evm.contractAddress,d.onChainId]),(0,n.jsxs)(T._z,{children:[(0,n.jsx)(T.mr,{backAction:b,title:h.name}),(0,n.jsx)(T.xV,{children:(0,n.jsxs)(T.Wo,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(E.t,{mainMedia:d.originalMediaURL,fallbackMedia:d.previewImageURL,name:d.name})}),(0,n.jsx)("div",{className:"text-center pt-4",children:(0,n.jsx)(s.x,{type:c.Xi.TITLE,children:d.name})}),Y&&(0,n.jsx)("div",{className:"pt-4",children:(0,n.jsx)(C.z,{onClick:_,children:e({id:"generic.send"})})}),k&&(0,n.jsx)("div",{className:"pt-4",children:(0,n.jsx)(C.z,{theme:P.jM.TRANSPARENT,onClick:()=>{L({event:S.pG.OPENSEA,props:{pageViewResourceType:S.w_.EXTERNAL}}),(0,W.a8)(j)},children:(0,n.jsx)(s.x,{theme:c.W5.BRAND,children:e({id:"nft-item.view-on-opensea"})})})}),d.description.length>0&&(0,n.jsxs)("div",{className:"pt-4",children:[(0,n.jsx)("div",{className:"pb-2",children:(0,n.jsx)(s.x,{type:c.Xi.TITLE,children:e({id:"generic.description"})})}),(0,n.jsx)(M,{text:d.description})]}),(0,n.jsxs)("div",{className:"pt-4",children:[(0,n.jsx)(x.U,{label:e({id:"generic.network"}),children:(0,n.jsx)(s.x,{children:h.blockchain.name})}),h.metadata.Evm.contractAddress.length>0&&(0,n.jsxs)(x.U,{label:e({id:"generic.contract-address"}),children:[(0,n.jsx)(s.x,{children:(0,$.j)({value:h.metadata.Evm.contractAddress})}),(0,n.jsx)(I.m,{value:h.metadata.Evm.contractAddress})]}),(0,n.jsxs)(x.U,{label:e({id:"generic.token-id"}),children:[(0,n.jsx)(s.x,{children:(0,$.j)({value:d.onChainId})}),(0,n.jsx)(I.m,{value:d.onChainId})]}),(0,n.jsx)(x.U,{label:e({id:"generic.type"}),children:(0,n.jsx)(s.x,{children:d.type})}),(0,n.jsx)(x.U,{label:e({id:"generic.balance"}),children:(0,n.jsx)(s.x,{children:d.balance})})]}),(0,n.jsx)(U,{properties:d.properties})]})})]})},K=()=>(0,n.jsx)(u.P,{messageFileId:"app_src_popup_modules_home_locales",children:(0,n.jsx)(J,{})}),Q=K},41304:(D,v,t)=>{t.r(v),t.d(v,{App:()=>x,OriginParam:()=>P,default:()=>O});var n=t(85893),E=t(78804),u=t(34439),p=t(64064),s=t(82911),c=t(94061),i=t(48161),R=t(70473),U=t(68957),C=t(86896),I=t(89250);const P={key:"origin",value:"reported"},T=()=>{(0,c.d)({event:R.pG.NFT_REPORTED_COLLECTIONS,props:null});const M=(0,I.s0)(),{formatMessage:A}=(0,C.Z)(),{reportedItems:N}=(0,U.L)();return N.length===0?(0,n.jsxs)(i._z,{children:[(0,n.jsx)(i.mr,{title:A({id:"nft-reported-collections.hidden-collections"}),backAction:()=>M(`${s.Z.DEFAULT}`)}),(0,n.jsx)(i.xV,{children:(0,n.jsx)(u.r,{title:A({id:"nft-collection.nothing-hidden"}),testid:"no-nfts-hidden"})})]}):(0,n.jsxs)(i._z,{children:[(0,n.jsx)(i.mr,{title:A({id:"nft-reported-collections.hidden-collections"}),backAction:()=>M(`${s.Z.DEFAULT}`)}),(0,n.jsx)(i.xV,{children:(0,n.jsx)(i.Wo,{children:(0,n.jsx)(E.z,{collections:N,onClick:B=>{M(`${s.Z.NFT_COLLECTIONS}/${B.id}?${P.key}=${P.value}`)}})})})]})},x=()=>(0,n.jsx)(p.P,{messageFileId:"app_src_popup_modules_home_locales",children:(0,n.jsx)(T,{})}),O=x},31643:(D,v,t)=>{t.d(v,{C:()=>u});var n=t(67294),E=t(51953);const u=p=>{const s=(0,E.x)();return(0,n.useMemo)(()=>s.find(c=>c.id===p),[p,s])}},38058:(D,v,t)=>{t.d(v,{s:()=>u});var n=t(67294),E=t(50533);const u=(p,s)=>{const c=(0,E.v9)(i=>i.nft.nfts[p].items);return(0,n.useMemo)(()=>c.find(i=>i.id===s),[c,s])}}}]);