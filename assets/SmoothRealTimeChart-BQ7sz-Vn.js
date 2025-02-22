import{R as f,d as at,r as G,j as y,B as ut}from"./index-Qplgbi9M.js";import{b as N,L as V,m as z,i as B,c as K,A as ct,d as M,e as J,h as pt,j as Q,k as ft,l as dt,u as ht,n as X,G as mt,o as U,p as Z,D as yt,g as vt,X as rt,Y as nt,f as bt,R as xt,C as At,T as gt,q as Ot}from"./generateCategoricalChart-aVqhkIXL.js";var Pt=["layout","type","stroke","connectNulls","isRange","ref"],jt=["key"],it;function F(t){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},F(t)}function ot(t,a){if(t==null)return{};var r=wt(t,a),e,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],!(a.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}function wt(t,a){if(t==null)return{};var r={};for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){if(a.indexOf(e)>=0)continue;r[e]=t[e]}return r}function L(){return L=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},L.apply(this,arguments)}function tt(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,e)}return r}function _(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?tt(Object(r),!0).forEach(function(e){w(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function Et(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function et(t,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,lt(e.key),e)}}function Dt(t,a,r){return a&&et(t.prototype,a),r&&et(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function St(t,a,r){return a=$(a),kt(t,st()?Reflect.construct(a,r||[],$(t).constructor):a.apply(t,r))}function kt(t,a){if(a&&(F(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _t(t)}function _t(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function st(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(st=function(){return!!t})()}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},$(t)}function Ct(t,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(a&&a.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),a&&Y(t,a)}function Y(t,a){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},Y(t,a)}function w(t,a,r){return a=lt(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function lt(t){var a=Lt(t,"string");return F(a)=="symbol"?a:a+""}function Lt(t,a){if(F(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a);if(F(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var D=function(t){function a(){var r;Et(this,a);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r=St(this,a,[].concat(n)),w(r,"state",{isAnimationFinished:!0}),w(r,"id",ht("recharts-area-")),w(r,"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),X(o)&&o()}),w(r,"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),X(o)&&o()}),r}return Ct(a,t),Dt(a,[{key:"renderDots",value:function(e,n,i){var o=this.props.isAnimationActive,s=this.state.isAnimationFinished;if(o&&!s)return null;var u=this.props,l=u.dot,p=u.points,c=u.dataKey,d=N(this.props,!1),A=N(l,!0),g=p.map(function(v,j){var b=_(_(_({key:"dot-".concat(j),r:3},d),A),{},{index:j,cx:v.x,cy:v.y,dataKey:c,value:v.value,payload:v.payload,points:p});return a.renderDotItem(l,b)}),O={clipPath:e?"url(#clipPath-".concat(n?"":"dots-").concat(i,")"):null};return f.createElement(V,L({className:"recharts-area-dots"},O),g)}},{key:"renderHorizontalRect",value:function(e){var n=this.props,i=n.baseLine,o=n.points,s=n.strokeWidth,u=o[0].x,l=o[o.length-1].x,p=e*Math.abs(u-l),c=z(o.map(function(d){return d.y||0}));return B(i)&&typeof i=="number"?c=Math.max(i,c):i&&Array.isArray(i)&&i.length&&(c=Math.max(z(i.map(function(d){return d.y||0})),c)),B(c)?f.createElement("rect",{x:u<l?u:u-p,y:0,width:p,height:Math.floor(c+(s?parseInt("".concat(s),10):1))}):null}},{key:"renderVerticalRect",value:function(e){var n=this.props,i=n.baseLine,o=n.points,s=n.strokeWidth,u=o[0].y,l=o[o.length-1].y,p=e*Math.abs(u-l),c=z(o.map(function(d){return d.x||0}));return B(i)&&typeof i=="number"?c=Math.max(i,c):i&&Array.isArray(i)&&i.length&&(c=Math.max(z(i.map(function(d){return d.x||0})),c)),B(c)?f.createElement("rect",{x:0,y:u<l?u:u-p,width:c+(s?parseInt("".concat(s),10):1),height:Math.floor(p)}):null}},{key:"renderClipRect",value:function(e){var n=this.props.layout;return n==="vertical"?this.renderVerticalRect(e):this.renderHorizontalRect(e)}},{key:"renderAreaStatically",value:function(e,n,i,o){var s=this.props,u=s.layout,l=s.type,p=s.stroke,c=s.connectNulls,d=s.isRange;s.ref;var A=ot(s,Pt);return f.createElement(V,{clipPath:i?"url(#clipPath-".concat(o,")"):null},f.createElement(K,L({},N(A,!0),{points:e,connectNulls:c,type:l,baseLine:n,layout:u,stroke:"none",className:"recharts-area-area"})),p!=="none"&&f.createElement(K,L({},N(this.props,!1),{className:"recharts-area-curve",layout:u,type:l,connectNulls:c,fill:"none",points:e})),p!=="none"&&d&&f.createElement(K,L({},N(this.props,!1),{className:"recharts-area-curve",layout:u,type:l,connectNulls:c,fill:"none",points:n})))}},{key:"renderAreaWithAnimation",value:function(e,n){var i=this,o=this.props,s=o.points,u=o.baseLine,l=o.isAnimationActive,p=o.animationBegin,c=o.animationDuration,d=o.animationEasing,A=o.animationId,g=this.state,O=g.prevPoints,v=g.prevBaseLine;return f.createElement(ct,{begin:p,duration:c,isActive:l,easing:d,from:{t:0},to:{t:1},key:"area-".concat(A),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(j){var b=j.t;if(O){var S=O.length/s.length,h=s.map(function(P,R){var C=Math.floor(R*S);if(O[C]){var k=O[C],I=M(k.x,P.x),T=M(k.y,P.y);return _(_({},P),{},{x:I(b),y:T(b)})}return P}),m;if(B(u)&&typeof u=="number"){var x=M(v,u);m=x(b)}else if(J(u)||pt(u)){var E=M(v,0);m=E(b)}else m=u.map(function(P,R){var C=Math.floor(R*S);if(v[C]){var k=v[C],I=M(k.x,P.x),T=M(k.y,P.y);return _(_({},P),{},{x:I(b),y:T(b)})}return P});return i.renderAreaStatically(h,m,e,n)}return f.createElement(V,null,f.createElement("defs",null,f.createElement("clipPath",{id:"animationClipPath-".concat(n)},i.renderClipRect(b))),f.createElement(V,{clipPath:"url(#animationClipPath-".concat(n,")")},i.renderAreaStatically(s,u,e,n)))})}},{key:"renderArea",value:function(e,n){var i=this.props,o=i.points,s=i.baseLine,u=i.isAnimationActive,l=this.state,p=l.prevPoints,c=l.prevBaseLine,d=l.totalLength;return u&&o&&o.length&&(!p&&d>0||!Q(p,o)||!Q(c,s))?this.renderAreaWithAnimation(e,n):this.renderAreaStatically(o,s,e,n)}},{key:"render",value:function(){var e,n=this.props,i=n.hide,o=n.dot,s=n.points,u=n.className,l=n.top,p=n.left,c=n.xAxis,d=n.yAxis,A=n.width,g=n.height,O=n.isAnimationActive,v=n.id;if(i||!s||!s.length)return null;var j=this.state.isAnimationFinished,b=s.length===1,S=at("recharts-area",u),h=c&&c.allowDataOverflow,m=d&&d.allowDataOverflow,x=h||m,E=J(v)?this.id:v,P=(e=N(o,!1))!==null&&e!==void 0?e:{r:3,strokeWidth:2},R=P.r,C=R===void 0?3:R,k=P.strokeWidth,I=k===void 0?2:k,T=ft(o)?o:{},H=T.clipDot,q=H===void 0?!0:H,W=C*2+I;return f.createElement(V,{className:S},h||m?f.createElement("defs",null,f.createElement("clipPath",{id:"clipPath-".concat(E)},f.createElement("rect",{x:h?p:p-A/2,y:m?l:l-g/2,width:h?A:A*2,height:m?g:g*2})),!q&&f.createElement("clipPath",{id:"clipPath-dots-".concat(E)},f.createElement("rect",{x:p-W/2,y:l-W/2,width:A+W,height:g+W}))):null,b?null:this.renderArea(x,E),(o||b)&&this.renderDots(x,q,E),(!O||j)&&dt.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return e.animationId!==n.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,curBaseLine:e.baseLine,prevPoints:n.curPoints,prevBaseLine:n.curBaseLine}:e.points!==n.curPoints||e.baseLine!==n.curBaseLine?{curPoints:e.points,curBaseLine:e.baseLine}:null}}])}(G.PureComponent);it=D;w(D,"displayName","Area");w(D,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!mt.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});w(D,"getBaseValue",function(t,a,r,e){var n=t.layout,i=t.baseValue,o=a.props.baseValue,s=o??i;if(B(s)&&typeof s=="number")return s;var u=n==="horizontal"?e:r,l=u.scale.domain();if(u.type==="number"){var p=Math.max(l[0],l[1]),c=Math.min(l[0],l[1]);return s==="dataMin"?c:s==="dataMax"||p<0?p:Math.max(Math.min(l[0],l[1]),0)}return s==="dataMin"?l[0]:s==="dataMax"?l[1]:l[0]});w(D,"getComposedData",function(t){var a=t.props,r=t.item,e=t.xAxis,n=t.yAxis,i=t.xAxisTicks,o=t.yAxisTicks,s=t.bandSize,u=t.dataKey,l=t.stackedData,p=t.dataStartIndex,c=t.displayedData,d=t.offset,A=a.layout,g=l&&l.length,O=it.getBaseValue(a,r,e,n),v=A==="horizontal",j=!1,b=c.map(function(h,m){var x;g?x=l[p+m]:(x=U(h,u),Array.isArray(x)?j=!0:x=[O,x]);var E=x[1]==null||g&&U(h,u)==null;return v?{x:Z({axis:e,ticks:i,bandSize:s,entry:h,index:m}),y:E?null:n.scale(x[1]),value:x,payload:h}:{x:E?null:e.scale(x[1]),y:Z({axis:n,ticks:o,bandSize:s,entry:h,index:m}),value:x,payload:h}}),S;return g||j?S=b.map(function(h){var m=Array.isArray(h.value)?h.value[0]:null;return v?{x:h.x,y:m!=null&&h.y!=null?n.scale(m):null}:{x:m!=null?e.scale(m):null,y:h.y}}):S=v?n.scale(O):e.scale(O),_({points:b,baseLine:S,layout:A,isRange:j},d)});w(D,"renderDotItem",function(t,a){var r;if(f.isValidElement(t))r=f.cloneElement(t,a);else if(X(t))r=t(a);else{var e=at("recharts-area-dot",typeof t!="boolean"?t.className:""),n=a.key,i=ot(a,jt);r=f.createElement(yt,L({},i,{key:n,className:e}))}return r});var Rt=vt({chartName:"AreaChart",GraphicalChild:D,axisComponents:[{axisType:"xAxis",AxisComp:rt},{axisType:"yAxis",AxisComp:nt}],formatAxisMap:bt});const Bt=({metrics:t})=>{const[a,r]=G.useState([]);return G.useEffect(()=>{const e=setInterval(()=>{r(n=>{const i={time:Date.now(),temperature:(t==null?void 0:t.temperature)+Math.random()*3-1.5,machineCondition:(t==null?void 0:t.machineCondition)+Math.random()*3-1.5};return[...n.slice(-19),i]})},3e3);return()=>clearInterval(e)},[t]),y.jsx(ut,{sx:{width:"100%",height:300},children:y.jsx(xt,{children:y.jsxs(Rt,{data:a,margin:{top:20,right:30,left:0,bottom:0},children:[y.jsxs("defs",{children:[y.jsxs("linearGradient",{id:"colorTemp",x1:"0",y1:"0",x2:"0",y2:"1",children:[y.jsx("stop",{offset:"5%",stopColor:"#FF5722",stopOpacity:.8}),y.jsx("stop",{offset:"95%",stopColor:"#FF5722",stopOpacity:0})]}),y.jsxs("linearGradient",{id:"colorMachine",x1:"0",y1:"0",x2:"0",y2:"1",children:[y.jsx("stop",{offset:"5%",stopColor:"#4CAF50",stopOpacity:.8}),y.jsx("stop",{offset:"95%",stopColor:"#4CAF50",stopOpacity:0})]})]}),y.jsx(rt,{dataKey:"time",tickFormatter:e=>new Date(e).toLocaleTimeString()}),y.jsx(nt,{}),y.jsx(At,{strokeDasharray:"3 3"}),y.jsx(gt,{labelFormatter:e=>new Date(e).toLocaleTimeString()}),y.jsx(Ot,{}),y.jsx(D,{type:"monotone",dataKey:"temperature",stroke:"#FF5722",fillOpacity:1,fill:"url(#colorTemp)",animationDuration:1e3,name:"Sıcaklık (°C)"}),y.jsx(D,{type:"monotone",dataKey:"machineCondition",stroke:"#4CAF50",fillOpacity:1,fill:"url(#colorMachine)",animationDuration:1e3,name:"Makine Durumu (%)"})]})})})};export{Bt as default};
