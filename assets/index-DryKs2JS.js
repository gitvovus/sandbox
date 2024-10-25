var NM=Object.defineProperty;var x_=n=>{throw TypeError(n)};var FM=(n,t,e)=>t in n?NM(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ht=(n,t,e)=>FM(n,typeof t!="symbol"?t+"":t,e),dp=(n,t,e)=>t.has(n)||x_("Cannot "+e);var c=(n,t,e)=>(dp(n,t,"read from private field"),e?e.call(n):t.get(n)),b=(n,t,e)=>t.has(n)?x_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Q=(n,t,e,i)=>(dp(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),pt=(n,t,e)=>(dp(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function wg(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const _e={},Xo=[],ki=()=>{},OM=()=>!1,Vf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Tg=n=>n.startsWith("onUpdate:"),$e=Object.assign,Ag=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},BM=Object.prototype.hasOwnProperty,be=(n,t)=>BM.call(n,t),$t=Array.isArray,qo=n=>Ou(n)==="[object Map]",$a=n=>Ou(n)==="[object Set]",M_=n=>Ou(n)==="[object Date]",Kt=n=>typeof n=="function",Oe=n=>typeof n=="string",yi=n=>typeof n=="symbol",Ce=n=>n!==null&&typeof n=="object",M0=n=>(Ce(n)||Kt(n))&&Kt(n.then)&&Kt(n.catch),y0=Object.prototype.toString,Ou=n=>y0.call(n),kM=n=>Ou(n).slice(8,-1),S0=n=>Ou(n)==="[object Object]",Cg=n=>Oe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,hl=wg(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zf=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},VM=/-(\w)/g,Wn=zf(n=>n.replace(VM,(t,e)=>e?e.toUpperCase():"")),zM=/\B([A-Z])/g,cr=zf(n=>n.replace(zM,"-$1").toLowerCase()),Hf=zf(n=>n.charAt(0).toUpperCase()+n.slice(1)),hp=zf(n=>n?`on${Hf(n)}`:""),Cn=(n,t)=>!Object.is(n,t),Cd=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},b0=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Kd=n=>{const t=parseFloat(n);return isNaN(t)?n:t},HM=n=>{const t=Oe(n)?Number(n):NaN;return isNaN(t)?n:t};let y_;const Gf=()=>y_||(y_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ln(n){if($t(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Oe(i)?XM(i):Ln(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Oe(n)||Ce(n))return n}const GM=/;(?![^(]*\))/g,WM=/:([^]+)/,$M=/\/\*[^]*?\*\//g;function XM(n){const t={};return n.replace($M,"").split(GM).forEach(e=>{if(e){const i=e.split(WM);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function kt(n){let t="";if(Oe(n))t=n;else if($t(n))for(let e=0;e<n.length;e++){const i=kt(n[e]);i&&(t+=i+" ")}else if(Ce(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function Bu(n){if(!n)return null;let{class:t,style:e}=n;return t&&!Oe(t)&&(n.class=kt(t)),e&&(n.style=Ln(e)),n}const qM="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",YM=wg(qM);function E0(n){return!!n||n===""}function jM(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=xo(n[i],t[i]);return e}function xo(n,t){if(n===t)return!0;let e=M_(n),i=M_(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=yi(n),i=yi(t),e||i)return n===t;if(e=$t(n),i=$t(t),e||i)return e&&i?jM(n,t):!1;if(e=Ce(n),i=Ce(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!xo(n[o],t[o]))return!1}}return String(n)===String(t)}function Rg(n,t){return n.findIndex(e=>xo(e,t))}const w0=n=>!!(n&&n.__v_isRef===!0),Bt=n=>Oe(n)?n:n==null?"":$t(n)||Ce(n)&&(n.toString===y0||!Kt(n.toString))?w0(n)?Bt(n.value):JSON.stringify(n,T0,2):String(n),T0=(n,t)=>w0(t)?T0(n,t.value):qo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[fp(i,r)+" =>"]=s,e),{})}:$a(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>fp(e))}:yi(t)?fp(t):Ce(t)&&!$t(t)&&!S0(t)?String(t):t,fp=(n,t="")=>{var e;return yi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zn;class KM{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zn,!t&&zn&&(this.index=(zn.scopes||(zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=zn;try{return zn=this,t()}finally{zn=e}}}on(){zn=this}off(){zn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ZM(){return zn}let Re;const pp=new WeakSet;class A0{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zn&&zn.active&&zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pp.has(this)&&(pp.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||R0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,S_(this),P0(this);const t=Re,e=xi;Re=this,xi=!0;try{return this.fn()}finally{L0(this),Re=t,xi=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Dg(t);this.deps=this.depsTail=void 0,S_(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pp.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rm(this)&&this.run()}get dirty(){return rm(this)}}let C0=0,fl,pl;function R0(n,t=!1){if(n.flags|=8,t){n.next=pl,pl=n;return}n.next=fl,fl=n}function Pg(){C0++}function Lg(){if(--C0>0)return;if(pl){let t=pl;for(pl=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;fl;){let t=fl;for(fl=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function P0(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function L0(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Dg(i),JM(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function rm(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(D0(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function D0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ml))return;n.globalVersion=Ml;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!rm(n)){n.flags&=-3;return}const e=Re,i=xi;Re=n,xi=!0;try{P0(n);const s=n.fn(n._value);(t.version===0||Cn(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Re=e,xi=i,L0(n),n.flags&=-3}}function Dg(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Dg(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function JM(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let xi=!0;const I0=[];function ur(){I0.push(xi),xi=!1}function dr(){const n=I0.pop();xi=n===void 0?!0:n}function S_(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Re;Re=void 0;try{t()}finally{Re=e}}}let Ml=0;class QM{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wf{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Re||!xi||Re===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Re)e=this.activeLink=new QM(Re,this),Re.deps?(e.prevDep=Re.depsTail,Re.depsTail.nextDep=e,Re.depsTail=e):Re.deps=Re.depsTail=e,U0(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Re.depsTail,e.nextDep=void 0,Re.depsTail.nextDep=e,Re.depsTail=e,Re.deps===e&&(Re.deps=i)}return e}trigger(t){this.version++,Ml++,this.notify(t)}notify(t){Pg();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Lg()}}}function U0(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)U0(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const om=new WeakMap,_o=Symbol(""),am=Symbol(""),yl=Symbol("");function pn(n,t,e){if(xi&&Re){let i=om.get(n);i||om.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Wf),s.map=i,s.key=e),s.track()}}function cs(n,t,e,i,s,r){const o=om.get(n);if(!o){Ml++;return}const a=l=>{l&&l.trigger()};if(Pg(),t==="clear")o.forEach(a);else{const l=$t(n),u=l&&Cg(e);if(l&&e==="length"){const d=Number(i);o.forEach((h,f)=>{(f==="length"||f===yl||!yi(f)&&f>=d)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(yl)),t){case"add":l?u&&a(o.get("length")):(a(o.get(_o)),qo(n)&&a(o.get(am)));break;case"delete":l||(a(o.get(_o)),qo(n)&&a(o.get(am)));break;case"set":qo(n)&&a(o.get(_o));break}}Lg()}function Ao(n){const t=ge(n);return t===n?t:(pn(t,"iterate",yl),ni(n)?t:t.map(mn))}function $f(n){return pn(n=ge(n),"iterate",yl),n}const ty={__proto__:null,[Symbol.iterator](){return mp(this,Symbol.iterator,mn)},concat(...n){return Ao(this).concat(...n.map(t=>$t(t)?Ao(t):t))},entries(){return mp(this,"entries",n=>(n[1]=mn(n[1]),n))},every(n,t){return Xi(this,"every",n,t,void 0,arguments)},filter(n,t){return Xi(this,"filter",n,t,e=>e.map(mn),arguments)},find(n,t){return Xi(this,"find",n,t,mn,arguments)},findIndex(n,t){return Xi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Xi(this,"findLast",n,t,mn,arguments)},findLastIndex(n,t){return Xi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Xi(this,"forEach",n,t,void 0,arguments)},includes(...n){return gp(this,"includes",n)},indexOf(...n){return gp(this,"indexOf",n)},join(n){return Ao(this).join(n)},lastIndexOf(...n){return gp(this,"lastIndexOf",n)},map(n,t){return Xi(this,"map",n,t,void 0,arguments)},pop(){return Za(this,"pop")},push(...n){return Za(this,"push",n)},reduce(n,...t){return b_(this,"reduce",n,t)},reduceRight(n,...t){return b_(this,"reduceRight",n,t)},shift(){return Za(this,"shift")},some(n,t){return Xi(this,"some",n,t,void 0,arguments)},splice(...n){return Za(this,"splice",n)},toReversed(){return Ao(this).toReversed()},toSorted(n){return Ao(this).toSorted(n)},toSpliced(...n){return Ao(this).toSpliced(...n)},unshift(...n){return Za(this,"unshift",n)},values(){return mp(this,"values",mn)}};function mp(n,t,e){const i=$f(n),s=i[t]();return i!==n&&!ni(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const ey=Array.prototype;function Xi(n,t,e,i,s,r){const o=$f(n),a=o!==n&&!ni(n),l=o[t];if(l!==ey[t]){const h=l.apply(n,r);return a?mn(h):h}let u=e;o!==n&&(a?u=function(h,f){return e.call(this,mn(h),f,n)}:e.length>2&&(u=function(h,f){return e.call(this,h,f,n)}));const d=l.call(o,u,i);return a&&s?s(d):d}function b_(n,t,e,i){const s=$f(n);let r=e;return s!==n&&(ni(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,mn(a),l,n)}),s[t](r,...i)}function gp(n,t,e){const i=ge(n);pn(i,"iterate",yl);const s=i[t](...e);return(s===-1||s===!1)&&Ng(e[0])?(e[0]=ge(e[0]),i[t](...e)):s}function Za(n,t,e=[]){ur(),Pg();const i=ge(n)[t].apply(n,e);return Lg(),dr(),i}const ny=wg("__proto__,__v_isRef,__isVue"),N0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yi));function iy(n){yi(n)||(n=String(n));const t=ge(this);return pn(t,"has",n),t.hasOwnProperty(n)}class F0{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?fy:V0:r?k0:B0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=$t(t);if(!s){let l;if(o&&(l=ty[e]))return l;if(e==="hasOwnProperty")return iy}const a=Reflect.get(t,e,gn(t)?t:i);return(yi(e)?N0.has(e):ny(e))||(s||pn(t,"get",e),r)?a:gn(a)?o&&Cg(e)?a:a.value:Ce(a)?s?z0(a):Xa(a):a}}class O0 extends F0{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Mo(r);if(!ni(i)&&!Mo(i)&&(r=ge(r),i=ge(i)),!$t(t)&&gn(r)&&!gn(i))return l?!1:(r.value=i,!0)}const o=$t(t)&&Cg(e)?Number(e)<t.length:be(t,e),a=Reflect.set(t,e,i,gn(t)?t:s);return t===ge(s)&&(o?Cn(i,r)&&cs(t,"set",e,i):cs(t,"add",e,i)),a}deleteProperty(t,e){const i=be(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&cs(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!yi(e)||!N0.has(e))&&pn(t,"has",e),i}ownKeys(t){return pn(t,"iterate",$t(t)?"length":_o),Reflect.ownKeys(t)}}class sy extends F0{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ry=new O0,oy=new sy,ay=new O0(!0);const lm=n=>n,Ku=n=>Reflect.getPrototypeOf(n);function ly(n,t,e){return function(...i){const s=this.__v_raw,r=ge(s),o=qo(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),d=e?lm:t?cm:mn;return!t&&pn(r,"iterate",l?am:_o),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[d(h[0]),d(h[1])]:d(h),done:f}},[Symbol.iterator](){return this}}}}function Zu(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function cy(n,t){const e={get(s){const r=this.__v_raw,o=ge(r),a=ge(s);n||(Cn(s,a)&&pn(o,"get",s),pn(o,"get",a));const{has:l}=Ku(o),u=t?lm:n?cm:mn;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&pn(ge(s),"iterate",_o),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=ge(r),a=ge(s);return n||(Cn(s,a)&&pn(o,"has",s),pn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ge(a),u=t?lm:n?cm:mn;return!n&&pn(l,"iterate",_o),a.forEach((d,h)=>s.call(r,u(d),u(h),o))}};return $e(e,n?{add:Zu("add"),set:Zu("set"),delete:Zu("delete"),clear:Zu("clear")}:{add(s){!t&&!ni(s)&&!Mo(s)&&(s=ge(s));const r=ge(this);return Ku(r).has.call(r,s)||(r.add(s),cs(r,"add",s,s)),this},set(s,r){!t&&!ni(r)&&!Mo(r)&&(r=ge(r));const o=ge(this),{has:a,get:l}=Ku(o);let u=a.call(o,s);u||(s=ge(s),u=a.call(o,s));const d=l.call(o,s);return o.set(s,r),u?Cn(r,d)&&cs(o,"set",s,r):cs(o,"add",s,r),this},delete(s){const r=ge(this),{has:o,get:a}=Ku(r);let l=o.call(r,s);l||(s=ge(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&cs(r,"delete",s,void 0),u},clear(){const s=ge(this),r=s.size!==0,o=s.clear();return r&&cs(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ly(s,n,t)}),e}function Ig(n,t){const e=cy(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(be(e,s)&&s in i?e:i,s,r)}const uy={get:Ig(!1,!1)},dy={get:Ig(!1,!0)},hy={get:Ig(!0,!1)};const B0=new WeakMap,k0=new WeakMap,V0=new WeakMap,fy=new WeakMap;function py(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function my(n){return n.__v_skip||!Object.isExtensible(n)?0:py(kM(n))}function Xa(n){return Mo(n)?n:Ug(n,!1,ry,uy,B0)}function Jn(n){return Ug(n,!1,ay,dy,k0)}function z0(n){return Ug(n,!0,oy,hy,V0)}function Ug(n,t,e,i,s){if(!Ce(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=my(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Yo(n){return Mo(n)?Yo(n.__v_raw):!!(n&&n.__v_isReactive)}function Mo(n){return!!(n&&n.__v_isReadonly)}function ni(n){return!!(n&&n.__v_isShallow)}function Ng(n){return n?!!n.__v_raw:!1}function ge(n){const t=n&&n.__v_raw;return t?ge(t):n}function gy(n){return!be(n,"__v_skip")&&Object.isExtensible(n)&&b0(n,"__v_skip",!0),n}const mn=n=>Ce(n)?Xa(n):n,cm=n=>Ce(n)?z0(n):n;function gn(n){return n?n.__v_isRef===!0:!1}function _t(n){return H0(n,!1)}function ku(n){return H0(n,!0)}function H0(n,t){return gn(n)?n:new _y(n,t)}class _y{constructor(t,e){this.dep=new Wf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ge(t),this._value=e?t:mn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||ni(t)||Mo(t);t=i?t:ge(t),Cn(t,e)&&(this._rawValue=t,this._value=i?t:mn(t),this.dep.trigger())}}function Rn(n){return gn(n)?n.value:n}const vy={get:(n,t,e)=>t==="__v_raw"?n:Rn(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return gn(s)&&!gn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function G0(n){return Yo(n)?n:new Proxy(n,vy)}class xy{constructor(t){this.__v_isRef=!0,this._value=void 0;const e=this.dep=new Wf,{get:i,set:s}=t(e.track.bind(e),e.trigger.bind(e));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(t){this._set(t)}}function My(n){return new xy(n)}class yy{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Wf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ml-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return R0(this,!0),!0}get value(){const t=this.dep.track();return D0(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Sy(n,t,e=!1){let i,s;return Kt(n)?i=n:(i=n.get,s=n.set),new yy(i,s,e)}const Ju={},Zd=new WeakMap;let Er;function by(n,t=!1,e=Er){if(e){let i=Zd.get(e);i||Zd.set(e,i=[]),i.push(n)}}function Ey(n,t,e=_e){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,u=A=>s?A:ni(A)||s===!1||s===0?us(A,1):us(A);let d,h,f,p,_=!1,x=!1;if(gn(n)?(h=()=>n.value,_=ni(n)):Yo(n)?(h=()=>u(n),_=!0):$t(n)?(x=!0,_=n.some(A=>Yo(A)||ni(A)),h=()=>n.map(A=>{if(gn(A))return A.value;if(Yo(A))return u(A);if(Kt(A))return l?l(A,2):A()})):Kt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){ur();try{f()}finally{dr()}}const A=Er;Er=d;try{return l?l(n,3,[p]):n(p)}finally{Er=A}}:h=ki,t&&s){const A=h,F=s===!0?1/0:s;h=()=>us(A(),F)}const g=ZM(),m=()=>{d.stop(),g&&Ag(g.effects,d)};if(r&&t){const A=t;t=(...F)=>{A(...F),m()}}let R=x?new Array(n.length).fill(Ju):Ju;const T=A=>{if(!(!(d.flags&1)||!d.dirty&&!A))if(t){const F=d.run();if(s||_||(x?F.some((D,L)=>Cn(D,R[L])):Cn(F,R))){f&&f();const D=Er;Er=d;try{const L=[F,R===Ju?void 0:x&&R[0]===Ju?[]:R,p];l?l(t,3,L):t(...L),R=F}finally{Er=D}}}else d.run()};return a&&a(T),d=new A0(h),d.scheduler=o?()=>o(T,!1):T,p=A=>by(A,!1,d),f=d.onStop=()=>{const A=Zd.get(d);if(A){if(l)l(A,4);else for(const F of A)F();Zd.delete(d)}},t?i?T(!0):R=d.run():o?o(T.bind(null,!0),!0):d.run(),m.pause=d.pause.bind(d),m.resume=d.resume.bind(d),m.stop=m,m}function us(n,t=1/0,e){if(t<=0||!Ce(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,gn(n))us(n.value,t,e);else if($t(n))for(let i=0;i<n.length;i++)us(n[i],t,e);else if($a(n)||qo(n))n.forEach(i=>{us(i,t,e)});else if(S0(n)){for(const i in n)us(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&us(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vu(n,t,e,i){try{return i?n(...i):n()}catch(s){Xf(s,t,e)}}function Si(n,t,e,i){if(Kt(n)){const s=Vu(n,t,e,i);return s&&M0(s)&&s.catch(r=>{Xf(r,t,e)}),s}if($t(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Si(n[r],t,e,i));return s}}function Xf(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||_e;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const d=a.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](n,l,u)===!1)return}a=a.parent}if(r){ur(),Vu(r,null,10,[n,l,u]),dr();return}}wy(n,e,s,i,o)}function wy(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const yn=[];let Ci=-1;const jo=[];let Cs=null,Ho=0;const W0=Promise.resolve();let Jd=null;function qf(n){const t=Jd||W0;return n?t.then(this?n.bind(this):n):t}function Ty(n){let t=Ci+1,e=yn.length;for(;t<e;){const i=t+e>>>1,s=yn[i],r=Sl(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Fg(n){if(!(n.flags&1)){const t=Sl(n),e=yn[yn.length-1];!e||!(n.flags&2)&&t>=Sl(e)?yn.push(n):yn.splice(Ty(t),0,n),n.flags|=1,$0()}}function $0(){Jd||(Jd=W0.then(q0))}function Ay(n){$t(n)?jo.push(...n):Cs&&n.id===-1?Cs.splice(Ho+1,0,n):n.flags&1||(jo.push(n),n.flags|=1),$0()}function E_(n,t,e=Ci+1){for(;e<yn.length;e++){const i=yn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;yn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function X0(n){if(jo.length){const t=[...new Set(jo)].sort((e,i)=>Sl(e)-Sl(i));if(jo.length=0,Cs){Cs.push(...t);return}for(Cs=t,Ho=0;Ho<Cs.length;Ho++){const e=Cs[Ho];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Cs=null,Ho=0}}const Sl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function q0(n){try{for(Ci=0;Ci<yn.length;Ci++){const t=yn[Ci];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vu(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ci<yn.length;Ci++){const t=yn[Ci];t&&(t.flags&=-2)}Ci=-1,yn.length=0,X0(),Jd=null,(yn.length||jo.length)&&q0()}}let nn=null,Y0=null;function Qd(n){const t=nn;return nn=n,Y0=n&&n.type.__scopeId||null,t}function vt(n,t=nn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&N_(-1);const r=Qd(t);let o;try{o=n(...s)}finally{Qd(r),i._d&&N_(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vi(n,t){if(nn===null)return n;const e=Qf(nn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=_e]=t[s];r&&(Kt(r)&&(r={mounted:r,updated:r}),r.deep&&us(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function pr(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ur(),Si(l,e,8,[n.el,a,n,t]),dr())}}const j0=Symbol("_vte"),K0=n=>n.__isTeleport,ml=n=>n&&(n.disabled||n.disabled===""),Cy=n=>n&&(n.defer||n.defer===""),w_=n=>typeof SVGElement<"u"&&n instanceof SVGElement,T_=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,um=(n,t)=>{const e=n&&n.to;return Oe(e)?t?t(e):null:e},Ry={name:"Teleport",__isTeleport:!0,process(n,t,e,i,s,r,o,a,l,u){const{mc:d,pc:h,pbc:f,o:{insert:p,querySelector:_,createText:x,createComment:g}}=u,m=ml(t.props);let{shapeFlag:R,children:T,dynamicChildren:A}=t;if(n==null){const F=t.el=x(""),D=t.anchor=x("");p(F,e,i),p(D,e,i);const L=(J,y)=>{R&16&&(s&&s.isCE&&(s.ce._teleportTarget=J),d(T,J,y,s,r,o,a,l))},k=()=>{const J=t.target=um(t.props,_),y=Z0(J,t,x,p);J&&(o!=="svg"&&w_(J)?o="svg":o!=="mathml"&&T_(J)&&(o="mathml"),m||(L(J,y),Rd(t,!1)))};m&&(L(e,D),Rd(t,!0)),Cy(t.props)?An(k,r):k()}else{t.el=n.el,t.targetStart=n.targetStart;const F=t.anchor=n.anchor,D=t.target=n.target,L=t.targetAnchor=n.targetAnchor,k=ml(n.props),J=k?e:D,y=k?F:L;if(o==="svg"||w_(D)?o="svg":(o==="mathml"||T_(D))&&(o="mathml"),A?(f(n.dynamicChildren,A,J,s,r,o,a),Hg(n,t,!0)):l||h(n,t,J,y,s,r,o,a,!1),m)k?t.props&&n.props&&t.props.to!==n.props.to&&(t.props.to=n.props.to):Qu(t,e,F,u,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const E=t.target=um(t.props,_);E&&Qu(t,E,null,u,0)}else k&&Qu(t,D,L,u,1);Rd(t,m)}},remove(n,t,e,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:d,target:h,props:f}=n;if(h&&(s(u),s(d)),r&&s(l),o&16){const p=r||!ml(f);for(let _=0;_<a.length;_++){const x=a[_];i(x,t,e,p,!!x.dynamicChildren)}}},move:Qu,hydrate:Py};function Qu(n,t,e,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,t,e);const{el:o,anchor:a,shapeFlag:l,children:u,props:d}=n,h=r===2;if(h&&i(o,t,e),(!h||ml(d))&&l&16)for(let f=0;f<u.length;f++)s(u[f],t,e,2);h&&i(a,t,e)}function Py(n,t,e,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:d}},h){const f=t.target=um(t.props,l);if(f){const p=ml(t.props),_=f._lpa||f.firstChild;if(t.shapeFlag&16)if(p)t.anchor=h(o(n),t,a(n),e,i,s,r),t.targetStart=_,t.targetAnchor=_&&o(_);else{t.anchor=o(n);let x=_;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")t.targetStart=x;else if(x.data==="teleport anchor"){t.targetAnchor=x,f._lpa=t.targetAnchor&&o(t.targetAnchor);break}}x=o(x)}t.targetAnchor||Z0(f,t,d,u),h(_&&o(_),t,f,e,i,s,r)}Rd(t,p)}return t.anchor&&o(t.anchor)}const Ly=Ry;function Rd(n,t){const e=n.ctx;if(e&&e.ut){let i,s;for(t?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",e.uid),i=i.nextSibling;e.ut()}}function Z0(n,t,e,i){const s=t.targetStart=e(""),r=t.targetAnchor=e("");return s[j0]=r,n&&(i(s,n),i(r,n)),r}const Rs=Symbol("_leaveCb"),td=Symbol("_enterCb");function Dy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ye(()=>{n.isMounted=!0}),je(()=>{n.isUnmounting=!0}),n}const qn=[Function,Array],J0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qn,onEnter:qn,onAfterEnter:qn,onEnterCancelled:qn,onBeforeLeave:qn,onLeave:qn,onAfterLeave:qn,onLeaveCancelled:qn,onBeforeAppear:qn,onAppear:qn,onAfterAppear:qn,onAppearCancelled:qn},Q0=n=>{const t=n.subTree;return t.component?Q0(t.component):t},Iy={name:"BaseTransition",props:J0,setup(n,{slots:t}){const e=Tx(),i=Dy();return()=>{const s=t.default&&nx(t.default(),!0);if(!s||!s.length)return;const r=tx(s),o=ge(n),{mode:a}=o;if(i.isLeaving)return _p(r);const l=A_(r);if(!l)return _p(r);let u=dm(l,o,i,e,f=>u=f);l.type!==Sn&&bl(l,u);const d=e.subTree,h=d&&A_(d);if(h&&h.type!==Sn&&!Pr(l,h)&&Q0(e).type!==Sn){const f=dm(h,o,i,e);if(bl(h,f),a==="out-in"&&l.type!==Sn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave},_p(r);a==="in-out"&&l.type!==Sn&&(f.delayLeave=(p,_,x)=>{const g=ex(i,h);g[String(h.key)]=h,p[Rs]=()=>{_(),p[Rs]=void 0,delete u.delayedLeave},u.delayedLeave=x})}return r}}};function tx(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Sn){t=e;break}}return t}const Uy=Iy;function ex(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function dm(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:g,onAppear:m,onAfterAppear:R,onAppearCancelled:T}=t,A=String(n.key),F=ex(e,n),D=(J,y)=>{J&&Si(J,i,9,y)},L=(J,y)=>{const E=y[1];D(J,y),$t(J)?J.every(O=>O.length<=1)&&E():J.length<=1&&E()},k={mode:o,persisted:a,beforeEnter(J){let y=l;if(!e.isMounted)if(r)y=g||l;else return;J[Rs]&&J[Rs](!0);const E=F[A];E&&Pr(n,E)&&E.el[Rs]&&E.el[Rs](),D(y,[J])},enter(J){let y=u,E=d,O=h;if(!e.isMounted)if(r)y=m||u,E=R||d,O=T||h;else return;let W=!1;const tt=J[td]=ct=>{W||(W=!0,ct?D(O,[J]):D(E,[J]),k.delayedLeave&&k.delayedLeave(),J[td]=void 0)};y?L(y,[J,tt]):tt()},leave(J,y){const E=String(n.key);if(J[td]&&J[td](!0),e.isUnmounting)return y();D(f,[J]);let O=!1;const W=J[Rs]=tt=>{O||(O=!0,y(),tt?D(x,[J]):D(_,[J]),J[Rs]=void 0,F[E]===n&&delete F[E])};F[E]=n,p?L(p,[J,W]):W()},clone(J){const y=dm(J,t,e,i,s);return s&&s(y),y}};return k}function _p(n){if(Yf(n))return n=nr(n),n.children=null,n}function A_(n){if(!Yf(n))return K0(n.type)&&n.children?tx(n.children):n;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Kt(e.default))return e.default()}}function bl(n,t){n.shapeFlag&6&&n.component?(n.transition=t,bl(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function nx(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===ee?(o.patchFlag&128&&s++,i=i.concat(nx(o.children,t,a))):(t||o.type!==Sn)&&i.push(a!=null?nr(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function re(n,t){return Kt(n)?$e({name:n.name},t,{setup:n}):n}function ix(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function hm(n,t,e,i,s=!1){if($t(n)){n.forEach((_,x)=>hm(_,t&&($t(t)?t[x]:t),e,i,s));return}if(Ko(i)&&!s)return;const r=i.shapeFlag&4?Qf(i.component):i.el,o=s?null:r,{i:a,r:l}=n,u=t&&t.r,d=a.refs===_e?a.refs={}:a.refs,h=a.setupState,f=ge(h),p=h===_e?()=>!1:_=>be(f,_);if(u!=null&&u!==l&&(Oe(u)?(d[u]=null,p(u)&&(h[u]=null)):gn(u)&&(u.value=null)),Kt(l))Vu(l,a,12,[o,d]);else{const _=Oe(l),x=gn(l);if(_||x){const g=()=>{if(n.f){const m=_?p(l)?h[l]:d[l]:l.value;s?$t(m)&&Ag(m,r):$t(m)?m.includes(r)||m.push(r):_?(d[l]=[r],p(l)&&(h[l]=d[l])):(l.value=[r],n.k&&(d[n.k]=l.value))}else _?(d[l]=o,p(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(d[n.k]=o))};o?(g.id=-1,An(g,e)):g()}}}Gf().requestIdleCallback;Gf().cancelIdleCallback;const Ko=n=>!!n.type.__asyncLoader,Yf=n=>n.type.__isKeepAlive;function Ny(n,t){sx(n,"a",t)}function Fy(n,t){sx(n,"da",t)}function sx(n,t,e=an){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(jf(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Yf(s.parent.vnode)&&Oy(i,t,e,s),s=s.parent}}function Oy(n,t,e,i){const s=jf(t,n,i,!0);rx(()=>{Ag(i[t],s)},e)}function jf(n,t,e=an,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{ur();const a=zu(e),l=Si(t,e,n,o);return a(),dr(),l});return i?s.unshift(r):s.push(r),r}}const _s=n=>(t,e=an)=>{(!Tl||n==="sp")&&jf(n,(...i)=>t(...i),e)},By=_s("bm"),Ye=_s("m"),ky=_s("bu"),Vy=_s("u"),je=_s("bum"),rx=_s("um"),zy=_s("sp"),Hy=_s("rtg"),Gy=_s("rtc");function Wy(n,t=an){jf("ec",n,t)}const Og="components",$y="directives";function Vt(n,t){return kg(Og,n,!0,t)||n}const ox=Symbol.for("v-ndc");function Ir(n){return Oe(n)?kg(Og,n,!1)||n:n||ox}function Bg(n){return kg($y,n)}function kg(n,t,e=!0,i=!1){const s=nn||an;if(s){const r=s.type;if(n===Og){const a=LS(r,!1);if(a&&(a===t||a===Wn(t)||a===Hf(Wn(t))))return r}const o=C_(s[n]||r[n],t)||C_(s.appContext[n],t);return!o&&i?r:o}}function C_(n,t){return n&&(n[t]||n[Wn(t)]||n[Hf(Wn(t))])}function We(n,t,e,i){let s;const r=e,o=$t(n);if(o||Oe(n)){const a=o&&Yo(n);let l=!1;a&&(l=!ni(n),n=$f(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?mn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(Ce(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const d=a[l];s[l]=t(n[d],d,l,r)}}else s=[];return s}function $n(n,t,e={},i,s){if(nn.ce||nn.parent&&Ko(nn.parent)&&nn.parent.ce)return t!=="default"&&(e.name=t),ot(),xe(ee,null,[X("slot",e,i&&i())],64);let r=n[t];r&&r._c&&(r._d=!1),ot();const o=r&&ax(r(e)),a=e.key||o&&o.key,l=xe(ee,{key:(a&&!yi(a)?a:`_${t}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function ax(n){return n.some(t=>wl(t)?!(t.type===Sn||t.type===ee&&!ax(t.children)):!0)?n:null}const fm=n=>n?Ax(n)?Qf(n):fm(n.parent):null,gl=$e(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fm(n.parent),$root:n=>fm(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Vg(n),$forceUpdate:n=>n.f||(n.f=()=>{Fg(n.update)}),$nextTick:n=>n.n||(n.n=qf.bind(n.proxy)),$watch:n=>pS.bind(n)}),vp=(n,t)=>n!==_e&&!n.__isScriptSetup&&be(n,t),Xy={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let u;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(vp(i,t))return o[t]=1,i[t];if(s!==_e&&be(s,t))return o[t]=2,s[t];if((u=n.propsOptions[0])&&be(u,t))return o[t]=3,r[t];if(e!==_e&&be(e,t))return o[t]=4,e[t];pm&&(o[t]=0)}}const d=gl[t];let h,f;if(d)return t==="$attrs"&&pn(n.attrs,"get",""),d(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==_e&&be(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,be(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return vp(s,t)?(s[t]=e,!0):i!==_e&&be(i,t)?(i[t]=e,!0):be(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==_e&&be(n,o)||vp(t,o)||(a=r[0])&&be(a,o)||be(i,o)||be(gl,o)||be(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:be(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function th(n){return $t(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}function Fa(n,t){return!n||!t?n||t:$t(n)&&$t(t)?n.concat(t):$e({},th(n),th(t))}let pm=!0;function qy(n){const t=Vg(n),e=n.proxy,i=n.ctx;pm=!1,t.beforeCreate&&R_(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:d,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:x,deactivated:g,beforeDestroy:m,beforeUnmount:R,destroyed:T,unmounted:A,render:F,renderTracked:D,renderTriggered:L,errorCaptured:k,serverPrefetch:J,expose:y,inheritAttrs:E,components:O,directives:W,filters:tt}=t;if(u&&Yy(u,i,null),o)for(const it in o){const q=o[it];Kt(q)&&(i[it]=q.bind(e))}if(s){const it=s.call(e,e);Ce(it)&&(n.data=Xa(it))}if(pm=!0,r)for(const it in r){const q=r[it],Et=Kt(q)?q.bind(e,e):Kt(q.get)?q.get.bind(e,e):ki,wt=!Kt(q)&&Kt(q.set)?q.set.bind(e):ki,Dt=bn({get:Et,set:wt});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Zt=>Dt.value=Zt})}if(a)for(const it in a)lx(a[it],i,e,it);if(l){const it=Kt(l)?l.call(e):l;Reflect.ownKeys(it).forEach(q=>{tS(q,it[q])})}d&&R_(d,n,"c");function Z(it,q){$t(q)?q.forEach(Et=>it(Et.bind(e))):q&&it(q.bind(e))}if(Z(By,h),Z(Ye,f),Z(ky,p),Z(Vy,_),Z(Ny,x),Z(Fy,g),Z(Wy,k),Z(Gy,D),Z(Hy,L),Z(je,R),Z(rx,A),Z(zy,J),$t(y))if(y.length){const it=n.exposed||(n.exposed={});y.forEach(q=>{Object.defineProperty(it,q,{get:()=>e[q],set:Et=>e[q]=Et})})}else n.exposed||(n.exposed={});F&&n.render===ki&&(n.render=F),E!=null&&(n.inheritAttrs=E),O&&(n.components=O),W&&(n.directives=W),J&&ix(n)}function Yy(n,t,e=ki){$t(n)&&(n=mm(n));for(const i in n){const s=n[i];let r;Ce(s)?"default"in s?r=Pd(s.from||i,s.default,!0):r=Pd(s.from||i):r=Pd(s),gn(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function R_(n,t,e){Si($t(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function lx(n,t,e,i){let s=i.includes(".")?Mx(e,i):()=>e[i];if(Oe(n)){const r=t[n];Kt(r)&&_l(s,r)}else if(Kt(n))_l(s,n.bind(e));else if(Ce(n))if($t(n))n.forEach(r=>lx(r,t,e,i));else{const r=Kt(n.handler)?n.handler.bind(e):t[n.handler];Kt(r)&&_l(s,r,n)}}function Vg(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(u=>eh(l,u,o,!0)),eh(l,t,o)),Ce(t)&&r.set(t,l),l}function eh(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&eh(n,r,e,!0),s&&s.forEach(o=>eh(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=jy[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const jy={data:P_,props:L_,emits:L_,methods:cl,computed:cl,beforeCreate:vn,created:vn,beforeMount:vn,mounted:vn,beforeUpdate:vn,updated:vn,beforeDestroy:vn,beforeUnmount:vn,destroyed:vn,unmounted:vn,activated:vn,deactivated:vn,errorCaptured:vn,serverPrefetch:vn,components:cl,directives:cl,watch:Zy,provide:P_,inject:Ky};function P_(n,t){return t?n?function(){return $e(Kt(n)?n.call(this,this):n,Kt(t)?t.call(this,this):t)}:t:n}function Ky(n,t){return cl(mm(n),mm(t))}function mm(n){if($t(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function vn(n,t){return n?[...new Set([].concat(n,t))]:t}function cl(n,t){return n?$e(Object.create(null),n,t):t}function L_(n,t){return n?$t(n)&&$t(t)?[...new Set([...n,...t])]:$e(Object.create(null),th(n),th(t??{})):t}function Zy(n,t){if(!n)return t;if(!t)return n;const e=$e(Object.create(null),n);for(const i in t)e[i]=vn(n[i],t[i]);return e}function cx(){return{app:null,config:{isNativeTag:OM,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jy=0;function Qy(n,t){return function(i,s=null){Kt(i)||(i=$e({},i)),s!=null&&!Ce(s)&&(s=null);const r=cx(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:Jy++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:IS,get config(){return r.config},set config(d){},use(d,...h){return o.has(d)||(d&&Kt(d.install)?(o.add(d),d.install(u,...h)):Kt(d)&&(o.add(d),d(u,...h))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,h){return h?(r.components[d]=h,u):r.components[d]},directive(d,h){return h?(r.directives[d]=h,u):r.directives[d]},mount(d,h,f){if(!l){const p=u._ceVNode||X(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&t?t(p,d):n(p,d,f),l=!0,u._container=d,d.__vue_app__=u,Qf(p.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Si(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,h){return r.provides[d]=h,u},runWithContext(d){const h=Zo;Zo=u;try{return d()}finally{Zo=h}}};return u}}let Zo=null;function tS(n,t){if(an){let e=an.provides;const i=an.parent&&an.parent.provides;i===e&&(e=an.provides=Object.create(i)),e[n]=t}}function Pd(n,t,e=!1){const i=an||nn;if(i||Zo){const s=Zo?Zo._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Kt(t)?t.call(i&&i.proxy):t}}const ux={},dx=()=>Object.create(ux),hx=n=>Object.getPrototypeOf(n)===ux;function eS(n,t,e,i=!1){const s={},r=dx();n.propsDefaults=Object.create(null),fx(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Jn(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function nS(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ge(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let h=0;h<d.length;h++){let f=d[h];if(Zf(n.emitsOptions,f))continue;const p=t[f];if(l)if(be(r,f))p!==r[f]&&(r[f]=p,u=!0);else{const _=Wn(f);s[_]=gm(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,u=!0)}}}else{fx(n,t,s,r)&&(u=!0);let d;for(const h in a)(!t||!be(t,h)&&((d=cr(h))===h||!be(t,d)))&&(l?e&&(e[h]!==void 0||e[d]!==void 0)&&(s[h]=gm(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!be(t,h))&&(delete r[h],u=!0)}u&&cs(n.attrs,"set","")}function fx(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(hl(l))continue;const u=t[l];let d;s&&be(s,d=Wn(l))?!r||!r.includes(d)?e[d]=u:(a||(a={}))[d]=u:Zf(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=ge(e),u=a||_e;for(let d=0;d<r.length;d++){const h=r[d];e[h]=gm(s,l,h,u[h],n,!be(u,h))}}return o}function gm(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=be(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Kt(l)){const{propsDefaults:u}=s;if(e in u)i=u[e];else{const d=zu(s);i=u[e]=l.call(null,t),d()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===cr(e))&&(i=!0))}return i}const iS=new WeakMap;function px(n,t,e=!1){const i=e?iS:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Kt(n)){const d=h=>{l=!0;const[f,p]=px(h,t,!0);$e(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!l)return Ce(n)&&i.set(n,Xo),Xo;if($t(r))for(let d=0;d<r.length;d++){const h=Wn(r[d]);D_(h)&&(o[h]=_e)}else if(r)for(const d in r){const h=Wn(d);if(D_(h)){const f=r[d],p=o[h]=$t(f)||Kt(f)?{type:f}:$e({},f),_=p.type;let x=!1,g=!0;if($t(_))for(let m=0;m<_.length;++m){const R=_[m],T=Kt(R)&&R.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(g=!1)}else x=Kt(_)&&_.name==="Boolean";p[0]=x,p[1]=g,(x||be(p,"default"))&&a.push(h)}}const u=[o,a];return Ce(n)&&i.set(n,u),u}function D_(n){return n[0]!=="$"&&!hl(n)}const mx=n=>n[0]==="_"||n==="$stable",zg=n=>$t(n)?n.map(Fi):[Fi(n)],sS=(n,t,e)=>{if(t._n)return t;const i=vt((...s)=>zg(t(...s)),e);return i._c=!1,i},gx=(n,t,e)=>{const i=n._ctx;for(const s in n){if(mx(s))continue;const r=n[s];if(Kt(r))t[s]=sS(s,r,i);else if(r!=null){const o=zg(r);t[s]=()=>o}}},_x=(n,t)=>{const e=zg(t);n.slots.default=()=>e},vx=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},rS=(n,t,e)=>{const i=n.slots=dx();if(n.vnode.shapeFlag&32){const s=t._;s?(vx(i,t,e),e&&b0(i,"_",s,!0)):gx(t,i)}else t&&_x(n,t)},oS=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=_e;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:vx(s,t,e):(r=!t.$stable,gx(t,s)),o=t}else t&&(_x(n,t),o={default:1});if(r)for(const a in s)!mx(a)&&o[a]==null&&delete s[a]},An=MS;function aS(n){return lS(n)}function lS(n,t){const e=Gf();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:d,parentNode:h,nextSibling:f,setScopeId:p=ki,insertStaticContent:_}=n,x=(M,I,H,nt=null,Y=null,st=null,rt=void 0,S=null,v=!!I.dynamicChildren)=>{if(M===I)return;M&&!Pr(M,I)&&(nt=Tt(M),Zt(M,Y,st,!0),M=null),I.patchFlag===-2&&(v=!1,I.dynamicChildren=null);const{type:P,ref:G,shapeFlag:z}=I;switch(P){case Jf:g(M,I,H,nt);break;case Sn:m(M,I,H,nt);break;case Ld:M==null&&R(I,H,nt,rt);break;case ee:O(M,I,H,nt,Y,st,rt,S,v);break;default:z&1?F(M,I,H,nt,Y,st,rt,S,v):z&6?W(M,I,H,nt,Y,st,rt,S,v):(z&64||z&128)&&P.process(M,I,H,nt,Y,st,rt,S,v,te)}G!=null&&Y&&hm(G,M&&M.ref,st,I||M,!I)},g=(M,I,H,nt)=>{if(M==null)i(I.el=a(I.children),H,nt);else{const Y=I.el=M.el;I.children!==M.children&&u(Y,I.children)}},m=(M,I,H,nt)=>{M==null?i(I.el=l(I.children||""),H,nt):I.el=M.el},R=(M,I,H,nt)=>{[M.el,M.anchor]=_(M.children,I,H,nt,M.el,M.anchor)},T=({el:M,anchor:I},H,nt)=>{let Y;for(;M&&M!==I;)Y=f(M),i(M,H,nt),M=Y;i(I,H,nt)},A=({el:M,anchor:I})=>{let H;for(;M&&M!==I;)H=f(M),s(M),M=H;s(I)},F=(M,I,H,nt,Y,st,rt,S,v)=>{I.type==="svg"?rt="svg":I.type==="math"&&(rt="mathml"),M==null?D(I,H,nt,Y,st,rt,S,v):J(M,I,Y,st,rt,S,v)},D=(M,I,H,nt,Y,st,rt,S)=>{let v,P;const{props:G,shapeFlag:z,transition:V,dirs:dt}=M;if(v=M.el=o(M.type,st,G&&G.is,G),z&8?d(v,M.children):z&16&&k(M.children,v,null,nt,Y,xp(M,st),rt,S),dt&&pr(M,null,nt,"created"),L(v,M,M.scopeId,rt,nt),G){for(const mt in G)mt!=="value"&&!hl(mt)&&r(v,mt,null,G[mt],st,nt);"value"in G&&r(v,"value",null,G.value,st),(P=G.onVnodeBeforeMount)&&Ei(P,nt,M)}dt&&pr(M,null,nt,"beforeMount");const lt=cS(Y,V);lt&&V.beforeEnter(v),i(v,I,H),((P=G&&G.onVnodeMounted)||lt||dt)&&An(()=>{P&&Ei(P,nt,M),lt&&V.enter(v),dt&&pr(M,null,nt,"mounted")},Y)},L=(M,I,H,nt,Y)=>{if(H&&p(M,H),nt)for(let st=0;st<nt.length;st++)p(M,nt[st]);if(Y){let st=Y.subTree;if(I===st||bx(st.type)&&(st.ssContent===I||st.ssFallback===I)){const rt=Y.vnode;L(M,rt,rt.scopeId,rt.slotScopeIds,Y.parent)}}},k=(M,I,H,nt,Y,st,rt,S,v=0)=>{for(let P=v;P<M.length;P++){const G=M[P]=S?Ps(M[P]):Fi(M[P]);x(null,G,I,H,nt,Y,st,rt,S)}},J=(M,I,H,nt,Y,st,rt)=>{const S=I.el=M.el;let{patchFlag:v,dynamicChildren:P,dirs:G}=I;v|=M.patchFlag&16;const z=M.props||_e,V=I.props||_e;let dt;if(H&&mr(H,!1),(dt=V.onVnodeBeforeUpdate)&&Ei(dt,H,I,M),G&&pr(I,M,H,"beforeUpdate"),H&&mr(H,!0),(z.innerHTML&&V.innerHTML==null||z.textContent&&V.textContent==null)&&d(S,""),P?y(M.dynamicChildren,P,S,H,nt,xp(I,Y),st):rt||q(M,I,S,null,H,nt,xp(I,Y),st,!1),v>0){if(v&16)E(S,z,V,H,Y);else if(v&2&&z.class!==V.class&&r(S,"class",null,V.class,Y),v&4&&r(S,"style",z.style,V.style,Y),v&8){const lt=I.dynamicProps;for(let mt=0;mt<lt.length;mt++){const Ut=lt[mt],ft=z[Ut],yt=V[Ut];(yt!==ft||Ut==="value")&&r(S,Ut,ft,yt,Y,H)}}v&1&&M.children!==I.children&&d(S,I.children)}else!rt&&P==null&&E(S,z,V,H,Y);((dt=V.onVnodeUpdated)||G)&&An(()=>{dt&&Ei(dt,H,I,M),G&&pr(I,M,H,"updated")},nt)},y=(M,I,H,nt,Y,st,rt)=>{for(let S=0;S<I.length;S++){const v=M[S],P=I[S],G=v.el&&(v.type===ee||!Pr(v,P)||v.shapeFlag&70)?h(v.el):H;x(v,P,G,null,nt,Y,st,rt,!0)}},E=(M,I,H,nt,Y)=>{if(I!==H){if(I!==_e)for(const st in I)!hl(st)&&!(st in H)&&r(M,st,I[st],null,Y,nt);for(const st in H){if(hl(st))continue;const rt=H[st],S=I[st];rt!==S&&st!=="value"&&r(M,st,S,rt,Y,nt)}"value"in H&&r(M,"value",I.value,H.value,Y)}},O=(M,I,H,nt,Y,st,rt,S,v)=>{const P=I.el=M?M.el:a(""),G=I.anchor=M?M.anchor:a("");let{patchFlag:z,dynamicChildren:V,slotScopeIds:dt}=I;dt&&(S=S?S.concat(dt):dt),M==null?(i(P,H,nt),i(G,H,nt),k(I.children||[],H,G,Y,st,rt,S,v)):z>0&&z&64&&V&&M.dynamicChildren?(y(M.dynamicChildren,V,H,Y,st,rt,S),(I.key!=null||Y&&I===Y.subTree)&&Hg(M,I,!0)):q(M,I,H,G,Y,st,rt,S,v)},W=(M,I,H,nt,Y,st,rt,S,v)=>{I.slotScopeIds=S,M==null?I.shapeFlag&512?Y.ctx.activate(I,H,nt,rt,v):tt(I,H,nt,Y,st,rt,v):ct(M,I,v)},tt=(M,I,H,nt,Y,st,rt)=>{const S=M.component=TS(M,nt,Y);if(Yf(M)&&(S.ctx.renderer=te),AS(S,!1,rt),S.asyncDep){if(Y&&Y.registerDep(S,Z,rt),!M.el){const v=S.subTree=X(Sn);m(null,v,I,H)}}else Z(S,M,I,H,Y,st,rt)},ct=(M,I,H)=>{const nt=I.component=M.component;if(vS(M,I,H))if(nt.asyncDep&&!nt.asyncResolved){it(nt,I,H);return}else nt.next=I,nt.update();else I.el=M.el,nt.vnode=I},Z=(M,I,H,nt,Y,st,rt)=>{const S=()=>{if(M.isMounted){let{next:z,bu:V,u:dt,parent:lt,vnode:mt}=M;{const Ft=xx(M);if(Ft){z&&(z.el=mt.el,it(M,z,rt)),Ft.asyncDep.then(()=>{M.isUnmounted||S()});return}}let Ut=z,ft;mr(M,!1),z?(z.el=mt.el,it(M,z,rt)):z=mt,V&&Cd(V),(ft=z.props&&z.props.onVnodeBeforeUpdate)&&Ei(ft,lt,z,mt),mr(M,!0);const yt=Mp(M),zt=M.subTree;M.subTree=yt,x(zt,yt,h(zt.el),Tt(zt),M,Y,st),z.el=yt.el,Ut===null&&xS(M,yt.el),dt&&An(dt,Y),(ft=z.props&&z.props.onVnodeUpdated)&&An(()=>Ei(ft,lt,z,mt),Y)}else{let z;const{el:V,props:dt}=I,{bm:lt,m:mt,parent:Ut,root:ft,type:yt}=M,zt=Ko(I);if(mr(M,!1),lt&&Cd(lt),!zt&&(z=dt&&dt.onVnodeBeforeMount)&&Ei(z,Ut,I),mr(M,!0),V&&oe){const Ft=()=>{M.subTree=Mp(M),oe(V,M.subTree,M,Y,null)};zt&&yt.__asyncHydrate?yt.__asyncHydrate(V,M,Ft):Ft()}else{ft.ce&&ft.ce._injectChildStyle(yt);const Ft=M.subTree=Mp(M);x(null,Ft,H,nt,M,Y,st),I.el=Ft.el}if(mt&&An(mt,Y),!zt&&(z=dt&&dt.onVnodeMounted)){const Ft=I;An(()=>Ei(z,Ut,Ft),Y)}(I.shapeFlag&256||Ut&&Ko(Ut.vnode)&&Ut.vnode.shapeFlag&256)&&M.a&&An(M.a,Y),M.isMounted=!0,I=H=nt=null}};M.scope.on();const v=M.effect=new A0(S);M.scope.off();const P=M.update=v.run.bind(v),G=M.job=v.runIfDirty.bind(v);G.i=M,G.id=M.uid,v.scheduler=()=>Fg(G),mr(M,!0),P()},it=(M,I,H)=>{I.component=M;const nt=M.vnode.props;M.vnode=I,M.next=null,nS(M,I.props,nt,H),oS(M,I.children,H),ur(),E_(M),dr()},q=(M,I,H,nt,Y,st,rt,S,v=!1)=>{const P=M&&M.children,G=M?M.shapeFlag:0,z=I.children,{patchFlag:V,shapeFlag:dt}=I;if(V>0){if(V&128){wt(P,z,H,nt,Y,st,rt,S,v);return}else if(V&256){Et(P,z,H,nt,Y,st,rt,S,v);return}}dt&8?(G&16&&It(P,Y,st),z!==P&&d(H,z)):G&16?dt&16?wt(P,z,H,nt,Y,st,rt,S,v):It(P,Y,st,!0):(G&8&&d(H,""),dt&16&&k(z,H,nt,Y,st,rt,S,v))},Et=(M,I,H,nt,Y,st,rt,S,v)=>{M=M||Xo,I=I||Xo;const P=M.length,G=I.length,z=Math.min(P,G);let V;for(V=0;V<z;V++){const dt=I[V]=v?Ps(I[V]):Fi(I[V]);x(M[V],dt,H,null,Y,st,rt,S,v)}P>G?It(M,Y,st,!0,!1,z):k(I,H,nt,Y,st,rt,S,v,z)},wt=(M,I,H,nt,Y,st,rt,S,v)=>{let P=0;const G=I.length;let z=M.length-1,V=G-1;for(;P<=z&&P<=V;){const dt=M[P],lt=I[P]=v?Ps(I[P]):Fi(I[P]);if(Pr(dt,lt))x(dt,lt,H,null,Y,st,rt,S,v);else break;P++}for(;P<=z&&P<=V;){const dt=M[z],lt=I[V]=v?Ps(I[V]):Fi(I[V]);if(Pr(dt,lt))x(dt,lt,H,null,Y,st,rt,S,v);else break;z--,V--}if(P>z){if(P<=V){const dt=V+1,lt=dt<G?I[dt].el:nt;for(;P<=V;)x(null,I[P]=v?Ps(I[P]):Fi(I[P]),H,lt,Y,st,rt,S,v),P++}}else if(P>V)for(;P<=z;)Zt(M[P],Y,st,!0),P++;else{const dt=P,lt=P,mt=new Map;for(P=lt;P<=V;P++){const Ht=I[P]=v?Ps(I[P]):Fi(I[P]);Ht.key!=null&&mt.set(Ht.key,P)}let Ut,ft=0;const yt=V-lt+1;let zt=!1,Ft=0;const At=new Array(yt);for(P=0;P<yt;P++)At[P]=0;for(P=dt;P<=z;P++){const Ht=M[P];if(ft>=yt){Zt(Ht,Y,st,!0);continue}let se;if(Ht.key!=null)se=mt.get(Ht.key);else for(Ut=lt;Ut<=V;Ut++)if(At[Ut-lt]===0&&Pr(Ht,I[Ut])){se=Ut;break}se===void 0?Zt(Ht,Y,st,!0):(At[se-lt]=P+1,se>=Ft?Ft=se:zt=!0,x(Ht,I[se],H,null,Y,st,rt,S,v),ft++)}const ie=zt?uS(At):Xo;for(Ut=ie.length-1,P=yt-1;P>=0;P--){const Ht=lt+P,se=I[Ht],U=Ht+1<G?I[Ht+1].el:nt;At[P]===0?x(null,se,H,U,Y,st,rt,S,v):zt&&(Ut<0||P!==ie[Ut]?Dt(se,H,U,2):Ut--)}}},Dt=(M,I,H,nt,Y=null)=>{const{el:st,type:rt,transition:S,children:v,shapeFlag:P}=M;if(P&6){Dt(M.component.subTree,I,H,nt);return}if(P&128){M.suspense.move(I,H,nt);return}if(P&64){rt.move(M,I,H,te);return}if(rt===ee){i(st,I,H);for(let z=0;z<v.length;z++)Dt(v[z],I,H,nt);i(M.anchor,I,H);return}if(rt===Ld){T(M,I,H);return}if(nt!==2&&P&1&&S)if(nt===0)S.beforeEnter(st),i(st,I,H),An(()=>S.enter(st),Y);else{const{leave:z,delayLeave:V,afterLeave:dt}=S,lt=()=>i(st,I,H),mt=()=>{z(st,()=>{lt(),dt&&dt()})};V?V(st,lt,mt):mt()}else i(st,I,H)},Zt=(M,I,H,nt=!1,Y=!1)=>{const{type:st,props:rt,ref:S,children:v,dynamicChildren:P,shapeFlag:G,patchFlag:z,dirs:V,cacheIndex:dt}=M;if(z===-2&&(Y=!1),S!=null&&hm(S,null,H,M,!0),dt!=null&&(I.renderCache[dt]=void 0),G&256){I.ctx.deactivate(M);return}const lt=G&1&&V,mt=!Ko(M);let Ut;if(mt&&(Ut=rt&&rt.onVnodeBeforeUnmount)&&Ei(Ut,I,M),G&6)gt(M.component,H,nt);else{if(G&128){M.suspense.unmount(H,nt);return}lt&&pr(M,null,I,"beforeUnmount"),G&64?M.type.remove(M,I,H,te,nt):P&&!P.hasOnce&&(st!==ee||z>0&&z&64)?It(P,I,H,!1,!0):(st===ee&&z&384||!Y&&G&16)&&It(v,I,H),nt&&ue(M)}(mt&&(Ut=rt&&rt.onVnodeUnmounted)||lt)&&An(()=>{Ut&&Ei(Ut,I,M),lt&&pr(M,null,I,"unmounted")},H)},ue=M=>{const{type:I,el:H,anchor:nt,transition:Y}=M;if(I===ee){at(H,nt);return}if(I===Ld){A(M);return}const st=()=>{s(H),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(M.shapeFlag&1&&Y&&!Y.persisted){const{leave:rt,delayLeave:S}=Y,v=()=>rt(H,st);S?S(M.el,st,v):v()}else st()},at=(M,I)=>{let H;for(;M!==I;)H=f(M),s(M),M=H;s(I)},gt=(M,I,H)=>{const{bum:nt,scope:Y,job:st,subTree:rt,um:S,m:v,a:P}=M;I_(v),I_(P),nt&&Cd(nt),Y.stop(),st&&(st.flags|=8,Zt(rt,M,I,H)),S&&An(S,I),An(()=>{M.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},It=(M,I,H,nt=!1,Y=!1,st=0)=>{for(let rt=st;rt<M.length;rt++)Zt(M[rt],I,H,nt,Y)},Tt=M=>{if(M.shapeFlag&6)return Tt(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const I=f(M.anchor||M.el),H=I&&I[j0];return H?f(H):I};let Yt=!1;const Xt=(M,I,H)=>{M==null?I._vnode&&Zt(I._vnode,null,null,!0):x(I._vnode||null,M,I,null,null,null,H),I._vnode=M,Yt||(Yt=!0,E_(),X0(),Yt=!1)},te={p:x,um:Zt,m:Dt,r:ue,mt:tt,mc:k,pc:q,pbc:y,n:Tt,o:n};let fe,oe;return{render:Xt,hydrate:fe,createApp:Qy(Xt,fe)}}function xp({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function mr({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function cS(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Hg(n,t,e=!1){const i=n.children,s=t.children;if($t(i)&&$t(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ps(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Hg(o,a)),a.type===Jf&&(a.el=o.el)}}function uS(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=e[e.length-1],n[s]<u){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<u?r=a+1:o=a;u<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function xx(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xx(t)}function I_(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const dS=Symbol.for("v-scx"),hS=()=>Pd(dS);function qa(n,t){return Kf(n,null,t)}function fS(n,t){return Kf(n,null,{flush:"sync"})}function _l(n,t,e){return Kf(n,t,e)}function Kf(n,t,e=_e){const{immediate:i,deep:s,flush:r,once:o}=e,a=$e({},e),l=t&&i||!t&&r!=="post";let u;if(Tl){if(r==="sync"){const p=hS();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ki,p.resume=ki,p.pause=ki,p}}const d=an;a.call=(p,_,x)=>Si(p,d,_,x);let h=!1;r==="post"?a.scheduler=p=>{An(p,d&&d.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():Fg(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const f=Ey(n,t,a);return Tl&&(u?u.push(f):l&&f()),f}function pS(n,t,e){const i=this.proxy,s=Oe(n)?n.includes(".")?Mx(i,n):()=>i[n]:n.bind(i,i);let r;Kt(t)?r=t:(r=t.handler,e=t);const o=zu(this),a=Kf(s,r.bind(i),e);return o(),a}function Mx(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}function Eo(n,t,e=_e){const i=Tx(),s=Wn(t),r=cr(t),o=yx(n,s),a=My((l,u)=>{let d,h=_e,f;return fS(()=>{const p=n[s];Cn(d,p)&&(d=p,u())}),{get(){return l(),e.get?e.get(d):d},set(p){const _=e.set?e.set(p):p;if(!Cn(_,d)&&!(h!==_e&&Cn(p,h)))return;const x=i.vnode.props;x&&(t in x||s in x||r in x)&&(`onUpdate:${t}`in x||`onUpdate:${s}`in x||`onUpdate:${r}`in x)||(d=p,u()),i.emit(`update:${t}`,_),Cn(p,_)&&Cn(p,h)&&!Cn(_,f)&&u(),h=p,f=_}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||_e:a,done:!1}:{done:!0}}}},a}const yx=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Wn(t)}Modifiers`]||n[`${cr(t)}Modifiers`];function mS(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||_e;let s=e;const r=t.startsWith("update:"),o=r&&yx(i,t.slice(7));o&&(o.trim&&(s=e.map(d=>Oe(d)?d.trim():d)),o.number&&(s=e.map(Kd)));let a,l=i[a=hp(t)]||i[a=hp(Wn(t))];!l&&r&&(l=i[a=hp(cr(t))]),l&&Si(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Si(u,n,6,s)}}function Sx(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Kt(n)){const l=u=>{const d=Sx(u,t,!0);d&&(a=!0,$e(o,d))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Ce(n)&&i.set(n,null),null):($t(r)?r.forEach(l=>o[l]=null):$e(o,r),Ce(n)&&i.set(n,o),o)}function Zf(n,t){return!n||!Vf(t)?!1:(t=t.slice(2).replace(/Once$/,""),be(n,t[0].toLowerCase()+t.slice(1))||be(n,cr(t))||be(n,t))}function Mp(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:d,props:h,data:f,setupState:p,ctx:_,inheritAttrs:x}=n,g=Qd(n);let m,R;try{if(e.shapeFlag&4){const A=s||i,F=A;m=Fi(u.call(F,A,d,h,p,f,_)),R=a}else{const A=t;m=Fi(A.length>1?A(h,{attrs:a,slots:o,emit:l}):A(h,null)),R=t.props?a:gS(a)}}catch(A){vl.length=0,Xf(A,n,1),m=X(Sn)}let T=m;if(R&&x!==!1){const A=Object.keys(R),{shapeFlag:F}=T;A.length&&F&7&&(r&&A.some(Tg)&&(R=_S(R,r)),T=nr(T,R,!1,!0))}return e.dirs&&(T=nr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition&&bl(T,e.transition),m=T,Qd(g),m}const gS=n=>{let t;for(const e in n)(e==="class"||e==="style"||Vf(e))&&((t||(t={}))[e]=n[e]);return t},_S=(n,t)=>{const e={};for(const i in n)(!Tg(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function vS(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?U_(i,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const f=d[h];if(o[f]!==i[f]&&!Zf(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?U_(i,o,u):!0:!!o;return!1}function U_(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Zf(e,r))return!0}return!1}function xS({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const bx=n=>n.__isSuspense;function MS(n,t){t&&t.pendingBranch?$t(n)?t.effects.push(...n):t.effects.push(n):Ay(n)}const ee=Symbol.for("v-fgt"),Jf=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),Ld=Symbol.for("v-stc"),vl=[];let Hn=null;function ot(n=!1){vl.push(Hn=n?null:[])}function yS(){vl.pop(),Hn=vl[vl.length-1]||null}let El=1;function N_(n){El+=n,n<0&&Hn&&(Hn.hasOnce=!0)}function Ex(n){return n.dynamicChildren=El>0?Hn||Xo:null,yS(),El>0&&Hn&&Hn.push(n),n}function xt(n,t,e,i,s,r){return Ex(C(n,t,e,i,s,r,!0))}function xe(n,t,e,i,s){return Ex(X(n,t,e,i,s,!0))}function wl(n){return n?n.__v_isVNode===!0:!1}function Pr(n,t){return n.type===t.type&&n.key===t.key}const wx=({key:n})=>n??null,Dd=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Oe(n)||gn(n)||Kt(n)?{i:nn,r:n,k:t,f:!!e}:n:null);function C(n,t=null,e=null,i=0,s=null,r=n===ee?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&wx(t),ref:t&&Dd(t),scopeId:Y0,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nn};return a?(Gg(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Oe(e)?8:16),El>0&&!o&&Hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Hn.push(l),l}const X=SS;function SS(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===ox)&&(n=Sn),wl(n)){const a=nr(n,t,!0);return e&&Gg(a,e),El>0&&!r&&Hn&&(a.shapeFlag&6?Hn[Hn.indexOf(n)]=a:Hn.push(a)),a.patchFlag=-2,a}if(DS(n)&&(n=n.__vccOpts),t){t=Ya(t);let{class:a,style:l}=t;a&&!Oe(a)&&(t.class=kt(a)),Ce(l)&&(Ng(l)&&!$t(l)&&(l=$e({},l)),t.style=Ln(l))}const o=Oe(n)?1:bx(n)?128:K0(n)?64:Ce(n)?4:Kt(n)?2:0;return C(n,t,e,i,s,o,r,!0)}function Ya(n){return n?Ng(n)||hx(n)?$e({},n):n:null}function nr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=t?Wg(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&wx(u),ref:t&&t.ref?e&&r?$t(r)?r.concat(Dd(t)):[r,Dd(t)]:Dd(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ee?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&nr(n.ssContent),ssFallback:n.ssFallback&&nr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&bl(d,l.clone(d)),d}function St(n=" ",t=0){return X(Jf,null,n,t)}function bS(n,t){const e=X(Ld,null,n);return e.staticCount=t,e}function nh(n="",t=!1){return t?(ot(),xe(Sn,null,n)):X(Sn,null,n)}function Fi(n){return n==null||typeof n=="boolean"?X(Sn):$t(n)?X(ee,null,n.slice()):wl(n)?Ps(n):X(Jf,null,String(n))}function Ps(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:nr(n)}function Gg(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if($t(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Gg(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!hx(t)?t._ctx=nn:s===3&&nn&&(nn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Kt(t)?(t={default:t,_ctx:nn},e=32):(t=String(t),i&64?(e=16,t=[St(t)]):e=8);n.children=t,n.shapeFlag|=e}function Wg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=kt([t.class,i.class]));else if(s==="style")t.style=Ln([t.style,i.style]);else if(Vf(s)){const r=t[s],o=i[s];o&&r!==o&&!($t(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Ei(n,t,e,i=null){Si(n,t,7,[e,i])}const ES=cx();let wS=0;function TS(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||ES,r={uid:wS++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new KM(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:px(i,s),emitsOptions:Sx(i,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:i.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=mS.bind(null,r),n.ce&&n.ce(r),r}let an=null;const Tx=()=>an||nn;let ih,_m;{const n=Gf(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ih=t("__VUE_INSTANCE_SETTERS__",e=>an=e),_m=t("__VUE_SSR_SETTERS__",e=>Tl=e)}const zu=n=>{const t=an;return ih(n),n.scope.on(),()=>{n.scope.off(),ih(t)}},F_=()=>{an&&an.scope.off(),ih(null)};function Ax(n){return n.vnode.shapeFlag&4}let Tl=!1;function AS(n,t=!1,e=!1){t&&_m(t);const{props:i,children:s}=n.vnode,r=Ax(n);eS(n,i,r,t),rS(n,s,e);const o=r?CS(n,t):void 0;return t&&_m(!1),o}function CS(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xy);const{setup:i}=e;if(i){ur();const s=n.setupContext=i.length>1?PS(n):null,r=zu(n),o=Vu(i,n,0,[n.props,s]),a=M0(o);if(dr(),r(),(a||n.sp)&&!Ko(n)&&ix(n),a){if(o.then(F_,F_),t)return o.then(l=>{O_(n,l,t)}).catch(l=>{Xf(l,n,0)});n.asyncDep=o}else O_(n,o,t)}else Cx(n,t)}function O_(n,t,e){Kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ce(t)&&(n.setupState=G0(t)),Cx(n,e)}let B_;function Cx(n,t,e){const i=n.type;if(!n.render){if(!t&&B_&&!i.render){const s=i.template||Vg(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,u=$e($e({isCustomElement:r,delimiters:a},o),l);i.render=B_(s,u)}}n.render=i.render||ki}{const s=zu(n);ur();try{qy(n)}finally{dr(),s()}}}const RS={get(n,t){return pn(n,"get",""),n[t]}};function PS(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,RS),slots:n.slots,emit:n.emit,expose:t}}function Qf(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(G0(gy(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in gl)return gl[e](n)},has(t,e){return e in t||e in gl}})):n.proxy}function LS(n,t=!0){return Kt(n)?n.displayName||n.name:n.name||t&&n.__name}function DS(n){return Kt(n)&&"__vccOpts"in n}const bn=(n,t)=>Sy(n,t,Tl);function $g(n,t,e){const i=arguments.length;return i===2?Ce(t)&&!$t(t)?wl(t)?X(n,null,[t]):X(n,t):X(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&wl(e)&&(e=[e]),X(n,t,e))}const IS="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vm;const k_=typeof window<"u"&&window.trustedTypes;if(k_)try{vm=k_.createPolicy("vue",{createHTML:n=>n})}catch{}const Rx=vm?n=>vm.createHTML(n):n=>n,US="http://www.w3.org/2000/svg",NS="http://www.w3.org/1998/Math/MathML",Qi=typeof document<"u"?document:null,V_=Qi&&Qi.createElement("template"),FS={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Qi.createElementNS(US,n):t==="mathml"?Qi.createElementNS(NS,n):e?Qi.createElement(n,{is:e}):Qi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Qi.createTextNode(n),createComment:n=>Qi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Qi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{V_.innerHTML=Rx(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=V_.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},xs="transition",Ja="animation",Al=Symbol("_vtc"),Px={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},OS=$e({},J0,Px),BS=n=>(n.displayName="Transition",n.props=OS,n),ms=BS((n,{slots:t})=>$g(Uy,kS(n),t)),gr=(n,t=[])=>{$t(n)?n.forEach(e=>e(...t)):n&&n(...t)},z_=n=>n?$t(n)?n.some(t=>t.length>1):n.length>1:!1;function kS(n){const t={};for(const O in n)O in Px||(t[O]=n[O]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:d=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,_=VS(s),x=_&&_[0],g=_&&_[1],{onBeforeEnter:m,onEnter:R,onEnterCancelled:T,onLeave:A,onLeaveCancelled:F,onBeforeAppear:D=m,onAppear:L=R,onAppearCancelled:k=T}=t,J=(O,W,tt)=>{_r(O,W?d:a),_r(O,W?u:o),tt&&tt()},y=(O,W)=>{O._isLeaving=!1,_r(O,h),_r(O,p),_r(O,f),W&&W()},E=O=>(W,tt)=>{const ct=O?L:R,Z=()=>J(W,O,tt);gr(ct,[W,Z]),H_(()=>{_r(W,O?l:r),Ms(W,O?d:a),z_(ct)||G_(W,i,x,Z)})};return $e(t,{onBeforeEnter(O){gr(m,[O]),Ms(O,r),Ms(O,o)},onBeforeAppear(O){gr(D,[O]),Ms(O,l),Ms(O,u)},onEnter:E(!1),onAppear:E(!0),onLeave(O,W){O._isLeaving=!0;const tt=()=>y(O,W);Ms(O,h),Ms(O,f),GS(),H_(()=>{O._isLeaving&&(_r(O,h),Ms(O,p),z_(A)||G_(O,i,g,tt))}),gr(A,[O,tt])},onEnterCancelled(O){J(O,!1),gr(T,[O])},onAppearCancelled(O){J(O,!0),gr(k,[O])},onLeaveCancelled(O){y(O),gr(F,[O])}})}function VS(n){if(n==null)return null;if(Ce(n))return[yp(n.enter),yp(n.leave)];{const t=yp(n);return[t,t]}}function yp(n){return HM(n)}function Ms(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Al]||(n[Al]=new Set)).add(t)}function _r(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Al];e&&(e.delete(t),e.size||(n[Al]=void 0))}function H_(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let zS=0;function G_(n,t,e,i){const s=n._endId=++zS,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=HS(n,t);if(!o)return i();const u=o+"end";let d=0;const h=()=>{n.removeEventListener(u,f),r()},f=p=>{p.target===n&&++d>=l&&h()};setTimeout(()=>{d<l&&h()},a+1),n.addEventListener(u,f)}function HS(n,t){const e=window.getComputedStyle(n),i=_=>(e[_]||"").split(", "),s=i(`${xs}Delay`),r=i(`${xs}Duration`),o=W_(s,r),a=i(`${Ja}Delay`),l=i(`${Ja}Duration`),u=W_(a,l);let d=null,h=0,f=0;t===xs?o>0&&(d=xs,h=o,f=r.length):t===Ja?u>0&&(d=Ja,h=u,f=l.length):(h=Math.max(o,u),d=h>0?o>u?xs:Ja:null,f=d?d===xs?r.length:l.length:0);const p=d===xs&&/\b(transform|all)(,|$)/.test(i(`${xs}Property`).toString());return{type:d,timeout:h,propCount:f,hasTransform:p}}function W_(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>$_(e)+$_(n[i])))}function $_(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function GS(){return document.body.offsetHeight}function WS(n,t,e){const i=n[Al];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const X_=Symbol("_vod"),$S=Symbol("_vsh"),XS=Symbol(""),qS=/(^|;)\s*display\s*:/;function YS(n,t,e){const i=n.style,s=Oe(e);let r=!1;if(e&&!s){if(t)if(Oe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Id(i,a,"")}else for(const o in t)e[o]==null&&Id(i,o,"");for(const o in e)o==="display"&&(r=!0),Id(i,o,e[o])}else if(s){if(t!==e){const o=i[XS];o&&(e+=";"+o),i.cssText=e,r=qS.test(e)}}else t&&n.removeAttribute("style");X_ in n&&(n[X_]=r?i.display:"",n[$S]&&(i.display="none"))}const q_=/\s*!important$/;function Id(n,t,e){if($t(e))e.forEach(i=>Id(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=jS(n,t);q_.test(e)?n.setProperty(cr(i),e.replace(q_,""),"important"):n[i]=e}}const Y_=["Webkit","Moz","ms"],Sp={};function jS(n,t){const e=Sp[t];if(e)return e;let i=Wn(t);if(i!=="filter"&&i in n)return Sp[t]=i;i=Hf(i);for(let s=0;s<Y_.length;s++){const r=Y_[s]+i;if(r in n)return Sp[t]=r}return t}const j_="http://www.w3.org/1999/xlink";function K_(n,t,e,i,s,r=YM(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(j_,t.slice(6,t.length)):n.setAttributeNS(j_,t,e):e==null||r&&!E0(e)?n.removeAttribute(t):n.setAttribute(t,r?"":yi(e)?String(e):e)}function Z_(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Rx(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=E0(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function ds(n,t,e,i){n.addEventListener(t,e,i)}function KS(n,t,e,i){n.removeEventListener(t,e,i)}const J_=Symbol("_vei");function ZS(n,t,e,i,s=null){const r=n[J_]||(n[J_]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=JS(t);if(i){const u=r[t]=eb(i,s);ds(n,a,u,l)}else o&&(KS(n,a,o,l),r[t]=void 0)}}const Q_=/(?:Once|Passive|Capture)$/;function JS(n){let t;if(Q_.test(n)){t={};let i;for(;i=n.match(Q_);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):cr(n.slice(2)),t]}let bp=0;const QS=Promise.resolve(),tb=()=>bp||(QS.then(()=>bp=0),bp=Date.now());function eb(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Si(nb(i,e.value),t,5,[i])};return e.value=n,e.attached=tb(),e}function nb(n,t){if($t(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const tv=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ib=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?WS(n,i,o):t==="style"?YS(n,e,i):Vf(t)?Tg(t)||ZS(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sb(n,t,i,o))?(Z_(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&K_(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Oe(i))?Z_(n,Wn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),K_(n,t,i,o))};function sb(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&tv(t)&&Kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return tv(t)&&Oe(e)?!1:t in n}const ir=n=>{const t=n.props["onUpdate:modelValue"]||!1;return $t(t)?e=>Cd(t,e):t};function rb(n){n.target.composing=!0}function ev(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ii=Symbol("_assign"),sr={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[ii]=ir(s);const r=i||s.props&&s.props.type==="number";ds(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),r&&(a=Kd(a)),n[ii](a)}),e&&ds(n,"change",()=>{n.value=n.value.trim()}),t||(ds(n,"compositionstart",rb),ds(n,"compositionend",ev),ds(n,"change",ev))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[ii]=ir(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Kd(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},ob={deep:!0,created(n,t,e){n[ii]=ir(e),ds(n,"change",()=>{const i=n._modelValue,s=Oa(n),r=n.checked,o=n[ii];if($t(i)){const a=Rg(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const u=[...i];u.splice(a,1),o(u)}}else if($a(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Lx(n,r))})},mounted:nv,beforeUpdate(n,t,e){n[ii]=ir(e),nv(n,t,e)}};function nv(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if($t(t))s=Rg(t,i.props.value)>-1;else if($a(t))s=t.has(i.props.value);else{if(t===e)return;s=xo(t,Lx(n,!0))}n.checked!==s&&(n.checked=s)}const ab={created(n,{value:t},e){n.checked=xo(t,e.props.value),n[ii]=ir(e),ds(n,"change",()=>{n[ii](Oa(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[ii]=ir(i),t!==e&&(n.checked=xo(t,i.props.value))}},lb={deep:!0,created(n,{value:t,modifiers:{number:e}},i){const s=$a(t);ds(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>e?Kd(Oa(o)):Oa(o));n[ii](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,qf(()=>{n._assigning=!1})}),n[ii]=ir(i)},mounted(n,{value:t}){iv(n,t)},beforeUpdate(n,t,e){n[ii]=ir(e)},updated(n,{value:t}){n._assigning||iv(n,t)}};function iv(n,t){const e=n.multiple,i=$t(t);if(!(e&&!i&&!$a(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Oa(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(u=>String(u)===String(a)):o.selected=Rg(t,a)>-1}else o.selected=t.has(a);else if(xo(Oa(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Oa(n){return"_value"in n?n._value:n.value}function Lx(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const cb={created(n,t,e){ed(n,t,e,null,"created")},mounted(n,t,e){ed(n,t,e,null,"mounted")},beforeUpdate(n,t,e,i){ed(n,t,e,i,"beforeUpdate")},updated(n,t,e,i){ed(n,t,e,i,"updated")}};function ub(n,t){switch(n){case"SELECT":return lb;case"TEXTAREA":return sr;default:switch(t){case"checkbox":return ob;case"radio":return ab;default:return sr}}}function ed(n,t,e,i,s){const o=ub(n.tagName,e.props&&e.props.type)[s];o&&o(n,t,e,i)}const db=["ctrl","shift","alt","meta"],hb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>db.some(e=>n[`${e}Key`]&&!t.includes(e))},fb=(n,t)=>{const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=hb[t[o]];if(a&&a(s,t))return}return n(s,...r)})},pb=$e({patchProp:ib},FS);let sv;function mb(){return sv||(sv=aS(pb))}const gb=(...n)=>{const t=mb().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=vb(i);if(!s)return;const r=t._component;!Kt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,_b(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function _b(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vb(n){return Oe(n)?document.querySelector(n):n}class _n{constructor(t,e){ht(this,"key",Symbol());ht(this,"component");ht(this,"button","view-button");this.component=t,e&&(this.button=e)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xg="169",xb=0,rv=1,Mb=2,Dx=1,yb=2,Ji=3,rr=0,Dn=1,hs=2,tr=0,Jo=1,ov=2,av=3,lv=4,Sb=5,Lr=100,bb=101,Eb=102,wb=103,Tb=104,Ab=200,Cb=201,Rb=202,Pb=203,xm=204,Mm=205,Lb=206,Db=207,Ib=208,Ub=209,Nb=210,Fb=211,Ob=212,Bb=213,kb=214,ym=0,Sm=1,bm=2,Ba=3,Em=4,wm=5,Tm=6,Am=7,qg=0,Vb=1,zb=2,er=0,Hb=1,Gb=2,Wb=3,$b=4,Xb=5,qb=6,Yb=7,Ix=300,ka=301,Va=302,Cm=303,Rm=304,tp=306,Pm=1e3,Ur=1001,Lm=1002,Qn=1003,jb=1004,nd=1005,pi=1006,Ep=1007,Nr=1008,gs=1009,Ux=1010,Nx=1011,Cl=1012,Yg=1013,yo=1014,fs=1015,Hu=1016,jg=1017,Kg=1018,za=1020,Fx=35902,Ox=1021,Bx=1022,vi=1023,kx=1024,Vx=1025,Qo=1026,Ha=1027,zx=1028,Zg=1029,Hx=1030,Jg=1031,Qg=1033,Ud=33776,Nd=33777,Fd=33778,Od=33779,Dm=35840,Im=35841,Um=35842,Nm=35843,Fm=36196,Om=37492,Bm=37496,km=37808,Vm=37809,zm=37810,Hm=37811,Gm=37812,Wm=37813,$m=37814,Xm=37815,qm=37816,Ym=37817,jm=37818,Km=37819,Zm=37820,Jm=37821,Bd=36492,Qm=36494,tg=36495,Gx=36283,eg=36284,ng=36285,ig=36286,Kb=3200,Zb=3201,Wx=0,Jb=1,Ls="",Ri="srgb",hr="srgb-linear",t_="display-p3",ep="display-p3-linear",sh="linear",Le="srgb",rh="rec709",oh="p3",Co=7680,cv=519,Qb=512,tE=513,eE=514,$x=515,nE=516,iE=517,sE=518,rE=519,uv=35044,dv="300 es",ps=2e3,ah=2001;class ja{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wp=Math.PI/180,sg=180/Math.PI;function Gu(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Pn(n,t,e){return Math.max(t,Math.min(e,n))}function oE(n,t){return(n%t+t)%t}function Tp(n,t,e){return(1-e)*n+e*t}function Qa(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Me{constructor(t=0,e=0){Me.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,i,s,r,o,a,l,u){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u)}set(t,e,i,s,r,o,a,l,u){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],p=i[5],_=i[8],x=s[0],g=s[3],m=s[6],R=s[1],T=s[4],A=s[7],F=s[2],D=s[5],L=s[8];return r[0]=o*x+a*R+l*F,r[3]=o*g+a*T+l*D,r[6]=o*m+a*A+l*L,r[1]=u*x+d*R+h*F,r[4]=u*g+d*T+h*D,r[7]=u*m+d*A+h*L,r[2]=f*x+p*R+_*F,r[5]=f*g+p*T+_*D,r[8]=f*m+p*A+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],d=t[8];return e*o*d-e*a*u-i*r*d+i*a*l+s*r*u-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],d=t[8],h=d*o-a*u,f=a*l-d*r,p=u*r-o*l,_=e*h+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=h*x,t[1]=(s*u-d*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(d*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*l-u*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ap.makeScale(t,e)),this}rotate(t){return this.premultiply(Ap.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ap.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ap=new Qt;function Xx(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function lh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function aE(){const n=lh("canvas");return n.style.display="block",n}const hv={};function kd(n){n in hv||(hv[n]=!0,console.warn(n))}function lE(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function cE(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uE(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fv=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pv=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tl={[hr]:{transfer:sh,primaries:rh,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ri]:{transfer:Le,primaries:rh,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ep]:{transfer:sh,primaries:oh,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(pv),fromReference:n=>n.applyMatrix3(fv)},[t_]:{transfer:Le,primaries:oh,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(pv),fromReference:n=>n.applyMatrix3(fv).convertLinearToSRGB()}},dE=new Set([hr,ep]),Ee={enabled:!0,_workingColorSpace:hr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=tl[t].toReference,s=tl[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return tl[n].primaries},getTransfer:function(n){return n===Ls?sh:tl[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(tl[t].luminanceCoefficients)}};function ta(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cp(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ro;class hE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ro===void 0&&(Ro=lh("canvas")),Ro.width=t.width,Ro.height=t.height;const i=Ro.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ro}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lh("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ta(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ta(e[i]/255)*255):e[i]=ta(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fE=0;class qx{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Gu(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rp(s[o].image)):r.push(Rp(s[o]))}else r=Rp(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Rp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pE=0;class In extends ja{constructor(t=In.DEFAULT_IMAGE,e=In.DEFAULT_MAPPING,i=Ur,s=Ur,r=pi,o=Nr,a=vi,l=gs,u=In.DEFAULT_ANISOTROPY,d=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Gu(),this.name="",this.source=new qx(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ix)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pm:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case Lm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pm:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case Lm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Ix;In.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,e=0,i=0,s=1){He.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,u=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(u+1)/2,A=(p+1)/2,F=(m+1)/2,D=(d+f)/4,L=(h+x)/4,k=(_+g)/4;return T>A&&T>F?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=D/i,r=L/i):A>F?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=D/s,r=k/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=L/r,s=k/r),this.set(i,s,r,e),this}let R=Math.sqrt((g-_)*(g-_)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(R)<.001&&(R=1),this.x=(g-_)/R,this.y=(h-x)/R,this.z=(f-d)/R,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mE extends ja{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new In(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qx(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class So extends mE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Yx extends In{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends In{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wu{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],u=i[s+1],d=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(h!==x||l!==f||u!==p||d!==_){let g=1-a;const m=l*f+u*p+d*_+h*x,R=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const F=Math.sqrt(T),D=Math.atan2(F,m*R);g=Math.sin(g*D)/F,a=Math.sin(a*D)/F}const A=a*R;if(l=l*g+f*A,u=u*g+p*A,d=d*g+_*A,h=h*g+x*A,g===1-a){const F=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=F,u*=F,d*=F,h*=F}}t[e]=l,t[e+1]=u,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+d*h+l*p-u*f,t[e+1]=l*_+d*f+u*h-a*p,t[e+2]=u*_+d*p+a*f-l*h,t[e+3]=d*_-a*h-l*f-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*d*h+u*p*_,this._y=u*p*h-f*d*_,this._z=u*d*_+f*p*h,this._w=u*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+u*p*_,this._y=u*p*h-f*d*_,this._z=u*d*_-f*p*h,this._w=u*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-u*p*_,this._y=u*p*h+f*d*_,this._z=u*d*_+f*p*h,this._w=u*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-u*p*_,this._y=u*p*h+f*d*_,this._z=u*d*_-f*p*h,this._w=u*d*h+f*p*_;break;case"YZX":this._x=f*d*h+u*p*_,this._y=u*p*h+f*d*_,this._z=u*d*_-f*p*h,this._w=u*d*h-f*p*_;break;case"XZY":this._x=f*d*h-u*p*_,this._y=u*p*h-f*d*_,this._z=u*d*_+f*p*h,this._w=u*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],d=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,d=e._w;return this._x=i*d+o*a+s*u-r*l,this._y=s*d+o*l+r*a-i*u,this._z=r*d+o*u+i*l-s*a,this._w=o*d-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),h=Math.sin((1-e)*d)/u,f=Math.sin(e*d)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,i=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*s-a*i),d=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*u+o*h-a*d,this.y=i+l*d+a*u-r*h,this.z=s+l*h+r*d-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pp.copy(this).projectOnVector(t),this.sub(Pp)}reflect(t){return this.sub(Pp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pp=new $,mv=new Wu;class $u{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),id.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),id.copy(i.boundingBox)),id.applyMatrix4(t.matrixWorld),this.union(id)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(el),sd.subVectors(this.max,el),Po.subVectors(t.a,el),Lo.subVectors(t.b,el),Do.subVectors(t.c,el),ys.subVectors(Lo,Po),Ss.subVectors(Do,Lo),vr.subVectors(Po,Do);let e=[0,-ys.z,ys.y,0,-Ss.z,Ss.y,0,-vr.z,vr.y,ys.z,0,-ys.x,Ss.z,0,-Ss.x,vr.z,0,-vr.x,-ys.y,ys.x,0,-Ss.y,Ss.x,0,-vr.y,vr.x,0];return!Lp(e,Po,Lo,Do,sd)||(e=[1,0,0,0,1,0,0,0,1],!Lp(e,Po,Lo,Do,sd))?!1:(rd.crossVectors(ys,Ss),e=[rd.x,rd.y,rd.z],Lp(e,Po,Lo,Do,sd))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qi=[new $,new $,new $,new $,new $,new $,new $,new $],ri=new $,id=new $u,Po=new $,Lo=new $,Do=new $,ys=new $,Ss=new $,vr=new $,el=new $,sd=new $,rd=new $,xr=new $;function Lp(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xr.fromArray(n,r);const a=s.x*Math.abs(xr.x)+s.y*Math.abs(xr.y)+s.z*Math.abs(xr.z),l=t.dot(xr),u=e.dot(xr),d=i.dot(xr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const _E=new $u,nl=new $,Dp=new $;class np{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):_E.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nl.subVectors(t,this.center);const e=nl.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(nl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nl.copy(t.center).add(Dp)),this.expandByPoint(nl.copy(t.center).sub(Dp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new $,Ip=new $,od=new $,bs=new $,Up=new $,ad=new $,Np=new $;class e_{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ip.copy(t).add(e).multiplyScalar(.5),od.copy(e).sub(t).normalize(),bs.copy(this.origin).sub(Ip);const r=t.distanceTo(e)*.5,o=-this.direction.dot(od),a=bs.dot(this.direction),l=-bs.dot(od),u=bs.lengthSq(),d=Math.abs(1-o*o);let h,f,p,_;if(d>0)if(h=o*l-a,f=o*a-l,_=r*d,h>=0)if(f>=-_)if(f<=_){const x=1/d;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+u):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+u);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ip).addScaledVector(od,f),p}intersectSphere(t,e){Yi.subVectors(t.center,this.origin);const i=Yi.dot(this.direction),s=Yi.dot(Yi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,i,s,r){Up.subVectors(e,t),ad.subVectors(i,t),Np.crossVectors(Up,ad);let o=this.direction.dot(Np),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bs.subVectors(this.origin,t);const l=a*this.direction.dot(ad.crossVectors(bs,ad));if(l<0)return null;const u=a*this.direction.dot(Up.cross(bs));if(u<0||l+u>o)return null;const d=-a*bs.dot(Np);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(t,e,i,s,r,o,a,l,u,d,h,f,p,_,x,g){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u,d,h,f,p,_,x,g)}set(t,e,i,s,r,o,a,l,u,d,h,f,p,_,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=d,m[10]=h,m[14]=f,m[3]=p,m[7]=_,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Io.setFromMatrixColumn(t,0).length(),r=1/Io.setFromMatrixColumn(t,1).length(),o=1/Io.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*d,p=o*h,_=a*d,x=a*h;e[0]=l*d,e[4]=-l*h,e[8]=u,e[1]=p+_*u,e[5]=f-x*u,e[9]=-a*l,e[2]=x-f*u,e[6]=_+p*u,e[10]=o*l}else if(t.order==="YXZ"){const f=l*d,p=l*h,_=u*d,x=u*h;e[0]=f+x*a,e[4]=_*a-p,e[8]=o*u,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=p*a-_,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*d,p=l*h,_=u*d,x=u*h;e[0]=f-x*a,e[4]=-o*h,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*d,e[9]=x-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*d,p=o*h,_=a*d,x=a*h;e[0]=l*d,e[4]=_*u-p,e[8]=f*u+x,e[1]=l*h,e[5]=x*u+f,e[9]=p*u-_,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*u,_=a*l,x=a*u;e[0]=l*d,e[4]=x-f*h,e[8]=_*h+p,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-u*d,e[6]=p*h+_,e[10]=f-x*h}else if(t.order==="XZY"){const f=o*l,p=o*u,_=a*l,x=a*u;e[0]=l*d,e[4]=-h,e[8]=u*d,e[1]=f*h+x,e[5]=o*d,e[9]=p*h-_,e[2]=_*h-p,e[6]=a*d,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vE,t,xE)}lookAt(t,e,i){const s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Es.crossVectors(i,Fn),Es.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Es.crossVectors(i,Fn)),Es.normalize(),ld.crossVectors(Fn,Es),s[0]=Es.x,s[4]=ld.x,s[8]=Fn.x,s[1]=Es.y,s[5]=ld.y,s[9]=Fn.y,s[2]=Es.z,s[6]=ld.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],p=i[13],_=i[2],x=i[6],g=i[10],m=i[14],R=i[3],T=i[7],A=i[11],F=i[15],D=s[0],L=s[4],k=s[8],J=s[12],y=s[1],E=s[5],O=s[9],W=s[13],tt=s[2],ct=s[6],Z=s[10],it=s[14],q=s[3],Et=s[7],wt=s[11],Dt=s[15];return r[0]=o*D+a*y+l*tt+u*q,r[4]=o*L+a*E+l*ct+u*Et,r[8]=o*k+a*O+l*Z+u*wt,r[12]=o*J+a*W+l*it+u*Dt,r[1]=d*D+h*y+f*tt+p*q,r[5]=d*L+h*E+f*ct+p*Et,r[9]=d*k+h*O+f*Z+p*wt,r[13]=d*J+h*W+f*it+p*Dt,r[2]=_*D+x*y+g*tt+m*q,r[6]=_*L+x*E+g*ct+m*Et,r[10]=_*k+x*O+g*Z+m*wt,r[14]=_*J+x*W+g*it+m*Dt,r[3]=R*D+T*y+A*tt+F*q,r[7]=R*L+T*E+A*ct+F*Et,r[11]=R*k+T*O+A*Z+F*wt,r[15]=R*J+T*W+A*it+F*Dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],d=t[2],h=t[6],f=t[10],p=t[14],_=t[3],x=t[7],g=t[11],m=t[15];return _*(+r*l*h-s*u*h-r*a*f+i*u*f+s*a*p-i*l*p)+x*(+e*l*p-e*u*f+r*o*f-s*o*p+s*u*d-r*l*d)+g*(+e*u*h-e*a*p-r*o*h+i*o*p+r*a*d-i*u*d)+m*(-s*a*d-e*l*h+e*a*f+s*o*h-i*o*f+i*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],d=t[8],h=t[9],f=t[10],p=t[11],_=t[12],x=t[13],g=t[14],m=t[15],R=h*g*u-x*f*u+x*l*p-a*g*p-h*l*m+a*f*m,T=_*f*u-d*g*u-_*l*p+o*g*p+d*l*m-o*f*m,A=d*x*u-_*h*u+_*a*p-o*x*p-d*a*m+o*h*m,F=_*h*l-d*x*l-_*a*f+o*x*f+d*a*g-o*h*g,D=e*R+i*T+s*A+r*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return t[0]=R*L,t[1]=(x*f*r-h*g*r-x*s*p+i*g*p+h*s*m-i*f*m)*L,t[2]=(a*g*r-x*l*r+x*s*u-i*g*u-a*s*m+i*l*m)*L,t[3]=(h*l*r-a*f*r-h*s*u+i*f*u+a*s*p-i*l*p)*L,t[4]=T*L,t[5]=(d*g*r-_*f*r+_*s*p-e*g*p-d*s*m+e*f*m)*L,t[6]=(_*l*r-o*g*r-_*s*u+e*g*u+o*s*m-e*l*m)*L,t[7]=(o*f*r-d*l*r+d*s*u-e*f*u-o*s*p+e*l*p)*L,t[8]=A*L,t[9]=(_*h*r-d*x*r-_*i*p+e*x*p+d*i*m-e*h*m)*L,t[10]=(o*x*r-_*a*r+_*i*u-e*x*u-o*i*m+e*a*m)*L,t[11]=(d*a*r-o*h*r-d*i*u+e*h*u+o*i*p-e*a*p)*L,t[12]=F*L,t[13]=(d*x*s-_*h*s+_*i*f-e*x*f-d*i*g+e*h*g)*L,t[14]=(_*a*s-o*x*s-_*i*l+e*x*l+o*i*g-e*a*g)*L,t[15]=(o*h*s-d*a*s+d*i*l-e*h*l-o*i*f+e*a*f)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,u=r*o,d=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,d*a+i,d*l-s*o,0,u*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,d=o+o,h=a+a,f=r*u,p=r*d,_=r*h,x=o*d,g=o*h,m=a*h,R=l*u,T=l*d,A=l*h,F=i.x,D=i.y,L=i.z;return s[0]=(1-(x+m))*F,s[1]=(p+A)*F,s[2]=(_-T)*F,s[3]=0,s[4]=(p-A)*D,s[5]=(1-(f+m))*D,s[6]=(g+R)*D,s[7]=0,s[8]=(_+T)*L,s[9]=(g-R)*L,s[10]=(1-(f+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Io.set(s[0],s[1],s[2]).length();const o=Io.set(s[4],s[5],s[6]).length(),a=Io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],oi.copy(this);const u=1/r,d=1/o,h=1/a;return oi.elements[0]*=u,oi.elements[1]*=u,oi.elements[2]*=u,oi.elements[4]*=d,oi.elements[5]*=d,oi.elements[6]*=d,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,e.setFromRotationMatrix(oi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ps){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let p,_;if(a===ps)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ah)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ps){const l=this.elements,u=1/(e-t),d=1/(i-s),h=1/(o-r),f=(e+t)*u,p=(i+s)*d;let _,x;if(a===ps)_=(o+r)*h,x=-2*h;else if(a===ah)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Io=new $,oi=new Fe,vE=new $(0,0,0),xE=new $(1,1,1),Es=new $,ld=new $,Fn=new $,gv=new Fe,_v=new Wu;class Gi{constructor(t=0,e=0,i=0,s=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],d=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gv,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _v.setFromEuler(this),this.setFromQuaternion(_v,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class n_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ME=0;const vv=new $,Uo=new Wu,ji=new Fe,cd=new $,il=new $,yE=new $,SE=new Wu,xv=new $(1,0,0),Mv=new $(0,1,0),yv=new $(0,0,1),Sv={type:"added"},bE={type:"removed"},No={type:"childadded",child:null},Fp={type:"childremoved",child:null};class ln extends ja{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Gu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new $,e=new Gi,i=new Wu,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Qt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Uo.setFromAxisAngle(t,e),this.quaternion.multiply(Uo),this}rotateOnWorldAxis(t,e){return Uo.setFromAxisAngle(t,e),this.quaternion.premultiply(Uo),this}rotateX(t){return this.rotateOnAxis(xv,t)}rotateY(t){return this.rotateOnAxis(Mv,t)}rotateZ(t){return this.rotateOnAxis(yv,t)}translateOnAxis(t,e){return vv.copy(t).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xv,t)}translateY(t){return this.translateOnAxis(Mv,t)}translateZ(t){return this.translateOnAxis(yv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?cd.copy(t):cd.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(il,cd,this.up):ji.lookAt(cd,il,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),Uo.setFromRotationMatrix(ji),this.quaternion.premultiply(Uo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sv),No.child=t,this.dispatchEvent(No),No.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bE),Fp.child=t,this.dispatchEvent(Fp),Fp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sv),No.child=t,this.dispatchEvent(No),No.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,t,yE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,SE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),d=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ln.DEFAULT_UP=new $(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new $,Ki=new $,Op=new $,Zi=new $,Fo=new $,Oo=new $,bv=new $,Bp=new $,kp=new $,Vp=new $,zp=new He,Hp=new He,Gp=new He;class mi{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ai.subVectors(t,e),s.cross(ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ai.subVectors(s,e),Ki.subVectors(i,e),Op.subVectors(t,e);const o=ai.dot(ai),a=ai.dot(Ki),l=ai.dot(Op),u=Ki.dot(Ki),d=Ki.dot(Op),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(u*l-a*d)*f,_=(o*d-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(o,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return zp.setScalar(0),Hp.setScalar(0),Gp.setScalar(0),zp.fromBufferAttribute(t,e),Hp.fromBufferAttribute(t,i),Gp.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(zp,r.x),o.addScaledVector(Hp,r.y),o.addScaledVector(Gp,r.z),o}static isFrontFacing(t,e,i,s){return ai.subVectors(i,e),Ki.subVectors(t,e),ai.cross(Ki).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),ai.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return mi.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Fo.subVectors(s,i),Oo.subVectors(r,i),Bp.subVectors(t,i);const l=Fo.dot(Bp),u=Oo.dot(Bp);if(l<=0&&u<=0)return e.copy(i);kp.subVectors(t,s);const d=Fo.dot(kp),h=Oo.dot(kp);if(d>=0&&h<=d)return e.copy(s);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(Fo,o);Vp.subVectors(t,r);const p=Fo.dot(Vp),_=Oo.dot(Vp);if(_>=0&&p<=_)return e.copy(r);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),e.copy(i).addScaledVector(Oo,a);const g=d*_-p*h;if(g<=0&&h-d>=0&&p-_>=0)return bv.subVectors(r,s),a=(h-d)/(h-d+(p-_)),e.copy(s).addScaledVector(bv,a);const m=1/(g+x+f);return o=x*m,a=f*m,e.copy(i).addScaledVector(Fo,o).addScaledVector(Oo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},ud={h:0,s:0,l:0};function Wp(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}let ae=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ee.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ee.workingColorSpace){if(t=oE(t,1),e=Pn(e,0,1),i=Pn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wp(o,r,t+1/3),this.g=Wp(o,r,t),this.b=Wp(o,r,t-1/3)}return Ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ri){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ri){const i=jx[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ta(t.r),this.g=ta(t.g),this.b=ta(t.b),this}copyLinearToSRGB(t){return this.r=Cp(t.r),this.g=Cp(t.g),this.b=Cp(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ri){return Ee.fromWorkingColorSpace(un.copy(this),t),Math.round(Pn(un.r*255,0,255))*65536+Math.round(Pn(un.g*255,0,255))*256+Math.round(Pn(un.b*255,0,255))}getHexString(t=Ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(un.copy(this),e);const i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=d,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=Ri){Ee.fromWorkingColorSpace(un.copy(this),t);const e=un.r,i=un.g,s=un.b;return t!==Ri?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ws),this.setHSL(ws.h+t,ws.s+e,ws.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ws),t.getHSL(ud);const i=Tp(ws.h,ud.h,e),s=Tp(ws.s,ud.s,e),r=Tp(ws.l,ud.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const un=new ae;ae.NAMES=jx;let EE=0;class wo extends ja{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Gu(),this.name="",this.type="Material",this.blending=Jo,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xm,this.blendDst=Mm,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Co,this.stencilZFail=Co,this.stencilZPass=Co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jo&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xm&&(i.blendSrc=this.blendSrc),this.blendDst!==Mm&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Co&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Co&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Co&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kx extends wo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new $,dd=new Me;class zi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uv,this.updateRanges=[],this.gpuType=fs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)dd.fromBufferAttribute(this,e),dd.applyMatrix3(t),this.setXY(e,dd.x,dd.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qa(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qa(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qa(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qa(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),s=Tn(s,this.array),r=Tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uv&&(t.usage=this.usage),t}}class Zx extends zi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ip extends zi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Mi extends zi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let wE=0;const Yn=new Fe,$p=new ln,Bo=new $,On=new $u,sl=new $u,tn=new $;class Wi extends ja{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Gu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xx(t)?ip:Zx)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,i){return Yn.makeTranslation(t,e,i),this.applyMatrix4(Yn),this}scale(t,e,i){return Yn.makeScale(t,e,i),this.applyMatrix4(Yn),this}lookAt(t){return $p.lookAt(t),$p.updateMatrix(),this.applyMatrix4($p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $u);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new np);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];sl.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(On.min,sl.min),On.expandByPoint(tn),tn.addVectors(On.max,sl.max),On.expandByPoint(tn)):(On.expandByPoint(sl.min),On.expandByPoint(sl.max))}On.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)tn.fromBufferAttribute(a,u),l&&(Bo.fromBufferAttribute(t,u),tn.add(Bo)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new $,l[k]=new $;const u=new $,d=new $,h=new $,f=new Me,p=new Me,_=new Me,x=new $,g=new $;function m(k,J,y){u.fromBufferAttribute(i,k),d.fromBufferAttribute(i,J),h.fromBufferAttribute(i,y),f.fromBufferAttribute(r,k),p.fromBufferAttribute(r,J),_.fromBufferAttribute(r,y),d.sub(u),h.sub(u),p.sub(f),_.sub(f);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(E),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(E),a[k].add(x),a[J].add(x),a[y].add(x),l[k].add(g),l[J].add(g),l[y].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let k=0,J=R.length;k<J;++k){const y=R[k],E=y.start,O=y.count;for(let W=E,tt=E+O;W<tt;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const T=new $,A=new $,F=new $,D=new $;function L(k){F.fromBufferAttribute(s,k),D.copy(F);const J=a[k];T.copy(J),T.sub(F.multiplyScalar(F.dot(J))).normalize(),A.crossVectors(D,J);const E=A.dot(l[k])<0?-1:1;o.setXYZW(k,T.x,T.y,T.z,E)}for(let k=0,J=R.length;k<J;++k){const y=R[k],E=y.start,O=y.count;for(let W=E,tt=E+O;W<tt;W+=3)L(t.getX(W+0)),L(t.getX(W+1)),L(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new $,r=new $,o=new $,a=new $,l=new $,u=new $,d=new $,h=new $;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),a.add(d),l.add(d),u.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){const u=a.array,d=a.itemSize,h=a.normalized,f=new u.constructor(l.length*d);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let m=0;m<d;m++)f[_++]=u[p++]}return new zi(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Wi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,i);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let d=0,h=u.length;d<h;d++){const f=u[d],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const d=s[u];this.setAttribute(u,d.clone(e))}const r=t.morphAttributes;for(const u in r){const d=[],h=r[u];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ev=new Fe,Mr=new e_,hd=new np,wv=new $,fd=new $,pd=new $,md=new $,Xp=new $,gd=new $,Tv=new $,_d=new $;class Bi extends ln{constructor(t=new Wi,e=new Kx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){gd.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const d=a[l],h=r[l];d!==0&&(Xp.fromBufferAttribute(h,t),o?gd.addScaledVector(Xp,d):gd.addScaledVector(Xp.sub(e),d))}e.add(gd)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hd.copy(i.boundingSphere),hd.applyMatrix4(r),Mr.copy(t.ray).recast(t.near),!(hd.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(hd,wv)===null||Mr.origin.distanceToSquared(wv)>(t.far-t.near)**2))&&(Ev.copy(r).invert(),Mr.copy(t.ray).applyMatrix4(Ev),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const g=f[_],m=o[g.materialIndex],R=Math.max(g.start,p.start),T=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let A=R,F=T;A<F;A+=3){const D=a.getX(A),L=a.getX(A+1),k=a.getX(A+2);s=vd(this,m,t,i,u,d,h,D,L,k),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){const R=a.getX(g),T=a.getX(g+1),A=a.getX(g+2);s=vd(this,o,t,i,u,d,h,R,T,A),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const g=f[_],m=o[g.materialIndex],R=Math.max(g.start,p.start),T=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let A=R,F=T;A<F;A+=3){const D=A,L=A+1,k=A+2;s=vd(this,m,t,i,u,d,h,D,L,k),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){const R=g,T=g+1,A=g+2;s=vd(this,o,t,i,u,d,h,R,T,A),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function TE(n,t,e,i,s,r,o,a){let l;if(t.side===Dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===rr,a),l===null)return null;_d.copy(a),_d.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(_d);return u<e.near||u>e.far?null:{distance:u,point:_d.clone(),object:n}}function vd(n,t,e,i,s,r,o,a,l,u){n.getVertexPosition(a,fd),n.getVertexPosition(l,pd),n.getVertexPosition(u,md);const d=TE(n,t,e,i,fd,pd,md,Tv);if(d){const h=new $;mi.getBarycoord(Tv,fd,pd,md,h),s&&(d.uv=mi.getInterpolatedAttribute(s,a,l,u,h,new Me)),r&&(d.uv1=mi.getInterpolatedAttribute(r,a,l,u,h,new Me)),o&&(d.normal=mi.getInterpolatedAttribute(o,a,l,u,h,new $),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new $,materialIndex:0};mi.getNormal(fd,pd,md,f.normal),d.face=f,d.barycoord=h}return d}class Xu extends Wi{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mi(u,3)),this.setAttribute("normal",new Mi(d,3)),this.setAttribute("uv",new Mi(h,2));function _(x,g,m,R,T,A,F,D,L,k,J){const y=A/L,E=F/k,O=A/2,W=F/2,tt=D/2,ct=L+1,Z=k+1;let it=0,q=0;const Et=new $;for(let wt=0;wt<Z;wt++){const Dt=wt*E-W;for(let Zt=0;Zt<ct;Zt++){const ue=Zt*y-O;Et[x]=ue*R,Et[g]=Dt*T,Et[m]=tt,u.push(Et.x,Et.y,Et.z),Et[x]=0,Et[g]=0,Et[m]=D>0?1:-1,d.push(Et.x,Et.y,Et.z),h.push(Zt/L),h.push(1-wt/k),it+=1}}for(let wt=0;wt<k;wt++)for(let Dt=0;Dt<L;Dt++){const Zt=f+Dt+ct*wt,ue=f+Dt+ct*(wt+1),at=f+(Dt+1)+ct*(wt+1),gt=f+(Dt+1)+ct*wt;l.push(Zt,ue,gt),l.push(ue,at,gt),q+=6}a.addGroup(p,q,J),p+=q,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ga(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function xn(n){const t={};for(let e=0;e<n.length;e++){const i=Ga(n[e]);for(const s in i)t[s]=i[s]}return t}function AE(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jx(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const CE={clone:Ga,merge:xn};var RE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends wo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RE,this.fragmentShader=PE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ga(t.uniforms),this.uniformsGroups=AE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}let Qx=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ps}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ts=new $,Av=new Me,Cv=new Me;class Zn extends Qx{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sg*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sg*2*Math.atan(Math.tan(wp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z)}getViewSize(t,e){return this.getViewBounds(t,Av,Cv),e.subVectors(Cv,Av)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wp*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ko=-90,Vo=1;class LE extends ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zn(ko,Vo,t,e);s.layers=this.layers,this.add(s);const r=new Zn(ko,Vo,t,e);r.layers=this.layers,this.add(r);const o=new Zn(ko,Vo,t,e);o.layers=this.layers,this.add(o);const a=new Zn(ko,Vo,t,e);a.layers=this.layers,this.add(a);const l=new Zn(ko,Vo,t,e);l.layers=this.layers,this.add(l);const u=new Zn(ko,Vo,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const u of e)this.remove(u);if(t===ps)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ah)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(h,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class tM extends In{constructor(t,e,i,s,r,o,a,l,u,d){t=t!==void 0?t:[],e=e!==void 0?e:ka,super(t,e,i,s,r,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class DE extends So{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new tM(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xu(5,5,5),r=new or({name:"CubemapFromEquirect",uniforms:Ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:tr});r.uniforms.tEquirect.value=e;const o=new Bi(s,r),a=e.minFilter;return e.minFilter===Nr&&(e.minFilter=pi),new LE(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const qp=new $,IE=new $,UE=new Qt;class wr{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=qp.subVectors(i,e).cross(IE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(qp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||UE.getNormalMatrix(t),s=this.coplanarPoint(qp).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new np,xd=new $;class i_{constructor(t=new wr,e=new wr,i=new wr,s=new wr,r=new wr,o=new wr){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ps){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],_=s[9],x=s[10],g=s[11],m=s[12],R=s[13],T=s[14],A=s[15];if(i[0].setComponents(l-r,f-u,g-p,A-m).normalize(),i[1].setComponents(l+r,f+u,g+p,A+m).normalize(),i[2].setComponents(l+o,f+d,g+_,A+R).normalize(),i[3].setComponents(l-o,f-d,g-_,A-R).normalize(),i[4].setComponents(l-a,f-h,g-x,A-T).normalize(),e===ps)i[5].setComponents(l+a,f+h,g+x,A+T).normalize();else if(e===ah)i[5].setComponents(a,h,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(xd.x=s.normal.x>0?t.max.x:t.min.x,xd.y=s.normal.y>0?t.max.y:t.min.y,xd.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xd)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eM(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function NE(n){const t=new WeakMap;function e(a,l){const u=a.array,d=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,d),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const d=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,d);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];n.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}class sp extends Wi{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),u=a+1,d=l+1,h=t/a,f=e/l,p=[],_=[],x=[],g=[];for(let m=0;m<d;m++){const R=m*f-o;for(let T=0;T<u;T++){const A=T*h-r;_.push(A,-R,0),x.push(0,0,1),g.push(T/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<a;R++){const T=R+u*m,A=R+u*(m+1),F=R+1+u*(m+1),D=R+1+u*m;p.push(T,A,D),p.push(A,F,D)}this.setIndex(p),this.setAttribute("position",new Mi(_,3)),this.setAttribute("normal",new Mi(x,3)),this.setAttribute("uv",new Mi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sp(t.width,t.height,t.widthSegments,t.heightSegments)}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OE=`#ifdef USE_ALPHAHASH
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
#endif`,BE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HE=`#ifdef USE_AOMAP
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
#endif`,GE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jE=`#ifdef USE_IRIDESCENCE
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
#endif`,KE=`#ifdef USE_BUMPMAP
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
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rw=`#define PI 3.141592653589793
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
} // validated`,ow=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,aw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hw="gl_FragColor = linearToOutputTexel( gl_FragColor );",fw=`
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
}`,pw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,mw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gw=`#ifdef USE_ENVMAP
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
#endif`,_w=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vw=`#ifdef USE_ENVMAP
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
#endif`,xw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bw=`#ifdef USE_GRADIENTMAP
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
}`,Ew=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ww=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Aw=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Cw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Rw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iw=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Nw=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Fw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ow=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$w=`#if defined( USE_POINTS_UV )
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
#endif`,Xw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
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
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,H1=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,W1=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,K1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,J1=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Q1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,tT=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,eT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,nT=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,sT=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,oT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,aT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lT=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cT=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,uT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,hT=`uniform vec3 color;
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
}`,fT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,pT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Jt={alphahash_fragment:FE,alphahash_pars_fragment:OE,alphamap_fragment:BE,alphamap_pars_fragment:kE,alphatest_fragment:VE,alphatest_pars_fragment:zE,aomap_fragment:HE,aomap_pars_fragment:GE,batching_pars_vertex:WE,batching_vertex:$E,begin_vertex:XE,beginnormal_vertex:qE,bsdfs:YE,iridescence_fragment:jE,bumpmap_pars_fragment:KE,clipping_planes_fragment:ZE,clipping_planes_pars_fragment:JE,clipping_planes_pars_vertex:QE,clipping_planes_vertex:tw,color_fragment:ew,color_pars_fragment:nw,color_pars_vertex:iw,color_vertex:sw,common:rw,cube_uv_reflection_fragment:ow,defaultnormal_vertex:aw,displacementmap_pars_vertex:lw,displacementmap_vertex:cw,emissivemap_fragment:uw,emissivemap_pars_fragment:dw,colorspace_fragment:hw,colorspace_pars_fragment:fw,envmap_fragment:pw,envmap_common_pars_fragment:mw,envmap_pars_fragment:gw,envmap_pars_vertex:_w,envmap_physical_pars_fragment:Cw,envmap_vertex:vw,fog_vertex:xw,fog_pars_vertex:Mw,fog_fragment:yw,fog_pars_fragment:Sw,gradientmap_pars_fragment:bw,lightmap_pars_fragment:Ew,lights_lambert_fragment:ww,lights_lambert_pars_fragment:Tw,lights_pars_begin:Aw,lights_toon_fragment:Rw,lights_toon_pars_fragment:Pw,lights_phong_fragment:Lw,lights_phong_pars_fragment:Dw,lights_physical_fragment:Iw,lights_physical_pars_fragment:Uw,lights_fragment_begin:Nw,lights_fragment_maps:Fw,lights_fragment_end:Ow,logdepthbuf_fragment:Bw,logdepthbuf_pars_fragment:kw,logdepthbuf_pars_vertex:Vw,logdepthbuf_vertex:zw,map_fragment:Hw,map_pars_fragment:Gw,map_particle_fragment:Ww,map_particle_pars_fragment:$w,metalnessmap_fragment:Xw,metalnessmap_pars_fragment:qw,morphinstance_vertex:Yw,morphcolor_vertex:jw,morphnormal_vertex:Kw,morphtarget_pars_vertex:Zw,morphtarget_vertex:Jw,normal_fragment_begin:Qw,normal_fragment_maps:t1,normal_pars_fragment:e1,normal_pars_vertex:n1,normal_vertex:i1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:a1,iridescence_pars_fragment:l1,opaque_fragment:c1,packing:u1,premultiplied_alpha_fragment:d1,project_vertex:h1,dithering_fragment:f1,dithering_pars_fragment:p1,roughnessmap_fragment:m1,roughnessmap_pars_fragment:g1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:v1,shadowmap_vertex:x1,shadowmask_pars_fragment:M1,skinbase_vertex:y1,skinning_pars_vertex:S1,skinning_vertex:b1,skinnormal_vertex:E1,specularmap_fragment:w1,specularmap_pars_fragment:T1,tonemapping_fragment:A1,tonemapping_pars_fragment:C1,transmission_fragment:R1,transmission_pars_fragment:P1,uv_pars_fragment:L1,uv_pars_vertex:D1,uv_vertex:I1,worldpos_vertex:U1,background_vert:N1,background_frag:F1,backgroundCube_vert:O1,backgroundCube_frag:B1,cube_vert:k1,cube_frag:V1,depth_vert:z1,depth_frag:H1,distanceRGBA_vert:G1,distanceRGBA_frag:W1,equirect_vert:$1,equirect_frag:X1,linedashed_vert:q1,linedashed_frag:Y1,meshbasic_vert:j1,meshbasic_frag:K1,meshlambert_vert:Z1,meshlambert_frag:J1,meshmatcap_vert:Q1,meshmatcap_frag:tT,meshnormal_vert:eT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:sT,meshphysical_vert:rT,meshphysical_frag:oT,meshtoon_vert:aT,meshtoon_frag:lT,points_vert:cT,points_frag:uT,shadow_vert:dT,shadow_frag:hT,sprite_vert:fT,sprite_frag:pT},bt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Oi={basic:{uniforms:xn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:xn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:xn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:xn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:xn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:xn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:xn([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:xn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:xn([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:xn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:xn([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:xn([bt.common,bt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:xn([bt.lights,bt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Oi.physical={uniforms:xn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Md={r:0,b:0,g:0},Sr=new Gi,mT=new Fe;function gT(n,t,e,i,s,r,o){const a=new ae(0);let l=r===!0?0:1,u,d,h=null,f=0,p=null;function _(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?e:t).get(T)),T}function x(R){let T=!1;const A=_(R);A===null?m(a,l):A&&A.isColor&&(m(A,1),T=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(R,T){const A=_(T);A&&(A.isCubeTexture||A.mapping===tp)?(d===void 0&&(d=new Bi(new Xu(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Ga(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Sr.copy(T.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(mT.makeRotationFromEuler(Sr)),d.material.toneMapped=Ee.getTransfer(A.colorSpace)!==Le,(h!==A||f!==A.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=A,f=A.version,p=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Bi(new sp(2,2),new or({name:"BackgroundMaterial",uniforms:Ga(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=Ee.getTransfer(A.colorSpace)!==Le,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function m(R,T){R.getRGB(Md,Jx(n)),i.buffers.color.setClear(Md.r,Md.g,Md.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(R,T=1){a.set(R),l=T,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,m(a,l)},render:x,addToRenderList:g}}function _T(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,E,O,W,tt){let ct=!1;const Z=h(W,O,E);r!==Z&&(r=Z,u(r.object)),ct=p(y,W,O,tt),ct&&_(y,W,O,tt),tt!==null&&t.update(tt,n.ELEMENT_ARRAY_BUFFER),(ct||o)&&(o=!1,A(y,E,O,W),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function h(y,E,O){const W=O.wireframe===!0;let tt=i[y.id];tt===void 0&&(tt={},i[y.id]=tt);let ct=tt[E.id];ct===void 0&&(ct={},tt[E.id]=ct);let Z=ct[W];return Z===void 0&&(Z=f(l()),ct[W]=Z),Z}function f(y){const E=[],O=[],W=[];for(let tt=0;tt<e;tt++)E[tt]=0,O[tt]=0,W[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:W,object:y,attributes:{},index:null}}function p(y,E,O,W){const tt=r.attributes,ct=E.attributes;let Z=0;const it=O.getAttributes();for(const q in it)if(it[q].location>=0){const wt=tt[q];let Dt=ct[q];if(Dt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Dt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Dt=y.instanceColor)),wt===void 0||wt.attribute!==Dt||Dt&&wt.data!==Dt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==W}function _(y,E,O,W){const tt={},ct=E.attributes;let Z=0;const it=O.getAttributes();for(const q in it)if(it[q].location>=0){let wt=ct[q];wt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor));const Dt={};Dt.attribute=wt,wt&&wt.data&&(Dt.data=wt.data),tt[q]=Dt,Z++}r.attributes=tt,r.attributesNum=Z,r.index=W}function x(){const y=r.newAttributes;for(let E=0,O=y.length;E<O;E++)y[E]=0}function g(y){m(y,0)}function m(y,E){const O=r.newAttributes,W=r.enabledAttributes,tt=r.attributeDivisors;O[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),tt[y]!==E&&(n.vertexAttribDivisor(y,E),tt[y]=E)}function R(){const y=r.newAttributes,E=r.enabledAttributes;for(let O=0,W=E.length;O<W;O++)E[O]!==y[O]&&(n.disableVertexAttribArray(O),E[O]=0)}function T(y,E,O,W,tt,ct,Z){Z===!0?n.vertexAttribIPointer(y,E,O,tt,ct):n.vertexAttribPointer(y,E,O,W,tt,ct)}function A(y,E,O,W){x();const tt=W.attributes,ct=O.getAttributes(),Z=E.defaultAttributeValues;for(const it in ct){const q=ct[it];if(q.location>=0){let Et=tt[it];if(Et===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(Et=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(Et=y.instanceColor)),Et!==void 0){const wt=Et.normalized,Dt=Et.itemSize,Zt=t.get(Et);if(Zt===void 0)continue;const ue=Zt.buffer,at=Zt.type,gt=Zt.bytesPerElement,It=at===n.INT||at===n.UNSIGNED_INT||Et.gpuType===Yg;if(Et.isInterleavedBufferAttribute){const Tt=Et.data,Yt=Tt.stride,Xt=Et.offset;if(Tt.isInstancedInterleavedBuffer){for(let te=0;te<q.locationSize;te++)m(q.location+te,Tt.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let te=0;te<q.locationSize;te++)g(q.location+te);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let te=0;te<q.locationSize;te++)T(q.location+te,Dt/q.locationSize,at,wt,Yt*gt,(Xt+Dt/q.locationSize*te)*gt,It)}else{if(Et.isInstancedBufferAttribute){for(let Tt=0;Tt<q.locationSize;Tt++)m(q.location+Tt,Et.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Tt=0;Tt<q.locationSize;Tt++)g(q.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Tt=0;Tt<q.locationSize;Tt++)T(q.location+Tt,Dt/q.locationSize,at,wt,Dt*gt,Dt/q.locationSize*Tt*gt,It)}}else if(Z!==void 0){const wt=Z[it];if(wt!==void 0)switch(wt.length){case 2:n.vertexAttrib2fv(q.location,wt);break;case 3:n.vertexAttrib3fv(q.location,wt);break;case 4:n.vertexAttrib4fv(q.location,wt);break;default:n.vertexAttrib1fv(q.location,wt)}}}}R()}function F(){k();for(const y in i){const E=i[y];for(const O in E){const W=E[O];for(const tt in W)d(W[tt].object),delete W[tt];delete E[O]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const O in E){const W=E[O];for(const tt in W)d(W[tt].object),delete W[tt];delete E[O]}delete i[y.id]}function L(y){for(const E in i){const O=i[E];if(O[y.id]===void 0)continue;const W=O[y.id];for(const tt in W)d(W[tt].object),delete W[tt];delete O[y.id]}}function k(){J(),o=!0,r!==s&&(r=s,u(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:J,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:g,disableUnusedAttributes:R}}function vT(n,t,e){let i;function s(u){i=u}function r(u,d){n.drawArrays(i,u,d),e.update(d,i,1)}function o(u,d,h){h!==0&&(n.drawArraysInstanced(i,u,d,h),e.update(d,i,h))}function a(u,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];e.update(p,i,1)}function l(u,d,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];for(let x=0;x<f.length;x++)e.update(_,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xT(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==vi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const k=L===Hu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==gs&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==fs&&!k)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const L=t.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:F,maxSamples:D}}function MT(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new wr,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||_===null||_.length===0||r&&!g)r?d(null):u();else{const R=r?0:i,T=R*4;let A=m.clippingState||null;l.value=A,A=d(_,f,T,p);for(let F=0;F!==T;++F)A[F]=e[F];m.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,f,p,_){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const m=p+x*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,A=p;T!==x;++T,A+=4)o.copy(h[T]).applyMatrix4(R,a),o.normal.toArray(g,A),g[A+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function yT(n){let t=new WeakMap;function e(o,a){return a===Cm?o.mapping=ka:a===Rm&&(o.mapping=Va),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cm||a===Rm)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new DE(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class nM extends Qx{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $o=4,Rv=[.125,.215,.35,.446,.526,.582],Dr=20,Yp=new nM,Pv=new ae;let jp=null,Kp=0,Zp=0,Jp=!1;const Tr=(1+Math.sqrt(5))/2,zo=1/Tr,Lv=[new $(-Tr,zo,0),new $(Tr,zo,0),new $(-zo,0,Tr),new $(zo,0,Tr),new $(0,Tr,-zo),new $(0,Tr,zo),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Dv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){jp=this._renderer.getRenderTarget(),Kp=this._renderer.getActiveCubeFace(),Zp=this._renderer.getActiveMipmapLevel(),Jp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jp,Kp,Zp),this._renderer.xr.enabled=Jp,t.scissorTest=!1,yd(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ka||t.mapping===Va?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jp=this._renderer.getRenderTarget(),Kp=this._renderer.getActiveCubeFace(),Zp=this._renderer.getActiveMipmapLevel(),Jp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Hu,format:vi,colorSpace:hr,depthBuffer:!1},s=Iv(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ST(r)),this._blurMaterial=bT(r,t,e)}return s}_compileMaterial(t){const e=new Bi(this._lodPlanes[0],t);this._renderer.compile(e,Yp)}_sceneToCubeUV(t,e,i,s){const a=new Zn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Pv),d.toneMapping=er,d.autoClear=!1;const p=new Kx({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),_=new Bi(new Xu,p);let x=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(Pv),x=!0);for(let m=0;m<6;m++){const R=m%3;R===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):R===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const T=this._cubeSize;yd(s,R*T,m>2?T:0,T,T),d.setRenderTarget(s),x&&d.render(_,a),d.render(t,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ka||t.mapping===Va;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uv());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yd(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Yp)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lv[(s-r-1)%Lv.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Bi(this._lodPlanes[s],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),x=r/_,g=isFinite(r)?1+Math.floor(d*x):Dr;g>Dr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Dr}`);const m=[];let R=0;for(let L=0;L<Dr;++L){const k=L/x,J=Math.exp(-k*k/2);m.push(J),L===0?R+=J:L<g&&(R+=2*J)}for(let L=0;L<m.length;L++)m[L]=m[L]/R;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-i;const A=this._sizeLods[s],F=3*A*(s>T-$o?s-T+$o:0),D=4*(this._cubeSize-A);yd(e,F,D,3*A,2*A),l.setRenderTarget(e),l.render(h,Yp)}}function ST(n){const t=[],e=[],i=[];let s=n;const r=n-$o+1+Rv.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-$o?l=Rv[o-n+$o-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,x=3,g=2,m=1,R=new Float32Array(x*_*p),T=new Float32Array(g*_*p),A=new Float32Array(m*_*p);for(let D=0;D<p;D++){const L=D%3*2/3-1,k=D>2?0:-1,J=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];R.set(J,x*_*D),T.set(f,g*_*D);const y=[D,D,D,D,D,D];A.set(y,m*_*D)}const F=new Wi;F.setAttribute("position",new zi(R,x)),F.setAttribute("uv",new zi(T,g)),F.setAttribute("faceIndex",new zi(A,m)),t.push(F),s>$o&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Iv(n,t,e){const i=new So(n,t,e);return i.texture.mapping=tp,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yd(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function bT(n,t,e){const i=new Float32Array(Dr),s=new $(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:s_(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Uv(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:s_(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Nv(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:s_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function s_(){return`

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
	`}function ET(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Cm||l===Rm,d=l===ka||l===Va;if(u||d){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Dv(n)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||d&&p&&s(p)?(e===null&&(e=new Dv(n)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function wT(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&kd("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function TT(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let g=0,m=x.length;g<m;g++)t.update(x[g],n.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const R=p.array;x=p.version;for(let T=0,A=R.length;T<A;T+=3){const F=R[T+0],D=R[T+1],L=R[T+2];f.push(F,D,D,L,L,F)}}else if(_!==void 0){const R=_.array;x=_.version;for(let T=0,A=R.length/3-1;T<A;T+=3){const F=T+0,D=T+1,L=T+2;f.push(F,D,D,L,L,F)}}else return;const g=new(Xx(f)?ip:Zx)(f,1);g.version=x;const m=r.get(h);m&&t.remove(m),r.set(h,g)}function d(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function AT(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),e.update(p,i,_))}function d(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];e.update(g,i,1)}function h(f,p,_,x){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)u(f[m]/o,p[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,_);let m=0;for(let R=0;R<_;R++)m+=p[R];for(let R=0;R<x.length;R++)e.update(m,i,x[R])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function CT(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function RT(n,t,e){const i=new WeakMap,s=new He;function r(o,a,l){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){k.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let A=0;_===!0&&(A=1),x===!0&&(A=2),g===!0&&(A=3);let F=a.attributes.position.count*A,D=1;F>t.maxTextureSize&&(D=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const L=new Float32Array(F*D*4*h),k=new Yx(L,F,D,h);k.type=fs,k.needsUpdate=!0;const J=A*4;for(let E=0;E<h;E++){const O=m[E],W=R[E],tt=T[E],ct=F*D*4*E;for(let Z=0;Z<O.count;Z++){const it=Z*J;_===!0&&(s.fromBufferAttribute(O,Z),L[ct+it+0]=s.x,L[ct+it+1]=s.y,L[ct+it+2]=s.z,L[ct+it+3]=0),x===!0&&(s.fromBufferAttribute(W,Z),L[ct+it+4]=s.x,L[ct+it+5]=s.y,L[ct+it+6]=s.z,L[ct+it+7]=0),g===!0&&(s.fromBufferAttribute(tt,Z),L[ct+it+8]=s.x,L[ct+it+9]=s.y,L[ct+it+10]=s.z,L[ct+it+11]=tt.itemSize===4?s.w:1)}}f={count:h,texture:k,size:new Me(F,D)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function PT(n,t,e,i){let s=new WeakMap;function r(l){const u=i.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}class iM extends In{constructor(t,e,i,s,r,o,a,l,u,d=Qo){if(d!==Qo&&d!==Ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Qo&&(i=yo),i===void 0&&d===Ha&&(i=za),super(null,s,r,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sM=new In,Fv=new iM(1,1),rM=new Yx,oM=new gE,aM=new tM,Ov=[],Bv=[],kv=new Float32Array(16),Vv=new Float32Array(9),zv=new Float32Array(4);function Ka(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Ov[s];if(r===void 0&&(r=new Float32Array(s),Ov[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function rp(n,t){let e=Bv[t];e===void 0&&(e=new Int32Array(t),Bv[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function LT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function DT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function IT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function UT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function NT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,i))return;zv.set(i),n.uniformMatrix2fv(this.addr,!1,zv),Qe(e,i)}}function FT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,i))return;Vv.set(i),n.uniformMatrix3fv(this.addr,!1,Vv),Qe(e,i)}}function OT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,i))return;kv.set(i),n.uniformMatrix4fv(this.addr,!1,kv),Qe(e,i)}}function BT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function kT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function VT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function zT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function HT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function GT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function WT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function $T(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function XT(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fv.compareFunction=$x,r=Fv):r=sM,e.setTexture2D(t||r,s)}function qT(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||oM,s)}function YT(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||aM,s)}function jT(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||rM,s)}function KT(n){switch(n){case 5126:return LT;case 35664:return DT;case 35665:return IT;case 35666:return UT;case 35674:return NT;case 35675:return FT;case 35676:return OT;case 5124:case 35670:return BT;case 35667:case 35671:return kT;case 35668:case 35672:return VT;case 35669:case 35673:return zT;case 5125:return HT;case 36294:return GT;case 36295:return WT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return jT}}function ZT(n,t){n.uniform1fv(this.addr,t)}function JT(n,t){const e=Ka(t,this.size,2);n.uniform2fv(this.addr,e)}function QT(n,t){const e=Ka(t,this.size,3);n.uniform3fv(this.addr,e)}function tA(n,t){const e=Ka(t,this.size,4);n.uniform4fv(this.addr,e)}function eA(n,t){const e=Ka(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function nA(n,t){const e=Ka(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function iA(n,t){const e=Ka(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sA(n,t){n.uniform1iv(this.addr,t)}function rA(n,t){n.uniform2iv(this.addr,t)}function oA(n,t){n.uniform3iv(this.addr,t)}function aA(n,t){n.uniform4iv(this.addr,t)}function lA(n,t){n.uniform1uiv(this.addr,t)}function cA(n,t){n.uniform2uiv(this.addr,t)}function uA(n,t){n.uniform3uiv(this.addr,t)}function dA(n,t){n.uniform4uiv(this.addr,t)}function hA(n,t,e){const i=this.cache,s=t.length,r=rp(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||sM,r[o])}function fA(n,t,e){const i=this.cache,s=t.length,r=rp(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||oM,r[o])}function pA(n,t,e){const i=this.cache,s=t.length,r=rp(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||aM,r[o])}function mA(n,t,e){const i=this.cache,s=t.length,r=rp(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rM,r[o])}function gA(n){switch(n){case 5126:return ZT;case 35664:return JT;case 35665:return QT;case 35666:return tA;case 35674:return eA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return sA;case 35667:case 35671:return rA;case 35668:case 35672:return oA;case 35669:case 35673:return aA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}class _A{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=KT(e.type)}}class vA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gA(e.type)}}class xA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Qp=/(\w+)(\])?(\[|\.)?/g;function Hv(n,t){n.seq.push(t),n.map[t.id]=t}function MA(n,t,e){const i=n.name,s=i.length;for(Qp.lastIndex=0;;){const r=Qp.exec(i),o=Qp.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Hv(e,u===void 0?new _A(a,n,t):new vA(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new xA(a),Hv(e,h)),e=h}}}class Vd{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);MA(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Gv(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const yA=37297;let SA=0;function bA(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function EA(n){const t=Ee.getPrimaries(Ee.workingColorSpace),e=Ee.getPrimaries(n);let i;switch(t===e?i="":t===oh&&e===rh?i="LinearDisplayP3ToLinearSRGB":t===rh&&e===oh&&(i="LinearSRGBToLinearDisplayP3"),n){case hr:case ep:return[i,"LinearTransferOETF"];case Ri:case t_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wv(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bA(n.getShaderSource(t),o)}else return s}function wA(n,t){const e=EA(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function TA(n,t){let e;switch(t){case Hb:e="Linear";break;case Gb:e="Reinhard";break;case Wb:e="Cineon";break;case $b:e="ACESFilmic";break;case qb:e="AgX";break;case Yb:e="Neutral";break;case Xb:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sd=new $;function AA(){Ee.getLuminanceCoefficients(Sd);const n=Sd.x.toFixed(4),t=Sd.y.toFixed(4),e=Sd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function RA(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function PA(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ul(n){return n!==""}function $v(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xv(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LA=/^[ \t]*#include +<([\w\d./]+)>/gm;function rg(n){return n.replace(LA,IA)}const DA=new Map;function IA(n,t){let e=Jt[t];if(e===void 0){const i=DA.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return rg(e)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(n){return n.replace(UA,NA)}function NA(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yv(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function FA(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dx?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===yb?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function OA(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ka:case Va:t="ENVMAP_TYPE_CUBE";break;case tp:t="ENVMAP_TYPE_CUBE_UV";break}return t}function BA(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Va:t="ENVMAP_MODE_REFRACTION";break}return t}function kA(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qg:t="ENVMAP_BLENDING_MULTIPLY";break;case Vb:t="ENVMAP_BLENDING_MIX";break;case zb:t="ENVMAP_BLENDING_ADD";break}return t}function VA(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function zA(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=FA(e),u=OA(e),d=BA(e),h=kA(e),f=VA(e),p=CA(e),_=RA(r),x=s.createProgram();let g,m,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ul).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ul).join(`
`),m.length>0&&(m+=`
`)):(g=[Yv(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),m=[Yv(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==er?"#define TONE_MAPPING":"",e.toneMapping!==er?Jt.tonemapping_pars_fragment:"",e.toneMapping!==er?TA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,wA("linearToOutputTexel",e.outputColorSpace),AA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ul).join(`
`)),o=rg(o),o=$v(o,e),o=Xv(o,e),a=rg(a),a=$v(a,e),a=Xv(a,e),o=qv(o),a=qv(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=R+g+o,A=R+m+a,F=Gv(s,s.VERTEX_SHADER,T),D=Gv(s,s.FRAGMENT_SHADER,A);s.attachShader(x,F),s.attachShader(x,D),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(E){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(F).trim(),tt=s.getShaderInfoLog(D).trim();let ct=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ct=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,D);else{const it=Wv(s,F,"vertex"),q=Wv(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+O+`
`+it+`
`+q)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(W===""||tt==="")&&(Z=!1);Z&&(E.diagnostics={runnable:ct,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:tt,prefix:m}})}s.deleteShader(F),s.deleteShader(D),k=new Vd(s,x),J=PA(s,x)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let J;this.getAttributes=function(){return J===void 0&&L(this),J};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,yA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SA++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=D,this}let HA=0;class GA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new WA(t),e.set(t,i)),i}}class WA{constructor(t){this.id=HA++,this.code=t,this.usedTimes=0}}function $A(n,t,e,i,s,r,o){const a=new n_,l=new GA,u=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return u.add(y),y===0?"uv":`uv${y}`}function m(y,E,O,W,tt){const ct=W.fog,Z=tt.geometry,it=y.isMeshStandardMaterial?W.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||it),Et=q&&q.mapping===tp?q.image.height:null,wt=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const Dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Zt=Dt!==void 0?Dt.length:0;let ue=0;Z.morphAttributes.position!==void 0&&(ue=1),Z.morphAttributes.normal!==void 0&&(ue=2),Z.morphAttributes.color!==void 0&&(ue=3);let at,gt,It,Tt;if(wt){const wn=Oi[wt];at=wn.vertexShader,gt=wn.fragmentShader}else at=y.vertexShader,gt=y.fragmentShader,l.update(y),It=l.getVertexShaderID(y),Tt=l.getFragmentShaderID(y);const Yt=n.getRenderTarget(),Xt=tt.isInstancedMesh===!0,te=tt.isBatchedMesh===!0,fe=!!y.map,oe=!!y.matcap,M=!!q,I=!!y.aoMap,H=!!y.lightMap,nt=!!y.bumpMap,Y=!!y.normalMap,st=!!y.displacementMap,rt=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,P=y.anisotropy>0,G=y.clearcoat>0,z=y.dispersion>0,V=y.iridescence>0,dt=y.sheen>0,lt=y.transmission>0,mt=P&&!!y.anisotropyMap,Ut=G&&!!y.clearcoatMap,ft=G&&!!y.clearcoatNormalMap,yt=G&&!!y.clearcoatRoughnessMap,zt=V&&!!y.iridescenceMap,Ft=V&&!!y.iridescenceThicknessMap,At=dt&&!!y.sheenColorMap,ie=dt&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,se=!!y.specularColorMap,U=!!y.specularIntensityMap,Pt=lt&&!!y.transmissionMap,et=lt&&!!y.thicknessMap,ut=!!y.gradientMap,Ct=!!y.alphaMap,Lt=y.alphaTest>0,le=!!y.alphaHash,Xe=!!y.extensions;let En=er;y.toneMapped&&(Yt===null||Yt.isXRRenderTarget===!0)&&(En=n.toneMapping);const pe={shaderID:wt,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:gt,defines:y.defines,customVertexShaderID:It,customFragmentShaderID:Tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:te,batchingColor:te&&tt._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&tt.instanceColor!==null,instancingMorph:Xt&&tt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Yt===null?n.outputColorSpace:Yt.isXRRenderTarget===!0?Yt.texture.colorSpace:hr,alphaToCoverage:!!y.alphaToCoverage,map:fe,matcap:oe,envMap:M,envMapMode:M&&q.mapping,envMapCubeUVHeight:Et,aoMap:I,lightMap:H,bumpMap:nt,normalMap:Y,displacementMap:p&&st,emissiveMap:rt,normalMapObjectSpace:Y&&y.normalMapType===Jb,normalMapTangentSpace:Y&&y.normalMapType===Wx,metalnessMap:S,roughnessMap:v,anisotropy:P,anisotropyMap:mt,clearcoat:G,clearcoatMap:Ut,clearcoatNormalMap:ft,clearcoatRoughnessMap:yt,dispersion:z,iridescence:V,iridescenceMap:zt,iridescenceThicknessMap:Ft,sheen:dt,sheenColorMap:At,sheenRoughnessMap:ie,specularMap:Ht,specularColorMap:se,specularIntensityMap:U,transmission:lt,transmissionMap:Pt,thicknessMap:et,gradientMap:ut,opaque:y.transparent===!1&&y.blending===Jo&&y.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Lt,alphaHash:le,combine:y.combine,mapUv:fe&&g(y.map.channel),aoMapUv:I&&g(y.aoMap.channel),lightMapUv:H&&g(y.lightMap.channel),bumpMapUv:nt&&g(y.bumpMap.channel),normalMapUv:Y&&g(y.normalMap.channel),displacementMapUv:st&&g(y.displacementMap.channel),emissiveMapUv:rt&&g(y.emissiveMap.channel),metalnessMapUv:S&&g(y.metalnessMap.channel),roughnessMapUv:v&&g(y.roughnessMap.channel),anisotropyMapUv:mt&&g(y.anisotropyMap.channel),clearcoatMapUv:Ut&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ie&&g(y.sheenRoughnessMap.channel),specularMapUv:Ht&&g(y.specularMap.channel),specularColorMapUv:se&&g(y.specularColorMap.channel),specularIntensityMapUv:U&&g(y.specularIntensityMap.channel),transmissionMapUv:Pt&&g(y.transmissionMap.channel),thicknessMapUv:et&&g(y.thicknessMap.channel),alphaMapUv:Ct&&g(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Y||P),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!Z.attributes.uv&&(fe||Ct),fog:!!ct,useFog:y.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:tt.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:En,decodeVideoTexture:fe&&y.map.isVideoTexture===!0&&Ee.getTransfer(y.map.colorSpace)===Le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hs,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&y.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=u.has(1),pe.vertexUv2s=u.has(2),pe.vertexUv3s=u.has(3),u.clear(),pe}function R(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)E.push(O),E.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(T(E,y),A(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function T(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function A(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function F(y){const E=x[y.type];let O;if(E){const W=Oi[E];O=CE.clone(W.uniforms)}else O=y.uniforms;return O}function D(y,E){let O;for(let W=0,tt=d.length;W<tt;W++){const ct=d[W];if(ct.cacheKey===E){O=ct,++O.usedTimes;break}}return O===void 0&&(O=new zA(n,E,y,r),d.push(O)),O}function L(y){if(--y.usedTimes===0){const E=d.indexOf(y);d[E]=d[d.length-1],d.pop(),y.destroy()}}function k(y){l.remove(y)}function J(){l.dispose()}return{getParameters:m,getProgramCacheKey:R,getUniforms:F,acquireProgram:D,releaseProgram:L,releaseShaderCache:k,programs:d,dispose:J}}function XA(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function qA(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function jv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Kv(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,_,x,g){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:g},n[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=x,m.group=g),t++,m}function a(h,f,p,_,x,g){const m=o(h,f,p,_,x,g);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(h,f,p,_,x,g){const m=o(h,f,p,_,x,g);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function u(h,f){e.length>1&&e.sort(h||qA),i.length>1&&i.sort(f||jv),s.length>1&&s.sort(f||jv)}function d(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:u}}function YA(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Kv,n.set(i,[o])):s>=r.length?(o=new Kv,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function jA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new ae};break;case"SpotLight":e={position:new $,direction:new $,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function KA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ZA=0;function JA(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function QA(n){const t=new jA,e=KA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new $);const s=new $,r=new Fe,o=new Fe;function a(u){let d=0,h=0,f=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let p=0,_=0,x=0,g=0,m=0,R=0,T=0,A=0,F=0,D=0,L=0;u.sort(JA);for(let J=0,y=u.length;J<y;J++){const E=u[J],O=E.color,W=E.intensity,tt=E.distance,ct=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=O.r*W,h+=O.g*W,f+=O.b*W;else if(E.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(E.sh.coefficients[Z],W);L++}else if(E.isDirectionalLight){const Z=t.get(E);if(Z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const it=E.shadow,q=e.get(E);q.shadowIntensity=it.intensity,q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=ct,i.directionalShadowMatrix[p]=E.shadow.matrix,R++}i.directional[p]=Z,p++}else if(E.isSpotLight){const Z=t.get(E);Z.position.setFromMatrixPosition(E.matrixWorld),Z.color.copy(O).multiplyScalar(W),Z.distance=tt,Z.coneCos=Math.cos(E.angle),Z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),Z.decay=E.decay,i.spot[x]=Z;const it=E.shadow;if(E.map&&(i.spotLightMap[F]=E.map,F++,it.updateMatrices(E),E.castShadow&&D++),i.spotLightMatrix[x]=it.matrix,E.castShadow){const q=e.get(E);q.shadowIntensity=it.intensity,q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=ct,A++}x++}else if(E.isRectAreaLight){const Z=t.get(E);Z.color.copy(O).multiplyScalar(W),Z.halfWidth.set(E.width*.5,0,0),Z.halfHeight.set(0,E.height*.5,0),i.rectArea[g]=Z,g++}else if(E.isPointLight){const Z=t.get(E);if(Z.color.copy(E.color).multiplyScalar(E.intensity),Z.distance=E.distance,Z.decay=E.decay,E.castShadow){const it=E.shadow,q=e.get(E);q.shadowIntensity=it.intensity,q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,q.shadowCameraNear=it.camera.near,q.shadowCameraFar=it.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=ct,i.pointShadowMatrix[_]=E.shadow.matrix,T++}i.point[_]=Z,_++}else if(E.isHemisphereLight){const Z=t.get(E);Z.skyColor.copy(E.color).multiplyScalar(W),Z.groundColor.copy(E.groundColor).multiplyScalar(W),i.hemi[m]=Z,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const k=i.hash;(k.directionalLength!==p||k.pointLength!==_||k.spotLength!==x||k.rectAreaLength!==g||k.hemiLength!==m||k.numDirectionalShadows!==R||k.numPointShadows!==T||k.numSpotShadows!==A||k.numSpotMaps!==F||k.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=A+F-D,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,k.directionalLength=p,k.pointLength=_,k.spotLength=x,k.rectAreaLength=g,k.hemiLength=m,k.numDirectionalShadows=R,k.numPointShadows=T,k.numSpotShadows=A,k.numSpotMaps=F,k.numLightProbes=L,i.version=ZA++)}function l(u,d){let h=0,f=0,p=0,_=0,x=0;const g=d.matrixWorldInverse;for(let m=0,R=u.length;m<R;m++){const T=u[m];if(T.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),h++}else if(T.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(T.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),o.identity(),r.copy(T.matrixWorld),r.premultiply(g),o.extractRotation(r),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Zv(n){const t=new QA(n),e=[],i=[];function s(d){u.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function o(d){i.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function tC(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Zv(n),t.set(s,[a])):r>=o.length?(a=new Zv(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class eC extends wo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nC extends wo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sC=`uniform sampler2D shadow_pass;
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
}`;function rC(n,t,e){let i=new i_;const s=new Me,r=new Me,o=new He,a=new eC({depthPacking:Zb}),l=new nC,u={},d=e.maxTextureSize,h={[rr]:Dn,[Dn]:rr,[hs]:hs},f=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:iC,fragmentShader:sC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Wi;_.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Bi(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dx;let m=this.type;this.render=function(D,L,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const J=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),O=n.state;O.setBlending(tr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=m!==Ji&&this.type===Ji,tt=m===Ji&&this.type!==Ji;for(let ct=0,Z=D.length;ct<Z;ct++){const it=D[ct],q=it.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const Et=q.getFrameExtents();if(s.multiply(Et),r.copy(q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Et.x),s.x=r.x*Et.x,q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Et.y),s.y=r.y*Et.y,q.mapSize.y=r.y)),q.map===null||W===!0||tt===!0){const Dt=this.type!==Ji?{minFilter:Qn,magFilter:Qn}:{};q.map!==null&&q.map.dispose(),q.map=new So(s.x,s.y,Dt),q.map.texture.name=it.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const wt=q.getViewportCount();for(let Dt=0;Dt<wt;Dt++){const Zt=q.getViewport(Dt);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),O.viewport(o),q.updateMatrices(it,Dt),i=q.getFrustum(),A(L,k,q.camera,it,this.type)}q.isPointLightShadow!==!0&&this.type===Ji&&R(q,k),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(J,y,E)};function R(D,L){const k=t.update(x);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new So(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,k,f,x,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,k,p,x,null)}function T(D,L,k,J){let y=null;const E=k.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(E!==void 0)y=E;else if(y=k.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const O=y.uuid,W=L.uuid;let tt=u[O];tt===void 0&&(tt={},u[O]=tt);let ct=tt[W];ct===void 0&&(ct=y.clone(),tt[W]=ct,L.addEventListener("dispose",F)),y=ct}if(y.visible=L.visible,y.wireframe=L.wireframe,J===Ji?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:h[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=k}return y}function A(D,L,k,J,y){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===Ji)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,D.matrixWorld);const W=t.update(D),tt=D.material;if(Array.isArray(tt)){const ct=W.groups;for(let Z=0,it=ct.length;Z<it;Z++){const q=ct[Z],Et=tt[q.materialIndex];if(Et&&Et.visible){const wt=T(D,Et,J,y);D.onBeforeShadow(n,D,L,k,W,wt,q),n.renderBufferDirect(k,null,W,wt,D,q),D.onAfterShadow(n,D,L,k,W,wt,q)}}}else if(tt.visible){const ct=T(D,tt,J,y);D.onBeforeShadow(n,D,L,k,W,ct,null),n.renderBufferDirect(k,null,W,ct,D,null),D.onAfterShadow(n,D,L,k,W,ct,null)}}const O=D.children;for(let W=0,tt=O.length;W<tt;W++)A(O[W],L,k,J,y)}function F(D){D.target.removeEventListener("dispose",F);for(const k in u){const J=u[k],y=D.target.uuid;y in J&&(J[y].dispose(),delete J[y])}}}const oC={[ym]:Sm,[bm]:Tm,[Em]:Am,[Ba]:wm,[Sm]:ym,[Tm]:bm,[Am]:Em,[wm]:Ba};function aC(n){function t(){let U=!1;const Pt=new He;let et=null;const ut=new He(0,0,0,0);return{setMask:function(Ct){et!==Ct&&!U&&(n.colorMask(Ct,Ct,Ct,Ct),et=Ct)},setLocked:function(Ct){U=Ct},setClear:function(Ct,Lt,le,Xe,En){En===!0&&(Ct*=Xe,Lt*=Xe,le*=Xe),Pt.set(Ct,Lt,le,Xe),ut.equals(Pt)===!1&&(n.clearColor(Ct,Lt,le,Xe),ut.copy(Pt))},reset:function(){U=!1,et=null,ut.set(-1,0,0,0)}}}function e(){let U=!1,Pt=!1,et=null,ut=null,Ct=null;return{setReversed:function(Lt){Pt=Lt},setTest:function(Lt){Lt?It(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(Lt){et!==Lt&&!U&&(n.depthMask(Lt),et=Lt)},setFunc:function(Lt){if(Pt&&(Lt=oC[Lt]),ut!==Lt){switch(Lt){case ym:n.depthFunc(n.NEVER);break;case Sm:n.depthFunc(n.ALWAYS);break;case bm:n.depthFunc(n.LESS);break;case Ba:n.depthFunc(n.LEQUAL);break;case Em:n.depthFunc(n.EQUAL);break;case wm:n.depthFunc(n.GEQUAL);break;case Tm:n.depthFunc(n.GREATER);break;case Am:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=Lt}},setLocked:function(Lt){U=Lt},setClear:function(Lt){Ct!==Lt&&(n.clearDepth(Lt),Ct=Lt)},reset:function(){U=!1,et=null,ut=null,Ct=null}}}function i(){let U=!1,Pt=null,et=null,ut=null,Ct=null,Lt=null,le=null,Xe=null,En=null;return{setTest:function(pe){U||(pe?It(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(pe){Pt!==pe&&!U&&(n.stencilMask(pe),Pt=pe)},setFunc:function(pe,wn,$i){(et!==pe||ut!==wn||Ct!==$i)&&(n.stencilFunc(pe,wn,$i),et=pe,ut=wn,Ct=$i)},setOp:function(pe,wn,$i){(Lt!==pe||le!==wn||Xe!==$i)&&(n.stencilOp(pe,wn,$i),Lt=pe,le=wn,Xe=$i)},setLocked:function(pe){U=pe},setClear:function(pe){En!==pe&&(n.clearStencil(pe),En=pe)},reset:function(){U=!1,Pt=null,et=null,ut=null,Ct=null,Lt=null,le=null,Xe=null,En=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,_=!1,x=null,g=null,m=null,R=null,T=null,A=null,F=null,D=new ae(0,0,0),L=0,k=!1,J=null,y=null,E=null,O=null,W=null;const tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ct=!1,Z=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(it)[1]),ct=Z>=1):it.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),ct=Z>=2);let q=null,Et={};const wt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),Zt=new He().fromArray(wt),ue=new He().fromArray(Dt);function at(U,Pt,et,ut){const Ct=new Uint8Array(4),Lt=n.createTexture();n.bindTexture(U,Lt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let le=0;le<et;le++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Pt,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(Pt+le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return Lt}const gt={};gt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),It(n.DEPTH_TEST),r.setFunc(Ba),H(!1),nt(rv),It(n.CULL_FACE),M(tr);function It(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Tt(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Yt(U,Pt){return d[U]!==Pt?(n.bindFramebuffer(U,Pt),d[U]=Pt,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Pt),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Xt(U,Pt){let et=f,ut=!1;if(U){et=h.get(Pt),et===void 0&&(et=[],h.set(Pt,et));const Ct=U.textures;if(et.length!==Ct.length||et[0]!==n.COLOR_ATTACHMENT0){for(let Lt=0,le=Ct.length;Lt<le;Lt++)et[Lt]=n.COLOR_ATTACHMENT0+Lt;et.length=Ct.length,ut=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,ut=!0);ut&&n.drawBuffers(et)}function te(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const fe={[Lr]:n.FUNC_ADD,[bb]:n.FUNC_SUBTRACT,[Eb]:n.FUNC_REVERSE_SUBTRACT};fe[wb]=n.MIN,fe[Tb]=n.MAX;const oe={[Ab]:n.ZERO,[Cb]:n.ONE,[Rb]:n.SRC_COLOR,[xm]:n.SRC_ALPHA,[Nb]:n.SRC_ALPHA_SATURATE,[Ib]:n.DST_COLOR,[Lb]:n.DST_ALPHA,[Pb]:n.ONE_MINUS_SRC_COLOR,[Mm]:n.ONE_MINUS_SRC_ALPHA,[Ub]:n.ONE_MINUS_DST_COLOR,[Db]:n.ONE_MINUS_DST_ALPHA,[Fb]:n.CONSTANT_COLOR,[Ob]:n.ONE_MINUS_CONSTANT_COLOR,[Bb]:n.CONSTANT_ALPHA,[kb]:n.ONE_MINUS_CONSTANT_ALPHA};function M(U,Pt,et,ut,Ct,Lt,le,Xe,En,pe){if(U===tr){_===!0&&(Tt(n.BLEND),_=!1);return}if(_===!1&&(It(n.BLEND),_=!0),U!==Sb){if(U!==x||pe!==k){if((g!==Lr||T!==Lr)&&(n.blendEquation(n.FUNC_ADD),g=Lr,T=Lr),pe)switch(U){case Jo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ov:n.blendFunc(n.ONE,n.ONE);break;case av:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Jo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ov:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case av:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,R=null,A=null,F=null,D.set(0,0,0),L=0,x=U,k=pe}return}Ct=Ct||Pt,Lt=Lt||et,le=le||ut,(Pt!==g||Ct!==T)&&(n.blendEquationSeparate(fe[Pt],fe[Ct]),g=Pt,T=Ct),(et!==m||ut!==R||Lt!==A||le!==F)&&(n.blendFuncSeparate(oe[et],oe[ut],oe[Lt],oe[le]),m=et,R=ut,A=Lt,F=le),(Xe.equals(D)===!1||En!==L)&&(n.blendColor(Xe.r,Xe.g,Xe.b,En),D.copy(Xe),L=En),x=U,k=!1}function I(U,Pt){U.side===hs?Tt(n.CULL_FACE):It(n.CULL_FACE);let et=U.side===Dn;Pt&&(et=!et),H(et),U.blending===Jo&&U.transparent===!1?M(tr):M(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const ut=U.stencilWrite;o.setTest(ut),ut&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),st(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?It(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(U){J!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),J=U)}function nt(U){U!==xb?(It(n.CULL_FACE),U!==y&&(U===rv?n.cullFace(n.BACK):U===Mb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),y=U}function Y(U){U!==E&&(ct&&n.lineWidth(U),E=U)}function st(U,Pt,et){U?(It(n.POLYGON_OFFSET_FILL),(O!==Pt||W!==et)&&(n.polygonOffset(Pt,et),O=Pt,W=et)):Tt(n.POLYGON_OFFSET_FILL)}function rt(U){U?It(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function S(U){U===void 0&&(U=n.TEXTURE0+tt-1),q!==U&&(n.activeTexture(U),q=U)}function v(U,Pt,et){et===void 0&&(q===null?et=n.TEXTURE0+tt-1:et=q);let ut=Et[et];ut===void 0&&(ut={type:void 0,texture:void 0},Et[et]=ut),(ut.type!==U||ut.texture!==Pt)&&(q!==et&&(n.activeTexture(et),q=et),n.bindTexture(U,Pt||gt[U]),ut.type=U,ut.texture=Pt)}function P(){const U=Et[q];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(U){Zt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Zt.copy(U))}function At(U){ue.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ue.copy(U))}function ie(U,Pt){let et=l.get(Pt);et===void 0&&(et=new WeakMap,l.set(Pt,et));let ut=et.get(U);ut===void 0&&(ut=n.getUniformBlockIndex(Pt,U.name),et.set(U,ut))}function Ht(U,Pt){const ut=l.get(Pt).get(U);a.get(Pt)!==ut&&(n.uniformBlockBinding(Pt,ut,U.__bindingPointIndex),a.set(Pt,ut))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,Et={},d={},h=new WeakMap,f=[],p=null,_=!1,x=null,g=null,m=null,R=null,T=null,A=null,F=null,D=new ae(0,0,0),L=0,k=!1,J=null,y=null,E=null,O=null,W=null,Zt.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:It,disable:Tt,bindFramebuffer:Yt,drawBuffers:Xt,useProgram:te,setBlending:M,setMaterial:I,setFlipSided:H,setCullFace:nt,setLineWidth:Y,setPolygonOffset:st,setScissorTest:rt,activeTexture:S,bindTexture:v,unbindTexture:P,compressedTexImage2D:G,compressedTexImage3D:z,texImage2D:yt,texImage3D:zt,updateUBOMapping:ie,uniformBlockBinding:Ht,texStorage2D:Ut,texStorage3D:ft,texSubImage2D:V,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Ft,viewport:At,reset:se}}function Jv(n,t,e,i){const s=lC(i);switch(e){case Ox:return n*t;case kx:return n*t;case Vx:return n*t*2;case zx:return n*t/s.components*s.byteLength;case Zg:return n*t/s.components*s.byteLength;case Hx:return n*t*2/s.components*s.byteLength;case Jg:return n*t*2/s.components*s.byteLength;case Bx:return n*t*3/s.components*s.byteLength;case vi:return n*t*4/s.components*s.byteLength;case Qg:return n*t*4/s.components*s.byteLength;case Ud:case Nd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fd:case Od:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Im:case Nm:return Math.max(n,16)*Math.max(t,8)/4;case Dm:case Um:return Math.max(n,8)*Math.max(t,8)/2;case Fm:case Om:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bm:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case km:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vm:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case zm:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Hm:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Gm:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wm:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $m:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Xm:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case qm:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ym:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case jm:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Km:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Zm:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jm:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Bd:case Qm:case tg:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Gx:case eg:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ng:case ig:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lC(n){switch(n){case gs:case Ux:return{byteLength:1,components:1};case Cl:case Nx:case Hu:return{byteLength:2,components:1};case jg:case Kg:return{byteLength:2,components:4};case yo:case Yg:case fs:return{byteLength:4,components:1};case Fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function cC(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Me,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return p?new OffscreenCanvas(S,v):lh("canvas")}function x(S,v,P){let G=1;const z=rt(S);if((z.width>P||z.height>P)&&(G=P/Math.max(z.width,z.height)),G<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const V=Math.floor(G*z.width),dt=Math.floor(G*z.height);h===void 0&&(h=_(V,dt));const lt=v?_(V,dt):h;return lt.width=V,lt.height=dt,lt.getContext("2d").drawImage(S,0,0,V,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+V+"x"+dt+")."),lt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),S;return S}function g(S){return S.generateMipmaps&&S.minFilter!==Qn&&S.minFilter!==pi}function m(S){n.generateMipmap(S)}function R(S,v,P,G,z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V=v;if(v===n.RED&&(P===n.FLOAT&&(V=n.R32F),P===n.HALF_FLOAT&&(V=n.R16F),P===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.R8UI),P===n.UNSIGNED_SHORT&&(V=n.R16UI),P===n.UNSIGNED_INT&&(V=n.R32UI),P===n.BYTE&&(V=n.R8I),P===n.SHORT&&(V=n.R16I),P===n.INT&&(V=n.R32I)),v===n.RG&&(P===n.FLOAT&&(V=n.RG32F),P===n.HALF_FLOAT&&(V=n.RG16F),P===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.RG8UI),P===n.UNSIGNED_SHORT&&(V=n.RG16UI),P===n.UNSIGNED_INT&&(V=n.RG32UI),P===n.BYTE&&(V=n.RG8I),P===n.SHORT&&(V=n.RG16I),P===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.RGB8UI),P===n.UNSIGNED_SHORT&&(V=n.RGB16UI),P===n.UNSIGNED_INT&&(V=n.RGB32UI),P===n.BYTE&&(V=n.RGB8I),P===n.SHORT&&(V=n.RGB16I),P===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),P===n.UNSIGNED_INT&&(V=n.RGBA32UI),P===n.BYTE&&(V=n.RGBA8I),P===n.SHORT&&(V=n.RGBA16I),P===n.INT&&(V=n.RGBA32I)),v===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),v===n.RGBA){const dt=z?sh:Ee.getTransfer(G);P===n.FLOAT&&(V=n.RGBA32F),P===n.HALF_FLOAT&&(V=n.RGBA16F),P===n.UNSIGNED_BYTE&&(V=dt===Le?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function T(S,v){let P;return S?v===null||v===yo||v===za?P=n.DEPTH24_STENCIL8:v===fs?P=n.DEPTH32F_STENCIL8:v===Cl&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yo||v===za?P=n.DEPTH_COMPONENT24:v===fs?P=n.DEPTH_COMPONENT32F:v===Cl&&(P=n.DEPTH_COMPONENT16),P}function A(S,v){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==Qn&&S.minFilter!==pi?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function F(S){const v=S.target;v.removeEventListener("dispose",F),L(v),v.isVideoTexture&&d.delete(v)}function D(S){const v=S.target;v.removeEventListener("dispose",D),J(v)}function L(S){const v=i.get(S);if(v.__webglInit===void 0)return;const P=S.source,G=f.get(P);if(G){const z=G[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&k(S),Object.keys(G).length===0&&f.delete(P)}i.remove(S)}function k(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const P=S.source,G=f.get(P);delete G[v.__cacheKey],o.memory.textures--}function J(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let z=0;z<v.__webglFramebuffer[G].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[G][z]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=S.textures;for(let G=0,z=P.length;G<z;G++){const V=i.get(P[G]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(P[G])}i.remove(S)}let y=0;function E(){y=0}function O(){const S=y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),y+=1,S}function W(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function tt(S,v){const P=i.get(S);if(S.isVideoTexture&&Y(S),S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){const G=S.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(P,S,v);return}}e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+v)}function ct(S,v){const P=i.get(S);if(S.version>0&&P.__version!==S.version){ue(P,S,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+v)}function Z(S,v){const P=i.get(S);if(S.version>0&&P.__version!==S.version){ue(P,S,v);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+v)}function it(S,v){const P=i.get(S);if(S.version>0&&P.__version!==S.version){at(P,S,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+v)}const q={[Pm]:n.REPEAT,[Ur]:n.CLAMP_TO_EDGE,[Lm]:n.MIRRORED_REPEAT},Et={[Qn]:n.NEAREST,[jb]:n.NEAREST_MIPMAP_NEAREST,[nd]:n.NEAREST_MIPMAP_LINEAR,[pi]:n.LINEAR,[Ep]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},wt={[Qb]:n.NEVER,[rE]:n.ALWAYS,[tE]:n.LESS,[$x]:n.LEQUAL,[eE]:n.EQUAL,[sE]:n.GEQUAL,[nE]:n.GREATER,[iE]:n.NOTEQUAL};function Dt(S,v){if(v.type===fs&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===pi||v.magFilter===Ep||v.magFilter===nd||v.magFilter===Nr||v.minFilter===pi||v.minFilter===Ep||v.minFilter===nd||v.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,q[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,q[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,q[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Et[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Et[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,wt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Qn||v.minFilter!==nd&&v.minFilter!==Nr||v.type===fs&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(S,v){let P=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",F));const G=v.source;let z=f.get(G);z===void 0&&(z={},f.set(G,z));const V=W(v);if(V!==S.__cacheKey){z[V]===void 0&&(z[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),z[V].usedTimes++;const dt=z[S.__cacheKey];dt!==void 0&&(z[S.__cacheKey].usedTimes--,dt.usedTimes===0&&k(v)),S.__cacheKey=V,S.__webglTexture=z[V].texture}return P}function ue(S,v,P){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const z=Zt(S,v),V=v.source;e.bindTexture(G,S.__webglTexture,n.TEXTURE0+P);const dt=i.get(V);if(V.version!==dt.__version||z===!0){e.activeTexture(n.TEXTURE0+P);const lt=Ee.getPrimaries(Ee.workingColorSpace),mt=v.colorSpace===Ls?null:Ee.getPrimaries(v.colorSpace),Ut=v.colorSpace===Ls||lt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let ft=x(v.image,!1,s.maxTextureSize);ft=st(v,ft);const yt=r.convert(v.format,v.colorSpace),zt=r.convert(v.type);let Ft=R(v.internalFormat,yt,zt,v.colorSpace,v.isVideoTexture);Dt(G,v);let At;const ie=v.mipmaps,Ht=v.isVideoTexture!==!0,se=dt.__version===void 0||z===!0,U=V.dataReady,Pt=A(v,ft);if(v.isDepthTexture)Ft=T(v.format===Ha,v.type),se&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,Ft,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Ft,ft.width,ft.height,0,yt,zt,null));else if(v.isDataTexture)if(ie.length>0){Ht&&se&&e.texStorage2D(n.TEXTURE_2D,Pt,Ft,ie[0].width,ie[0].height);for(let et=0,ut=ie.length;et<ut;et++)At=ie[et],Ht?U&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,At.width,At.height,yt,zt,At.data):e.texImage2D(n.TEXTURE_2D,et,Ft,At.width,At.height,0,yt,zt,At.data);v.generateMipmaps=!1}else Ht?(se&&e.texStorage2D(n.TEXTURE_2D,Pt,Ft,ft.width,ft.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,yt,zt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,Ft,ft.width,ft.height,0,yt,zt,ft.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Ft,ie[0].width,ie[0].height,ft.depth);for(let et=0,ut=ie.length;et<ut;et++)if(At=ie[et],v.format!==vi)if(yt!==null)if(Ht){if(U)if(v.layerUpdates.size>0){const Ct=Jv(At.width,At.height,v.format,v.type);for(const Lt of v.layerUpdates){const le=At.data.subarray(Lt*Ct/At.data.BYTES_PER_ELEMENT,(Lt+1)*Ct/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,Lt,At.width,At.height,1,yt,le,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,At.width,At.height,ft.depth,yt,At.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Ft,At.width,At.height,ft.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,At.width,At.height,ft.depth,yt,zt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Ft,At.width,At.height,ft.depth,0,yt,zt,At.data)}else{Ht&&se&&e.texStorage2D(n.TEXTURE_2D,Pt,Ft,ie[0].width,ie[0].height);for(let et=0,ut=ie.length;et<ut;et++)At=ie[et],v.format!==vi?yt!==null?Ht?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,At.width,At.height,yt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Ft,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?U&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,At.width,At.height,yt,zt,At.data):e.texImage2D(n.TEXTURE_2D,et,Ft,At.width,At.height,0,yt,zt,At.data)}else if(v.isDataArrayTexture)if(Ht){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Ft,ft.width,ft.height,ft.depth),U)if(v.layerUpdates.size>0){const et=Jv(ft.width,ft.height,v.format,v.type);for(const ut of v.layerUpdates){const Ct=ft.data.subarray(ut*et/ft.data.BYTES_PER_ELEMENT,(ut+1)*et/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,ft.width,ft.height,1,yt,zt,Ct)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,yt,zt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,ft.width,ft.height,ft.depth,0,yt,zt,ft.data);else if(v.isData3DTexture)Ht?(se&&e.texStorage3D(n.TEXTURE_3D,Pt,Ft,ft.width,ft.height,ft.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,yt,zt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,ft.width,ft.height,ft.depth,0,yt,zt,ft.data);else if(v.isFramebufferTexture){if(se)if(Ht)e.texStorage2D(n.TEXTURE_2D,Pt,Ft,ft.width,ft.height);else{let et=ft.width,ut=ft.height;for(let Ct=0;Ct<Pt;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,Ft,et,ut,0,yt,zt,null),et>>=1,ut>>=1}}else if(ie.length>0){if(Ht&&se){const et=rt(ie[0]);e.texStorage2D(n.TEXTURE_2D,Pt,Ft,et.width,et.height)}for(let et=0,ut=ie.length;et<ut;et++)At=ie[et],Ht?U&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,yt,zt,At):e.texImage2D(n.TEXTURE_2D,et,Ft,yt,zt,At);v.generateMipmaps=!1}else if(Ht){if(se){const et=rt(ft);e.texStorage2D(n.TEXTURE_2D,Pt,Ft,et.width,et.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,zt,ft)}else e.texImage2D(n.TEXTURE_2D,0,Ft,yt,zt,ft);g(v)&&m(G),dt.__version=V.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function at(S,v,P){if(v.image.length!==6)return;const G=Zt(S,v),z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+P);const V=i.get(z);if(z.version!==V.__version||G===!0){e.activeTexture(n.TEXTURE0+P);const dt=Ee.getPrimaries(Ee.workingColorSpace),lt=v.colorSpace===Ls?null:Ee.getPrimaries(v.colorSpace),mt=v.colorSpace===Ls||dt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Ut=v.isCompressedTexture||v.image[0].isCompressedTexture,ft=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let ut=0;ut<6;ut++)!Ut&&!ft?yt[ut]=x(v.image[ut],!0,s.maxCubemapSize):yt[ut]=ft?v.image[ut].image:v.image[ut],yt[ut]=st(v,yt[ut]);const zt=yt[0],Ft=r.convert(v.format,v.colorSpace),At=r.convert(v.type),ie=R(v.internalFormat,Ft,At,v.colorSpace),Ht=v.isVideoTexture!==!0,se=V.__version===void 0||G===!0,U=z.dataReady;let Pt=A(v,zt);Dt(n.TEXTURE_CUBE_MAP,v);let et;if(Ut){Ht&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ie,zt.width,zt.height);for(let ut=0;ut<6;ut++){et=yt[ut].mipmaps;for(let Ct=0;Ct<et.length;Ct++){const Lt=et[Ct];v.format!==vi?Ft!==null?Ht?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct,0,0,Lt.width,Lt.height,Ft,Lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct,ie,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct,0,0,Lt.width,Lt.height,Ft,At,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct,ie,Lt.width,Lt.height,0,Ft,At,Lt.data)}}}else{if(et=v.mipmaps,Ht&&se){et.length>0&&Pt++;const ut=rt(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ie,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(ft){Ht?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,yt[ut].width,yt[ut].height,Ft,At,yt[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ie,yt[ut].width,yt[ut].height,0,Ft,At,yt[ut].data);for(let Ct=0;Ct<et.length;Ct++){const le=et[Ct].image[ut].image;Ht?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct+1,0,0,le.width,le.height,Ft,At,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct+1,ie,le.width,le.height,0,Ft,At,le.data)}}else{Ht?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ft,At,yt[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ie,Ft,At,yt[ut]);for(let Ct=0;Ct<et.length;Ct++){const Lt=et[Ct];Ht?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct+1,0,0,Ft,At,Lt.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct+1,ie,Ft,At,Lt.image[ut])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),V.__version=z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function gt(S,v,P,G,z,V){const dt=r.convert(P.format,P.colorSpace),lt=r.convert(P.type),mt=R(P.internalFormat,dt,lt,P.colorSpace);if(!i.get(v).__hasExternalTextures){const ft=Math.max(1,v.width>>V),yt=Math.max(1,v.height>>V);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,V,mt,ft,yt,v.depth,0,dt,lt,null):e.texImage2D(z,V,mt,ft,yt,0,dt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),nt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,z,i.get(P).__webglTexture,0,H(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,z,i.get(P).__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(S,v,P){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const G=v.depthTexture,z=G&&G.isDepthTexture?G.type:null,V=T(v.stencilBuffer,z),dt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=H(v);nt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,V,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,S)}else{const G=v.textures;for(let z=0;z<G.length;z++){const V=G[z],dt=r.convert(V.format,V.colorSpace),lt=r.convert(V.type),mt=R(V.internalFormat,dt,lt,V.colorSpace),Ut=H(v);P&&nt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,mt,v.width,v.height):nt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,mt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),tt(v.depthTexture,0);const G=i.get(v.depthTexture).__webglTexture,z=H(v);if(v.depthTexture.format===Qo)nt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(v.depthTexture.format===Ha)nt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Yt(S){const v=i.get(S),P=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const G=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",z)};G.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=G}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,S)}else if(P){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),It(v.__webglDepthbuffer[G],S,!1);else{const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),It(v.__webglDepthbuffer,S,!1);else{const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(S,v,P){const G=i.get(S);v!==void 0&&gt(G.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Yt(S)}function te(S){const v=S.texture,P=i.get(S),G=i.get(v);S.addEventListener("dispose",D);const z=S.textures,V=S.isWebGLCubeRenderTarget===!0,dt=z.length>1;if(dt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),V){P.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[lt]=[];for(let mt=0;mt<v.mipmaps.length;mt++)P.__webglFramebuffer[lt][mt]=n.createFramebuffer()}else P.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)P.__webglFramebuffer[lt]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(dt)for(let lt=0,mt=z.length;lt<mt;lt++){const Ut=i.get(z[lt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&nt(S)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let lt=0;lt<z.length;lt++){const mt=z[lt];P.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[lt]);const Ut=r.convert(mt.format,mt.colorSpace),ft=r.convert(mt.type),yt=R(mt.internalFormat,Ut,ft,mt.colorSpace,S.isXRRenderTarget===!0),zt=H(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,yt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,P.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),It(P.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)gt(P.__webglFramebuffer[lt][mt],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else gt(P.__webglFramebuffer[lt],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let lt=0,mt=z.length;lt<mt;lt++){const Ut=z[lt],ft=i.get(Ut);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),Dt(n.TEXTURE_2D,Ut),gt(P.__webglFramebuffer,S,Ut,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),g(Ut)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(lt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,G.__webglTexture),Dt(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)gt(P.__webglFramebuffer[mt],S,v,n.COLOR_ATTACHMENT0,lt,mt);else gt(P.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,lt,0);g(v)&&m(lt),e.unbindTexture()}S.depthBuffer&&Yt(S)}function fe(S){const v=S.textures;for(let P=0,G=v.length;P<G;P++){const z=v[P];if(g(z)){const V=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,dt=i.get(z).__webglTexture;e.bindTexture(V,dt),m(V),e.unbindTexture()}}}const oe=[],M=[];function I(S){if(S.samples>0){if(nt(S)===!1){const v=S.textures,P=S.width,G=S.height;let z=n.COLOR_BUFFER_BIT;const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(S),lt=v.length>1;if(lt)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);const Ut=i.get(v[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,P,G,0,0,P,G,z,n.NEAREST),l===!0&&(oe.length=0,M.length=0,oe.push(n.COLOR_ATTACHMENT0+mt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(oe.push(V),M.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);const Ut=i.get(v[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function H(S){return Math.min(s.maxSamples,S.samples)}function nt(S){const v=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Y(S){const v=o.render.frame;d.get(S)!==v&&(d.set(S,v),S.update())}function st(S,v){const P=S.colorSpace,G=S.format,z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||P!==hr&&P!==Ls&&(Ee.getTransfer(P)===Le?(G!==vi||z!==gs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function rt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(u.width=S.naturalWidth||S.width,u.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(u.width=S.displayWidth,u.height=S.displayHeight):(u.width=S.width,u.height=S.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=E,this.setTexture2D=tt,this.setTexture2DArray=ct,this.setTexture3D=Z,this.setTextureCube=it,this.rebindTextures=Xt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=nt}function uC(n,t){function e(i,s=Ls){let r;const o=Ee.getTransfer(s);if(i===gs)return n.UNSIGNED_BYTE;if(i===jg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ux)return n.BYTE;if(i===Nx)return n.SHORT;if(i===Cl)return n.UNSIGNED_SHORT;if(i===Yg)return n.INT;if(i===yo)return n.UNSIGNED_INT;if(i===fs)return n.FLOAT;if(i===Hu)return n.HALF_FLOAT;if(i===Ox)return n.ALPHA;if(i===Bx)return n.RGB;if(i===vi)return n.RGBA;if(i===kx)return n.LUMINANCE;if(i===Vx)return n.LUMINANCE_ALPHA;if(i===Qo)return n.DEPTH_COMPONENT;if(i===Ha)return n.DEPTH_STENCIL;if(i===zx)return n.RED;if(i===Zg)return n.RED_INTEGER;if(i===Hx)return n.RG;if(i===Jg)return n.RG_INTEGER;if(i===Qg)return n.RGBA_INTEGER;if(i===Ud||i===Nd||i===Fd||i===Od)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ud)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nd)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fd)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Od)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ud)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nd)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fd)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Od)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dm||i===Im||i===Um||i===Nm)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Dm)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Im)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Um)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nm)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fm||i===Om||i===Bm)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fm||i===Om)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===km||i===Vm||i===zm||i===Hm||i===Gm||i===Wm||i===$m||i===Xm||i===qm||i===Ym||i===jm||i===Km||i===Zm||i===Jm)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===km)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$m)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ym)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Km)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jm)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bd||i===Qm||i===tg)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Bd)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qm)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tg)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gx||i===eg||i===ng||i===ig)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Bd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===eg)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ng)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ig)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===za?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class dC extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dl extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hC={type:"move"};class tm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),m=this._getHandJoint(u,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hC)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new dl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const fC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new In,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new or({vertexShader:fC,fragmentShader:pC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bi(new sp(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gC extends ja{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,d=null,h=null,f=null,p=null,_=null;const x=new mC,g=e.getContextAttributes();let m=null,R=null;const T=[],A=[],F=new Me;let D=null;const L=new Zn;L.layers.enable(1),L.viewport=new He;const k=new Zn;k.layers.enable(2),k.viewport=new He;const J=[L,k],y=new dC;y.layers.enable(1),y.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=T[at];return gt===void 0&&(gt=new tm,T[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=T[at];return gt===void 0&&(gt=new tm,T[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=T[at];return gt===void 0&&(gt=new tm,T[at]=gt),gt.getHandSpace()};function W(at){const gt=A.indexOf(at.inputSource);if(gt===-1)return;const It=T[gt];It!==void 0&&(It.update(at.inputSource,at.frame,u||o),It.dispatchEvent({type:at.type,data:at.inputSource}))}function tt(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",ct);for(let at=0;at<T.length;at++){const gt=A[at];gt!==null&&(A[at]=null,T[at].disconnect(gt))}E=null,O=null,x.reset(),t.setRenderTarget(m),p=null,f=null,h=null,s=null,R=null,ue.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(at){u=at},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",ct),g.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const gt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new So(p.framebufferWidth,p.framebufferHeight,{format:vi,type:gs,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let gt=null,It=null,Tt=null;g.depth&&(Tt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=g.stencil?Ha:Qo,It=g.stencil?za:yo);const Yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new So(f.textureWidth,f.textureHeight,{format:vi,type:gs,depthTexture:new iM(f.textureWidth,f.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ct(at){for(let gt=0;gt<at.removed.length;gt++){const It=at.removed[gt],Tt=A.indexOf(It);Tt>=0&&(A[Tt]=null,T[Tt].disconnect(It))}for(let gt=0;gt<at.added.length;gt++){const It=at.added[gt];let Tt=A.indexOf(It);if(Tt===-1){for(let Xt=0;Xt<T.length;Xt++)if(Xt>=A.length){A.push(It),Tt=Xt;break}else if(A[Xt]===null){A[Xt]=It,Tt=Xt;break}if(Tt===-1)break}const Yt=T[Tt];Yt&&Yt.connect(It)}}const Z=new $,it=new $;function q(at,gt,It){Z.setFromMatrixPosition(gt.matrixWorld),it.setFromMatrixPosition(It.matrixWorld);const Tt=Z.distanceTo(it),Yt=gt.projectionMatrix.elements,Xt=It.projectionMatrix.elements,te=Yt[14]/(Yt[10]-1),fe=Yt[14]/(Yt[10]+1),oe=(Yt[9]+1)/Yt[5],M=(Yt[9]-1)/Yt[5],I=(Yt[8]-1)/Yt[0],H=(Xt[8]+1)/Xt[0],nt=te*I,Y=te*H,st=Tt/(-I+H),rt=st*-I;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(rt),at.translateZ(st),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Yt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const S=te+st,v=fe+st,P=nt-rt,G=Y+(Tt-rt),z=oe*fe/v*S,V=M*fe/v*S;at.projectionMatrix.makePerspective(P,G,z,V,S,v),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Et(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let gt=at.near,It=at.far;x.texture!==null&&(x.depthNear>0&&(gt=x.depthNear),x.depthFar>0&&(It=x.depthFar)),y.near=k.near=L.near=gt,y.far=k.far=L.far=It,(E!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,O=y.far);const Tt=at.parent,Yt=y.cameras;Et(y,Tt);for(let Xt=0;Xt<Yt.length;Xt++)Et(Yt[Xt],Tt);Yt.length===2?q(y,L,k):y.projectionMatrix.copy(L.projectionMatrix),wt(at,y,Tt)};function wt(at,gt,It){It===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(It.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=sg*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(at){l=at,f!==null&&(f.fixedFoveation=at),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=at)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Dt=null;function Zt(at,gt){if(d=gt.getViewerPose(u||o),_=gt,d!==null){const It=d.views;p!==null&&(t.setRenderTargetFramebuffer(R,p.framebuffer),t.setRenderTarget(R));let Tt=!1;It.length!==y.cameras.length&&(y.cameras.length=0,Tt=!0);for(let Xt=0;Xt<It.length;Xt++){const te=It[Xt];let fe=null;if(p!==null)fe=p.getViewport(te);else{const M=h.getViewSubImage(f,te);fe=M.viewport,Xt===0&&(t.setRenderTargetTextures(R,M.colorTexture,f.ignoreDepthValues?void 0:M.depthStencilTexture),t.setRenderTarget(R))}let oe=J[Xt];oe===void 0&&(oe=new Zn,oe.layers.enable(Xt),oe.viewport=new He,J[Xt]=oe),oe.matrix.fromArray(te.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(te.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(fe.x,fe.y,fe.width,fe.height),Xt===0&&(y.matrix.copy(oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Tt===!0&&y.cameras.push(oe)}const Yt=s.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")){const Xt=h.getDepthInformation(It[0]);Xt&&Xt.isValid&&Xt.texture&&x.init(t,Xt,s.renderState)}}for(let It=0;It<T.length;It++){const Tt=A[It],Yt=T[It];Tt!==null&&Yt!==void 0&&Yt.update(Tt,gt,u||o)}Dt&&Dt(at,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),_=null}const ue=new eM;ue.setAnimationLoop(Zt),this.setAnimationLoop=function(at){Dt=at},this.dispose=function(){}}}const br=new Gi,_C=new Fe;function vC(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Jx(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,R,T,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,A)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,R,T):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const R=t.get(m),T=R.envMap,A=R.envMapRotation;T&&(g.envMap.value=T,br.copy(A),br.x*=-1,br.y*=-1,br.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),g.envMapRotation.value.setFromMatrix4(_C.makeRotationFromEuler(br)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,R,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*R,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,R){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const R=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xC(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const A=T.program;i.uniformBlockBinding(R,A)}function u(R,T){let A=s[R.id];A===void 0&&(_(R),A=d(R),s[R.id]=A,R.addEventListener("dispose",g));const F=T.program;i.updateUBOMapping(R,F);const D=t.render.frame;r[R.id]!==D&&(f(R),r[R.id]=D)}function d(R){const T=h();R.__bindingPointIndex=T;const A=n.createBuffer(),F=R.__size,D=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,F,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,A),A}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const T=s[R.id],A=R.uniforms,F=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,L=A.length;D<L;D++){const k=Array.isArray(A[D])?A[D]:[A[D]];for(let J=0,y=k.length;J<y;J++){const E=k[J];if(p(E,D,J,F)===!0){const O=E.__offset,W=Array.isArray(E.value)?E.value:[E.value];let tt=0;for(let ct=0;ct<W.length;ct++){const Z=W[ct],it=x(Z);typeof Z=="number"||typeof Z=="boolean"?(E.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,O+tt,E.__data)):Z.isMatrix3?(E.__data[0]=Z.elements[0],E.__data[1]=Z.elements[1],E.__data[2]=Z.elements[2],E.__data[3]=0,E.__data[4]=Z.elements[3],E.__data[5]=Z.elements[4],E.__data[6]=Z.elements[5],E.__data[7]=0,E.__data[8]=Z.elements[6],E.__data[9]=Z.elements[7],E.__data[10]=Z.elements[8],E.__data[11]=0):(Z.toArray(E.__data,tt),tt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(R,T,A,F){const D=R.value,L=T+"_"+A;if(F[L]===void 0)return typeof D=="number"||typeof D=="boolean"?F[L]=D:F[L]=D.clone(),!0;{const k=F[L];if(typeof D=="number"||typeof D=="boolean"){if(k!==D)return F[L]=D,!0}else if(k.equals(D)===!1)return k.copy(D),!0}return!1}function _(R){const T=R.uniforms;let A=0;const F=16;for(let L=0,k=T.length;L<k;L++){const J=Array.isArray(T[L])?T[L]:[T[L]];for(let y=0,E=J.length;y<E;y++){const O=J[y],W=Array.isArray(O.value)?O.value:[O.value];for(let tt=0,ct=W.length;tt<ct;tt++){const Z=W[tt],it=x(Z),q=A%F,Et=q%it.boundary,wt=q+Et;A+=Et,wt!==0&&F-wt<it.storage&&(A+=F-wt),O.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=A,A+=it.storage}}}const D=A%F;return D>0&&(A+=F-D),R.__size=A,R.__cache={},this}function x(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function g(R){const T=R.target;T.removeEventListener("dispose",g);const A=o.indexOf(T.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:u,dispose:m}}class MC{constructor(t={}){const{canvas:e=aE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const m=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ri,this.toneMapping=er,this.toneMappingExposure=1;const T=this;let A=!1,F=0,D=0,L=null,k=-1,J=null;const y=new He,E=new He;let O=null;const W=new ae(0);let tt=0,ct=e.width,Z=e.height,it=1,q=null,Et=null;const wt=new He(0,0,ct,Z),Dt=new He(0,0,ct,Z);let Zt=!1;const ue=new i_;let at=!1,gt=!1;const It=new Fe,Tt=new Fe,Yt=new $,Xt=new He,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function oe(){return L===null?it:1}let M=i;function I(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xg}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),M===null){const N="webgl2";if(M=I(N,w),M===null)throw I(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let H,nt,Y,st,rt,S,v,P,G,z,V,dt,lt,mt,Ut,ft,yt,zt,Ft,At,ie,Ht,se,U;function Pt(){H=new wT(M),H.init(),Ht=new uC(M,H),nt=new xT(M,H,t,Ht),Y=new aC(M),nt.reverseDepthBuffer&&Y.buffers.depth.setReversed(!0),st=new CT(M),rt=new XA,S=new cC(M,H,Y,rt,nt,Ht,st),v=new yT(T),P=new ET(T),G=new NE(M),se=new _T(M,G),z=new TT(M,G,st,se),V=new PT(M,z,G,st),Ft=new RT(M,nt,S),ft=new MT(rt),dt=new $A(T,v,P,H,nt,se,ft),lt=new vC(T,rt),mt=new YA,Ut=new tC(H),zt=new gT(T,v,P,Y,V,f,l),yt=new rC(T,V,nt),U=new xC(M,st,nt,Y),At=new vT(M,H,st),ie=new AT(M,H,st),st.programs=dt.programs,T.capabilities=nt,T.extensions=H,T.properties=rt,T.renderLists=mt,T.shadowMap=yt,T.state=Y,T.info=st}Pt();const et=new gC(T,M);this.xr=et,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const w=H.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=H.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(ct,Z,!1))},this.getSize=function(w){return w.set(ct,Z)},this.setSize=function(w,N,j=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=w,Z=N,e.width=Math.floor(w*it),e.height=Math.floor(N*it),j===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(ct*it,Z*it).floor()},this.setDrawingBufferSize=function(w,N,j){ct=w,Z=N,it=j,e.width=Math.floor(w*j),e.height=Math.floor(N*j),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,N,j,K){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,N,j,K),Y.viewport(y.copy(wt).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,N,j,K){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,N,j,K),Y.scissor(E.copy(Dt).multiplyScalar(it).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(w){Y.setScissorTest(Zt=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){Et=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,N=!0,j=!0){let K=0;if(w){let B=!1;if(L!==null){const Mt=L.texture.format;B=Mt===Qg||Mt===Jg||Mt===Zg}if(B){const Mt=L.texture.type,Rt=Mt===gs||Mt===yo||Mt===Cl||Mt===za||Mt===jg||Mt===Kg,Nt=zt.getClearColor(),Ot=zt.getClearAlpha(),qt=Nt.r,jt=Nt.g,Gt=Nt.b;Rt?(p[0]=qt,p[1]=jt,p[2]=Gt,p[3]=Ot,M.clearBufferuiv(M.COLOR,0,p)):(_[0]=qt,_[1]=jt,_[2]=Gt,_[3]=Ot,M.clearBufferiv(M.COLOR,0,_))}else K|=M.COLOR_BUFFER_BIT}N&&(K|=M.DEPTH_BUFFER_BIT,M.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(K|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),mt.dispose(),Ut.dispose(),rt.dispose(),v.dispose(),P.dispose(),V.dispose(),se.dispose(),U.dispose(),dt.dispose(),et.dispose(),et.removeEventListener("sessionstart",d_),et.removeEventListener("sessionend",h_),fr.stop()};function ut(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=st.autoReset,N=yt.enabled,j=yt.autoUpdate,K=yt.needsUpdate,B=yt.type;Pt(),st.autoReset=w,yt.enabled=N,yt.autoUpdate=j,yt.needsUpdate=K,yt.type=B}function Lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const N=w.target;N.removeEventListener("dispose",le),Xe(N)}function Xe(w){En(w),rt.remove(w)}function En(w){const N=rt.get(w).programs;N!==void 0&&(N.forEach(function(j){dt.releaseProgram(j)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,j,K,B,Mt){N===null&&(N=te);const Rt=B.isMesh&&B.matrixWorld.determinant()<0,Nt=LM(w,N,j,K,B);Y.setMaterial(K,Rt);let Ot=j.index,qt=1;if(K.wireframe===!0){if(Ot=z.getWireframeAttribute(j),Ot===void 0)return;qt=2}const jt=j.drawRange,Gt=j.attributes.position;let Te=jt.start*qt,Pe=(jt.start+jt.count)*qt;Mt!==null&&(Te=Math.max(Te,Mt.start*qt),Pe=Math.min(Pe,(Mt.start+Mt.count)*qt)),Ot!==null?(Te=Math.max(Te,0),Pe=Math.min(Pe,Ot.count)):Gt!=null&&(Te=Math.max(Te,0),Pe=Math.min(Pe,Gt.count));const ke=Pe-Te;if(ke<0||ke===1/0)return;se.setup(B,K,Nt,j,Ot);let Un,ye=At;if(Ot!==null&&(Un=G.get(Ot),ye=ie,ye.setIndex(Un)),B.isMesh)K.wireframe===!0?(Y.setLineWidth(K.wireframeLinewidth*oe()),ye.setMode(M.LINES)):ye.setMode(M.TRIANGLES);else if(B.isLine){let Wt=K.linewidth;Wt===void 0&&(Wt=1),Y.setLineWidth(Wt*oe()),B.isLineSegments?ye.setMode(M.LINES):B.isLineLoop?ye.setMode(M.LINE_LOOP):ye.setMode(M.LINE_STRIP)}else B.isPoints?ye.setMode(M.POINTS):B.isSprite&&ye.setMode(M.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ye.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))ye.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Wt=B._multiDrawStarts,sn=B._multiDrawCounts,Se=B._multiDrawCount,si=Ot?G.get(Ot).bytesPerElement:1,To=rt.get(K).currentProgram.getUniforms();for(let Nn=0;Nn<Se;Nn++)To.setValue(M,"_gl_DrawID",Nn),ye.render(Wt[Nn]/si,sn[Nn])}else if(B.isInstancedMesh)ye.renderInstances(Te,ke,B.count);else if(j.isInstancedBufferGeometry){const Wt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,sn=Math.min(j.instanceCount,Wt);ye.renderInstances(Te,ke,sn)}else ye.render(Te,ke)};function pe(w,N,j){w.transparent===!0&&w.side===hs&&w.forceSinglePass===!1?(w.side=Dn,w.needsUpdate=!0,ju(w,N,j),w.side=rr,w.needsUpdate=!0,ju(w,N,j),w.side=hs):ju(w,N,j)}this.compile=function(w,N,j=null){j===null&&(j=w),g=Ut.get(j),g.init(N),R.push(g),j.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),w!==j&&w.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const K=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const Mt=B.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){const Nt=Mt[Rt];pe(Nt,j,B),K.add(Nt)}else pe(Mt,j,B),K.add(Mt)}),R.pop(),g=null,K},this.compileAsync=function(w,N,j=null){const K=this.compile(w,N,j);return new Promise(B=>{function Mt(){if(K.forEach(function(Rt){rt.get(Rt).currentProgram.isReady()&&K.delete(Rt)}),K.size===0){B(w);return}setTimeout(Mt,10)}H.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let wn=null;function $i(w){wn&&wn(w)}function d_(){fr.stop()}function h_(){fr.start()}const fr=new eM;fr.setAnimationLoop($i),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(w){wn=w,et.setAnimationLoop(w),w===null?fr.stop():fr.start()},et.addEventListener("sessionstart",d_),et.addEventListener("sessionend",h_),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(N),N=et.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,N,L),g=Ut.get(w,R.length),g.init(N),R.push(g),Tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ue.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,at=ft.init(this.clippingPlanes,gt),x=mt.get(w,m.length),x.init(),m.push(x),et.enabled===!0&&et.isPresenting===!0){const Mt=T.xr.getDepthSensingMesh();Mt!==null&&ap(Mt,N,-1/0,T.sortObjects)}ap(w,N,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(q,Et),fe=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,fe&&zt.addToRenderList(x,w),this.info.render.frame++,at===!0&&ft.beginShadows();const j=g.state.shadowsArray;yt.render(j,w,N),at===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,B=x.transmissive;if(g.setupLights(),N.isArrayCamera){const Mt=N.cameras;if(B.length>0)for(let Rt=0,Nt=Mt.length;Rt<Nt;Rt++){const Ot=Mt[Rt];p_(K,B,w,Ot)}fe&&zt.render(w);for(let Rt=0,Nt=Mt.length;Rt<Nt;Rt++){const Ot=Mt[Rt];f_(x,w,Ot,Ot.viewport)}}else B.length>0&&p_(K,B,w,N),fe&&zt.render(w),f_(x,w,N);L!==null&&(S.updateMultisampleRenderTarget(L),S.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(T,w,N),se.resetDefaultState(),k=-1,J=null,R.pop(),R.length>0?(g=R[R.length-1],at===!0&&ft.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function ap(w,N,j,K){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ue.intersectsSprite(w)){K&&Xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);const Rt=V.update(w),Nt=w.material;Nt.visible&&x.push(w,Rt,Nt,j,Xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ue.intersectsObject(w))){const Rt=V.update(w),Nt=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xt.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Xt.copy(Rt.boundingSphere.center)),Xt.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(Nt)){const Ot=Rt.groups;for(let qt=0,jt=Ot.length;qt<jt;qt++){const Gt=Ot[qt],Te=Nt[Gt.materialIndex];Te&&Te.visible&&x.push(w,Rt,Te,j,Xt.z,Gt)}}else Nt.visible&&x.push(w,Rt,Nt,j,Xt.z,null)}}const Mt=w.children;for(let Rt=0,Nt=Mt.length;Rt<Nt;Rt++)ap(Mt[Rt],N,j,K)}function f_(w,N,j,K){const B=w.opaque,Mt=w.transmissive,Rt=w.transparent;g.setupLightsView(j),at===!0&&ft.setGlobalState(T.clippingPlanes,j),K&&Y.viewport(y.copy(K)),B.length>0&&Yu(B,N,j),Mt.length>0&&Yu(Mt,N,j),Rt.length>0&&Yu(Rt,N,j),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function p_(w,N,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new So(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?Hu:gs,minFilter:Nr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Mt=g.state.transmissionRenderTarget[K.id],Rt=K.viewport||y;Mt.setSize(Rt.z,Rt.w);const Nt=T.getRenderTarget();T.setRenderTarget(Mt),T.getClearColor(W),tt=T.getClearAlpha(),tt<1&&T.setClearColor(16777215,.5),T.clear(),fe&&zt.render(j);const Ot=T.toneMapping;T.toneMapping=er;const qt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),at===!0&&ft.setGlobalState(T.clippingPlanes,K),Yu(w,j,K),S.updateMultisampleRenderTarget(Mt),S.updateRenderTargetMipmap(Mt),H.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Gt=0,Te=N.length;Gt<Te;Gt++){const Pe=N[Gt],ke=Pe.object,Un=Pe.geometry,ye=Pe.material,Wt=Pe.group;if(ye.side===hs&&ke.layers.test(K.layers)){const sn=ye.side;ye.side=Dn,ye.needsUpdate=!0,m_(ke,j,K,Un,ye,Wt),ye.side=sn,ye.needsUpdate=!0,jt=!0}}jt===!0&&(S.updateMultisampleRenderTarget(Mt),S.updateRenderTargetMipmap(Mt))}T.setRenderTarget(Nt),T.setClearColor(W,tt),qt!==void 0&&(K.viewport=qt),T.toneMapping=Ot}function Yu(w,N,j){const K=N.isScene===!0?N.overrideMaterial:null;for(let B=0,Mt=w.length;B<Mt;B++){const Rt=w[B],Nt=Rt.object,Ot=Rt.geometry,qt=K===null?Rt.material:K,jt=Rt.group;Nt.layers.test(j.layers)&&m_(Nt,N,j,Ot,qt,jt)}}function m_(w,N,j,K,B,Mt){w.onBeforeRender(T,N,j,K,B,Mt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(T,N,j,K,w,Mt),B.transparent===!0&&B.side===hs&&B.forceSinglePass===!1?(B.side=Dn,B.needsUpdate=!0,T.renderBufferDirect(j,N,K,B,w,Mt),B.side=rr,B.needsUpdate=!0,T.renderBufferDirect(j,N,K,B,w,Mt),B.side=hs):T.renderBufferDirect(j,N,K,B,w,Mt),w.onAfterRender(T,N,j,K,B,Mt)}function ju(w,N,j){N.isScene!==!0&&(N=te);const K=rt.get(w),B=g.state.lights,Mt=g.state.shadowsArray,Rt=B.state.version,Nt=dt.getParameters(w,B.state,Mt,N,j),Ot=dt.getProgramCacheKey(Nt);let qt=K.programs;K.environment=w.isMeshStandardMaterial?N.environment:null,K.fog=N.fog,K.envMap=(w.isMeshStandardMaterial?P:v).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,qt===void 0&&(w.addEventListener("dispose",le),qt=new Map,K.programs=qt);let jt=qt.get(Ot);if(jt!==void 0){if(K.currentProgram===jt&&K.lightsStateVersion===Rt)return __(w,Nt),jt}else Nt.uniforms=dt.getUniforms(w),w.onBeforeCompile(Nt,T),jt=dt.acquireProgram(Nt,Ot),qt.set(Ot,jt),K.uniforms=Nt.uniforms;const Gt=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=ft.uniform),__(w,Nt),K.needsLights=IM(w),K.lightsStateVersion=Rt,K.needsLights&&(Gt.ambientLightColor.value=B.state.ambient,Gt.lightProbe.value=B.state.probe,Gt.directionalLights.value=B.state.directional,Gt.directionalLightShadows.value=B.state.directionalShadow,Gt.spotLights.value=B.state.spot,Gt.spotLightShadows.value=B.state.spotShadow,Gt.rectAreaLights.value=B.state.rectArea,Gt.ltc_1.value=B.state.rectAreaLTC1,Gt.ltc_2.value=B.state.rectAreaLTC2,Gt.pointLights.value=B.state.point,Gt.pointLightShadows.value=B.state.pointShadow,Gt.hemisphereLights.value=B.state.hemi,Gt.directionalShadowMap.value=B.state.directionalShadowMap,Gt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Gt.spotShadowMap.value=B.state.spotShadowMap,Gt.spotLightMatrix.value=B.state.spotLightMatrix,Gt.spotLightMap.value=B.state.spotLightMap,Gt.pointShadowMap.value=B.state.pointShadowMap,Gt.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=jt,K.uniformsList=null,jt}function g_(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Vd.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function __(w,N){const j=rt.get(w);j.outputColorSpace=N.outputColorSpace,j.batching=N.batching,j.batchingColor=N.batchingColor,j.instancing=N.instancing,j.instancingColor=N.instancingColor,j.instancingMorph=N.instancingMorph,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function LM(w,N,j,K,B){N.isScene!==!0&&(N=te),S.resetTextureUnits();const Mt=N.fog,Rt=K.isMeshStandardMaterial?N.environment:null,Nt=L===null?T.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:hr,Ot=(K.isMeshStandardMaterial?P:v).get(K.envMap||Rt),qt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,jt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Gt=!!j.morphAttributes.position,Te=!!j.morphAttributes.normal,Pe=!!j.morphAttributes.color;let ke=er;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ke=T.toneMapping);const Un=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ye=Un!==void 0?Un.length:0,Wt=rt.get(K),sn=g.state.lights;if(at===!0&&(gt===!0||w!==J)){const Xn=w===J&&K.id===k;ft.setState(K,w,Xn)}let Se=!1;K.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==sn.state.version||Wt.outputColorSpace!==Nt||B.isBatchedMesh&&Wt.batching===!1||!B.isBatchedMesh&&Wt.batching===!0||B.isBatchedMesh&&Wt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Wt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Wt.instancing===!1||!B.isInstancedMesh&&Wt.instancing===!0||B.isSkinnedMesh&&Wt.skinning===!1||!B.isSkinnedMesh&&Wt.skinning===!0||B.isInstancedMesh&&Wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Wt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Wt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Wt.instancingMorph===!1&&B.morphTexture!==null||Wt.envMap!==Ot||K.fog===!0&&Wt.fog!==Mt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==ft.numPlanes||Wt.numIntersection!==ft.numIntersection)||Wt.vertexAlphas!==qt||Wt.vertexTangents!==jt||Wt.morphTargets!==Gt||Wt.morphNormals!==Te||Wt.morphColors!==Pe||Wt.toneMapping!==ke||Wt.morphTargetsCount!==ye)&&(Se=!0):(Se=!0,Wt.__version=K.version);let si=Wt.currentProgram;Se===!0&&(si=ju(K,N,B));let To=!1,Nn=!1,lp=!1;const Ge=si.getUniforms(),vs=Wt.uniforms;if(Y.useProgram(si.program)&&(To=!0,Nn=!0,lp=!0),K.id!==k&&(k=K.id,Nn=!0),To||J!==w){nt.reverseDepthBuffer?(It.copy(w.projectionMatrix),cE(It),uE(It),Ge.setValue(M,"projectionMatrix",It)):Ge.setValue(M,"projectionMatrix",w.projectionMatrix),Ge.setValue(M,"viewMatrix",w.matrixWorldInverse);const Xn=Ge.map.cameraPosition;Xn!==void 0&&Xn.setValue(M,Yt.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&Ge.setValue(M,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ge.setValue(M,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,Nn=!0,lp=!0)}if(B.isSkinnedMesh){Ge.setOptional(M,B,"bindMatrix"),Ge.setOptional(M,B,"bindMatrixInverse");const Xn=B.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Ge.setValue(M,"boneTexture",Xn.boneTexture,S))}B.isBatchedMesh&&(Ge.setOptional(M,B,"batchingTexture"),Ge.setValue(M,"batchingTexture",B._matricesTexture,S),Ge.setOptional(M,B,"batchingIdTexture"),Ge.setValue(M,"batchingIdTexture",B._indirectTexture,S),Ge.setOptional(M,B,"batchingColorTexture"),B._colorsTexture!==null&&Ge.setValue(M,"batchingColorTexture",B._colorsTexture,S));const cp=j.morphAttributes;if((cp.position!==void 0||cp.normal!==void 0||cp.color!==void 0)&&Ft.update(B,j,si),(Nn||Wt.receiveShadow!==B.receiveShadow)&&(Wt.receiveShadow=B.receiveShadow,Ge.setValue(M,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(vs.envMap.value=Ot,vs.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&N.environment!==null&&(vs.envMapIntensity.value=N.environmentIntensity),Nn&&(Ge.setValue(M,"toneMappingExposure",T.toneMappingExposure),Wt.needsLights&&DM(vs,lp),Mt&&K.fog===!0&&lt.refreshFogUniforms(vs,Mt),lt.refreshMaterialUniforms(vs,K,it,Z,g.state.transmissionRenderTarget[w.id]),Vd.upload(M,g_(Wt),vs,S)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Vd.upload(M,g_(Wt),vs,S),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ge.setValue(M,"center",B.center),Ge.setValue(M,"modelViewMatrix",B.modelViewMatrix),Ge.setValue(M,"normalMatrix",B.normalMatrix),Ge.setValue(M,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Xn=K.uniformsGroups;for(let up=0,UM=Xn.length;up<UM;up++){const v_=Xn[up];U.update(v_,si),U.bind(v_,si)}}return si}function DM(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function IM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,N,j){rt.get(w.texture).__webglTexture=N,rt.get(w.depthTexture).__webglTexture=j;const K=rt.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const j=rt.get(w);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,j=0){L=w,F=N,D=j;let K=!0,B=null,Mt=!1,Rt=!1;if(w){const Ot=rt.get(w);if(Ot.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(M.FRAMEBUFFER,null),K=!1;else if(Ot.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(Ot.__hasExternalTextures)S.rebindTextures(w,rt.get(w.texture).__webglTexture,rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Gt=w.depthTexture;if(Ot.__boundDepthTexture!==Gt){if(Gt!==null&&rt.has(Gt)&&(w.width!==Gt.image.width||w.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}const qt=w.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Rt=!0);const jt=rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(jt[N])?B=jt[N][j]:B=jt[N],Mt=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?B=rt.get(w).__webglMultisampledFramebuffer:Array.isArray(jt)?B=jt[j]:B=jt,y.copy(w.viewport),E.copy(w.scissor),O=w.scissorTest}else y.copy(wt).multiplyScalar(it).floor(),E.copy(Dt).multiplyScalar(it).floor(),O=Zt;if(Y.bindFramebuffer(M.FRAMEBUFFER,B)&&K&&Y.drawBuffers(w,B),Y.viewport(y),Y.scissor(E),Y.setScissorTest(O),Mt){const Ot=rt.get(w.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ot.__webglTexture,j)}else if(Rt){const Ot=rt.get(w.texture),qt=N||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ot.__webglTexture,j||0,qt)}k=-1},this.readRenderTargetPixels=function(w,N,j,K,B,Mt,Rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){Y.bindFramebuffer(M.FRAMEBUFFER,Nt);try{const Ot=w.texture,qt=Ot.format,jt=Ot.type;if(!nt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-K&&j>=0&&j<=w.height-B&&M.readPixels(N,j,K,B,Ht.convert(qt),Ht.convert(jt),Mt)}finally{const Ot=L!==null?rt.get(L).__webglFramebuffer:null;Y.bindFramebuffer(M.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(w,N,j,K,B,Mt,Rt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){const Ot=w.texture,qt=Ot.format,jt=Ot.type;if(!nt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-K&&j>=0&&j<=w.height-B){Y.bindFramebuffer(M.FRAMEBUFFER,Nt);const Gt=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Gt),M.bufferData(M.PIXEL_PACK_BUFFER,Mt.byteLength,M.STREAM_READ),M.readPixels(N,j,K,B,Ht.convert(qt),Ht.convert(jt),0);const Te=L!==null?rt.get(L).__webglFramebuffer:null;Y.bindFramebuffer(M.FRAMEBUFFER,Te);const Pe=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await lE(M,Pe,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Gt),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Mt),M.deleteBuffer(Gt),M.deleteSync(Pe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,j=0){w.isTexture!==!0&&(kd("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-j),B=Math.floor(w.image.width*K),Mt=Math.floor(w.image.height*K),Rt=N!==null?N.x:0,Nt=N!==null?N.y:0;S.setTexture2D(w,0),M.copyTexSubImage2D(M.TEXTURE_2D,j,0,0,Rt,Nt,B,Mt),Y.unbindTexture()},this.copyTextureToTexture=function(w,N,j=null,K=null,B=0){w.isTexture!==!0&&(kd("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],N=arguments[2],B=arguments[3]||0,j=null);let Mt,Rt,Nt,Ot,qt,jt;j!==null?(Mt=j.max.x-j.min.x,Rt=j.max.y-j.min.y,Nt=j.min.x,Ot=j.min.y):(Mt=w.image.width,Rt=w.image.height,Nt=0,Ot=0),K!==null?(qt=K.x,jt=K.y):(qt=0,jt=0);const Gt=Ht.convert(N.format),Te=Ht.convert(N.type);S.setTexture2D(N,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,N.unpackAlignment);const Pe=M.getParameter(M.UNPACK_ROW_LENGTH),ke=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Un=M.getParameter(M.UNPACK_SKIP_PIXELS),ye=M.getParameter(M.UNPACK_SKIP_ROWS),Wt=M.getParameter(M.UNPACK_SKIP_IMAGES),sn=w.isCompressedTexture?w.mipmaps[B]:w.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,sn.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,sn.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Nt),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ot),w.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,B,qt,jt,Mt,Rt,Gt,Te,sn.data):w.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,B,qt,jt,sn.width,sn.height,Gt,sn.data):M.texSubImage2D(M.TEXTURE_2D,B,qt,jt,Mt,Rt,Gt,Te,sn),M.pixelStorei(M.UNPACK_ROW_LENGTH,Pe),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ke),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Un),M.pixelStorei(M.UNPACK_SKIP_ROWS,ye),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Wt),B===0&&N.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(w,N,j=null,K=null,B=0){w.isTexture!==!0&&(kd("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,w=arguments[2],N=arguments[3],B=arguments[4]||0);let Mt,Rt,Nt,Ot,qt,jt,Gt,Te,Pe;const ke=w.isCompressedTexture?w.mipmaps[B]:w.image;j!==null?(Mt=j.max.x-j.min.x,Rt=j.max.y-j.min.y,Nt=j.max.z-j.min.z,Ot=j.min.x,qt=j.min.y,jt=j.min.z):(Mt=ke.width,Rt=ke.height,Nt=ke.depth,Ot=0,qt=0,jt=0),K!==null?(Gt=K.x,Te=K.y,Pe=K.z):(Gt=0,Te=0,Pe=0);const Un=Ht.convert(N.format),ye=Ht.convert(N.type);let Wt;if(N.isData3DTexture)S.setTexture3D(N,0),Wt=M.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)S.setTexture2DArray(N,0),Wt=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,N.unpackAlignment);const sn=M.getParameter(M.UNPACK_ROW_LENGTH),Se=M.getParameter(M.UNPACK_IMAGE_HEIGHT),si=M.getParameter(M.UNPACK_SKIP_PIXELS),To=M.getParameter(M.UNPACK_SKIP_ROWS),Nn=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,ke.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ke.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ot),M.pixelStorei(M.UNPACK_SKIP_ROWS,qt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,jt),w.isDataTexture||w.isData3DTexture?M.texSubImage3D(Wt,B,Gt,Te,Pe,Mt,Rt,Nt,Un,ye,ke.data):N.isCompressedArrayTexture?M.compressedTexSubImage3D(Wt,B,Gt,Te,Pe,Mt,Rt,Nt,Un,ke.data):M.texSubImage3D(Wt,B,Gt,Te,Pe,Mt,Rt,Nt,Un,ye,ke),M.pixelStorei(M.UNPACK_ROW_LENGTH,sn),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Se),M.pixelStorei(M.UNPACK_SKIP_PIXELS,si),M.pixelStorei(M.UNPACK_SKIP_ROWS,To),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Nn),B===0&&N.generateMipmaps&&M.generateMipmap(Wt),Y.unbindTexture()},this.initRenderTarget=function(w){rt.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),Y.unbindTexture()},this.resetState=function(){F=0,D=0,L=null,Y.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===t_?"display-p3":"srgb",e.unpackColorSpace=Ee.workingColorSpace===ep?"display-p3":"srgb"}}let yC=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};class zd extends wo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ch=new $,uh=new $,Qv=new Fe,rl=new e_,bd=new np,em=new $,t0=new $;class SC extends ln{constructor(t=new Wi,e=new zd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ch.fromBufferAttribute(e,s-1),uh.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ch.distanceTo(uh);t.setAttribute("lineDistance",new Mi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bd.copy(i.boundingSphere),bd.applyMatrix4(s),bd.radius+=r,t.ray.intersectsSphere(bd)===!1)return;Qv.copy(s).invert(),rl.copy(t.ray).applyMatrix4(Qv);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,g=_-1;x<g;x+=u){const m=d.getX(x),R=d.getX(x+1),T=Ed(this,t,rl,l,m,R);T&&e.push(T)}if(this.isLineLoop){const x=d.getX(_-1),g=d.getX(p),m=Ed(this,t,rl,l,x,g);m&&e.push(m)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=p,g=_-1;x<g;x+=u){const m=Ed(this,t,rl,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=Ed(this,t,rl,l,_-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ed(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(ch.fromBufferAttribute(o,s),uh.fromBufferAttribute(o,r),e.distanceSqToSegment(ch,uh,em,t0)>i)return;em.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(em);if(!(l<t.near||l>t.far))return{distance:l,point:t0.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const e0=new $,n0=new $;class nm extends SC{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)e0.fromBufferAttribute(e,s),n0.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+e0.distanceTo(n0);t.setAttribute("lineDistance",new Mi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bC extends wo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ae(16777215),this.specular=new ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wx,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lM extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const im=new Fe,i0=new $,s0=new $;class EC{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new i_,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;i0.setFromMatrixPosition(t.matrixWorld),e.position.copy(i0),s0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(s0),e.updateMatrixWorld(),im.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(im),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(im)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wC extends EC{constructor(){super(new nM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TC extends lM{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new wC}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class AC extends lM{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const r0=new Fe;class CC{constructor(t,e,i=0,s=1/0){this.ray=new e_(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new n_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return r0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(r0),this}intersectObject(t,e=!0,i=[]){return og(t,this,i,e),i.sort(o0),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)og(t[s],this,i,e);return i.sort(o0),i}}function o0(n,t){return n.distance-t.distance}function og(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)og(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xg);function ti(){return .001*Date.now()}function Gn(n,t,e){return Math.min(Math.max(n,t),e)}function Rl(n,t,e){return n+(t-n)*e}function ts(n,t){let e=n%t;return e<0&&(e+=t),e}function RC(n,t,e){const i=Gn((e-n)/(t-n),0,1);return i*i*(3-2*i)}var vo=(n=>(n[n.LEFT=0]="LEFT",n[n.MIDDLE=1]="MIDDLE",n[n.RIGHT=2]="RIGHT",n[n.BACK=3]="BACK",n[n.FORWARD=4]="FORWARD",n))(vo||{}),ze=(n=>(n[n.LEFT=1]="LEFT",n[n.RIGHT=2]="RIGHT",n[n.MIDDLE=4]="MIDDLE",n[n.BACK=8]="BACK",n[n.FORWARD=16]="FORWARD",n))(ze||{});function ve(n,t,e,i){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e,i)}function ea(n,t){const e=n.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}}function cM(n,t=!1){let e=0;const i=s=>{e=window.requestAnimationFrame(i),n(s)};return t&&n(performance.now()),e=window.requestAnimationFrame(i),()=>window.cancelAnimationFrame(e)}var na;class Be{constructor(){b(this,na,[])}dispose(){c(this,na).forEach(t=>t()),c(this,na).length=0}add(...t){c(this,na).push(...t)}}na=new WeakMap;function PC(){let n,t;return{promise:new Promise((i,s)=>{n=i,t=s}),resolve:n,reject:t}}function LC(n){n.traverse(t=>{const e=t;if(e.geometry&&e.geometry.dispose(),e.material)if(e.material instanceof wo)e.material.dispose();else for(const i of e.material)i.dispose()})}function a0(n){return n.material.color.getHex()}function wd(n,t){n.material.color.setHex(t)}function Ue(n,t,e,i){const s=2*n,r=2*n-1,o=r*r,a=8*n,l=o+a*(s+1);return e===-n?o+(t+n)+(i+n)*a:t===n?o+s+(e+n)+(i+n)*a:e===n?o+2*s+(n-t)+(i+n)*a:t===-n?o+3*s+(n-e)+(i+n)*a:i===-n?(e+n-1)*r+(t+n-1):l+(e+n-1)*r+(t+n-1)}function DC(n,t){const e=(2*t-1)*(2*t-1),i=8*t*(2*t+1),s=2*e+i,r=new Float32Array(3*s),o=new $(0,0,-n);let a=0;for(let f=1-t;f<t;++f)for(let p=1-t;p<t;++p)o.x=p*n/t,o.y=f*n/t,r[a++]=o.x,r[a++]=o.y,r[a++]=o.z;for(let f=-t;f<=t;++f){o.z=f*n/t,o.y=-n;for(let p=-t;p<t;++p)o.x=p*n/t,r[a++]=o.x,r[a++]=o.y,r[a++]=o.z;o.x=n;for(let p=-t;p<t;++p)o.y=p*n/t,r[a++]=o.x,r[a++]=o.y,r[a++]=o.z;o.y=n;for(let p=t;p>-t;--p)o.x=p*n/t,r[a++]=o.x,r[a++]=o.y,r[a++]=o.z;o.x=-n;for(let p=t;p>-t;--p)o.y=p*n/t,r[a++]=o.x,r[a++]=o.y,r[a++]=o.z}o.z=n;for(let f=1-t;f<t;++f)for(let p=1-t;p<t;++p)o.x=p*n/t,o.y=f*n/t,r[a++]=o.x,r[a++]=o.y,r[a++]=o.z;const l=24*t*t,u=new Uint32Array(6*l);let d=0;for(let f=-t;f<t;++f)for(let p=-t;p<t;++p){const _=Ue(t,p,f,-t),x=Ue(t,p+1,f,-t),g=Ue(t,p,f+1,-t),m=Ue(t,p+1,f+1,-t);p<0==f<0?(u[d++]=_,u[d++]=g,u[d++]=m,u[d++]=_,u[d++]=m,u[d++]=x):(u[d++]=x,u[d++]=_,u[d++]=g,u[d++]=x,u[d++]=g,u[d++]=m)}for(let f=-t;f<t;++f){for(let p=-t;p<t;++p){const _=Ue(t,p,-t,f),x=Ue(t,p+1,-t,f),g=Ue(t,p,-t,f+1),m=Ue(t,p+1,-t,f+1);p<0==f<0?(u[d++]=_,u[d++]=m,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m):(u[d++]=x,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m,u[d++]=g)}for(let p=-t;p<t;++p){const _=Ue(t,t,p,f),x=Ue(t,t,p+1,f),g=Ue(t,t,p,f+1),m=Ue(t,t,p+1,f+1);p<0==f<0?(u[d++]=_,u[d++]=m,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m):(u[d++]=x,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m,u[d++]=g)}for(let p=t;p>-t;--p){const _=Ue(t,p,t,f),x=Ue(t,p-1,t,f),g=Ue(t,p,t,f+1),m=Ue(t,p-1,t,f+1);p>0==f<0?(u[d++]=_,u[d++]=m,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m):(u[d++]=x,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m,u[d++]=g)}for(let p=t;p>-t;--p){const _=Ue(t,-t,p,f),x=Ue(t,-t,p-1,f),g=Ue(t,-t,p,f+1),m=Ue(t,-t,p-1,f+1);p>0==f<0?(u[d++]=_,u[d++]=m,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m):(u[d++]=x,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m,u[d++]=g)}}for(let f=-t;f<t;++f)for(let p=-t;p<t;++p){const _=Ue(t,p,f,t),x=Ue(t,p+1,f,t),g=Ue(t,p,f+1,t),m=Ue(t,p+1,f+1,t);p<0==f<0?(u[d++]=_,u[d++]=m,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m):(u[d++]=x,u[d++]=g,u[d++]=_,u[d++]=x,u[d++]=m,u[d++]=g)}const h=new Wi;return h.setAttribute("position",new Mi(r,3)),h.setIndex(new ip(u,1)),h.computeVertexNormals(),h}function IC(n,t){const e=DC(n,t),i=e.getAttribute("position").array,s=4/Math.PI,r=Math.sqrt(.5)/n,o=new $;for(let a=0,l=i.length;a<l;a+=3){o.x=Math.asin(r*i[a+0])*s,o.y=Math.asin(r*i[a+1])*s,o.z=Math.asin(r*i[a+2])*s;const u=n/o.length();i[a+0]=o.x*u,i[a+1]=o.y*u,i[a+2]=o.z*u}return e.computeVertexNormals(),e}function UC(n,t,e){const i=new Float32Array(3*(n+1)*(t+1));let s=0;for(let r=0;r<=t;++r)for(let o=0;o<=n;++o){const a=e(o,r);i[s++]=a.x,i[s++]=a.y,i[s++]=a.z}return i}function NC(n,t){const e=new Uint32Array(2*(n*(t+1)+t*(n+1)));let i=0;for(let s=0;s<=t;++s)for(let r=0;r<n;++r)e[i++]=s*(n+1)+r,e[i++]=s*(n+1)+r+1;for(let s=0;s<=n;++s)for(let r=0;r<t;++r)e[i++]=r*(n+1)+s,e[i++]=(r+1)*(n+1)+s;return e}function Td(n,t,e){const i=UC(n,t,e),s=NC(n,t),r=new Wi;return r.setAttribute("position",new Mi(i,3)),r.setIndex(new ip(s,1)),r}function FC(n){const t=document.createElement("canvas");return t.width=n.width,t.height=n.height,t.getContext("2d",{alpha:!0}).drawImage(n,0,0),t.toDataURL()}function ol(n,t){const e=t(-1),i=t(0),s=t(1),r=t(2);return i+.5*n*(s-e+n*(2*e-5*i+4*s-r+n*(3*(i-s)+r-e)))}function OC(n,t,e){const i=[ol(n,s=>e(s,-1)),ol(n,s=>e(s,0)),ol(n,s=>e(s,1)),ol(n,s=>e(s,2))];return ol(t,s=>i[s+1])}const BC={phi:0,theta:0,radius:6,lookAt:new $(0,0,0),minRadius:2,maxRadius:10,movementSpeed:10,rotationSpeed:1};var ne,li,Ll,hh,fh,Ds,Is,Us,Dl,Il,Ns,Fr,ph,mh,gh,_h,vh,xh,Mh,x0;let kC=(x0=class{constructor(t){b(this,ne,{...BC});b(this,li);b(this,Ll,new Be);b(this,hh,-1.5);b(this,fh,1.5);b(this,Ds,0);b(this,Is,0);b(this,Us,0);b(this,Dl);b(this,Il,ti());b(this,Ns,!1);b(this,Fr,{x:0,y:0});b(this,ph,t=>{!(t.buttons&ze.LEFT)||c(this,Ns)||(Q(this,Ns,!0),Q(this,Fr,ea(c(this,li),t)),c(this,li).setPointerCapture(t.pointerId))});b(this,mh,t=>{if(!c(this,Ns))return;const{x:e,y:i}=ea(c(this,li),t),s=e-c(this,Fr).x,r=i-c(this,Fr).y;Q(this,Fr,{x:e,y:i}),t.buttons&ze.LEFT&&(c(this,ne).phi-=s*2*Math.PI*c(this,ne).rotationSpeed/c(this,li).clientWidth,c(this,ne).theta+=r*2*Math.PI*c(this,ne).rotationSpeed/c(this,li).clientHeight)});b(this,gh,t=>{c(this,Ns)&&!(t.buttons&ze.LEFT)&&(c(this,li).releasePointerCapture(t.pointerId),Q(this,Ns,!1))});b(this,_h,t=>{t.stopPropagation(),t.preventDefault()});b(this,vh,t=>{const e=t.deltaY>0?1:-1;c(this,ne).radius+=.05*e*c(this,ne).movementSpeed,t.stopPropagation(),t.preventDefault()});b(this,xh,t=>{switch(t.code){case"KeyW":Q(this,Ds,-1);break;case"KeyS":Q(this,Ds,1);break;case"KeyA":case"ArrowLeft":Q(this,Is,-1);break;case"KeyD":case"ArrowRight":Q(this,Is,1);break;case"KeyE":case"ArrowUp":Q(this,Us,1);break;case"KeyQ":case"ArrowDown":Q(this,Us,-1);break;case"Home":Object.assign(c(this,ne),c(this,Dl));break;case"End":c(this,ne).phi=-Math.PI/2,c(this,ne).theta=0;break;default:return}t.stopImmediatePropagation(),t.preventDefault()});b(this,Mh,t=>{switch(t.code){case"KeyW":Q(this,Ds,0);break;case"KeyS":Q(this,Ds,0);break;case"KeyA":case"ArrowLeft":Q(this,Is,0);break;case"KeyD":case"ArrowRight":Q(this,Is,0);break;case"KeyE":case"ArrowUp":Q(this,Us,0);break;case"KeyQ":case"ArrowDown":Q(this,Us,0);break;default:return}t.stopImmediatePropagation(),t.preventDefault()});Object.assign(c(this,ne),t),Q(this,Dl,{...c(this,ne)})}dispose(){c(this,Ll).dispose()}update(t){const e=ti(),i=e-c(this,Il);Q(this,Il,e),c(this,ne).radius+=i*c(this,Ds)*c(this,ne).movementSpeed,c(this,ne).phi+=i*c(this,Is)*c(this,ne).rotationSpeed,c(this,ne).theta+=i*c(this,Us)*c(this,ne).rotationSpeed,c(this,ne).radius=Gn(c(this,ne).radius,c(this,ne).minRadius,c(this,ne).maxRadius),c(this,ne).theta=Gn(c(this,ne).theta,c(this,hh),c(this,fh));const s=c(this,ne).lookAt.x+c(this,ne).radius*Math.cos(c(this,ne).phi)*Math.cos(c(this,ne).theta),r=c(this,ne).lookAt.y+c(this,ne).radius*Math.sin(c(this,ne).phi)*Math.cos(c(this,ne).theta),o=c(this,ne).lookAt.z+c(this,ne).radius*Math.sin(c(this,ne).theta);t.position.set(s,r,o),t.lookAt(c(this,ne).lookAt)}mount(t){Q(this,li,t),c(this,Ll).add(()=>Q(this,li,void 0),ve(t,"pointerdown",c(this,ph)),ve(t,"pointermove",c(this,mh)),ve(t,"pointerup",c(this,gh)),ve(t,"contextmenu",c(this,_h)),ve(t,"wheel",c(this,vh),{passive:!1}),ve(t,"keydown",c(this,xh)),ve(t,"keyup",c(this,Mh)))}unmount(){this.dispose()}},ne=new WeakMap,li=new WeakMap,Ll=new WeakMap,hh=new WeakMap,fh=new WeakMap,Ds=new WeakMap,Is=new WeakMap,Us=new WeakMap,Dl=new WeakMap,Il=new WeakMap,Ns=new WeakMap,Fr=new WeakMap,ph=new WeakMap,mh=new WeakMap,gh=new WeakMap,_h=new WeakMap,vh=new WeakMap,xh=new WeakMap,Mh=new WeakMap,x0);var dn,hn,ia,Ul,Nl,Fl,Ol;class VC{constructor(){b(this,dn);b(this,hn);b(this,ia,0);b(this,Ul,0);b(this,Nl,49152);b(this,Fl,13635600);b(this,Ol,16719904)}get hovered(){return c(this,dn)}set hovered(t){c(this,dn)!==t&&(c(this,dn)&&wd(c(this,dn),c(this,dn)===c(this,hn)?c(this,Fl):c(this,ia)),Q(this,dn,t),c(this,dn)&&(Q(this,ia,a0(c(this,dn))),wd(c(this,dn),c(this,dn)===c(this,hn)?c(this,Ol):c(this,Nl))))}get selected(){return c(this,hn)}set selected(t){c(this,hn)!==t&&(c(this,hn)&&wd(c(this,hn),c(this,hn)===c(this,dn)?c(this,Nl):c(this,Ul)),Q(this,hn,t),c(this,hn)&&(Q(this,Ul,c(this,hn)===c(this,dn)?c(this,ia):a0(c(this,hn))),wd(c(this,hn),c(this,hn)===c(this,dn)?c(this,Ol):c(this,Fl))))}}dn=new WeakMap,hn=new WeakMap,ia=new WeakMap,Ul=new WeakMap,Nl=new WeakMap,Fl=new WeakMap,Ol=new WeakMap;var Bl,Bn,sa,Fs,Os,ci,Ne,kl,Bs,Or,ks,Vs,zs,Vl,Br,zl,Hl,Gl,Pi,ra,Wl,$l,yh,Sh,kr,oa,bh,Eh,wh,Th,he,uM,ag,Go,Ar,Hd,dM,lg,cg,Ah,Ch,Rh,Ph;class zC extends Be{constructor(e,i){super();b(this,he);b(this,Bl,new Be);b(this,Bn);b(this,sa);b(this,Fs);b(this,Os);b(this,ci,new dl);b(this,Ne,7);b(this,kl,Array(c(this,Ne)*c(this,Ne)));b(this,Bs,[]);b(this,Or);b(this,ks);b(this,Vs);b(this,zs,new VC);b(this,Vl,new CC);b(this,Br,!1);b(this,zl,{x:0,y:0});b(this,Hl);b(this,Gl,1);b(this,Pi,-.5*(c(this,Ne)-1));b(this,ra,_t(8));b(this,Wl,_t(!1));b(this,$l,_t(!1));b(this,yh,2);b(this,Sh,16);b(this,kr,-2);b(this,oa,2);b(this,bh,16776960);b(this,Eh,14712832);b(this,wh,32768);b(this,Th,2);b(this,Ah,e=>{if(!(e.buttons&1))return;const i=pt(this,he,cg).call(this,e),s=pt(this,he,lg).call(this,c(this,Bs),i);if(!s){c(this,zs).selected=void 0;return}const r=s.object;c(this,zs).selected=r,Q(this,Hl,r.position.clone()),r.updateMatrixWorld(!1);const o=r.matrixWorld,l=o.getMaxScaleOnAxis()/r.scale.x,u=r.position.clone();u.applyMatrix4(o);let d=0;d=2*u.sub(c(this,Fs).position).length()*Math.tan(c(this,Fs).fov*Math.PI/360),Q(this,Gl,d/c(this,Bn).clientHeight/l),Q(this,Br,!0),Q(this,zl,ea(c(this,Bn),e)),c(this,Bn).setPointerCapture(e.pointerId),e.stopImmediatePropagation()});b(this,Ch,e=>{if(!c(this,Br)){const o=pt(this,he,cg).call(this,e),a=pt(this,he,lg).call(this,c(this,Bs),o);c(this,zs).hovered=a&&a.object||void 0;return}const{y:i}=ea(c(this,Bn),e),s=c(this,zl).y-i,r=Gn(c(this,Hl).z+s*c(this,Gl),c(this,kr),c(this,oa));pt(this,he,Go).call(this,()=>r)});b(this,Rh,e=>{c(this,Br)&&!(e.buttons&1)&&(c(this,Bn).releasePointerCapture(e.pointerId),Q(this,Br,!1))});b(this,Ph,e=>{if(!(e.altKey||e.shiftKey)){switch(e.code){case"Digit1":pt(this,he,Go).call(this,()=>c(this,kr),e.ctrlKey);break;case"Digit2":pt(this,he,Go).call(this,()=>.5*(c(this,kr)+c(this,oa)),e.ctrlKey);break;case"Digit3":pt(this,he,Go).call(this,()=>c(this,oa),e.ctrlKey);break;case"Digit0":pt(this,he,Go).call(this,(i,s)=>pt(this,he,ag).call(this,i,s),e.ctrlKey);break;case"KeyG":c(this,Or)&&(this.showGrid=!this.showGrid);break;case"KeyL":c(this,ks)&&(this.showLoRes=!this.showLoRes);break;case"Minus":case"NumpadSubtract":this.subdiv>c(this,yh)&&(--this.subdiv,pt(this,he,Ar).call(this));break;case"Equal":case"NumpadAdd":this.subdiv<c(this,Sh)&&(++this.subdiv,pt(this,he,Ar).call(this));break;default:return}e.stopImmediatePropagation(),e.preventDefault()}});Q(this,sa,e),Q(this,Fs,i),Q(this,Os,new kC({phi:-Math.PI/3,theta:Math.PI/6,radius:4,minRadius:2,lookAt:new $(0,0,0)})),this.add(()=>{c(this,Os).dispose(),c(this,sa).remove(c(this,ci)),LC(c(this,ci))}),pt(this,he,uM).call(this)}mount(e){Q(this,Bn,e),c(this,Bl).add(()=>Q(this,Bn,void 0),ve(e,"pointerdown",c(this,Ah)),ve(e,"pointermove",c(this,Ch)),ve(e,"pointerup",c(this,Rh)),ve(e,"keydown",c(this,Ph)),()=>c(this,Os).unmount()),c(this,Os).mount(e)}unmount(){c(this,Bl).dispose()}update(){c(this,Os).update(c(this,Fs))}get showGrid(){return c(this,Wl).value}set showGrid(e){c(this,Wl).value=e,c(this,Or).visible=e}get showLoRes(){return c(this,$l).value}set showLoRes(e){c(this,$l).value=e,c(this,ks).visible=e}get subdiv(){return c(this,ra).value}set subdiv(e){e!==c(this,ra).value&&(c(this,ra).value=e,pt(this,he,Ar).call(this))}}Bl=new WeakMap,Bn=new WeakMap,sa=new WeakMap,Fs=new WeakMap,Os=new WeakMap,ci=new WeakMap,Ne=new WeakMap,kl=new WeakMap,Bs=new WeakMap,Or=new WeakMap,ks=new WeakMap,Vs=new WeakMap,zs=new WeakMap,Vl=new WeakMap,Br=new WeakMap,zl=new WeakMap,Hl=new WeakMap,Gl=new WeakMap,Pi=new WeakMap,ra=new WeakMap,Wl=new WeakMap,$l=new WeakMap,yh=new WeakMap,Sh=new WeakMap,kr=new WeakMap,oa=new WeakMap,bh=new WeakMap,Eh=new WeakMap,wh=new WeakMap,Th=new WeakMap,he=new WeakSet,uM=function(){const e=this.subdiv,i=c(this,Pi);Q(this,Or,new nm(Td(c(this,Ne),c(this,Ne),(s,r)=>new $(s+i-.5,r+i-.5,c(this,kr))),new zd({color:0,transparent:!0,opacity:.5}))),this.showGrid=!1,c(this,ci).add(c(this,Or)),Q(this,ks,new nm(Td(c(this,Ne)+3,c(this,Ne)+3,(s,r)=>new $(s+i-2,r+i-2,0)),new zd({color:c(this,Eh)}))),this.showLoRes=!1,c(this,ci).add(c(this,ks)),Q(this,Vs,new nm(Td((c(this,Ne)-1)*e,(c(this,Ne)-1)*e,(s,r)=>new $(s/e+i,r/e+i,0)),new zd({color:c(this,wh)}))),c(this,ci).add(c(this,Vs));for(let s=0;s<c(this,Ne);++s)for(let r=0;r<c(this,Ne);++r){const o=new Bi(IC(1,4),new bC({color:c(this,bh)}));o.scale.setScalar(.07),o.position.set(r+i,s+i,0),c(this,Bs).push(o),c(this,ci).add(o)}c(this,ci).scale.setScalar(c(this,Th)/c(this,Ne)),c(this,sa).add(c(this,ci));for(let s=0;s<c(this,Ne);++s)for(let r=0;r<c(this,Ne);++r)pt(this,he,Hd).call(this,r,s,pt(this,he,ag).call(this,r,s));pt(this,he,Ar).call(this)},ag=function(e,i){const s=e+c(this,Pi),r=i+c(this,Pi);return Math.cos(s)*Math.cos(r)},Go=function(e,i=!1){if(i){for(let s=0;s<c(this,Ne);++s)for(let r=0;r<c(this,Ne);++r)pt(this,he,Hd).call(this,r,s,e(r,s));pt(this,he,Ar).call(this)}else if(c(this,zs).selected){const[s,r]=pt(this,he,dM).call(this,c(this,zs).selected);pt(this,he,Hd).call(this,s,r,e(s,r)),pt(this,he,Ar).call(this)}},Ar=function(){const e=c(this,Ne),i=this.subdiv,s=(d,h)=>Gn(d,0,e-1)+Gn(h,0,e-1)*e,r=(d,h)=>c(this,kl)[s(d,h)],o=c(this,ks).geometry.getAttribute("position");for(let d=0;d<e+4;++d)for(let h=0;h<e+4;++h)o.setXYZ(h+d*(e+4),h+c(this,Pi)-2,d+c(this,Pi)-2,r(h-2,d-2));o.needsUpdate=!0;const a=(d,h)=>{let f=d/i,p=h/i,_=Math.floor(f),x=Math.floor(p);return f-=_,p-=x,f===0&&_>0&&(--_,f=1),p===0&&x>0&&(--x,p=1),OC(f,p,(g,m)=>r(_+g,x+m))},l=(e-1)*i,u=c(this,Vs).geometry.getAttribute("position");if(u.count!==(l+1)*(l+1))c(this,Vs).geometry.dispose(),c(this,Vs).geometry=Td(l,l,(d,h)=>new $(d/i+c(this,Pi),h/i+c(this,Pi),a(d,h)));else{for(let d=0;d<=l;++d)for(let h=0;h<=l;++h)u.setZ(h+d*(l+1),a(h,d));u.needsUpdate=!0}},Hd=function(e,i,s){c(this,kl)[e+i*c(this,Ne)]=s,c(this,Bs)[e+i*c(this,Ne)].position.setZ(s)},dM=function(e){const i=c(this,Bs).findIndex(o=>o===e),s=i%c(this,Ne),r=(i-s)/c(this,Ne);return[s,r]},lg=function(e,i){c(this,Vl).setFromCamera(i,c(this,Fs));const s=c(this,Vl).intersectObjects(e);return s.length>0?s[0]:void 0},cg=function(e){const{x:i,y:s}=ea(c(this,Bn),e);return new Me(i/c(this,Bn).clientWidth*2-1,s/c(this,Bn).clientHeight*-2+1)},Ah=new WeakMap,Ch=new WeakMap,Rh=new WeakMap,Ph=new WeakMap;var Xl,aa,Hs,ui,es,Gs,la,ca,Lh,Dh,hM;class HC extends _n{constructor(){super("bicubic-view","bicubic-button");b(this,Dh);b(this,Xl,new Be);b(this,aa,new Be);ht(this,"demo");b(this,Hs);b(this,ui);b(this,es);b(this,Gs);b(this,la,0);b(this,ca,0);b(this,Lh,()=>{pt(this,Dh,hM).call(this),this.demo.update(),c(this,es).render(c(this,Hs),c(this,ui))});Q(this,ui,new Zn(30,1,.1,50)),c(this,ui).up.set(0,0,1),c(this,ui).add(new TC(16777215,1)),Q(this,Hs,new yC),c(this,Hs).add(new AC(4210752)),c(this,Hs).add(c(this,ui)),this.demo=new zC(c(this,Hs),c(this,ui)),c(this,Xl).add(()=>this.demo.dispose())}dispose(){c(this,aa).dispose(),c(this,Xl).dispose()}mount(e,i){Q(this,Gs,e),Q(this,la,0),Q(this,ca,0);const s=new ae(getComputedStyle(c(this,Gs)).backgroundColor);Q(this,es,new MC({canvas:i,antialias:!0})),c(this,es).setClearColor(s),c(this,es).setPixelRatio(window.devicePixelRatio),this.demo.mount(e),c(this,aa).add(cM(c(this,Lh)),()=>{this.demo.unmount(),c(this,es).dispose(),Q(this,Gs,void 0)})}unmount(){c(this,aa).dispose()}}Xl=new WeakMap,aa=new WeakMap,Hs=new WeakMap,ui=new WeakMap,es=new WeakMap,Gs=new WeakMap,la=new WeakMap,ca=new WeakMap,Lh=new WeakMap,Dh=new WeakSet,hM=function(){const e=c(this,Gs).clientWidth+1,i=c(this,Gs).clientHeight+1;(e!==c(this,la)||i!==c(this,ca))&&(Q(this,la,e),Q(this,ca,i),c(this,es).setSize(e,i),c(this,ui).aspect=e/i,c(this,ui).updateProjectionMatrix())};var ql,kn,en,Vr;class ce{constructor(t,e,i){ht(this,"key",Symbol());ht(this,"tag");ht(this,"attributes",Jn({}));ht(this,"items",Jn([]));b(this,ql,_t());b(this,kn,new Map);b(this,en);b(this,Vr);this.tag=t,e&&(Array.isArray(e)?e.length>0&&this.add(...e):typeof e=="string"?this.text=e:Object.assign(this.attributes,e)),i&&this.add(...i)}get text(){return c(this,ql).value}set text(t){c(this,ql).value=t}get parent(){return c(this,Vr)}get element(){return c(this,en)}get index(){return this.parent?this.parent.items.indexOf(this):0}set index(t){this.parent&&this.parent.move(this,t)}clear(){this.items.forEach(t=>Q(t,Vr,void 0)),this.items.length=0}add(...t){t.forEach(e=>{e.parent&&e.parent.remove(e),Q(e,Vr,this),this.items.push(e)})}remove(t){const e=this.items.indexOf(t);this.items.splice(e,1),Q(t,Vr,void 0)}move(t,e){const i=this.items.indexOf(t);i!==-1&&(e<0&&(e+=this.items.length),e=Gn(e,0,this.items.length-1),i!==e&&(this.items.splice(i,1),this.items.splice(e,0,t)))}find(t){if(this.attributes.id===t)return this;for(const e of this.items){const i=e.find(t);if(i)return i}}findByClass(t){if(this.attributes.class!==void 0&&this.attributes.class.split(" ").includes(t))return this;for(const e of this.items){const i=e.findByClass(t);if(i)return i}}on(t,e,i){c(this,kn).has(t)||c(this,kn).set(t,[]);const s=c(this,kn).get(t);s.find(r=>r.listener===e)||(s.push({listener:e,options:i}),c(this,en)&&c(this,en).addEventListener(t,e,i))}off(t,e){if(!t){c(this,en)&&c(this,kn).forEach((s,r)=>s.forEach(o=>c(this,en).removeEventListener(r,o.listener))),c(this,kn).clear();return}if(!c(this,kn).has(t))return;const i=c(this,kn).get(t);if(!e)c(this,en)&&i.forEach(s=>c(this,en).removeEventListener(t,s.listener)),c(this,kn).delete(t);else{const s=i.findIndex(r=>r.listener===e);s!==-1&&(c(this,en)&&c(this,en).removeEventListener(t,e),i.splice(s,1))}}mount(t){this.unmount(),Q(this,en,t),c(this,en)&&c(this,kn).forEach((e,i)=>e.forEach(s=>c(this,en).addEventListener(i,s.listener,s.options)))}unmount(){c(this,en)&&(c(this,kn).forEach((t,e)=>t.forEach(i=>c(this,en).removeEventListener(e,i.listener))),Q(this,en,void 0))}}ql=new WeakMap,kn=new WeakMap,en=new WeakMap,Vr=new WeakMap;function rn(n,t,e){return new ce(n,t,e)}function fM(n,t){if(t||(t=(e,i)=>new ce(e,i)),n.nodeType===n.TEXT_NODE){const e=(n.nodeValue||"").trim();return e.length>0?t(n.nodeName,e):void 0}else if(n instanceof Element){const e={};for(const s of n.attributes)e[s.name]=s.value;const i=t(n.nodeName,e);for(const s of n.childNodes){const r=fM(s,t);r&&i.add(r)}return i}}function pM(n,t){const i=new DOMParser().parseFromString(n,"image/svg+xml");return fM(i.documentElement,t)}class Ae{constructor(t=0,e=0){ht(this,"x");ht(this,"y");this.x=t,this.y=e}clone(){return new Ae(this.x,this.y)}}class Ze{constructor(...t){ht(this,"elements");this.elements=t}static translation(t,e){return new Ze(1,0,0,1,t,e)}static rotation(t){const e=Math.sin(t),i=Math.cos(t);return new Ze(i,e,-e,i,0,0)}static scale(t,e){return new Ze(t,0,0,e,0,0)}static inverse(t){const e=t.elements,i=1/(e[0]*e[3]-e[1]*e[2]);return new Ze(e[3]*i,-e[1]*i,-e[2]*i,e[0]*i,(e[2]*e[5]-e[3]*e[4])*i,(e[1]*e[4]-e[0]*e[5])*i)}clone(){return new Ze(...this.elements)}decompose(){let t=this.elements[0],e=this.elements[1],i=this.elements[2],s=this.elements[3];const r=new Ae(this.elements[4],this.elements[5]),o=new Ae(Math.hypot(t,e),Math.hypot(i,s));if(t*s-e*i<0&&(t<s?o.x=-o.x:o.y=-o.y),o.x){const u=1/o.x;t*=u,e*=u}if(o.y){const u=1/o.y;i*=u,s*=u}let l=Math.atan2(e,t);return l<0&&(l+=2*Math.PI),{translation:r,rotation:l,scale:o}}multiply(t){const e=this.elements,i=t.elements;return new Ze(e[0]*i[0]+e[2]*i[1],e[1]*i[0]+e[3]*i[1],e[0]*i[2]+e[2]*i[3],e[1]*i[2]+e[3]*i[3],e[0]*i[4]+e[2]*i[5]+e[4],e[1]*i[4]+e[3]*i[5]+e[5])}transform(t){const e=this.elements;return new Ae(e[0]*t.x+e[2]*t.y+e[4],e[1]*t.x+e[3]*t.y+e[5])}toCss(){return`matrix(${this.elements.join(" ")})`}}function l0(n,t,e){return new Ae(Rl(n.x,t.x,e),Rl(n.y,t.y,e))}function GC(n,t){const e=n.x-t.x,i=n.y-t.y;return e*e+i*i}function ug(n,t){return Math.sqrt(GC(n,t))}function WC(n,t,e){const i=n.decompose(),s=t.decompose();i.rotation>Math.PI&&(i.rotation-=2*Math.PI),s.rotation>Math.PI&&(s.rotation-=2*Math.PI),(i.scale.x<0&&s.scale.y<0||i.scale.y<0&&s.scale.x<0)&&(i.scale.x=-i.scale.x,i.scale.y=-i.scale.y,i.rotation+=i.rotation<0?Math.PI:-Math.PI),Math.abs(i.rotation-s.rotation)>Math.PI&&(i.rotation>s.rotation?i.rotation-=2*Math.PI:s.rotation-=2*Math.PI);const r=l0(i.translation,s.translation,e),o=Rl(i.rotation,s.rotation,e),a=l0(i.scale,s.scale,e);return Ze.translation(r.x,r.y).multiply(Ze.rotation(o)).multiply(Ze.scale(a.x,a.y))}const c0=Ze.rotation,u0=Ze.scale,d0=Ze.translation;var Yl,jl,Kl;const u_=class u_{constructor(t={}){b(this,Yl,_t(new Ae));b(this,jl,_t(0));b(this,Kl,_t(new Ae(1,1)));t.position&&(this.position=t.position),t.rotation&&(this.rotation=t.rotation),t.scale&&(this.scale=t.scale)}clone(){return new u_(this)}get position(){return c(this,Yl).value}set position(t){c(this,Yl).value=t.clone()}get rotation(){return c(this,jl).value}set rotation(t){c(this,jl).value=t}get scale(){return c(this,Kl).value}set scale(t){c(this,Kl).value=t.clone()}get transform(){return d0(this.position.x,this.position.y).multiply(c0(this.rotation)).multiply(u0(this.scale.x,this.scale.y))}get inverse(){return u0(1/this.scale.x,1/this.scale.y).multiply(c0(-this.rotation)).multiply(d0(-this.position.x,-this.position.y))}};Yl=new WeakMap,jl=new WeakMap,Kl=new WeakMap;let ar=u_;var Zl,ua,da,zr,ha,Ih;class Pl{constructor(){b(this,Zl,()=>{});b(this,ua,c(this,Zl));b(this,da,t=>{});b(this,zr,c(this,da));b(this,ha,0);b(this,Ih,()=>{const t=ti(),e=t-c(this,ha);Q(this,ha,t),c(this,zr).call(this,e)})}isActive(){return c(this,zr)!==c(this,da)}start(t){Q(this,ha,ti()),this.stop(),Q(this,zr,t),Q(this,ua,cM(c(this,Ih)))}stop(){c(this,ua).call(this),Q(this,ua,c(this,Zl)),Q(this,zr,c(this,da))}}Zl=new WeakMap,ua=new WeakMap,da=new WeakMap,zr=new WeakMap,ha=new WeakMap,Ih=new WeakMap;var Wo=(n=>(n[n.NONE=0]="NONE",n[n.DRAG=1]="DRAG",n[n.ROTATE=2]="ROTATE",n))(Wo||{});const $C={pan:!0,zoom:!0,rotate:!0,minZoom:.5,maxZoom:2,width:2,height:2};var on,fa,Jl,Ql,tc,Ve,pa,ma,di,ec,nc,ga,ns,Ws,ic,Li,sc,Hr,Gr,rc,Uh,_a,oc,va,$s,ac,Nh,lc,cc,bo,dg,Fh,mM,Oh,Bh,kh,Vh,zh,Hh;class qu{constructor(t,e,i,s){b(this,bo);b(this,on);b(this,fa,new Be);b(this,Jl,new Be);b(this,Ql);b(this,tc);b(this,Ve);b(this,pa);b(this,ma,new ResizeObserver(()=>pt(this,bo,dg).call(this)));b(this,di);b(this,ec,0);b(this,nc,0);b(this,ga,ku({left:-1,top:-1,width:2,height:2}));b(this,ns,0);b(this,Ws,new Ae);b(this,ic,0);b(this,Li,new Ae);b(this,sc,0);b(this,Hr,new Ze(1,0,0,1,0,0));b(this,Gr,new Pl);b(this,rc,0);b(this,Uh,.25);b(this,_a,0);b(this,oc,0);b(this,va,new Ae);b(this,$s,new Pl);b(this,ac,0);b(this,Nh,.5);b(this,lc,Ze.scale(1,1));b(this,cc);b(this,Fh,()=>{let t=RC(0,1,(ti()-c(this,ac))/c(this,Nh));t>=1&&(c(this,$s).stop(),t=1);const e=Ze.inverse(WC(c(this,lc),c(this,cc),t)).decompose();c(this,Ve).position=e.translation,c(this,Ve).rotation=e.rotation,c(this,Ve).scale=e.scale});b(this,Oh,()=>{let t=(ti()-c(this,rc))/c(this,Uh);t>=1&&(c(this,Gr).stop(),t=1);const e=Rl(c(this,_a),c(this,oc),t);pt(this,bo,mM).call(this,e)});b(this,Bh,t=>{switch(t.button){case vo.LEFT:if(!c(this,on).pan)return;Q(this,ns,1);break;case vo.RIGHT:if(!c(this,on).rotate)return;Q(this,ns,2);break;default:return}t.currentTarget.setPointerCapture(t.pointerId),Q(this,Li,c(this,Ve).position),Q(this,sc,c(this,Ve).rotation),Q(this,Hr,c(this,Ve).transform),Q(this,Ws,c(this,Hr).transform(this.toCamera(t))),Q(this,ic,Math.atan2(c(this,Ws).y-c(this,Li).y,c(this,Ws).x-c(this,Li).x))});b(this,kh,t=>{if(c(this,ns)===1){const e=c(this,Hr).transform(this.toCamera(t)),i=new Ae(e.x-c(this,Ws).x,e.y-c(this,Ws).y);c(this,Ve).position=new Ae(c(this,Li).x-i.x,c(this,Li).y-i.y)}else if(c(this,ns)===2){const e=c(this,Hr).transform(this.toCamera(t)),i=new Ae(e.x-c(this,Li).x,e.y-c(this,Li).y),s=Math.atan2(i.y,i.x);c(this,Ve).rotation=ts(c(this,sc)+c(this,ic)-s,2*Math.PI)}});b(this,Vh,t=>{c(this,ns)!==0&&(t.currentTarget.releasePointerCapture(t.pointerId),Q(this,ns,0))});b(this,zh,t=>{t.stopPropagation(),t.preventDefault()});b(this,Hh,t=>{if(!c(this,on).zoom)return;t.preventDefault();const e=t.deltaY<0?.8:1.25;Q(this,_a,c(this,Ve).scale.x/c(this,pa).scale.x),Q(this,oc,Gn(e*c(this,_a),c(this,on).minZoom,c(this,on).maxZoom)),Q(this,rc,ti()),Q(this,va,this.toCamera(t)),c(this,$s).stop(),c(this,Gr).start(c(this,Oh))});Q(this,on,Object.assign({...$C},s)),Q(this,Ql,t),Q(this,tc,e),Q(this,Ve,i),Q(this,pa,i.clone()),Q(this,cc,i.inverse),c(this,Jl).add(()=>c(this,ma).disconnect(),()=>c(this,fa).dispose())}dispose(){c(this,Jl).dispose()}mount(t){Q(this,di,t),c(this,ma).observe(t),c(this,fa).add(()=>{c(this,ma).unobserve(c(this,di)),Q(this,di,void 0),c(this,Gr).stop(),c(this,$s).stop()},ve(t,"dblclick",()=>this.reset()),ve(t,"pointerdown",c(this,Bh)),ve(t,"pointermove",c(this,kh)),ve(t,"contextmenu",c(this,zh)),ve(t,"pointerup",c(this,Vh)),ve(t,"wheel",c(this,Hh),{passive:!1}),qa(()=>c(this,tc).attributes.transform=c(this,Ve).inverse.toCss()))}unmount(){c(this,fa).dispose()}get viewBox(){return c(this,ga).value}reset(){c(this,$s).isActive()||(Q(this,ac,ti()),Q(this,lc,c(this,Ve).inverse),c(this,Gr).stop(),c(this,$s).start(c(this,Fh)))}resize(t,e){c(this,on).width=t,c(this,on).height=e,c(this,di)&&pt(this,bo,dg).call(this)}toCamera(t){const{x:e,y:i}=ea(c(this,di),t),s=c(this,ga).value;return new Ae(s.left+s.width*e/c(this,ec),s.top+s.height*i/c(this,nc))}}on=new WeakMap,fa=new WeakMap,Jl=new WeakMap,Ql=new WeakMap,tc=new WeakMap,Ve=new WeakMap,pa=new WeakMap,ma=new WeakMap,di=new WeakMap,ec=new WeakMap,nc=new WeakMap,ga=new WeakMap,ns=new WeakMap,Ws=new WeakMap,ic=new WeakMap,Li=new WeakMap,sc=new WeakMap,Hr=new WeakMap,Gr=new WeakMap,rc=new WeakMap,Uh=new WeakMap,_a=new WeakMap,oc=new WeakMap,va=new WeakMap,$s=new WeakMap,ac=new WeakMap,Nh=new WeakMap,lc=new WeakMap,cc=new WeakMap,bo=new WeakSet,dg=function(){if(!c(this,di))return;const t=c(this,di).clientWidth,e=c(this,di).clientHeight;if(Q(this,ec,t),Q(this,nc,e),t===0||e===0)return;const i=t/c(this,on).width,s=e/c(this,on).height;let r,o;i<s?(r=c(this,on).width,o=c(this,on).height*s/i):(r=c(this,on).width*i/s,o=c(this,on).height),c(this,ga).value={left:-r/2,top:-o/2,width:r,height:o},c(this,Ql).attributes.viewBox=`${-r/2} ${-o/2} ${r} ${o}`},Fh=new WeakMap,mM=function(t){const e=c(this,pa).scale,i=new Ae(e.x*t,e.y*t),s=new ar({position:c(this,Ve).position,rotation:c(this,Ve).rotation,scale:i}),r=c(this,Ve).transform.transform(c(this,va)),o=s.transform.transform(c(this,va));c(this,Ve).position=new Ae(c(this,Ve).position.x+r.x-o.x,c(this,Ve).position.y+r.y-o.y),c(this,Ve).scale=i},Oh=new WeakMap,Bh=new WeakMap,kh=new WeakMap,Vh=new WeakMap,zh=new WeakMap,Hh=new WeakMap;function lr(n,t,e,i,s){const r=new ce("g",{stroke:s,"stroke-width":i}),o=Math.floor(n/e);for(let a=-o;a<=o;++a){const l=a*e,u=Math.abs(l)-n+t,d=u<0?n:n-t+Math.sqrt(t*t-u*u);r.add(new ce("line",{x1:l,y1:-d,x2:l,y2:d,"vector-effect":"non-scaling-stroke"}),new ce("line",{x1:-d,y1:l,x2:d,y2:l,"vector-effect":"non-scaling-stroke"}))}return r}function Gd(n,t){const e=[...Array(6)].map((o,a)=>(a+.5)*Math.PI/3),i=e.map(o=>Math.cos(o)),s=e.map(o=>Math.sin(o)),r=e.map((o,a)=>`${a?"L":"M"} ${i[a]*n} ${s[a]*n}`);return r.push("z"),new ce("path",{d:r.join(" "),...t})}function XC(n,t,e,i){const r=1.1*Math.sqrt(3)*t,o=1.1*1.5*t,a=Math.ceil(n/r),l=new ce("g",{...e});for(let u=-a;u<=a;++u)l.add(Gd(t,{transform:`translate(${u*r}, 0)`,...i}));for(let u=1;u<=a;++u)for(let d=-a;d<=a-u;++d)l.add(Gd(t,{transform:`translate(${(u*.5+d)*r} ${-u*o})`,...i}),Gd(t,{transform:`translate(${(u*.5+d)*r} ${u*o})`,...i}));return l}var Ie,hg,fg,pg,mg,gg,Wd,$d;class qC{constructor(t){b(this,Ie);ht(this,"less");ht(this,"root");this.less=t}empty(){return this.root===void 0}clear(){this.root=void 0}insert(t){if(!this.root)return this.root={parent:void 0,left:void 0,right:void 0,balance:0,value:t},this.root;let e=this.root;for(;;)if(this.less(t,e.value)){const i=e.left;if(i){e=i;continue}else{e.left={parent:e,left:void 0,right:void 0,balance:0,value:t},e=e.left;break}}else if(this.less(e.value,t)){const i=e.right;if(i){e=i;continue}else{e.right={parent:e,left:void 0,right:void 0,balance:0,value:t},e=e.right;break}}else return e;return pt(this,Ie,gg).call(this,e),e}insertNode(t){if(t.left=void 0,t.right=void 0,t.balance=0,!this.root)return t.parent=void 0,this.root=t,t;let e=this.root;for(;;)if(this.less(t.value,e.value)){const i=e.left;if(i){e=i;continue}else{e.left=t;break}}else if(this.less(e.value,t.value)){const i=e.right;if(i){e=i;continue}else{e.right=t;break}}else return e;return t.parent=e,pt(this,Ie,gg).call(this,t),t}remove(t){if(t)if(!t.left)pt(this,Ie,Wd).call(this,t),pt(this,Ie,$d).call(this,t,t.right);else if(!t.right)pt(this,Ie,Wd).call(this,t),pt(this,Ie,$d).call(this,t,t.left);else{const e=jC(t);pt(this,Ie,Wd).call(this,e),pt(this,Ie,$d).call(this,e,e.right),e.balance=t.balance,e.left=t.left,e.left&&(e.left.parent=e),e.right=t.right,e.right&&(e.right.parent=e);const i=t.parent;e.parent=i,i?i.left===t?i.left=e:i.right=e:this.root=e}}find(t){let e=this.root;for(;e;)if(this.less(t,e.value))e=e.left;else if(this.less(e.value,t))e=e.right;else return e}}Ie=new WeakSet,hg=function(t,e){const i=e.left;return t.right=i,i&&(i.parent=t),e.left=t,t.parent=e,e.balance===0?(t.balance=1,e.balance=-1):(t.balance=0,e.balance=0),e},fg=function(t,e){const i=e.right;return t.left=i,i&&(i.parent=t),e.right=t,t.parent=e,e.balance===0?(t.balance=-1,e.balance=1):(t.balance=0,e.balance=0),e},pg=function(t,e){const i=e.right,s=i.left,r=i.right;return e.right=s,s&&(s.parent=e),i.left=e,e.parent=i,t.left=r,r&&(r.parent=t),i.right=t,t.parent=i,i.balance===0?(t.balance=0,e.balance=0):(i.balance<0?(t.balance=1,e.balance=0):(t.balance=0,e.balance=-1),i.balance=0),i},mg=function(t,e){const i=e.left,s=i.left,r=i.right;return e.left=r,r&&(r.parent=e),i.right=e,e.parent=i,t.right=s,s&&(s.parent=t),i.left=t,t.parent=i,i.balance===0?(t.balance=0,e.balance=0):(i.balance>0?(t.balance=-1,e.balance=0):(t.balance=0,e.balance=1),i.balance=0),i},gg=function(t){for(let e=t.parent;e;e=t.parent){const i=e.parent;let s;if(t===e.right)if(e.balance>0)t.balance<0?s=pt(this,Ie,mg).call(this,e,t):s=pt(this,Ie,hg).call(this,e,t);else{if(e.balance<0){e.balance=0;break}e.balance=1,t=e;continue}else if(e.balance<0)t.balance>0?s=pt(this,Ie,pg).call(this,e,t):s=pt(this,Ie,fg).call(this,e,t);else{if(e.balance>0){e.balance=0;break}e.balance=-1,t=e;continue}s.parent=i,i?e===i.left?i.left=s:i.right=s:this.root=s;break}},Wd=function(t){let e;for(let i=t.parent;i;i=e){e=i.parent;let s;if(t===i.left)if(i.balance>0){const r=i.right;s=r.balance,r.balance<0?t=pt(this,Ie,mg).call(this,i,r):t=pt(this,Ie,hg).call(this,i,r)}else{if(i.balance===0){i.balance=1;break}t=i,t.balance=0;continue}else if(i.balance<0){const r=i.left;s=r.balance,r.balance>0?t=pt(this,Ie,pg).call(this,i,r):t=pt(this,Ie,fg).call(this,i,r)}else{if(i.balance===0){i.balance=-1;break}t=i,t.balance=0;continue}if(t.parent=e,e?i===e.left?e.left=t:e.right=t:this.root=t,s===0)break}},$d=function(t,e){t.parent?t===t.parent.left?t.parent.left=e:t.parent.right=e:this.root=e,e&&(e.parent=t.parent)};function _g(n){return n?n.balance<0?1+_g(n.left):1+_g(n.right):0}function YC(n){if(n){for(;n.left;)n=n.left;return n}}function jC(n){if(n.right)return YC(n.right);let t=n.parent;for(;t&&n===t.right;)n=t,t=t.parent;return t}const KC=(n,t)=>n<t;var uc,hi,xa,Ma,dc,Gh,hc,Di,fc,Hi,Xd,qd;class ZC extends _n{constructor(){super("binary-tree-view");b(this,Hi);b(this,uc,new Be);b(this,hi,22.5);b(this,xa,new ce("g"));b(this,Ma,new ce("g"));b(this,dc,new ce("g",[lr(c(this,hi)/2,c(this,hi)/4,1,1,"#00000018"),lr(c(this,hi)/2,c(this,hi)/4,5,1,"#00000040"),c(this,xa),c(this,Ma)]));ht(this,"root",new ce("svg",[c(this,dc)]));b(this,Gh,new ar);b(this,hc,new qu(this.root,c(this,dc),c(this,Gh),{width:c(this,hi),height:c(this,hi)}));b(this,Di,new qC(KC));b(this,fc,_t(""));[...Array(7)].forEach((e,i)=>c(this,Di).insert(i+1)),pt(this,Hi,Xd).call(this,c(this,Di))}mount(e){c(this,hc).mount(e),c(this,uc).add(()=>c(this,hc).unmount())}unmount(){c(this,uc).dispose()}get text(){return c(this,fc).value}set text(e){c(this,fc).value=e}add(){const e=Number.parseFloat(this.text);isNaN(e)||(c(this,Di).insert(e),pt(this,Hi,Xd).call(this,c(this,Di))),this.text=""}remove(){const e=Number.parseFloat(this.text);isNaN(e)||(c(this,Di).remove(c(this,Di).find(e)),pt(this,Hi,Xd).call(this,c(this,Di))),this.text=""}}uc=new WeakMap,hi=new WeakMap,xa=new WeakMap,Ma=new WeakMap,dc=new WeakMap,Gh=new WeakMap,hc=new WeakMap,Di=new WeakMap,fc=new WeakMap,Hi=new WeakSet,Xd=function(e){c(this,xa).clear(),c(this,Ma).clear();const i=_g(e.root);if(i===0)return;const s=i>1?c(this,hi)*2/3/(i-1):0,r=-(s*(i-1))/2,o=0,a=c(this,hi)/2;pt(this,Hi,qd).call(this,e.root,o,r,a,s)},qd=function(e,i,s,r,o){if(!e)return;const a=.5,l="←",u="→",d="•",h=new ce("#text");h.text=`${e.value}`;const f=new ce("tspan",{x:0,y:0});f.add(h);const p=new ce("#text");p.text=e.balance<0?l:e.balance>0?u:d;const _=new ce("tspan",{x:0,dy:"0.875em"});_.add(p);const x=new ce("text",{x:0,y:0,"text-anchor":"middle",class:"tree-text"});if(x.add(f,_),e.parent){const m=e===e.parent.left?r:-r;c(this,xa).add(new ce("line",{class:"tree-branch",x1:0,y1:0,x2:m,y2:-o,transform:`translate(${i} ${s})`}))}const g=new ce("g",{transform:`translate(${i} ${s})`});g.add(Gd(a,{class:"tree-leaf"}),x),c(this,Ma).add(g),pt(this,Hi,qd).call(this,e.left,i-r/2,s+o,r/2,o),pt(this,Hi,qd).call(this,e.right,i+r/2,s+o,r/2,o)};var pc;class JC extends _n{constructor(e){super("lorem-view");b(this,pc,_t());this.paragraphs=e}get paragraphs(){return c(this,pc).value}set paragraphs(e){c(this,pc).value=e}}pc=new WeakMap;var mc,gc,_c,vc,xc,Mc,yc,Sc,bc,Ec,wc,Tc,Ac,Cc;class QC extends _n{constructor(){super("controls-view");ht(this,"lorem",new JC(2));ht(this,"paragraphs",[1,2,3,4]);b(this,mc,_t(!0));b(this,gc,_t(3));ht(this,"radioItems",Jn([...Array(4)].map((e,i)=>({name:`item #${i}`,value:i}))));b(this,_c,ku(this.radioItems[2]));ht(this,"checkboxes",Jn([!1,!0,!1,!1]));b(this,vc,_t("nothing"));b(this,xc,_t(!1));b(this,Mc,_t("text"));b(this,yc,_t(!1));b(this,Sc,_t());b(this,bc,_t(!1));b(this,Ec,_t(!1));b(this,wc,_t(50));ht(this,"rangeMin",0);ht(this,"rangeMax",100);ht(this,"rangeStep",2);b(this,Tc,_t(!1));b(this,Ac,_t("email"));b(this,Cc,_t("password"))}showAll(e){this.showButtons=e,this.showDetails=e,this.showRadioDetails=e?0:void 0,this.showIcons=e,this.showRanges=e,this.showInputs=e}get showButtons(){return c(this,mc).value}set showButtons(e){c(this,mc).value=e}get selectedIndex(){return c(this,gc).value}set selectedIndex(e){c(this,gc).value=e}get selectedRadio(){return c(this,_c).value}set selectedRadio(e){c(this,_c).value=e}get message(){return c(this,vc).value}set message(e){c(this,vc).value=e}get popup(){return c(this,xc).value}set popup(e){c(this,xc).value=e}get text(){return c(this,Mc).value}set text(e){c(this,Mc).value=e}click(e){this.message=e}get showDetails(){return c(this,yc).value}set showDetails(e){c(this,yc).value=e}get showRadioDetails(){return c(this,Sc).value}set showRadioDetails(e){c(this,Sc).value=e}get showIcons(){return c(this,bc).value}set showIcons(e){c(this,bc).value=e}get showRanges(){return c(this,Ec).value}set showRanges(e){c(this,Ec).value=e}get rangeValue(){return c(this,wc).value}set rangeValue(e){c(this,wc).value=e}get showInputs(){return c(this,Tc).value}set showInputs(e){c(this,Tc).value=e}get email(){return c(this,Ac).value}set email(e){c(this,Ac).value=e}get password(){return c(this,Cc).value}set password(e){c(this,Cc).value=e}}mc=new WeakMap,gc=new WeakMap,_c=new WeakMap,vc=new WeakMap,xc=new WeakMap,Mc=new WeakMap,yc=new WeakMap,Sc=new WeakMap,bc=new WeakMap,Ec=new WeakMap,wc=new WeakMap,Tc=new WeakMap,Ac=new WeakMap,Cc=new WeakMap;var dh=(n=>(n[n.CLOSED=0]="CLOSED",n[n.NON_MODAL=1]="NON_MODAL",n[n.MODAL=2]="MODAL",n[n.CLOSING_TRANSITION=3]="CLOSING_TRANSITION",n))(dh||{});async function tR(n,t){const{promise:e,resolve:i}=PC(),s=r=>{r.target===n&&r.propertyName===t&&(n.removeEventListener("transitionend",s),i())};return n.addEventListener("transitionend",s),e}var Mn,Ii,Xs,Rc,Pc,Lc,Dc,Ic,Uc,me,Vn,De,vg,Ti,Ai,Wh,$h,Xh,qh,Yh,jh,Kh,Zh,Jh,Qh,tf,ef,nf,sf,rf,of,af,lf,cf,uf,df,hf,ff,pf,mf,gf,_f,vf,xf,fi,Wr,$r,Xr,qr,Yr,jr,Kr,Zr;class eR{constructor(t){b(this,De);b(this,Mn,_t(0));b(this,Ii);b(this,Xs,new Be);b(this,Rc,_t(0));b(this,Pc,_t(0));b(this,Lc,_t(500));b(this,Dc,_t(800));b(this,Ic,_t(480));b(this,Uc,_t(480));b(this,me,{x:0,y:0});b(this,Vn);b(this,Wh,t=>{t.target===c(this,fi).element&&this.center()});b(this,$h,t=>{t.code==="Escape"&&(t.preventDefault(),this.closeAsync("transform"))});b(this,Xh,t=>{t.target===c(this,fi).element&&t.buttons&ze.LEFT&&(c(this,me).x=t.screenX-this.left,c(this,me).y=t.screenY-this.top,pt(this,De,Ti).call(this,c(this,fi),t),t.stopPropagation(),t.preventDefault())});b(this,qh,t=>{this.left=t.screenX-c(this,me).x,this.top=t.screenY-c(this,me).y});b(this,Yh,t=>{t.buttons&ze.LEFT||pt(this,De,Ai).call(this,c(this,fi),t)});b(this,jh,t=>{t.buttons&ze.LEFT&&(c(this,me).x=t.screenX-this.left,c(this,me).y=t.screenY-this.top,pt(this,De,Ti).call(this,c(this,Wr),t))});b(this,Kh,t=>{const e=t.screenX-c(this,me).x,i=t.screenY-c(this,me).y,s=Math.max(this.minWidth,this.left+this.width-e),r=Math.max(this.minHeight,this.top+this.height-i);this.left=this.left+this.width-s,this.top=this.top+this.height-r,this.width=s,this.height=r});b(this,Zh,t=>{t.buttons&ze.LEFT||pt(this,De,Ai).call(this,c(this,Wr),t)});b(this,Jh,t=>{t.buttons&ze.LEFT&&(c(this,me).y=t.screenY-this.top,pt(this,De,Ti).call(this,c(this,$r),t))});b(this,Qh,t=>{const e=t.screenY-c(this,me).y,i=Math.max(this.minHeight,this.top+this.height-e);this.top=this.top+this.height-i,this.height=i});b(this,tf,t=>{t.buttons&ze.LEFT||pt(this,De,Ai).call(this,c(this,$r),t)});b(this,ef,t=>{t.buttons&ze.LEFT&&(c(this,me).x=t.screenX-this.width,c(this,me).y=t.screenY-this.top,pt(this,De,Ti).call(this,c(this,Xr),t))});b(this,nf,t=>{const e=t.screenY-c(this,me).y,i=Math.max(this.minHeight,this.top+this.height-e);this.width=Math.max(this.minWidth,t.screenX-c(this,me).x),this.top=this.top+this.height-i,this.height=i});b(this,sf,t=>{t.buttons&ze.LEFT||pt(this,De,Ai).call(this,c(this,Xr),t)});b(this,rf,t=>{t.buttons&ze.LEFT&&(c(this,me).x=t.screenX-this.left,pt(this,De,Ti).call(this,c(this,qr),t))});b(this,of,t=>{const e=t.screenX-c(this,me).x,i=Math.max(this.minWidth,this.left+this.width-e);this.left=this.left+this.width-i,this.width=i});b(this,af,t=>{t.buttons&ze.LEFT||pt(this,De,Ai).call(this,c(this,qr),t)});b(this,lf,t=>{t.buttons&ze.LEFT&&(c(this,me).x=t.screenX-this.width,pt(this,De,Ti).call(this,c(this,Yr),t))});b(this,cf,t=>{this.width=Math.max(this.minWidth,t.screenX-c(this,me).x)});b(this,uf,t=>{t.buttons&ze.LEFT||pt(this,De,Ai).call(this,c(this,Yr),t)});b(this,df,t=>{t.buttons&ze.LEFT&&(c(this,me).x=t.screenX-this.left,c(this,me).y=t.screenY-this.height,pt(this,De,Ti).call(this,c(this,jr),t))});b(this,hf,t=>{const e=t.screenX-c(this,me).x,i=Math.max(this.minWidth,this.left+this.width-e);this.left=this.left+this.width-i,this.width=i,this.height=Math.max(this.minHeight,t.screenY-c(this,me).y)});b(this,ff,t=>{t.buttons&ze.LEFT||pt(this,De,Ai).call(this,c(this,jr),t)});b(this,pf,t=>{t.buttons&ze.LEFT&&(c(this,me).y=t.screenY-this.height,pt(this,De,Ti).call(this,c(this,Kr),t))});b(this,mf,t=>{this.height=Math.max(this.minHeight,t.screenY-c(this,me).y)});b(this,gf,t=>{t.buttons&ze.LEFT||pt(this,De,Ai).call(this,c(this,Kr),t)});b(this,_f,t=>{t.buttons&ze.LEFT&&(c(this,me).x=t.screenX-this.width,c(this,me).y=t.screenY-this.height,pt(this,De,Ti).call(this,c(this,Zr),t))});b(this,vf,t=>{this.width=Math.max(this.minWidth,t.screenX-c(this,me).x),this.height=Math.max(this.minHeight,t.screenY-c(this,me).y)});b(this,xf,t=>{t.buttons&ze.LEFT||pt(this,De,Ai).call(this,c(this,Zr),t)});b(this,fi,{pick:c(this,Xh),drag:c(this,qh),drop:c(this,Yh)});b(this,Wr,{pick:c(this,jh),drag:c(this,Kh),drop:c(this,Zh)});b(this,$r,{pick:c(this,Jh),drag:c(this,Qh),drop:c(this,tf)});b(this,Xr,{pick:c(this,ef),drag:c(this,nf),drop:c(this,sf)});b(this,qr,{pick:c(this,rf),drag:c(this,of),drop:c(this,af)});b(this,Yr,{pick:c(this,lf),drag:c(this,cf),drop:c(this,uf)});b(this,jr,{pick:c(this,df),drag:c(this,hf),drop:c(this,ff)});b(this,Kr,{pick:c(this,pf),drag:c(this,mf),drop:c(this,gf)});b(this,Zr,{pick:c(this,_f),drag:c(this,vf),drop:c(this,xf)});var e;Q(this,Ii,Object.assign({draggable:!1,resizable:!1},t)),(e=c(this,Ii)).draggable||(e.draggable=c(this,Ii).resizable)}get draggable(){return c(this,Ii).draggable}get resizable(){return c(this,Ii).resizable}get state(){return c(this,Mn).value}close(){pt(this,De,vg).call(this)&&(c(this,Vn).close(),c(this,Mn).value=0)}async closeAsync(t){pt(this,De,vg).call(this)&&(c(this,Mn).value=3,await tR(c(this,Vn),t),c(this,Vn).close(),c(this,Mn).value=0)}show(){if(!c(this,Vn)){c(this,Mn).value=1;return}c(this,Mn).value===0&&(c(this,Vn).show(),c(this,Mn).value=1)}showModal(){if(!c(this,Vn)){c(this,Mn).value=2;return}c(this,Mn).value===0&&(c(this,Vn).showModal(),c(this,Mn).value=2)}get left(){return c(this,Rc).value}set left(t){c(this,Rc).value=t}get top(){return c(this,Pc).value}set top(t){c(this,Pc).value=t}get width(){return c(this,Lc).value}set width(t){c(this,Lc).value=t}get height(){return c(this,Dc).value}set height(t){c(this,Dc).value=t}get minWidth(){return c(this,Ic).value}set minWidth(t){c(this,Ic).value=t}get minHeight(){return c(this,Uc).value}set minHeight(t){c(this,Uc).value=t}mount(t){Q(this,Vn,t),c(this,Xs).add(ve(t,"keydown",c(this,$h)));const e=t.firstChild.children;switch(c(this,Ii).draggable&&(c(this,fi).element=e[4],c(this,Xs).add(ve(c(this,fi).element,"dblclick",c(this,Wh)),ve(c(this,fi).element,"pointerdown",c(this,fi).pick))),c(this,Ii).resizable&&(c(this,Wr).element=e[0],c(this,$r).element=e[1],c(this,Xr).element=e[2],c(this,qr).element=e[3],c(this,Yr).element=e[5],c(this,jr).element=e[6],c(this,Kr).element=e[7],c(this,Zr).element=e[8],[c(this,Wr),c(this,$r),c(this,Xr),c(this,qr),c(this,Yr),c(this,jr),c(this,Kr),c(this,Zr)].forEach(i=>c(this,Xs).add(ve(i.element,"pointerdown",i.pick)))),c(this,Xs).add(_l(()=>this.state,()=>[1,2].includes(this.state)&&this.fit(),{immediate:!0}),()=>{Q(this,Vn,void 0),this.state===3&&(c(this,Mn).value=0)}),this.center(),this.state){case 1:t.show();break;case 2:t.showModal();break}}unmount(){c(this,Xs).dispose()}center(){const t=window.innerWidth,e=window.innerHeight;this.left=Math.floor(.5*(t-this.width)),this.top=Math.floor(.5*(e-this.height))}fit(){const t=window.innerWidth,e=window.innerHeight;this.width>t&&(this.width=t),this.height>e&&(this.height=e),this.left<0&&(this.left=0),this.top<0&&(this.top=0),this.left+this.width>t&&(this.left=(t-this.width)/2),this.top+this.height>e&&(this.top=(e-this.height)/2)}}Mn=new WeakMap,Ii=new WeakMap,Xs=new WeakMap,Rc=new WeakMap,Pc=new WeakMap,Lc=new WeakMap,Dc=new WeakMap,Ic=new WeakMap,Uc=new WeakMap,me=new WeakMap,Vn=new WeakMap,De=new WeakSet,vg=function(){return c(this,Vn)?![0,3].includes(this.state):(c(this,Mn).value=0,!1)},Ti=function(t,e){t.element.addEventListener("pointermove",t.drag),t.element.addEventListener("pointerup",t.drop),t.element.setPointerCapture(e.pointerId)},Ai=function(t,e){t.element.removeEventListener("pointermove",t.drag),t.element.removeEventListener("pointerup",t.drop),t.element.releasePointerCapture(e.pointerId)},Wh=new WeakMap,$h=new WeakMap,Xh=new WeakMap,qh=new WeakMap,Yh=new WeakMap,jh=new WeakMap,Kh=new WeakMap,Zh=new WeakMap,Jh=new WeakMap,Qh=new WeakMap,tf=new WeakMap,ef=new WeakMap,nf=new WeakMap,sf=new WeakMap,rf=new WeakMap,of=new WeakMap,af=new WeakMap,lf=new WeakMap,cf=new WeakMap,uf=new WeakMap,df=new WeakMap,hf=new WeakMap,ff=new WeakMap,pf=new WeakMap,mf=new WeakMap,gf=new WeakMap,_f=new WeakMap,vf=new WeakMap,xf=new WeakMap,fi=new WeakMap,Wr=new WeakMap,$r=new WeakMap,Xr=new WeakMap,qr=new WeakMap,Yr=new WeakMap,jr=new WeakMap,Kr=new WeakMap,Zr=new WeakMap;const ei=(n,t)=>n.toFixed(t),gi=(n,t,e)=>ei(n*Math.cos(t),e),_i=(n,t,e)=>ei(n*Math.sin(t),e);var Nc,Fc,ya,Jr,Oc,Bc,kc,Sa,Yd;class nR{constructor(t,e,i,s){b(this,Sa);ht(this,"root",new ce("svg"));ht(this,"id");b(this,Nc);b(this,Fc);b(this,ya,new ce("defs"));b(this,Jr,new ce("g"));b(this,Oc,new ce("g"));b(this,Bc,[]);b(this,kc,new ce("g"));this.id=t,Q(this,Nc,e),Q(this,Fc,i),c(this,Jr).add(c(this,Oc));for(let r=0;r<s;++r){const o=new ce("g");c(this,Bc).push(o),c(this,Jr).add(o)}this.root.add(c(this,ya),c(this,Jr),c(this,kc))}get width(){return c(this,Nc)}get height(){return c(this,Fc)}get content(){return c(this,Jr)}get background(){return c(this,Oc)}get overlay(){return c(this,kc)}addDefs(...t){c(this,ya).add(...t)}addToLayer(t,e){c(this,Bc)[t].add(e)}removeRefs(t){pt(this,Sa,Yd).call(this,this.root,e=>e.attributes.href===t)}removeDef(t){pt(this,Sa,Yd).call(this,c(this,ya),e=>e.attributes.id===t)}}Nc=new WeakMap,Fc=new WeakMap,ya=new WeakMap,Jr=new WeakMap,Oc=new WeakMap,Bc=new WeakMap,kc=new WeakMap,Sa=new WeakSet,Yd=function(t,e){t.items.filter(e).forEach(i=>t.remove(i)),t.items.forEach(i=>pt(this,Sa,Yd).call(this,i,e))};const iR=Ze.rotation,sR=Ze.scale,rR=Ze.translation;var Vc,zc,Hc,Gc;class gM extends ce{constructor(e,i){super(e,i);b(this,Vc,new Be);b(this,zc,_t(new Ae));b(this,Hc,_t(0));b(this,Gc,_t(new Ae(1,1)));c(this,Vc).add(qa(()=>this.attributes.transform=this.transform.toCss()))}dispose(){c(this,Vc).dispose()}get position(){return c(this,zc).value}set position(e){c(this,zc).value=e.clone()}get scale(){return c(this,Gc).value}set scale(e){c(this,Gc).value=e.clone()}get rotation(){return c(this,Hc).value}set rotation(e){c(this,Hc).value=ts(e,2*Math.PI)}get transform(){return rR(this.position.x,this.position.y).multiply(iR(this.rotation)).multiply(sR(this.scale.x,this.scale.y))}set transform(e){const{translation:i,rotation:s,scale:r}=e.decompose();this.position=i,this.rotation=s,this.scale=r}}Vc=new WeakMap,zc=new WeakMap,Hc=new WeakMap,Gc=new WeakMap;function xl(n,t){return new gM("use",{href:`#${n.attributes.id}`,...t})}function h0(n,{add:t=[],remove:e=[]}){const i=n.split(" ").filter(s=>!t.includes(s)&&!e.includes(s));return i.push(...t),i.join(" ")}class al{constructor(t,e){ht(this,"type");ht(this,"radius");ht(this,"shape");this.type=t,this.radius=e.radius;const i=`shape:${t}-${e.radius}`;this.shape=new ce("path",{id:i,d:dR(t,e),"fill-rule":"evenodd","stroke-width":.5,"vector-effect":"non-scaling-stroke"})}get id(){return this.shape.attributes.id}}var Qr,is,to,Ui,Wc,ba,qs;class oR{constructor(t,e,i,s,r,o){b(this,Qr);b(this,is);b(this,to);b(this,Ui);ht(this,"state","ok");b(this,Wc);b(this,ba,0);b(this,qs);Q(this,Wc,t),Q(this,Qr,e),Q(this,is,xl(i,{class:`shaft-back ${t}`})),t!=="source"&&(c(this,is).attributes.class+=" unpowered"),Q(this,to,xl(s,{class:"shaft-base"})),Q(this,Ui,xl(r,{class:`shaft ${t}`}))}get position(){return c(this,Ui).position}set position(t){c(this,is).position=c(this,to).position=c(this,Ui).position=t}get rotation(){return c(this,Ui).rotation}set rotation(t){c(this,Ui).rotation=t,c(this,qs)&&(c(this,qs).rotation=t)}get type(){return c(this,Wc)}get speed(){return c(this,ba)}set speed(t){if(c(this,ba)!==0!=(t!==0)){const e=c(this,is).attributes;t!==0?e.class=h0(e.class,{add:["powered"],remove:["unpowered"]}):e.class=h0(e.class,{add:["unpowered"],remove:["powered"]})}Q(this,ba,t)}get actor(){return c(this,qs)}set actor(t){const e=c(this,qs);if(e===t){e&&(e.position=this.position,this.rotation=e.rotation);return}Q(this,qs,t),e&&e.rotor===this&&(e.rotor=void 0),t&&t.rotor!==this&&(t.rotor=this,t.position=this.position,this.rotation=t.rotation)}addToScene(){c(this,Qr).addToLayer(0,c(this,is)),c(this,Qr).addToLayer(0,c(this,to)),c(this,Qr).addToLayer(0,c(this,Ui))}removeFromScene(){[c(this,is),c(this,to),c(this,Ui)].forEach(t=>t.parent.remove(t))}}Qr=new WeakMap,is=new WeakMap,to=new WeakMap,Ui=new WeakMap,Wc=new WeakMap,ba=new WeakMap,qs=new WeakMap;var $c,fn,Ys,js,Ea;class aR{constructor(t,e,i,s,r){b(this,$c);b(this,fn);b(this,Ys);b(this,js);b(this,Ea);ht(this,"defaultPosition",new Ae);Q(this,$c,t),Q(this,fn,[xl(e.shape,{class:`${e.type} ${s}`}),xl(i.shape,{class:`${i.type} ${r}`})]),Q(this,Ys,[e.radius,i.radius]),Q(this,js,[e.type,i.type])}get radii(){return c(this,Ys)}get types(){return c(this,js)}get position(){return c(this,fn)[0].position}set position(t){c(this,fn).forEach(e=>e.position=t)}get rotation(){return c(this,fn)[0].rotation}set rotation(t){c(this,fn).forEach(e=>e.rotation=t)}get rotor(){return c(this,Ea)}set rotor(t){const e=c(this,Ea);if(e===t){e&&(this.position=e.position);return}Q(this,Ea,t),e&&e.actor===this&&(e.actor=void 0),t&&t.actor!==this&&(t.actor=this)}select(){c(this,fn).forEach(t=>{t.attributes.class.includes("selected")||(t.attributes.class+=" selected")})}unselect(){c(this,fn).forEach(t=>{t.attributes.class.includes("selected")&&(t.attributes.class=t.attributes.class.split(" ").filter(e=>e!=="selected").join(" "))})}addToScene(){c(this,fn).forEach((t,e)=>c(this,$c).addToLayer(e+1,t))}removeFromScene(){c(this,fn).forEach(t=>t.parent.remove(t))}moveToTop(){c(this,fn).forEach(t=>t.index=-1)}flip(){Q(this,fn,[c(this,fn)[1],c(this,fn)[0]]),Q(this,Ys,[c(this,Ys)[1],c(this,Ys)[0]]),Q(this,js,[c(this,js)[1],c(this,js)[0]]),this.addToScene()}}$c=new WeakMap,fn=new WeakMap,Ys=new WeakMap,js=new WeakMap,Ea=new WeakMap;const xg=3,de=2,r_={radius:1,innerRadius:1,offset:0,thickness:.375,spokeThickness:.375,spokes:3,toothHeight:.875,shaftRadius:.375,baseRadius:.75,margin:.1,shaftMargin:.06};function o_(n){return Object.assign({...r_},n)}function _M(n){const t=o_(n),e=t.innerRadius,i=t.thickness,s=t.spokeThickness,r=t.toothHeight,o=t.offset,l=t.radius-.5*r-i,u=e,d=t.spokes,h=2*Math.PI/d,f=.5*s/l,p=h-f,_=.5*s/u,x=h-_,g=[];for(let m=0;m<d;++m){const R=m*h+o;g.push(`M ${gi(l,R+f,de)} ${_i(l,R+f,de)}`,`L ${gi(u,R+_,de)} ${_i(u,R+_,de)}`,`A ${ei(u,de)} ${ei(u,de)} 0 0 1 ${gi(u,R+x,de)} ${_i(u,R+x,de)}`,`L ${gi(l,R+p,de)} ${_i(l,R+p,de)}`,`A ${ei(l,de)} ${ei(l,de)} 0 0 0 ${gi(l,R+f,de)} ${_i(l,R+f,de)} z`)}return g.join(" ")}function lR(n){const t=ei(r_.baseRadius,de);return`M ${t} 0 A ${t} ${t} 0 0 1 -${t} 0 A ${t} ${t} 0 0 1 ${t} 0 z`}function a_(n){n=n||r_.shaftRadius;const t=6,e=Math.PI/t,i=-e/2,s=[`M ${gi(n,i,de)} ${_i(n,i,de)}`],r=n/3,o=n/2;for(let a=0;a<t;++a){const l=i+2*e*a+e,u=l+e;s.push(`A ${ei(r,de)} ${ei(r,de)} 0 0 1 ${gi(n,l,de)} ${_i(n,l,de)}`,`A ${ei(o,de)} ${ei(o,de)} 0 0 0 ${gi(n,u,de)} ${_i(n,u,de)}`)}return s.push("z"),s.join(" ")}function cR(n){const t=o_(n),e=t.radius-.5*t.toothHeight,i=t.shaftRadius,s=ei(e,de),r=[`M ${s} 0 A${s} ${s} 0 0 1 -${s} 0 A ${s} ${s} 0 0 1 ${s} 0`];return e>i+.1&&r.push(_M(t)),r.push(a_(i+t.shaftMargin)),r.join(" ")}function uR(n){const t=o_(n),e=t.toothHeight,i=t.margin,s=xg*t.radius,r=t.shaftRadius,o=2*Math.PI/s,a=0,l=o*.45,u=o*.17,d=o*.5,h=o-l,f=o,p=t.radius-.5*e,_=p/Math.cos(l),x=p+e-i,T=[x/Math.cos(d-u),x,_,p],A=[u,d,h,f],F=[`M ${gi(p,a,de)} ${_i(p,a,de)} C ${gi(_,l,de)} ${_i(_,l,de)}`];for(let D=0;D<s;++D){const L=D*o,k=J=>`${gi(T[J],L+A[J],de)} ${_i(T[J],L+A[J],de)}`;D!==0&&F.push("S"),F.push(`${k(0)} ${k(1)} S ${k(2)} ${k(3)} `)}return F.push("z"),F.push(_M(t)),F.push(a_(r+t.shaftMargin)),F.join(" ")}function dR(n,t){switch(n){case"gear":return uR(t);case"stub":return cR(t)}}const As=(n,t)=>new Ae(n,t),f0=[{shafts:[{type:"source",position:As(-3,7)},{type:"mediator",position:As(-3,-1)},{type:"destination",position:As(4,-1)},{type:"destination",position:As(4,7)}],gears:[{position:As(-12,-8),shapes:[{type:"gear",radius:5,fill:"fill-5"},{type:"stub",radius:3,fill:"fill-3"}]},{position:As(4,-12),shapes:[{type:"gear",radius:5,fill:"fill-4"},{type:"gear",radius:3,fill:"fill-2"}]},{position:As(-5,-14),shapes:[{type:"gear",radius:3,fill:"fill-0"},{type:"gear",radius:2,fill:"fill-7"}]},{position:As(13,-8),shapes:[{type:"gear",radius:4,fill:"fill-1"},{type:"gear",radius:2,fill:"fill-6"}]}],connections:[]}],wi=.001;var Xc,Mg;class hR{constructor(){b(this,Xc);ht(this,"rotors",[])}clear(){this.rotors.length=0}addRotor(t){this.rotors.push(t)}setActor(t,e){t.actor=e}solve(t){if(this.rotors.length<2){t({type:"bad data"});return}const e=this.rotors.find(a=>a.type==="source");if(!e){t({type:"no source"});return}this.rotors.forEach(a=>{a.state="ok",a.speed=0});for(let a=0;a<this.rotors.length-1;++a)for(let l=a+1;l<this.rotors.length;++l){const u=this.rotors[a],d=u.actor?[...u.actor.radii]:[1,1],h=u.actor?[...u.actor.types]:["stub","stub"],f=this.rotors[l],p=f.actor?[...f.actor.radii]:[1,1],_=f.actor?[...f.actor.types]:["stub","stub"],x=pt(this,Xc,Mg).call(this,u,f),g=[d[0]+p[0],d[1]+p[1]];if(x>g[0]+wi&&x>g[1]+wi)continue;if(g[0]>x+wi||g[1]>x+wi){u.state==="ok"&&(u.state="collision"),f.state==="ok"&&(f.state="collision"),t({type:"collision",rotors:[u,f]});continue}const m=[0,0];g.forEach((T,A)=>{Math.abs(T-x)<wi&&h[A]==="gear"&&_[A]==="gear"&&(m[A]=-d[A]/p[A])});const R=m.map(Math.abs);if(R[0]>0&&R[1]>0&&Math.abs(R[0]-R[1])>wi){u.state==="ok"&&(u.state="block"),f.state==="ok"&&(f.state="block"),t({type:"block",rotors:[u,f]});continue}}if(e.state!=="ok"){t({type:"not finished"});return}e.speed=1;const i=new Map([[e,{speed:e.speed,rotation:e.rotation}]]);let s,r=new Set([e]);for(;r.size>0;)s=r,r=new Set,s.forEach(a=>{const l=a.actor?[...a.actor.radii]:[1,1],u=a.actor?[...a.actor.types]:["stub","stub"],d=i.get(a);this.rotors.forEach(h=>{var A;if(a===h||d.source===h||((A=i.get(h))==null?void 0:A.source)===a||a.state!=="ok"&&h.state!=="ok")return;const f=h.actor?[...h.actor.radii]:[1,1],p=h.actor?[...h.actor.types]:["stub","stub"],_=pt(this,Xc,Mg).call(this,a,h),x=[l[0]+f[0],l[1]+f[1]];if(_>x[0]+wi&&_>x[1]+wi)return;const g=[0,0];x.forEach((F,D)=>{Math.abs(F-_)<wi&&u[D]==="gear"&&p[D]==="gear"&&(g[D]=-d.speed*l[D]/f[D])});const m=g.map(Math.abs);if((m[0]>0||m[1]>0)&&(a.state!=="ok"||h.state!=="ok")){a.state==="ok"&&(a.state="block"),h.state==="ok"&&(h.state="block"),t({type:"block",rotors:[a,h]});return}const R=m[0]>m[1]?g[0]:g[1],T=m[0]>m[1]?0:1;if(i.has(h)){const F=i.get(h);if(Math.abs(F.speed-R)>wi){a.state==="ok"&&(a.state="block"),h.state==="ok"&&(h.state="block"),t({type:"block",rotors:[a,h]});return}}else{const F=new Ae(h.position.x-a.position.x,h.position.y-a.position.y),D=ts(Math.atan2(F.y,F.x),2*Math.PI),L=ts(D-d.rotation,2*Math.PI),k=2*Math.PI/xg/l[T],J=ts(L,k)/k,y=ts(D+Math.PI-h.rotation,2*Math.PI),E=2*Math.PI/xg/f[T],O=ts(y,E)/E,W=ts(.5-J,1);let tt=ts(O-W,1);tt>.5&&(tt-=1);const ct=h.rotation+tt*E;i.set(h,{speed:R,rotation:ct,source:a}),r.add(h)}})});this.rotors.filter(a=>a.type==="destination").forEach(a=>{i.has(a)?i.get(a).speed===0&&t({type:"not finished"}):t({type:"not finished"})}),i.forEach((a,l)=>{l.speed=a.speed,l.rotation=a.rotation}),this.rotors.forEach(a=>{i.has(a)||(a.speed=0)})}}Xc=new WeakSet,Mg=function(t,e){return ug(t.position,e.position)};var qc,Ke,eo,ss,Yc,Ni,rs,jc,Kc,Zc,no,io,wa,jn,Ks,so,Zs,Ta,Jc,ro,Aa,oo,Kn,Ca,Ra,Js,we,yg,Mf,yf,vM,xM,MM,Sg,yM,SM,bM,bg,EM,Eg,wM,Sf,bf,Ef;class fR extends _n{constructor(){super("gears-view","gears-button");b(this,we);b(this,qc,new Be);b(this,Ke,new nR("gb",36.8,36.8,3));b(this,eo,new ar({scale:new Ae(1,-1)}));b(this,ss,new qu(c(this,Ke).root,c(this,Ke).content,c(this,eo),{minZoom:.5,maxZoom:2}));b(this,Yc,0);b(this,Ni,[]);b(this,rs,[]);b(this,jc,new ce("circle",{id:"shaft-back",r:3.5}));b(this,Kc,new ce("path",{id:"shaft-base",d:lR(),stroke:"black","stroke-width":.25,"vector-effect":"non-scaling-stroke"}));b(this,Zc,new ce("path",{id:"shaft",d:a_(),"stroke-width":1,"vector-effect":"non-scaling-stroke"}));b(this,no,new Map);b(this,io,new Map);b(this,wa,new hR);b(this,jn,0);b(this,Ks,.75);b(this,so,0);b(this,Zs,c(this,Ks));b(this,Ta,new Pl);b(this,Jc,0);b(this,ro,0);b(this,Aa,new Pl);b(this,oo,Wo.NONE);b(this,Kn);b(this,Ca);b(this,Ra);b(this,Js);b(this,Mf,e=>{Q(this,jn,Gn(c(this,jn)+e*c(this,so),-c(this,Ks),c(this,Ks))),pt(this,we,yg).call(this,e*c(this,jn)),c(this,so)<0&&c(this,jn)<0&&(c(this,Ta).stop(),c(this,Aa).isActive()||Q(this,jn,0))});b(this,yf,e=>{Q(this,jn,Gn(c(this,jn)+e*c(this,ro),-c(this,Ks),c(this,Ks))),pt(this,we,yg).call(this,e*c(this,jn));const i=ti()-c(this,Jc);i>.2&&Q(this,ro,c(this,Zs)),i>.6&&Q(this,ro,-c(this,Zs)),i>1&&(c(this,Aa).stop(),c(this,Ta).isActive()||Q(this,jn,0))});b(this,Sf,e=>{if(e.button!==vo.LEFT&&e.button!==vo.RIGHT)return;const i=pt(this,we,Eg).call(this,e);if(i){if(e.stopPropagation(),e.stopImmediatePropagation(),i.moveToTop(),e.button===vo.RIGHT){i.flip(),i.rotor&&this.check();return}Q(this,oo,Wo.DRAG),e.currentTarget.setPointerCapture(e.pointerId),Q(this,Kn,i),Q(this,Ra,i.position),Q(this,Ca,c(this,eo).transform.transform(c(this,ss).toCamera(e))),pt(this,we,bg).call(this,c(this,Kn))}});b(this,bf,e=>{if(c(this,oo)!==Wo.DRAG){pt(this,we,bg).call(this,pt(this,we,Eg).call(this,e));return}const i=1,s=c(this,eo).transform.transform(c(this,ss).toCamera(e)),r=new Ae(s.x-c(this,Ca).x,s.y-c(this,Ca).y),o=new Ae(c(this,Ra).x+r.x,c(this,Ra).y+r.y),a=pt(this,we,wM).call(this,o,i);if(!(a&&a===c(this,Kn).rotor)){if(a&&!a.actor){a.actor=c(this,Kn),this.solve();return}c(this,Kn).rotor=void 0,c(this,Kn).position=o}});b(this,Ef,e=>{c(this,oo)===Wo.DRAG&&(Q(this,oo,Wo.NONE),e.currentTarget.releasePointerCapture(e.pointerId),c(this,Kn).rotor||(c(this,Kn).position=c(this,Kn).defaultPosition),this.check())});c(this,ss).resize(c(this,Ke).width,c(this,Ke).height),pt(this,we,xM).call(this),pt(this,we,vM).call(this),pt(this,we,yM).call(this,f0[c(this,Yc)])}get root(){return c(this,Ke).root}mount(e){c(this,qc).add(ve(e,"pointerdown",c(this,Sf)),ve(e,"pointermove",c(this,bf)),ve(e,"pointerup",c(this,Ef)),()=>c(this,ss).dispose()),c(this,ss).mount(e)}unmount(){c(this,qc).dispose()}reset(){pt(this,we,Sg).call(this,f0[c(this,Yc)])}solve(){c(this,wa).clear(),c(this,Ni).forEach(e=>c(this,wa).addRotor(e)),c(this,wa).solve(e=>{})}check(){this.solve(),this.sway()}start(){Q(this,so,c(this,Zs)),c(this,Ta).start(c(this,Mf))}stop(){Q(this,so,-c(this,Zs))}sway(){Q(this,Jc,ti()),Q(this,ro,-c(this,Zs)),c(this,Aa).start(c(this,yf))}}qc=new WeakMap,Ke=new WeakMap,eo=new WeakMap,ss=new WeakMap,Yc=new WeakMap,Ni=new WeakMap,rs=new WeakMap,jc=new WeakMap,Kc=new WeakMap,Zc=new WeakMap,no=new WeakMap,io=new WeakMap,wa=new WeakMap,jn=new WeakMap,Ks=new WeakMap,so=new WeakMap,Zs=new WeakMap,Ta=new WeakMap,Jc=new WeakMap,ro=new WeakMap,Aa=new WeakMap,oo=new WeakMap,Kn=new WeakMap,Ca=new WeakMap,Ra=new WeakMap,Js=new WeakMap,we=new WeakSet,yg=function(e){c(this,Ni).forEach(i=>{const s=e*i.speed;i.rotation+=s})},Mf=new WeakMap,yf=new WeakMap,vM=function(){c(this,Ke).background.add(lr(c(this,Ke).width/2,c(this,Ke).width/4,1,1,"#00000010"),lr(c(this,Ke).width/2,c(this,Ke).width/4,10,1,"#00000040"))},xM=function(){[2,3,4,5].forEach(e=>{c(this,no).set(e,new al("stub",{radius:e,thickness:.3,offset:-Math.PI/10,spokeThickness:.25,spokes:5}))}),[new al("gear",{radius:2,innerRadius:.9,offset:0,spokes:4}),new al("gear",{radius:3,innerRadius:.84,offset:Math.PI/3,spokes:3}),new al("gear",{radius:4,innerRadius:.78,offset:Math.PI/4,spokes:4}),new al("gear",{radius:5,innerRadius:.72,offset:Math.PI/10,spokes:5})].forEach(e=>c(this,io).set(e.radius,e)),c(this,Ke).addDefs(c(this,jc),c(this,Kc),c(this,Zc)),c(this,no).forEach(e=>c(this,Ke).addDefs(e.shape)),c(this,io).forEach(e=>c(this,Ke).addDefs(e.shape)),[["powered","#00ff00"],["unpowered","#c0c000"],["unpowered-destination","#ff0000"]].forEach(([e,i])=>{const s=new ce("radialGradient",{id:`shaft-back-${e}`});s.add(new ce("stop",{offset:.25,"stop-color":`${i}40`}),new ce("stop",{offset:1,"stop-color":`${i}00`})),c(this,Ke).addDefs(s)})},MM=function(){c(this,Ni).forEach(e=>e.removeFromScene()),c(this,Ni).length=0,c(this,rs).forEach(e=>e.removeFromScene()),c(this,rs).length=0},Sg=function(e){c(this,rs).forEach(i=>{i.rotor=void 0,i.position=i.defaultPosition}),e.connections.forEach(({shaft:i,gear:s})=>c(this,Ni)[i].actor=c(this,rs)[s]),this.solve()},yM=function(e){pt(this,we,MM).call(this),e.shafts.forEach(({type:i,position:s},r)=>pt(this,we,SM).call(this,i,r,s)),e.gears.forEach((i,s)=>{const r=i.position,o=[i.shapes[0].type,i.shapes[1].type],a=[i.shapes[0].radius,i.shapes[1].radius],l=[i.shapes[0].fill,i.shapes[1].fill],u=[(o[0]==="gear"?c(this,io):c(this,no)).get(a[0]),(o[1]==="gear"?c(this,io):c(this,no)).get(a[1])];pt(this,we,bM).call(this,u[0],u[1],l[0],l[1],r)}),pt(this,we,Sg).call(this,e)},SM=function(e,i,s){const r=new oR(e,c(this,Ke),c(this,jc),c(this,Kc),c(this,Zc),i);r.position=s,c(this,Ni).push(r),r.addToScene()},bM=function(e,i,s,r,o){const a=new aR(c(this,Ke),e,i,s,r);a.position=a.defaultPosition=o,c(this,rs).push(a),a.addToScene()},bg=function(e){var i;c(this,Js)!==e&&(pt(this,we,EM).call(this),Q(this,Js,e),(i=c(this,Js))==null||i.select())},EM=function(){var e;(e=c(this,Js))==null||e.unselect(),Q(this,Js,void 0)},Eg=function(e){const i=c(this,eo).transform.transform(c(this,ss).toCamera(e)),s=[];if(c(this,rs).forEach(r=>{const o=ug(r.position,i);(o<r.radii[0]||o<r.radii[1])&&s.push({gear:r,penetration:Math.max(r.radii[0]-o,r.radii[1]-o)})}),s.length>0){let r=0,o=s[0].penetration;for(let a=1;a<s.length;++a)s[a].penetration>o&&(r=a,o=s[a].penetration);return s[r].gear}},wM=function(e,i){let s,r=i;return c(this,Ni).forEach(o=>{const a=ug(o.position,e);a<r&&(s=o,r=a)}),s},Sf=new WeakMap,bf=new WeakMap,Ef=new WeakMap;function pR(n){return new Worker("/assets/worker-CEG7nxwq.js",{name:n==null?void 0:n.name})}const mR=`<svg xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="grayscale">
    <feColorMatrix
      type="matrix"
      in="SourceGraphic"
      values="
        0.2126 0.7152 0.0722 0 0
        0.2126 0.7152 0.0722 0 0
        0.2126 0.7152 0.0722 0 0
        0      0      0      1 0
      "
    />
  </filter>
  <filter id="image-filter">
    <feColorMatrix id="image-grayscale"
      type="matrix"
      in="SourceGraphic"
      values="
        0.2126 0.7152 0.0722 0 0
        0.2126 0.7152 0.0722 0 0
        0.2126 0.7152 0.0722 0 0
        0      0      0      1 0
      "
    />
    <feComponentTransfer id="image-brightness">
      <feFuncR type="linear" slope="1"/>
      <feFuncG type="linear" slope="1"/>
      <feFuncB type="linear" slope="1"/>
    </feComponentTransfer>
    <feComponentTransfer id="image-contrast">
      <feFuncR type="linear" slope="1" intercept="0"/>
      <feFuncG type="linear" slope="1" intercept="0"/>
      <feFuncB type="linear" slope="1" intercept="0"/>
    </feComponentTransfer>
  </filter>
  <filter id="shadow" x="-1" y="-1" width="3" height="3">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
  <filter id="highlight" x="-1" y="-1" width="3" height="3">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="shadow"/>
    <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur"/>
    <feFlood flood-color="white" result="color"/>
    <feComposite in="color" operator="in" in2="blur"/>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="shadow"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>
<g id="images-content">
  <g id="images-back" />
  <image id="image" filter="url(#image-filter)" pointer-events="none" />
</g>
</svg>
`;var Pa,La,Qc,tu;class gR extends Promise{constructor(e,i,s){let r,o;super((a,l)=>{r=a,o=l});b(this,Pa);b(this,La);b(this,Qc);b(this,tu);ht(this,"resolve",e=>{c(this,Qc).call(this,c(this,Pa),e)});ht(this,"reject",e=>{c(this,tu).call(this,c(this,La),e)});Q(this,Pa,r),Q(this,La,o),Q(this,Qc,i||((a,l)=>a(l))),Q(this,tu,s||((a,l)=>a(l))),e(c(this,Pa),c(this,La))}}Pa=new WeakMap,La=new WeakMap,Qc=new WeakMap,tu=new WeakMap;let p0=class{constructor(t,e,i){ht(this,"width");ht(this,"height");ht(this,"source");this.width=t,this.height=e,this.source=i}};var eu,ao,wf,lo,nu,iu,su,co,os,ru,ou,au,lu,cu,uu,uo,Tf,du,Af,Cf,TM;class _R extends _n{constructor(){super("flowers-view","flowers-button");b(this,Cf);ht(this,"images",Jn([]));ht(this,"root");b(this,eu,_t(0));b(this,ao,500);b(this,wf,new ar({scale:new Ae(1,1)}));b(this,lo);ht(this,"radiusMin",100);ht(this,"radiusMax",500);ht(this,"radiusStep",50);b(this,nu,_t(250));ht(this,"petalsMin",3);ht(this,"petalsMax",9);b(this,iu,_t(5));ht(this,"countMin",10);ht(this,"countMax",100);ht(this,"countStep",5);b(this,su,_t(10));ht(this,"bottom",Jn({r:0,g:0,b:0}));ht(this,"middle",Jn({r:255,g:0,b:0}));ht(this,"top",Jn({r:255,g:255,b:255}));b(this,co,_t(0));b(this,os);b(this,ru);b(this,ou);b(this,au);b(this,lu,_t(0));b(this,cu,_t(0));b(this,uu,_t(0));b(this,uo,new pR);b(this,Tf,new Be);b(this,du,new Be);b(this,Af,e=>{const i=e.data;switch(i.type){case"stop":c(this,os)&&c(this,os).resolve();break;case"flower":if(i.id>=this.images.length)break;this.images[i.id]=new p0(i.radius*2,i.radius*2,FC(i.image)),--c(this,co).value;break}});c(this,uo).onmessage=c(this,Af),this.root=pM(mR);const e=this.root.find("images-content");Q(this,lo,new qu(this.root,e,c(this,wf))),c(this,lo).resize(c(this,ao),c(this,ao)),Q(this,ru,this.root.find("image-grayscale")),Q(this,ou,this.root.find("image-brightness")),Q(this,au,this.root.find("image-contrast")),this.grayscale=0,this.brightness=100,this.contrast=100;const i=this.root.find("image");c(this,Tf).add(()=>c(this,uo).terminate(),qa(()=>{if(this.selectedIndex>=this.images.length)return;const s=this.images[this.selectedIndex];Object.assign(i.attributes,{x:-s.width/2,y:-s.height/2,width:s.width,height:s.height,href:s.source})})),pt(this,Cf,TM).call(this),this.generate()}mount(e){c(this,lo).mount(e),c(this,du).add(()=>c(this,lo).unmount())}unmount(){c(this,du).dispose()}get selectedIndex(){return c(this,eu).value}set selectedIndex(e){c(this,eu).value=e}get image(){return this.images[this.selectedIndex]}get grayscale(){return c(this,lu).value}set grayscale(e){c(this,lu).value=e;const i=1-.01*e;c(this,ru).attributes.values=[.2126+.7874*i,.7152-.7152*i,.0722-.0722*i,0,0,.2126-.2126*i,.7152+.2848*i,.0722-.0722*i,0,0,.2126-.2126*i,.7152-.7152*i,.0722+.9278*i,0,0,0,0,0,1,0].map(s=>s.toFixed(4)).join(" ")}get brightness(){return c(this,cu).value}set brightness(e){c(this,cu).value=e;const i=.01*e;for(const s of c(this,ou).items)s.attributes.slope=i}get contrast(){return c(this,uu).value}set contrast(e){c(this,uu).value=e;const i=.01*e,s=.5*(1-i);for(const r of c(this,au).items)r.attributes.slope=i,r.attributes.intercept=s}get radius(){return c(this,nu).value}set radius(e){c(this,nu).value=e}get petals(){return c(this,iu).value}set petals(e){c(this,iu).value=e}get count(){return c(this,su).value}set count(e){c(this,su).value=e}get todo(){return c(this,co).value}async generate(){if(!this.todo){this.selectedIndex=0,this.images.length=0,await this.stop(),c(this,co).value=this.count;for(let e=0;e<this.count;++e)this.images.push(new p0(0,0,"")),c(this,uo).postMessage({type:"flower",id:e,radius:this.radius,petals:this.petals,t:e/(this.count-1),bottom:{...this.bottom},middle:{...this.middle},top:{...this.top}})}}async stop(){c(this,os)||(c(this,uo).postMessage({type:"stop"}),Q(this,os,new gR(()=>{}))),await c(this,os),Q(this,os,void 0),c(this,co).value=0}}eu=new WeakMap,ao=new WeakMap,wf=new WeakMap,lo=new WeakMap,nu=new WeakMap,iu=new WeakMap,su=new WeakMap,co=new WeakMap,os=new WeakMap,ru=new WeakMap,ou=new WeakMap,au=new WeakMap,lu=new WeakMap,cu=new WeakMap,uu=new WeakMap,uo=new WeakMap,Tf=new WeakMap,du=new WeakMap,Af=new WeakMap,Cf=new WeakSet,TM=function(){this.root.find("images-back").add(XC(c(this,ao)/2,c(this,ao)/10,void 0,{class:"flowers-background"}))};const vR=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <style>
    .logo-title {
      font-size: 12px;
      text-anchor: end;
      filter: drop-shadow(0 0 0.25px rgb(0 0 0 / 0.25));
    }
    .logo-ext {
      font-size: 4px;
      filter: drop-shadow(0 0 0.25px rgb(0 0 0 / 0.25));
    }
    .logo-details {
      font-size: 3px;
      filter: drop-shadow(0 0 0.25px rgb(0 0 0 / 0.25));
    }
  </style>
  <defs>
    <path id="logo-yellow" d="M 24,12 32,52 56,36" />
    <path id="logo-blue" d="M 8,8 16,48 40,32" />
    <g id="logo">
      <text id="logo-title" class="logo-title" x="44" y="32">
        Demo
      </text>
      <text id="logo-ext" class="logo-ext" x="44" y="32">
        .app
      </text>
      <text id="logo-vue" class="logo-details" x="32" y="37">
        Vue.js
      </text>
      <text id="logo-three" class="logo-details" x="32" y="41">
        Three.js
      </text>
      <text id="logo-svg" class="logo-details" x="32" y="45">
        SVG
      </text>
    </g>
    <clipPath id="logo-yellow-clip">
      <use href="#logo-yellow" />
    </clipPath>
    <clipPath id="logo-blue-clip">
      <use href="#logo-blue" />
    </clipPath>
  </defs>

  <!-- ground -->
  <use href="#logo" fill="#00000018" x="6" y="6" />
  <use href="#logo-yellow" fill="#f0600020" x="2" y="2" />
  <use href="#logo-blue" fill="#0060a030" x="4" y="4" />

  <!-- yellow -->
  <use href="#logo-yellow" fill="#f06000c0" />
  <g clip-path="url(#logo-yellow-clip)">
    <use href="#logo" fill="#00000020" x="4" y="4" />
    <use href="#logo-blue" fill="#0060a030" x="2" y="2" />
  </g>

  <!-- blue -->
  <use href="#logo-blue" fill="#0060a0c0" />
  <g clip-path="url(#logo-blue-clip)">
    <use href="#logo" fill="#00000020" x="2" y="2" />
  </g>

  <!-- text -->
  <use href="#logo" fill="#d0d0d0" />
</svg>
`;var hu,ho,fo,Rf,AM,Pf;class xR extends _n{constructor(){super("logo-view","logo-button");b(this,Rf);b(this,hu,new Be);ht(this,"root",pM(vR,(e,i)=>typeof i=="object"&&["logo-title","logo-ext","logo-vue","logo-three","logo-svg","logo-yellow","logo-blue"].includes(i.id)?new gM(e,i):new ce(e,i)));b(this,ho,new Pl);b(this,fo,{});b(this,Pf,e=>{})}mount(e){c(this,hu).add(ve(e,"pointermove",c(this,Pf)),()=>pt(this,Rf,AM).call(this)),this.animate()}unmount(){c(this,hu).dispose()}animate(){if(c(this,ho).isActive())return;const e=ti(),i=2;c(this,ho).start(()=>{let s=ti()-e;s>=i&&(s=i,c(this,ho).stop());for(const r in c(this,fo)){const o=c(this,fo)[r];o.item.transform=o.animation(o.item,s/i)}})}test(){}}hu=new WeakMap,ho=new WeakMap,fo=new WeakMap,Rf=new WeakSet,AM=function(){for(const e in c(this,fo))c(this,fo)[e].item.position=new Ae(0,0);c(this,ho).stop()},Pf=new WeakMap;const MR=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(n=>`${n}:not([tabindex='-1'])`).join(",");function op(n){return[...n.querySelectorAll(MR)]}function CM(n){const t=document.activeElement;if(!t)return{};const e=op(n),i=e.findIndex(s=>s===t);return i===-1?{}:{index:i,children:e}}function RM(n,t){const{index:e,children:i}=CM(n);if(!i||e===0&&!(t!=null&&t.cycle))return;const s=e>0?e-1:i.length-1;i[s].focus()}function PM(n,t){const{index:e,children:i}=CM(n);if(!i||e===i.length-1&&!(t!=null&&t.cycle))return;const s=e<i.length-1?e+1:0;i[s].focus()}var fu,po;class Cr extends _n{constructor(e,i=[],s="full"){super("wrapper-view",e.button);ht(this,"content");ht(this,"classes");b(this,fu,_t("full"));b(this,po,_t(void 0));this.content=e,this.classes=Jn(i),this.state=s}mount(e){c(this,po).value=e}unmount(){c(this,po).value=void 0}focus(){if(!c(this,po).value)return;const e=op(c(this,po).value);e.length>0&&e[0].focus()}get state(){return c(this,fu).value}set state(e){c(this,fu).value=e}getClasses(){return[...this.classes]}setClasses(...e){this.classes.splice(0,this.classes.length,...e)}addClass(e){this.classes.includes(e)||this.classes.push(e)}removeClass(e){const i=this.classes.findIndex(s=>s===e);i!==-1&&this.classes.splice(i,1)}toggleClass(e,i){this.classes.findIndex(s=>s===e)===-1?(this.addClass(e),this.removeClass(i)):(this.removeClass(e),this.addClass(i))}}fu=new WeakMap,po=new WeakMap;var pu,Qs;class yR extends _n{constructor(e){super("movable-view","movable-button");ht(this,"wrappers");b(this,pu,_t(0));b(this,Qs,new Map);const i=[["bounce-one","i0"],["bounce-one","i1"],["bounce-one","i2"],["bounce-one","i3"]];this.wrappers=e.map((s,r)=>new Cr(s,i[r],"mini")),this.wrappers[0].state="full",this.wrappers.forEach((s,r)=>c(this,Qs).set(s,r))}get expanded(){return c(this,pu).value}expand(e){if(e===this.expanded)return;this.wrappers.forEach(a=>a.removeClass("collapsed"));const i=this.wrappers[e],s=this.wrappers[this.expanded],r=c(this,Qs).get(i),o=c(this,Qs).get(s);i.toggleClass(`i${r}`,`i${o}`),s.toggleClass(`i${r}`,`i${o}`),c(this,Qs).set(i,o),c(this,Qs).set(s,r),s.addClass("collapsed"),s.toggleClass("bounce-one","bounce-two"),s.state="mini",i.addClass("expanded"),i.toggleClass("bounce-one","bounce-two"),i.state="full",c(this,pu).value=e}bounce(){this.wrappers.forEach(e=>e.toggleClass("bounce-one","bounce-two"))}}pu=new WeakMap,Qs=new WeakMap;var mu,gu;class l_{constructor(t){b(this,mu);ht(this,"items");b(this,gu,ku());Q(this,mu,t),this.items=Jn(c(this,mu))}get selectedItem(){return c(this,gu).value}set selectedItem(t){t!==void 0&&!this.items.includes(t)||(c(this,gu).value=t)}}mu=new WeakMap,gu=new WeakMap;var Da,Ia;class ll{constructor(t,e){ht(this,"key",Symbol());b(this,Da);b(this,Ia);Q(this,Da,_t(t)),Q(this,Ia,_t(e))}get name(){return c(this,Da).value}set name(t){c(this,Da).value=t}get value(){return c(this,Ia).value}set value(t){c(this,Ia).value=t}}Da=new WeakMap,Ia=new WeakMap;var Lf;class SR extends _n{constructor(){super("sandbox-view");b(this,Lf,[new ll("one",1),new ll("two",2),new ll("three",3),new ll("four",4),new ll("five",5)]);ht(this,"single",new l_(c(this,Lf)))}test(){this.single.selectedItem=void 0}}Lf=new WeakMap;var _u,Df,as,If,Uf,mo,Ua;class bR extends _n{constructor(){super("svg-filters-view","svg-filters-button");b(this,_u,new Be);ht(this,"blur",rn("feGaussianBlur",{in:"SourceAplha",stdDeviation:.5,result:"blur"}));ht(this,"specPointLight",rn("fePointLight",{x:-15,y:-20,z:30}));ht(this,"specular",rn("feSpecularLighting",{in:"blur",result:"spec",surfaceScale:.4,specularConstant:1.4,specularExponent:16,"lighting-color":"#ffffff"},[this.specPointLight]));ht(this,"diffPointLight",rn("fePointLight",{x:0,y:-10,z:20}));ht(this,"diffuse",rn("feDiffuseLighting",{in:"blur",result:"diff",surfaceScale:.4,diffuseConstant:.3,"lighting-color":"#ffffff"},[this.diffPointLight]));ht(this,"compose",rn("feComposite",{in:"spec",in2:"diff",result:"composed",operator:"arithmetic",k1:0,k2:.5,k3:.5,k4:0}));ht(this,"lit",rn("feComposite",{in:"SourceGraphic",in2:"composed",result:"lit",operator:"arithmetic",k1:2,k2:0,k3:0,k4:0}));ht(this,"clip",rn("feComposite",{in:"lit",in2:"SourceGraphic",operator:"in"}));ht(this,"filter",rn("filter",{id:"filter-light"},[this.blur,this.specular,this.diffuse,this.compose,this.lit,this.clip]));b(this,Df,rn("defs",[this.filter]));b(this,as,47.6);b(this,If,new ar({scale:new Ae(1,1)}));b(this,Uf,rn("g",[lr(c(this,as)/2,c(this,as)/4,1,1,"#00000018"),lr(c(this,as)/2,c(this,as)/4,10,1,"#00000040")]));ht(this,"back",rn("path",{d:"M 0,-10 C 9,-10 10,-9 10,0 S 9,10 0,10 S -10,9 -10,0 S -9,-10 0,-10 z",fill:"darkred"}));ht(this,"front",rn("path",{d:"M 2,-7 v 5 h 5 v 4 h -5 v 5 h -4 v -5 h -5 v -4 h 5 v -5 z",fill:"orange"}));b(this,mo,rn("g",{filter:`url(#${this.filter.attributes.id})`,class:"filter-content"},[this.back,this.front]));ht(this,"root",rn("svg",[c(this,Df),c(this,Uf),c(this,mo)]));b(this,Ua,new qu(this.root,c(this,mo),c(this,If),{width:c(this,as),height:c(this,as)}))}get content(){return c(this,mo)}get viewBox(){const e=c(this,Ua).viewBox;return`${e.left} ${e.top} ${e.width} ${e.height}`}get transform(){return c(this,mo).attributes.transform}mount(e){c(this,Ua).mount(e),c(this,_u).add(()=>c(this,Ua).unmount())}unmount(){c(this,_u).dispose()}test(){}}_u=new WeakMap,Df=new WeakMap,as=new WeakMap,If=new WeakMap,Uf=new WeakMap,mo=new WeakMap,Ua=new WeakMap;var vu,ls,Nf,xu,Mu;class ER extends _n{constructor(){super("svg-sandbox-view");b(this,vu,new Be);b(this,ls,24);b(this,Nf,new ar({scale:new Ae(1,1)}));b(this,xu,rn("g",[lr(c(this,ls)/2,c(this,ls)/4,1,1,"#00000018"),lr(c(this,ls)/2,c(this,ls)/4,10,1,"#00000040")]));ht(this,"root",rn("svg",[c(this,xu)]));b(this,Mu,new qu(this.root,c(this,xu),c(this,Nf),{width:c(this,ls),height:c(this,ls)}))}mount(e){c(this,Mu).mount(e),c(this,vu).add(()=>c(this,Mu).unmount())}unmount(){c(this,vu).dispose()}test(){}}vu=new WeakMap,ls=new WeakMap,Nf=new WeakMap,xu=new WeakMap,Mu=new WeakMap;class c_{constructor(t,e){ht(this,"key",Symbol());ht(this,"component");ht(this,"name");ht(this,"children",[]);this.component=t,this.name=e}toCss(){return""}save(){}load(){}}function m0(n){return Math.round(n).toString(16).padStart(2,"0")}function wR(n,t){for(const e of t)if(n[e]===void 0)return!1;return!0}function TR(n,t){const e={};return t.forEach(i=>e[i]=n[i]),JSON.stringify(e)}var yu,Su,bu,Eu;class jd extends c_{constructor(e,i=0,s=0,r=0,o=1){super("color-editor",e);b(this,yu,_t(0));b(this,Su,_t(0));b(this,bu,_t(0));b(this,Eu,_t(0));this.r=i,this.g=s,this.b=r,this.a=o}get r(){return c(this,yu).value}set r(e){c(this,yu).value=e}get g(){return c(this,Su).value}set g(e){c(this,Su).value=e}get b(){return c(this,bu).value}set b(e){c(this,bu).value=e}get a(){return c(this,Eu).value}set a(e){c(this,Eu).value=e}toRgb(){const e=this.a!==1?` / ${this.a.toFixed(2)}`:"";return`rgb(${this.r} ${this.g} ${this.b}${e})`}toHex(){const e=this.a!==1?m0(this.a*255):"";return`#${[this.r,this.g,this.b].map(m0).join("")}${e}`}toCss(){return this.toRgb()}save(){localStorage.setItem(this.name,TR(this,["r","g","b","a"]))}load(){const e=JSON.parse(localStorage.getItem(this.name)??"{}");wR(e,["r","g","b","a"])&&(this.r=Number(e.r),this.g=Number(e.g),this.b=Number(e.b),this.a=Number(e.a))}}yu=new WeakMap,Su=new WeakMap,bu=new WeakMap,Eu=new WeakMap;var wu,Tu;class Ad extends c_{constructor(e){super("length-editor",e);b(this,wu,_t(0));b(this,Tu,_t(""))}get value(){return c(this,wu).value}set value(e){typeof e!="number"&&(e=0),c(this,wu).value=e}get unit(){return c(this,Tu).value}set unit(e){c(this,Tu).value=e}get safeUnit(){const e=this.value,i=this.unit;return e&&!i?"px":i}toCss(){return`${this.value}${this.safeUnit}`}}wu=new WeakMap,Tu=new WeakMap;var Au;class AR extends c_{constructor(e,i){super("shadow-editor",e);ht(this,"dx",new Ad(""));ht(this,"dy",new Ad(""));ht(this,"blur",new Ad(""));ht(this,"spread",new Ad(""));ht(this,"color",new jd(""));b(this,Au,_t(""));this.set(i)}get inset(){return c(this,Au).value}set inset(e){c(this,Au).value=e}set(e){const i=new RegExp("((?:\\S|(?<=\\([^)]*)\\s(?=[^(]*\\)))*)","g"),r=[...e.matchAll(i)].filter(a=>a[0]).map(a=>a[0]),o=[];for(const a of r){const l=a.match(/(-?\d+\.?\d*|-?\.\d+)($|px$|em$|rem$)/);if(!(!l||l.length!==3)&&(o.push({value:Number(l[1]),unit:l[2]}),o.length===4))break}[this.dx,this.dy,this.blur,this.spread].forEach((a,l)=>{o.length>l&&(a.value=o[l].value,a.unit=o[l].unit||"px")});for(const a of r){const l=a.match(/(rgb\((.*)\)$)/);if((l==null?void 0:l.length)!==3)continue;const d=l[2].match(/(\d+)\s+(\d+)\s+(\d+)\s*\/\s*(\d+\.?\d*|\.\d+)/);if(!(!d||d.length<4)){this.color.r=Number(d[1]),this.color.g=Number(d[2]),this.color.b=Number(d[3]),d.length>4&&(this.color.a=Number(d[4]));break}}for(const a of r){const l=a.match(/^(inset)$/);if((l==null?void 0:l.length)===2){this.inset="inset";break}}}toCss(){const[e,i,s,r,o]=[this.dx,this.dy,this.blur,this.spread,this.color].map(l=>l.toCss());let a=`${e} ${i}`;return(this.blur.value||this.spread.value)&&(a+=` ${s}`),this.spread.value&&(a+=` ${r}`),a+=` ${o}`,this.inset&&(a+=` ${this.inset}`),a}}Au=new WeakMap;var Cu,Ru,Pu;class CR{constructor(t,e){ht(this,"key",Symbol());ht(this,"component","var-editor");ht(this,"name");ht(this,"children",[]);b(this,Cu,_t(""));b(this,Ru,new l_([{type:"color"},{type:"color"},{type:"color"},{type:"color"},{type:"text"},{type:"text"},{type:"text"},{type:"text"}]));b(this,Pu,ku(c(this,Ru).items[1]));this.name=t,this.text=e}get text(){return c(this,Cu).value}set text(t){c(this,Cu).value=t}get types(){return c(this,Ru).items}get type(){return c(this,Pu).value}set type(t){c(this,Pu).value=t}toCss(){return this.text}save(){}load(){}}Cu=new WeakMap,Ru=new WeakMap,Pu=new WeakMap;var Ff,go;class RR extends _n{constructor(){super("theme-view");b(this,Ff,[new CR("--surface","24 28 36")]);b(this,go,new l_([...c(this,Ff),new jd("background-color",24,28,36),new jd("border-color",82,88,108,.5),new jd("color",164,172,190),new AR("box-shadow","0 0 20px 10px rgb(82 88 108 / 0.5)")]));ht(this,"style",Xa({}));this.properties.forEach(e=>{this.style[e.name]=bn(()=>e.toCss())}),this.load(),this.selectedProperty=c(this,go).items[0]}get properties(){return c(this,go).items}get selectedProperty(){return c(this,go).selectedItem}set selectedProperty(e){c(this,go).selectedItem=e}property(e){return this.properties.find(i=>i.name===e)}css(e){return this.property(e).toCss()}clear(){localStorage.clear()}save(){this.properties.forEach(e=>e.save())}load(){this.properties.forEach(e=>e.load())}}Ff=new WeakMap,go=new WeakMap;class PR{constructor(t=0,e=0,i=0,s=1){ht(this,"v",Xa([0,0,0,1]));this.v[0]=t,this.v[1]=e,this.v[2]=i,this.v[3]=s}get x(){return this.v[0]}set x(t){this.v[0]=t}get y(){return this.v[1]}set y(t){this.v[1]=t}get z(){return this.v[2]}set z(t){this.v[2]=t}get w(){return this.v[3]}set w(t){this.v[3]=t}}class Wa{constructor(t){ht(this,"m",Xa([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]));t&&this.assign(t)}assign(t){const e=Math.min(this.m.length,t.length);for(let i=0;i<e;++i)this.m[i]=t[i]}}function LR(n){return new Wa([[1,0,0,0],[0,1,0,0],[0,0,1,-1/n],[0,0,0,1]])}function DR(n,t){const e=1/Math.hypot(n.x,n.y,n.z),i=e*n.x,s=i*i,r=e*n.y,o=r*r,a=e*n.z,l=a*a,u=Math.sin(t/2),d=Math.cos(t/2),h=u*d,f=u*u;return new Wa([[1-2*(o+l)*f,2*(i*r*f+a*h),2*(i*a*f-r*h),0],[2*(i*r*f-a*h),1-2*(s+l)*f,2*(r*a*f+i*h),0],[2*(i*a*f+r*h),2*(r*a*f-i*h),1-2*(s+o)*f,0],[0,0,0,1]])}function IR(n,t){const e=new Wa;for(let i=0;i<4;++i)for(let s=0;s<4;++s){let r=0;for(let o=0;o<4;++o)r+=n.m[o][s]*t.m[i][o],e.m[i][s]=r}return e}function UR(n){return DR(FR(0,1,0),n)}function NR(n,t,e){const i=new Wa;return i.m[3][0]=n,i.m[3][1]=t,i.m[3][2]=e,i}function FR(n=0,t=0,e=0,i=1){return new PR(n,t,e,i)}var Lu,Du,Iu;class OR extends _n{constructor(){super("transforms-view");ht(this,"m",new Wa);b(this,Lu,_t(500));b(this,Du,_t(0));b(this,Iu,_t(0))}get p(){return c(this,Lu).value}set p(e){c(this,Lu).value=e}get a(){return c(this,Du).value}set a(e){c(this,Du).value=e}get z(){return c(this,Iu).value}set z(e){c(this,Iu).value=e}get matrix3d(){return`matrix3d(${[UR(this.a*Math.PI/180),NR(0,0,this.z),LR(this.p)].reduce((s,r)=>IR(r,s),new Wa).m.join(",")})`}}Lu=new WeakMap,Du=new WeakMap,Iu=new WeakMap;var Of,Uu,Bf;class g0 extends _n{constructor(){super("web-page-view","web-page-button");ht(this,"root",_t());b(this,Of,new Be);b(this,Uu,_t(!1));b(this,Bf)}use(){Ye(()=>this.mount()),je(()=>this.unmount())}mount(){}unmount(){c(this,Of).dispose()}get menu(){return c(this,Uu).value}set menu(e){c(this,Uu).value=e}get child(){return c(this,Bf)}set child(e){this.child=e}}Of=new WeakMap,Uu=new WeakMap,Bf=new WeakMap;var Rr=(n=>(n[n.LEFT=0]="LEFT",n[n.CENTER=1]="CENTER",n[n.RIGHT=2]="RIGHT",n))(Rr||{}),Nu,Fu;class BR extends _n{constructor(){super("app-view");b(this,Nu,_t(1));b(this,Fu,_t(0));ht(this,"pages");ht(this,"dialog",new eR({resizable:!0}));ht(this,"dialogContent",new g0);ht(this,"logo",new xR);ht(this,"bicubic",new HC);ht(this,"gears",new fR);ht(this,"flowers",new _R);ht(this,"binaryTree",new ZC);ht(this,"webPage",new g0);ht(this,"controls",new QC);ht(this,"theme",new RR);ht(this,"transforms",new OR);ht(this,"sandbox",new SR);ht(this,"svgFilters",new bR);ht(this,"svgSandbox",new ER);ht(this,"movable",new yR([this.svgFilters,this.bicubic,this.flowers,this.gears]));this.pages=[new Cr(this.logo,["view"]),new Cr(this.bicubic,["view card clip shadow"]),new Cr(this.gears,["view card clip shadow"]),new Cr(this.flowers,["view card clip shadow"]),new Cr(this.svgFilters,["view card clip shadow"]),new Cr(this.movable,["view margin"])]}get align(){return c(this,Nu).value}set align(e){c(this,Nu).value=e}get index(){return c(this,Fu).value}set index(e){c(this,Fu).value=e}get page(){return this.pages[this.index]}get showDialog(){return this.dialog.state===dh.NON_MODAL}set showDialog(e){e?this.dialog.show():this.dialog.closeAsync("transform")}}Nu=new WeakMap,Fu=new WeakMap;const kR=["checked"],VR=re({__name:"button",props:Fa({toggle:{},noFocus:{}},{modelValue:{},modelModifiers:{}}),emits:Fa(["click"],["update:modelValue"]),setup(n,{emit:t}){const e=Eo(n,"modelValue"),i=n,s=t,r=_t(void 0),o=bn(()=>{if(i.toggle!==void 0)return i.toggle===""?e.value?"checked":void 0:e.value===i.toggle[0]?"checked":void 0});function a(u){i.toggle===void 0?s("click",u):i.toggle===""?e.value=!e.value:i.toggle.length===1?e.value!==i.toggle[0]&&(e.value=i.toggle[0]):i.toggle.length===2&&(e.value=e.value===i.toggle[0]?i.toggle[1]:i.toggle[0])}function l(u){var d,h;i.noFocus!==void 0&&(u.preventDefault(),r.value.blur(),(h=(d=u.relatedTarget)==null?void 0:d.focus)==null||h.call(d))}return(u,d)=>(ot(),xt("button",{ref_key:"root",ref:r,checked:o.value,onPointerdown:d[0]||(d[0]=fb(()=>{},["stop"])),onClick:a,onFocus:l},[$n(u.$slots,"default",Bu(Ya({checked:o.value})))],40,kR))}}),zR=re({__name:"collapse",props:{expanded:{type:Boolean}},setup(n){const t=n,e=_t(),i=_t(),s=new Be;let r;Ye(()=>{e.value.classList.add("mounted"),r=new ResizeObserver(()=>{e.value.style.height=i.value.scrollHeight+"px"}),s.add(qa(()=>o(t.expanded)))}),je(()=>{e.value.classList.remove("mounted"),r.disconnect(),r=void 0,s.dispose()});function o(a){a?r.observe(i.value):(e.value.style.height="0px",r.unobserve(i.value))}return(a,l)=>(ot(),xt("div",{ref_key:"root",ref:e,class:"collapse"},[C("div",{ref_key:"content",ref:i,class:"collapse-content"},[$n(a.$slots,"default")],512)],512))}}),HR=re({__name:"details",props:Fa({toggle:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=Eo(n,"modelValue"),e=n,i=bn(()=>{const r=e.toggle;if(r===void 0||r==="")return!!t.value;if(r.length===1)return t.value===r[0];if(r.length===2)return t.value===r[1]});function s(r){const o=e.toggle;o===void 0||o===""?t.value=!t.value:o.length===1?t.value=t.value===o[0]?void 0:o[0]:o.length===2&&(t.value=t.value===o[0]?o[1]:o[0])}return(r,o)=>{const a=Vt("ui-collapse");return ot(),xt("div",null,[C("div",{onClick:s},[$n(r.$slots,"header",{expanded:i.value})]),X(a,{expanded:i.value},{default:vt(()=>[$n(r.$slots,"content")]),_:3},8,["expanded"])])}}}),GR={class:"dialog-layout"},WR={class:"dialog-content"},$R=re({__name:"dialog",props:{model:{}},setup(n){const t=_t();return Ye(()=>n.model.mount(t.value)),je(()=>n.model.unmount()),(e,i)=>(ot(),xt("dialog",{ref_key:"root",ref:t,class:kt(["dialog dialog-animation",{visible:[Rn(dh).NON_MODAL,Rn(dh).MODAL].includes(e.model.state)}]),style:Ln([e.model.draggable?{left:`${e.model.left}px`,top:`${e.model.top}px`}:{},e.model.resizable?{width:`${e.model.width}px`,height:`${e.model.height}px`}:{}])},[C("div",GR,[C("div",{class:kt({"nw-resize":e.model.resizable})},null,2),C("div",{class:kt({"n-resize":e.model.resizable})},null,2),C("div",{class:kt({"ne-resize":e.model.resizable})},null,2),C("div",{class:kt({"w-resize":e.model.resizable})},null,2),C("div",WR,[$n(e.$slots,"default")]),C("div",{class:kt({"e-resize":e.model.resizable})},null,2),C("div",{class:kt({"sw-resize":e.model.resizable})},null,2),C("div",{class:kt({"s-resize":e.model.resizable})},null,2),C("div",{class:kt({"se-resize":e.model.resizable})},null,2)])],6))}});function XR(n,t){const e=_t(0),i=_t(0),s=_t(0),r=_t(0),o=()=>{e.value=s.value,i.value=r.value},a=h=>{const f=t.value.getBoundingClientRect();s.value=Gn((h.clientX-f.left)/f.width,0,1),r.value=Gn((h.clientY-f.top)/f.height,0,1)},l=h=>{h.button===vo.LEFT&&(h.currentTarget.setPointerCapture(h.pointerId),o())},u=h=>{var f;a(h),(f=h.currentTarget)!=null&&f.hasPointerCapture(h.pointerId)&&o()},d=new Be;return Ye(()=>{n.value&&t.value&&d.add(ve(n.value,"pointerdown",l),ve(n.value,"pointermove",u))}),je(()=>d.dispose()),{x:e,y:i}}function qR(n){const t=_t(!0),e=new Be,i=r=>{const{width:o,height:a}=r[0].contentRect;t.value=o>=a},s=new ResizeObserver(i);return Ye(()=>{if(n.value){const r=n.value;s.observe(r),e.add(()=>s.unobserve(r))}}),je(()=>e.dispose()),t}function YR(n,t,e,i){const{x:s,y:r}=XR(n,t),o=qR(n),a=bn(()=>{const h=i.max-i.min,f=100*(e.value-i.min);return h>0?f/h:0});function l(h){let f=Rl(i.min,i.max,h);const p=Math.round((f-i.min)/i.step);return f=Gn(i.min+p*i.step,i.min,i.max),f}function u(h){e.value=l(h)}const d=new Be;return Ye(()=>{d.add(_l([s,r],([h,f])=>{o.value?u(h):u(1-f)})),d.add(ve(n.value,"keydown",h=>{const f=i.step||1;let p;switch(h.key){case"ArrowLeft":case"ArrowDown":p=Math.max(i.min,e.value-f);break;case"ArrowRight":case"ArrowUp":p=Math.min(i.max,e.value+f);break;case"Home":p=i.min;break;case"End":p=i.max;break;default:return}h.stopPropagation(),p!==e.value&&(e.value=p)}))}),je(()=>d.dispose()),{horizontal:o,percents:a}}function jR(n,t){const e=new Be;Ye(()=>{e.add(ve(n.value,"keydown",i=>{switch(i.key){case"ArrowUp":case"ArrowLeft":RM(n.value,t);break;case"ArrowDown":case"ArrowRight":PM(n.value,t);break;default:return}i.stopPropagation(),i.preventDefault()}))}),je(()=>e.dispose())}const KR=re({__name:"dropdown",props:{modelValue:{type:Boolean,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(n){const t=Eo(n,"modelValue"),e=new Be,i=_t(void 0);jR(i,{cycle:!0});function s(){t.value&&qf(()=>o())}function r(u){switch(u.key){case"Escape":l();break;default:return}u.stopPropagation(),u.preventDefault()}function o(){var d;(d=op(i.value)[0])==null||d.focus()}function a(u){const d=i.value;let h=u.relatedTarget;for(;h;){if(h===d)return;h=h.parentElement}l()}function l(){t.value=!1}return Ye(()=>{e.add(qa(()=>s()),ve(i.value,"keydown",u=>r(u)))}),je(()=>e.dispose()),(u,d)=>(ot(),xt("div",{ref_key:"root",ref:i,class:kt(["dropdown",{none:!t.value}]),tabindex:"0",onFocusout:a},[$n(u.$slots,"default",Bu(Ya({close:l})))],34))}}),bi=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},ZR={},JR={class:"hotkey"};function QR(n,t){return ot(),xt("div",JR,[$n(n.$slots,"default")])}const t2=bi(ZR,[["render",QR]]),e2={},n2={class:"icon"};function i2(n,t){return ot(),xt("i",n2)}const s2=bi(e2,[["render",i2]]),r2={class:"input"},o2=["label"],a2=["type"],l2=re({__name:"input",props:Fa({type:{default:"text"},label:{default:""},input:{default:""},decorator:{default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=Eo(n,"modelValue");return(e,i)=>(ot(),xt("div",r2,[C("div",{class:kt(["input-decorator",e.decorator]),label:e.label},null,10,o2),Vi(C("input",{"onUpdate:modelValue":i[0]||(i[0]=s=>t.value=s),type:e.type,class:kt(e.input)},null,10,a2),[[cb,t.value]])]))}}),c2=re({__name:"item",props:{model:{}},setup(n){const t=_t();return Ye(()=>{n.model.mount(t.value)}),je(()=>{n.model.unmount()}),(e,i)=>{const s=Vt("ui-item");return e.model.tag!=="#text"?(ot(),xe(Ir(e.model.tag),Wg({key:0,ref_key:"root",ref:t},e.model.attributes),{default:vt(()=>[(ot(!0),xt(ee,null,We(e.model.items,r=>(ot(),xe(s,{key:r.key,model:r},null,8,["model"]))),128))]),_:1},16)):(ot(),xt(ee,{key:1},[St(Bt(e.model.text),1)],64))}}}),u2=re({__name:"popup",props:Fa({anchor:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=Eo(n,"modelValue"),e=n,i=_t(void 0),s=_t({}),r=new Be;function o(){const h=e.anchor;if(t.value){if(h){const{left:f,top:p}=h.getBoundingClientRect();s.value={left:`${f}px`,top:`${p}px`}}i.value.showPopover(),qf(()=>l())}else i.value.hidePopover()}function a(h){h.key==="Escape"&&d()}function l(){var f;(f=op(i.value)[0])==null||f.focus()}function u(h){const f=i.value;let p=h.relatedTarget;for(;p;){if(p===f)return;p=p.parentElement}d()}function d(){t.value=!1}return Ye(()=>{r.add(qa(()=>o()),ve(i.value,"keydown",h=>a(h)))}),je(()=>r.dispose()),(h,f)=>(ot(),xt("div",{ref_key:"root",ref:i,style:Ln(s.value),popover:"manual",tabindex:"0",onFocusout:u},[$n(h.$slots,"default",Bu(Ya({close:d})))],36))}}),d2=["tabindex"],h2=re({__name:"range",props:Fa({min:{default:0},max:{default:100},step:{default:1},disabled:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=Eo(n,"modelValue"),e=n,i=_t(void 0),s=_t(void 0),{horizontal:r,percents:o}=YR(i,s,t,e),a=bn(()=>r.value?"horizontal":"vertical"),l=bn(()=>e.disabled?-1:0);return(u,d)=>(ot(),xt("div",{ref_key:"outer",ref:i,class:kt(["range",a.value]),tabindex:l.value},[C("div",{ref_key:"inner",ref:s,class:"range-inner"},[C("div",{class:kt(["range-axis",a.value])},[C("div",{class:kt(["range-track",a.value])},null,2),C("div",{class:kt(["range-fill",a.value]),style:Ln(Rn(r)?{width:`calc(${Rn(o)}% + 2 * var(--track-radius))`}:{height:`calc(${Rn(o)}% + 2 * var(--track-radius))`})},null,6),C("div",{class:kt(["range-thumb",a.value,{hidden:u.min===u.max}]),style:Ln(Rn(r)?{left:`${Rn(o)}%`}:{bottom:`${Rn(o)}%`})},null,6)],2)],512)],10,d2))}}),f2={class:"select"},p2={class:"relative"},m2=re({__name:"select",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(n){const t=Eo(n,"modelValue"),e=_t(!1);function i(){e.value=!e.value}function s(o){return o===t.value}function r(o){t.value=o,e.value=!1}return(o,a)=>{const l=Vt("ui-dropdown");return ot(),xt("div",f2,[$n(o.$slots,"button",Wg({expanded:e.value,toggle:i},{class:"relative"})),C("div",p2,[X(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u),class:"select-dropdown mt-1"},{default:vt(()=>[$n(o.$slots,"popup",Bu(Ya({select:r,selected:s})))]),_:3},8,["modelValue"])])])}}}),g2=re({__name:"zoom",props:{scale:{default:1}},setup(n){const t=n,e=bn(()=>`${50-50/t.scale}%`);return(i,s)=>(ot(),xt("div",{class:"absolute",style:Ln({inset:e.value,scale:i.scale})},[$n(i.$slots,"default")],4))}}),_0=["pointerdown","mousedown","click","dblclick"];function v0(n){n.stopPropagation()}const _2={mounted:n=>{_0.forEach(t=>n.addEventListener(t,v0))},beforeUnmount:n=>{_0.forEach(t=>n.removeEventListener(t,v0))}},sm=new WeakMap;function v2(n,t,e){switch(t.key){case"ArrowUp":case"ArrowLeft":RM(n,e);break;case"ArrowDown":case"ArrowRight":PM(n,e);break;default:return}t.stopPropagation(),t.preventDefault()}const x2={mounted:(n,t)=>{const e=i=>v2(n,i,t.value);sm.set(n,e),n.addEventListener("keydown",e)},beforeUnmount:n=>{const t=sm.get(n);t&&n.removeEventListener("keydown",t),sm.delete(n)}},M2={class:"color-editor"},y2=re({__name:"color",props:{model:{}},setup(n){return(t,e)=>{const i=Vt("ui-range");return ot(),xt("div",M2,[e[4]||(e[4]=St(" r ")),X(i,{modelValue:t.model.r,"onUpdate:modelValue":e[0]||(e[0]=s=>t.model.r=s),class:"color-range",min:0,max:255},null,8,["modelValue"]),e[5]||(e[5]=St(" g ")),X(i,{modelValue:t.model.g,"onUpdate:modelValue":e[1]||(e[1]=s=>t.model.g=s),class:"color-range",min:0,max:255},null,8,["modelValue"]),e[6]||(e[6]=St(" b ")),X(i,{modelValue:t.model.b,"onUpdate:modelValue":e[2]||(e[2]=s=>t.model.b=s),class:"color-range",min:0,max:255},null,8,["modelValue"]),e[7]||(e[7]=St(" a ")),X(i,{modelValue:t.model.a,"onUpdate:modelValue":e[3]||(e[3]=s=>t.model.a=s),class:"color-range",min:0,max:1,step:.01},null,8,["modelValue"])])}}}),S2={class:"flex gap-2"},b2=re({__name:"length",props:{model:{}},setup(n){return(t,e)=>(ot(),xt("div",S2,[Vi(C("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>t.model.value=i),type:"text",class:"length-value"},null,512),[[sr,t.model.value,void 0,{number:!0}]]),Vi(C("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>t.model.unit=i),type:"text",class:"length-unit"},null,512),[[sr,t.model.unit]])]))}}),E2=re({__name:"text",props:{model:{}},setup(n){const t=_t();function e(i){i.code==="Enter"&&(n.model.text=t.value.value)}return(i,s)=>Vi((ot(),xt("textarea",{ref_key:"input",ref:t,"onUpdate:modelValue":s[0]||(s[0]=r=>i.model.text=r),class:"text-editor code",type:"text",rows:"5",maxlength:"95",spellcheck:"false",onKeydown:e},null,544)),[[sr,i.model.text,void 0,{lazy:!0}]])}}),w2={class:"shadow-editor"},T2={class:"cbx-frame"},A2=re({__name:"shadow",props:{model:{}},setup(n){return(t,e)=>{const i=Vt("length-editor"),s=Vt("color-editor"),r=Vt("ui-icon"),o=Vt("ui-button");return ot(),xt("div",w2,[e[1]||(e[1]=C("span",null,"dx",-1)),X(i,{model:t.model.dx},null,8,["model"]),e[2]||(e[2]=C("span",null,"dy",-1)),X(i,{model:t.model.dy},null,8,["model"]),e[3]||(e[3]=C("span",null,"blur",-1)),X(i,{model:t.model.blur},null,8,["model"]),e[4]||(e[4]=C("span",null,"spread",-1)),X(i,{model:t.model.spread},null,8,["model"]),e[5]||(e[5]=C("span",null,"color",-1)),X(s,{model:t.model.color},null,8,["model"]),e[6]||(e[6]=C("span",null,"inset",-1)),X(o,{modelValue:t.model.inset,"onUpdate:modelValue":e[0]||(e[0]=a=>t.model.inset=a),class:"shadow-cbx",toggle:["inset",""]},{default:vt(()=>[C("div",T2,[X(r,{class:kt(["check",{hidden:!t.model.inset}])},null,8,["class"])])]),_:1},8,["modelValue"])])}}}),C2={class:"var-editor"},R2={class:"dropdown-list"},P2=["onClick"],L2=re({__name:"var",props:{model:{}},setup(n){return(t,e)=>{const i=Vt("ui-icon"),s=Vt("ui-button"),r=Vt("ui-select");return ot(),xt("div",C2,[e[2]||(e[2]=St(" Edit as: ")),X(r,{modelValue:t.model.type,"onUpdate:modelValue":e[0]||(e[0]=o=>t.model.type=o)},{button:vt(({expanded:o,toggle:a})=>[X(s,{class:kt(["slct",{"no-mouse":o}]),onClick:l=>a()},{default:vt(()=>[St(Bt(t.model.type.type)+" ",1),e[1]||(e[1]=C("div",{class:"spacer"},null,-1)),X(i,{class:kt(["gt",{r90:o}])},null,8,["class"])]),_:2},1032,["class","onClick"])]),popup:vt(({select:o,selected:a})=>[C("div",R2,[(ot(!0),xt(ee,null,We(t.model.types,(l,u)=>(ot(),xt("div",{key:u,class:kt(["property-item",{selected:a(l)}]),tabindex:"0",onClick:d=>o(l)},[X(i,{class:kt(["check",{hidden:!a(l)}])},null,8,["class"]),St(" "+Bt(l.type),1)],10,P2))),128))])]),_:1},8,["modelValue"])])}}}),D2={},I2={class:"app-resources"};function U2(n,t){return ot(),xt("svg",I2,t[0]||(t[0]=[bS('<defs><filter id="view-button-lighting"><feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur"></feGaussianBlur><feSpecularLighting in="blur" result="spec" surfaceScale="0.4" specularConstant="1.4" specularExponent="16" lighting-color="#ffffff"><fePointLight x="0" y="-20" z="30"></fePointLight></feSpecularLighting><feDiffuseLighting in="blur" result="diff" surfaceScale="0.4" diffuseConstant="0.3" lighting-color="#ffffff"><fePointLight x="0" y="-10" z="20"></fePointLight></feDiffuseLighting><feComposite in="spec" in2="diff" result="composed" operator="arithmetic" k1="0" k2="0.5" k3="0.5" k4="0"></feComposite><feComposite in="SourceGraphic" in2="composed" result="lit" operator="arithmetic" k1="2" k2="0" k3="0" k4="0"></feComposite><feComposite in="lit" in2="SourceAplha" operator="in"></feComposite></filter><path id="big-btn" d="M 0,-10 C 9,-10 10,-9 10,0 S 9,10 0,10 S -10,9 -10,0 S -9,-10 0,-10 z"></path><path id="big-cross" d="M 2,-7 v 5 h 5 v 4 h -5 v 5 h -4 v -5 h -5 v -4 h 5 v -5 z"></path></defs>',1)]))}const N2=bi(D2,[["render",U2]]),F2={class:"app"},O2={class:"dlg-panel"},B2={class:"flex ai-center px-2"},k2={class:"dlg-content"},V2={class:kt(["app-bar"])},z2=re({__name:"app-view",props:{model:{}},setup(n){const t=bn(()=>n.model.align===Rr.LEFT),e=bn(()=>n.model.align===Rr.RIGHT);return(i,s)=>{const r=Vt("ui-icon"),o=Vt("ui-button"),a=Vt("ui-dialog"),l=Bg("arrows");return ot(),xt("div",F2,[X(N2),X(ms,{name:"slow"},{default:vt(()=>[(ot(),xe(Ir(i.model.page.component),{key:i.model.page.key,model:i.model.page,state:"full"},null,8,["model"]))]),_:1}),(ot(),xe(Ly,{to:"body"},[X(a,{model:i.model.dialog},{default:vt(()=>[C("div",O2,[C("div",B2,[s[5]||(s[5]=C("div",{class:"flex col mb-1"},[C("h3",null," resizable space "),C("div",{class:"orange tiny"}," for responsive page ")],-1)),s[6]||(s[6]=C("div",{class:"spacer"},null,-1)),X(o,{class:"fs-24 flat mouse",onClick:s[0]||(s[0]=u=>i.model.dialog.closeAsync("transform"))},{default:vt(()=>[X(r,{class:"close"})]),_:1})]),C("div",k2,[(ot(),xe(Ir(i.model.dialogContent.component),{model:i.model.dialogContent},null,8,["model"]))])])]),_:1},8,["model"])])),C("div",V2,[C("div",{class:kt(["app-left",{collapsed:t.value}])},[X(o,{modelValue:i.model.align,"onUpdate:modelValue":s[1]||(s[1]=u=>i.model.align=u),class:kt(["app-flat",{collapsed:t.value}]),toggle:[Rn(Rr).CENTER,Rn(Rr).LEFT],disabled:t.value},{default:vt(()=>[X(r,{class:"lt"})]),_:1},8,["modelValue","class","toggle","disabled"])],2),Vi((ot(),xt("div",{class:kt(["app-buttons",{left:t.value,right:e.value}])},[(ot(!0),xt(ee,null,We(i.model.pages.length,u=>(ot(),xe(Ir(i.model.pages[u-1].button),{key:u,modelValue:i.model.index,"onUpdate:modelValue":s[2]||(s[2]=d=>i.model.index=d),toggle:[u-1]},null,8,["modelValue","toggle"]))),128)),(ot(),xe(Ir(i.model.webPage.button),{modelValue:i.model.showDialog,"onUpdate:modelValue":s[3]||(s[3]=u=>i.model.showDialog=u),toggle:""},null,8,["modelValue"]))],2)),[[l,{cycle:!0}]]),C("div",{class:kt(["app-right",{collapsed:e.value}])},[X(o,{modelValue:i.model.align,"onUpdate:modelValue":s[4]||(s[4]=u=>i.model.align=u),class:kt(["app-flat",{collapsed:e.value}]),toggle:[Rn(Rr).CENTER,Rn(Rr).RIGHT],disabled:e.value},{default:vt(()=>[X(r,{class:"gt"})]),_:1},8,["modelValue","class","toggle","disabled"])],2)])])}}}),H2={class:"view"},G2={key:0},W2={key:1,class:"bicubic-tools surface"},$2={class:"properties"},X2={class:"section"},q2={class:"flex jc-between"},Y2={class:"cbx-frame"},j2={class:"cbx-frame"},K2={key:0},Z2={key:1,class:"view-header"},J2=re({__name:"bicubic",props:{model:{},state:{}},setup(n){const t=_t(),e=_t();return Ye(()=>n.model.mount(t.value,e.value)),je(()=>n.model.unmount()),(i,s)=>{const r=Vt("ui-range"),o=Vt("ui-icon"),a=Vt("ui-button");return ot(),xt("div",H2,[C("div",{ref_key:"root",ref:t,class:"paper clip view",tabindex:"0"},[C("canvas",{ref_key:"canvas",ref:e},null,512)],512),X(ms,{name:"delayed"},{default:vt(()=>[i.state==="mini"?(ot(),xt("div",G2)):(ot(),xt("div",W2,[C("div",$2,[C("div",X2,[s[4]||(s[4]=C("div",{class:"section-header"}," settings ",-1)),C("div",q2,[s[3]||(s[3]=C("span",{class:"muted tiny"},"subdiv",-1)),St(" "+Bt(i.model.demo.subdiv),1)]),X(r,{modelValue:i.model.demo.subdiv,"onUpdate:modelValue":s[0]||(s[0]=l=>i.model.demo.subdiv=l),min:2,max:16},null,8,["modelValue"]),s[5]||(s[5]=C("div",{class:"flex jc-between"},[C("span",{class:"muted tiny"},"surface")],-1)),X(a,{modelValue:i.model.demo.showGrid,"onUpdate:modelValue":s[1]||(s[1]=l=>i.model.demo.showGrid=l),class:"flex ml-2",toggle:""},{default:vt(()=>[C("div",Y2,[X(o,{class:kt(["check",{hidden:!i.model.demo.showGrid}])},null,8,["class"])])]),_:1},8,["modelValue"]),s[6]||(s[6]=C("div",{class:"flex jc-between"},[C("span",{class:"muted tiny"},"lo res grid")],-1)),X(a,{modelValue:i.model.demo.showLoRes,"onUpdate:modelValue":s[2]||(s[2]=l=>i.model.demo.showLoRes=l),class:"flex ml-2",toggle:""},{default:vt(()=>[C("div",j2,[X(o,{class:kt(["check",{hidden:!i.model.demo.showLoRes}])},null,8,["class"])])]),_:1},8,["modelValue"])])])]))]),_:1}),X(ms,{name:"delayed"},{default:vt(()=>[i.state==="mini"?(ot(),xt("div",K2)):(ot(),xt("div",Z2,s[7]||(s[7]=[C("div",{class:"view-title"}," bicubic ",-1),C("div",{class:"view-subtitle"}," interpolation ",-1)])))]),_:1})])}}}),Q2={class:"view"},tP={key:0},eP={key:1,class:"view-header"},nP={key:0},iP={key:1,class:"tool-box top right col ai-center"},sP={class:"flex gap-2"},rP=re({__name:"binary-tree",props:{model:{},state:{}},setup(n){const t=_t();Ye(()=>n.model.mount(t.value)),je(()=>n.model.unmount());function e(i){switch(i.key){case"Enter":case"Insert":n.model.add();break;case"Delete":n.model.remove();break;default:return}i.preventDefault()}return(i,s)=>{const r=Vt("ui-item"),o=Vt("ui-hotkey"),a=Vt("ui-button");return ot(),xt("div",Q2,[C("div",{ref_key:"root",ref:t,class:"paper clip view"},[X(r,{class:"clip view",model:i.model.root},null,8,["model"])],512),X(ms,{name:"delayed"},{default:vt(()=>[i.state==="mini"?(ot(),xt("div",tP)):(ot(),xt("div",eP,s[3]||(s[3]=[C("div",{class:"view-title"}," binary tree ",-1),C("div",{class:"view-subtitle"}," pretty balanced ",-1)])))]),_:1}),X(ms,{name:"delayed"},{default:vt(()=>[i.state==="mini"?(ot(),xt("div",nP)):(ot(),xt("div",iP,[s[8]||(s[8]=St(" Add/remove numbers ")),C("div",sP,[Vi(C("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>i.model.text=l),type:"text",class:"tree-input",onKeydown:e},null,544),[[sr,i.model.text]]),X(a,{class:"btn","no-focus":"",tabindex:"-1",onClick:s[1]||(s[1]=l=>i.model.add())},{default:vt(()=>[s[5]||(s[5]=C("span",null,"+",-1)),X(o,null,{default:vt(()=>s[4]||(s[4]=[St("Ins")])),_:1})]),_:1}),X(a,{class:"btn","no-focus":"",tabindex:"-1",onClick:s[2]||(s[2]=l=>i.model.remove())},{default:vt(()=>[s[7]||(s[7]=C("span",null,"× ",-1)),X(o,null,{default:vt(()=>s[6]||(s[6]=[St("Del")])),_:1})]),_:1})])]))]),_:1})])}}}),oP={class:"scrollable surface view"},aP={class:"flex m-2 gap-2 ai-center"},lP={class:"flex gap-2"},cP={class:"popup-content surface shadow-small"},uP={class:"flex gap-2"},dP={class:"flex py-2 gap-2"},hP={class:"details-header"},fP={class:"flex col gap-2 p-4"},pP={class:"flex gap-2"},mP={class:"pt-2"},gP={class:"flex gap-2"},_P={class:"radio-frame"},vP={class:"pt-2"},xP={class:"flex gap-2"},MP={class:"radio-frame"},yP={class:"pt-2"},SP={class:"flex gap-2"},bP={class:"cbx-frame"},EP={class:"details-header"},wP={class:"px-1"},TP={class:"details-header"},AP={class:"radio-frame"},CP={class:"px-1"},RP={class:"details-header"},PP={class:"p-4"},LP={class:"flex gap-2 my-2"},DP={class:"icon-content"},IP={class:"icon-name"},UP={class:"details-header"},NP={class:"ranges"},FP={class:"flex ai-center jc-center"},OP={class:"details-header"},BP={class:"flex gap-2 p-4"},kP={class:"flex col gap-2"},VP={class:"flex col gap-2"},zP=re({__name:"controls",props:{model:{}},setup(n){const t=_t(void 0);function e(s){return s===void 0?"<undefined>":s===""?"<empty>":s}const i=["check","close","lt","gt","up","down","menu","quad","dot"];return(s,r)=>{const o=Vt("ui-button"),a=Vt("lorem-view"),l=Vt("ui-popup"),u=Vt("ui-icon"),d=Vt("ui-details"),h=Vt("ui-range"),f=Vt("ui-input"),p=Bg("click-stop");return ot(),xt("div",oP,[C("div",aP,[C("div",lP,[X(o,{modelValue:s.model.popup,"onUpdate:modelValue":r[0]||(r[0]=_=>s.model.popup=_),class:"btn",disabled:s.model.popup,toggle:""},{default:vt(()=>r[25]||(r[25]=[St(" Popup ")])),_:1},8,["modelValue","disabled"]),C("div",{ref_key:"anchor",ref:t},[X(l,{modelValue:s.model.popup,"onUpdate:modelValue":r[3]||(r[3]=_=>s.model.popup=_),anchor:t.value},{default:vt(({close:_})=>[C("div",cP,[C("div",uP,[X(o,{class:"btn round",onClick:()=>{_(),s.model.click("ok")}},{default:vt(()=>r[26]||(r[26]=[St(" Ok ")])),_:2},1032,["onClick"]),X(o,{class:"btn round",onClick:()=>{_(),s.model.click("cancel")}},{default:vt(()=>r[27]||(r[27]=[St(" Cancel ")])),_:2},1032,["onClick"])]),r[28]||(r[28]=C("div",{class:"horizontal separator"},null,-1)),C("div",dP,[Vi(C("input",{"onUpdate:modelValue":r[1]||(r[1]=x=>s.model.text=x),type:"text"},null,512),[[sr,s.model.text]]),(ot(!0),xt(ee,null,We(s.model.paragraphs,(x,g)=>(ot(),xe(o,{key:g,modelValue:s.model.lorem.paragraphs,"onUpdate:modelValue":r[2]||(r[2]=m=>s.model.lorem.paragraphs=m),class:"btn round",toggle:[x]},{default:vt(()=>[St(Bt(x),1)]),_:2},1032,["modelValue","toggle"]))),128))]),X(a,{model:s.model.lorem},null,8,["model"])])]),_:1},8,["modelValue","anchor"])],512),X(o,{class:"btn",onClick:r[4]||(r[4]=_=>s.model.showAll(!0))},{default:vt(()=>r[29]||(r[29]=[St(" Show all ")])),_:1}),X(o,{class:"btn",onClick:r[5]||(r[5]=_=>s.model.showAll(!1))},{default:vt(()=>r[30]||(r[30]=[St(" Hide all ")])),_:1})])]),X(d,{modelValue:s.model.showButtons,"onUpdate:modelValue":r[14]||(r[14]=_=>s.model.showButtons=_)},{header:vt(({expanded:_})=>[C("div",hP,[r[31]||(r[31]=St(" Buttons ")),r[32]||(r[32]=C("div",{class:"horizontal separator"},null,-1)),X(u,{class:kt(["gt",{r90:_}])},null,8,["class"])])]),content:vt(()=>[C("div",fP,[C("div",null,"Push: "+Bt(s.model.message),1),C("div",pP,[Vi(C("input",{"onUpdate:modelValue":r[6]||(r[6]=_=>s.model.text=_),type:"text"},null,512),[[sr,s.model.text]]),X(o,{class:"btn",onClick:r[7]||(r[7]=_=>s.model.click("ok"))},{default:vt(()=>r[33]||(r[33]=[St(" Ok ")])),_:1}),X(o,{class:"btn","no-focus":"",tabindex:"-1",onClick:r[8]||(r[8]=_=>s.model.click("no-focus"))},{default:vt(()=>r[34]||(r[34]=[St(" no-focus ")])),_:1}),X(o,{class:"btn",onClick:r[9]||(r[9]=_=>s.model.click("cancel"))},{default:vt(()=>r[35]||(r[35]=[St(" Cancel ")])),_:1}),X(o,{onClick:r[10]||(r[10]=_=>s.model.click("unstyled"))},{default:vt(()=>r[36]||(r[36]=[St(" Unstyled ")])),_:1}),X(o,{class:"btn",disabled:"",onClick:r[11]||(r[11]=_=>s.model.click("disabled"))},{default:vt(()=>r[37]||(r[37]=[St(" Disabled ")])),_:1})]),C("div",mP," Radio (index): "+Bt(s.model.selectedIndex),1),C("div",gP,[(ot(!0),xt(ee,null,We(s.model.checkboxes,(_,x)=>(ot(),xe(o,{key:`index[${x}]`,modelValue:s.model.selectedIndex,"onUpdate:modelValue":r[12]||(r[12]=g=>s.model.selectedIndex=g),class:"radio round",toggle:[x]},{default:vt(({checked:g})=>[C("div",_P,[X(u,{class:kt(["dot",{hidden:!g}])},null,8,["class"])]),St(" item "+Bt(`#${x}`),1)]),_:2},1032,["modelValue","toggle"]))),128))]),C("div",vP," Radio (object): { name: "+Bt(s.model.selectedRadio.name)+", value: "+Bt(s.model.selectedRadio.value)+" } ",1),C("div",xP,[(ot(!0),xt(ee,null,We(s.model.radioItems,(_,x)=>(ot(),xe(o,{key:`object[${x}]`,modelValue:s.model.selectedRadio,"onUpdate:modelValue":r[13]||(r[13]=g=>s.model.selectedRadio=g),class:"radio round",toggle:[s.model.radioItems[x]]},{default:vt(({checked:g})=>[C("div",MP,[X(u,{class:kt(["dot",{hidden:!g}])},null,8,["class"])]),St(" item "+Bt(`#${x}`),1)]),_:2},1032,["modelValue","toggle"]))),128))]),C("div",yP," Checkbox: [ "+Bt(s.model.checkboxes.join(" "))+" ] ",1),C("div",SP,[(ot(!0),xt(ee,null,We(s.model.checkboxes,(_,x)=>(ot(),xe(o,{key:`checkbox[${x}]`,modelValue:s.model.checkboxes[x],"onUpdate:modelValue":g=>s.model.checkboxes[x]=g,class:"cbx round",toggle:""},{default:vt(({checked:g})=>[C("div",bP,[X(u,{class:kt(["check",{hidden:!g}])},null,8,["class"])]),St(" item "+Bt(`#${x}`),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))])])]),_:1},8,["modelValue"]),X(d,{modelValue:s.model.showDetails,"onUpdate:modelValue":r[16]||(r[16]=_=>s.model.showDetails=_)},{header:vt(({expanded:_})=>[C("div",EP,[r[38]||(r[38]=St(" Details, dynamic ")),(ot(!0),xt(ee,null,We(s.model.paragraphs,(x,g)=>Vi((ot(),xe(o,{key:g,modelValue:s.model.lorem.paragraphs,"onUpdate:modelValue":r[15]||(r[15]=m=>s.model.lorem.paragraphs=m),class:"btn small",toggle:[x]},{default:vt(()=>[St(Bt(x),1)]),_:2},1032,["modelValue","toggle"])),[[p]])),128)),r[39]||(r[39]=C("div",{class:"horizontal separator"},null,-1)),X(u,{class:kt(["gt",{r90:_}])},null,8,["class"])])]),content:vt(()=>[C("div",wP,[X(a,{model:s.model.lorem},null,8,["model"])])]),_:1},8,["modelValue"]),(ot(),xt(ee,null,We(3,(_,x)=>X(d,{key:x,modelValue:s.model.showRadioDetails,"onUpdate:modelValue":r[17]||(r[17]=g=>s.model.showRadioDetails=g),toggle:[x]},{header:vt(({expanded:g})=>[C("div",TP,[r[40]||(r[40]=St(" Details, radio ")),C("div",AP,[X(u,{class:kt(["dot",{hidden:!g}])},null,8,["class"])]),r[41]||(r[41]=C("div",{class:"horizontal separator"},null,-1)),X(u,{class:kt(["gt",{r90:g}])},null,8,["class"])])]),content:vt(()=>[C("div",CP,[X(a,{paragraphs:1})])]),_:2},1032,["modelValue","toggle"])),64)),X(d,{modelValue:s.model.showIcons,"onUpdate:modelValue":r[18]||(r[18]=_=>s.model.showIcons=_)},{header:vt(({expanded:_})=>[C("div",RP,[r[42]||(r[42]=St(" Icons ")),r[43]||(r[43]=C("div",{class:"horizontal separator"},null,-1)),X(u,{class:kt(["gt",{r90:_}])},null,8,["class"])])]),content:vt(()=>[C("div",PP,[C("div",LP,[(ot(),xt(ee,null,We(i,_=>C("div",{key:_,class:"flex gap-2"},[C("div",DP,[X(u,{class:kt(["fs-72",`${_}`])},null,8,["class"]),C("div",IP,Bt(_),1)])])),64))]),C("span",null,[r[44]||(r[44]=St(" Inline ")),(ot(),xt(ee,null,We(i,_=>X(u,{key:_,class:kt(_)},null,8,["class"])),64)),r[45]||(r[45]=St(" icons "))])])]),_:1},8,["modelValue"]),X(d,{modelValue:s.model.showRanges,"onUpdate:modelValue":r[21]||(r[21]=_=>s.model.showRanges=_)},{header:vt(({expanded:_})=>[C("div",UP,[r[46]||(r[46]=St(" Range ")),r[47]||(r[47]=C("div",{class:"horizontal separator"},null,-1)),X(u,{class:kt(["gt",{r90:_}])},null,8,["class"])])]),content:vt(()=>[C("div",NP,[X(h,{modelValue:s.model.rangeValue,"onUpdate:modelValue":r[19]||(r[19]=_=>s.model.rangeValue=_),class:"v-range",min:s.model.rangeMin,max:s.model.rangeMax,step:s.model.rangeStep},null,8,["modelValue","min","max","step"]),r[48]||(r[48]=C("span",null,null,-1)),C("div",FP,Bt(s.model.rangeValue),1),X(h,{modelValue:s.model.rangeValue,"onUpdate:modelValue":r[20]||(r[20]=_=>s.model.rangeValue=_),class:"h-range",min:s.model.rangeMin,max:s.model.rangeMax,step:s.model.rangeStep},null,8,["modelValue","min","max","step"])])]),_:1},8,["modelValue"]),X(d,{modelValue:s.model.showInputs,"onUpdate:modelValue":r[24]||(r[24]=_=>s.model.showInputs=_)},{header:vt(({expanded:_})=>[C("div",OP,[r[49]||(r[49]=St(" Input ")),r[50]||(r[50]=C("div",{class:"horizontal separator"},null,-1)),X(u,{class:kt(["gt",{r90:_}])},null,8,["class"])])]),content:vt(()=>[C("div",BP,[C("div",kP,[C("span",null,Bt(e(s.model.email)),1),X(f,{modelValue:s.model.email,"onUpdate:modelValue":r[22]||(r[22]=_=>s.model.email=_),type:"text",label:"e-mail",class:"py-2",input:"form-input",decorator:"form-decorator blue"},null,8,["modelValue"])]),C("div",VP,[C("span",null,Bt(e(s.model.password)),1),X(f,{modelValue:s.model.password,"onUpdate:modelValue":r[23]||(r[23]=_=>s.model.password=_),type:"text",label:"password",class:"py-2",input:"form-input",decorator:"form-decorator red"},null,8,["modelValue"])])])]),_:1},8,["modelValue"])])}}}),HP={class:"flowers-tools surface"},GP={class:"properties"},WP={class:"section"},$P={class:"flex jc-between"},XP={class:"flex jc-between"},qP={class:"flex jc-between"},YP={class:"section-header flex ai-center gap-2"},jP={class:"flex jc-between"},KP={class:"flex jc-between"},ZP={class:"flex jc-between"},JP={class:"section-header flex ai-center gap-2"},QP={class:"flex jc-between"},tL={class:"flex jc-between"},eL={class:"flex jc-between"},nL={class:"section-header flex ai-center gap-2"},iL={class:"flex jc-between"},sL={class:"flex jc-between"},rL={class:"flex jc-between"},oL={class:"flex ai-center mt-2"},aL={key:0},lL={class:"section"},cL={class:"flex jc-between"},uL={class:"flex jc-between"},dL={class:"flex jc-between"},hL={class:"flex jc-between"},fL={class:"clip"},pL=["src"],mL={key:0},gL={key:1,class:"view-header"},_L=re({__name:"flowers",props:{model:{},state:{}},setup(n){const t=n,e=_t(void 0),i=bn(()=>t.state==="mini");return Ye(()=>t.model.mount(e.value)),je(()=>t.model.unmount()),(s,r)=>{const o=Vt("ui-item"),a=Vt("ui-range"),l=Vt("ui-button");return ot(),xt("div",{class:kt(["flowers view",{out:s.state==="mini"}])},[C("div",{ref_key:"root",ref:e,class:"relative paper"},[X(o,{class:"clip view",model:s.model.root},null,8,["model"])],512),C("div",HP,[C("div",GP,[C("div",WP,[r[35]||(r[35]=C("div",{class:"section-header"}," generation parameters ",-1)),C("div",$P,[r[18]||(r[18]=C("span",{class:"muted tiny"},"count",-1)),St(" "+Bt(s.model.count),1)]),X(a,{modelValue:s.model.count,"onUpdate:modelValue":r[0]||(r[0]=u=>s.model.count=u),min:s.model.countMin,max:s.model.countMax,step:s.model.countStep,disabled:i.value},null,8,["modelValue","min","max","step","disabled"]),C("div",XP,[r[19]||(r[19]=C("span",{class:"muted tiny"},"radius",-1)),St(" "+Bt(s.model.radius),1)]),X(a,{modelValue:s.model.radius,"onUpdate:modelValue":r[1]||(r[1]=u=>s.model.radius=u),min:s.model.radiusMin,max:s.model.radiusMax,step:s.model.radiusStep,disabled:i.value},null,8,["modelValue","min","max","step","disabled"]),C("div",qP,[r[20]||(r[20]=C("span",{class:"muted tiny"},"petals",-1)),St(" "+Bt(s.model.petals),1)]),X(a,{modelValue:s.model.petals,"onUpdate:modelValue":r[2]||(r[2]=u=>s.model.petals=u),min:s.model.petalsMin,max:s.model.petalsMax,disabled:i.value},null,8,["modelValue","min","max","disabled"]),C("div",YP,[C("div",{class:"flower-color",style:Ln({backgroundColor:`rgb(${s.model.bottom.r} ${s.model.bottom.g} ${s.model.bottom.b})`})},null,4),r[21]||(r[21]=C("span",null,"bottom color",-1))]),C("div",jP,[r[22]||(r[22]=C("span",{class:"muted tiny"},"r",-1)),St(" "+Bt(s.model.bottom.r),1)]),X(a,{modelValue:s.model.bottom.r,"onUpdate:modelValue":r[3]||(r[3]=u=>s.model.bottom.r=u),min:0,max:255,step:5,disabled:i.value},null,8,["modelValue","disabled"]),C("div",KP,[r[23]||(r[23]=C("span",{class:"muted tiny"},"g",-1)),St(" "+Bt(s.model.bottom.g),1)]),X(a,{modelValue:s.model.bottom.g,"onUpdate:modelValue":r[4]||(r[4]=u=>s.model.bottom.g=u),min:0,max:255,step:5,disabled:i.value},null,8,["modelValue","disabled"]),C("div",ZP,[r[24]||(r[24]=C("span",{class:"muted tiny"},"b",-1)),St(" "+Bt(s.model.bottom.b),1)]),X(a,{modelValue:s.model.bottom.b,"onUpdate:modelValue":r[5]||(r[5]=u=>s.model.bottom.b=u),min:0,max:255,step:5,disabled:i.value},null,8,["modelValue","disabled"]),C("div",JP,[C("div",{class:"flower-color",style:Ln({backgroundColor:`rgb(${s.model.middle.r} ${s.model.middle.g} ${s.model.middle.b})`})},null,4),r[25]||(r[25]=C("span",null,"middle color",-1))]),C("div",QP,[r[26]||(r[26]=C("span",{class:"muted tiny"},"r",-1)),St(" "+Bt(s.model.middle.r),1)]),X(a,{modelValue:s.model.middle.r,"onUpdate:modelValue":r[6]||(r[6]=u=>s.model.middle.r=u),min:0,max:255,step:5,disabled:i.value},null,8,["modelValue","disabled"]),C("div",tL,[r[27]||(r[27]=C("span",{class:"muted tiny"},"g",-1)),St(" "+Bt(s.model.middle.g),1)]),X(a,{modelValue:s.model.middle.g,"onUpdate:modelValue":r[7]||(r[7]=u=>s.model.middle.g=u),min:0,max:255,step:5,disabled:i.value},null,8,["modelValue","disabled"]),C("div",eL,[r[28]||(r[28]=C("span",{class:"muted tiny"},"b",-1)),St(" "+Bt(s.model.middle.b),1)]),X(a,{modelValue:s.model.middle.b,"onUpdate:modelValue":r[8]||(r[8]=u=>s.model.middle.b=u),min:0,max:255,step:5,disabled:i.value},null,8,["modelValue","disabled"]),C("div",nL,[C("div",{class:"flower-color",style:Ln({backgroundColor:`rgb(${s.model.top.r} ${s.model.top.g} ${s.model.top.b})`})},null,4),r[29]||(r[29]=C("span",null,"top color",-1))]),C("div",iL,[r[30]||(r[30]=C("span",{class:"muted tiny"},"r",-1)),St(" "+Bt(s.model.top.r),1)]),X(a,{modelValue:s.model.top.r,"onUpdate:modelValue":r[9]||(r[9]=u=>s.model.top.r=u),min:0,max:255,step:5,disabled:i.value},null,8,["modelValue","disabled"]),C("div",sL,[r[31]||(r[31]=C("span",{class:"muted tiny"},"g",-1)),St(" "+Bt(s.model.top.g),1)]),X(a,{modelValue:s.model.top.g,"onUpdate:modelValue":r[10]||(r[10]=u=>s.model.top.g=u),min:0,max:255,step:5,disabled:i.value},null,8,["modelValue","disabled"]),C("div",rL,[r[32]||(r[32]=C("span",{class:"muted tiny"},"b",-1)),St(" "+Bt(s.model.top.b),1)]),X(a,{modelValue:s.model.top.b,"onUpdate:modelValue":r[11]||(r[11]=u=>s.model.top.b=u),min:0,max:255,step:5,disabled:i.value},null,8,["modelValue","disabled"]),s.model.todo===0?(ot(),xe(l,{key:0,class:"btn mt-2",disabled:i.value,onClick:r[12]||(r[12]=u=>s.model.generate())},{default:vt(()=>r[33]||(r[33]=[St(" Generate ")])),_:1},8,["disabled"])):(ot(),xe(l,{key:1,class:"btn mt-2",disabled:i.value,onClick:r[13]||(r[13]=u=>s.model.stop())},{default:vt(()=>r[34]||(r[34]=[St(" Stop ")])),_:1},8,["disabled"])),C("div",oL,[s.model.todo?(ot(),xt("div",aL," to do: "+Bt(s.model.todo),1)):nh("",!0)])]),C("div",lL,[r[40]||(r[40]=C("div",{class:"section-header"}," images ",-1)),C("div",cL,[r[36]||(r[36]=C("span",{class:"muted tiny"},"index",-1)),St(" "+Bt(s.model.selectedIndex),1)]),X(a,{modelValue:s.model.selectedIndex,"onUpdate:modelValue":r[14]||(r[14]=u=>s.model.selectedIndex=u),min:0,max:Math.max(0,s.model.images.length-1),step:1,disabled:i.value},null,8,["modelValue","max","disabled"]),C("div",uL,[r[37]||(r[37]=C("span",{class:"muted tiny"},"brightness",-1)),St(" "+Bt(s.model.brightness),1)]),X(a,{modelValue:s.model.brightness,"onUpdate:modelValue":r[15]||(r[15]=u=>s.model.brightness=u),min:0,max:200,step:1,disabled:i.value},null,8,["modelValue","disabled"]),C("div",dL,[r[38]||(r[38]=C("span",{class:"muted tiny"},"contrast",-1)),St(" "+Bt(s.model.contrast),1)]),X(a,{modelValue:s.model.contrast,"onUpdate:modelValue":r[16]||(r[16]=u=>s.model.contrast=u),min:0,max:200,step:1,disabled:i.value},null,8,["modelValue","disabled"]),C("div",hL,[r[39]||(r[39]=C("span",{class:"muted tiny"},"grayscale",-1)),St(" "+Bt(s.model.grayscale),1)]),X(a,{modelValue:s.model.grayscale,"onUpdate:modelValue":r[17]||(r[17]=u=>s.model.grayscale=u),min:0,max:100,step:1,disabled:i.value},null,8,["modelValue","disabled"])])]),C("div",fL,[s.model.image&&s.model.image.source?(ot(),xt("img",{key:0,class:"fit-contain",src:s.model.image.source},null,8,pL)):nh("",!0)])]),X(ms,{name:"delayed"},{default:vt(()=>[s.state==="mini"?(ot(),xt("div",mL)):(ot(),xt("div",gL,r[41]||(r[41]=[C("div",{class:"view-title"}," flowers ",-1),C("div",{class:"view-subtitle"}," via web-worker ",-1)])))]),_:1})],2)}}}),vL={class:"view"},xL={key:0},ML={key:1,class:"view-header"},yL={key:0},SL={key:1,class:"tool-box top right col"},bL=re({__name:"gears",props:{model:{},state:{}},setup(n){const t=_t();return Ye(()=>n.model.mount(t.value)),je(()=>n.model.unmount()),(e,i)=>{const s=Vt("ui-item"),r=Vt("ui-button");return ot(),xt("div",vL,[C("div",{ref_key:"root",ref:t,class:"paper clip view"},[X(s,{class:"clip view",model:e.model.root},null,8,["model"])],512),X(ms,{name:"delayed"},{default:vt(()=>[e.state==="mini"?(ot(),xt("div",xL)):(ot(),xt("div",ML,i[4]||(i[4]=[C("div",{class:"view-title"}," gears ",-1),C("div",{class:"view-subtitle"}," flip, drag, drop, rotate! ",-1)])))]),_:1}),X(ms,{name:"delayed"},{default:vt(()=>[e.state==="mini"?(ot(),xt("div",yL)):(ot(),xt("div",SL,[X(r,{class:"btn",onClick:i[0]||(i[0]=o=>e.model.reset())},{default:vt(()=>i[5]||(i[5]=[St(" reset ")])),_:1}),X(r,{class:"btn",onClick:i[1]||(i[1]=o=>e.model.check())},{default:vt(()=>i[6]||(i[6]=[St(" check ")])),_:1}),X(r,{class:"btn",onClick:i[2]||(i[2]=o=>e.model.start())},{default:vt(()=>i[7]||(i[7]=[St(" start ")])),_:1}),X(r,{class:"btn",onClick:i[3]||(i[3]=o=>e.model.stop())},{default:vt(()=>i[8]||(i[8]=[St(" stop ")])),_:1})]))]),_:1})])}}}),EL=re({__name:"logo",props:{model:{}},setup(n){const t=_t(void 0);return Ye(()=>n.model.mount(t.value)),je(()=>n.model.unmount()),(e,i)=>{const s=Vt("ui-item");return ot(),xt("div",{ref_key:"root",ref:t,class:"logo ff-header fw-header",onDblclick:i[0]||(i[0]=r=>e.model.animate())},[X(s,{model:e.model.root},null,8,["model"])],544)}}}),wL={class:"lorem"},TL=re({__name:"lorem",props:{model:{},paragraphs:{}},setup(n){const t=n,e=[`
  Lorem ipsum dolor sit amet, vis an diam quot nostrum, per te viris tacimates. Placerat
  patrioque cu per, vim et vituperata signiferumque, quo admodum appellantur accommodare ex. Nec
  et alii volutpat, ne reque voluptatum cum, accumsan constituto eu his. Cu congue discere
  concludaturque nam, ut erat quaeque mel. Veritus fastidii maiestatis ex vis.
  `,`
  Est ut agam forensibus scripserit, populo maiorum vim ea, eos impetus voluptatum an. In sea
  simul eirmod iuvaret, vix ne docendi perpetua. Quo te aliquam persecuti accommodare, sed
  affert argumentum et. Ne doming definiebas quo, cu nec eirmod audire, persecuti voluptatibus
  no pro. Probatus hendrerit has in, cum cu diam liberavisse. Qui no lucilius dissentiunt. Eam
  ut unum nonumes, eu detracto interesset sit.
  `,`
  Eirmod vulputate disputationi pri in, ea postea detraxit platonem sed. Ex ancillae quaerendum
  cum, no probatus incorrupte cum. Feugait consetetur nam cu. Atqui reprehendunt pri in, eam
  case prima at, eu cum malorum eloquentiam. Mei sumo nonumy corrumpit ex, in nominavi
  interpretaris mel. Vim cu lorem nonumes recusabo, his quod errem insolens et.
  `,`
  Homero facilisi eam eu. Sea dicat feugait fabellas at, ei est modo elitr, per ut iuvaret
  epicuri fierent. Eu eum ludus populo hendrerit. Eu quem causae appellantur pro. Pro ad sint
  petentium repudiandae, ius et eius legimus officiis, an est magna quando admodum.
  `,`
  Sea ea reque molestie, principes definitiones te usu. Sit ei illum accusam, id ius omnis
  cetero maluisset, eam et saepe voluptua democritum. Mea erroribus dissentiet ne, ne sed quot
  falli. Mea vidit labitur eu, ad dicam melius audiam usu. Per in tempor audire consulatu. In
  sonet vivendum delicata vis.
  `,`
  Elitr vocibus et per, mea eu maiorum explicari. Cu usu aliquid luptatum, fabellas
  conclusionemque ut nam. Id primis vulputate incorrupte vix, pro libris impetus ad. Dolor
  quidam option ne per, ad eos aliquip sensibus. Te eam tamquam cotidieque. Mei quot zril vitae
  ex, porro integre ad qui.
  `,`
  Possim noluisse qui an. Eos cu quod timeam alienum, quo debitis similique ne. Tempor dolorem
  fierent vis no, ad nihil denique concludaturque vis. Et dico dolor qualisque pro, ipsum
  saperet suavitate cu vim. Latine feugiat inimicus eum no, vel ne virtute bonorum
  vituperatoribus.
  `,`
  Tollit eripuit ne nam. His ei euripidis incorrupte, pro oratio possit quaeque cu. Cu placerat
  petentium has, id quot voluptatum est, meliore dissentiunt has te. Quo dolorem eloquentiam
  dissentiunt ex. Tation dolorum explicari sed ex.
  `,`
  Ad noster impetus eum. Vix option sanctus et, te eos ornatus referrentur. An pri debet impedit
  adipisci, et erant volutpat definitionem usu, ex enim habemus duo. Usu noster dignissim
  philosophia ne, te vis sale oblique gubergren.
  `,`
  Has in decore urbanitas, mazim labitur ocurreret cum et, cu cum denique intellegat. Sea ei
  vituperata delicatissimi, at cum homero ornatus sensibus. Ne nibh scripserit cotidieque pro,
  impetus offendit deseruisse est eu. Option aperiri necessitatibus at usu, pericula dissentiet
  ea eam, conceptam assueverit eam cu. Vis pertinax patrioque aliquando ex.
  `],i=bn(()=>{var s;return((s=t.model)==null?void 0:s.paragraphs)??t.paragraphs??e.length});return(s,r)=>(ot(),xt("div",wL,[(ot(!0),xt(ee,null,We(i.value,o=>(ot(),xt("p",{key:o},Bt(e[o-1]),1))),128))]))}}),AL={class:"movable-container view"},CL={key:0,class:"anchor right bottom p-2"},RL=re({__name:"movable",props:{model:{}},setup(n){return(t,e)=>{const i=Vt("ui-icon"),s=Vt("ui-button"),r=Vt("wrapper-view");return ot(),xt("div",AL,[(ot(!0),xt(ee,null,We(t.model.wrappers,(o,a)=>(ot(),xe(r,{key:o.key,model:o,state:"mini",class:"view-wrapper"},{default:vt(()=>[a!==t.model.expanded?(ot(),xt("div",CL,[X(s,{class:"btn round iconic",onClick:l=>t.model.expand(a)},{default:vt(()=>[X(i,{class:"gt"})]),_:2},1032,["onClick"])])):nh("",!0)]),_:2},1032,["model"]))),128))])}}}),PL={class:"scrollable surface view flex col gap-2 p-2"},LL={class:"test-grid"},DL={class:"test-items-grid"},IL={class:"test-grid-cell"},UL=["onClick"],NL={class:"flex"},FL={class:"m-4"},OL={class:"list-box"},BL={class:"list-box-options"},kL=re({__name:"sandbox",props:{model:{}},setup(n){return(t,e)=>{const i=Vt("ui-button"),s=Vt("ui-dropdown"),r=Vt("list-box");return ot(),xt("div",PL,[C("div",LL,[C("div",DL,[(ot(!0),xt(ee,null,We(t.model.single.items,o=>(ot(),xt(ee,{key:o.key},[C("div",IL,Bt(o===t.model.single.selectedItem?"+":" "),1),C("div",{class:"test-grid-cell",onClick:a=>t.model.single.selectedItem=o},Bt(o.name),9,UL)],64))),128))])]),C("div",NL,[X(i,{class:"btn",onClick:e[0]||(e[0]=o=>t.model.single.selectedItem=void 0)},{default:vt(()=>e[2]||(e[2]=[St(" × ")])),_:1})]),C("div",FL,[X(r,{modelValue:t.model.single.selectedItem,"onUpdate:modelValue":e[1]||(e[1]=o=>t.model.single.selectedItem=o)},{default:vt(({expanded:o,toggle:a,selected:l})=>[C("div",OL,[X(i,{class:kt(["slct",{"no-mouse":o.value}]),onClick:u=>a()},{default:vt(()=>{var u;return[St(Bt(((u=l.value)==null?void 0:u.name)||"-"),1)]}),_:2},1032,["class","onClick"]),X(s,{modelValue:o.value,"onUpdate:modelValue":u=>o.value=u,class:"list-box-dropdown"},{default:vt(()=>[C("div",BL,[(ot(!0),xt(ee,null,We(t.model.single.items,(u,d)=>(ot(),xe(i,{key:d,class:kt(["property-item",{selected:u===l.value}]),onClick:h=>l.value=u},{default:vt(()=>[St(Bt(u.name),1)]),_:2},1032,["class","onClick"]))),128))])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:1},8,["modelValue"])])])}}}),VL={class:"svg-filter-tools surface"},zL={class:"properties"},HL={class:"section"},GL={class:"flex jc-between"},WL={class:"section"},$L={class:"flex jc-between"},XL={class:"muted tiny"},qL={class:"section"},YL={class:"flex jc-between"},jL={class:"flex jc-between"},KL={class:"flex jc-between"},ZL={class:"section"},JL={class:"flex jc-between"},QL={class:"muted tiny"},tD={class:"section"},eD={class:"flex jc-between"},nD={class:"flex jc-between"},iD={class:"svg-filter-previews"},sD={class:"svg-filter-preview"},rD=["viewBox"],oD={class:"svg-filter-preview svg-zoom-50"},aD=["viewBox"],lD={class:"svg-filter-preview svg-zoom-25"},cD=["viewBox"],uD={key:0},dD={key:1,class:"view-header"},hD=re({__name:"svg-filters",props:{model:{},state:{}},setup(n){const t=n,e=_t(void 0),i=bn(()=>t.state==="mini");return Ye(()=>t.model.mount(e.value)),je(()=>t.model.unmount()),(s,r)=>{const o=Vt("ui-item"),a=Vt("ui-range");return ot(),xt("div",{class:kt(["svg-filter view",{out:i.value}])},[C("div",{ref_key:"root",ref:e,class:"relative paper"},[X(o,{class:"clip view",model:s.model.root},null,8,["model"])],512),C("div",VL,[C("div",zL,[C("div",HL,[r[7]||(r[7]=C("div",{class:"section-header"}," blur ",-1)),C("div",GL,[r[6]||(r[6]=C("span",{class:"muted tiny"},"deviation",-1)),St(" "+Bt(s.model.blur.attributes.stdDeviation.toFixed(1)),1)]),X(a,{modelValue:s.model.blur.attributes.stdDeviation,"onUpdate:modelValue":r[0]||(r[0]=l=>s.model.blur.attributes.stdDeviation=l),min:0,max:5,step:.1,disabled:i.value},null,8,["modelValue","disabled"])]),C("div",WL,[r[8]||(r[8]=C("div",{class:"section-header"}," specular point light ",-1)),(ot(),xt(ee,null,We(["x","y","z"],l=>(ot(),xt(ee,{key:l},[C("div",$L,[C("span",XL,Bt(l),1),St(" "+Bt(s.model.specPointLight.attributes[l].toFixed()),1)]),X(a,{modelValue:s.model.specPointLight.attributes[l],"onUpdate:modelValue":u=>s.model.specPointLight.attributes[l]=u,min:-100,max:100,disabled:i.value},null,8,["modelValue","onUpdate:modelValue","disabled"])],64))),64))]),C("div",qL,[r[12]||(r[12]=C("div",{class:"section-header"}," specular ",-1)),C("div",YL,[r[9]||(r[9]=C("span",{class:"muted tiny"},"scale",-1)),St(" "+Bt(s.model.specular.attributes.surfaceScale.toFixed(1)),1)]),X(a,{modelValue:s.model.specular.attributes.surfaceScale,"onUpdate:modelValue":r[1]||(r[1]=l=>s.model.specular.attributes.surfaceScale=l),min:.1,max:5,step:.1,disabled:i.value},null,8,["modelValue","disabled"]),C("div",jL,[r[10]||(r[10]=C("span",{class:"muted tiny"},"const",-1)),St(" "+Bt(s.model.specular.attributes.specularConstant.toFixed(1)),1)]),X(a,{modelValue:s.model.specular.attributes.specularConstant,"onUpdate:modelValue":r[2]||(r[2]=l=>s.model.specular.attributes.specularConstant=l),min:0,max:5,step:.1,disabled:i.value},null,8,["modelValue","disabled"]),C("div",KL,[r[11]||(r[11]=C("span",{class:"muted tiny"},"exponent",-1)),St(" "+Bt(s.model.specular.attributes.specularExponent.toFixed()),1)]),X(a,{modelValue:s.model.specular.attributes.specularExponent,"onUpdate:modelValue":r[3]||(r[3]=l=>s.model.specular.attributes.specularExponent=l),min:2,max:25,disabled:i.value},null,8,["modelValue","disabled"])]),C("div",ZL,[r[13]||(r[13]=C("div",{class:"section-header"}," diffuse point light ",-1)),(ot(),xt(ee,null,We(["x","y","z"],l=>(ot(),xt(ee,{key:l},[C("div",JL,[C("span",QL,Bt(l),1),St(" "+Bt(s.model.diffPointLight.attributes[l].toFixed()),1)]),X(a,{modelValue:s.model.diffPointLight.attributes[l],"onUpdate:modelValue":u=>s.model.diffPointLight.attributes[l]=u,min:-100,max:100,disabled:i.value},null,8,["modelValue","onUpdate:modelValue","disabled"])],64))),64))]),C("div",tD,[r[16]||(r[16]=C("div",{class:"section-header"}," diffuse ",-1)),C("div",eD,[r[14]||(r[14]=C("span",{class:"muted tiny"},"scale",-1)),St(" "+Bt(s.model.diffuse.attributes.surfaceScale.toFixed(1)),1)]),X(a,{modelValue:s.model.diffuse.attributes.surfaceScale,"onUpdate:modelValue":r[4]||(r[4]=l=>s.model.diffuse.attributes.surfaceScale=l),min:.1,max:5,step:.1,disabled:i.value},null,8,["modelValue","disabled"]),C("div",nD,[r[15]||(r[15]=C("span",{class:"muted tiny"},"const",-1)),St(" "+Bt(s.model.diffuse.attributes.diffuseConstant.toFixed(2)),1)]),X(a,{modelValue:s.model.diffuse.attributes.diffuseConstant,"onUpdate:modelValue":r[5]||(r[5]=l=>s.model.diffuse.attributes.diffuseConstant=l),min:0,max:1,step:.01,disabled:i.value},null,8,["modelValue","disabled"])])]),C("div",iD,[C("div",sD,[(ot(),xt("svg",{class:"view",viewBox:s.model.viewBox,style:{marginBlock:"auto"}},[X(o,{model:s.model.content},null,8,["model"])],8,rD))]),C("div",oD,[(ot(),xt("svg",{class:"view",viewBox:s.model.viewBox,style:{marginBlock:"auto"}},[X(o,{model:s.model.content},null,8,["model"])],8,aD))]),C("div",lD,[(ot(),xt("svg",{class:"view",viewBox:s.model.viewBox,style:{marginBlock:"auto"}},[X(o,{model:s.model.content},null,8,["model"])],8,cD))])])]),X(ms,{name:"delayed"},{default:vt(()=>[s.state==="mini"?(ot(),xt("div",uD)):(ot(),xt("div",dD,r[17]||(r[17]=[C("div",{class:"view-title"}," filters ",-1),C("div",{class:"view-subtitle"}," light it up! ",-1)])))]),_:1})],2)}}}),fD={class:"view"},pD={class:"top right anchor flex col p-2 gap-2"},mD=re({__name:"svg-sandbox",props:{model:{}},setup(n){const t=_t();return Ye(()=>n.model.mount(t.value)),je(()=>n.model.unmount()),(e,i)=>{const s=Vt("ui-item"),r=Vt("ui-button");return ot(),xt("div",fD,[C("div",{ref_key:"root",ref:t,class:"paper clip view"},[X(s,{class:"clip view",model:e.model.root},null,8,["model"]),i[1]||(i[1]=C("svg",{viewBox:"-12 -12 24 24"},[C("path",{d:"M 5,-10 c 3,0 5,2 5,5 v 10 c 0,3 -2,5 -5,5 h -10 c -3,0 -5,-2 -5,-5 v -10 c 0,-3 2,-5, 5,-5 z",fill:"#00000040"})],-1))],512),C("div",pD,[X(r,{class:"btn",onClick:i[0]||(i[0]=o=>e.model.test())},{default:vt(()=>i[2]||(i[2]=[St(" test ")])),_:1})])])}}}),gD={class:"theme-content"},_D={class:"flex p-4"},vD={class:"dropdown-list"},xD={class:"theme-tools"},MD={class:"theme-editor"},yD={class:"p-1"},SD={class:"property-list"},bD={class:"flex m-2 gap-2"},ED=re({__name:"theme",props:{model:{}},setup(n){const t=Jn(["apple","banana","grape","tomato","kiwi"]),e=ku(t[0]);return(i,s)=>{var u;const r=Vt("ui-icon"),o=Vt("ui-button"),a=Vt("ui-select"),l=Bg("arrows");return ot(),xt("div",{class:"theme view",style:Ln(i.model.style)},[C("div",gD,[C("div",_D,[X(a,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=d=>e.value=d),style:{minWidth:"8em"}},{button:vt(({expanded:d,toggle:h})=>[X(o,{class:kt(["slct",{"no-mouse":d}]),onClick:f=>h()},{default:vt(()=>[St(Bt(e.value)+" ",1),s[3]||(s[3]=C("div",{class:"spacer"},null,-1)),X(r,{class:kt(["gt",{r90:d}])},null,8,["class"])]),_:2},1032,["class","onClick"])]),popup:vt(({select:d,selected:h})=>[C("div",vD,[(ot(!0),xt(ee,null,We(Rn(t),(f,p)=>(ot(),xe(o,{key:p,class:kt(["property-item",{selected:h(f)}]),onClick:_=>d(f)},{default:vt(()=>[X(r,{class:kt(["check",{hidden:!h(f)}])},null,8,["class"]),St(" "+Bt(f),1)]),_:2},1032,["class","onClick"]))),128))])]),_:1},8,["modelValue"])])]),C("div",xD,[C("div",MD,[i.model.selectedProperty?(ot(),xe(Ir(i.model.selectedProperty.component),{key:0,model:i.model.selectedProperty},null,8,["model"])):nh("",!0)]),C("code",yD,Bt((u=i.model.selectedProperty)==null?void 0:u.toCss()),1),Vi((ot(),xt("div",SD,[(ot(!0),xt(ee,null,We(i.model.properties,d=>(ot(),xe(o,{key:d.name,class:kt(["property-item",{selected:i.model.selectedProperty===d}]),onClick:h=>i.model.selectedProperty=d},{default:vt(()=>[St(Bt(d.name),1)]),_:2},1032,["class","onClick"]))),128))])),[[l,{cycle:!0}]]),C("div",bD,[X(o,{class:"btn",onClick:s[1]||(s[1]=d=>i.model.save())},{default:vt(()=>s[4]||(s[4]=[St(" Save ")])),_:1}),X(o,{class:"btn",onClick:s[2]||(s[2]=d=>i.model.load())},{default:vt(()=>s[5]||(s[5]=[St(" Load ")])),_:1})])])],4)}}}),wD={class:"transforms view flex ai-center jc-center"},TD={class:"transform-tools top right"},AD=re({__name:"transforms",props:{model:{}},setup(n){return(t,e)=>{const i=Vt("ui-range");return ot(),xt("div",wD,[C("div",{class:"bg-red box-200 fs-72",style:Ln({transform:`${t.model.matrix3d}`})}," Text ",4),C("div",TD,[St(" p: "+Bt(t.model.p)+" ",1),X(i,{modelValue:t.model.p,"onUpdate:modelValue":e[0]||(e[0]=s=>t.model.p=s),min:200,max:500,step:10},null,8,["modelValue"]),St(" a: "+Bt(t.model.a)+" ",1),X(i,{modelValue:t.model.a,"onUpdate:modelValue":e[1]||(e[1]=s=>t.model.a=s),min:-180,max:180},null,8,["modelValue"]),St(" z: "+Bt(t.model.z)+" ",1),X(i,{modelValue:t.model.z,"onUpdate:modelValue":e[2]||(e[2]=s=>t.model.z=s),min:-100,max:100},null,8,["modelValue"])])])}}}),CD={class:"surface view web-page-container"},RD={class:"web-aside"},PD={class:"web-aside-content",tabindex:"0"},LD={class:"web-main"},DD={class:"web-header"},ID={class:"web-content"},UD={class:"mirror"},ND=re({__name:"web-page",props:{model:{}},setup(n){return n.model.use(),(t,e)=>{const i=Vt("ui-icon"),s=Vt("ui-button"),r=Vt("clone-item");return ot(),xt("div",CD,[C("div",{ref:t.model.root,class:kt(["web-page",{menu:t.model.menu}])},[C("div",RD,[C("div",PD,[(ot(),xt(ee,null,We(6,o=>C("div",{key:o,class:"box-200 border m-2"})),64))])]),C("div",LD,[C("div",DD,[e[1]||(e[1]=St(" Header ")),e[2]||(e[2]=C("div",{class:"spacer"},null,-1)),X(s,{modelValue:t.model.menu,"onUpdate:modelValue":e[0]||(e[0]=o=>t.model.menu=o),toggle:"",class:"flat relative"},{default:vt(()=>[X(i,{class:"menu"}),C("div",{class:kt(["absolute fs-12 bg-blue centered round bottom right flex p-1",{hidden:!t.model.menu}])},[X(i,{class:"check"})],2)]),_:1},8,["modelValue"])]),C("div",ID,[C("div",UD,[X(r,null,{default:vt(()=>e[3]||(e[3]=[C("h1",null,"Welcome!",-1)])),_:1})]),(ot(),xt(ee,null,We(6,o=>C("div",{key:o,class:"box-200 border m-2"})),64))])])],2)])}}}),FD=re({__name:"wrapper",props:{model:{},state:{}},setup(n){const t=_t(void 0);return Ye(()=>n.model.mount(t.value)),je(()=>n.model.unmount()),(e,i)=>(ot(),xt("div",{ref_key:"root",ref:t,class:kt(e.model.classes)},[(ot(),xe(Ir(e.model.content.component),{model:e.model.content,state:e.model.state},null,8,["model","state"])),$n(e.$slots,"default",Bu(Ya({state:e.state})))],2))}}),OD={},BD={class:"view-button-content"};function kD(n,t){const e=Vt("ui-button");return ot(),xe(e,{class:"view-button"},{default:vt(()=>[C("div",BD,[$n(n.$slots,"default",{},()=>[t[0]||(t[0]=C("svg",{viewBox:"-12 -12 24 24"},[C("path",{class:"view-button-default",filter:"url(#view-button-lighting)",d:"M 5,-10 c 3,0 5,2 5,5 v 10 c 0,3 -2,5 -5,5 h -10 c -3,0 -5,-2 -5,-5 v -10 c 0,-3 2,-5, 5,-5 z"})],-1))])])]),_:3})}const VD=bi(OD,[["render",kD]]),zD={};function HD(n,t){const e=Vt("view-button");return ot(),xe(e,null,{default:vt(()=>t[0]||(t[0]=[C("svg",{viewBox:"-18 -18 36 36"},[C("g",{filter:"url(#view-button-lighting)"},[C("path",{class:"bicubic-grid"})])],-1)])),_:1})}const GD=bi(zD,[["render",HD]]),WD={};function $D(n,t){const e=Vt("view-button");return ot(),xe(e,null,{default:vt(()=>t[0]||(t[0]=[C("svg",{viewBox:"-24 -24 48 48"},[C("g",{filter:"url(#view-button-lighting)"},[C("path",{class:"black-flower"}),C("path",{class:"red-flower"}),C("path",{class:"white-flower"})])],-1)])),_:1})}const XD=bi(WD,[["render",$D]]),qD={};function YD(n,t){const e=Vt("view-button");return ot(),xe(e,null,{default:vt(()=>t[0]||(t[0]=[C("svg",{viewBox:"-10 -10 20 20"},[C("g",{filter:"url(#view-button-lighting)"},[C("g",{class:"g-3"},[C("path",{class:"gear-3"})]),C("g",{class:"g-4"},[C("path",{class:"gear-4"})]),C("g",{class:"g-5"},[C("path",{class:"gear-5"})])])],-1)])),_:1})}const jD=bi(qD,[["render",YD]]),KD={};function ZD(n,t){const e=Vt("view-button");return ot(),xe(e,null,{default:vt(()=>t[0]||(t[0]=[C("svg",{viewBox:"-18 -18 36 36"},[C("path",{filter:"url(#view-button-lighting)",fill:"#f06000",d:"M -6,-15 0,15 18,3"}),C("path",{filter:"url(#view-button-lighting)",fill:"#0060a0",d:"M -18,-18 -12,12 6,0"})],-1)])),_:1})}const JD=bi(KD,[["render",ZD]]),QD={};function tI(n,t){const e=Vt("view-button");return ot(),xe(e,null,{default:vt(()=>t[0]||(t[0]=[C("svg",{viewBox:"-24 -26 48 48"},[C("g",{filter:"url(#view-button-lighting)"},[C("path",{class:"movable-i0"}),C("path",{class:"movable-i1"}),C("path",{class:"movable-i2"}),C("path",{class:"movable-i3"})])],-1)])),_:1})}const eI=bi(QD,[["render",tI]]),nI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-12%20-12%2024%2024'%3e%3cpath%20d='M%202,-7%20v%205%20h%205%20v%204%20h%20-5%20v%205%20h%20-4%20v%20-5%20h%20-5%20v%20-4%20h%205%20v%20-5%20z'%20fill='orange'%20/%3e%3c/svg%3e",iI={};function sI(n,t){const e=Vt("view-button");return ot(),xe(e,null,{default:vt(()=>t[0]||(t[0]=[C("svg",{viewBox:"-10 -10 20 20"},[C("g",{filter:"url(#view-button-lighting)"},[C("path",{class:"svg-filters-stone"}),C("image",{href:nI,x:"-10",y:"-10",width:"20",height:"20"})])],-1)])),_:1})}const rI=bi(iI,[["render",sI]]),oI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-24%20-24%2048%2048'%3e%3cpath%20fill='rgb(80%20120%20144)'%20stroke='black'%20stroke-width='2'%20d='M%209,-23%20c%203,0%205,2%205,5%20v%2036%20c%200,3%20-2,5%20-5,5%20h%20-18%20c%20-3,0%20-5,-2%20-5,-5%20v%20-36%20c%200,-3%202,-5%205,-5%20z'%20/%3e%3cpath%20fill='rgb(100%20150%20180)'%20d='M%209,-22%20c%200,20%20-10,33%20-22,40%20v%20-36%20c%200,-2.4%201.6,-4%204,-4%20z'%20/%3e%3cpath%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20d='M%20-3,-19%20h%206'%20/%3e%3c/svg%3e",aI={};function lI(n,t){const e=Vt("view-button");return ot(),xe(e,null,{default:vt(()=>t[0]||(t[0]=[C("svg",{viewBox:"-10 -10 20 20"},[C("g",{filter:"url(#view-button-lighting)"},[C("image",{href:oI,x:"-10",y:"-10",width:"20",height:"20"})])],-1)])),_:1})}const cI=bi(aI,[["render",lI]]),uI=re((n,{slots:t})=>()=>$g(ee,void 0,[t.default(),t.default()]),{slots:Object}),dI=re((n,{emit:t,slots:e})=>{const i=_t(!1),s=()=>i.value=!i.value,r=bn({get(){return n.modelValue},set(o){t("update:modelValue",o),i.value=!1}});return()=>e.default({expanded:i,toggle:s,selected:r})},{slots:Object,props:{modelValue:{type:[Object,String,Number,Boolean],default:void 0}},emits:{"update:modelValue":n=>!0}}),hI=re((n,{slots:t})=>()=>t.default(),{slots:Object,props:{as:{type:[Object,String],default:"button"},modelValue:{type:[Object,String,Number,Boolean],default:void 0}}}),fI=re((n,{slots:t})=>()=>$g(n.as,n,{default:()=>t.default()}),{slots:Object,props:{as:{type:[Object,String],default:"div"}}}),pI=re((n,{slots:t})=>{const e=bn(()=>n.value===n.selectedValue);return()=>t.default({selected:e.value})},{slots:Object,props:{value:{type:[Object,String,Number,Boolean],required:!0},selectedValue:{type:[Object,String,Number,Boolean],default:void 0}}});var kf,Na;class mI{constructor(){b(this,kf,new BR);b(this,Na);Q(this,Na,gb(z2,{model:c(this,kf)})),c(this,Na).component("ui-button",VR).component("ui-collapse",zR).component("ui-details",HR).component("ui-dialog",$R).component("ui-dropdown",KR).component("ui-hotkey",t2).component("ui-icon",s2).component("ui-input",l2).component("ui-item",c2).component("ui-popup",u2).component("ui-range",h2).component("ui-select",m2).component("ui-zoom",g2).component("clone-item",uI).directive("click-stop",_2).directive("arrows",x2).component("bicubic-view",J2).component("binary-tree-view",rP).component("controls-view",zP).component("flowers-view",_L).component("gears-view",bL).component("logo-view",EL).component("lorem-view",TL).component("movable-view",RL).component("sandbox-view",kL).component("svg-filters-view",hD).component("svg-sandbox-view",mD).component("theme-view",ED).component("transforms-view",AD).component("web-page-view",ND).component("wrapper-view",FD).component("view-button",VD).component("bicubic-button",GD).component("flowers-button",XD).component("gears-button",jD).component("logo-button",JD).component("movable-button",eI).component("svg-filters-button",rI).component("web-page-button",cI).component("color-editor",y2).component("length-editor",b2).component("text-editor",E2).component("shadow-editor",A2).component("var-editor",L2).component("list-box",dI).component("list-box-button",hI).component("list-box-option",pI).component("list-box-options",fI)}run(){c(this,Na).mount("body")}}kf=new WeakMap,Na=new WeakMap;const gI=new mI;gI.run();
