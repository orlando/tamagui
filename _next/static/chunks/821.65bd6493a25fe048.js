"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{62821:function(e,t,i){i.r(t),i.d(t,{default:function(){return E}});var r=i(52322),n=i(2784);var a=i(68683),o=i(68970),d=Object.defineProperty;const l=((e,t)=>d(e,"name",{value:t,configurable:!0}))(((e,t=0)=>{const i=(0,o.lz)().size,r=Object.keys(i);return i[r[Math.max(0,r.indexOf(String(e||"$4"))+t)]]||i.$4}),"getSize");var c=i(45482),s=i(63035),u=i(59699),h=i(92682),b=i(56695),f=i(23917),m=i(63862),p=i(73456);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function _(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){_(e,t,i[t])}))}return e}function y(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,n,a=[],o=!0,d=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(l){d=!0,n=l}finally{try{o||null==i.return||i.return()}finally{if(d)throw n}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=Object.defineProperty,j=function(e,t){return x(e,"name",{value:t,configurable:!0})},z="Switch",k=(0,h.b)(z),R=v(k,1)[0],S=(k[1],v(R(z),2)),O=S[0],H=S[1],T=j((function(e,t){return(0,p.k)(l(e,1),t)}),"getSwitchHeight"),$=j((function(e,t){return(0,p.k)(l(e,3),t)}),"getSwitchWidth"),L=(0,c.z)(b.sL,{name:"Switch",tag:"button",borderRadius:1e3,borderWidth:0,variants:{size:{"...size":function(e,t){var i=T(e,t),r=i.height,n=i.minHeight,a=i.maxHeight,o=$(e,t);return{height:r,minHeight:n,maxHeight:a,width:o.width,minWidth:o.minWidth,maxWidth:o.maxWidth}}}},defaultVariants:{size:"$4"}}),W=n.forwardRef((function(e,t){var i=e.__scopeSwitch,o=e.labeledBy,d=e.name,l=e.checked,c=e.defaultChecked,s=e.required,u=e.disabled,h=e.value,b=void 0===h?"on":h,p=e.onCheckedChange,g=e.size,_=void 0===g?"$4":g,x=y(e,["__scopeSwitch","labeledBy","name","checked","defaultChecked","required","disabled","value","onCheckedChange","size"]),j=v(n.useState(null),2),z=j[0],k=j[1],R=(0,a.e)(t,(function(e){return k(e)})),S=(0,m.t0)(z),H=o||S,T=n.useRef(!1),$=!z||Boolean(z.closest("form")),W=v((0,f.T)({prop:l,defaultProp:c||!1,onChange:p}),2),q=W[0],B=void 0!==q&&q,P=W[1];return(0,r.jsxs)(O,{scope:i,checked:B,disabled:u,size:_,children:[(0,r.jsx)(L,w({size:_,role:"switch","aria-checked":B,"aria-labelledby":H,"aria-required":s,"data-state":I(B),"data-disabled":u?"":void 0,disabled:u,value:b},x,{ref:R,onPress:function(t){var i;null==(i=e.onPress)||i.call(e,t),P((function(e){return!e})),$&&(T.current=t.isPropagationStopped(),T.current||t.stopPropagation())}})),$&&(0,r.jsx)(F,{control:z,bubbles:!T.current,name:d,value:b,checked:B,required:s,disabled:u,style:{transform:"translateX(-100%)"}})]})}));W.displayName=z;var q=L.extractable((0,s.Y)(W),{neverFlatten:!0}),B="SwitchThumb",P=(0,c.z)(b.sL,{name:"SwitchThumb",backgroundColor:"$color",borderRadius:1e3,variants:{size:{"...size":T}},defaultVariants:{size:"$4"}}),C=P.extractable(n.forwardRef((function(e,t){var i=e.__scopeSwitch,n=y(e,["__scopeSwitch"]),a=H(B,i),o=a.size,d=a.disabled,c=a.checked;return(0,r.jsx)(P,w({size:o,"data-state":I(c),"data-disabled":d?"":void 0},n,{x:c?(0,u.Ve)(l(o,3))-(0,u.Ve)(l(o,1)):0,ref:t}))})),{neverFlatten:!0});C.displayName=B,q.Thumb=C;var F=j((function(e){e.control;var t=e.checked,i=e.bubbles,a=void 0===i||i,o=y(e,["control","checked","bubbles"]),d=n.useRef(null),l=function(e){const t=n.useRef({value:e,previous:e});return n.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(t);return n.useEffect((function(){var e=d.current,i=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(i,"checked").set;if(l!==t&&r){var n=new Event("click",{bubbles:a});r.call(e,t),e.dispatchEvent(n)}}),[l,t,a]),(0,r.jsx)("input",w({type:"checkbox","aria-hidden":!0,defaultChecked:t},o,{tabIndex:-1,ref:d,style:w({},e.style,{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))}),"BubbleInput");function I(e){return e?"checked":"unchecked"}j(I,"getState");function E(){return(0,r.jsxs)(b.FA,{alignItems:"_ai-1awozwy",width:"_w-1ipicw7",space:"$1",children:[(0,r.jsxs)(b.sL,{alignItems:"_ai-1awozwy",space:"$2",children:[(0,r.jsx)(m.__,{tag:"label",size:"$2",borderBottomLeftRadius:"_bblr-16of09f",borderBottomRightRadius:"_bbrr-1lf30or",borderTopLeftRadius:"_btlr-9bfr1a",borderTopRightRadius:"_btrr-h7h2ax",color:"_col-1gcmrwd",fontFamily:"_fofam-1f1w1o8",fontSize:"_fos-n6v787",fontWeight:"_fow-1od2jal",letterSpacing:"_letsp-oxtfae",lineHeight:"_lh-135wba7",minHeight:"_mih-1vsu8ta",paddingBottom:"_pb-3hmvjm",paddingLeft:"_pl-16lhzmz",paddingRight:"_pr-1hpxcsk",paddingTop:"_pt-15zeulg",htmlFor:"switch-1",children:"Dark mode"}),(0,r.jsx)(q,{tag:"button",id:"switch-1",size:"$2",height:"_h-ll8gdx",maxHeight:"_mah-1u9d64z",maxWidth:"_maw-ba78bg",minHeight:"_mih-1f2ialv",minWidth:"_miw-xjylmr",width:"_w-3zc0nh",children:(0,r.jsx)(q.Thumb,{animation:"bouncy"})})]}),(0,r.jsxs)(b.sL,{alignItems:"_ai-1awozwy",space:"$2",children:[(0,r.jsx)(m.__,{tag:"label",size:"$3",borderBottomLeftRadius:"_bblr-q9mco7",borderBottomRightRadius:"_bbrr-yqu18q",borderTopLeftRadius:"_btlr-n725eh",borderTopRightRadius:"_btrr-nc5cgv",color:"_col-1gcmrwd",fontFamily:"_fofam-1f1w1o8",fontSize:"_fos-1b43r93",fontWeight:"_fow-1od2jal",letterSpacing:"_letsp-oxtfae",lineHeight:"_lh-waer2z",minHeight:"_mih-1ov1q5u",paddingBottom:"_pb-iphfwy",paddingLeft:"_pl-1hfyk0a",paddingRight:"_pr-1qfoi16",paddingTop:"_pt-1h8ys4a",htmlFor:"switch-2",children:"Dark mode"}),(0,r.jsx)(q,{tag:"button",id:"switch-2",size:"$3",height:"_h-1878k13",maxHeight:"_mah-vcmv3f",maxWidth:"_maw-1ou0gya",minHeight:"_mih-1i5i5l1",minWidth:"_miw-11rdig3",width:"_w-1gnxyq3",children:(0,r.jsx)(q.Thumb,{animation:"bouncy"})})]}),(0,r.jsxs)(b.sL,{alignItems:"_ai-1awozwy",space:"$2",children:[(0,r.jsx)(m.__,{tag:"label",size:"$4",borderBottomLeftRadius:"_bblr-jttyys",borderBottomRightRadius:"_bbrr-wae8j0",borderTopLeftRadius:"_btlr-zfawj4",borderTopRightRadius:"_btrr-1cvu0hm",color:"_col-1gcmrwd",fontFamily:"_fofam-1f1w1o8",fontSize:"_fos-a023e6",fontWeight:"_fow-1od2jal",letterSpacing:"_letsp-oxtfae",lineHeight:"_lh-1kt6imw",minHeight:"_mih-1vuscfd",paddingBottom:"_pb-12rqra3",paddingLeft:"_pl-1yt7n81",paddingRight:"_pr-ry3cjt",paddingTop:"_pt-13gvty3",htmlFor:"switch-3",children:"Dark mode"}),(0,r.jsx)(q,{tag:"button",id:"switch-3",size:"$4",height:"_h-dv9pw8",maxHeight:"_mah-mgbpes",maxWidth:"_maw-1iqctsz",minHeight:"_mih-5pnkls",minWidth:"_miw-o2pj4o",width:"_w-1izedky",children:(0,r.jsx)(q.Thumb,{animation:"bouncy"})})]}),(0,r.jsxs)("div",{className:" _ai-1awozwy _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-18u37iz _fs-1q142lx ",children:[(0,r.jsx)(m.__,{tag:"label",size:"$5",borderBottomLeftRadius:"_bblr-1dmmkbk",borderBottomRightRadius:"_bbrr-6dt042",borderTopLeftRadius:"_btlr-b75cpd",borderTopRightRadius:"_btrr-u8nydt",color:"_col-1gcmrwd",fontFamily:"_fofam-1f1w1o8",fontSize:"_fos-1b6yd1w",fontWeight:"_fow-1od2jal",letterSpacing:"_letsp-oxtfae",lineHeight:"_lh-1c92x1x",minHeight:"_mih-116um31",paddingBottom:"_pb-xd6kpl",paddingLeft:"_pl-b5h31w",paddingRight:"_pr-1ah4tor",paddingTop:"_pt-tskmnb",htmlFor:"switch-4",children:"Dark mode"}),(0,r.jsx)(q,{tag:"button",id:"switch-4",size:"$5",height:"_h-su0nr0",maxHeight:"_mah-1piw381",maxWidth:"_maw-1rqzen7",minHeight:"_mih-1piye6b",minWidth:"_miw-qzcrye",width:"_w-gxeogz",children:(0,r.jsx)(q.Thumb,{animation:"bouncy"})})]})]})}}}]);