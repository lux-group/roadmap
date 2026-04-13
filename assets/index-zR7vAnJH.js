function _mergeNamespaces(e,o){for(var a=0;a<o.length;a++){const s=o[a];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in e)){const d=Object.getOwnPropertyDescriptor(s,c);d&&Object.defineProperty(e,c,d.get?d:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=a(c);fetch(c.href,d)}})();function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function getAugmentedNamespace(e){if(e.__esModule)return e;var o=e.default;if(typeof o=="function"){var a=function s(){return this instanceof s?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};a.prototype=o.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var c=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(a,s,c.get?c:{enumerable:!0,get:function(){return e[s]}})}),a}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={},react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(e){return e===null||typeof e!="object"?null:(e=z$1&&e[z$1]||e["@@iterator"],typeof e=="function"?e:null)}var B$1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(e,o,a){this.props=e,this.context=o,this.refs=D$1,this.updater=a||B$1}E$1.prototype.isReactComponent={};E$1.prototype.setState=function(e,o){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,o,"setState")};E$1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F(){}F.prototype=E$1.prototype;function G$1(e,o,a){this.props=e,this.context=o,this.refs=D$1,this.updater=a||B$1}var H$1=G$1.prototype=new F;H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};function M$1(e,o,a){var s,c={},d=null,h=null;if(o!=null)for(s in o.ref!==void 0&&(h=o.ref),o.key!==void 0&&(d=""+o.key),o)J.call(o,s)&&!L$1.hasOwnProperty(s)&&(c[s]=o[s]);var g=arguments.length-2;if(g===1)c.children=a;else if(1<g){for(var b=Array(g),$=0;$<g;$++)b[$]=arguments[$+2];c.children=b}if(e&&e.defaultProps)for(s in g=e.defaultProps,g)c[s]===void 0&&(c[s]=g[s]);return{$$typeof:l$1,type:e,key:d,ref:h,props:c,_owner:K$1.current}}function N$1(e,o){return{$$typeof:l$1,type:e.type,key:o,ref:e.ref,props:e.props,_owner:e._owner}}function O$1(e){return typeof e=="object"&&e!==null&&e.$$typeof===l$1}function escape(e){var o={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return o[a]})}var P$1=/\/+/g;function Q$1(e,o){return typeof e=="object"&&e!==null&&e.key!=null?escape(""+e.key):o.toString(36)}function R$1(e,o,a,s,c){var d=typeof e;(d==="undefined"||d==="boolean")&&(e=null);var h=!1;if(e===null)h=!0;else switch(d){case"string":case"number":h=!0;break;case"object":switch(e.$$typeof){case l$1:case n$1:h=!0}}if(h)return h=e,c=c(h),e=s===""?"."+Q$1(h,0):s,I$1(c)?(a="",e!=null&&(a=e.replace(P$1,"$&/")+"/"),R$1(c,o,a,"",function($){return $})):c!=null&&(O$1(c)&&(c=N$1(c,a+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+e)),o.push(c)),1;if(h=0,s=s===""?".":s+":",I$1(e))for(var g=0;g<e.length;g++){d=e[g];var b=s+Q$1(d,g);h+=R$1(d,o,a,b,c)}else if(b=A$1(e),typeof b=="function")for(e=b.call(e),g=0;!(d=e.next()).done;)d=d.value,b=s+Q$1(d,g++),h+=R$1(d,o,a,b,c);else if(d==="object")throw o=String(e),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return h}function S$1(e,o,a){if(e==null)return e;var s=[],c=0;return R$1(e,s,"","",function(d){return o.call(a,d,c++)}),s}function T$1(e){if(e._status===-1){var o=e._result;o=o(),o.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=o)}if(e._status===1)return e._result.default;throw e._result}var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};function X$1(){throw Error("act(...) is not supported in production builds of React.")}react_production_min.Children={map:S$1,forEach:function(e,o,a){S$1(e,function(){o.apply(this,arguments)},a)},count:function(e){var o=0;return S$1(e,function(){o++}),o},toArray:function(e){return S$1(e,function(o){return o})||[]},only:function(e){if(!O$1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.act=X$1;react_production_min.cloneElement=function(e,o,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=C$1({},e.props),c=e.key,d=e.ref,h=e._owner;if(o!=null){if(o.ref!==void 0&&(d=o.ref,h=K$1.current),o.key!==void 0&&(c=""+o.key),e.type&&e.type.defaultProps)var g=e.type.defaultProps;for(b in o)J.call(o,b)&&!L$1.hasOwnProperty(b)&&(s[b]=o[b]===void 0&&g!==void 0?g[b]:o[b])}var b=arguments.length-2;if(b===1)s.children=a;else if(1<b){g=Array(b);for(var $=0;$<b;$++)g[$]=arguments[$+2];s.children=g}return{$$typeof:l$1,type:e.type,key:c,ref:d,props:s,_owner:h}};react_production_min.createContext=function(e){return e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t,_context:e},e.Consumer=e};react_production_min.createElement=M$1;react_production_min.createFactory=function(e){var o=M$1.bind(null,e);return o.type=e,o};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(e){return{$$typeof:v$1,render:e}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:T$1}};react_production_min.memo=function(e,o){return{$$typeof:x,type:e,compare:o===void 0?null:o}};react_production_min.startTransition=function(e){var o=V$1.transition;V$1.transition={};try{e()}finally{V$1.transition=o}};react_production_min.unstable_act=X$1;react_production_min.useCallback=function(e,o){return U$1.current.useCallback(e,o)};react_production_min.useContext=function(e){return U$1.current.useContext(e)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(e){return U$1.current.useDeferredValue(e)};react_production_min.useEffect=function(e,o){return U$1.current.useEffect(e,o)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(e,o,a){return U$1.current.useImperativeHandle(e,o,a)};react_production_min.useInsertionEffect=function(e,o){return U$1.current.useInsertionEffect(e,o)};react_production_min.useLayoutEffect=function(e,o){return U$1.current.useLayoutEffect(e,o)};react_production_min.useMemo=function(e,o){return U$1.current.useMemo(e,o)};react_production_min.useReducer=function(e,o,a){return U$1.current.useReducer(e,o,a)};react_production_min.useRef=function(e){return U$1.current.useRef(e)};react_production_min.useState=function(e){return U$1.current.useState(e)};react_production_min.useSyncExternalStore=function(e,o,a){return U$1.current.useSyncExternalStore(e,o,a)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.3.1";react.exports=react_production_min;var reactExports=react.exports;const React=getDefaultExportFromCjs(reactExports),React$1=_mergeNamespaces({__proto__:null,default:React},[reactExports]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};function q(e,o,a){var s,c={},d=null,h=null;a!==void 0&&(d=""+a),o.key!==void 0&&(d=""+o.key),o.ref!==void 0&&(h=o.ref);for(s in o)m$1.call(o,s)&&!p$1.hasOwnProperty(s)&&(c[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps,o)c[s]===void 0&&(c[s]=o[s]);return{$$typeof:k,type:e,key:d,ref:h,props:c,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;jsxRuntime.exports=reactJsxRuntime_production_min;var jsxRuntimeExports=jsxRuntime.exports,buffer={},base64Js={};base64Js.byteLength=byteLength;base64Js.toByteArray=toByteArray;base64Js.fromByteArray=fromByteArray;var lookup=[],revLookup=[],Arr=typeof Uint8Array<"u"?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var i$1=0,len=code.length;i$1<len;++i$1)lookup[i$1]=code[i$1],revLookup[code.charCodeAt(i$1)]=i$1;revLookup[45]=62;revLookup[95]=63;function getLens(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=e.indexOf("=");a===-1&&(a=o);var s=a===o?0:4-a%4;return[a,s]}function byteLength(e){var o=getLens(e),a=o[0],s=o[1];return(a+s)*3/4-s}function _byteLength(e,o,a){return(o+a)*3/4-a}function toByteArray(e){var o,a=getLens(e),s=a[0],c=a[1],d=new Arr(_byteLength(e,s,c)),h=0,g=c>0?s-4:s,b;for(b=0;b<g;b+=4)o=revLookup[e.charCodeAt(b)]<<18|revLookup[e.charCodeAt(b+1)]<<12|revLookup[e.charCodeAt(b+2)]<<6|revLookup[e.charCodeAt(b+3)],d[h++]=o>>16&255,d[h++]=o>>8&255,d[h++]=o&255;return c===2&&(o=revLookup[e.charCodeAt(b)]<<2|revLookup[e.charCodeAt(b+1)]>>4,d[h++]=o&255),c===1&&(o=revLookup[e.charCodeAt(b)]<<10|revLookup[e.charCodeAt(b+1)]<<4|revLookup[e.charCodeAt(b+2)]>>2,d[h++]=o>>8&255,d[h++]=o&255),d}function tripletToBase64(e){return lookup[e>>18&63]+lookup[e>>12&63]+lookup[e>>6&63]+lookup[e&63]}function encodeChunk(e,o,a){for(var s,c=[],d=o;d<a;d+=3)s=(e[d]<<16&16711680)+(e[d+1]<<8&65280)+(e[d+2]&255),c.push(tripletToBase64(s));return c.join("")}function fromByteArray(e){for(var o,a=e.length,s=a%3,c=[],d=16383,h=0,g=a-s;h<g;h+=d)c.push(encodeChunk(e,h,h+d>g?g:h+d));return s===1?(o=e[a-1],c.push(lookup[o>>2]+lookup[o<<4&63]+"==")):s===2&&(o=(e[a-2]<<8)+e[a-1],c.push(lookup[o>>10]+lookup[o>>4&63]+lookup[o<<2&63]+"=")),c.join("")}var ieee754={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ieee754.read=function(e,o,a,s,c){var d,h,g=c*8-s-1,b=(1<<g)-1,$=b>>1,tt=-7,et=a?c-1:0,rt=a?-1:1,ot=e[o+et];for(et+=rt,d=ot&(1<<-tt)-1,ot>>=-tt,tt+=g;tt>0;d=d*256+e[o+et],et+=rt,tt-=8);for(h=d&(1<<-tt)-1,d>>=-tt,tt+=s;tt>0;h=h*256+e[o+et],et+=rt,tt-=8);if(d===0)d=1-$;else{if(d===b)return h?NaN:(ot?-1:1)*(1/0);h=h+Math.pow(2,s),d=d-$}return(ot?-1:1)*h*Math.pow(2,d-s)};ieee754.write=function(e,o,a,s,c,d){var h,g,b,$=d*8-c-1,tt=(1<<$)-1,et=tt>>1,rt=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,ot=s?0:d-1,ft=s?1:-1,pt=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(g=isNaN(o)?1:0,h=tt):(h=Math.floor(Math.log(o)/Math.LN2),o*(b=Math.pow(2,-h))<1&&(h--,b*=2),h+et>=1?o+=rt/b:o+=rt*Math.pow(2,1-et),o*b>=2&&(h++,b/=2),h+et>=tt?(g=0,h=tt):h+et>=1?(g=(o*b-1)*Math.pow(2,c),h=h+et):(g=o*Math.pow(2,et-1)*Math.pow(2,c),h=0));c>=8;e[a+ot]=g&255,ot+=ft,g/=256,c-=8);for(h=h<<c|g,$+=c;$>0;e[a+ot]=h&255,ot+=ft,h/=256,$-=8);e[a+ot-ft]|=pt*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const o=base64Js,a=ieee754,s=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=g,e.SlowBuffer=it,e.INSPECT_MAX_BYTES=50;const c=2147483647;e.kMaxLength=c,g.TYPED_ARRAY_SUPPORT=d(),!g.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function d(){try{const _e=new Uint8Array(1),_={foo:function(){return 42}};return Object.setPrototypeOf(_,Uint8Array.prototype),Object.setPrototypeOf(_e,_),_e.foo()===42}catch{return!1}}Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.buffer}}),Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.byteOffset}});function h(_e){if(_e>c)throw new RangeError('The value "'+_e+'" is invalid for option "size"');const _=new Uint8Array(_e);return Object.setPrototypeOf(_,g.prototype),_}function g(_e,_,j){if(typeof _e=="number"){if(typeof _=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return et(_e)}return b(_e,_,j)}g.poolSize=8192;function b(_e,_,j){if(typeof _e=="string")return rt(_e,_);if(ArrayBuffer.isView(_e))return ft(_e);if(_e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof _e);if(dn(_e,ArrayBuffer)||_e&&dn(_e.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(dn(_e,SharedArrayBuffer)||_e&&dn(_e.buffer,SharedArrayBuffer)))return pt(_e,_,j);if(typeof _e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const nt=_e.valueOf&&_e.valueOf();if(nt!=null&&nt!==_e)return g.from(nt,_,j);const ut=vt(_e);if(ut)return ut;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof _e[Symbol.toPrimitive]=="function")return g.from(_e[Symbol.toPrimitive]("string"),_,j);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof _e)}g.from=function(_e,_,j){return b(_e,_,j)},Object.setPrototypeOf(g.prototype,Uint8Array.prototype),Object.setPrototypeOf(g,Uint8Array);function $(_e){if(typeof _e!="number")throw new TypeError('"size" argument must be of type number');if(_e<0)throw new RangeError('The value "'+_e+'" is invalid for option "size"')}function tt(_e,_,j){return $(_e),_e<=0?h(_e):_!==void 0?typeof j=="string"?h(_e).fill(_,j):h(_e).fill(_):h(_e)}g.alloc=function(_e,_,j){return tt(_e,_,j)};function et(_e){return $(_e),h(_e<0?0:lt(_e)|0)}g.allocUnsafe=function(_e){return et(_e)},g.allocUnsafeSlow=function(_e){return et(_e)};function rt(_e,_){if((typeof _!="string"||_==="")&&(_="utf8"),!g.isEncoding(_))throw new TypeError("Unknown encoding: "+_);const j=st(_e,_)|0;let nt=h(j);const ut=nt.write(_e,_);return ut!==j&&(nt=nt.slice(0,ut)),nt}function ot(_e){const _=_e.length<0?0:lt(_e.length)|0,j=h(_);for(let nt=0;nt<_;nt+=1)j[nt]=_e[nt]&255;return j}function ft(_e){if(dn(_e,Uint8Array)){const _=new Uint8Array(_e);return pt(_.buffer,_.byteOffset,_.byteLength)}return ot(_e)}function pt(_e,_,j){if(_<0||_e.byteLength<_)throw new RangeError('"offset" is outside of buffer bounds');if(_e.byteLength<_+(j||0))throw new RangeError('"length" is outside of buffer bounds');let nt;return _===void 0&&j===void 0?nt=new Uint8Array(_e):j===void 0?nt=new Uint8Array(_e,_):nt=new Uint8Array(_e,_,j),Object.setPrototypeOf(nt,g.prototype),nt}function vt(_e){if(g.isBuffer(_e)){const _=lt(_e.length)|0,j=h(_);return j.length===0||_e.copy(j,0,0,_),j}if(_e.length!==void 0)return typeof _e.length!="number"||Pn(_e.length)?h(0):ot(_e);if(_e.type==="Buffer"&&Array.isArray(_e.data))return ot(_e.data)}function lt(_e){if(_e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return _e|0}function it(_e){return+_e!=_e&&(_e=0),g.alloc(+_e)}g.isBuffer=function(_){return _!=null&&_._isBuffer===!0&&_!==g.prototype},g.compare=function(_,j){if(dn(_,Uint8Array)&&(_=g.from(_,_.offset,_.byteLength)),dn(j,Uint8Array)&&(j=g.from(j,j.offset,j.byteLength)),!g.isBuffer(_)||!g.isBuffer(j))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(_===j)return 0;let nt=_.length,ut=j.length;for(let ht=0,gt=Math.min(nt,ut);ht<gt;++ht)if(_[ht]!==j[ht]){nt=_[ht],ut=j[ht];break}return nt<ut?-1:ut<nt?1:0},g.isEncoding=function(_){switch(String(_).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},g.concat=function(_,j){if(!Array.isArray(_))throw new TypeError('"list" argument must be an Array of Buffers');if(_.length===0)return g.alloc(0);let nt;if(j===void 0)for(j=0,nt=0;nt<_.length;++nt)j+=_[nt].length;const ut=g.allocUnsafe(j);let ht=0;for(nt=0;nt<_.length;++nt){let gt=_[nt];if(dn(gt,Uint8Array))ht+gt.length>ut.length?(g.isBuffer(gt)||(gt=g.from(gt)),gt.copy(ut,ht)):Uint8Array.prototype.set.call(ut,gt,ht);else if(g.isBuffer(gt))gt.copy(ut,ht);else throw new TypeError('"list" argument must be an Array of Buffers');ht+=gt.length}return ut};function st(_e,_){if(g.isBuffer(_e))return _e.length;if(ArrayBuffer.isView(_e)||dn(_e,ArrayBuffer))return _e.byteLength;if(typeof _e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof _e);const j=_e.length,nt=arguments.length>2&&arguments[2]===!0;if(!nt&&j===0)return 0;let ut=!1;for(;;)switch(_){case"ascii":case"latin1":case"binary":return j;case"utf8":case"utf-8":return Rn(_e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j*2;case"hex":return j>>>1;case"base64":return In(_e).length;default:if(ut)return nt?-1:Rn(_e).length;_=(""+_).toLowerCase(),ut=!0}}g.byteLength=st;function yt(_e,_,j){let nt=!1;if((_===void 0||_<0)&&(_=0),_>this.length||((j===void 0||j>this.length)&&(j=this.length),j<=0)||(j>>>=0,_>>>=0,j<=_))return"";for(_e||(_e="utf8");;)switch(_e){case"hex":return jt(this,_,j);case"utf8":case"utf-8":return Jt(this,_,j);case"ascii":return hn(this,_,j);case"latin1":case"binary":return wt(this,_,j);case"base64":return qt(this,_,j);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Mt(this,_,j);default:if(nt)throw new TypeError("Unknown encoding: "+_e);_e=(_e+"").toLowerCase(),nt=!0}}g.prototype._isBuffer=!0;function Et(_e,_,j){const nt=_e[_];_e[_]=_e[j],_e[j]=nt}g.prototype.swap16=function(){const _=this.length;if(_%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let j=0;j<_;j+=2)Et(this,j,j+1);return this},g.prototype.swap32=function(){const _=this.length;if(_%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let j=0;j<_;j+=4)Et(this,j,j+3),Et(this,j+1,j+2);return this},g.prototype.swap64=function(){const _=this.length;if(_%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let j=0;j<_;j+=8)Et(this,j,j+7),Et(this,j+1,j+6),Et(this,j+2,j+5),Et(this,j+3,j+4);return this},g.prototype.toString=function(){const _=this.length;return _===0?"":arguments.length===0?Jt(this,0,_):yt.apply(this,arguments)},g.prototype.toLocaleString=g.prototype.toString,g.prototype.equals=function(_){if(!g.isBuffer(_))throw new TypeError("Argument must be a Buffer");return this===_?!0:g.compare(this,_)===0},g.prototype.inspect=function(){let _="";const j=e.INSPECT_MAX_BYTES;return _=this.toString("hex",0,j).replace(/(.{2})/g,"$1 ").trim(),this.length>j&&(_+=" ... "),"<Buffer "+_+">"},s&&(g.prototype[s]=g.prototype.inspect),g.prototype.compare=function(_,j,nt,ut,ht){if(dn(_,Uint8Array)&&(_=g.from(_,_.offset,_.byteLength)),!g.isBuffer(_))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof _);if(j===void 0&&(j=0),nt===void 0&&(nt=_?_.length:0),ut===void 0&&(ut=0),ht===void 0&&(ht=this.length),j<0||nt>_.length||ut<0||ht>this.length)throw new RangeError("out of range index");if(ut>=ht&&j>=nt)return 0;if(ut>=ht)return-1;if(j>=nt)return 1;if(j>>>=0,nt>>>=0,ut>>>=0,ht>>>=0,this===_)return 0;let gt=ht-ut,Ft=nt-j;const Gt=Math.min(gt,Ft),Vt=this.slice(ut,ht),Kt=_.slice(j,nt);for(let Ht=0;Ht<Gt;++Ht)if(Vt[Ht]!==Kt[Ht]){gt=Vt[Ht],Ft=Kt[Ht];break}return gt<Ft?-1:Ft<gt?1:0};function Ct(_e,_,j,nt,ut){if(_e.length===0)return-1;if(typeof j=="string"?(nt=j,j=0):j>2147483647?j=2147483647:j<-2147483648&&(j=-2147483648),j=+j,Pn(j)&&(j=ut?0:_e.length-1),j<0&&(j=_e.length+j),j>=_e.length){if(ut)return-1;j=_e.length-1}else if(j<0)if(ut)j=0;else return-1;if(typeof _=="string"&&(_=g.from(_,nt)),g.isBuffer(_))return _.length===0?-1:ct(_e,_,j,nt,ut);if(typeof _=="number")return _=_&255,typeof Uint8Array.prototype.indexOf=="function"?ut?Uint8Array.prototype.indexOf.call(_e,_,j):Uint8Array.prototype.lastIndexOf.call(_e,_,j):ct(_e,[_],j,nt,ut);throw new TypeError("val must be string, number or Buffer")}function ct(_e,_,j,nt,ut){let ht=1,gt=_e.length,Ft=_.length;if(nt!==void 0&&(nt=String(nt).toLowerCase(),nt==="ucs2"||nt==="ucs-2"||nt==="utf16le"||nt==="utf-16le")){if(_e.length<2||_.length<2)return-1;ht=2,gt/=2,Ft/=2,j/=2}function Gt(Kt,Ht){return ht===1?Kt[Ht]:Kt.readUInt16BE(Ht*ht)}let Vt;if(ut){let Kt=-1;for(Vt=j;Vt<gt;Vt++)if(Gt(_e,Vt)===Gt(_,Kt===-1?0:Vt-Kt)){if(Kt===-1&&(Kt=Vt),Vt-Kt+1===Ft)return Kt*ht}else Kt!==-1&&(Vt-=Vt-Kt),Kt=-1}else for(j+Ft>gt&&(j=gt-Ft),Vt=j;Vt>=0;Vt--){let Kt=!0;for(let Ht=0;Ht<Ft;Ht++)if(Gt(_e,Vt+Ht)!==Gt(_,Ht)){Kt=!1;break}if(Kt)return Vt}return-1}g.prototype.includes=function(_,j,nt){return this.indexOf(_,j,nt)!==-1},g.prototype.indexOf=function(_,j,nt){return Ct(this,_,j,nt,!0)},g.prototype.lastIndexOf=function(_,j,nt){return Ct(this,_,j,nt,!1)};function _t(_e,_,j,nt){j=Number(j)||0;const ut=_e.length-j;nt?(nt=Number(nt),nt>ut&&(nt=ut)):nt=ut;const ht=_.length;nt>ht/2&&(nt=ht/2);let gt;for(gt=0;gt<nt;++gt){const Ft=parseInt(_.substr(gt*2,2),16);if(Pn(Ft))return gt;_e[j+gt]=Ft}return gt}function Lt(_e,_,j,nt){return En(Rn(_,_e.length-j),_e,j,nt)}function kt(_e,_,j,nt){return En(zn(_),_e,j,nt)}function zt(_e,_,j,nt){return En(In(_),_e,j,nt)}function Wt(_e,_,j,nt){return En(jn(_,_e.length-j),_e,j,nt)}g.prototype.write=function(_,j,nt,ut){if(j===void 0)ut="utf8",nt=this.length,j=0;else if(nt===void 0&&typeof j=="string")ut=j,nt=this.length,j=0;else if(isFinite(j))j=j>>>0,isFinite(nt)?(nt=nt>>>0,ut===void 0&&(ut="utf8")):(ut=nt,nt=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const ht=this.length-j;if((nt===void 0||nt>ht)&&(nt=ht),_.length>0&&(nt<0||j<0)||j>this.length)throw new RangeError("Attempt to write outside buffer bounds");ut||(ut="utf8");let gt=!1;for(;;)switch(ut){case"hex":return _t(this,_,j,nt);case"utf8":case"utf-8":return Lt(this,_,j,nt);case"ascii":case"latin1":case"binary":return kt(this,_,j,nt);case"base64":return zt(this,_,j,nt);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Wt(this,_,j,nt);default:if(gt)throw new TypeError("Unknown encoding: "+ut);ut=(""+ut).toLowerCase(),gt=!0}},g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function qt(_e,_,j){return _===0&&j===_e.length?o.fromByteArray(_e):o.fromByteArray(_e.slice(_,j))}function Jt(_e,_,j){j=Math.min(_e.length,j);const nt=[];let ut=_;for(;ut<j;){const ht=_e[ut];let gt=null,Ft=ht>239?4:ht>223?3:ht>191?2:1;if(ut+Ft<=j){let Gt,Vt,Kt,Ht;switch(Ft){case 1:ht<128&&(gt=ht);break;case 2:Gt=_e[ut+1],(Gt&192)===128&&(Ht=(ht&31)<<6|Gt&63,Ht>127&&(gt=Ht));break;case 3:Gt=_e[ut+1],Vt=_e[ut+2],(Gt&192)===128&&(Vt&192)===128&&(Ht=(ht&15)<<12|(Gt&63)<<6|Vt&63,Ht>2047&&(Ht<55296||Ht>57343)&&(gt=Ht));break;case 4:Gt=_e[ut+1],Vt=_e[ut+2],Kt=_e[ut+3],(Gt&192)===128&&(Vt&192)===128&&(Kt&192)===128&&(Ht=(ht&15)<<18|(Gt&63)<<12|(Vt&63)<<6|Kt&63,Ht>65535&&Ht<1114112&&(gt=Ht))}}gt===null?(gt=65533,Ft=1):gt>65535&&(gt-=65536,nt.push(gt>>>10&1023|55296),gt=56320|gt&1023),nt.push(gt),ut+=Ft}return pn(nt)}const ln=4096;function pn(_e){const _=_e.length;if(_<=ln)return String.fromCharCode.apply(String,_e);let j="",nt=0;for(;nt<_;)j+=String.fromCharCode.apply(String,_e.slice(nt,nt+=ln));return j}function hn(_e,_,j){let nt="";j=Math.min(_e.length,j);for(let ut=_;ut<j;++ut)nt+=String.fromCharCode(_e[ut]&127);return nt}function wt(_e,_,j){let nt="";j=Math.min(_e.length,j);for(let ut=_;ut<j;++ut)nt+=String.fromCharCode(_e[ut]);return nt}function jt(_e,_,j){const nt=_e.length;(!_||_<0)&&(_=0),(!j||j<0||j>nt)&&(j=nt);let ut="";for(let ht=_;ht<j;++ht)ut+=yn[_e[ht]];return ut}function Mt(_e,_,j){const nt=_e.slice(_,j);let ut="";for(let ht=0;ht<nt.length-1;ht+=2)ut+=String.fromCharCode(nt[ht]+nt[ht+1]*256);return ut}g.prototype.slice=function(_,j){const nt=this.length;_=~~_,j=j===void 0?nt:~~j,_<0?(_+=nt,_<0&&(_=0)):_>nt&&(_=nt),j<0?(j+=nt,j<0&&(j=0)):j>nt&&(j=nt),j<_&&(j=_);const ut=this.subarray(_,j);return Object.setPrototypeOf(ut,g.prototype),ut};function It(_e,_,j){if(_e%1!==0||_e<0)throw new RangeError("offset is not uint");if(_e+_>j)throw new RangeError("Trying to access beyond buffer length")}g.prototype.readUintLE=g.prototype.readUIntLE=function(_,j,nt){_=_>>>0,j=j>>>0,nt||It(_,j,this.length);let ut=this[_],ht=1,gt=0;for(;++gt<j&&(ht*=256);)ut+=this[_+gt]*ht;return ut},g.prototype.readUintBE=g.prototype.readUIntBE=function(_,j,nt){_=_>>>0,j=j>>>0,nt||It(_,j,this.length);let ut=this[_+--j],ht=1;for(;j>0&&(ht*=256);)ut+=this[_+--j]*ht;return ut},g.prototype.readUint8=g.prototype.readUInt8=function(_,j){return _=_>>>0,j||It(_,1,this.length),this[_]},g.prototype.readUint16LE=g.prototype.readUInt16LE=function(_,j){return _=_>>>0,j||It(_,2,this.length),this[_]|this[_+1]<<8},g.prototype.readUint16BE=g.prototype.readUInt16BE=function(_,j){return _=_>>>0,j||It(_,2,this.length),this[_]<<8|this[_+1]},g.prototype.readUint32LE=g.prototype.readUInt32LE=function(_,j){return _=_>>>0,j||It(_,4,this.length),(this[_]|this[_+1]<<8|this[_+2]<<16)+this[_+3]*16777216},g.prototype.readUint32BE=g.prototype.readUInt32BE=function(_,j){return _=_>>>0,j||It(_,4,this.length),this[_]*16777216+(this[_+1]<<16|this[_+2]<<8|this[_+3])},g.prototype.readBigUInt64LE=un(function(_){_=_>>>0,cn(_,"offset");const j=this[_],nt=this[_+7];(j===void 0||nt===void 0)&&xn(_,this.length-8);const ut=j+this[++_]*2**8+this[++_]*2**16+this[++_]*2**24,ht=this[++_]+this[++_]*2**8+this[++_]*2**16+nt*2**24;return BigInt(ut)+(BigInt(ht)<<BigInt(32))}),g.prototype.readBigUInt64BE=un(function(_){_=_>>>0,cn(_,"offset");const j=this[_],nt=this[_+7];(j===void 0||nt===void 0)&&xn(_,this.length-8);const ut=j*2**24+this[++_]*2**16+this[++_]*2**8+this[++_],ht=this[++_]*2**24+this[++_]*2**16+this[++_]*2**8+nt;return(BigInt(ut)<<BigInt(32))+BigInt(ht)}),g.prototype.readIntLE=function(_,j,nt){_=_>>>0,j=j>>>0,nt||It(_,j,this.length);let ut=this[_],ht=1,gt=0;for(;++gt<j&&(ht*=256);)ut+=this[_+gt]*ht;return ht*=128,ut>=ht&&(ut-=Math.pow(2,8*j)),ut},g.prototype.readIntBE=function(_,j,nt){_=_>>>0,j=j>>>0,nt||It(_,j,this.length);let ut=j,ht=1,gt=this[_+--ut];for(;ut>0&&(ht*=256);)gt+=this[_+--ut]*ht;return ht*=128,gt>=ht&&(gt-=Math.pow(2,8*j)),gt},g.prototype.readInt8=function(_,j){return _=_>>>0,j||It(_,1,this.length),this[_]&128?(255-this[_]+1)*-1:this[_]},g.prototype.readInt16LE=function(_,j){_=_>>>0,j||It(_,2,this.length);const nt=this[_]|this[_+1]<<8;return nt&32768?nt|4294901760:nt},g.prototype.readInt16BE=function(_,j){_=_>>>0,j||It(_,2,this.length);const nt=this[_+1]|this[_]<<8;return nt&32768?nt|4294901760:nt},g.prototype.readInt32LE=function(_,j){return _=_>>>0,j||It(_,4,this.length),this[_]|this[_+1]<<8|this[_+2]<<16|this[_+3]<<24},g.prototype.readInt32BE=function(_,j){return _=_>>>0,j||It(_,4,this.length),this[_]<<24|this[_+1]<<16|this[_+2]<<8|this[_+3]},g.prototype.readBigInt64LE=un(function(_){_=_>>>0,cn(_,"offset");const j=this[_],nt=this[_+7];(j===void 0||nt===void 0)&&xn(_,this.length-8);const ut=this[_+4]+this[_+5]*2**8+this[_+6]*2**16+(nt<<24);return(BigInt(ut)<<BigInt(32))+BigInt(j+this[++_]*2**8+this[++_]*2**16+this[++_]*2**24)}),g.prototype.readBigInt64BE=un(function(_){_=_>>>0,cn(_,"offset");const j=this[_],nt=this[_+7];(j===void 0||nt===void 0)&&xn(_,this.length-8);const ut=(j<<24)+this[++_]*2**16+this[++_]*2**8+this[++_];return(BigInt(ut)<<BigInt(32))+BigInt(this[++_]*2**24+this[++_]*2**16+this[++_]*2**8+nt)}),g.prototype.readFloatLE=function(_,j){return _=_>>>0,j||It(_,4,this.length),a.read(this,_,!0,23,4)},g.prototype.readFloatBE=function(_,j){return _=_>>>0,j||It(_,4,this.length),a.read(this,_,!1,23,4)},g.prototype.readDoubleLE=function(_,j){return _=_>>>0,j||It(_,8,this.length),a.read(this,_,!0,52,8)},g.prototype.readDoubleBE=function(_,j){return _=_>>>0,j||It(_,8,this.length),a.read(this,_,!1,52,8)};function Dt(_e,_,j,nt,ut,ht){if(!g.isBuffer(_e))throw new TypeError('"buffer" argument must be a Buffer instance');if(_>ut||_<ht)throw new RangeError('"value" argument is out of bounds');if(j+nt>_e.length)throw new RangeError("Index out of range")}g.prototype.writeUintLE=g.prototype.writeUIntLE=function(_,j,nt,ut){if(_=+_,j=j>>>0,nt=nt>>>0,!ut){const Ft=Math.pow(2,8*nt)-1;Dt(this,_,j,nt,Ft,0)}let ht=1,gt=0;for(this[j]=_&255;++gt<nt&&(ht*=256);)this[j+gt]=_/ht&255;return j+nt},g.prototype.writeUintBE=g.prototype.writeUIntBE=function(_,j,nt,ut){if(_=+_,j=j>>>0,nt=nt>>>0,!ut){const Ft=Math.pow(2,8*nt)-1;Dt(this,_,j,nt,Ft,0)}let ht=nt-1,gt=1;for(this[j+ht]=_&255;--ht>=0&&(gt*=256);)this[j+ht]=_/gt&255;return j+nt},g.prototype.writeUint8=g.prototype.writeUInt8=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,1,255,0),this[j]=_&255,j+1},g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,2,65535,0),this[j]=_&255,this[j+1]=_>>>8,j+2},g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,2,65535,0),this[j]=_>>>8,this[j+1]=_&255,j+2},g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,4,4294967295,0),this[j+3]=_>>>24,this[j+2]=_>>>16,this[j+1]=_>>>8,this[j]=_&255,j+4},g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,4,4294967295,0),this[j]=_>>>24,this[j+1]=_>>>16,this[j+2]=_>>>8,this[j+3]=_&255,j+4};function sn(_e,_,j,nt,ut){nn(_,nt,ut,_e,j,7);let ht=Number(_&BigInt(4294967295));_e[j++]=ht,ht=ht>>8,_e[j++]=ht,ht=ht>>8,_e[j++]=ht,ht=ht>>8,_e[j++]=ht;let gt=Number(_>>BigInt(32)&BigInt(4294967295));return _e[j++]=gt,gt=gt>>8,_e[j++]=gt,gt=gt>>8,_e[j++]=gt,gt=gt>>8,_e[j++]=gt,j}function on(_e,_,j,nt,ut){nn(_,nt,ut,_e,j,7);let ht=Number(_&BigInt(4294967295));_e[j+7]=ht,ht=ht>>8,_e[j+6]=ht,ht=ht>>8,_e[j+5]=ht,ht=ht>>8,_e[j+4]=ht;let gt=Number(_>>BigInt(32)&BigInt(4294967295));return _e[j+3]=gt,gt=gt>>8,_e[j+2]=gt,gt=gt>>8,_e[j+1]=gt,gt=gt>>8,_e[j]=gt,j+8}g.prototype.writeBigUInt64LE=un(function(_,j=0){return sn(this,_,j,BigInt(0),BigInt("0xffffffffffffffff"))}),g.prototype.writeBigUInt64BE=un(function(_,j=0){return on(this,_,j,BigInt(0),BigInt("0xffffffffffffffff"))}),g.prototype.writeIntLE=function(_,j,nt,ut){if(_=+_,j=j>>>0,!ut){const Gt=Math.pow(2,8*nt-1);Dt(this,_,j,nt,Gt-1,-Gt)}let ht=0,gt=1,Ft=0;for(this[j]=_&255;++ht<nt&&(gt*=256);)_<0&&Ft===0&&this[j+ht-1]!==0&&(Ft=1),this[j+ht]=(_/gt>>0)-Ft&255;return j+nt},g.prototype.writeIntBE=function(_,j,nt,ut){if(_=+_,j=j>>>0,!ut){const Gt=Math.pow(2,8*nt-1);Dt(this,_,j,nt,Gt-1,-Gt)}let ht=nt-1,gt=1,Ft=0;for(this[j+ht]=_&255;--ht>=0&&(gt*=256);)_<0&&Ft===0&&this[j+ht+1]!==0&&(Ft=1),this[j+ht]=(_/gt>>0)-Ft&255;return j+nt},g.prototype.writeInt8=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,1,127,-128),_<0&&(_=255+_+1),this[j]=_&255,j+1},g.prototype.writeInt16LE=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,2,32767,-32768),this[j]=_&255,this[j+1]=_>>>8,j+2},g.prototype.writeInt16BE=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,2,32767,-32768),this[j]=_>>>8,this[j+1]=_&255,j+2},g.prototype.writeInt32LE=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,4,2147483647,-2147483648),this[j]=_&255,this[j+1]=_>>>8,this[j+2]=_>>>16,this[j+3]=_>>>24,j+4},g.prototype.writeInt32BE=function(_,j,nt){return _=+_,j=j>>>0,nt||Dt(this,_,j,4,2147483647,-2147483648),_<0&&(_=4294967295+_+1),this[j]=_>>>24,this[j+1]=_>>>16,this[j+2]=_>>>8,this[j+3]=_&255,j+4},g.prototype.writeBigInt64LE=un(function(_,j=0){return sn(this,_,j,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),g.prototype.writeBigInt64BE=un(function(_,j=0){return on(this,_,j,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function en(_e,_,j,nt,ut,ht){if(j+nt>_e.length)throw new RangeError("Index out of range");if(j<0)throw new RangeError("Index out of range")}function tn(_e,_,j,nt,ut){return _=+_,j=j>>>0,ut||en(_e,_,j,4),a.write(_e,_,j,nt,23,4),j+4}g.prototype.writeFloatLE=function(_,j,nt){return tn(this,_,j,!0,nt)},g.prototype.writeFloatBE=function(_,j,nt){return tn(this,_,j,!1,nt)};function an(_e,_,j,nt,ut){return _=+_,j=j>>>0,ut||en(_e,_,j,8),a.write(_e,_,j,nt,52,8),j+8}g.prototype.writeDoubleLE=function(_,j,nt){return an(this,_,j,!0,nt)},g.prototype.writeDoubleBE=function(_,j,nt){return an(this,_,j,!1,nt)},g.prototype.copy=function(_,j,nt,ut){if(!g.isBuffer(_))throw new TypeError("argument should be a Buffer");if(nt||(nt=0),!ut&&ut!==0&&(ut=this.length),j>=_.length&&(j=_.length),j||(j=0),ut>0&&ut<nt&&(ut=nt),ut===nt||_.length===0||this.length===0)return 0;if(j<0)throw new RangeError("targetStart out of bounds");if(nt<0||nt>=this.length)throw new RangeError("Index out of range");if(ut<0)throw new RangeError("sourceEnd out of bounds");ut>this.length&&(ut=this.length),_.length-j<ut-nt&&(ut=_.length-j+nt);const ht=ut-nt;return this===_&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(j,nt,ut):Uint8Array.prototype.set.call(_,this.subarray(nt,ut),j),ht},g.prototype.fill=function(_,j,nt,ut){if(typeof _=="string"){if(typeof j=="string"?(ut=j,j=0,nt=this.length):typeof nt=="string"&&(ut=nt,nt=this.length),ut!==void 0&&typeof ut!="string")throw new TypeError("encoding must be a string");if(typeof ut=="string"&&!g.isEncoding(ut))throw new TypeError("Unknown encoding: "+ut);if(_.length===1){const gt=_.charCodeAt(0);(ut==="utf8"&&gt<128||ut==="latin1")&&(_=gt)}}else typeof _=="number"?_=_&255:typeof _=="boolean"&&(_=Number(_));if(j<0||this.length<j||this.length<nt)throw new RangeError("Out of range index");if(nt<=j)return this;j=j>>>0,nt=nt===void 0?this.length:nt>>>0,_||(_=0);let ht;if(typeof _=="number")for(ht=j;ht<nt;++ht)this[ht]=_;else{const gt=g.isBuffer(_)?_:g.from(_,ut),Ft=gt.length;if(Ft===0)throw new TypeError('The value "'+_+'" is invalid for argument "value"');for(ht=0;ht<nt-j;++ht)this[ht+j]=gt[ht%Ft]}return this};const fn={};function Cn(_e,_,j){fn[_e]=class extends j{constructor(){super(),Object.defineProperty(this,"message",{value:_.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${_e}]`,this.stack,delete this.name}get code(){return _e}set code(ut){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:ut,writable:!0})}toString(){return`${this.name} [${_e}]: ${this.message}`}}}Cn("ERR_BUFFER_OUT_OF_BOUNDS",function(_e){return _e?`${_e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Cn("ERR_INVALID_ARG_TYPE",function(_e,_){return`The "${_e}" argument must be of type number. Received type ${typeof _}`},TypeError),Cn("ERR_OUT_OF_RANGE",function(_e,_,j){let nt=`The value of "${_e}" is out of range.`,ut=j;return Number.isInteger(j)&&Math.abs(j)>2**32?ut=Ln(String(j)):typeof j=="bigint"&&(ut=String(j),(j>BigInt(2)**BigInt(32)||j<-(BigInt(2)**BigInt(32)))&&(ut=Ln(ut)),ut+="n"),nt+=` It must be ${_}. Received ${ut}`,nt},RangeError);function Ln(_e){let _="",j=_e.length;const nt=_e[0]==="-"?1:0;for(;j>=nt+4;j-=3)_=`_${_e.slice(j-3,j)}${_}`;return`${_e.slice(0,j)}${_}`}function Un(_e,_,j){cn(_,"offset"),(_e[_]===void 0||_e[_+j]===void 0)&&xn(_,_e.length-(j+1))}function nn(_e,_,j,nt,ut,ht){if(_e>j||_e<_){const gt=typeof _=="bigint"?"n":"";let Ft;throw _===0||_===BigInt(0)?Ft=`>= 0${gt} and < 2${gt} ** ${(ht+1)*8}${gt}`:Ft=`>= -(2${gt} ** ${(ht+1)*8-1}${gt}) and < 2 ** ${(ht+1)*8-1}${gt}`,new fn.ERR_OUT_OF_RANGE("value",Ft,_e)}Un(nt,ut,ht)}function cn(_e,_){if(typeof _e!="number")throw new fn.ERR_INVALID_ARG_TYPE(_,"number",_e)}function xn(_e,_,j){throw Math.floor(_e)!==_e?(cn(_e,j),new fn.ERR_OUT_OF_RANGE("offset","an integer",_e)):_<0?new fn.ERR_BUFFER_OUT_OF_BOUNDS:new fn.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${_}`,_e)}const $n=/[^+/0-9A-Za-z-_]/g;function gn(_e){if(_e=_e.split("=")[0],_e=_e.trim().replace($n,""),_e.length<2)return"";for(;_e.length%4!==0;)_e=_e+"=";return _e}function Rn(_e,_){_=_||1/0;let j;const nt=_e.length;let ut=null;const ht=[];for(let gt=0;gt<nt;++gt){if(j=_e.charCodeAt(gt),j>55295&&j<57344){if(!ut){if(j>56319){(_-=3)>-1&&ht.push(239,191,189);continue}else if(gt+1===nt){(_-=3)>-1&&ht.push(239,191,189);continue}ut=j;continue}if(j<56320){(_-=3)>-1&&ht.push(239,191,189),ut=j;continue}j=(ut-55296<<10|j-56320)+65536}else ut&&(_-=3)>-1&&ht.push(239,191,189);if(ut=null,j<128){if((_-=1)<0)break;ht.push(j)}else if(j<2048){if((_-=2)<0)break;ht.push(j>>6|192,j&63|128)}else if(j<65536){if((_-=3)<0)break;ht.push(j>>12|224,j>>6&63|128,j&63|128)}else if(j<1114112){if((_-=4)<0)break;ht.push(j>>18|240,j>>12&63|128,j>>6&63|128,j&63|128)}else throw new Error("Invalid code point")}return ht}function zn(_e){const _=[];for(let j=0;j<_e.length;++j)_.push(_e.charCodeAt(j)&255);return _}function jn(_e,_){let j,nt,ut;const ht=[];for(let gt=0;gt<_e.length&&!((_-=2)<0);++gt)j=_e.charCodeAt(gt),nt=j>>8,ut=j%256,ht.push(ut),ht.push(nt);return ht}function In(_e){return o.toByteArray(gn(_e))}function En(_e,_,j,nt){let ut;for(ut=0;ut<nt&&!(ut+j>=_.length||ut>=_e.length);++ut)_[ut+j]=_e[ut];return ut}function dn(_e,_){return _e instanceof _||_e!=null&&_e.constructor!=null&&_e.constructor.name!=null&&_e.constructor.name===_.name}function Pn(_e){return _e!==_e}const yn=function(){const _e="0123456789abcdef",_=new Array(256);for(let j=0;j<16;++j){const nt=j*16;for(let ut=0;ut<16;++ut)_[nt+ut]=_e[j]+_e[ut]}return _}();function un(_e){return typeof BigInt>"u"?Mn:_e}function Mn(){throw new Error("BigInt not supported")}})(buffer);var client={},reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function o(wt,jt){var Mt=wt.length;wt.push(jt);e:for(;0<Mt;){var It=Mt-1>>>1,Dt=wt[It];if(0<c(Dt,jt))wt[It]=jt,wt[Mt]=Dt,Mt=It;else break e}}function a(wt){return wt.length===0?null:wt[0]}function s(wt){if(wt.length===0)return null;var jt=wt[0],Mt=wt.pop();if(Mt!==jt){wt[0]=Mt;e:for(var It=0,Dt=wt.length,sn=Dt>>>1;It<sn;){var on=2*(It+1)-1,en=wt[on],tn=on+1,an=wt[tn];if(0>c(en,Mt))tn<Dt&&0>c(an,en)?(wt[It]=an,wt[tn]=Mt,It=tn):(wt[It]=en,wt[on]=Mt,It=on);else if(tn<Dt&&0>c(an,Mt))wt[It]=an,wt[tn]=Mt,It=tn;else break e}}return jt}function c(wt,jt){var Mt=wt.sortIndex-jt.sortIndex;return Mt!==0?Mt:wt.id-jt.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,g=h.now();e.unstable_now=function(){return h.now()-g}}var b=[],$=[],tt=1,et=null,rt=3,ot=!1,ft=!1,pt=!1,vt=typeof setTimeout=="function"?setTimeout:null,lt=typeof clearTimeout=="function"?clearTimeout:null,it=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function st(wt){for(var jt=a($);jt!==null;){if(jt.callback===null)s($);else if(jt.startTime<=wt)s($),jt.sortIndex=jt.expirationTime,o(b,jt);else break;jt=a($)}}function yt(wt){if(pt=!1,st(wt),!ft)if(a(b)!==null)ft=!0,pn(Et);else{var jt=a($);jt!==null&&hn(yt,jt.startTime-wt)}}function Et(wt,jt){ft=!1,pt&&(pt=!1,lt(_t),_t=-1),ot=!0;var Mt=rt;try{for(st(jt),et=a(b);et!==null&&(!(et.expirationTime>jt)||wt&&!zt());){var It=et.callback;if(typeof It=="function"){et.callback=null,rt=et.priorityLevel;var Dt=It(et.expirationTime<=jt);jt=e.unstable_now(),typeof Dt=="function"?et.callback=Dt:et===a(b)&&s(b),st(jt)}else s(b);et=a(b)}if(et!==null)var sn=!0;else{var on=a($);on!==null&&hn(yt,on.startTime-jt),sn=!1}return sn}finally{et=null,rt=Mt,ot=!1}}var Ct=!1,ct=null,_t=-1,Lt=5,kt=-1;function zt(){return!(e.unstable_now()-kt<Lt)}function Wt(){if(ct!==null){var wt=e.unstable_now();kt=wt;var jt=!0;try{jt=ct(!0,wt)}finally{jt?qt():(Ct=!1,ct=null)}}else Ct=!1}var qt;if(typeof it=="function")qt=function(){it(Wt)};else if(typeof MessageChannel<"u"){var Jt=new MessageChannel,ln=Jt.port2;Jt.port1.onmessage=Wt,qt=function(){ln.postMessage(null)}}else qt=function(){vt(Wt,0)};function pn(wt){ct=wt,Ct||(Ct=!0,qt())}function hn(wt,jt){_t=vt(function(){wt(e.unstable_now())},jt)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(wt){wt.callback=null},e.unstable_continueExecution=function(){ft||ot||(ft=!0,pn(Et))},e.unstable_forceFrameRate=function(wt){0>wt||125<wt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lt=0<wt?Math.floor(1e3/wt):5},e.unstable_getCurrentPriorityLevel=function(){return rt},e.unstable_getFirstCallbackNode=function(){return a(b)},e.unstable_next=function(wt){switch(rt){case 1:case 2:case 3:var jt=3;break;default:jt=rt}var Mt=rt;rt=jt;try{return wt()}finally{rt=Mt}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(wt,jt){switch(wt){case 1:case 2:case 3:case 4:case 5:break;default:wt=3}var Mt=rt;rt=wt;try{return jt()}finally{rt=Mt}},e.unstable_scheduleCallback=function(wt,jt,Mt){var It=e.unstable_now();switch(typeof Mt=="object"&&Mt!==null?(Mt=Mt.delay,Mt=typeof Mt=="number"&&0<Mt?It+Mt:It):Mt=It,wt){case 1:var Dt=-1;break;case 2:Dt=250;break;case 5:Dt=1073741823;break;case 4:Dt=1e4;break;default:Dt=5e3}return Dt=Mt+Dt,wt={id:tt++,callback:jt,priorityLevel:wt,startTime:Mt,expirationTime:Dt,sortIndex:-1},Mt>It?(wt.sortIndex=Mt,o($,wt),a(b)===null&&wt===a($)&&(pt?(lt(_t),_t=-1):pt=!0,hn(yt,Mt-It))):(wt.sortIndex=Dt,o(b,wt),ft||ot||(ft=!0,pn(Et))),wt},e.unstable_shouldYield=zt,e.unstable_wrapCallback=function(wt){var jt=rt;return function(){var Mt=rt;rt=jt;try{return wt.apply(this,arguments)}finally{rt=Mt}}}})(scheduler_production_min);scheduler.exports=scheduler_production_min;var schedulerExports=scheduler.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=reactExports,ca=schedulerExports;function p(e){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(e,o){ha(e,o),ha(e+"Capture",o)}function ha(e,o){for(ea[e]=o,e=0;e<o.length;e++)da.add(o[e])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(e){return ja.call(ma,e)?!0:ja.call(la,e)?!1:ka.test(e)?ma[e]=!0:(la[e]=!0,!1)}function pa(e,o,a,s){if(a!==null&&a.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return s?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qa(e,o,a,s){if(o===null||typeof o>"u"||pa(e,o,a,s))return!0;if(s)return!1;if(a!==null)switch(a.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function v(e,o,a,s,c,d,h){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=s,this.attributeNamespace=c,this.mustUseProperty=a,this.propertyName=e,this.type=o,this.sanitizeURL=d,this.removeEmptyString=h}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new v(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var o=e[0];z[o]=new v(o,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new v(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){z[e]=new v(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){z[e]=new v(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){z[e]=new v(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){z[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var o=e.replace(ra,sa);z[o]=new v(o,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var o=e.replace(ra,sa);z[o]=new v(o,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var o=e.replace(ra,sa);z[o]=new v(o,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){z[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)});z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){z[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function ta(e,o,a,s){var c=z.hasOwnProperty(o)?z[o]:null;(c!==null?c.type!==0:s||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(qa(o,a,c,s)&&(a=null),s||c===null?oa(o)&&(a===null?e.removeAttribute(o):e.setAttribute(o,""+a)):c.mustUseProperty?e[c.propertyName]=a===null?c.type===3?!1:"":a:(o=c.attributeName,s=c.attributeNamespace,a===null?e.removeAttribute(o):(c=c.type,a=c===3||c===4&&a===!0?"":""+a,s?e.setAttributeNS(s,o,a):e.setAttribute(o,a))))}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),Ia=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function Ka(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,La;function Ma(e){if(La===void 0)try{throw Error()}catch(a){var o=a.stack.trim().match(/\n( *(at )?)/);La=o&&o[1]||""}return`
`+La+e}var Na=!1;function Oa(e,o){if(!e||Na)return"";Na=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch($){var s=$}Reflect.construct(e,[],o)}else{try{o.call()}catch($){s=$}e.call(o.prototype)}else{try{throw Error()}catch($){s=$}e()}}catch($){if($&&s&&typeof $.stack=="string"){for(var c=$.stack.split(`
`),d=s.stack.split(`
`),h=c.length-1,g=d.length-1;1<=h&&0<=g&&c[h]!==d[g];)g--;for(;1<=h&&0<=g;h--,g--)if(c[h]!==d[g]){if(h!==1||g!==1)do if(h--,g--,0>g||c[h]!==d[g]){var b=`
`+c[h].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=h&&0<=g);break}}}finally{Na=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Ma(e):""}function Pa(e){switch(e.tag){case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return e=Oa(e.type,!1),e;case 11:return e=Oa(e.type.render,!1),e;case 1:return e=Oa(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ca:return(e.displayName||"Context")+".Consumer";case Ba:return(e._context.displayName||"Context")+".Provider";case Da:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ga:return o=e.displayName||null,o!==null?o:Qa(e.type)||"Memo";case Ha:o=e._payload,e=e._init;try{return Qa(e(o))}catch{}}return null}function Ra(e){var o=e.type;switch(e.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=o.render,e=e.displayName||e.name||"",o.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(o);case 8:return o===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Sa(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ta(e){var o=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ua(e){var o=Ta(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,o),s=""+e[o];if(!e.hasOwnProperty(o)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,o,{configurable:!0,get:function(){return c.call(this)},set:function(h){s=""+h,d.call(this,h)}}),Object.defineProperty(e,o,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(h){s=""+h},stopTracking:function(){e._valueTracker=null,delete e[o]}}}}function Va(e){e._valueTracker||(e._valueTracker=Ua(e))}function Wa(e){if(!e)return!1;var o=e._valueTracker;if(!o)return!0;var a=o.getValue(),s="";return e&&(s=Ta(e)?e.checked?"true":"false":e.value),e=s,e!==a?(o.setValue(e),!0):!1}function Xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,o){var a=o.checked;return A({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Za(e,o){var a=o.defaultValue==null?"":o.defaultValue,s=o.checked!=null?o.checked:o.defaultChecked;a=Sa(o.value!=null?o.value:a),e._wrapperState={initialChecked:s,initialValue:a,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ab(e,o){o=o.checked,o!=null&&ta(e,"checked",o,!1)}function bb(e,o){ab(e,o);var a=Sa(o.value),s=o.type;if(a!=null)s==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}o.hasOwnProperty("value")?cb(e,o.type,a):o.hasOwnProperty("defaultValue")&&cb(e,o.type,Sa(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(e.defaultChecked=!!o.defaultChecked)}function db(e,o,a){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var s=o.type;if(!(s!=="submit"&&s!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+e._wrapperState.initialValue,a||o===e.value||(e.value=o),e.defaultValue=o}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function cb(e,o,a){(o!=="number"||Xa(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var eb=Array.isArray;function fb(e,o,a,s){if(e=e.options,o){o={};for(var c=0;c<a.length;c++)o["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=o.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Sa(a),o=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}o!==null||e[c].disabled||(o=e[c])}o!==null&&(o.selected=!0)}}function gb(e,o){if(o.dangerouslySetInnerHTML!=null)throw Error(p(91));return A({},o,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hb(e,o){var a=o.value;if(a==null){if(a=o.children,o=o.defaultValue,a!=null){if(o!=null)throw Error(p(92));if(eb(a)){if(1<a.length)throw Error(p(93));a=a[0]}o=a}o==null&&(o=""),a=o}e._wrapperState={initialValue:Sa(a)}}function ib(e,o){var a=Sa(o.value),s=Sa(o.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),o.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),s!=null&&(e.defaultValue=""+s)}function jb(e){var o=e.textContent;o===e._wrapperState.initialValue&&o!==""&&o!==null&&(e.value=o)}function kb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb(e,o){return e==null||e==="http://www.w3.org/1999/xhtml"?kb(o):e==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mb,nb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,a,s,c){MSApp.execUnsafeLocalFunction(function(){return e(o,a,s,c)})}:e}(function(e,o){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=o;else{for(mb=mb||document.createElement("div"),mb.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=mb.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;o.firstChild;)e.appendChild(o.firstChild)}});function ob(e,o){if(o){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=o;return}}e.textContent=o}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(e){qb.forEach(function(o){o=o+e.charAt(0).toUpperCase()+e.substring(1),pb[o]=pb[e]})});function rb(e,o,a){return o==null||typeof o=="boolean"||o===""?"":a||typeof o!="number"||o===0||pb.hasOwnProperty(e)&&pb[e]?(""+o).trim():o+"px"}function sb(e,o){e=e.style;for(var a in o)if(o.hasOwnProperty(a)){var s=a.indexOf("--")===0,c=rb(a,o[a],s);a==="float"&&(a="cssFloat"),s?e.setProperty(a,c):e[a]=c}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(e,o){if(o){if(tb[e]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(p(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(p(61))}if(o.style!=null&&typeof o.style!="object")throw Error(p(62))}}function vb(e,o){if(e.indexOf("-")===-1)return typeof o.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=null;function xb(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yb=null,zb=null,Ab=null;function Bb(e){if(e=Cb(e)){if(typeof yb!="function")throw Error(p(280));var o=e.stateNode;o&&(o=Db(o),yb(e.stateNode,e.type,o))}}function Eb(e){zb?Ab?Ab.push(e):Ab=[e]:zb=e}function Fb(){if(zb){var e=zb,o=Ab;if(Ab=zb=null,Bb(e),o)for(e=0;e<o.length;e++)Bb(o[e])}}function Gb(e,o){return e(o)}function Hb(){}var Ib=!1;function Jb(e,o,a){if(Ib)return e(o,a);Ib=!0;try{return Gb(e,o,a)}finally{Ib=!1,(zb!==null||Ab!==null)&&(Hb(),Fb())}}function Kb(e,o){var a=e.stateNode;if(a===null)return null;var s=Db(a);if(s===null)return null;a=s[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(p(231,o,typeof a));return a}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}}),window.addEventListener("test",Mb,Mb),window.removeEventListener("test",Mb,Mb)}catch{Lb=!1}function Nb(e,o,a,s,c,d,h,g,b){var $=Array.prototype.slice.call(arguments,3);try{o.apply(a,$)}catch(tt){this.onError(tt)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(e){Ob=!0,Pb=e}};function Tb(e,o,a,s,c,d,h,g,b){Ob=!1,Pb=null,Nb.apply(Sb,arguments)}function Ub(e,o,a,s,c,d,h,g,b){if(Tb.apply(this,arguments),Ob){if(Ob){var $=Pb;Ob=!1,Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=$)}}function Vb(e){var o=e,a=e;if(e.alternate)for(;o.return;)o=o.return;else{e=o;do o=e,o.flags&4098&&(a=o.return),e=o.return;while(e)}return o.tag===3?a:null}function Wb(e){if(e.tag===13){var o=e.memoizedState;if(o===null&&(e=e.alternate,e!==null&&(o=e.memoizedState)),o!==null)return o.dehydrated}return null}function Xb(e){if(Vb(e)!==e)throw Error(p(188))}function Yb(e){var o=e.alternate;if(!o){if(o=Vb(e),o===null)throw Error(p(188));return o!==e?null:e}for(var a=e,s=o;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return Xb(c),e;if(d===s)return Xb(c),o;d=d.sibling}throw Error(p(188))}if(a.return!==s.return)a=c,s=d;else{for(var h=!1,g=c.child;g;){if(g===a){h=!0,a=c,s=d;break}if(g===s){h=!0,s=c,a=d;break}g=g.sibling}if(!h){for(g=d.child;g;){if(g===a){h=!0,a=d,s=c;break}if(g===s){h=!0,s=d,a=c;break}g=g.sibling}if(!h)throw Error(p(189))}}if(a.alternate!==s)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?e:o}function Zb(e){return e=Yb(e),e!==null?$b(e):null}function $b(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var o=$b(e);if(o!==null)return o;e=e.sibling}return null}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(e){if(lc&&typeof lc.onCommitFiberRoot=="function")try{lc.onCommitFiberRoot(kc,e,void 0,(e.current.flags&128)===128)}catch{}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(e){return e>>>=0,e===0?32:31-(pc(e)/qc|0)|0}var rc=64,sc=4194304;function tc(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uc(e,o){var a=e.pendingLanes;if(a===0)return 0;var s=0,c=e.suspendedLanes,d=e.pingedLanes,h=a&268435455;if(h!==0){var g=h&~c;g!==0?s=tc(g):(d&=h,d!==0&&(s=tc(d)))}else h=a&~c,h!==0?s=tc(h):d!==0&&(s=tc(d));if(s===0)return 0;if(o!==0&&o!==s&&!(o&c)&&(c=s&-s,d=o&-o,c>=d||c===16&&(d&4194240)!==0))return o;if(s&4&&(s|=a&16),o=e.entangledLanes,o!==0)for(e=e.entanglements,o&=s;0<o;)a=31-oc(o),c=1<<a,s|=e[a],o&=~c;return s}function vc(e,o){switch(e){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(e,o){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-oc(d),g=1<<h,b=c[h];b===-1?(!(g&a)||g&s)&&(c[h]=vc(g,o)):b<=o&&(e.expiredLanes|=g),d&=~g}}function xc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yc(){var e=rc;return rc<<=1,!(rc&4194240)&&(rc=64),e}function zc(e){for(var o=[],a=0;31>a;a++)o.push(e);return o}function Ac(e,o,a){e.pendingLanes|=o,o!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,o=31-oc(o),e[o]=a}function Bc(e,o){var a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<a;){var c=31-oc(a),d=1<<c;o[c]=0,s[c]=-1,e[c]=-1,a&=~d}}function Cc(e,o){var a=e.entangledLanes|=o;for(e=e.entanglements;a;){var s=31-oc(a),c=1<<s;c&o|e[s]&o&&(e[s]|=o),a&=~c}}var C=0;function Dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,o){switch(e){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(o.pointerId)}}function Tc(e,o,a,s,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:o,domEventName:a,eventSystemFlags:s,nativeEvent:d,targetContainers:[c]},o!==null&&(o=Cb(o),o!==null&&Fc(o)),e):(e.eventSystemFlags|=s,o=e.targetContainers,c!==null&&o.indexOf(c)===-1&&o.push(c),e)}function Uc(e,o,a,s,c){switch(o){case"focusin":return Lc=Tc(Lc,e,o,a,s,c),!0;case"dragenter":return Mc=Tc(Mc,e,o,a,s,c),!0;case"mouseover":return Nc=Tc(Nc,e,o,a,s,c),!0;case"pointerover":var d=c.pointerId;return Oc.set(d,Tc(Oc.get(d)||null,e,o,a,s,c)),!0;case"gotpointercapture":return d=c.pointerId,Pc.set(d,Tc(Pc.get(d)||null,e,o,a,s,c)),!0}return!1}function Vc(e){var o=Wc(e.target);if(o!==null){var a=Vb(o);if(a!==null){if(o=a.tag,o===13){if(o=Wb(a),o!==null){e.blockedOn=o,Ic(e.priority,function(){Gc(a)});return}}else if(o===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xc(e){if(e.blockedOn!==null)return!1;for(var o=e.targetContainers;0<o.length;){var a=Yc(e.domEventName,e.eventSystemFlags,o[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);wb=s,a.target.dispatchEvent(s),wb=null}else return o=Cb(a),o!==null&&Fc(o),e.blockedOn=a,!1;o.shift()}return!0}function Zc(e,o,a){Xc(e)&&a.delete(o)}function $c(){Jc=!1,Lc!==null&&Xc(Lc)&&(Lc=null),Mc!==null&&Xc(Mc)&&(Mc=null),Nc!==null&&Xc(Nc)&&(Nc=null),Oc.forEach(Zc),Pc.forEach(Zc)}function ad(e,o){e.blockedOn===o&&(e.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}function bd(e){function o(c){return ad(c,e)}if(0<Kc.length){ad(Kc[0],e);for(var a=1;a<Kc.length;a++){var s=Kc[a];s.blockedOn===e&&(s.blockedOn=null)}}for(Lc!==null&&ad(Lc,e),Mc!==null&&ad(Mc,e),Nc!==null&&ad(Nc,e),Oc.forEach(o),Pc.forEach(o),a=0;a<Qc.length;a++)s=Qc[a],s.blockedOn===e&&(s.blockedOn=null);for(;0<Qc.length&&(a=Qc[0],a.blockedOn===null);)Vc(a),a.blockedOn===null&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(e,o,a,s){var c=C,d=cd.transition;cd.transition=null;try{C=1,fd(e,o,a,s)}finally{C=c,cd.transition=d}}function gd(e,o,a,s){var c=C,d=cd.transition;cd.transition=null;try{C=4,fd(e,o,a,s)}finally{C=c,cd.transition=d}}function fd(e,o,a,s){if(dd){var c=Yc(e,o,a,s);if(c===null)hd(e,o,s,id,a),Sc(e,s);else if(Uc(c,e,o,a,s))s.stopPropagation();else if(Sc(e,s),o&4&&-1<Rc.indexOf(e)){for(;c!==null;){var d=Cb(c);if(d!==null&&Ec(d),d=Yc(e,o,a,s),d===null&&hd(e,o,s,id,a),d===c)break;c=d}c!==null&&s.stopPropagation()}else hd(e,o,s,null,a)}}var id=null;function Yc(e,o,a,s){if(id=null,e=xb(s),e=Wc(e),e!==null)if(o=Vb(e),o===null)e=null;else if(a=o.tag,a===13){if(e=Wb(o),e!==null)return e;e=null}else if(a===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;e=null}else o!==e&&(e=null);return id=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var e,o=ld,a=o.length,s,c="value"in kd?kd.value:kd.textContent,d=c.length;for(e=0;e<a&&o[e]===c[e];e++);var h=a-e;for(s=1;s<=h&&o[a-s]===c[d-s];s++);return md=c.slice(e,1<s?1-s:void 0)}function od(e){var o=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&o===13&&(e=13)):e=o,e===10&&(e=13),32<=e||e===13?e:0}function pd(){return!0}function qd(){return!1}function rd(e){function o(a,s,c,d,h){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(d):d[g]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return A(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd}),o}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yd&&(yd&&e.type==="mousemove"?(wd=e.screenX-yd.screenX,xd=e.screenY-yd.screenY):xd=wd=0,yd=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(e):(e=Od[e])?!!o[e]:!1}function zd(){return Pd}var Qd=A({},ud,{key:function(e){if(e.key){var o=Md[e.key]||e.key;if(o!=="Unidentified")return o}return e.type==="keypress"?(e=od(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(e){return e.type==="keypress"?od(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?od(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=" ",fe=!1;function ge(e,o){switch(e){case"keyup":return $d.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ie=!1;function je(e,o){switch(e){case"compositionend":return he(o);case"keypress":return o.which!==32?null:(fe=!0,ee);case"textInput":return e=o.data,e===ee&&fe?null:e;default:return null}}function ke(e,o){if(ie)return e==="compositionend"||!ae&&ge(e,o)?(e=nd(),md=ld=kd=null,ie=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return de&&o.locale!=="ko"?null:o.data;default:return null}}var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o==="input"?!!le[e.type]:o==="textarea"}function ne(e,o,a,s){Eb(s),o=oe(o,"onChange"),0<o.length&&(a=new td("onChange","change",null,a,s),e.push({event:a,listeners:o}))}var pe=null,qe=null;function re(e){se(e,0)}function te(e){var o=ue(e);if(Wa(o))return e}function ve(e,o){if(e==="change")return o}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;"),ye=typeof ze.oninput=="function"}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(e){if(e.propertyName==="value"&&te(qe)){var o=[];ne(o,qe,e,xb(e)),Jb(re,o)}}function Ce(e,o,a){e==="focusin"?(Ae(),pe=o,qe=a,pe.attachEvent("onpropertychange",Be)):e==="focusout"&&Ae()}function De(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return te(qe)}function Ee(e,o){if(e==="click")return te(o)}function Fe(e,o){if(e==="input"||e==="change")return te(o)}function Ge(e,o){return e===o&&(e!==0||1/e===1/o)||e!==e&&o!==o}var He=typeof Object.is=="function"?Object.is:Ge;function Ie(e,o){if(He(e,o))return!0;if(typeof e!="object"||e===null||typeof o!="object"||o===null)return!1;var a=Object.keys(e),s=Object.keys(o);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ja.call(o,c)||!He(e[c],o[c]))return!1}return!0}function Je(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ke(e,o){var a=Je(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=o&&s>=o)return{node:a,offset:o-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Je(a)}}function Le(e,o){return e&&o?e===o?!0:e&&e.nodeType===3?!1:o&&o.nodeType===3?Le(e,o.parentNode):"contains"in e?e.contains(o):e.compareDocumentPosition?!!(e.compareDocumentPosition(o)&16):!1:!1}function Me(){for(var e=window,o=Xa();o instanceof e.HTMLIFrameElement;){try{var a=typeof o.contentWindow.location.href=="string"}catch{a=!1}if(a)e=o.contentWindow;else break;o=Xa(e.document)}return o}function Ne(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o&&(o==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||o==="textarea"||e.contentEditable==="true")}function Oe(e){var o=Me(),a=e.focusedElem,s=e.selectionRange;if(o!==a&&a&&a.ownerDocument&&Le(a.ownerDocument.documentElement,a)){if(s!==null&&Ne(a)){if(o=s.start,e=s.end,e===void 0&&(e=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(e,a.value.length);else if(e=(o=a.ownerDocument||document)&&o.defaultView||window,e.getSelection){e=e.getSelection();var c=a.textContent.length,d=Math.min(s.start,c);s=s.end===void 0?d:Math.min(s.end,c),!e.extend&&d>s&&(c=s,s=d,d=c),c=Ke(a,d);var h=Ke(a,s);c&&h&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(o=o.createRange(),o.setStart(c.node,c.offset),e.removeAllRanges(),d>s?(e.addRange(o),e.extend(h.node,h.offset)):(o.setEnd(h.node,h.offset),e.addRange(o)))}}for(o=[],e=a;e=e.parentNode;)e.nodeType===1&&o.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<o.length;a++)e=o[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(e,o,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Te||Qe==null||Qe!==Xa(s)||(s=Qe,"selectionStart"in s&&Ne(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Se&&Ie(Se,s)||(Se=s,s=oe(Re,"onSelect"),0<s.length&&(o=new td("onSelect","select",null,o,a),e.push({event:o,listeners:s}),o.target=Qe)))}function Ve(e,o){var a={};return a[e.toLowerCase()]=o.toLowerCase(),a["Webkit"+e]="webkit"+o,a["Moz"+e]="moz"+o,a}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(e){if(Xe[e])return Xe[e];if(!We[e])return e;var o=We[e],a;for(a in o)if(o.hasOwnProperty(a)&&a in Ye)return Xe[e]=o[a];return e}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(e,o){df.set(e,o),fa(o,[e])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(e,o,a){var s=e.type||"unknown-event";e.currentTarget=a,Ub(s,o,void 0,e),e.currentTarget=null}function se(e,o){o=(o&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var d=void 0;if(o)for(var h=s.length-1;0<=h;h--){var g=s[h],b=g.instance,$=g.currentTarget;if(g=g.listener,b!==d&&c.isPropagationStopped())break e;nf(c,g,$),d=b}else for(h=0;h<s.length;h++){if(g=s[h],b=g.instance,$=g.currentTarget,g=g.listener,b!==d&&c.isPropagationStopped())break e;nf(c,g,$),d=b}}}if(Qb)throw e=Rb,Qb=!1,Rb=null,e}function D(e,o){var a=o[of];a===void 0&&(a=o[of]=new Set);var s=e+"__bubble";a.has(s)||(pf(o,e,2,!1),a.add(s))}function qf(e,o,a){var s=0;o&&(s|=4),pf(a,e,s,o)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(e){if(!e[rf]){e[rf]=!0,da.forEach(function(a){a!=="selectionchange"&&(mf.has(a)||qf(a,!1,e),qf(a,!0,e))});var o=e.nodeType===9?e:e.ownerDocument;o===null||o[rf]||(o[rf]=!0,qf("selectionchange",!1,o))}}function pf(e,o,a,s){switch(jd(o)){case 1:var c=ed;break;case 4:c=gd;break;default:c=fd}a=c.bind(null,o,a,e),c=void 0,!Lb||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(o,a,{capture:!0,passive:c}):e.addEventListener(o,a,!0):c!==void 0?e.addEventListener(o,a,{passive:c}):e.addEventListener(o,a,!1)}function hd(e,o,a,s,c){var d=s;if(!(o&1)&&!(o&2)&&s!==null)e:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var g=s.stateNode.containerInfo;if(g===c||g.nodeType===8&&g.parentNode===c)break;if(h===4)for(h=s.return;h!==null;){var b=h.tag;if((b===3||b===4)&&(b=h.stateNode.containerInfo,b===c||b.nodeType===8&&b.parentNode===c))return;h=h.return}for(;g!==null;){if(h=Wc(g),h===null)return;if(b=h.tag,b===5||b===6){s=d=h;continue e}g=g.parentNode}}s=s.return}Jb(function(){var $=d,tt=xb(a),et=[];e:{var rt=df.get(e);if(rt!==void 0){var ot=td,ft=e;switch(e){case"keypress":if(od(a)===0)break e;case"keydown":case"keyup":ot=Rd;break;case"focusin":ft="focus",ot=Fd;break;case"focusout":ft="blur",ot=Fd;break;case"beforeblur":case"afterblur":ot=Fd;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Vd;break;case $e:case af:case bf:ot=Hd;break;case cf:ot=Xd;break;case"scroll":ot=vd;break;case"wheel":ot=Zd;break;case"copy":case"cut":case"paste":ot=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Td}var pt=(o&4)!==0,vt=!pt&&e==="scroll",lt=pt?rt!==null?rt+"Capture":null:rt;pt=[];for(var it=$,st;it!==null;){st=it;var yt=st.stateNode;if(st.tag===5&&yt!==null&&(st=yt,lt!==null&&(yt=Kb(it,lt),yt!=null&&pt.push(tf(it,yt,st)))),vt)break;it=it.return}0<pt.length&&(rt=new ot(rt,ft,null,a,tt),et.push({event:rt,listeners:pt}))}}if(!(o&7)){e:{if(rt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",rt&&a!==wb&&(ft=a.relatedTarget||a.fromElement)&&(Wc(ft)||ft[uf]))break e;if((ot||rt)&&(rt=tt.window===tt?tt:(rt=tt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ot?(ft=a.relatedTarget||a.toElement,ot=$,ft=ft?Wc(ft):null,ft!==null&&(vt=Vb(ft),ft!==vt||ft.tag!==5&&ft.tag!==6)&&(ft=null)):(ot=null,ft=$),ot!==ft)){if(pt=Bd,yt="onMouseLeave",lt="onMouseEnter",it="mouse",(e==="pointerout"||e==="pointerover")&&(pt=Td,yt="onPointerLeave",lt="onPointerEnter",it="pointer"),vt=ot==null?rt:ue(ot),st=ft==null?rt:ue(ft),rt=new pt(yt,it+"leave",ot,a,tt),rt.target=vt,rt.relatedTarget=st,yt=null,Wc(tt)===$&&(pt=new pt(lt,it+"enter",ft,a,tt),pt.target=st,pt.relatedTarget=vt,yt=pt),vt=yt,ot&&ft)t:{for(pt=ot,lt=ft,it=0,st=pt;st;st=vf(st))it++;for(st=0,yt=lt;yt;yt=vf(yt))st++;for(;0<it-st;)pt=vf(pt),it--;for(;0<st-it;)lt=vf(lt),st--;for(;it--;){if(pt===lt||lt!==null&&pt===lt.alternate)break t;pt=vf(pt),lt=vf(lt)}pt=null}else pt=null;ot!==null&&wf(et,rt,ot,pt,!1),ft!==null&&vt!==null&&wf(et,vt,ft,pt,!0)}}e:{if(rt=$?ue($):window,ot=rt.nodeName&&rt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&rt.type==="file")var Et=ve;else if(me(rt))if(we)Et=Fe;else{Et=De;var Ct=Ce}else(ot=rt.nodeName)&&ot.toLowerCase()==="input"&&(rt.type==="checkbox"||rt.type==="radio")&&(Et=Ee);if(Et&&(Et=Et(e,$))){ne(et,Et,a,tt);break e}Ct&&Ct(e,rt,$),e==="focusout"&&(Ct=rt._wrapperState)&&Ct.controlled&&rt.type==="number"&&cb(rt,"number",rt.value)}switch(Ct=$?ue($):window,e){case"focusin":(me(Ct)||Ct.contentEditable==="true")&&(Qe=Ct,Re=$,Se=null);break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1,Ue(et,a,tt);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(et,a,tt)}var ct;if(ae)e:{switch(e){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else ie?ge(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(de&&a.locale!=="ko"&&(ie||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&ie&&(ct=nd()):(kd=tt,ld="value"in kd?kd.value:kd.textContent,ie=!0)),Ct=oe($,_t),0<Ct.length&&(_t=new Ld(_t,e,null,a,tt),et.push({event:_t,listeners:Ct}),ct?_t.data=ct:(ct=he(a),ct!==null&&(_t.data=ct)))),(ct=ce?je(e,a):ke(e,a))&&($=oe($,"onBeforeInput"),0<$.length&&(tt=new Ld("onBeforeInput","beforeinput",null,a,tt),et.push({event:tt,listeners:$}),tt.data=ct))}se(et,o)})}function tf(e,o,a){return{instance:e,listener:o,currentTarget:a}}function oe(e,o){for(var a=o+"Capture",s=[];e!==null;){var c=e,d=c.stateNode;c.tag===5&&d!==null&&(c=d,d=Kb(e,a),d!=null&&s.unshift(tf(e,d,c)),d=Kb(e,o),d!=null&&s.push(tf(e,d,c))),e=e.return}return s}function vf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wf(e,o,a,s,c){for(var d=o._reactName,h=[];a!==null&&a!==s;){var g=a,b=g.alternate,$=g.stateNode;if(b!==null&&b===s)break;g.tag===5&&$!==null&&(g=$,c?(b=Kb(a,d),b!=null&&h.unshift(tf(a,b,g))):c||(b=Kb(a,d),b!=null&&h.push(tf(a,b,g)))),a=a.return}h.length!==0&&e.push({event:o,listeners:h})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(e){return(typeof e=="string"?e:""+e).replace(xf,`
`).replace(yf,"")}function Af(e,o,a){if(o=zf(o),zf(e)!==o&&a)throw Error(p(425))}function Bf(){}var Cf=null,Df=null;function Ef(e,o){return e==="textarea"||e==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(If)}:Ff;function If(e){setTimeout(function(){throw e})}function Kf(e,o){var a=o,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){e.removeChild(c),bd(o);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);bd(o)}function Lf(e){for(;e!=null;e=e.nextSibling){var o=e.nodeType;if(o===1||o===3)break;if(o===8){if(o=e.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return e}function Mf(e){e=e.previousSibling;for(var o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(o===0)return e;o--}else a==="/$"&&o++}e=e.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(e){var o=e[Of];if(o)return o;for(var a=e.parentNode;a;){if(o=a[uf]||a[Of]){if(a=o.alternate,o.child!==null||a!==null&&a.child!==null)for(e=Mf(e);e!==null;){if(a=e[Of])return a;e=Mf(e)}return o}e=a,a=e.parentNode}return null}function Cb(e){return e=e[Of]||e[uf],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ue(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Db(e){return e[Pf]||null}var Sf=[],Tf=-1;function Uf(e){return{current:e}}function E(e){0>Tf||(e.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(e,o){Tf++,Sf[Tf]=e.current,e.current=o}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(e,o){var a=e.type.contextTypes;if(!a)return Vf;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===o)return s.__reactInternalMemoizedMaskedChildContext;var c={},d;for(d in a)c[d]=o[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=c),c}function Zf(e){return e=e.childContextTypes,e!=null}function $f(){E(Wf),E(H)}function ag(e,o,a){if(H.current!==Vf)throw Error(p(168));G(H,o),G(Wf,a)}function bg(e,o,a){var s=e.stateNode;if(o=o.childContextTypes,typeof s.getChildContext!="function")return a;s=s.getChildContext();for(var c in s)if(!(c in o))throw Error(p(108,Ra(e)||"Unknown",c));return A({},a,s)}function cg(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vf,Xf=H.current,G(H,e),G(Wf,Wf.current),!0}function dg(e,o,a){var s=e.stateNode;if(!s)throw Error(p(169));a?(e=bg(e,o,Xf),s.__reactInternalMemoizedMergedChildContext=e,E(Wf),E(H),G(H,e)):E(Wf),G(Wf,a)}var eg=null,fg=!1,gg=!1;function hg(e){eg===null?eg=[e]:eg.push(e)}function ig(e){fg=!0,hg(e)}function jg(){if(!gg&&eg!==null){gg=!0;var e=0,o=C;try{var a=eg;for(C=1;e<a.length;e++){var s=a[e];do s=s(!0);while(s!==null)}eg=null,fg=!1}catch(c){throw eg!==null&&(eg=eg.slice(e+1)),ac(fc,jg),c}finally{C=o,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(e,o){kg[lg++]=ng,kg[lg++]=mg,mg=e,ng=o}function ug(e,o,a){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=e;var s=rg;e=sg;var c=32-oc(s)-1;s&=~(1<<c),a+=1;var d=32-oc(o)+c;if(30<d){var h=c-c%5;d=(s&(1<<h)-1).toString(32),s>>=h,c-=h,rg=1<<32-oc(o)+c|a<<c|s,sg=d+e}else rg=1<<d|a<<c|s,sg=e}function vg(e){e.return!==null&&(tg(e,1),ug(e,1,0))}function wg(e){for(;e===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;e===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;function Ag(e,o){var a=Bg(5,null,null,0);a.elementType="DELETED",a.stateNode=o,a.return=e,o=e.deletions,o===null?(e.deletions=[a],e.flags|=16):o.push(a)}function Cg(e,o){switch(e.tag){case 5:var a=e.type;return o=o.nodeType!==1||a.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(e.stateNode=o,xg=e,yg=Lf(o.firstChild),!0):!1;case 6:return o=e.pendingProps===""||o.nodeType!==3?null:o,o!==null?(e.stateNode=o,xg=e,yg=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(a=qg!==null?{id:rg,overflow:sg}:null,e.memoizedState={dehydrated:o,treeContext:a,retryLane:1073741824},a=Bg(18,null,null,0),a.stateNode=o,a.return=e,e.child=a,xg=e,yg=null,!0):!1;default:return!1}}function Dg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eg(e){if(I){var o=yg;if(o){var a=o;if(!Cg(e,o)){if(Dg(e))throw Error(p(418));o=Lf(a.nextSibling);var s=xg;o&&Cg(e,o)?Ag(s,a):(e.flags=e.flags&-4097|2,I=!1,xg=e)}}else{if(Dg(e))throw Error(p(418));e.flags=e.flags&-4097|2,I=!1,xg=e}}}function Fg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xg=e}function Gg(e){if(e!==xg)return!1;if(!I)return Fg(e),I=!0,!1;var o;if((o=e.tag!==3)&&!(o=e.tag!==5)&&(o=e.type,o=o!=="head"&&o!=="body"&&!Ef(e.type,e.memoizedProps)),o&&(o=yg)){if(Dg(e))throw Hg(),Error(p(418));for(;o;)Ag(e,o),o=Lf(o.nextSibling)}if(Fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(o===0){yg=Lf(e.nextSibling);break e}o--}else a!=="$"&&a!=="$!"&&a!=="$?"||o++}e=e.nextSibling}yg=null}}else yg=xg?Lf(e.stateNode.nextSibling):null;return!0}function Hg(){for(var e=yg;e;)e=Lf(e.nextSibling)}function Ig(){yg=xg=null,I=!1}function Jg(e){zg===null?zg=[e]:zg.push(e)}var Kg=ua.ReactCurrentBatchConfig;function Lg(e,o,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(p(309));var s=a.stateNode}if(!s)throw Error(p(147,e));var c=s,d=""+e;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===d?o.ref:(o=function(h){var g=c.refs;h===null?delete g[d]:g[d]=h},o._stringRef=d,o)}if(typeof e!="string")throw Error(p(284));if(!a._owner)throw Error(p(290,e))}return e}function Mg(e,o){throw e=Object.prototype.toString.call(o),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":e))}function Ng(e){var o=e._init;return o(e._payload)}function Og(e){function o(lt,it){if(e){var st=lt.deletions;st===null?(lt.deletions=[it],lt.flags|=16):st.push(it)}}function a(lt,it){if(!e)return null;for(;it!==null;)o(lt,it),it=it.sibling;return null}function s(lt,it){for(lt=new Map;it!==null;)it.key!==null?lt.set(it.key,it):lt.set(it.index,it),it=it.sibling;return lt}function c(lt,it){return lt=Pg(lt,it),lt.index=0,lt.sibling=null,lt}function d(lt,it,st){return lt.index=st,e?(st=lt.alternate,st!==null?(st=st.index,st<it?(lt.flags|=2,it):st):(lt.flags|=2,it)):(lt.flags|=1048576,it)}function h(lt){return e&&lt.alternate===null&&(lt.flags|=2),lt}function g(lt,it,st,yt){return it===null||it.tag!==6?(it=Qg(st,lt.mode,yt),it.return=lt,it):(it=c(it,st),it.return=lt,it)}function b(lt,it,st,yt){var Et=st.type;return Et===ya?tt(lt,it,st.props.children,yt,st.key):it!==null&&(it.elementType===Et||typeof Et=="object"&&Et!==null&&Et.$$typeof===Ha&&Ng(Et)===it.type)?(yt=c(it,st.props),yt.ref=Lg(lt,it,st),yt.return=lt,yt):(yt=Rg(st.type,st.key,st.props,null,lt.mode,yt),yt.ref=Lg(lt,it,st),yt.return=lt,yt)}function $(lt,it,st,yt){return it===null||it.tag!==4||it.stateNode.containerInfo!==st.containerInfo||it.stateNode.implementation!==st.implementation?(it=Sg(st,lt.mode,yt),it.return=lt,it):(it=c(it,st.children||[]),it.return=lt,it)}function tt(lt,it,st,yt,Et){return it===null||it.tag!==7?(it=Tg(st,lt.mode,yt,Et),it.return=lt,it):(it=c(it,st),it.return=lt,it)}function et(lt,it,st){if(typeof it=="string"&&it!==""||typeof it=="number")return it=Qg(""+it,lt.mode,st),it.return=lt,it;if(typeof it=="object"&&it!==null){switch(it.$$typeof){case va:return st=Rg(it.type,it.key,it.props,null,lt.mode,st),st.ref=Lg(lt,null,it),st.return=lt,st;case wa:return it=Sg(it,lt.mode,st),it.return=lt,it;case Ha:var yt=it._init;return et(lt,yt(it._payload),st)}if(eb(it)||Ka(it))return it=Tg(it,lt.mode,st,null),it.return=lt,it;Mg(lt,it)}return null}function rt(lt,it,st,yt){var Et=it!==null?it.key:null;if(typeof st=="string"&&st!==""||typeof st=="number")return Et!==null?null:g(lt,it,""+st,yt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case va:return st.key===Et?b(lt,it,st,yt):null;case wa:return st.key===Et?$(lt,it,st,yt):null;case Ha:return Et=st._init,rt(lt,it,Et(st._payload),yt)}if(eb(st)||Ka(st))return Et!==null?null:tt(lt,it,st,yt,null);Mg(lt,st)}return null}function ot(lt,it,st,yt,Et){if(typeof yt=="string"&&yt!==""||typeof yt=="number")return lt=lt.get(st)||null,g(it,lt,""+yt,Et);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case va:return lt=lt.get(yt.key===null?st:yt.key)||null,b(it,lt,yt,Et);case wa:return lt=lt.get(yt.key===null?st:yt.key)||null,$(it,lt,yt,Et);case Ha:var Ct=yt._init;return ot(lt,it,st,Ct(yt._payload),Et)}if(eb(yt)||Ka(yt))return lt=lt.get(st)||null,tt(it,lt,yt,Et,null);Mg(it,yt)}return null}function ft(lt,it,st,yt){for(var Et=null,Ct=null,ct=it,_t=it=0,Lt=null;ct!==null&&_t<st.length;_t++){ct.index>_t?(Lt=ct,ct=null):Lt=ct.sibling;var kt=rt(lt,ct,st[_t],yt);if(kt===null){ct===null&&(ct=Lt);break}e&&ct&&kt.alternate===null&&o(lt,ct),it=d(kt,it,_t),Ct===null?Et=kt:Ct.sibling=kt,Ct=kt,ct=Lt}if(_t===st.length)return a(lt,ct),I&&tg(lt,_t),Et;if(ct===null){for(;_t<st.length;_t++)ct=et(lt,st[_t],yt),ct!==null&&(it=d(ct,it,_t),Ct===null?Et=ct:Ct.sibling=ct,Ct=ct);return I&&tg(lt,_t),Et}for(ct=s(lt,ct);_t<st.length;_t++)Lt=ot(ct,lt,_t,st[_t],yt),Lt!==null&&(e&&Lt.alternate!==null&&ct.delete(Lt.key===null?_t:Lt.key),it=d(Lt,it,_t),Ct===null?Et=Lt:Ct.sibling=Lt,Ct=Lt);return e&&ct.forEach(function(zt){return o(lt,zt)}),I&&tg(lt,_t),Et}function pt(lt,it,st,yt){var Et=Ka(st);if(typeof Et!="function")throw Error(p(150));if(st=Et.call(st),st==null)throw Error(p(151));for(var Ct=Et=null,ct=it,_t=it=0,Lt=null,kt=st.next();ct!==null&&!kt.done;_t++,kt=st.next()){ct.index>_t?(Lt=ct,ct=null):Lt=ct.sibling;var zt=rt(lt,ct,kt.value,yt);if(zt===null){ct===null&&(ct=Lt);break}e&&ct&&zt.alternate===null&&o(lt,ct),it=d(zt,it,_t),Ct===null?Et=zt:Ct.sibling=zt,Ct=zt,ct=Lt}if(kt.done)return a(lt,ct),I&&tg(lt,_t),Et;if(ct===null){for(;!kt.done;_t++,kt=st.next())kt=et(lt,kt.value,yt),kt!==null&&(it=d(kt,it,_t),Ct===null?Et=kt:Ct.sibling=kt,Ct=kt);return I&&tg(lt,_t),Et}for(ct=s(lt,ct);!kt.done;_t++,kt=st.next())kt=ot(ct,lt,_t,kt.value,yt),kt!==null&&(e&&kt.alternate!==null&&ct.delete(kt.key===null?_t:kt.key),it=d(kt,it,_t),Ct===null?Et=kt:Ct.sibling=kt,Ct=kt);return e&&ct.forEach(function(Wt){return o(lt,Wt)}),I&&tg(lt,_t),Et}function vt(lt,it,st,yt){if(typeof st=="object"&&st!==null&&st.type===ya&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case va:e:{for(var Et=st.key,Ct=it;Ct!==null;){if(Ct.key===Et){if(Et=st.type,Et===ya){if(Ct.tag===7){a(lt,Ct.sibling),it=c(Ct,st.props.children),it.return=lt,lt=it;break e}}else if(Ct.elementType===Et||typeof Et=="object"&&Et!==null&&Et.$$typeof===Ha&&Ng(Et)===Ct.type){a(lt,Ct.sibling),it=c(Ct,st.props),it.ref=Lg(lt,Ct,st),it.return=lt,lt=it;break e}a(lt,Ct);break}else o(lt,Ct);Ct=Ct.sibling}st.type===ya?(it=Tg(st.props.children,lt.mode,yt,st.key),it.return=lt,lt=it):(yt=Rg(st.type,st.key,st.props,null,lt.mode,yt),yt.ref=Lg(lt,it,st),yt.return=lt,lt=yt)}return h(lt);case wa:e:{for(Ct=st.key;it!==null;){if(it.key===Ct)if(it.tag===4&&it.stateNode.containerInfo===st.containerInfo&&it.stateNode.implementation===st.implementation){a(lt,it.sibling),it=c(it,st.children||[]),it.return=lt,lt=it;break e}else{a(lt,it);break}else o(lt,it);it=it.sibling}it=Sg(st,lt.mode,yt),it.return=lt,lt=it}return h(lt);case Ha:return Ct=st._init,vt(lt,it,Ct(st._payload),yt)}if(eb(st))return ft(lt,it,st,yt);if(Ka(st))return pt(lt,it,st,yt);Mg(lt,st)}return typeof st=="string"&&st!==""||typeof st=="number"?(st=""+st,it!==null&&it.tag===6?(a(lt,it.sibling),it=c(it,st),it.return=lt,lt=it):(a(lt,it),it=Qg(st,lt.mode,yt),it.return=lt,lt=it),h(lt)):a(lt,it)}return vt}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(e){var o=Wg.current;E(Wg),e._currentValue=o}function bh(e,o,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&o)!==o?(e.childLanes|=o,s!==null&&(s.childLanes|=o)):s!==null&&(s.childLanes&o)!==o&&(s.childLanes|=o),e===a)break;e=e.return}}function ch(e,o){Xg=e,Zg=Yg=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&o&&(dh=!0),e.firstContext=null)}function eh(e){var o=e._currentValue;if(Zg!==e)if(e={context:e,memoizedValue:o,next:null},Yg===null){if(Xg===null)throw Error(p(308));Yg=e,Xg.dependencies={lanes:0,firstContext:e}}else Yg=Yg.next=e;return o}var fh=null;function gh(e){fh===null?fh=[e]:fh.push(e)}function hh(e,o,a,s){var c=o.interleaved;return c===null?(a.next=a,gh(o)):(a.next=c.next,c.next=a),o.interleaved=a,ih(e,s)}function ih(e,o){e.lanes|=o;var a=e.alternate;for(a!==null&&(a.lanes|=o),a=e,e=e.return;e!==null;)e.childLanes|=o,a=e.alternate,a!==null&&(a.childLanes|=o),a=e,e=e.return;return a.tag===3?a.stateNode:null}var jh=!1;function kh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(e,o){e=e.updateQueue,o.updateQueue===e&&(o.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mh(e,o){return{eventTime:e,lane:o,tag:0,payload:null,callback:null,next:null}}function nh(e,o,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,K&2){var c=s.pending;return c===null?o.next=o:(o.next=c.next,c.next=o),s.pending=o,ih(e,a)}return c=s.interleaved,c===null?(o.next=o,gh(s)):(o.next=c.next,c.next=o),s.interleaved=o,ih(e,a)}function oh(e,o,a){if(o=o.updateQueue,o!==null&&(o=o.shared,(a&4194240)!==0)){var s=o.lanes;s&=e.pendingLanes,a|=s,o.lanes=a,Cc(e,a)}}function ph(e,o){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var h={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};d===null?c=d=h:d=d.next=h,a=a.next}while(a!==null);d===null?c=d=o:d=d.next=o}else c=d=o;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=o:e.next=o,a.lastBaseUpdate=o}function qh(e,o,a,s){var c=e.updateQueue;jh=!1;var d=c.firstBaseUpdate,h=c.lastBaseUpdate,g=c.shared.pending;if(g!==null){c.shared.pending=null;var b=g,$=b.next;b.next=null,h===null?d=$:h.next=$,h=b;var tt=e.alternate;tt!==null&&(tt=tt.updateQueue,g=tt.lastBaseUpdate,g!==h&&(g===null?tt.firstBaseUpdate=$:g.next=$,tt.lastBaseUpdate=b))}if(d!==null){var et=c.baseState;h=0,tt=$=b=null,g=d;do{var rt=g.lane,ot=g.eventTime;if((s&rt)===rt){tt!==null&&(tt=tt.next={eventTime:ot,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var ft=e,pt=g;switch(rt=o,ot=a,pt.tag){case 1:if(ft=pt.payload,typeof ft=="function"){et=ft.call(ot,et,rt);break e}et=ft;break e;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=pt.payload,rt=typeof ft=="function"?ft.call(ot,et,rt):ft,rt==null)break e;et=A({},et,rt);break e;case 2:jh=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,rt=c.effects,rt===null?c.effects=[g]:rt.push(g))}else ot={eventTime:ot,lane:rt,tag:g.tag,payload:g.payload,callback:g.callback,next:null},tt===null?($=tt=ot,b=et):tt=tt.next=ot,h|=rt;if(g=g.next,g===null){if(g=c.shared.pending,g===null)break;rt=g,g=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);if(tt===null&&(b=et),c.baseState=b,c.firstBaseUpdate=$,c.lastBaseUpdate=tt,o=c.shared.interleaved,o!==null){c=o;do h|=c.lane,c=c.next;while(c!==o)}else d===null&&(c.shared.lanes=0);rh|=h,e.lanes=h,e.memoizedState=et}}function sh(e,o,a){if(e=o.effects,o.effects=null,e!==null)for(o=0;o<e.length;o++){var s=e[o],c=s.callback;if(c!==null){if(s.callback=null,s=a,typeof c!="function")throw Error(p(191,c));c.call(s)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(e){if(e===th)throw Error(p(174));return e}function yh(e,o){switch(G(wh,o),G(vh,e),G(uh,th),e=o.nodeType,e){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:lb(null,"");break;default:e=e===8?o.parentNode:o,o=e.namespaceURI||null,e=e.tagName,o=lb(o,e)}E(uh),G(uh,o)}function zh(){E(uh),E(vh),E(wh)}function Ah(e){xh(wh.current);var o=xh(uh.current),a=lb(o,e.type);o!==a&&(G(vh,e),G(uh,a))}function Bh(e){vh.current===e&&(E(uh),E(vh))}var L=Uf(0);function Ch(e){for(var o=e;o!==null;){if(o.tag===13){var a=o.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Dh=[];function Eh(){for(var e=0;e<Dh.length;e++)Dh[e]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321))}function Mh(e,o){if(o===null)return!1;for(var a=0;a<o.length&&a<e.length;a++)if(!He(e[a],o[a]))return!1;return!0}function Nh(e,o,a,s,c,d){if(Hh=d,M=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Fh.current=e===null||e.memoizedState===null?Oh:Ph,e=a(s,c),Jh){d=0;do{if(Jh=!1,Kh=0,25<=d)throw Error(p(301));d+=1,O=N=null,o.updateQueue=null,Fh.current=Qh,e=a(s,c)}while(Jh)}if(Fh.current=Rh,o=N!==null&&N.next!==null,Hh=0,O=N=M=null,Ih=!1,o)throw Error(p(300));return e}function Sh(){var e=Kh!==0;return Kh=0,e}function Th(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return O===null?M.memoizedState=O=e:O=O.next=e,O}function Uh(){if(N===null){var e=M.alternate;e=e!==null?e.memoizedState:null}else e=N.next;var o=O===null?M.memoizedState:O.next;if(o!==null)O=o,N=e;else{if(e===null)throw Error(p(310));N=e,e={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},O===null?M.memoizedState=O=e:O=O.next=e}return O}function Vh(e,o){return typeof o=="function"?o(e):o}function Wh(e){var o=Uh(),a=o.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var s=N,c=s.baseQueue,d=a.pending;if(d!==null){if(c!==null){var h=c.next;c.next=d.next,d.next=h}s.baseQueue=c=d,a.pending=null}if(c!==null){d=c.next,s=s.baseState;var g=h=null,b=null,$=d;do{var tt=$.lane;if((Hh&tt)===tt)b!==null&&(b=b.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),s=$.hasEagerState?$.eagerState:e(s,$.action);else{var et={lane:tt,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};b===null?(g=b=et,h=s):b=b.next=et,M.lanes|=tt,rh|=tt}$=$.next}while($!==null&&$!==d);b===null?h=s:b.next=g,He(s,o.memoizedState)||(dh=!0),o.memoizedState=s,o.baseState=h,o.baseQueue=b,a.lastRenderedState=s}if(e=a.interleaved,e!==null){c=e;do d=c.lane,M.lanes|=d,rh|=d,c=c.next;while(c!==e)}else c===null&&(a.lanes=0);return[o.memoizedState,a.dispatch]}function Xh(e){var o=Uh(),a=o.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,d=o.memoizedState;if(c!==null){a.pending=null;var h=c=c.next;do d=e(d,h.action),h=h.next;while(h!==c);He(d,o.memoizedState)||(dh=!0),o.memoizedState=d,o.baseQueue===null&&(o.baseState=d),a.lastRenderedState=d}return[d,s]}function Yh(){}function Zh(e,o){var a=M,s=Uh(),c=o(),d=!He(s.memoizedState,c);if(d&&(s.memoizedState=c,dh=!0),s=s.queue,$h(ai.bind(null,a,s,e),[e]),s.getSnapshot!==o||d||O!==null&&O.memoizedState.tag&1){if(a.flags|=2048,bi(9,ci.bind(null,a,s,c,o),void 0,null),Q===null)throw Error(p(349));Hh&30||di(a,o,c)}return c}function di(e,o,a){e.flags|=16384,e={getSnapshot:o,value:a},o=M.updateQueue,o===null?(o={lastEffect:null,stores:null},M.updateQueue=o,o.stores=[e]):(a=o.stores,a===null?o.stores=[e]:a.push(e))}function ci(e,o,a,s){o.value=a,o.getSnapshot=s,ei(o)&&fi(e)}function ai(e,o,a){return a(function(){ei(o)&&fi(e)})}function ei(e){var o=e.getSnapshot;e=e.value;try{var a=o();return!He(e,a)}catch{return!0}}function fi(e){var o=ih(e,1);o!==null&&gi(o,e,1,-1)}function hi(e){var o=Th();return typeof e=="function"&&(e=e()),o.memoizedState=o.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:e},o.queue=e,e=e.dispatch=ii.bind(null,M,e),[o.memoizedState,e]}function bi(e,o,a,s){return e={tag:e,create:o,destroy:a,deps:s,next:null},o=M.updateQueue,o===null?(o={lastEffect:null,stores:null},M.updateQueue=o,o.lastEffect=e.next=e):(a=o.lastEffect,a===null?o.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,o.lastEffect=e)),e}function ji(){return Uh().memoizedState}function ki(e,o,a,s){var c=Th();M.flags|=e,c.memoizedState=bi(1|o,a,void 0,s===void 0?null:s)}function li(e,o,a,s){var c=Uh();s=s===void 0?null:s;var d=void 0;if(N!==null){var h=N.memoizedState;if(d=h.destroy,s!==null&&Mh(s,h.deps)){c.memoizedState=bi(o,a,d,s);return}}M.flags|=e,c.memoizedState=bi(1|o,a,d,s)}function mi(e,o){return ki(8390656,8,e,o)}function $h(e,o){return li(2048,8,e,o)}function ni(e,o){return li(4,2,e,o)}function oi(e,o){return li(4,4,e,o)}function pi(e,o){if(typeof o=="function")return e=e(),o(e),function(){o(null)};if(o!=null)return e=e(),o.current=e,function(){o.current=null}}function qi(e,o,a){return a=a!=null?a.concat([e]):null,li(4,4,pi.bind(null,o,e),a)}function ri(){}function si(e,o){var a=Uh();o=o===void 0?null:o;var s=a.memoizedState;return s!==null&&o!==null&&Mh(o,s[1])?s[0]:(a.memoizedState=[e,o],e)}function ti(e,o){var a=Uh();o=o===void 0?null:o;var s=a.memoizedState;return s!==null&&o!==null&&Mh(o,s[1])?s[0]:(e=e(),a.memoizedState=[e,o],e)}function ui(e,o,a){return Hh&21?(He(a,o)||(a=yc(),M.lanes|=a,rh|=a,e.baseState=!0),o):(e.baseState&&(e.baseState=!1,dh=!0),e.memoizedState=a)}function vi(e,o){var a=C;C=a!==0&&4>a?a:4,e(!0);var s=Gh.transition;Gh.transition={};try{e(!1),o()}finally{C=a,Gh.transition=s}}function wi(){return Uh().memoizedState}function xi(e,o,a){var s=yi(e);if(a={lane:s,action:a,hasEagerState:!1,eagerState:null,next:null},zi(e))Ai(o,a);else if(a=hh(e,o,a,s),a!==null){var c=R();gi(a,e,s,c),Bi(a,o,s)}}function ii(e,o,a){var s=yi(e),c={lane:s,action:a,hasEagerState:!1,eagerState:null,next:null};if(zi(e))Ai(o,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=o.lastRenderedReducer,d!==null))try{var h=o.lastRenderedState,g=d(h,a);if(c.hasEagerState=!0,c.eagerState=g,He(g,h)){var b=o.interleaved;b===null?(c.next=c,gh(o)):(c.next=b.next,b.next=c),o.interleaved=c;return}}catch{}finally{}a=hh(e,o,c,s),a!==null&&(c=R(),gi(a,e,s,c),Bi(a,o,s))}}function zi(e){var o=e.alternate;return e===M||o!==null&&o===M}function Ai(e,o){Jh=Ih=!0;var a=e.pending;a===null?o.next=o:(o.next=a.next,a.next=o),e.pending=o}function Bi(e,o,a){if(a&4194240){var s=o.lanes;s&=e.pendingLanes,a|=s,o.lanes=a,Cc(e,a)}}var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(e,o){return Th().memoizedState=[e,o===void 0?null:o],e},useContext:eh,useEffect:mi,useImperativeHandle:function(e,o,a){return a=a!=null?a.concat([e]):null,ki(4194308,4,pi.bind(null,o,e),a)},useLayoutEffect:function(e,o){return ki(4194308,4,e,o)},useInsertionEffect:function(e,o){return ki(4,2,e,o)},useMemo:function(e,o){var a=Th();return o=o===void 0?null:o,e=e(),a.memoizedState=[e,o],e},useReducer:function(e,o,a){var s=Th();return o=a!==void 0?a(o):o,s.memoizedState=s.baseState=o,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=xi.bind(null,M,e),[s.memoizedState,e]},useRef:function(e){var o=Th();return e={current:e},o.memoizedState=e},useState:hi,useDebugValue:ri,useDeferredValue:function(e){return Th().memoizedState=e},useTransition:function(){var e=hi(!1),o=e[0];return e=vi.bind(null,e[1]),Th().memoizedState=e,[o,e]},useMutableSource:function(){},useSyncExternalStore:function(e,o,a){var s=M,c=Th();if(I){if(a===void 0)throw Error(p(407));a=a()}else{if(a=o(),Q===null)throw Error(p(349));Hh&30||di(s,o,a)}c.memoizedState=a;var d={value:a,getSnapshot:o};return c.queue=d,mi(ai.bind(null,s,d,e),[e]),s.flags|=2048,bi(9,ci.bind(null,s,d,a,o),void 0,null),a},useId:function(){var e=Th(),o=Q.identifierPrefix;if(I){var a=sg,s=rg;a=(s&~(1<<32-oc(s)-1)).toString(32)+a,o=":"+o+"R"+a,a=Kh++,0<a&&(o+="H"+a.toString(32)),o+=":"}else a=Lh++,o=":"+o+"r"+a.toString(32)+":";return e.memoizedState=o},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},useDebugValue:ri,useDeferredValue:function(e){var o=Uh();return ui(o,N.memoizedState,e)},useTransition:function(){var e=Wh(Vh)[0],o=Uh().memoizedState;return[e,o]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(e){var o=Uh();return N===null?o.memoizedState=e:ui(o,N.memoizedState,e)},useTransition:function(){var e=Xh(Vh)[0],o=Uh().memoizedState;return[e,o]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(e,o){if(e&&e.defaultProps){o=A({},o),e=e.defaultProps;for(var a in e)o[a]===void 0&&(o[a]=e[a]);return o}return o}function Di(e,o,a,s){o=e.memoizedState,a=a(s,o),a=a==null?o:A({},o,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Vb(e)===e:!1},enqueueSetState:function(e,o,a){e=e._reactInternals;var s=R(),c=yi(e),d=mh(s,c);d.payload=o,a!=null&&(d.callback=a),o=nh(e,d,c),o!==null&&(gi(o,e,c,s),oh(o,e,c))},enqueueReplaceState:function(e,o,a){e=e._reactInternals;var s=R(),c=yi(e),d=mh(s,c);d.tag=1,d.payload=o,a!=null&&(d.callback=a),o=nh(e,d,c),o!==null&&(gi(o,e,c,s),oh(o,e,c))},enqueueForceUpdate:function(e,o){e=e._reactInternals;var a=R(),s=yi(e),c=mh(a,s);c.tag=2,o!=null&&(c.callback=o),o=nh(e,c,s),o!==null&&(gi(o,e,s,a),oh(o,e,s))}};function Fi(e,o,a,s,c,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,h):o.prototype&&o.prototype.isPureReactComponent?!Ie(a,s)||!Ie(c,d):!0}function Gi(e,o,a){var s=!1,c=Vf,d=o.contextType;return typeof d=="object"&&d!==null?d=eh(d):(c=Zf(o)?Xf:H.current,s=o.contextTypes,d=(s=s!=null)?Yf(e,c):Vf),o=new o(a,d),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ei,e.stateNode=o,o._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=d),o}function Hi(e,o,a,s){e=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(a,s),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(a,s),o.state!==e&&Ei.enqueueReplaceState(o,o.state,null)}function Ii(e,o,a,s){var c=e.stateNode;c.props=a,c.state=e.memoizedState,c.refs={},kh(e);var d=o.contextType;typeof d=="object"&&d!==null?c.context=eh(d):(d=Zf(o)?Xf:H.current,c.context=Yf(e,d)),c.state=e.memoizedState,d=o.getDerivedStateFromProps,typeof d=="function"&&(Di(e,o,d,a),c.state=e.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(o=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),o!==c.state&&Ei.enqueueReplaceState(c,c.state,null),qh(e,a,c,s),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Ji(e,o){try{var a="",s=o;do a+=Pa(s),s=s.return;while(s);var c=a}catch(d){c=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:o,stack:c,digest:null}}function Ki(e,o,a){return{value:e,source:null,stack:a??null,digest:o??null}}function Li(e,o){try{console.error(o.value)}catch(a){setTimeout(function(){throw a})}}var Mi=typeof WeakMap=="function"?WeakMap:Map;function Ni(e,o,a){a=mh(-1,a),a.tag=3,a.payload={element:null};var s=o.value;return a.callback=function(){Oi||(Oi=!0,Pi=s),Li(e,o)},a}function Qi(e,o,a){a=mh(-1,a),a.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var c=o.value;a.payload=function(){return s(c)},a.callback=function(){Li(e,o)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(a.callback=function(){Li(e,o),typeof s!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var h=o.stack;this.componentDidCatch(o.value,{componentStack:h!==null?h:""})}),a}function Si(e,o,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Mi;var c=new Set;s.set(o,c)}else c=s.get(o),c===void 0&&(c=new Set,s.set(o,c));c.has(a)||(c.add(a),e=Ti.bind(null,e,o,a),o.then(e,e))}function Ui(e){do{var o;if((o=e.tag===13)&&(o=e.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return e;e=e.return}while(e!==null);return null}function Vi(e,o,a,s,c){return e.mode&1?(e.flags|=65536,e.lanes=c,e):(e===o?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(o=mh(-1,1),o.tag=2,nh(a,o,1))),a.lanes|=1),e)}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(e,o,a,s){o.child=e===null?Vg(o,null,a,s):Ug(o,e.child,a,s)}function Yi(e,o,a,s,c){a=a.render;var d=o.ref;return ch(o,c),s=Nh(e,o,a,s,d,c),a=Sh(),e!==null&&!dh?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~c,Zi(e,o,c)):(I&&a&&vg(o),o.flags|=1,Xi(e,o,s,c),o.child)}function $i(e,o,a,s,c){if(e===null){var d=a.type;return typeof d=="function"&&!aj(d)&&d.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(o.tag=15,o.type=d,bj(e,o,d,s,c)):(e=Rg(a.type,null,s,o,o.mode,c),e.ref=o.ref,e.return=o,o.child=e)}if(d=e.child,!(e.lanes&c)){var h=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ie,a(h,s)&&e.ref===o.ref)return Zi(e,o,c)}return o.flags|=1,e=Pg(d,s),e.ref=o.ref,e.return=o,o.child=e}function bj(e,o,a,s,c){if(e!==null){var d=e.memoizedProps;if(Ie(d,s)&&e.ref===o.ref)if(dh=!1,o.pendingProps=s=d,(e.lanes&c)!==0)e.flags&131072&&(dh=!0);else return o.lanes=e.lanes,Zi(e,o,c)}return cj(e,o,a,s,c)}function dj(e,o,a){var s=o.pendingProps,c=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=a;else{if(!(a&1073741824))return e=d!==null?d.baseLanes|a:a,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:e,cachePool:null,transitions:null},o.updateQueue=null,G(ej,fj),fj|=e,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:a,G(ej,fj),fj|=s}else d!==null?(s=d.baseLanes|a,o.memoizedState=null):s=a,G(ej,fj),fj|=s;return Xi(e,o,c,a),o.child}function gj(e,o){var a=o.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(o.flags|=512,o.flags|=2097152)}function cj(e,o,a,s,c){var d=Zf(a)?Xf:H.current;return d=Yf(o,d),ch(o,c),a=Nh(e,o,a,s,d,c),s=Sh(),e!==null&&!dh?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~c,Zi(e,o,c)):(I&&s&&vg(o),o.flags|=1,Xi(e,o,a,c),o.child)}function hj(e,o,a,s,c){if(Zf(a)){var d=!0;cg(o)}else d=!1;if(ch(o,c),o.stateNode===null)ij(e,o),Gi(o,a,s),Ii(o,a,s,c),s=!0;else if(e===null){var h=o.stateNode,g=o.memoizedProps;h.props=g;var b=h.context,$=a.contextType;typeof $=="object"&&$!==null?$=eh($):($=Zf(a)?Xf:H.current,$=Yf(o,$));var tt=a.getDerivedStateFromProps,et=typeof tt=="function"||typeof h.getSnapshotBeforeUpdate=="function";et||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(g!==s||b!==$)&&Hi(o,h,s,$),jh=!1;var rt=o.memoizedState;h.state=rt,qh(o,s,h,c),b=o.memoizedState,g!==s||rt!==b||Wf.current||jh?(typeof tt=="function"&&(Di(o,a,tt,s),b=o.memoizedState),(g=jh||Fi(o,a,g,s,rt,b,$))?(et||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(o.flags|=4194308)):(typeof h.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=s,o.memoizedState=b),h.props=s,h.state=b,h.context=$,s=g):(typeof h.componentDidMount=="function"&&(o.flags|=4194308),s=!1)}else{h=o.stateNode,lh(e,o),g=o.memoizedProps,$=o.type===o.elementType?g:Ci(o.type,g),h.props=$,et=o.pendingProps,rt=h.context,b=a.contextType,typeof b=="object"&&b!==null?b=eh(b):(b=Zf(a)?Xf:H.current,b=Yf(o,b));var ot=a.getDerivedStateFromProps;(tt=typeof ot=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(g!==et||rt!==b)&&Hi(o,h,s,b),jh=!1,rt=o.memoizedState,h.state=rt,qh(o,s,h,c);var ft=o.memoizedState;g!==et||rt!==ft||Wf.current||jh?(typeof ot=="function"&&(Di(o,a,ot,s),ft=o.memoizedState),($=jh||Fi(o,a,$,s,rt,ft,b)||!1)?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ft,b),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ft,b)),typeof h.componentDidUpdate=="function"&&(o.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof h.componentDidUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(o.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(o.flags|=1024),o.memoizedProps=s,o.memoizedState=ft),h.props=s,h.state=ft,h.context=b,s=$):(typeof h.componentDidUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(o.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(o.flags|=1024),s=!1)}return jj(e,o,a,s,d,c)}function jj(e,o,a,s,c,d){gj(e,o);var h=(o.flags&128)!==0;if(!s&&!h)return c&&dg(o,a,!1),Zi(e,o,d);s=o.stateNode,Wi.current=o;var g=h&&typeof a.getDerivedStateFromError!="function"?null:s.render();return o.flags|=1,e!==null&&h?(o.child=Ug(o,e.child,null,d),o.child=Ug(o,null,g,d)):Xi(e,o,g,d),o.memoizedState=s.state,c&&dg(o,a,!0),o.child}function kj(e){var o=e.stateNode;o.pendingContext?ag(e,o.pendingContext,o.pendingContext!==o.context):o.context&&ag(e,o.context,!1),yh(e,o.containerInfo)}function lj(e,o,a,s,c){return Ig(),Jg(c),o.flags|=256,Xi(e,o,a,s),o.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(e){return{baseLanes:e,cachePool:null,transitions:null}}function oj(e,o,a){var s=o.pendingProps,c=L.current,d=!1,h=(o.flags&128)!==0,g;if((g=h)||(g=e!==null&&e.memoizedState===null?!1:(c&2)!==0),g?(d=!0,o.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),G(L,c&1),e===null)return Eg(o),e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(o.mode&1?e.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(h=s.children,e=s.fallback,d?(s=o.mode,d=o.child,h={mode:"hidden",children:h},!(s&1)&&d!==null?(d.childLanes=0,d.pendingProps=h):d=pj(h,s,0,null),e=Tg(e,s,a,null),d.return=o,e.return=o,d.sibling=e,o.child=d,o.child.memoizedState=nj(a),o.memoizedState=mj,e):qj(o,h));if(c=e.memoizedState,c!==null&&(g=c.dehydrated,g!==null))return rj(e,o,h,s,g,c,a);if(d){d=s.fallback,h=o.mode,c=e.child,g=c.sibling;var b={mode:"hidden",children:s.children};return!(h&1)&&o.child!==c?(s=o.child,s.childLanes=0,s.pendingProps=b,o.deletions=null):(s=Pg(c,b),s.subtreeFlags=c.subtreeFlags&14680064),g!==null?d=Pg(g,d):(d=Tg(d,h,a,null),d.flags|=2),d.return=o,s.return=o,s.sibling=d,o.child=s,s=d,d=o.child,h=e.child.memoizedState,h=h===null?nj(a):{baseLanes:h.baseLanes|a,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~a,o.memoizedState=mj,s}return d=e.child,e=d.sibling,s=Pg(d,{mode:"visible",children:s.children}),!(o.mode&1)&&(s.lanes=a),s.return=o,s.sibling=null,e!==null&&(a=o.deletions,a===null?(o.deletions=[e],o.flags|=16):a.push(e)),o.child=s,o.memoizedState=null,s}function qj(e,o){return o=pj({mode:"visible",children:o},e.mode,0,null),o.return=e,e.child=o}function sj(e,o,a,s){return s!==null&&Jg(s),Ug(o,e.child,null,a),e=qj(o,o.pendingProps.children),e.flags|=2,o.memoizedState=null,e}function rj(e,o,a,s,c,d,h){if(a)return o.flags&256?(o.flags&=-257,s=Ki(Error(p(422))),sj(e,o,h,s)):o.memoizedState!==null?(o.child=e.child,o.flags|=128,null):(d=s.fallback,c=o.mode,s=pj({mode:"visible",children:s.children},c,0,null),d=Tg(d,c,h,null),d.flags|=2,s.return=o,d.return=o,s.sibling=d,o.child=s,o.mode&1&&Ug(o,e.child,null,h),o.child.memoizedState=nj(h),o.memoizedState=mj,d);if(!(o.mode&1))return sj(e,o,h,null);if(c.data==="$!"){if(s=c.nextSibling&&c.nextSibling.dataset,s)var g=s.dgst;return s=g,d=Error(p(419)),s=Ki(d,s,void 0),sj(e,o,h,s)}if(g=(h&e.childLanes)!==0,dh||g){if(s=Q,s!==null){switch(h&-h){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(s.suspendedLanes|h)?0:c,c!==0&&c!==d.retryLane&&(d.retryLane=c,ih(e,c),gi(s,e,c,-1))}return tj(),s=Ki(Error(p(421))),sj(e,o,h,s)}return c.data==="$?"?(o.flags|=128,o.child=e.child,o=uj.bind(null,e),c._reactRetry=o,null):(e=d.treeContext,yg=Lf(c.nextSibling),xg=o,I=!0,zg=null,e!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=e.id,sg=e.overflow,qg=o),o=qj(o,s.children),o.flags|=4096,o)}function vj(e,o,a){e.lanes|=o;var s=e.alternate;s!==null&&(s.lanes|=o),bh(e.return,o,a)}function wj(e,o,a,s,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(d.isBackwards=o,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=a,d.tailMode=c)}function xj(e,o,a){var s=o.pendingProps,c=s.revealOrder,d=s.tail;if(Xi(e,o,s.children,a),s=L.current,s&2)s=s&1|2,o.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=o.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vj(e,a,o);else if(e.tag===19)vj(e,a,o);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===o)break e;for(;e.sibling===null;){if(e.return===null||e.return===o)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(G(L,s),!(o.mode&1))o.memoizedState=null;else switch(c){case"forwards":for(a=o.child,c=null;a!==null;)e=a.alternate,e!==null&&Ch(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=o.child,o.child=null):(c=a.sibling,a.sibling=null),wj(o,!1,c,a,d);break;case"backwards":for(a=null,c=o.child,o.child=null;c!==null;){if(e=c.alternate,e!==null&&Ch(e)===null){o.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}wj(o,!0,a,null,d);break;case"together":wj(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ij(e,o){!(o.mode&1)&&e!==null&&(e.alternate=null,o.alternate=null,o.flags|=2)}function Zi(e,o,a){if(e!==null&&(o.dependencies=e.dependencies),rh|=o.lanes,!(a&o.childLanes))return null;if(e!==null&&o.child!==e.child)throw Error(p(153));if(o.child!==null){for(e=o.child,a=Pg(e,e.pendingProps),o.child=a,a.return=o;e.sibling!==null;)e=e.sibling,a=a.sibling=Pg(e,e.pendingProps),a.return=o;a.sibling=null}return o.child}function yj(e,o,a){switch(o.tag){case 3:kj(o),Ig();break;case 5:Ah(o);break;case 1:Zf(o.type)&&cg(o);break;case 4:yh(o,o.stateNode.containerInfo);break;case 10:var s=o.type._context,c=o.memoizedProps.value;G(Wg,s._currentValue),s._currentValue=c;break;case 13:if(s=o.memoizedState,s!==null)return s.dehydrated!==null?(G(L,L.current&1),o.flags|=128,null):a&o.child.childLanes?oj(e,o,a):(G(L,L.current&1),e=Zi(e,o,a),e!==null?e.sibling:null);G(L,L.current&1);break;case 19:if(s=(a&o.childLanes)!==0,e.flags&128){if(s)return xj(e,o,a);o.flags|=128}if(c=o.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),G(L,L.current),s)break;return null;case 22:case 23:return o.lanes=0,dj(e,o,a)}return Zi(e,o,a)}var zj,Aj,Bj,Cj;zj=function(e,o){for(var a=o.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Aj=function(){};Bj=function(e,o,a,s){var c=e.memoizedProps;if(c!==s){e=o.stateNode,xh(uh.current);var d=null;switch(a){case"input":c=Ya(e,c),s=Ya(e,s),d=[];break;case"select":c=A({},c,{value:void 0}),s=A({},s,{value:void 0}),d=[];break;case"textarea":c=gb(e,c),s=gb(e,s),d=[];break;default:typeof c.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Bf)}ub(a,s);var h;a=null;for($ in c)if(!s.hasOwnProperty($)&&c.hasOwnProperty($)&&c[$]!=null)if($==="style"){var g=c[$];for(h in g)g.hasOwnProperty(h)&&(a||(a={}),a[h]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(ea.hasOwnProperty($)?d||(d=[]):(d=d||[]).push($,null));for($ in s){var b=s[$];if(g=c!=null?c[$]:void 0,s.hasOwnProperty($)&&b!==g&&(b!=null||g!=null))if($==="style")if(g){for(h in g)!g.hasOwnProperty(h)||b&&b.hasOwnProperty(h)||(a||(a={}),a[h]="");for(h in b)b.hasOwnProperty(h)&&g[h]!==b[h]&&(a||(a={}),a[h]=b[h])}else a||(d||(d=[]),d.push($,a)),a=b;else $==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,g=g?g.__html:void 0,b!=null&&g!==b&&(d=d||[]).push($,b)):$==="children"?typeof b!="string"&&typeof b!="number"||(d=d||[]).push($,""+b):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(ea.hasOwnProperty($)?(b!=null&&$==="onScroll"&&D("scroll",e),d||g===b||(d=[])):(d=d||[]).push($,b))}a&&(d=d||[]).push("style",a);var $=d;(o.updateQueue=$)&&(o.flags|=4)}};Cj=function(e,o,a,s){a!==s&&(o.flags|=4)};function Dj(e,o){if(!I)switch(e.tailMode){case"hidden":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?o||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function S(e){var o=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(o)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&14680064,s|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,o}function Ej(e,o,a){var s=o.pendingProps;switch(wg(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(o),null;case 1:return Zf(o.type)&&$f(),S(o),null;case 3:return s=o.stateNode,zh(),E(Wf),E(H),Eh(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Gg(o)?o.flags|=4:e===null||e.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,zg!==null&&(Fj(zg),zg=null))),Aj(e,o),S(o),null;case 5:Bh(o);var c=xh(wh.current);if(a=o.type,e!==null&&o.stateNode!=null)Bj(e,o,a,s,c),e.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!s){if(o.stateNode===null)throw Error(p(166));return S(o),null}if(e=xh(uh.current),Gg(o)){s=o.stateNode,a=o.type;var d=o.memoizedProps;switch(s[Of]=o,s[Pf]=d,e=(o.mode&1)!==0,a){case"dialog":D("cancel",s),D("close",s);break;case"iframe":case"object":case"embed":D("load",s);break;case"video":case"audio":for(c=0;c<lf.length;c++)D(lf[c],s);break;case"source":D("error",s);break;case"img":case"image":case"link":D("error",s),D("load",s);break;case"details":D("toggle",s);break;case"input":Za(s,d),D("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},D("invalid",s);break;case"textarea":hb(s,d),D("invalid",s)}ub(a,d),c=null;for(var h in d)if(d.hasOwnProperty(h)){var g=d[h];h==="children"?typeof g=="string"?s.textContent!==g&&(d.suppressHydrationWarning!==!0&&Af(s.textContent,g,e),c=["children",g]):typeof g=="number"&&s.textContent!==""+g&&(d.suppressHydrationWarning!==!0&&Af(s.textContent,g,e),c=["children",""+g]):ea.hasOwnProperty(h)&&g!=null&&h==="onScroll"&&D("scroll",s)}switch(a){case"input":Va(s),db(s,d,!0);break;case"textarea":Va(s),jb(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=Bf)}s=c,o.updateQueue=s,s!==null&&(o.flags|=4)}else{h=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kb(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=h.createElement(a,{is:s.is}):(e=h.createElement(a),a==="select"&&(h=e,s.multiple?h.multiple=!0:s.size&&(h.size=s.size))):e=h.createElementNS(e,a),e[Of]=o,e[Pf]=s,zj(e,o,!1,!1),o.stateNode=e;e:{switch(h=vb(a,s),a){case"dialog":D("cancel",e),D("close",e),c=s;break;case"iframe":case"object":case"embed":D("load",e),c=s;break;case"video":case"audio":for(c=0;c<lf.length;c++)D(lf[c],e);c=s;break;case"source":D("error",e),c=s;break;case"img":case"image":case"link":D("error",e),D("load",e),c=s;break;case"details":D("toggle",e),c=s;break;case"input":Za(e,s),c=Ya(e,s),D("invalid",e);break;case"option":c=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},c=A({},s,{value:void 0}),D("invalid",e);break;case"textarea":hb(e,s),c=gb(e,s),D("invalid",e);break;default:c=s}ub(a,c),g=c;for(d in g)if(g.hasOwnProperty(d)){var b=g[d];d==="style"?sb(e,b):d==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&nb(e,b)):d==="children"?typeof b=="string"?(a!=="textarea"||b!=="")&&ob(e,b):typeof b=="number"&&ob(e,""+b):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ea.hasOwnProperty(d)?b!=null&&d==="onScroll"&&D("scroll",e):b!=null&&ta(e,d,b,h))}switch(a){case"input":Va(e),db(e,s,!1);break;case"textarea":Va(e),jb(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Sa(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?fb(e,!!s.multiple,d,!1):s.defaultValue!=null&&fb(e,!!s.multiple,s.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Bf)}switch(a){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return S(o),null;case 6:if(e&&o.stateNode!=null)Cj(e,o,e.memoizedProps,s);else{if(typeof s!="string"&&o.stateNode===null)throw Error(p(166));if(a=xh(wh.current),xh(uh.current),Gg(o)){if(s=o.stateNode,a=o.memoizedProps,s[Of]=o,(d=s.nodeValue!==a)&&(e=xg,e!==null))switch(e.tag){case 3:Af(s.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Af(s.nodeValue,a,(e.mode&1)!==0)}d&&(o.flags|=4)}else s=(a.nodeType===9?a:a.ownerDocument).createTextNode(s),s[Of]=o,o.stateNode=s}return S(o),null;case 13:if(E(L),s=o.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&yg!==null&&o.mode&1&&!(o.flags&128))Hg(),Ig(),o.flags|=98560,d=!1;else if(d=Gg(o),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(p(318));if(d=o.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(p(317));d[Of]=o}else Ig(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;S(o),d=!1}else zg!==null&&(Fj(zg),zg=null),d=!0;if(!d)return o.flags&65536?o:null}return o.flags&128?(o.lanes=a,o):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(o.child.flags|=8192,o.mode&1&&(e===null||L.current&1?T===0&&(T=3):tj())),o.updateQueue!==null&&(o.flags|=4),S(o),null);case 4:return zh(),Aj(e,o),e===null&&sf(o.stateNode.containerInfo),S(o),null;case 10:return ah(o.type._context),S(o),null;case 17:return Zf(o.type)&&$f(),S(o),null;case 19:if(E(L),d=o.memoizedState,d===null)return S(o),null;if(s=(o.flags&128)!==0,h=d.rendering,h===null)if(s)Dj(d,!1);else{if(T!==0||e!==null&&e.flags&128)for(e=o.child;e!==null;){if(h=Ch(e),h!==null){for(o.flags|=128,Dj(d,!1),s=h.updateQueue,s!==null&&(o.updateQueue=s,o.flags|=4),o.subtreeFlags=0,s=a,a=o.child;a!==null;)d=a,e=s,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return G(L,L.current&1|2),o.child}e=e.sibling}d.tail!==null&&B()>Gj&&(o.flags|=128,s=!0,Dj(d,!1),o.lanes=4194304)}else{if(!s)if(e=Ch(h),e!==null){if(o.flags|=128,s=!0,a=e.updateQueue,a!==null&&(o.updateQueue=a,o.flags|=4),Dj(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!I)return S(o),null}else 2*B()-d.renderingStartTime>Gj&&a!==1073741824&&(o.flags|=128,s=!0,Dj(d,!1),o.lanes=4194304);d.isBackwards?(h.sibling=o.child,o.child=h):(a=d.last,a!==null?a.sibling=h:o.child=h,d.last=h)}return d.tail!==null?(o=d.tail,d.rendering=o,d.tail=o.sibling,d.renderingStartTime=B(),o.sibling=null,a=L.current,G(L,s?a&1|2:a&1),o):(S(o),null);case 22:case 23:return Hj(),s=o.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(o.flags|=8192),s&&o.mode&1?fj&1073741824&&(S(o),o.subtreeFlags&6&&(o.flags|=8192)):S(o),null;case 24:return null;case 25:return null}throw Error(p(156,o.tag))}function Ij(e,o){switch(wg(o),o.tag){case 1:return Zf(o.type)&&$f(),e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 3:return zh(),E(Wf),E(H),Eh(),e=o.flags,e&65536&&!(e&128)?(o.flags=e&-65537|128,o):null;case 5:return Bh(o),null;case 13:if(E(L),e=o.memoizedState,e!==null&&e.dehydrated!==null){if(o.alternate===null)throw Error(p(340));Ig()}return e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(o.type._context),null;case 22:case 23:return Hj(),null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj=typeof WeakSet=="function"?WeakSet:Set,V=null;function Lj(e,o){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(s){W(e,o,s)}else a.current=null}function Mj(e,o,a){try{a()}catch(s){W(e,o,s)}}var Nj=!1;function Oj(e,o){if(Cf=dd,e=Me(),Ne(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var h=0,g=-1,b=-1,$=0,tt=0,et=e,rt=null;t:for(;;){for(var ot;et!==a||c!==0&&et.nodeType!==3||(g=h+c),et!==d||s!==0&&et.nodeType!==3||(b=h+s),et.nodeType===3&&(h+=et.nodeValue.length),(ot=et.firstChild)!==null;)rt=et,et=ot;for(;;){if(et===e)break t;if(rt===a&&++$===c&&(g=h),rt===d&&++tt===s&&(b=h),(ot=et.nextSibling)!==null)break;et=rt,rt=et.parentNode}et=ot}a=g===-1||b===-1?null:{start:g,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:e,selectionRange:a},dd=!1,V=o;V!==null;)if(o=V,e=o.child,(o.subtreeFlags&1028)!==0&&e!==null)e.return=o,V=e;else for(;V!==null;){o=V;try{var ft=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ft!==null){var pt=ft.memoizedProps,vt=ft.memoizedState,lt=o.stateNode,it=lt.getSnapshotBeforeUpdate(o.elementType===o.type?pt:Ci(o.type,pt),vt);lt.__reactInternalSnapshotBeforeUpdate=it}break;case 3:var st=o.stateNode.containerInfo;st.nodeType===1?st.textContent="":st.nodeType===9&&st.documentElement&&st.removeChild(st.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(yt){W(o,o.return,yt)}if(e=o.sibling,e!==null){e.return=o.return,V=e;break}V=o.return}return ft=Nj,Nj=!1,ft}function Pj(e,o,a){var s=o.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&e)===e){var d=c.destroy;c.destroy=void 0,d!==void 0&&Mj(o,a,d)}c=c.next}while(c!==s)}}function Qj(e,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.create;a.destroy=s()}a=a.next}while(a!==o)}}function Rj(e){var o=e.ref;if(o!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof o=="function"?o(e):o.current=e}}function Sj(e){var o=e.alternate;o!==null&&(e.alternate=null,Sj(o)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(o=e.stateNode,o!==null&&(delete o[Of],delete o[Pf],delete o[of],delete o[Qf],delete o[Rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tj(e){return e.tag===5||e.tag===3||e.tag===4}function Uj(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tj(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vj(e,o,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,o?a.nodeType===8?a.parentNode.insertBefore(e,o):a.insertBefore(e,o):(a.nodeType===8?(o=a.parentNode,o.insertBefore(e,a)):(o=a,o.appendChild(e)),a=a._reactRootContainer,a!=null||o.onclick!==null||(o.onclick=Bf));else if(s!==4&&(e=e.child,e!==null))for(Vj(e,o,a),e=e.sibling;e!==null;)Vj(e,o,a),e=e.sibling}function Wj(e,o,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,o?a.insertBefore(e,o):a.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Wj(e,o,a),e=e.sibling;e!==null;)Wj(e,o,a),e=e.sibling}var X=null,Xj=!1;function Yj(e,o,a){for(a=a.child;a!==null;)Zj(e,o,a),a=a.sibling}function Zj(e,o,a){if(lc&&typeof lc.onCommitFiberUnmount=="function")try{lc.onCommitFiberUnmount(kc,a)}catch{}switch(a.tag){case 5:U||Lj(a,o);case 6:var s=X,c=Xj;X=null,Yj(e,o,a),X=s,Xj=c,X!==null&&(Xj?(e=X,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):X.removeChild(a.stateNode));break;case 18:X!==null&&(Xj?(e=X,a=a.stateNode,e.nodeType===8?Kf(e.parentNode,a):e.nodeType===1&&Kf(e,a),bd(e)):Kf(X,a.stateNode));break;case 4:s=X,c=Xj,X=a.stateNode.containerInfo,Xj=!0,Yj(e,o,a),X=s,Xj=c;break;case 0:case 11:case 14:case 15:if(!U&&(s=a.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){c=s=s.next;do{var d=c,h=d.destroy;d=d.tag,h!==void 0&&(d&2||d&4)&&Mj(a,o,h),c=c.next}while(c!==s)}Yj(e,o,a);break;case 1:if(!U&&(Lj(a,o),s=a.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=a.memoizedProps,s.state=a.memoizedState,s.componentWillUnmount()}catch(g){W(a,o,g)}Yj(e,o,a);break;case 21:Yj(e,o,a);break;case 22:a.mode&1?(U=(s=U)||a.memoizedState!==null,Yj(e,o,a),U=s):Yj(e,o,a);break;default:Yj(e,o,a)}}function ak(e){var o=e.updateQueue;if(o!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Kj),o.forEach(function(s){var c=bk.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}}function ck(e,o){var a=o.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];try{var d=e,h=o,g=h;e:for(;g!==null;){switch(g.tag){case 5:X=g.stateNode,Xj=!1;break e;case 3:X=g.stateNode.containerInfo,Xj=!0;break e;case 4:X=g.stateNode.containerInfo,Xj=!0;break e}g=g.return}if(X===null)throw Error(p(160));Zj(d,h,c),X=null,Xj=!1;var b=c.alternate;b!==null&&(b.return=null),c.return=null}catch($){W(c,o,$)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)dk(o,e),o=o.sibling}function dk(e,o){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ck(o,e),ek(e),s&4){try{Pj(3,e,e.return),Qj(3,e)}catch(pt){W(e,e.return,pt)}try{Pj(5,e,e.return)}catch(pt){W(e,e.return,pt)}}break;case 1:ck(o,e),ek(e),s&512&&a!==null&&Lj(a,a.return);break;case 5:if(ck(o,e),ek(e),s&512&&a!==null&&Lj(a,a.return),e.flags&32){var c=e.stateNode;try{ob(c,"")}catch(pt){W(e,e.return,pt)}}if(s&4&&(c=e.stateNode,c!=null)){var d=e.memoizedProps,h=a!==null?a.memoizedProps:d,g=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{g==="input"&&d.type==="radio"&&d.name!=null&&ab(c,d),vb(g,h);var $=vb(g,d);for(h=0;h<b.length;h+=2){var tt=b[h],et=b[h+1];tt==="style"?sb(c,et):tt==="dangerouslySetInnerHTML"?nb(c,et):tt==="children"?ob(c,et):ta(c,tt,et,$)}switch(g){case"input":bb(c,d);break;case"textarea":ib(c,d);break;case"select":var rt=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!d.multiple;var ot=d.value;ot!=null?fb(c,!!d.multiple,ot,!1):rt!==!!d.multiple&&(d.defaultValue!=null?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}c[Pf]=d}catch(pt){W(e,e.return,pt)}}break;case 6:if(ck(o,e),ek(e),s&4){if(e.stateNode===null)throw Error(p(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(pt){W(e,e.return,pt)}}break;case 3:if(ck(o,e),ek(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{bd(o.containerInfo)}catch(pt){W(e,e.return,pt)}break;case 4:ck(o,e),ek(e);break;case 13:ck(o,e),ek(e),c=e.child,c.flags&8192&&(d=c.memoizedState!==null,c.stateNode.isHidden=d,!d||c.alternate!==null&&c.alternate.memoizedState!==null||(fk=B())),s&4&&ak(e);break;case 22:if(tt=a!==null&&a.memoizedState!==null,e.mode&1?(U=($=U)||tt,ck(o,e),U=$):ck(o,e),ek(e),s&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!tt&&e.mode&1)for(V=e,tt=e.child;tt!==null;){for(et=V=tt;V!==null;){switch(rt=V,ot=rt.child,rt.tag){case 0:case 11:case 14:case 15:Pj(4,rt,rt.return);break;case 1:Lj(rt,rt.return);var ft=rt.stateNode;if(typeof ft.componentWillUnmount=="function"){s=rt,a=rt.return;try{o=s,ft.props=o.memoizedProps,ft.state=o.memoizedState,ft.componentWillUnmount()}catch(pt){W(s,a,pt)}}break;case 5:Lj(rt,rt.return);break;case 22:if(rt.memoizedState!==null){gk(et);continue}}ot!==null?(ot.return=rt,V=ot):gk(et)}tt=tt.sibling}e:for(tt=null,et=e;;){if(et.tag===5){if(tt===null){tt=et;try{c=et.stateNode,$?(d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(g=et.stateNode,b=et.memoizedProps.style,h=b!=null&&b.hasOwnProperty("display")?b.display:null,g.style.display=rb("display",h))}catch(pt){W(e,e.return,pt)}}}else if(et.tag===6){if(tt===null)try{et.stateNode.nodeValue=$?"":et.memoizedProps}catch(pt){W(e,e.return,pt)}}else if((et.tag!==22&&et.tag!==23||et.memoizedState===null||et===e)&&et.child!==null){et.child.return=et,et=et.child;continue}if(et===e)break e;for(;et.sibling===null;){if(et.return===null||et.return===e)break e;tt===et&&(tt=null),et=et.return}tt===et&&(tt=null),et.sibling.return=et.return,et=et.sibling}}break;case 19:ck(o,e),ek(e),s&4&&ak(e);break;case 21:break;default:ck(o,e),ek(e)}}function ek(e){var o=e.flags;if(o&2){try{e:{for(var a=e.return;a!==null;){if(Tj(a)){var s=a;break e}a=a.return}throw Error(p(160))}switch(s.tag){case 5:var c=s.stateNode;s.flags&32&&(ob(c,""),s.flags&=-33);var d=Uj(e);Wj(e,d,c);break;case 3:case 4:var h=s.stateNode.containerInfo,g=Uj(e);Vj(e,g,h);break;default:throw Error(p(161))}}catch(b){W(e,e.return,b)}e.flags&=-3}o&4096&&(e.flags&=-4097)}function hk(e,o,a){V=e,ik(e)}function ik(e,o,a){for(var s=(e.mode&1)!==0;V!==null;){var c=V,d=c.child;if(c.tag===22&&s){var h=c.memoizedState!==null||Jj;if(!h){var g=c.alternate,b=g!==null&&g.memoizedState!==null||U;g=Jj;var $=U;if(Jj=h,(U=b)&&!$)for(V=c;V!==null;)h=V,b=h.child,h.tag===22&&h.memoizedState!==null?jk(c):b!==null?(b.return=h,V=b):jk(c);for(;d!==null;)V=d,ik(d),d=d.sibling;V=c,Jj=g,U=$}kk(e)}else c.subtreeFlags&8772&&d!==null?(d.return=c,V=d):kk(e)}}function kk(e){for(;V!==null;){var o=V;if(o.flags&8772){var a=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:U||Qj(5,o);break;case 1:var s=o.stateNode;if(o.flags&4&&!U)if(a===null)s.componentDidMount();else{var c=o.elementType===o.type?a.memoizedProps:Ci(o.type,a.memoizedProps);s.componentDidUpdate(c,a.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=o.updateQueue;d!==null&&sh(o,d,s);break;case 3:var h=o.updateQueue;if(h!==null){if(a=null,o.child!==null)switch(o.child.tag){case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}sh(o,h,a)}break;case 5:var g=o.stateNode;if(a===null&&o.flags&4){a=g;var b=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&a.focus();break;case"img":b.src&&(a.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var $=o.alternate;if($!==null){var tt=$.memoizedState;if(tt!==null){var et=tt.dehydrated;et!==null&&bd(et)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}U||o.flags&512&&Rj(o)}catch(rt){W(o,o.return,rt)}}if(o===e){V=null;break}if(a=o.sibling,a!==null){a.return=o.return,V=a;break}V=o.return}}function gk(e){for(;V!==null;){var o=V;if(o===e){V=null;break}var a=o.sibling;if(a!==null){a.return=o.return,V=a;break}V=o.return}}function jk(e){for(;V!==null;){var o=V;try{switch(o.tag){case 0:case 11:case 15:var a=o.return;try{Qj(4,o)}catch(b){W(o,a,b)}break;case 1:var s=o.stateNode;if(typeof s.componentDidMount=="function"){var c=o.return;try{s.componentDidMount()}catch(b){W(o,c,b)}}var d=o.return;try{Rj(o)}catch(b){W(o,d,b)}break;case 5:var h=o.return;try{Rj(o)}catch(b){W(o,h,b)}}}catch(b){W(o,o.return,b)}if(o===e){V=null;break}var g=o.sibling;if(g!==null){g.return=o.return,V=g;break}V=o.return}}var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=1/0,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return K&6?B():Ak!==-1?Ak:Ak=B()}function yi(e){return e.mode&1?K&2&&Z!==0?Z&-Z:Kg.transition!==null?(Bk===0&&(Bk=yc()),Bk):(e=C,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e):1}function gi(e,o,a,s){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(e,a,s),(!(K&2)||e!==Q)&&(e===Q&&(!(K&2)&&(qk|=a),T===4&&Ck(e,Z)),Dk(e,s),a===1&&K===0&&!(o.mode&1)&&(Gj=B()+500,fg&&jg()))}function Dk(e,o){var a=e.callbackNode;wc(e,o);var s=uc(e,e===Q?Z:0);if(s===0)a!==null&&bc(a),e.callbackNode=null,e.callbackPriority=0;else if(o=s&-s,e.callbackPriority!==o){if(a!=null&&bc(a),o===1)e.tag===0?ig(Ek.bind(null,e)):hg(Ek.bind(null,e)),Jf(function(){!(K&6)&&jg()}),a=null;else{switch(Dc(s)){case 1:a=fc;break;case 4:a=gc;break;case 16:a=hc;break;case 536870912:a=jc;break;default:a=hc}a=Fk(a,Gk.bind(null,e))}e.callbackPriority=o,e.callbackNode=a}}function Gk(e,o){if(Ak=-1,Bk=0,K&6)throw Error(p(327));var a=e.callbackNode;if(Hk()&&e.callbackNode!==a)return null;var s=uc(e,e===Q?Z:0);if(s===0)return null;if(s&30||s&e.expiredLanes||o)o=Ik(e,s);else{o=s;var c=K;K|=2;var d=Jk();(Q!==e||Z!==o)&&(uk=null,Gj=B()+500,Kk(e,o));do try{Lk();break}catch(g){Mk(e,g)}while(!0);$g(),mk.current=d,K=c,Y!==null?o=0:(Q=null,Z=0,o=T)}if(o!==0){if(o===2&&(c=xc(e),c!==0&&(s=c,o=Nk(e,c))),o===1)throw a=pk,Kk(e,0),Ck(e,s),Dk(e,B()),a;if(o===6)Ck(e,s);else{if(c=e.current.alternate,!(s&30)&&!Ok(c)&&(o=Ik(e,s),o===2&&(d=xc(e),d!==0&&(s=d,o=Nk(e,d))),o===1))throw a=pk,Kk(e,0),Ck(e,s),Dk(e,B()),a;switch(e.finishedWork=c,e.finishedLanes=s,o){case 0:case 1:throw Error(p(345));case 2:Pk(e,tk,uk);break;case 3:if(Ck(e,s),(s&130023424)===s&&(o=fk+500-B(),10<o)){if(uc(e,0)!==0)break;if(c=e.suspendedLanes,(c&s)!==s){R(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Ff(Pk.bind(null,e,tk,uk),o);break}Pk(e,tk,uk);break;case 4:if(Ck(e,s),(s&4194240)===s)break;for(o=e.eventTimes,c=-1;0<s;){var h=31-oc(s);d=1<<h,h=o[h],h>c&&(c=h),s&=~d}if(s=c,s=B()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*lk(s/1960))-s,10<s){e.timeoutHandle=Ff(Pk.bind(null,e,tk,uk),s);break}Pk(e,tk,uk);break;case 5:Pk(e,tk,uk);break;default:throw Error(p(329))}}}return Dk(e,B()),e.callbackNode===a?Gk.bind(null,e):null}function Nk(e,o){var a=sk;return e.current.memoizedState.isDehydrated&&(Kk(e,o).flags|=256),e=Ik(e,o),e!==2&&(o=tk,tk=a,o!==null&&Fj(o)),e}function Fj(e){tk===null?tk=e:tk.push.apply(tk,e)}function Ok(e){for(var o=e;;){if(o.flags&16384){var a=o.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var s=0;s<a.length;s++){var c=a[s],d=c.getSnapshot;c=c.value;try{if(!He(d(),c))return!1}catch{return!1}}}if(a=o.child,o.subtreeFlags&16384&&a!==null)a.return=o,o=a;else{if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ck(e,o){for(o&=~rk,o&=~qk,e.suspendedLanes|=o,e.pingedLanes&=~o,e=e.expirationTimes;0<o;){var a=31-oc(o),s=1<<a;e[a]=-1,o&=~s}}function Ek(e){if(K&6)throw Error(p(327));Hk();var o=uc(e,0);if(!(o&1))return Dk(e,B()),null;var a=Ik(e,o);if(e.tag!==0&&a===2){var s=xc(e);s!==0&&(o=s,a=Nk(e,s))}if(a===1)throw a=pk,Kk(e,0),Ck(e,o),Dk(e,B()),a;if(a===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=o,Pk(e,tk,uk),Dk(e,B()),null}function Qk(e,o){var a=K;K|=1;try{return e(o)}finally{K=a,K===0&&(Gj=B()+500,fg&&jg())}}function Rk(e){wk!==null&&wk.tag===0&&!(K&6)&&Hk();var o=K;K|=1;var a=ok.transition,s=C;try{if(ok.transition=null,C=1,e)return e()}finally{C=s,ok.transition=a,K=o,!(K&6)&&jg()}}function Hj(){fj=ej.current,E(ej)}function Kk(e,o){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Gf(a)),Y!==null)for(a=Y.return;a!==null;){var s=a;switch(wg(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&$f();break;case 3:zh(),E(Wf),E(H),Eh();break;case 5:Bh(s);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(s.type._context);break;case 22:case 23:Hj()}a=a.return}if(Q=e,Y=e=Pg(e.current,null),Z=fj=o,T=0,pk=null,rk=qk=rh=0,tk=sk=null,fh!==null){for(o=0;o<fh.length;o++)if(a=fh[o],s=a.interleaved,s!==null){a.interleaved=null;var c=s.next,d=a.pending;if(d!==null){var h=d.next;d.next=c,s.next=h}a.pending=s}fh=null}return e}function Mk(e,o){do{var a=Y;try{if($g(),Fh.current=Rh,Ih){for(var s=M.memoizedState;s!==null;){var c=s.queue;c!==null&&(c.pending=null),s=s.next}Ih=!1}if(Hh=0,O=N=M=null,Jh=!1,Kh=0,nk.current=null,a===null||a.return===null){T=1,pk=o,Y=null;break}e:{var d=e,h=a.return,g=a,b=o;if(o=Z,g.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var $=b,tt=g,et=tt.tag;if(!(tt.mode&1)&&(et===0||et===11||et===15)){var rt=tt.alternate;rt?(tt.updateQueue=rt.updateQueue,tt.memoizedState=rt.memoizedState,tt.lanes=rt.lanes):(tt.updateQueue=null,tt.memoizedState=null)}var ot=Ui(h);if(ot!==null){ot.flags&=-257,Vi(ot,h,g,d,o),ot.mode&1&&Si(d,$,o),o=ot,b=$;var ft=o.updateQueue;if(ft===null){var pt=new Set;pt.add(b),o.updateQueue=pt}else ft.add(b);break e}else{if(!(o&1)){Si(d,$,o),tj();break e}b=Error(p(426))}}else if(I&&g.mode&1){var vt=Ui(h);if(vt!==null){!(vt.flags&65536)&&(vt.flags|=256),Vi(vt,h,g,d,o),Jg(Ji(b,g));break e}}d=b=Ji(b,g),T!==4&&(T=2),sk===null?sk=[d]:sk.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,o&=-o,d.lanes|=o;var lt=Ni(d,b,o);ph(d,lt);break e;case 1:g=b;var it=d.type,st=d.stateNode;if(!(d.flags&128)&&(typeof it.getDerivedStateFromError=="function"||st!==null&&typeof st.componentDidCatch=="function"&&(Ri===null||!Ri.has(st)))){d.flags|=65536,o&=-o,d.lanes|=o;var yt=Qi(d,g,o);ph(d,yt);break e}}d=d.return}while(d!==null)}Sk(a)}catch(Et){o=Et,Y===a&&a!==null&&(Y=a=a.return);continue}break}while(!0)}function Jk(){var e=mk.current;return mk.current=Rh,e===null?Rh:e}function tj(){(T===0||T===3||T===2)&&(T=4),Q===null||!(rh&268435455)&&!(qk&268435455)||Ck(Q,Z)}function Ik(e,o){var a=K;K|=2;var s=Jk();(Q!==e||Z!==o)&&(uk=null,Kk(e,o));do try{Tk();break}catch(c){Mk(e,c)}while(!0);if($g(),K=a,mk.current=s,Y!==null)throw Error(p(261));return Q=null,Z=0,T}function Tk(){for(;Y!==null;)Uk(Y)}function Lk(){for(;Y!==null&&!cc();)Uk(Y)}function Uk(e){var o=Vk(e.alternate,e,fj);e.memoizedProps=e.pendingProps,o===null?Sk(e):Y=o,nk.current=null}function Sk(e){var o=e;do{var a=o.alternate;if(e=o.return,o.flags&32768){if(a=Ij(a,o),a!==null){a.flags&=32767,Y=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{T=6,Y=null;return}}else if(a=Ej(a,o,fj),a!==null){Y=a;return}if(o=o.sibling,o!==null){Y=o;return}Y=o=e}while(o!==null);T===0&&(T=5)}function Pk(e,o,a){var s=C,c=ok.transition;try{ok.transition=null,C=1,Wk(e,o,a,s)}finally{ok.transition=c,C=s}return null}function Wk(e,o,a,s){do Hk();while(wk!==null);if(K&6)throw Error(p(327));a=e.finishedWork;var c=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var d=a.lanes|a.childLanes;if(Bc(e,d),e===Q&&(Y=Q=null,Z=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||vk||(vk=!0,Fk(hc,function(){return Hk(),null})),d=(a.flags&15990)!==0,a.subtreeFlags&15990||d){d=ok.transition,ok.transition=null;var h=C;C=1;var g=K;K|=4,nk.current=null,Oj(e,a),dk(a,e),Oe(Df),dd=!!Cf,Df=Cf=null,e.current=a,hk(a),dc(),K=g,C=h,ok.transition=d}else e.current=a;if(vk&&(vk=!1,wk=e,xk=c),d=e.pendingLanes,d===0&&(Ri=null),mc(a.stateNode),Dk(e,B()),o!==null)for(s=e.onRecoverableError,a=0;a<o.length;a++)c=o[a],s(c.value,{componentStack:c.stack,digest:c.digest});if(Oi)throw Oi=!1,e=Pi,Pi=null,e;return xk&1&&e.tag!==0&&Hk(),d=e.pendingLanes,d&1?e===zk?yk++:(yk=0,zk=e):yk=0,jg(),null}function Hk(){if(wk!==null){var e=Dc(xk),o=ok.transition,a=C;try{if(ok.transition=null,C=16>e?16:e,wk===null)var s=!1;else{if(e=wk,wk=null,xk=0,K&6)throw Error(p(331));var c=K;for(K|=4,V=e.current;V!==null;){var d=V,h=d.child;if(V.flags&16){var g=d.deletions;if(g!==null){for(var b=0;b<g.length;b++){var $=g[b];for(V=$;V!==null;){var tt=V;switch(tt.tag){case 0:case 11:case 15:Pj(8,tt,d)}var et=tt.child;if(et!==null)et.return=tt,V=et;else for(;V!==null;){tt=V;var rt=tt.sibling,ot=tt.return;if(Sj(tt),tt===$){V=null;break}if(rt!==null){rt.return=ot,V=rt;break}V=ot}}}var ft=d.alternate;if(ft!==null){var pt=ft.child;if(pt!==null){ft.child=null;do{var vt=pt.sibling;pt.sibling=null,pt=vt}while(pt!==null)}}V=d}}if(d.subtreeFlags&2064&&h!==null)h.return=d,V=h;else e:for(;V!==null;){if(d=V,d.flags&2048)switch(d.tag){case 0:case 11:case 15:Pj(9,d,d.return)}var lt=d.sibling;if(lt!==null){lt.return=d.return,V=lt;break e}V=d.return}}var it=e.current;for(V=it;V!==null;){h=V;var st=h.child;if(h.subtreeFlags&2064&&st!==null)st.return=h,V=st;else e:for(h=it;V!==null;){if(g=V,g.flags&2048)try{switch(g.tag){case 0:case 11:case 15:Qj(9,g)}}catch(Et){W(g,g.return,Et)}if(g===h){V=null;break e}var yt=g.sibling;if(yt!==null){yt.return=g.return,V=yt;break e}V=g.return}}if(K=c,jg(),lc&&typeof lc.onPostCommitFiberRoot=="function")try{lc.onPostCommitFiberRoot(kc,e)}catch{}s=!0}return s}finally{C=a,ok.transition=o}}return!1}function Xk(e,o,a){o=Ji(a,o),o=Ni(e,o,1),e=nh(e,o,1),o=R(),e!==null&&(Ac(e,1,o),Dk(e,o))}function W(e,o,a){if(e.tag===3)Xk(e,e,a);else for(;o!==null;){if(o.tag===3){Xk(o,e,a);break}else if(o.tag===1){var s=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ri===null||!Ri.has(s))){e=Ji(a,e),e=Qi(o,e,1),o=nh(o,e,1),e=R(),o!==null&&(Ac(o,1,e),Dk(o,e));break}}o=o.return}}function Ti(e,o,a){var s=e.pingCache;s!==null&&s.delete(o),o=R(),e.pingedLanes|=e.suspendedLanes&a,Q===e&&(Z&a)===a&&(T===4||T===3&&(Z&130023424)===Z&&500>B()-fk?Kk(e,0):rk|=a),Dk(e,o)}function Yk(e,o){o===0&&(e.mode&1?(o=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):o=1);var a=R();e=ih(e,o),e!==null&&(Ac(e,o,a),Dk(e,a))}function uj(e){var o=e.memoizedState,a=0;o!==null&&(a=o.retryLane),Yk(e,a)}function bk(e,o){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(p(314))}s!==null&&s.delete(o),Yk(e,a)}var Vk;Vk=function(e,o,a){if(e!==null)if(e.memoizedProps!==o.pendingProps||Wf.current)dh=!0;else{if(!(e.lanes&a)&&!(o.flags&128))return dh=!1,yj(e,o,a);dh=!!(e.flags&131072)}else dh=!1,I&&o.flags&1048576&&ug(o,ng,o.index);switch(o.lanes=0,o.tag){case 2:var s=o.type;ij(e,o),e=o.pendingProps;var c=Yf(o,H.current);ch(o,a),c=Nh(null,o,s,e,c,a);var d=Sh();return o.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Zf(s)?(d=!0,cg(o)):d=!1,o.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,kh(o),c.updater=Ei,o.stateNode=c,c._reactInternals=o,Ii(o,s,e,a),o=jj(null,o,s,!0,d,a)):(o.tag=0,I&&d&&vg(o),Xi(null,o,c,a),o=o.child),o;case 16:s=o.elementType;e:{switch(ij(e,o),e=o.pendingProps,c=s._init,s=c(s._payload),o.type=s,c=o.tag=Zk(s),e=Ci(s,e),c){case 0:o=cj(null,o,s,e,a);break e;case 1:o=hj(null,o,s,e,a);break e;case 11:o=Yi(null,o,s,e,a);break e;case 14:o=$i(null,o,s,Ci(s.type,e),a);break e}throw Error(p(306,s,""))}return o;case 0:return s=o.type,c=o.pendingProps,c=o.elementType===s?c:Ci(s,c),cj(e,o,s,c,a);case 1:return s=o.type,c=o.pendingProps,c=o.elementType===s?c:Ci(s,c),hj(e,o,s,c,a);case 3:e:{if(kj(o),e===null)throw Error(p(387));s=o.pendingProps,d=o.memoizedState,c=d.element,lh(e,o),qh(o,s,null,a);var h=o.memoizedState;if(s=h.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},o.updateQueue.baseState=d,o.memoizedState=d,o.flags&256){c=Ji(Error(p(423)),o),o=lj(e,o,s,a,c);break e}else if(s!==c){c=Ji(Error(p(424)),o),o=lj(e,o,s,a,c);break e}else for(yg=Lf(o.stateNode.containerInfo.firstChild),xg=o,I=!0,zg=null,a=Vg(o,null,s,a),o.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ig(),s===c){o=Zi(e,o,a);break e}Xi(e,o,s,a)}o=o.child}return o;case 5:return Ah(o),e===null&&Eg(o),s=o.type,c=o.pendingProps,d=e!==null?e.memoizedProps:null,h=c.children,Ef(s,c)?h=null:d!==null&&Ef(s,d)&&(o.flags|=32),gj(e,o),Xi(e,o,h,a),o.child;case 6:return e===null&&Eg(o),null;case 13:return oj(e,o,a);case 4:return yh(o,o.stateNode.containerInfo),s=o.pendingProps,e===null?o.child=Ug(o,null,s,a):Xi(e,o,s,a),o.child;case 11:return s=o.type,c=o.pendingProps,c=o.elementType===s?c:Ci(s,c),Yi(e,o,s,c,a);case 7:return Xi(e,o,o.pendingProps,a),o.child;case 8:return Xi(e,o,o.pendingProps.children,a),o.child;case 12:return Xi(e,o,o.pendingProps.children,a),o.child;case 10:e:{if(s=o.type._context,c=o.pendingProps,d=o.memoizedProps,h=c.value,G(Wg,s._currentValue),s._currentValue=h,d!==null)if(He(d.value,h)){if(d.children===c.children&&!Wf.current){o=Zi(e,o,a);break e}}else for(d=o.child,d!==null&&(d.return=o);d!==null;){var g=d.dependencies;if(g!==null){h=d.child;for(var b=g.firstContext;b!==null;){if(b.context===s){if(d.tag===1){b=mh(-1,a&-a),b.tag=2;var $=d.updateQueue;if($!==null){$=$.shared;var tt=$.pending;tt===null?b.next=b:(b.next=tt.next,tt.next=b),$.pending=b}}d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),bh(d.return,a,o),g.lanes|=a;break}b=b.next}}else if(d.tag===10)h=d.type===o.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(p(341));h.lanes|=a,g=h.alternate,g!==null&&(g.lanes|=a),bh(h,a,o),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===o){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}Xi(e,o,c.children,a),o=o.child}return o;case 9:return c=o.type,s=o.pendingProps.children,ch(o,a),c=eh(c),s=s(c),o.flags|=1,Xi(e,o,s,a),o.child;case 14:return s=o.type,c=Ci(s,o.pendingProps),c=Ci(s.type,c),$i(e,o,s,c,a);case 15:return bj(e,o,o.type,o.pendingProps,a);case 17:return s=o.type,c=o.pendingProps,c=o.elementType===s?c:Ci(s,c),ij(e,o),o.tag=1,Zf(s)?(e=!0,cg(o)):e=!1,ch(o,a),Gi(o,s,c),Ii(o,s,c,a),jj(null,o,s,!0,e,a);case 19:return xj(e,o,a);case 22:return dj(e,o,a)}throw Error(p(156,o.tag))};function Fk(e,o){return ac(e,o)}function $k(e,o,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(e,o,a,s){return new $k(e,o,a,s)}function aj(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zk(e){if(typeof e=="function")return aj(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Da)return 11;if(e===Ga)return 14}return 2}function Pg(e,o){var a=e.alternate;return a===null?(a=Bg(e.tag,o,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=o,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,o=e.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function Rg(e,o,a,s,c,d){var h=2;if(s=e,typeof e=="function")aj(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case ya:return Tg(a.children,c,d,o);case za:h=8,c|=8;break;case Aa:return e=Bg(12,a,o,c|2),e.elementType=Aa,e.lanes=d,e;case Ea:return e=Bg(13,a,o,c),e.elementType=Ea,e.lanes=d,e;case Fa:return e=Bg(19,a,o,c),e.elementType=Fa,e.lanes=d,e;case Ia:return pj(a,c,d,o);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ba:h=10;break e;case Ca:h=9;break e;case Da:h=11;break e;case Ga:h=14;break e;case Ha:h=16,s=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return o=Bg(h,a,o,c),o.elementType=e,o.type=s,o.lanes=d,o}function Tg(e,o,a,s){return e=Bg(7,e,s,o),e.lanes=a,e}function pj(e,o,a,s){return e=Bg(22,e,s,o),e.elementType=Ia,e.lanes=a,e.stateNode={isHidden:!1},e}function Qg(e,o,a){return e=Bg(6,e,null,o),e.lanes=a,e}function Sg(e,o,a){return o=Bg(4,e.children!==null?e.children:[],e.key,o),o.lanes=a,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}function al(e,o,a,s,c){this.tag=o,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=s,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function bl(e,o,a,s,c,d,h,g,b){return e=new al(e,o,a,g,b),o===1?(o=1,d===!0&&(o|=8)):o=0,d=Bg(3,null,null,o),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(d),e}function cl(e,o,a){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:s==null?null:""+s,children:e,containerInfo:o,implementation:a}}function dl(e){if(!e)return Vf;e=e._reactInternals;e:{if(Vb(e)!==e||e.tag!==1)throw Error(p(170));var o=e;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Zf(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(p(171))}if(e.tag===1){var a=e.type;if(Zf(a))return bg(e,a,o)}return o}function el(e,o,a,s,c,d,h,g,b){return e=bl(a,s,!0,e,c,d,h,g,b),e.context=dl(null),a=e.current,s=R(),c=yi(a),d=mh(s,c),d.callback=o??null,nh(a,d,c),e.current.lanes=c,Ac(e,c,s),Dk(e,s),e}function fl(e,o,a,s){var c=o.current,d=R(),h=yi(c);return a=dl(a),o.context===null?o.context=a:o.pendingContext=a,o=mh(d,h),o.payload={element:e},s=s===void 0?null:s,s!==null&&(o.callback=s),e=nh(c,o,h),e!==null&&(gi(e,c,h,d),oh(e,c,h)),h}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hl(e,o){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<o?a:o}}function il(e,o){hl(e,o),(e=e.alternate)&&hl(e,o)}function jl(){return null}var kl=typeof reportError=="function"?reportError:function(e){console.error(e)};function ll(e){this._internalRoot=e}ml.prototype.render=ll.prototype.render=function(e){var o=this._internalRoot;if(o===null)throw Error(p(409));fl(e,o,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var o=e.containerInfo;Rk(function(){fl(null,e,null,null)}),o[uf]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var o=Hc();e={blockedOn:null,target:e,priority:o};for(var a=0;a<Qc.length&&o!==0&&o<Qc[a].priority;a++);Qc.splice(a,0,e),a===0&&Vc(e)}};function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pl(){}function ql(e,o,a,s,c){if(c){if(typeof s=="function"){var d=s;s=function(){var $=gl(h);d.call($)}}var h=el(o,s,e,0,null,!1,!1,"",pl);return e._reactRootContainer=h,e[uf]=h.current,sf(e.nodeType===8?e.parentNode:e),Rk(),h}for(;c=e.lastChild;)e.removeChild(c);if(typeof s=="function"){var g=s;s=function(){var $=gl(b);g.call($)}}var b=bl(e,0,!1,null,null,!1,!1,"",pl);return e._reactRootContainer=b,e[uf]=b.current,sf(e.nodeType===8?e.parentNode:e),Rk(function(){fl(o,b,a,s)}),b}function rl(e,o,a,s,c){var d=a._reactRootContainer;if(d){var h=d;if(typeof c=="function"){var g=c;c=function(){var b=gl(h);g.call(b)}}fl(o,h,e,c)}else h=ql(a,o,e,c,s);return gl(h)}Ec=function(e){switch(e.tag){case 3:var o=e.stateNode;if(o.current.memoizedState.isDehydrated){var a=tc(o.pendingLanes);a!==0&&(Cc(o,a|1),Dk(o,B()),!(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var s=ih(e,1);if(s!==null){var c=R();gi(s,e,1,c)}}),il(e,1)}};Fc=function(e){if(e.tag===13){var o=ih(e,134217728);if(o!==null){var a=R();gi(o,e,134217728,a)}il(e,134217728)}};Gc=function(e){if(e.tag===13){var o=yi(e),a=ih(e,o);if(a!==null){var s=R();gi(a,e,o,s)}il(e,o)}};Hc=function(){return C};Ic=function(e,o){var a=C;try{return C=e,o()}finally{C=a}};yb=function(e,o,a){switch(o){case"input":if(bb(e,a),o=a.name,a.type==="radio"&&o!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<a.length;o++){var s=a[o];if(s!==e&&s.form===e.form){var c=Db(s);if(!c)throw Error(p(90));Wa(s),bb(s,c)}}}break;case"textarea":ib(e,a);break;case"select":o=a.value,o!=null&&fb(e,!!a.multiple,o,!1)}};Gb=Qk;Hb=Rk;var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zb(e),e===null?null:e.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;reactDom_production_min.createPortal=function(e,o){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(o))throw Error(p(200));return cl(e,o,null,a)};reactDom_production_min.createRoot=function(e,o){if(!nl(e))throw Error(p(299));var a=!1,s="",c=kl;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(s=o.identifierPrefix),o.onRecoverableError!==void 0&&(c=o.onRecoverableError)),o=bl(e,1,!1,null,null,a,!1,s,c),e[uf]=o.current,sf(e.nodeType===8?e.parentNode:e),new ll(o)};reactDom_production_min.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var o=e._reactInternals;if(o===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=Zb(o),e=e===null?null:e.stateNode,e};reactDom_production_min.flushSync=function(e){return Rk(e)};reactDom_production_min.hydrate=function(e,o,a){if(!ol(o))throw Error(p(200));return rl(null,e,o,!0,a)};reactDom_production_min.hydrateRoot=function(e,o,a){if(!nl(e))throw Error(p(405));var s=a!=null&&a.hydratedSources||null,c=!1,d="",h=kl;if(a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onRecoverableError!==void 0&&(h=a.onRecoverableError)),o=el(o,null,e,1,a??null,c,!1,d,h),e[uf]=o.current,sf(e),s)for(e=0;e<s.length;e++)a=s[e],c=a._getVersion,c=c(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,c]:o.mutableSourceEagerHydrationData.push(a,c);return new ml(o)};reactDom_production_min.render=function(e,o,a){if(!ol(o))throw Error(p(200));return rl(null,e,o,!1,a)};reactDom_production_min.unmountComponentAtNode=function(e){if(!ol(e))throw Error(p(40));return e._reactRootContainer?(Rk(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[uf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(e,o,a,s){if(!ol(a))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return rl(e,o,a,!1,s)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(e){console.error(e)}}checkDCE(),reactDom.exports=reactDom_production_min;var reactDomExports=reactDom.exports;const index=getDefaultExportFromCjs(reactDomExports),ReactDOM=_mergeNamespaces({__proto__:null,default:index},[reactDomExports]);var m=reactDomExports;client.createRoot=m.createRoot,client.hydrateRoot=m.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$2(){return _extends$2=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},_extends$2.apply(this,arguments)}var Action;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Action||(Action={}));const PopStateEventType="popstate";function createBrowserHistory(e){e===void 0&&(e={});function o(s,c){let{pathname:d,search:h,hash:g}=s.location;return createLocation("",{pathname:d,search:h,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function a(s,c){return typeof c=="string"?c:createPath(c)}return getUrlBasedHistory(o,a,null,e)}function invariant(e,o){if(e===!1||e===null||typeof e>"u")throw new Error(o)}function warning(e,o){if(!e){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function createKey(){return Math.random().toString(36).substr(2,8)}function getHistoryState(e,o){return{usr:e.state,key:e.key,idx:o}}function createLocation(e,o,a,s){return a===void 0&&(a=null),_extends$2({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof o=="string"?parsePath(o):o,{state:a,key:o&&o.key||s||createKey()})}function createPath(e){let{pathname:o="/",search:a="",hash:s=""}=e;return a&&a!=="?"&&(o+=a.charAt(0)==="?"?a:"?"+a),s&&s!=="#"&&(o+=s.charAt(0)==="#"?s:"#"+s),o}function parsePath(e){let o={};if(e){let a=e.indexOf("#");a>=0&&(o.hash=e.substr(a),e=e.substr(0,a));let s=e.indexOf("?");s>=0&&(o.search=e.substr(s),e=e.substr(0,s)),e&&(o.pathname=e)}return o}function getUrlBasedHistory(e,o,a,s){s===void 0&&(s={});let{window:c=document.defaultView,v5Compat:d=!1}=s,h=c.history,g=Action.Pop,b=null,$=tt();$==null&&($=0,h.replaceState(_extends$2({},h.state,{idx:$}),""));function tt(){return(h.state||{idx:null}).idx}function et(){g=Action.Pop;let vt=tt(),lt=vt==null?null:vt-$;$=vt,b&&b({action:g,location:pt.location,delta:lt})}function rt(vt,lt){g=Action.Push;let it=createLocation(pt.location,vt,lt);$=tt()+1;let st=getHistoryState(it,$),yt=pt.createHref(it);try{h.pushState(st,"",yt)}catch(Et){if(Et instanceof DOMException&&Et.name==="DataCloneError")throw Et;c.location.assign(yt)}d&&b&&b({action:g,location:pt.location,delta:1})}function ot(vt,lt){g=Action.Replace;let it=createLocation(pt.location,vt,lt);$=tt();let st=getHistoryState(it,$),yt=pt.createHref(it);h.replaceState(st,"",yt),d&&b&&b({action:g,location:pt.location,delta:0})}function ft(vt){let lt=c.location.origin!=="null"?c.location.origin:c.location.href,it=typeof vt=="string"?vt:createPath(vt);return it=it.replace(/ $/,"%20"),invariant(lt,"No window.location.(origin|href) available to create URL for href: "+it),new URL(it,lt)}let pt={get action(){return g},get location(){return e(c,h)},listen(vt){if(b)throw new Error("A history only accepts one active listener");return c.addEventListener(PopStateEventType,et),b=vt,()=>{c.removeEventListener(PopStateEventType,et),b=null}},createHref(vt){return o(c,vt)},createURL:ft,encodeLocation(vt){let lt=ft(vt);return{pathname:lt.pathname,search:lt.search,hash:lt.hash}},push:rt,replace:ot,go(vt){return h.go(vt)}};return pt}var ResultType;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ResultType||(ResultType={}));const immutableRouteKeys=new Set(["lazy","caseSensitive","path","id","index","children"]);function isIndexRoute(e){return e.index===!0}function convertRoutesToDataRoutes(e,o,a,s){return a===void 0&&(a=[]),s===void 0&&(s={}),e.map((c,d)=>{let h=[...a,String(d)],g=typeof c.id=="string"?c.id:h.join("-");if(invariant(c.index!==!0||!c.children,"Cannot specify children on an index route"),invariant(!s[g],'Found a route id collision on id "'+g+`".  Route id's must be globally unique within Data Router usages`),isIndexRoute(c)){let b=_extends$2({},c,o(c),{id:g});return s[g]=b,b}else{let b=_extends$2({},c,o(c),{id:g,children:void 0});return s[g]=b,c.children&&(b.children=convertRoutesToDataRoutes(c.children,o,h,s)),b}})}function matchRoutes(e,o,a){return a===void 0&&(a="/"),matchRoutesImpl(e,o,a,!1)}function matchRoutesImpl(e,o,a,s){let c=typeof o=="string"?parsePath(o):o,d=stripBasename(c.pathname||"/",a);if(d==null)return null;let h=flattenRoutes(e);rankRouteBranches(h);let g=null;for(let b=0;g==null&&b<h.length;++b){let $=decodePath(d);g=matchRouteBranch(h[b],$,s)}return g}function convertRouteMatchToUiMatch(e,o){let{route:a,pathname:s,params:c}=e;return{id:a.id,pathname:s,params:c,data:o[a.id],handle:a.handle}}function flattenRoutes(e,o,a,s){o===void 0&&(o=[]),a===void 0&&(a=[]),s===void 0&&(s="");let c=(d,h,g)=>{let b={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};b.relativePath.startsWith("/")&&(invariant(b.relativePath.startsWith(s),'Absolute route path "'+b.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),b.relativePath=b.relativePath.slice(s.length));let $=joinPaths([s,b.relativePath]),tt=a.concat(b);d.children&&d.children.length>0&&(invariant(d.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+$+'".')),flattenRoutes(d.children,o,tt,$)),!(d.path==null&&!d.index)&&o.push({path:$,score:computeScore($,d.index),routesMeta:tt})};return e.forEach((d,h)=>{var g;if(d.path===""||!((g=d.path)!=null&&g.includes("?")))c(d,h);else for(let b of explodeOptionalSegments(d.path))c(d,h,b)}),o}function explodeOptionalSegments(e){let o=e.split("/");if(o.length===0)return[];let[a,...s]=o,c=a.endsWith("?"),d=a.replace(/\?$/,"");if(s.length===0)return c?[d,""]:[d];let h=explodeOptionalSegments(s.join("/")),g=[];return g.push(...h.map(b=>b===""?d:[d,b].join("/"))),c&&g.push(...h),g.map(b=>e.startsWith("/")&&b===""?"/":b)}function rankRouteBranches(e){e.sort((o,a)=>o.score!==a.score?a.score-o.score:compareIndexes(o.routesMeta.map(s=>s.childrenIndex),a.routesMeta.map(s=>s.childrenIndex)))}const paramRe=/^:[\w-]+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=e=>e==="*";function computeScore(e,o){let a=e.split("/"),s=a.length;return a.some(isSplat)&&(s+=splatPenalty),o&&(s+=indexRouteValue),a.filter(c=>!isSplat(c)).reduce((c,d)=>c+(paramRe.test(d)?dynamicSegmentValue:d===""?emptySegmentValue:staticSegmentValue),s)}function compareIndexes(e,o){return e.length===o.length&&e.slice(0,-1).every((s,c)=>s===o[c])?e[e.length-1]-o[o.length-1]:0}function matchRouteBranch(e,o,a){a===void 0&&(a=!1);let{routesMeta:s}=e,c={},d="/",h=[];for(let g=0;g<s.length;++g){let b=s[g],$=g===s.length-1,tt=d==="/"?o:o.slice(d.length)||"/",et=matchPath({path:b.relativePath,caseSensitive:b.caseSensitive,end:$},tt),rt=b.route;if(!et&&$&&a&&!s[s.length-1].route.index&&(et=matchPath({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},tt)),!et)return null;Object.assign(c,et.params),h.push({params:c,pathname:joinPaths([d,et.pathname]),pathnameBase:normalizePathname(joinPaths([d,et.pathnameBase])),route:rt}),et.pathnameBase!=="/"&&(d=joinPaths([d,et.pathnameBase]))}return h}function matchPath(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,s]=compilePath(e.path,e.caseSensitive,e.end),c=o.match(a);if(!c)return null;let d=c[0],h=d.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:s.reduce(($,tt,et)=>{let{paramName:rt,isOptional:ot}=tt;if(rt==="*"){let pt=g[et]||"";h=d.slice(0,d.length-pt.length).replace(/(.)\/+$/,"$1")}const ft=g[et];return ot&&!ft?$[rt]=void 0:$[rt]=(ft||"").replace(/%2F/g,"/"),$},{}),pathname:d,pathnameBase:h,pattern:e}}function compilePath(e,o,a){o===void 0&&(o=!1),a===void 0&&(a=!0),warning(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,b)=>(s.push({paramName:g,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?c+="\\/*$":e!==""&&e!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,o?void 0:"i"),s]}function decodePath(e){try{return e.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return warning(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),e}}function stripBasename(e,o){if(o==="/")return e;if(!e.toLowerCase().startsWith(o.toLowerCase()))return null;let a=o.endsWith("/")?o.length-1:o.length,s=e.charAt(a);return s&&s!=="/"?null:e.slice(a)||"/"}const ABSOLUTE_URL_REGEX$1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,isAbsoluteUrl=e=>ABSOLUTE_URL_REGEX$1.test(e);function resolvePath(e,o){o===void 0&&(o="/");let{pathname:a,search:s="",hash:c=""}=typeof e=="string"?parsePath(e):e,d;if(a)if(isAbsoluteUrl(a))d=a;else{if(a.includes("//")){let h=a;a=a.replace(/\/\/+/g,"/"),warning(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+a))}a.startsWith("/")?d=resolvePathname(a.substring(1),"/"):d=resolvePathname(a,o)}else d=o;return{pathname:d,search:normalizeSearch(s),hash:normalizeHash(c)}}function resolvePathname(e,o){let a=o.replace(/\/+$/,"").split("/");return e.split("/").forEach(c=>{c===".."?a.length>1&&a.pop():c!=="."&&a.push(c)}),a.length>1?a.join("/"):"/"}function getInvalidPathError(e,o,a,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(e){return e.filter((o,a)=>a===0||o.route.path&&o.route.path.length>0)}function getResolveToMatches(e,o){let a=getPathContributingMatches(e);return o?a.map((s,c)=>c===a.length-1?s.pathname:s.pathnameBase):a.map(s=>s.pathnameBase)}function resolveTo(e,o,a,s){s===void 0&&(s=!1);let c;typeof e=="string"?c=parsePath(e):(c=_extends$2({},e),invariant(!c.pathname||!c.pathname.includes("?"),getInvalidPathError("?","pathname","search",c)),invariant(!c.pathname||!c.pathname.includes("#"),getInvalidPathError("#","pathname","hash",c)),invariant(!c.search||!c.search.includes("#"),getInvalidPathError("#","search","hash",c)));let d=e===""||c.pathname==="",h=d?"/":c.pathname,g;if(h==null)g=a;else{let et=o.length-1;if(!s&&h.startsWith("..")){let rt=h.split("/");for(;rt[0]==="..";)rt.shift(),et-=1;c.pathname=rt.join("/")}g=et>=0?o[et]:"/"}let b=resolvePath(c,g),$=h&&h!=="/"&&h.endsWith("/"),tt=(d||h===".")&&a.endsWith("/");return!b.pathname.endsWith("/")&&($||tt)&&(b.pathname+="/"),b}const joinPaths=e=>e.join("/").replace(/\/\/+/g,"/"),normalizePathname=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,normalizeHash=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class ErrorResponseImpl{constructor(o,a,s,c){c===void 0&&(c=!1),this.status=o,this.statusText=a||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}}function isRouteErrorResponse(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const validMutationMethodsArr=["post","put","patch","delete"],validMutationMethods=new Set(validMutationMethodsArr),validRequestMethodsArr=["get",...validMutationMethodsArr],validRequestMethods=new Set(validRequestMethodsArr),redirectStatusCodes=new Set([301,302,303,307,308]),redirectPreserveMethodStatusCodes=new Set([307,308]),IDLE_NAVIGATION={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},IDLE_FETCHER={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},IDLE_BLOCKER={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ABSOLUTE_URL_REGEX$2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,defaultMapRouteProperties=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),TRANSITIONS_STORAGE_KEY="remix-router-transitions";function createRouter(e){const o=e.window?e.window:typeof window<"u"?window:void 0,a=typeof o<"u"&&typeof o.document<"u"&&typeof o.document.createElement<"u",s=!a;invariant(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let c;if(e.mapRouteProperties)c=e.mapRouteProperties;else if(e.detectErrorBoundary){let at=e.detectErrorBoundary;c=dt=>({hasErrorBoundary:at(dt)})}else c=defaultMapRouteProperties;let d={},h=convertRoutesToDataRoutes(e.routes,c,void 0,d),g,b=e.basename||"/",$=e.dataStrategy||defaultDataStrategy,tt=e.patchRoutesOnNavigation,et=_extends$2({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),rt=null,ot=new Set,ft=null,pt=null,vt=null,lt=e.hydrationData!=null,it=matchRoutes(h,e.history.location,b),st=!1,yt=null;if(it==null&&!tt){let at=getInternalRouterError(404,{pathname:e.history.location.pathname}),{matches:dt,route:mt}=getShortCircuitMatches(h);it=dt,yt={[mt.id]:at}}it&&!e.hydrationData&&Dn(it,h,e.history.location.pathname).active&&(it=null);let Et;if(it)if(it.some(at=>at.route.lazy))Et=!1;else if(!it.some(at=>at.route.loader))Et=!0;else if(et.v7_partialHydration){let at=e.hydrationData?e.hydrationData.loaderData:null,dt=e.hydrationData?e.hydrationData.errors:null;if(dt){let mt=it.findIndex(xt=>dt[xt.route.id]!==void 0);Et=it.slice(0,mt+1).every(xt=>!shouldLoadRouteOnHydration(xt.route,at,dt))}else Et=it.every(mt=>!shouldLoadRouteOnHydration(mt.route,at,dt))}else Et=e.hydrationData!=null;else if(Et=!1,it=[],et.v7_partialHydration){let at=Dn(null,h,e.history.location.pathname);at.active&&at.matches&&(st=!0,it=at.matches)}let Ct,ct={historyAction:e.history.action,location:e.history.location,matches:it,initialized:Et,navigation:IDLE_NAVIGATION,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||yt,fetchers:new Map,blockers:new Map},_t=Action.Pop,Lt=!1,kt,zt=!1,Wt=new Map,qt=null,Jt=!1,ln=!1,pn=[],hn=new Set,wt=new Map,jt=0,Mt=-1,It=new Map,Dt=new Set,sn=new Map,on=new Map,en=new Set,tn=new Map,an=new Map,fn;function Cn(){if(rt=e.history.listen(at=>{let{action:dt,location:mt,delta:xt}=at;if(fn){fn(),fn=void 0;return}warning(an.size===0||xt!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let St=Yn({currentLocation:ct.location,nextLocation:mt,historyAction:dt});if(St&&xt!=null){let At=new Promise(Nt=>{fn=Nt});e.history.go(xt*-1),Nn(St,{state:"blocked",location:mt,proceed(){Nn(St,{state:"proceeding",proceed:void 0,reset:void 0,location:mt}),At.then(()=>e.history.go(xt))},reset(){let Nt=new Map(ct.blockers);Nt.set(St,IDLE_BLOCKER),nn({blockers:Nt})}});return}return gn(dt,mt)}),a){restoreAppliedTransitions(o,Wt);let at=()=>persistAppliedTransitions(o,Wt);o.addEventListener("pagehide",at),qt=()=>o.removeEventListener("pagehide",at)}return ct.initialized||gn(Action.Pop,ct.location,{initialHydration:!0}),Ct}function Ln(){rt&&rt(),qt&&qt(),ot.clear(),kt&&kt.abort(),ct.fetchers.forEach((at,dt)=>ut(dt)),ct.blockers.forEach((at,dt)=>Ht(dt))}function Un(at){return ot.add(at),()=>ot.delete(at)}function nn(at,dt){dt===void 0&&(dt={}),ct=_extends$2({},ct,at);let mt=[],xt=[];et.v7_fetcherPersist&&ct.fetchers.forEach((St,At)=>{St.state==="idle"&&(en.has(At)?xt.push(At):mt.push(At))}),en.forEach(St=>{!ct.fetchers.has(St)&&!wt.has(St)&&xt.push(St)}),[...ot].forEach(St=>St(ct,{deletedFetchers:xt,viewTransitionOpts:dt.viewTransitionOpts,flushSync:dt.flushSync===!0})),et.v7_fetcherPersist?(mt.forEach(St=>ct.fetchers.delete(St)),xt.forEach(St=>ut(St))):xt.forEach(St=>en.delete(St))}function cn(at,dt,mt){var xt,St;let{flushSync:At}=mt===void 0?{}:mt,Nt=ct.actionData!=null&&ct.navigation.formMethod!=null&&isMutationMethod(ct.navigation.formMethod)&&ct.navigation.state==="loading"&&((xt=at.state)==null?void 0:xt._isRedirect)!==!0,Pt;dt.actionData?Object.keys(dt.actionData).length>0?Pt=dt.actionData:Pt=null:Nt?Pt=ct.actionData:Pt=null;let Tt=dt.loaderData?mergeLoaderData(ct.loaderData,dt.loaderData,dt.matches||[],dt.errors):ct.loaderData,Rt=ct.blockers;Rt.size>0&&(Rt=new Map(Rt),Rt.forEach((Bt,rn)=>Rt.set(rn,IDLE_BLOCKER)));let bt=Lt===!0||ct.navigation.formMethod!=null&&isMutationMethod(ct.navigation.formMethod)&&((St=at.state)==null?void 0:St._isRedirect)!==!0;g&&(h=g,g=void 0),Jt||_t===Action.Pop||(_t===Action.Push?e.history.push(at,at.state):_t===Action.Replace&&e.history.replace(at,at.state));let Ot;if(_t===Action.Pop){let Bt=Wt.get(ct.location.pathname);Bt&&Bt.has(at.pathname)?Ot={currentLocation:ct.location,nextLocation:at}:Wt.has(at.pathname)&&(Ot={currentLocation:at,nextLocation:ct.location})}else if(zt){let Bt=Wt.get(ct.location.pathname);Bt?Bt.add(at.pathname):(Bt=new Set([at.pathname]),Wt.set(ct.location.pathname,Bt)),Ot={currentLocation:ct.location,nextLocation:at}}nn(_extends$2({},dt,{actionData:Pt,loaderData:Tt,historyAction:_t,location:at,initialized:!0,navigation:IDLE_NAVIGATION,revalidation:"idle",restoreScrollPosition:Kn(at,dt.matches||ct.matches),preventScrollReset:bt,blockers:Rt}),{viewTransitionOpts:Ot,flushSync:At===!0}),_t=Action.Pop,Lt=!1,zt=!1,Jt=!1,ln=!1,pn=[]}async function xn(at,dt){if(typeof at=="number"){e.history.go(at);return}let mt=normalizeTo(ct.location,ct.matches,b,et.v7_prependBasename,at,et.v7_relativeSplatPath,dt==null?void 0:dt.fromRouteId,dt==null?void 0:dt.relative),{path:xt,submission:St,error:At}=normalizeNavigateOptions(et.v7_normalizeFormMethod,!1,mt,dt),Nt=ct.location,Pt=createLocation(ct.location,xt,dt&&dt.state);Pt=_extends$2({},Pt,e.history.encodeLocation(Pt));let Tt=dt&&dt.replace!=null?dt.replace:void 0,Rt=Action.Push;Tt===!0?Rt=Action.Replace:Tt===!1||St!=null&&isMutationMethod(St.formMethod)&&St.formAction===ct.location.pathname+ct.location.search&&(Rt=Action.Replace);let bt=dt&&"preventScrollReset"in dt?dt.preventScrollReset===!0:void 0,Ot=(dt&&dt.flushSync)===!0,Bt=Yn({currentLocation:Nt,nextLocation:Pt,historyAction:Rt});if(Bt){Nn(Bt,{state:"blocked",location:Pt,proceed(){Nn(Bt,{state:"proceeding",proceed:void 0,reset:void 0,location:Pt}),xn(at,dt)},reset(){let rn=new Map(ct.blockers);rn.set(Bt,IDLE_BLOCKER),nn({blockers:rn})}});return}return await gn(Rt,Pt,{submission:St,pendingError:At,preventScrollReset:bt,replace:dt&&dt.replace,enableViewTransition:dt&&dt.viewTransition,flushSync:Ot})}function $n(){if(_e(),nn({revalidation:"loading"}),ct.navigation.state!=="submitting"){if(ct.navigation.state==="idle"){gn(ct.historyAction,ct.location,{startUninterruptedRevalidation:!0});return}gn(_t||ct.historyAction,ct.navigation.location,{overrideNavigation:ct.navigation,enableViewTransition:zt===!0})}}async function gn(at,dt,mt){kt&&kt.abort(),kt=null,_t=at,Jt=(mt&&mt.startUninterruptedRevalidation)===!0,qn(ct.location,ct.matches),Lt=(mt&&mt.preventScrollReset)===!0,zt=(mt&&mt.enableViewTransition)===!0;let xt=g||h,St=mt&&mt.overrideNavigation,At=mt!=null&&mt.initialHydration&&ct.matches&&ct.matches.length>0&&!st?ct.matches:matchRoutes(xt,dt,b),Nt=(mt&&mt.flushSync)===!0;if(At&&ct.initialized&&!ln&&isHashChangeOnly(ct.location,dt)&&!(mt&&mt.submission&&isMutationMethod(mt.submission.formMethod))){cn(dt,{matches:At},{flushSync:Nt});return}let Pt=Dn(At,xt,dt.pathname);if(Pt.active&&Pt.matches&&(At=Pt.matches),!At){let{error:Yt,notFoundMatches:$t,route:Qt}=Hn(dt.pathname);cn(dt,{matches:$t,loaderData:{},errors:{[Qt.id]:Yt}},{flushSync:Nt});return}kt=new AbortController;let Tt=createClientSideRequest(e.history,dt,kt.signal,mt&&mt.submission),Rt;if(mt&&mt.pendingError)Rt=[findNearestBoundary(At).route.id,{type:ResultType.error,error:mt.pendingError}];else if(mt&&mt.submission&&isMutationMethod(mt.submission.formMethod)){let Yt=await Rn(Tt,dt,mt.submission,At,Pt.active,{replace:mt.replace,flushSync:Nt});if(Yt.shortCircuited)return;if(Yt.pendingActionResult){let[$t,Qt]=Yt.pendingActionResult;if(isErrorResult(Qt)&&isRouteErrorResponse(Qt.error)&&Qt.error.status===404){kt=null,cn(dt,{matches:Yt.matches,loaderData:{},errors:{[$t]:Qt.error}});return}}At=Yt.matches||At,Rt=Yt.pendingActionResult,St=getLoadingNavigation(dt,mt.submission),Nt=!1,Pt.active=!1,Tt=createClientSideRequest(e.history,Tt.url,Tt.signal)}let{shortCircuited:bt,matches:Ot,loaderData:Bt,errors:rn}=await zn(Tt,dt,At,Pt.active,St,mt&&mt.submission,mt&&mt.fetcherSubmission,mt&&mt.replace,mt&&mt.initialHydration===!0,Nt,Rt);bt||(kt=null,cn(dt,_extends$2({matches:Ot||At},getActionDataForCommit(Rt),{loaderData:Bt,errors:rn})))}async function Rn(at,dt,mt,xt,St,At){At===void 0&&(At={}),_e();let Nt=getSubmittingNavigation(dt,mt);if(nn({navigation:Nt},{flushSync:At.flushSync===!0}),St){let Rt=await On(xt,dt.pathname,at.signal);if(Rt.type==="aborted")return{shortCircuited:!0};if(Rt.type==="error"){let bt=findNearestBoundary(Rt.partialMatches).route.id;return{matches:Rt.partialMatches,pendingActionResult:[bt,{type:ResultType.error,error:Rt.error}]}}else if(Rt.matches)xt=Rt.matches;else{let{notFoundMatches:bt,error:Ot,route:Bt}=Hn(dt.pathname);return{matches:bt,pendingActionResult:[Bt.id,{type:ResultType.error,error:Ot}]}}}let Pt,Tt=getTargetMatch(xt,dt);if(!Tt.route.action&&!Tt.route.lazy)Pt={type:ResultType.error,error:getInternalRouterError(405,{method:at.method,pathname:dt.pathname,routeId:Tt.route.id})};else if(Pt=(await un("action",ct,at,[Tt],xt,null))[Tt.route.id],at.signal.aborted)return{shortCircuited:!0};if(isRedirectResult(Pt)){let Rt;return At&&At.replace!=null?Rt=At.replace:Rt=normalizeRedirectLocation(Pt.response.headers.get("Location"),new URL(at.url),b,e.history)===ct.location.pathname+ct.location.search,await yn(at,Pt,!0,{submission:mt,replace:Rt}),{shortCircuited:!0}}if(isDeferredResult(Pt))throw getInternalRouterError(400,{type:"defer-action"});if(isErrorResult(Pt)){let Rt=findNearestBoundary(xt,Tt.route.id);return(At&&At.replace)!==!0&&(_t=Action.Push),{matches:xt,pendingActionResult:[Rt.route.id,Pt]}}return{matches:xt,pendingActionResult:[Tt.route.id,Pt]}}async function zn(at,dt,mt,xt,St,At,Nt,Pt,Tt,Rt,bt){let Ot=St||getLoadingNavigation(dt,At),Bt=At||Nt||getSubmissionFromNavigation(Ot),rn=!Jt&&(!et.v7_partialHydration||!Tt);if(xt){if(rn){let Xt=jn(bt);nn(_extends$2({navigation:Ot},Xt!==void 0?{actionData:Xt}:{}),{flushSync:Rt})}let Ut=await On(mt,dt.pathname,at.signal);if(Ut.type==="aborted")return{shortCircuited:!0};if(Ut.type==="error"){let Xt=findNearestBoundary(Ut.partialMatches).route.id;return{matches:Ut.partialMatches,loaderData:{},errors:{[Xt]:Ut.error}}}else if(Ut.matches)mt=Ut.matches;else{let{error:Xt,notFoundMatches:Sn,route:An}=Hn(dt.pathname);return{matches:Sn,loaderData:{},errors:{[An.id]:Xt}}}}let Yt=g||h,[$t,Qt]=getMatchesToLoad(e.history,ct,mt,Bt,dt,et.v7_partialHydration&&Tt===!0,et.v7_skipActionErrorRevalidation,ln,pn,hn,en,sn,Dt,Yt,b,bt);if(Wn(Ut=>!(mt&&mt.some(Xt=>Xt.route.id===Ut))||$t&&$t.some(Xt=>Xt.route.id===Ut)),Mt=++jt,$t.length===0&&Qt.length===0){let Ut=Gt();return cn(dt,_extends$2({matches:mt,loaderData:{},errors:bt&&isErrorResult(bt[1])?{[bt[0]]:bt[1].error}:null},getActionDataForCommit(bt),Ut?{fetchers:new Map(ct.fetchers)}:{}),{flushSync:Rt}),{shortCircuited:!0}}if(rn){let Ut={};if(!xt){Ut.navigation=Ot;let Xt=jn(bt);Xt!==void 0&&(Ut.actionData=Xt)}Qt.length>0&&(Ut.fetchers=In(Qt)),nn(Ut,{flushSync:Rt})}Qt.forEach(Ut=>{gt(Ut.key),Ut.controller&&wt.set(Ut.key,Ut.controller)});let wn=()=>Qt.forEach(Ut=>gt(Ut.key));kt&&kt.signal.addEventListener("abort",wn);let{loaderResults:Tn,fetcherResults:vn}=await Mn(ct,mt,$t,Qt,at);if(at.signal.aborted)return{shortCircuited:!0};kt&&kt.signal.removeEventListener("abort",wn),Qt.forEach(Ut=>wt.delete(Ut.key));let mn=findRedirect(Tn);if(mn)return await yn(at,mn.result,!0,{replace:Pt}),{shortCircuited:!0};if(mn=findRedirect(vn),mn)return Dt.add(mn.key),await yn(at,mn.result,!0,{replace:Pt}),{shortCircuited:!0};let{loaderData:Vn,errors:bn}=processLoaderData(ct,mt,Tn,bt,Qt,vn,tn);tn.forEach((Ut,Xt)=>{Ut.subscribe(Sn=>{(Sn||Ut.done)&&tn.delete(Xt)})}),et.v7_partialHydration&&Tt&&ct.errors&&(bn=_extends$2({},ct.errors,bn));let _n=Gt(),Fn=Vt(Mt),Bn=_n||Fn||Qt.length>0;return _extends$2({matches:mt,loaderData:Vn,errors:bn},Bn?{fetchers:new Map(ct.fetchers)}:{})}function jn(at){if(at&&!isErrorResult(at[1]))return{[at[0]]:at[1].data};if(ct.actionData)return Object.keys(ct.actionData).length===0?null:ct.actionData}function In(at){return at.forEach(dt=>{let mt=ct.fetchers.get(dt.key),xt=getLoadingFetcher(void 0,mt?mt.data:void 0);ct.fetchers.set(dt.key,xt)}),new Map(ct.fetchers)}function En(at,dt,mt,xt){if(s)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");gt(at);let St=(xt&&xt.flushSync)===!0,At=g||h,Nt=normalizeTo(ct.location,ct.matches,b,et.v7_prependBasename,mt,et.v7_relativeSplatPath,dt,xt==null?void 0:xt.relative),Pt=matchRoutes(At,Nt,b),Tt=Dn(Pt,At,Nt);if(Tt.active&&Tt.matches&&(Pt=Tt.matches),!Pt){j(at,dt,getInternalRouterError(404,{pathname:Nt}),{flushSync:St});return}let{path:Rt,submission:bt,error:Ot}=normalizeNavigateOptions(et.v7_normalizeFormMethod,!0,Nt,xt);if(Ot){j(at,dt,Ot,{flushSync:St});return}let Bt=getTargetMatch(Pt,Rt),rn=(xt&&xt.preventScrollReset)===!0;if(bt&&isMutationMethod(bt.formMethod)){dn(at,dt,Rt,Bt,Pt,Tt.active,St,rn,bt);return}sn.set(at,{routeId:dt,path:Rt}),Pn(at,dt,Rt,Bt,Pt,Tt.active,St,rn,bt)}async function dn(at,dt,mt,xt,St,At,Nt,Pt,Tt){_e(),sn.delete(at);function Rt(Zt){if(!Zt.route.action&&!Zt.route.lazy){let kn=getInternalRouterError(405,{method:Tt.formMethod,pathname:mt,routeId:dt});return j(at,dt,kn,{flushSync:Nt}),!0}return!1}if(!At&&Rt(xt))return;let bt=ct.fetchers.get(at);_(at,getSubmittingFetcher(Tt,bt),{flushSync:Nt});let Ot=new AbortController,Bt=createClientSideRequest(e.history,mt,Ot.signal,Tt);if(At){let Zt=await On(St,new URL(Bt.url).pathname,Bt.signal,at);if(Zt.type==="aborted")return;if(Zt.type==="error"){j(at,dt,Zt.error,{flushSync:Nt});return}else if(Zt.matches){if(St=Zt.matches,xt=getTargetMatch(St,mt),Rt(xt))return}else{j(at,dt,getInternalRouterError(404,{pathname:mt}),{flushSync:Nt});return}}wt.set(at,Ot);let rn=jt,$t=(await un("action",ct,Bt,[xt],St,at))[xt.route.id];if(Bt.signal.aborted){wt.get(at)===Ot&&wt.delete(at);return}if(et.v7_fetcherPersist&&en.has(at)){if(isRedirectResult($t)||isErrorResult($t)){_(at,getDoneFetcher(void 0));return}}else{if(isRedirectResult($t))if(wt.delete(at),Mt>rn){_(at,getDoneFetcher(void 0));return}else return Dt.add(at),_(at,getLoadingFetcher(Tt)),yn(Bt,$t,!1,{fetcherSubmission:Tt,preventScrollReset:Pt});if(isErrorResult($t)){j(at,dt,$t.error);return}}if(isDeferredResult($t))throw getInternalRouterError(400,{type:"defer-action"});let Qt=ct.navigation.location||ct.location,wn=createClientSideRequest(e.history,Qt,Ot.signal),Tn=g||h,vn=ct.navigation.state!=="idle"?matchRoutes(Tn,ct.navigation.location,b):ct.matches;invariant(vn,"Didn't find any matches after fetcher action");let mn=++jt;It.set(at,mn);let Vn=getLoadingFetcher(Tt,$t.data);ct.fetchers.set(at,Vn);let[bn,_n]=getMatchesToLoad(e.history,ct,vn,Tt,Qt,!1,et.v7_skipActionErrorRevalidation,ln,pn,hn,en,sn,Dt,Tn,b,[xt.route.id,$t]);_n.filter(Zt=>Zt.key!==at).forEach(Zt=>{let kn=Zt.key,Qn=ct.fetchers.get(kn),er=getLoadingFetcher(void 0,Qn?Qn.data:void 0);ct.fetchers.set(kn,er),gt(kn),Zt.controller&&wt.set(kn,Zt.controller)}),nn({fetchers:new Map(ct.fetchers)});let Fn=()=>_n.forEach(Zt=>gt(Zt.key));Ot.signal.addEventListener("abort",Fn);let{loaderResults:Bn,fetcherResults:Ut}=await Mn(ct,vn,bn,_n,wn);if(Ot.signal.aborted)return;Ot.signal.removeEventListener("abort",Fn),It.delete(at),wt.delete(at),_n.forEach(Zt=>wt.delete(Zt.key));let Xt=findRedirect(Bn);if(Xt)return yn(wn,Xt.result,!1,{preventScrollReset:Pt});if(Xt=findRedirect(Ut),Xt)return Dt.add(Xt.key),yn(wn,Xt.result,!1,{preventScrollReset:Pt});let{loaderData:Sn,errors:An}=processLoaderData(ct,vn,Bn,void 0,_n,Ut,tn);if(ct.fetchers.has(at)){let Zt=getDoneFetcher($t.data);ct.fetchers.set(at,Zt)}Vt(mn),ct.navigation.state==="loading"&&mn>Mt?(invariant(_t,"Expected pending action"),kt&&kt.abort(),cn(ct.navigation.location,{matches:vn,loaderData:Sn,errors:An,fetchers:new Map(ct.fetchers)})):(nn({errors:An,loaderData:mergeLoaderData(ct.loaderData,Sn,vn,An),fetchers:new Map(ct.fetchers)}),ln=!1)}async function Pn(at,dt,mt,xt,St,At,Nt,Pt,Tt){let Rt=ct.fetchers.get(at);_(at,getLoadingFetcher(Tt,Rt?Rt.data:void 0),{flushSync:Nt});let bt=new AbortController,Ot=createClientSideRequest(e.history,mt,bt.signal);if(At){let $t=await On(St,new URL(Ot.url).pathname,Ot.signal,at);if($t.type==="aborted")return;if($t.type==="error"){j(at,dt,$t.error,{flushSync:Nt});return}else if($t.matches)St=$t.matches,xt=getTargetMatch(St,mt);else{j(at,dt,getInternalRouterError(404,{pathname:mt}),{flushSync:Nt});return}}wt.set(at,bt);let Bt=jt,Yt=(await un("loader",ct,Ot,[xt],St,at))[xt.route.id];if(isDeferredResult(Yt)&&(Yt=await resolveDeferredData(Yt,Ot.signal,!0)||Yt),wt.get(at)===bt&&wt.delete(at),!Ot.signal.aborted){if(en.has(at)){_(at,getDoneFetcher(void 0));return}if(isRedirectResult(Yt))if(Mt>Bt){_(at,getDoneFetcher(void 0));return}else{Dt.add(at),await yn(Ot,Yt,!1,{preventScrollReset:Pt});return}if(isErrorResult(Yt)){j(at,dt,Yt.error);return}invariant(!isDeferredResult(Yt),"Unhandled fetcher deferred data"),_(at,getDoneFetcher(Yt.data))}}async function yn(at,dt,mt,xt){let{submission:St,fetcherSubmission:At,preventScrollReset:Nt,replace:Pt}=xt===void 0?{}:xt;dt.response.headers.has("X-Remix-Revalidate")&&(ln=!0);let Tt=dt.response.headers.get("Location");invariant(Tt,"Expected a Location header on the redirect Response"),Tt=normalizeRedirectLocation(Tt,new URL(at.url),b,e.history);let Rt=createLocation(ct.location,Tt,{_isRedirect:!0});if(a){let $t=!1;if(dt.response.headers.has("X-Remix-Reload-Document"))$t=!0;else if(ABSOLUTE_URL_REGEX$2.test(Tt)){const Qt=e.history.createURL(Tt);$t=Qt.origin!==o.location.origin||stripBasename(Qt.pathname,b)==null}if($t){Pt?o.location.replace(Tt):o.location.assign(Tt);return}}kt=null;let bt=Pt===!0||dt.response.headers.has("X-Remix-Replace")?Action.Replace:Action.Push,{formMethod:Ot,formAction:Bt,formEncType:rn}=ct.navigation;!St&&!At&&Ot&&Bt&&rn&&(St=getSubmissionFromNavigation(ct.navigation));let Yt=St||At;if(redirectPreserveMethodStatusCodes.has(dt.response.status)&&Yt&&isMutationMethod(Yt.formMethod))await gn(bt,Rt,{submission:_extends$2({},Yt,{formAction:Tt}),preventScrollReset:Nt||Lt,enableViewTransition:mt?zt:void 0});else{let $t=getLoadingNavigation(Rt,St);await gn(bt,Rt,{overrideNavigation:$t,fetcherSubmission:At,preventScrollReset:Nt||Lt,enableViewTransition:mt?zt:void 0})}}async function un(at,dt,mt,xt,St,At){let Nt,Pt={};try{Nt=await callDataStrategyImpl($,at,dt,mt,xt,St,At,d,c)}catch(Tt){return xt.forEach(Rt=>{Pt[Rt.route.id]={type:ResultType.error,error:Tt}}),Pt}for(let[Tt,Rt]of Object.entries(Nt))if(isRedirectDataStrategyResultResult(Rt)){let bt=Rt.result;Pt[Tt]={type:ResultType.redirect,response:normalizeRelativeRoutingRedirectResponse(bt,mt,Tt,St,b,et.v7_relativeSplatPath)}}else Pt[Tt]=await convertDataStrategyResultToDataResult(Rt);return Pt}async function Mn(at,dt,mt,xt,St){let At=at.matches,Nt=un("loader",at,St,mt,dt,null),Pt=Promise.all(xt.map(async bt=>{if(bt.matches&&bt.match&&bt.controller){let Bt=(await un("loader",at,createClientSideRequest(e.history,bt.path,bt.controller.signal),[bt.match],bt.matches,bt.key))[bt.match.route.id];return{[bt.key]:Bt}}else return Promise.resolve({[bt.key]:{type:ResultType.error,error:getInternalRouterError(404,{pathname:bt.path})}})})),Tt=await Nt,Rt=(await Pt).reduce((bt,Ot)=>Object.assign(bt,Ot),{});return await Promise.all([resolveNavigationDeferredResults(dt,Tt,St.signal,At,at.loaderData),resolveFetcherDeferredResults(dt,Rt,xt)]),{loaderResults:Tt,fetcherResults:Rt}}function _e(){ln=!0,pn.push(...Wn()),sn.forEach((at,dt)=>{wt.has(dt)&&hn.add(dt),gt(dt)})}function _(at,dt,mt){mt===void 0&&(mt={}),ct.fetchers.set(at,dt),nn({fetchers:new Map(ct.fetchers)},{flushSync:(mt&&mt.flushSync)===!0})}function j(at,dt,mt,xt){xt===void 0&&(xt={});let St=findNearestBoundary(ct.matches,dt);ut(at),nn({errors:{[St.route.id]:mt},fetchers:new Map(ct.fetchers)},{flushSync:(xt&&xt.flushSync)===!0})}function nt(at){return on.set(at,(on.get(at)||0)+1),en.has(at)&&en.delete(at),ct.fetchers.get(at)||IDLE_FETCHER}function ut(at){let dt=ct.fetchers.get(at);wt.has(at)&&!(dt&&dt.state==="loading"&&It.has(at))&&gt(at),sn.delete(at),It.delete(at),Dt.delete(at),et.v7_fetcherPersist&&en.delete(at),hn.delete(at),ct.fetchers.delete(at)}function ht(at){let dt=(on.get(at)||0)-1;dt<=0?(on.delete(at),en.add(at),et.v7_fetcherPersist||ut(at)):on.set(at,dt),nn({fetchers:new Map(ct.fetchers)})}function gt(at){let dt=wt.get(at);dt&&(dt.abort(),wt.delete(at))}function Ft(at){for(let dt of at){let mt=nt(dt),xt=getDoneFetcher(mt.data);ct.fetchers.set(dt,xt)}}function Gt(){let at=[],dt=!1;for(let mt of Dt){let xt=ct.fetchers.get(mt);invariant(xt,"Expected fetcher: "+mt),xt.state==="loading"&&(Dt.delete(mt),at.push(mt),dt=!0)}return Ft(at),dt}function Vt(at){let dt=[];for(let[mt,xt]of It)if(xt<at){let St=ct.fetchers.get(mt);invariant(St,"Expected fetcher: "+mt),St.state==="loading"&&(gt(mt),It.delete(mt),dt.push(mt))}return Ft(dt),dt.length>0}function Kt(at,dt){let mt=ct.blockers.get(at)||IDLE_BLOCKER;return an.get(at)!==dt&&an.set(at,dt),mt}function Ht(at){ct.blockers.delete(at),an.delete(at)}function Nn(at,dt){let mt=ct.blockers.get(at)||IDLE_BLOCKER;invariant(mt.state==="unblocked"&&dt.state==="blocked"||mt.state==="blocked"&&dt.state==="blocked"||mt.state==="blocked"&&dt.state==="proceeding"||mt.state==="blocked"&&dt.state==="unblocked"||mt.state==="proceeding"&&dt.state==="unblocked","Invalid blocker state transition: "+mt.state+" -> "+dt.state);let xt=new Map(ct.blockers);xt.set(at,dt),nn({blockers:xt})}function Yn(at){let{currentLocation:dt,nextLocation:mt,historyAction:xt}=at;if(an.size===0)return;an.size>1&&warning(!1,"A router only supports one blocker at a time");let St=Array.from(an.entries()),[At,Nt]=St[St.length-1],Pt=ct.blockers.get(At);if(!(Pt&&Pt.state==="proceeding")&&Nt({currentLocation:dt,nextLocation:mt,historyAction:xt}))return At}function Hn(at){let dt=getInternalRouterError(404,{pathname:at}),mt=g||h,{matches:xt,route:St}=getShortCircuitMatches(mt);return Wn(),{notFoundMatches:xt,route:St,error:dt}}function Wn(at){let dt=[];return tn.forEach((mt,xt)=>{(!at||at(xt))&&(mt.cancel(),dt.push(xt),tn.delete(xt))}),dt}function Xn(at,dt,mt){if(ft=at,vt=dt,pt=mt||null,!lt&&ct.navigation===IDLE_NAVIGATION){lt=!0;let xt=Kn(ct.location,ct.matches);xt!=null&&nn({restoreScrollPosition:xt})}return()=>{ft=null,vt=null,pt=null}}function Gn(at,dt){return pt&&pt(at,dt.map(xt=>convertRouteMatchToUiMatch(xt,ct.loaderData)))||at.key}function qn(at,dt){if(ft&&vt){let mt=Gn(at,dt);ft[mt]=vt()}}function Kn(at,dt){if(ft){let mt=Gn(at,dt),xt=ft[mt];if(typeof xt=="number")return xt}return null}function Dn(at,dt,mt){if(tt)if(at){if(Object.keys(at[0].params).length>0)return{active:!0,matches:matchRoutesImpl(dt,mt,b,!0)}}else return{active:!0,matches:matchRoutesImpl(dt,mt,b,!0)||[]};return{active:!1,matches:null}}async function On(at,dt,mt,xt){if(!tt)return{type:"success",matches:at};let St=at;for(;;){let At=g==null,Nt=g||h,Pt=d;try{await tt({signal:mt,path:dt,matches:St,fetcherKey:xt,patch:(bt,Ot)=>{mt.aborted||patchRoutesImpl(bt,Ot,Nt,Pt,c)}})}catch(bt){return{type:"error",error:bt,partialMatches:St}}finally{At&&!mt.aborted&&(h=[...h])}if(mt.aborted)return{type:"aborted"};let Tt=matchRoutes(Nt,dt,b);if(Tt)return{type:"success",matches:Tt};let Rt=matchRoutesImpl(Nt,dt,b,!0);if(!Rt||St.length===Rt.length&&St.every((bt,Ot)=>bt.route.id===Rt[Ot].route.id))return{type:"success",matches:null};St=Rt}}function Jn(at){d={},g=convertRoutesToDataRoutes(at,c,void 0,d)}function Zn(at,dt){let mt=g==null;patchRoutesImpl(at,dt,g||h,d,c),mt&&(h=[...h],nn({}))}return Ct={get basename(){return b},get future(){return et},get state(){return ct},get routes(){return h},get window(){return o},initialize:Cn,subscribe:Un,enableScrollRestoration:Xn,navigate:xn,fetch:En,revalidate:$n,createHref:at=>e.history.createHref(at),encodeLocation:at=>e.history.encodeLocation(at),getFetcher:nt,deleteFetcher:ht,dispose:Ln,getBlocker:Kt,deleteBlocker:Ht,patchRoutes:Zn,_internalFetchControllers:wt,_internalActiveDeferreds:tn,_internalSetRoutes:Jn},Ct}function isSubmissionNavigation(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function normalizeTo(e,o,a,s,c,d,h,g){let b,$;if(h){b=[];for(let et of o)if(b.push(et),et.route.id===h){$=et;break}}else b=o,$=o[o.length-1];let tt=resolveTo(c||".",getResolveToMatches(b,d),stripBasename(e.pathname,a)||e.pathname,g==="path");if(c==null&&(tt.search=e.search,tt.hash=e.hash),(c==null||c===""||c===".")&&$){let et=hasNakedIndexQuery(tt.search);if($.route.index&&!et)tt.search=tt.search?tt.search.replace(/^\?/,"?index&"):"?index";else if(!$.route.index&&et){let rt=new URLSearchParams(tt.search),ot=rt.getAll("index");rt.delete("index"),ot.filter(pt=>pt).forEach(pt=>rt.append("index",pt));let ft=rt.toString();tt.search=ft?"?"+ft:""}}return s&&a!=="/"&&(tt.pathname=tt.pathname==="/"?a:joinPaths([a,tt.pathname])),createPath(tt)}function normalizeNavigateOptions(e,o,a,s){if(!s||!isSubmissionNavigation(s))return{path:a};if(s.formMethod&&!isValidMethod(s.formMethod))return{path:a,error:getInternalRouterError(405,{method:s.formMethod})};let c=()=>({path:a,error:getInternalRouterError(400,{type:"invalid-body"})}),d=s.formMethod||"get",h=e?d.toUpperCase():d.toLowerCase(),g=stripHashFromPath(a);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!isMutationMethod(h))return c();let rt=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((ot,ft)=>{let[pt,vt]=ft;return""+ot+pt+"="+vt+`
`},""):String(s.body);return{path:a,submission:{formMethod:h,formAction:g,formEncType:s.formEncType,formData:void 0,json:void 0,text:rt}}}else if(s.formEncType==="application/json"){if(!isMutationMethod(h))return c();try{let rt=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:a,submission:{formMethod:h,formAction:g,formEncType:s.formEncType,formData:void 0,json:rt,text:void 0}}}catch{return c()}}}invariant(typeof FormData=="function","FormData is not available in this environment");let b,$;if(s.formData)b=convertFormDataToSearchParams(s.formData),$=s.formData;else if(s.body instanceof FormData)b=convertFormDataToSearchParams(s.body),$=s.body;else if(s.body instanceof URLSearchParams)b=s.body,$=convertSearchParamsToFormData(b);else if(s.body==null)b=new URLSearchParams,$=new FormData;else try{b=new URLSearchParams(s.body),$=convertSearchParamsToFormData(b)}catch{return c()}let tt={formMethod:h,formAction:g,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:$,json:void 0,text:void 0};if(isMutationMethod(tt.formMethod))return{path:a,submission:tt};let et=parsePath(a);return o&&et.search&&hasNakedIndexQuery(et.search)&&b.append("index",""),et.search="?"+b,{path:createPath(et),submission:tt}}function getLoaderMatchesUntilBoundary(e,o,a){a===void 0&&(a=!1);let s=e.findIndex(c=>c.route.id===o);return s>=0?e.slice(0,a?s+1:s):e}function getMatchesToLoad(e,o,a,s,c,d,h,g,b,$,tt,et,rt,ot,ft,pt){let vt=pt?isErrorResult(pt[1])?pt[1].error:pt[1].data:void 0,lt=e.createURL(o.location),it=e.createURL(c),st=a;d&&o.errors?st=getLoaderMatchesUntilBoundary(a,Object.keys(o.errors)[0],!0):pt&&isErrorResult(pt[1])&&(st=getLoaderMatchesUntilBoundary(a,pt[0]));let yt=pt?pt[1].statusCode:void 0,Et=h&&yt&&yt>=400,Ct=st.filter((_t,Lt)=>{let{route:kt}=_t;if(kt.lazy)return!0;if(kt.loader==null)return!1;if(d)return shouldLoadRouteOnHydration(kt,o.loaderData,o.errors);if(isNewLoader(o.loaderData,o.matches[Lt],_t)||b.some(qt=>qt===_t.route.id))return!0;let zt=o.matches[Lt],Wt=_t;return shouldRevalidateLoader(_t,_extends$2({currentUrl:lt,currentParams:zt.params,nextUrl:it,nextParams:Wt.params},s,{actionResult:vt,actionStatus:yt,defaultShouldRevalidate:Et?!1:g||lt.pathname+lt.search===it.pathname+it.search||lt.search!==it.search||isNewRouteInstance(zt,Wt)}))}),ct=[];return et.forEach((_t,Lt)=>{if(d||!a.some(Jt=>Jt.route.id===_t.routeId)||tt.has(Lt))return;let kt=matchRoutes(ot,_t.path,ft);if(!kt){ct.push({key:Lt,routeId:_t.routeId,path:_t.path,matches:null,match:null,controller:null});return}let zt=o.fetchers.get(Lt),Wt=getTargetMatch(kt,_t.path),qt=!1;rt.has(Lt)?qt=!1:$.has(Lt)?($.delete(Lt),qt=!0):zt&&zt.state!=="idle"&&zt.data===void 0?qt=g:qt=shouldRevalidateLoader(Wt,_extends$2({currentUrl:lt,currentParams:o.matches[o.matches.length-1].params,nextUrl:it,nextParams:a[a.length-1].params},s,{actionResult:vt,actionStatus:yt,defaultShouldRevalidate:Et?!1:g})),qt&&ct.push({key:Lt,routeId:_t.routeId,path:_t.path,matches:kt,match:Wt,controller:new AbortController})}),[Ct,ct]}function shouldLoadRouteOnHydration(e,o,a){if(e.lazy)return!0;if(!e.loader)return!1;let s=o!=null&&o[e.id]!==void 0,c=a!=null&&a[e.id]!==void 0;return!s&&c?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!s&&!c}function isNewLoader(e,o,a){let s=!o||a.route.id!==o.route.id,c=e[a.route.id]===void 0;return s||c}function isNewRouteInstance(e,o){let a=e.route.path;return e.pathname!==o.pathname||a!=null&&a.endsWith("*")&&e.params["*"]!==o.params["*"]}function shouldRevalidateLoader(e,o){if(e.route.shouldRevalidate){let a=e.route.shouldRevalidate(o);if(typeof a=="boolean")return a}return o.defaultShouldRevalidate}function patchRoutesImpl(e,o,a,s,c){var d;let h;if(e){let $=s[e];invariant($,"No route found to patch children into: routeId = "+e),$.children||($.children=[]),h=$.children}else h=a;let g=o.filter($=>!h.some(tt=>isSameRoute($,tt))),b=convertRoutesToDataRoutes(g,c,[e||"_","patch",String(((d=h)==null?void 0:d.length)||"0")],s);h.push(...b)}function isSameRoute(e,o){return"id"in e&&"id"in o&&e.id===o.id?!0:e.index===o.index&&e.path===o.path&&e.caseSensitive===o.caseSensitive?(!e.children||e.children.length===0)&&(!o.children||o.children.length===0)?!0:e.children.every((a,s)=>{var c;return(c=o.children)==null?void 0:c.some(d=>isSameRoute(a,d))}):!1}async function loadLazyRouteModule(e,o,a){if(!e.lazy)return;let s=await e.lazy();if(!e.lazy)return;let c=a[e.id];invariant(c,"No route found in manifest");let d={};for(let h in s){let b=c[h]!==void 0&&h!=="hasErrorBoundary";warning(!b,'Route "'+c.id+'" has a static property "'+h+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+h+'" will be ignored.')),!b&&!immutableRouteKeys.has(h)&&(d[h]=s[h])}Object.assign(c,d),Object.assign(c,_extends$2({},o(c),{lazy:void 0}))}async function defaultDataStrategy(e){let{matches:o}=e,a=o.filter(c=>c.shouldLoad);return(await Promise.all(a.map(c=>c.resolve()))).reduce((c,d,h)=>Object.assign(c,{[a[h].route.id]:d}),{})}async function callDataStrategyImpl(e,o,a,s,c,d,h,g,b,$){let tt=d.map(ot=>ot.route.lazy?loadLazyRouteModule(ot.route,b,g):void 0),et=d.map((ot,ft)=>{let pt=tt[ft],vt=c.some(it=>it.route.id===ot.route.id);return _extends$2({},ot,{shouldLoad:vt,resolve:async it=>(it&&s.method==="GET"&&(ot.route.lazy||ot.route.loader)&&(vt=!0),vt?callLoaderOrAction(o,s,ot,pt,it,$):Promise.resolve({type:ResultType.data,result:void 0}))})}),rt=await e({matches:et,request:s,params:d[0].params,fetcherKey:h,context:$});try{await Promise.all(tt)}catch{}return rt}async function callLoaderOrAction(e,o,a,s,c,d){let h,g,b=$=>{let tt,et=new Promise((ft,pt)=>tt=pt);g=()=>tt(),o.signal.addEventListener("abort",g);let rt=ft=>typeof $!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+a.route.id+"]"))):$({request:o,params:a.params,context:d},...ft!==void 0?[ft]:[]),ot=(async()=>{try{return{type:"data",result:await(c?c(pt=>rt(pt)):rt())}}catch(ft){return{type:"error",result:ft}}})();return Promise.race([ot,et])};try{let $=a.route[e];if(s)if($){let tt,[et]=await Promise.all([b($).catch(rt=>{tt=rt}),s]);if(tt!==void 0)throw tt;h=et}else if(await s,$=a.route[e],$)h=await b($);else if(e==="action"){let tt=new URL(o.url),et=tt.pathname+tt.search;throw getInternalRouterError(405,{method:o.method,pathname:et,routeId:a.route.id})}else return{type:ResultType.data,result:void 0};else if($)h=await b($);else{let tt=new URL(o.url),et=tt.pathname+tt.search;throw getInternalRouterError(404,{pathname:et})}invariant(h.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+a.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch($){return{type:ResultType.error,result:$}}finally{g&&o.signal.removeEventListener("abort",g)}return h}async function convertDataStrategyResultToDataResult(e){let{result:o,type:a}=e;if(isResponse(o)){let et;try{let rt=o.headers.get("Content-Type");rt&&/\bapplication\/json\b/.test(rt)?o.body==null?et=null:et=await o.json():et=await o.text()}catch(rt){return{type:ResultType.error,error:rt}}return a===ResultType.error?{type:ResultType.error,error:new ErrorResponseImpl(o.status,o.statusText,et),statusCode:o.status,headers:o.headers}:{type:ResultType.data,data:et,statusCode:o.status,headers:o.headers}}if(a===ResultType.error){if(isDataWithResponseInit(o)){var s,c;if(o.data instanceof Error){var d,h;return{type:ResultType.error,error:o.data,statusCode:(d=o.init)==null?void 0:d.status,headers:(h=o.init)!=null&&h.headers?new Headers(o.init.headers):void 0}}return{type:ResultType.error,error:new ErrorResponseImpl(((s=o.init)==null?void 0:s.status)||500,void 0,o.data),statusCode:isRouteErrorResponse(o)?o.status:void 0,headers:(c=o.init)!=null&&c.headers?new Headers(o.init.headers):void 0}}return{type:ResultType.error,error:o,statusCode:isRouteErrorResponse(o)?o.status:void 0}}if(isDeferredData(o)){var g,b;return{type:ResultType.deferred,deferredData:o,statusCode:(g=o.init)==null?void 0:g.status,headers:((b=o.init)==null?void 0:b.headers)&&new Headers(o.init.headers)}}if(isDataWithResponseInit(o)){var $,tt;return{type:ResultType.data,data:o.data,statusCode:($=o.init)==null?void 0:$.status,headers:(tt=o.init)!=null&&tt.headers?new Headers(o.init.headers):void 0}}return{type:ResultType.data,data:o}}function normalizeRelativeRoutingRedirectResponse(e,o,a,s,c,d){let h=e.headers.get("Location");if(invariant(h,"Redirects returned/thrown from loaders/actions must have a Location header"),!ABSOLUTE_URL_REGEX$2.test(h)){let g=s.slice(0,s.findIndex(b=>b.route.id===a)+1);h=normalizeTo(new URL(o.url),g,c,!0,h,d),e.headers.set("Location",h)}return e}function normalizeRedirectLocation(e,o,a,s){let c=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(ABSOLUTE_URL_REGEX$2.test(e)){let d=e,h=d.startsWith("//")?new URL(o.protocol+d):new URL(d);if(c.includes(h.protocol))throw new Error("Invalid redirect location");let g=stripBasename(h.pathname,a)!=null;if(h.origin===o.origin&&g)return h.pathname+h.search+h.hash}try{let d=s.createURL(e);if(c.includes(d.protocol))throw new Error("Invalid redirect location")}catch{}return e}function createClientSideRequest(e,o,a,s){let c=e.createURL(stripHashFromPath(o)).toString(),d={signal:a};if(s&&isMutationMethod(s.formMethod)){let{formMethod:h,formEncType:g}=s;d.method=h.toUpperCase(),g==="application/json"?(d.headers=new Headers({"Content-Type":g}),d.body=JSON.stringify(s.json)):g==="text/plain"?d.body=s.text:g==="application/x-www-form-urlencoded"&&s.formData?d.body=convertFormDataToSearchParams(s.formData):d.body=s.formData}return new Request(c,d)}function convertFormDataToSearchParams(e){let o=new URLSearchParams;for(let[a,s]of e.entries())o.append(a,typeof s=="string"?s:s.name);return o}function convertSearchParamsToFormData(e){let o=new FormData;for(let[a,s]of e.entries())o.append(a,s);return o}function processRouteLoaderData(e,o,a,s,c){let d={},h=null,g,b=!1,$={},tt=a&&isErrorResult(a[1])?a[1].error:void 0;return e.forEach(et=>{if(!(et.route.id in o))return;let rt=et.route.id,ot=o[rt];if(invariant(!isRedirectResult(ot),"Cannot handle redirect results in processLoaderData"),isErrorResult(ot)){let ft=ot.error;tt!==void 0&&(ft=tt,tt=void 0),h=h||{};{let pt=findNearestBoundary(e,rt);h[pt.route.id]==null&&(h[pt.route.id]=ft)}d[rt]=void 0,b||(b=!0,g=isRouteErrorResponse(ot.error)?ot.error.status:500),ot.headers&&($[rt]=ot.headers)}else isDeferredResult(ot)?(s.set(rt,ot.deferredData),d[rt]=ot.deferredData.data,ot.statusCode!=null&&ot.statusCode!==200&&!b&&(g=ot.statusCode),ot.headers&&($[rt]=ot.headers)):(d[rt]=ot.data,ot.statusCode&&ot.statusCode!==200&&!b&&(g=ot.statusCode),ot.headers&&($[rt]=ot.headers))}),tt!==void 0&&a&&(h={[a[0]]:tt},d[a[0]]=void 0),{loaderData:d,errors:h,statusCode:g||200,loaderHeaders:$}}function processLoaderData(e,o,a,s,c,d,h){let{loaderData:g,errors:b}=processRouteLoaderData(o,a,s,h);return c.forEach($=>{let{key:tt,match:et,controller:rt}=$,ot=d[tt];if(invariant(ot,"Did not find corresponding fetcher result"),!(rt&&rt.signal.aborted))if(isErrorResult(ot)){let ft=findNearestBoundary(e.matches,et==null?void 0:et.route.id);b&&b[ft.route.id]||(b=_extends$2({},b,{[ft.route.id]:ot.error})),e.fetchers.delete(tt)}else if(isRedirectResult(ot))invariant(!1,"Unhandled fetcher revalidation redirect");else if(isDeferredResult(ot))invariant(!1,"Unhandled fetcher deferred data");else{let ft=getDoneFetcher(ot.data);e.fetchers.set(tt,ft)}}),{loaderData:g,errors:b}}function mergeLoaderData(e,o,a,s){let c=_extends$2({},o);for(let d of a){let h=d.route.id;if(o.hasOwnProperty(h)?o[h]!==void 0&&(c[h]=o[h]):e[h]!==void 0&&d.route.loader&&(c[h]=e[h]),s&&s.hasOwnProperty(h))break}return c}function getActionDataForCommit(e){return e?isErrorResult(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function findNearestBoundary(e,o){return(o?e.slice(0,e.findIndex(s=>s.route.id===o)+1):[...e]).reverse().find(s=>s.route.hasErrorBoundary===!0)||e[0]}function getShortCircuitMatches(e){let o=e.length===1?e[0]:e.find(a=>a.index||!a.path||a.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:o}],route:o}}function getInternalRouterError(e,o){let{pathname:a,routeId:s,method:c,type:d,message:h}=o===void 0?{}:o,g="Unknown Server Error",b="Unknown @remix-run/router error";return e===400?(g="Bad Request",c&&a&&s?b="You made a "+c+' request to "'+a+'" but '+('did not provide a `loader` for route "'+s+'", ')+"so there is no way to handle the request.":d==="defer-action"?b="defer() is not supported in actions":d==="invalid-body"&&(b="Unable to encode submission body")):e===403?(g="Forbidden",b='Route "'+s+'" does not match URL "'+a+'"'):e===404?(g="Not Found",b='No route matches URL "'+a+'"'):e===405&&(g="Method Not Allowed",c&&a&&s?b="You made a "+c.toUpperCase()+' request to "'+a+'" but '+('did not provide an `action` for route "'+s+'", ')+"so there is no way to handle the request.":c&&(b='Invalid request method "'+c.toUpperCase()+'"')),new ErrorResponseImpl(e||500,g,new Error(b),!0)}function findRedirect(e){let o=Object.entries(e);for(let a=o.length-1;a>=0;a--){let[s,c]=o[a];if(isRedirectResult(c))return{key:s,result:c}}}function stripHashFromPath(e){let o=typeof e=="string"?parsePath(e):e;return createPath(_extends$2({},o,{hash:""}))}function isHashChangeOnly(e,o){return e.pathname!==o.pathname||e.search!==o.search?!1:e.hash===""?o.hash!=="":e.hash===o.hash?!0:o.hash!==""}function isRedirectDataStrategyResultResult(e){return isResponse(e.result)&&redirectStatusCodes.has(e.result.status)}function isDeferredResult(e){return e.type===ResultType.deferred}function isErrorResult(e){return e.type===ResultType.error}function isRedirectResult(e){return(e&&e.type)===ResultType.redirect}function isDataWithResponseInit(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function isDeferredData(e){let o=e;return o&&typeof o=="object"&&typeof o.data=="object"&&typeof o.subscribe=="function"&&typeof o.cancel=="function"&&typeof o.resolveData=="function"}function isResponse(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function isValidMethod(e){return validRequestMethods.has(e.toLowerCase())}function isMutationMethod(e){return validMutationMethods.has(e.toLowerCase())}async function resolveNavigationDeferredResults(e,o,a,s,c){let d=Object.entries(o);for(let h=0;h<d.length;h++){let[g,b]=d[h],$=e.find(rt=>(rt==null?void 0:rt.route.id)===g);if(!$)continue;let tt=s.find(rt=>rt.route.id===$.route.id),et=tt!=null&&!isNewRouteInstance(tt,$)&&(c&&c[$.route.id])!==void 0;isDeferredResult(b)&&et&&await resolveDeferredData(b,a,!1).then(rt=>{rt&&(o[g]=rt)})}}async function resolveFetcherDeferredResults(e,o,a){for(let s=0;s<a.length;s++){let{key:c,routeId:d,controller:h}=a[s],g=o[c];e.find($=>($==null?void 0:$.route.id)===d)&&isDeferredResult(g)&&(invariant(h,"Expected an AbortController for revalidating fetcher deferred result"),await resolveDeferredData(g,h.signal,!0).then($=>{$&&(o[c]=$)}))}}async function resolveDeferredData(e,o,a){if(a===void 0&&(a=!1),!await e.deferredData.resolveData(o)){if(a)try{return{type:ResultType.data,data:e.deferredData.unwrappedData}}catch(c){return{type:ResultType.error,error:c}}return{type:ResultType.data,data:e.deferredData.data}}}function hasNakedIndexQuery(e){return new URLSearchParams(e).getAll("index").some(o=>o==="")}function getTargetMatch(e,o){let a=typeof o=="string"?parsePath(o).search:o.search;if(e[e.length-1].route.index&&hasNakedIndexQuery(a||""))return e[e.length-1];let s=getPathContributingMatches(e);return s[s.length-1]}function getSubmissionFromNavigation(e){let{formMethod:o,formAction:a,formEncType:s,text:c,formData:d,json:h}=e;if(!(!o||!a||!s)){if(c!=null)return{formMethod:o,formAction:a,formEncType:s,formData:void 0,json:void 0,text:c};if(d!=null)return{formMethod:o,formAction:a,formEncType:s,formData:d,json:void 0,text:void 0};if(h!==void 0)return{formMethod:o,formAction:a,formEncType:s,formData:void 0,json:h,text:void 0}}}function getLoadingNavigation(e,o){return o?{state:"loading",location:e,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function getSubmittingNavigation(e,o){return{state:"submitting",location:e,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}}function getLoadingFetcher(e,o){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:o}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:o}}function getSubmittingFetcher(e,o){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:o?o.data:void 0}}function getDoneFetcher(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function restoreAppliedTransitions(e,o){try{let a=e.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);if(a){let s=JSON.parse(a);for(let[c,d]of Object.entries(s||{}))d&&Array.isArray(d)&&o.set(c,new Set(d||[]))}}catch{}}function persistAppliedTransitions(e,o){if(o.size>0){let a={};for(let[s,c]of o)a[s]=[...c];try{e.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY,JSON.stringify(a))}catch(s){warning(!1,"Failed to save applied view transitions in sessionStorage ("+s+").")}}}/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},_extends$1.apply(this,arguments)}const DataRouterContext=reactExports.createContext(null),DataRouterStateContext=reactExports.createContext(null),NavigationContext=reactExports.createContext(null),LocationContext=reactExports.createContext(null),RouteContext=reactExports.createContext({outlet:null,matches:[],isDataRoute:!1}),RouteErrorContext=reactExports.createContext(null);function useHref(e,o){let{relative:a}=o===void 0?{}:o;useInRouterContext()||invariant(!1);let{basename:s,navigator:c}=reactExports.useContext(NavigationContext),{hash:d,pathname:h,search:g}=useResolvedPath(e,{relative:a}),b=h;return s!=="/"&&(b=h==="/"?s:joinPaths([s,h])),c.createHref({pathname:b,search:g,hash:d})}function useInRouterContext(){return reactExports.useContext(LocationContext)!=null}function useLocation(){return useInRouterContext()||invariant(!1),reactExports.useContext(LocationContext).location}function useIsomorphicLayoutEffect(e){reactExports.useContext(NavigationContext).static||reactExports.useLayoutEffect(e)}function useNavigate(){let{isDataRoute:e}=reactExports.useContext(RouteContext);return e?useNavigateStable():useNavigateUnstable()}function useNavigateUnstable(){useInRouterContext()||invariant(!1);let e=reactExports.useContext(DataRouterContext),{basename:o,future:a,navigator:s}=reactExports.useContext(NavigationContext),{matches:c}=reactExports.useContext(RouteContext),{pathname:d}=useLocation(),h=JSON.stringify(getResolveToMatches(c,a.v7_relativeSplatPath)),g=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{g.current=!0}),reactExports.useCallback(function($,tt){if(tt===void 0&&(tt={}),!g.current)return;if(typeof $=="number"){s.go($);return}let et=resolveTo($,JSON.parse(h),d,tt.relative==="path");e==null&&o!=="/"&&(et.pathname=et.pathname==="/"?o:joinPaths([o,et.pathname])),(tt.replace?s.replace:s.push)(et,tt.state,tt)},[o,s,h,d,e])}const OutletContext=reactExports.createContext(null);function useOutlet(e){let o=reactExports.useContext(RouteContext).outlet;return o&&reactExports.createElement(OutletContext.Provider,{value:e},o)}function useParams(){let{matches:e}=reactExports.useContext(RouteContext),o=e[e.length-1];return o?o.params:{}}function useResolvedPath(e,o){let{relative:a}=o===void 0?{}:o,{future:s}=reactExports.useContext(NavigationContext),{matches:c}=reactExports.useContext(RouteContext),{pathname:d}=useLocation(),h=JSON.stringify(getResolveToMatches(c,s.v7_relativeSplatPath));return reactExports.useMemo(()=>resolveTo(e,JSON.parse(h),d,a==="path"),[e,h,d,a])}function useRoutesImpl(e,o,a,s){useInRouterContext()||invariant(!1);let{navigator:c}=reactExports.useContext(NavigationContext),{matches:d}=reactExports.useContext(RouteContext),h=d[d.length-1],g=h?h.params:{};h&&h.pathname;let b=h?h.pathnameBase:"/";h&&h.route;let $=useLocation(),tt;tt=$;let et=tt.pathname||"/",rt=et;if(b!=="/"){let pt=b.replace(/^\//,"").split("/");rt="/"+et.replace(/^\//,"").split("/").slice(pt.length).join("/")}let ot=matchRoutes(e,{pathname:rt});return _renderMatches(ot&&ot.map(pt=>Object.assign({},pt,{params:Object.assign({},g,pt.params),pathname:joinPaths([b,c.encodeLocation?c.encodeLocation(pt.pathname).pathname:pt.pathname]),pathnameBase:pt.pathnameBase==="/"?b:joinPaths([b,c.encodeLocation?c.encodeLocation(pt.pathnameBase).pathname:pt.pathnameBase])})),d,a,s)}function DefaultErrorComponent(){let e=useRouteError(),o=isRouteErrorResponse(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return reactExports.createElement(reactExports.Fragment,null,reactExports.createElement("h2",null,"Unexpected Application Error!"),reactExports.createElement("h3",{style:{fontStyle:"italic"}},o),a?reactExports.createElement("pre",{style:c},a):null,null)}const defaultErrorElement=reactExports.createElement(DefaultErrorComponent,null);class RenderErrorBoundary extends reactExports.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,a){return a.location!==o.location||a.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:a.error,location:a.location,revalidation:o.revalidation||a.revalidation}}componentDidCatch(o,a){console.error("React Router caught the following error during render",o,a)}render(){return this.state.error!==void 0?reactExports.createElement(RouteContext.Provider,{value:this.props.routeContext},reactExports.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RenderedRoute(e){let{routeContext:o,match:a,children:s}=e,c=reactExports.useContext(DataRouterContext);return c&&c.static&&c.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=a.route.id),reactExports.createElement(RouteContext.Provider,{value:o},s)}function _renderMatches(e,o,a,s){var c;if(o===void 0&&(o=[]),a===void 0&&(a=null),s===void 0&&(s=null),e==null){var d;if(!a)return null;if(a.errors)e=a.matches;else if((d=s)!=null&&d.v7_partialHydration&&o.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let h=e,g=(c=a)==null?void 0:c.errors;if(g!=null){let tt=h.findIndex(et=>et.route.id&&(g==null?void 0:g[et.route.id])!==void 0);tt>=0||invariant(!1),h=h.slice(0,Math.min(h.length,tt+1))}let b=!1,$=-1;if(a&&s&&s.v7_partialHydration)for(let tt=0;tt<h.length;tt++){let et=h[tt];if((et.route.HydrateFallback||et.route.hydrateFallbackElement)&&($=tt),et.route.id){let{loaderData:rt,errors:ot}=a,ft=et.route.loader&&rt[et.route.id]===void 0&&(!ot||ot[et.route.id]===void 0);if(et.route.lazy||ft){b=!0,$>=0?h=h.slice(0,$+1):h=[h[0]];break}}}return h.reduceRight((tt,et,rt)=>{let ot,ft=!1,pt=null,vt=null;a&&(ot=g&&et.route.id?g[et.route.id]:void 0,pt=et.route.errorElement||defaultErrorElement,b&&($<0&&rt===0?(warningOnce("route-fallback"),ft=!0,vt=null):$===rt&&(ft=!0,vt=et.route.hydrateFallbackElement||null)));let lt=o.concat(h.slice(0,rt+1)),it=()=>{let st;return ot?st=pt:ft?st=vt:et.route.Component?st=reactExports.createElement(et.route.Component,null):et.route.element?st=et.route.element:st=tt,reactExports.createElement(RenderedRoute,{match:et,routeContext:{outlet:tt,matches:lt,isDataRoute:a!=null},children:st})};return a&&(et.route.ErrorBoundary||et.route.errorElement||rt===0)?reactExports.createElement(RenderErrorBoundary,{location:a.location,revalidation:a.revalidation,component:pt,error:ot,children:it(),routeContext:{outlet:null,matches:lt,isDataRoute:!0}}):it()},null)}var DataRouterHook$1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(DataRouterHook$1||{}),DataRouterStateHook$1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(DataRouterStateHook$1||{});function useDataRouterContext$1(e){let o=reactExports.useContext(DataRouterContext);return o||invariant(!1),o}function useDataRouterState$1(e){let o=reactExports.useContext(DataRouterStateContext);return o||invariant(!1),o}function useRouteContext(e){let o=reactExports.useContext(RouteContext);return o||invariant(!1),o}function useCurrentRouteId(e){let o=useRouteContext(),a=o.matches[o.matches.length-1];return a.route.id||invariant(!1),a.route.id}function useNavigation(){return useDataRouterState$1().navigation}function useMatches(){let{matches:e,loaderData:o}=useDataRouterState$1(DataRouterStateHook$1.UseMatches);return reactExports.useMemo(()=>e.map(a=>convertRouteMatchToUiMatch(a,o)),[e,o])}function useRouteError(){var e;let o=reactExports.useContext(RouteErrorContext),a=useDataRouterState$1(),s=useCurrentRouteId();return o!==void 0?o:(e=a.errors)==null?void 0:e[s]}function useNavigateStable(){let{router:e}=useDataRouterContext$1(DataRouterHook$1.UseNavigateStable),o=useCurrentRouteId(),a=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{a.current=!0}),reactExports.useCallback(function(c,d){d===void 0&&(d={}),a.current&&(typeof c=="number"?e.navigate(c):e.navigate(c,_extends$1({fromRouteId:o},d)))},[e,o])}const alreadyWarned$1={};function warningOnce(e,o,a){alreadyWarned$1[e]||(alreadyWarned$1[e]=!0)}function logV6DeprecationWarnings(e,o){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!o||o.v7_relativeSplatPath),o&&(o.v7_fetcherPersist,o.v7_normalizeFormMethod,o.v7_partialHydration,o.v7_skipActionErrorRevalidation)}function Outlet(e){return useOutlet(e.context)}function Router(e){let{basename:o="/",children:a=null,location:s,navigationType:c=Action.Pop,navigator:d,static:h=!1,future:g}=e;useInRouterContext()&&invariant(!1);let b=o.replace(/^\/*/,"/"),$=reactExports.useMemo(()=>({basename:b,navigator:d,static:h,future:_extends$1({v7_relativeSplatPath:!1},g)}),[b,g,d,h]);typeof s=="string"&&(s=parsePath(s));let{pathname:tt="/",search:et="",hash:rt="",state:ot=null,key:ft="default"}=s,pt=reactExports.useMemo(()=>{let vt=stripBasename(tt,b);return vt==null?null:{location:{pathname:vt,search:et,hash:rt,state:ot,key:ft},navigationType:c}},[b,tt,et,rt,ot,ft,c]);return pt==null?null:reactExports.createElement(NavigationContext.Provider,{value:$},reactExports.createElement(LocationContext.Provider,{children:a,value:pt}))}new Promise(()=>{});function mapRouteProperties(e){let o={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(o,{element:reactExports.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(o,{hydrateFallbackElement:reactExports.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(o,{errorElement:reactExports.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(e,o){if(e==null)return{};var a={},s=Object.keys(e),c,d;for(d=0;d<s.length;d++)c=s[d],!(o.indexOf(c)>=0)&&(a[c]=e[c]);return a}function isModifiedEvent(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function shouldProcessLinkClick(e,o){return e.button===0&&(!o||o==="_self")&&!isModifiedEvent(e)}const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],REACT_ROUTER_VERSION="6";try{window.__reactRouterVersion=REACT_ROUTER_VERSION}catch{}function createBrowserRouter(e,o){return createRouter({basename:o==null?void 0:o.basename,future:_extends({},o==null?void 0:o.future,{v7_prependBasename:!0}),history:createBrowserHistory({window:o==null?void 0:o.window}),hydrationData:(o==null?void 0:o.hydrationData)||parseHydrationData(),routes:e,mapRouteProperties,dataStrategy:o==null?void 0:o.dataStrategy,patchRoutesOnNavigation:o==null?void 0:o.patchRoutesOnNavigation,window:o==null?void 0:o.window}).initialize()}function parseHydrationData(){var e;let o=(e=window)==null?void 0:e.__staticRouterHydrationData;return o&&o.errors&&(o=_extends({},o,{errors:deserializeErrors(o.errors)})),o}function deserializeErrors(e){if(!e)return null;let o=Object.entries(e),a={};for(let[s,c]of o)if(c&&c.__type==="RouteErrorResponse")a[s]=new ErrorResponseImpl(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let d=window[c.__subType];if(typeof d=="function")try{let h=new d(c.message);h.stack="",a[s]=h}catch{}}if(a[s]==null){let d=new Error(c.message);d.stack="",a[s]=d}}else a[s]=c;return a}const ViewTransitionContext=reactExports.createContext({isTransitioning:!1}),FetchersContext=reactExports.createContext(new Map),START_TRANSITION="startTransition",startTransitionImpl=React$1[START_TRANSITION],FLUSH_SYNC="flushSync",flushSyncImpl=ReactDOM[FLUSH_SYNC];function startTransitionSafe(e){startTransitionImpl?startTransitionImpl(e):e()}function flushSyncSafe(e){flushSyncImpl?flushSyncImpl(e):e()}class Deferred{constructor(){this.status="pending",this.promise=new Promise((o,a)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",o(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",a(s))}})}}function RouterProvider(e){let{fallbackElement:o,router:a,future:s}=e,[c,d]=reactExports.useState(a.state),[h,g]=reactExports.useState(),[b,$]=reactExports.useState({isTransitioning:!1}),[tt,et]=reactExports.useState(),[rt,ot]=reactExports.useState(),[ft,pt]=reactExports.useState(),vt=reactExports.useRef(new Map),{v7_startTransition:lt}=s||{},it=reactExports.useCallback(_t=>{lt?startTransitionSafe(_t):_t()},[lt]),st=reactExports.useCallback((_t,Lt)=>{let{deletedFetchers:kt,flushSync:zt,viewTransitionOpts:Wt}=Lt;_t.fetchers.forEach((Jt,ln)=>{Jt.data!==void 0&&vt.current.set(ln,Jt.data)}),kt.forEach(Jt=>vt.current.delete(Jt));let qt=a.window==null||a.window.document==null||typeof a.window.document.startViewTransition!="function";if(!Wt||qt){zt?flushSyncSafe(()=>d(_t)):it(()=>d(_t));return}if(zt){flushSyncSafe(()=>{rt&&(tt&&tt.resolve(),rt.skipTransition()),$({isTransitioning:!0,flushSync:!0,currentLocation:Wt.currentLocation,nextLocation:Wt.nextLocation})});let Jt=a.window.document.startViewTransition(()=>{flushSyncSafe(()=>d(_t))});Jt.finished.finally(()=>{flushSyncSafe(()=>{et(void 0),ot(void 0),g(void 0),$({isTransitioning:!1})})}),flushSyncSafe(()=>ot(Jt));return}rt?(tt&&tt.resolve(),rt.skipTransition(),pt({state:_t,currentLocation:Wt.currentLocation,nextLocation:Wt.nextLocation})):(g(_t),$({isTransitioning:!0,flushSync:!1,currentLocation:Wt.currentLocation,nextLocation:Wt.nextLocation}))},[a.window,rt,tt,vt,it]);reactExports.useLayoutEffect(()=>a.subscribe(st),[a,st]),reactExports.useEffect(()=>{b.isTransitioning&&!b.flushSync&&et(new Deferred)},[b]),reactExports.useEffect(()=>{if(tt&&h&&a.window){let _t=h,Lt=tt.promise,kt=a.window.document.startViewTransition(async()=>{it(()=>d(_t)),await Lt});kt.finished.finally(()=>{et(void 0),ot(void 0),g(void 0),$({isTransitioning:!1})}),ot(kt)}},[it,h,tt,a.window]),reactExports.useEffect(()=>{tt&&h&&c.location.key===h.location.key&&tt.resolve()},[tt,rt,c.location,h]),reactExports.useEffect(()=>{!b.isTransitioning&&ft&&(g(ft.state),$({isTransitioning:!0,flushSync:!1,currentLocation:ft.currentLocation,nextLocation:ft.nextLocation}),pt(void 0))},[b.isTransitioning,ft]),reactExports.useEffect(()=>{},[]);let yt=reactExports.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:_t=>a.navigate(_t),push:(_t,Lt,kt)=>a.navigate(_t,{state:Lt,preventScrollReset:kt==null?void 0:kt.preventScrollReset}),replace:(_t,Lt,kt)=>a.navigate(_t,{replace:!0,state:Lt,preventScrollReset:kt==null?void 0:kt.preventScrollReset})}),[a]),Et=a.basename||"/",Ct=reactExports.useMemo(()=>({router:a,navigator:yt,static:!1,basename:Et}),[a,yt,Et]),ct=reactExports.useMemo(()=>({v7_relativeSplatPath:a.future.v7_relativeSplatPath}),[a.future.v7_relativeSplatPath]);return reactExports.useEffect(()=>logV6DeprecationWarnings(s,a.future),[s,a.future]),reactExports.createElement(reactExports.Fragment,null,reactExports.createElement(DataRouterContext.Provider,{value:Ct},reactExports.createElement(DataRouterStateContext.Provider,{value:c},reactExports.createElement(FetchersContext.Provider,{value:vt.current},reactExports.createElement(ViewTransitionContext.Provider,{value:b},reactExports.createElement(Router,{basename:Et,location:c.location,navigationType:c.historyAction,navigator:yt,future:ct},c.initialized||a.future.v7_partialHydration?reactExports.createElement(MemoizedDataRoutes,{routes:a.routes,future:a.future,state:c}):o))))),null)}const MemoizedDataRoutes=reactExports.memo(DataRoutes);function DataRoutes(e){let{routes:o,future:a,state:s}=e;return useRoutesImpl(o,void 0,s,a)}const isBrowser=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=reactExports.forwardRef(function(o,a){let{onClick:s,relative:c,reloadDocument:d,replace:h,state:g,target:b,to:$,preventScrollReset:tt,viewTransition:et}=o,rt=_objectWithoutPropertiesLoose(o,_excluded),{basename:ot}=reactExports.useContext(NavigationContext),ft,pt=!1;if(typeof $=="string"&&ABSOLUTE_URL_REGEX.test($)&&(ft=$,isBrowser))try{let st=new URL(window.location.href),yt=$.startsWith("//")?new URL(st.protocol+$):new URL($),Et=stripBasename(yt.pathname,ot);yt.origin===st.origin&&Et!=null?$=Et+yt.search+yt.hash:pt=!0}catch{}let vt=useHref($,{relative:c}),lt=useLinkClickHandler($,{replace:h,state:g,target:b,preventScrollReset:tt,relative:c,viewTransition:et});function it(st){s&&s(st),st.defaultPrevented||lt(st)}return reactExports.createElement("a",_extends({},rt,{href:ft||vt,onClick:pt||d?s:it,ref:a,target:b}))});function ScrollRestoration(e){let{getKey:o,storageKey:a}=e;return useScrollRestoration({getKey:o,storageKey:a}),null}var DataRouterHook;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(DataRouterHook||(DataRouterHook={}));var DataRouterStateHook;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(DataRouterStateHook||(DataRouterStateHook={}));function useDataRouterContext(e){let o=reactExports.useContext(DataRouterContext);return o||invariant(!1),o}function useDataRouterState(e){let o=reactExports.useContext(DataRouterStateContext);return o||invariant(!1),o}function useLinkClickHandler(e,o){let{target:a,replace:s,state:c,preventScrollReset:d,relative:h,viewTransition:g}=o===void 0?{}:o,b=useNavigate(),$=useLocation(),tt=useResolvedPath(e,{relative:h});return reactExports.useCallback(et=>{if(shouldProcessLinkClick(et,a)){et.preventDefault();let rt=s!==void 0?s:createPath($)===createPath(tt);b(e,{replace:rt,state:c,preventScrollReset:d,relative:h,viewTransition:g})}},[$,b,tt,s,c,a,e,d,h,g])}const SCROLL_RESTORATION_STORAGE_KEY="react-router-scroll-positions";let savedScrollPositions={};function useScrollRestoration(e){let{getKey:o,storageKey:a}=e===void 0?{}:e,{router:s}=useDataRouterContext(DataRouterHook.UseScrollRestoration),{restoreScrollPosition:c,preventScrollReset:d}=useDataRouterState(DataRouterStateHook.UseScrollRestoration),{basename:h}=reactExports.useContext(NavigationContext),g=useLocation(),b=useMatches(),$=useNavigation();reactExports.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),usePageHide(reactExports.useCallback(()=>{if($.state==="idle"){let tt=(o?o(g,b):null)||g.key;savedScrollPositions[tt]=window.scrollY}try{sessionStorage.setItem(a||SCROLL_RESTORATION_STORAGE_KEY,JSON.stringify(savedScrollPositions))}catch{}window.history.scrollRestoration="auto"},[a,o,$.state,g,b])),typeof document<"u"&&(reactExports.useLayoutEffect(()=>{try{let tt=sessionStorage.getItem(a||SCROLL_RESTORATION_STORAGE_KEY);tt&&(savedScrollPositions=JSON.parse(tt))}catch{}},[a]),reactExports.useLayoutEffect(()=>{let tt=o&&h!=="/"?(rt,ot)=>o(_extends({},rt,{pathname:stripBasename(rt.pathname,h)||rt.pathname}),ot):o,et=s==null?void 0:s.enableScrollRestoration(savedScrollPositions,()=>window.scrollY,tt);return()=>et&&et()},[s,h,o]),reactExports.useLayoutEffect(()=>{if(c!==!1){if(typeof c=="number"){window.scrollTo(0,c);return}if(g.hash){let tt=document.getElementById(decodeURIComponent(g.hash.slice(1)));if(tt){tt.scrollIntoView();return}}d!==!0&&window.scrollTo(0,0)}},[g,c,d]))}function usePageHide(e,o){let{capture:a}={};reactExports.useEffect(()=>{let s=a!=null?{capture:a}:void 0;return window.addEventListener("pagehide",e,s),()=>{window.removeEventListener("pagehide",e,s)}},[e,a])}const groups=[{id:"growth",label:"Growth & Customer Lifecycle",teams:[{name:"Customer Lifecycle",slug:"customer-lifecycle",icon:"Customer Lifecycle.png"},{name:"Growth",slug:"localisation",icon:"Localisation.png"}]},{id:"online-cx",label:"Online CX",teams:[{name:"Engagement & Conversion",slug:"engagement-conversion",icon:"Engagement & Conversion.png"},{name:"Trip Planner",slug:"trip-planner",icon:"Trip Planner.png"},{name:"LERE",slug:"lere",icon:"LERE.png"},{name:"Loyalty",slug:"loyalty",icon:"Loyalty.png"},{name:"Business Traveller",slug:"business-traveller",icon:"Business Traveller.png"},{name:"Customer Payments",slug:"customer-payments",icon:"Customer Payments.png"},{name:"On-Site Search",slug:"on-site-search",icon:"On-Site Search.png"},{name:"Mobile App",slug:"mobile-app",icon:"Mobile App.png"}]},{id:"supply",label:"Supply",teams:[{name:"Accommodation",slug:"accommodation",icon:"Accommodation.png"},{name:"Tours",slug:"tours",icon:"Tours.png"},{name:"Cruises",slug:"cruises",icon:"Cruises.png"},{name:"Flights",slug:"flights",icon:"Flights.png"},{name:"Experiences",slug:"experiences",icon:"Experiences.png"},{name:"Commercial Ops / Extranet",slug:"commercial-ops-extranet",icon:"Extranet.png"}]},{id:"distribution",label:"Distribution & Partnerships",teams:[{name:"Agent Hub",slug:"agent-hub",icon:"Agent Hub.png"}]},{id:"csx",label:"Customer Service & Sales Experience",teams:[{name:"OperEx",slug:"self-service",icon:"Self Service.png"},{name:"Voice AI",slug:"voice-ai",icon:"Voice AI.png"},{name:"Agent Experience",slug:"agent-experience",icon:"Agent Experience.png"}]},{id:"commercial-platforms",label:"Commercial Platforms",teams:[{name:"Extranet (Partner Central)",slug:"commercial-platforms-extranet",icon:"Extranet (Partner Central).png"}]},{id:"data",label:"Data & Analytics",teams:[{name:"Data & Finance",slug:"data-finance",icon:"Data & Finance.png"}]},{id:"engx",label:"Engineering Excellency & Infrastructure",teams:[{name:"EngX",slug:"engx",icon:"EngX.png"}]}],productGroupsData={groups},PRODUCT_GROUPS=productGroupsData.groups;function MenuIcon(){return jsxRuntimeExports.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[jsxRuntimeExports.jsx("rect",{y:"4",width:"22",height:"2",rx:"1",fill:"#363a45"}),jsxRuntimeExports.jsx("rect",{y:"10",width:"22",height:"2",rx:"1",fill:"#363a45"}),jsxRuntimeExports.jsx("rect",{y:"16",width:"22",height:"2",rx:"1",fill:"#363a45"})]})}function CloseIcon(){return jsxRuntimeExports.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[jsxRuntimeExports.jsx("line",{x1:"2",y1:"2",x2:"20",y2:"20",stroke:"#363a45",strokeWidth:"2",strokeLinecap:"round"}),jsxRuntimeExports.jsx("line",{x1:"20",y1:"2",x2:"2",y2:"20",stroke:"#363a45",strokeWidth:"2",strokeLinecap:"round"})]})}function ChevronUp(){return jsxRuntimeExports.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:jsxRuntimeExports.jsx("path",{d:"M6 15L12 9L18 15",stroke:"#868993",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function ChevronDown(){return jsxRuntimeExports.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:jsxRuntimeExports.jsx("path",{d:"M6 9L12 15L18 9",stroke:"#868993",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function NavContent({onClose:e,hideLogo:o=!1}){const a=useLocation(),[s,c]=reactExports.useState(()=>Object.fromEntries(PRODUCT_GROUPS.map(h=>[h.id,!1])));function d(h){c(g=>({...g,[h]:!g[h]}))}return jsxRuntimeExports.jsxs("nav",{className:"flex flex-col h-full bg-white",children:[!o&&jsxRuntimeExports.jsx(Link,{to:"/",className:"flex items-center px-8 py-7 shrink-0",style:{borderBottom:"0.5px solid rgba(0,0,0,0.1)"},onClick:e,children:jsxRuntimeExports.jsx("img",{src:"/roadmap/images/logos/Logo_Roadmap2026.png",alt:"2026 Roadmap",style:{height:"32px",width:"auto"}})}),jsxRuntimeExports.jsx("div",{className:"flex-1 overflow-y-auto",style:{paddingTop:"8px"},children:PRODUCT_GROUPS.map(h=>{const g=s[h.id];return jsxRuntimeExports.jsxs("div",{style:{borderBottom:"0.5px solid #d4d5d8"},children:[jsxRuntimeExports.jsxs("button",{onClick:()=>d(h.id),className:"flex items-center gap-2 w-full px-3 rounded-lg",style:{height:"44px",paddingTop:0,paddingBottom:0},children:[jsxRuntimeExports.jsx("span",{className:"flex-1 text-left uppercase tracking-[0.7px]",style:{fontFamily:"var(--font-body)",fontSize:"11px",fontWeight:500,color:"#868993",lineHeight:"14px"},children:h.label}),g?jsxRuntimeExports.jsx(ChevronUp,{}):jsxRuntimeExports.jsx(ChevronDown,{})]}),g&&jsxRuntimeExports.jsx("div",{className:"pb-2",children:h.teams.map(b=>{const $=a.pathname===`/product/${b.slug}`;return jsxRuntimeExports.jsx(Link,{to:`/product/${b.slug}`,onClick:e,className:"flex items-center gap-2 w-full px-3 rounded-lg transition-colors",style:{height:"40px",fontFamily:"var(--font-body)",fontSize:"12px",fontWeight:400,color:"#363a45",lineHeight:"16px",backgroundColor:$?"#f3f3f4":void 0,textDecoration:"none"},onMouseEnter:tt=>{$||(tt.currentTarget.style.backgroundColor="#f3f3f4")},onMouseLeave:tt=>{$||(tt.currentTarget.style.backgroundColor="")},children:b.name},b.slug)})})]},h.id)})})]})}function Sidebar(){const[e,o]=reactExports.useState(!1);return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("aside",{className:"hidden lg:flex flex-col sticky top-0 h-screen shrink-0 overflow-y-auto",style:{width:"var(--sidebar-width)",borderRight:"1px solid rgba(0,0,0,0.1)"},children:jsxRuntimeExports.jsx(NavContent,{onClose:()=>{}})}),jsxRuntimeExports.jsxs("div",{className:"lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white",style:{borderBottom:"1px solid rgba(0,0,0,0.1)"},children:[jsxRuntimeExports.jsx(Link,{to:"/",children:jsxRuntimeExports.jsx("img",{src:"/roadmap/images/logos/Logo_Roadmap2026.png",alt:"2026 Roadmap",style:{height:"28px",width:"auto"}})}),jsxRuntimeExports.jsx("button",{onClick:()=>o(a=>!a),"aria-label":"Toggle menu",className:"p-1",children:e?jsxRuntimeExports.jsx(CloseIcon,{}):jsxRuntimeExports.jsx(MenuIcon,{})})]}),e&&jsxRuntimeExports.jsxs("div",{className:"lg:hidden fixed inset-0 z-40 flex",children:[jsxRuntimeExports.jsx("div",{className:"w-80 h-full bg-white overflow-y-auto shadow-xl",style:{paddingTop:"57px"},children:jsxRuntimeExports.jsx(NavContent,{onClose:()=>o(!1),hideLogo:!0})}),jsxRuntimeExports.jsx("div",{className:"flex-1 bg-black/30",onClick:()=>o(!1)})]})]})}function Layout(){return jsxRuntimeExports.jsxs("div",{className:"flex min-h-screen",children:[jsxRuntimeExports.jsx(ScrollRestoration,{}),jsxRuntimeExports.jsx(Sidebar,{}),jsxRuntimeExports.jsx("main",{className:"flex-1 min-w-0 lg:pt-0 pt-16",children:jsxRuntimeExports.jsx(Outlet,{})})]})}const MALDIVES_URL="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&auto=format&fit=crop&q=80",WATCH_URL="https://luxgroupau-my.sharepoint.com/:v:/r/personal/shay_hamama_luxuryescapes_com/Documents/Recordings/Product%20Roadmap%20Keynote%202026-20260410_150015-Meeting%20Recording.mp4?csf=1&web=1&e=SS6k1V&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D";function PlayIcon(){return jsxRuntimeExports.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:jsxRuntimeExports.jsx("path",{d:"M6 4.5L16 10L6 15.5V4.5Z",fill:"currentColor"})})}function LEWordmark(){return jsxRuntimeExports.jsx("img",{src:"/roadmap/images/logos/LE-Logo.png",alt:"Luxury Escapes",style:{height:"32px",width:"auto"}})}function HeroBanner(){return jsxRuntimeExports.jsxs("section",{className:"relative flex items-center justify-center overflow-hidden",style:{height:"424px"},children:[jsxRuntimeExports.jsx("img",{src:MALDIVES_URL,alt:"Luxury resort over turquoise water",className:"absolute inset-0 w-full h-full object-cover pointer-events-none select-none"}),jsxRuntimeExports.jsx("div",{className:"absolute inset-0 bg-black/10"}),jsxRuntimeExports.jsxs("div",{className:"relative flex flex-col items-center gap-6 bg-white px-14 py-10 text-center",style:{borderRadius:"40px",boxShadow:"0px 4px 24px rgba(0,0,0,0.18)",minWidth:"340px"},children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center gap-5",children:[jsxRuntimeExports.jsx(LEWordmark,{}),jsxRuntimeExports.jsx("h1",{className:"text-hero text-dark",style:{fontFamily:"var(--font-heading)"},children:"2026 Roadmap"})]}),jsxRuntimeExports.jsxs("a",{href:WATCH_URL,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-3 rounded-full border text-dark transition-opacity hover:opacity-70",style:{borderColor:"var(--color-dark)",fontFamily:"var(--font-body)",fontSize:"16px",lineHeight:"24px"},children:[jsxRuntimeExports.jsx(PlayIcon,{}),"Watch presentation"]})]})]})}const name="Adam Schwab",job_title="Co-Founder & CEO",photo="/roadmap/images/adam.jpg",description=`At Luxury Escapes, we've always believed in dreaming big. What started as a curated travel platform is now evolving into something much more ambitious — a global travel ecosystem powered by intelligence, designed for growth, and built around every customer.

We are entering a new chapter, one where AI, automation and personalisation are not buzzwords but building blocks. A chapter where the entire travel experience, from discovery to booking to the memories that follow, feels effortless and inspiring. Our teams are reimagining how we find customers, how we serve them, and how we earn their loyalty every day, in every market.

The roadmap ahead is bold. We're scaling smarter, delivering faster, and aiming higher. Whether it's unlocking new value for our most loyal members or building secure platforms that can grow globally, every step we take is focused on creating more magical moments for our travellers.

This is more than a plan. It's the future of travel, redefined. And we're just getting started.`,ceoData={name,job_title,photo,description};function CEOSection(){const{name:e,job_title:o,photo:a,description:s}=ceoData,c=s.split(`

`).filter(Boolean);return jsxRuntimeExports.jsx("section",{className:"flex items-center justify-center py-12 px-6",style:{background:"var(--color-beige)"},children:jsxRuntimeExports.jsxs("div",{className:"flex flex-col md:flex-row gap-10 items-start max-w-[720px] w-full",children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center gap-8 shrink-0",children:[jsxRuntimeExports.jsx("img",{src:a,alt:e,className:"rounded-full object-cover object-top",style:{width:"183px",height:"183px"}}),jsxRuntimeExports.jsxs("div",{className:"text-center",children:[jsxRuntimeExports.jsx("p",{className:"font-semibold text-dark text-base leading-6",style:{fontFamily:"var(--font-body)"},children:e}),jsxRuntimeExports.jsx("p",{className:"text-sm leading-5 mt-1",style:{fontFamily:"var(--font-body)",color:"rgba(0,0,0,0.55)"},children:o})]})]}),jsxRuntimeExports.jsx("div",{className:"flex flex-col gap-4 flex-1 min-w-0",children:c.map((d,h)=>jsxRuntimeExports.jsx("p",{className:"text-dark leading-5",style:{fontFamily:"var(--font-body)",fontSize:"14px"},children:d},h))})]})})}const themes=[{title:"AI as an Efficiency Driver",description:"Descriptions to be updated by content owners.",image:"/roadmap/images/themes/ai-efficiency-driver.jpg"},{title:"Increase Supply & Improve Margin",description:"Descriptions to be updated by content owners.",image:"/roadmap/images/themes/increase-supply-improve-margin.jpg"},{title:"Loyalty & Continued Engagement",description:"Descriptions to be updated by content owners.",image:"/roadmap/images/themes/loyalty-continued-engagement.jpg"},{title:"Platform, AI Tools & Infrastructure for Scale",description:"Descriptions to be updated by content owners.",image:"/roadmap/images/themes/platform-ai-tools-infrastructure.jpg"},{title:"AI as an International Growth Driver",description:"Descriptions to be updated by content owners.",image:"/roadmap/images/themes/ai-international-growth-driver.jpg"},{title:"AI as a Growth Driver",description:"Descriptions to be updated by content owners.",image:"/roadmap/images/themes/ai-growth-driver.jpg"}],themesData={themes};function ThemesSection(){const{themes:e}=themesData;return jsxRuntimeExports.jsx("section",{className:"flex justify-center py-16 px-6 bg-white",children:jsxRuntimeExports.jsxs("div",{className:"w-full max-w-[1040px] flex flex-col gap-10",children:[jsxRuntimeExports.jsx("h2",{className:"text-section text-dark",style:{fontFamily:"var(--font-heading)"},children:"Themes for 2026"}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((o,a)=>jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-5",children:[jsxRuntimeExports.jsx("img",{src:o.image,alt:o.title,className:"rounded-card shrink-0 w-full object-cover",style:{height:"211px"}}),jsxRuntimeExports.jsx("div",{className:"flex flex-col gap-2",children:jsxRuntimeExports.jsx("p",{className:"text-dark font-medium leading-7",style:{fontFamily:"var(--font-body)",fontSize:"24px"},children:o.title})})]},a))})]})})}function ArrowRightIcon(){return jsxRuntimeExports.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:jsxRuntimeExports.jsx("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function TeamCard({team:e}){return jsxRuntimeExports.jsxs(Link,{to:`/product/${e.slug}`,className:"flex items-center gap-3 bg-white rounded-card px-5 py-3 hover:shadow-md transition-shadow",style:{boxShadow:"var(--shadow-card)"},children:[e.icon?jsxRuntimeExports.jsx("img",{src:`/roadmap/images/product-icon/${e.icon}`,alt:"",className:"rounded-full shrink-0 object-cover",style:{width:"70px",height:"70px"}}):jsxRuntimeExports.jsx("div",{className:"rounded-full shrink-0 bg-[#e7e8ea]",style:{width:"70px",height:"70px"}}),jsxRuntimeExports.jsx("span",{className:"flex-1 min-w-0 font-semibold text-dark text-sm leading-5",style:{fontFamily:"var(--font-body)"},children:e.name}),jsxRuntimeExports.jsx("span",{className:"shrink-0 text-dark opacity-40",children:jsxRuntimeExports.jsx(ArrowRightIcon,{})})]})}function TeamDirectory(){return jsxRuntimeExports.jsx("section",{className:"py-16 px-6",style:{background:"var(--color-beige)"},children:jsxRuntimeExports.jsx("div",{className:"max-w-[1040px] mx-auto flex flex-col gap-16",children:PRODUCT_GROUPS.map(e=>jsxRuntimeExports.jsxs("div",{id:e.id,className:"flex flex-col gap-6",children:[jsxRuntimeExports.jsx("h2",{className:"text-section text-dark",style:{fontFamily:"var(--font-heading)"},children:e.label}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:e.teams.map(o=>jsxRuntimeExports.jsx(TeamCard,{team:o},o.slug))})]},e.id))})})}function HomePage(){return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(HeroBanner,{}),jsxRuntimeExports.jsx(CEOSection,{}),jsxRuntimeExports.jsx(ThemesSection,{}),jsxRuntimeExports.jsx(TeamDirectory,{})]})}function DirectoryPage(){return jsxRuntimeExports.jsx("div",{className:"min-h-screen py-16 px-6",style:{background:"var(--color-beige)"},children:jsxRuntimeExports.jsxs("div",{className:"max-w-[800px] mx-auto",children:[jsxRuntimeExports.jsx("h1",{className:"text-section text-dark mb-12",style:{fontFamily:"var(--font-heading)"},children:"Team Directory"}),jsxRuntimeExports.jsx("div",{className:"flex flex-col gap-10",children:PRODUCT_GROUPS.map(e=>jsxRuntimeExports.jsxs("div",{id:e.id,children:[jsxRuntimeExports.jsx("h2",{className:"text-dark font-semibold text-sm mb-3 uppercase tracking-widest opacity-60",style:{fontFamily:"var(--font-body)",letterSpacing:"0.1em"},children:e.label}),jsxRuntimeExports.jsx("div",{className:"bg-white rounded-card overflow-hidden",style:{boxShadow:"var(--shadow-card)"},children:e.teams.map((o,a)=>jsxRuntimeExports.jsxs(Link,{to:`/product/${o.slug}`,className:"flex items-center justify-between px-6 py-4 hover:bg-[#f9f8f5] transition-colors text-dark",style:{borderTop:a>0?"1px solid rgba(0,0,0,0.07)":"none",fontFamily:"var(--font-body)"},children:[jsxRuntimeExports.jsx("span",{className:"text-sm font-medium",children:o.name}),jsxRuntimeExports.jsx("span",{className:"text-dark opacity-40 text-base",children:"→"})]},o.slug))})]},e.id))})]})})}const __vite_glob_0_0=`---
title: Accommodation
hero_image: https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format&fit=crop&q=80
team_members:
  - name: Gregory Fine
    title: Group Product Manager
    photo: /roadmap/images/team-members/gregory-fine.png
  - name: Nish Shrestha
    title: Product Manager
  - name: James Ball
    title: Associate Product Manager
    photo: /roadmap/images/team-members/james-ball.jpg
  - name: Matt Swanson
    title: Group Engineering Manager
    photo: /roadmap/images/team-members/matt-swanson.jpg
  - name: Aaron Toomey
    title: Engineering Manager
    photo: /roadmap/images/team-members/aaron-toomey.jpg
  - name: Alexander Sokol
    title: Engineering Manager
    photo: /roadmap/images/team-members/alexander-sokol.jpg
  - name: Harley Paterson
    title: Principal Engineer
    photo: /roadmap/images/team-members/harley-paterson.jpg
  - name: Xiao Di Guan
    title: Senior Engineer
    photo: /roadmap/images/team-members/xiao-di-guan.jpg
  - name: Di Shang
    title: Senior Engineer
    photo: /roadmap/images/team-members/di-shang.jpg
  - name: Venkat Balachandran
    title: Senior Engineer
    photo: /roadmap/images/team-members/venkat-balachandran.jpg
  - name: Chris Nguyen
    title: Senior Engineer
    photo: /roadmap/images/team-members/chris-nguyen.png
  - name: Dan Wani
    title: Senior Engineer
    photo: /roadmap/images/team-members/dan-wani.png
  - name: James Hardy
    title: Senior Engineer
    photo: /roadmap/images/team-members/james-hardy.jpg
  - name: Aleksander Vuksanovic
    title: Engineer
    photo: /roadmap/images/team-members/aleksander-vuksanovic.jpg
  - name: Alexander Burakovskiy
    title: Engineer
    photo: /roadmap/images/team-members/alexander-burakovskiy.png
gantt_items:
  - title: Dynamic Bundles and packages
    start_date: 2026-04-01
    end_date: 2026-09-30
  - title: Fully Developed Vacation Rental Product
    start_date: 2026-05-01
    end_date: 2026-09-30
  - title: Expand Property Supply in International Markets
    start_date: 2026-04-01
    end_date: 2026-10-31
  - title: New Order Service Orchestrator
    start_date: 2026-06-01
    end_date: 2026-10-31
  - title: Smarter Discounts and Margin Management
    start_date: 2026-06-01
    end_date: 2026-12-31
goals:
  - headline: Increase Supply in Key International Markets
    description: "Current: regional coverage → Target: adequate supply in each key
      market (Hotels and Vacation Rentals, High and mid range)"
  - headline: Bundled Products - Conversion up by 85%
    description: "Current: 0.8% (LPP no Bundles) → Target: 1.5%"
  - headline: Bundled Product Views per property >= 600 per month
    description: "Current: 400 avg (LPP no Bundles) → Target: 600 views per month
      per property"
  - headline: Vacation Rentals - Conversion by 33%
    description: "Current: 0.6% → Target: 0.8% with more than 100 views per month"
  - headline: Vacation Rentals - Sales by 50%
    description: "Current: $50k → Target: $100k Monthly Margin"
key_initiatives:
  - heading: Scaled Dynamic Product Bundling
    description: Enable dynamic bundling of accommodation with experiences, flights
      and cruises to create differentiated product packages. This drives higher
      conversion through compelling value propositions and increases product
      views per property, delivering meaningful uplift in both customer
      engagement and margin.
  - heading: Expanded Supply in Key International Markets
    description: Expand property supply across international markets to ensure
      adequate coverage in both Hotels and Vacation Rentals at high and
      mid-range price points. This market expansion supports our growth strategy
      by ensuring we can serve customers wherever they want to travel.
  - heading: Fully Developed Vacation Rental Product Offering
    description: Build out a complete Vacation Rental vertical with comprehensive
      inventory, competitive pricing, and strong merchandising capabilities.
      This new product line targets significant monthly margin growth by
      capturing demand in the rapidly growing short-term rental market.
---
`,__vite_glob_0_1=`---
title: "Acquisition & Performance Marketing"
slug: "acquisition-performance-marketing"
product_group: "Growth & Customer Lifecycle"
hero_image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-04-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-05-31"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Placeholder content"
    start_date: "2026-06-01"
    end_date: "2026-09-30"
  - title: "Placeholder content"
    start_date: "2026-07-01"
    end_date: "2026-09-30"
goals_section_title: "Goals"
goals:
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
---
`,__vite_glob_0_2=`---
title: "Agent Experience"
slug: "agent-experience"
product_group: "Customer Service & Sales Experience"
hero_image: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Min Pangastur"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/min-pangastur.jpg"
  - name: "Matt Alty"
    title: "Product Designer"
    photo: "/roadmap/images/team-members/matt-alty.jpg"
  - name: "Eugene Moskvita"
    title: "Group Engineering Manager"
    photo: "/roadmap/images/team-members/eugene-moskvita.png"
  - name: "Gearoid Sheehan"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/gearoid-sheehan.webp"
  - name: "Felix Ivanov"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/felix-ivanov.jpg"
  - name: "Yogeshwar Girish Chaudhari"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/yogeshwar-girish-chaudhari.jpg"
  - name: "Maaz Ahmed"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/maaz-ahmed.jpg"
  - name: "James Beattie"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/james-beattie.jpg"
  - name: "Rayhan Mendis"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/rayhan-mendis.jpg"
  - name: "Lachlan McEwen"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/lachlan-mcewen.jpg"
  - name: "Hardik Purohit"
    title: "Associate Software Engineer"
    photo: "/roadmap/images/team-members/hardik-purohit.jpg"
  - name: "Blake Leahy"
    title: "Associate Software Engineer"
    photo: "/roadmap/images/team-members/blake-leahy.png"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "EmailAI"
    start_date: "2026-04-10"
    end_date: "2026-11-17"
  - title: "Synchronisation Of All Contact"
    start_date: "2026-05-08"
    end_date: "2026-08-07"
goals_section_title: "Goals"
goals:
  - headline: "Emails Handled By EmailAI"
    description: "Current: 0% → Target: 50%"
  - headline: "Reduce CS Handling Time"
    description: "Current: 62.8 hours → Target: 40 hours (full resolution time)"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "EmailAI"
    description: "20% of CS contact is from emails. We now aim to build an AI to handle these cases. By the end of 2026, every single email will be analysed first by the EmailAI, where we aim for 50% of emails to be purely handled by the EmailAI."
  - heading: "Synchronisation Of All Contact"
    description: "There are various ways of contacting Luxury Escapes, as well as various tools CS agents are using. Synchronising it enables us to better analyse data, synchronise user and CS interactions and have a single source of truth. This includes autonomous ticket categorisation across all platforms and deprecation of wrap-up code, bringing all platforms into Zendesk, enabling effective data analysis across all platforms via a single source of truth, enabling LESA replying via Zendesk, and omnichannel support with AI context across different communications platforms."
---
`,__vite_glob_0_3=`---
title: "Agent Hub"
slug: "agent-hub"
product_group: "Distribution & Partnerships"
hero_image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Sergio Costa"
    title: "Engineering Manager"
    photo: "/roadmap/images/team-members/sergio-costa.png"
  - name: "Tom Farmery"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/tom-farmery.png"
  - name: "Philippe Carvalho"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/philippe-carvalho.jpg"
  - name: "Gabriel Duarte"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/gabriel-duarte.jpg"
  - name: "Ruan Gato"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/ruan-gato.jpg"
  - name: "Terence Zhang"
    title: "Associate Engineer"
    photo: "/roadmap/images/team-members/terence-zhang.jpg"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Communications Strategy and Segmentation"
    start_date: "2026-04-20"
    end_date: "2026-06-31"
  - title: "Supply Parity with Luxury Escapes"
    start_date: "2026-04-06"
    end_date: "2026-08-31"
  - title: "Brochure Quoting Tool"
    start_date: "2026-06-01"
    end_date: "2026-07-14"
  - title: "Improved Payment Options"
    start_date: "2026-06-15"
    end_date: "2026-07-30"
  - title: "Bulk and Group Bookings"
    start_date: "2026-07-01"
    end_date: "2026-08-19"
  - title: "Full Package Builder"
    start_date: "2026-07-20"
    end_date: "2026-09-16"
goals_section_title: "Goals"
goals:
  - headline: "Increase Total Transaction Value"
    description: "Current: $8M per quarter → Target: $17.6M per quarter (120% increase)"
  - headline: "Increase Margin"
    description: "Current: $1.1M per quarter → Target: $2.5M per quarter (120% increase)"
  - headline: "Increase Monthly Ordering Agents"
    description: "Current: 375 → Target: 500 (33% increase)"
  - headline: "Increase Monthly Orders per Engaged Agent"
    description: "Current: 1.08 → Target: 1.5 (40% increase)"
  - headline: "Increase Average Order Value"
    description: "Current: $3750 → Target: $4125 (10% increase)"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Communications Strategy and Segmentation"
    description: "Agents currently receive identical communications regardless of their behaviour or engagement, meaning the ~2,500 agents (60%) who never interact with the platform get the same emails as those booking weekly, burying key updates on commissions, incentives and new features. We're introducing a segmented communications strategy based on agent behaviour, lifecycle stage and commercial value, tailoring messaging from onboarding and activation journeys for new agents through to growth incentives and strategic updates for top performers, to improve relevance, accelerate activation and reinforce the behaviours that drive Agent Hub growth."
  - heading: "Supply Parity with Luxury Escapes"
    description: "Agents can't currently access the full Luxury Escapes product catalogue, missing flights, insurance, some experiences and some tours, forcing them to source elsewhere or lose customers to our own B2C platform. Bringing Agent Hub to full supply parity eliminates leakage, increases attachment rates and enables agents to serve the entire customer journey without leaving the platform."
  - heading: "Brochure Quoting Tool"
    description: "Agents lack professional tools to present and close sales, yet the basic quote tool already sees strong adoption, used ~200 times a month by 120 agents with 29% of quotes converting to bookings, contributing ~$32k in monthly margin. We're replacing it with a brochure-style quoting tool featuring rich imagery, itinerary details, pricing and optional add-ons in a polished, client-ready format, alongside quote tracking and automated follow-up reminders. Better surfacing, better formatting and better follow-up will drive both usage and conversion."
---
`,__vite_glob_0_4=`---
title: "Ancillaries"
slug: "ancillaries"
product_group: "Supply"
hero_image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-04-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Placeholder content"
    start_date: "2026-06-01"
    end_date: "2026-09-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
goals_section_title: "Goals"
goals:
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
---
`,__vite_glob_0_5=`---
title: "Business Traveller"
slug: "business-traveller"
product_group: "Online CX"
hero_image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Jake Gerstel"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/jake-gerstel.jpg"
  - name: "Andrii Osmak"
    title: "Engineering Manager"
  - name: "Andrew Johnstone"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/andrew-johnstone.jpg"
  - name: "Luke Mao"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/luke-mao.jpg"
  - name: "Henry Huang"
    title: "Associate Software Engineer"
    photo: "/roadmap/images/team-members/henry-huang.jpg"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Gold Societe status attainable on LEBT"
    start_date: "2026-04-20"
    end_date: "2026-07-01"
  - title: "Self service flights: cancellation and date change"
    start_date: "2026-04-20"
    end_date: "2026-07-26"
  - title: "Policy set up restructure: item policy, approval policy, user groups"
    start_date: "2026-05-04"
    end_date: "2026-08-03"
  - title: "Single sign on"
    start_date: "2026-06-15"
    end_date: "2026-07-03"
  - title: "Increase business hotel supply: Sabre, LPC, other GDSs"
    start_date: "2026-04-01"
    end_date: "2026-12-31"
goals_section_title: "Goals"
goals:
  - headline: "Increase the number of active business customers by ~130%"
    description: "Current: 15 business customers in Apr-2026 → Target: 60 in Dec-2026"
  - headline: "Increase TTV booked by non LE staff customers by 150%"
    description: "Current: ~$480k in CY2025 → Target: $1.2m in CY2026"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Policy Set Up Restructure"
    description: "Travel policy management is one of the most critical parts of running a business travel program, and we're rebuilding LEBT's policy infrastructure to match the needs of businesses. We're introducing a 'User Groups' framework so that admins can assign policies to groups of employees rather than configuring each traveller individually, making onboarding faster and ongoing management far less manual. Item policies are being evolved to support different travel policies and booking rules for different employees and/or groups; while approval policy workflows are being rearchitected to support more flexible and scalable workflows. Together, these changes make LEBT capable of serving a much broader range of business customers, from small teams with simple needs to large enterprises with complex organisational structures."
  - heading: "Gold Societe Status Attainable on LEBT"
    description: "One of the most exciting perks being brought to LEBT customers is the ability to earn Gold Societe status through their LEBT bookings. Societe is Luxury Escapes' loyalty program, and Gold status unlocks a range of premium benefits for members. Connecting LEBT bookings to attaining Gold Societe status gives business travellers a meaningful personal incentive to book through the platform rather than outside it. This strengthens LEBT's value proposition while also encouraging customers to book holidays on Luxury Escapes, creating a powerful dual benefit for the group."
  - heading: "Business Hotel Supply"
    description: "We're integrating Sabre as an additional hotel supplier for LEBT, expanding the business benefits to our customers, such as business rates and the ability to earn hotel loyalty points on business hotel bookings. Sabre is a Global Distribution System (GDS) used widely across the corporate travel industry, so this integration positions LEBT alongside the standard expected by business travel programs. Once the Sabre integration is complete, LEBT will investigate expanding its business hotel supply to other GDSs and also LE's own LPC rates."
---
`,__vite_glob_0_6=`---
title: "Commercial Ops / Extranet"
slug: "commercial-ops-extranet"
product_group: "Supply"
hero_image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Jake Pajer"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/jake-pajer.jpg"
  - name: "Sean Novis"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/sean-novis.jpg"
  - name: "Josh Cullen"
    title: "Engineering Manager"
    photo: "/roadmap/images/team-members/joshua-cullen.jpg"
  - name: "Ben Charlton"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/ben-charlton.png"
  - name: "Aly Ly"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/aly-ly.jpg"
  - name: "Davi Azevedo"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/davi-azevedo.jpg"
  - name: "Renan Ribeiro"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/renan-ribeiro.jpg"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Extranet Self-Service Platform"
    start_date: "2026-04-01"
    end_date: "2026-05-30"
  - title: "LPC Hotel Maintenance Automation"
    start_date: "2026-04-01"
    end_date: "2026-06-15"
  - title: "Rate Parity Automation"
    start_date: "2026-05-15"
    end_date: "2026-06-31"
  - title: "Flash Go Live Automation"
    start_date: "2026-06-01"
    end_date: "2026-12-15"
  - title: "LPC Go Live Automation"
    start_date: "2026-09-15"
    end_date: "2026-11-15"
goals_section_title: "Goals"
goals:
  - headline: "Reduce Flash go live time by 50%"
    description: "Current: baseline → Target: 50% reduction"
  - headline: "Increase number of Flash deals on site by 50%"
    description: "Current: baseline → Target: 50% increase"
  - headline: "Reduce time to process LPC room, rate and property changes by 90%"
    description: "Current: baseline → Target: 90% reduction"
  - headline: "Increase number of LPC rooms on site by 20%"
    description: "Current: baseline → Target: 20% increase"
  - headline: "Reduce time to process partner requests by 30%"
    description: "Current: baseline → Target: 30% reduction"
  - headline: "Reduce parity case resolution time by 50%"
    description: "Current: baseline → Target: 50% reduction"
  - headline: "Increase number of won parity cases by 50%"
    description: "Current: baseline → Target: 50% increase"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Reduce the Time to Get Flash Deals Online"
    description: "Transition the entire Flash deal loading process from Salesforce into Admin Portal to establish a single, end-to-end deal management pipeline. Today, deal data is manually entered in Salesforce and then duplicated in Admin Portal, creating double-handling, increased risk of errors, and operational delays. The future state consolidates all deal creation and management directly within Admin Portal, enabling automated loading of pricing, hotel proposals, partner information, campaign schedules, inclusions, surcharges, and related deal components. This will eliminate any Salesforce dependency for deal loading, improving speed, accuracy, and scalability."
  - heading: "Automated Feed for New LPC Rooms and Rates"
    description: "When our system detects a new room or rate plan, we want to automatically load that into Admin Portal. This includes room types, rate plans, room rates, and packages. Using LLMs to read the names that come through from suppliers, all content is automatically created and set to content approved. We can then map these rooms and rate plans directly to the corresponding Bedbank listing, allowing us to automatically display new inventory on our site with no manual intervention required."
  - heading: "Extranet Self-Service Platform"
    description: "Transform Extranet into the primary self-service platform for hotel partners. Any action that can currently be performed in Admin portal for hotel maintenance must be available to the hotel partner directly through Extranet. We want partners to self-service room names, descriptions, policies, images, taxes and fees, and amenities."
---
`,__vite_glob_0_7=`---
title: "Extranet (Partner Central)"
slug: "commercial-platforms-extranet"
product_group: "Commercial Platforms"
hero_image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop&q=80"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Partner Central Platform Rebuild"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Real-Time Rate Management"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Partner Reporting Suite"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Multi-Property Account Management"
    start_date: "2026-06-01"
    end_date: "2026-09-30"
goals_section_title: "Goals"
goals:
  - headline: "Migrate all partners to Partner Central v2"
    description: "Current: 0% migrated → Target: 80% migrated Q3"
  - headline: "Increase partner self-serve rate management"
    description: "Current: 28% → Target: 72%"
  - headline: "Reduce partner support tickets"
    description: "Current: 1,100/month → Target: 450/month"
  - headline: "Improve partner platform NPS"
    description: "Current: +12 → Target: +44"
  - headline: "Grow partners using reporting suite"
    description: "Current: 14% → Target: 65%"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Partner Central Platform Rebuild"
    description: "Partner Central — our supplier-facing platform for managing rates, availability, and deal content — is built on a legacy stack that is slow, poorly designed, and generates high volumes of partner support tickets. We are rebuilding Partner Central from the ground up on a modern architecture with a significantly improved UX, real-time data sync, and a component library designed for partner workflows. The rebuild is being developed in close collaboration with 20 partner advisors who represent a cross-section of our supplier base."
  - heading: "Real-Time Rate Management"
    description: "Partners currently submit rate changes through a batch process that can take up to 24 hours to reflect on site — creating rate parity issues and partner frustration during high-demand periods. We are building a real-time rate management interface that allows partners to update rates, availability, and inclusions with sub-minute propagation to all sales channels. Rate changes are validated against contracted minimums before acceptance, with clear feedback when submissions do not meet commercial requirements."
  - heading: "Partner Reporting Suite"
    description: "Partners currently have no visibility into their deal performance on our platform beyond what our account management team chooses to share. We are building a self-serve reporting suite within Partner Central that gives partners access to real-time performance metrics — views, bookings, conversion rates, revenue, and customer ratings — with flexible date ranges and exportable data. Access to this data creates stronger commercial alignment and reduces the volume of ad-hoc reporting requests to our commercial team."
---
`,__vite_glob_0_8=`---
title: "Cruises"
slug: "cruises"
product_group: "Supply"
hero_image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Vivi Mi"
    title: "Associate Product Manager"
    photo: "/roadmap/images/team-members/vivi-mi.png"
  - name: "Miran Shin"
    title: "Senior Product Designer"
    photo: "/roadmap/images/team-members/miran-shin.png"
  - name: "Joshua Cullen"
    title: "Director of Engineering"
    photo: "/roadmap/images/team-members/joshua-cullen.jpg"
  - name: "Maha Zohbi"
    title: "Engineering Manager"
    photo: "/roadmap/images/team-members/maha-zohbi.jpg"
  - name: "Bruno Haveroth"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/bruno-haveroth.jpg"
  - name: "Semeer Acheerithodi"
    title: "Associate Engineer"
  - name: "Luiz Clazzer"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/luiz-clazzer.jpg"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Expand promo and inclusion supply"
    start_date: "2026-04-20"
    end_date: "2026-06-29"
  - title: "Optimise discovery journey on site and through comms"
    start_date: "2026-04-06"
    end_date: "2026-07-26"
  - title: "Enable LuxPlus+ pricing on Cruises"
    start_date: "2026-04-06"
    end_date: "2026-05-17"
  - title: "Booking process optimisation"
    start_date: "2026-06-06"
    end_date: "2026-10-29"
  - title: "Bundling + Flash offers"
    start_date: "2026-04-06"
    end_date: "2026-06-01"
  - title: "Explore new distribution channels"
    start_date: "2026-06-08"
    end_date: "2026-07-19"
goals_section_title: "Goals"
goals:
  - headline: "Increase gross margin"
    description: "Current: $1.75M → Target: $2.4M (27% increase)"
  - headline: "Increase average margin"
    description: "Current: 8.6% → Target: 10% (16% increase)"
  - headline: "Increase overall funnel CVR"
    description: "Current: 0.36% → Target: 0.6% (67% increase)"
  - headline: "Increase live promo deals parity"
    description: "Current: 50% (compared to Cruise Guru) → Target: 90% (80% increase)"
  - headline: "Increase retention rate"
    description: "Current: 7% → Target: 10% (43% increase)"
  - headline: "Increase % new channel-driven cruise TTV"
    description: "Current: 10% → Target: 15% (50% increase)"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Deal Coverage"
    description: "We will ensure all key cruise deals are available and prominently communicated. ~66% of cruise TTV is driven by promo/inclusion-led offers, yet we currently surface only ~50% of available promos vs key competitors. By revamping the Admin Portal UI and automating daily competitor scraping and supplier email ingestion, we can help commercial scale deal creation to increase promo coverage, while improving inclusions accuracy and reducing manual ops, unlocking faster time-to-market and higher TTV and conversion."
  - heading: "Frictionless Discovery and Booking"
    description: "We will streamline the customer journey from discovery to booking, capturing demand through cross-sell opportunities and minimising drop-off. We will simplify and restructure the two major funnel frictions: ~70% drop-off from offer page to traveller selection, and ~72% drop-off in cabin selection due to errors and complexity (type, category, location, packages), reduce choice overload, and improve rate and inclusions clarity to materially lift conversion."
  - heading: "Differentiation"
    description: "To shift mix towards higher-value orders and improve margin, we will extend LuxPlus+ pricing to Cruises, introduce unique offers unavailable elsewhere including supplier-funded loyalty inclusions, benefits and campaigns for premium tiers, and exclusive bundles (e.g. hotels, flights, experiences), creating a more compelling, defensible offer vs competitors while increasing AOV and retention."
---
`,__vite_glob_0_9=`---
title: Customer Lifecycle
hero_image: https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&auto=format&fit=crop&q=80
team_members:
  - name: Roshan Hossain
    title: Product Manager
    photo: /roadmap/images/team-members/roshan-hossain.png
  - name: Nirnay Polaboina
    title: Engineering Manager
    photo: /roadmap/images/team-members/nirnay-polaboina.png
  - name: Gribesh Dhakal
    title: Software Engineer
    photo: /roadmap/images/team-members/gribesh-dhakal.jpg
  - name: Mary Ruelan
    title: Software Engineer
    photo: /roadmap/images/team-members/mary-ruelan.jpg
  - name: Fahad Assadi
    title: Associate Software Engineer
    photo: /roadmap/images/team-members/fahad-assadi.jpg
  - name: Tina Wang
    title: CRM Manager
    photo: /roadmap/images/team-members/tina-wang.png
  - name: John Paul Atienza
    title: HTML Engineer
    photo: /roadmap/images/team-members/john-paul-atienza.png
gantt_items:
  - title: AI-Powered Localised Seasonal Campaigns
    start_date: 2026-04-01
    end_date: 2026-11-12
  - title: Multi-Language Integration
    start_date: 2026-04-07
    end_date: 2026-06-05
  - title: Google-Search Personalised Welcome Journeys
    start_date: 2026-05-11
    end_date: 2026-06-12
  - title: Tours and Cruise Recurring Discovery Cohort
    start_date: 2026-04-01
    end_date: 2026-04-02
  - title: Societe - Downgrade, Nudge Tier, Points are Yours Journeys
    start_date: 2026-04-13
    end_date: 2026-07-23
  - title: AgentHub - Re-Engagement and Welcome Journeys
    start_date: 2026-07-06
    end_date: 2026-09-11
  - title: Rich Communication Services
    start_date: 2026-06-13
    end_date: 2026-10-13
goals:
  - headline: Increase average monthly margin attributed to comms channels by 20%
    description: "Current: $6.7m → Target: $8.0m"
  - headline: Increase users subscribed to comms after 6 months by 10%
    description: "Current: 70% retention → Target: 77%"
  - headline: Reduce the time required to create a campaign send by 75%
    description: "Current: 4 hours → Target: 1 hour (including quality approvals)"
key_initiatives:
  - heading: AI-Powered Localised Seasonal Campaigns
    description: Automatically sending customers timely, relevant promotions based
      on public holidays, cultural celebrations, and school periods in their
      region. Customers receive offers that feel personal to where they live,
      and LLM-generated and evaluated exposition specific to the holiday,
      driving higher engagement and conversion for untapped markets.
  - heading: Multi-Language Customer Communications
    description: Expanding the pre-purchase customer journey into German and French,
      from onboarding through to purchase. All communications and offer data are
      localised, removing language as a barrier and unlocking deeper engagement
      with European markets.
  - heading: Intent-Driven Welcome Journeys
    description: When a customer arrives via a specific Google search like 'family
      holidays', they receive a tailored welcome journey that matches what they
      were looking for rather than a generic introduction. This turns search
      intent into a personalised first impression, improving relevance and
      likelihood of a first booking.
  - heading: Rich Messaging Channels
    description: Upgrading customer communications from standard SMS to RCS and
      other rich messaging formats, starting with the US and expanding across
      non-AU markets. Customers receive a more engaging, app-like experience
      with branded sender profiles, interactive buttons, and image carousels
      directly in their native inbox, driving higher interaction rates in key
      international regions.
  - heading: Customisable Post-Purchase Journey
    description: Enabling channel managers to curate tailored EDM sequences for
      high-value long-tail tour products, educating customers about their
      upcoming tour as their departure date approaches. Sequences are configured
      once and automatically populate into the send schedule for each customer,
      delivering timely, relevant content without manual intervention at scale.
  - heading: Dynamic Exclusion Model
    description: Intelligently suppressing communications based on a combination of
      on-site activity, demographic signals and purchase history, ensuring
      customers only receive the most relevant messages at each stage of their
      journey. By excluding users from pre and post-purchase communications that
      no longer apply to them, overall send fidelity improves and engagement is
      concentrated where it matters most.
  - heading: Société Tier-Sensitive Journeys
    description: A suite of targeted journeys designed to protect and grow Société
      tier membership. Members approaching their annual tier expiration receive
      a proactive sequence nudging retention, shifting to lower AOV offers as
      the date nears. Members within reach of the next tier receive timely
      offers to help them cross the threshold, turning near-misses into
      upgrades.
  - heading: Adaptive Offer Tile Optimisation
    description: Refining how offer tiles are presented based on both vertical and
      audience region. For non-hotel verticals like cruise, tours and
      experiences, different layouts and hooks are explored to surface the most
      relevant USPs, particularly where image quality is unreliable. For
      international markets, layout, copy length and price presentation are
      tailored to reach the optimal tile format for each region, ensuring every
      audience receives the most effective first impression of an offer.
---
`,__vite_glob_0_10=`---
title: Customer Payments
hero_image: https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&auto=format&fit=crop&q=80
team_members:
  - name: Sean Novis
    title: Product Manager
    photo: /roadmap/images/team-members/sean-novis.jpg
  - name: Andy Welch
    title: Engineering Manager
    photo: /roadmap/images/team-members/andy-welch.png
  - name: Nicholas Puglia
    title: Software Engineer
    photo: /roadmap/images/team-members/nicholas-puglia.png
  - name: Sitaraman Padmanabhan
    title: Software Engineer
    photo: /roadmap/images/team-members/sitaraman-padmanabhan.jpg
  - name: Ayden Burgoyne
    title: Software Engineer
    photo: /roadmap/images/team-members/ayden-burgoyne.jpg
  - name: Raff Hughes
    title: Software Engineer
    photo: /roadmap/images/team-members/raff-hughes.jpg
  - name: Paul Slater
    title: Designer
    photo: /roadmap/images/team-members/paul-slater.png
gantt_items:
  - title: Payment Schedule optimisation
    start_date: 2026-04-01
    end_date: 2027-06-30
  - title: Purchase Credit
    start_date: 2026-04-07
    end_date: 2026-04-21
  - title: Split payments
    start_date: 2026-05-15
    end_date: 2026-05-31
  - title: "Wex VCCs: Cruise + Commercial"
    start_date: 2026-07-01
    end_date: 2026-07-31
  - title: Riskified trial
    start_date: 2026-08-01
    end_date: 2026-08-31
  - title: Support ERP integration
    start_date: 2026-09-15
    end_date: 2026-09-30
goals:
  - headline: Increase checkout to purchase rate by 10%
    description: "Current: 25% → Target: 27.5%"
  - headline: Increase VCC rebate by $500k
    description: "Current: baseline → Target: $500k increase"
  - headline: Increase service fee margin by $100k
    description: "Current: baseline → Target: $100k increase"
  - headline: Reduce Stripe invoice fees by 90%
    description: "Current: $80k → Target: $8k"
key_initiatives:
  - heading: Payment Schedules Testing and Optimisation
    description: We want to test developing a more comprehensive Payment Schedule
      suite to optimise the offer for customers, focusing on CVR and Cash Flow.
      This includes product extension to LPC and LPP, offering extension with
      lead time based experimentation, deposit holds offered to the full
      customer set, and dialling up and down service fees to determine optimal
      CvR to cashflow ratios.
  - heading: "Wex VCCs: Cruise and Commercial"
    description: Pay all Cruise vendors with Wex VCCs, earning 1.6% on every
      transaction, translating to $350k in margin. We also want to use VCC for
      other commercial operations, such as media spend.
  - heading: Purchase Credit in My Escapes
    description: We want to enable our customers to purchase credit, which will
      solve issues where CS need to raise Stripe invoices. Some examples are
      Custom Offers, paying for a high value order with multiple cards, and tech
      issues when paying balance. These issues make up the majority of the ~$20m
      in Stripe invoices we raise each year, which costs $80k.
  - heading: Split and Group Payments at checkout
    description: >-
      Customers frequently request to split a single booking across multiple
      credit cards - whether to manage card limits, access travel insurance
      benefits, or share costs between travellers. This requires manual
      intervention from Customer Service and drives ~$40k per year in Stripe
      invoice fees.


      To reduce operational workload and Stripe invoice fees, as well as provide
      our customers with a smoother self-service checkout experience, we will:

      1. Allow customers to use multiple credit cards within a single booking;
      and 

      2. Allow multiple travellers to independently pay toward the same booking.
---
`,__vite_glob_0_11=`---
title: Analytics, Data & Finance
hero_image: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80
team_members:
  - name: Jake Pajer
    title: Group Product Manager
    photo: /roadmap/images/team-members/jake-pajer.jpg
  - name: Oliver Banks
    title: Senior Product Manager
    photo: /roadmap/images/team-members/oliver-banks.jpg
  - name: Richard Biddle
    title: Engineering Manager
    photo: /roadmap/images/team-members/richard-biddle.jpg
  - name: Luke Judd
    title: Senior Data Engineer
    photo: /roadmap/images/team-members/luke-judd.jpg
  - name: Mark Ma
    title: Data Engineer
    photo: /roadmap/images/team-members/mark-ma.png
  - name: Prahar Dosani
    title: Data Engineer
    photo: /roadmap/images/team-members/prahar-dosani.png
  - name: Leo Giovanetti
    title: Lead Data Analyst
    photo: /roadmap/images/team-members/leo-giovanetti.png
  - name: Ming Chong
    title: Principal Data Analyst
    photo: /roadmap/images/team-members/ming-chong.jpg
  - name: Declan McGann
    title: Senior Data Analyst
    photo: /roadmap/images/team-members/declan-mcgann.png
  - name: Oliver Aspinall
    title: Senior Data Analyst
    photo: /roadmap/images/team-members/oliver-aspinall.png
gantt_items:
  - title: Self-Service Analytics Workspace and Data Catalogue
    start_date: 2026-04-01
    end_date: 2026-12-31
  - title: Room Mapping Error Detection
    start_date: 2026-04-01
    end_date: 2026-05-30
  - title: Price Parrot Extension - Villas and LPP
    start_date: 2026-05-01
    end_date: 2026-04-13
  - title: Financial Tracking ID
    start_date: 2026-04-01
    end_date: 2026-05-31
  - title: NetSuite API Integrations
    start_date: 2026-06-01
    end_date: 2026-07-31
  - title: LuxPlus+ Retention Intelligence
    start_date: 2026-04-01
    end_date: 2026-05-30
goals:
  - headline: Reduce ad-hoc analyst data request volume by 70%
    description: "Current: 10 requests per day → Target: 3 per day"
  - headline: Cut time-to-insight for common business questions by 50%
    description: "Current: Analysis conducted within 24 hours → Target: < 1 hour"
  - headline: Reduce room mapping financial losses by 50%
    description: "Current: $Hundreds of Thousands → Target: < $100,000"
  - headline: Increase CS conversion rate by 3%
    description: "Current: 0.62% → Target: 0.64%"
  - headline: Complete Financial Tracking and NetSuite API integration by August 2026
  - headline: Achieve full audit trail on financial transactions and order changes
key_initiatives:
  - heading: Self-Service Analytics Workspace and Data Catalogue
    description: A curated, well-documented data catalogue with pre-built datasets,
      column definitions, grain, refresh cadences, and ownership will enable any
      LE employee to find the data they need and build their own dashboards. A
      natural-language query bot is a secondary feature; the catalogue and
      governance are the foundation. This reduces analyst time on ad-hoc
      requests by 10-20% and cuts time-to-insight for common questions by 50%.
      Creating a data catalogue will enable users of data at LE one central
      location that provides descriptions of columns for all the tables, core
      concepts, definitions and business logic, and where different data areas
      can be obtained.
  - heading: LuxPlus+ Retention Intelligence
    description: LE does not know why, or which benefit would retain LP+ members. A
      model will identify at-risk LP+ members 60/30/14 days before renewal,
      providing reason codes ('hasn't booked in 6 months,' 'only used 1 of 5
      benefits,' 'price sensitivity increased') and the specific benefit or
      offer most likely to retain them ('highlight unused $200 hotel credit,'
      'show upcoming deals in preferred destination').
  - heading: Financial Tracking ID
    description: We're implementing a unique document ID for every financial
      transaction, including bookings, refunds, surcharges, credits, and vendor
      payments. Each transaction will carry a traceable identifier from creation
      through to the ERP. This enables accurate reconciliation in NetSuite, a
      single source of truth for matching payments to invoices, proper COGS
      tracking, and a complete audit trail across the platform.
---
`,__vite_glob_0_12=`---
title: "Distribution APIs"
slug: "distribution-apis"
product_group: "Distribution & Partnerships"
hero_image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-05-31"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-04-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Placeholder content"
    start_date: "2026-05-01"
    end_date: "2026-08-31"
  - title: "Placeholder content"
    start_date: "2026-07-01"
    end_date: "2026-09-30"
goals_section_title: "Goals"
goals:
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
---
`,__vite_glob_0_13=`---
title: Engagement & Conversion
hero_image: https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop&q=80
team_members:
  - name: Nicholas Griffith
    title: Product Manager
    photo: /roadmap/images/team-members/nick-griffith.jpg
  - name: Lukas Zimmerman
    title: Engineering Manager
    photo: /roadmap/images/team-members/lukas-zimmerman.jpg
  - name: Welington Larsen
    title: Senior Software Engineer
    photo: /roadmap/images/team-members/welington-larsen.jpg
  - name: Ricardo Balbinot
    title: Senior Software Engineer
    photo: /roadmap/images/team-members/ricardo-balbinot.jpg
  - name: Nikola Grujic
    title: Software Engineer
    photo: /roadmap/images/team-members/nikola-grujic.jpg
  - name: Luxing Li
    title: Software Engineer
    photo: /roadmap/images/team-members/luxing-li.jpg
gantt_items:
  - title: World-Class Offer Page
    start_date: 2026-04-01
    end_date: 2026-11-14
  - title: Seamless Checkout Experience
    start_date: 2026-04-01
    end_date: 2026-06-02
  - title: Inclusion Clarity and Surfacing Value
    start_date: 2026-04-01
    end_date: 2026-05-02
  - title: Dynamic Homepage Personalisation
    start_date: 2026-06-01
    end_date: 2026-08-02
  - title: Trust and Social Proof Expansion
    start_date: 2026-04-01
    end_date: 2026-07-02
  - title: Email-Only Authentication
    start_date: 2026-07-01
    end_date: 2026-10-02
goals:
  - headline: Offer View to Purchase Conversion Rate
    description: Increasing from 0.81% -> 0.88%
  - headline: Add to Cart to Purchase Conversion Rate
    description: Increasing from 17% -> 21%
  - headline: Paid Search Conversion Rate
    description: Increasing from 0.5% -> 0.55%
  - headline: Paid Sign-Up Rate
    description: Increasing from 0.7% -> 0.75%
key_initiatives:
  - heading: World-Class Offer Page
    description: The offer page contains some of the most valuable real estate
      onsite. We are evolving how we present existing content while expanding
      the depth of information available to deliver a more informative,
      transparent, and decision-driven experience that reduces the need for
      off-site research. This includes surfacing richer contextual information
      such as nearby locations, property highlights, pricing benchmarks and
      clearer comparisons of inclusions against our competitors.
  - heading: Inclusion Clarity and Surfacing Value
    description: We are doubling down on inclusions as a core value driver by making
      them more prominent, digestible, and better understood throughout the user
      journey. To build on this, we will introduce richer presentation formats
      such as modals, carousels, and structured showcases to better communicate
      the value of each package. Additionally, we will improve customer
      education around what a 'Limited Time Lux Exclusive' is, ensuring users
      clearly understand the uniqueness and exclusivity of our offers.
  - heading: Seamless Checkout Experience
    description: Through continued experimentation, we will redesign the checkout to
      minimise friction, reduce drop-off and improve conversion. This includes
      enabling the capability for one-click booking restoration for users who
      exit mid flow, UI improvements, and introducing clearer communication of
      cancellation timelines to improve transparency at the point of purchase.
---
`,__vite_glob_0_14=`---
title: "EngX"
slug: "engx"
product_group: "Engineering Excellency & Infrastructure"
hero_image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Konstantin Bartchenkov"
    title: "Director of Engineering"
    photo: "/roadmap/images/team-members/konstantin-bartchenkov.png"
  - name: "Chiamaka Ibeme"
    title: "Engineering Manager"
    photo: "/roadmap/images/team-members/chiamaka-ibeme.jpg"
  - name: "Andrey Tryapitsin"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/andrey-tryapitsin.jpg"
  - name: "Chris Lee"
    title: "Principal Software Engineer"
    photo: "/roadmap/images/team-members/chris-lee.jpg"
  - name: "Daniel Nguyen"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/daniel-nguyen.png"
  - name: "Mikhail Dsouza"
    title: "Principal Architect"
    photo: "/roadmap/images/team-members/mikhail-dsouza.jpg"
  - name: "Nathan Ashenden"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/nathan-ashenden.jpg"
  - name: "Pascal Enz"
    title: "Principal Architect"
    photo: "/roadmap/images/team-members/pascal-enz.jpg"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Cloud Savings - Spot instance"
    start_date: "2026-04-01"
    end_date: "2026-12-14"
  - title: "Authentication Service V2"
    start_date: "2026-06-01"
    end_date: "2026-09-02"
  - title: "Vulnerability Scanning, Fixes and Penetration Test"
    start_date: "2026-07-01"
    end_date: "2026-10-02"
  - title: "International Market Performance"
    start_date: "2026-07-01"
    end_date: "2026-11-02"
  - title: "Circle CI migration to Internal Hosting"
    start_date: "2026-04-01"
    end_date: "2026-08-02"
  - title: "Elasticache serverless"
    start_date: "2026-05-01"
    end_date: "2026-09-02"
goals_section_title: "Goals"
goals:
  - headline: "Observability and incident detection"
    description: "Current: Limited visibility into application performance → Target: Unified observability stack with automated anomaly detection"
  - headline: "Platform reliability and resilience"
    description: "Current: Multiple legacy infrastructure components → Target: Modern, scalable infrastructure with self-healing capabilities"
  - headline: "Security and compliance"
    description: "Current: Implementing ISO 27001 controls → Target: Full ISO 27001 compliance with hardened containers and audit logging"
  - headline: "Infrastructure cost efficiency"
    description: "Current: Baseline cloud and SaaS spend → Target: Optimized resource usage with reserved capacity and AI-driven right-sizing"
  - headline: "Developer experience improvement"
    description: "Current: Fragmented tooling and documentation → Target: AI-enhanced development environment with unified platform portal"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Observability Platform Migration to Datadog"
    description: "Introduce the Datadog platform to replace our existing New Relic observability tooling. This migration improves our ability to detect and resolve production issues quickly while reducing false alarms. The migration includes optimizations to log volume, SLA dashboards, and alerting to provide comprehensive visibility across the platform. This upgrade directly supports our reliability objectives and enables faster mean-time-to-recovery for production incidents."
  - heading: "Infrastructure Modernization and AWS AppMesh Migration"
    description: "AWS is deprecating AppMesh, a core piece of our infrastructure that manages service-to-service communication. We are proactively migrating to a supported alternative well ahead of the September 2026 cutoff to avoid future disruptions and ensure platform stability. This modernization improves infrastructure reliability and positions the platform for future scale while reducing technical debt."
  - heading: "Security Hardening and ISO 27001 Compliance"
    description: "Ramp up implementation of security controls and automations that align with ISO 27001 global information security standards. This includes container and image hardening to remove malware and vulnerabilities, Auth Service v2 implementations with B2B authentication, audit logging for compliance, and disaster recovery planning. These foundational security improvements protect customer and business data while meeting enterprise security requirements."
---
`,__vite_glob_0_15=`---
title: "Experiences"
slug: "experiences"
product_group: "Supply"
hero_image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Renan Murta"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/renan-murta.jpg"
  - name: "Diego Gardens"
    title: "Engineer Manager"
  - name: "Luiz Carraro"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/luiz-carraro.jpg"
  - name: "Jean Biezus"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/jean-biezus.jpg"
  - name: "Cleber Ricardi"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/cleber-ricardi.jpg"
  - name: "Matheus Zilio"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/matheus-zilio.jpg"
  - name: "Leo Ferreira"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/leo-ferreira.jpg"
  - name: "Ivan Hoinacki"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/ivan-hoinacki.png"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Lux Lounges for everyone"
    start_date: "2026-04-01"
    end_date: "2027-05-13"
  - title: "LE Dining Card"
    start_date: "2026-04-27"
    end_date: "2026-07-13"
  - title: "Global Transfers"
    start_date: "2026-04-13"
    end_date: "2026-06-25"
  - title: "E2E Experiences Revamp"
    start_date: "2026-04-01"
    end_date: "2026-06-17"
  - title: "LP+ Pricing"
    start_date: "2026-04-01"
    end_date: "2026-04-30"
  - title: "Car hire"
    start_date: "2026-04-01"
    end_date: "2026-08-30"
  - title: "Corporate events"
    start_date: "2026-04-01"
    end_date: "2026-05-30"
goals_section_title: "Goals"
goals:
  - headline: "Increase GM in Experiences"
    description: "Current: 3M → Target: 4.5M (50% increase)"
  - headline: "Expand Transfers coverage"
    description: "Current: 150 → Target: 3000 (20x expansion)"
  - headline: "Expand Lounge coverage"
    description: "Current: 60 → Target: 1200 (20x expansion)"
  - headline: "Increase loyalty customers adoption in Experiences offers"
    description: "Current: 22% → Target: 31% (50% increase)"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "LE Dining Card"
    description: "A new restaurant vertical powered by a co-branded Luxury Escapes debit card, unlocking exclusive dining benefits across a curated network of partners. This initiative extends Luxury Escapes beyond travel moments into customers' everyday lives, increasing engagement frequency while creating a new revenue stream. Combining instant discounts with loyalty rewards, we strengthen long-term customer relationships and position Luxury Escapes as part of both travel and local lifestyle experiences."
  - heading: "Global Transfers"
    description: "Establish a global transfers capability that allows customers to seamlessly move throughout their trip with ease and confidence. By enabling access to a broad network of transfer options, this initiative fills a key gap in the travel journey, from airport connections to in-destination mobility such as hotel-to-hotel or visits to major attractions. The goal is to make LE an even more complete travel companion, supporting customers beyond booking into the full experience of their trip."
  - heading: "E2E Experiences Revamp"
    description: "Elevate the end-to-end Experiences journey to reflect the premium standard of the Luxury Escapes brand. Following the expansion of our inventory, this initiative focuses on creating a more intuitive, inspiring and seamless way for customers to discover and book experiences. By improving how content is surfaced and presented across the platform, we aim to increase engagement, simplify decision-making and position Experiences as a core part of every customer's trip."
---
`,__vite_glob_0_16=`---
title: "Extranet (Partner Central)"
slug: "extranet-partner-central"
product_group: "Growth & Customer Lifecycle"
hero_image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-04-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Placeholder content"
    start_date: "2026-05-01"
    end_date: "2026-08-31"
  - title: "Placeholder content"
    start_date: "2026-07-01"
    end_date: "2026-09-30"
goals_section_title: "Goals"
goals:
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
---
`,__vite_glob_0_17=`---
title: "Flights"
slug: "flights"
product_group: "Supply"
hero_image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Sriram Shankar"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/sriram-shankar.jpg"
  - name: "Paul Slater"
    title: "Senior Product Designer"
    photo: "/roadmap/images/team-members/paul-slater.png"
  - name: "Dulaj Pathirana"
    title: "Engineering Manager"
    photo: "/roadmap/images/team-members/dulaj-pathirana.png"
  - name: "Gabriel Costa"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/gabriel-costa.jpg"
  - name: "Caio Portela"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/caio-portela.jpg"
  - name: "Ruben Belem"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/ruben-belem.jpg"
  - name: "Manu J"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/manu-j.jpg"
  - name: "Audrey Santoso"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/audrey-santoso.jpg"
  - name: "Jin Sunwoo"
    title: "Graduate Engineer"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Ancils (Seats, Meals, Bags) + Self Serve"
    start_date: "2026-04-01"
    end_date: "2026-08-31"
  - title: "Date Grid"
    start_date: "2026-03-02"
    end_date: "2026-04-20"
  - title: "Lux+ Pricing for Flights"
    start_date: "2026-04-20"
    end_date: "2026-06-31"
  - title: "Flight + Hotel bundled flow"
    start_date: "2026-05-18"
    end_date: "2026-08-03"
  - title: "Price Lock"
    start_date: "2026-06-22"
    end_date: "2026-07-24"
  - title: "Booking Management Enhancements"
    start_date: "2026-07-01"
    end_date: "2026-11-30"
goals_section_title: "Goals"
goals:
  - headline: "Increase TTV to $110M"
    description: "Current: Apr'25-Dec'25 baseline → Target: +21% vs Apr'25-Dec'25"
  - headline: "Increase Gross margin to $6M"
    description: "Current: Apr'25-Dec'25 baseline → Target: +20% vs Apr'25-Dec'25"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Getting the Best Deal"
    description: "Inspire and reduce booking uncertainty through Price Alerts, Date search and Price Trends, while improving conversion via Price Hold while simultaneously delivering exclusive fares for our Lux+ members."

  - heading: "Frictionless Flights"
    description: "Facilitate seamless bundling of flights with accommodation, wherever the customer starts their journey. Self Service - Purchase ancillaries (seats, meals and baggage) and manage flight bookings (date change, cancellation) via the website."
---
`,__vite_glob_0_18=`---
title: "Growth & Customer Lifecycle"
slug: "growth-customer-lifecycle"
product_group: "Growth & Customer Lifecycle"
hero_image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-04-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-05-31"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Placeholder content"
    start_date: "2026-05-01"
    end_date: "2026-08-31"
  - title: "Placeholder content"
    start_date: "2026-06-01"
    end_date: "2026-09-30"
goals_section_title: "Goals"
goals:
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
---
`,__vite_glob_0_19=`---
title: "LERE"
slug: "lere"
product_group: "Online CX"
hero_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Jake Meyer"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/jacob-meyer.png"
  - name: "Hunter Li"
    title: "Senior Product Manager"
    photo: "/roadmap/images/team-members/hunter-li.png"
  - name: "Quentin Thurier"
    title: "ML Engineer Lead"
    photo: "/roadmap/images/team-members/quentin-thurier.jpg"
  - name: "Stas Pyzhov"
    title: "ML Engineer"
    photo: "/roadmap/images/team-members/stas-pyzhov.jpg"
  - name: "Leo Phu"
    title: "ML Engineer"
    photo: "/roadmap/images/team-members/leo-phu.jpg"
  - name: "Vlad Pyzhov"
    title: "ML Engineer"
    photo: "/roadmap/images/team-members/vlad-pyzhov.jpg"
  - name: "Amy Yang"
    title: "ML Engineer"
    photo: "/roadmap/images/team-members/amy-yang.png"
  - name: "Diego Ramirez"
    title: "ML Engineer"
    photo: "/roadmap/images/team-members/diego-ramirez.jpg"
  - name: "Aseem Sharm"
    title: "ML Engineer"
    photo: "/roadmap/images/team-members/aseem-sharm.jpg"
  - name: "Marcel Qayoom Taylor"
    title: "LERE Software Dev"
  - name: "Lewis Bandas"
    title: "LERE Software Dev"
    photo: "/roadmap/images/team-members/lewis-bandas.jpg"
  - name: "Juzer Zakir"
    title: "LERE Software Dev"
    photo: "/roadmap/images/team-members/juzer-zakir.jpg"
  - name: "Ryan Tian"
    title: "LERE Software Dev Lead"
    photo: "/roadmap/images/team-members/ryan-tian.png"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Dynamic pricing demand regression model"
    start_date: "2026-04-01"
    end_date: "2026-06-31"
  - title: "Improved personalisation model"
    start_date: "2026-04-01"
    end_date: "2026-08-31"
  - title: "Expand and improve LE Convert"
    start_date: "2026-07-01"
    end_date: "2026-10-31"
  - title: "Google bidding recommendations"
    start_date: "2026-04-01"
    end_date: "2026-12-31"
  - title: "Daily TPFM expansion and improvement"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Expand LP+ discount tests across regions"
    start_date: "2026-08-01"
    end_date: "2026-12-31"
goals_section_title: "Goals"
goals:
  - headline: "Increase sold-out rate of high demand surcharged rooms"
    description: "Current: 55% → Target: 60%"
  - headline: "Increase monthly dynamic pricing revenue"
    description: "Current: 460k → Target: 500k"
  - headline: "Increase personalised email send (Daily and Weekly TPFM and LE Convert)"
    description: "Current: 4.7m → Target: 6m per month"
  - headline: "Increase Flash deal specific campaign CM / month"
    description: "Current: 250k → Target: 300k, while maintaining mROAS>=1.1"
  - headline: "Increase total margin that involves LERE powered recommendation"
    description: "Current: 1.5m → Target: 2m per month"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "External Signals for Dynamic Pricing"
    description: "We're enhancing our dynamic pricing capability by incorporating external signals such as holidays, major events, weather patterns, and competitor pricing into our pricing models. This allows us to better anticipate demand fluctuations and optimise pricing decisions earlier in the lifecycle of an offer. By enriching our models with these signals, we can more accurately predict demand, improve sold-out rates, and maximise margin by applying more precise surcharges or discounts in response to real-world conditions."
  - heading: "International Personalisation Through Location-Aware Recommendations"
    description: "We're improving personalisation for international users by introducing location-aware features into our recommendation models. This includes incorporating signals such as the distance between the user's home location and destinations, as well as segmenting training data and model behaviour by user region. By better capturing geographic preferences and behavioural differences across markets, we can deliver more relevant recommendations, improve engagement, and drive higher conversion rates globally."
  - heading: "LE Convert Personalised Incentive Optimisation"
    description: "We're improving LE Convert by introducing personalised promo value modelling to determine the optimal incentive required to drive conversion for each user. By predicting how much discount a customer needs to complete a booking, we can tailor coupon values to maximise margin efficiency. This includes testing lower-value incentives for users who are highly likely (or very unlikely) to convert, ensuring we avoid over-subsidising demand while still effectively driving conversions."
---
`,__vite_glob_0_20=`---
title: Growth
hero_image: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80
team_members:
  - name: Jason Leiboff
    title: Product Manager
    photo: /roadmap/images/team-members/jason-leiboff.jpg
  - name: Sam Drown
    title: Director of Product
    photo: /roadmap/images/team-members/sam-drown.png
  - name: Colin Pringle-Wood
    title: Engineering Manager
    photo: /roadmap/images/team-members/colin-pringle-wood.jpg
  - name: Thilina Piyadasun
    title: Senior Engineer
    photo: /roadmap/images/team-members/thilina-piyadasun.jpg
  - name: James Ly
    title: Senior Software Engineer
    photo: /roadmap/images/team-members/james-ly.jpg
  - name: Greg Cumming
    title: Senior Software Engineer
    photo: /roadmap/images/team-members/greg-cumming.jpg
  - name: Alex Teng
    title: Software Engineer
    photo: /roadmap/images/team-members/alex-teng.png
  - name: Darren Zhang
    title: Software Engineer
    photo: /roadmap/images/TCWH2EC6L-U09P5QU3Z6V-b38dcc6c2a76-512.jpeg
gantt_items:
  - title: Optimise Metasearch Experience
    start_date: 2026-04-01
    end_date: 2026-12-31
  - title: Improve Price Competitiveness and Coverage on GHA
    start_date: 2026-04-01
    end_date: 2026-12-31
  - title: Build and Scale Voucher System
    start_date: 2026-04-01
    end_date: 2026-07-31
  - title: Multi-Language Support
    start_date: 2026-04-16
    end_date: 2026-06-30
  - title: Automate Meta Creative and Campaigns
    start_date: 2026-04-16
    end_date: 2026-05-31
  - title: Google Ad Budget Optimisation Tools
    start_date: 2026-06-01
    end_date: 2026-08-31
  - title: Activate 'Google Things To Do'
    start_date: 2026-08-01
    end_date: 2026-09-30
  - title: Optimise Geographic SEO Structure
    start_date: 2026-09-01
    end_date: 2026-11-30
goals:
  - headline: Increase GHA Conversion Rate
    description: "Current: 0.70% → Target: 0.80% (15% increase)"
  - headline: Reduce Blended CAC
    description: "Current: $425 → Target: $420 (5% reduction)"
  - headline: Increase first-order GM
    description: "Current: ~$22m per QTR → Target: ~$23m per QTR (5% increase)"
key_initiatives:
  - heading: Optimise Metasearch Experience
    description: Improve the landing and booking experience for metasearch users to
      increase conversion rates and scale performance. This will be achieved
      through ongoing experimentation and optimisation across areas such as
      pricing display, search relevance, and booking flow design. By tailoring
      the experience specifically for high-intent users, we want to improve
      engagement and maximise the value of metasearch traffic.
  - heading: Improve Price Competitiveness and Coverage on GHA
    description: Improve pricing competitiveness and availability on Google Hotel
      Ads to ensure Luxury Escapes can participate in more auctions and drive
      stronger returns across key properties. This will involve enhancing how we
      set and adjust prices based on market conditions, while improving our
      ability to consistently return live pricing for a broader range of
      inventory. Together, these improvements will increase our visibility,
      capture more high-intent demand, and enable more efficient scaling of the
      channel.
  - heading: Build and Scale Voucher System
    description: Launch a flexible voucher system that enables targeted discounts,
      credits, and promotional incentives to drive acquisition, conversion, and
      retention. This will allow us to deliver more personalised and timely
      offers across channels, improving marketing effectiveness and customer
      engagement. By strengthening how we deploy and manage incentives, we can
      increase conversion rates while maintaining greater control over margin
      and promotional strategy.
  - heading: Multi-Language Support
    description: Enable additional language support across marketing systems,
      including ad feeds, Contentful pages and SEO content, to support expansion
      in non-English markets. This will allow us to more effectively acquire and
      convert customers in international regions by delivering content and
      offers in their local language. Over time, this capability will form a key
      foundation for scaling our presence globally and improving performance
      across new markets.
  - heading: Automate Meta Creative and Campaigns
    description: Automate Meta creative and campaign launch to reduce manual effort
      and enable faster scaling of paid social activity. By building tools to
      generate creative assets, create campaigns and manage scheduling through
      internal systems, we can increase launch speed and support more frequent
      testing. Over time, this will improve efficiency, expand creative output,
      and strengthen our ability to optimise performance on Meta.
  - heading: Google Ad Budget Optimisation Tools
    description: Build internal tools to automate and centralise budget optimisation
      across advertising platforms, enabling faster and more data-driven
      allocation of marketing spend. By reducing manual intervention and
      improving visibility across campaigns, we can respond more quickly to
      performance changes and scale investment more efficiently across markets.
      This will support more consistent decision-making and unlock greater
      efficiency in how we deploy marketing budgets
  - heading: Activate 'Google Things To Do'
    description: Enable Google Things To Do as a new acquisition channel to increase
      visibility and drive growth in our experiences offering. By integrating
      our inventory into this high-intent platform, we can capture users
      actively searching for activities and experiences at the point of
      planning. This will help us expand reach, drive incremental traffic, and
      improve conversion across our experiences category.
  - heading: Optimise Geographic SEO Structure
    description: Optimise our geographic SEO structure to improve search visibility
      and better capture location-based travel demand. By refining how
      destination, regional and location pages are structured and surfaced, we
      can increase relevance for user searches and drive more qualified traffic.
      This will support higher conversion rates and more efficient acquisition
      through organic channels.
---
`,__vite_glob_0_21=`---
title: "Loyalty"
slug: "loyalty"
product_group: "Online CX"
hero_image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Gus Stone-Heesh"
    title: "Senior Product Manager"
    photo: "/roadmap/images/team-members/gus-stone-heesh.png"
  - name: "James Nevett"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/james-nevett.jpg"
  - name: "Amanda Tansi"
    title: "Director of Design"
    photo: "/roadmap/images/team-members/amanda-tansi.jpg"
  - name: "Erik BI"
    title: "Engineering Manager"
    photo: "/roadmap/images/team-members/erik-bi.jpg"
  - name: "Harry Frankel"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/harry-frankel.png"
  - name: "Alex Pavliuk"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/alex-pavliuk.jpg"
  - name: "James Qu"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/james-qu.png"
  - name: "Jun Woo"
    title: "Associate Engineer"
    photo: "/roadmap/images/team-members/jun-woo.jpg"
  - name: "Justin Lei"
    title: "Associate Engineer"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Societe class rewards"
    start_date: "2026-04-01"
    end_date: "2026-12-01"
  - title: "LE x MoneyMe credit card"
    start_date: "2026-04-07"
    end_date: "2026-06-06"
  - title: "LuxPlus+ pricing flights, experiences and cruises"
    start_date: "2026-04-14"
    end_date: "2026-07-02"
  - title: "Societe global airport transfers"
    start_date: "2026-04-01"
    end_date: "2026-08-02"
  - title: "Upgrades on SPP and LPP packages"
    start_date: "2026-04-01"
    end_date: "2026-09-02"
  - title: "Tiered LuxPlus+ plan"
    start_date: "2026-07-07"
    end_date: "2026-10-07"
goals_section_title: "Goals"
goals:
  - headline: "Number of orders per active Societe member"
    description: "Current: 1.84 → Target: 1.95 (increase by 6%)"
  - headline: "Number of customers accruing points through partners"
    description: "Current: 0 → Target: 15,000"
  - headline: "Increase LuxPlus+ renewal rate"
    description: "Current: 56% → Target: 61% (increase by 5%)"
  - headline: "LuxPlus+ take up rate"
    description: "Current: 18.5% → Target: 20%"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Societe Earn Partnerships and Financial Products"
    description: "We're expanding the ways members can earn Societe points beyond the LE platform, keeping Societe front of mind during everyday spend and creating new acquisition channels as partners market Societe points as an incentive to their own customers. This includes launching a suite of co-branded financial products that reward everyday spending with Societe points, starting with the MoneyMe x LE Credit Card and EML Dining Card. We will also partner with leading companies and loyalty programs globally so members can link their Societe account and earn points when spending with other businesses, fully funded by our partners. Partner businesses include HelloFresh, RewardPay, Medibank."
  - heading: "Societe Class Rewards"
    description: "Societe Class Rewards are exclusive, limited-availability offers where members can redeem their Societe points at a significantly higher value than a standard redemption, meaning their points stretch further and unlock experiences they couldn't get elsewhere. We'll first roll this out across Maldives charter flights, then expand to flash and tour products. By anchoring Class Rewards to specific inventory, we can drive demand to distressed and high-priority products while giving members an exceptional redemption experience, increasing both the perceived and actual value of their points."
  - heading: "LuxPlus+ Pricing Across Flights, Experiences and Cruises"
    description: "Enhance the value of LuxPlus+ by extending member pricing beyond hotels and tours to cover a broader range of our products, giving members more ways to offset their subscription fee. As a result, increasing the perceived and actual value of LuxPlus+, gaining a higher share of wallet and driving stronger renewal rates."
---
`,__vite_glob_0_22=`---
title: "Mobile App"
slug: "mobile-app"
product_group: "Online CX"
hero_image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Tom Strathern"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/tom-strathern.png"
  - name: "Tyler Yang"
    title: "Engineer Manager"
    photo: "/roadmap/images/team-members/tyler-yang.png"
  - name: "Harikrishnan Gopalakrishnan"
    title: "QA"
    photo: "/roadmap/images/team-members/harikrishnan-gopalakrishnan.jpg"
  - name: "Hayden Jamieson"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/hayden-jamieson.png"
  - name: "Ryan Cole"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/ryan-cole.jpg"
  - name: "Noah Little"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/noah-little.png"
  - name: "Dicko Evaldo"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/dicko-evaldo.png"
  - name: "Pavel Dmitriev"
    title: "Software Engineer"
  - name: "Sergey Kartavtsev"
    title: "Software Engineer"
  - name: "Denis Babak"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/denis-babak.jpg"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Localisation"
    start_date: "2026-04-01"
    end_date: "2026-05-31"
  - title: "Streamlined booking flow"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Refreshed search experience"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Personalised articles and content"
    start_date: "2026-06-01"
    end_date: "2026-07-31"
  - title: "Flight status alerts"
    start_date: "2026-04-01"
    end_date: "2026-05-31"
  - title: "Native looking webviews"
    start_date: "2026-09-01"
    end_date: "2026-11-30"
goals_section_title: "Goals"
goals:
  - headline: "Increase 28-day retention"
    description: "Current: 5.25% → Target: 6%"
  - headline: "Increase conversion"
    description: "Current: 1.5% → Target: 1.6%"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Localisation"
    description: "Expand localisation across the app (language, currency, date formats and region-specific content) so international customers see a more relevant, trustworthy experience that reduces confusion and lifts conversion. This involves initiatives such as multi-language and right-to-left UI."
  - heading: "Streamlined Booking Flow"
    description: "Redesign key booking steps like room and package selection to reduce current high drop off, turning more existing consideration traffic into confirmed bookings. Currently, both selecting a room and selecting a package both see a 60% abandonment rate."
  - heading: "Refreshed Search Experience"
    description: "Refresh the search experience and lean into Natural Language Search so customers can find the right escape faster (and with more confidence), improving search engagement and downstream booking conversion through clearer results, filters, and guidance."
---
`,__vite_glob_0_23=`---
title: "On-Site Search"
slug: "on-site-search"
product_group: "Online CX"
hero_image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Hunter Li"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/hunter-li.png"
  - name: "Geoffroy Lesage"
    title: "Engineering Manager"
    photo: "/roadmap/images/team-members/geoffroy-lesage.jpg"
  - name: "Finbar Kelly"
    title: "Engineer"
    photo: "/roadmap/images/team-members/finbar-kelly.png"
  - name: "Quan Tang"
    title: "Engineer"
    photo: "/roadmap/images/team-members/quan-tang.png"
  - name: "Adi Sembiring"
    title: "Engineer"
    photo: "/roadmap/images/team-members/adi-sembiring.png"
  - name: "Murtaza Roondiwala"
    title: "Engineer"
    photo: "/roadmap/images/team-members/murtaza-roondiwala.jpg"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Conversational and Inspirational Search"
    start_date: "2026-07-01"
    end_date: "2026-12-01"
  - title: "LLM to rank unsupported queries in NLS"
    start_date: "2026-04-13"
    end_date: "2026-06-30"
  - title: "Natural Language Search for Experiences"
    start_date: "2026-07-01"
    end_date: "2026-10-14"
  - title: "Improve Google Landing Page"
    start_date: "2026-05-01"
    end_date: "2026-07-31"
  - title: "Improve search UI experiences for other verticals"
    start_date: "2026-09-01"
    end_date: "2026-12-01"
  - title: "Enrich amenities and facilities filters"
    start_date: "2026-10-01"
    end_date: "2026-12-29"
goals_section_title: "Goals"
goals:
  - headline: "Conversion rate from search improve by 5%"
    description: "Current: 0.78% → Target: 0.83%"
  - headline: "Percentages of searches with clicks by 8%"
    description: "Current: 24% → Target: 26%"
  - headline: "Median click position in search results"
    description: "Current: 4th → Target: 3rd position"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Improve Hotels NLS Results"
    description: "Rank by hotel with most relevant inclusions and amenities, expand searchable queries using LLM to rank offers for unsupported queries, recommend high CVR offers and locations when searched area has low supply, update hero image based on user query, expand to conversational search experiences, and enable LLM driven tagging for marketplace offers."
  - heading: "Conversational Unified Search"
    description: "Conversational and inspirational unified search brings multiple verticals into one place, allowing users to explore through natural dialogue. By understanding intent and context, it surfaces relevant, cross-domain results seamlessly and enables bundling of complementary options, turning open-ended queries into personalised discovery and actionable inspiration."
  - heading: "Increased Visibility of NLS"
    description: "Increase visibility and adoption of Natural Language Search (NLS) through intelligent typeahead suggestions that guide users with commonly selected inclusion types and holiday categories, making exploration more intuitive. Over time, suggestions become more personalised by adapting to individual user behaviour, creating a more relevant, context-aware, and engaging discovery experience."
---
`,__vite_glob_0_24=`---
title: "Online CX"
slug: "online-cx"
product_group: "Online CX"
hero_image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-04-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-05-31"
  - title: "Placeholder content"
    start_date: "2026-05-01"
    end_date: "2026-08-31"
  - title: "Placeholder content"
    start_date: "2026-06-01"
    end_date: "2026-09-30"
  - title: "Placeholder content"
    start_date: "2026-07-01"
    end_date: "2026-09-30"
goals_section_title: "Goals"
goals:
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
---
`,__vite_glob_0_25=`---
title: "OperEx"
slug: "self-service"
product_group: "Customer Service & Sales Experience"
hero_image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Min Pangastur"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/min-pangastur.jpg"
  - name: "Matt Alty"
    title: "Product Designer"
    photo: "/roadmap/images/team-members/matt-alty.jpg"
  - name: "Eugene Moskvita"
    title: "Group Engineering Manager"
    photo: "/roadmap/images/team-members/eugene-moskvita.png"
  - name: "Gearoid Sheehan"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/gearoid-sheehan.webp"
  - name: "Felix Ivanov"
    title: "Senior Software Engineer"
    photo: "/roadmap/images/team-members/felix-ivanov.jpg"
  - name: "Yogeshwar Girish Chaudhari"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/yogeshwar-girish-chaudhari.jpg"
  - name: "Maaz Ahmed"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/maaz-ahmed.jpg"
  - name: "James Beattie"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/james-beattie.jpg"
  - name: "Rayhan Mendis"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/rayhan-mendis.jpg"
  - name: "Lachlan McEwen"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/lachlan-mcewen.jpg"
  - name: "Hardik Purohit"
    title: "Associate Software Engineer"
    photo: "/roadmap/images/team-members/hardik-purohit.jpg"
  - name: "Blake Leahy"
    title: "Associate Software Engineer"
    photo: "/roadmap/images/team-members/blake-leahy.png"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "LESA - Your Personal Travel Concierge"
    start_date: "2026-04-10"
    end_date: "2026-10-30"
  - title: "Expanding Self-Service For Channel Managers And LPP"
    start_date: "2026-05-01"
    end_date: "2026-07-10"
  - title: "Content Automation"
    start_date: "2026-04-01"
    end_date: "2026-04-02"
  - title: "Group Custom Offer"
    start_date: "2026-04-10"
    end_date: "2026-05-01"
goals_section_title: "Goals"
goals:
  - headline: "Reduce CS Cost Per Order by 20% (YoY)"
    description: "Current: $11.92/order → Target: $9.50/order in December"
  - headline: "Decrease LESA Human Intervention Rate"
    description: "Current: 45% → Target: 30%"
  - headline: "Increase LESA Case Deflection Rate"
    description: "Current: 32% → Target: 50%"
  - headline: "Increase LESA Call Deflection Rate"
    description: "Current: 75% → Target: 85%"
  - headline: "Expand Self-Service Functionality"
    description: "Current: limited coverage → Target: All accommodation types to have the same self-service functionality as flash"
  - headline: "Reduce Deal Production Time"
    description: "Current: baseline → Target: By 25% across all offers/verticals"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "LESA - Your Personal Travel Concierge"
    description: "With the improvement of LLMs/AI in recent years, we are redesigning LESA to be agentic, where LESA will become the personal travel concierge. LESA will be able to handle a variety of questions about anything related to Luxury Escapes, and be able to handle complex post-purchase operations."
  - heading: "Expanding Self-Service For Channel Managers And LPP"
    description: "Extend self-service capabilities so that all accommodation types, including channel manager and LPP properties, have the same self-service functionality currently available for flash deals. This reduces customer service overhead and gives customers more autonomy over their bookings."
  - heading: "Content Automation"
    description: "Automate deal content production to reduce the time required to create and publish new offers across all verticals, targeting a 25% reduction in deal production time."
---
`,__vite_glob_0_26=`---
title: "Special Projects"
slug: "special-projects"
product_group: "Supply"
hero_image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-05-31"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-08-31"
  - title: "Placeholder content"
    start_date: "2026-06-01"
    end_date: "2026-09-30"
goals_section_title: "Goals"
goals:
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
---
`,__vite_glob_0_27=`---
title: "Tours"
slug: "tours"
product_group: "Supply"
hero_image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Renan Murta"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/renan-murta.jpg"
  - name: "Edward Iskenderian"
    title: "Engineer Manager"
    photo: "/roadmap/images/team-members/edward-iskenderian.jpg"
  - name: "Allanah Nassif"
    title: "Software Engineer"
    photo: "/roadmap/images/team-members/allanah-nassif.jpg"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Tailor-Made and Private Tour"
    start_date: "2026-04-21"
    end_date: "2026-12-01"
  - title: "Tours Back end Revamp"
    start_date: "2026-04-27"
    end_date: "2026-12-13"
  - title: "Manifest accuracy"
    start_date: "2026-04-27"
    end_date: "2026-09-13"
  - title: "Inventory management"
    start_date: "2026-04-27"
    end_date: "2026-09-13"
  - title: "Vendor financial concilliation"
    start_date: "2026-06-27"
    end_date: "2026-10-13"
  - title: "Private jet experience seat selection"
    start_date: "2026-06-27"
    end_date: "2026-07-13"
  - title: "Tours personalisation"
    start_date: "2026-08-27"
    end_date: "2026-12-13"
goals_section_title: "Goals"
goals:
  - headline: "Increase GM in Tours by 25%"
    description: "Current: 10M → Target: 13.5M"
  - headline: "Expand Tailor Made tours by 15%"
    description: "Current: 1M quarter → Target: 1.15M"
  - headline: "Increase operational efficiency on tour setup/itinerary changes by 85%"
    description: "Current: 7h per tour setup → Target: 1h"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Tailor-Made and Private Tour"
    description: "Reintroduce Private Tours as a scalable and high-value revenue stream, enabling more personalised and flexible travel experiences. This initiative enhances both operational capabilities and customer-facing journeys, making it easier for customers to request, customise and book private itineraries while strengthening Luxury Escapes' position in premium and bespoke travel."

  - heading: "Tours Back End Revamp"
    description: "Modernise the Tours infrastructure to support scale, efficiency and flexibility as the business grows. This initiative focuses on simplifying internal processes, improving partner collaboration and enabling faster changes to itineraries and bookings, ultimately delivering a more reliable and seamless experience for both customers and operations."
---
`,__vite_glob_0_28=`---
title: "Trip Planner"
slug: "trip-planner"
product_group: "Online CX"
hero_image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "William Ritossa"
    title: "Product Manager"
    photo: "/roadmap/images/team-members/william-ritossa.png"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Expand regions"
    start_date: "2026-05-01"
    end_date: "2026-07-30"
  - title: "Collaboration and sharing"
    start_date: "2026-07-01"
    end_date: "2026-10-30"
goals_section_title: "Goals"
goals:
  - headline: "Support multi-destination and complex itinerary planning"
    description: "TripPlanner users skew towards complicated multi-destination trips → Tool can make recommendations based on full customer plan and complex travel needs"
  - headline: "Expand TripPlanner reach and discoverability"
    description: "MVP is desktop-only with limited awareness → Available on mobile web with active product marketing driving adoption"
  - headline: "Enable trip collaboration and sharing"
    description: "Current sharing capabilities limited → Customers can easily share trips with travel companions"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Chat TripPlanner on Mobile Web"
    description: "The MVP is currently desktop-only. Building mobile web support is critical to reach more customers and ensure the TripPlanner experience is available across all devices. This is the highest priority for expanding TripPlanner's reach and enabling more customers to benefit from the AI-powered planning tool."
  - heading: "Lean More Into NLS"
    description: "The natural language search experience in TripPlanner is very compelling, especially with how customers can ask follow-up questions and use the map. Making TripPlanner a much stronger agentic discovery tool that helps customers explore and plan complex, multi-destination trips more naturally. This is highly experimental but has significant promise for increasing engagement and conversion."
  - heading: "Recommend Offers Based on Trip"
    description: "TripPlanner users skew towards more complicated, multi-destination trips which Luxury Escapes doesn't currently handle as well as needed. Building capability to recommend hotels, flights, and experiences based on the customer's full trip plan will help convert more complex itineraries and increase multi-product attach rates."
---
`,__vite_glob_0_29=`---
title: "Voice AI"
slug: "voice-ai"
product_group: "Customer Service & Sales Experience"
hero_image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&auto=format&fit=crop&q=80"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "AI Voice Bot v1 – Inbound Triage"
    start_date: "2026-04-01"
    end_date: "2026-05-31"
  - title: "Intent Classification Model"
    start_date: "2026-04-01"
    end_date: "2026-04-30"
  - title: "Voice Bot – Booking Status Queries"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Voice Bot – Cancellation Flow"
    start_date: "2026-06-01"
    end_date: "2026-09-30"
  - title: "Agent Assist Real-Time Suggestions"
    start_date: "2026-07-01"
    end_date: "2026-09-30"
goals_section_title: "Goals"
goals:
  - headline: "Scale voice operations"
    description: "Current: 100 calls/day → Target: 300 calls/day"
  - headline: "Increase good calls"
    description: "Current: 60% → Target: 90%"
  - headline: "Increase deflection"
    description: "Current: 10% → Target: 25%"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Scale Voice AI to 24/7 operations"
    description: "Expand voice AI coverage from current limited hours to round-the-clock availability, enabling global customer support and handling 300+ calls per day."
  - heading: "Booking authority workflow"
    description: "Enable voice AI to complete bookings and modifications with proper verification and authorization, turning voice interactions into revenue-generating transactions."
  - heading: "Self service workflows"
    description: "Build automated voice workflows for common requests including booking status, payment processing, verification, and triage to live agents based on complexity."
---
`,__vite_glob_0_30=`---
title: "White Labels"
slug: "white-labels"
product_group: "Distribution & Partnerships"
hero_image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1600&auto=format&fit=crop&q=80"
team_members:
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
  - name: "Placeholder content"
    title: "Placeholder content"
gantt_section_title: "2026 Roadmap"
gantt_items:
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-06-30"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-07-31"
  - title: "Placeholder content"
    start_date: "2026-04-01"
    end_date: "2026-05-31"
  - title: "Placeholder content"
    start_date: "2026-06-01"
    end_date: "2026-09-30"
goals_section_title: "Goals"
goals:
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
  - headline: "Placeholder content"
    description: "Placeholder content → Placeholder content"
initiatives_section_title: "Key Initiatives"
key_initiatives:
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
  - heading: "Placeholder content"
    description: "Placeholder content"
---
`,__viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(__viteBrowserExternal$1);var toString=Object.prototype.toString,kindOf=function(o){if(o===void 0)return"undefined";if(o===null)return"null";var a=typeof o;if(a==="boolean")return"boolean";if(a==="string")return"string";if(a==="number")return"number";if(a==="symbol")return"symbol";if(a==="function")return isGeneratorFn(o)?"generatorfunction":"function";if(isArray(o))return"array";if(isBuffer$1(o))return"buffer";if(isArguments(o))return"arguments";if(isDate(o))return"date";if(isError(o))return"error";if(isRegexp(o))return"regexp";switch(ctorName(o)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(isGeneratorObj(o))return"generator";switch(a=toString.call(o),a){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return a.slice(8,-1).toLowerCase().replace(/\s/g,"")};function ctorName(e){return typeof e.constructor=="function"?e.constructor.name:null}function isArray(e){return Array.isArray?Array.isArray(e):e instanceof Array}function isError(e){return e instanceof Error||typeof e.message=="string"&&e.constructor&&typeof e.constructor.stackTraceLimit=="number"}function isDate(e){return e instanceof Date?!0:typeof e.toDateString=="function"&&typeof e.getDate=="function"&&typeof e.setDate=="function"}function isRegexp(e){return e instanceof RegExp?!0:typeof e.flags=="string"&&typeof e.ignoreCase=="boolean"&&typeof e.multiline=="boolean"&&typeof e.global=="boolean"}function isGeneratorFn(e,o){return ctorName(e)==="GeneratorFunction"}function isGeneratorObj(e){return typeof e.throw=="function"&&typeof e.return=="function"&&typeof e.next=="function"}function isArguments(e){try{if(typeof e.length=="number"&&typeof e.callee=="function")return!0}catch(o){if(o.message.indexOf("callee")!==-1)return!0}return!1}function isBuffer$1(e){return e.constructor&&typeof e.constructor.isBuffer=="function"?e.constructor.isBuffer(e):!1}/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var isExtendable=function(o){return typeof o<"u"&&o!==null&&(typeof o=="object"||typeof o=="function")},isObject$1=isExtendable,extendShallow=function(o){isObject$1(o)||(o={});for(var a=arguments.length,s=1;s<a;s++){var c=arguments[s];isObject$1(c)&&assign(o,c)}return o};function assign(e,o){for(var a in o)hasOwn(o,a)&&(e[a]=o[a])}function hasOwn(e,o){return Object.prototype.hasOwnProperty.call(e,o)}var typeOf$2=kindOf,extend$1=extendShallow,sectionMatter=function(e,o){typeof o=="function"&&(o={parse:o});var a=toObject(e),s={section_delimiter:"---",parse:identity},c=extend$1({},s,o),d=c.section_delimiter,h=a.content.split(/\r?\n/),g=null,b=createSection(),$=[],tt=[];function et(lt){a.content=lt,g=[],$=[]}function rt(lt){tt.length&&(b.key=getKey(tt[0],d),b.content=lt,c.parse(b,g),g.push(b),b=createSection(),$=[],tt=[])}for(var ot=0;ot<h.length;ot++){var ft=h[ot],pt=tt.length,vt=ft.trim();if(isDelimiter(vt,d)){if(vt.length===3&&ot!==0){if(pt===0||pt===2){$.push(ft);continue}tt.push(vt),b.data=$.join(`
`),$=[];continue}g===null&&et($.join(`
`)),pt===2&&rt($.join(`
`)),tt.push(vt);continue}$.push(ft)}return g===null?et($.join(`
`)):rt($.join(`
`)),a.sections=g,a};function isDelimiter(e,o){return!(e.slice(0,o.length)!==o||e.charAt(o.length+1)===o.slice(-1))}function toObject(e){if(typeOf$2(e)!=="object"&&(e={content:e}),typeof e.content!="string"&&!isBuffer(e.content))throw new TypeError("expected a buffer or string");return e.content=e.content.toString(),e.sections=[],e}function getKey(e,o){return e?e.slice(o.length).trim():""}function createSection(){return{key:"",data:"",content:""}}function identity(e){return e}function isBuffer(e){return e&&e.constructor&&typeof e.constructor.isBuffer=="function"?e.constructor.isBuffer(e):!1}var engines$2={exports:{}},jsYaml$1={},loader$1={},common$6={};function isNothing(e){return typeof e>"u"||e===null}function isObject(e){return typeof e=="object"&&e!==null}function toArray(e){return Array.isArray(e)?e:isNothing(e)?[]:[e]}function extend(e,o){var a,s,c,d;if(o)for(d=Object.keys(o),a=0,s=d.length;a<s;a+=1)c=d[a],e[c]=o[c];return e}function repeat(e,o){var a="",s;for(s=0;s<o;s+=1)a+=e;return a}function isNegativeZero(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}common$6.isNothing=isNothing;common$6.isObject=isObject;common$6.toArray=toArray;common$6.repeat=repeat;common$6.isNegativeZero=isNegativeZero;common$6.extend=extend;function YAMLException$4(e,o){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=o,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}YAMLException$4.prototype=Object.create(Error.prototype);YAMLException$4.prototype.constructor=YAMLException$4;YAMLException$4.prototype.toString=function(o){var a=this.name+": ";return a+=this.reason||"(unknown reason)",!o&&this.mark&&(a+=" "+this.mark.toString()),a};var exception=YAMLException$4,common$5=common$6;function Mark$1(e,o,a,s,c){this.name=e,this.buffer=o,this.position=a,this.line=s,this.column=c}Mark$1.prototype.getSnippet=function(o,a){var s,c,d,h,g;if(!this.buffer)return null;for(o=o||4,a=a||75,s="",c=this.position;c>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(c-1))===-1;)if(c-=1,this.position-c>a/2-1){s=" ... ",c+=5;break}for(d="",h=this.position;h<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(h))===-1;)if(h+=1,h-this.position>a/2-1){d=" ... ",h-=5;break}return g=this.buffer.slice(c,h),common$5.repeat(" ",o)+s+g+d+`
`+common$5.repeat(" ",o+this.position-c+s.length)+"^"};Mark$1.prototype.toString=function(o){var a,s="";return this.name&&(s+='in "'+this.name+'" '),s+="at line "+(this.line+1)+", column "+(this.column+1),o||(a=this.getSnippet(),a&&(s+=`:
`+a)),s};var mark=Mark$1,YAMLException$3=exception,TYPE_CONSTRUCTOR_OPTIONS=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],YAML_NODE_KINDS=["scalar","sequence","mapping"];function compileStyleAliases(e){var o={};return e!==null&&Object.keys(e).forEach(function(a){e[a].forEach(function(s){o[String(s)]=a})}),o}function Type$h(e,o){if(o=o||{},Object.keys(o).forEach(function(a){if(TYPE_CONSTRUCTOR_OPTIONS.indexOf(a)===-1)throw new YAMLException$3('Unknown option "'+a+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(a){return a},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.defaultStyle=o.defaultStyle||null,this.styleAliases=compileStyleAliases(o.styleAliases||null),YAML_NODE_KINDS.indexOf(this.kind)===-1)throw new YAMLException$3('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var type=Type$h,common$4=common$6,YAMLException$2=exception,Type$g=type;function compileList(e,o,a){var s=[];return e.include.forEach(function(c){a=compileList(c,o,a)}),e[o].forEach(function(c){a.forEach(function(d,h){d.tag===c.tag&&d.kind===c.kind&&s.push(h)}),a.push(c)}),a.filter(function(c,d){return s.indexOf(d)===-1})}function compileMap(){var e={scalar:{},sequence:{},mapping:{},fallback:{}},o,a;function s(c){e[c.kind][c.tag]=e.fallback[c.tag]=c}for(o=0,a=arguments.length;o<a;o+=1)arguments[o].forEach(s);return e}function Schema$5(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(o){if(o.loadKind&&o.loadKind!=="scalar")throw new YAMLException$2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=compileList(this,"implicit",[]),this.compiledExplicit=compileList(this,"explicit",[]),this.compiledTypeMap=compileMap(this.compiledImplicit,this.compiledExplicit)}Schema$5.DEFAULT=null;Schema$5.create=function(){var o,a;switch(arguments.length){case 1:o=Schema$5.DEFAULT,a=arguments[0];break;case 2:o=arguments[0],a=arguments[1];break;default:throw new YAMLException$2("Wrong number of arguments for Schema.create function")}if(o=common$4.toArray(o),a=common$4.toArray(a),!o.every(function(s){return s instanceof Schema$5}))throw new YAMLException$2("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!a.every(function(s){return s instanceof Type$g}))throw new YAMLException$2("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new Schema$5({include:o,explicit:a})};var schema=Schema$5,Type$f=type,str=new Type$f("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Type$e=type,seq=new Type$e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Type$d=type,map=new Type$d("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Schema$4=schema,failsafe=new Schema$4({explicit:[str,seq,map]}),Type$c=type;function resolveYamlNull(e){if(e===null)return!0;var o=e.length;return o===1&&e==="~"||o===4&&(e==="null"||e==="Null"||e==="NULL")}function constructYamlNull(){return null}function isNull(e){return e===null}var _null=new Type$c("tag:yaml.org,2002:null",{kind:"scalar",resolve:resolveYamlNull,construct:constructYamlNull,predicate:isNull,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),Type$b=type;function resolveYamlBoolean(e){if(e===null)return!1;var o=e.length;return o===4&&(e==="true"||e==="True"||e==="TRUE")||o===5&&(e==="false"||e==="False"||e==="FALSE")}function constructYamlBoolean(e){return e==="true"||e==="True"||e==="TRUE"}function isBoolean(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var bool=new Type$b("tag:yaml.org,2002:bool",{kind:"scalar",resolve:resolveYamlBoolean,construct:constructYamlBoolean,predicate:isBoolean,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"}),common$3=common$6,Type$a=type;function isHexCode(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function isOctCode(e){return 48<=e&&e<=55}function isDecCode(e){return 48<=e&&e<=57}function resolveYamlInteger(e){if(e===null)return!1;var o=e.length,a=0,s=!1,c;if(!o)return!1;if(c=e[a],(c==="-"||c==="+")&&(c=e[++a]),c==="0"){if(a+1===o)return!0;if(c=e[++a],c==="b"){for(a++;a<o;a++)if(c=e[a],c!=="_"){if(c!=="0"&&c!=="1")return!1;s=!0}return s&&c!=="_"}if(c==="x"){for(a++;a<o;a++)if(c=e[a],c!=="_"){if(!isHexCode(e.charCodeAt(a)))return!1;s=!0}return s&&c!=="_"}for(;a<o;a++)if(c=e[a],c!=="_"){if(!isOctCode(e.charCodeAt(a)))return!1;s=!0}return s&&c!=="_"}if(c==="_")return!1;for(;a<o;a++)if(c=e[a],c!=="_"){if(c===":")break;if(!isDecCode(e.charCodeAt(a)))return!1;s=!0}return!s||c==="_"?!1:c!==":"?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(a))}function constructYamlInteger(e){var o=e,a=1,s,c,d=[];return o.indexOf("_")!==-1&&(o=o.replace(/_/g,"")),s=o[0],(s==="-"||s==="+")&&(s==="-"&&(a=-1),o=o.slice(1),s=o[0]),o==="0"?0:s==="0"?o[1]==="b"?a*parseInt(o.slice(2),2):o[1]==="x"?a*parseInt(o,16):a*parseInt(o,8):o.indexOf(":")!==-1?(o.split(":").forEach(function(h){d.unshift(parseInt(h,10))}),o=0,c=1,d.forEach(function(h){o+=h*c,c*=60}),a*o):a*parseInt(o,10)}function isInteger(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!common$3.isNegativeZero(e)}var int=new Type$a("tag:yaml.org,2002:int",{kind:"scalar",resolve:resolveYamlInteger,construct:constructYamlInteger,predicate:isInteger,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),common$2=common$6,Type$9=type,YAML_FLOAT_PATTERN=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function resolveYamlFloat(e){return!(e===null||!YAML_FLOAT_PATTERN.test(e)||e[e.length-1]==="_")}function constructYamlFloat(e){var o,a,s,c;return o=e.replace(/_/g,"").toLowerCase(),a=o[0]==="-"?-1:1,c=[],"+-".indexOf(o[0])>=0&&(o=o.slice(1)),o===".inf"?a===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:o===".nan"?NaN:o.indexOf(":")>=0?(o.split(":").forEach(function(d){c.unshift(parseFloat(d,10))}),o=0,s=1,c.forEach(function(d){o+=d*s,s*=60}),a*o):a*parseFloat(o,10)}var SCIENTIFIC_WITHOUT_DOT=/^[-+]?[0-9]+e/;function representYamlFloat(e,o){var a;if(isNaN(e))switch(o){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(o){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(o){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(common$2.isNegativeZero(e))return"-0.0";return a=e.toString(10),SCIENTIFIC_WITHOUT_DOT.test(a)?a.replace("e",".e"):a}function isFloat(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||common$2.isNegativeZero(e))}var float=new Type$9("tag:yaml.org,2002:float",{kind:"scalar",resolve:resolveYamlFloat,construct:constructYamlFloat,predicate:isFloat,represent:representYamlFloat,defaultStyle:"lowercase"}),Schema$3=schema,json=new Schema$3({include:[failsafe],implicit:[_null,bool,int,float]}),Schema$2=schema,core=new Schema$2({include:[json]}),Type$8=type,YAML_DATE_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),YAML_TIMESTAMP_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function resolveYamlTimestamp(e){return e===null?!1:YAML_DATE_REGEXP.exec(e)!==null||YAML_TIMESTAMP_REGEXP.exec(e)!==null}function constructYamlTimestamp(e){var o,a,s,c,d,h,g,b=0,$=null,tt,et,rt;if(o=YAML_DATE_REGEXP.exec(e),o===null&&(o=YAML_TIMESTAMP_REGEXP.exec(e)),o===null)throw new Error("Date resolve error");if(a=+o[1],s=+o[2]-1,c=+o[3],!o[4])return new Date(Date.UTC(a,s,c));if(d=+o[4],h=+o[5],g=+o[6],o[7]){for(b=o[7].slice(0,3);b.length<3;)b+="0";b=+b}return o[9]&&(tt=+o[10],et=+(o[11]||0),$=(tt*60+et)*6e4,o[9]==="-"&&($=-$)),rt=new Date(Date.UTC(a,s,c,d,h,g,b)),$&&rt.setTime(rt.getTime()-$),rt}function representYamlTimestamp(e){return e.toISOString()}var timestamp=new Type$8("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:resolveYamlTimestamp,construct:constructYamlTimestamp,instanceOf:Date,represent:representYamlTimestamp}),Type$7=type;function resolveYamlMerge(e){return e==="<<"||e===null}var merge=new Type$7("tag:yaml.org,2002:merge",{kind:"scalar",resolve:resolveYamlMerge});function commonjsRequire(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var NodeBuffer;try{var _require$1=commonjsRequire;NodeBuffer=_require$1("buffer").Buffer}catch{}var Type$6=type,BASE64_MAP=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function resolveYamlBinary(e){if(e===null)return!1;var o,a,s=0,c=e.length,d=BASE64_MAP;for(a=0;a<c;a++)if(o=d.indexOf(e.charAt(a)),!(o>64)){if(o<0)return!1;s+=6}return s%8===0}function constructYamlBinary(e){var o,a,s=e.replace(/[\r\n=]/g,""),c=s.length,d=BASE64_MAP,h=0,g=[];for(o=0;o<c;o++)o%4===0&&o&&(g.push(h>>16&255),g.push(h>>8&255),g.push(h&255)),h=h<<6|d.indexOf(s.charAt(o));return a=c%4*6,a===0?(g.push(h>>16&255),g.push(h>>8&255),g.push(h&255)):a===18?(g.push(h>>10&255),g.push(h>>2&255)):a===12&&g.push(h>>4&255),NodeBuffer?NodeBuffer.from?NodeBuffer.from(g):new NodeBuffer(g):g}function representYamlBinary(e){var o="",a=0,s,c,d=e.length,h=BASE64_MAP;for(s=0;s<d;s++)s%3===0&&s&&(o+=h[a>>18&63],o+=h[a>>12&63],o+=h[a>>6&63],o+=h[a&63]),a=(a<<8)+e[s];return c=d%3,c===0?(o+=h[a>>18&63],o+=h[a>>12&63],o+=h[a>>6&63],o+=h[a&63]):c===2?(o+=h[a>>10&63],o+=h[a>>4&63],o+=h[a<<2&63],o+=h[64]):c===1&&(o+=h[a>>2&63],o+=h[a<<4&63],o+=h[64],o+=h[64]),o}function isBinary(e){return NodeBuffer&&NodeBuffer.isBuffer(e)}var binary=new Type$6("tag:yaml.org,2002:binary",{kind:"scalar",resolve:resolveYamlBinary,construct:constructYamlBinary,predicate:isBinary,represent:representYamlBinary}),Type$5=type,_hasOwnProperty$3=Object.prototype.hasOwnProperty,_toString$2=Object.prototype.toString;function resolveYamlOmap(e){if(e===null)return!0;var o=[],a,s,c,d,h,g=e;for(a=0,s=g.length;a<s;a+=1){if(c=g[a],h=!1,_toString$2.call(c)!=="[object Object]")return!1;for(d in c)if(_hasOwnProperty$3.call(c,d))if(!h)h=!0;else return!1;if(!h)return!1;if(o.indexOf(d)===-1)o.push(d);else return!1}return!0}function constructYamlOmap(e){return e!==null?e:[]}var omap=new Type$5("tag:yaml.org,2002:omap",{kind:"sequence",resolve:resolveYamlOmap,construct:constructYamlOmap}),Type$4=type,_toString$1=Object.prototype.toString;function resolveYamlPairs(e){if(e===null)return!0;var o,a,s,c,d,h=e;for(d=new Array(h.length),o=0,a=h.length;o<a;o+=1){if(s=h[o],_toString$1.call(s)!=="[object Object]"||(c=Object.keys(s),c.length!==1))return!1;d[o]=[c[0],s[c[0]]]}return!0}function constructYamlPairs(e){if(e===null)return[];var o,a,s,c,d,h=e;for(d=new Array(h.length),o=0,a=h.length;o<a;o+=1)s=h[o],c=Object.keys(s),d[o]=[c[0],s[c[0]]];return d}var pairs=new Type$4("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:resolveYamlPairs,construct:constructYamlPairs}),Type$3=type,_hasOwnProperty$2=Object.prototype.hasOwnProperty;function resolveYamlSet(e){if(e===null)return!0;var o,a=e;for(o in a)if(_hasOwnProperty$2.call(a,o)&&a[o]!==null)return!1;return!0}function constructYamlSet(e){return e!==null?e:{}}var set=new Type$3("tag:yaml.org,2002:set",{kind:"mapping",resolve:resolveYamlSet,construct:constructYamlSet}),Schema$1=schema,default_safe=new Schema$1({include:[core],implicit:[timestamp,merge],explicit:[binary,omap,pairs,set]}),Type$2=type;function resolveJavascriptUndefined(){return!0}function constructJavascriptUndefined(){}function representJavascriptUndefined(){return""}function isUndefined(e){return typeof e>"u"}var _undefined=new Type$2("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:resolveJavascriptUndefined,construct:constructJavascriptUndefined,predicate:isUndefined,represent:representJavascriptUndefined}),Type$1=type;function resolveJavascriptRegExp(e){if(e===null||e.length===0)return!1;var o=e,a=/\/([gim]*)$/.exec(e),s="";return!(o[0]==="/"&&(a&&(s=a[1]),s.length>3||o[o.length-s.length-1]!=="/"))}function constructJavascriptRegExp(e){var o=e,a=/\/([gim]*)$/.exec(e),s="";return o[0]==="/"&&(a&&(s=a[1]),o=o.slice(1,o.length-s.length-1)),new RegExp(o,s)}function representJavascriptRegExp(e){var o="/"+e.source+"/";return e.global&&(o+="g"),e.multiline&&(o+="m"),e.ignoreCase&&(o+="i"),o}function isRegExp(e){return Object.prototype.toString.call(e)==="[object RegExp]"}var regexp=new Type$1("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:resolveJavascriptRegExp,construct:constructJavascriptRegExp,predicate:isRegExp,represent:representJavascriptRegExp}),esprima;try{var _require=commonjsRequire;esprima=_require("esprima")}catch{typeof window<"u"&&(esprima=window.esprima)}var Type=type;function resolveJavascriptFunction(e){if(e===null)return!1;try{var o="("+e+")",a=esprima.parse(o,{range:!0});return!(a.type!=="Program"||a.body.length!==1||a.body[0].type!=="ExpressionStatement"||a.body[0].expression.type!=="ArrowFunctionExpression"&&a.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function constructJavascriptFunction(e){var o="("+e+")",a=esprima.parse(o,{range:!0}),s=[],c;if(a.type!=="Program"||a.body.length!==1||a.body[0].type!=="ExpressionStatement"||a.body[0].expression.type!=="ArrowFunctionExpression"&&a.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return a.body[0].expression.params.forEach(function(d){s.push(d.name)}),c=a.body[0].expression.body.range,a.body[0].expression.body.type==="BlockStatement"?new Function(s,o.slice(c[0]+1,c[1]-1)):new Function(s,"return "+o.slice(c[0],c[1]))}function representJavascriptFunction(e){return e.toString()}function isFunction(e){return Object.prototype.toString.call(e)==="[object Function]"}var _function=new Type("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:resolveJavascriptFunction,construct:constructJavascriptFunction,predicate:isFunction,represent:representJavascriptFunction}),Schema=schema,default_full=Schema.DEFAULT=new Schema({include:[default_safe],explicit:[_undefined,regexp,_function]}),common$1=common$6,YAMLException$1=exception,Mark=mark,DEFAULT_SAFE_SCHEMA$1=default_safe,DEFAULT_FULL_SCHEMA$1=default_full,_hasOwnProperty$1=Object.prototype.hasOwnProperty,CONTEXT_FLOW_IN=1,CONTEXT_FLOW_OUT=2,CONTEXT_BLOCK_IN=3,CONTEXT_BLOCK_OUT=4,CHOMPING_CLIP=1,CHOMPING_STRIP=2,CHOMPING_KEEP=3,PATTERN_NON_PRINTABLE=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,PATTERN_NON_ASCII_LINE_BREAKS=/[\x85\u2028\u2029]/,PATTERN_FLOW_INDICATORS=/[,\[\]\{\}]/,PATTERN_TAG_HANDLE=/^(?:!|!!|![a-z\-]+!)$/i,PATTERN_TAG_URI=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function _class(e){return Object.prototype.toString.call(e)}function is_EOL(e){return e===10||e===13}function is_WHITE_SPACE(e){return e===9||e===32}function is_WS_OR_EOL(e){return e===9||e===32||e===10||e===13}function is_FLOW_INDICATOR(e){return e===44||e===91||e===93||e===123||e===125}function fromHexCode(e){var o;return 48<=e&&e<=57?e-48:(o=e|32,97<=o&&o<=102?o-97+10:-1)}function escapedHexLen(e){return e===120?2:e===117?4:e===85?8:0}function fromDecimalCode(e){return 48<=e&&e<=57?e-48:-1}function simpleEscapeSequence(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function charFromCodepoint(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function setProperty(e,o,a){o==="__proto__"?Object.defineProperty(e,o,{configurable:!0,enumerable:!0,writable:!0,value:a}):e[o]=a}var simpleEscapeCheck=new Array(256),simpleEscapeMap=new Array(256);for(var i=0;i<256;i++)simpleEscapeCheck[i]=simpleEscapeSequence(i)?1:0,simpleEscapeMap[i]=simpleEscapeSequence(i);function State$1(e,o){this.input=e,this.filename=o.filename||null,this.schema=o.schema||DEFAULT_FULL_SCHEMA$1,this.onWarning=o.onWarning||null,this.legacy=o.legacy||!1,this.json=o.json||!1,this.listener=o.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function generateError(e,o){return new YAMLException$1(o,new Mark(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function throwError(e,o){throw generateError(e,o)}function throwWarning(e,o){e.onWarning&&e.onWarning.call(null,generateError(e,o))}var directiveHandlers={YAML:function(o,a,s){var c,d,h;o.version!==null&&throwError(o,"duplication of %YAML directive"),s.length!==1&&throwError(o,"YAML directive accepts exactly one argument"),c=/^([0-9]+)\.([0-9]+)$/.exec(s[0]),c===null&&throwError(o,"ill-formed argument of the YAML directive"),d=parseInt(c[1],10),h=parseInt(c[2],10),d!==1&&throwError(o,"unacceptable YAML version of the document"),o.version=s[0],o.checkLineBreaks=h<2,h!==1&&h!==2&&throwWarning(o,"unsupported YAML version of the document")},TAG:function(o,a,s){var c,d;s.length!==2&&throwError(o,"TAG directive accepts exactly two arguments"),c=s[0],d=s[1],PATTERN_TAG_HANDLE.test(c)||throwError(o,"ill-formed tag handle (first argument) of the TAG directive"),_hasOwnProperty$1.call(o.tagMap,c)&&throwError(o,'there is a previously declared suffix for "'+c+'" tag handle'),PATTERN_TAG_URI.test(d)||throwError(o,"ill-formed tag prefix (second argument) of the TAG directive"),o.tagMap[c]=d}};function captureSegment(e,o,a,s){var c,d,h,g;if(o<a){if(g=e.input.slice(o,a),s)for(c=0,d=g.length;c<d;c+=1)h=g.charCodeAt(c),h===9||32<=h&&h<=1114111||throwError(e,"expected valid JSON character");else PATTERN_NON_PRINTABLE.test(g)&&throwError(e,"the stream contains non-printable characters");e.result+=g}}function mergeMappings(e,o,a,s){var c,d,h,g;for(common$1.isObject(a)||throwError(e,"cannot merge mappings; the provided source object is unacceptable"),c=Object.keys(a),h=0,g=c.length;h<g;h+=1)d=c[h],_hasOwnProperty$1.call(o,d)||(setProperty(o,d,a[d]),s[d]=!0)}function storeMappingPair(e,o,a,s,c,d,h,g){var b,$;if(Array.isArray(c))for(c=Array.prototype.slice.call(c),b=0,$=c.length;b<$;b+=1)Array.isArray(c[b])&&throwError(e,"nested arrays are not supported inside keys"),typeof c=="object"&&_class(c[b])==="[object Object]"&&(c[b]="[object Object]");if(typeof c=="object"&&_class(c)==="[object Object]"&&(c="[object Object]"),c=String(c),o===null&&(o={}),s==="tag:yaml.org,2002:merge")if(Array.isArray(d))for(b=0,$=d.length;b<$;b+=1)mergeMappings(e,o,d[b],a);else mergeMappings(e,o,d,a);else!e.json&&!_hasOwnProperty$1.call(a,c)&&_hasOwnProperty$1.call(o,c)&&(e.line=h||e.line,e.position=g||e.position,throwError(e,"duplicated mapping key")),setProperty(o,c,d),delete a[c];return o}function readLineBreak(e){var o;o=e.input.charCodeAt(e.position),o===10?e.position++:o===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):throwError(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function skipSeparationSpace(e,o,a){for(var s=0,c=e.input.charCodeAt(e.position);c!==0;){for(;is_WHITE_SPACE(c);)c=e.input.charCodeAt(++e.position);if(o&&c===35)do c=e.input.charCodeAt(++e.position);while(c!==10&&c!==13&&c!==0);if(is_EOL(c))for(readLineBreak(e),c=e.input.charCodeAt(e.position),s++,e.lineIndent=0;c===32;)e.lineIndent++,c=e.input.charCodeAt(++e.position);else break}return a!==-1&&s!==0&&e.lineIndent<a&&throwWarning(e,"deficient indentation"),s}function testDocumentSeparator(e){var o=e.position,a;return a=e.input.charCodeAt(o),!!((a===45||a===46)&&a===e.input.charCodeAt(o+1)&&a===e.input.charCodeAt(o+2)&&(o+=3,a=e.input.charCodeAt(o),a===0||is_WS_OR_EOL(a)))}function writeFoldedLines(e,o){o===1?e.result+=" ":o>1&&(e.result+=common$1.repeat(`
`,o-1))}function readPlainScalar(e,o,a){var s,c,d,h,g,b,$,tt,et=e.kind,rt=e.result,ot;if(ot=e.input.charCodeAt(e.position),is_WS_OR_EOL(ot)||is_FLOW_INDICATOR(ot)||ot===35||ot===38||ot===42||ot===33||ot===124||ot===62||ot===39||ot===34||ot===37||ot===64||ot===96||(ot===63||ot===45)&&(c=e.input.charCodeAt(e.position+1),is_WS_OR_EOL(c)||a&&is_FLOW_INDICATOR(c)))return!1;for(e.kind="scalar",e.result="",d=h=e.position,g=!1;ot!==0;){if(ot===58){if(c=e.input.charCodeAt(e.position+1),is_WS_OR_EOL(c)||a&&is_FLOW_INDICATOR(c))break}else if(ot===35){if(s=e.input.charCodeAt(e.position-1),is_WS_OR_EOL(s))break}else{if(e.position===e.lineStart&&testDocumentSeparator(e)||a&&is_FLOW_INDICATOR(ot))break;if(is_EOL(ot))if(b=e.line,$=e.lineStart,tt=e.lineIndent,skipSeparationSpace(e,!1,-1),e.lineIndent>=o){g=!0,ot=e.input.charCodeAt(e.position);continue}else{e.position=h,e.line=b,e.lineStart=$,e.lineIndent=tt;break}}g&&(captureSegment(e,d,h,!1),writeFoldedLines(e,e.line-b),d=h=e.position,g=!1),is_WHITE_SPACE(ot)||(h=e.position+1),ot=e.input.charCodeAt(++e.position)}return captureSegment(e,d,h,!1),e.result?!0:(e.kind=et,e.result=rt,!1)}function readSingleQuotedScalar(e,o){var a,s,c;if(a=e.input.charCodeAt(e.position),a!==39)return!1;for(e.kind="scalar",e.result="",e.position++,s=c=e.position;(a=e.input.charCodeAt(e.position))!==0;)if(a===39)if(captureSegment(e,s,e.position,!0),a=e.input.charCodeAt(++e.position),a===39)s=e.position,e.position++,c=e.position;else return!0;else is_EOL(a)?(captureSegment(e,s,c,!0),writeFoldedLines(e,skipSeparationSpace(e,!1,o)),s=c=e.position):e.position===e.lineStart&&testDocumentSeparator(e)?throwError(e,"unexpected end of the document within a single quoted scalar"):(e.position++,c=e.position);throwError(e,"unexpected end of the stream within a single quoted scalar")}function readDoubleQuotedScalar(e,o){var a,s,c,d,h,g;if(g=e.input.charCodeAt(e.position),g!==34)return!1;for(e.kind="scalar",e.result="",e.position++,a=s=e.position;(g=e.input.charCodeAt(e.position))!==0;){if(g===34)return captureSegment(e,a,e.position,!0),e.position++,!0;if(g===92){if(captureSegment(e,a,e.position,!0),g=e.input.charCodeAt(++e.position),is_EOL(g))skipSeparationSpace(e,!1,o);else if(g<256&&simpleEscapeCheck[g])e.result+=simpleEscapeMap[g],e.position++;else if((h=escapedHexLen(g))>0){for(c=h,d=0;c>0;c--)g=e.input.charCodeAt(++e.position),(h=fromHexCode(g))>=0?d=(d<<4)+h:throwError(e,"expected hexadecimal character");e.result+=charFromCodepoint(d),e.position++}else throwError(e,"unknown escape sequence");a=s=e.position}else is_EOL(g)?(captureSegment(e,a,s,!0),writeFoldedLines(e,skipSeparationSpace(e,!1,o)),a=s=e.position):e.position===e.lineStart&&testDocumentSeparator(e)?throwError(e,"unexpected end of the document within a double quoted scalar"):(e.position++,s=e.position)}throwError(e,"unexpected end of the stream within a double quoted scalar")}function readFlowCollection(e,o){var a=!0,s,c=e.tag,d,h=e.anchor,g,b,$,tt,et,rt={},ot,ft,pt,vt;if(vt=e.input.charCodeAt(e.position),vt===91)b=93,et=!1,d=[];else if(vt===123)b=125,et=!0,d={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=d),vt=e.input.charCodeAt(++e.position);vt!==0;){if(skipSeparationSpace(e,!0,o),vt=e.input.charCodeAt(e.position),vt===b)return e.position++,e.tag=c,e.anchor=h,e.kind=et?"mapping":"sequence",e.result=d,!0;a||throwError(e,"missed comma between flow collection entries"),ft=ot=pt=null,$=tt=!1,vt===63&&(g=e.input.charCodeAt(e.position+1),is_WS_OR_EOL(g)&&($=tt=!0,e.position++,skipSeparationSpace(e,!0,o))),s=e.line,composeNode(e,o,CONTEXT_FLOW_IN,!1,!0),ft=e.tag,ot=e.result,skipSeparationSpace(e,!0,o),vt=e.input.charCodeAt(e.position),(tt||e.line===s)&&vt===58&&($=!0,vt=e.input.charCodeAt(++e.position),skipSeparationSpace(e,!0,o),composeNode(e,o,CONTEXT_FLOW_IN,!1,!0),pt=e.result),et?storeMappingPair(e,d,rt,ft,ot,pt):$?d.push(storeMappingPair(e,null,rt,ft,ot,pt)):d.push(ot),skipSeparationSpace(e,!0,o),vt=e.input.charCodeAt(e.position),vt===44?(a=!0,vt=e.input.charCodeAt(++e.position)):a=!1}throwError(e,"unexpected end of the stream within a flow collection")}function readBlockScalar(e,o){var a,s,c=CHOMPING_CLIP,d=!1,h=!1,g=o,b=0,$=!1,tt,et;if(et=e.input.charCodeAt(e.position),et===124)s=!1;else if(et===62)s=!0;else return!1;for(e.kind="scalar",e.result="";et!==0;)if(et=e.input.charCodeAt(++e.position),et===43||et===45)CHOMPING_CLIP===c?c=et===43?CHOMPING_KEEP:CHOMPING_STRIP:throwError(e,"repeat of a chomping mode identifier");else if((tt=fromDecimalCode(et))>=0)tt===0?throwError(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):h?throwError(e,"repeat of an indentation width identifier"):(g=o+tt-1,h=!0);else break;if(is_WHITE_SPACE(et)){do et=e.input.charCodeAt(++e.position);while(is_WHITE_SPACE(et));if(et===35)do et=e.input.charCodeAt(++e.position);while(!is_EOL(et)&&et!==0)}for(;et!==0;){for(readLineBreak(e),e.lineIndent=0,et=e.input.charCodeAt(e.position);(!h||e.lineIndent<g)&&et===32;)e.lineIndent++,et=e.input.charCodeAt(++e.position);if(!h&&e.lineIndent>g&&(g=e.lineIndent),is_EOL(et)){b++;continue}if(e.lineIndent<g){c===CHOMPING_KEEP?e.result+=common$1.repeat(`
`,d?1+b:b):c===CHOMPING_CLIP&&d&&(e.result+=`
`);break}for(s?is_WHITE_SPACE(et)?($=!0,e.result+=common$1.repeat(`
`,d?1+b:b)):$?($=!1,e.result+=common$1.repeat(`
`,b+1)):b===0?d&&(e.result+=" "):e.result+=common$1.repeat(`
`,b):e.result+=common$1.repeat(`
`,d?1+b:b),d=!0,h=!0,b=0,a=e.position;!is_EOL(et)&&et!==0;)et=e.input.charCodeAt(++e.position);captureSegment(e,a,e.position,!1)}return!0}function readBlockSequence(e,o){var a,s=e.tag,c=e.anchor,d=[],h,g=!1,b;for(e.anchor!==null&&(e.anchorMap[e.anchor]=d),b=e.input.charCodeAt(e.position);b!==0&&!(b!==45||(h=e.input.charCodeAt(e.position+1),!is_WS_OR_EOL(h)));){if(g=!0,e.position++,skipSeparationSpace(e,!0,-1)&&e.lineIndent<=o){d.push(null),b=e.input.charCodeAt(e.position);continue}if(a=e.line,composeNode(e,o,CONTEXT_BLOCK_IN,!1,!0),d.push(e.result),skipSeparationSpace(e,!0,-1),b=e.input.charCodeAt(e.position),(e.line===a||e.lineIndent>o)&&b!==0)throwError(e,"bad indentation of a sequence entry");else if(e.lineIndent<o)break}return g?(e.tag=s,e.anchor=c,e.kind="sequence",e.result=d,!0):!1}function readBlockMapping(e,o,a){var s,c,d,h,g=e.tag,b=e.anchor,$={},tt={},et=null,rt=null,ot=null,ft=!1,pt=!1,vt;for(e.anchor!==null&&(e.anchorMap[e.anchor]=$),vt=e.input.charCodeAt(e.position);vt!==0;){if(s=e.input.charCodeAt(e.position+1),d=e.line,h=e.position,(vt===63||vt===58)&&is_WS_OR_EOL(s))vt===63?(ft&&(storeMappingPair(e,$,tt,et,rt,null),et=rt=ot=null),pt=!0,ft=!0,c=!0):ft?(ft=!1,c=!0):throwError(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,vt=s;else if(composeNode(e,a,CONTEXT_FLOW_OUT,!1,!0))if(e.line===d){for(vt=e.input.charCodeAt(e.position);is_WHITE_SPACE(vt);)vt=e.input.charCodeAt(++e.position);if(vt===58)vt=e.input.charCodeAt(++e.position),is_WS_OR_EOL(vt)||throwError(e,"a whitespace character is expected after the key-value separator within a block mapping"),ft&&(storeMappingPair(e,$,tt,et,rt,null),et=rt=ot=null),pt=!0,ft=!1,c=!1,et=e.tag,rt=e.result;else if(pt)throwError(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=g,e.anchor=b,!0}else if(pt)throwError(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=g,e.anchor=b,!0;else break;if((e.line===d||e.lineIndent>o)&&(composeNode(e,o,CONTEXT_BLOCK_OUT,!0,c)&&(ft?rt=e.result:ot=e.result),ft||(storeMappingPair(e,$,tt,et,rt,ot,d,h),et=rt=ot=null),skipSeparationSpace(e,!0,-1),vt=e.input.charCodeAt(e.position)),e.lineIndent>o&&vt!==0)throwError(e,"bad indentation of a mapping entry");else if(e.lineIndent<o)break}return ft&&storeMappingPair(e,$,tt,et,rt,null),pt&&(e.tag=g,e.anchor=b,e.kind="mapping",e.result=$),pt}function readTagProperty(e){var o,a=!1,s=!1,c,d,h;if(h=e.input.charCodeAt(e.position),h!==33)return!1;if(e.tag!==null&&throwError(e,"duplication of a tag property"),h=e.input.charCodeAt(++e.position),h===60?(a=!0,h=e.input.charCodeAt(++e.position)):h===33?(s=!0,c="!!",h=e.input.charCodeAt(++e.position)):c="!",o=e.position,a){do h=e.input.charCodeAt(++e.position);while(h!==0&&h!==62);e.position<e.length?(d=e.input.slice(o,e.position),h=e.input.charCodeAt(++e.position)):throwError(e,"unexpected end of the stream within a verbatim tag")}else{for(;h!==0&&!is_WS_OR_EOL(h);)h===33&&(s?throwError(e,"tag suffix cannot contain exclamation marks"):(c=e.input.slice(o-1,e.position+1),PATTERN_TAG_HANDLE.test(c)||throwError(e,"named tag handle cannot contain such characters"),s=!0,o=e.position+1)),h=e.input.charCodeAt(++e.position);d=e.input.slice(o,e.position),PATTERN_FLOW_INDICATORS.test(d)&&throwError(e,"tag suffix cannot contain flow indicator characters")}return d&&!PATTERN_TAG_URI.test(d)&&throwError(e,"tag name cannot contain such characters: "+d),a?e.tag=d:_hasOwnProperty$1.call(e.tagMap,c)?e.tag=e.tagMap[c]+d:c==="!"?e.tag="!"+d:c==="!!"?e.tag="tag:yaml.org,2002:"+d:throwError(e,'undeclared tag handle "'+c+'"'),!0}function readAnchorProperty(e){var o,a;if(a=e.input.charCodeAt(e.position),a!==38)return!1;for(e.anchor!==null&&throwError(e,"duplication of an anchor property"),a=e.input.charCodeAt(++e.position),o=e.position;a!==0&&!is_WS_OR_EOL(a)&&!is_FLOW_INDICATOR(a);)a=e.input.charCodeAt(++e.position);return e.position===o&&throwError(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(o,e.position),!0}function readAlias(e){var o,a,s;if(s=e.input.charCodeAt(e.position),s!==42)return!1;for(s=e.input.charCodeAt(++e.position),o=e.position;s!==0&&!is_WS_OR_EOL(s)&&!is_FLOW_INDICATOR(s);)s=e.input.charCodeAt(++e.position);return e.position===o&&throwError(e,"name of an alias node must contain at least one character"),a=e.input.slice(o,e.position),_hasOwnProperty$1.call(e.anchorMap,a)||throwError(e,'unidentified alias "'+a+'"'),e.result=e.anchorMap[a],skipSeparationSpace(e,!0,-1),!0}function composeNode(e,o,a,s,c){var d,h,g,b=1,$=!1,tt=!1,et,rt,ot,ft,pt;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,d=h=g=CONTEXT_BLOCK_OUT===a||CONTEXT_BLOCK_IN===a,s&&skipSeparationSpace(e,!0,-1)&&($=!0,e.lineIndent>o?b=1:e.lineIndent===o?b=0:e.lineIndent<o&&(b=-1)),b===1)for(;readTagProperty(e)||readAnchorProperty(e);)skipSeparationSpace(e,!0,-1)?($=!0,g=d,e.lineIndent>o?b=1:e.lineIndent===o?b=0:e.lineIndent<o&&(b=-1)):g=!1;if(g&&(g=$||c),(b===1||CONTEXT_BLOCK_OUT===a)&&(CONTEXT_FLOW_IN===a||CONTEXT_FLOW_OUT===a?ft=o:ft=o+1,pt=e.position-e.lineStart,b===1?g&&(readBlockSequence(e,pt)||readBlockMapping(e,pt,ft))||readFlowCollection(e,ft)?tt=!0:(h&&readBlockScalar(e,ft)||readSingleQuotedScalar(e,ft)||readDoubleQuotedScalar(e,ft)?tt=!0:readAlias(e)?(tt=!0,(e.tag!==null||e.anchor!==null)&&throwError(e,"alias node should not have any properties")):readPlainScalar(e,ft,CONTEXT_FLOW_IN===a)&&(tt=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):b===0&&(tt=g&&readBlockSequence(e,pt))),e.tag!==null&&e.tag!=="!")if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&throwError(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),et=0,rt=e.implicitTypes.length;et<rt;et+=1)if(ot=e.implicitTypes[et],ot.resolve(e.result)){e.result=ot.construct(e.result),e.tag=ot.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else _hasOwnProperty$1.call(e.typeMap[e.kind||"fallback"],e.tag)?(ot=e.typeMap[e.kind||"fallback"][e.tag],e.result!==null&&ot.kind!==e.kind&&throwError(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+ot.kind+'", not "'+e.kind+'"'),ot.resolve(e.result)?(e.result=ot.construct(e.result),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):throwError(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):throwError(e,"unknown tag !<"+e.tag+">");return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||tt}function readDocument(e){var o=e.position,a,s,c,d=!1,h;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};(h=e.input.charCodeAt(e.position))!==0&&(skipSeparationSpace(e,!0,-1),h=e.input.charCodeAt(e.position),!(e.lineIndent>0||h!==37));){for(d=!0,h=e.input.charCodeAt(++e.position),a=e.position;h!==0&&!is_WS_OR_EOL(h);)h=e.input.charCodeAt(++e.position);for(s=e.input.slice(a,e.position),c=[],s.length<1&&throwError(e,"directive name must not be less than one character in length");h!==0;){for(;is_WHITE_SPACE(h);)h=e.input.charCodeAt(++e.position);if(h===35){do h=e.input.charCodeAt(++e.position);while(h!==0&&!is_EOL(h));break}if(is_EOL(h))break;for(a=e.position;h!==0&&!is_WS_OR_EOL(h);)h=e.input.charCodeAt(++e.position);c.push(e.input.slice(a,e.position))}h!==0&&readLineBreak(e),_hasOwnProperty$1.call(directiveHandlers,s)?directiveHandlers[s](e,s,c):throwWarning(e,'unknown document directive "'+s+'"')}if(skipSeparationSpace(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,skipSeparationSpace(e,!0,-1)):d&&throwError(e,"directives end mark is expected"),composeNode(e,e.lineIndent-1,CONTEXT_BLOCK_OUT,!1,!0),skipSeparationSpace(e,!0,-1),e.checkLineBreaks&&PATTERN_NON_ASCII_LINE_BREAKS.test(e.input.slice(o,e.position))&&throwWarning(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&testDocumentSeparator(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,skipSeparationSpace(e,!0,-1));return}if(e.position<e.length-1)throwError(e,"end of the stream or a document separator is expected");else return}function loadDocuments(e,o){e=String(e),o=o||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var a=new State$1(e,o),s=e.indexOf("\0");for(s!==-1&&(a.position=s,throwError(a,"null byte is not allowed in input")),a.input+="\0";a.input.charCodeAt(a.position)===32;)a.lineIndent+=1,a.position+=1;for(;a.position<a.length-1;)readDocument(a);return a.documents}function loadAll(e,o,a){o!==null&&typeof o=="object"&&typeof a>"u"&&(a=o,o=null);var s=loadDocuments(e,a);if(typeof o!="function")return s;for(var c=0,d=s.length;c<d;c+=1)o(s[c])}function load(e,o){var a=loadDocuments(e,o);if(a.length!==0){if(a.length===1)return a[0];throw new YAMLException$1("expected a single document in the stream, but found more")}}function safeLoadAll(e,o,a){return typeof o=="object"&&o!==null&&typeof a>"u"&&(a=o,o=null),loadAll(e,o,common$1.extend({schema:DEFAULT_SAFE_SCHEMA$1},a))}function safeLoad(e,o){return load(e,common$1.extend({schema:DEFAULT_SAFE_SCHEMA$1},o))}loader$1.loadAll=loadAll;loader$1.load=load;loader$1.safeLoadAll=safeLoadAll;loader$1.safeLoad=safeLoad;var dumper$1={},common=common$6,YAMLException=exception,DEFAULT_FULL_SCHEMA=default_full,DEFAULT_SAFE_SCHEMA=default_safe,_toString=Object.prototype.toString,_hasOwnProperty=Object.prototype.hasOwnProperty,CHAR_TAB=9,CHAR_LINE_FEED=10,CHAR_CARRIAGE_RETURN=13,CHAR_SPACE=32,CHAR_EXCLAMATION=33,CHAR_DOUBLE_QUOTE=34,CHAR_SHARP=35,CHAR_PERCENT=37,CHAR_AMPERSAND=38,CHAR_SINGLE_QUOTE=39,CHAR_ASTERISK=42,CHAR_COMMA=44,CHAR_MINUS=45,CHAR_COLON=58,CHAR_EQUALS=61,CHAR_GREATER_THAN=62,CHAR_QUESTION=63,CHAR_COMMERCIAL_AT=64,CHAR_LEFT_SQUARE_BRACKET=91,CHAR_RIGHT_SQUARE_BRACKET=93,CHAR_GRAVE_ACCENT=96,CHAR_LEFT_CURLY_BRACKET=123,CHAR_VERTICAL_LINE=124,CHAR_RIGHT_CURLY_BRACKET=125,ESCAPE_SEQUENCES={};ESCAPE_SEQUENCES[0]="\\0";ESCAPE_SEQUENCES[7]="\\a";ESCAPE_SEQUENCES[8]="\\b";ESCAPE_SEQUENCES[9]="\\t";ESCAPE_SEQUENCES[10]="\\n";ESCAPE_SEQUENCES[11]="\\v";ESCAPE_SEQUENCES[12]="\\f";ESCAPE_SEQUENCES[13]="\\r";ESCAPE_SEQUENCES[27]="\\e";ESCAPE_SEQUENCES[34]='\\"';ESCAPE_SEQUENCES[92]="\\\\";ESCAPE_SEQUENCES[133]="\\N";ESCAPE_SEQUENCES[160]="\\_";ESCAPE_SEQUENCES[8232]="\\L";ESCAPE_SEQUENCES[8233]="\\P";var DEPRECATED_BOOLEANS_SYNTAX=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function compileStyleMap(e,o){var a,s,c,d,h,g,b;if(o===null)return{};for(a={},s=Object.keys(o),c=0,d=s.length;c<d;c+=1)h=s[c],g=String(o[h]),h.slice(0,2)==="!!"&&(h="tag:yaml.org,2002:"+h.slice(2)),b=e.compiledTypeMap.fallback[h],b&&_hasOwnProperty.call(b.styleAliases,g)&&(g=b.styleAliases[g]),a[h]=g;return a}function encodeHex(e){var o,a,s;if(o=e.toString(16).toUpperCase(),e<=255)a="x",s=2;else if(e<=65535)a="u",s=4;else if(e<=4294967295)a="U",s=8;else throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+a+common.repeat("0",s-o.length)+o}function State(e){this.schema=e.schema||DEFAULT_FULL_SCHEMA,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=common.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=compileStyleMap(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function indentString(e,o){for(var a=common.repeat(" ",o),s=0,c=-1,d="",h,g=e.length;s<g;)c=e.indexOf(`
`,s),c===-1?(h=e.slice(s),s=g):(h=e.slice(s,c+1),s=c+1),h.length&&h!==`
`&&(d+=a),d+=h;return d}function generateNextLine(e,o){return`
`+common.repeat(" ",e.indent*o)}function testImplicitResolving(e,o){var a,s,c;for(a=0,s=e.implicitTypes.length;a<s;a+=1)if(c=e.implicitTypes[a],c.resolve(o))return!0;return!1}function isWhitespace(e){return e===CHAR_SPACE||e===CHAR_TAB}function isPrintable(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function isNsChar(e){return isPrintable(e)&&!isWhitespace(e)&&e!==65279&&e!==CHAR_CARRIAGE_RETURN&&e!==CHAR_LINE_FEED}function isPlainSafe(e,o){return isPrintable(e)&&e!==65279&&e!==CHAR_COMMA&&e!==CHAR_LEFT_SQUARE_BRACKET&&e!==CHAR_RIGHT_SQUARE_BRACKET&&e!==CHAR_LEFT_CURLY_BRACKET&&e!==CHAR_RIGHT_CURLY_BRACKET&&e!==CHAR_COLON&&(e!==CHAR_SHARP||o&&isNsChar(o))}function isPlainSafeFirst(e){return isPrintable(e)&&e!==65279&&!isWhitespace(e)&&e!==CHAR_MINUS&&e!==CHAR_QUESTION&&e!==CHAR_COLON&&e!==CHAR_COMMA&&e!==CHAR_LEFT_SQUARE_BRACKET&&e!==CHAR_RIGHT_SQUARE_BRACKET&&e!==CHAR_LEFT_CURLY_BRACKET&&e!==CHAR_RIGHT_CURLY_BRACKET&&e!==CHAR_SHARP&&e!==CHAR_AMPERSAND&&e!==CHAR_ASTERISK&&e!==CHAR_EXCLAMATION&&e!==CHAR_VERTICAL_LINE&&e!==CHAR_EQUALS&&e!==CHAR_GREATER_THAN&&e!==CHAR_SINGLE_QUOTE&&e!==CHAR_DOUBLE_QUOTE&&e!==CHAR_PERCENT&&e!==CHAR_COMMERCIAL_AT&&e!==CHAR_GRAVE_ACCENT}function needIndentIndicator(e){var o=/^\n* /;return o.test(e)}var STYLE_PLAIN=1,STYLE_SINGLE=2,STYLE_LITERAL=3,STYLE_FOLDED=4,STYLE_DOUBLE=5;function chooseScalarStyle(e,o,a,s,c){var d,h,g,b=!1,$=!1,tt=s!==-1,et=-1,rt=isPlainSafeFirst(e.charCodeAt(0))&&!isWhitespace(e.charCodeAt(e.length-1));if(o)for(d=0;d<e.length;d++){if(h=e.charCodeAt(d),!isPrintable(h))return STYLE_DOUBLE;g=d>0?e.charCodeAt(d-1):null,rt=rt&&isPlainSafe(h,g)}else{for(d=0;d<e.length;d++){if(h=e.charCodeAt(d),h===CHAR_LINE_FEED)b=!0,tt&&($=$||d-et-1>s&&e[et+1]!==" ",et=d);else if(!isPrintable(h))return STYLE_DOUBLE;g=d>0?e.charCodeAt(d-1):null,rt=rt&&isPlainSafe(h,g)}$=$||tt&&d-et-1>s&&e[et+1]!==" "}return!b&&!$?rt&&!c(e)?STYLE_PLAIN:STYLE_SINGLE:a>9&&needIndentIndicator(e)?STYLE_DOUBLE:$?STYLE_FOLDED:STYLE_LITERAL}function writeScalar(e,o,a,s){e.dump=function(){if(o.length===0)return"''";if(!e.noCompatMode&&DEPRECATED_BOOLEANS_SYNTAX.indexOf(o)!==-1)return"'"+o+"'";var c=e.indent*Math.max(1,a),d=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-c),h=s||e.flowLevel>-1&&a>=e.flowLevel;function g(b){return testImplicitResolving(e,b)}switch(chooseScalarStyle(o,h,e.indent,d,g)){case STYLE_PLAIN:return o;case STYLE_SINGLE:return"'"+o.replace(/'/g,"''")+"'";case STYLE_LITERAL:return"|"+blockHeader(o,e.indent)+dropEndingNewline(indentString(o,c));case STYLE_FOLDED:return">"+blockHeader(o,e.indent)+dropEndingNewline(indentString(foldString(o,d),c));case STYLE_DOUBLE:return'"'+escapeString(o)+'"';default:throw new YAMLException("impossible error: invalid scalar style")}}()}function blockHeader(e,o){var a=needIndentIndicator(e)?String(o):"",s=e[e.length-1]===`
`,c=s&&(e[e.length-2]===`
`||e===`
`),d=c?"+":s?"":"-";return a+d+`
`}function dropEndingNewline(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function foldString(e,o){for(var a=/(\n+)([^\n]*)/g,s=function(){var $=e.indexOf(`
`);return $=$!==-1?$:e.length,a.lastIndex=$,foldLine(e.slice(0,$),o)}(),c=e[0]===`
`||e[0]===" ",d,h;h=a.exec(e);){var g=h[1],b=h[2];d=b[0]===" ",s+=g+(!c&&!d&&b!==""?`
`:"")+foldLine(b,o),c=d}return s}function foldLine(e,o){if(e===""||e[0]===" ")return e;for(var a=/ [^ ]/g,s,c=0,d,h=0,g=0,b="";s=a.exec(e);)g=s.index,g-c>o&&(d=h>c?h:g,b+=`
`+e.slice(c,d),c=d+1),h=g;return b+=`
`,e.length-c>o&&h>c?b+=e.slice(c,h)+`
`+e.slice(h+1):b+=e.slice(c),b.slice(1)}function escapeString(e){for(var o="",a,s,c,d=0;d<e.length;d++){if(a=e.charCodeAt(d),a>=55296&&a<=56319&&(s=e.charCodeAt(d+1),s>=56320&&s<=57343)){o+=encodeHex((a-55296)*1024+s-56320+65536),d++;continue}c=ESCAPE_SEQUENCES[a],o+=!c&&isPrintable(a)?e[d]:c||encodeHex(a)}return o}function writeFlowSequence(e,o,a){var s="",c=e.tag,d,h;for(d=0,h=a.length;d<h;d+=1)writeNode(e,o,a[d],!1,!1)&&(d!==0&&(s+=","+(e.condenseFlow?"":" ")),s+=e.dump);e.tag=c,e.dump="["+s+"]"}function writeBlockSequence(e,o,a,s){var c="",d=e.tag,h,g;for(h=0,g=a.length;h<g;h+=1)writeNode(e,o+1,a[h],!0,!0)&&((!s||h!==0)&&(c+=generateNextLine(e,o)),e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?c+="-":c+="- ",c+=e.dump);e.tag=d,e.dump=c||"[]"}function writeFlowMapping(e,o,a){var s="",c=e.tag,d=Object.keys(a),h,g,b,$,tt;for(h=0,g=d.length;h<g;h+=1)tt="",h!==0&&(tt+=", "),e.condenseFlow&&(tt+='"'),b=d[h],$=a[b],writeNode(e,o,b,!1,!1)&&(e.dump.length>1024&&(tt+="? "),tt+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),writeNode(e,o,$,!1,!1)&&(tt+=e.dump,s+=tt));e.tag=c,e.dump="{"+s+"}"}function writeBlockMapping(e,o,a,s){var c="",d=e.tag,h=Object.keys(a),g,b,$,tt,et,rt;if(e.sortKeys===!0)h.sort();else if(typeof e.sortKeys=="function")h.sort(e.sortKeys);else if(e.sortKeys)throw new YAMLException("sortKeys must be a boolean or a function");for(g=0,b=h.length;g<b;g+=1)rt="",(!s||g!==0)&&(rt+=generateNextLine(e,o)),$=h[g],tt=a[$],writeNode(e,o+1,$,!0,!0,!0)&&(et=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,et&&(e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?rt+="?":rt+="? "),rt+=e.dump,et&&(rt+=generateNextLine(e,o)),writeNode(e,o+1,tt,!0,et)&&(e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?rt+=":":rt+=": ",rt+=e.dump,c+=rt));e.tag=d,e.dump=c||"{}"}function detectType(e,o,a){var s,c,d,h,g,b;for(c=a?e.explicitTypes:e.implicitTypes,d=0,h=c.length;d<h;d+=1)if(g=c[d],(g.instanceOf||g.predicate)&&(!g.instanceOf||typeof o=="object"&&o instanceof g.instanceOf)&&(!g.predicate||g.predicate(o))){if(e.tag=a?g.tag:"?",g.represent){if(b=e.styleMap[g.tag]||g.defaultStyle,_toString.call(g.represent)==="[object Function]")s=g.represent(o,b);else if(_hasOwnProperty.call(g.represent,b))s=g.represent[b](o,b);else throw new YAMLException("!<"+g.tag+'> tag resolver accepts not "'+b+'" style');e.dump=s}return!0}return!1}function writeNode(e,o,a,s,c,d){e.tag=null,e.dump=a,detectType(e,a,!1)||detectType(e,a,!0);var h=_toString.call(e.dump);s&&(s=e.flowLevel<0||e.flowLevel>o);var g=h==="[object Object]"||h==="[object Array]",b,$;if(g&&(b=e.duplicates.indexOf(a),$=b!==-1),(e.tag!==null&&e.tag!=="?"||$||e.indent!==2&&o>0)&&(c=!1),$&&e.usedDuplicates[b])e.dump="*ref_"+b;else{if(g&&$&&!e.usedDuplicates[b]&&(e.usedDuplicates[b]=!0),h==="[object Object]")s&&Object.keys(e.dump).length!==0?(writeBlockMapping(e,o,e.dump,c),$&&(e.dump="&ref_"+b+e.dump)):(writeFlowMapping(e,o,e.dump),$&&(e.dump="&ref_"+b+" "+e.dump));else if(h==="[object Array]"){var tt=e.noArrayIndent&&o>0?o-1:o;s&&e.dump.length!==0?(writeBlockSequence(e,tt,e.dump,c),$&&(e.dump="&ref_"+b+e.dump)):(writeFlowSequence(e,tt,e.dump),$&&(e.dump="&ref_"+b+" "+e.dump))}else if(h==="[object String]")e.tag!=="?"&&writeScalar(e,e.dump,o,d);else{if(e.skipInvalid)return!1;throw new YAMLException("unacceptable kind of an object to dump "+h)}e.tag!==null&&e.tag!=="?"&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function getDuplicateReferences(e,o){var a=[],s=[],c,d;for(inspectNode(e,a,s),c=0,d=s.length;c<d;c+=1)o.duplicates.push(a[s[c]]);o.usedDuplicates=new Array(d)}function inspectNode(e,o,a){var s,c,d;if(e!==null&&typeof e=="object")if(c=o.indexOf(e),c!==-1)a.indexOf(c)===-1&&a.push(c);else if(o.push(e),Array.isArray(e))for(c=0,d=e.length;c<d;c+=1)inspectNode(e[c],o,a);else for(s=Object.keys(e),c=0,d=s.length;c<d;c+=1)inspectNode(e[s[c]],o,a)}function dump(e,o){o=o||{};var a=new State(o);return a.noRefs||getDuplicateReferences(e,a),writeNode(a,0,e,!0,!0)?a.dump+`
`:""}function safeDump(e,o){return dump(e,common.extend({schema:DEFAULT_SAFE_SCHEMA},o))}dumper$1.dump=dump;dumper$1.safeDump=safeDump;var loader=loader$1,dumper=dumper$1;function deprecated(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}jsYaml$1.Type=type;jsYaml$1.Schema=schema;jsYaml$1.FAILSAFE_SCHEMA=failsafe;jsYaml$1.JSON_SCHEMA=json;jsYaml$1.CORE_SCHEMA=core;jsYaml$1.DEFAULT_SAFE_SCHEMA=default_safe;jsYaml$1.DEFAULT_FULL_SCHEMA=default_full;jsYaml$1.load=loader.load;jsYaml$1.loadAll=loader.loadAll;jsYaml$1.safeLoad=loader.safeLoad;jsYaml$1.safeLoadAll=loader.safeLoadAll;jsYaml$1.dump=dumper.dump;jsYaml$1.safeDump=dumper.safeDump;jsYaml$1.YAMLException=exception;jsYaml$1.MINIMAL_SCHEMA=failsafe;jsYaml$1.SAFE_SCHEMA=default_safe;jsYaml$1.DEFAULT_SCHEMA=default_full;jsYaml$1.scan=deprecated("scan");jsYaml$1.parse=deprecated("parse");jsYaml$1.compose=deprecated("compose");jsYaml$1.addConstructor=deprecated("addConstructor");var yaml=jsYaml$1,jsYaml=yaml;(function(module,exports$1){const yaml=jsYaml,engines=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(e,o){const a=Object.assign({replacer:null,space:2},o);return JSON.stringify(e,a.replacer,a.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return wrap!==!1&&(str=`(function() {
return `+str.trim()+`;
}());`),eval(str)||{}}catch(e){if(wrap!==!1&&/(unexpected|identifier)/i.test(e.message))return parse(str,options,!1);throw new SyntaxError(e)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}}})(engines$2);var enginesExports=engines$2.exports,utils$3={};/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */var stripBomString=function(e){return typeof e=="string"&&e.charAt(0)==="\uFEFF"?e.slice(1):e};(function(e){const o=stripBomString,a=kindOf;e.define=function(s,c,d){Reflect.defineProperty(s,c,{enumerable:!1,configurable:!0,writable:!0,value:d})},e.isBuffer=function(s){return a(s)==="buffer"},e.isObject=function(s){return a(s)==="object"},e.toBuffer=function(s){return typeof s=="string"?Buffer.from(s):s},e.toString=function(s){if(e.isBuffer(s))return o(String(s));if(typeof s!="string")throw new TypeError("expected input to be a string or buffer");return o(s)},e.arrayify=function(s){return s?Array.isArray(s)?s:[s]:[]},e.startsWith=function(s,c,d){return typeof d!="number"&&(d=c.length),s.slice(0,d)===c}})(utils$3);const engines$1=enginesExports,utils$2=utils$3;var defaults$4=function(e){const o=Object.assign({},e);return o.delimiters=utils$2.arrayify(o.delims||o.delimiters||"---"),o.delimiters.length===1&&o.delimiters.push(o.delimiters[0]),o.language=(o.language||o.lang||"yaml").toLowerCase(),o.engines=Object.assign({},engines$1,o.parsers,o.engines),o},engine=function(e,o){let a=o.engines[e]||o.engines[aliase(e)];if(typeof a>"u")throw new Error('gray-matter engine "'+e+'" is not registered');return typeof a=="function"&&(a={parse:a}),a};function aliase(e){switch(e.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return e}}const typeOf$1=kindOf,getEngine$1=engine,defaults$3=defaults$4;var stringify$2=function(e,o,a){if(o==null&&a==null)switch(typeOf$1(e)){case"object":o=e.data,a={};break;case"string":return e;default:throw new TypeError("expected file to be a string or object")}const s=e.content,c=defaults$3(a);if(o==null){if(!c.data)return e;o=c.data}const d=e.language||c.language,h=getEngine$1(d,c);if(typeof h.stringify!="function")throw new TypeError('expected "'+d+'.stringify" to be a function');o=Object.assign({},e.data,o);const g=c.delimiters[0],b=c.delimiters[1],$=h.stringify(o,a).trim();let tt="";return $!=="{}"&&(tt=newline(g)+newline($)+newline(b)),typeof e.excerpt=="string"&&e.excerpt!==""&&s.indexOf(e.excerpt.trim())===-1&&(tt+=newline(e.excerpt)+newline(b)),tt+newline(s)};function newline(e){return e.slice(-1)!==`
`?e+`
`:e}const defaults$2=defaults$4;var excerpt$1=function(e,o){const a=defaults$2(o);if(e.data==null&&(e.data={}),typeof a.excerpt=="function")return a.excerpt(e,a);const s=e.data.excerpt_separator||a.excerpt_separator;if(s==null&&(a.excerpt===!1||a.excerpt==null))return e;const c=typeof a.excerpt=="string"?a.excerpt:s||a.delimiters[0],d=e.content.indexOf(c);return d!==-1&&(e.excerpt=e.content.slice(0,d)),e};const typeOf=kindOf,stringify$1=stringify$2,utils$1=utils$3;var toFile$1=function(e){return typeOf(e)!=="object"&&(e={content:e}),typeOf(e.data)!=="object"&&(e.data={}),e.contents&&e.content==null&&(e.content=e.contents),utils$1.define(e,"orig",utils$1.toBuffer(e.content)),utils$1.define(e,"language",e.language||""),utils$1.define(e,"matter",e.matter||""),utils$1.define(e,"stringify",function(o,a){return a&&a.language&&(e.language=a.language),stringify$1(e,o,a)}),e.content=utils$1.toString(e.content),e.isEmpty=!1,e.excerpt="",e};const getEngine=engine,defaults$1=defaults$4;var parse$1=function(e,o,a){const s=defaults$1(a),c=getEngine(e,s);if(typeof c.parse!="function")throw new TypeError('expected "'+e+'.parse" to be a function');return c.parse(o,s)};const fs=require$$0,sections=sectionMatter,defaults=defaults$4,stringify=stringify$2,excerpt=excerpt$1,engines=enginesExports,toFile=toFile$1,parse=parse$1,utils=utils$3;function matter(e,o){if(e==="")return{data:{},content:e,excerpt:"",orig:e};let a=toFile(e);const s=matter.cache[a.content];if(!o){if(s)return a=Object.assign({},s),a.orig=s.orig,a;matter.cache[a.content]=a}return parseMatter(a,o)}function parseMatter(e,o){const a=defaults(o),s=a.delimiters[0],c=`
`+a.delimiters[1];let d=e.content;a.language&&(e.language=a.language);const h=s.length;if(!utils.startsWith(d,s,h))return excerpt(e,a),e;if(d.charAt(h)===s.slice(-1))return e;d=d.slice(h);const g=d.length,b=matter.language(d,a);b.name&&(e.language=b.name,d=d.slice(b.raw.length));let $=d.indexOf(c);return $===-1&&($=g),e.matter=d.slice(0,$),e.matter.replace(/^\s*#[^\n]+/gm,"").trim()===""?(e.isEmpty=!0,e.empty=e.content,e.data={}):e.data=parse(e.language,e.matter,a),$===g?e.content="":(e.content=d.slice($+c.length),e.content[0]==="\r"&&(e.content=e.content.slice(1)),e.content[0]===`
`&&(e.content=e.content.slice(1))),excerpt(e,a),(a.sections===!0||typeof a.section=="function")&&sections(e,a.section),e}matter.engines=engines;matter.stringify=function(e,o,a){return typeof e=="string"&&(e=matter(e,a)),stringify(e,o,a)};matter.read=function(e,o){const a=fs.readFileSync(e,"utf8"),s=matter(a,o);return s.path=e,s};matter.test=function(e,o){return utils.startsWith(e,defaults(o).delimiters[0])};matter.language=function(e,o){const s=defaults(o).delimiters[0];matter.test(e)&&(e=e.slice(s.length));const c=e.slice(0,e.search(/\r?\n/));return{raw:c,name:c?c.trim():""}};matter.cache={};matter.clearCache=function(){matter.cache={}};var grayMatter=matter;const matter$1=getDefaultExportFromCjs(grayMatter),MONTH_NAMES=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function buildMonthRange(e){let o,a,s,c;e.forEach(b=>{const $=new Date(b.start_date),tt=new Date(b.end_date),et=$.getFullYear(),rt=$.getMonth(),ot=tt.getFullYear(),ft=tt.getMonth();(o===void 0||et<o||et===o&&rt<a)&&(o=et,a=rt),(s===void 0||ot>s||ot===s&&ft>c)&&(s=ot,c=ft)});const d=[];let h=o,g=a;for(;h<s||h===s&&g<=c;)d.push({label:MONTH_NAMES[g],year:h,month:g}),g++,g===12&&(g=0,h++);return d}function getPosition(e,o){const a=new Date(o),s=a.getFullYear(),c=a.getMonth(),d=e.findIndex(b=>b.year===s&&b.month===c),h=d===-1?0:d,g=new Date(s,c+1,0).getDate();return h+a.getDate()/g}function GanttChart({title:e,items:o}){if(!o||o.length===0)return null;const a=buildMonthRange(o),s=a.length;return jsxRuntimeExports.jsxs("section",{className:"px-10",style:{background:"#fff",paddingTop:"60px",paddingBottom:"60px"},children:[e&&jsxRuntimeExports.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"42px",fontWeight:400,lineHeight:1.1,letterSpacing:"-0.42px",color:"#363a45",marginBottom:"48px"},children:e}),jsxRuntimeExports.jsx("div",{className:"overflow-x-auto",children:jsxRuntimeExports.jsxs("div",{style:{minWidth:"600px"},children:[jsxRuntimeExports.jsx("div",{className:"grid",style:{gridTemplateColumns:`repeat(${s}, 1fr)`},children:a.map(({label:c},d)=>jsxRuntimeExports.jsx("div",{style:{textAlign:"center",paddingTop:"24px",paddingBottom:"12px",fontSize:"16px",fontWeight:700,color:"#363a45",borderRight:d<s-1?"1px solid #d4d5d8":"none"},children:c},d))}),jsxRuntimeExports.jsx("div",{className:"flex flex-col",children:o.slice(0,6).map((c,d)=>{const h=getPosition(a,c.start_date),g=getPosition(a,c.end_date),b=h/s*100,$=g/s*100,tt=Math.max($-b,100/s);return jsxRuntimeExports.jsxs("div",{className:"relative",style:{height:"47px"},children:[jsxRuntimeExports.jsx("div",{className:"absolute inset-0 grid pointer-events-none",style:{gridTemplateColumns:`repeat(${s}, 1fr)`},children:a.map((et,rt)=>jsxRuntimeExports.jsx("div",{style:{borderRight:rt<s-1?"1px solid #d4d5d8":"none"}},rt))}),jsxRuntimeExports.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 flex items-center overflow-hidden",style:{left:`${b}%`,width:`${tt}%`,height:"40px",background:"#caffeb",borderRadius:"1000px",paddingLeft:"14px",paddingRight:"14px",minWidth:"80px"},children:jsxRuntimeExports.jsx("span",{className:"truncate",style:{color:"#001235",fontSize:"12px",fontWeight:600,fontFamily:"var(--font-body)",lineHeight:"16px"},children:c.title})})]},d)})})]})})]})}function GoalCard({goal:e}){return jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"24px",fontWeight:500,lineHeight:"28px",color:"#000"},children:e.headline}),jsxRuntimeExports.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"14px",lineHeight:"20px",color:"#575757",marginTop:"4px"},children:e.description})]})}const RAW_FILES=Object.assign({"../content/teams/accommodation.md":__vite_glob_0_0,"../content/teams/acquisition-performance-marketing.md":__vite_glob_0_1,"../content/teams/agent-experience.md":__vite_glob_0_2,"../content/teams/agent-hub.md":__vite_glob_0_3,"../content/teams/ancillaries.md":__vite_glob_0_4,"../content/teams/business-traveller.md":__vite_glob_0_5,"../content/teams/commercial-ops-extranet.md":__vite_glob_0_6,"../content/teams/commercial-platforms-extranet.md":__vite_glob_0_7,"../content/teams/cruises.md":__vite_glob_0_8,"../content/teams/customer-lifecycle.md":__vite_glob_0_9,"../content/teams/customer-payments.md":__vite_glob_0_10,"../content/teams/data-finance.md":__vite_glob_0_11,"../content/teams/distribution-apis.md":__vite_glob_0_12,"../content/teams/engagement-conversion.md":__vite_glob_0_13,"../content/teams/engx.md":__vite_glob_0_14,"../content/teams/experiences.md":__vite_glob_0_15,"../content/teams/extranet-partner-central.md":__vite_glob_0_16,"../content/teams/flights.md":__vite_glob_0_17,"../content/teams/growth-customer-lifecycle.md":__vite_glob_0_18,"../content/teams/lere.md":__vite_glob_0_19,"../content/teams/localisation.md":__vite_glob_0_20,"../content/teams/loyalty.md":__vite_glob_0_21,"../content/teams/mobile-app.md":__vite_glob_0_22,"../content/teams/on-site-search.md":__vite_glob_0_23,"../content/teams/online-cx.md":__vite_glob_0_24,"../content/teams/self-service.md":__vite_glob_0_25,"../content/teams/special-projects.md":__vite_glob_0_26,"../content/teams/tours.md":__vite_glob_0_27,"../content/teams/trip-planner.md":__vite_glob_0_28,"../content/teams/voice-ai.md":__vite_glob_0_29,"../content/teams/white-labels.md":__vite_glob_0_30});function parseTeams(){const e={};for(const[o,a]of Object.entries(RAW_FILES)){const{data:s}=matter$1(a),c=o.split("/").pop().replace(".md","");e[c]={...s,slug:c}}return e}const HERO_PLACEHOLDER="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&auto=format&fit=crop&q=80";function ProductHero({title:e,heroImage:o}){return jsxRuntimeExports.jsxs("div",{className:"relative flex items-center justify-center overflow-hidden",style:{height:"248px"},children:[jsxRuntimeExports.jsx("img",{src:o||HERO_PLACEHOLDER,alt:e,className:"absolute inset-0 w-full h-full object-cover pointer-events-none"}),jsxRuntimeExports.jsx("div",{className:"absolute inset-0 bg-black/10"}),jsxRuntimeExports.jsx("div",{className:"relative bg-white px-14 py-10 text-center",style:{borderRadius:"40px",boxShadow:"0px 4px 4px rgba(0,0,0,0.25)",minWidth:"260px",maxWidth:"80%"},children:jsxRuntimeExports.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"42px",fontWeight:400,lineHeight:1.1,letterSpacing:"-0.42px",color:"#363a45"},children:e})})]})}function TeamSection({members:e}){return!e||e.length===0?null:jsxRuntimeExports.jsxs("section",{className:"px-10",style:{background:"#f3f1ea",paddingTop:"60px",paddingBottom:"60px"},children:[jsxRuntimeExports.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"42px",fontWeight:400,lineHeight:1.1,letterSpacing:"-0.42px",color:"#363a45",marginBottom:"24px"},children:"Meet the team"}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",style:{gap:"24px"},children:e.filter(o=>o.photo).map((o,a)=>jsxRuntimeExports.jsxs("div",{className:"flex items-center bg-white",style:{gap:"12px",borderRadius:"8px",padding:"12px"},children:[o.photo?jsxRuntimeExports.jsx("img",{src:o.photo,alt:o.name,className:"shrink-0 object-cover object-top",style:{width:"48px",height:"48px",borderRadius:"8px"}}):jsxRuntimeExports.jsx("div",{className:"shrink-0 bg-[#e7e8ea]",style:{width:"48px",height:"48px",borderRadius:"8px"}}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:600,lineHeight:"24px",color:"#000"},children:o.name}),jsxRuntimeExports.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"14px",lineHeight:"20px",color:"rgba(0,0,0,0.55)"},children:o.title})]})]},a))})]})}function GoalsSection({sectionTitle:e,goals:o}){return!o||o.length===0?null:jsxRuntimeExports.jsxs("section",{className:"px-10",style:{background:"#fff",paddingTop:"64px",paddingBottom:"64px"},children:[jsxRuntimeExports.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"42px",fontWeight:400,lineHeight:1.1,letterSpacing:"-0.42px",color:"#363a45",marginBottom:"40px"},children:e||"Goals"}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2",style:{columnGap:"32px",rowGap:"32px"},children:o.slice(0,8).map((a,s)=>jsxRuntimeExports.jsx(GoalCard,{goal:a},s))})]})}function InitiativesSection({initiatives:e}){return!e||e.length===0?null:jsxRuntimeExports.jsx("section",{style:{background:"#fff"},children:e.slice(0,3).map((o,a)=>jsxRuntimeExports.jsx("div",{className:"px-8",style:{paddingTop:"56px",paddingBottom:"56px",borderTop:"1px solid rgba(0,0,0,0.07)"},children:jsxRuntimeExports.jsxs("div",{className:"flex items-start",style:{gap:"32px"},children:[jsxRuntimeExports.jsxs("div",{className:"flex-1",style:{maxWidth:"50%"},children:[jsxRuntimeExports.jsxs("p",{style:{fontFamily:"var(--font-body)",fontSize:"18px",fontWeight:600,lineHeight:"22px",color:"#b7410e",marginBottom:"4px"},children:["Key Initiative ",a+1]}),jsxRuntimeExports.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"42px",fontWeight:400,lineHeight:1.1,letterSpacing:"-0.42px",color:"#363a45"},children:o.heading})]}),jsxRuntimeExports.jsx("div",{className:"flex-1",children:jsxRuntimeExports.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"16px",lineHeight:"24px",color:"#505460"},children:o.description})})]})},a))})}function ProductPage(){const{slug:e}=useParams(),a=reactExports.useMemo(()=>parseTeams(),[])[e];return a?jsxRuntimeExports.jsxs("div",{className:"min-h-screen",style:{background:"var(--color-beige)"},children:[jsxRuntimeExports.jsx(ProductHero,{title:a.title,heroImage:a.hero_image}),jsxRuntimeExports.jsx(TeamSection,{members:a.team_members}),a.gantt_items&&a.gantt_items.length>0&&jsxRuntimeExports.jsx(GanttChart,{title:a.gantt_section_title,items:a.gantt_items}),jsxRuntimeExports.jsx(GoalsSection,{sectionTitle:a.goals_section_title,goals:a.goals}),jsxRuntimeExports.jsx(InitiativesSection,{initiatives:a.key_initiatives})]}):jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen gap-4 px-6 text-center",children:[jsxRuntimeExports.jsx("h1",{className:"text-section text-dark",style:{fontFamily:"var(--font-heading)"},children:"Team not found"}),jsxRuntimeExports.jsxs("p",{className:"text-dark opacity-60 text-sm",style:{fontFamily:"var(--font-body)"},children:["No content file exists yet for ",jsxRuntimeExports.jsx("code",{children:e}),"."]}),jsxRuntimeExports.jsx(Link,{to:"/",className:"mt-4 text-dark underline text-sm hover:opacity-60 transition-opacity",style:{fontFamily:"var(--font-body)"},children:"← Back to home"})]})}const router=createBrowserRouter([{element:jsxRuntimeExports.jsx(Layout,{}),children:[{path:"/",element:jsxRuntimeExports.jsx(HomePage,{})},{path:"/directory",element:jsxRuntimeExports.jsx(DirectoryPage,{})},{path:"/product/:slug",element:jsxRuntimeExports.jsx(ProductPage,{})}]}],{basename:"/roadmap"});function App(){return jsxRuntimeExports.jsx(RouterProvider,{router})}globalThis.Buffer=buffer.Buffer;client.createRoot(document.getElementById("root")).render(jsxRuntimeExports.jsx(React.StrictMode,{children:jsxRuntimeExports.jsx(App,{})}));
