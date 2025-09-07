(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Mv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ef={exports:{}},ia={},Tf={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function tS(){if(Bm)return dt;Bm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(w){return w===null||typeof w!="object"?null:(w=g&&w[g]||w["@@iterator"],typeof w=="function"?w:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(w,F,ce){this.props=w,this.context=F,this.refs=M,this.updater=ce||S}x.prototype.isReactComponent={},x.prototype.setState=function(w,F){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,F,"setState")},x.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function y(){}y.prototype=x.prototype;function L(w,F,ce){this.props=w,this.context=F,this.refs=M,this.updater=ce||S}var A=L.prototype=new y;A.constructor=L,E(A,x.prototype),A.isPureReactComponent=!0;var b=Array.isArray,N=Object.prototype.hasOwnProperty,B={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function $(w,F,ce){var de,me={},Te=null,Fe=null;if(F!=null)for(de in F.ref!==void 0&&(Fe=F.ref),F.key!==void 0&&(Te=""+F.key),F)N.call(F,de)&&!O.hasOwnProperty(de)&&(me[de]=F[de]);var Re=arguments.length-2;if(Re===1)me.children=ce;else if(1<Re){for(var De=Array(Re),ot=0;ot<Re;ot++)De[ot]=arguments[ot+2];me.children=De}if(w&&w.defaultProps)for(de in Re=w.defaultProps,Re)me[de]===void 0&&(me[de]=Re[de]);return{$$typeof:i,type:w,key:Te,ref:Fe,props:me,_owner:B.current}}function R(w,F){return{$$typeof:i,type:w.type,key:F,ref:w.ref,props:w.props,_owner:w._owner}}function I(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function le(w){var F={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ce){return F[ce]})}var ue=/\/+/g;function fe(w,F){return typeof w=="object"&&w!==null&&w.key!=null?le(""+w.key):F.toString(36)}function V(w,F,ce,de,me){var Te=typeof w;(Te==="undefined"||Te==="boolean")&&(w=null);var Fe=!1;if(w===null)Fe=!0;else switch(Te){case"string":case"number":Fe=!0;break;case"object":switch(w.$$typeof){case i:case e:Fe=!0}}if(Fe)return Fe=w,me=me(Fe),w=de===""?"."+fe(Fe,0):de,b(me)?(ce="",w!=null&&(ce=w.replace(ue,"$&/")+"/"),V(me,F,ce,"",function(ot){return ot})):me!=null&&(I(me)&&(me=R(me,ce+(!me.key||Fe&&Fe.key===me.key?"":(""+me.key).replace(ue,"$&/")+"/")+w)),F.push(me)),1;if(Fe=0,de=de===""?".":de+":",b(w))for(var Re=0;Re<w.length;Re++){Te=w[Re];var De=de+fe(Te,Re);Fe+=V(Te,F,ce,De,me)}else if(De=v(w),typeof De=="function")for(w=De.call(w),Re=0;!(Te=w.next()).done;)Te=Te.value,De=de+fe(Te,Re++),Fe+=V(Te,F,ce,De,me);else if(Te==="object")throw F=String(w),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Fe}function ie(w,F,ce){if(w==null)return w;var de=[],me=0;return V(w,de,"","",function(Te){return F.call(ce,Te,me++)}),de}function se(w){if(w._status===-1){var F=w._result;F=F(),F.then(function(ce){(w._status===0||w._status===-1)&&(w._status=1,w._result=ce)},function(ce){(w._status===0||w._status===-1)&&(w._status=2,w._result=ce)}),w._status===-1&&(w._status=0,w._result=F)}if(w._status===1)return w._result.default;throw w._result}var J={current:null},q={transition:null},K={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:q,ReactCurrentOwner:B};function G(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:ie,forEach:function(w,F,ce){ie(w,function(){F.apply(this,arguments)},ce)},count:function(w){var F=0;return ie(w,function(){F++}),F},toArray:function(w){return ie(w,function(F){return F})||[]},only:function(w){if(!I(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},dt.Component=x,dt.Fragment=t,dt.Profiler=o,dt.PureComponent=L,dt.StrictMode=s,dt.Suspense=d,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,dt.act=G,dt.cloneElement=function(w,F,ce){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var de=E({},w.props),me=w.key,Te=w.ref,Fe=w._owner;if(F!=null){if(F.ref!==void 0&&(Te=F.ref,Fe=B.current),F.key!==void 0&&(me=""+F.key),w.type&&w.type.defaultProps)var Re=w.type.defaultProps;for(De in F)N.call(F,De)&&!O.hasOwnProperty(De)&&(de[De]=F[De]===void 0&&Re!==void 0?Re[De]:F[De])}var De=arguments.length-2;if(De===1)de.children=ce;else if(1<De){Re=Array(De);for(var ot=0;ot<De;ot++)Re[ot]=arguments[ot+2];de.children=Re}return{$$typeof:i,type:w.type,key:me,ref:Te,props:de,_owner:Fe}},dt.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},dt.createElement=$,dt.createFactory=function(w){var F=$.bind(null,w);return F.type=w,F},dt.createRef=function(){return{current:null}},dt.forwardRef=function(w){return{$$typeof:c,render:w}},dt.isValidElement=I,dt.lazy=function(w){return{$$typeof:m,_payload:{_status:-1,_result:w},_init:se}},dt.memo=function(w,F){return{$$typeof:h,type:w,compare:F===void 0?null:F}},dt.startTransition=function(w){var F=q.transition;q.transition={};try{w()}finally{q.transition=F}},dt.unstable_act=G,dt.useCallback=function(w,F){return J.current.useCallback(w,F)},dt.useContext=function(w){return J.current.useContext(w)},dt.useDebugValue=function(){},dt.useDeferredValue=function(w){return J.current.useDeferredValue(w)},dt.useEffect=function(w,F){return J.current.useEffect(w,F)},dt.useId=function(){return J.current.useId()},dt.useImperativeHandle=function(w,F,ce){return J.current.useImperativeHandle(w,F,ce)},dt.useInsertionEffect=function(w,F){return J.current.useInsertionEffect(w,F)},dt.useLayoutEffect=function(w,F){return J.current.useLayoutEffect(w,F)},dt.useMemo=function(w,F){return J.current.useMemo(w,F)},dt.useReducer=function(w,F,ce){return J.current.useReducer(w,F,ce)},dt.useRef=function(w){return J.current.useRef(w)},dt.useState=function(w){return J.current.useState(w)},dt.useSyncExternalStore=function(w,F,ce){return J.current.useSyncExternalStore(w,F,ce)},dt.useTransition=function(){return J.current.useTransition()},dt.version="18.3.1",dt}var Vm;function Gd(){return Vm||(Vm=1,Tf.exports=tS()),Tf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function nS(){if(zm)return ia;zm=1;var i=Gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,g={},v=null,S=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:c,key:v,ref:S,props:g,_owner:o.current}}return ia.Fragment=t,ia.jsx=u,ia.jsxs=u,ia}var Hm;function iS(){return Hm||(Hm=1,Ef.exports=nS()),Ef.exports}var j=iS(),Ye=Gd();const Ea=Mv(Ye);var Bl={},wf={exports:{}},On={},Af={exports:{}},Cf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function rS(){return Gm||(Gm=1,function(i){function e(q,K){var G=q.length;q.push(K);e:for(;0<G;){var w=G-1>>>1,F=q[w];if(0<o(F,K))q[w]=K,q[G]=F,G=w;else break e}}function t(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var K=q[0],G=q.pop();if(G!==K){q[0]=G;e:for(var w=0,F=q.length,ce=F>>>1;w<ce;){var de=2*(w+1)-1,me=q[de],Te=de+1,Fe=q[Te];if(0>o(me,G))Te<F&&0>o(Fe,me)?(q[w]=Fe,q[Te]=G,w=Te):(q[w]=me,q[de]=G,w=de);else if(Te<F&&0>o(Fe,G))q[w]=Fe,q[Te]=G,w=Te;else break e}}return K}function o(q,K){var G=q.sortIndex-K.sortIndex;return G!==0?G:q.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();i.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,g=null,v=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(q){for(var K=t(h);K!==null;){if(K.callback===null)s(h);else if(K.startTime<=q)s(h),K.sortIndex=K.expirationTime,e(d,K);else break;K=t(h)}}function b(q){if(M=!1,A(q),!E)if(t(d)!==null)E=!0,se(N);else{var K=t(h);K!==null&&J(b,K.startTime-q)}}function N(q,K){E=!1,M&&(M=!1,y($),$=-1),S=!0;var G=v;try{for(A(K),g=t(d);g!==null&&(!(g.expirationTime>K)||q&&!le());){var w=g.callback;if(typeof w=="function"){g.callback=null,v=g.priorityLevel;var F=w(g.expirationTime<=K);K=i.unstable_now(),typeof F=="function"?g.callback=F:g===t(d)&&s(d),A(K)}else s(d);g=t(d)}if(g!==null)var ce=!0;else{var de=t(h);de!==null&&J(b,de.startTime-K),ce=!1}return ce}finally{g=null,v=G,S=!1}}var B=!1,O=null,$=-1,R=5,I=-1;function le(){return!(i.unstable_now()-I<R)}function ue(){if(O!==null){var q=i.unstable_now();I=q;var K=!0;try{K=O(!0,q)}finally{K?fe():(B=!1,O=null)}}else B=!1}var fe;if(typeof L=="function")fe=function(){L(ue)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,ie=V.port2;V.port1.onmessage=ue,fe=function(){ie.postMessage(null)}}else fe=function(){x(ue,0)};function se(q){O=q,B||(B=!0,fe())}function J(q,K){$=x(function(){q(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(q){q.callback=null},i.unstable_continueExecution=function(){E||S||(E=!0,se(N))},i.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<q?Math.floor(1e3/q):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(q){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var G=v;v=K;try{return q()}finally{v=G}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(q,K){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var G=v;v=q;try{return K()}finally{v=G}},i.unstable_scheduleCallback=function(q,K,G){var w=i.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?w+G:w):G=w,q){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=G+F,q={id:m++,callback:K,priorityLevel:q,startTime:G,expirationTime:F,sortIndex:-1},G>w?(q.sortIndex=G,e(h,q),t(d)===null&&q===t(h)&&(M?(y($),$=-1):M=!0,J(b,G-w))):(q.sortIndex=F,e(d,q),E||S||(E=!0,se(N))),q},i.unstable_shouldYield=le,i.unstable_wrapCallback=function(q){var K=v;return function(){var G=v;v=K;try{return q.apply(this,arguments)}finally{v=G}}}}(Cf)),Cf}var Wm;function sS(){return Wm||(Wm=1,Af.exports=rS()),Af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function oS(){if(jm)return On;jm=1;var i=Gd(),e=sS();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,a,f){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,a,f){if(r===null||typeof r>"u"||S(n,r,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,a,f,p,_,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,L);x[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,L);x[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,L);x[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function A(n,r,a,f){var p=x.hasOwnProperty(r)?x[r]:null;(p!==null?p.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,a,p,f)&&(a=null),f||p===null?v(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(r=p.attributeName,f=p.attributeNamespace,a===null?n.removeAttribute(r):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,f?n.setAttributeNS(f,r,a):n.setAttribute(r,a))))}var b=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),le=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),q=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var G=Object.assign,w;function F(n){if(w===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);w=r&&r[1]||""}return`
`+w+n}var ce=!1;function de(n,r){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Q){var f=Q}Reflect.construct(n,[],r)}else{try{r.call()}catch(Q){f=Q}n.call(r.prototype)}else{try{throw Error()}catch(Q){f=Q}n()}}catch(Q){if(Q&&f&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),_=f.stack.split(`
`),T=p.length-1,U=_.length-1;1<=T&&0<=U&&p[T]!==_[U];)U--;for(;1<=T&&0<=U;T--,U--)if(p[T]!==_[U]){if(T!==1||U!==1)do if(T--,U--,0>U||p[T]!==_[U]){var k=`
`+p[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=U);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?F(n):""}function me(n){switch(n.tag){case 5:return F(n.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return n=de(n.type,!1),n;case 11:return n=de(n.type.render,!1),n;case 1:return n=de(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case B:return"Portal";case R:return"Profiler";case $:return"StrictMode";case fe:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case le:return(n.displayName||"Context")+".Consumer";case I:return(n._context.displayName||"Context")+".Provider";case ue:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return r=n.displayName||null,r!==null?r:Te(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return Te(n(r))}catch{}}return null}function Fe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(r);case 8:return r===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ot(n){var r=De(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Xe(n){n._valueTracker||(n._valueTracker=ot(n))}function Z(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),f="";return n&&(f=De(n)?n.checked?"true":"false":n.value),n=f,n!==a?(r.setValue(n),!0):!1}function en(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function He(n,r){var a=r.checked;return G({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tt(n,r){var a=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;a=Re(r.value!=null?r.value:a),n._wrapperState={initialChecked:f,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Qe(n,r){r=r.checked,r!=null&&A(n,"checked",r,!1)}function At(n,r){Qe(n,r);var a=Re(r.value),f=r.type;if(a!=null)f==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?st(n,r.type,a):r.hasOwnProperty("defaultValue")&&st(n,r.type,Re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function at(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function st(n,r,a){(r!=="number"||en(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gt=Array.isArray;function bt(n,r,a,f){if(n=n.options,r){r={};for(var p=0;p<a.length;p++)r["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=r.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&f&&(n[a].defaultSelected=!0)}else{for(a=""+Re(a),r=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,f&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function jt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return G({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(gt(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Re(a)}}function C(n,r){var a=Re(r.value),f=Re(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),f!=null&&(n.defaultValue=""+f)}function ee(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Se(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Se(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _e,Ve=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,f,p){MSApp.execUnsafeLocalFunction(function(){return n(r,a,f,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(_e=_e||document.createElement("div"),_e.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=_e.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ee(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Je=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(n){Je.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),be[r]=be[n]})});function pt(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||be.hasOwnProperty(n)&&be[n]?(""+r).trim():r+"px"}function xe(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var f=a.indexOf("--")===0,p=pt(a,r[a],f);a==="float"&&(a="cssFloat"),f?n.setProperty(a,p):n[a]=p}}var Mt=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(n,r){if(r){if(Mt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ke(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ge=null;function Ne(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ct=null,z=null,Ae=null;function Me(n){if(n=Ho(n)){if(typeof ct!="function")throw Error(t(280));var r=n.stateNode;r&&(r=el(r),ct(n.stateNode,n.type,r))}}function ae(n){z?Ae?Ae.push(n):Ae=[n]:z=n}function we(){if(z){var n=z,r=Ae;if(Ae=z=null,Me(n),r)for(n=0;n<r.length;n++)Me(r[n])}}function qe(n,r){return n(r)}function mt(){}var Ut=!1;function Mn(n,r,a){if(Ut)return n(r,a);Ut=!0;try{return qe(n,r,a)}finally{Ut=!1,(z!==null||Ae!==null)&&(mt(),we())}}function yt(n,r){var a=n.stateNode;if(a===null)return null;var f=el(a);if(f===null)return null;a=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var $t=!1;if(c)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){$t=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{$t=!1}function Na(n,r,a,f,p,_,T,U,k){var Q=Array.prototype.slice.call(arguments,3);try{r.apply(a,Q)}catch(pe){this.onError(pe)}}var Vr=!1,Pi=null,zr=!1,tr=null,Ua={onError:function(n){Vr=!0,Pi=n}};function Ia(n,r,a,f,p,_,T,U,k){Vr=!1,Pi=null,Na.apply(Ua,arguments)}function Wu(n,r,a,f,p,_,T,U,k){if(Ia.apply(this,arguments),Vr){if(Vr){var Q=Pi;Vr=!1,Pi=null}else throw Error(t(198));zr||(zr=!0,tr=Q)}}function Li(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Fa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function P(n){if(Li(n)!==n)throw Error(t(188))}function X(n){var r=n.alternate;if(!r){if(r=Li(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,f=r;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(f=p.return,f!==null){a=f;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return P(p),n;if(_===f)return P(p),r;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=p,f=_;else{for(var T=!1,U=p.child;U;){if(U===a){T=!0,a=p,f=_;break}if(U===f){T=!0,f=p,a=_;break}U=U.sibling}if(!T){for(U=_.child;U;){if(U===a){T=!0,a=_,f=p;break}if(U===f){T=!0,f=_,a=p;break}U=U.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function te(n){return n=X(n),n!==null?re(n):null}function re(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=re(n);if(r!==null)return r;n=n.sibling}return null}var oe=e.unstable_scheduleCallback,Pe=e.unstable_cancelCallback,ze=e.unstable_shouldYield,$e=e.unstable_requestPaint,Ue=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,it=e.unstable_ImmediatePriority,rt=e.unstable_UserBlockingPriority,Ct=e.unstable_NormalPriority,En=e.unstable_LowPriority,zt=e.unstable_IdlePriority,Ln=null,vt=null;function ft(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Ln,n,void 0,(n.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:Oa,Bt=Math.log,Di=Math.LN2;function Oa(n){return n>>>=0,n===0?32:31-(Bt(n)/Di|0)|0}var Ei=64,nr=4194304;function Ht(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Zn(n,r){var a=n.pendingLanes;if(a===0)return 0;var f=0,p=n.suspendedLanes,_=n.pingedLanes,T=a&268435455;if(T!==0){var U=T&~p;U!==0?f=Ht(U):(_&=T,_!==0&&(f=Ht(_)))}else T=a&~p,T!==0?f=Ht(T):_!==0&&(f=Ht(_));if(f===0)return 0;if(r!==0&&r!==f&&(r&p)===0&&(p=f&-f,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if((f&4)!==0&&(f|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)a=31-Tn(r),p=1<<a,f|=n[a],r&=~p;return f}function To(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wn(n,r){for(var a=n.suspendedLanes,f=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-Tn(_),U=1<<T,k=p[T];k===-1?((U&a)===0||(U&f)!==0)&&(p[T]=To(U,r)):k<=r&&(n.expiredLanes|=U),_&=~U}}function Hr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ka(){var n=Ei;return Ei<<=1,(Ei&4194240)===0&&(Ei=64),n}function Es(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function wo(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Tn(r),n[r]=a}function My(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Tn(a),_=1<<p;r[p]=0,f[p]=-1,n[p]=-1,a&=~_}}function ju(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var f=31-Tn(a),p=1<<f;p&r|n[f]&r&&(n[f]|=r),a&=~p}}var Et=0;function vh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var _h,Xu,yh,xh,Sh,qu=!1,Ba=[],ir=null,rr=null,sr=null,Ao=new Map,Co=new Map,or=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(n,r){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Ao.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(r.pointerId)}}function Ro(n,r,a,f,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[p]},r!==null&&(r=Ho(r),r!==null&&Xu(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Ty(n,r,a,f,p){switch(r){case"focusin":return ir=Ro(ir,n,r,a,f,p),!0;case"dragenter":return rr=Ro(rr,n,r,a,f,p),!0;case"mouseover":return sr=Ro(sr,n,r,a,f,p),!0;case"pointerover":var _=p.pointerId;return Ao.set(_,Ro(Ao.get(_)||null,n,r,a,f,p)),!0;case"gotpointercapture":return _=p.pointerId,Co.set(_,Ro(Co.get(_)||null,n,r,a,f,p)),!0}return!1}function Eh(n){var r=Gr(n.target);if(r!==null){var a=Li(r);if(a!==null){if(r=a.tag,r===13){if(r=Fa(a),r!==null){n.blockedOn=r,Sh(n.priority,function(){yh(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Va(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=$u(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var f=new a.constructor(a.type,a);Ge=f,a.target.dispatchEvent(f),Ge=null}else return r=Ho(a),r!==null&&Xu(r),n.blockedOn=a,!1;r.shift()}return!0}function Th(n,r,a){Va(n)&&a.delete(r)}function wy(){qu=!1,ir!==null&&Va(ir)&&(ir=null),rr!==null&&Va(rr)&&(rr=null),sr!==null&&Va(sr)&&(sr=null),Ao.forEach(Th),Co.forEach(Th)}function bo(n,r){n.blockedOn===r&&(n.blockedOn=null,qu||(qu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wy)))}function Po(n){function r(p){return bo(p,n)}if(0<Ba.length){bo(Ba[0],n);for(var a=1;a<Ba.length;a++){var f=Ba[a];f.blockedOn===n&&(f.blockedOn=null)}}for(ir!==null&&bo(ir,n),rr!==null&&bo(rr,n),sr!==null&&bo(sr,n),Ao.forEach(r),Co.forEach(r),a=0;a<or.length;a++)f=or[a],f.blockedOn===n&&(f.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)Eh(a),a.blockedOn===null&&or.shift()}var Ts=b.ReactCurrentBatchConfig,za=!0;function Ay(n,r,a,f){var p=Et,_=Ts.transition;Ts.transition=null;try{Et=1,Yu(n,r,a,f)}finally{Et=p,Ts.transition=_}}function Cy(n,r,a,f){var p=Et,_=Ts.transition;Ts.transition=null;try{Et=4,Yu(n,r,a,f)}finally{Et=p,Ts.transition=_}}function Yu(n,r,a,f){if(za){var p=$u(n,r,a,f);if(p===null)dc(n,r,f,Ha,a),Mh(n,f);else if(Ty(p,n,r,a,f))f.stopPropagation();else if(Mh(n,f),r&4&&-1<Ey.indexOf(n)){for(;p!==null;){var _=Ho(p);if(_!==null&&_h(_),_=$u(n,r,a,f),_===null&&dc(n,r,f,Ha,a),_===p)break;p=_}p!==null&&f.stopPropagation()}else dc(n,r,f,null,a)}}var Ha=null;function $u(n,r,a,f){if(Ha=null,n=Ne(f),n=Gr(n),n!==null)if(r=Li(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Fa(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ha=n,null}function wh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case it:return 1;case rt:return 4;case Ct:case En:return 16;case zt:return 536870912;default:return 16}default:return 16}}var ar=null,Ku=null,Ga=null;function Ah(){if(Ga)return Ga;var n,r=Ku,a=r.length,f,p="value"in ar?ar.value:ar.textContent,_=p.length;for(n=0;n<a&&r[n]===p[n];n++);var T=a-n;for(f=1;f<=T&&r[a-f]===p[_-f];f++);return Ga=p.slice(n,1<f?1-f:void 0)}function Wa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ja(){return!0}function Ch(){return!1}function Gn(n){function r(a,f,p,_,T){this._reactName=a,this._targetInst=p,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ja:Ch,this.isPropagationStopped=Ch,this}return G(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),r}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=Gn(ws),Lo=G({},ws,{view:0,detail:0}),Ry=Gn(Lo),Qu,Ju,Do,Xa=G({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Do&&(Do&&n.type==="mousemove"?(Qu=n.screenX-Do.screenX,Ju=n.screenY-Do.screenY):Ju=Qu=0,Do=n),Qu)},movementY:function(n){return"movementY"in n?n.movementY:Ju}}),Rh=Gn(Xa),by=G({},Xa,{dataTransfer:0}),Py=Gn(by),Ly=G({},Lo,{relatedTarget:0}),ec=Gn(Ly),Dy=G({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=Gn(Dy),Uy=G({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Iy=Gn(Uy),Fy=G({},ws,{data:0}),bh=Gn(Fy),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=By[n])?!!r[n]:!1}function tc(){return Vy}var zy=G({},Lo,{key:function(n){if(n.key){var r=Oy[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ky[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(n){return n.type==="keypress"?Wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Hy=Gn(zy),Gy=G({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=Gn(Gy),Wy=G({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),jy=Gn(Wy),Xy=G({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=Gn(Xy),Yy=G({},Xa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$y=Gn(Yy),Ky=[9,13,27,32],nc=c&&"CompositionEvent"in window,No=null;c&&"documentMode"in document&&(No=document.documentMode);var Zy=c&&"TextEvent"in window&&!No,Lh=c&&(!nc||No&&8<No&&11>=No),Dh=" ",Nh=!1;function Uh(n,r){switch(n){case"keyup":return Ky.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function Qy(n,r){switch(n){case"compositionend":return Ih(r);case"keypress":return r.which!==32?null:(Nh=!0,Dh);case"textInput":return n=r.data,n===Dh&&Nh?null:n;default:return null}}function Jy(n,r){if(As)return n==="compositionend"||!nc&&Uh(n,r)?(n=Ah(),Ga=Ku=ar=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Lh&&r.locale!=="ko"?null:r.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!ex[n.type]:r==="textarea"}function Oh(n,r,a,f){ae(f),r=Za(r,"onChange"),0<r.length&&(a=new Zu("onChange","change",null,a,f),n.push({event:a,listeners:r}))}var Uo=null,Io=null;function tx(n){tp(n,0)}function qa(n){var r=Ls(n);if(Z(r))return n}function nx(n,r){if(n==="change")return r}var kh=!1;if(c){var ic;if(c){var rc="oninput"in document;if(!rc){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),rc=typeof Bh.oninput=="function"}ic=rc}else ic=!1;kh=ic&&(!document.documentMode||9<document.documentMode)}function Vh(){Uo&&(Uo.detachEvent("onpropertychange",zh),Io=Uo=null)}function zh(n){if(n.propertyName==="value"&&qa(Io)){var r=[];Oh(r,Io,n,Ne(n)),Mn(tx,r)}}function ix(n,r,a){n==="focusin"?(Vh(),Uo=r,Io=a,Uo.attachEvent("onpropertychange",zh)):n==="focusout"&&Vh()}function rx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qa(Io)}function sx(n,r){if(n==="click")return qa(r)}function ox(n,r){if(n==="input"||n==="change")return qa(r)}function ax(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var fi=typeof Object.is=="function"?Object.is:ax;function Fo(n,r){if(fi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),f=Object.keys(r);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var p=a[f];if(!d.call(r,p)||!fi(n[p],r[p]))return!1}return!0}function Hh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gh(n,r){var a=Hh(n);n=0;for(var f;a;){if(a.nodeType===3){if(f=n+a.textContent.length,n<=r&&f>=r)return{node:a,offset:r-n};n=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hh(a)}}function Wh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Wh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function jh(){for(var n=window,r=en();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=en(n.document)}return r}function sc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function lx(n){var r=jh(),a=n.focusedElem,f=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Wh(a.ownerDocument.documentElement,a)){if(f!==null&&sc(a)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,_=Math.min(f.start,p);f=f.end===void 0?_:Math.min(f.end,p),!n.extend&&_>f&&(p=f,f=_,_=p),p=Gh(a,_);var T=Gh(a,f);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ux=c&&"documentMode"in document&&11>=document.documentMode,Cs=null,oc=null,Oo=null,ac=!1;function Xh(n,r,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||Cs==null||Cs!==en(f)||(f=Cs,"selectionStart"in f&&sc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Oo&&Fo(Oo,f)||(Oo=f,f=Za(oc,"onSelect"),0<f.length&&(r=new Zu("onSelect","select",null,r,a),n.push({event:r,listeners:f}),r.target=Cs)))}function Ya(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Rs={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},lc={},qh={};c&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function $a(n){if(lc[n])return lc[n];if(!Rs[n])return n;var r=Rs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in qh)return lc[n]=r[a];return n}var Yh=$a("animationend"),$h=$a("animationiteration"),Kh=$a("animationstart"),Zh=$a("transitionend"),Qh=new Map,Jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(n,r){Qh.set(n,r),l(r,[n])}for(var uc=0;uc<Jh.length;uc++){var cc=Jh[uc],cx=cc.toLowerCase(),fx=cc[0].toUpperCase()+cc.slice(1);lr(cx,"on"+fx)}lr(Yh,"onAnimationEnd"),lr($h,"onAnimationIteration"),lr(Kh,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(Zh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function ep(n,r,a){var f=n.type||"unknown-event";n.currentTarget=a,Wu(f,r,void 0,n),n.currentTarget=null}function tp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var f=n[a],p=f.event;f=f.listeners;e:{var _=void 0;if(r)for(var T=f.length-1;0<=T;T--){var U=f[T],k=U.instance,Q=U.currentTarget;if(U=U.listener,k!==_&&p.isPropagationStopped())break e;ep(p,U,Q),_=k}else for(T=0;T<f.length;T++){if(U=f[T],k=U.instance,Q=U.currentTarget,U=U.listener,k!==_&&p.isPropagationStopped())break e;ep(p,U,Q),_=k}}}if(zr)throw n=tr,zr=!1,tr=null,n}function Pt(n,r){var a=r[_c];a===void 0&&(a=r[_c]=new Set);var f=n+"__bubble";a.has(f)||(np(r,n,2,!1),a.add(f))}function fc(n,r,a){var f=0;r&&(f|=4),np(a,n,f,r)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function Bo(n){if(!n[Ka]){n[Ka]=!0,s.forEach(function(a){a!=="selectionchange"&&(dx.has(a)||fc(a,!1,n),fc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ka]||(r[Ka]=!0,fc("selectionchange",!1,r))}}function np(n,r,a,f){switch(wh(r)){case 1:var p=Ay;break;case 4:p=Cy;break;default:p=Yu}a=p.bind(null,r,a,n),p=void 0,!$t||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),f?p!==void 0?n.addEventListener(r,a,{capture:!0,passive:p}):n.addEventListener(r,a,!0):p!==void 0?n.addEventListener(r,a,{passive:p}):n.addEventListener(r,a,!1)}function dc(n,r,a,f,p){var _=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var U=f.stateNode.containerInfo;if(U===p||U.nodeType===8&&U.parentNode===p)break;if(T===4)for(T=f.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;T=T.return}for(;U!==null;){if(T=Gr(U),T===null)return;if(k=T.tag,k===5||k===6){f=_=T;continue e}U=U.parentNode}}f=f.return}Mn(function(){var Q=_,pe=Ne(a),ge=[];e:{var he=Qh.get(n);if(he!==void 0){var Le=Zu,Oe=n;switch(n){case"keypress":if(Wa(a)===0)break e;case"keydown":case"keyup":Le=Hy;break;case"focusin":Oe="focus",Le=ec;break;case"focusout":Oe="blur",Le=ec;break;case"beforeblur":case"afterblur":Le=ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=jy;break;case Yh:case $h:case Kh:Le=Ny;break;case Zh:Le=qy;break;case"scroll":Le=Ry;break;case"wheel":Le=$y;break;case"copy":case"cut":case"paste":Le=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Ph}var ke=(r&4)!==0,Gt=!ke&&n==="scroll",W=ke?he!==null?he+"Capture":null:he;ke=[];for(var H=Q,Y;H!==null;){Y=H;var ye=Y.stateNode;if(Y.tag===5&&ye!==null&&(Y=ye,W!==null&&(ye=yt(H,W),ye!=null&&ke.push(Vo(H,ye,Y)))),Gt)break;H=H.return}0<ke.length&&(he=new Le(he,Oe,null,a,pe),ge.push({event:he,listeners:ke}))}}if((r&7)===0){e:{if(he=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",he&&a!==Ge&&(Oe=a.relatedTarget||a.fromElement)&&(Gr(Oe)||Oe[Ni]))break e;if((Le||he)&&(he=pe.window===pe?pe:(he=pe.ownerDocument)?he.defaultView||he.parentWindow:window,Le?(Oe=a.relatedTarget||a.toElement,Le=Q,Oe=Oe?Gr(Oe):null,Oe!==null&&(Gt=Li(Oe),Oe!==Gt||Oe.tag!==5&&Oe.tag!==6)&&(Oe=null)):(Le=null,Oe=Q),Le!==Oe)){if(ke=Rh,ye="onMouseLeave",W="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(ke=Ph,ye="onPointerLeave",W="onPointerEnter",H="pointer"),Gt=Le==null?he:Ls(Le),Y=Oe==null?he:Ls(Oe),he=new ke(ye,H+"leave",Le,a,pe),he.target=Gt,he.relatedTarget=Y,ye=null,Gr(pe)===Q&&(ke=new ke(W,H+"enter",Oe,a,pe),ke.target=Y,ke.relatedTarget=Gt,ye=ke),Gt=ye,Le&&Oe)t:{for(ke=Le,W=Oe,H=0,Y=ke;Y;Y=bs(Y))H++;for(Y=0,ye=W;ye;ye=bs(ye))Y++;for(;0<H-Y;)ke=bs(ke),H--;for(;0<Y-H;)W=bs(W),Y--;for(;H--;){if(ke===W||W!==null&&ke===W.alternate)break t;ke=bs(ke),W=bs(W)}ke=null}else ke=null;Le!==null&&ip(ge,he,Le,ke,!1),Oe!==null&&Gt!==null&&ip(ge,Gt,Oe,ke,!0)}}e:{if(he=Q?Ls(Q):window,Le=he.nodeName&&he.nodeName.toLowerCase(),Le==="select"||Le==="input"&&he.type==="file")var Be=nx;else if(Fh(he))if(kh)Be=ox;else{Be=rx;var We=ix}else(Le=he.nodeName)&&Le.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(Be=sx);if(Be&&(Be=Be(n,Q))){Oh(ge,Be,a,pe);break e}We&&We(n,he,Q),n==="focusout"&&(We=he._wrapperState)&&We.controlled&&he.type==="number"&&st(he,"number",he.value)}switch(We=Q?Ls(Q):window,n){case"focusin":(Fh(We)||We.contentEditable==="true")&&(Cs=We,oc=Q,Oo=null);break;case"focusout":Oo=oc=Cs=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Xh(ge,a,pe);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":Xh(ge,a,pe)}var je;if(nc)e:{switch(n){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else As?Uh(n,a)&&(et="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(et="onCompositionStart");et&&(Lh&&a.locale!=="ko"&&(As||et!=="onCompositionStart"?et==="onCompositionEnd"&&As&&(je=Ah()):(ar=pe,Ku="value"in ar?ar.value:ar.textContent,As=!0)),We=Za(Q,et),0<We.length&&(et=new bh(et,n,null,a,pe),ge.push({event:et,listeners:We}),je?et.data=je:(je=Ih(a),je!==null&&(et.data=je)))),(je=Zy?Qy(n,a):Jy(n,a))&&(Q=Za(Q,"onBeforeInput"),0<Q.length&&(pe=new bh("onBeforeInput","beforeinput",null,a,pe),ge.push({event:pe,listeners:Q}),pe.data=je))}tp(ge,r)})}function Vo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Za(n,r){for(var a=r+"Capture",f=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=yt(n,a),_!=null&&f.unshift(Vo(n,_,p)),_=yt(n,r),_!=null&&f.push(Vo(n,_,p))),n=n.return}return f}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ip(n,r,a,f,p){for(var _=r._reactName,T=[];a!==null&&a!==f;){var U=a,k=U.alternate,Q=U.stateNode;if(k!==null&&k===f)break;U.tag===5&&Q!==null&&(U=Q,p?(k=yt(a,_),k!=null&&T.unshift(Vo(a,k,U))):p||(k=yt(a,_),k!=null&&T.push(Vo(a,k,U)))),a=a.return}T.length!==0&&n.push({event:r,listeners:T})}var hx=/\r\n?/g,px=/\u0000|\uFFFD/g;function rp(n){return(typeof n=="string"?n:""+n).replace(hx,`
`).replace(px,"")}function Qa(n,r,a){if(r=rp(r),rp(n)!==r&&a)throw Error(t(425))}function Ja(){}var hc=null,pc=null;function mc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(n){return sp.resolve(null).then(n).catch(vx)}:gc;function vx(n){setTimeout(function(){throw n})}function vc(n,r){var a=r,f=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(f===0){n.removeChild(p),Po(r);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=p}while(a);Po(r)}function ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function op(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Ps,zo="__reactProps$"+Ps,Ni="__reactContainer$"+Ps,_c="__reactEvents$"+Ps,_x="__reactListeners$"+Ps,yx="__reactHandles$"+Ps;function Gr(n){var r=n[Ti];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ni]||a[Ti]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=op(n);n!==null;){if(a=n[Ti])return a;n=op(n)}return r}n=a,a=n.parentNode}return null}function Ho(n){return n=n[Ti]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function el(n){return n[zo]||null}var yc=[],Ds=-1;function cr(n){return{current:n}}function Lt(n){0>Ds||(n.current=yc[Ds],yc[Ds]=null,Ds--)}function Rt(n,r){Ds++,yc[Ds]=n.current,n.current=r}var fr={},hn=cr(fr),Dn=cr(!1),Wr=fr;function Ns(n,r){var a=n.type.contextTypes;if(!a)return fr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=r[_];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Nn(n){return n=n.childContextTypes,n!=null}function tl(){Lt(Dn),Lt(hn)}function ap(n,r,a){if(hn.current!==fr)throw Error(t(168));Rt(hn,r),Rt(Dn,a)}function lp(n,r,a){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var p in f)if(!(p in r))throw Error(t(108,Fe(n)||"Unknown",p));return G({},a,f)}function nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,Wr=hn.current,Rt(hn,n),Rt(Dn,Dn.current),!0}function up(n,r,a){var f=n.stateNode;if(!f)throw Error(t(169));a?(n=lp(n,r,Wr),f.__reactInternalMemoizedMergedChildContext=n,Lt(Dn),Lt(hn),Rt(hn,n)):Lt(Dn),Rt(Dn,a)}var Ui=null,il=!1,xc=!1;function cp(n){Ui===null?Ui=[n]:Ui.push(n)}function xx(n){il=!0,cp(n)}function dr(){if(!xc&&Ui!==null){xc=!0;var n=0,r=Et;try{var a=Ui;for(Et=1;n<a.length;n++){var f=a[n];do f=f(!0);while(f!==null)}Ui=null,il=!1}catch(p){throw Ui!==null&&(Ui=Ui.slice(n+1)),oe(it,dr),p}finally{Et=r,xc=!1}}return null}var Us=[],Is=0,rl=null,sl=0,Qn=[],Jn=0,jr=null,Ii=1,Fi="";function Xr(n,r){Us[Is++]=sl,Us[Is++]=rl,rl=n,sl=r}function fp(n,r,a){Qn[Jn++]=Ii,Qn[Jn++]=Fi,Qn[Jn++]=jr,jr=n;var f=Ii;n=Fi;var p=32-Tn(f)-1;f&=~(1<<p),a+=1;var _=32-Tn(r)+p;if(30<_){var T=p-p%5;_=(f&(1<<T)-1).toString(32),f>>=T,p-=T,Ii=1<<32-Tn(r)+p|a<<p|f,Fi=_+n}else Ii=1<<_|a<<p|f,Fi=n}function Sc(n){n.return!==null&&(Xr(n,1),fp(n,1,0))}function Mc(n){for(;n===rl;)rl=Us[--Is],Us[Is]=null,sl=Us[--Is],Us[Is]=null;for(;n===jr;)jr=Qn[--Jn],Qn[Jn]=null,Fi=Qn[--Jn],Qn[Jn]=null,Ii=Qn[--Jn],Qn[Jn]=null}var Wn=null,jn=null,It=!1,di=null;function dp(n,r){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function hp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Wn=n,jn=ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Wn=n,jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=jr!==null?{id:Ii,overflow:Fi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Wn=n,jn=null,!0):!1;default:return!1}}function Ec(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Tc(n){if(It){var r=jn;if(r){var a=r;if(!hp(n,r)){if(Ec(n))throw Error(t(418));r=ur(a.nextSibling);var f=Wn;r&&hp(n,r)?dp(f,a):(n.flags=n.flags&-4097|2,It=!1,Wn=n)}}else{if(Ec(n))throw Error(t(418));n.flags=n.flags&-4097|2,It=!1,Wn=n}}}function pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Wn=n}function ol(n){if(n!==Wn)return!1;if(!It)return pp(n),It=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!mc(n.type,n.memoizedProps)),r&&(r=jn)){if(Ec(n))throw mp(),Error(t(418));for(;r;)dp(n,r),r=ur(r.nextSibling)}if(pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){jn=ur(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}jn=null}}else jn=Wn?ur(n.stateNode.nextSibling):null;return!0}function mp(){for(var n=jn;n;)n=ur(n.nextSibling)}function Fs(){jn=Wn=null,It=!1}function wc(n){di===null?di=[n]:di.push(n)}var Sx=b.ReactCurrentBatchConfig;function Go(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,n));var p=f,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(T){var U=p.refs;T===null?delete U[_]:U[_]=T},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function al(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function gp(n){var r=n._init;return r(n._payload)}function vp(n){function r(W,H){if(n){var Y=W.deletions;Y===null?(W.deletions=[H],W.flags|=16):Y.push(H)}}function a(W,H){if(!n)return null;for(;H!==null;)r(W,H),H=H.sibling;return null}function f(W,H){for(W=new Map;H!==null;)H.key!==null?W.set(H.key,H):W.set(H.index,H),H=H.sibling;return W}function p(W,H){return W=xr(W,H),W.index=0,W.sibling=null,W}function _(W,H,Y){return W.index=Y,n?(Y=W.alternate,Y!==null?(Y=Y.index,Y<H?(W.flags|=2,H):Y):(W.flags|=2,H)):(W.flags|=1048576,H)}function T(W){return n&&W.alternate===null&&(W.flags|=2),W}function U(W,H,Y,ye){return H===null||H.tag!==6?(H=vf(Y,W.mode,ye),H.return=W,H):(H=p(H,Y),H.return=W,H)}function k(W,H,Y,ye){var Be=Y.type;return Be===O?pe(W,H,Y.props.children,ye,Y.key):H!==null&&(H.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===se&&gp(Be)===H.type)?(ye=p(H,Y.props),ye.ref=Go(W,H,Y),ye.return=W,ye):(ye=Ll(Y.type,Y.key,Y.props,null,W.mode,ye),ye.ref=Go(W,H,Y),ye.return=W,ye)}function Q(W,H,Y,ye){return H===null||H.tag!==4||H.stateNode.containerInfo!==Y.containerInfo||H.stateNode.implementation!==Y.implementation?(H=_f(Y,W.mode,ye),H.return=W,H):(H=p(H,Y.children||[]),H.return=W,H)}function pe(W,H,Y,ye,Be){return H===null||H.tag!==7?(H=es(Y,W.mode,ye,Be),H.return=W,H):(H=p(H,Y),H.return=W,H)}function ge(W,H,Y){if(typeof H=="string"&&H!==""||typeof H=="number")return H=vf(""+H,W.mode,Y),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case N:return Y=Ll(H.type,H.key,H.props,null,W.mode,Y),Y.ref=Go(W,null,H),Y.return=W,Y;case B:return H=_f(H,W.mode,Y),H.return=W,H;case se:var ye=H._init;return ge(W,ye(H._payload),Y)}if(gt(H)||K(H))return H=es(H,W.mode,Y,null),H.return=W,H;al(W,H)}return null}function he(W,H,Y,ye){var Be=H!==null?H.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Be!==null?null:U(W,H,""+Y,ye);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case N:return Y.key===Be?k(W,H,Y,ye):null;case B:return Y.key===Be?Q(W,H,Y,ye):null;case se:return Be=Y._init,he(W,H,Be(Y._payload),ye)}if(gt(Y)||K(Y))return Be!==null?null:pe(W,H,Y,ye,null);al(W,Y)}return null}function Le(W,H,Y,ye,Be){if(typeof ye=="string"&&ye!==""||typeof ye=="number")return W=W.get(Y)||null,U(H,W,""+ye,Be);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case N:return W=W.get(ye.key===null?Y:ye.key)||null,k(H,W,ye,Be);case B:return W=W.get(ye.key===null?Y:ye.key)||null,Q(H,W,ye,Be);case se:var We=ye._init;return Le(W,H,Y,We(ye._payload),Be)}if(gt(ye)||K(ye))return W=W.get(Y)||null,pe(H,W,ye,Be,null);al(H,ye)}return null}function Oe(W,H,Y,ye){for(var Be=null,We=null,je=H,et=H=0,rn=null;je!==null&&et<Y.length;et++){je.index>et?(rn=je,je=null):rn=je.sibling;var xt=he(W,je,Y[et],ye);if(xt===null){je===null&&(je=rn);break}n&&je&&xt.alternate===null&&r(W,je),H=_(xt,H,et),We===null?Be=xt:We.sibling=xt,We=xt,je=rn}if(et===Y.length)return a(W,je),It&&Xr(W,et),Be;if(je===null){for(;et<Y.length;et++)je=ge(W,Y[et],ye),je!==null&&(H=_(je,H,et),We===null?Be=je:We.sibling=je,We=je);return It&&Xr(W,et),Be}for(je=f(W,je);et<Y.length;et++)rn=Le(je,W,et,Y[et],ye),rn!==null&&(n&&rn.alternate!==null&&je.delete(rn.key===null?et:rn.key),H=_(rn,H,et),We===null?Be=rn:We.sibling=rn,We=rn);return n&&je.forEach(function(Sr){return r(W,Sr)}),It&&Xr(W,et),Be}function ke(W,H,Y,ye){var Be=K(Y);if(typeof Be!="function")throw Error(t(150));if(Y=Be.call(Y),Y==null)throw Error(t(151));for(var We=Be=null,je=H,et=H=0,rn=null,xt=Y.next();je!==null&&!xt.done;et++,xt=Y.next()){je.index>et?(rn=je,je=null):rn=je.sibling;var Sr=he(W,je,xt.value,ye);if(Sr===null){je===null&&(je=rn);break}n&&je&&Sr.alternate===null&&r(W,je),H=_(Sr,H,et),We===null?Be=Sr:We.sibling=Sr,We=Sr,je=rn}if(xt.done)return a(W,je),It&&Xr(W,et),Be;if(je===null){for(;!xt.done;et++,xt=Y.next())xt=ge(W,xt.value,ye),xt!==null&&(H=_(xt,H,et),We===null?Be=xt:We.sibling=xt,We=xt);return It&&Xr(W,et),Be}for(je=f(W,je);!xt.done;et++,xt=Y.next())xt=Le(je,W,et,xt.value,ye),xt!==null&&(n&&xt.alternate!==null&&je.delete(xt.key===null?et:xt.key),H=_(xt,H,et),We===null?Be=xt:We.sibling=xt,We=xt);return n&&je.forEach(function(eS){return r(W,eS)}),It&&Xr(W,et),Be}function Gt(W,H,Y,ye){if(typeof Y=="object"&&Y!==null&&Y.type===O&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case N:e:{for(var Be=Y.key,We=H;We!==null;){if(We.key===Be){if(Be=Y.type,Be===O){if(We.tag===7){a(W,We.sibling),H=p(We,Y.props.children),H.return=W,W=H;break e}}else if(We.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===se&&gp(Be)===We.type){a(W,We.sibling),H=p(We,Y.props),H.ref=Go(W,We,Y),H.return=W,W=H;break e}a(W,We);break}else r(W,We);We=We.sibling}Y.type===O?(H=es(Y.props.children,W.mode,ye,Y.key),H.return=W,W=H):(ye=Ll(Y.type,Y.key,Y.props,null,W.mode,ye),ye.ref=Go(W,H,Y),ye.return=W,W=ye)}return T(W);case B:e:{for(We=Y.key;H!==null;){if(H.key===We)if(H.tag===4&&H.stateNode.containerInfo===Y.containerInfo&&H.stateNode.implementation===Y.implementation){a(W,H.sibling),H=p(H,Y.children||[]),H.return=W,W=H;break e}else{a(W,H);break}else r(W,H);H=H.sibling}H=_f(Y,W.mode,ye),H.return=W,W=H}return T(W);case se:return We=Y._init,Gt(W,H,We(Y._payload),ye)}if(gt(Y))return Oe(W,H,Y,ye);if(K(Y))return ke(W,H,Y,ye);al(W,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,H!==null&&H.tag===6?(a(W,H.sibling),H=p(H,Y),H.return=W,W=H):(a(W,H),H=vf(Y,W.mode,ye),H.return=W,W=H),T(W)):a(W,H)}return Gt}var Os=vp(!0),_p=vp(!1),ll=cr(null),ul=null,ks=null,Ac=null;function Cc(){Ac=ks=ul=null}function Rc(n){var r=ll.current;Lt(ll),n._currentValue=r}function bc(n,r,a){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===a)break;n=n.return}}function Bs(n,r){ul=n,Ac=ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Un=!0),n.firstContext=null)}function ei(n){var r=n._currentValue;if(Ac!==n)if(n={context:n,memoizedValue:r,next:null},ks===null){if(ul===null)throw Error(t(308));ks=n,ul.dependencies={lanes:0,firstContext:n}}else ks=ks.next=n;return r}var qr=null;function Pc(n){qr===null?qr=[n]:qr.push(n)}function yp(n,r,a,f){var p=r.interleaved;return p===null?(a.next=a,Pc(r)):(a.next=p.next,p.next=a),r.interleaved=a,Oi(n,f)}function Oi(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hr=!1;function Lc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function pr(n,r,a){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(_t&2)!==0){var p=f.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),f.pending=r,Oi(n,a)}return p=f.interleaved,p===null?(r.next=r,Pc(f)):(r.next=p.next,p.next=r),f.interleaved=r,Oi(n,a)}function cl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,a|=f,r.lanes=a,ju(n,a)}}function Sp(n,r){var a=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?p=_=r:_=_.next=r}else p=_=r;a={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:f.shared,effects:f.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function fl(n,r,a,f){var p=n.updateQueue;hr=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,U=p.shared.pending;if(U!==null){p.shared.pending=null;var k=U,Q=k.next;k.next=null,T===null?_=Q:T.next=Q,T=k;var pe=n.alternate;pe!==null&&(pe=pe.updateQueue,U=pe.lastBaseUpdate,U!==T&&(U===null?pe.firstBaseUpdate=Q:U.next=Q,pe.lastBaseUpdate=k))}if(_!==null){var ge=p.baseState;T=0,pe=Q=k=null,U=_;do{var he=U.lane,Le=U.eventTime;if((f&he)===he){pe!==null&&(pe=pe.next={eventTime:Le,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Oe=n,ke=U;switch(he=r,Le=a,ke.tag){case 1:if(Oe=ke.payload,typeof Oe=="function"){ge=Oe.call(Le,ge,he);break e}ge=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=ke.payload,he=typeof Oe=="function"?Oe.call(Le,ge,he):Oe,he==null)break e;ge=G({},ge,he);break e;case 2:hr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,he=p.effects,he===null?p.effects=[U]:he.push(U))}else Le={eventTime:Le,lane:he,tag:U.tag,payload:U.payload,callback:U.callback,next:null},pe===null?(Q=pe=Le,k=ge):pe=pe.next=Le,T|=he;if(U=U.next,U===null){if(U=p.shared.pending,U===null)break;he=U,U=he.next,he.next=null,p.lastBaseUpdate=he,p.shared.pending=null}}while(!0);if(pe===null&&(k=ge),p.baseState=k,p.firstBaseUpdate=Q,p.lastBaseUpdate=pe,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);Kr|=T,n.lanes=T,n.memoizedState=ge}}function Mp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],p=f.callback;if(p!==null){if(f.callback=null,f=a,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var Wo={},wi=cr(Wo),jo=cr(Wo),Xo=cr(Wo);function Yr(n){if(n===Wo)throw Error(t(174));return n}function Dc(n,r){switch(Rt(Xo,r),Rt(jo,n),Rt(wi,Wo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ve(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ve(r,n)}Lt(wi),Rt(wi,r)}function Vs(){Lt(wi),Lt(jo),Lt(Xo)}function Ep(n){Yr(Xo.current);var r=Yr(wi.current),a=ve(r,n.type);r!==a&&(Rt(jo,n),Rt(wi,a))}function Nc(n){jo.current===n&&(Lt(wi),Lt(jo))}var Ft=cr(0);function dl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Uc=[];function Ic(){for(var n=0;n<Uc.length;n++)Uc[n]._workInProgressVersionPrimary=null;Uc.length=0}var hl=b.ReactCurrentDispatcher,Fc=b.ReactCurrentBatchConfig,$r=0,Ot=null,Kt=null,tn=null,pl=!1,qo=!1,Yo=0,Mx=0;function pn(){throw Error(t(321))}function Oc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!fi(n[a],r[a]))return!1;return!0}function kc(n,r,a,f,p,_){if($r=_,Ot=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,hl.current=n===null||n.memoizedState===null?Ax:Cx,n=a(f,p),qo){_=0;do{if(qo=!1,Yo=0,25<=_)throw Error(t(301));_+=1,tn=Kt=null,r.updateQueue=null,hl.current=Rx,n=a(f,p)}while(qo)}if(hl.current=vl,r=Kt!==null&&Kt.next!==null,$r=0,tn=Kt=Ot=null,pl=!1,r)throw Error(t(300));return n}function Bc(){var n=Yo!==0;return Yo=0,n}function Ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ot.memoizedState=tn=n:tn=tn.next=n,tn}function ti(){if(Kt===null){var n=Ot.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var r=tn===null?Ot.memoizedState:tn.next;if(r!==null)tn=r,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},tn===null?Ot.memoizedState=tn=n:tn=tn.next=n}return tn}function $o(n,r){return typeof r=="function"?r(n):r}function Vc(n){var r=ti(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var f=Kt,p=f.baseQueue,_=a.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}f.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,f=f.baseState;var U=T=null,k=null,Q=_;do{var pe=Q.lane;if(($r&pe)===pe)k!==null&&(k=k.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),f=Q.hasEagerState?Q.eagerState:n(f,Q.action);else{var ge={lane:pe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};k===null?(U=k=ge,T=f):k=k.next=ge,Ot.lanes|=pe,Kr|=pe}Q=Q.next}while(Q!==null&&Q!==_);k===null?T=f:k.next=U,fi(f,r.memoizedState)||(Un=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=k,a.lastRenderedState=f}if(n=a.interleaved,n!==null){p=n;do _=p.lane,Ot.lanes|=_,Kr|=_,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function zc(n){var r=ti(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var f=a.dispatch,p=a.pending,_=r.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do _=n(_,T.action),T=T.next;while(T!==p);fi(_,r.memoizedState)||(Un=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),a.lastRenderedState=_}return[_,f]}function Tp(){}function wp(n,r){var a=Ot,f=ti(),p=r(),_=!fi(f.memoizedState,p);if(_&&(f.memoizedState=p,Un=!0),f=f.queue,Hc(Rp.bind(null,a,f,n),[n]),f.getSnapshot!==r||_||tn!==null&&tn.memoizedState.tag&1){if(a.flags|=2048,Ko(9,Cp.bind(null,a,f,p,r),void 0,null),nn===null)throw Error(t(349));($r&30)!==0||Ap(a,r,p)}return p}function Ap(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ot.updateQueue,r===null?(r={lastEffect:null,stores:null},Ot.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Cp(n,r,a,f){r.value=a,r.getSnapshot=f,bp(r)&&Pp(n)}function Rp(n,r,a){return a(function(){bp(r)&&Pp(n)})}function bp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!fi(n,a)}catch{return!0}}function Pp(n){var r=Oi(n,1);r!==null&&gi(r,n,1,-1)}function Lp(n){var r=Ai();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:n},r.queue=n,n=n.dispatch=wx.bind(null,Ot,n),[r.memoizedState,n]}function Ko(n,r,a,f){return n={tag:n,create:r,destroy:a,deps:f,next:null},r=Ot.updateQueue,r===null?(r={lastEffect:null,stores:null},Ot.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(f=a.next,a.next=n,n.next=f,r.lastEffect=n)),n}function Dp(){return ti().memoizedState}function ml(n,r,a,f){var p=Ai();Ot.flags|=n,p.memoizedState=Ko(1|r,a,void 0,f===void 0?null:f)}function gl(n,r,a,f){var p=ti();f=f===void 0?null:f;var _=void 0;if(Kt!==null){var T=Kt.memoizedState;if(_=T.destroy,f!==null&&Oc(f,T.deps)){p.memoizedState=Ko(r,a,_,f);return}}Ot.flags|=n,p.memoizedState=Ko(1|r,a,_,f)}function Np(n,r){return ml(8390656,8,n,r)}function Hc(n,r){return gl(2048,8,n,r)}function Up(n,r){return gl(4,2,n,r)}function Ip(n,r){return gl(4,4,n,r)}function Fp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Op(n,r,a){return a=a!=null?a.concat([n]):null,gl(4,4,Fp.bind(null,r,n),a)}function Gc(){}function kp(n,r){var a=ti();r=r===void 0?null:r;var f=a.memoizedState;return f!==null&&r!==null&&Oc(r,f[1])?f[0]:(a.memoizedState=[n,r],n)}function Bp(n,r){var a=ti();r=r===void 0?null:r;var f=a.memoizedState;return f!==null&&r!==null&&Oc(r,f[1])?f[0]:(n=n(),a.memoizedState=[n,r],n)}function Vp(n,r,a){return($r&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=a):(fi(a,r)||(a=ka(),Ot.lanes|=a,Kr|=a,n.baseState=!0),r)}function Ex(n,r){var a=Et;Et=a!==0&&4>a?a:4,n(!0);var f=Fc.transition;Fc.transition={};try{n(!1),r()}finally{Et=a,Fc.transition=f}}function zp(){return ti().memoizedState}function Tx(n,r,a){var f=_r(n);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},Hp(n))Gp(r,a);else if(a=yp(n,r,a,f),a!==null){var p=Cn();gi(a,n,f,p),Wp(a,r,f)}}function wx(n,r,a){var f=_r(n),p={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hp(n))Gp(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var T=r.lastRenderedState,U=_(T,a);if(p.hasEagerState=!0,p.eagerState=U,fi(U,T)){var k=r.interleaved;k===null?(p.next=p,Pc(r)):(p.next=k.next,k.next=p),r.interleaved=p;return}}catch{}finally{}a=yp(n,r,p,f),a!==null&&(p=Cn(),gi(a,n,f,p),Wp(a,r,f))}}function Hp(n){var r=n.alternate;return n===Ot||r!==null&&r===Ot}function Gp(n,r){qo=pl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Wp(n,r,a){if((a&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,a|=f,r.lanes=a,ju(n,a)}}var vl={readContext:ei,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},Ax={readContext:ei,useCallback:function(n,r){return Ai().memoizedState=[n,r===void 0?null:r],n},useContext:ei,useEffect:Np,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,ml(4194308,4,Fp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return ml(4194308,4,n,r)},useInsertionEffect:function(n,r){return ml(4,2,n,r)},useMemo:function(n,r){var a=Ai();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var f=Ai();return r=a!==void 0?a(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=Tx.bind(null,Ot,n),[f.memoizedState,n]},useRef:function(n){var r=Ai();return n={current:n},r.memoizedState=n},useState:Lp,useDebugValue:Gc,useDeferredValue:function(n){return Ai().memoizedState=n},useTransition:function(){var n=Lp(!1),r=n[0];return n=Ex.bind(null,n[1]),Ai().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var f=Ot,p=Ai();if(It){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),nn===null)throw Error(t(349));($r&30)!==0||Ap(f,r,a)}p.memoizedState=a;var _={value:a,getSnapshot:r};return p.queue=_,Np(Rp.bind(null,f,_,n),[n]),f.flags|=2048,Ko(9,Cp.bind(null,f,_,a,r),void 0,null),a},useId:function(){var n=Ai(),r=nn.identifierPrefix;if(It){var a=Fi,f=Ii;a=(f&~(1<<32-Tn(f)-1)).toString(32)+a,r=":"+r+"R"+a,a=Yo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Mx++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Cx={readContext:ei,useCallback:kp,useContext:ei,useEffect:Hc,useImperativeHandle:Op,useInsertionEffect:Up,useLayoutEffect:Ip,useMemo:Bp,useReducer:Vc,useRef:Dp,useState:function(){return Vc($o)},useDebugValue:Gc,useDeferredValue:function(n){var r=ti();return Vp(r,Kt.memoizedState,n)},useTransition:function(){var n=Vc($o)[0],r=ti().memoizedState;return[n,r]},useMutableSource:Tp,useSyncExternalStore:wp,useId:zp,unstable_isNewReconciler:!1},Rx={readContext:ei,useCallback:kp,useContext:ei,useEffect:Hc,useImperativeHandle:Op,useInsertionEffect:Up,useLayoutEffect:Ip,useMemo:Bp,useReducer:zc,useRef:Dp,useState:function(){return zc($o)},useDebugValue:Gc,useDeferredValue:function(n){var r=ti();return Kt===null?r.memoizedState=n:Vp(r,Kt.memoizedState,n)},useTransition:function(){var n=zc($o)[0],r=ti().memoizedState;return[n,r]},useMutableSource:Tp,useSyncExternalStore:wp,useId:zp,unstable_isNewReconciler:!1};function hi(n,r){if(n&&n.defaultProps){r=G({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Wc(n,r,a,f){r=n.memoizedState,a=a(f,r),a=a==null?r:G({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var _l={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var f=Cn(),p=_r(n),_=ki(f,p);_.payload=r,a!=null&&(_.callback=a),r=pr(n,_,p),r!==null&&(gi(r,n,p,f),cl(r,n,p))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var f=Cn(),p=_r(n),_=ki(f,p);_.tag=1,_.payload=r,a!=null&&(_.callback=a),r=pr(n,_,p),r!==null&&(gi(r,n,p,f),cl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Cn(),f=_r(n),p=ki(a,f);p.tag=2,r!=null&&(p.callback=r),r=pr(n,p,f),r!==null&&(gi(r,n,f,a),cl(r,n,f))}};function jp(n,r,a,f,p,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,_,T):r.prototype&&r.prototype.isPureReactComponent?!Fo(a,f)||!Fo(p,_):!0}function Xp(n,r,a){var f=!1,p=fr,_=r.contextType;return typeof _=="object"&&_!==null?_=ei(_):(p=Nn(r)?Wr:hn.current,f=r.contextTypes,_=(f=f!=null)?Ns(n,p):fr),r=new r(a,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=_l,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function qp(n,r,a,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,f),r.state!==n&&_l.enqueueReplaceState(r,r.state,null)}function jc(n,r,a,f){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Lc(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=ei(_):(_=Nn(r)?Wr:hn.current,p.context=Ns(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Wc(n,r,_,a),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&_l.enqueueReplaceState(p,p.state,null),fl(n,a,p,f),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,r){try{var a="",f=r;do a+=me(f),f=f.return;while(f);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function Xc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function qc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var bx=typeof WeakMap=="function"?WeakMap:Map;function Yp(n,r,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var f=r.value;return a.callback=function(){wl||(wl=!0,uf=f),qc(n,r)},a}function $p(n,r,a){a=ki(-1,a),a.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var p=r.value;a.payload=function(){return f(p)},a.callback=function(){qc(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){qc(n,r),typeof f!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),a}function Kp(n,r,a){var f=n.pingCache;if(f===null){f=n.pingCache=new bx;var p=new Set;f.set(r,p)}else p=f.get(r),p===void 0&&(p=new Set,f.set(r,p));p.has(a)||(p.add(a),n=Gx.bind(null,n,r,a),r.then(n,n))}function Zp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Qp(n,r,a,f,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=ki(-1,1),r.tag=2,pr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Px=b.ReactCurrentOwner,Un=!1;function An(n,r,a,f){r.child=n===null?_p(r,null,a,f):Os(r,n.child,a,f)}function Jp(n,r,a,f,p){a=a.render;var _=r.ref;return Bs(r,p),f=kc(n,r,a,f,_,p),a=Bc(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Bi(n,r,p)):(It&&a&&Sc(r),r.flags|=1,An(n,r,f,p),r.child)}function em(n,r,a,f,p){if(n===null){var _=a.type;return typeof _=="function"&&!gf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=_,tm(n,r,_,f,p)):(n=Ll(a.type,null,f,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&p)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(T,f)&&n.ref===r.ref)return Bi(n,r,p)}return r.flags|=1,n=xr(_,f),n.ref=r.ref,n.return=r,r.child=n}function tm(n,r,a,f,p){if(n!==null){var _=n.memoizedProps;if(Fo(_,f)&&n.ref===r.ref)if(Un=!1,r.pendingProps=f=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Un=!0);else return r.lanes=n.lanes,Bi(n,r,p)}return Yc(n,r,a,f,p)}function nm(n,r,a){var f=r.pendingProps,p=f.children,_=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Gs,Xn),Xn|=a;else{if((a&1073741824)===0)return n=_!==null?_.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Rt(Gs,Xn),Xn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Rt(Gs,Xn),Xn|=f}else _!==null?(f=_.baseLanes|a,r.memoizedState=null):f=a,Rt(Gs,Xn),Xn|=f;return An(n,r,p,a),r.child}function im(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Yc(n,r,a,f,p){var _=Nn(a)?Wr:hn.current;return _=Ns(r,_),Bs(r,p),a=kc(n,r,a,f,_,p),f=Bc(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Bi(n,r,p)):(It&&f&&Sc(r),r.flags|=1,An(n,r,a,p),r.child)}function rm(n,r,a,f,p){if(Nn(a)){var _=!0;nl(r)}else _=!1;if(Bs(r,p),r.stateNode===null)xl(n,r),Xp(r,a,f),jc(r,a,f,p),f=!0;else if(n===null){var T=r.stateNode,U=r.memoizedProps;T.props=U;var k=T.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=ei(Q):(Q=Nn(a)?Wr:hn.current,Q=Ns(r,Q));var pe=a.getDerivedStateFromProps,ge=typeof pe=="function"||typeof T.getSnapshotBeforeUpdate=="function";ge||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==f||k!==Q)&&qp(r,T,f,Q),hr=!1;var he=r.memoizedState;T.state=he,fl(r,f,T,p),k=r.memoizedState,U!==f||he!==k||Dn.current||hr?(typeof pe=="function"&&(Wc(r,a,pe,f),k=r.memoizedState),(U=hr||jp(r,a,U,f,he,k,Q))?(ge||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=k),T.props=f,T.state=k,T.context=Q,f=U):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,xp(n,r),U=r.memoizedProps,Q=r.type===r.elementType?U:hi(r.type,U),T.props=Q,ge=r.pendingProps,he=T.context,k=a.contextType,typeof k=="object"&&k!==null?k=ei(k):(k=Nn(a)?Wr:hn.current,k=Ns(r,k));var Le=a.getDerivedStateFromProps;(pe=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==ge||he!==k)&&qp(r,T,f,k),hr=!1,he=r.memoizedState,T.state=he,fl(r,f,T,p);var Oe=r.memoizedState;U!==ge||he!==Oe||Dn.current||hr?(typeof Le=="function"&&(Wc(r,a,Le,f),Oe=r.memoizedState),(Q=hr||jp(r,a,Q,f,he,Oe,k)||!1)?(pe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,Oe,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,Oe,k)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&he===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&he===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Oe),T.props=f,T.state=Oe,T.context=k,f=Q):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&he===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&he===n.memoizedState||(r.flags|=1024),f=!1)}return $c(n,r,a,f,_,p)}function $c(n,r,a,f,p,_){im(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return p&&up(r,a,!1),Bi(n,r,_);f=r.stateNode,Px.current=r;var U=T&&typeof a.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=Os(r,n.child,null,_),r.child=Os(r,null,U,_)):An(n,r,U,_),r.memoizedState=f.state,p&&up(r,a,!0),r.child}function sm(n){var r=n.stateNode;r.pendingContext?ap(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ap(n,r.context,!1),Dc(n,r.containerInfo)}function om(n,r,a,f,p){return Fs(),wc(p),r.flags|=256,An(n,r,a,f),r.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Zc(n){return{baseLanes:n,cachePool:null,transitions:null}}function am(n,r,a){var f=r.pendingProps,p=Ft.current,_=!1,T=(r.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(p&2)!==0),U?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Rt(Ft,p&1),n===null)return Tc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=f.children,n=f.fallback,_?(f=r.mode,_=r.child,T={mode:"hidden",children:T},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Dl(T,f,0,null),n=es(n,f,a,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Zc(a),r.memoizedState=Kc,n):Qc(r,T));if(p=n.memoizedState,p!==null&&(U=p.dehydrated,U!==null))return Lx(n,r,T,f,U,p,a);if(_){_=f.fallback,T=r.mode,p=n.child,U=p.sibling;var k={mode:"hidden",children:f.children};return(T&1)===0&&r.child!==p?(f=r.child,f.childLanes=0,f.pendingProps=k,r.deletions=null):(f=xr(p,k),f.subtreeFlags=p.subtreeFlags&14680064),U!==null?_=xr(U,_):(_=es(_,T,a,null),_.flags|=2),_.return=r,f.return=r,f.sibling=_,r.child=f,f=_,_=r.child,T=n.child.memoizedState,T=T===null?Zc(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~a,r.memoizedState=Kc,f}return _=n.child,n=_.sibling,f=xr(_,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=a),f.return=r,f.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=f,r.memoizedState=null,f}function Qc(n,r){return r=Dl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function yl(n,r,a,f){return f!==null&&wc(f),Os(r,n.child,null,a),n=Qc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Lx(n,r,a,f,p,_,T){if(a)return r.flags&256?(r.flags&=-257,f=Xc(Error(t(422))),yl(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=f.fallback,p=r.mode,f=Dl({mode:"visible",children:f.children},p,0,null),_=es(_,p,T,null),_.flags|=2,f.return=r,_.return=r,f.sibling=_,r.child=f,(r.mode&1)!==0&&Os(r,n.child,null,T),r.child.memoizedState=Zc(T),r.memoizedState=Kc,_);if((r.mode&1)===0)return yl(n,r,T,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var U=f.dgst;return f=U,_=Error(t(419)),f=Xc(_,f,void 0),yl(n,r,T,f)}if(U=(T&n.childLanes)!==0,Un||U){if(f=nn,f!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(f.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Oi(n,p),gi(f,n,p,-1))}return mf(),f=Xc(Error(t(421))),yl(n,r,T,f)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Wx.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,jn=ur(p.nextSibling),Wn=r,It=!0,di=null,n!==null&&(Qn[Jn++]=Ii,Qn[Jn++]=Fi,Qn[Jn++]=jr,Ii=n.id,Fi=n.overflow,jr=r),r=Qc(r,f.children),r.flags|=4096,r)}function lm(n,r,a){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),bc(n.return,r,a)}function Jc(n,r,a,f,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=p)}function um(n,r,a){var f=r.pendingProps,p=f.revealOrder,_=f.tail;if(An(n,r,f.children,a),f=Ft.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lm(n,a,r);else if(n.tag===19)lm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Rt(Ft,f),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(a=r.child,p=null;a!==null;)n=a.alternate,n!==null&&dl(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=r.child,r.child=null):(p=a.sibling,a.sibling=null),Jc(r,!1,p,a,_);break;case"backwards":for(a=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&dl(n)===null){r.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Jc(r,!0,a,null,_);break;case"together":Jc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function xl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Bi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Kr|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=xr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=xr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Dx(n,r,a){switch(r.tag){case 3:sm(r),Fs();break;case 5:Ep(r);break;case 1:Nn(r.type)&&nl(r);break;case 4:Dc(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,p=r.memoizedProps.value;Rt(ll,f._currentValue),f._currentValue=p;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Rt(Ft,Ft.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?am(n,r,a):(Rt(Ft,Ft.current&1),n=Bi(n,r,a),n!==null?n.sibling:null);Rt(Ft,Ft.current&1);break;case 19:if(f=(a&r.childLanes)!==0,(n.flags&128)!==0){if(f)return um(n,r,a);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Rt(Ft,Ft.current),f)break;return null;case 22:case 23:return r.lanes=0,nm(n,r,a)}return Bi(n,r,a)}var cm,ef,fm,dm;cm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ef=function(){},fm=function(n,r,a,f){var p=n.memoizedProps;if(p!==f){n=r.stateNode,Yr(wi.current);var _=null;switch(a){case"input":p=He(n,p),f=He(n,f),_=[];break;case"select":p=G({},p,{value:void 0}),f=G({},f,{value:void 0}),_=[];break;case"textarea":p=jt(n,p),f=jt(n,f),_=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Ja)}nt(a,f);var T;a=null;for(Q in p)if(!f.hasOwnProperty(Q)&&p.hasOwnProperty(Q)&&p[Q]!=null)if(Q==="style"){var U=p[Q];for(T in U)U.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?_||(_=[]):(_=_||[]).push(Q,null));for(Q in f){var k=f[Q];if(U=p?.[Q],f.hasOwnProperty(Q)&&k!==U&&(k!=null||U!=null))if(Q==="style")if(U){for(T in U)!U.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in k)k.hasOwnProperty(T)&&U[T]!==k[T]&&(a||(a={}),a[T]=k[T])}else a||(_||(_=[]),_.push(Q,a)),a=k;else Q==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(_=_||[]).push(Q,k)):Q==="children"?typeof k!="string"&&typeof k!="number"||(_=_||[]).push(Q,""+k):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(k!=null&&Q==="onScroll"&&Pt("scroll",n),_||U===k||(_=[])):(_=_||[]).push(Q,k))}a&&(_=_||[]).push("style",a);var Q=_;(r.updateQueue=Q)&&(r.flags|=4)}},dm=function(n,r,a,f){a!==f&&(r.flags|=4)};function Zo(n,r){if(!It)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function mn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,f=0;if(r)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=f,n.childLanes=a,r}function Nx(n,r,a){var f=r.pendingProps;switch(Mc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(r),null;case 1:return Nn(r.type)&&tl(),mn(r),null;case 3:return f=r.stateNode,Vs(),Lt(Dn),Lt(hn),Ic(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(ol(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,di!==null&&(df(di),di=null))),ef(n,r),mn(r),null;case 5:Nc(r);var p=Yr(Xo.current);if(a=r.type,n!==null&&r.stateNode!=null)fm(n,r,a,f,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return mn(r),null}if(n=Yr(wi.current),ol(r)){f=r.stateNode,a=r.type;var _=r.memoizedProps;switch(f[Ti]=r,f[zo]=_,n=(r.mode&1)!==0,a){case"dialog":Pt("cancel",f),Pt("close",f);break;case"iframe":case"object":case"embed":Pt("load",f);break;case"video":case"audio":for(p=0;p<ko.length;p++)Pt(ko[p],f);break;case"source":Pt("error",f);break;case"img":case"image":case"link":Pt("error",f),Pt("load",f);break;case"details":Pt("toggle",f);break;case"input":tt(f,_),Pt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Pt("invalid",f);break;case"textarea":D(f,_),Pt("invalid",f)}nt(a,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var U=_[T];T==="children"?typeof U=="string"?f.textContent!==U&&(_.suppressHydrationWarning!==!0&&Qa(f.textContent,U,n),p=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&Qa(f.textContent,U,n),p=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Pt("scroll",f)}switch(a){case"input":Xe(f),at(f,_,!0);break;case"textarea":Xe(f),ee(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=Ja)}f=p,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Se(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(a,{is:f.is}):(n=T.createElement(a),a==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,a),n[Ti]=r,n[zo]=f,cm(n,r,!1,!1),r.stateNode=n;e:{switch(T=Ke(a,f),a){case"dialog":Pt("cancel",n),Pt("close",n),p=f;break;case"iframe":case"object":case"embed":Pt("load",n),p=f;break;case"video":case"audio":for(p=0;p<ko.length;p++)Pt(ko[p],n);p=f;break;case"source":Pt("error",n),p=f;break;case"img":case"image":case"link":Pt("error",n),Pt("load",n),p=f;break;case"details":Pt("toggle",n),p=f;break;case"input":tt(n,f),p=He(n,f),Pt("invalid",n);break;case"option":p=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},p=G({},f,{value:void 0}),Pt("invalid",n);break;case"textarea":D(n,f),p=jt(n,f),Pt("invalid",n);break;default:p=f}nt(a,p),U=p;for(_ in U)if(U.hasOwnProperty(_)){var k=U[_];_==="style"?xe(n,k):_==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ve(n,k)):_==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Ee(n,k):typeof k=="number"&&Ee(n,""+k):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?k!=null&&_==="onScroll"&&Pt("scroll",n):k!=null&&A(n,_,k,T))}switch(a){case"input":Xe(n),at(n,f,!1);break;case"textarea":Xe(n),ee(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Re(f.value));break;case"select":n.multiple=!!f.multiple,_=f.value,_!=null?bt(n,!!f.multiple,_,!1):f.defaultValue!=null&&bt(n,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Ja)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return mn(r),null;case 6:if(n&&r.stateNode!=null)dm(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(a=Yr(Xo.current),Yr(wi.current),ol(r)){if(f=r.stateNode,a=r.memoizedProps,f[Ti]=r,(_=f.nodeValue!==a)&&(n=Wn,n!==null))switch(n.tag){case 3:Qa(f.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qa(f.nodeValue,a,(n.mode&1)!==0)}_&&(r.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Ti]=r,r.stateNode=f}return mn(r),null;case 13:if(Lt(Ft),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&jn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)mp(),Fs(),r.flags|=98560,_=!1;else if(_=ol(r),f!==null&&f.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ti]=r}else Fs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;mn(r),_=!1}else di!==null&&(df(di),di=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ft.current&1)!==0?Zt===0&&(Zt=3):mf())),r.updateQueue!==null&&(r.flags|=4),mn(r),null);case 4:return Vs(),ef(n,r),n===null&&Bo(r.stateNode.containerInfo),mn(r),null;case 10:return Rc(r.type._context),mn(r),null;case 17:return Nn(r.type)&&tl(),mn(r),null;case 19:if(Lt(Ft),_=r.memoizedState,_===null)return mn(r),null;if(f=(r.flags&128)!==0,T=_.rendering,T===null)if(f)Zo(_,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=dl(n),T!==null){for(r.flags|=128,Zo(_,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=a,a=r.child;a!==null;)_=a,n=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Rt(Ft,Ft.current&1|2),r.child}n=n.sibling}_.tail!==null&&Ue()>Ws&&(r.flags|=128,f=!0,Zo(_,!1),r.lanes=4194304)}else{if(!f)if(n=dl(T),n!==null){if(r.flags|=128,f=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Zo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!It)return mn(r),null}else 2*Ue()-_.renderingStartTime>Ws&&a!==1073741824&&(r.flags|=128,f=!0,Zo(_,!1),r.lanes=4194304);_.isBackwards?(T.sibling=r.child,r.child=T):(a=_.last,a!==null?a.sibling=T:r.child=T,_.last=T)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=Ue(),r.sibling=null,a=Ft.current,Rt(Ft,f?a&1|2:a&1),r):(mn(r),null);case 22:case 23:return pf(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(Xn&1073741824)!==0&&(mn(r),r.subtreeFlags&6&&(r.flags|=8192)):mn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Ux(n,r){switch(Mc(r),r.tag){case 1:return Nn(r.type)&&tl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Vs(),Lt(Dn),Lt(hn),Ic(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Nc(r),null;case 13:if(Lt(Ft),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Lt(Ft),null;case 4:return Vs(),null;case 10:return Rc(r.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Sl=!1,gn=!1,Ix=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Hs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Vt(n,r,f)}else a.current=null}function tf(n,r,a){try{a()}catch(f){Vt(n,r,f)}}var hm=!1;function Fx(n,r){if(hc=za,n=jh(),sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var p=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,U=-1,k=-1,Q=0,pe=0,ge=n,he=null;t:for(;;){for(var Le;ge!==a||p!==0&&ge.nodeType!==3||(U=T+p),ge!==_||f!==0&&ge.nodeType!==3||(k=T+f),ge.nodeType===3&&(T+=ge.nodeValue.length),(Le=ge.firstChild)!==null;)he=ge,ge=Le;for(;;){if(ge===n)break t;if(he===a&&++Q===p&&(U=T),he===_&&++pe===f&&(k=T),(Le=ge.nextSibling)!==null)break;ge=he,he=ge.parentNode}ge=Le}a=U===-1||k===-1?null:{start:U,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(pc={focusedElem:n,selectionRange:a},za=!1,Ie=r;Ie!==null;)if(r=Ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ie=n;else for(;Ie!==null;){r=Ie;try{var Oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Oe!==null){var ke=Oe.memoizedProps,Gt=Oe.memoizedState,W=r.stateNode,H=W.getSnapshotBeforeUpdate(r.elementType===r.type?ke:hi(r.type,ke),Gt);W.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Y=r.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ye){Vt(r,r.return,ye)}if(n=r.sibling,n!==null){n.return=r.return,Ie=n;break}Ie=r.return}return Oe=hm,hm=!1,Oe}function Qo(n,r,a){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&tf(r,a,_)}p=p.next}while(p!==f)}}function Ml(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var f=a.create;a.destroy=f()}a=a.next}while(a!==r)}}function nf(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function pm(n){var r=n.alternate;r!==null&&(n.alternate=null,pm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ti],delete r[zo],delete r[_c],delete r[_x],delete r[yx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mm(n){return n.tag===5||n.tag===3||n.tag===4}function gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rf(n,r,a){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Ja));else if(f!==4&&(n=n.child,n!==null))for(rf(n,r,a),n=n.sibling;n!==null;)rf(n,r,a),n=n.sibling}function sf(n,r,a){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(sf(n,r,a),n=n.sibling;n!==null;)sf(n,r,a),n=n.sibling}var ln=null,pi=!1;function mr(n,r,a){for(a=a.child;a!==null;)vm(n,r,a),a=a.sibling}function vm(n,r,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Ln,a)}catch{}switch(a.tag){case 5:gn||Hs(a,r);case 6:var f=ln,p=pi;ln=null,mr(n,r,a),ln=f,pi=p,ln!==null&&(pi?(n=ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(pi?(n=ln,a=a.stateNode,n.nodeType===8?vc(n.parentNode,a):n.nodeType===1&&vc(n,a),Po(n)):vc(ln,a.stateNode));break;case 4:f=ln,p=pi,ln=a.stateNode.containerInfo,pi=!0,mr(n,r,a),ln=f,pi=p;break;case 0:case 11:case 14:case 15:if(!gn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&tf(a,r,T),p=p.next}while(p!==f)}mr(n,r,a);break;case 1:if(!gn&&(Hs(a,r),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(U){Vt(a,r,U)}mr(n,r,a);break;case 21:mr(n,r,a);break;case 22:a.mode&1?(gn=(f=gn)||a.memoizedState!==null,mr(n,r,a),gn=f):mr(n,r,a);break;default:mr(n,r,a)}}function _m(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ix),r.forEach(function(f){var p=jx.bind(null,n,f);a.has(f)||(a.add(f),f.then(p,p))})}}function mi(n,r){var a=r.deletions;if(a!==null)for(var f=0;f<a.length;f++){var p=a[f];try{var _=n,T=r,U=T;e:for(;U!==null;){switch(U.tag){case 5:ln=U.stateNode,pi=!1;break e;case 3:ln=U.stateNode.containerInfo,pi=!0;break e;case 4:ln=U.stateNode.containerInfo,pi=!0;break e}U=U.return}if(ln===null)throw Error(t(160));vm(_,T,p),ln=null,pi=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch(Q){Vt(p,r,Q)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ym(r,n),r=r.sibling}function ym(n,r){var a=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(r,n),Ci(n),f&4){try{Qo(3,n,n.return),Ml(3,n)}catch(ke){Vt(n,n.return,ke)}try{Qo(5,n,n.return)}catch(ke){Vt(n,n.return,ke)}}break;case 1:mi(r,n),Ci(n),f&512&&a!==null&&Hs(a,a.return);break;case 5:if(mi(r,n),Ci(n),f&512&&a!==null&&Hs(a,a.return),n.flags&32){var p=n.stateNode;try{Ee(p,"")}catch(ke){Vt(n,n.return,ke)}}if(f&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,T=a!==null?a.memoizedProps:_,U=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&Qe(p,_),Ke(U,T);var Q=Ke(U,_);for(T=0;T<k.length;T+=2){var pe=k[T],ge=k[T+1];pe==="style"?xe(p,ge):pe==="dangerouslySetInnerHTML"?Ve(p,ge):pe==="children"?Ee(p,ge):A(p,pe,ge,Q)}switch(U){case"input":At(p,_);break;case"textarea":C(p,_);break;case"select":var he=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Le=_.value;Le!=null?bt(p,!!_.multiple,Le,!1):he!==!!_.multiple&&(_.defaultValue!=null?bt(p,!!_.multiple,_.defaultValue,!0):bt(p,!!_.multiple,_.multiple?[]:"",!1))}p[zo]=_}catch(ke){Vt(n,n.return,ke)}}break;case 6:if(mi(r,n),Ci(n),f&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(ke){Vt(n,n.return,ke)}}break;case 3:if(mi(r,n),Ci(n),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Po(r.containerInfo)}catch(ke){Vt(n,n.return,ke)}break;case 4:mi(r,n),Ci(n);break;case 13:mi(r,n),Ci(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(lf=Ue())),f&4&&_m(n);break;case 22:if(pe=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(Q=gn)||pe,mi(r,n),gn=Q):mi(r,n),Ci(n),f&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!pe&&(n.mode&1)!==0)for(Ie=n,pe=n.child;pe!==null;){for(ge=Ie=pe;Ie!==null;){switch(he=Ie,Le=he.child,he.tag){case 0:case 11:case 14:case 15:Qo(4,he,he.return);break;case 1:Hs(he,he.return);var Oe=he.stateNode;if(typeof Oe.componentWillUnmount=="function"){f=he,a=he.return;try{r=f,Oe.props=r.memoizedProps,Oe.state=r.memoizedState,Oe.componentWillUnmount()}catch(ke){Vt(f,a,ke)}}break;case 5:Hs(he,he.return);break;case 22:if(he.memoizedState!==null){Mm(ge);continue}}Le!==null?(Le.return=he,Ie=Le):Mm(ge)}pe=pe.sibling}e:for(pe=null,ge=n;;){if(ge.tag===5){if(pe===null){pe=ge;try{p=ge.stateNode,Q?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=ge.stateNode,k=ge.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=pt("display",T))}catch(ke){Vt(n,n.return,ke)}}}else if(ge.tag===6){if(pe===null)try{ge.stateNode.nodeValue=Q?"":ge.memoizedProps}catch(ke){Vt(n,n.return,ke)}}else if((ge.tag!==22&&ge.tag!==23||ge.memoizedState===null||ge===n)&&ge.child!==null){ge.child.return=ge,ge=ge.child;continue}if(ge===n)break e;for(;ge.sibling===null;){if(ge.return===null||ge.return===n)break e;pe===ge&&(pe=null),ge=ge.return}pe===ge&&(pe=null),ge.sibling.return=ge.return,ge=ge.sibling}}break;case 19:mi(r,n),Ci(n),f&4&&_m(n);break;case 21:break;default:mi(r,n),Ci(n)}}function Ci(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(mm(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(Ee(p,""),f.flags&=-33);var _=gm(n);sf(n,_,p);break;case 3:case 4:var T=f.stateNode.containerInfo,U=gm(n);rf(n,U,T);break;default:throw Error(t(161))}}catch(k){Vt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Ox(n,r,a){Ie=n,xm(n)}function xm(n,r,a){for(var f=(n.mode&1)!==0;Ie!==null;){var p=Ie,_=p.child;if(p.tag===22&&f){var T=p.memoizedState!==null||Sl;if(!T){var U=p.alternate,k=U!==null&&U.memoizedState!==null||gn;U=Sl;var Q=gn;if(Sl=T,(gn=k)&&!Q)for(Ie=p;Ie!==null;)T=Ie,k=T.child,T.tag===22&&T.memoizedState!==null?Em(p):k!==null?(k.return=T,Ie=k):Em(p);for(;_!==null;)Ie=_,xm(_),_=_.sibling;Ie=p,Sl=U,gn=Q}Sm(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Ie=_):Sm(n)}}function Sm(n){for(;Ie!==null;){var r=Ie;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:gn||Ml(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!gn)if(a===null)f.componentDidMount();else{var p=r.elementType===r.type?a.memoizedProps:hi(r.type,a.memoizedProps);f.componentDidUpdate(p,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Mp(r,_,f);break;case 3:var T=r.updateQueue;if(T!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Mp(r,T,a)}break;case 5:var U=r.stateNode;if(a===null&&r.flags&4){a=U;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Q=r.alternate;if(Q!==null){var pe=Q.memoizedState;if(pe!==null){var ge=pe.dehydrated;ge!==null&&Po(ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||r.flags&512&&nf(r)}catch(he){Vt(r,r.return,he)}}if(r===n){Ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,Ie=a;break}Ie=r.return}}function Mm(n){for(;Ie!==null;){var r=Ie;if(r===n){Ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Ie=a;break}Ie=r.return}}function Em(n){for(;Ie!==null;){var r=Ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ml(4,r)}catch(k){Vt(r,a,k)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var p=r.return;try{f.componentDidMount()}catch(k){Vt(r,p,k)}}var _=r.return;try{nf(r)}catch(k){Vt(r,_,k)}break;case 5:var T=r.return;try{nf(r)}catch(k){Vt(r,T,k)}}}catch(k){Vt(r,r.return,k)}if(r===n){Ie=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Ie=U;break}Ie=r.return}}var kx=Math.ceil,El=b.ReactCurrentDispatcher,of=b.ReactCurrentOwner,ni=b.ReactCurrentBatchConfig,_t=0,nn=null,Xt=null,un=0,Xn=0,Gs=cr(0),Zt=0,Jo=null,Kr=0,Tl=0,af=0,ea=null,In=null,lf=0,Ws=1/0,Vi=null,wl=!1,uf=null,gr=null,Al=!1,vr=null,Cl=0,ta=0,cf=null,Rl=-1,bl=0;function Cn(){return(_t&6)!==0?Ue():Rl!==-1?Rl:Rl=Ue()}function _r(n){return(n.mode&1)===0?1:(_t&2)!==0&&un!==0?un&-un:Sx.transition!==null?(bl===0&&(bl=ka()),bl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:wh(n.type)),n)}function gi(n,r,a,f){if(50<ta)throw ta=0,cf=null,Error(t(185));wo(n,a,f),((_t&2)===0||n!==nn)&&(n===nn&&((_t&2)===0&&(Tl|=a),Zt===4&&yr(n,un)),Fn(n,f),a===1&&_t===0&&(r.mode&1)===0&&(Ws=Ue()+500,il&&dr()))}function Fn(n,r){var a=n.callbackNode;wn(n,r);var f=Zn(n,n===nn?un:0);if(f===0)a!==null&&Pe(a),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(a!=null&&Pe(a),r===1)n.tag===0?xx(wm.bind(null,n)):cp(wm.bind(null,n)),gx(function(){(_t&6)===0&&dr()}),a=null;else{switch(vh(f)){case 1:a=it;break;case 4:a=rt;break;case 16:a=Ct;break;case 536870912:a=zt;break;default:a=Ct}a=Nm(a,Tm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Tm(n,r){if(Rl=-1,bl=0,(_t&6)!==0)throw Error(t(327));var a=n.callbackNode;if(js()&&n.callbackNode!==a)return null;var f=Zn(n,n===nn?un:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=Pl(n,f);else{r=f;var p=_t;_t|=2;var _=Cm();(nn!==n||un!==r)&&(Vi=null,Ws=Ue()+500,Qr(n,r));do try{zx();break}catch(U){Am(n,U)}while(!0);Cc(),El.current=_,_t=p,Xt!==null?r=0:(nn=null,un=0,r=Zt)}if(r!==0){if(r===2&&(p=Hr(n),p!==0&&(f=p,r=ff(n,p))),r===1)throw a=Jo,Qr(n,0),yr(n,f),Fn(n,Ue()),a;if(r===6)yr(n,f);else{if(p=n.current.alternate,(f&30)===0&&!Bx(p)&&(r=Pl(n,f),r===2&&(_=Hr(n),_!==0&&(f=_,r=ff(n,_))),r===1))throw a=Jo,Qr(n,0),yr(n,f),Fn(n,Ue()),a;switch(n.finishedWork=p,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Jr(n,In,Vi);break;case 3:if(yr(n,f),(f&130023424)===f&&(r=lf+500-Ue(),10<r)){if(Zn(n,0)!==0)break;if(p=n.suspendedLanes,(p&f)!==f){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=gc(Jr.bind(null,n,In,Vi),r);break}Jr(n,In,Vi);break;case 4:if(yr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,p=-1;0<f;){var T=31-Tn(f);_=1<<T,T=r[T],T>p&&(p=T),f&=~_}if(f=p,f=Ue()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*kx(f/1960))-f,10<f){n.timeoutHandle=gc(Jr.bind(null,n,In,Vi),f);break}Jr(n,In,Vi);break;case 5:Jr(n,In,Vi);break;default:throw Error(t(329))}}}return Fn(n,Ue()),n.callbackNode===a?Tm.bind(null,n):null}function ff(n,r){var a=ea;return n.current.memoizedState.isDehydrated&&(Qr(n,r).flags|=256),n=Pl(n,r),n!==2&&(r=In,In=a,r!==null&&df(r)),n}function df(n){In===null?In=n:In.push.apply(In,n)}function Bx(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var p=a[f],_=p.getSnapshot;p=p.value;try{if(!fi(_(),p))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yr(n,r){for(r&=~af,r&=~Tl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Tn(r),f=1<<a;n[a]=-1,r&=~f}}function wm(n){if((_t&6)!==0)throw Error(t(327));js();var r=Zn(n,0);if((r&1)===0)return Fn(n,Ue()),null;var a=Pl(n,r);if(n.tag!==0&&a===2){var f=Hr(n);f!==0&&(r=f,a=ff(n,f))}if(a===1)throw a=Jo,Qr(n,0),yr(n,r),Fn(n,Ue()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Jr(n,In,Vi),Fn(n,Ue()),null}function hf(n,r){var a=_t;_t|=1;try{return n(r)}finally{_t=a,_t===0&&(Ws=Ue()+500,il&&dr())}}function Zr(n){vr!==null&&vr.tag===0&&(_t&6)===0&&js();var r=_t;_t|=1;var a=ni.transition,f=Et;try{if(ni.transition=null,Et=1,n)return n()}finally{Et=f,ni.transition=a,_t=r,(_t&6)===0&&dr()}}function pf(){Xn=Gs.current,Lt(Gs)}function Qr(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,mx(a)),Xt!==null)for(a=Xt.return;a!==null;){var f=a;switch(Mc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&tl();break;case 3:Vs(),Lt(Dn),Lt(hn),Ic();break;case 5:Nc(f);break;case 4:Vs();break;case 13:Lt(Ft);break;case 19:Lt(Ft);break;case 10:Rc(f.type._context);break;case 22:case 23:pf()}a=a.return}if(nn=n,Xt=n=xr(n.current,null),un=Xn=r,Zt=0,Jo=null,af=Tl=Kr=0,In=ea=null,qr!==null){for(r=0;r<qr.length;r++)if(a=qr[r],f=a.interleaved,f!==null){a.interleaved=null;var p=f.next,_=a.pending;if(_!==null){var T=_.next;_.next=p,f.next=T}a.pending=f}qr=null}return n}function Am(n,r){do{var a=Xt;try{if(Cc(),hl.current=vl,pl){for(var f=Ot.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}pl=!1}if($r=0,tn=Kt=Ot=null,qo=!1,Yo=0,of.current=null,a===null||a.return===null){Zt=1,Jo=r,Xt=null;break}e:{var _=n,T=a.return,U=a,k=r;if(r=un,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var Q=k,pe=U,ge=pe.tag;if((pe.mode&1)===0&&(ge===0||ge===11||ge===15)){var he=pe.alternate;he?(pe.updateQueue=he.updateQueue,pe.memoizedState=he.memoizedState,pe.lanes=he.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var Le=Zp(T);if(Le!==null){Le.flags&=-257,Qp(Le,T,U,_,r),Le.mode&1&&Kp(_,Q,r),r=Le,k=Q;var Oe=r.updateQueue;if(Oe===null){var ke=new Set;ke.add(k),r.updateQueue=ke}else Oe.add(k);break e}else{if((r&1)===0){Kp(_,Q,r),mf();break e}k=Error(t(426))}}else if(It&&U.mode&1){var Gt=Zp(T);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Qp(Gt,T,U,_,r),wc(zs(k,U));break e}}_=k=zs(k,U),Zt!==4&&(Zt=2),ea===null?ea=[_]:ea.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var W=Yp(_,k,r);Sp(_,W);break e;case 1:U=k;var H=_.type,Y=_.stateNode;if((_.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(gr===null||!gr.has(Y)))){_.flags|=65536,r&=-r,_.lanes|=r;var ye=$p(_,U,r);Sp(_,ye);break e}}_=_.return}while(_!==null)}bm(a)}catch(Be){r=Be,Xt===a&&a!==null&&(Xt=a=a.return);continue}break}while(!0)}function Cm(){var n=El.current;return El.current=vl,n===null?vl:n}function mf(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),nn===null||(Kr&268435455)===0&&(Tl&268435455)===0||yr(nn,un)}function Pl(n,r){var a=_t;_t|=2;var f=Cm();(nn!==n||un!==r)&&(Vi=null,Qr(n,r));do try{Vx();break}catch(p){Am(n,p)}while(!0);if(Cc(),_t=a,El.current=f,Xt!==null)throw Error(t(261));return nn=null,un=0,Zt}function Vx(){for(;Xt!==null;)Rm(Xt)}function zx(){for(;Xt!==null&&!ze();)Rm(Xt)}function Rm(n){var r=Dm(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,r===null?bm(n):Xt=r,of.current=null}function bm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Nx(a,r,Xn),a!==null){Xt=a;return}}else{if(a=Ux(a,r),a!==null){a.flags&=32767,Xt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,Xt=null;return}}if(r=r.sibling,r!==null){Xt=r;return}Xt=r=n}while(r!==null);Zt===0&&(Zt=5)}function Jr(n,r,a){var f=Et,p=ni.transition;try{ni.transition=null,Et=1,Hx(n,r,a,f)}finally{ni.transition=p,Et=f}return null}function Hx(n,r,a,f){do js();while(vr!==null);if((_t&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=a.lanes|a.childLanes;if(My(n,_),n===nn&&(Xt=nn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Al||(Al=!0,Nm(Ct,function(){return js(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=ni.transition,ni.transition=null;var T=Et;Et=1;var U=_t;_t|=4,of.current=null,Fx(n,a),ym(a,n),lx(pc),za=!!hc,pc=hc=null,n.current=a,Ox(a),$e(),_t=U,Et=T,ni.transition=_}else n.current=a;if(Al&&(Al=!1,vr=n,Cl=p),_=n.pendingLanes,_===0&&(gr=null),ft(a.stateNode),Fn(n,Ue()),r!==null)for(f=n.onRecoverableError,a=0;a<r.length;a++)p=r[a],f(p.value,{componentStack:p.stack,digest:p.digest});if(wl)throw wl=!1,n=uf,uf=null,n;return(Cl&1)!==0&&n.tag!==0&&js(),_=n.pendingLanes,(_&1)!==0?n===cf?ta++:(ta=0,cf=n):ta=0,dr(),null}function js(){if(vr!==null){var n=vh(Cl),r=ni.transition,a=Et;try{if(ni.transition=null,Et=16>n?16:n,vr===null)var f=!1;else{if(n=vr,vr=null,Cl=0,(_t&6)!==0)throw Error(t(331));var p=_t;for(_t|=4,Ie=n.current;Ie!==null;){var _=Ie,T=_.child;if((Ie.flags&16)!==0){var U=_.deletions;if(U!==null){for(var k=0;k<U.length;k++){var Q=U[k];for(Ie=Q;Ie!==null;){var pe=Ie;switch(pe.tag){case 0:case 11:case 15:Qo(8,pe,_)}var ge=pe.child;if(ge!==null)ge.return=pe,Ie=ge;else for(;Ie!==null;){pe=Ie;var he=pe.sibling,Le=pe.return;if(pm(pe),pe===Q){Ie=null;break}if(he!==null){he.return=Le,Ie=he;break}Ie=Le}}}var Oe=_.alternate;if(Oe!==null){var ke=Oe.child;if(ke!==null){Oe.child=null;do{var Gt=ke.sibling;ke.sibling=null,ke=Gt}while(ke!==null)}}Ie=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,Ie=T;else e:for(;Ie!==null;){if(_=Ie,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Qo(9,_,_.return)}var W=_.sibling;if(W!==null){W.return=_.return,Ie=W;break e}Ie=_.return}}var H=n.current;for(Ie=H;Ie!==null;){T=Ie;var Y=T.child;if((T.subtreeFlags&2064)!==0&&Y!==null)Y.return=T,Ie=Y;else e:for(T=H;Ie!==null;){if(U=Ie,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ml(9,U)}}catch(Be){Vt(U,U.return,Be)}if(U===T){Ie=null;break e}var ye=U.sibling;if(ye!==null){ye.return=U.return,Ie=ye;break e}Ie=U.return}}if(_t=p,dr(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Ln,n)}catch{}f=!0}return f}finally{Et=a,ni.transition=r}}return!1}function Pm(n,r,a){r=zs(a,r),r=Yp(n,r,1),n=pr(n,r,1),r=Cn(),n!==null&&(wo(n,1,r),Fn(n,r))}function Vt(n,r,a){if(n.tag===3)Pm(n,n,a);else for(;r!==null;){if(r.tag===3){Pm(r,n,a);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(gr===null||!gr.has(f))){n=zs(a,n),n=$p(r,n,1),r=pr(r,n,1),n=Cn(),r!==null&&(wo(r,1,n),Fn(r,n));break}}r=r.return}}function Gx(n,r,a){var f=n.pingCache;f!==null&&f.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&a,nn===n&&(un&a)===a&&(Zt===4||Zt===3&&(un&130023424)===un&&500>Ue()-lf?Qr(n,0):af|=a),Fn(n,r)}function Lm(n,r){r===0&&((n.mode&1)===0?r=1:(r=nr,nr<<=1,(nr&130023424)===0&&(nr=4194304)));var a=Cn();n=Oi(n,r),n!==null&&(wo(n,r,a),Fn(n,a))}function Wx(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Lm(n,a)}function jx(n,r){var a=0;switch(n.tag){case 13:var f=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),Lm(n,a)}var Dm;Dm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Dn.current)Un=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Un=!1,Dx(n,r,a);Un=(n.flags&131072)!==0}else Un=!1,It&&(r.flags&1048576)!==0&&fp(r,sl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;xl(n,r),n=r.pendingProps;var p=Ns(r,hn.current);Bs(r,a),p=kc(null,r,f,n,p,a);var _=Bc();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Nn(f)?(_=!0,nl(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Lc(r),p.updater=_l,r.stateNode=p,p._reactInternals=r,jc(r,f,n,a),r=$c(null,r,f,!0,_,a)):(r.tag=0,It&&_&&Sc(r),An(null,r,p,a),r=r.child),r;case 16:f=r.elementType;e:{switch(xl(n,r),n=r.pendingProps,p=f._init,f=p(f._payload),r.type=f,p=r.tag=qx(f),n=hi(f,n),p){case 0:r=Yc(null,r,f,n,a);break e;case 1:r=rm(null,r,f,n,a);break e;case 11:r=Jp(null,r,f,n,a);break e;case 14:r=em(null,r,f,hi(f.type,n),a);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:hi(f,p),Yc(n,r,f,p,a);case 1:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:hi(f,p),rm(n,r,f,p,a);case 3:e:{if(sm(r),n===null)throw Error(t(387));f=r.pendingProps,_=r.memoizedState,p=_.element,xp(n,r),fl(r,f,null,a);var T=r.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=zs(Error(t(423)),r),r=om(n,r,f,a,p);break e}else if(f!==p){p=zs(Error(t(424)),r),r=om(n,r,f,a,p);break e}else for(jn=ur(r.stateNode.containerInfo.firstChild),Wn=r,It=!0,di=null,a=_p(r,null,f,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),f===p){r=Bi(n,r,a);break e}An(n,r,f,a)}r=r.child}return r;case 5:return Ep(r),n===null&&Tc(r),f=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,T=p.children,mc(f,p)?T=null:_!==null&&mc(f,_)&&(r.flags|=32),im(n,r),An(n,r,T,a),r.child;case 6:return n===null&&Tc(r),null;case 13:return am(n,r,a);case 4:return Dc(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Os(r,null,f,a):An(n,r,f,a),r.child;case 11:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:hi(f,p),Jp(n,r,f,p,a);case 7:return An(n,r,r.pendingProps,a),r.child;case 8:return An(n,r,r.pendingProps.children,a),r.child;case 12:return An(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(f=r.type._context,p=r.pendingProps,_=r.memoizedProps,T=p.value,Rt(ll,f._currentValue),f._currentValue=T,_!==null)if(fi(_.value,T)){if(_.children===p.children&&!Dn.current){r=Bi(n,r,a);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var U=_.dependencies;if(U!==null){T=_.child;for(var k=U.firstContext;k!==null;){if(k.context===f){if(_.tag===1){k=ki(-1,a&-a),k.tag=2;var Q=_.updateQueue;if(Q!==null){Q=Q.shared;var pe=Q.pending;pe===null?k.next=k:(k.next=pe.next,pe.next=k),Q.pending=k}}_.lanes|=a,k=_.alternate,k!==null&&(k.lanes|=a),bc(_.return,a,r),U.lanes|=a;break}k=k.next}}else if(_.tag===10)T=_.type===r.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,U=T.alternate,U!==null&&(U.lanes|=a),bc(T,a,r),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===r){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}An(n,r,p.children,a),r=r.child}return r;case 9:return p=r.type,f=r.pendingProps.children,Bs(r,a),p=ei(p),f=f(p),r.flags|=1,An(n,r,f,a),r.child;case 14:return f=r.type,p=hi(f,r.pendingProps),p=hi(f.type,p),em(n,r,f,p,a);case 15:return tm(n,r,r.type,r.pendingProps,a);case 17:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:hi(f,p),xl(n,r),r.tag=1,Nn(f)?(n=!0,nl(r)):n=!1,Bs(r,a),Xp(r,f,p),jc(r,f,p,a),$c(null,r,f,!0,n,a);case 19:return um(n,r,a);case 22:return nm(n,r,a)}throw Error(t(156,r.tag))};function Nm(n,r){return oe(n,r)}function Xx(n,r,a,f){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,r,a,f){return new Xx(n,r,a,f)}function gf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qx(n){if(typeof n=="function")return gf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ue)return 11;if(n===ie)return 14}return 2}function xr(n,r){var a=n.alternate;return a===null?(a=ii(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ll(n,r,a,f,p,_){var T=2;if(f=n,typeof n=="function")gf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return es(a.children,p,_,r);case $:T=8,p|=8;break;case R:return n=ii(12,a,r,p|2),n.elementType=R,n.lanes=_,n;case fe:return n=ii(13,a,r,p),n.elementType=fe,n.lanes=_,n;case V:return n=ii(19,a,r,p),n.elementType=V,n.lanes=_,n;case J:return Dl(a,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case I:T=10;break e;case le:T=9;break e;case ue:T=11;break e;case ie:T=14;break e;case se:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ii(T,a,r,p),r.elementType=n,r.type=f,r.lanes=_,r}function es(n,r,a,f){return n=ii(7,n,f,r),n.lanes=a,n}function Dl(n,r,a,f){return n=ii(22,n,f,r),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function vf(n,r,a){return n=ii(6,n,null,r),n.lanes=a,n}function _f(n,r,a){return r=ii(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Yx(n,r,a,f,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Es(0),this.expirationTimes=Es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Es(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function yf(n,r,a,f,p,_,T,U,k){return n=new Yx(n,r,a,U,k),r===1?(r=1,_===!0&&(r|=8)):r=0,_=ii(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(_),n}function $x(n,r,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:f==null?null:""+f,children:n,containerInfo:r,implementation:a}}function Um(n){if(!n)return fr;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Nn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Nn(a))return lp(n,a,r)}return r}function Im(n,r,a,f,p,_,T,U,k){return n=yf(a,f,!0,n,p,_,T,U,k),n.context=Um(null),a=n.current,f=Cn(),p=_r(a),_=ki(f,p),_.callback=r??null,pr(a,_,p),n.current.lanes=p,wo(n,p,f),Fn(n,f),n}function Nl(n,r,a,f){var p=r.current,_=Cn(),T=_r(p);return a=Um(a),r.context===null?r.context=a:r.pendingContext=a,r=ki(_,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=pr(p,r,T),n!==null&&(gi(n,p,T,_),cl(n,p,T)),T}function Ul(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function xf(n,r){Fm(n,r),(n=n.alternate)&&Fm(n,r)}function Kx(){return null}var Om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sf(n){this._internalRoot=n}Il.prototype.render=Sf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Nl(n,r,null,null)},Il.prototype.unmount=Sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Zr(function(){Nl(null,n,null,null)}),r[Ni]=null}};function Il(n){this._internalRoot=n}Il.prototype.unstable_scheduleHydration=function(n){if(n){var r=xh();n={blockedOn:null,target:n,priority:r};for(var a=0;a<or.length&&r!==0&&r<or[a].priority;a++);or.splice(a,0,n),a===0&&Eh(n)}};function Mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function km(){}function Zx(n,r,a,f,p){if(p){if(typeof f=="function"){var _=f;f=function(){var Q=Ul(T);_.call(Q)}}var T=Im(r,f,n,0,null,!1,!1,"",km);return n._reactRootContainer=T,n[Ni]=T.current,Bo(n.nodeType===8?n.parentNode:n),Zr(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof f=="function"){var U=f;f=function(){var Q=Ul(k);U.call(Q)}}var k=yf(n,0,!1,null,null,!1,!1,"",km);return n._reactRootContainer=k,n[Ni]=k.current,Bo(n.nodeType===8?n.parentNode:n),Zr(function(){Nl(r,k,a,f)}),k}function Ol(n,r,a,f,p){var _=a._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var U=p;p=function(){var k=Ul(T);U.call(k)}}Nl(r,T,n,p)}else T=Zx(a,r,n,p,f);return Ul(T)}_h=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ht(r.pendingLanes);a!==0&&(ju(r,a|1),Fn(r,Ue()),(_t&6)===0&&(Ws=Ue()+500,dr()))}break;case 13:Zr(function(){var f=Oi(n,1);if(f!==null){var p=Cn();gi(f,n,1,p)}}),xf(n,1)}},Xu=function(n){if(n.tag===13){var r=Oi(n,134217728);if(r!==null){var a=Cn();gi(r,n,134217728,a)}xf(n,134217728)}},yh=function(n){if(n.tag===13){var r=_r(n),a=Oi(n,r);if(a!==null){var f=Cn();gi(a,n,r,f)}xf(n,r)}},xh=function(){return Et},Sh=function(n,r){var a=Et;try{return Et=n,r()}finally{Et=a}},ct=function(n,r,a){switch(r){case"input":if(At(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var f=a[r];if(f!==n&&f.form===n.form){var p=el(f);if(!p)throw Error(t(90));Z(f),At(f,p)}}}break;case"textarea":C(n,a);break;case"select":r=a.value,r!=null&&bt(n,!!a.multiple,r,!1)}},qe=hf,mt=Zr;var Qx={usingClientEntryPoint:!1,Events:[Ho,Ls,el,ae,we,hf]},na={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jx={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=te(n),n===null?null:n.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||Kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Ln=kl.inject(Jx),vt=kl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx,On.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(r))throw Error(t(200));return $x(n,r,null,a)},On.createRoot=function(n,r){if(!Mf(n))throw Error(t(299));var a=!1,f="",p=Om;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=yf(n,1,!1,null,null,a,!1,f,p),n[Ni]=r.current,Bo(n.nodeType===8?n.parentNode:n),new Sf(r)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=te(r),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return Zr(n)},On.hydrate=function(n,r,a){if(!Fl(r))throw Error(t(200));return Ol(null,n,r,!0,a)},On.hydrateRoot=function(n,r,a){if(!Mf(n))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,p=!1,_="",T=Om;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),r=Im(r,null,n,1,a??null,p,!1,_,T),n[Ni]=r.current,Bo(n),f)for(n=0;n<f.length;n++)a=f[n],p=a._getVersion,p=p(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,p]:r.mutableSourceEagerHydrationData.push(a,p);return new Il(r)},On.render=function(n,r,a){if(!Fl(r))throw Error(t(200));return Ol(null,n,r,!1,a)},On.unmountComponentAtNode=function(n){if(!Fl(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){Ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},On.unstable_batchedUpdates=hf,On.unstable_renderSubtreeIntoContainer=function(n,r,a,f){if(!Fl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ol(n,r,a,!1,f)},On.version="18.3.1-next-f1338f8080-20240426",On}var Xm;function aS(){if(Xm)return wf.exports;Xm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),wf.exports=oS(),wf.exports}var qm;function lS(){if(qm)return Bl;qm=1;var i=aS();return Bl.createRoot=i.createRoot,Bl.hydrateRoot=i.hydrateRoot,Bl}var uS=lS();const cS=Mv(uS);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Sn=(i,e)=>{const t=Ye.forwardRef(({color:s="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:c="",children:d,...h},m)=>Ye.createElement("svg",{ref:m,...fS,width:o,height:o,stroke:s,strokeWidth:u?Number(l)*24/Number(o):l,className:["lucide",`lucide-${dS(i)}`,c].join(" "),...h},[...e.map(([g,v])=>Ye.createElement(g,v)),...Array.isArray(d)?d:[d]]));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Sn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Sn("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Sn("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Sn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=Sn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=Sn("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=Sn("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=Sn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Sn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Sn("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=Sn("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=Sn("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=Sn("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=Sn("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=Sn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=Sn("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Ev=Ye.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"}),Du=Ye.createContext({}),Wd=Ye.createContext(null),Nu=typeof document<"u",wS=Nu?Ye.useLayoutEffect:Ye.useEffect,Tv=Ye.createContext({strict:!1}),jd=i=>i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),AS="framerAppearId",wv="data-"+jd(AS);function CS(i,e,t,s){const{visualElement:o}=Ye.useContext(Du),l=Ye.useContext(Tv),u=Ye.useContext(Wd),c=Ye.useContext(Ev).reducedMotion,d=Ye.useRef();s=s||l.renderer,!d.current&&s&&(d.current=s(i,{visualState:e,parent:o,props:t,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const h=d.current;Ye.useInsertionEffect(()=>{h&&h.update(t,u)});const m=Ye.useRef(!!(t[wv]&&!window.HandoffComplete));return wS(()=>{h&&(h.render(),m.current&&h.animationState&&h.animationState.animateChanges())}),Ye.useEffect(()=>{h&&(h.updateFeatures(),!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(m.current=!1,window.HandoffComplete=!0))}),h}function lo(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function RS(i,e,t){return Ye.useCallback(s=>{s&&i.mount&&i.mount(s),e&&(s?e.mount(s):e.unmount()),t&&(typeof t=="function"?t(s):lo(t)&&(t.current=s))},[e])}function _a(i){return typeof i=="string"||Array.isArray(i)}function Uu(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}const Xd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qd=["initial",...Xd];function Iu(i){return Uu(i.animate)||qd.some(e=>_a(i[e]))}function Av(i){return!!(Iu(i)||i.variants)}function bS(i,e){if(Iu(i)){const{initial:t,animate:s}=i;return{initial:t===!1||_a(t)?t:void 0,animate:_a(s)?s:void 0}}return i.inherit!==!1?e:{}}function PS(i){const{initial:e,animate:t}=bS(i,Ye.useContext(Du));return Ye.useMemo(()=>({initial:e,animate:t}),[Zm(e),Zm(t)])}function Zm(i){return Array.isArray(i)?i.join(" "):i}const Qm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ya={};for(const i in Qm)ya[i]={isEnabled:e=>Qm[i].some(t=>!!e[t])};function LS(i){for(const e in i)ya[e]={...ya[e],...i[e]}}const Cv=Ye.createContext({}),Rv=Ye.createContext({}),DS=Symbol.for("motionComponentSymbol");function NS({preloadedFeatures:i,createVisualElement:e,useRender:t,useVisualState:s,Component:o}){i&&LS(i);function l(c,d){let h;const m={...Ye.useContext(Ev),...c,layoutId:US(c)},{isStatic:g}=m,v=PS(c),S=s(c,g);if(!g&&Nu){v.visualElement=CS(o,S,m,e);const E=Ye.useContext(Rv),M=Ye.useContext(Tv).strict;v.visualElement&&(h=v.visualElement.loadFeatures(m,M,i,E))}return Ye.createElement(Du.Provider,{value:v},h&&v.visualElement?Ye.createElement(h,{visualElement:v.visualElement,...m}):null,t(o,c,RS(S,v.visualElement,d),S,g,v.visualElement))}const u=Ye.forwardRef(l);return u[DS]=o,u}function US({layoutId:i}){const e=Ye.useContext(Cv).id;return e&&i!==void 0?e+"-"+i:i}function IS(i){function e(s,o={}){return NS(i(s,o))}if(typeof Proxy>"u")return e;const t=new Map;return new Proxy(e,{get:(s,o)=>(t.has(o)||t.set(o,e(o)),t.get(o))})}const FS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yd(i){return typeof i!="string"||i.includes("-")?!1:!!(FS.indexOf(i)>-1||/[A-Z]/.test(i))}const _u={};function OS(i){Object.assign(_u,i)}const Ta=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ss=new Set(Ta);function bv(i,{layout:e,layoutId:t}){return Ss.has(i)||i.startsWith("origin")||(e||t!==void 0)&&(!!_u[i]||i==="opacity")}const Hn=i=>!!(i&&i.getVelocity),kS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},BS=Ta.length;function VS(i,{enableHardwareAcceleration:e=!0,allowTransformNone:t=!0},s,o){let l="";for(let u=0;u<BS;u++){const c=Ta[u];if(i[c]!==void 0){const d=kS[c]||c;l+=`${d}(${i[c]}) `}}return e&&!i.z&&(l+="translateZ(0)"),l=l.trim(),o?l=o(i,s?"":l):t&&s&&(l="none"),l}const Pv=i=>e=>typeof e=="string"&&e.startsWith(i),Lv=Pv("--"),_d=Pv("var(--"),zS=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,HS=(i,e)=>e&&typeof i=="number"?e.transform(i):i,Fr=(i,e,t)=>Math.min(Math.max(t,i),e),Ms={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},ha={...Ms,transform:i=>Fr(0,1,i)},Vl={...Ms,default:1},pa=i=>Math.round(i*1e5)/1e5,Fu=/(-)?([\d]*\.?[\d])+/g,Dv=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,GS=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function wa(i){return typeof i=="string"}const Aa=i=>({test:e=>wa(e)&&e.endsWith(i)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${i}`}),Cr=Aa("deg"),bi=Aa("%"),Ze=Aa("px"),WS=Aa("vh"),jS=Aa("vw"),Jm={...bi,parse:i=>bi.parse(i)/100,transform:i=>bi.transform(i*100)},eg={...Ms,transform:Math.round},Nv={borderWidth:Ze,borderTopWidth:Ze,borderRightWidth:Ze,borderBottomWidth:Ze,borderLeftWidth:Ze,borderRadius:Ze,radius:Ze,borderTopLeftRadius:Ze,borderTopRightRadius:Ze,borderBottomRightRadius:Ze,borderBottomLeftRadius:Ze,width:Ze,maxWidth:Ze,height:Ze,maxHeight:Ze,size:Ze,top:Ze,right:Ze,bottom:Ze,left:Ze,padding:Ze,paddingTop:Ze,paddingRight:Ze,paddingBottom:Ze,paddingLeft:Ze,margin:Ze,marginTop:Ze,marginRight:Ze,marginBottom:Ze,marginLeft:Ze,rotate:Cr,rotateX:Cr,rotateY:Cr,rotateZ:Cr,scale:Vl,scaleX:Vl,scaleY:Vl,scaleZ:Vl,skew:Cr,skewX:Cr,skewY:Cr,distance:Ze,translateX:Ze,translateY:Ze,translateZ:Ze,x:Ze,y:Ze,z:Ze,perspective:Ze,transformPerspective:Ze,opacity:ha,originX:Jm,originY:Jm,originZ:Ze,zIndex:eg,fillOpacity:ha,strokeOpacity:ha,numOctaves:eg};function $d(i,e,t,s){const{style:o,vars:l,transform:u,transformOrigin:c}=i;let d=!1,h=!1,m=!0;for(const g in e){const v=e[g];if(Lv(g)){l[g]=v;continue}const S=Nv[g],E=HS(v,S);if(Ss.has(g)){if(d=!0,u[g]=E,!m)continue;v!==(S.default||0)&&(m=!1)}else g.startsWith("origin")?(h=!0,c[g]=E):o[g]=E}if(e.transform||(d||s?o.transform=VS(i.transform,t,m,s):o.transform&&(o.transform="none")),h){const{originX:g="50%",originY:v="50%",originZ:S=0}=c;o.transformOrigin=`${g} ${v} ${S}`}}const Kd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Uv(i,e,t){for(const s in e)!Hn(e[s])&&!bv(s,t)&&(i[s]=e[s])}function XS({transformTemplate:i},e,t){return Ye.useMemo(()=>{const s=Kd();return $d(s,e,{enableHardwareAcceleration:!t},i),Object.assign({},s.vars,s.style)},[e])}function qS(i,e,t){const s=i.style||{},o={};return Uv(o,s,i),Object.assign(o,XS(i,e,t)),i.transformValues?i.transformValues(o):o}function YS(i,e,t){const s={},o=qS(i,e,t);return i.drag&&i.dragListener!==!1&&(s.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(s.tabIndex=0),s.style=o,s}const $S=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function yu(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||$S.has(i)}let Iv=i=>!yu(i);function KS(i){i&&(Iv=e=>e.startsWith("on")?!yu(e):i(e))}try{KS(require("@emotion/is-prop-valid").default)}catch{}function ZS(i,e,t){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||(Iv(o)||t===!0&&yu(o)||!e&&!yu(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}function tg(i,e,t){return typeof i=="string"?i:Ze.transform(e+t*i)}function QS(i,e,t){const s=tg(e,i.x,i.width),o=tg(t,i.y,i.height);return`${s} ${o}`}const JS={offset:"stroke-dashoffset",array:"stroke-dasharray"},eM={offset:"strokeDashoffset",array:"strokeDasharray"};function tM(i,e,t=1,s=0,o=!0){i.pathLength=1;const l=o?JS:eM;i[l.offset]=Ze.transform(-s);const u=Ze.transform(e),c=Ze.transform(t);i[l.array]=`${u} ${c}`}function Zd(i,{attrX:e,attrY:t,attrScale:s,originX:o,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},m,g,v){if($d(i,h,m,v),g){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:S,style:E,dimensions:M}=i;S.transform&&(M&&(E.transform=S.transform),delete S.transform),M&&(o!==void 0||l!==void 0||E.transform)&&(E.transformOrigin=QS(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(S.x=e),t!==void 0&&(S.y=t),s!==void 0&&(S.scale=s),u!==void 0&&tM(S,u,c,d,!1)}const Fv=()=>({...Kd(),attrs:{}}),Qd=i=>typeof i=="string"&&i.toLowerCase()==="svg";function nM(i,e,t,s){const o=Ye.useMemo(()=>{const l=Fv();return Zd(l,e,{enableHardwareAcceleration:!1},Qd(s),i.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(i.style){const l={};Uv(l,i.style,i),o.style={...l,...o.style}}return o}function iM(i=!1){return(t,s,o,{latestValues:l},u)=>{const d=(Yd(t)?nM:YS)(s,l,u,t),m={...ZS(s,typeof t=="string",i),...d,ref:o},{children:g}=s,v=Ye.useMemo(()=>Hn(g)?g.get():g,[g]);return Ye.createElement(t,{...m,children:v})}}function Ov(i,{style:e,vars:t},s,o){Object.assign(i.style,e,o&&o.getProjectionStyles(s));for(const l in t)i.style.setProperty(l,t[l])}const kv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bv(i,e,t,s){Ov(i,e,void 0,s);for(const o in e.attrs)i.setAttribute(kv.has(o)?o:jd(o),e.attrs[o])}function Jd(i,e){const{style:t}=i,s={};for(const o in t)(Hn(t[o])||e.style&&Hn(e.style[o])||bv(o,i))&&(s[o]=t[o]);return s}function Vv(i,e){const t=Jd(i,e);for(const s in i)if(Hn(i[s])||Hn(e[s])){const o=Ta.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;t[o]=i[s]}return t}function eh(i,e,t,s={},o={}){return typeof e=="function"&&(e=e(t!==void 0?t:i.custom,s,o)),typeof e=="string"&&(e=i.variants&&i.variants[e]),typeof e=="function"&&(e=e(t!==void 0?t:i.custom,s,o)),e}function rM(i){const e=Ye.useRef(null);return e.current===null&&(e.current=i()),e.current}const xu=i=>Array.isArray(i),sM=i=>!!(i&&typeof i=="object"&&i.mix&&i.toValue),oM=i=>xu(i)?i[i.length-1]||0:i;function mu(i){const e=Hn(i)?i.get():i;return sM(e)?e.toValue():e}function aM({scrapeMotionValuesFromProps:i,createRenderState:e,onMount:t},s,o,l){const u={latestValues:lM(s,o,l,i),renderState:e()};return t&&(u.mount=c=>t(s,c,u)),u}const zv=i=>(e,t)=>{const s=Ye.useContext(Du),o=Ye.useContext(Wd),l=()=>aM(i,e,s,o);return t?l():rM(l)};function lM(i,e,t,s){const o={},l=s(i,{});for(const v in l)o[v]=mu(l[v]);let{initial:u,animate:c}=i;const d=Iu(i),h=Av(i);e&&h&&!d&&i.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const g=m?c:u;return g&&typeof g!="boolean"&&!Uu(g)&&(Array.isArray(g)?g:[g]).forEach(S=>{const E=eh(i,S);if(!E)return;const{transitionEnd:M,transition:x,...y}=E;for(const L in y){let A=y[L];if(Array.isArray(A)){const b=m?A.length-1:0;A=A[b]}A!==null&&(o[L]=A)}for(const L in M)o[L]=M[L]}),o}const Wt=i=>i;class ng{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);t!==-1&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function uM(i){let e=new ng,t=new ng,s=0,o=!1,l=!1;const u=new WeakSet,c={schedule:(d,h=!1,m=!1)=>{const g=m&&o,v=g?e:t;return h&&u.add(d),v.add(d)&&g&&o&&(s=e.order.length),d},cancel:d=>{t.remove(d),u.delete(d)},process:d=>{if(o){l=!0;return}if(o=!0,[e,t]=[t,e],t.clear(),s=e.order.length,s)for(let h=0;h<s;h++){const m=e.order[h];m(d),u.has(m)&&(c.schedule(m),i())}o=!1,l&&(l=!1,c.process(d))}};return c}const zl=["prepare","read","update","preRender","render","postRender"],cM=40;function fM(i,e){let t=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=zl.reduce((g,v)=>(g[v]=uM(()=>t=!0),g),{}),u=g=>l[g].process(o),c=()=>{const g=performance.now();t=!1,o.delta=s?1e3/60:Math.max(Math.min(g-o.timestamp,cM),1),o.timestamp=g,o.isProcessing=!0,zl.forEach(u),o.isProcessing=!1,t&&e&&(s=!1,i(c))},d=()=>{t=!0,s=!0,o.isProcessing||i(c)};return{schedule:zl.reduce((g,v)=>{const S=l[v];return g[v]=(E,M=!1,x=!1)=>(t||d(),S.schedule(E,M,x)),g},{}),cancel:g=>zl.forEach(v=>l[v].cancel(g)),state:o,steps:l}}const{schedule:Nt,cancel:Qi,state:xn,steps:bf}=fM(typeof requestAnimationFrame<"u"?requestAnimationFrame:Wt,!0),dM={useVisualState:zv({scrapeMotionValuesFromProps:Vv,createRenderState:Fv,onMount:(i,e,{renderState:t,latestValues:s})=>{Nt.read(()=>{try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}),Nt.render(()=>{Zd(t,s,{enableHardwareAcceleration:!1},Qd(e.tagName),i.transformTemplate),Bv(e,t)})}})},hM={useVisualState:zv({scrapeMotionValuesFromProps:Jd,createRenderState:Kd})};function pM(i,{forwardMotionProps:e=!1},t,s){return{...Yd(i)?dM:hM,preloadedFeatures:t,useRender:iM(e),createVisualElement:s,Component:i}}function Yi(i,e,t,s={passive:!0}){return i.addEventListener(e,t,s),()=>i.removeEventListener(e,t)}const Hv=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1;function Ou(i,e="page"){return{point:{x:i[e+"X"],y:i[e+"Y"]}}}const mM=i=>e=>Hv(e)&&i(e,Ou(e));function Ki(i,e,t,s){return Yi(i,e,mM(t),s)}const gM=(i,e)=>t=>e(i(t)),Dr=(...i)=>i.reduce(gM);function Gv(i){let e=null;return()=>{const t=()=>{e=null};return e===null?(e=i,t):!1}}const ig=Gv("dragHorizontal"),rg=Gv("dragVertical");function Wv(i){let e=!1;if(i==="y")e=rg();else if(i==="x")e=ig();else{const t=ig(),s=rg();t&&s?e=()=>{t(),s()}:(t&&t(),s&&s())}return e}function jv(){const i=Wv(!0);return i?(i(),!1):!0}class Br{constructor(e){this.isMounted=!1,this.node=e}update(){}}function sg(i,e){const t="pointer"+(e?"enter":"leave"),s="onHover"+(e?"Start":"End"),o=(l,u)=>{if(l.pointerType==="touch"||jv())return;const c=i.getProps();i.animationState&&c.whileHover&&i.animationState.setActive("whileHover",e),c[s]&&Nt.update(()=>c[s](l,u))};return Ki(i.current,t,o,{passive:!i.getProps()[s]})}class vM extends Br{mount(){this.unmount=Dr(sg(this.node,!0),sg(this.node,!1))}unmount(){}}class _M extends Br{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dr(Yi(this.node.current,"focus",()=>this.onFocus()),Yi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Xv=(i,e)=>e?i===e?!0:Xv(i,e.parentElement):!1;function Pf(i,e){if(!e)return;const t=new PointerEvent("pointer"+i);e(t,Ou(t))}class yM extends Br{constructor(){super(...arguments),this.removeStartListeners=Wt,this.removeEndListeners=Wt,this.removeAccessibleListeners=Wt,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const s=this.node.getProps(),l=Ki(window,"pointerup",(c,d)=>{if(!this.checkPressEnd())return;const{onTap:h,onTapCancel:m,globalTapTarget:g}=this.node.getProps();Nt.update(()=>{!g&&!Xv(this.node.current,c.target)?m&&m(c,d):h&&h(c,d)})},{passive:!(s.onTap||s.onPointerUp)}),u=Ki(window,"pointercancel",(c,d)=>this.cancelPress(c,d),{passive:!(s.onTapCancel||s.onPointerCancel)});this.removeEndListeners=Dr(l,u),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=l=>{if(l.key!=="Enter"||this.isPressing)return;const u=c=>{c.key!=="Enter"||!this.checkPressEnd()||Pf("up",(d,h)=>{const{onTap:m}=this.node.getProps();m&&Nt.update(()=>m(d,h))})};this.removeEndListeners(),this.removeEndListeners=Yi(this.node.current,"keyup",u),Pf("down",(c,d)=>{this.startPress(c,d)})},t=Yi(this.node.current,"keydown",e),s=()=>{this.isPressing&&Pf("cancel",(l,u)=>this.cancelPress(l,u))},o=Yi(this.node.current,"blur",s);this.removeAccessibleListeners=Dr(t,o)}}startPress(e,t){this.isPressing=!0;const{onTapStart:s,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),s&&Nt.update(()=>s(e,t))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!jv()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:s}=this.node.getProps();s&&Nt.update(()=>s(e,t))}mount(){const e=this.node.getProps(),t=Ki(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),s=Yi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Dr(t,s)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const yd=new WeakMap,Lf=new WeakMap,xM=i=>{const e=yd.get(i.target);e&&e(i)},SM=i=>{i.forEach(xM)};function MM({root:i,...e}){const t=i||document;Lf.has(t)||Lf.set(t,{});const s=Lf.get(t),o=JSON.stringify(e);return s[o]||(s[o]=new IntersectionObserver(SM,{root:i,...e})),s[o]}function EM(i,e,t){const s=MM(e);return yd.set(i,t),s.observe(i),()=>{yd.delete(i),s.unobserve(i)}}const TM={some:0,all:1};class wM extends Br{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:s,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:TM[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:g}=this.node.getProps(),v=h?m:g;v&&v(d)};return EM(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(AM(e,t))&&this.startObserver()}unmount(){}}function AM({viewport:i={}},{viewport:e={}}={}){return t=>i[t]!==e[t]}const CM={inView:{Feature:wM},tap:{Feature:yM},focus:{Feature:_M},hover:{Feature:vM}};function qv(i,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==i.length)return!1;for(let s=0;s<t;s++)if(e[s]!==i[s])return!1;return!0}function RM(i){const e={};return i.values.forEach((t,s)=>e[s]=t.get()),e}function bM(i){const e={};return i.values.forEach((t,s)=>e[s]=t.getVelocity()),e}function ku(i,e,t){const s=i.getProps();return eh(s,e,t!==void 0?t:s.custom,RM(i),bM(i))}let th=Wt;const ps=i=>i*1e3,Zi=i=>i/1e3,PM={current:!1},Yv=i=>Array.isArray(i)&&typeof i[0]=="number";function $v(i){return!!(!i||typeof i=="string"&&Kv[i]||Yv(i)||Array.isArray(i)&&i.every($v))}const fa=([i,e,t,s])=>`cubic-bezier(${i}, ${e}, ${t}, ${s})`,Kv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fa([0,.65,.55,1]),circOut:fa([.55,0,1,.45]),backIn:fa([.31,.01,.66,-.59]),backOut:fa([.33,1.53,.69,.99])};function Zv(i){if(i)return Yv(i)?fa(i):Array.isArray(i)?i.map(Zv):Kv[i]}function LM(i,e,t,{delay:s=0,duration:o,repeat:l=0,repeatType:u="loop",ease:c,times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=Zv(c);return Array.isArray(m)&&(h.easing=m),i.animate(h,{delay:s,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}function DM(i,{repeat:e,repeatType:t="loop"}){const s=e&&t!=="loop"&&e%2===1?0:i.length-1;return i[s]}const Qv=(i,e,t)=>(((1-3*t+3*e)*i+(3*t-6*e))*i+3*e)*i,NM=1e-7,UM=12;function IM(i,e,t,s,o){let l,u,c=0;do u=e+(t-e)/2,l=Qv(u,s,o)-i,l>0?t=u:e=u;while(Math.abs(l)>NM&&++c<UM);return u}function Ca(i,e,t,s){if(i===e&&t===s)return Wt;const o=l=>IM(l,0,1,i,t);return l=>l===0||l===1?l:Qv(o(l),e,s)}const FM=Ca(.42,0,1,1),OM=Ca(0,0,.58,1),Jv=Ca(.42,0,.58,1),kM=i=>Array.isArray(i)&&typeof i[0]!="number",e_=i=>e=>e<=.5?i(2*e)/2:(2-i(2*(1-e)))/2,t_=i=>e=>1-i(1-e),nh=i=>1-Math.sin(Math.acos(i)),n_=t_(nh),BM=e_(nh),i_=Ca(.33,1.53,.69,.99),ih=t_(i_),VM=e_(ih),zM=i=>(i*=2)<1?.5*ih(i):.5*(2-Math.pow(2,-10*(i-1))),HM={linear:Wt,easeIn:FM,easeInOut:Jv,easeOut:OM,circIn:nh,circInOut:BM,circOut:n_,backIn:ih,backInOut:VM,backOut:i_,anticipate:zM},og=i=>{if(Array.isArray(i)){th(i.length===4);const[e,t,s,o]=i;return Ca(e,t,s,o)}else if(typeof i=="string")return HM[i];return i},rh=(i,e)=>t=>!!(wa(t)&&GS.test(t)&&t.startsWith(i)||e&&Object.prototype.hasOwnProperty.call(t,e)),r_=(i,e,t)=>s=>{if(!wa(s))return s;const[o,l,u,c]=s.match(Fu);return{[i]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},GM=i=>Fr(0,255,i),Df={...Ms,transform:i=>Math.round(GM(i))},hs={test:rh("rgb","red"),parse:r_("red","green","blue"),transform:({red:i,green:e,blue:t,alpha:s=1})=>"rgba("+Df.transform(i)+", "+Df.transform(e)+", "+Df.transform(t)+", "+pa(ha.transform(s))+")"};function WM(i){let e="",t="",s="",o="";return i.length>5?(e=i.substring(1,3),t=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(e=i.substring(1,2),t=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),e+=e,t+=t,s+=s,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const xd={test:rh("#"),parse:WM,transform:hs.transform},uo={test:rh("hsl","hue"),parse:r_("hue","saturation","lightness"),transform:({hue:i,saturation:e,lightness:t,alpha:s=1})=>"hsla("+Math.round(i)+", "+bi.transform(pa(e))+", "+bi.transform(pa(t))+", "+pa(ha.transform(s))+")"},bn={test:i=>hs.test(i)||xd.test(i)||uo.test(i),parse:i=>hs.test(i)?hs.parse(i):uo.test(i)?uo.parse(i):xd.parse(i),transform:i=>wa(i)?i:i.hasOwnProperty("red")?hs.transform(i):uo.transform(i)},kt=(i,e,t)=>-t*i+t*e+i;function Nf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i}function jM({hue:i,saturation:e,lightness:t,alpha:s}){i/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Nf(d,c,i+1/3),l=Nf(d,c,i),u=Nf(d,c,i-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:s}}const Uf=(i,e,t)=>{const s=i*i;return Math.sqrt(Math.max(0,t*(e*e-s)+s))},XM=[xd,hs,uo],qM=i=>XM.find(e=>e.test(i));function ag(i){const e=qM(i);let t=e.parse(i);return e===uo&&(t=jM(t)),t}const s_=(i,e)=>{const t=ag(i),s=ag(e),o={...t};return l=>(o.red=Uf(t.red,s.red,l),o.green=Uf(t.green,s.green,l),o.blue=Uf(t.blue,s.blue,l),o.alpha=kt(t.alpha,s.alpha,l),hs.transform(o))};function YM(i){var e,t;return isNaN(i)&&wa(i)&&(((e=i.match(Fu))===null||e===void 0?void 0:e.length)||0)+(((t=i.match(Dv))===null||t===void 0?void 0:t.length)||0)>0}const o_={regex:zS,countKey:"Vars",token:"${v}",parse:Wt},a_={regex:Dv,countKey:"Colors",token:"${c}",parse:bn.parse},l_={regex:Fu,countKey:"Numbers",token:"${n}",parse:Ms.parse};function If(i,{regex:e,countKey:t,token:s,parse:o}){const l=i.tokenised.match(e);l&&(i["num"+t]=l.length,i.tokenised=i.tokenised.replace(e,s),i.values.push(...l.map(o)))}function Su(i){const e=i.toString(),t={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return t.value.includes("var(--")&&If(t,o_),If(t,a_),If(t,l_),t}function u_(i){return Su(i).values}function c_(i){const{values:e,numColors:t,numVars:s,tokenised:o}=Su(i),l=e.length;return u=>{let c=o;for(let d=0;d<l;d++)d<s?c=c.replace(o_.token,u[d]):d<s+t?c=c.replace(a_.token,bn.transform(u[d])):c=c.replace(l_.token,pa(u[d]));return c}}const $M=i=>typeof i=="number"?0:i;function KM(i){const e=u_(i);return c_(i)(e.map($M))}const Or={test:YM,parse:u_,createTransformer:c_,getAnimatableNone:KM},f_=(i,e)=>t=>`${t>0?e:i}`;function d_(i,e){return typeof i=="number"?t=>kt(i,e,t):bn.test(i)?s_(i,e):i.startsWith("var(")?f_(i,e):p_(i,e)}const h_=(i,e)=>{const t=[...i],s=t.length,o=i.map((l,u)=>d_(l,e[u]));return l=>{for(let u=0;u<s;u++)t[u]=o[u](l);return t}},ZM=(i,e)=>{const t={...i,...e},s={};for(const o in t)i[o]!==void 0&&e[o]!==void 0&&(s[o]=d_(i[o],e[o]));return o=>{for(const l in s)t[l]=s[l](o);return t}},p_=(i,e)=>{const t=Or.createTransformer(e),s=Su(i),o=Su(e);return s.numVars===o.numVars&&s.numColors===o.numColors&&s.numNumbers>=o.numNumbers?Dr(h_(s.values,o.values),t):f_(i,e)},xa=(i,e,t)=>{const s=e-i;return s===0?1:(t-i)/s},lg=(i,e)=>t=>kt(i,e,t);function QM(i){return typeof i=="number"?lg:typeof i=="string"?bn.test(i)?s_:p_:Array.isArray(i)?h_:typeof i=="object"?ZM:lg}function JM(i,e,t){const s=[],o=t||QM(i[0]),l=i.length-1;for(let u=0;u<l;u++){let c=o(i[u],i[u+1]);if(e){const d=Array.isArray(e)?e[u]||Wt:e;c=Dr(d,c)}s.push(c)}return s}function m_(i,e,{clamp:t=!0,ease:s,mixer:o}={}){const l=i.length;if(th(l===e.length),l===1)return()=>e[0];i[0]>i[l-1]&&(i=[...i].reverse(),e=[...e].reverse());const u=JM(e,s,o),c=u.length,d=h=>{let m=0;if(c>1)for(;m<i.length-2&&!(h<i[m+1]);m++);const g=xa(i[m],i[m+1],h);return u[m](g)};return t?h=>d(Fr(i[0],i[l-1],h)):d}function eE(i,e){const t=i[i.length-1];for(let s=1;s<=e;s++){const o=xa(0,e,s);i.push(kt(t,1,o))}}function tE(i){const e=[0];return eE(e,i.length-1),e}function nE(i,e){return i.map(t=>t*e)}function iE(i,e){return i.map(()=>e||Jv).splice(0,i.length-1)}function Mu({duration:i=300,keyframes:e,times:t,ease:s="easeInOut"}){const o=kM(s)?s.map(og):og(s),l={done:!1,value:e[0]},u=nE(t&&t.length===e.length?t:tE(e),i),c=m_(u,e,{ease:Array.isArray(o)?o:iE(e,o)});return{calculatedDuration:i,next:d=>(l.value=c(d),l.done=d>=i,l)}}function g_(i,e){return e?i*(1e3/e):0}const rE=5;function v_(i,e,t){const s=Math.max(e-rE,0);return g_(t-i(s),e-s)}const Ff=.001,sE=.01,oE=10,aE=.05,lE=1;function uE({duration:i=800,bounce:e=.25,velocity:t=0,mass:s=1}){let o,l,u=1-e;u=Fr(aE,lE,u),i=Fr(sE,oE,Zi(i)),u<1?(o=h=>{const m=h*u,g=m*i,v=m-t,S=Sd(h,u),E=Math.exp(-g);return Ff-v/S*E},l=h=>{const g=h*u*i,v=g*t+t,S=Math.pow(u,2)*Math.pow(h,2)*i,E=Math.exp(-g),M=Sd(Math.pow(h,2),u);return(-o(h)+Ff>0?-1:1)*((v-S)*E)/M}):(o=h=>{const m=Math.exp(-h*i),g=(h-t)*i+1;return-Ff+m*g},l=h=>{const m=Math.exp(-h*i),g=(t-h)*(i*i);return m*g});const c=5/i,d=fE(o,l,c);if(i=ps(i),isNaN(d))return{stiffness:100,damping:10,duration:i};{const h=Math.pow(d,2)*s;return{stiffness:h,damping:u*2*Math.sqrt(s*h),duration:i}}}const cE=12;function fE(i,e,t){let s=t;for(let o=1;o<cE;o++)s=s-i(s)/e(s);return s}function Sd(i,e){return i*Math.sqrt(1-e*e)}const dE=["duration","bounce"],hE=["stiffness","damping","mass"];function ug(i,e){return e.some(t=>i[t]!==void 0)}function pE(i){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...i};if(!ug(i,hE)&&ug(i,dE)){const t=uE(i);e={...e,...t,mass:1},e.isResolvedFromDuration=!0}return e}function __({keyframes:i,restDelta:e,restSpeed:t,...s}){const o=i[0],l=i[i.length-1],u={done:!1,value:o},{stiffness:c,damping:d,mass:h,duration:m,velocity:g,isResolvedFromDuration:v}=pE({...s,velocity:-Zi(s.velocity||0)}),S=g||0,E=d/(2*Math.sqrt(c*h)),M=l-o,x=Zi(Math.sqrt(c/h)),y=Math.abs(M)<5;t||(t=y?.01:2),e||(e=y?.005:.5);let L;if(E<1){const A=Sd(x,E);L=b=>{const N=Math.exp(-E*x*b);return l-N*((S+E*x*M)/A*Math.sin(A*b)+M*Math.cos(A*b))}}else if(E===1)L=A=>l-Math.exp(-x*A)*(M+(S+x*M)*A);else{const A=x*Math.sqrt(E*E-1);L=b=>{const N=Math.exp(-E*x*b),B=Math.min(A*b,300);return l-N*((S+E*x*M)*Math.sinh(B)+A*M*Math.cosh(B))/A}}return{calculatedDuration:v&&m||null,next:A=>{const b=L(A);if(v)u.done=A>=m;else{let N=S;A!==0&&(E<1?N=v_(L,A,b):N=0);const B=Math.abs(N)<=t,O=Math.abs(l-b)<=e;u.done=B&&O}return u.value=u.done?l:b,u}}}function cg({keyframes:i,velocity:e=0,power:t=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:m}){const g=i[0],v={done:!1,value:g},S=$=>c!==void 0&&$<c||d!==void 0&&$>d,E=$=>c===void 0?d:d===void 0||Math.abs(c-$)<Math.abs(d-$)?c:d;let M=t*e;const x=g+M,y=u===void 0?x:u(x);y!==x&&(M=y-g);const L=$=>-M*Math.exp(-$/s),A=$=>y+L($),b=$=>{const R=L($),I=A($);v.done=Math.abs(R)<=h,v.value=v.done?y:I};let N,B;const O=$=>{S(v.value)&&(N=$,B=__({keyframes:[v.value,E(v.value)],velocity:v_(A,$,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return O(0),{calculatedDuration:null,next:$=>{let R=!1;return!B&&N===void 0&&(R=!0,b($),O($)),N!==void 0&&$>N?B.next($-N):(!R&&b($),v)}}}const mE=i=>{const e=({timestamp:t})=>i(t);return{start:()=>Nt.update(e,!0),stop:()=>Qi(e),now:()=>xn.isProcessing?xn.timestamp:performance.now()}},fg=2e4;function dg(i){let e=0;const t=50;let s=i.next(e);for(;!s.done&&e<fg;)e+=t,s=i.next(e);return e>=fg?1/0:e}const gE={decay:cg,inertia:cg,tween:Mu,keyframes:Mu,spring:__};function Eu({autoplay:i=!0,delay:e=0,driver:t=mE,keyframes:s,type:o="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:c="loop",onPlay:d,onStop:h,onComplete:m,onUpdate:g,...v}){let S=1,E=!1,M,x;const y=()=>{x=new Promise(w=>{M=w})};y();let L;const A=gE[o]||Mu;let b;A!==Mu&&typeof s[0]!="number"&&(b=m_([0,100],s,{clamp:!1}),s=[0,100]);const N=A({...v,keyframes:s});let B;c==="mirror"&&(B=A({...v,keyframes:[...s].reverse(),velocity:-(v.velocity||0)}));let O="idle",$=null,R=null,I=null;N.calculatedDuration===null&&l&&(N.calculatedDuration=dg(N));const{calculatedDuration:le}=N;let ue=1/0,fe=1/0;le!==null&&(ue=le+u,fe=ue*(l+1)-u);let V=0;const ie=w=>{if(R===null)return;S>0&&(R=Math.min(R,w)),S<0&&(R=Math.min(w-fe/S,R)),$!==null?V=$:V=Math.round(w-R)*S;const F=V-e*(S>=0?1:-1),ce=S>=0?F<0:F>fe;V=Math.max(F,0),O==="finished"&&$===null&&(V=fe);let de=V,me=N;if(l){const De=Math.min(V,fe)/ue;let ot=Math.floor(De),Xe=De%1;!Xe&&De>=1&&(Xe=1),Xe===1&&ot--,ot=Math.min(ot,l+1),!!(ot%2)&&(c==="reverse"?(Xe=1-Xe,u&&(Xe-=u/ue)):c==="mirror"&&(me=B)),de=Fr(0,1,Xe)*ue}const Te=ce?{done:!1,value:s[0]}:me.next(de);b&&(Te.value=b(Te.value));let{done:Fe}=Te;!ce&&le!==null&&(Fe=S>=0?V>=fe:V<=0);const Re=$===null&&(O==="finished"||O==="running"&&Fe);return g&&g(Te.value),Re&&q(),Te},se=()=>{L&&L.stop(),L=void 0},J=()=>{O="idle",se(),M(),y(),R=I=null},q=()=>{O="finished",m&&m(),se(),M()},K=()=>{if(E)return;L||(L=t(ie));const w=L.now();d&&d(),$!==null?R=w-$:(!R||O==="finished")&&(R=w),O==="finished"&&y(),I=R,$=null,O="running",L.start()};i&&K();const G={then(w,F){return x.then(w,F)},get time(){return Zi(V)},set time(w){w=ps(w),V=w,$!==null||!L||S===0?$=w:R=L.now()-w/S},get duration(){const w=N.calculatedDuration===null?dg(N):N.calculatedDuration;return Zi(w)},get speed(){return S},set speed(w){w===S||!L||(S=w,G.time=Zi(V))},get state(){return O},play:K,pause:()=>{O="paused",$=V},stop:()=>{E=!0,O!=="idle"&&(O="idle",h&&h(),J())},cancel:()=>{I!==null&&ie(I),J()},complete:()=>{O="finished"},sample:w=>(R=0,ie(w))};return G}function vE(i){let e;return()=>(e===void 0&&(e=i()),e)}const _E=vE(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),yE=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Hl=10,xE=2e4,SE=(i,e)=>e.type==="spring"||i==="backgroundColor"||!$v(e.ease);function ME(i,e,{onUpdate:t,onComplete:s,...o}){if(!(_E()&&yE.has(e)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let u=!1,c,d,h=!1;const m=()=>{d=new Promise(A=>{c=A})};m();let{keyframes:g,duration:v=300,ease:S,times:E}=o;if(SE(e,o)){const A=Eu({...o,repeat:0,delay:0});let b={done:!1,value:g[0]};const N=[];let B=0;for(;!b.done&&B<xE;)b=A.sample(B),N.push(b.value),B+=Hl;E=void 0,g=N,v=B-Hl,S="linear"}const M=LM(i.owner.current,e,g,{...o,duration:v,ease:S,times:E}),x=()=>{h=!1,M.cancel()},y=()=>{h=!0,Nt.update(x),c(),m()};return M.onfinish=()=>{h||(i.set(DM(g,o)),s&&s(),y())},{then(A,b){return d.then(A,b)},attachTimeline(A){return M.timeline=A,M.onfinish=null,Wt},get time(){return Zi(M.currentTime||0)},set time(A){M.currentTime=ps(A)},get speed(){return M.playbackRate},set speed(A){M.playbackRate=A},get duration(){return Zi(v)},play:()=>{u||(M.play(),Qi(x))},pause:()=>M.pause(),stop:()=>{if(u=!0,M.playState==="idle")return;const{currentTime:A}=M;if(A){const b=Eu({...o,autoplay:!1});i.setWithVelocity(b.sample(A-Hl).value,b.sample(A).value,Hl)}y()},complete:()=>{h||M.finish()},cancel:y}}function EE({keyframes:i,delay:e,onUpdate:t,onComplete:s}){const o=()=>(t&&t(i[i.length-1]),s&&s(),{time:0,speed:1,duration:0,play:Wt,pause:Wt,stop:Wt,then:l=>(l(),Promise.resolve()),cancel:Wt,complete:Wt});return e?Eu({keyframes:[0,1],duration:0,delay:e,onComplete:o}):o()}const TE={type:"spring",stiffness:500,damping:25,restSpeed:10},wE=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),AE={type:"keyframes",duration:.8},CE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},RE=(i,{keyframes:e})=>e.length>2?AE:Ss.has(i)?i.startsWith("scale")?wE(e[1]):TE:CE,Md=(i,e)=>i==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Or.test(e)||e==="0")&&!e.startsWith("url(")),bE=new Set(["brightness","contrast","saturate","opacity"]);function PE(i){const[e,t]=i.slice(0,-1).split("(");if(e==="drop-shadow")return i;const[s]=t.match(Fu)||[];if(!s)return i;const o=t.replace(s,"");let l=bE.has(e)?1:0;return s!==t&&(l*=100),e+"("+l+o+")"}const LE=/([a-z-]*)\(.*?\)/g,Ed={...Or,getAnimatableNone:i=>{const e=i.match(LE);return e?e.map(PE).join(" "):i}},DE={...Nv,color:bn,backgroundColor:bn,outlineColor:bn,fill:bn,stroke:bn,borderColor:bn,borderTopColor:bn,borderRightColor:bn,borderBottomColor:bn,borderLeftColor:bn,filter:Ed,WebkitFilter:Ed},sh=i=>DE[i];function y_(i,e){let t=sh(i);return t!==Ed&&(t=Or),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const x_=i=>/^0[^.\s]+$/.test(i);function NE(i){if(typeof i=="number")return i===0;if(i!==null)return i==="none"||i==="0"||x_(i)}function UE(i,e,t,s){const o=Md(e,t);let l;Array.isArray(t)?l=[...t]:l=[null,t];const u=s.from!==void 0?s.from:i.get();let c;const d=[];for(let h=0;h<l.length;h++)l[h]===null&&(l[h]=h===0?u:l[h-1]),NE(l[h])&&d.push(h),typeof l[h]=="string"&&l[h]!=="none"&&l[h]!=="0"&&(c=l[h]);if(o&&d.length&&c)for(let h=0;h<d.length;h++){const m=d[h];l[m]=y_(e,c)}return l}function IE({when:i,delay:e,delayChildren:t,staggerChildren:s,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...m}){return!!Object.keys(m).length}function oh(i,e){return i[e]||i.default||i}const FE={skipAnimations:!1},ah=(i,e,t,s={})=>o=>{const l=oh(s,i)||{},u=l.delay||s.delay||0;let{elapsed:c=0}=s;c=c-ps(u);const d=UE(e,i,t,l),h=d[0],m=d[d.length-1],g=Md(i,h),v=Md(i,m);let S={keyframes:d,velocity:e.getVelocity(),ease:"easeOut",...l,delay:-c,onUpdate:E=>{e.set(E),l.onUpdate&&l.onUpdate(E)},onComplete:()=>{o(),l.onComplete&&l.onComplete()}};if(IE(l)||(S={...S,...RE(i,S)}),S.duration&&(S.duration=ps(S.duration)),S.repeatDelay&&(S.repeatDelay=ps(S.repeatDelay)),!g||!v||PM.current||l.type===!1||FE.skipAnimations)return EE(S);if(!s.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const E=ME(e,i,S);if(E)return E}return Eu(S)};function Tu(i){return!!(Hn(i)&&i.add)}const S_=i=>/^\-?\d*\.?\d+$/.test(i);function lh(i,e){i.indexOf(e)===-1&&i.push(e)}function uh(i,e){const t=i.indexOf(e);t>-1&&i.splice(t,1)}class ch{constructor(){this.subscriptions=[]}add(e){return lh(this.subscriptions,e),()=>uh(this.subscriptions,e)}notify(e,t,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,s);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const OE=i=>!isNaN(parseFloat(i));class kE{constructor(e,t={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(s,o=!0)=>{this.prev=this.current,this.current=s;const{delta:l,timestamp:u}=xn;this.lastUpdated!==u&&(this.timeDelta=l,this.lastUpdated=u,Nt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Nt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{s!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=OE(this.current),this.owner=t.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new ch);const s=this.events[e].add(t);return e==="change"?()=>{s(),Nt.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,s){this.set(t),this.prev=e,this.timeDelta=s}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?g_(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function go(i,e){return new kE(i,e)}const M_=i=>e=>e.test(i),BE={test:i=>i==="auto",parse:i=>i},E_=[Ms,Ze,bi,Cr,jS,WS,BE],ra=i=>E_.find(M_(i)),VE=[...E_,bn,Or],zE=i=>VE.find(M_(i));function HE(i,e,t){i.hasValue(e)?i.getValue(e).set(t):i.addValue(e,go(t))}function GE(i,e){const t=ku(i,e);let{transitionEnd:s={},transition:o={},...l}=t?i.makeTargetAnimatable(t,!1):{};l={...l,...s};for(const u in l){const c=oM(l[u]);HE(i,u,c)}}function WE(i,e,t){var s,o;const l=Object.keys(e).filter(c=>!i.hasValue(c)),u=l.length;if(u)for(let c=0;c<u;c++){const d=l[c],h=e[d];let m=null;Array.isArray(h)&&(m=h[0]),m===null&&(m=(o=(s=t[d])!==null&&s!==void 0?s:i.readValue(d))!==null&&o!==void 0?o:e[d]),m!=null&&(typeof m=="string"&&(S_(m)||x_(m))?m=parseFloat(m):!zE(m)&&Or.test(h)&&(m=y_(d,h)),i.addValue(d,go(m,{owner:i})),t[d]===void 0&&(t[d]=m),m!==null&&i.setBaseTarget(d,m))}}function jE(i,e){return e?(e[i]||e.default||e).from:void 0}function XE(i,e,t){const s={};for(const o in i){const l=jE(o,e);if(l!==void 0)s[o]=l;else{const u=t.getValue(o);u&&(s[o]=u.get())}}return s}function qE({protectedKeys:i,needsAnimating:e},t){const s=i.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,s}function YE(i,e){const t=i.get();if(Array.isArray(e)){for(let s=0;s<e.length;s++)if(e[s]!==t)return!0}else return t!==e}function T_(i,e,{delay:t=0,transitionOverride:s,type:o}={}){let{transition:l=i.getDefaultTransition(),transitionEnd:u,...c}=i.makeTargetAnimatable(e);const d=i.getValue("willChange");s&&(l=s);const h=[],m=o&&i.animationState&&i.animationState.getState()[o];for(const g in c){const v=i.getValue(g),S=c[g];if(!v||S===void 0||m&&qE(m,g))continue;const E={delay:t,elapsed:0,...oh(l||{},g)};if(window.HandoffAppearAnimations){const y=i.getProps()[wv];if(y){const L=window.HandoffAppearAnimations(y,g,v,Nt);L!==null&&(E.elapsed=L,E.isHandoff=!0)}}let M=!E.isHandoff&&!YE(v,S);if(E.type==="spring"&&(v.getVelocity()||E.velocity)&&(M=!1),v.animation&&(M=!1),M)continue;v.start(ah(g,v,S,i.shouldReduceMotion&&Ss.has(g)?{type:!1}:E));const x=v.animation;Tu(d)&&(d.add(g),x.then(()=>d.remove(g))),h.push(x)}return u&&Promise.all(h).then(()=>{u&&GE(i,u)}),h}function Td(i,e,t={}){const s=ku(i,e,t.custom);let{transition:o=i.getDefaultTransition()||{}}=s||{};t.transitionOverride&&(o=t.transitionOverride);const l=s?()=>Promise.all(T_(i,s,t)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:m,staggerDirection:g}=o;return $E(i,e,h+d,m,g,t)}:()=>Promise.resolve(),{when:c}=o;if(c){const[d,h]=c==="beforeChildren"?[l,u]:[u,l];return d().then(()=>h())}else return Promise.all([l(),u(t.delay)])}function $E(i,e,t=0,s=0,o=1,l){const u=[],c=(i.variantChildren.size-1)*s,d=o===1?(h=0)=>h*s:(h=0)=>c-h*s;return Array.from(i.variantChildren).sort(KE).forEach((h,m)=>{h.notify("AnimationStart",e),u.push(Td(h,e,{...l,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function KE(i,e){return i.sortNodePosition(e)}function ZE(i,e,t={}){i.notify("AnimationStart",e);let s;if(Array.isArray(e)){const o=e.map(l=>Td(i,l,t));s=Promise.all(o)}else if(typeof e=="string")s=Td(i,e,t);else{const o=typeof e=="function"?ku(i,e,t.custom):e;s=Promise.all(T_(i,o,t))}return s.then(()=>i.notify("AnimationComplete",e))}const QE=[...Xd].reverse(),JE=Xd.length;function eT(i){return e=>Promise.all(e.map(({animation:t,options:s})=>ZE(i,t,s)))}function tT(i){let e=eT(i);const t=iT();let s=!0;const o=(d,h)=>{const m=ku(i,h);if(m){const{transition:g,transitionEnd:v,...S}=m;d={...d,...S,...v}}return d};function l(d){e=d(i)}function u(d,h){const m=i.getProps(),g=i.getVariantContext(!0)||{},v=[],S=new Set;let E={},M=1/0;for(let y=0;y<JE;y++){const L=QE[y],A=t[L],b=m[L]!==void 0?m[L]:g[L],N=_a(b),B=L===h?A.isActive:null;B===!1&&(M=y);let O=b===g[L]&&b!==m[L]&&N;if(O&&s&&i.manuallyAnimateOnMount&&(O=!1),A.protectedKeys={...E},!A.isActive&&B===null||!b&&!A.prevProp||Uu(b)||typeof b=="boolean")continue;let R=nT(A.prevProp,b)||L===h&&A.isActive&&!O&&N||y>M&&N,I=!1;const le=Array.isArray(b)?b:[b];let ue=le.reduce(o,{});B===!1&&(ue={});const{prevResolvedValues:fe={}}=A,V={...fe,...ue},ie=se=>{R=!0,S.has(se)&&(I=!0,S.delete(se)),A.needsAnimating[se]=!0};for(const se in V){const J=ue[se],q=fe[se];if(E.hasOwnProperty(se))continue;let K=!1;xu(J)&&xu(q)?K=!qv(J,q):K=J!==q,K?J!==void 0?ie(se):S.add(se):J!==void 0&&S.has(se)?ie(se):A.protectedKeys[se]=!0}A.prevProp=b,A.prevResolvedValues=ue,A.isActive&&(E={...E,...ue}),s&&i.blockInitialAnimation&&(R=!1),R&&(!O||I)&&v.push(...le.map(se=>({animation:se,options:{type:L,...d}})))}if(S.size){const y={};S.forEach(L=>{const A=i.getBaseTarget(L);A!==void 0&&(y[L]=A)}),v.push({animation:y})}let x=!!v.length;return s&&(m.initial===!1||m.initial===m.animate)&&!i.manuallyAnimateOnMount&&(x=!1),s=!1,x?e(v):Promise.resolve()}function c(d,h,m){var g;if(t[d].isActive===h)return Promise.resolve();(g=i.variantChildren)===null||g===void 0||g.forEach(S=>{var E;return(E=S.animationState)===null||E===void 0?void 0:E.setActive(d,h)}),t[d].isActive=h;const v=u(m,d);for(const S in t)t[S].protectedKeys={};return v}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t}}function nT(i,e){return typeof e=="string"?e!==i:Array.isArray(e)?!qv(e,i):!1}function ts(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function iT(){return{animate:ts(!0),whileInView:ts(),whileHover:ts(),whileTap:ts(),whileDrag:ts(),whileFocus:ts(),exit:ts()}}class rT extends Br{constructor(e){super(e),e.animationState||(e.animationState=tT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Uu(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}let sT=0;class oT extends Br{constructor(){super(...arguments),this.id=sT++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:s}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===o)return;const l=this.node.animationState.setActive("exit",!e,{custom:s??this.node.getProps().custom});t&&!e&&l.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const aT={animation:{Feature:rT},exit:{Feature:oT}},hg=(i,e)=>Math.abs(i-e);function lT(i,e){const t=hg(i.x,e.x),s=hg(i.y,e.y);return Math.sqrt(t**2+s**2)}class w_{constructor(e,t,{transformPagePoint:s,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=kf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=lT(g.offset,{x:0,y:0})>=3;if(!v&&!S)return;const{point:E}=g,{timestamp:M}=xn;this.history.push({...E,timestamp:M});const{onStart:x,onMove:y}=this.handlers;v||(x&&x(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Of(v,this.transformPagePoint),Nt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:S,onSessionEnd:E,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=kf(g.type==="pointercancel"?this.lastMoveEventInfo:Of(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(g,x),E&&E(g,x)},!Hv(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=s,this.contextWindow=o||window;const u=Ou(e),c=Of(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=xn;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,kf(c,this.history)),this.removeListeners=Dr(Ki(this.contextWindow,"pointermove",this.handlePointerMove),Ki(this.contextWindow,"pointerup",this.handlePointerUp),Ki(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Qi(this.updatePoint)}}function Of(i,e){return e?{point:e(i.point)}:i}function pg(i,e){return{x:i.x-e.x,y:i.y-e.y}}function kf({point:i},e){return{point:i,delta:pg(i,A_(e)),offset:pg(i,uT(e)),velocity:cT(e,.1)}}function uT(i){return i[0]}function A_(i){return i[i.length-1]}function cT(i,e){if(i.length<2)return{x:0,y:0};let t=i.length-1,s=null;const o=A_(i);for(;t>=0&&(s=i[t],!(o.timestamp-s.timestamp>ps(e)));)t--;if(!s)return{x:0,y:0};const l=Zi(o.timestamp-s.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-s.x)/l,y:(o.y-s.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function Kn(i){return i.max-i.min}function wd(i,e=0,t=.01){return Math.abs(i-e)<=t}function mg(i,e,t,s=.5){i.origin=s,i.originPoint=kt(e.min,e.max,i.origin),i.scale=Kn(t)/Kn(e),(wd(i.scale,1,1e-4)||isNaN(i.scale))&&(i.scale=1),i.translate=kt(t.min,t.max,i.origin)-i.originPoint,(wd(i.translate)||isNaN(i.translate))&&(i.translate=0)}function ma(i,e,t,s){mg(i.x,e.x,t.x,s?s.originX:void 0),mg(i.y,e.y,t.y,s?s.originY:void 0)}function gg(i,e,t){i.min=t.min+e.min,i.max=i.min+Kn(e)}function fT(i,e,t){gg(i.x,e.x,t.x),gg(i.y,e.y,t.y)}function vg(i,e,t){i.min=e.min-t.min,i.max=i.min+Kn(e)}function ga(i,e,t){vg(i.x,e.x,t.x),vg(i.y,e.y,t.y)}function dT(i,{min:e,max:t},s){return e!==void 0&&i<e?i=s?kt(e,i,s.min):Math.max(i,e):t!==void 0&&i>t&&(i=s?kt(t,i,s.max):Math.min(i,t)),i}function _g(i,e,t){return{min:e!==void 0?i.min+e:void 0,max:t!==void 0?i.max+t-(i.max-i.min):void 0}}function hT(i,{top:e,left:t,bottom:s,right:o}){return{x:_g(i.x,t,o),y:_g(i.y,e,s)}}function yg(i,e){let t=e.min-i.min,s=e.max-i.max;return e.max-e.min<i.max-i.min&&([t,s]=[s,t]),{min:t,max:s}}function pT(i,e){return{x:yg(i.x,e.x),y:yg(i.y,e.y)}}function mT(i,e){let t=.5;const s=Kn(i),o=Kn(e);return o>s?t=xa(e.min,e.max-s,i.min):s>o&&(t=xa(i.min,i.max-o,e.min)),Fr(0,1,t)}function gT(i,e){const t={};return e.min!==void 0&&(t.min=e.min-i.min),e.max!==void 0&&(t.max=e.max-i.min),t}const Ad=.35;function vT(i=Ad){return i===!1?i=0:i===!0&&(i=Ad),{x:xg(i,"left","right"),y:xg(i,"top","bottom")}}function xg(i,e,t){return{min:Sg(i,e),max:Sg(i,t)}}function Sg(i,e){return typeof i=="number"?i:i[e]||0}const Mg=()=>({translate:0,scale:1,origin:0,originPoint:0}),co=()=>({x:Mg(),y:Mg()}),Eg=()=>({min:0,max:0}),Yt=()=>({x:Eg(),y:Eg()});function oi(i){return[i("x"),i("y")]}function C_({top:i,left:e,right:t,bottom:s}){return{x:{min:e,max:t},y:{min:i,max:s}}}function _T({x:i,y:e}){return{top:e.min,right:i.max,bottom:e.max,left:i.min}}function yT(i,e){if(!e)return i;const t=e({x:i.left,y:i.top}),s=e({x:i.right,y:i.bottom});return{top:t.y,left:t.x,bottom:s.y,right:s.x}}function Bf(i){return i===void 0||i===1}function Cd({scale:i,scaleX:e,scaleY:t}){return!Bf(i)||!Bf(e)||!Bf(t)}function as(i){return Cd(i)||R_(i)||i.z||i.rotate||i.rotateX||i.rotateY}function R_(i){return Tg(i.x)||Tg(i.y)}function Tg(i){return i&&i!=="0%"}function wu(i,e,t){const s=i-t,o=e*s;return t+o}function wg(i,e,t,s,o){return o!==void 0&&(i=wu(i,o,s)),wu(i,t,s)+e}function Rd(i,e=0,t=1,s,o){i.min=wg(i.min,e,t,s,o),i.max=wg(i.max,e,t,s,o)}function b_(i,{x:e,y:t}){Rd(i.x,e.translate,e.scale,e.originPoint),Rd(i.y,t.translate,t.scale,t.originPoint)}function xT(i,e,t,s=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const d=l.instance;d&&d.style&&d.style.display==="contents"||(s&&l.options.layoutScroll&&l.scroll&&l!==l.root&&fo(i,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,b_(i,u)),s&&as(l.latestValues)&&fo(i,l.latestValues))}e.x=Ag(e.x),e.y=Ag(e.y)}function Ag(i){return Number.isInteger(i)||i>1.0000000000001||i<.999999999999?i:1}function Rr(i,e){i.min=i.min+e,i.max=i.max+e}function Cg(i,e,[t,s,o]){const l=e[o]!==void 0?e[o]:.5,u=kt(i.min,i.max,l);Rd(i,e[t],e[s],u,e.scale)}const ST=["x","scaleX","originX"],MT=["y","scaleY","originY"];function fo(i,e){Cg(i.x,e,ST),Cg(i.y,e,MT)}function P_(i,e){return C_(yT(i.getBoundingClientRect(),e))}function ET(i,e,t){const s=P_(i,t),{scroll:o}=e;return o&&(Rr(s.x,o.offset.x),Rr(s.y,o.offset.y)),s}const L_=({current:i})=>i?i.ownerDocument.defaultView:null,TT=new WeakMap;class wT{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Yt(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ou(m,"page").point)},l=(m,g)=>{const{drag:v,dragPropagation:S,onDragStart:E}=this.getProps();if(v&&!S&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Wv(v),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),oi(x=>{let y=this.getAxisMotionValue(x).get()||0;if(bi.test(y)){const{projection:L}=this.visualElement;if(L&&L.layout){const A=L.layout.layoutBox[x];A&&(y=Kn(A)*(parseFloat(y)/100))}}this.originPoint[x]=y}),E&&Nt.update(()=>E(m,g),!1,!0);const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},u=(m,g)=>{const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:E,onDrag:M}=this.getProps();if(!v&&!this.openGlobalLock)return;const{offset:x}=g;if(S&&this.currentDirection===null){this.currentDirection=AT(x),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",g.point,x),this.updateAxis("y",g.point,x),this.visualElement.render(),M&&M(m,g)},c=(m,g)=>this.stop(m,g),d=()=>oi(m=>{var g;return this.getAnimationState(m)==="paused"&&((g=this.getAxisMotionValue(m).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new w_(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:L_(this.visualElement)})}stop(e,t){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Nt.update(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,s){const{drag:o}=this.getProps();if(!s||!Gl(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+s[e];this.constraints&&this.constraints[e]&&(u=dT(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:s}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&lo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=hT(o.layoutBox,t):this.constraints=!1,this.elastic=vT(s),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&oi(u=>{this.getAxisMotionValue(u)&&(this.constraints[u]=gT(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!lo(e))return!1;const s=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=ET(s,o.root,this.visualElement.getTransformPagePoint());let u=pT(o.layout.layoutBox,l);if(t){const c=t(_T(u));this.hasMutatedConstraints=!!c,c&&(u=C_(c))}return u}startAnimation(e){const{drag:t,dragMomentum:s,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=oi(m=>{if(!Gl(m,t,this.currentDirection))return;let g=d&&d[m]||{};u&&(g={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,E={type:"inertia",velocity:s?e[m]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(m,E)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const s=this.getAxisMotionValue(e);return s.start(ah(e,s,0,t))}stopAnimation(){oi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){oi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),s=this.visualElement.getProps(),o=s[t];return o||this.visualElement.getValue(e,(s.initial?s.initial[e]:void 0)||0)}snapToCursor(e){oi(t=>{const{drag:s}=this.getProps();if(!Gl(t,s,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-kt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:s}=this.visualElement;if(!lo(t)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};oi(u=>{const c=this.getAxisMotionValue(u);if(c){const d=c.get();o[u]=mT({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),oi(u=>{if(!Gl(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(kt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;TT.set(this.visualElement,this);const e=this.visualElement.current,t=Ki(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),s=()=>{const{dragConstraints:d}=this.getProps();lo(d)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",s);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),s();const u=Yi(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(oi(m=>{const g=this.getAxisMotionValue(m);g&&(this.originPoint[m]+=d[m].translate,g.set(g.get()+d[m].translate))}),this.visualElement.render())});return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Ad,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:s,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function Gl(i,e,t){return(e===!0||e===i)&&(t===null||t===i)}function AT(i,e=10){let t=null;return Math.abs(i.y)>e?t="y":Math.abs(i.x)>e&&(t="x"),t}class CT extends Br{constructor(e){super(e),this.removeGroupControls=Wt,this.removeListeners=Wt,this.controls=new wT(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Wt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Rg=i=>(e,t)=>{i&&Nt.update(()=>i(e,t))};class RT extends Br{constructor(){super(...arguments),this.removePointerDownListener=Wt}onPointerDown(e){this.session=new w_(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:L_(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:Rg(e),onStart:Rg(t),onMove:s,onEnd:(l,u)=>{delete this.session,o&&Nt.update(()=>o(l,u))}}}mount(){this.removePointerDownListener=Ki(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function bT(){const i=Ye.useContext(Wd);if(i===null)return[!0,null];const{isPresent:e,onExitComplete:t,register:s}=i,o=Ye.useId();return Ye.useEffect(()=>s(o),[]),!e&&t?[!1,()=>t&&t(o)]:[!0]}const gu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function bg(i,e){return e.max===e.min?0:i/(e.max-e.min)*100}const sa={correct:(i,e)=>{if(!e.target)return i;if(typeof i=="string")if(Ze.test(i))i=parseFloat(i);else return i;const t=bg(i,e.target.x),s=bg(i,e.target.y);return`${t}% ${s}%`}},PT={correct:(i,{treeScale:e,projectionDelta:t})=>{const s=i,o=Or.parse(i);if(o.length>5)return s;const l=Or.createTransformer(i),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=kt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class LT extends Ea.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:s,layoutId:o}=this.props,{projection:l}=e;OS(DT),l&&(t.group&&t.group.add(l),s&&s.register&&o&&s.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),gu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:s,drag:o,isPresent:l}=this.props,u=s.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Nt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:s}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function D_(i){const[e,t]=bT(),s=Ye.useContext(Cv);return Ea.createElement(LT,{...i,layoutGroup:s,switchLayoutGroup:Ye.useContext(Rv),isPresent:e,safeToRemove:t})}const DT={borderRadius:{...sa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:sa,borderTopRightRadius:sa,borderBottomLeftRadius:sa,borderBottomRightRadius:sa,boxShadow:PT},N_=["TopLeft","TopRight","BottomLeft","BottomRight"],NT=N_.length,Pg=i=>typeof i=="string"?parseFloat(i):i,Lg=i=>typeof i=="number"||Ze.test(i);function UT(i,e,t,s,o,l){o?(i.opacity=kt(0,t.opacity!==void 0?t.opacity:1,IT(s)),i.opacityExit=kt(e.opacity!==void 0?e.opacity:1,0,FT(s))):l&&(i.opacity=kt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,s));for(let u=0;u<NT;u++){const c=`border${N_[u]}Radius`;let d=Dg(e,c),h=Dg(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Lg(d)===Lg(h)?(i[c]=Math.max(kt(Pg(d),Pg(h),s),0),(bi.test(h)||bi.test(d))&&(i[c]+="%")):i[c]=h}(e.rotate||t.rotate)&&(i.rotate=kt(e.rotate||0,t.rotate||0,s))}function Dg(i,e){return i[e]!==void 0?i[e]:i.borderRadius}const IT=U_(0,.5,n_),FT=U_(.5,.95,Wt);function U_(i,e,t){return s=>s<i?0:s>e?1:t(xa(i,e,s))}function Ng(i,e){i.min=e.min,i.max=e.max}function ri(i,e){Ng(i.x,e.x),Ng(i.y,e.y)}function Ug(i,e,t,s,o){return i-=e,i=wu(i,1/t,s),o!==void 0&&(i=wu(i,1/o,s)),i}function OT(i,e=0,t=1,s=.5,o,l=i,u=i){if(bi.test(e)&&(e=parseFloat(e),e=kt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=kt(l.min,l.max,s);i===l&&(c-=e),i.min=Ug(i.min,e,t,c,o),i.max=Ug(i.max,e,t,c,o)}function Ig(i,e,[t,s,o],l,u){OT(i,e[t],e[s],e[o],e.scale,l,u)}const kT=["x","scaleX","originX"],BT=["y","scaleY","originY"];function Fg(i,e,t,s){Ig(i.x,e,kT,t?t.x:void 0,s?s.x:void 0),Ig(i.y,e,BT,t?t.y:void 0,s?s.y:void 0)}function Og(i){return i.translate===0&&i.scale===1}function I_(i){return Og(i.x)&&Og(i.y)}function VT(i,e){return i.x.min===e.x.min&&i.x.max===e.x.max&&i.y.min===e.y.min&&i.y.max===e.y.max}function F_(i,e){return Math.round(i.x.min)===Math.round(e.x.min)&&Math.round(i.x.max)===Math.round(e.x.max)&&Math.round(i.y.min)===Math.round(e.y.min)&&Math.round(i.y.max)===Math.round(e.y.max)}function kg(i){return Kn(i.x)/Kn(i.y)}class zT{constructor(){this.members=[]}add(e){lh(this.members,e),e.scheduleRender()}remove(e){if(uh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let s;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){s=l;break}}return s?(this.promote(s),!0):!1}promote(e,t){const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.instance&&s.scheduleRender(),e.scheduleRender(),e.resumeFrom=s,t&&(e.resumeFrom.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:s}=e;t.onExitComplete&&t.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Bg(i,e,t){let s="";const o=i.x.translate/e.x,l=i.y.translate/e.y;if((o||l)&&(s=`translate3d(${o}px, ${l}px, 0) `),(e.x!==1||e.y!==1)&&(s+=`scale(${1/e.x}, ${1/e.y}) `),t){const{rotate:d,rotateX:h,rotateY:m}=t;d&&(s+=`rotate(${d}deg) `),h&&(s+=`rotateX(${h}deg) `),m&&(s+=`rotateY(${m}deg) `)}const u=i.x.scale*e.x,c=i.y.scale*e.y;return(u!==1||c!==1)&&(s+=`scale(${u}, ${c})`),s||"none"}const HT=(i,e)=>i.depth-e.depth;class GT{constructor(){this.children=[],this.isDirty=!1}add(e){lh(this.children,e),this.isDirty=!0}remove(e){uh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(HT),this.isDirty=!1,this.children.forEach(e)}}function WT(i,e){const t=performance.now(),s=({timestamp:o})=>{const l=o-t;l>=e&&(Qi(s),i(l-e))};return Nt.read(s,!0),()=>Qi(s)}function jT(i){window.MotionDebug&&window.MotionDebug.record(i)}function XT(i){return i instanceof SVGElement&&i.tagName!=="svg"}function qT(i,e,t){const s=Hn(i)?i:go(i);return s.start(ah("",s,e,t)),s.animation}const Vg=["","X","Y","Z"],YT={visibility:"hidden"},zg=1e3;let $T=0;const ls={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function O_({attachResizeListener:i,defaultParent:e,measureScroll:t,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},c=e?.()){this.id=$T++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ls.totalNodes=ls.resolvedTargetDeltas=ls.recalculatedProjection=0,this.nodes.forEach(QT),this.nodes.forEach(iw),this.nodes.forEach(rw),this.nodes.forEach(JT),jT(ls)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new GT)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new ch),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=XT(u),this.instance=u;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),i){let g;const v=()=>this.root.updateBlockedByResize=!1;i(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=WT(v,250),gu.hasAnimatedSinceResize&&(gu.hasAnimatedSinceResize=!1,this.nodes.forEach(Gg))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:S,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||m.getDefaultTransition()||uw,{onLayoutAnimationStart:x,onLayoutAnimationComplete:y}=m.getProps(),L=!this.targetLayout||!F_(this.targetLayout,E)||S,A=!v&&S;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||A||v&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,A);const b={...oh(M,"layout"),onPlay:x,onComplete:y};(m.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else v||Gg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Qi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sw),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const g=this.path[m];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Hg);return}this.isUpdating||this.nodes.forEach(tw),this.isUpdating=!1,this.nodes.forEach(nw),this.nodes.forEach(KT),this.nodes.forEach(ZT),this.clearAllSnapshots();const c=performance.now();xn.delta=Fr(0,1e3/60,c-xn.timestamp),xn.timestamp=c,xn.isProcessing=!0,bf.update.process(xn),bf.preRender.process(xn),bf.render.process(xn),xn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(ew),this.sharedNodes.forEach(ow)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Nt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Nt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Yt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:u,isRoot:s(this.instance),offset:t(this.instance)})}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!I_(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(c||as(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),cw(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Yt();const c=u.measureViewportBox(),{scroll:d}=this.root;return d&&(Rr(c.x,d.offset.x),Rr(c.y,d.offset.y)),c}removeElementScroll(u){const c=Yt();ri(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:m,options:g}=h;if(h!==this.root&&m&&g.layoutScroll){if(m.isRoot){ri(c,u);const{scroll:v}=this.root;v&&(Rr(c.x,-v.offset.x),Rr(c.y,-v.offset.y))}Rr(c.x,m.offset.x),Rr(c.y,m.offset.y)}}return c}applyTransform(u,c=!1){const d=Yt();ri(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&fo(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),as(m.latestValues)&&fo(d,m.latestValues)}return as(this.latestValues)&&fo(d,this.latestValues),d}removeTransform(u){const c=Yt();ri(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!as(h.latestValues))continue;Cd(h.latestValues)&&h.updateSnapshot();const m=Yt(),g=h.measurePageBox();ri(m,g),Fg(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return as(this.latestValues)&&Fg(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=xn.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Yt(),this.relativeTargetOrigin=Yt(),ga(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),ri(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Yt(),this.targetWithTransforms=Yt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ri(this.target,this.layout.layoutBox),b_(this.target,this.targetDelta)):ri(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Yt(),this.relativeTargetOrigin=Yt(),ga(this.relativeTargetOrigin,this.target,S.target),ri(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ls.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Cd(this.parent.latestValues)||R_(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===xn.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;ri(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,S=this.treeScale.y;xT(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:E}=c;if(!E){this.projectionTransform&&(this.projectionDelta=co(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=co(),this.projectionDeltaWithTransform=co());const M=this.projectionTransform;ma(this.projectionDelta,this.layoutCorrected,E,this.latestValues),this.projectionTransform=Bg(this.projectionDelta,this.treeScale),(this.projectionTransform!==M||this.treeScale.x!==v||this.treeScale.y!==S)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E)),ls.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),u){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},g=co();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=Yt(),S=d?d.source:void 0,E=this.layout?this.layout.source:void 0,M=S!==E,x=this.getStack(),y=!x||x.members.length<=1,L=!!(M&&!y&&this.options.crossfade===!0&&!this.path.some(lw));this.animationProgress=0;let A;this.mixTargetDelta=b=>{const N=b/1e3;Wg(g.x,u.x,N),Wg(g.y,u.y,N),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ga(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),aw(this.relativeTarget,this.relativeTargetOrigin,v,N),A&&VT(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=Yt()),ri(A,this.relativeTarget)),M&&(this.animationValues=m,UT(m,h,this.latestValues,N,L,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Qi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Nt.update(()=>{gu.hasAnimatedSinceResize=!0,this.currentAnimation=qT(0,zg,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:m}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&k_(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Yt();const g=Kn(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=Kn(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}ri(c,d),fo(c,m),ma(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new zT),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.rotate||d.rotateX||d.rotateY||d.rotateZ)&&(c=!0),!c)return;const h={};for(let m=0;m<Vg.length;m++){const g="rotate"+Vg[m];d[g]&&(h[g]=d[g],u.setStaticValue(g,0))}u.render();for(const m in h)u.setStaticValue(m,h[m]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return YT;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=mu(u?.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const M={};return this.options.layoutId&&(M.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,M.pointerEvents=mu(u?.pointerEvents)||""),this.hasProjected&&!as(this.latestValues)&&(M.transform=m?m({},""):"none",this.hasProjected=!1),M}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=Bg(this.projectionDeltaWithTransform,this.treeScale,v),m&&(h.transform=m(v,h.transform));const{x:S,y:E}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${E.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=v.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const M in _u){if(v[M]===void 0)continue;const{correct:x,applyTo:y}=_u[M],L=h.transform==="none"?v[M]:x(v[M],g);if(y){const A=y.length;for(let b=0;b<A;b++)h[y[b]]=L}else h[M]=L}return this.options.layoutId&&(h.pointerEvents=g===this?mu(u?.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(Hg),this.root.sharedNodes.clear()}}}function KT(i){i.updateLayout()}function ZT(i){var e;const t=((e=i.resumeFrom)===null||e===void 0?void 0:e.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:o}=i.layout,{animationType:l}=i.options,u=t.source!==i.layout.source;l==="size"?oi(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],S=Kn(v);v.min=s[g].min,v.max=v.min+S}):k_(l,t.layoutBox,s)&&oi(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],S=Kn(s[g]);v.max=v.min+S,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[g].max=i.relativeTarget[g].min+S)});const c=co();ma(c,s,t.layoutBox);const d=co();u?ma(d,i.applyTransform(o,!0),t.measuredBox):ma(d,s,t.layoutBox);const h=!I_(c);let m=!1;if(!i.resumeFrom){const g=i.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:S}=g;if(v&&S){const E=Yt();ga(E,t.layoutBox,v.layoutBox);const M=Yt();ga(M,s,S.layoutBox),F_(E,M)||(m=!0),g.options.layoutRoot&&(i.relativeTarget=M,i.relativeTargetOrigin=E,i.relativeParent=g)}}}i.notifyListeners("didUpdate",{layout:s,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(i.isLead()){const{onExitComplete:s}=i.options;s&&s()}i.options.transition=void 0}function QT(i){ls.totalNodes++,i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function JT(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function ew(i){i.clearSnapshot()}function Hg(i){i.clearMeasurements()}function tw(i){i.isLayoutDirty=!1}function nw(i){const{visualElement:e}=i.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),i.resetTransform()}function Gg(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function iw(i){i.resolveTargetDelta()}function rw(i){i.calcProjection()}function sw(i){i.resetRotation()}function ow(i){i.removeLeadSnapshot()}function Wg(i,e,t){i.translate=kt(e.translate,0,t),i.scale=kt(e.scale,1,t),i.origin=e.origin,i.originPoint=e.originPoint}function jg(i,e,t,s){i.min=kt(e.min,t.min,s),i.max=kt(e.max,t.max,s)}function aw(i,e,t,s){jg(i.x,e.x,t.x,s),jg(i.y,e.y,t.y,s)}function lw(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const uw={duration:.45,ease:[.4,0,.1,1]},Xg=i=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(i),qg=Xg("applewebkit/")&&!Xg("chrome/")?Math.round:Wt;function Yg(i){i.min=qg(i.min),i.max=qg(i.max)}function cw(i){Yg(i.x),Yg(i.y)}function k_(i,e,t){return i==="position"||i==="preserve-aspect"&&!wd(kg(e),kg(t),.2)}const fw=O_({attachResizeListener:(i,e)=>Yi(i,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vf={current:void 0},B_=O_({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!Vf.current){const i=new fw({});i.mount(window),i.setOptions({layoutScroll:!0}),Vf.current=i}return Vf.current},resetTransform:(i,e)=>{i.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),dw={pan:{Feature:RT},drag:{Feature:CT,ProjectionNode:B_,MeasureLayout:D_}},hw=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function pw(i){const e=hw.exec(i);if(!e)return[,];const[,t,s]=e;return[t,s]}function bd(i,e,t=1){const[s,o]=pw(i);if(!s)return;const l=window.getComputedStyle(e).getPropertyValue(s);if(l){const u=l.trim();return S_(u)?parseFloat(u):u}else return _d(o)?bd(o,e,t+1):o}function mw(i,{...e},t){const s=i.current;if(!(s instanceof Element))return{target:e,transitionEnd:t};t&&(t={...t}),i.values.forEach(o=>{const l=o.get();if(!_d(l))return;const u=bd(l,s);u&&o.set(u)});for(const o in e){const l=e[o];if(!_d(l))continue;const u=bd(l,s);u&&(e[o]=u,t||(t={}),t[o]===void 0&&(t[o]=l))}return{target:e,transitionEnd:t}}const gw=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),V_=i=>gw.has(i),vw=i=>Object.keys(i).some(V_),$g=i=>i===Ms||i===Ze,Kg=(i,e)=>parseFloat(i.split(", ")[e]),Zg=(i,e)=>(t,{transform:s})=>{if(s==="none"||!s)return 0;const o=s.match(/^matrix3d\((.+)\)$/);if(o)return Kg(o[1],e);{const l=s.match(/^matrix\((.+)\)$/);return l?Kg(l[1],i):0}},_w=new Set(["x","y","z"]),yw=Ta.filter(i=>!_w.has(i));function xw(i){const e=[];return yw.forEach(t=>{const s=i.getValue(t);s!==void 0&&(e.push([t,s.get()]),s.set(t.startsWith("scale")?1:0))}),e.length&&i.render(),e}const vo={width:({x:i},{paddingLeft:e="0",paddingRight:t="0"})=>i.max-i.min-parseFloat(e)-parseFloat(t),height:({y:i},{paddingTop:e="0",paddingBottom:t="0"})=>i.max-i.min-parseFloat(e)-parseFloat(t),top:(i,{top:e})=>parseFloat(e),left:(i,{left:e})=>parseFloat(e),bottom:({y:i},{top:e})=>parseFloat(e)+(i.max-i.min),right:({x:i},{left:e})=>parseFloat(e)+(i.max-i.min),x:Zg(4,13),y:Zg(5,14)};vo.translateX=vo.x;vo.translateY=vo.y;const Sw=(i,e,t)=>{const s=e.measureViewportBox(),o=e.current,l=getComputedStyle(o),{display:u}=l,c={};u==="none"&&e.setStaticValue("display",i.display||"block"),t.forEach(h=>{c[h]=vo[h](s,l)}),e.render();const d=e.measureViewportBox();return t.forEach(h=>{const m=e.getValue(h);m&&m.jump(c[h]),i[h]=vo[h](d,l)}),i},Mw=(i,e,t={},s={})=>{e={...e},s={...s};const o=Object.keys(e).filter(V_);let l=[],u=!1;const c=[];if(o.forEach(d=>{const h=i.getValue(d);if(!i.hasValue(d))return;let m=t[d],g=ra(m);const v=e[d];let S;if(xu(v)){const E=v.length,M=v[0]===null?1:0;m=v[M],g=ra(m);for(let x=M;x<E&&v[x]!==null;x++)S?th(ra(v[x])===S):S=ra(v[x])}else S=ra(v);if(g!==S)if($g(g)&&$g(S)){const E=h.get();typeof E=="string"&&h.set(parseFloat(E)),typeof v=="string"?e[d]=parseFloat(v):Array.isArray(v)&&S===Ze&&(e[d]=v.map(parseFloat))}else g?.transform&&S?.transform&&(m===0||v===0)?m===0?h.set(S.transform(m)):e[d]=g.transform(v):(u||(l=xw(i),u=!0),c.push(d),s[d]=s[d]!==void 0?s[d]:e[d],h.jump(v))}),c.length){const d=c.indexOf("height")>=0?window.pageYOffset:null,h=Sw(e,i,c);return l.length&&l.forEach(([m,g])=>{i.getValue(m).set(g)}),i.render(),Nu&&d!==null&&window.scrollTo({top:d}),{target:h,transitionEnd:s}}else return{target:e,transitionEnd:s}};function Ew(i,e,t,s){return vw(e)?Mw(i,e,t,s):{target:e,transitionEnd:s}}const Tw=(i,e,t,s)=>{const o=mw(i,e,s);return e=o.target,s=o.transitionEnd,Ew(i,e,t,s)},Pd={current:null},z_={current:!1};function ww(){if(z_.current=!0,!!Nu)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),e=()=>Pd.current=i.matches;i.addListener(e),e()}else Pd.current=!1}function Aw(i,e,t){const{willChange:s}=e;for(const o in e){const l=e[o],u=t[o];if(Hn(l))i.addValue(o,l),Tu(s)&&s.add(o);else if(Hn(u))i.addValue(o,go(l,{owner:i})),Tu(s)&&s.remove(o);else if(u!==l)if(i.hasValue(o)){const c=i.getValue(o);!c.hasAnimated&&c.set(l)}else{const c=i.getStaticValue(o);i.addValue(o,go(c!==void 0?c:l,{owner:i}))}}for(const o in t)e[o]===void 0&&i.removeValue(o);return e}const Qg=new WeakMap,H_=Object.keys(ya),Cw=H_.length,Jg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Rw=qd.length;class bw{constructor({parent:e,props:t,presenceContext:s,reducedMotionConfig:o,visualState:l},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Nt.render(this.render,!1,!0);const{latestValues:c,renderState:d}=l;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=d,this.parent=e,this.props=t,this.presenceContext=s,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.isControllingVariants=Iu(t),this.isVariantNode=Av(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...m}=this.scrapeMotionValuesFromProps(t,{});for(const g in m){const v=m[g];c[g]!==void 0&&Hn(v)&&(v.set(c[g],!1),Tu(h)&&h.add(g))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,Qg.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,s)=>this.bindToMotionValue(s,t)),z_.current||ww(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Pd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Qg.delete(this.current),this.projection&&this.projection.unmount(),Qi(this.notifyUpdate),Qi(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const s=Ss.has(e),o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Nt.update(this.notifyUpdate,!1,!0),s&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{o(),l()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...t},s,o,l){let u,c;for(let d=0;d<Cw;d++){const h=H_[d],{isEnabled:m,Feature:g,ProjectionNode:v,MeasureLayout:S}=ya[h];v&&(u=v),m(t)&&(!this.features[h]&&g&&(this.features[h]=new g(this)),S&&(c=S))}if((this.type==="html"||this.type==="svg")&&!this.projection&&u){this.projection=new u(this.latestValues,this.parent&&this.parent.projection);const{layoutId:d,layout:h,drag:m,dragConstraints:g,layoutScroll:v,layoutRoot:S}=t;this.projection.setOptions({layoutId:d,layout:h,alwaysMeasureLayout:!!m||g&&lo(g),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof h=="string"?h:"both",initialPromotionConfig:l,layoutScroll:v,layoutRoot:S})}return c}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Yt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e,t=!0){return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let s=0;s<Jg.length;s++){const o=Jg[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l=e["on"+o];l&&(this.propEventSubscriptions[o]=this.on(o,l))}this.prevMotionValues=Aw(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const s=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(s.initial=this.props.initial),s}const t={};for(let s=0;s<Rw;s++){const o=qd[s],l=this.props[o];(_a(l)||l===!1)&&(t[o]=l)}return t}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let s=this.values.get(e);return s===void 0&&t!==void 0&&(s=go(t,{owner:this}),this.addValue(e,s)),s}readValue(e){var t;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(t=this.getBaseTargetFromProps(this.props,e))!==null&&t!==void 0?t:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:s}=this.props,o=typeof s=="string"||typeof s=="object"?(t=eh(this.props,s))===null||t===void 0?void 0:t[e]:void 0;if(s&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Hn(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ch),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class G_ extends bw{sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:s}){delete t[e],delete s[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:t,...s},{transformValues:o},l){let u=XE(s,e||{},this);if(o&&(t&&(t=o(t)),s&&(s=o(s)),u&&(u=o(u))),l){WE(this,s,u);const c=Tw(this,s,u,t);t=c.transitionEnd,s=c.target}return{transition:e,transitionEnd:t,...s}}}function Pw(i){return window.getComputedStyle(i)}class Lw extends G_{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(Ss.has(t)){const s=sh(t);return s&&s.default||0}else{const s=Pw(e),o=(Lv(t)?s.getPropertyValue(t):s[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return P_(e,t)}build(e,t,s,o){$d(e,t,s,o.transformTemplate)}scrapeMotionValuesFromProps(e,t){return Jd(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Hn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}renderInstance(e,t,s,o){Ov(e,t,s,o)}}class Dw extends G_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ss.has(t)){const s=sh(t);return s&&s.default||0}return t=kv.has(t)?t:jd(t),e.getAttribute(t)}measureInstanceViewportBox(){return Yt()}scrapeMotionValuesFromProps(e,t){return Vv(e,t)}build(e,t,s,o){Zd(e,t,s,this.isSVGTag,o.transformTemplate)}renderInstance(e,t,s,o){Bv(e,t,s,o)}mount(e){this.isSVGTag=Qd(e.tagName),super.mount(e)}}const Nw=(i,e)=>Yd(i)?new Dw(e,{enableHardwareAcceleration:!1}):new Lw(e,{enableHardwareAcceleration:!0}),Uw={layout:{ProjectionNode:B_,MeasureLayout:D_}},Iw={...aT,...CM,...dw,...Uw},on=IS((i,e)=>pM(i,e,Iw,Nw));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="158",Fw=0,e0=1,Ow=2,W_=1,kw=2,Xi=3,kr=0,Vn=1,qi=2,Nr=0,po=1,Ld=2,t0=3,n0=4,Bw=5,fs=100,Vw=101,zw=102,i0=103,r0=104,Hw=200,Gw=201,Ww=202,jw=203,Dd=204,Nd=205,Xw=206,qw=207,Yw=208,$w=209,Kw=210,Zw=211,Qw=212,Jw=213,e1=214,t1=0,n1=1,i1=2,Au=3,r1=4,s1=5,o1=6,a1=7,j_=0,l1=1,u1=2,Ur=0,c1=1,f1=2,d1=3,h1=4,p1=5,X_=300,_o=301,yo=302,Ud=303,Id=304,Bu=306,Fd=1e3,Si=1001,Od=1002,Pn=1003,s0=1004,zf=1005,ai=1006,m1=1007,Sa=1008,Ir=1009,g1=1010,v1=1011,dh=1012,q_=1013,br=1014,Pr=1015,Ma=1016,Y_=1017,$_=1018,ms=1020,_1=1021,Mi=1023,y1=1024,x1=1025,gs=1026,xo=1027,S1=1028,K_=1029,M1=1030,Z_=1031,Q_=1033,Hf=33776,Gf=33777,Wf=33778,jf=33779,o0=35840,a0=35841,l0=35842,u0=35843,E1=36196,c0=37492,f0=37496,d0=37808,h0=37809,p0=37810,m0=37811,g0=37812,v0=37813,_0=37814,y0=37815,x0=37816,S0=37817,M0=37818,E0=37819,T0=37820,w0=37821,Xf=36492,A0=36494,C0=36495,T1=36283,R0=36284,b0=36285,P0=36286,J_=3e3,vs=3001,w1=3200,A1=3201,C1=0,R1=1,ui="",cn="srgb",Ji="srgb-linear",hh="display-p3",Vu="display-p3-linear",Cu="linear",Dt="srgb",Ru="rec709",bu="p3",Xs=7680,L0=519,b1=512,P1=513,L1=514,D1=515,N1=516,U1=517,I1=518,F1=519,D0=35044,N0="300 es",kd=1035,$i=2e3,Pu=2001;class Mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,Bd=180/Math.PI;function Ra(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]).toLowerCase()}function Bn(i,e,t){return Math.max(e,Math.min(t,i))}function O1(i,e){return(i%e+e)%e}function Yf(i,e,t){return(1-t)*i+t*e}function U0(i){return(i&i-1)===0&&i!==0}function Vd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Bn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,s,o,l,u,c,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,c,d,h)}set(e,t,s,o,l,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],c=s[3],d=s[6],h=s[1],m=s[4],g=s[7],v=s[2],S=s[5],E=s[8],M=o[0],x=o[3],y=o[6],L=o[1],A=o[4],b=o[7],N=o[2],B=o[5],O=o[8];return l[0]=u*M+c*L+d*N,l[3]=u*x+c*A+d*B,l[6]=u*y+c*b+d*O,l[1]=h*M+m*L+g*N,l[4]=h*x+m*A+g*B,l[7]=h*y+m*b+g*O,l[2]=v*M+S*L+E*N,l[5]=v*x+S*A+E*B,l[8]=v*y+S*b+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-s*l*m+s*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=m*u-c*h,v=c*d-m*l,S=h*l-u*d,E=t*g+s*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*h-m*s)*M,e[2]=(c*s-o*u)*M,e[3]=v*M,e[4]=(m*t-o*d)*M,e[5]=(o*l-c*t)*M,e[6]=S*M,e[7]=(s*d-h*t)*M,e[8]=(u*t-s*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(s*d,s*h,-s*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply($f.makeScale(e,t)),this}rotate(e){return this.premultiply($f.makeRotation(-e)),this}translate(e,t){return this.premultiply($f.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new ht;function ey(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function k1(){const i=Lu("canvas");return i.style.display="block",i}const I0={};function va(i){i in I0||(I0[i]=!0,console.warn(i))}const F0=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),O0=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[Ji]:{transfer:Cu,primaries:Ru,toReference:i=>i,fromReference:i=>i},[cn]:{transfer:Dt,primaries:Ru,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vu]:{transfer:Cu,primaries:bu,toReference:i=>i.applyMatrix3(O0),fromReference:i=>i.applyMatrix3(F0)},[hh]:{transfer:Dt,primaries:bu,toReference:i=>i.convertSRGBToLinear().applyMatrix3(O0),fromReference:i=>i.applyMatrix3(F0).convertLinearToSRGB()}},B1=new Set([Ji,Vu]),Tt={enabled:!0,_workingColorSpace:Ji,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!B1.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const s=Wl[e].toReference,o=Wl[t].fromReference;return o(s(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Wl[i].primaries},getTransfer:function(i){return i===ui?Cu:Wl[i].transfer}};function mo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qs;class ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=Lu("canvas")),qs.width=e.width,qs.height=e.height;const s=qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=mo(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(mo(t[s]/255)*255):t[s]=mo(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V1=0;class ny{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Ra(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(Zf(o[u].image)):l.push(Zf(o[u]))}else l=Zf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Zf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ty.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z1=0;class $n extends Mo{constructor(e=$n.DEFAULT_IMAGE,t=$n.DEFAULT_MAPPING,s=Si,o=Si,l=ai,u=Sa,c=Mi,d=Ir,h=$n.DEFAULT_ANISOTROPY,m=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Ra(),this.name="",this.source=new ny(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===vs?cn:ui),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fd:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fd:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===cn?vs:J_}set encoding(e){va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vs?cn:ui}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=X_;$n.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,t=0,s=0,o=1){fn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],S=d[5],E=d[9],M=d[2],x=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,b=(S+1)/2,N=(y+1)/2,B=(m+v)/4,O=(g+M)/4,$=(E+x)/4;return A>b&&A>N?A<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(A),o=B/s,l=O/s):b>N?b<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),s=B/o,l=$/o):N<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),s=O/l,o=$/l),this.set(s,o,l,t),this}let L=Math.sqrt((x-E)*(x-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(g-M)/L,this.z=(v-m)/L,this.w=Math.acos((h+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H1 extends Mo{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t);const o={width:e,height:t,depth:1};s.encoding!==void 0&&(va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===vs?cn:ui),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new $n(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ny(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends H1{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class iy extends $n{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class G1 extends $n{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ba{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,c){let d=s[o+0],h=s[o+1],m=s[o+2],g=s[o+3];const v=l[u+0],S=l[u+1],E=l[u+2],M=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(g!==M||d!==v||h!==S||m!==E){let x=1-c;const y=d*v+h*S+m*E+g*M,L=y>=0?1:-1,A=1-y*y;if(A>Number.EPSILON){const N=Math.sqrt(A),B=Math.atan2(N,y*L);x=Math.sin(x*B)/N,c=Math.sin(c*B)/N}const b=c*L;if(d=d*x+v*b,h=h*x+S*b,m=m*x+E*b,g=g*x+M*b,x===1-c){const N=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=N,h*=N,m*=N,g*=N}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,o,l,u){const c=s[o],d=s[o+1],h=s[o+2],m=s[o+3],g=l[u],v=l[u+1],S=l[u+2],E=l[u+3];return e[t]=c*E+m*g+d*S-h*v,e[t+1]=d*E+m*v+h*g-c*S,e[t+2]=h*E+m*S+c*v-d*g,e[t+3]=m*E-c*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const s=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(s/2),m=c(o/2),g=c(l/2),v=d(s/2),S=d(o/2),E=d(l/2);switch(u){case"XYZ":this._x=v*m*g+h*S*E,this._y=h*S*g-v*m*E,this._z=h*m*E+v*S*g,this._w=h*m*g-v*S*E;break;case"YXZ":this._x=v*m*g+h*S*E,this._y=h*S*g-v*m*E,this._z=h*m*E-v*S*g,this._w=h*m*g+v*S*E;break;case"ZXY":this._x=v*m*g-h*S*E,this._y=h*S*g+v*m*E,this._z=h*m*E+v*S*g,this._w=h*m*g-v*S*E;break;case"ZYX":this._x=v*m*g-h*S*E,this._y=h*S*g+v*m*E,this._z=h*m*E-v*S*g,this._w=h*m*g+v*S*E;break;case"YZX":this._x=v*m*g+h*S*E,this._y=h*S*g+v*m*E,this._z=h*m*E-v*S*g,this._w=h*m*g-v*S*E;break;case"XZY":this._x=v*m*g-h*S*E,this._y=h*S*g-v*m*E,this._z=h*m*E+v*S*g,this._w=h*m*g+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=s+c+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(s>c&&s>g){const S=2*Math.sqrt(1+s-c-g);this._w=(m-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-s-g);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-s-c);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=s*m+u*c+o*h-l*d,this._y=o*m+u*d+l*c-s*h,this._z=l*m+u*h+s*d-o*c,this._w=u*m-s*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+s*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=s,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*g+this._w*v,this._x=s*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),s*Math.sin(l),s*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,s=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(k0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(k0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*s),m=2*(c*t-l*o),g=2*(l*s-u*t);return this.x=t+d*h+u*g-c*m,this.y=s+d*m+c*h-l*g,this.z=o+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-s*d,this.z=s*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Bn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new ne,k0=new ba;class Pa{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),jl.copy(s.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Xl.subVectors(this.max,aa),Ys.subVectors(e.a,aa),$s.subVectors(e.b,aa),Ks.subVectors(e.c,aa),Mr.subVectors($s,Ys),Er.subVectors(Ks,$s),ns.subVectors(Ys,Ks);let t=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-ns.z,ns.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,ns.z,0,-ns.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-ns.y,ns.x,0];return!Jf(t,Ys,$s,Ks,Xl)||(t=[1,0,0,0,1,0,0,0,1],!Jf(t,Ys,$s,Ks,Xl))?!1:(ql.crossVectors(Mr,Er),t=[ql.x,ql.y,ql.z],Jf(t,Ys,$s,Ks,Xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],vi=new ne,jl=new Pa,Ys=new ne,$s=new ne,Ks=new ne,Mr=new ne,Er=new ne,ns=new ne,aa=new ne,Xl=new ne,ql=new ne,is=new ne;function Jf(i,e,t,s,o){for(let l=0,u=i.length-3;l<=u;l+=3){is.fromArray(i,l);const c=o.x*Math.abs(is.x)+o.y*Math.abs(is.y)+o.z*Math.abs(is.z),d=e.dot(is),h=t.dot(is),m=s.dot(is);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const W1=new Pa,la=new ne,ed=new ne;class zu{constructor(e=new ne,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):W1.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(la,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(ed)),this.expandByPoint(la.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new ne,td=new ne,Yl=new ne,Tr=new ne,nd=new ne,$l=new ne,id=new ne;class ry{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){td.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(td);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Yl),c=Tr.dot(this.direction),d=-Tr.dot(Yl),h=Tr.lengthSq(),m=Math.abs(1-u*u);let g,v,S,E;if(m>0)if(g=u*d-c,v=u*c-d,E=l*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,S=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v<=-E?(g=Math.max(0,-(-u*l+c)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+h):(g=Math.max(0,-(u*l+c)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(td).addScaledVector(Yl,v),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const s=Hi.dot(this.direction),o=Hi.dot(Hi)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=s-u,d=s+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),s>d||c>o)||((c>s||s!==s)&&(s=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,s,o,l){nd.subVectors(t,e),$l.subVectors(s,e),id.crossVectors(nd,$l);let u=this.direction.dot(id),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Tr.subVectors(this.origin,e);const d=c*this.direction.dot($l.crossVectors(Tr,$l));if(d<0)return null;const h=c*this.direction.dot(nd.cross(Tr));if(h<0||d+h>u)return null;const m=-c*Tr.dot(id);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,t,s,o,l,u,c,d,h,m,g,v,S,E,M,x){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,c,d,h,m,g,v,S,E,M,x)}set(e,t,s,o,l,u,c,d,h,m,g,v,S,E,M,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=m,y[10]=g,y[14]=v,y[3]=S,y[7]=E,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Zs.setFromMatrixColumn(e,0).length(),l=1/Zs.setFromMatrixColumn(e,1).length(),u=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),c=Math.sin(s),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*m,S=u*g,E=c*m,M=c*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=S+E*h,t[5]=v-M*h,t[9]=-c*d,t[2]=M-v*h,t[6]=E+S*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,S=d*g,E=h*m,M=h*g;t[0]=v+M*c,t[4]=E*c-S,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=S*c-E,t[6]=M+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,S=d*g,E=h*m,M=h*g;t[0]=v-M*c,t[4]=-u*g,t[8]=E+S*c,t[1]=S+E*c,t[5]=u*m,t[9]=M-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,S=u*g,E=c*m,M=c*g;t[0]=d*m,t[4]=E*h-S,t[8]=v*h+M,t[1]=d*g,t[5]=M*h+v,t[9]=S*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*m,t[4]=M-v*g,t[8]=E*g+S,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=S*g+E,t[10]=v-M*g}else if(e.order==="XZY"){const v=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+M,t[5]=u*m,t[9]=S*g-E,t[2]=E*g-S,t[6]=c*m,t[10]=M*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j1,e,X1)}lookAt(e,t,s){const o=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),wr.crossVectors(s,qn),wr.lengthSq()===0&&(Math.abs(s.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),wr.crossVectors(s,qn)),wr.normalize(),Kl.crossVectors(qn,wr),o[0]=wr.x,o[4]=Kl.x,o[8]=qn.x,o[1]=wr.y,o[5]=Kl.y,o[9]=qn.y,o[2]=wr.z,o[6]=Kl.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],c=s[4],d=s[8],h=s[12],m=s[1],g=s[5],v=s[9],S=s[13],E=s[2],M=s[6],x=s[10],y=s[14],L=s[3],A=s[7],b=s[11],N=s[15],B=o[0],O=o[4],$=o[8],R=o[12],I=o[1],le=o[5],ue=o[9],fe=o[13],V=o[2],ie=o[6],se=o[10],J=o[14],q=o[3],K=o[7],G=o[11],w=o[15];return l[0]=u*B+c*I+d*V+h*q,l[4]=u*O+c*le+d*ie+h*K,l[8]=u*$+c*ue+d*se+h*G,l[12]=u*R+c*fe+d*J+h*w,l[1]=m*B+g*I+v*V+S*q,l[5]=m*O+g*le+v*ie+S*K,l[9]=m*$+g*ue+v*se+S*G,l[13]=m*R+g*fe+v*J+S*w,l[2]=E*B+M*I+x*V+y*q,l[6]=E*O+M*le+x*ie+y*K,l[10]=E*$+M*ue+x*se+y*G,l[14]=E*R+M*fe+x*J+y*w,l[3]=L*B+A*I+b*V+N*q,l[7]=L*O+A*le+b*ie+N*K,l[11]=L*$+A*ue+b*se+N*G,l[15]=L*R+A*fe+b*J+N*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],S=e[14],E=e[3],M=e[7],x=e[11],y=e[15];return E*(+l*d*g-o*h*g-l*c*v+s*h*v+o*c*S-s*d*S)+M*(+t*d*S-t*h*v+l*u*v-o*u*S+o*h*m-l*d*m)+x*(+t*h*g-t*c*S-l*u*g+s*u*S+l*c*m-s*h*m)+y*(-o*c*m-t*d*g+t*c*v+o*u*g-s*u*v+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],S=e[11],E=e[12],M=e[13],x=e[14],y=e[15],L=g*x*h-M*v*h+M*d*S-c*x*S-g*d*y+c*v*y,A=E*v*h-m*x*h-E*d*S+u*x*S+m*d*y-u*v*y,b=m*M*h-E*g*h+E*c*S-u*M*S-m*c*y+u*g*y,N=E*g*d-m*M*d-E*c*v+u*M*v+m*c*x-u*g*x,B=t*L+s*A+o*b+l*N;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=L*O,e[1]=(M*v*l-g*x*l-M*o*S+s*x*S+g*o*y-s*v*y)*O,e[2]=(c*x*l-M*d*l+M*o*h-s*x*h-c*o*y+s*d*y)*O,e[3]=(g*d*l-c*v*l-g*o*h+s*v*h+c*o*S-s*d*S)*O,e[4]=A*O,e[5]=(m*x*l-E*v*l+E*o*S-t*x*S-m*o*y+t*v*y)*O,e[6]=(E*d*l-u*x*l-E*o*h+t*x*h+u*o*y-t*d*y)*O,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*S+t*d*S)*O,e[8]=b*O,e[9]=(E*g*l-m*M*l-E*s*S+t*M*S+m*s*y-t*g*y)*O,e[10]=(u*M*l-E*c*l+E*s*h-t*M*h-u*s*y+t*c*y)*O,e[11]=(m*c*l-u*g*l-m*s*h+t*g*h+u*s*S-t*c*S)*O,e[12]=N*O,e[13]=(m*M*o-E*g*o+E*s*v-t*M*v-m*s*x+t*g*x)*O,e[14]=(E*c*o-u*M*o-E*s*d+t*M*d+u*s*x-t*c*x)*O,e[15]=(u*g*o-m*c*o+m*s*d-t*g*d-u*s*v+t*c*v)*O,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,c=e.y,d=e.z,h=l*u,m=l*c;return this.set(h*u+s,h*c-o*d,h*d+o*c,0,h*c+o*d,m*c+s,m*d-o*u,0,h*d-o*c,m*d+o*u,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,m=u+u,g=c+c,v=l*h,S=l*m,E=l*g,M=u*m,x=u*g,y=c*g,L=d*h,A=d*m,b=d*g,N=s.x,B=s.y,O=s.z;return o[0]=(1-(M+y))*N,o[1]=(S+b)*N,o[2]=(E-A)*N,o[3]=0,o[4]=(S-b)*B,o[5]=(1-(v+y))*B,o[6]=(x+L)*B,o[7]=0,o[8]=(E+A)*O,o[9]=(x-L)*O,o[10]=(1-(v+M))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Zs.set(o[0],o[1],o[2]).length();const u=Zs.set(o[4],o[5],o[6]).length(),c=Zs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],_i.copy(this);const h=1/l,m=1/u,g=1/c;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=m,_i.elements[5]*=m,_i.elements[6]*=m,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,t.setFromRotationMatrix(_i),s.x=l,s.y=u,s.z=c,this}makePerspective(e,t,s,o,l,u,c=$i){const d=this.elements,h=2*l/(t-e),m=2*l/(s-o),g=(t+e)/(t-e),v=(s+o)/(s-o);let S,E;if(c===$i)S=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(c===Pu)S=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,o,l,u,c=$i){const d=this.elements,h=1/(t-e),m=1/(s-o),g=1/(u-l),v=(t+e)*h,S=(s+o)*m;let E,M;if(c===$i)E=(u+l)*g,M=-2*g;else if(c===Pu)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Zs=new ne,_i=new an,j1=new ne(0,0,0),X1=new ne(1,1,1),wr=new ne,Kl=new ne,qn=new ne,B0=new an,V0=new ba;class Hu{constructor(e=0,t=0,s=0,o=Hu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],m=o[9],g=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Bn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return B0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B0,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return V0.setFromEuler(this),this.setFromQuaternion(V0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hu.DEFAULT_ORDER="XYZ";class sy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q1=0;const z0=new ne,Qs=new ba,Gi=new an,Zl=new ne,ua=new ne,Y1=new ne,$1=new ba,H0=new ne(1,0,0),G0=new ne(0,1,0),W0=new ne(0,0,1),K1={type:"added"},Z1={type:"removed"};class zn extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ne,t=new Hu,s=new ba,o=new ne(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new ht}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new sy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(H0,e)}rotateY(e){return this.rotateOnAxis(G0,e)}rotateZ(e){return this.rotateOnAxis(W0,e)}translateOnAxis(e,t){return z0.copy(e).applyQuaternion(this.quaternion),this.position.add(z0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(H0,e)}translateY(e){return this.translateOnAxis(G0,e)}translateZ(e){return this.translateOnAxis(W0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Zl.copy(e):Zl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(ua,Zl,this.up):Gi.lookAt(Zl,ua,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Qs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(K1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t){let s=[];this[e]===t&&s.push(this);for(let o=0,l=this.children.length;o<l;o++){const u=this.children[o].getObjectsByProperty(e,t);u.length>0&&(s=s.concat(u))}return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,Y1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,$1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++){const c=o[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);c.length>0&&(s.geometries=c),d.length>0&&(s.materials=d),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}zn.DEFAULT_UP=new ne(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new ne,Wi=new ne,rd=new ne,ji=new ne,Js=new ne,eo=new ne,j0=new ne,sd=new ne,od=new ne,ad=new ne;let Ql=!1;class xi{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),yi.subVectors(e,t),o.cross(yi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){yi.subVectors(o,t),Wi.subVectors(s,t),rd.subVectors(e,t);const u=yi.dot(yi),c=yi.dot(Wi),d=yi.dot(rd),h=Wi.dot(Wi),m=Wi.dot(rd),g=u*h-c*c;if(g===0)return l.set(-2,-1,-1);const v=1/g,S=(h*d-c*m)*v,E=(u*m-c*d)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,ji),ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getUV(e,t,s,o,l,u,c,d){return Ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ql=!0),this.getInterpolation(e,t,s,o,l,u,c,d)}static getInterpolation(e,t,s,o,l,u,c,d){return this.getBarycoord(e,t,s,o,ji),d.setScalar(0),d.addScaledVector(l,ji.x),d.addScaledVector(u,ji.y),d.addScaledVector(c,ji.z),d}static isFrontFacing(e,t,s,o){return yi.subVectors(s,t),Wi.subVectors(e,t),yi.cross(Wi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),yi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,s,o,l){return Ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ql=!0),xi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}getInterpolation(e,t,s,o,l){return xi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,c;Js.subVectors(o,s),eo.subVectors(l,s),sd.subVectors(e,s);const d=Js.dot(sd),h=eo.dot(sd);if(d<=0&&h<=0)return t.copy(s);od.subVectors(e,o);const m=Js.dot(od),g=eo.dot(od);if(m>=0&&g<=m)return t.copy(o);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(s).addScaledVector(Js,u);ad.subVectors(e,l);const S=Js.dot(ad),E=eo.dot(ad);if(E>=0&&S<=E)return t.copy(l);const M=S*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(s).addScaledVector(eo,c);const x=m*E-S*g;if(x<=0&&g-m>=0&&S-E>=0)return j0.subVectors(l,o),c=(g-m)/(g-m+(S-E)),t.copy(o).addScaledVector(j0,c);const y=1/(x+M+v);return u=M*y,c=v*y,t.copy(s).addScaledVector(Js,u).addScaledVector(eo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function ld(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class St{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Tt.workingColorSpace){if(e=O1(e,1),t=Bn(t,0,1),s=Bn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=ld(u,l,e+1/3),this.g=ld(u,l,e),this.b=ld(u,l,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,t=cn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const s=oy[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}copyLinearToSRGB(e){return this.r=Kf(e.r),this.g=Kf(e.g),this.b=Kf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return Tt.fromWorkingColorSpace(_n.copy(this),e),Math.round(Bn(_n.r*255,0,255))*65536+Math.round(Bn(_n.g*255,0,255))*256+Math.round(Bn(_n.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(_n.copy(this),t);const s=_n.r,o=_n.g,l=_n.b,u=Math.max(s,o,l),c=Math.min(s,o,l);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=m<=.5?g/(u+c):g/(2-u-c),u){case s:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-s)/g+2;break;case l:d=(s-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=cn){Tt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,s=_n.g,o=_n.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Jl);const s=Yf(Ar.h,Jl.h,t),o=Yf(Ar.s,Jl.s,t),l=Yf(Ar.l,Jl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new St;St.NAMES=oy;let Q1=0;class La extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=po,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Nd,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(s.blending=this.blending),this.side!==kr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dd&&(s.blendSrc=this.blendSrc),this.blendDst!==Nd&&(s.blendDst=this.blendDst),this.blendEquation!==fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Au&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ay extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new ne,eu=new wt;class ci{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=D0,this.updateRange={offset:0,count:-1},this.gpuType=Pr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)eu.fromBufferAttribute(this,t),eu.applyMatrix3(e),this.setXY(t,eu.x,eu.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=oa(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),s=kn(s,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),s=kn(s,this.array),o=kn(o,this.array),l=kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==D0&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ly extends ci{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class uy extends ci{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class _s extends ci{constructor(e,t,s){super(new Float32Array(e),t,s)}}let J1=0;const si=new an,ud=new zn,to=new ne,Yn=new Pa,ca=new Pa,sn=new ne;class er extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ey(e)?uy:ly)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ht().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,s){return si.makeTranslation(e,t,s),this.applyMatrix4(si),this}scale(e,t,s){return si.makeScale(e,t,s),this.applyMatrix4(si),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new _s(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];ca.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(Yn.min,ca.min),Yn.expandByPoint(sn),sn.addVectors(Yn.max,ca.max),Yn.expandByPoint(sn)):(Yn.expandByPoint(ca.min),Yn.expandByPoint(ca.max))}Yn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)sn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(sn));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)sn.fromBufferAttribute(c,h),d&&(to.fromBufferAttribute(e,h),sn.add(to)),o=Math.max(o,s.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=t.position.array,l=t.normal.array,u=t.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,h=[],m=[];for(let I=0;I<c;I++)h[I]=new ne,m[I]=new ne;const g=new ne,v=new ne,S=new ne,E=new wt,M=new wt,x=new wt,y=new ne,L=new ne;function A(I,le,ue){g.fromArray(o,I*3),v.fromArray(o,le*3),S.fromArray(o,ue*3),E.fromArray(u,I*2),M.fromArray(u,le*2),x.fromArray(u,ue*2),v.sub(g),S.sub(g),M.sub(E),x.sub(E);const fe=1/(M.x*x.y-x.x*M.y);isFinite(fe)&&(y.copy(v).multiplyScalar(x.y).addScaledVector(S,-M.y).multiplyScalar(fe),L.copy(S).multiplyScalar(M.x).addScaledVector(v,-x.x).multiplyScalar(fe),h[I].add(y),h[le].add(y),h[ue].add(y),m[I].add(L),m[le].add(L),m[ue].add(L))}let b=this.groups;b.length===0&&(b=[{start:0,count:s.length}]);for(let I=0,le=b.length;I<le;++I){const ue=b[I],fe=ue.start,V=ue.count;for(let ie=fe,se=fe+V;ie<se;ie+=3)A(s[ie+0],s[ie+1],s[ie+2])}const N=new ne,B=new ne,O=new ne,$=new ne;function R(I){O.fromArray(l,I*3),$.copy(O);const le=h[I];N.copy(le),N.sub(O.multiplyScalar(O.dot(le))).normalize(),B.crossVectors($,le);const fe=B.dot(m[I])<0?-1:1;d[I*4]=N.x,d[I*4+1]=N.y,d[I*4+2]=N.z,d[I*4+3]=fe}for(let I=0,le=b.length;I<le;++I){const ue=b[I],fe=ue.start,V=ue.count;for(let ie=fe,se=fe+V;ie<se;ie+=3)R(s[ie+0]),R(s[ie+1]),R(s[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const o=new ne,l=new ne,u=new ne,c=new ne,d=new ne,h=new ne,m=new ne,g=new ne;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),M=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),u.fromBufferAttribute(t,x),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),c.fromBufferAttribute(s,E),d.fromBufferAttribute(s,M),h.fromBufferAttribute(s,x),c.add(m),d.add(m),h.add(m),s.setXYZ(E,c.x,c.y,c.z),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(x,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),s.setXYZ(v+0,m.x,m.y,m.z),s.setXYZ(v+1,m.x,m.y,m.z),s.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,g=c.normalized,v=new h.constructor(d.length*m);let S=0,E=0;for(let M=0,x=d.length;M<x;M++){c.isInterleavedBufferAttribute?S=d[M]*c.data.stride+c.offset:S=d[M]*m;for(let y=0;y<m;y++)v[E++]=h[S++]}return new ci(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new er,s=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,s);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let m=0,g=h.length;m<g;m++){const v=h[m],S=e(v,s);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const h=s[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X0=new an,rs=new ry,tu=new zu,q0=new ne,no=new ne,io=new ne,ro=new ne,cd=new ne,nu=new ne,iu=new wt,ru=new wt,su=new wt,Y0=new ne,$0=new ne,K0=new ne,ou=new ne,au=new ne;class Lr extends zn{constructor(e=new er,t=new ay){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){nu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=c[d],g=l[d];m!==0&&(cd.fromBufferAttribute(g,e),u?nu.addScaledVector(cd,m):nu.addScaledVector(cd.sub(t),m))}t.add(nu)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),tu.copy(s.boundingSphere),tu.applyMatrix4(l),rs.copy(e.ray).recast(e.near),!(tu.containsPoint(rs.origin)===!1&&(rs.intersectSphere(tu,q0)===null||rs.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&(X0.copy(l).invert(),rs.copy(e.ray).applyMatrix4(X0),!(s.boundingBox!==null&&rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=u[x.materialIndex],L=Math.max(x.start,S.start),A=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let b=L,N=A;b<N;b+=3){const B=c.getX(b),O=c.getX(b+1),$=c.getX(b+2);o=lu(this,y,e,s,h,m,g,B,O,$),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(c.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const L=c.getX(x),A=c.getX(x+1),b=c.getX(x+2);o=lu(this,u,e,s,h,m,g,L,A,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=u[x.materialIndex],L=Math.max(x.start,S.start),A=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let b=L,N=A;b<N;b+=3){const B=b,O=b+1,$=b+2;o=lu(this,y,e,s,h,m,g,B,O,$),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const L=x,A=x+1,b=x+2;o=lu(this,u,e,s,h,m,g,L,A,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function eA(i,e,t,s,o,l,u,c){let d;if(e.side===Vn?d=s.intersectTriangle(u,l,o,!0,c):d=s.intersectTriangle(o,l,u,e.side===kr,c),d===null)return null;au.copy(c),au.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(au);return h<t.near||h>t.far?null:{distance:h,point:au.clone(),object:i}}function lu(i,e,t,s,o,l,u,c,d,h){i.getVertexPosition(c,no),i.getVertexPosition(d,io),i.getVertexPosition(h,ro);const m=eA(i,e,t,s,no,io,ro,ou);if(m){o&&(iu.fromBufferAttribute(o,c),ru.fromBufferAttribute(o,d),su.fromBufferAttribute(o,h),m.uv=xi.getInterpolation(ou,no,io,ro,iu,ru,su,new wt)),l&&(iu.fromBufferAttribute(l,c),ru.fromBufferAttribute(l,d),su.fromBufferAttribute(l,h),m.uv1=xi.getInterpolation(ou,no,io,ro,iu,ru,su,new wt),m.uv2=m.uv1),u&&(Y0.fromBufferAttribute(u,c),$0.fromBufferAttribute(u,d),K0.fromBufferAttribute(u,h),m.normal=xi.getInterpolation(ou,no,io,ro,Y0,$0,K0,new ne),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new ne,materialIndex:0};xi.getNormal(no,io,ro,g.normal),m.face=g}return m}class Da extends er{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let v=0,S=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(d),this.setAttribute("position",new _s(h,3)),this.setAttribute("normal",new _s(m,3)),this.setAttribute("uv",new _s(g,2));function E(M,x,y,L,A,b,N,B,O,$,R){const I=b/O,le=N/$,ue=b/2,fe=N/2,V=B/2,ie=O+1,se=$+1;let J=0,q=0;const K=new ne;for(let G=0;G<se;G++){const w=G*le-fe;for(let F=0;F<ie;F++){const ce=F*I-ue;K[M]=ce*L,K[x]=w*A,K[y]=V,h.push(K.x,K.y,K.z),K[M]=0,K[x]=0,K[y]=B>0?1:-1,m.push(K.x,K.y,K.z),g.push(F/O),g.push(1-G/$),J+=1}}for(let G=0;G<$;G++)for(let w=0;w<O;w++){const F=v+w+ie*G,ce=v+w+ie*(G+1),de=v+(w+1)+ie*(G+1),me=v+(w+1)+ie*G;d.push(F,ce,me),d.push(ce,de,me),q+=6}c.addGroup(S,q,R),S+=q,v+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Rn(i){const e={};for(let t=0;t<i.length;t++){const s=So(i[t]);for(const o in s)e[o]=s[o]}return e}function tA(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cy(i){return i.getRenderTarget()===null?i.outputColorSpace:Tt.workingColorSpace}const nA={clone:So,merge:Rn};var iA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iA,this.fragmentShader=rA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=tA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class fy extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class li extends fy{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qf*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*s/h,o*=u.width/d,s*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class sA extends zn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new li(so,oo,e,t);o.layers=this.layers,this.add(o);const l=new li(so,oo,e,t);l.layers=this.layers,this.add(l);const u=new li(so,oo,e,t);u.layers=this.layers,this.add(u);const c=new li(so,oo,e,t);c.layers=this.layers,this.add(c);const d=new li(so,oo,e,t);d.layers=this.layers,this.add(d);const h=new li(so,oo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Pu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,u),e.setRenderTarget(s,2,o),e.render(t,c),e.setRenderTarget(s,3,o),e.render(t,d),e.setRenderTarget(s,4,o),e.render(t,h),s.texture.generateMipmaps=M,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(g,v,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class dy extends $n{constructor(e,t,s,o,l,u,c,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:_o,super(e,t,s,o,l,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oA extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];t.encoding!==void 0&&(va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vs?cn:ui),this.texture=new dy(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Da(5,5,5),l=new xs({name:"CubemapFromEquirect",uniforms:So(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Nr});l.uniforms.tEquirect.value=t;const u=new Lr(o,l),c=t.minFilter;return t.minFilter===Sa&&(t.minFilter=ai),new sA(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}const fd=new ne,aA=new ne,lA=new ht;class us{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=fd.subVectors(s,t).cross(aA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(fd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||lA.getNormalMatrix(e),o=this.coplanarPoint(fd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new zu,uu=new ne;class hy{constructor(e=new us,t=new us,s=new us,o=new us,l=new us,u=new us){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(s),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=$i){const s=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],d=o[3],h=o[4],m=o[5],g=o[6],v=o[7],S=o[8],E=o[9],M=o[10],x=o[11],y=o[12],L=o[13],A=o[14],b=o[15];if(s[0].setComponents(d-l,v-h,x-S,b-y).normalize(),s[1].setComponents(d+l,v+h,x+S,b+y).normalize(),s[2].setComponents(d+u,v+m,x+E,b+L).normalize(),s[3].setComponents(d-u,v-m,x-E,b-L).normalize(),s[4].setComponents(d-c,v-g,x-M,b-A).normalize(),t===$i)s[5].setComponents(d+c,v+g,x+M,b+A).normalize();else if(t===Pu)s[5].setComponents(c,g,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(uu.x=o.normal.x>0?e.max.x:e.min.x,uu.y=o.normal.y>0?e.max.y:e.min.y,uu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function py(){let i=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function uA(i,e){const t=e.isWebGL2,s=new WeakMap;function o(h,m){const g=h.array,v=h.usage,S=i.createBuffer();i.bindBuffer(m,S),i.bufferData(m,g,v),h.onUploadCallback();let E;if(g instanceof Float32Array)E=i.FLOAT;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=i.SHORT;else if(g instanceof Uint32Array)E=i.UNSIGNED_INT;else if(g instanceof Int32Array)E=i.INT;else if(g instanceof Int8Array)E=i.BYTE;else if(g instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function l(h,m,g){const v=m.array,S=m.updateRange;i.bindBuffer(g,h),S.count===-1?i.bufferSubData(g,0,v):(t?i.bufferSubData(g,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count):i.bufferSubData(g,S.offset*v.BYTES_PER_ELEMENT,v.subarray(S.offset,S.offset+S.count)),S.count=-1),m.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),s.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=s.get(h);m&&(i.deleteBuffer(m.buffer),s.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const v=s.get(h);(!v||v.version<h.version)&&s.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=s.get(h);g===void 0?s.set(h,o(h,m)):g.version<h.version&&(l(g.buffer,h,m),g.version=h.version)}return{get:u,remove:c,update:d}}class ph extends er{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(s),d=Math.floor(o),h=c+1,m=d+1,g=e/c,v=t/d,S=[],E=[],M=[],x=[];for(let y=0;y<m;y++){const L=y*v-u;for(let A=0;A<h;A++){const b=A*g-l;E.push(b,-L,0),M.push(0,0,1),x.push(A/c),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<c;L++){const A=L+h*y,b=L+h*(y+1),N=L+1+h*(y+1),B=L+1+h*y;S.push(A,b,B),S.push(b,N,B)}this.setIndex(S),this.setAttribute("position",new _s(E,3)),this.setAttribute("normal",new _s(M,3)),this.setAttribute("uv",new _s(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.width,e.height,e.widthSegments,e.heightSegments)}}var cA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pA=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_A=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,TA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,PA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,LA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NA=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kA="gl_FragColor = linearToOutputTexel( gl_FragColor );",BA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,VA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$A=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ZA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,aC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_C=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,EC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,TC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,WC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,$C=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hR=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_R=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SR=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OR=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:cA,alphahash_pars_fragment:fA,alphamap_fragment:dA,alphamap_pars_fragment:hA,alphatest_fragment:pA,alphatest_pars_fragment:mA,aomap_fragment:gA,aomap_pars_fragment:vA,begin_vertex:_A,beginnormal_vertex:yA,bsdfs:xA,iridescence_fragment:SA,bumpmap_pars_fragment:MA,clipping_planes_fragment:EA,clipping_planes_pars_fragment:TA,clipping_planes_pars_vertex:wA,clipping_planes_vertex:AA,color_fragment:CA,color_pars_fragment:RA,color_pars_vertex:bA,color_vertex:PA,common:LA,cube_uv_reflection_fragment:DA,defaultnormal_vertex:NA,displacementmap_pars_vertex:UA,displacementmap_vertex:IA,emissivemap_fragment:FA,emissivemap_pars_fragment:OA,colorspace_fragment:kA,colorspace_pars_fragment:BA,envmap_fragment:VA,envmap_common_pars_fragment:zA,envmap_pars_fragment:HA,envmap_pars_vertex:GA,envmap_physical_pars_fragment:tC,envmap_vertex:WA,fog_vertex:jA,fog_pars_vertex:XA,fog_fragment:qA,fog_pars_fragment:YA,gradientmap_pars_fragment:$A,lightmap_fragment:KA,lightmap_pars_fragment:ZA,lights_lambert_fragment:QA,lights_lambert_pars_fragment:JA,lights_pars_begin:eC,lights_toon_fragment:nC,lights_toon_pars_fragment:iC,lights_phong_fragment:rC,lights_phong_pars_fragment:sC,lights_physical_fragment:oC,lights_physical_pars_fragment:aC,lights_fragment_begin:lC,lights_fragment_maps:uC,lights_fragment_end:cC,logdepthbuf_fragment:fC,logdepthbuf_pars_fragment:dC,logdepthbuf_pars_vertex:hC,logdepthbuf_vertex:pC,map_fragment:mC,map_pars_fragment:gC,map_particle_fragment:vC,map_particle_pars_fragment:_C,metalnessmap_fragment:yC,metalnessmap_pars_fragment:xC,morphcolor_vertex:SC,morphnormal_vertex:MC,morphtarget_pars_vertex:EC,morphtarget_vertex:TC,normal_fragment_begin:wC,normal_fragment_maps:AC,normal_pars_fragment:CC,normal_pars_vertex:RC,normal_vertex:bC,normalmap_pars_fragment:PC,clearcoat_normal_fragment_begin:LC,clearcoat_normal_fragment_maps:DC,clearcoat_pars_fragment:NC,iridescence_pars_fragment:UC,opaque_fragment:IC,packing:FC,premultiplied_alpha_fragment:OC,project_vertex:kC,dithering_fragment:BC,dithering_pars_fragment:VC,roughnessmap_fragment:zC,roughnessmap_pars_fragment:HC,shadowmap_pars_fragment:GC,shadowmap_pars_vertex:WC,shadowmap_vertex:jC,shadowmask_pars_fragment:XC,skinbase_vertex:qC,skinning_pars_vertex:YC,skinning_vertex:$C,skinnormal_vertex:KC,specularmap_fragment:ZC,specularmap_pars_fragment:QC,tonemapping_fragment:JC,tonemapping_pars_fragment:eR,transmission_fragment:tR,transmission_pars_fragment:nR,uv_pars_fragment:iR,uv_pars_vertex:rR,uv_vertex:sR,worldpos_vertex:oR,background_vert:aR,background_frag:lR,backgroundCube_vert:uR,backgroundCube_frag:cR,cube_vert:fR,cube_frag:dR,depth_vert:hR,depth_frag:pR,distanceRGBA_vert:mR,distanceRGBA_frag:gR,equirect_vert:vR,equirect_frag:_R,linedashed_vert:yR,linedashed_frag:xR,meshbasic_vert:SR,meshbasic_frag:MR,meshlambert_vert:ER,meshlambert_frag:TR,meshmatcap_vert:wR,meshmatcap_frag:AR,meshnormal_vert:CR,meshnormal_frag:RR,meshphong_vert:bR,meshphong_frag:PR,meshphysical_vert:LR,meshphysical_frag:DR,meshtoon_vert:NR,meshtoon_frag:UR,points_vert:IR,points_frag:FR,shadow_vert:OR,shadow_frag:kR,sprite_vert:BR,sprite_frag:VR},Ce={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ri={basic:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Rn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Rn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Rn([Ce.points,Ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Rn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Rn([Ce.common,Ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Rn([Ce.sprite,Ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Rn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Rn([Ce.lights,Ce.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ri.physical={uniforms:Rn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const cu={r:0,b:0,g:0};function zR(i,e,t,s,o,l,u){const c=new St(0);let d=l===!0?0:1,h,m,g=null,v=0,S=null;function E(x,y){let L=!1,A=y.isScene===!0?y.background:null;A&&A.isTexture&&(A=(y.backgroundBlurriness>0?t:e).get(A)),A===null?M(c,d):A&&A.isColor&&(M(A,1),L=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?s.buffers.color.setClear(0,0,0,1,u):b==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(i.autoClear||L)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Bu)?(m===void 0&&(m=new Lr(new Da(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:So(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Dt,(g!==A||v!==A.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,g=A,v=A.version,S=i.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new Lr(new ph(2,2),new xs({name:"BackgroundMaterial",uniforms:So(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||v!==A.version||S!==i.toneMapping)&&(h.material.needsUpdate=!0,g=A,v=A.version,S=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function M(x,y){x.getRGB(cu,cy(i)),s.buffers.color.setClear(cu.r,cu.g,cu.b,y,u)}return{getClearColor:function(){return c},setClearColor:function(x,y=1){c.set(x),d=y,M(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,M(c,d)},render:E}}function HR(i,e,t,s){const o=i.getParameter(i.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),u=s.isWebGL2||l!==null,c={},d=x(null);let h=d,m=!1;function g(V,ie,se,J,q){let K=!1;if(u){const G=M(J,se,ie);h!==G&&(h=G,S(h.object)),K=y(V,J,se,q),K&&L(V,J,se,q)}else{const G=ie.wireframe===!0;(h.geometry!==J.id||h.program!==se.id||h.wireframe!==G)&&(h.geometry=J.id,h.program=se.id,h.wireframe=G,K=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(K||m)&&(m=!1,$(V,ie,se,J),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function v(){return s.isWebGL2?i.createVertexArray():l.createVertexArrayOES()}function S(V){return s.isWebGL2?i.bindVertexArray(V):l.bindVertexArrayOES(V)}function E(V){return s.isWebGL2?i.deleteVertexArray(V):l.deleteVertexArrayOES(V)}function M(V,ie,se){const J=se.wireframe===!0;let q=c[V.id];q===void 0&&(q={},c[V.id]=q);let K=q[ie.id];K===void 0&&(K={},q[ie.id]=K);let G=K[J];return G===void 0&&(G=x(v()),K[J]=G),G}function x(V){const ie=[],se=[],J=[];for(let q=0;q<o;q++)ie[q]=0,se[q]=0,J[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:se,attributeDivisors:J,object:V,attributes:{},index:null}}function y(V,ie,se,J){const q=h.attributes,K=ie.attributes;let G=0;const w=se.getAttributes();for(const F in w)if(w[F].location>=0){const de=q[F];let me=K[F];if(me===void 0&&(F==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),F==="instanceColor"&&V.instanceColor&&(me=V.instanceColor)),de===void 0||de.attribute!==me||me&&de.data!==me.data)return!0;G++}return h.attributesNum!==G||h.index!==J}function L(V,ie,se,J){const q={},K=ie.attributes;let G=0;const w=se.getAttributes();for(const F in w)if(w[F].location>=0){let de=K[F];de===void 0&&(F==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),F==="instanceColor"&&V.instanceColor&&(de=V.instanceColor));const me={};me.attribute=de,de&&de.data&&(me.data=de.data),q[F]=me,G++}h.attributes=q,h.attributesNum=G,h.index=J}function A(){const V=h.newAttributes;for(let ie=0,se=V.length;ie<se;ie++)V[ie]=0}function b(V){N(V,0)}function N(V,ie){const se=h.newAttributes,J=h.enabledAttributes,q=h.attributeDivisors;se[V]=1,J[V]===0&&(i.enableVertexAttribArray(V),J[V]=1),q[V]!==ie&&((s.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,ie),q[V]=ie)}function B(){const V=h.newAttributes,ie=h.enabledAttributes;for(let se=0,J=ie.length;se<J;se++)ie[se]!==V[se]&&(i.disableVertexAttribArray(se),ie[se]=0)}function O(V,ie,se,J,q,K,G){G===!0?i.vertexAttribIPointer(V,ie,se,q,K):i.vertexAttribPointer(V,ie,se,J,q,K)}function $(V,ie,se,J){if(s.isWebGL2===!1&&(V.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const q=J.attributes,K=se.getAttributes(),G=ie.defaultAttributeValues;for(const w in K){const F=K[w];if(F.location>=0){let ce=q[w];if(ce===void 0&&(w==="instanceMatrix"&&V.instanceMatrix&&(ce=V.instanceMatrix),w==="instanceColor"&&V.instanceColor&&(ce=V.instanceColor)),ce!==void 0){const de=ce.normalized,me=ce.itemSize,Te=t.get(ce);if(Te===void 0)continue;const Fe=Te.buffer,Re=Te.type,De=Te.bytesPerElement,ot=s.isWebGL2===!0&&(Re===i.INT||Re===i.UNSIGNED_INT||ce.gpuType===q_);if(ce.isInterleavedBufferAttribute){const Xe=ce.data,Z=Xe.stride,en=ce.offset;if(Xe.isInstancedInterleavedBuffer){for(let He=0;He<F.locationSize;He++)N(F.location+He,Xe.meshPerAttribute);V.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let He=0;He<F.locationSize;He++)b(F.location+He);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let He=0;He<F.locationSize;He++)O(F.location+He,me/F.locationSize,Re,de,Z*De,(en+me/F.locationSize*He)*De,ot)}else{if(ce.isInstancedBufferAttribute){for(let Xe=0;Xe<F.locationSize;Xe++)N(F.location+Xe,ce.meshPerAttribute);V.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Xe=0;Xe<F.locationSize;Xe++)b(F.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Xe=0;Xe<F.locationSize;Xe++)O(F.location+Xe,me/F.locationSize,Re,de,me*De,me/F.locationSize*Xe*De,ot)}}else if(G!==void 0){const de=G[w];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(F.location,de);break;case 3:i.vertexAttrib3fv(F.location,de);break;case 4:i.vertexAttrib4fv(F.location,de);break;default:i.vertexAttrib1fv(F.location,de)}}}}B()}function R(){ue();for(const V in c){const ie=c[V];for(const se in ie){const J=ie[se];for(const q in J)E(J[q].object),delete J[q];delete ie[se]}delete c[V]}}function I(V){if(c[V.id]===void 0)return;const ie=c[V.id];for(const se in ie){const J=ie[se];for(const q in J)E(J[q].object),delete J[q];delete ie[se]}delete c[V.id]}function le(V){for(const ie in c){const se=c[ie];if(se[V.id]===void 0)continue;const J=se[V.id];for(const q in J)E(J[q].object),delete J[q];delete se[V.id]}}function ue(){fe(),m=!0,h!==d&&(h=d,S(h.object))}function fe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:ue,resetDefaultState:fe,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:le,initAttributes:A,enableAttribute:b,disableUnusedAttributes:B}}function GR(i,e,t,s){const o=s.isWebGL2;let l;function u(h){l=h}function c(h,m){i.drawArrays(l,h,m),t.update(m,l,1)}function d(h,m,g){if(g===0)return;let v,S;if(o)v=i,S="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](l,h,m,g),t.update(m,l,g)}this.setMode=u,this.render=c,this.renderInstances=d}function WR(i,e,t){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=u||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,b=u||e.has("OES_texture_float"),N=A&&b,B=u?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:h,getMaxAnisotropy:o,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:E,maxAttributes:M,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:L,vertexTextures:A,floatFragmentTextures:b,floatVertexTextures:N,maxSamples:B}}function jR(i){const e=this;let t=null,s=0,o=!1,l=!1;const u=new us,c=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||o;return o=v,s=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,S){const E=g.clippingPlanes,M=g.clipIntersection,x=g.clipShadows,y=i.get(g);if(!o||E===null||E.length===0||l&&!x)l?m(null):h();else{const L=l?0:s,A=L*4;let b=y.clippingState||null;d.value=b,b=m(E,v,A,S);for(let N=0;N!==A;++N)b[N]=t[N];y.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(g,v,S,E){const M=g!==null?g.length:0;let x=null;if(M!==0){if(x=d.value,E!==!0||x===null){const y=S+M*4,L=v.matrixWorldInverse;c.getNormalMatrix(L),(x===null||x.length<y)&&(x=new Float32Array(y));for(let A=0,b=S;A!==M;++A,b+=4)u.copy(g[A]).applyMatrix4(L,c),u.normal.toArray(x,b),x[b+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function XR(i){let e=new WeakMap;function t(u,c){return c===Ud?u.mapping=_o:c===Id&&(u.mapping=yo),u}function s(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const c=u.mapping;if(c===Ud||c===Id)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new oA(d.height/2);return h.fromEquirectangularTexture(i,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class qR extends fy{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ho=4,Z0=[.125,.215,.35,.446,.526,.582],ds=20,dd=new qR,Q0=new St;let hd=null,pd=0,md=0;const cs=(1+Math.sqrt(5))/2,ao=1/cs,J0=[new ne(1,1,1),new ne(-1,1,1),new ne(1,1,-1),new ne(-1,1,-1),new ne(0,cs,ao),new ne(0,cs,-ao),new ne(ao,0,cs),new ne(-ao,0,cs),new ne(cs,ao,0),new ne(-cs,ao,0)];class ev{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,pd,md),e.scissorTest=!1,fu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_o||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Ma,format:Mi,colorSpace:Ji,depthBuffer:!1},o=tv(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tv(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YR(l)),this._blurMaterial=$R(l,e,t)}return o}_compileMaterial(e){const t=new Lr(this._lodPlanes[0],e);this._renderer.compile(t,dd)}_sceneToCubeUV(e,t,s,o){const c=new li(90,1,t,s),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(Q0),m.toneMapping=Ur,m.autoClear=!1;const S=new ay({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),E=new Lr(new Da,S);let M=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,M=!0):(S.color.copy(Q0),M=!0);for(let y=0;y<6;y++){const L=y%3;L===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):L===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const A=this._cubeSize;fu(o,L*A,y>2?A:0,A,A),m.setRenderTarget(o),M&&m.render(E,c),m.render(e,c)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===_o||e.mapping===yo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nv());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Lr(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;fu(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(u,dd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=J0[(o-1)%J0.length];this._blur(e,o-1,o,l,u)}t.autoClear=s}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Lr(this._lodPlanes[o],h),v=h.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ds-1),M=l/E,x=isFinite(l)?1+Math.floor(m*M):ds;x>ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ds}`);const y=[];let L=0;for(let O=0;O<ds;++O){const $=O/M,R=Math.exp(-$*$/2);y.push(R),O===0?L+=R:O<x&&(L+=2*R)}for(let O=0;O<y.length;O++)y[O]=y[O]/L;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:A}=this;v.dTheta.value=E,v.mipInt.value=A-s;const b=this._sizeLods[o],N=3*b*(o>A-ho?o-A+ho:0),B=4*(this._cubeSize-b);fu(t,N,B,3*b,2*b),d.setRenderTarget(t),d.render(g,dd)}}function YR(i){const e=[],t=[],s=[];let o=i;const l=i-ho+1+Z0.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>i-ho?d=Z0[u-i+ho-1]:u===0&&(d=0),s.push(d);const h=1/(c-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,E=6,M=3,x=2,y=1,L=new Float32Array(M*E*S),A=new Float32Array(x*E*S),b=new Float32Array(y*E*S);for(let B=0;B<S;B++){const O=B%3*2/3-1,$=B>2?0:-1,R=[O,$,0,O+2/3,$,0,O+2/3,$+1,0,O,$,0,O+2/3,$+1,0,O,$+1,0];L.set(R,M*E*B),A.set(v,x*E*B);const I=[B,B,B,B,B,B];b.set(I,y*E*B)}const N=new er;N.setAttribute("position",new ci(L,M)),N.setAttribute("uv",new ci(A,x)),N.setAttribute("faceIndex",new ci(b,y)),e.push(N),o>ho&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function tv(i,e,t){const s=new ys(i,e,t);return s.texture.mapping=Bu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fu(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function $R(i,e,t){const s=new Float32Array(ds),o=new ne(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function nv(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function iv(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KR(i){let e=new WeakMap,t=null;function s(c){if(c&&c.isTexture){const d=c.mapping,h=d===Ud||d===Id,m=d===_o||d===yo;if(h||m)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return t===null&&(t=new ev(i)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(h&&g&&g.height>0||m&&g&&o(g)){t===null&&(t=new ev(i));const v=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",l),v.texture}else return null}}}return c}function o(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function ZR(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const o=t(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function QR(i,e,t,s){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const M=v.morphAttributes[E];for(let x=0,y=M.length;x<y;x++)e.remove(M[x])}v.removeEventListener("dispose",u),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const E in v)e.update(v[E],i.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const M=S[E];for(let x=0,y=M.length;x<y;x++)e.update(M[x],i.ARRAY_BUFFER)}}function h(g){const v=[],S=g.index,E=g.attributes.position;let M=0;if(S!==null){const L=S.array;M=S.version;for(let A=0,b=L.length;A<b;A+=3){const N=L[A+0],B=L[A+1],O=L[A+2];v.push(N,B,B,O,O,N)}}else if(E!==void 0){const L=E.array;M=E.version;for(let A=0,b=L.length/3-1;A<b;A+=3){const N=A+0,B=A+1,O=A+2;v.push(N,B,B,O,O,N)}}else return;const x=new(ey(v)?uy:ly)(v,1);x.version=M;const y=l.get(g);y&&e.remove(y),l.set(g,x)}function m(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:m}}function JR(i,e,t,s){const o=s.isWebGL2;let l;function u(v){l=v}let c,d;function h(v){c=v.type,d=v.bytesPerElement}function m(v,S){i.drawElements(l,S,c,v*d),t.update(S,l,1)}function g(v,S,E){if(E===0)return;let M,x;if(o)M=i,x="drawElementsInstanced";else if(M=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[x](l,S,c,v*d,E),t.update(S,l,E)}this.setMode=u,this.setIndex=h,this.render=m,this.renderInstances=g}function eb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,c){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=c*(l/3);break;case i.LINES:t.lines+=c*(l/2);break;case i.LINE_STRIP:t.lines+=c*(l-1);break;case i.LINE_LOOP:t.lines+=c*l;break;case i.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function tb(i,e){return i[0]-e[0]}function nb(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ib(i,e,t){const s={},o=new Float32Array(8),l=new WeakMap,u=new fn,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function d(h,m,g){const v=h.morphTargetInfluences;if(e.isWebGL2===!0){const E=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,M=E!==void 0?E.length:0;let x=l.get(m);if(x===void 0||x.count!==M){let ie=function(){fe.dispose(),l.delete(m),m.removeEventListener("dispose",ie)};var S=ie;x!==void 0&&x.texture.dispose();const A=m.morphAttributes.position!==void 0,b=m.morphAttributes.normal!==void 0,N=m.morphAttributes.color!==void 0,B=m.morphAttributes.position||[],O=m.morphAttributes.normal||[],$=m.morphAttributes.color||[];let R=0;A===!0&&(R=1),b===!0&&(R=2),N===!0&&(R=3);let I=m.attributes.position.count*R,le=1;I>e.maxTextureSize&&(le=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const ue=new Float32Array(I*le*4*M),fe=new iy(ue,I,le,M);fe.type=Pr,fe.needsUpdate=!0;const V=R*4;for(let se=0;se<M;se++){const J=B[se],q=O[se],K=$[se],G=I*le*4*se;for(let w=0;w<J.count;w++){const F=w*V;A===!0&&(u.fromBufferAttribute(J,w),ue[G+F+0]=u.x,ue[G+F+1]=u.y,ue[G+F+2]=u.z,ue[G+F+3]=0),b===!0&&(u.fromBufferAttribute(q,w),ue[G+F+4]=u.x,ue[G+F+5]=u.y,ue[G+F+6]=u.z,ue[G+F+7]=0),N===!0&&(u.fromBufferAttribute(K,w),ue[G+F+8]=u.x,ue[G+F+9]=u.y,ue[G+F+10]=u.z,ue[G+F+11]=K.itemSize===4?u.w:1)}}x={count:M,texture:fe,size:new wt(I,le)},l.set(m,x),m.addEventListener("dispose",ie)}let y=0;for(let A=0;A<v.length;A++)y+=v[A];const L=m.morphTargetsRelative?1:1-y;g.getUniforms().setValue(i,"morphTargetBaseInfluence",L),g.getUniforms().setValue(i,"morphTargetInfluences",v),g.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),g.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const E=v===void 0?0:v.length;let M=s[m.id];if(M===void 0||M.length!==E){M=[];for(let b=0;b<E;b++)M[b]=[b,0];s[m.id]=M}for(let b=0;b<E;b++){const N=M[b];N[0]=b,N[1]=v[b]}M.sort(nb);for(let b=0;b<8;b++)b<E&&M[b][1]?(c[b][0]=M[b][0],c[b][1]=M[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(tb);const x=m.morphAttributes.position,y=m.morphAttributes.normal;let L=0;for(let b=0;b<8;b++){const N=c[b],B=N[0],O=N[1];B!==Number.MAX_SAFE_INTEGER&&O?(x&&m.getAttribute("morphTarget"+b)!==x[B]&&m.setAttribute("morphTarget"+b,x[B]),y&&m.getAttribute("morphNormal"+b)!==y[B]&&m.setAttribute("morphNormal"+b,y[B]),o[b]=O,L+=O):(x&&m.hasAttribute("morphTarget"+b)===!0&&m.deleteAttribute("morphTarget"+b),y&&m.hasAttribute("morphNormal"+b)===!0&&m.deleteAttribute("morphNormal"+b),o[b]=0)}const A=m.morphTargetsRelative?1:1-L;g.getUniforms().setValue(i,"morphTargetBaseInfluence",A),g.getUniforms().setValue(i,"morphTargetInfluences",o)}}return{update:d}}function rb(i,e,t,s){let o=new WeakMap;function l(d){const h=s.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const my=new $n,gy=new iy,vy=new G1,_y=new dy,rv=[],sv=[],ov=new Float32Array(16),av=new Float32Array(9),lv=new Float32Array(4);function Eo(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let l=rv[o];if(l===void 0&&(l=new Float32Array(o),rv[o]=l),e!==0){s.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,i[u].toArray(l,c)}return l}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Gu(i,e){let t=sv[e];t===void 0&&(t=new Int32Array(e),sv[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function sb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function lb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function ub(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;lv.set(s),i.uniformMatrix2fv(this.addr,!1,lv),Jt(t,s)}}function cb(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;av.set(s),i.uniformMatrix3fv(this.addr,!1,av),Jt(t,s)}}function fb(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;ov.set(s),i.uniformMatrix4fv(this.addr,!1,ov),Jt(t,s)}}function db(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function mb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function gb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function _b(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function xb(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2D(e||my,o)}function Sb(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||vy,o)}function Mb(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||_y,o)}function Eb(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||gy,o)}function Tb(i){switch(i){case 5126:return sb;case 35664:return ob;case 35665:return ab;case 35666:return lb;case 35674:return ub;case 35675:return cb;case 35676:return fb;case 5124:case 35670:return db;case 35667:case 35671:return hb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return vb;case 36295:return _b;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Eb}}function wb(i,e){i.uniform1fv(this.addr,e)}function Ab(i,e){const t=Eo(e,this.size,2);i.uniform2fv(this.addr,t)}function Cb(i,e){const t=Eo(e,this.size,3);i.uniform3fv(this.addr,t)}function Rb(i,e){const t=Eo(e,this.size,4);i.uniform4fv(this.addr,t)}function bb(i,e){const t=Eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pb(i,e){const t=Eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lb(i,e){const t=Eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Db(i,e){i.uniform1iv(this.addr,e)}function Nb(i,e){i.uniform2iv(this.addr,e)}function Ub(i,e){i.uniform3iv(this.addr,e)}function Ib(i,e){i.uniform4iv(this.addr,e)}function Fb(i,e){i.uniform1uiv(this.addr,e)}function Ob(i,e){i.uniform2uiv(this.addr,e)}function kb(i,e){i.uniform3uiv(this.addr,e)}function Bb(i,e){i.uniform4uiv(this.addr,e)}function Vb(i,e,t){const s=this.cache,o=e.length,l=Gu(t,o);Qt(s,l)||(i.uniform1iv(this.addr,l),Jt(s,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||my,l[u])}function zb(i,e,t){const s=this.cache,o=e.length,l=Gu(t,o);Qt(s,l)||(i.uniform1iv(this.addr,l),Jt(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||vy,l[u])}function Hb(i,e,t){const s=this.cache,o=e.length,l=Gu(t,o);Qt(s,l)||(i.uniform1iv(this.addr,l),Jt(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||_y,l[u])}function Gb(i,e,t){const s=this.cache,o=e.length,l=Gu(t,o);Qt(s,l)||(i.uniform1iv(this.addr,l),Jt(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||gy,l[u])}function Wb(i){switch(i){case 5126:return wb;case 35664:return Ab;case 35665:return Cb;case 35666:return Rb;case 35674:return bb;case 35675:return Pb;case 35676:return Lb;case 5124:case 35670:return Db;case 35667:case 35671:return Nb;case 35668:case 35672:return Ub;case 35669:case 35673:return Ib;case 5125:return Fb;case 36294:return Ob;case 36295:return kb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}class jb{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.setValue=Tb(t.type)}}class Xb{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.size=t.size,this.setValue=Wb(t.type)}}class qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],s)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function uv(i,e){i.seq.push(e),i.map[e.id]=e}function Yb(i,e,t){const s=i.name,o=s.length;for(gd.lastIndex=0;;){const l=gd.exec(s),u=gd.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){uv(t,h===void 0?new jb(c,i,e):new Xb(c,i,e));break}else{let g=t.map[c];g===void 0&&(g=new qb(c),uv(t,g)),t=g}}}class vu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);Yb(l,u,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=s[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function cv(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const $b=37297;let Kb=0;function Zb(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;s.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return s.join(`
`)}function Qb(i){const e=Tt.getPrimaries(Tt.workingColorSpace),t=Tt.getPrimaries(i);let s;switch(e===t?s="":e===bu&&t===Ru?s="LinearDisplayP3ToLinearSRGB":e===Ru&&t===bu&&(s="LinearSRGBToLinearDisplayP3"),i){case Ji:case Vu:return[s,"LinearTransferOETF"];case cn:case hh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[s,"LinearTransferOETF"]}}function fv(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+Zb(i.getShaderSource(e),u)}else return o}function Jb(i,e){const t=Qb(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function eP(i,e){let t;switch(e){case c1:t="Linear";break;case f1:t="Reinhard";break;case d1:t="OptimizedCineon";break;case h1:t="ACESFilmic";break;case p1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tP(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(da).join(`
`)}function nP(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function iP(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=i.getActiveAttrib(e,o),u=l.name;let c=1;l.type===i.FLOAT_MAT2&&(c=2),l.type===i.FLOAT_MAT3&&(c=3),l.type===i.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:c}}return t}function da(i){return i!==""}function dv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rP=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(i){return i.replace(rP,oP)}const sP=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oP(i,e){let t=ut[e];if(t===void 0){const s=sP.get(e);if(s!==void 0)t=ut[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return zd(t)}const aP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(i){return i.replace(aP,lP)}function lP(i,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function mv(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uP(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kw?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function cP(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _o:case yo:e="ENVMAP_TYPE_CUBE";break;case Bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fP(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function dP(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case j_:e="ENVMAP_BLENDING_MULTIPLY";break;case l1:e="ENVMAP_BLENDING_MIX";break;case u1:e="ENVMAP_BLENDING_ADD";break}return e}function hP(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function pP(i,e,t,s){const o=i.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=uP(t),h=cP(t),m=fP(t),g=dP(t),v=hP(t),S=t.isWebGL2?"":tP(t),E=nP(l),M=o.createProgram();let x,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(da).join(`
`),x.length>0&&(x+=`
`),y=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(da).join(`
`),y.length>0&&(y+=`
`)):(x=[mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),y=[S,mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ur?eP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Jb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),u=zd(u),u=dv(u,t),u=hv(u,t),c=zd(c),c=dv(c,t),c=hv(c,t),u=pv(u),c=pv(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const A=L+x+u,b=L+y+c,N=cv(o,o.VERTEX_SHADER,A),B=cv(o,o.FRAGMENT_SHADER,b);o.attachShader(M,N),o.attachShader(M,B),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function O(le){if(i.debug.checkShaderErrors){const ue=o.getProgramInfoLog(M).trim(),fe=o.getShaderInfoLog(N).trim(),V=o.getShaderInfoLog(B).trim();let ie=!0,se=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,M,N,B);else{const J=fv(o,N,"vertex"),q=fv(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+J+`
`+q)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(fe===""||V==="")&&(se=!1);se&&(le.diagnostics={runnable:ie,programLog:ue,vertexShader:{log:fe,prefix:x},fragmentShader:{log:V,prefix:y}})}o.deleteShader(N),o.deleteShader(B),$=new vu(o,M),R=iP(o,M)}let $;this.getUniforms=function(){return $===void 0&&O(this),$};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=o.getProgramParameter(M,$b)),I},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=B,this}let mP=0;class gP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new vP(e),t.set(e,s)),s}}class vP{constructor(e){this.id=mP++,this.code=e,this.usedTimes=0}}function _P(i,e,t,s,o,l,u){const c=new sy,d=new gP,h=[],m=o.isWebGL2,g=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return R===0?"uv":`uv${R}`}function x(R,I,le,ue,fe){const V=ue.fog,ie=fe.geometry,se=R.isMeshStandardMaterial?ue.environment:null,J=(R.isMeshStandardMaterial?t:e).get(R.envMap||se),q=J&&J.mapping===Bu?J.image.height:null,K=E[R.type];R.precision!==null&&(S=o.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const G=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,w=G!==void 0?G.length:0;let F=0;ie.morphAttributes.position!==void 0&&(F=1),ie.morphAttributes.normal!==void 0&&(F=2),ie.morphAttributes.color!==void 0&&(F=3);let ce,de,me,Te;if(K){const Ut=Ri[K];ce=Ut.vertexShader,de=Ut.fragmentShader}else ce=R.vertexShader,de=R.fragmentShader,d.update(R),me=d.getVertexShaderID(R),Te=d.getFragmentShaderID(R);const Fe=i.getRenderTarget(),Re=fe.isInstancedMesh===!0,De=!!R.map,ot=!!R.matcap,Xe=!!J,Z=!!R.aoMap,en=!!R.lightMap,He=!!R.bumpMap,tt=!!R.normalMap,Qe=!!R.displacementMap,At=!!R.emissiveMap,at=!!R.metalnessMap,st=!!R.roughnessMap,gt=R.anisotropy>0,bt=R.clearcoat>0,jt=R.iridescence>0,D=R.sheen>0,C=R.transmission>0,ee=gt&&!!R.anisotropyMap,Se=bt&&!!R.clearcoatMap,ve=bt&&!!R.clearcoatNormalMap,_e=bt&&!!R.clearcoatRoughnessMap,Ve=jt&&!!R.iridescenceMap,Ee=jt&&!!R.iridescenceThicknessMap,be=D&&!!R.sheenColorMap,Je=D&&!!R.sheenRoughnessMap,pt=!!R.specularMap,xe=!!R.specularColorMap,Mt=!!R.specularIntensityMap,nt=C&&!!R.transmissionMap,Ke=C&&!!R.thicknessMap,Ge=!!R.gradientMap,Ne=!!R.alphaMap,ct=R.alphaTest>0,z=!!R.alphaHash,Ae=!!R.extensions,Me=!!ie.attributes.uv1,ae=!!ie.attributes.uv2,we=!!ie.attributes.uv3;let qe=Ur;return R.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(qe=i.toneMapping),{isWebGL2:m,shaderID:K,shaderType:R.type,shaderName:R.name,vertexShader:ce,fragmentShader:de,defines:R.defines,customVertexShaderID:me,customFragmentShaderID:Te,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,instancing:Re,instancingColor:Re&&fe.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Ji,map:De,matcap:ot,envMap:Xe,envMapMode:Xe&&J.mapping,envMapCubeUVHeight:q,aoMap:Z,lightMap:en,bumpMap:He,normalMap:tt,displacementMap:v&&Qe,emissiveMap:At,normalMapObjectSpace:tt&&R.normalMapType===R1,normalMapTangentSpace:tt&&R.normalMapType===C1,metalnessMap:at,roughnessMap:st,anisotropy:gt,anisotropyMap:ee,clearcoat:bt,clearcoatMap:Se,clearcoatNormalMap:ve,clearcoatRoughnessMap:_e,iridescence:jt,iridescenceMap:Ve,iridescenceThicknessMap:Ee,sheen:D,sheenColorMap:be,sheenRoughnessMap:Je,specularMap:pt,specularColorMap:xe,specularIntensityMap:Mt,transmission:C,transmissionMap:nt,thicknessMap:Ke,gradientMap:Ge,opaque:R.transparent===!1&&R.blending===po,alphaMap:Ne,alphaTest:ct,alphaHash:z,combine:R.combine,mapUv:De&&M(R.map.channel),aoMapUv:Z&&M(R.aoMap.channel),lightMapUv:en&&M(R.lightMap.channel),bumpMapUv:He&&M(R.bumpMap.channel),normalMapUv:tt&&M(R.normalMap.channel),displacementMapUv:Qe&&M(R.displacementMap.channel),emissiveMapUv:At&&M(R.emissiveMap.channel),metalnessMapUv:at&&M(R.metalnessMap.channel),roughnessMapUv:st&&M(R.roughnessMap.channel),anisotropyMapUv:ee&&M(R.anisotropyMap.channel),clearcoatMapUv:Se&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:ve&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:be&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(R.sheenRoughnessMap.channel),specularMapUv:pt&&M(R.specularMap.channel),specularColorMapUv:xe&&M(R.specularColorMap.channel),specularIntensityMapUv:Mt&&M(R.specularIntensityMap.channel),transmissionMapUv:nt&&M(R.transmissionMap.channel),thicknessMapUv:Ke&&M(R.thicknessMap.channel),alphaMapUv:Ne&&M(R.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(tt||gt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:ae,vertexUv3s:we,pointsUvs:fe.isPoints===!0&&!!ie.attributes.uv&&(De||Ne),fog:!!V,useFog:R.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:fe.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:F,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&le.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:De&&R.map.isVideoTexture===!0&&Tt.getTransfer(R.map.colorSpace)===Dt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===qi,flipSided:R.side===Vn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Ae&&R.extensions.derivatives===!0,extensionFragDepth:Ae&&R.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function y(R){const I=[];if(R.shaderID?I.push(R.shaderID):(I.push(R.customVertexShaderID),I.push(R.customFragmentShaderID)),R.defines!==void 0)for(const le in R.defines)I.push(le),I.push(R.defines[le]);return R.isRawShaderMaterial===!1&&(L(I,R),A(I,R),I.push(i.outputColorSpace)),I.push(R.customProgramCacheKey),I.join()}function L(R,I){R.push(I.precision),R.push(I.outputColorSpace),R.push(I.envMapMode),R.push(I.envMapCubeUVHeight),R.push(I.mapUv),R.push(I.alphaMapUv),R.push(I.lightMapUv),R.push(I.aoMapUv),R.push(I.bumpMapUv),R.push(I.normalMapUv),R.push(I.displacementMapUv),R.push(I.emissiveMapUv),R.push(I.metalnessMapUv),R.push(I.roughnessMapUv),R.push(I.anisotropyMapUv),R.push(I.clearcoatMapUv),R.push(I.clearcoatNormalMapUv),R.push(I.clearcoatRoughnessMapUv),R.push(I.iridescenceMapUv),R.push(I.iridescenceThicknessMapUv),R.push(I.sheenColorMapUv),R.push(I.sheenRoughnessMapUv),R.push(I.specularMapUv),R.push(I.specularColorMapUv),R.push(I.specularIntensityMapUv),R.push(I.transmissionMapUv),R.push(I.thicknessMapUv),R.push(I.combine),R.push(I.fogExp2),R.push(I.sizeAttenuation),R.push(I.morphTargetsCount),R.push(I.morphAttributeCount),R.push(I.numDirLights),R.push(I.numPointLights),R.push(I.numSpotLights),R.push(I.numSpotLightMaps),R.push(I.numHemiLights),R.push(I.numRectAreaLights),R.push(I.numDirLightShadows),R.push(I.numPointLightShadows),R.push(I.numSpotLightShadows),R.push(I.numSpotLightShadowsWithMaps),R.push(I.numLightProbes),R.push(I.shadowMapType),R.push(I.toneMapping),R.push(I.numClippingPlanes),R.push(I.numClipIntersection),R.push(I.depthPacking)}function A(R,I){c.disableAll(),I.isWebGL2&&c.enable(0),I.supportsVertexTextures&&c.enable(1),I.instancing&&c.enable(2),I.instancingColor&&c.enable(3),I.matcap&&c.enable(4),I.envMap&&c.enable(5),I.normalMapObjectSpace&&c.enable(6),I.normalMapTangentSpace&&c.enable(7),I.clearcoat&&c.enable(8),I.iridescence&&c.enable(9),I.alphaTest&&c.enable(10),I.vertexColors&&c.enable(11),I.vertexAlphas&&c.enable(12),I.vertexUv1s&&c.enable(13),I.vertexUv2s&&c.enable(14),I.vertexUv3s&&c.enable(15),I.vertexTangents&&c.enable(16),I.anisotropy&&c.enable(17),I.alphaHash&&c.enable(18),R.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.skinning&&c.enable(4),I.morphTargets&&c.enable(5),I.morphNormals&&c.enable(6),I.morphColors&&c.enable(7),I.premultipliedAlpha&&c.enable(8),I.shadowMapEnabled&&c.enable(9),I.useLegacyLights&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),R.push(c.mask)}function b(R){const I=E[R.type];let le;if(I){const ue=Ri[I];le=nA.clone(ue.uniforms)}else le=R.uniforms;return le}function N(R,I){let le;for(let ue=0,fe=h.length;ue<fe;ue++){const V=h[ue];if(V.cacheKey===I){le=V,++le.usedTimes;break}}return le===void 0&&(le=new pP(i,I,R,l),h.push(le)),le}function B(R){if(--R.usedTimes===0){const I=h.indexOf(R);h[I]=h[h.length-1],h.pop(),R.destroy()}}function O(R){d.remove(R)}function $(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:b,acquireProgram:N,releaseProgram:B,releaseShaderCache:O,programs:h,dispose:$}}function yP(){let i=new WeakMap;function e(l){let u=i.get(l);return u===void 0&&(u={},i.set(l,u)),u}function t(l){i.delete(l)}function s(l,u,c){i.get(l)[u]=c}function o(){i=new WeakMap}return{get:e,remove:t,update:s,dispose:o}}function xP(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vv(){const i=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(g,v,S,E,M,x){let y=i[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:S,groupOrder:E,renderOrder:g.renderOrder,z:M,group:x},i[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=x),e++,y}function c(g,v,S,E,M,x){const y=u(g,v,S,E,M,x);S.transmission>0?s.push(y):S.transparent===!0?o.push(y):t.push(y)}function d(g,v,S,E,M,x){const y=u(g,v,S,E,M,x);S.transmission>0?s.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||xP),s.length>1&&s.sort(v||gv),o.length>1&&o.sort(v||gv)}function m(){for(let g=e,v=i.length;g<v;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:c,unshift:d,finish:m,sort:h}}function SP(){let i=new WeakMap;function e(s,o){const l=i.get(s);let u;return l===void 0?(u=new vv,i.set(s,[u])):o>=l.length?(u=new vv,l.push(u)):u=l[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function MP(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new St};break;case"SpotLight":t={position:new ne,direction:new ne,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function EP(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let TP=0;function wP(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function AP(i,e){const t=new MP,s=EP(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)o.probe.push(new ne);const l=new ne,u=new an,c=new an;function d(m,g){let v=0,S=0,E=0;for(let ue=0;ue<9;ue++)o.probe[ue].set(0,0,0);let M=0,x=0,y=0,L=0,A=0,b=0,N=0,B=0,O=0,$=0,R=0;m.sort(wP);const I=g===!0?Math.PI:1;for(let ue=0,fe=m.length;ue<fe;ue++){const V=m[ue],ie=V.color,se=V.intensity,J=V.distance,q=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=ie.r*se*I,S+=ie.g*se*I,E+=ie.b*se*I;else if(V.isLightProbe){for(let K=0;K<9;K++)o.probe[K].addScaledVector(V.sh.coefficients[K],se);R++}else if(V.isDirectionalLight){const K=t.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity*I),V.castShadow){const G=V.shadow,w=s.get(V);w.shadowBias=G.bias,w.shadowNormalBias=G.normalBias,w.shadowRadius=G.radius,w.shadowMapSize=G.mapSize,o.directionalShadow[M]=w,o.directionalShadowMap[M]=q,o.directionalShadowMatrix[M]=V.shadow.matrix,b++}o.directional[M]=K,M++}else if(V.isSpotLight){const K=t.get(V);K.position.setFromMatrixPosition(V.matrixWorld),K.color.copy(ie).multiplyScalar(se*I),K.distance=J,K.coneCos=Math.cos(V.angle),K.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),K.decay=V.decay,o.spot[y]=K;const G=V.shadow;if(V.map&&(o.spotLightMap[O]=V.map,O++,G.updateMatrices(V),V.castShadow&&$++),o.spotLightMatrix[y]=G.matrix,V.castShadow){const w=s.get(V);w.shadowBias=G.bias,w.shadowNormalBias=G.normalBias,w.shadowRadius=G.radius,w.shadowMapSize=G.mapSize,o.spotShadow[y]=w,o.spotShadowMap[y]=q,B++}y++}else if(V.isRectAreaLight){const K=t.get(V);K.color.copy(ie).multiplyScalar(se),K.halfWidth.set(V.width*.5,0,0),K.halfHeight.set(0,V.height*.5,0),o.rectArea[L]=K,L++}else if(V.isPointLight){const K=t.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity*I),K.distance=V.distance,K.decay=V.decay,V.castShadow){const G=V.shadow,w=s.get(V);w.shadowBias=G.bias,w.shadowNormalBias=G.normalBias,w.shadowRadius=G.radius,w.shadowMapSize=G.mapSize,w.shadowCameraNear=G.camera.near,w.shadowCameraFar=G.camera.far,o.pointShadow[x]=w,o.pointShadowMap[x]=q,o.pointShadowMatrix[x]=V.shadow.matrix,N++}o.point[x]=K,x++}else if(V.isHemisphereLight){const K=t.get(V);K.skyColor.copy(V.color).multiplyScalar(se*I),K.groundColor.copy(V.groundColor).multiplyScalar(se*I),o.hemi[A]=K,A++}}L>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_FLOAT_1,o.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_HALF_1,o.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=S,o.ambient[2]=E;const le=o.hash;(le.directionalLength!==M||le.pointLength!==x||le.spotLength!==y||le.rectAreaLength!==L||le.hemiLength!==A||le.numDirectionalShadows!==b||le.numPointShadows!==N||le.numSpotShadows!==B||le.numSpotMaps!==O||le.numLightProbes!==R)&&(o.directional.length=M,o.spot.length=y,o.rectArea.length=L,o.point.length=x,o.hemi.length=A,o.directionalShadow.length=b,o.directionalShadowMap.length=b,o.pointShadow.length=N,o.pointShadowMap.length=N,o.spotShadow.length=B,o.spotShadowMap.length=B,o.directionalShadowMatrix.length=b,o.pointShadowMatrix.length=N,o.spotLightMatrix.length=B+O-$,o.spotLightMap.length=O,o.numSpotLightShadowsWithMaps=$,o.numLightProbes=R,le.directionalLength=M,le.pointLength=x,le.spotLength=y,le.rectAreaLength=L,le.hemiLength=A,le.numDirectionalShadows=b,le.numPointShadows=N,le.numSpotShadows=B,le.numSpotMaps=O,le.numLightProbes=R,o.version=TP++)}function h(m,g){let v=0,S=0,E=0,M=0,x=0;const y=g.matrixWorldInverse;for(let L=0,A=m.length;L<A;L++){const b=m[L];if(b.isDirectionalLight){const N=o.directional[v];N.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),v++}else if(b.isSpotLight){const N=o.spot[E];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),E++}else if(b.isRectAreaLight){const N=o.rectArea[M];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(y),c.identity(),u.copy(b.matrixWorld),u.premultiply(y),c.extractRotation(u),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const N=o.point[S];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(y),S++}else if(b.isHemisphereLight){const N=o.hemi[x];N.direction.setFromMatrixPosition(b.matrixWorld),N.direction.transformDirection(y),x++}}}return{setup:d,setupView:h,state:o}}function _v(i,e){const t=new AP(i,e),s=[],o=[];function l(){s.length=0,o.length=0}function u(g){s.push(g)}function c(g){o.push(g)}function d(g){t.setup(s,g)}function h(g){t.setupView(s,g)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:t},setupLights:d,setupLightsView:h,pushLight:u,pushShadow:c}}function CP(i,e){let t=new WeakMap;function s(l,u=0){const c=t.get(l);let d;return c===void 0?(d=new _v(i,e),t.set(l,[d])):u>=c.length?(d=new _v(i,e),c.push(d)):d=c[u],d}function o(){t=new WeakMap}return{get:s,dispose:o}}class RP extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bP extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DP(i,e,t){let s=new hy;const o=new wt,l=new wt,u=new fn,c=new RP({depthPacking:A1}),d=new bP,h={},m=t.maxTextureSize,g={[kr]:Vn,[Vn]:kr,[qi]:qi},v=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:PP,fragmentShader:LP}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new er;E.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Lr(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let y=this.type;this.render=function(N,B,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const $=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),le=i.state;le.setBlending(Nr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ue=y!==Xi&&this.type===Xi,fe=y===Xi&&this.type!==Xi;for(let V=0,ie=N.length;V<ie;V++){const se=N[V],J=se.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const q=J.getFrameExtents();if(o.multiply(q),l.copy(J.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/q.x),o.x=l.x*q.x,J.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/q.y),o.y=l.y*q.y,J.mapSize.y=l.y)),J.map===null||ue===!0||fe===!0){const G=this.type!==Xi?{minFilter:Pn,magFilter:Pn}:{};J.map!==null&&J.map.dispose(),J.map=new ys(o.x,o.y,G),J.map.texture.name=se.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const K=J.getViewportCount();for(let G=0;G<K;G++){const w=J.getViewport(G);u.set(l.x*w.x,l.y*w.y,l.x*w.z,l.y*w.w),le.viewport(u),J.updateMatrices(se,G),s=J.getFrustum(),b(B,O,J.camera,se,this.type)}J.isPointLightShadow!==!0&&this.type===Xi&&L(J,O),J.needsUpdate=!1}y=this.type,x.needsUpdate=!1,i.setRenderTarget($,R,I)};function L(N,B){const O=e.update(M);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ys(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(B,null,O,v,M,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(B,null,O,S,M,null)}function A(N,B,O,$){let R=null;const I=O.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(I!==void 0)R=I;else if(R=O.isPointLight===!0?d:c,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const le=R.uuid,ue=B.uuid;let fe=h[le];fe===void 0&&(fe={},h[le]=fe);let V=fe[ue];V===void 0&&(V=R.clone(),fe[ue]=V),R=V}if(R.visible=B.visible,R.wireframe=B.wireframe,$===Xi?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:g[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=i.properties.get(R);le.light=O}return R}function b(N,B,O,$,R){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Xi)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,N.matrixWorld);const ue=e.update(N),fe=N.material;if(Array.isArray(fe)){const V=ue.groups;for(let ie=0,se=V.length;ie<se;ie++){const J=V[ie],q=fe[J.materialIndex];if(q&&q.visible){const K=A(N,q,$,R);i.renderBufferDirect(O,null,ue,K,N,J)}}}else if(fe.visible){const V=A(N,fe,$,R);i.renderBufferDirect(O,null,ue,V,N,null)}}const le=N.children;for(let ue=0,fe=le.length;ue<fe;ue++)b(le[ue],B,O,$,R)}}function NP(i,e,t){const s=t.isWebGL2;function o(){let z=!1;const Ae=new fn;let Me=null;const ae=new fn(0,0,0,0);return{setMask:function(we){Me!==we&&!z&&(i.colorMask(we,we,we,we),Me=we)},setLocked:function(we){z=we},setClear:function(we,qe,mt,Ut,Mn){Mn===!0&&(we*=Ut,qe*=Ut,mt*=Ut),Ae.set(we,qe,mt,Ut),ae.equals(Ae)===!1&&(i.clearColor(we,qe,mt,Ut),ae.copy(Ae))},reset:function(){z=!1,Me=null,ae.set(-1,0,0,0)}}}function l(){let z=!1,Ae=null,Me=null,ae=null;return{setTest:function(we){we?De(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(we){Ae!==we&&!z&&(i.depthMask(we),Ae=we)},setFunc:function(we){if(Me!==we){switch(we){case t1:i.depthFunc(i.NEVER);break;case n1:i.depthFunc(i.ALWAYS);break;case i1:i.depthFunc(i.LESS);break;case Au:i.depthFunc(i.LEQUAL);break;case r1:i.depthFunc(i.EQUAL);break;case s1:i.depthFunc(i.GEQUAL);break;case o1:i.depthFunc(i.GREATER);break;case a1:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=we}},setLocked:function(we){z=we},setClear:function(we){ae!==we&&(i.clearDepth(we),ae=we)},reset:function(){z=!1,Ae=null,Me=null,ae=null}}}function u(){let z=!1,Ae=null,Me=null,ae=null,we=null,qe=null,mt=null,Ut=null,Mn=null;return{setTest:function(yt){z||(yt?De(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(yt){Ae!==yt&&!z&&(i.stencilMask(yt),Ae=yt)},setFunc:function(yt,$t,dn){(Me!==yt||ae!==$t||we!==dn)&&(i.stencilFunc(yt,$t,dn),Me=yt,ae=$t,we=dn)},setOp:function(yt,$t,dn){(qe!==yt||mt!==$t||Ut!==dn)&&(i.stencilOp(yt,$t,dn),qe=yt,mt=$t,Ut=dn)},setLocked:function(yt){z=yt},setClear:function(yt){Mn!==yt&&(i.clearStencil(yt),Mn=yt)},reset:function(){z=!1,Ae=null,Me=null,ae=null,we=null,qe=null,mt=null,Ut=null,Mn=null}}}const c=new o,d=new l,h=new u,m=new WeakMap,g=new WeakMap;let v={},S={},E=new WeakMap,M=[],x=null,y=!1,L=null,A=null,b=null,N=null,B=null,O=null,$=null,R=new St(0,0,0),I=0,le=!1,ue=null,fe=null,V=null,ie=null,se=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=K>=2);let w=null,F={};const ce=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),me=new fn().fromArray(ce),Te=new fn().fromArray(de);function Fe(z,Ae,Me,ae){const we=new Uint8Array(4),qe=i.createTexture();i.bindTexture(z,qe),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<Me;mt++)s&&(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ae,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Ae+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return qe}const Re={};Re[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Re[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),De(i.DEPTH_TEST),d.setFunc(Au),at(!1),st(e0),De(i.CULL_FACE),Qe(Nr);function De(z){v[z]!==!0&&(i.enable(z),v[z]=!0)}function ot(z){v[z]!==!1&&(i.disable(z),v[z]=!1)}function Xe(z,Ae){return S[z]!==Ae?(i.bindFramebuffer(z,Ae),S[z]=Ae,s&&(z===i.DRAW_FRAMEBUFFER&&(S[i.FRAMEBUFFER]=Ae),z===i.FRAMEBUFFER&&(S[i.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function Z(z,Ae){let Me=M,ae=!1;if(z)if(Me=E.get(Ae),Me===void 0&&(Me=[],E.set(Ae,Me)),z.isWebGLMultipleRenderTargets){const we=z.texture;if(Me.length!==we.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,mt=we.length;qe<mt;qe++)Me[qe]=i.COLOR_ATTACHMENT0+qe;Me.length=we.length,ae=!0}}else Me[0]!==i.COLOR_ATTACHMENT0&&(Me[0]=i.COLOR_ATTACHMENT0,ae=!0);else Me[0]!==i.BACK&&(Me[0]=i.BACK,ae=!0);ae&&(t.isWebGL2?i.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function en(z){return x!==z?(i.useProgram(z),x=z,!0):!1}const He={[fs]:i.FUNC_ADD,[Vw]:i.FUNC_SUBTRACT,[zw]:i.FUNC_REVERSE_SUBTRACT};if(s)He[i0]=i.MIN,He[r0]=i.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(He[i0]=z.MIN_EXT,He[r0]=z.MAX_EXT)}const tt={[Hw]:i.ZERO,[Gw]:i.ONE,[Ww]:i.SRC_COLOR,[Dd]:i.SRC_ALPHA,[Kw]:i.SRC_ALPHA_SATURATE,[Yw]:i.DST_COLOR,[Xw]:i.DST_ALPHA,[jw]:i.ONE_MINUS_SRC_COLOR,[Nd]:i.ONE_MINUS_SRC_ALPHA,[$w]:i.ONE_MINUS_DST_COLOR,[qw]:i.ONE_MINUS_DST_ALPHA,[Zw]:i.CONSTANT_COLOR,[Qw]:i.ONE_MINUS_CONSTANT_COLOR,[Jw]:i.CONSTANT_ALPHA,[e1]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(z,Ae,Me,ae,we,qe,mt,Ut,Mn,yt){if(z===Nr){y===!0&&(ot(i.BLEND),y=!1);return}if(y===!1&&(De(i.BLEND),y=!0),z!==Bw){if(z!==L||yt!==le){if((A!==fs||B!==fs)&&(i.blendEquation(i.FUNC_ADD),A=fs,B=fs),yt)switch(z){case po:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ld:i.blendFunc(i.ONE,i.ONE);break;case t0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case n0:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ld:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case t0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case n0:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,N=null,O=null,$=null,R.set(0,0,0),I=0,L=z,le=yt}return}we=we||Ae,qe=qe||Me,mt=mt||ae,(Ae!==A||we!==B)&&(i.blendEquationSeparate(He[Ae],He[we]),A=Ae,B=we),(Me!==b||ae!==N||qe!==O||mt!==$)&&(i.blendFuncSeparate(tt[Me],tt[ae],tt[qe],tt[mt]),b=Me,N=ae,O=qe,$=mt),(Ut.equals(R)===!1||Mn!==I)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Mn),R.copy(Ut),I=Mn),L=z,le=!1}function At(z,Ae){z.side===qi?ot(i.CULL_FACE):De(i.CULL_FACE);let Me=z.side===Vn;Ae&&(Me=!Me),at(Me),z.blending===po&&z.transparent===!1?Qe(Nr):Qe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),d.setFunc(z.depthFunc),d.setTest(z.depthTest),d.setMask(z.depthWrite),c.setMask(z.colorWrite);const ae=z.stencilWrite;h.setTest(ae),ae&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),bt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(z){ue!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),ue=z)}function st(z){z!==Fw?(De(i.CULL_FACE),z!==fe&&(z===e0?i.cullFace(i.BACK):z===Ow?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),fe=z}function gt(z){z!==V&&(q&&i.lineWidth(z),V=z)}function bt(z,Ae,Me){z?(De(i.POLYGON_OFFSET_FILL),(ie!==Ae||se!==Me)&&(i.polygonOffset(Ae,Me),ie=Ae,se=Me)):ot(i.POLYGON_OFFSET_FILL)}function jt(z){z?De(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function D(z){z===void 0&&(z=i.TEXTURE0+J-1),w!==z&&(i.activeTexture(z),w=z)}function C(z,Ae,Me){Me===void 0&&(w===null?Me=i.TEXTURE0+J-1:Me=w);let ae=F[Me];ae===void 0&&(ae={type:void 0,texture:void 0},F[Me]=ae),(ae.type!==z||ae.texture!==Ae)&&(w!==Me&&(i.activeTexture(Me),w=Me),i.bindTexture(z,Ae||Re[z]),ae.type=z,ae.texture=Ae)}function ee(){const z=F[w];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(z){me.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),me.copy(z))}function Ke(z){Te.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Te.copy(z))}function Ge(z,Ae){let Me=g.get(Ae);Me===void 0&&(Me=new WeakMap,g.set(Ae,Me));let ae=Me.get(z);ae===void 0&&(ae=i.getUniformBlockIndex(Ae,z.name),Me.set(z,ae))}function Ne(z,Ae){const ae=g.get(Ae).get(z);m.get(Ae)!==ae&&(i.uniformBlockBinding(Ae,ae,z.__bindingPointIndex),m.set(Ae,ae))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),s===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},w=null,F={},S={},E=new WeakMap,M=[],x=null,y=!1,L=null,A=null,b=null,N=null,B=null,O=null,$=null,R=new St(0,0,0),I=0,le=!1,ue=null,fe=null,V=null,ie=null,se=null,me.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:De,disable:ot,bindFramebuffer:Xe,drawBuffers:Z,useProgram:en,setBlending:Qe,setMaterial:At,setFlipSided:at,setCullFace:st,setLineWidth:gt,setPolygonOffset:bt,setScissorTest:jt,activeTexture:D,bindTexture:C,unbindTexture:ee,compressedTexImage2D:Se,compressedTexImage3D:ve,texImage2D:xe,texImage3D:Mt,updateUBOMapping:Ge,uniformBlockBinding:Ne,texStorage2D:Je,texStorage3D:pt,texSubImage2D:_e,texSubImage3D:Ve,compressedTexSubImage2D:Ee,compressedTexSubImage3D:be,scissor:nt,viewport:Ke,reset:ct}}function UP(i,e,t,s,o,l,u){const c=o.isWebGL2,d=o.maxTextures,h=o.maxCubemapSize,m=o.maxTextureSize,g=o.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let M;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(D,C){return y?new OffscreenCanvas(D,C):Lu("canvas")}function A(D,C,ee,Se){let ve=1;if((D.width>Se||D.height>Se)&&(ve=Se/Math.max(D.width,D.height)),ve<1||C===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const _e=C?Vd:Math.floor,Ve=_e(ve*D.width),Ee=_e(ve*D.height);M===void 0&&(M=L(Ve,Ee));const be=ee?L(Ve,Ee):M;return be.width=Ve,be.height=Ee,be.getContext("2d").drawImage(D,0,0,Ve,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Ve+"x"+Ee+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function b(D){return U0(D.width)&&U0(D.height)}function N(D){return c?!1:D.wrapS!==Si||D.wrapT!==Si||D.minFilter!==Pn&&D.minFilter!==ai}function B(D,C){return D.generateMipmaps&&C&&D.minFilter!==Pn&&D.minFilter!==ai}function O(D){i.generateMipmap(D)}function $(D,C,ee,Se,ve=!1){if(c===!1)return C;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _e=C;if(C===i.RED&&(ee===i.FLOAT&&(_e=i.R32F),ee===i.HALF_FLOAT&&(_e=i.R16F),ee===i.UNSIGNED_BYTE&&(_e=i.R8)),C===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(_e=i.R8UI),ee===i.UNSIGNED_SHORT&&(_e=i.R16UI),ee===i.UNSIGNED_INT&&(_e=i.R32UI),ee===i.BYTE&&(_e=i.R8I),ee===i.SHORT&&(_e=i.R16I),ee===i.INT&&(_e=i.R32I)),C===i.RG&&(ee===i.FLOAT&&(_e=i.RG32F),ee===i.HALF_FLOAT&&(_e=i.RG16F),ee===i.UNSIGNED_BYTE&&(_e=i.RG8)),C===i.RGBA){const Ve=ve?Cu:Tt.getTransfer(Se);ee===i.FLOAT&&(_e=i.RGBA32F),ee===i.HALF_FLOAT&&(_e=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(_e=Ve===Dt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function R(D,C,ee){return B(D,ee)===!0||D.isFramebufferTexture&&D.minFilter!==Pn&&D.minFilter!==ai?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function I(D){return D===Pn||D===s0||D===zf?i.NEAREST:i.LINEAR}function le(D){const C=D.target;C.removeEventListener("dispose",le),fe(C),C.isVideoTexture&&E.delete(C)}function ue(D){const C=D.target;C.removeEventListener("dispose",ue),ie(C)}function fe(D){const C=s.get(D);if(C.__webglInit===void 0)return;const ee=D.source,Se=x.get(ee);if(Se){const ve=Se[C.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&V(D),Object.keys(Se).length===0&&x.delete(ee)}s.remove(D)}function V(D){const C=s.get(D);i.deleteTexture(C.__webglTexture);const ee=D.source,Se=x.get(ee);delete Se[C.__cacheKey],u.memory.textures--}function ie(D){const C=D.texture,ee=s.get(D),Se=s.get(C);if(Se.__webglTexture!==void 0&&(i.deleteTexture(Se.__webglTexture),u.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(ee.__webglFramebuffer[ve]))for(let _e=0;_e<ee.__webglFramebuffer[ve].length;_e++)i.deleteFramebuffer(ee.__webglFramebuffer[ve][_e]);else i.deleteFramebuffer(ee.__webglFramebuffer[ve]);ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer[ve])}else{if(Array.isArray(ee.__webglFramebuffer))for(let ve=0;ve<ee.__webglFramebuffer.length;ve++)i.deleteFramebuffer(ee.__webglFramebuffer[ve]);else i.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ve=0;ve<ee.__webglColorRenderbuffer.length;ve++)ee.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(ee.__webglColorRenderbuffer[ve]);ee.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ve=0,_e=C.length;ve<_e;ve++){const Ve=s.get(C[ve]);Ve.__webglTexture&&(i.deleteTexture(Ve.__webglTexture),u.memory.textures--),s.remove(C[ve])}s.remove(C),s.remove(D)}let se=0;function J(){se=0}function q(){const D=se;return D>=d&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+d),se+=1,D}function K(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function G(D,C){const ee=s.get(D);if(D.isVideoTexture&&bt(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const Se=D.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(ee,D,C);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+C)}function w(D,C){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){De(ee,D,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+C)}function F(D,C){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){De(ee,D,C);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+C)}function ce(D,C){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){ot(ee,D,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+C)}const de={[Fd]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[Od]:i.MIRRORED_REPEAT},me={[Pn]:i.NEAREST,[s0]:i.NEAREST_MIPMAP_NEAREST,[zf]:i.NEAREST_MIPMAP_LINEAR,[ai]:i.LINEAR,[m1]:i.LINEAR_MIPMAP_NEAREST,[Sa]:i.LINEAR_MIPMAP_LINEAR},Te={[b1]:i.NEVER,[F1]:i.ALWAYS,[P1]:i.LESS,[D1]:i.LEQUAL,[L1]:i.EQUAL,[I1]:i.GEQUAL,[N1]:i.GREATER,[U1]:i.NOTEQUAL};function Fe(D,C,ee){if(ee?(i.texParameteri(D,i.TEXTURE_WRAP_S,de[C.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,de[C.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,de[C.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,me[C.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,me[C.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(C.wrapS!==Si||C.wrapT!==Si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,I(C.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,I(C.minFilter)),C.minFilter!==Pn&&C.minFilter!==ai&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Te[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Se=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Pn||C.minFilter!==zf&&C.minFilter!==Sa||C.type===Pr&&e.has("OES_texture_float_linear")===!1||c===!1&&C.type===Ma&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||s.get(C).__currentAnisotropy)&&(i.texParameterf(D,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy)}}function Re(D,C){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",le));const Se=C.source;let ve=x.get(Se);ve===void 0&&(ve={},x.set(Se,ve));const _e=K(C);if(_e!==D.__cacheKey){ve[_e]===void 0&&(ve[_e]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ve[_e].usedTimes++;const Ve=ve[D.__cacheKey];Ve!==void 0&&(ve[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&V(C)),D.__cacheKey=_e,D.__webglTexture=ve[_e].texture}return ee}function De(D,C,ee){let Se=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Se=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Se=i.TEXTURE_3D);const ve=Re(D,C),_e=C.source;t.bindTexture(Se,D.__webglTexture,i.TEXTURE0+ee);const Ve=s.get(_e);if(_e.version!==Ve.__version||ve===!0){t.activeTexture(i.TEXTURE0+ee);const Ee=Tt.getPrimaries(Tt.workingColorSpace),be=C.colorSpace===ui?null:Tt.getPrimaries(C.colorSpace),Je=C.colorSpace===ui||Ee===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const pt=N(C)&&b(C.image)===!1;let xe=A(C.image,pt,!1,m);xe=jt(C,xe);const Mt=b(xe)||c,nt=l.convert(C.format,C.colorSpace);let Ke=l.convert(C.type),Ge=$(C.internalFormat,nt,Ke,C.colorSpace,C.isVideoTexture);Fe(Se,C,Mt);let Ne;const ct=C.mipmaps,z=c&&C.isVideoTexture!==!0,Ae=Ve.__version===void 0||ve===!0,Me=R(C,xe,Mt);if(C.isDepthTexture)Ge=i.DEPTH_COMPONENT,c?C.type===Pr?Ge=i.DEPTH_COMPONENT32F:C.type===br?Ge=i.DEPTH_COMPONENT24:C.type===ms?Ge=i.DEPTH24_STENCIL8:Ge=i.DEPTH_COMPONENT16:C.type===Pr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===gs&&Ge===i.DEPTH_COMPONENT&&C.type!==dh&&C.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=br,Ke=l.convert(C.type)),C.format===xo&&Ge===i.DEPTH_COMPONENT&&(Ge=i.DEPTH_STENCIL,C.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=ms,Ke=l.convert(C.type))),Ae&&(z?t.texStorage2D(i.TEXTURE_2D,1,Ge,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Ge,xe.width,xe.height,0,nt,Ke,null));else if(C.isDataTexture)if(ct.length>0&&Mt){z&&Ae&&t.texStorage2D(i.TEXTURE_2D,Me,Ge,ct[0].width,ct[0].height);for(let ae=0,we=ct.length;ae<we;ae++)Ne=ct[ae],z?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ne.width,Ne.height,nt,Ke,Ne.data):t.texImage2D(i.TEXTURE_2D,ae,Ge,Ne.width,Ne.height,0,nt,Ke,Ne.data);C.generateMipmaps=!1}else z?(Ae&&t.texStorage2D(i.TEXTURE_2D,Me,Ge,xe.width,xe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe.width,xe.height,nt,Ke,xe.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,xe.width,xe.height,0,nt,Ke,xe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){z&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ge,ct[0].width,ct[0].height,xe.depth);for(let ae=0,we=ct.length;ae<we;ae++)Ne=ct[ae],C.format!==Mi?nt!==null?z?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ne.width,Ne.height,xe.depth,nt,Ne.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ge,Ne.width,Ne.height,xe.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ne.width,Ne.height,xe.depth,nt,Ke,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ge,Ne.width,Ne.height,xe.depth,0,nt,Ke,Ne.data)}else{z&&Ae&&t.texStorage2D(i.TEXTURE_2D,Me,Ge,ct[0].width,ct[0].height);for(let ae=0,we=ct.length;ae<we;ae++)Ne=ct[ae],C.format!==Mi?nt!==null?z?t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Ne.width,Ne.height,nt,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ge,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ne.width,Ne.height,nt,Ke,Ne.data):t.texImage2D(i.TEXTURE_2D,ae,Ge,Ne.width,Ne.height,0,nt,Ke,Ne.data)}else if(C.isDataArrayTexture)z?(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ge,xe.width,xe.height,xe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,nt,Ke,xe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,xe.width,xe.height,xe.depth,0,nt,Ke,xe.data);else if(C.isData3DTexture)z?(Ae&&t.texStorage3D(i.TEXTURE_3D,Me,Ge,xe.width,xe.height,xe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,nt,Ke,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,xe.width,xe.height,xe.depth,0,nt,Ke,xe.data);else if(C.isFramebufferTexture){if(Ae)if(z)t.texStorage2D(i.TEXTURE_2D,Me,Ge,xe.width,xe.height);else{let ae=xe.width,we=xe.height;for(let qe=0;qe<Me;qe++)t.texImage2D(i.TEXTURE_2D,qe,Ge,ae,we,0,nt,Ke,null),ae>>=1,we>>=1}}else if(ct.length>0&&Mt){z&&Ae&&t.texStorage2D(i.TEXTURE_2D,Me,Ge,ct[0].width,ct[0].height);for(let ae=0,we=ct.length;ae<we;ae++)Ne=ct[ae],z?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,nt,Ke,Ne):t.texImage2D(i.TEXTURE_2D,ae,Ge,nt,Ke,Ne);C.generateMipmaps=!1}else z?(Ae&&t.texStorage2D(i.TEXTURE_2D,Me,Ge,xe.width,xe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,nt,Ke,xe)):t.texImage2D(i.TEXTURE_2D,0,Ge,nt,Ke,xe);B(C,Mt)&&O(Se),Ve.__version=_e.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ot(D,C,ee){if(C.image.length!==6)return;const Se=Re(D,C),ve=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ee);const _e=s.get(ve);if(ve.version!==_e.__version||Se===!0){t.activeTexture(i.TEXTURE0+ee);const Ve=Tt.getPrimaries(Tt.workingColorSpace),Ee=C.colorSpace===ui?null:Tt.getPrimaries(C.colorSpace),be=C.colorSpace===ui||Ve===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Je=C.isCompressedTexture||C.image[0].isCompressedTexture,pt=C.image[0]&&C.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!Je&&!pt?xe[ae]=A(C.image[ae],!1,!0,h):xe[ae]=pt?C.image[ae].image:C.image[ae],xe[ae]=jt(C,xe[ae]);const Mt=xe[0],nt=b(Mt)||c,Ke=l.convert(C.format,C.colorSpace),Ge=l.convert(C.type),Ne=$(C.internalFormat,Ke,Ge,C.colorSpace),ct=c&&C.isVideoTexture!==!0,z=_e.__version===void 0||Se===!0;let Ae=R(C,Mt,nt);Fe(i.TEXTURE_CUBE_MAP,C,nt);let Me;if(Je){ct&&z&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ne,Mt.width,Mt.height);for(let ae=0;ae<6;ae++){Me=xe[ae].mipmaps;for(let we=0;we<Me.length;we++){const qe=Me[we];C.format!==Mi?Ke!==null?ct?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,qe.width,qe.height,Ke,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,Ne,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,qe.width,qe.height,Ke,Ge,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,Ne,qe.width,qe.height,0,Ke,Ge,qe.data)}}}else{Me=C.mipmaps,ct&&z&&(Me.length>0&&Ae++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ne,xe[0].width,xe[0].height));for(let ae=0;ae<6;ae++)if(pt){ct?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Ke,Ge,xe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ne,xe[ae].width,xe[ae].height,0,Ke,Ge,xe[ae].data);for(let we=0;we<Me.length;we++){const mt=Me[we].image[ae].image;ct?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,mt.width,mt.height,Ke,Ge,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,Ne,mt.width,mt.height,0,Ke,Ge,mt.data)}}else{ct?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ke,Ge,xe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ne,Ke,Ge,xe[ae]);for(let we=0;we<Me.length;we++){const qe=Me[we];ct?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,Ke,Ge,qe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,Ne,Ke,Ge,qe.image[ae])}}}B(C,nt)&&O(i.TEXTURE_CUBE_MAP),_e.__version=ve.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Xe(D,C,ee,Se,ve,_e){const Ve=l.convert(ee.format,ee.colorSpace),Ee=l.convert(ee.type),be=$(ee.internalFormat,Ve,Ee,ee.colorSpace);if(!s.get(C).__hasExternalTextures){const pt=Math.max(1,C.width>>_e),xe=Math.max(1,C.height>>_e);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,_e,be,pt,xe,C.depth,0,Ve,Ee,null):t.texImage2D(ve,_e,be,pt,xe,0,Ve,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),gt(C)?v.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,ve,s.get(ee).__webglTexture,0,st(C)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Se,ve,s.get(ee).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(D,C,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,D),C.depthBuffer&&!C.stencilBuffer){let Se=c===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ee||gt(C)){const ve=C.depthTexture;ve&&ve.isDepthTexture&&(ve.type===Pr?Se=i.DEPTH_COMPONENT32F:ve.type===br&&(Se=i.DEPTH_COMPONENT24));const _e=st(C);gt(C)?v.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,Se,C.width,C.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Se,C.width,C.height)}else i.renderbufferStorage(i.RENDERBUFFER,Se,C.width,C.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(C.depthBuffer&&C.stencilBuffer){const Se=st(C);ee&&gt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,C.width,C.height):gt(C)?v.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{const Se=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ve=0;ve<Se.length;ve++){const _e=Se[ve],Ve=l.convert(_e.format,_e.colorSpace),Ee=l.convert(_e.type),be=$(_e.internalFormat,Ve,Ee,_e.colorSpace),Je=st(C);ee&&gt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,be,C.width,C.height):gt(C)?v.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,be,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,be,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function en(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),G(C.depthTexture,0);const Se=s.get(C.depthTexture).__webglTexture,ve=st(C);if(C.depthTexture.format===gs)gt(C)?v.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0);else if(C.depthTexture.format===xo)gt(C)?v.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function He(D){const C=s.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");en(C.__webglFramebuffer,D)}else if(ee){C.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[Se]),C.__webglDepthbuffer[Se]=i.createRenderbuffer(),Z(C.__webglDepthbuffer[Se],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),Z(C.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(D,C,ee){const Se=s.get(D);C!==void 0&&Xe(Se.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&He(D)}function Qe(D){const C=D.texture,ee=s.get(D),Se=s.get(C);D.addEventListener("dispose",ue),D.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture()),Se.__version=C.version,u.memory.textures++);const ve=D.isWebGLCubeRenderTarget===!0,_e=D.isWebGLMultipleRenderTargets===!0,Ve=b(D)||c;if(ve){ee.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(c&&C.mipmaps&&C.mipmaps.length>0){ee.__webglFramebuffer[Ee]=[];for(let be=0;be<C.mipmaps.length;be++)ee.__webglFramebuffer[Ee][be]=i.createFramebuffer()}else ee.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(c&&C.mipmaps&&C.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ee=0;Ee<C.mipmaps.length;Ee++)ee.__webglFramebuffer[Ee]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(_e)if(o.drawBuffers){const Ee=D.texture;for(let be=0,Je=Ee.length;be<Je;be++){const pt=s.get(Ee[be]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&D.samples>0&&gt(D)===!1){const Ee=_e?C:[C];ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let be=0;be<Ee.length;be++){const Je=Ee[be];ee.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[be]);const pt=l.convert(Je.format,Je.colorSpace),xe=l.convert(Je.type),Mt=$(Je.internalFormat,pt,xe,Je.colorSpace,D.isXRRenderTarget===!0),nt=st(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,ee.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,Se.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,C,Ve);for(let Ee=0;Ee<6;Ee++)if(c&&C.mipmaps&&C.mipmaps.length>0)for(let be=0;be<C.mipmaps.length;be++)Xe(ee.__webglFramebuffer[Ee][be],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,be);else Xe(ee.__webglFramebuffer[Ee],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);B(C,Ve)&&O(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const Ee=D.texture;for(let be=0,Je=Ee.length;be<Je;be++){const pt=Ee[be],xe=s.get(pt);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),Fe(i.TEXTURE_2D,pt,Ve),Xe(ee.__webglFramebuffer,D,pt,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),B(pt,Ve)&&O(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(c?Ee=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,Se.__webglTexture),Fe(Ee,C,Ve),c&&C.mipmaps&&C.mipmaps.length>0)for(let be=0;be<C.mipmaps.length;be++)Xe(ee.__webglFramebuffer[be],D,C,i.COLOR_ATTACHMENT0,Ee,be);else Xe(ee.__webglFramebuffer,D,C,i.COLOR_ATTACHMENT0,Ee,0);B(C,Ve)&&O(Ee),t.unbindTexture()}D.depthBuffer&&He(D)}function At(D){const C=b(D)||c,ee=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Se=0,ve=ee.length;Se<ve;Se++){const _e=ee[Se];if(B(_e,C)){const Ve=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=s.get(_e).__webglTexture;t.bindTexture(Ve,Ee),O(Ve),t.unbindTexture()}}}function at(D){if(c&&D.samples>0&&gt(D)===!1){const C=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],ee=D.width,Se=D.height;let ve=i.COLOR_BUFFER_BIT;const _e=[],Ve=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=s.get(D),be=D.isWebGLMultipleRenderTargets===!0;if(be)for(let Je=0;Je<C.length;Je++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Je=0;Je<C.length;Je++){_e.push(i.COLOR_ATTACHMENT0+Je),D.depthBuffer&&_e.push(Ve);const pt=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(pt===!1&&(D.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Je]),pt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ve])),be){const xe=s.get(C[Je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,ee,Se,0,0,ee,Se,ve,i.NEAREST),S&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Je=0;Je<C.length;Je++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Je]);const pt=s.get(C[Je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.TEXTURE_2D,pt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function st(D){return Math.min(g,D.samples)}function gt(D){const C=s.get(D);return c&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function bt(D){const C=u.render.frame;E.get(D)!==C&&(E.set(D,C),D.update())}function jt(D,C){const ee=D.colorSpace,Se=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===kd||ee!==Ji&&ee!==ui&&(Tt.getTransfer(ee)===Dt?c===!1?e.has("EXT_sRGB")===!0&&Se===Mi?(D.format=kd,D.minFilter=ai,D.generateMipmaps=!1):C=ty.sRGBToLinear(C):(Se!==Mi||ve!==Ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),C}this.allocateTextureUnit=q,this.resetTextureUnits=J,this.setTexture2D=G,this.setTexture2DArray=w,this.setTexture3D=F,this.setTextureCube=ce,this.rebindTextures=tt,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=gt}function IP(i,e,t){const s=t.isWebGL2;function o(l,u=ui){let c;const d=Tt.getTransfer(u);if(l===Ir)return i.UNSIGNED_BYTE;if(l===Y_)return i.UNSIGNED_SHORT_4_4_4_4;if(l===$_)return i.UNSIGNED_SHORT_5_5_5_1;if(l===g1)return i.BYTE;if(l===v1)return i.SHORT;if(l===dh)return i.UNSIGNED_SHORT;if(l===q_)return i.INT;if(l===br)return i.UNSIGNED_INT;if(l===Pr)return i.FLOAT;if(l===Ma)return s?i.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===_1)return i.ALPHA;if(l===Mi)return i.RGBA;if(l===y1)return i.LUMINANCE;if(l===x1)return i.LUMINANCE_ALPHA;if(l===gs)return i.DEPTH_COMPONENT;if(l===xo)return i.DEPTH_STENCIL;if(l===kd)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===S1)return i.RED;if(l===K_)return i.RED_INTEGER;if(l===M1)return i.RG;if(l===Z_)return i.RG_INTEGER;if(l===Q_)return i.RGBA_INTEGER;if(l===Hf||l===Gf||l===Wf||l===jf)if(d===Dt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Hf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Gf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Wf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===jf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Hf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Gf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Wf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===jf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===o0||l===a0||l===l0||l===u0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===o0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===a0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===l0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===u0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===E1)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===c0||l===f0)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===c0)return d===Dt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===f0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===d0||l===h0||l===p0||l===m0||l===g0||l===v0||l===_0||l===y0||l===x0||l===S0||l===M0||l===E0||l===T0||l===w0)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===d0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===h0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===p0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===m0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===g0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===v0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===_0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===y0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===x0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===S0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===M0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===E0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===T0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===w0)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Xf||l===A0||l===C0)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Xf)return d===Dt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===A0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===C0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===T1||l===R0||l===b0||l===P0)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Xf)return c.COMPRESSED_RED_RGTC1_EXT;if(l===R0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===b0)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===P0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===ms?s?i.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[l]!==void 0?i[l]:null}return{convert:o}}class FP extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class du extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OP={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,s),y=this._getHandJoint(h,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(OP)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new du;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class kP extends $n{constructor(e,t,s,o,l,u,c,d,h,m){if(m=m!==void 0?m:gs,m!==gs&&m!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===gs&&(s=br),s===void 0&&m===xo&&(s=ms),super(null,o,l,u,c,d,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Pn,this.minFilter=d!==void 0?d:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class BP extends Mo{constructor(e,t){super();const s=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,m=null,g=null,v=null,S=null,E=null;const M=t.getContextAttributes();let x=null,y=null;const L=[],A=[],b=new li;b.layers.enable(1),b.viewport=new fn;const N=new li;N.layers.enable(2),N.viewport=new fn;const B=[b,N],O=new FP;O.layers.enable(1),O.layers.enable(2);let $=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let F=L[w];return F===void 0&&(F=new vd,L[w]=F),F.getTargetRaySpace()},this.getControllerGrip=function(w){let F=L[w];return F===void 0&&(F=new vd,L[w]=F),F.getGripSpace()},this.getHand=function(w){let F=L[w];return F===void 0&&(F=new vd,L[w]=F),F.getHandSpace()};function I(w){const F=A.indexOf(w.inputSource);if(F===-1)return;const ce=L[F];ce!==void 0&&(ce.update(w.inputSource,w.frame,h||u),ce.dispatchEvent({type:w.type,data:w.inputSource}))}function le(){o.removeEventListener("select",I),o.removeEventListener("selectstart",I),o.removeEventListener("selectend",I),o.removeEventListener("squeeze",I),o.removeEventListener("squeezestart",I),o.removeEventListener("squeezeend",I),o.removeEventListener("end",le),o.removeEventListener("inputsourceschange",ue);for(let w=0;w<L.length;w++){const F=A[w];F!==null&&(A[w]=null,L[w].disconnect(F))}$=null,R=null,e.setRenderTarget(x),S=null,v=null,g=null,o=null,y=null,G.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){l=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){c=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(w){h=w},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(w){if(o=w,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",I),o.addEventListener("selectstart",I),o.addEventListener("selectend",I),o.addEventListener("squeeze",I),o.addEventListener("squeezestart",I),o.addEventListener("squeezeend",I),o.addEventListener("end",le),o.addEventListener("inputsourceschange",ue),M.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:o.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,F),o.updateRenderState({baseLayer:S}),y=new ys(S.framebufferWidth,S.framebufferHeight,{format:Mi,type:Ir,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let F=null,ce=null,de=null;M.depth&&(de=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=M.stencil?xo:gs,ce=M.stencil?ms:br);const me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(me),o.updateRenderState({layers:[v]}),y=new ys(v.textureWidth,v.textureHeight,{format:Mi,type:Ir,depthTexture:new kP(v.textureWidth,v.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const Te=e.properties.get(y);Te.__ignoreDepthValues=v.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),G.setContext(o),G.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function ue(w){for(let F=0;F<w.removed.length;F++){const ce=w.removed[F],de=A.indexOf(ce);de>=0&&(A[de]=null,L[de].disconnect(ce))}for(let F=0;F<w.added.length;F++){const ce=w.added[F];let de=A.indexOf(ce);if(de===-1){for(let Te=0;Te<L.length;Te++)if(Te>=A.length){A.push(ce),de=Te;break}else if(A[Te]===null){A[Te]=ce,de=Te;break}if(de===-1)break}const me=L[de];me&&me.connect(ce)}}const fe=new ne,V=new ne;function ie(w,F,ce){fe.setFromMatrixPosition(F.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);const de=fe.distanceTo(V),me=F.projectionMatrix.elements,Te=ce.projectionMatrix.elements,Fe=me[14]/(me[10]-1),Re=me[14]/(me[10]+1),De=(me[9]+1)/me[5],ot=(me[9]-1)/me[5],Xe=(me[8]-1)/me[0],Z=(Te[8]+1)/Te[0],en=Fe*Xe,He=Fe*Z,tt=de/(-Xe+Z),Qe=tt*-Xe;F.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Qe),w.translateZ(tt),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();const At=Fe+tt,at=Re+tt,st=en-Qe,gt=He+(de-Qe),bt=De*Re/at*At,jt=ot*Re/at*At;w.projectionMatrix.makePerspective(st,gt,bt,jt,At,at),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}function se(w,F){F===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(F.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(o===null)return;O.near=N.near=b.near=w.near,O.far=N.far=b.far=w.far,($!==O.near||R!==O.far)&&(o.updateRenderState({depthNear:O.near,depthFar:O.far}),$=O.near,R=O.far);const F=w.parent,ce=O.cameras;se(O,F);for(let de=0;de<ce.length;de++)se(ce[de],F);ce.length===2?ie(O,b,N):O.projectionMatrix.copy(b.projectionMatrix),J(w,O,F)};function J(w,F,ce){ce===null?w.matrix.copy(F.matrixWorld):(w.matrix.copy(ce.matrixWorld),w.matrix.invert(),w.matrix.multiply(F.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(F.projectionMatrix),w.projectionMatrixInverse.copy(F.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Bd*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(w){d=w,v!==null&&(v.fixedFoveation=w),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=w)};let q=null;function K(w,F){if(m=F.getViewerPose(h||u),E=F,m!==null){const ce=m.views;S!==null&&(e.setRenderTargetFramebuffer(y,S.framebuffer),e.setRenderTarget(y));let de=!1;ce.length!==O.cameras.length&&(O.cameras.length=0,de=!0);for(let me=0;me<ce.length;me++){const Te=ce[me];let Fe=null;if(S!==null)Fe=S.getViewport(Te);else{const De=g.getViewSubImage(v,Te);Fe=De.viewport,me===0&&(e.setRenderTargetTextures(y,De.colorTexture,v.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(y))}let Re=B[me];Re===void 0&&(Re=new li,Re.layers.enable(me),Re.viewport=new fn,B[me]=Re),Re.matrix.fromArray(Te.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Te.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),me===0&&(O.matrix.copy(Re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),de===!0&&O.cameras.push(Re)}}for(let ce=0;ce<L.length;ce++){const de=A[ce],me=L[ce];de!==null&&me!==void 0&&me.update(de,F,h||u)}q&&q(w,F),F.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:F}),E=null}const G=new py;G.setAnimationLoop(K),this.setAnimationLoop=function(w){q=w},this.dispose=function(){}}}function VP(i,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function s(x,y){y.color.getRGB(x.fogColor.value,cy(i)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,L,A,b){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),g(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,b)):y.isMeshMatcapMaterial?(l(x,y),E(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),M(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?d(x,y,L,A):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Vn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Vn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const L=e.get(y).envMap;if(L&&(x.envMap.value=L,x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const A=i._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*A,t(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,L,A){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*L,x.scale.value=A*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,L){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Vn&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const L=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function zP(i,e,t,s){let o={},l={},u=[];const c=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(L,A){const b=A.program;s.uniformBlockBinding(L,b)}function h(L,A){let b=o[L.id];b===void 0&&(E(L),b=m(L),o[L.id]=b,L.addEventListener("dispose",x));const N=A.program;s.updateUBOMapping(L,N);const B=e.render.frame;l[L.id]!==B&&(v(L),l[L.id]=B)}function m(L){const A=g();L.__bindingPointIndex=A;const b=i.createBuffer(),N=L.__size,B=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,N,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function g(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const A=o[L.id],b=L.uniforms,N=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let B=0,O=b.length;B<O;B++){const $=b[B];if(S($,B,N)===!0){const R=$.__offset,I=Array.isArray($.value)?$.value:[$.value];let le=0;for(let ue=0;ue<I.length;ue++){const fe=I[ue],V=M(fe);typeof fe=="number"?($.__data[0]=fe,i.bufferSubData(i.UNIFORM_BUFFER,R+le,$.__data)):fe.isMatrix3?($.__data[0]=fe.elements[0],$.__data[1]=fe.elements[1],$.__data[2]=fe.elements[2],$.__data[3]=fe.elements[0],$.__data[4]=fe.elements[3],$.__data[5]=fe.elements[4],$.__data[6]=fe.elements[5],$.__data[7]=fe.elements[0],$.__data[8]=fe.elements[6],$.__data[9]=fe.elements[7],$.__data[10]=fe.elements[8],$.__data[11]=fe.elements[0]):(fe.toArray($.__data,le),le+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,$.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(L,A,b){const N=L.value;if(b[A]===void 0){if(typeof N=="number")b[A]=N;else{const B=Array.isArray(N)?N:[N],O=[];for(let $=0;$<B.length;$++)O.push(B[$].clone());b[A]=O}return!0}else if(typeof N=="number"){if(b[A]!==N)return b[A]=N,!0}else{const B=Array.isArray(b[A])?b[A]:[b[A]],O=Array.isArray(N)?N:[N];for(let $=0;$<B.length;$++){const R=B[$];if(R.equals(O[$])===!1)return R.copy(O[$]),!0}}return!1}function E(L){const A=L.uniforms;let b=0;const N=16;let B=0;for(let O=0,$=A.length;O<$;O++){const R=A[O],I={boundary:0,storage:0},le=Array.isArray(R.value)?R.value:[R.value];for(let ue=0,fe=le.length;ue<fe;ue++){const V=le[ue],ie=M(V);I.boundary+=ie.boundary,I.storage+=ie.storage}if(R.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,O>0){B=b%N;const ue=N-B;B!==0&&ue-I.boundary<0&&(b+=N-B,R.__offset=b)}b+=I.storage}return B=b%N,B>0&&(b+=N-B),L.__size=b,L.__cache={},this}function M(L){const A={boundary:0,storage:0};return typeof L=="number"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=48,A.storage=48):L.isMatrix4?(A.boundary=64,A.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),A}function x(L){const A=L.target;A.removeEventListener("dispose",x);const b=u.indexOf(A.__bindingPointIndex);u.splice(b,1),i.deleteBuffer(o[A.id]),delete o[A.id],delete l[A.id]}function y(){for(const L in o)i.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class yy{constructor(e={}){const{canvas:t=k1(),context:s=null,depth:o=!0,stencil:l=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let v;s!==null?v=s.getContextAttributes().alpha:v=u;const S=new Uint32Array(4),E=new Int32Array(4);let M=null,x=null;const y=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this._useLegacyLights=!1,this.toneMapping=Ur,this.toneMappingExposure=1;const A=this;let b=!1,N=0,B=0,O=null,$=-1,R=null;const I=new fn,le=new fn;let ue=null;const fe=new St(0);let V=0,ie=t.width,se=t.height,J=1,q=null,K=null;const G=new fn(0,0,ie,se),w=new fn(0,0,ie,se);let F=!1;const ce=new hy;let de=!1,me=!1,Te=null;const Fe=new an,Re=new wt,De=new ne,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return O===null?J:1}let Z=s;function en(P,X){for(let te=0;te<P.length;te++){const re=P[te],oe=t.getContext(re,X);if(oe!==null)return oe}return null}try{const P={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fh}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),Z===null){const X=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&X.shift(),Z=en(X,P),Z===null)throw en(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let He,tt,Qe,At,at,st,gt,bt,jt,D,C,ee,Se,ve,_e,Ve,Ee,be,Je,pt,xe,Mt,nt,Ke;function Ge(){He=new ZR(Z),tt=new WR(Z,He,e),He.init(tt),Mt=new IP(Z,He,tt),Qe=new NP(Z,He,tt),At=new eb(Z),at=new yP,st=new UP(Z,He,Qe,at,tt,Mt,At),gt=new XR(A),bt=new KR(A),jt=new uA(Z,tt),nt=new HR(Z,He,jt,tt),D=new QR(Z,jt,At,nt),C=new rb(Z,D,jt,At),Je=new ib(Z,tt,st),Ve=new jR(at),ee=new _P(A,gt,bt,He,tt,nt,Ve),Se=new VP(A,at),ve=new SP,_e=new CP(He,tt),be=new zR(A,gt,bt,Qe,C,v,d),Ee=new DP(A,C,tt),Ke=new zP(Z,At,tt,Qe),pt=new GR(Z,He,At,tt),xe=new JR(Z,He,At,tt),At.programs=ee.programs,A.capabilities=tt,A.extensions=He,A.properties=at,A.renderLists=ve,A.shadowMap=Ee,A.state=Qe,A.info=At}Ge();const Ne=new BP(A,Z);this.xr=Ne,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const P=He.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=He.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(P){P!==void 0&&(J=P,this.setSize(ie,se,!1))},this.getSize=function(P){return P.set(ie,se)},this.setSize=function(P,X,te=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=P,se=X,t.width=Math.floor(P*J),t.height=Math.floor(X*J),te===!0&&(t.style.width=P+"px",t.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(ie*J,se*J).floor()},this.setDrawingBufferSize=function(P,X,te){ie=P,se=X,J=te,t.width=Math.floor(P*te),t.height=Math.floor(X*te),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(G)},this.setViewport=function(P,X,te,re){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,X,te,re),Qe.viewport(I.copy(G).multiplyScalar(J).floor())},this.getScissor=function(P){return P.copy(w)},this.setScissor=function(P,X,te,re){P.isVector4?w.set(P.x,P.y,P.z,P.w):w.set(P,X,te,re),Qe.scissor(le.copy(w).multiplyScalar(J).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(P){Qe.setScissorTest(F=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){K=P},this.getClearColor=function(P){return P.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(P=!0,X=!0,te=!0){let re=0;if(P){let oe=!1;if(O!==null){const Pe=O.texture.format;oe=Pe===Q_||Pe===Z_||Pe===K_}if(oe){const Pe=O.texture.type,ze=Pe===Ir||Pe===br||Pe===dh||Pe===ms||Pe===Y_||Pe===$_,$e=be.getClearColor(),Ue=be.getClearAlpha(),lt=$e.r,it=$e.g,rt=$e.b;ze?(S[0]=lt,S[1]=it,S[2]=rt,S[3]=Ue,Z.clearBufferuiv(Z.COLOR,0,S)):(E[0]=lt,E[1]=it,E[2]=rt,E[3]=Ue,Z.clearBufferiv(Z.COLOR,0,E))}else re|=Z.COLOR_BUFFER_BIT}X&&(re|=Z.DEPTH_BUFFER_BIT),te&&(re|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ve.dispose(),_e.dispose(),at.dispose(),gt.dispose(),bt.dispose(),C.dispose(),nt.dispose(),Ke.dispose(),ee.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Mn),Ne.removeEventListener("sessionend",yt),Te&&(Te.dispose(),Te=null),$t.stop()};function ct(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const P=At.autoReset,X=Ee.enabled,te=Ee.autoUpdate,re=Ee.needsUpdate,oe=Ee.type;Ge(),At.autoReset=P,Ee.enabled=X,Ee.autoUpdate=te,Ee.needsUpdate=re,Ee.type=oe}function Ae(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Me(P){const X=P.target;X.removeEventListener("dispose",Me),ae(X)}function ae(P){we(P),at.remove(P)}function we(P){const X=at.get(P).programs;X!==void 0&&(X.forEach(function(te){ee.releaseProgram(te)}),P.isShaderMaterial&&ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,te,re,oe,Pe){X===null&&(X=ot);const ze=oe.isMesh&&oe.matrixWorld.determinant()<0,$e=Wu(P,X,te,re,oe);Qe.setMaterial(re,ze);let Ue=te.index,lt=1;if(re.wireframe===!0){if(Ue=D.getWireframeAttribute(te),Ue===void 0)return;lt=2}const it=te.drawRange,rt=te.attributes.position;let Ct=it.start*lt,En=(it.start+it.count)*lt;Pe!==null&&(Ct=Math.max(Ct,Pe.start*lt),En=Math.min(En,(Pe.start+Pe.count)*lt)),Ue!==null?(Ct=Math.max(Ct,0),En=Math.min(En,Ue.count)):rt!=null&&(Ct=Math.max(Ct,0),En=Math.min(En,rt.count));const zt=En-Ct;if(zt<0||zt===1/0)return;nt.setup(oe,re,$e,te,Ue);let Ln,vt=pt;if(Ue!==null&&(Ln=jt.get(Ue),vt=xe,vt.setIndex(Ln)),oe.isMesh)re.wireframe===!0?(Qe.setLineWidth(re.wireframeLinewidth*Xe()),vt.setMode(Z.LINES)):vt.setMode(Z.TRIANGLES);else if(oe.isLine){let ft=re.linewidth;ft===void 0&&(ft=1),Qe.setLineWidth(ft*Xe()),oe.isLineSegments?vt.setMode(Z.LINES):oe.isLineLoop?vt.setMode(Z.LINE_LOOP):vt.setMode(Z.LINE_STRIP)}else oe.isPoints?vt.setMode(Z.POINTS):oe.isSprite&&vt.setMode(Z.TRIANGLES);if(oe.isInstancedMesh)vt.renderInstances(Ct,zt,oe.count);else if(te.isInstancedBufferGeometry){const ft=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Tn=Math.min(te.instanceCount,ft);vt.renderInstances(Ct,zt,Tn)}else vt.render(Ct,zt)};function qe(P,X,te){P.transparent===!0&&P.side===qi&&P.forceSinglePass===!1?(P.side=Vn,P.needsUpdate=!0,tr(P,X,te),P.side=kr,P.needsUpdate=!0,tr(P,X,te),P.side=qi):tr(P,X,te)}this.compile=function(P,X,te=null){te===null&&(te=P),x=_e.get(te),x.init(),L.push(x),te.traverseVisible(function(oe){oe.isLight&&oe.layers.test(X.layers)&&(x.pushLight(oe),oe.castShadow&&x.pushShadow(oe))}),P!==te&&P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(X.layers)&&(x.pushLight(oe),oe.castShadow&&x.pushShadow(oe))}),x.setupLights(A._useLegacyLights);const re=new Set;return P.traverse(function(oe){const Pe=oe.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){const $e=Pe[ze];qe($e,te,oe),re.add($e)}else qe(Pe,te,oe),re.add(Pe)}),L.pop(),x=null,re},this.compileAsync=function(P,X,te=null){const re=this.compile(P,X,te);return new Promise(oe=>{function Pe(){if(re.forEach(function(ze){at.get(ze).currentProgram.isReady()&&re.delete(ze)}),re.size===0){oe(P);return}setTimeout(Pe,10)}He.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let mt=null;function Ut(P){mt&&mt(P)}function Mn(){$t.stop()}function yt(){$t.start()}const $t=new py;$t.setAnimationLoop(Ut),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(P){mt=P,Ne.setAnimationLoop(P),P===null?$t.stop():$t.start()},Ne.addEventListener("sessionstart",Mn),Ne.addEventListener("sessionend",yt),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(X),X=Ne.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,X,O),x=_e.get(P,L.length),x.init(),L.push(x),Fe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ce.setFromProjectionMatrix(Fe),me=this.localClippingEnabled,de=Ve.init(this.clippingPlanes,me),M=ve.get(P,y.length),M.init(),y.push(M),dn(P,X,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(q,K),this.info.render.frame++,de===!0&&Ve.beginShadows();const te=x.state.shadowsArray;if(Ee.render(te,P,X),de===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),be.render(M,P),x.setupLights(A._useLegacyLights),X.isArrayCamera){const re=X.cameras;for(let oe=0,Pe=re.length;oe<Pe;oe++){const ze=re[oe];Na(M,P,ze,ze.viewport)}}else Na(M,P,X);O!==null&&(st.updateMultisampleRenderTarget(O),st.updateRenderTargetMipmap(O)),P.isScene===!0&&P.onAfterRender(A,P,X),nt.resetDefaultState(),$=-1,R=null,L.pop(),L.length>0?x=L[L.length-1]:x=null,y.pop(),y.length>0?M=y[y.length-1]:M=null};function dn(P,X,te,re){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ce.intersectsSprite(P)){re&&De.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Fe);const ze=C.update(P),$e=P.material;$e.visible&&M.push(P,ze,$e,te,De.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ce.intersectsObject(P))){const ze=C.update(P),$e=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),De.copy(P.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),De.copy(ze.boundingSphere.center)),De.applyMatrix4(P.matrixWorld).applyMatrix4(Fe)),Array.isArray($e)){const Ue=ze.groups;for(let lt=0,it=Ue.length;lt<it;lt++){const rt=Ue[lt],Ct=$e[rt.materialIndex];Ct&&Ct.visible&&M.push(P,ze,Ct,te,De.z,rt)}}else $e.visible&&M.push(P,ze,$e,te,De.z,null)}}const Pe=P.children;for(let ze=0,$e=Pe.length;ze<$e;ze++)dn(Pe[ze],X,te,re)}function Na(P,X,te,re){const oe=P.opaque,Pe=P.transmissive,ze=P.transparent;x.setupLightsView(te),de===!0&&Ve.setGlobalState(A.clippingPlanes,te),Pe.length>0&&Vr(oe,Pe,X,te),re&&Qe.viewport(I.copy(re)),oe.length>0&&Pi(oe,X,te),Pe.length>0&&Pi(Pe,X,te),ze.length>0&&Pi(ze,X,te),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Vr(P,X,te,re){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;const Pe=tt.isWebGL2;Te===null&&(Te=new ys(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?Ma:Ir,minFilter:Sa,samples:Pe?4:0})),A.getDrawingBufferSize(Re),Pe?Te.setSize(Re.x,Re.y):Te.setSize(Vd(Re.x),Vd(Re.y));const ze=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(fe),V=A.getClearAlpha(),V<1&&A.setClearColor(16777215,.5),A.clear();const $e=A.toneMapping;A.toneMapping=Ur,Pi(P,te,re),st.updateMultisampleRenderTarget(Te),st.updateRenderTargetMipmap(Te);let Ue=!1;for(let lt=0,it=X.length;lt<it;lt++){const rt=X[lt],Ct=rt.object,En=rt.geometry,zt=rt.material,Ln=rt.group;if(zt.side===qi&&Ct.layers.test(re.layers)){const vt=zt.side;zt.side=Vn,zt.needsUpdate=!0,zr(Ct,te,re,En,zt,Ln),zt.side=vt,zt.needsUpdate=!0,Ue=!0}}Ue===!0&&(st.updateMultisampleRenderTarget(Te),st.updateRenderTargetMipmap(Te)),A.setRenderTarget(ze),A.setClearColor(fe,V),A.toneMapping=$e}function Pi(P,X,te){const re=X.isScene===!0?X.overrideMaterial:null;for(let oe=0,Pe=P.length;oe<Pe;oe++){const ze=P[oe],$e=ze.object,Ue=ze.geometry,lt=re===null?ze.material:re,it=ze.group;$e.layers.test(te.layers)&&zr($e,X,te,Ue,lt,it)}}function zr(P,X,te,re,oe,Pe){P.onBeforeRender(A,X,te,re,oe,Pe),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),oe.onBeforeRender(A,X,te,re,P,Pe),oe.transparent===!0&&oe.side===qi&&oe.forceSinglePass===!1?(oe.side=Vn,oe.needsUpdate=!0,A.renderBufferDirect(te,X,re,oe,P,Pe),oe.side=kr,oe.needsUpdate=!0,A.renderBufferDirect(te,X,re,oe,P,Pe),oe.side=qi):A.renderBufferDirect(te,X,re,oe,P,Pe),P.onAfterRender(A,X,te,re,oe,Pe)}function tr(P,X,te){X.isScene!==!0&&(X=ot);const re=at.get(P),oe=x.state.lights,Pe=x.state.shadowsArray,ze=oe.state.version,$e=ee.getParameters(P,oe.state,Pe,X,te),Ue=ee.getProgramCacheKey($e);let lt=re.programs;re.environment=P.isMeshStandardMaterial?X.environment:null,re.fog=X.fog,re.envMap=(P.isMeshStandardMaterial?bt:gt).get(P.envMap||re.environment),lt===void 0&&(P.addEventListener("dispose",Me),lt=new Map,re.programs=lt);let it=lt.get(Ue);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===ze)return Ia(P,$e),it}else $e.uniforms=ee.getUniforms(P),P.onBuild(te,$e,A),P.onBeforeCompile($e,A),it=ee.acquireProgram($e,Ue),lt.set(Ue,it),re.uniforms=$e.uniforms;const rt=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(rt.clippingPlanes=Ve.uniform),Ia(P,$e),re.needsLights=Fa(P),re.lightsStateVersion=ze,re.needsLights&&(rt.ambientLightColor.value=oe.state.ambient,rt.lightProbe.value=oe.state.probe,rt.directionalLights.value=oe.state.directional,rt.directionalLightShadows.value=oe.state.directionalShadow,rt.spotLights.value=oe.state.spot,rt.spotLightShadows.value=oe.state.spotShadow,rt.rectAreaLights.value=oe.state.rectArea,rt.ltc_1.value=oe.state.rectAreaLTC1,rt.ltc_2.value=oe.state.rectAreaLTC2,rt.pointLights.value=oe.state.point,rt.pointLightShadows.value=oe.state.pointShadow,rt.hemisphereLights.value=oe.state.hemi,rt.directionalShadowMap.value=oe.state.directionalShadowMap,rt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,rt.spotShadowMap.value=oe.state.spotShadowMap,rt.spotLightMatrix.value=oe.state.spotLightMatrix,rt.spotLightMap.value=oe.state.spotLightMap,rt.pointShadowMap.value=oe.state.pointShadowMap,rt.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function Ua(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=vu.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function Ia(P,X){const te=at.get(P);te.outputColorSpace=X.outputColorSpace,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Wu(P,X,te,re,oe){X.isScene!==!0&&(X=ot),st.resetTextureUnits();const Pe=X.fog,ze=re.isMeshStandardMaterial?X.environment:null,$e=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ji,Ue=(re.isMeshStandardMaterial?bt:gt).get(re.envMap||ze),lt=re.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),rt=!!te.morphAttributes.position,Ct=!!te.morphAttributes.normal,En=!!te.morphAttributes.color;let zt=Ur;re.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(zt=A.toneMapping);const Ln=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,vt=Ln!==void 0?Ln.length:0,ft=at.get(re),Tn=x.state.lights;if(de===!0&&(me===!0||P!==R)){const wn=P===R&&re.id===$;Ve.setState(re,P,wn)}let Bt=!1;re.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==Tn.state.version||ft.outputColorSpace!==$e||oe.isInstancedMesh&&ft.instancing===!1||!oe.isInstancedMesh&&ft.instancing===!0||oe.isSkinnedMesh&&ft.skinning===!1||!oe.isSkinnedMesh&&ft.skinning===!0||oe.isInstancedMesh&&ft.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&ft.instancingColor===!1&&oe.instanceColor!==null||ft.envMap!==Ue||re.fog===!0&&ft.fog!==Pe||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==Ve.numPlanes||ft.numIntersection!==Ve.numIntersection)||ft.vertexAlphas!==lt||ft.vertexTangents!==it||ft.morphTargets!==rt||ft.morphNormals!==Ct||ft.morphColors!==En||ft.toneMapping!==zt||tt.isWebGL2===!0&&ft.morphTargetsCount!==vt)&&(Bt=!0):(Bt=!0,ft.__version=re.version);let Di=ft.currentProgram;Bt===!0&&(Di=tr(re,X,oe));let Oa=!1,Ei=!1,nr=!1;const Ht=Di.getUniforms(),Zn=ft.uniforms;if(Qe.useProgram(Di.program)&&(Oa=!0,Ei=!0,nr=!0),re.id!==$&&($=re.id,Ei=!0),Oa||R!==P){Ht.setValue(Z,"projectionMatrix",P.projectionMatrix),Ht.setValue(Z,"viewMatrix",P.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(Z,De.setFromMatrixPosition(P.matrixWorld)),tt.logarithmicDepthBuffer&&Ht.setValue(Z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ht.setValue(Z,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,Ei=!0,nr=!0)}if(oe.isSkinnedMesh){Ht.setOptional(Z,oe,"bindMatrix"),Ht.setOptional(Z,oe,"bindMatrixInverse");const wn=oe.skeleton;wn&&(tt.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Ht.setValue(Z,"boneTexture",wn.boneTexture,st),Ht.setValue(Z,"boneTextureSize",wn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const To=te.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&tt.isWebGL2===!0)&&Je.update(oe,te,Di),(Ei||ft.receiveShadow!==oe.receiveShadow)&&(ft.receiveShadow=oe.receiveShadow,Ht.setValue(Z,"receiveShadow",oe.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Zn.envMap.value=Ue,Zn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ei&&(Ht.setValue(Z,"toneMappingExposure",A.toneMappingExposure),ft.needsLights&&Li(Zn,nr),Pe&&re.fog===!0&&Se.refreshFogUniforms(Zn,Pe),Se.refreshMaterialUniforms(Zn,re,J,se,Te),vu.upload(Z,Ua(ft),Zn,st)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(vu.upload(Z,Ua(ft),Zn,st),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ht.setValue(Z,"center",oe.center),Ht.setValue(Z,"modelViewMatrix",oe.modelViewMatrix),Ht.setValue(Z,"normalMatrix",oe.normalMatrix),Ht.setValue(Z,"modelMatrix",oe.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const wn=re.uniformsGroups;for(let Hr=0,ka=wn.length;Hr<ka;Hr++)if(tt.isWebGL2){const Es=wn[Hr];Ke.update(Es,Di),Ke.bind(Es,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function Li(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Fa(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,X,te){at.get(P.texture).__webglTexture=X,at.get(P.depthTexture).__webglTexture=te;const re=at.get(P);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=te===void 0,re.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,X){const te=at.get(P);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,te=0){O=P,N=X,B=te;let re=!0,oe=null,Pe=!1,ze=!1;if(P){const Ue=at.get(P);Ue.__useDefaultFramebuffer!==void 0?(Qe.bindFramebuffer(Z.FRAMEBUFFER,null),re=!1):Ue.__webglFramebuffer===void 0?st.setupRenderTarget(P):Ue.__hasExternalTextures&&st.rebindTextures(P,at.get(P.texture).__webglTexture,at.get(P.depthTexture).__webglTexture);const lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(ze=!0);const it=at.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[X])?oe=it[X][te]:oe=it[X],Pe=!0):tt.isWebGL2&&P.samples>0&&st.useMultisampledRTT(P)===!1?oe=at.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?oe=it[te]:oe=it,I.copy(P.viewport),le.copy(P.scissor),ue=P.scissorTest}else I.copy(G).multiplyScalar(J).floor(),le.copy(w).multiplyScalar(J).floor(),ue=F;if(Qe.bindFramebuffer(Z.FRAMEBUFFER,oe)&&tt.drawBuffers&&re&&Qe.drawBuffers(P,oe),Qe.viewport(I),Qe.scissor(le),Qe.setScissorTest(ue),Pe){const Ue=at.get(P.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,te)}else if(ze){const Ue=at.get(P.texture),lt=X||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ue.__webglTexture,te||0,lt)}$=-1},this.readRenderTargetPixels=function(P,X,te,re,oe,Pe,ze){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=at.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ze!==void 0&&($e=$e[ze]),$e){Qe.bindFramebuffer(Z.FRAMEBUFFER,$e);try{const Ue=P.texture,lt=Ue.format,it=Ue.type;if(lt!==Mi&&Mt.convert(lt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=it===Ma&&(He.has("EXT_color_buffer_half_float")||tt.isWebGL2&&He.has("EXT_color_buffer_float"));if(it!==Ir&&Mt.convert(it)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Pr&&(tt.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-re&&te>=0&&te<=P.height-oe&&Z.readPixels(X,te,re,oe,Mt.convert(lt),Mt.convert(it),Pe)}finally{const Ue=O!==null?at.get(O).__webglFramebuffer:null;Qe.bindFramebuffer(Z.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(P,X,te=0){const re=Math.pow(2,-te),oe=Math.floor(X.image.width*re),Pe=Math.floor(X.image.height*re);st.setTexture2D(X,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,te,0,0,P.x,P.y,oe,Pe),Qe.unbindTexture()},this.copyTextureToTexture=function(P,X,te,re=0){const oe=X.image.width,Pe=X.image.height,ze=Mt.convert(te.format),$e=Mt.convert(te.type);st.setTexture2D(te,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,te.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,te.unpackAlignment),X.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,re,P.x,P.y,oe,Pe,ze,$e,X.image.data):X.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,re,P.x,P.y,X.mipmaps[0].width,X.mipmaps[0].height,ze,X.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,re,P.x,P.y,ze,$e,X.image),re===0&&te.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Qe.unbindTexture()},this.copyTextureToTexture3D=function(P,X,te,re,oe=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=P.max.x-P.min.x+1,ze=P.max.y-P.min.y+1,$e=P.max.z-P.min.z+1,Ue=Mt.convert(re.format),lt=Mt.convert(re.type);let it;if(re.isData3DTexture)st.setTexture3D(re,0),it=Z.TEXTURE_3D;else if(re.isDataArrayTexture)st.setTexture2DArray(re,0),it=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,re.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,re.unpackAlignment);const rt=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ct=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),En=Z.getParameter(Z.UNPACK_SKIP_PIXELS),zt=Z.getParameter(Z.UNPACK_SKIP_ROWS),Ln=Z.getParameter(Z.UNPACK_SKIP_IMAGES),vt=te.isCompressedTexture?te.mipmaps[0]:te.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,vt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,vt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,P.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,P.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,P.min.z),te.isDataTexture||te.isData3DTexture?Z.texSubImage3D(it,oe,X.x,X.y,X.z,Pe,ze,$e,Ue,lt,vt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(it,oe,X.x,X.y,X.z,Pe,ze,$e,Ue,vt.data)):Z.texSubImage3D(it,oe,X.x,X.y,X.z,Pe,ze,$e,Ue,lt,vt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,rt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ct),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,En),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,zt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ln),oe===0&&re.generateMipmaps&&Z.generateMipmap(it),Qe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?st.setTextureCube(P,0):P.isData3DTexture?st.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?st.setTexture2DArray(P,0):st.setTexture2D(P,0),Qe.unbindTexture()},this.resetState=function(){N=0,B=0,O=null,Qe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hh?"display-p3":"srgb",t.unpackColorSpace=Tt.workingColorSpace===Vu?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===cn?vs:J_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vs?cn:Ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class HP extends yy{}HP.prototype.isWebGL1Renderer=!0;class GP extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class xy extends La{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yv=new an,Hd=new ry,hu=new zu,pu=new ne;class WP extends zn{constructor(e=new er,t=new xy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),hu.copy(s.boundingSphere),hu.applyMatrix4(o),hu.radius+=l,e.ray.intersectsSphere(hu)===!1)return;yv.copy(o).invert(),Hd.copy(e.ray).applyMatrix4(yv);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=s.index,g=s.attributes.position;if(h!==null){const v=Math.max(0,u.start),S=Math.min(h.count,u.start+u.count);for(let E=v,M=S;E<M;E++){const x=h.getX(E);pu.fromBufferAttribute(g,x),xv(pu,x,d,o,e,t,this)}}else{const v=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let E=v,M=S;E<M;E++)pu.fromBufferAttribute(g,E),xv(pu,E,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function xv(i,e,t,s,o,l,u){const c=Hd.distanceSqToPoint(i);if(c<t){const d=new ne;Hd.closestPointToPoint(i,d),d.applyMatrix4(s);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,object:u})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);const jP=({isDark:i})=>{const e=Ye.useRef(null),t=Ye.useRef({x:0,y:0}),s=Ye.useRef(null);return Ye.useEffect(()=>{if(!e.current)return;const o=new GP,l=new li(75,window.innerWidth/window.innerHeight,.1,1e3),u=new yy({canvas:e.current,alpha:!0,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2));const c=1e3,d=new Float32Array(c*3),h=new Float32Array(c*3);for(let M=0;M<c;M++){d[M*3]=(Math.random()-.5)*20,d[M*3+1]=(Math.random()-.5)*20,d[M*3+2]=(Math.random()-.5)*20;const x=i?new St(3900150):new St(1982639);h[M*3]=x.r,h[M*3+1]=x.g,h[M*3+2]=x.b}const m=new er;m.setAttribute("position",new ci(d,3)),m.setAttribute("color",new ci(h,3));const g=new xy({size:.05,vertexColors:!0,transparent:!0,opacity:.8,blending:Ld});s.current=new WP(m,g),o.add(s.current),l.position.z=5;const v=M=>{t.current.x=M.clientX/window.innerWidth*2-1,t.current.y=-(M.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",v);const S=()=>{if(requestAnimationFrame(S),s.current){s.current.rotation.x+=.001,s.current.rotation.y+=.002;const M=s.current.geometry.attributes.position.array;for(let x=0;x<c;x++){const y=M[x*3],L=M[x*3+1],A=t.current.x*10,b=t.current.y*10;Math.sqrt((y-A)**2+(L-b)**2)>.1&&(M[x*3]+=(A-y)*1e-4,M[x*3+1]+=(b-L)*1e-4)}s.current.geometry.attributes.position.needsUpdate=!0}u.render(o,l)};S();const E=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",E),()=>{window.removeEventListener("mousemove",v),window.removeEventListener("resize",E),u.dispose()}},[i]),j.jsx("canvas",{ref:e,className:"fixed inset-0 w-full h-full pointer-events-none opacity-60"})},yn={name:"Trisha Rami",contact:{email:"trisharami24@gmail.com",mobile:"+91-989-88911-16",portfolio:"trishhaaa24.github.io",github:"github.com/trishhaaa24",linkedin:"linkedin.com/in/trishhaaa24"},projects:[{title:"Carbon Offset Tracker",tech:"Ethereum, Sepolia, Web3.js, Solidity, React",description:"Developed a blockchain-based carbon tracking system on the Ethereum Sepolia testnet.",image:"https://placehold.co/400x200/3b82f6/ffffff?text=Carbon+Tracker"},{title:"Token Faucet",tech:"Solidity, Polygon Sepolia",description:"Designed and deployed a smart contract for controlled token distribution.",image:"https://placehold.co/400x200/10b981/ffffff?text=Token+Faucet"},{title:"NFT Minting with IPFS",tech:"Solidity, IPFS, OpenZeppelin, JavaScript",description:"A decentralized application enabling users to mint NFTs with metadata securely stored on IPFS.",image:"https://placehold.co/400x200/8b5cf6/ffffff?text=NFT+Minting"}],experience:[{role:"R&D Intern",organization:"DAIICT",duration:"Jun 2025 - Aug 2025",description:"Research intern for a project titled 'Blockchain-based Queueing System.'"},{role:"Community Executive",organization:"Turning Point Institute of Student Community",duration:"Apr 2024 - Jan 2025",description:"Conducted offline technical & soft-skills public speaking training, impacting over 1500 students."},{role:"Social Ambassador",organization:"Pledge A Smile Foundation (NGO)",duration:"Jun 2024 - Jul 2024",description:"Led tech awareness workshops and crowdfunding campaigns, engaging 52,000+ followers."}],certificates:[{title:"Blockchain Development",issuer:"Coursera",date:"2024",image:"https://placehold.co/200x120/3b82f6/ffffff?text=Blockchain"},{title:"Machine Learning Specialization",issuer:"Stanford University",date:"2023",image:"https://placehold.co/200x120/10b981/ffffff?text=ML"},{title:"Solidity Smart Contracts",issuer:"Ethereum Foundation",date:"2023",image:"https://placehold.co/200x120/8b5cf6/ffffff?text=Solidity"}],publications:[{title:"Blockchain Technology in the Energy Sector",role:"Co-authored a research chapter on blockchain's role in energy trading and smart grids.",publication:"Upcoming IGI Global publication (February '24)"},{title:"Blockchain and NFT Research Project",role:"Conducted research on NFT applications in DeFi, digital ownership, and IP protection.",publication:"Upcoming IGI Global publication (April '25)"}],blog:[{title:"Getting Started with Smart Contract Development",excerpt:"A beginner-friendly guide to developing your first smart contract using Solidity.",date:"March 15, 2024",image:"https://placehold.co/400x200/3b82f6/ffffff?text=Smart+Contracts"},{title:"The Future of AI in Education",excerpt:"Exploring how artificial intelligence is transforming the educational landscape.",date:"February 28, 2024",image:"https://placehold.co/400x200/10b981/ffffff?text=AI+Education"}]},Sy=Ea.createContext({isDark:!0,toggleTheme:()=>{}}),XP=({children:i})=>{const[e,t]=Ye.useState(!0);Ye.useEffect(()=>{const o=localStorage.getItem("theme");o&&t(o==="dark")},[]),Ye.useEffect(()=>{localStorage.setItem("theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const s=()=>t(!e);return j.jsx(Sy.Provider,{value:{isDark:e,toggleTheme:s},children:i})},gh=()=>Ea.useContext(Sy),os=({title:i,children:e,id:t})=>{const{isDark:s}=gh();return j.jsx("section",{id:t,className:"py-16",children:j.jsxs(on.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"max-w-6xl mx-auto px-4",children:[j.jsx("h2",{className:`text-4xl font-bold text-center mb-12 ${s?"text-white":"text-gray-800"}`,children:i}),e]})})},qP=({name:i,description:e,icon:t,color:s})=>{const{isDark:o}=gh();return j.jsx(on.div,{whileHover:{scale:1.05,y:-5},className:`p-6 rounded-2xl shadow-lg transition-all duration-300 ${o?"bg-gray-800/50 backdrop-blur-md border border-gray-700/30":"bg-white/80 backdrop-blur-md border border-gray-200/50"}`,children:j.jsxs("div",{className:"text-center",children:[j.jsx("div",{className:"w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white text-2xl",style:{backgroundColor:s},children:t}),j.jsx("h3",{className:`text-xl font-bold mb-2 ${o?"text-white":"text-gray-800"}`,children:i}),j.jsx("p",{className:`text-sm ${o?"text-gray-300":"text-gray-600"}`,children:e})]})})},Sv=({title:i,subtitle:e,rating:t,downloads:s,position:o,delay:l})=>j.jsxs(on.div,{initial:{opacity:0,x:o==="left"?-50:50,y:20},animate:{opacity:1,x:0,y:0},transition:{delay:l,duration:.8},className:`absolute ${o==="left"?"left-8":"right-8"} bg-white rounded-xl shadow-2xl p-4 max-w-xs transform rotate-3`,style:{top:o==="left"?"20%":"30%",zIndex:10},children:[j.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[j.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",children:j.jsx(SS,{size:16,className:"text-white"})}),j.jsx("h3",{className:"font-semibold text-gray-800",children:i})]}),j.jsx("p",{className:"text-sm text-gray-600 mb-2",children:e}),t&&j.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[j.jsx(MS,{size:12,className:"text-yellow-400 fill-current"}),j.jsx("span",{className:"text-xs text-gray-600",children:t})]}),s&&j.jsxs("p",{className:"text-xs text-gray-500",children:[s," downloads"]})]}),YP=()=>{const[i,e]=Ye.useState("home"),[t,s]=Ye.useState({name:"",email:"",message:""}),{isDark:o,toggleTheme:l}=gh(),u=h=>{h.preventDefault(),alert("Thank you for your message! I will get back to you soon."),s({name:"",email:"",message:""})},c=h=>{const m=document.getElementById(h);m&&m.scrollIntoView({behavior:"smooth"}),e(h)},d=[{name:"Java",description:"Object-oriented programming and Android development",icon:j.jsx(pS,{size:32}),color:"#ed8b00"},{name:"Python",description:"Data science and machine learning",icon:j.jsx(mS,{size:32}),color:"#3776ab"},{name:"Solidity",description:"Smart contract development on Ethereum",icon:j.jsx(yS,{size:32}),color:"#363636"},{name:"React",description:"Frontend development and UI/UX",icon:j.jsx($m,{size:32}),color:"#61dafb"},{name:"Node.js",description:"Backend development and APIs",icon:j.jsx(TS,{size:32}),color:"#339933"},{name:"Mobile Dev",description:"Cross-platform mobile applications",icon:j.jsx(xS,{size:32}),color:"#ff6b6b"}];return j.jsxs("div",{className:`min-h-screen font-inter transition-all duration-300 ${o?"bg-black text-white":"bg-gradient-to-br from-fffff0 via-fffff0 to-fffff0 text-gray-800"}`,children:[i==="home"&&j.jsx(jP,{isDark:o}),j.jsx("header",{className:`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${o?"bg-black/80 border-gray-800":"bg-fffff0/80 border-gray-200"}`,children:j.jsx("div",{className:"max-w-7xl mx-auto px-4",children:j.jsxs("div",{className:"flex items-center justify-between h-16",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${o?"bg-gradient-to-r from-blue-500 to-purple-600 text-white":"bg-blue-500 text-white"}`,children:"TR"}),j.jsx("h1",{className:`text-xl font-bold ${o?"text-white":"text-gray-800"}`,children:yn.name})]}),j.jsx("nav",{className:"hidden md:flex items-center gap-6",children:[{id:"home",label:"Home"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"tools",label:"Tools"},{id:"certificates",label:"Certificates"},{id:"publications",label:"Publications"},{id:"blog",label:"Blog"},{id:"contact",label:"Contact"}].map(h=>j.jsx("button",{onClick:()=>c(h.id),className:`px-3 py-2 rounded-lg transition-all duration-200 ${i===h.id?o?"bg-blue-600 text-white":"bg-blue-500 text-white":o?"text-gray-300 hover:text-white":"text-gray-600 hover:text-gray-800"}`,children:h.label},h.id))}),j.jsxs("div",{className:"flex items-center gap-4",children:[j.jsx(on.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:l,className:`p-2 rounded-lg transition-all duration-300 ${o?"bg-gray-800 text-yellow-400":"bg-gray-100 text-gray-600"}`,children:o?j.jsx(ES,{size:24}):j.jsx(vS,{size:24})}),j.jsxs(on.button,{whileHover:{scale:1.05},className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${o?"bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700":"bg-blue-500 text-white hover:bg-blue-600"}`,children:[j.jsx(gS,{size:20}),"Resume"]})]})]})})}),j.jsxs("main",{children:[j.jsxs("section",{id:"home",className:"py-20 relative min-h-screen flex items-center justify-center overflow-hidden",children:[j.jsx("div",{className:"max-w-6xl mx-auto px-4 text-center relative z-10",children:j.jsxs(on.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[j.jsxs("h1",{className:`text-6xl md:text-8xl font-black mb-6 ${o?"text-white":"text-gray-800"}`,children:["AI/ML & Blockchain",j.jsx("br",{}),j.jsx("span",{className:"bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent",children:"Specialist"})]}),j.jsx("p",{className:`text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto ${o?"text-gray-300":"text-gray-600"}`,children:"Convert innovative ideas into cutting-edge solutions with AI, Machine Learning, and Blockchain technology"}),j.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-12",children:[j.jsxs(on.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"px-8 py-4 bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold rounded-lg flex items-center gap-2 hover:from-lime-500 hover:to-green-600 transition-all duration-300",children:["Get Started",j.jsx(hS,{size:20})]}),j.jsx(on.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300",children:"Talk to us"})]}),j.jsx("div",{className:"flex justify-center space-x-6",children:[{icon:j.jsx(Rf,{size:28}),href:`mailto:${yn.contact.email}`},{icon:j.jsx(Ym,{size:28}),href:`https://${yn.contact.github}`},{icon:j.jsx(Km,{size:28}),href:`https://${yn.contact.linkedin}`}].map((h,m)=>j.jsx(on.a,{href:h.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2,rotate:5},whileTap:{scale:.9},className:`transition-colors duration-300 ${o?"text-gray-300 hover:text-blue-400":"text-gray-600 hover:text-blue-600"}`,children:h.icon},m))})]})}),j.jsx(Sv,{title:"Trisha Rami - Portfolio",subtitle:"AI/ML and Blockchain Security Specialist",rating:"4.9",downloads:"1.2k",position:"left",delay:.5}),j.jsx(Sv,{title:"Blockchain Projects",subtitle:"Smart contracts, DApps, and DeFi solutions",position:"right",delay:.7}),j.jsxs(on.div,{initial:{opacity:0,x:50,y:20},animate:{opacity:1,x:0,y:0},transition:{delay:.9,duration:.8},className:"absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-900 rounded-xl shadow-2xl p-4 max-w-md transform -rotate-3",style:{zIndex:10},children:[j.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[j.jsxs("div",{className:"flex gap-1",children:[j.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),j.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),j.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"})]}),j.jsx("span",{className:"text-xs text-gray-400",children:"portfolio.tsx"})]}),j.jsxs("div",{className:"text-sm font-mono text-left",children:[j.jsx("div",{className:"text-blue-400",children:"export default function"}),j.jsx("div",{className:"text-yellow-400",children:"Portfolio"}),j.jsxs("div",{className:"text-gray-400",children:["() ","{"]}),j.jsx("div",{className:"text-blue-400 ml-4",children:"return ("}),j.jsx("div",{className:"text-gray-300 ml-8",children:"<section>"}),j.jsx("div",{className:"text-gray-300 ml-12",children:"<h1>AI/ML Specialist</h1>"}),j.jsx("div",{className:"text-gray-300 ml-8",children:"</section>"}),j.jsx("div",{className:"text-blue-400 ml-4",children:");"}),j.jsx("div",{className:"text-gray-400",children:"}"})]})]})]}),j.jsx(os,{title:"Projects",id:"projects",children:j.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:yn.projects.map((h,m)=>j.jsxs(on.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:m*.1},whileHover:{y:-5},className:`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${o?"bg-gray-800/50 backdrop-blur-md border border-gray-700/30":"bg-white/80 backdrop-blur-md border border-gray-200/50"}`,children:[j.jsx("img",{src:h.image,alt:h.title,className:"w-full h-48 object-cover"}),j.jsxs("div",{className:"p-6",children:[j.jsx("h3",{className:`text-xl font-bold mb-2 ${o?"text-white":"text-gray-800"}`,children:h.title}),j.jsx("p",{className:`text-sm mb-3 ${o?"text-blue-300":"text-blue-600"}`,children:h.tech}),j.jsx("p",{className:`text-sm mb-4 ${o?"text-gray-300":"text-gray-700"}`,children:h.description}),j.jsxs("div",{className:"flex gap-3",children:[j.jsx("button",{className:`px-4 py-2 rounded-lg transition-all duration-200 ${o?"bg-blue-600 text-white hover:bg-blue-700":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"Live Demo"}),j.jsx("button",{className:`px-4 py-2 rounded-lg transition-all duration-200 ${o?"border border-gray-600 text-gray-300 hover:bg-gray-700":"border border-gray-300 text-gray-600 hover:bg-gray-100"}`,children:"GitHub"})]})]})]},m))})}),j.jsx(os,{title:"Experience",id:"experience",children:j.jsx("div",{className:"space-y-6",children:yn.experience.map((h,m)=>j.jsx(on.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:m*.1},whileHover:{x:8},className:`p-6 rounded-2xl shadow-lg ${o?"bg-gray-800/50 backdrop-blur-md border border-gray-700/30":"bg-white/80 backdrop-blur-md border border-gray-200/50"}`,children:j.jsxs("div",{className:"flex items-start gap-4",children:[j.jsx("div",{className:`w-16 h-16 rounded-xl flex items-center justify-center ${o?"bg-gradient-to-r from-blue-600 to-purple-600":"bg-blue-500"} text-white text-xl font-bold flex-shrink-0`,children:h.organization.charAt(0)}),j.jsxs("div",{className:"flex-1",children:[j.jsx("h3",{className:`text-xl font-bold mb-1 ${o?"text-white":"text-gray-800"}`,children:h.role}),j.jsx("p",{className:`text-lg mb-2 ${o?"text-gray-300":"text-gray-600"}`,children:h.organization}),j.jsx("p",{className:`text-sm mb-3 ${o?"text-gray-400":"text-gray-500"}`,children:h.duration}),j.jsx("p",{className:`text-sm ${o?"text-gray-300":"text-gray-700"}`,children:h.description})]})]})},m))})}),j.jsx(os,{title:"Tools & Technologies",id:"tools",children:j.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",children:d.map((h,m)=>j.jsx(qP,{name:h.name,description:h.description,icon:h.icon,color:h.color},m))})}),j.jsx(os,{title:"Certificates",id:"certificates",children:j.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:yn.certificates.map((h,m)=>j.jsxs(on.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:m*.1},whileHover:{scale:1.05},className:`rounded-2xl overflow-hidden shadow-lg ${o?"bg-gray-800/50 backdrop-blur-md border border-gray-700/30":"bg-white/80 backdrop-blur-md border border-gray-200/50"}`,children:[j.jsx("img",{src:h.image,alt:h.title,className:"w-full h-32 object-cover"}),j.jsxs("div",{className:"p-4",children:[j.jsx("h3",{className:`text-lg font-bold mb-1 ${o?"text-white":"text-gray-800"}`,children:h.title}),j.jsx("p",{className:`text-sm mb-1 ${o?"text-gray-300":"text-gray-600"}`,children:h.issuer}),j.jsx("p",{className:`text-xs ${o?"text-gray-400":"text-gray-500"}`,children:h.date})]})]},m))})}),j.jsx(os,{title:"Publications",id:"publications",children:j.jsx("div",{className:"space-y-6",children:yn.publications.map((h,m)=>j.jsxs(on.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:m*.1},className:`p-6 rounded-2xl shadow-lg ${o?"bg-gray-800/50 backdrop-blur-md border border-gray-700/30":"bg-white/80 backdrop-blur-md border border-gray-200/50"}`,children:[j.jsx("h3",{className:`text-xl font-bold mb-2 ${o?"text-white":"text-gray-800"}`,children:h.title}),j.jsx("p",{className:`text-sm mb-2 ${o?"text-gray-300":"text-gray-600"}`,children:h.role}),j.jsx("p",{className:`text-sm ${o?"text-blue-300":"text-blue-600"}`,children:h.publication})]},m))})}),j.jsx(os,{title:"Blog Posts",id:"blog",children:j.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:yn.blog.map((h,m)=>j.jsxs(on.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:m*.1},className:`rounded-2xl overflow-hidden shadow-lg ${o?"bg-gray-800/50 backdrop-blur-md border border-gray-700/30":"bg-white/80 backdrop-blur-md border border-gray-200/50"}`,children:[j.jsx("img",{src:h.image,alt:h.title,className:"w-full h-48 object-cover"}),j.jsxs("div",{className:"p-6",children:[j.jsx("h3",{className:`text-xl font-bold mb-2 ${o?"text-white":"text-gray-800"}`,children:h.title}),j.jsx("p",{className:`text-sm mb-4 ${o?"text-gray-300":"text-gray-700"}`,children:h.excerpt}),j.jsx("p",{className:`text-xs mb-4 ${o?"text-gray-400":"text-gray-500"}`,children:h.date}),j.jsx("button",{className:`px-4 py-2 rounded-lg transition-all duration-200 ${o?"bg-blue-600 text-white hover:bg-blue-700":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"Read More"})]})]},m))})}),j.jsx(os,{title:"Contact Me",id:"contact",children:j.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[j.jsxs(on.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},className:`p-6 rounded-2xl shadow-lg ${o?"bg-gray-800/50 backdrop-blur-md border border-gray-700/30":"bg-white/80 backdrop-blur-md border border-gray-200/50"}`,children:[j.jsx("h3",{className:`text-2xl font-bold mb-6 ${o?"text-white":"text-gray-800"}`,children:"Get In Touch"}),j.jsxs("form",{onSubmit:u,className:"space-y-4",children:[j.jsx("div",{children:j.jsx("input",{type:"text",placeholder:"Your Name",value:t.name,onChange:h=>s({...t,name:h.target.value}),className:`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${o?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500":"bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500"}`,required:!0})}),j.jsx("div",{children:j.jsx("input",{type:"email",placeholder:"Your Email",value:t.email,onChange:h=>s({...t,email:h.target.value}),className:`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${o?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500":"bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500"}`,required:!0})}),j.jsx("div",{children:j.jsx("textarea",{placeholder:"Your Message",rows:4,value:t.message,onChange:h=>s({...t,message:h.target.value}),className:`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${o?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500":"bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500"}`,required:!0})}),j.jsx("button",{type:"submit",className:`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${o?"bg-blue-600 text-white hover:bg-blue-700":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"Send Message"})]})]}),j.jsxs(on.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},className:`p-6 rounded-2xl shadow-lg ${o?"bg-gray-800/50 backdrop-blur-md border border-gray-700/30":"bg-white/80 backdrop-blur-md border border-gray-200/50"}`,children:[j.jsx("h3",{className:`text-2xl font-bold mb-6 ${o?"text-white":"text-gray-800"}`,children:"Contact Information"}),j.jsxs("div",{className:"space-y-4",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx(Rf,{size:24,className:"text-blue-500"}),j.jsx("span",{className:o?"text-gray-300":"text-gray-700",children:yn.contact.email})]}),j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx(_S,{size:24,className:"text-blue-500"}),j.jsx("span",{className:o?"text-gray-300":"text-gray-700",children:yn.contact.mobile})]}),j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx($m,{size:24,className:"text-blue-500"}),j.jsx("span",{className:o?"text-gray-300":"text-gray-700",children:yn.contact.portfolio})]})]}),j.jsxs("div",{className:"mt-8",children:[j.jsx("h4",{className:`text-lg font-semibold mb-4 ${o?"text-white":"text-gray-800"}`,children:"Follow Me"}),j.jsx("div",{className:"flex space-x-4",children:[{icon:j.jsx(Ym,{size:24}),href:`https://${yn.contact.github}`,label:"GitHub"},{icon:j.jsx(Km,{size:24}),href:`https://${yn.contact.linkedin}`,label:"LinkedIn"},{icon:j.jsx(Rf,{size:24}),href:`mailto:${yn.contact.email}`,label:"Email"}].map((h,m)=>j.jsx(on.a,{href:h.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},className:`p-3 rounded-full transition-all duration-300 ${o?"bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white":"bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white"}`,title:h.label,children:h.icon},m))})]})]})]})})]}),j.jsx("footer",{className:`py-8 border-t transition-all duration-300 ${o?"bg-black/50 border-gray-800 text-gray-400":"bg-fffff0/50 border-gray-200 text-gray-600"}`,children:j.jsxs("div",{className:"max-w-6xl mx-auto px-4 text-center",children:[j.jsxs("p",{className:"text-sm mb-2",children:["© 2024 ",yn.name,". All rights reserved."]}),j.jsx("p",{className:"text-xs",children:"Built with React, Three.js, and Tailwind CSS"})]})})]})},$P=()=>j.jsx(XP,{children:j.jsx(YP,{})});cS.createRoot(document.getElementById("root")).render(j.jsx(Ea.StrictMode,{children:j.jsx($P,{})}));
