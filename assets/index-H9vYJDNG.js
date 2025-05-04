(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ze={},pi=[],Xn=()=>{},lT=()=>!1,bc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vh=t=>t.startsWith("onUpdate:"),Kt=Object.assign,Mh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cT=Object.prototype.hasOwnProperty,Ge=(t,e)=>cT.call(t,e),Te=Array.isArray,mi=t=>fa(t)==="[object Map]",wc=t=>fa(t)==="[object Set]",nm=t=>fa(t)==="[object Date]",Oe=t=>typeof t=="function",vt=t=>typeof t=="string",Fn=t=>typeof t=="symbol",tt=t=>t!==null&&typeof t=="object",b_=t=>(tt(t)||Oe(t))&&Oe(t.then)&&Oe(t.catch),w_=Object.prototype.toString,fa=t=>w_.call(t),uT=t=>fa(t).slice(8,-1),E_=t=>fa(t)==="[object Object]",Lh=t=>vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,So=Nh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ec=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fT=/-(\w)/g,Cn=Ec(t=>t.replace(fT,(e,n)=>n?n.toUpperCase():"")),hT=/\B([A-Z])/g,ms=Ec(t=>t.replace(hT,"-$1").toLowerCase()),Tc=Ec(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cu=Ec(t=>t?`on${Tc(t)}`:""),Qr=(t,e)=>!Object.is(t,e),fl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},T_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},yf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rm;const Ic=()=>rm||(rm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ha(t){if(Te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=vt(r)?gT(r):ha(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(vt(t)||tt(t))return t}const dT=/;(?![^(]*\))/g,pT=/:([^]+)/,mT=/\/\*[^]*?\*\//g;function gT(t){const e={};return t.replace(mT,"").split(dT).forEach(n=>{if(n){const r=n.split(pT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gn(t){let e="";if(vt(t))e=t;else if(Te(t))for(let n=0;n<t.length;n++){const r=gn(t[n]);r&&(e+=r+" ")}else if(tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_T=Nh(yT);function I_(t){return!!t||t===""}function vT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ac(t[r],e[r]);return n}function Ac(t,e){if(t===e)return!0;let n=nm(t),r=nm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Fn(t),r=Fn(e),n||r)return t===e;if(n=Te(t),r=Te(e),n||r)return n&&r?vT(t,e):!1;if(n=tt(t),r=tt(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ac(t[o],e[o]))return!1}}return String(t)===String(e)}function A_(t,e){return t.findIndex(n=>Ac(n,e))}const S_=t=>!!(t&&t.__v_isRef===!0),Ye=t=>vt(t)?t:t==null?"":Te(t)||tt(t)&&(t.toString===w_||!Oe(t.toString))?S_(t)?Ye(t.value):JSON.stringify(t,R_,2):String(t),R_=(t,e)=>S_(e)?R_(t,e.value):mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pu(r,i)+" =>"]=s,n),{})}:wc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pu(n))}:Fn(e)?Pu(e):tt(e)&&!Te(e)&&!E_(e)?String(e):e,Pu=(t,e="")=>{var n;return Fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class bT{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wT(){return mn}let et;const xu=new WeakSet;class C_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xu.has(this)&&(xu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||x_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sm(this),k_(this);const e=et,n=Vn;et=this,Vn=!0;try{return this.fn()}finally{O_(this),et=e,Vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$h(e);this.deps=this.depsTail=void 0,sm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_f(this)&&this.run()}get dirty(){return _f(this)}}let P_=0,Ro,Co;function x_(t,e=!1){if(t.flags|=8,e){t.next=Co,Co=t;return}t.next=Ro,Ro=t}function Fh(){P_++}function Uh(){if(--P_>0)return;if(Co){let e=Co;for(Co=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ro;){let e=Ro;for(Ro=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function k_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function O_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),$h(r),ET(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function _f(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(D_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function D_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wo))return;t.globalVersion=Wo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_f(t)){t.flags&=-3;return}const n=et,r=Vn;et=t,Vn=!0;try{k_(t);const s=t.fn(t._value);(e.version===0||Qr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{et=n,Vn=r,O_(t),t.flags&=-3}}function $h(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)$h(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ET(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Vn=!0;const N_=[];function gs(){N_.push(Vn),Vn=!1}function ys(){const t=N_.pop();Vn=t===void 0?!0:t}function sm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=et;et=void 0;try{e()}finally{et=n}}}let Wo=0;class TT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!et||!Vn||et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==et)n=this.activeLink=new TT(et,this),et.deps?(n.prevDep=et.depsTail,et.depsTail.nextDep=n,et.depsTail=n):et.deps=et.depsTail=n,V_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=et.depsTail,n.nextDep=void 0,et.depsTail.nextDep=n,et.depsTail=n,et.deps===n&&(et.deps=r)}return n}trigger(e){this.version++,Wo++,this.notify(e)}notify(e){Fh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Uh()}}}function V_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)V_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vf=new WeakMap,Vs=Symbol(""),bf=Symbol(""),Ko=Symbol("");function $t(t,e,n){if(Vn&&et){let r=vf.get(t);r||vf.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Bh),s.map=r,s.key=n),s.track()}}function hr(t,e,n,r,s,i){const o=vf.get(t);if(!o){Wo++;return}const a=c=>{c&&c.trigger()};if(Fh(),e==="clear")o.forEach(a);else{const c=Te(t),u=c&&Lh(n);if(c&&n==="length"){const f=Number(r);o.forEach((d,m)=>{(m==="length"||m===Ko||!Fn(m)&&m>=f)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Ko)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Vs)),mi(t)&&a(o.get(bf)));break;case"delete":c||(a(o.get(Vs)),mi(t)&&a(o.get(bf)));break;case"set":mi(t)&&a(o.get(Vs));break}}Uh()}function ti(t){const e=Ke(t);return e===t?e:($t(e,"iterate",Ko),Rn(t)?e:e.map(Bt))}function Sc(t){return $t(t=Ke(t),"iterate",Ko),t}const IT={__proto__:null,[Symbol.iterator](){return ku(this,Symbol.iterator,Bt)},concat(...t){return ti(this).concat(...t.map(e=>Te(e)?ti(e):e))},entries(){return ku(this,"entries",t=>(t[1]=Bt(t[1]),t))},every(t,e){return lr(this,"every",t,e,void 0,arguments)},filter(t,e){return lr(this,"filter",t,e,n=>n.map(Bt),arguments)},find(t,e){return lr(this,"find",t,e,Bt,arguments)},findIndex(t,e){return lr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return lr(this,"findLast",t,e,Bt,arguments)},findLastIndex(t,e){return lr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return lr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ou(this,"includes",t)},indexOf(...t){return Ou(this,"indexOf",t)},join(t){return ti(this).join(t)},lastIndexOf(...t){return Ou(this,"lastIndexOf",t)},map(t,e){return lr(this,"map",t,e,void 0,arguments)},pop(){return fo(this,"pop")},push(...t){return fo(this,"push",t)},reduce(t,...e){return im(this,"reduce",t,e)},reduceRight(t,...e){return im(this,"reduceRight",t,e)},shift(){return fo(this,"shift")},some(t,e){return lr(this,"some",t,e,void 0,arguments)},splice(...t){return fo(this,"splice",t)},toReversed(){return ti(this).toReversed()},toSorted(t){return ti(this).toSorted(t)},toSpliced(...t){return ti(this).toSpliced(...t)},unshift(...t){return fo(this,"unshift",t)},values(){return ku(this,"values",Bt)}};function ku(t,e,n){const r=Sc(t),s=r[e]();return r!==t&&!Rn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const AT=Array.prototype;function lr(t,e,n,r,s,i){const o=Sc(t),a=o!==t&&!Rn(t),c=o[e];if(c!==AT[e]){const d=c.apply(t,i);return a?Bt(d):d}let u=n;o!==t&&(a?u=function(d,m){return n.call(this,Bt(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=c.call(o,u,r);return a&&s?s(f):f}function im(t,e,n,r){const s=Sc(t);let i=n;return s!==t&&(Rn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Bt(a),c,t)}),s[e](i,...r)}function Ou(t,e,n){const r=Ke(t);$t(r,"iterate",Ko);const s=r[e](...n);return(s===-1||s===!1)&&Hh(n[0])?(n[0]=Ke(n[0]),r[e](...n)):s}function fo(t,e,n=[]){gs(),Fh();const r=Ke(t)[e].apply(t,n);return Uh(),ys(),r}const ST=Nh("__proto__,__v_isRef,__isVue"),M_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fn));function RT(t){Fn(t)||(t=String(t));const e=Ke(this);return $t(e,"has",t),e.hasOwnProperty(t)}class L_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?LT:B_:i?$_:U_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Te(e);if(!s){let c;if(o&&(c=IT[n]))return c;if(n==="hasOwnProperty")return RT}const a=Reflect.get(e,n,Wt(e)?e:r);return(Fn(n)?M_.has(n):ST(n))||(s||$t(e,"get",n),i)?a:Wt(a)?o&&Lh(n)?a:a.value:tt(a)?s?z_(a):Bi(a):a}}class F_ extends L_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Fs(i);if(!Rn(r)&&!Fs(r)&&(i=Ke(i),r=Ke(r)),!Te(e)&&Wt(i)&&!Wt(r))return c?!1:(i.value=r,!0)}const o=Te(e)&&Lh(n)?Number(n)<e.length:Ge(e,n),a=Reflect.set(e,n,r,Wt(e)?e:s);return e===Ke(s)&&(o?Qr(r,i)&&hr(e,"set",n,r):hr(e,"add",n,r)),a}deleteProperty(e,n){const r=Ge(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&hr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Fn(n)||!M_.has(n))&&$t(e,"has",n),r}ownKeys(e){return $t(e,"iterate",Te(e)?"length":Vs),Reflect.ownKeys(e)}}class CT extends L_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const PT=new F_,xT=new CT,kT=new F_(!0);const wf=t=>t,Ya=t=>Reflect.getPrototypeOf(t);function OT(t,e,n){return function(...r){const s=this.__v_raw,i=Ke(s),o=mi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?wf:e?Ef:Bt;return!e&&$t(i,"iterate",c?bf:Vs),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:a?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function Qa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function DT(t,e){const n={get(s){const i=this.__v_raw,o=Ke(i),a=Ke(s);t||(Qr(s,a)&&$t(o,"get",s),$t(o,"get",a));const{has:c}=Ya(o),u=e?wf:t?Ef:Bt;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&$t(Ke(s),"iterate",Vs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ke(i),a=Ke(s);return t||(Qr(s,a)&&$t(o,"has",s),$t(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Ke(a),u=e?wf:t?Ef:Bt;return!t&&$t(c,"iterate",Vs),a.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return Kt(n,t?{add:Qa("add"),set:Qa("set"),delete:Qa("delete"),clear:Qa("clear")}:{add(s){!e&&!Rn(s)&&!Fs(s)&&(s=Ke(s));const i=Ke(this);return Ya(i).has.call(i,s)||(i.add(s),hr(i,"add",s,s)),this},set(s,i){!e&&!Rn(i)&&!Fs(i)&&(i=Ke(i));const o=Ke(this),{has:a,get:c}=Ya(o);let u=a.call(o,s);u||(s=Ke(s),u=a.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Qr(i,f)&&hr(o,"set",s,i):hr(o,"add",s,i),this},delete(s){const i=Ke(this),{has:o,get:a}=Ya(i);let c=o.call(i,s);c||(s=Ke(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&hr(i,"delete",s,void 0),u},clear(){const s=Ke(this),i=s.size!==0,o=s.clear();return i&&hr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=OT(s,t,e)}),n}function jh(t,e){const n=DT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ge(n,s)&&s in r?n:r,s,i)}const NT={get:jh(!1,!1)},VT={get:jh(!1,!0)},MT={get:jh(!0,!1)};const U_=new WeakMap,$_=new WeakMap,B_=new WeakMap,LT=new WeakMap;function FT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function UT(t){return t.__v_skip||!Object.isExtensible(t)?0:FT(uT(t))}function Bi(t){return Fs(t)?t:zh(t,!1,PT,NT,U_)}function j_(t){return zh(t,!1,kT,VT,$_)}function z_(t){return zh(t,!0,xT,MT,B_)}function zh(t,e,n,r,s){if(!tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=UT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function gi(t){return Fs(t)?gi(t.__v_raw):!!(t&&t.__v_isReactive)}function Fs(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function Hh(t){return t?!!t.__v_raw:!1}function Ke(t){const e=t&&t.__v_raw;return e?Ke(e):t}function $T(t){return!Ge(t,"__v_skip")&&Object.isExtensible(t)&&T_(t,"__v_skip",!0),t}const Bt=t=>tt(t)?Bi(t):t,Ef=t=>tt(t)?z_(t):t;function Wt(t){return t?t.__v_isRef===!0:!1}function _e(t){return H_(t,!1)}function BT(t){return H_(t,!0)}function H_(t,e){return Wt(t)?t:new jT(t,e)}class jT{constructor(e,n){this.dep=new Bh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ke(e),this._value=n?e:Bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Rn(e)||Fs(e);e=r?e:Ke(e),Qr(e,n)&&(this._rawValue=e,this._value=r?e:Bt(e),this.dep.trigger())}}function Ce(t){return Wt(t)?t.value:t}const zT={get:(t,e,n)=>e==="__v_raw"?t:Ce(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Wt(s)&&!Wt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function q_(t){return gi(t)?t:new Proxy(t,zT)}class HT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return x_(this,!0),!0}get value(){const e=this.dep.track();return D_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qT(t,e,n=!1){let r,s;return Oe(t)?r=t:(r=t.get,s=t.set),new HT(r,s,n)}const Xa={},Vl=new WeakMap;let Ss;function WT(t,e=!1,n=Ss){if(n){let r=Vl.get(n);r||Vl.set(n,r=[]),r.push(t)}}function KT(t,e,n=Ze){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=F=>s?F:Rn(F)||s===!1||s===0?dr(F,1):dr(F);let f,d,m,g,E=!1,C=!1;if(Wt(t)?(d=()=>t.value,E=Rn(t)):gi(t)?(d=()=>u(t),E=!0):Te(t)?(C=!0,E=t.some(F=>gi(F)||Rn(F)),d=()=>t.map(F=>{if(Wt(F))return F.value;if(gi(F))return u(F);if(Oe(F))return c?c(F,2):F()})):Oe(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){gs();try{m()}finally{ys()}}const F=Ss;Ss=f;try{return c?c(t,3,[g]):t(g)}finally{Ss=F}}:d=Xn,e&&s){const F=d,Q=s===!0?1/0:s;d=()=>dr(F(),Q)}const P=wT(),k=()=>{f.stop(),P&&P.active&&Mh(P.effects,f)};if(i&&e){const F=e;e=(...Q)=>{F(...Q),k()}}let x=C?new Array(t.length).fill(Xa):Xa;const V=F=>{if(!(!(f.flags&1)||!f.dirty&&!F))if(e){const Q=f.run();if(s||E||(C?Q.some((se,A)=>Qr(se,x[A])):Qr(Q,x))){m&&m();const se=Ss;Ss=f;try{const A=[Q,x===Xa?void 0:C&&x[0]===Xa?[]:x,g];c?c(e,3,A):e(...A),x=Q}finally{Ss=se}}}else f.run()};return a&&a(V),f=new C_(d),f.scheduler=o?()=>o(V,!1):V,g=F=>WT(F,!1,f),m=f.onStop=()=>{const F=Vl.get(f);if(F){if(c)c(F,4);else for(const Q of F)Q();Vl.delete(f)}},e?r?V(!0):x=f.run():o?o(V.bind(null,!0),!0):f.run(),k.pause=f.pause.bind(f),k.resume=f.resume.bind(f),k.stop=k,k}function dr(t,e=1/0,n){if(e<=0||!tt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Wt(t))dr(t.value,e,n);else if(Te(t))for(let r=0;r<t.length;r++)dr(t[r],e,n);else if(wc(t)||mi(t))t.forEach(r=>{dr(r,e,n)});else if(E_(t)){for(const r in t)dr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&dr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function da(t,e,n,r){try{return r?t(...r):t()}catch(s){Rc(s,e,n)}}function nr(t,e,n,r){if(Oe(t)){const s=da(t,e,n,r);return s&&b_(s)&&s.catch(i=>{Rc(i,e,n)}),s}if(Te(t)){const s=[];for(let i=0;i<t.length;i++)s.push(nr(t[i],e,n,r));return s}}function Rc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ze;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,u)===!1)return}a=a.parent}if(i){gs(),da(i,null,10,[t,c,u]),ys();return}}GT(t,n,s,r,o)}function GT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Zt=[];let qn=-1;const yi=[];let $r=null,si=0;const W_=Promise.resolve();let Ml=null;function rs(t){const e=Ml||W_;return t?e.then(this?t.bind(this):t):e}function YT(t){let e=qn+1,n=Zt.length;for(;e<n;){const r=e+n>>>1,s=Zt[r],i=Go(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function qh(t){if(!(t.flags&1)){const e=Go(t),n=Zt[Zt.length-1];!n||!(t.flags&2)&&e>=Go(n)?Zt.push(t):Zt.splice(YT(e),0,t),t.flags|=1,K_()}}function K_(){Ml||(Ml=W_.then(Y_))}function QT(t){Te(t)?yi.push(...t):$r&&t.id===-1?$r.splice(si+1,0,t):t.flags&1||(yi.push(t),t.flags|=1),K_()}function om(t,e,n=qn+1){for(;n<Zt.length;n++){const r=Zt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Zt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function G_(t){if(yi.length){const e=[...new Set(yi)].sort((n,r)=>Go(n)-Go(r));if(yi.length=0,$r){$r.push(...e);return}for($r=e,si=0;si<$r.length;si++){const n=$r[si];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$r=null,si=0}}const Go=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Y_(t){try{for(qn=0;qn<Zt.length;qn++){const e=Zt[qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),da(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qn<Zt.length;qn++){const e=Zt[qn];e&&(e.flags&=-2)}qn=-1,Zt.length=0,G_(),Ml=null,(Zt.length||yi.length)&&Y_()}}let kt=null,Q_=null;function Ll(t){const e=kt;return kt=t,Q_=t&&t.type.__scopeId||null,e}function Wh(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gm(-1);const i=Ll(e);let o;try{o=t(...s)}finally{Ll(i),r._d&&gm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function en(t,e){if(kt===null)return t;const n=kc(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Ze]=e[s];i&&(Oe(i)&&(i={mounted:i,updated:i}),i.deep&&dr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Es(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(gs(),nr(c,n,8,[t.el,a,t,e]),ys())}}const XT=Symbol("_vte"),JT=t=>t.__isTeleport;function Kh(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kh(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Gh(t,e){return Oe(t)?Kt({name:t.name},e,{setup:t}):t}function X_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fl(t,e,n,r,s=!1){if(Te(t)){t.forEach((E,C)=>Fl(E,e&&(Te(e)?e[C]:e),n,r,s));return}if(_i(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Fl(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?kc(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===Ze?a.refs={}:a.refs,d=a.setupState,m=Ke(d),g=d===Ze?()=>!1:E=>Ge(m,E);if(u!=null&&u!==c&&(vt(u)?(f[u]=null,g(u)&&(d[u]=null)):Wt(u)&&(u.value=null)),Oe(c))da(c,a,12,[o,f]);else{const E=vt(c),C=Wt(c);if(E||C){const P=()=>{if(t.f){const k=E?g(c)?d[c]:f[c]:c.value;s?Te(k)&&Mh(k,i):Te(k)?k.includes(i)||k.push(i):E?(f[c]=[i],g(c)&&(d[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else E?(f[c]=o,g(c)&&(d[c]=o)):C&&(c.value=o,t.k&&(f[t.k]=o))};o?(P.id=-1,dn(P,n)):P()}}}Ic().requestIdleCallback;Ic().cancelIdleCallback;const _i=t=>!!t.type.__asyncLoader,J_=t=>t.type.__isKeepAlive;function ZT(t,e){Z_(t,"a",e)}function eI(t,e){Z_(t,"da",e)}function Z_(t,e,n=zt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)J_(s.parent.vnode)&&tI(r,e,n,s),s=s.parent}}function tI(t,e,n,r){const s=Cc(e,t,r,!0);tv(()=>{Mh(r[e],s)},n)}function Cc(t,e,n=zt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{gs();const a=pa(n),c=nr(e,n,t,o);return a(),ys(),c});return r?s.unshift(i):s.push(i),i}}const Cr=t=>(e,n=zt)=>{(!Xo||t==="sp")&&Cc(t,(...r)=>e(...r),n)},nI=Cr("bm"),Pr=Cr("m"),rI=Cr("bu"),sI=Cr("u"),ev=Cr("bum"),tv=Cr("um"),iI=Cr("sp"),oI=Cr("rtg"),aI=Cr("rtc");function lI(t,e=zt){Cc("ec",t,e)}const cI="components";function nv(t,e){return fI(cI,t,!0,e)||t}const uI=Symbol.for("v-ndc");function fI(t,e,n=!0,r=!1){const s=kt||zt;if(s){const i=s.type;{const a=ZI(i,!1);if(a&&(a===e||a===Cn(e)||a===Tc(Cn(e))))return i}const o=am(s[t]||i[t],e)||am(s.appContext[t],e);return!o&&r?i:o}}function am(t,e){return t&&(t[e]||t[Cn(e)]||t[Tc(Cn(e))])}function tn(t,e,n,r){let s;const i=n,o=Te(t);if(o||vt(t)){const a=o&&gi(t);let c=!1;a&&(c=!Rn(t),t=Sc(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(c?Bt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(tt(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const f=a[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function hI(t,e,n={},r,s){if(kt.ce||kt.parent&&_i(kt.parent)&&kt.parent.ce)return K(),qt(Qe,null,[ze("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),K();const o=i&&rv(i(n)),a=n.key||o&&o.key,c=qt(Qe,{key:(a&&!Fn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function rv(t){return t.some(e=>Qo(e)?!(e.type===ss||e.type===Qe&&!rv(e.children)):!0)?t:null}const Tf=t=>t?Iv(t)?kc(t):Tf(t.parent):null,Po=Kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tf(t.parent),$root:t=>Tf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>iv(t),$forceUpdate:t=>t.f||(t.f=()=>{qh(t.update)}),$nextTick:t=>t.n||(t.n=rs.bind(t.proxy)),$watch:t=>DI.bind(t)}),Du=(t,e)=>t!==Ze&&!t.__isScriptSetup&&Ge(t,e),dI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Du(r,e))return o[e]=1,r[e];if(s!==Ze&&Ge(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ge(u,e))return o[e]=3,i[e];if(n!==Ze&&Ge(n,e))return o[e]=4,n[e];If&&(o[e]=0)}}const f=Po[e];let d,m;if(f)return e==="$attrs"&&$t(t.attrs,"get",""),f(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ze&&Ge(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ge(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Du(s,e)?(s[e]=n,!0):r!==Ze&&Ge(r,e)?(r[e]=n,!0):Ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ze&&Ge(t,o)||Du(e,o)||(a=i[0])&&Ge(a,o)||Ge(r,o)||Ge(Po,o)||Ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lm(t){return Te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let If=!0;function pI(t){const e=iv(t),n=t.proxy,r=t.ctx;If=!1,e.beforeCreate&&cm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:g,updated:E,activated:C,deactivated:P,beforeDestroy:k,beforeUnmount:x,destroyed:V,unmounted:F,render:Q,renderTracked:se,renderTriggered:A,errorCaptured:w,serverPrefetch:v,expose:_,inheritAttrs:T,components:S,directives:b,filters:de}=e;if(u&&mI(u,r,null),o)for(const J in o){const B=o[J];Oe(B)&&(r[J]=B.bind(n))}if(s){const J=s.call(n,n);tt(J)&&(t.data=Bi(J))}if(If=!0,i)for(const J in i){const B=i[J],ue=Oe(B)?B.bind(n,n):Oe(B.get)?B.get.bind(n,n):Xn,pe=!Oe(B)&&Oe(B.set)?B.set.bind(n):Xn,Ve=at({get:ue,set:pe});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Ie=>Ve.value=Ie})}if(a)for(const J in a)sv(a[J],r,n,J);if(c){const J=Oe(c)?c.call(n):c;Reflect.ownKeys(J).forEach(B=>{xo(B,J[B])})}f&&cm(f,t,"c");function W(J,B){Te(B)?B.forEach(ue=>J(ue.bind(n))):B&&J(B.bind(n))}if(W(nI,d),W(Pr,m),W(rI,g),W(sI,E),W(ZT,C),W(eI,P),W(lI,w),W(aI,se),W(oI,A),W(ev,x),W(tv,F),W(iI,v),Te(_))if(_.length){const J=t.exposed||(t.exposed={});_.forEach(B=>{Object.defineProperty(J,B,{get:()=>n[B],set:ue=>n[B]=ue})})}else t.exposed||(t.exposed={});Q&&t.render===Xn&&(t.render=Q),T!=null&&(t.inheritAttrs=T),S&&(t.components=S),b&&(t.directives=b),v&&X_(t)}function mI(t,e,n=Xn){Te(t)&&(t=Af(t));for(const r in t){const s=t[r];let i;tt(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),Wt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function cm(t,e,n){nr(Te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sv(t,e,n,r){let s=r.includes(".")?vv(n,r):()=>n[r];if(vt(t)){const i=e[t];Oe(i)&&Mn(s,i)}else if(Oe(t))Mn(s,t.bind(n));else if(tt(t))if(Te(t))t.forEach(i=>sv(i,e,n,r));else{const i=Oe(t.handler)?t.handler.bind(n):e[t.handler];Oe(i)&&Mn(s,i,t)}}function iv(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ul(c,u,o,!0)),Ul(c,e,o)),tt(e)&&i.set(e,c),c}function Ul(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ul(t,i,n,!0),s&&s.forEach(o=>Ul(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=gI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gI={data:um,props:fm,emits:fm,methods:yo,computed:yo,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:yo,directives:yo,watch:_I,provide:um,inject:yI};function um(t,e){return e?t?function(){return Kt(Oe(t)?t.call(this,this):t,Oe(e)?e.call(this,this):e)}:e:t}function yI(t,e){return yo(Af(t),Af(e))}function Af(t){if(Te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function yo(t,e){return t?Kt(Object.create(null),t,e):e}function fm(t,e){return t?Te(t)&&Te(e)?[...new Set([...t,...e])]:Kt(Object.create(null),lm(t),lm(e??{})):e}function _I(t,e){if(!t)return e;if(!e)return t;const n=Kt(Object.create(null),t);for(const r in e)n[r]=Xt(t[r],e[r]);return n}function ov(){return{app:null,config:{isNativeTag:lT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vI=0;function bI(t,e){return function(r,s=null){Oe(r)||(r=Kt({},r)),s!=null&&!tt(s)&&(s=null);const i=ov(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:vI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:t1,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&Oe(f.install)?(o.add(f),f.install(u,...d)):Oe(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!c){const g=u._ceVNode||ze(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,f,m),c=!0,u._container=f,f.__vue_app__=u,kc(g.component)}},onUnmount(f){a.push(f)},unmount(){c&&(nr(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=vi;vi=u;try{return f()}finally{vi=d}}};return u}}let vi=null;function xo(t,e){if(zt){let n=zt.provides;const r=zt.parent&&zt.parent.provides;r===n&&(n=zt.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=zt||kt;if(r||vi){const s=vi?vi._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Oe(e)?e.call(r&&r.proxy):e}}const av={},lv=()=>Object.create(av),cv=t=>Object.getPrototypeOf(t)===av;function wI(t,e,n,r=!1){const s={},i=lv();t.propsDefaults=Object.create(null),uv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:j_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function EI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(Pc(t.emitsOptions,m))continue;const g=e[m];if(c)if(Ge(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const E=Cn(m);s[E]=Sf(c,a,E,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{uv(t,e,s,i)&&(u=!0);let f;for(const d in a)(!e||!Ge(e,d)&&((f=ms(d))===d||!Ge(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Sf(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ge(e,d))&&(delete i[d],u=!0)}u&&hr(t.attrs,"set","")}function uv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(So(c))continue;const u=e[c];let f;s&&Ge(s,f=Cn(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Pc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ke(n),u=a||Ze;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Sf(s,c,d,u[d],t,!Ge(u,d))}}return o}function Sf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ge(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=pa(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ms(n))&&(r=!0))}return r}const TI=new WeakMap;function fv(t,e,n=!1){const r=n?TI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Oe(t)){const f=d=>{c=!0;const[m,g]=fv(d,e,!0);Kt(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return tt(t)&&r.set(t,pi),pi;if(Te(i))for(let f=0;f<i.length;f++){const d=Cn(i[f]);hm(d)&&(o[d]=Ze)}else if(i)for(const f in i){const d=Cn(f);if(hm(d)){const m=i[f],g=o[d]=Te(m)||Oe(m)?{type:m}:Kt({},m),E=g.type;let C=!1,P=!0;if(Te(E))for(let k=0;k<E.length;++k){const x=E[k],V=Oe(x)&&x.name;if(V==="Boolean"){C=!0;break}else V==="String"&&(P=!1)}else C=Oe(E)&&E.name==="Boolean";g[0]=C,g[1]=P,(C||Ge(g,"default"))&&a.push(d)}}const u=[o,a];return tt(t)&&r.set(t,u),u}function hm(t){return t[0]!=="$"&&!So(t)}const hv=t=>t[0]==="_"||t==="$stable",Yh=t=>Te(t)?t.map(Kn):[Kn(t)],II=(t,e,n)=>{if(e._n)return e;const r=Wh((...s)=>Yh(e(...s)),n);return r._c=!1,r},dv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hv(s))continue;const i=t[s];if(Oe(i))e[s]=II(s,i,r);else if(i!=null){const o=Yh(i);e[s]=()=>o}}},pv=(t,e)=>{const n=Yh(e);t.slots.default=()=>n},mv=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},AI=(t,e,n)=>{const r=t.slots=lv();if(t.vnode.shapeFlag&32){const s=e._;s?(mv(r,e,n),n&&T_(r,"_",s,!0)):dv(e,r)}else e&&pv(t,e)},SI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ze;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:mv(s,e,n):(i=!e.$stable,dv(e,s)),o=e}else e&&(pv(t,e),o={default:1});if(i)for(const a in s)!hv(a)&&o[a]==null&&delete s[a]},dn=$I;function RI(t){return CI(t)}function CI(t,e){const n=Ic();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:g=Xn,insertStaticContent:E}=t,C=(I,R,O,$=null,q=null,j=null,ie=void 0,ne=null,X=!!R.dynamicChildren)=>{if(I===R)return;I&&!ho(I,R)&&($=U(I),Ie(I,q,j,!0),I=null),R.patchFlag===-2&&(X=!1,R.dynamicChildren=null);const{type:G,ref:ve,shapeFlag:ae}=R;switch(G){case xc:P(I,R,O,$);break;case ss:k(I,R,O,$);break;case hl:I==null&&x(R,O,$,ie);break;case Qe:S(I,R,O,$,q,j,ie,ne,X);break;default:ae&1?Q(I,R,O,$,q,j,ie,ne,X):ae&6?b(I,R,O,$,q,j,ie,ne,X):(ae&64||ae&128)&&G.process(I,R,O,$,q,j,ie,ne,X,he)}ve!=null&&q&&Fl(ve,I&&I.ref,j,R||I,!R)},P=(I,R,O,$)=>{if(I==null)r(R.el=a(R.children),O,$);else{const q=R.el=I.el;R.children!==I.children&&u(q,R.children)}},k=(I,R,O,$)=>{I==null?r(R.el=c(R.children||""),O,$):R.el=I.el},x=(I,R,O,$)=>{[I.el,I.anchor]=E(I.children,R,O,$,I.el,I.anchor)},V=({el:I,anchor:R},O,$)=>{let q;for(;I&&I!==R;)q=m(I),r(I,O,$),I=q;r(R,O,$)},F=({el:I,anchor:R})=>{let O;for(;I&&I!==R;)O=m(I),s(I),I=O;s(R)},Q=(I,R,O,$,q,j,ie,ne,X)=>{R.type==="svg"?ie="svg":R.type==="math"&&(ie="mathml"),I==null?se(R,O,$,q,j,ie,ne,X):v(I,R,q,j,ie,ne,X)},se=(I,R,O,$,q,j,ie,ne)=>{let X,G;const{props:ve,shapeFlag:ae,transition:ge,dirs:Ae}=I;if(X=I.el=o(I.type,j,ve&&ve.is,ve),ae&8?f(X,I.children):ae&16&&w(I.children,X,null,$,q,Nu(I,j),ie,ne),Ae&&Es(I,null,$,"created"),A(X,I,I.scopeId,ie,$),ve){for(const De in ve)De!=="value"&&!So(De)&&i(X,De,null,ve[De],j,$);"value"in ve&&i(X,"value",null,ve.value,j),(G=ve.onVnodeBeforeMount)&&zn(G,$,I)}Ae&&Es(I,null,$,"beforeMount");const be=PI(q,ge);be&&ge.beforeEnter(X),r(X,R,O),((G=ve&&ve.onVnodeMounted)||be||Ae)&&dn(()=>{G&&zn(G,$,I),be&&ge.enter(X),Ae&&Es(I,null,$,"mounted")},q)},A=(I,R,O,$,q)=>{if(O&&g(I,O),$)for(let j=0;j<$.length;j++)g(I,$[j]);if(q){let j=q.subTree;if(R===j||wv(j.type)&&(j.ssContent===R||j.ssFallback===R)){const ie=q.vnode;A(I,ie,ie.scopeId,ie.slotScopeIds,q.parent)}}},w=(I,R,O,$,q,j,ie,ne,X=0)=>{for(let G=X;G<I.length;G++){const ve=I[G]=ne?Br(I[G]):Kn(I[G]);C(null,ve,R,O,$,q,j,ie,ne)}},v=(I,R,O,$,q,j,ie)=>{const ne=R.el=I.el;let{patchFlag:X,dynamicChildren:G,dirs:ve}=R;X|=I.patchFlag&16;const ae=I.props||Ze,ge=R.props||Ze;let Ae;if(O&&Ts(O,!1),(Ae=ge.onVnodeBeforeUpdate)&&zn(Ae,O,R,I),ve&&Es(R,I,O,"beforeUpdate"),O&&Ts(O,!0),(ae.innerHTML&&ge.innerHTML==null||ae.textContent&&ge.textContent==null)&&f(ne,""),G?_(I.dynamicChildren,G,ne,O,$,Nu(R,q),j):ie||B(I,R,ne,null,O,$,Nu(R,q),j,!1),X>0){if(X&16)T(ne,ae,ge,O,q);else if(X&2&&ae.class!==ge.class&&i(ne,"class",null,ge.class,q),X&4&&i(ne,"style",ae.style,ge.style,q),X&8){const be=R.dynamicProps;for(let De=0;De<be.length;De++){const Be=be[De],Dt=ae[Be],It=ge[Be];(It!==Dt||Be==="value")&&i(ne,Be,Dt,It,q,O)}}X&1&&I.children!==R.children&&f(ne,R.children)}else!ie&&G==null&&T(ne,ae,ge,O,q);((Ae=ge.onVnodeUpdated)||ve)&&dn(()=>{Ae&&zn(Ae,O,R,I),ve&&Es(R,I,O,"updated")},$)},_=(I,R,O,$,q,j,ie)=>{for(let ne=0;ne<R.length;ne++){const X=I[ne],G=R[ne],ve=X.el&&(X.type===Qe||!ho(X,G)||X.shapeFlag&70)?d(X.el):O;C(X,G,ve,null,$,q,j,ie,!0)}},T=(I,R,O,$,q)=>{if(R!==O){if(R!==Ze)for(const j in R)!So(j)&&!(j in O)&&i(I,j,R[j],null,q,$);for(const j in O){if(So(j))continue;const ie=O[j],ne=R[j];ie!==ne&&j!=="value"&&i(I,j,ne,ie,q,$)}"value"in O&&i(I,"value",R.value,O.value,q)}},S=(I,R,O,$,q,j,ie,ne,X)=>{const G=R.el=I?I.el:a(""),ve=R.anchor=I?I.anchor:a("");let{patchFlag:ae,dynamicChildren:ge,slotScopeIds:Ae}=R;Ae&&(ne=ne?ne.concat(Ae):Ae),I==null?(r(G,O,$),r(ve,O,$),w(R.children||[],O,ve,q,j,ie,ne,X)):ae>0&&ae&64&&ge&&I.dynamicChildren?(_(I.dynamicChildren,ge,O,q,j,ie,ne),(R.key!=null||q&&R===q.subTree)&&gv(I,R,!0)):B(I,R,O,ve,q,j,ie,ne,X)},b=(I,R,O,$,q,j,ie,ne,X)=>{R.slotScopeIds=ne,I==null?R.shapeFlag&512?q.ctx.activate(R,O,$,ie,X):de(R,O,$,q,j,ie,X):te(I,R,X)},de=(I,R,O,$,q,j,ie)=>{const ne=I.component=GI(I,$,q);if(J_(I)&&(ne.ctx.renderer=he),YI(ne,!1,ie),ne.asyncDep){if(q&&q.registerDep(ne,W,ie),!I.el){const X=ne.subTree=ze(ss);k(null,X,R,O)}}else W(ne,I,R,O,q,j,ie)},te=(I,R,O)=>{const $=R.component=I.component;if(FI(I,R,O))if($.asyncDep&&!$.asyncResolved){J($,R,O);return}else $.next=R,$.update();else R.el=I.el,$.vnode=R},W=(I,R,O,$,q,j,ie)=>{const ne=()=>{if(I.isMounted){let{next:ae,bu:ge,u:Ae,parent:be,vnode:De}=I;{const Nt=yv(I);if(Nt){ae&&(ae.el=De.el,J(I,ae,ie)),Nt.asyncDep.then(()=>{I.isUnmounted||ne()});return}}let Be=ae,Dt;Ts(I,!1),ae?(ae.el=De.el,J(I,ae,ie)):ae=De,ge&&fl(ge),(Dt=ae.props&&ae.props.onVnodeBeforeUpdate)&&zn(Dt,be,ae,De),Ts(I,!0);const It=pm(I),wn=I.subTree;I.subTree=It,C(wn,It,d(wn.el),U(wn),I,q,j),ae.el=It.el,Be===null&&UI(I,It.el),Ae&&dn(Ae,q),(Dt=ae.props&&ae.props.onVnodeUpdated)&&dn(()=>zn(Dt,be,ae,De),q)}else{let ae;const{el:ge,props:Ae}=R,{bm:be,m:De,parent:Be,root:Dt,type:It}=I,wn=_i(R);Ts(I,!1),be&&fl(be),!wn&&(ae=Ae&&Ae.onVnodeBeforeMount)&&zn(ae,Be,R),Ts(I,!0);{Dt.ce&&Dt.ce._injectChildStyle(It);const Nt=I.subTree=pm(I);C(null,Nt,O,$,I,q,j),R.el=Nt.el}if(De&&dn(De,q),!wn&&(ae=Ae&&Ae.onVnodeMounted)){const Nt=R;dn(()=>zn(ae,Be,Nt),q)}(R.shapeFlag&256||Be&&_i(Be.vnode)&&Be.vnode.shapeFlag&256)&&I.a&&dn(I.a,q),I.isMounted=!0,R=O=$=null}};I.scope.on();const X=I.effect=new C_(ne);I.scope.off();const G=I.update=X.run.bind(X),ve=I.job=X.runIfDirty.bind(X);ve.i=I,ve.id=I.uid,X.scheduler=()=>qh(ve),Ts(I,!0),G()},J=(I,R,O)=>{R.component=I;const $=I.vnode.props;I.vnode=R,I.next=null,EI(I,R.props,$,O),SI(I,R.children,O),gs(),om(I),ys()},B=(I,R,O,$,q,j,ie,ne,X=!1)=>{const G=I&&I.children,ve=I?I.shapeFlag:0,ae=R.children,{patchFlag:ge,shapeFlag:Ae}=R;if(ge>0){if(ge&128){pe(G,ae,O,$,q,j,ie,ne,X);return}else if(ge&256){ue(G,ae,O,$,q,j,ie,ne,X);return}}Ae&8?(ve&16&&nn(G,q,j),ae!==G&&f(O,ae)):ve&16?Ae&16?pe(G,ae,O,$,q,j,ie,ne,X):nn(G,q,j,!0):(ve&8&&f(O,""),Ae&16&&w(ae,O,$,q,j,ie,ne,X))},ue=(I,R,O,$,q,j,ie,ne,X)=>{I=I||pi,R=R||pi;const G=I.length,ve=R.length,ae=Math.min(G,ve);let ge;for(ge=0;ge<ae;ge++){const Ae=R[ge]=X?Br(R[ge]):Kn(R[ge]);C(I[ge],Ae,O,null,q,j,ie,ne,X)}G>ve?nn(I,q,j,!0,!1,ae):w(R,O,$,q,j,ie,ne,X,ae)},pe=(I,R,O,$,q,j,ie,ne,X)=>{let G=0;const ve=R.length;let ae=I.length-1,ge=ve-1;for(;G<=ae&&G<=ge;){const Ae=I[G],be=R[G]=X?Br(R[G]):Kn(R[G]);if(ho(Ae,be))C(Ae,be,O,null,q,j,ie,ne,X);else break;G++}for(;G<=ae&&G<=ge;){const Ae=I[ae],be=R[ge]=X?Br(R[ge]):Kn(R[ge]);if(ho(Ae,be))C(Ae,be,O,null,q,j,ie,ne,X);else break;ae--,ge--}if(G>ae){if(G<=ge){const Ae=ge+1,be=Ae<ve?R[Ae].el:$;for(;G<=ge;)C(null,R[G]=X?Br(R[G]):Kn(R[G]),O,be,q,j,ie,ne,X),G++}}else if(G>ge)for(;G<=ae;)Ie(I[G],q,j,!0),G++;else{const Ae=G,be=G,De=new Map;for(G=be;G<=ge;G++){const At=R[G]=X?Br(R[G]):Kn(R[G]);At.key!=null&&De.set(At.key,G)}let Be,Dt=0;const It=ge-be+1;let wn=!1,Nt=0;const Dr=new Array(It);for(G=0;G<It;G++)Dr[G]=0;for(G=Ae;G<=ae;G++){const At=I[G];if(Dt>=It){Ie(At,q,j,!0);continue}let En;if(At.key!=null)En=De.get(At.key);else for(Be=be;Be<=ge;Be++)if(Dr[Be-be]===0&&ho(At,R[Be])){En=Be;break}En===void 0?Ie(At,q,j,!0):(Dr[En-be]=G+1,En>=Nt?Nt=En:wn=!0,C(At,R[En],O,null,q,j,ie,ne,X),Dt++)}const Ji=wn?xI(Dr):pi;for(Be=Ji.length-1,G=It-1;G>=0;G--){const At=be+G,En=R[At],Da=At+1<ve?R[At+1].el:$;Dr[G]===0?C(null,En,O,Da,q,j,ie,ne,X):wn&&(Be<0||G!==Ji[Be]?Ve(En,O,Da,2):Be--)}}},Ve=(I,R,O,$,q=null)=>{const{el:j,type:ie,transition:ne,children:X,shapeFlag:G}=I;if(G&6){Ve(I.component.subTree,R,O,$);return}if(G&128){I.suspense.move(R,O,$);return}if(G&64){ie.move(I,R,O,he);return}if(ie===Qe){r(j,R,O);for(let ae=0;ae<X.length;ae++)Ve(X[ae],R,O,$);r(I.anchor,R,O);return}if(ie===hl){V(I,R,O);return}if($!==2&&G&1&&ne)if($===0)ne.beforeEnter(j),r(j,R,O),dn(()=>ne.enter(j),q);else{const{leave:ae,delayLeave:ge,afterLeave:Ae}=ne,be=()=>r(j,R,O),De=()=>{ae(j,()=>{be(),Ae&&Ae()})};ge?ge(j,be,De):De()}else r(j,R,O)},Ie=(I,R,O,$=!1,q=!1)=>{const{type:j,props:ie,ref:ne,children:X,dynamicChildren:G,shapeFlag:ve,patchFlag:ae,dirs:ge,cacheIndex:Ae}=I;if(ae===-2&&(q=!1),ne!=null&&Fl(ne,null,O,I,!0),Ae!=null&&(R.renderCache[Ae]=void 0),ve&256){R.ctx.deactivate(I);return}const be=ve&1&&ge,De=!_i(I);let Be;if(De&&(Be=ie&&ie.onVnodeBeforeUnmount)&&zn(Be,R,I),ve&6)jn(I.component,O,$);else{if(ve&128){I.suspense.unmount(O,$);return}be&&Es(I,null,R,"beforeUnmount"),ve&64?I.type.remove(I,R,O,he,$):G&&!G.hasOnce&&(j!==Qe||ae>0&&ae&64)?nn(G,R,O,!1,!0):(j===Qe&&ae&384||!q&&ve&16)&&nn(X,R,O),$&&nt(I)}(De&&(Be=ie&&ie.onVnodeUnmounted)||be)&&dn(()=>{Be&&zn(Be,R,I),be&&Es(I,null,R,"unmounted")},O)},nt=I=>{const{type:R,el:O,anchor:$,transition:q}=I;if(R===Qe){bn(O,$);return}if(R===hl){F(I);return}const j=()=>{s(O),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(I.shapeFlag&1&&q&&!q.persisted){const{leave:ie,delayLeave:ne}=q,X=()=>ie(O,j);ne?ne(I.el,j,X):X()}else j()},bn=(I,R)=>{let O;for(;I!==R;)O=m(I),s(I),I=O;s(R)},jn=(I,R,O)=>{const{bum:$,scope:q,job:j,subTree:ie,um:ne,m:X,a:G}=I;dm(X),dm(G),$&&fl($),q.stop(),j&&(j.flags|=8,Ie(ie,I,R,O)),ne&&dn(ne,R),dn(()=>{I.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},nn=(I,R,O,$=!1,q=!1,j=0)=>{for(let ie=j;ie<I.length;ie++)Ie(I[ie],R,O,$,q)},U=I=>{if(I.shapeFlag&6)return U(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const R=m(I.anchor||I.el),O=R&&R[XT];return O?m(O):R};let le=!1;const oe=(I,R,O)=>{I==null?R._vnode&&Ie(R._vnode,null,null,!0):C(R._vnode||null,I,R,null,null,null,O),R._vnode=I,le||(le=!0,om(),G_(),le=!1)},he={p:C,um:Ie,m:Ve,r:nt,mt:de,mc:w,pc:B,pbc:_,n:U,o:t};return{render:oe,hydrate:void 0,createApp:bI(oe)}}function Nu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ts({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function PI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gv(t,e,n=!1){const r=t.children,s=e.children;if(Te(r)&&Te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Br(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&gv(o,a)),a.type===xc&&(a.el=o.el)}}function xI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function yv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yv(e)}function dm(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const kI=Symbol.for("v-scx"),OI=()=>ln(kI);function Mn(t,e,n){return _v(t,e,n)}function _v(t,e,n=Ze){const{immediate:r,deep:s,flush:i,once:o}=n,a=Kt({},n),c=e&&r||!e&&i!=="post";let u;if(Xo){if(i==="sync"){const g=OI();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Xn,g.resume=Xn,g.pause=Xn,g}}const f=zt;a.call=(g,E,C)=>nr(g,f,E,C);let d=!1;i==="post"?a.scheduler=g=>{dn(g,f&&f.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,E)=>{E?g():qh(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const m=KT(t,e,a);return Xo&&(u?u.push(m):c&&m()),m}function DI(t,e,n){const r=this.proxy,s=vt(t)?t.includes(".")?vv(r,t):()=>r[t]:t.bind(r,r);let i;Oe(e)?i=e:(i=e.handler,n=e);const o=pa(this),a=_v(s,i.bind(r),n);return o(),a}function vv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const NI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Cn(e)}Modifiers`]||t[`${ms(e)}Modifiers`];function VI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ze;let s=n;const i=e.startsWith("update:"),o=i&&NI(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>vt(f)?f.trim():f)),o.number&&(s=n.map(yf)));let a,c=r[a=Cu(e)]||r[a=Cu(Cn(e))];!c&&i&&(c=r[a=Cu(ms(e))]),c&&nr(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nr(u,t,6,s)}}function bv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Oe(t)){const c=u=>{const f=bv(u,e,!0);f&&(a=!0,Kt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(tt(t)&&r.set(t,null),null):(Te(i)?i.forEach(c=>o[c]=null):Kt(o,i),tt(t)&&r.set(t,o),o)}function Pc(t,e){return!t||!bc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(t,e[0].toLowerCase()+e.slice(1))||Ge(t,ms(e))||Ge(t,e))}function pm(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:f,props:d,data:m,setupState:g,ctx:E,inheritAttrs:C}=t,P=Ll(t);let k,x;try{if(n.shapeFlag&4){const F=s||r,Q=F;k=Kn(u.call(Q,F,f,d,g,m,E)),x=a}else{const F=e;k=Kn(F.length>1?F(d,{attrs:a,slots:o,emit:c}):F(d,null)),x=e.props?a:MI(a)}}catch(F){ko.length=0,Rc(F,t,1),k=ze(ss)}let V=k;if(x&&C!==!1){const F=Object.keys(x),{shapeFlag:Q}=V;F.length&&Q&7&&(i&&F.some(Vh)&&(x=LI(x,i)),V=Ri(V,x,!1,!0))}return n.dirs&&(V=Ri(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&Kh(V,n.transition),k=V,Ll(P),k}const MI=t=>{let e;for(const n in t)(n==="class"||n==="style"||bc(n))&&((e||(e={}))[n]=t[n]);return e},LI=(t,e)=>{const n={};for(const r in t)(!Vh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function FI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?mm(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==r[m]&&!Pc(u,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mm(r,o,u):!0:!!o;return!1}function mm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Pc(n,i))return!0}return!1}function UI({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const wv=t=>t.__isSuspense;function $I(t,e){e&&e.pendingBranch?Te(t)?e.effects.push(...t):e.effects.push(t):QT(t)}const Qe=Symbol.for("v-fgt"),xc=Symbol.for("v-txt"),ss=Symbol.for("v-cmt"),hl=Symbol.for("v-stc"),ko=[];let yn=null;function K(t=!1){ko.push(yn=t?null:[])}function BI(){ko.pop(),yn=ko[ko.length-1]||null}let Yo=1;function gm(t,e=!1){Yo+=t,t<0&&yn&&e&&(yn.hasOnce=!0)}function Ev(t){return t.dynamicChildren=Yo>0?yn||pi:null,BI(),Yo>0&&yn&&yn.push(t),t}function ee(t,e,n,r,s,i){return Ev(D(t,e,n,r,s,i,!0))}function qt(t,e,n,r,s){return Ev(ze(t,e,n,r,s,!0))}function Qo(t){return t?t.__v_isVNode===!0:!1}function ho(t,e){return t.type===e.type&&t.key===e.key}const Tv=({key:t})=>t??null,dl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?vt(t)||Wt(t)||Oe(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tv(e),ref:e&&dl(e),scopeId:Q_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return a?(Qh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=vt(n)?8:16),Yo>0&&!o&&yn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yn.push(c),c}const ze=jI;function jI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===uI)&&(t=ss),Qo(t)){const a=Ri(t,e,!0);return n&&Qh(a,n),Yo>0&&!i&&yn&&(a.shapeFlag&6?yn[yn.indexOf(t)]=a:yn.push(a)),a.patchFlag=-2,a}if(e1(t)&&(t=t.__vccOpts),e){e=zI(e);let{class:a,style:c}=e;a&&!vt(a)&&(e.class=gn(a)),tt(c)&&(Hh(c)&&!Te(c)&&(c=Kt({},c)),e.style=ha(c))}const o=vt(t)?1:wv(t)?128:JT(t)?64:tt(t)?4:Oe(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function zI(t){return t?Hh(t)||cv(t)?Kt({},t):t:null}function Ri(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?qI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Tv(u),ref:e&&e.ref?n&&i?Te(i)?i.concat(dl(e)):[i,dl(e)]:dl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ri(t.ssContent),ssFallback:t.ssFallback&&Ri(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Kh(f,c.clone(f)),f}function In(t=" ",e=0){return ze(xc,null,t,e)}function HI(t,e){const n=ze(hl,null,t);return n.staticCount=e,n}function yt(t="",e=!1){return e?(K(),qt(ss,null,t)):ze(ss,null,t)}function Kn(t){return t==null||typeof t=="boolean"?ze(ss):Te(t)?ze(Qe,null,t.slice()):Qo(t)?Br(t):ze(xc,null,String(t))}function Br(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ri(t)}function Qh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Qh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!cv(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[In(e)]):n=8);t.children=e,t.shapeFlag|=n}function qI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gn([e.class,r.class]));else if(s==="style")e.style=ha([e.style,r.style]);else if(bc(s)){const i=e[s],o=r[s];o&&i!==o&&!(Te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zn(t,e,n,r=null){nr(t,e,7,[n,r])}const WI=ov();let KI=0;function GI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||WI,i={uid:KI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fv(r,s),emitsOptions:bv(r,s),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:r.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=VI.bind(null,i),t.ce&&t.ce(i),i}let zt=null,$l,Rf;{const t=Ic(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};$l=e("__VUE_INSTANCE_SETTERS__",n=>zt=n),Rf=e("__VUE_SSR_SETTERS__",n=>Xo=n)}const pa=t=>{const e=zt;return $l(t),t.scope.on(),()=>{t.scope.off(),$l(e)}},ym=()=>{zt&&zt.scope.off(),$l(null)};function Iv(t){return t.vnode.shapeFlag&4}let Xo=!1;function YI(t,e=!1,n=!1){e&&Rf(e);const{props:r,children:s}=t.vnode,i=Iv(t);wI(t,r,i,e),AI(t,s,n);const o=i?QI(t,e):void 0;return e&&Rf(!1),o}function QI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dI);const{setup:r}=n;if(r){gs();const s=t.setupContext=r.length>1?JI(t):null,i=pa(t),o=da(r,t,0,[t.props,s]),a=b_(o);if(ys(),i(),(a||t.sp)&&!_i(t)&&X_(t),a){if(o.then(ym,ym),e)return o.then(c=>{_m(t,c)}).catch(c=>{Rc(c,t,0)});t.asyncDep=o}else _m(t,o)}else Av(t)}function _m(t,e,n){Oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:tt(e)&&(t.setupState=q_(e)),Av(t)}function Av(t,e,n){const r=t.type;t.render||(t.render=r.render||Xn);{const s=pa(t);gs();try{pI(t)}finally{ys(),s()}}}const XI={get(t,e){return $t(t,"get",""),t[e]}};function JI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,XI),slots:t.slots,emit:t.emit,expose:e}}function kc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(q_($T(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Po)return Po[n](t)},has(e,n){return n in e||n in Po}})):t.proxy}function ZI(t,e=!0){return Oe(t)?t.displayName||t.name:t.name||e&&t.__name}function e1(t){return Oe(t)&&"__vccOpts"in t}const at=(t,e)=>qT(t,e,Xo);function Xh(t,e,n){const r=arguments.length;return r===2?tt(e)&&!Te(e)?Qo(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qo(n)&&(n=[n]),ze(t,e,n))}const t1="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cf;const vm=typeof window<"u"&&window.trustedTypes;if(vm)try{Cf=vm.createPolicy("vue",{createHTML:t=>t})}catch{}const Sv=Cf?t=>Cf.createHTML(t):t=>t,n1="http://www.w3.org/2000/svg",r1="http://www.w3.org/1998/Math/MathML",ur=typeof document<"u"?document:null,bm=ur&&ur.createElement("template"),s1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ur.createElementNS(n1,t):e==="mathml"?ur.createElementNS(r1,t):n?ur.createElement(t,{is:n}):ur.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ur.createTextNode(t),createComment:t=>ur.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ur.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bm.innerHTML=Sv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=bm.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},i1=Symbol("_vtc");function o1(t,e,n){const r=t[i1];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bl=Symbol("_vod"),Rv=Symbol("_vsh"),a1={beforeMount(t,{value:e},{transition:n}){t[Bl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):po(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),po(t,!0),r.enter(t)):r.leave(t,()=>{po(t,!1)}):po(t,e))},beforeUnmount(t,{value:e}){po(t,e)}};function po(t,e){t.style.display=e?t[Bl]:"none",t[Rv]=!e}const l1=Symbol(""),c1=/(^|;)\s*display\s*:/;function u1(t,e,n){const r=t.style,s=vt(n);let i=!1;if(n&&!s){if(e)if(vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&pl(r,a,"")}else for(const o in e)n[o]==null&&pl(r,o,"");for(const o in n)o==="display"&&(i=!0),pl(r,o,n[o])}else if(s){if(e!==n){const o=r[l1];o&&(n+=";"+o),r.cssText=n,i=c1.test(n)}}else e&&t.removeAttribute("style");Bl in t&&(t[Bl]=i?r.display:"",t[Rv]&&(r.display="none"))}const wm=/\s*!important$/;function pl(t,e,n){if(Te(n))n.forEach(r=>pl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=f1(t,e);wm.test(n)?t.setProperty(ms(r),n.replace(wm,""),"important"):t[r]=n}}const Em=["Webkit","Moz","ms"],Vu={};function f1(t,e){const n=Vu[e];if(n)return n;let r=Cn(e);if(r!=="filter"&&r in t)return Vu[e]=r;r=Tc(r);for(let s=0;s<Em.length;s++){const i=Em[s]+r;if(i in t)return Vu[e]=i}return e}const Tm="http://www.w3.org/1999/xlink";function Im(t,e,n,r,s,i=_T(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tm,e.slice(6,e.length)):t.setAttributeNS(Tm,e,n):n==null||i&&!I_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Fn(n)?String(n):n)}function Am(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Sv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=I_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ps(t,e,n,r){t.addEventListener(e,n,r)}function h1(t,e,n,r){t.removeEventListener(e,n,r)}const Sm=Symbol("_vei");function d1(t,e,n,r,s=null){const i=t[Sm]||(t[Sm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=p1(e);if(r){const u=i[e]=y1(r,s);Ps(t,a,u,c)}else o&&(h1(t,a,o,c),i[e]=void 0)}}const Rm=/(?:Once|Passive|Capture)$/;function p1(t){let e;if(Rm.test(t)){e={};let r;for(;r=t.match(Rm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ms(t.slice(2)),e]}let Mu=0;const m1=Promise.resolve(),g1=()=>Mu||(m1.then(()=>Mu=0),Mu=Date.now());function y1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nr(_1(r,n.value),e,5,[r])};return n.value=t,n.attached=g1(),n}function _1(t,e){if(Te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Cm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,v1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?o1(t,r,o):e==="style"?u1(t,n,r):bc(e)?Vh(e)||d1(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):b1(t,e,r,o))?(Am(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Im(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!vt(r))?Am(t,Cn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Im(t,e,r,o))};function b1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cm(e)&&Oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cm(e)&&vt(n)?!1:e in t}const jl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Te(e)?n=>fl(e,n):e};function w1(t){t.target.composing=!0}function Pm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bi=Symbol("_assign"),Gn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bi]=jl(s);const i=r||s.props&&s.props.type==="number";Ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=yf(a)),t[bi](a)}),n&&Ps(t,"change",()=>{t.value=t.value.trim()}),e||(Ps(t,"compositionstart",w1),Ps(t,"compositionend",Pm),Ps(t,"change",Pm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[bi]=jl(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?yf(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Ja={deep:!0,created(t,e,n){t[bi]=jl(n),Ps(t,"change",()=>{const r=t._modelValue,s=E1(t),i=t.checked,o=t[bi];if(Te(r)){const a=A_(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(a,1),o(u)}}else if(wc(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Cv(t,i))})},mounted:xm,beforeUpdate(t,e,n){t[bi]=jl(n),xm(t,e,n)}};function xm(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(Te(e))s=A_(e,r.props.value)>-1;else if(wc(e))s=e.has(r.props.value);else{if(e===n)return;s=Ac(e,Cv(t,!0))}t.checked!==s&&(t.checked=s)}function E1(t){return"_value"in t?t._value:t.value}function Cv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const T1=["ctrl","shift","alt","meta"],I1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>T1.some(n=>t[`${n}Key`]&&!e.includes(n))},fr=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=I1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},A1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fi=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=ms(s.key);if(e.some(o=>o===i||A1[o]===i))return t(s)})},S1=Kt({patchProp:v1},s1);let km;function R1(){return km||(km=RI(S1))}const C1=(...t)=>{const e=R1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=x1(r);if(!s)return;const i=e._component;!Oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,P1(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function P1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function x1(t){return vt(t)?document.querySelector(t):t}const k1=()=>{};var Om={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},O1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,d=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[f],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):O1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new D1;const m=i<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const E=u<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class D1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N1=function(t){const e=Pv(t);return xv.encodeByteArray(e,!0)},zl=function(t){return N1(t).replace(/\./g,"")},kv=function(t){try{return xv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=()=>V1().__FIREBASE_DEFAULTS__,L1=()=>{if(typeof process>"u"||typeof Om>"u")return;const t=Om.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},F1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kv(t[1]);return e&&JSON.parse(e)},Oc=()=>{try{return k1()||M1()||L1()||F1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ov=t=>{var e,n;return(n=(e=Oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},U1=t=>{const e=Ov(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dv=()=>{var t;return(t=Oc())===null||t===void 0?void 0:t.config},Nv=t=>{var e;return(e=Oc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zl(JSON.stringify(n)),zl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function j1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function z1(){var t;const e=(t=Oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function H1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function q1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function W1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K1(){const t=Gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function G1(){return!z1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Y1(){try{return typeof indexedDB=="object"}catch{return!1}}function Q1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="FirebaseError";class xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=X1,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ma.prototype.create)}}class ma{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?J1(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new xr(s,a,r)}}function J1(t,e){return t.replace(Z1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Z1=/\{\$([^}]+)}/g;function eA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Us(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Dm(i)&&Dm(o)){if(!Us(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tA(t,e){const n=new nA(t,e);return n.subscribe.bind(n)}class nA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Lu),s.error===void 0&&(s.error=Lu),s.complete===void 0&&(s.complete=Lu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){return t&&t._delegate?t._delegate:t}class $s{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oA(e))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rs){return this.instances.has(e)}getOptions(e=Rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rs){return this.component?this.component.multipleInstances?e:Rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iA(t){return t===Rs?void 0:t}function oA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Fe||(Fe={}));const lA={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},cA=Fe.INFO,uA={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},fA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jh{constructor(e){this.name=e,this._logLevel=cA,this._logHandler=fA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const hA=(t,e)=>e.some(n=>t instanceof n);let Nm,Vm;function dA(){return Nm||(Nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pA(){return Vm||(Vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vv=new WeakMap,Pf=new WeakMap,Mv=new WeakMap,Fu=new WeakMap,Zh=new WeakMap;function mA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vv.set(n,t)}).catch(()=>{}),Zh.set(e,t),e}function gA(t){if(Pf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pf.set(t,e)}let xf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yA(t){xf=t(xf)}function _A(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uu(this),e,...n);return Mv.set(r,e.sort?e.sort():[e]),Xr(r)}:pA().includes(t)?function(...e){return t.apply(Uu(this),e),Xr(Vv.get(this))}:function(...e){return Xr(t.apply(Uu(this),e))}}function vA(t){return typeof t=="function"?_A(t):(t instanceof IDBTransaction&&gA(t),hA(t,dA())?new Proxy(t,xf):t)}function Xr(t){if(t instanceof IDBRequest)return mA(t);if(Fu.has(t))return Fu.get(t);const e=vA(t);return e!==t&&(Fu.set(t,e),Zh.set(e,t)),e}const Uu=t=>Zh.get(t);function bA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Xr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xr(o.result),c.oldVersion,c.newVersion,Xr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const wA=["get","getKey","getAll","getAllKeys","count"],EA=["put","add","delete","clear"],$u=new Map;function Mm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($u.get(e))return $u.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=EA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return $u.set(e,i),i}yA(t=>({...t,get:(e,n,r)=>Mm(e,n)||t.get(e,n,r),has:(e,n)=>!!Mm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kf="@firebase/app",Lm="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Jh("@firebase/app"),AA="@firebase/app-compat",SA="@firebase/analytics-compat",RA="@firebase/analytics",CA="@firebase/app-check-compat",PA="@firebase/app-check",xA="@firebase/auth",kA="@firebase/auth-compat",OA="@firebase/database",DA="@firebase/data-connect",NA="@firebase/database-compat",VA="@firebase/functions",MA="@firebase/functions-compat",LA="@firebase/installations",FA="@firebase/installations-compat",UA="@firebase/messaging",$A="@firebase/messaging-compat",BA="@firebase/performance",jA="@firebase/performance-compat",zA="@firebase/remote-config",HA="@firebase/remote-config-compat",qA="@firebase/storage",WA="@firebase/storage-compat",KA="@firebase/firestore",GA="@firebase/vertexai",YA="@firebase/firestore-compat",QA="firebase",XA="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="[DEFAULT]",JA={[kf]:"fire-core",[AA]:"fire-core-compat",[RA]:"fire-analytics",[SA]:"fire-analytics-compat",[PA]:"fire-app-check",[CA]:"fire-app-check-compat",[xA]:"fire-auth",[kA]:"fire-auth-compat",[OA]:"fire-rtdb",[DA]:"fire-data-connect",[NA]:"fire-rtdb-compat",[VA]:"fire-fn",[MA]:"fire-fn-compat",[LA]:"fire-iid",[FA]:"fire-iid-compat",[UA]:"fire-fcm",[$A]:"fire-fcm-compat",[BA]:"fire-perf",[jA]:"fire-perf-compat",[zA]:"fire-rc",[HA]:"fire-rc-compat",[qA]:"fire-gcs",[WA]:"fire-gcs-compat",[KA]:"fire-fst",[YA]:"fire-fst-compat",[GA]:"fire-vertex","fire-js":"fire-js",[QA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Map,ZA=new Map,Df=new Map;function Fm(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ci(t){const e=t.name;if(Df.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Df.set(e,t);for(const n of Hl.values())Fm(n,t);for(const n of ZA.values())Fm(n,t);return!0}function ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function An(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new ma("app","Firebase",eS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=XA;function Lv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Of,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Jr.create("bad-app-name",{appName:String(s)});if(n||(n=Dv()),!n)throw Jr.create("no-options");const i=Hl.get(s);if(i){if(Us(n,i.options)&&Us(r,i.config))return i;throw Jr.create("duplicate-app",{appName:s})}const o=new aA(s);for(const c of Df.values())o.addComponent(c);const a=new tS(n,r,o);return Hl.set(s,a),a}function Fv(t=Of){const e=Hl.get(t);if(!e&&t===Of&&Dv())return Lv();if(!e)throw Jr.create("no-app",{appName:t});return e}function Zr(t,e,n){var r;let s=(r=JA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(a.join(" "));return}Ci(new $s(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebase-heartbeat-database",rS=1,Jo="firebase-heartbeat-store";let Bu=null;function Uv(){return Bu||(Bu=bA(nS,rS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jr.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function sS(t){try{const n=(await Uv()).transaction(Jo),r=await n.objectStore(Jo).get($v(t));return await n.done,r}catch(e){if(e instanceof xr)wr.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function Um(t,e){try{const r=(await Uv()).transaction(Jo,"readwrite");await r.objectStore(Jo).put(e,$v(t)),await r.done}catch(n){if(n instanceof xr)wr.warn(n.message);else{const r=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function $v(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=1024,oS=30;class aS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$m();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>oS){const o=uS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$m(),{heartbeatsToSend:r,unsentEntries:s}=lS(this._heartbeatsCache.heartbeats),i=zl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wr.warn(n),""}}}function $m(){return new Date().toISOString().substring(0,10)}function lS(t,e=iS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Bm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y1()?Q1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Um(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Um(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bm(t){return zl(JSON.stringify({version:2,heartbeats:t})).length}function uS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){Ci(new $s("platform-logger",e=>new TA(e),"PRIVATE")),Ci(new $s("heartbeat",e=>new aS(e),"PRIVATE")),Zr(kf,Lm,t),Zr(kf,Lm,"esm2017"),Zr("fire-js","")}fS("");var hS="firebase",dS="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zr(hS,dS,"app");function td(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pS=Bv,jv=new ma("auth","Firebase",Bv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new Jh("@firebase/auth");function mS(t,...e){ql.logLevel<=Fe.WARN&&ql.warn(`Auth (${ji}): ${t}`,...e)}function ml(t,...e){ql.logLevel<=Fe.ERROR&&ql.error(`Auth (${ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,...e){throw rd(t,...e)}function Ln(t,...e){return rd(t,...e)}function nd(t,e,n){const r=Object.assign(Object.assign({},pS()),{[e]:n});return new ma("auth","Firebase",r).create(e,{appName:t.name})}function es(t){return nd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rr(t,"argument-error"),nd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jv.create(t,...e)}function Re(t,e,...n){if(!t)throw rd(e,...n)}function gr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ml(e),new Error(e)}function Er(t,e){t||gr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yS(){return jm()==="http:"||jm()==="https:"}function jm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yS()||q1()||"connection"in navigator)?navigator.onLine:!0}function vS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.shortDelay=e,this.longDelay=n,Er(n>e,"Short delay should be less than long delay!"),this.isMobile=j1()||W1()}get(){return _S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t,e){Er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ES=new ya(3e4,6e4);function Dc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zi(t,e,n,r,s={}){return Hv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ga(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return H1()||(u.referrerPolicy="no-referrer"),zv.fetch()(await Wv(t,t.config.apiHost,n,a),u)})}async function Hv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bS),e);try{const s=new TS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Za(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw nd(t,f,u);rr(t,f)}}catch(s){if(s instanceof xr)throw s;rr(t,"network-request-failed",{message:String(s)})}}async function qv(t,e,n,r,s={}){const i=await zi(t,e,n,r,s);return"mfaPendingCredential"in i&&rr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?sd(t.config,s):`${t.config.apiScheme}://${s}`;return wS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class TS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ln(this.auth,"network-request-failed")),ES.get())})}}function Za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ln(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,e){return zi(t,"POST","/v1/accounts:delete",e)}async function Wl(t,e){return zi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AS(t,e=!1){const n=Pn(t),r=await n.getIdToken(e),s=id(r);Re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Oo(ju(s.auth_time)),issuedAtTime:Oo(ju(s.iat)),expirationTime:Oo(ju(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ju(t){return Number(t)*1e3}function id(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ml("JWT malformed, contained fewer than 3 sections"),null;try{const s=kv(n);return s?JSON.parse(s):(ml("Failed to decode base64 JWT payload"),null)}catch(s){return ml("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zm(t){const e=id(t);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xr&&SS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zo(t,Wl(n,{idToken:r}));Re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kv(i.providerUserInfo):[],a=PS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Vf(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function CS(t){const e=Pn(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kv(t){return t.map(e=>{var{providerId:n}=e,r=td(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){const n=await Hv(t,{},async()=>{const r=ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Wv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kS(t,e){return zi(t,"POST","/v2/accounts:revokeToken",Dc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const n=zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wi;return r&&(Re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t,e){Re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return Re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AS(this,e)}reload(){return CS(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(es(this.auth));const e=await this.getIdToken();return await Zo(this,IS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:F,isAnonymous:Q,providerData:se,stsTokenManager:A}=n;Re(V&&A,e,"internal-error");const w=wi.fromJSON(this.name,A);Re(typeof V=="string",e,"internal-error"),Lr(d,e.name),Lr(m,e.name),Re(typeof F=="boolean",e,"internal-error"),Re(typeof Q=="boolean",e,"internal-error"),Lr(g,e.name),Lr(E,e.name),Lr(C,e.name),Lr(P,e.name),Lr(k,e.name),Lr(x,e.name);const v=new Dn({uid:V,auth:e,email:m,emailVerified:F,displayName:d,isAnonymous:Q,photoURL:E,phoneNumber:g,tenantId:C,stsTokenManager:w,createdAt:k,lastLoginAt:x});return se&&Array.isArray(se)&&(v.providerData=se.map(_=>Object.assign({},_))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new wi;s.updateFromServerResponse(n);const i=new Dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Kv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new wi;a.updateFromIdToken(r);const c=new Dn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new Map;function yr(t){Er(t instanceof Function,"Expected a class definition");let e=Hm.get(t);return e?(Er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gv.type="NONE";const qm=Gv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ei{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gl(this.userKey,s.apiKey,i),this.fullPersistenceKey=gl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Wl(this.auth,{idToken:e}).catch(()=>{});return n?Dn._fromGetAccountInfoResponse(this.auth,n,e):null}return Dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ei(yr(qm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||yr(qm);const o=gl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const m=await Wl(e,{idToken:f}).catch(()=>{});if(!m)break;d=await Dn._fromGetAccountInfoResponse(e,m,f)}else d=Dn._fromJSON(e,f);u!==i&&(a=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ei(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ei(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(e0(e))return"Blackberry";if(t0(e))return"Webos";if(Qv(e))return"Safari";if((e.includes("chrome/")||Xv(e))&&!e.includes("edge/"))return"Chrome";if(Zv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yv(t=Gt()){return/firefox\//i.test(t)}function Qv(t=Gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xv(t=Gt()){return/crios\//i.test(t)}function Jv(t=Gt()){return/iemobile/i.test(t)}function Zv(t=Gt()){return/android/i.test(t)}function e0(t=Gt()){return/blackberry/i.test(t)}function t0(t=Gt()){return/webos/i.test(t)}function od(t=Gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OS(t=Gt()){var e;return od(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DS(){return K1()&&document.documentMode===10}function n0(t=Gt()){return od(t)||Zv(t)||t0(t)||e0(t)||/windows phone/i.test(t)||Jv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e=[]){let n;switch(t){case"Browser":n=Wm(Gt());break;case"Worker":n=`${Wm(Gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e={}){return zi(t,"GET","/v2/passwordPolicy",Dc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=6;class LS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Km(this),this.idTokenSubscription=new Km(this),this.beforeStateQueue=new NS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ei.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wl(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(An(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(es(this));const n=e?Pn(e):null;return n&&Re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VS(this),n=new LS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ma("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yr(e)||this._popupRedirectResolver;Re(n,this,"argument-error"),this.redirectPersistenceManager=await Ei.create(this,[yr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=r0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _a(t){return Pn(t)}class Km{constructor(e){this.auth=e,this.observer=null,this.addObserver=tA(n=>this.observer=n)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function US(t){ad=t}function $S(t){return ad.loadJS(t)}function BS(){return ad.gapiScript}function jS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t,e){const n=ed(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Us(i,e??{}))return s;rr(s,"already-initialized")}return n.initialize({options:e})}function HS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qS(t,e,n){const r=_a(t);Re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=s0(e),{host:o,port:a}=WS(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Re(Us(u,r.config.emulator)&&Us(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,KS()}function s0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WS(t){const e=s0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gm(o)}}}function Gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gr("not implemented")}_getIdTokenResponse(e){return gr("not implemented")}_linkToIdToken(e,n){return gr("not implemented")}_getReauthenticationResolver(e){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e){return qv(t,"POST","/v1/accounts:signInWithIdp",Dc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="http://localhost";class Bs extends i0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=td(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Bs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ti(e,n)}buildRequest(){const e={requestUri:GS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ga(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends ld{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends va{constructor(){super("facebook.com")}static credential(e){return Bs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bs._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends va{constructor(){super("github.com")}static credential(e){return Bs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends va{constructor(){super("twitter.com")}static credential(e,n){return Bs._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return qv(t,"POST","/v1/accounts:signUp",Dc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dn._fromIdTokenResponse(e,r,s),o=Ym(r);return new is({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ym(r);return new is({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ym(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(t){var e;if(An(t.app))return Promise.reject(es(t));const n=_a(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new is({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await YS(n,{returnSecureToken:!0}),s=await is._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends xr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gl(e,n,r,s)}}function o0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,i,e,r):i})}async function XS(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e,n=!1){const{auth:r}=t;if(An(r.app))return Promise.reject(es(r));const s="reauthenticate";try{const i=await Zo(t,o0(r,s,e,t),n);Re(i.idToken,r,"internal-error");const o=id(i.idToken);Re(o,r,"internal-error");const{sub:a}=o;return Re(t.uid===a,r,"user-mismatch"),is._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(t,e,n=!1){if(An(t.app))return Promise.reject(es(t));const r="signIn",s=await o0(t,r,e),i=await is._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function eR(t,e,n,r){return Pn(t).onIdTokenChanged(e,n,r)}function tR(t,e,n){return Pn(t).beforeAuthStateChanged(e,n)}const Yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yl,"1"),this.storage.removeItem(Yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=1e3,rR=10;class l0 extends a0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=n0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);DS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,rR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}l0.type="LOCAL";const sR=l0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0 extends a0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}c0.type="SESSION";const u0=c0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await iR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=cd("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return window}function aR(t){Jn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function lR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uR(){return f0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="firebaseLocalStorageDb",fR=1,Ql="firebaseLocalStorage",d0="fbase_key";class ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vc(t,e){return t.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function hR(){const t=indexedDB.deleteDatabase(h0);return new ba(t).toPromise()}function Mf(){const t=indexedDB.open(h0,fR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ql,{keyPath:d0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ql)?e(r):(r.close(),await hR(),e(await Mf()))})})}async function Qm(t,e,n){const r=Vc(t,!0).put({[d0]:e,value:n});return new ba(r).toPromise()}async function dR(t,e){const n=Vc(t,!1).get(e),r=await new ba(n).toPromise();return r===void 0?null:r.value}function Xm(t,e){const n=Vc(t,!0).delete(e);return new ba(n).toPromise()}const pR=800,mR=3;class p0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nc._getInstance(uR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lR(),!this.activeServiceWorker)return;this.sender=new oR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mf();return await Qm(e,Yl,"1"),await Xm(e,Yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vc(s,!1).getAll();return new ba(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p0.type="LOCAL";const gR=p0;new ya(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e){return e?yr(e):(Re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends i0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yR(t){return ZS(t.auth,new ud(t),t.bypassAuthState)}function _R(t){const{auth:e,user:n}=t;return Re(n,e,"internal-error"),JS(n,new ud(t),t.bypassAuthState)}async function vR(t){const{auth:e,user:n}=t;return Re(n,e,"internal-error"),XS(n,new ud(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yR;case"linkViaPopup":case"linkViaRedirect":return vR;case"reauthViaPopup":case"reauthViaRedirect":return _R;default:rr(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=new ya(2e3,1e4);async function wR(t,e,n){if(An(t.app))return Promise.reject(Ln(t,"operation-not-supported-in-this-environment"));const r=_a(t);gS(t,e,ld);const s=m0(r,n);return new ks(r,"signInViaPopup",e,s).executeNotNull()}class ks extends g0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bR.get())};e()}}ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="pendingRedirect",yl=new Map;class TR extends g0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yl.get(this.auth._key());if(!e){try{const r=await IR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yl.set(this.auth._key(),e)}return this.bypassAuthState||yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IR(t,e){const n=RR(e),r=SR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function AR(t,e){yl.set(t._key(),e)}function SR(t){return yr(t._redirectPersistence)}function RR(t){return gl(ER,t.config.apiKey,t.name)}async function CR(t,e,n=!1){if(An(t.app))return Promise.reject(es(t));const r=_a(t),s=m0(r,e),o=await new TR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=10*60*1e3;class xR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!y0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jm(e))}saveEventToCache(e){this.cachedEventUids.add(Jm(e)),this.lastProcessedEventTime=Date.now()}}function Jm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e={}){return zi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NR=/^https?/;async function VR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OR(t);for(const n of e)try{if(MR(n))return}catch{}rr(t,"unauthorized-domain")}function MR(t){const e=Nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NR.test(n))return!1;if(DR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new ya(3e4,6e4);function Zm(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FR(t){return new Promise((e,n)=>{var r,s,i;function o(){Zm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zm(),n(Ln(t,"network-request-failed"))},timeout:LR.get()})}if(!((s=(r=Jn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jn().gapi)===null||i===void 0)&&i.load)o();else{const a=jS("iframefcb");return Jn()[a]=()=>{gapi.load?o():n(Ln(t,"network-request-failed"))},$S(`${BS()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _l=null,e})}let _l=null;function UR(t){return _l=_l||FR(t),_l}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new ya(5e3,15e3),BR="__/auth/iframe",jR="emulator/auth/iframe",zR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qR(t){const e=t.config;Re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sd(e,jR):`https://${t.config.authDomain}/${BR}`,r={apiKey:e.apiKey,appName:t.name,v:ji},s=HR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ga(r).slice(1)}`}async function WR(t){const e=await UR(t),n=Jn().gapi;return Re(n,t,"internal-error"),e.open({where:document.body,url:qR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Jn().setTimeout(()=>{i(o)},$R.get());function c(){Jn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GR=500,YR=600,QR="_blank",XR="http://localhost";class eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JR(t,e,n,r=GR,s=YR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},KR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Gt().toLowerCase();n&&(a=Xv(u)?QR:n),Yv(u)&&(e=e||XR,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[g,E])=>`${m}${g}=${E},`,"");if(OS(u)&&a!=="_self")return ZR(e||"",a),new eg(null);const d=window.open(e||"",a,f);Re(d,t,"popup-blocked");try{d.focus()}catch{}return new eg(d)}function ZR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="__/auth/handler",tC="emulator/auth/handler",nC=encodeURIComponent("fac");async function tg(t,e,n,r,s,i){Re(t.config.authDomain,t,"auth-domain-config-required"),Re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:s};if(e instanceof ld){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof va){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${nC}=${encodeURIComponent(c)}`:"";return`${rC(t)}?${ga(a).slice(1)}${u}`}function rC({config:t}){return t.emulator?sd(t,tC):`https://${t.authDomain}/${eC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="webStorageSupport";class sC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=u0,this._completeRedirectFn=CR,this._overrideRedirectResult=AR}async _openPopup(e,n,r,s){var i;Er((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await tg(e,n,r,Nf(),s);return JR(e,o,cd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tg(e,n,r,Nf(),s);return aR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Er(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WR(e),r=new xR(e);return n.register("authEvent",s=>(Re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zu,{type:zu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zu];o!==void 0&&n(!!o),rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return n0()||Qv()||od()}}const iC=sC;var ng="@firebase/auth",rg="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lC(t){Ci(new $s("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r0(t)},u=new FS(r,s,i,c);return HS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ci(new $s("auth-internal",e=>{const n=_a(e.getProvider("auth").getImmediate());return(r=>new oC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zr(ng,rg,aC(t)),Zr(ng,rg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=5*60,uC=Nv("authIdTokenMaxAge")||cC;let sg=null;const fC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uC)return;const s=n==null?void 0:n.token;sg!==s&&(sg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hC(t=Fv()){const e=ed(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zS(t,{popupRedirectResolver:iC,persistence:[gR,sR,u0]}),r=Nv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=fC(i.toString());tR(n,o,()=>o(n.currentUser)),eR(n,a=>o(a))}}const s=Ov("auth");return s&&qS(n,`http://${s}`),n}function dC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}US({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lC("Browser");var ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,_0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,w){function v(){}v.prototype=w.prototype,A.D=w.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(_,T,S){for(var b=Array(arguments.length-2),de=2;de<arguments.length;de++)b[de-2]=arguments[de];return w.prototype[T].apply(_,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,w,v){v||(v=0);var _=Array(16);if(typeof w=="string")for(var T=0;16>T;++T)_[T]=w.charCodeAt(v++)|w.charCodeAt(v++)<<8|w.charCodeAt(v++)<<16|w.charCodeAt(v++)<<24;else for(T=0;16>T;++T)_[T]=w[v++]|w[v++]<<8|w[v++]<<16|w[v++]<<24;w=A.g[0],v=A.g[1],T=A.g[2];var S=A.g[3],b=w+(S^v&(T^S))+_[0]+3614090360&4294967295;w=v+(b<<7&4294967295|b>>>25),b=S+(T^w&(v^T))+_[1]+3905402710&4294967295,S=w+(b<<12&4294967295|b>>>20),b=T+(v^S&(w^v))+_[2]+606105819&4294967295,T=S+(b<<17&4294967295|b>>>15),b=v+(w^T&(S^w))+_[3]+3250441966&4294967295,v=T+(b<<22&4294967295|b>>>10),b=w+(S^v&(T^S))+_[4]+4118548399&4294967295,w=v+(b<<7&4294967295|b>>>25),b=S+(T^w&(v^T))+_[5]+1200080426&4294967295,S=w+(b<<12&4294967295|b>>>20),b=T+(v^S&(w^v))+_[6]+2821735955&4294967295,T=S+(b<<17&4294967295|b>>>15),b=v+(w^T&(S^w))+_[7]+4249261313&4294967295,v=T+(b<<22&4294967295|b>>>10),b=w+(S^v&(T^S))+_[8]+1770035416&4294967295,w=v+(b<<7&4294967295|b>>>25),b=S+(T^w&(v^T))+_[9]+2336552879&4294967295,S=w+(b<<12&4294967295|b>>>20),b=T+(v^S&(w^v))+_[10]+4294925233&4294967295,T=S+(b<<17&4294967295|b>>>15),b=v+(w^T&(S^w))+_[11]+2304563134&4294967295,v=T+(b<<22&4294967295|b>>>10),b=w+(S^v&(T^S))+_[12]+1804603682&4294967295,w=v+(b<<7&4294967295|b>>>25),b=S+(T^w&(v^T))+_[13]+4254626195&4294967295,S=w+(b<<12&4294967295|b>>>20),b=T+(v^S&(w^v))+_[14]+2792965006&4294967295,T=S+(b<<17&4294967295|b>>>15),b=v+(w^T&(S^w))+_[15]+1236535329&4294967295,v=T+(b<<22&4294967295|b>>>10),b=w+(T^S&(v^T))+_[1]+4129170786&4294967295,w=v+(b<<5&4294967295|b>>>27),b=S+(v^T&(w^v))+_[6]+3225465664&4294967295,S=w+(b<<9&4294967295|b>>>23),b=T+(w^v&(S^w))+_[11]+643717713&4294967295,T=S+(b<<14&4294967295|b>>>18),b=v+(S^w&(T^S))+_[0]+3921069994&4294967295,v=T+(b<<20&4294967295|b>>>12),b=w+(T^S&(v^T))+_[5]+3593408605&4294967295,w=v+(b<<5&4294967295|b>>>27),b=S+(v^T&(w^v))+_[10]+38016083&4294967295,S=w+(b<<9&4294967295|b>>>23),b=T+(w^v&(S^w))+_[15]+3634488961&4294967295,T=S+(b<<14&4294967295|b>>>18),b=v+(S^w&(T^S))+_[4]+3889429448&4294967295,v=T+(b<<20&4294967295|b>>>12),b=w+(T^S&(v^T))+_[9]+568446438&4294967295,w=v+(b<<5&4294967295|b>>>27),b=S+(v^T&(w^v))+_[14]+3275163606&4294967295,S=w+(b<<9&4294967295|b>>>23),b=T+(w^v&(S^w))+_[3]+4107603335&4294967295,T=S+(b<<14&4294967295|b>>>18),b=v+(S^w&(T^S))+_[8]+1163531501&4294967295,v=T+(b<<20&4294967295|b>>>12),b=w+(T^S&(v^T))+_[13]+2850285829&4294967295,w=v+(b<<5&4294967295|b>>>27),b=S+(v^T&(w^v))+_[2]+4243563512&4294967295,S=w+(b<<9&4294967295|b>>>23),b=T+(w^v&(S^w))+_[7]+1735328473&4294967295,T=S+(b<<14&4294967295|b>>>18),b=v+(S^w&(T^S))+_[12]+2368359562&4294967295,v=T+(b<<20&4294967295|b>>>12),b=w+(v^T^S)+_[5]+4294588738&4294967295,w=v+(b<<4&4294967295|b>>>28),b=S+(w^v^T)+_[8]+2272392833&4294967295,S=w+(b<<11&4294967295|b>>>21),b=T+(S^w^v)+_[11]+1839030562&4294967295,T=S+(b<<16&4294967295|b>>>16),b=v+(T^S^w)+_[14]+4259657740&4294967295,v=T+(b<<23&4294967295|b>>>9),b=w+(v^T^S)+_[1]+2763975236&4294967295,w=v+(b<<4&4294967295|b>>>28),b=S+(w^v^T)+_[4]+1272893353&4294967295,S=w+(b<<11&4294967295|b>>>21),b=T+(S^w^v)+_[7]+4139469664&4294967295,T=S+(b<<16&4294967295|b>>>16),b=v+(T^S^w)+_[10]+3200236656&4294967295,v=T+(b<<23&4294967295|b>>>9),b=w+(v^T^S)+_[13]+681279174&4294967295,w=v+(b<<4&4294967295|b>>>28),b=S+(w^v^T)+_[0]+3936430074&4294967295,S=w+(b<<11&4294967295|b>>>21),b=T+(S^w^v)+_[3]+3572445317&4294967295,T=S+(b<<16&4294967295|b>>>16),b=v+(T^S^w)+_[6]+76029189&4294967295,v=T+(b<<23&4294967295|b>>>9),b=w+(v^T^S)+_[9]+3654602809&4294967295,w=v+(b<<4&4294967295|b>>>28),b=S+(w^v^T)+_[12]+3873151461&4294967295,S=w+(b<<11&4294967295|b>>>21),b=T+(S^w^v)+_[15]+530742520&4294967295,T=S+(b<<16&4294967295|b>>>16),b=v+(T^S^w)+_[2]+3299628645&4294967295,v=T+(b<<23&4294967295|b>>>9),b=w+(T^(v|~S))+_[0]+4096336452&4294967295,w=v+(b<<6&4294967295|b>>>26),b=S+(v^(w|~T))+_[7]+1126891415&4294967295,S=w+(b<<10&4294967295|b>>>22),b=T+(w^(S|~v))+_[14]+2878612391&4294967295,T=S+(b<<15&4294967295|b>>>17),b=v+(S^(T|~w))+_[5]+4237533241&4294967295,v=T+(b<<21&4294967295|b>>>11),b=w+(T^(v|~S))+_[12]+1700485571&4294967295,w=v+(b<<6&4294967295|b>>>26),b=S+(v^(w|~T))+_[3]+2399980690&4294967295,S=w+(b<<10&4294967295|b>>>22),b=T+(w^(S|~v))+_[10]+4293915773&4294967295,T=S+(b<<15&4294967295|b>>>17),b=v+(S^(T|~w))+_[1]+2240044497&4294967295,v=T+(b<<21&4294967295|b>>>11),b=w+(T^(v|~S))+_[8]+1873313359&4294967295,w=v+(b<<6&4294967295|b>>>26),b=S+(v^(w|~T))+_[15]+4264355552&4294967295,S=w+(b<<10&4294967295|b>>>22),b=T+(w^(S|~v))+_[6]+2734768916&4294967295,T=S+(b<<15&4294967295|b>>>17),b=v+(S^(T|~w))+_[13]+1309151649&4294967295,v=T+(b<<21&4294967295|b>>>11),b=w+(T^(v|~S))+_[4]+4149444226&4294967295,w=v+(b<<6&4294967295|b>>>26),b=S+(v^(w|~T))+_[11]+3174756917&4294967295,S=w+(b<<10&4294967295|b>>>22),b=T+(w^(S|~v))+_[2]+718787259&4294967295,T=S+(b<<15&4294967295|b>>>17),b=v+(S^(T|~w))+_[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(T+(b<<21&4294967295|b>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,w){w===void 0&&(w=A.length);for(var v=w-this.blockSize,_=this.B,T=this.h,S=0;S<w;){if(T==0)for(;S<=v;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<w;)if(_[T++]=A.charCodeAt(S++),T==this.blockSize){s(this,_),T=0;break}}else for(;S<w;)if(_[T++]=A[S++],T==this.blockSize){s(this,_),T=0;break}}this.h=T,this.o+=w},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;var v=8*this.o;for(w=A.length-8;w<A.length;++w)A[w]=v&255,v/=256;for(this.u(A),A=Array(16),w=v=0;4>w;++w)for(var _=0;32>_;_+=8)A[v++]=this.g[w]>>>_&255;return A};function i(A,w){var v=a;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=w(A)}function o(A,w){this.h=w;for(var v=[],_=!0,T=A.length-1;0<=T;T--){var S=A[T]|0;_&&S==w||(v[T]=S,_=!1)}this.g=v}var a={};function c(A){return-128<=A&&128>A?i(A,function(w){return new o([w|0],0>w?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(0>A)return P(u(-A));for(var w=[],v=1,_=0;A>=v;_++)w[_]=A/v|0,v*=4294967296;return new o(w,0)}function f(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return P(f(A.substring(1),w));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(w,8)),_=d,T=0;T<A.length;T+=8){var S=Math.min(8,A.length-T),b=parseInt(A.substring(T,T+S),w);8>S?(S=u(Math.pow(w,S)),_=_.j(S).add(u(b))):(_=_.j(v),_=_.add(u(b)))}return _}var d=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-P(this).m();for(var A=0,w=1,v=0;v<this.g.length;v++){var _=this.i(v);A+=(0<=_?_:4294967296+_)*w,w*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(C(this))return"-"+P(this).toString(A);for(var w=u(Math.pow(A,6)),v=this,_="";;){var T=F(v,w).g;v=k(v,T.j(w));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=T,E(v))return S+_;for(;6>S.length;)S="0"+S;_=S+_}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function C(A){return A.h==-1}t.l=function(A){return A=k(this,A),C(A)?-1:E(A)?0:1};function P(A){for(var w=A.g.length,v=[],_=0;_<w;_++)v[_]=~A.g[_];return new o(v,~A.h).add(m)}t.abs=function(){return C(this)?P(this):this},t.add=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],_=0,T=0;T<=w;T++){var S=_+(this.i(T)&65535)+(A.i(T)&65535),b=(S>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);_=b>>>16,S&=65535,b&=65535,v[T]=b<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function k(A,w){return A.add(P(w))}t.j=function(A){if(E(this)||E(A))return d;if(C(this))return C(A)?P(this).j(P(A)):P(P(this).j(A));if(C(A))return P(this.j(P(A)));if(0>this.l(g)&&0>A.l(g))return u(this.m()*A.m());for(var w=this.g.length+A.g.length,v=[],_=0;_<2*w;_++)v[_]=0;for(_=0;_<this.g.length;_++)for(var T=0;T<A.g.length;T++){var S=this.i(_)>>>16,b=this.i(_)&65535,de=A.i(T)>>>16,te=A.i(T)&65535;v[2*_+2*T]+=b*te,x(v,2*_+2*T),v[2*_+2*T+1]+=S*te,x(v,2*_+2*T+1),v[2*_+2*T+1]+=b*de,x(v,2*_+2*T+1),v[2*_+2*T+2]+=S*de,x(v,2*_+2*T+2)}for(_=0;_<w;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=w;_<2*w;_++)v[_]=0;return new o(v,0)};function x(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function V(A,w){this.g=A,this.h=w}function F(A,w){if(E(w))throw Error("division by zero");if(E(A))return new V(d,d);if(C(A))return w=F(P(A),w),new V(P(w.g),P(w.h));if(C(w))return w=F(A,P(w)),new V(P(w.g),w.h);if(30<A.g.length){if(C(A)||C(w))throw Error("slowDivide_ only works with positive integers.");for(var v=m,_=w;0>=_.l(A);)v=Q(v),_=Q(_);var T=se(v,1),S=se(_,1);for(_=se(_,2),v=se(v,2);!E(_);){var b=S.add(_);0>=b.l(A)&&(T=T.add(v),S=b),_=se(_,1),v=se(v,1)}return w=k(A,T.j(w)),new V(T,w)}for(T=d;0<=A.l(w);){for(v=Math.max(1,Math.floor(A.m()/w.m())),_=Math.ceil(Math.log(v)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),S=u(v),b=S.j(w);C(b)||0<b.l(A);)v-=_,S=u(v),b=S.j(w);E(S)&&(S=m),T=T.add(S),A=k(A,b)}return new V(T,A)}t.A=function(A){return F(this,A).h},t.and=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],_=0;_<w;_++)v[_]=this.i(_)&A.i(_);return new o(v,this.h&A.h)},t.or=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],_=0;_<w;_++)v[_]=this.i(_)|A.i(_);return new o(v,this.h|A.h)},t.xor=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],_=0;_<w;_++)v[_]=this.i(_)^A.i(_);return new o(v,this.h^A.h)};function Q(A){for(var w=A.g.length+1,v=[],_=0;_<w;_++)v[_]=A.i(_)<<1|A.i(_-1)>>>31;return new o(v,A.h)}function se(A,w){var v=w>>5;w%=32;for(var _=A.g.length-v,T=[],S=0;S<_;S++)T[S]=0<w?A.i(S+v)>>>w|A.i(S+v+1)<<32-w:A.i(S+v);return new o(T,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,ts=o}).apply(typeof ig<"u"?ig:typeof self<"u"?self:typeof window<"u"?window:{});var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v0,_o,b0,vl,Lf,w0,E0,T0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof el=="object"&&el];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,h){if(h)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var N=l[y];if(!(N in p))break e;p=p[N]}l=l[l.length-1],y=p[l],h=h(y),h!=y&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function i(l,h){l instanceof String&&(l+="");var p=0,y=!1,N={next:function(){if(!y&&p<l.length){var L=p++;return{value:h(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(l){return l||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function u(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function f(l,h,p){return l.call.apply(l.bind,arguments)}function d(l,h,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),l.apply(h,N)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,m.apply(null,arguments)}function g(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function E(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,N,L){for(var re=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)re[Je-2]=arguments[Je];return h.prototype[N].apply(y,re)}}function C(l){const h=l.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=l[y];return p}return[]}function P(l,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(c(y)){const N=l.length||0,L=y.length||0;l.length=N+L;for(let re=0;re<L;re++)l[N+re]=y[re]}else l.push(y)}}class k{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(l){return/^[\s\xa0]*$/.test(l)}function V(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function F(l){return F[" "](l),l}F[" "]=function(){};var Q=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function se(l,h,p){for(const y in l)h.call(p,l[y],y,l)}function A(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function w(l){const h={};for(const p in l)h[p]=l[p];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(l,h){let p,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(p in y)l[p]=y[p];for(let L=0;L<v.length;L++)p=v[L],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function T(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function S(l){a.setTimeout(()=>{throw l},0)}function b(){var l=ue;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class de{constructor(){this.h=this.g=null}add(h,p){const y=te.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var te=new k(()=>new W,l=>l.reset());class W{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let J,B=!1,ue=new de,pe=()=>{const l=a.Promise.resolve(void 0);J=()=>{l.then(Ve)}};var Ve=()=>{for(var l;l=b();){try{l.h.call(l.g)}catch(p){S(p)}var h=te;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}B=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function nt(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var bn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function jn(l,h){if(nt.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(Q){e:{try{F(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:nn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&jn.aa.h.call(this)}}E(jn,nt);var nn={2:"touch",3:"pen",4:"mouse"};jn.prototype.h=function(){jn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),le=0;function oe(l,h,p,y,N){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=N,this.key=++le,this.da=this.fa=!1}function he(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function He(l){this.src=l,this.g={},this.h=0}He.prototype.add=function(l,h,p,y,N){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var re=R(l,h,y,N);return-1<re?(h=l[re],p||(h.fa=!1)):(h=new oe(h,this.src,L,!!y,N),h.fa=p,l.push(h)),h};function I(l,h){var p=h.type;if(p in l.g){var y=l.g[p],N=Array.prototype.indexOf.call(y,h,void 0),L;(L=0<=N)&&Array.prototype.splice.call(y,N,1),L&&(he(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function R(l,h,p,y){for(var N=0;N<l.length;++N){var L=l[N];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==y)return N}return-1}var O="closure_lm_"+(1e6*Math.random()|0),$={};function q(l,h,p,y,N){if(Array.isArray(h)){for(var L=0;L<h.length;L++)q(l,h[L],p,y,N);return null}return p=Ae(p),l&&l[U]?l.K(h,p,u(y)?!!y.capture:!1,N):j(l,h,p,!1,y,N)}function j(l,h,p,y,N,L){if(!h)throw Error("Invalid event type");var re=u(N)?!!N.capture:!!N,Je=ae(l);if(Je||(l[O]=Je=new He(l)),p=Je.add(h,p,y,re,L),p.proxy)return p;if(y=ie(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)bn||(N=re),N===void 0&&(N=!1),l.addEventListener(h.toString(),y,N);else if(l.attachEvent)l.attachEvent(G(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ie(){function l(p){return h.call(l.src,l.listener,p)}const h=ve;return l}function ne(l,h,p,y,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)ne(l,h[L],p,y,N);else y=u(y)?!!y.capture:!!y,p=Ae(p),l&&l[U]?(l=l.i,h=String(h).toString(),h in l.g&&(L=l.g[h],p=R(L,p,y,N),-1<p&&(he(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[h],l.h--)))):l&&(l=ae(l))&&(h=l.g[h.toString()],l=-1,h&&(l=R(h,p,y,N)),(p=-1<l?h[l]:null)&&X(p))}function X(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[U])I(h.i,l);else{var p=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(p,y,l.capture):h.detachEvent?h.detachEvent(G(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=ae(h))?(I(p,l),p.h==0&&(p.src=null,h[O]=null)):he(l)}}}function G(l){return l in $?$[l]:$[l]="on"+l}function ve(l,h){if(l.da)l=!0;else{h=new jn(h,this);var p=l.listener,y=l.ha||l.src;l.fa&&X(l),l=p.call(y,h)}return l}function ae(l){return l=l[O],l instanceof He?l:null}var ge="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ae(l){return typeof l=="function"?l:(l[ge]||(l[ge]=function(h){return l.handleEvent(h)}),l[ge])}function be(){Ie.call(this),this.i=new He(this),this.M=this,this.F=null}E(be,Ie),be.prototype[U]=!0,be.prototype.removeEventListener=function(l,h,p,y){ne(this,l,h,p,y)};function De(l,h){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new nt(h,l);else if(h instanceof nt)h.target=h.target||l;else{var N=h;h=new nt(y,l),_(h,N)}if(N=!0,p)for(var L=p.length-1;0<=L;L--){var re=h.g=p[L];N=Be(re,y,!0,h)&&N}if(re=h.g=l,N=Be(re,y,!0,h)&&N,N=Be(re,y,!1,h)&&N,p)for(L=0;L<p.length;L++)re=h.g=p[L],N=Be(re,y,!1,h)&&N}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],y=0;y<p.length;y++)he(p[y]);delete l.g[h],l.h--}}this.F=null},be.prototype.K=function(l,h,p,y){return this.i.add(String(l),h,!1,p,y)},be.prototype.L=function(l,h,p,y){return this.i.add(String(l),h,!0,p,y)};function Be(l,h,p,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,L=0;L<h.length;++L){var re=h[L];if(re&&!re.da&&re.capture==p){var Je=re.listener,St=re.ha||re.src;re.fa&&I(l.i,re),N=Je.call(St,y)!==!1&&N}}return N&&!y.defaultPrevented}function Dt(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function It(l){l.g=Dt(()=>{l.g=null,l.i&&(l.i=!1,It(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class wn extends Ie{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(l){Ie.call(this),this.h=l,this.g={}}E(Nt,Ie);var Dr=[];function Ji(l){se(l.g,function(h,p){this.g.hasOwnProperty(p)&&X(h)},l),l.g={}}Nt.prototype.N=function(){Nt.aa.N.call(this),Ji(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var At=a.JSON.stringify,En=a.JSON.parse,Da=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function du(){}du.prototype.h=null;function fp(l){return l.h||(l.h=l.i())}function hp(){}var Zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pu(){nt.call(this,"d")}E(pu,nt);function mu(){nt.call(this,"c")}E(mu,nt);var _s={},dp=null;function Na(){return dp=dp||new be}_s.La="serverreachability";function pp(l){nt.call(this,_s.La,l)}E(pp,nt);function eo(l){const h=Na();De(h,new pp(h))}_s.STAT_EVENT="statevent";function mp(l,h){nt.call(this,_s.STAT_EVENT,l),this.stat=h}E(mp,nt);function Qt(l){const h=Na();De(h,new mp(h,l))}_s.Ma="timingevent";function gp(l,h){nt.call(this,_s.Ma,l),this.size=h}E(gp,nt);function to(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function no(){this.g=!0}no.prototype.xa=function(){this.g=!1};function UE(l,h,p,y,N,L){l.info(function(){if(l.g)if(L)for(var re="",Je=L.split("&"),St=0;St<Je.length;St++){var qe=Je[St].split("=");if(1<qe.length){var Vt=qe[0];qe=qe[1];var Mt=Vt.split("_");re=2<=Mt.length&&Mt[1]=="type"?re+(Vt+"="+qe+"&"):re+(Vt+"=redacted&")}}else re=null;else re=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+p+`
`+re})}function $E(l,h,p,y,N,L,re){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+p+`
`+L+" "+re})}function Xs(l,h,p,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+jE(l,p)+(y?" "+y:"")})}function BE(l,h){l.info(function(){return"TIMEOUT: "+h})}no.prototype.info=function(){};function jE(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var re=1;re<N.length;re++)N[re]=""}}}}return At(p)}catch{return h}}var Va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gu;function Ma(){}E(Ma,du),Ma.prototype.g=function(){return new XMLHttpRequest},Ma.prototype.i=function(){return{}},gu=new Ma;function Nr(l,h,p,y){this.j=l,this.i=h,this.l=p,this.R=y||1,this.U=new Nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _p}function _p(){this.i=null,this.g="",this.h=!1}var vp={},yu={};function _u(l,h,p){l.L=1,l.v=$a(or(h)),l.m=p,l.P=!0,bp(l,null)}function bp(l,h){l.F=Date.now(),La(l),l.A=or(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Np(p.i,"t",y),l.C=0,p=l.j.J,l.h=new _p,l.g=Jp(l.j,p?h:null,!l.m),0<l.O&&(l.M=new wn(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,y=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(Dr[0]=N.toString()),N=Dr);for(var L=0;L<N.length;L++){var re=q(p,N[L],y||h.handleEvent,!1,h.h||h);if(!re)break;h.g[re.key]=re}h=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),eo(),UE(l.i,l.u,l.A,l.l,l.R,l.m)}Nr.prototype.ca=function(l){l=l.target;const h=this.M;h&&ar(l)==3?h.j():this.Y(l)},Nr.prototype.Y=function(l){try{if(l==this.g)e:{const Mt=ar(this.g);var h=this.g.Ba();const ei=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||Bp(this.g)))){this.J||Mt!=4||h==7||(h==8||0>=ei?eo(3):eo(2)),vu(this);var p=this.g.Z();this.X=p;t:if(wp(this)){var y=Bp(this.g);l="";var N=y.length,L=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vs(this),ro(this);var re="";break t}this.h.i=new a.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(L&&h==N-1)});y.length=0,this.h.g+=l,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=p==200,$E(this.i,this.u,this.A,this.l,this.R,Mt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Je,St=this.g;if((Je=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Je)){var qe=Je;break t}}qe=null}if(p=qe)Xs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bu(this,p);else{this.o=!1,this.s=3,Qt(12),vs(this),ro(this);break e}}if(this.P){p=!0;let xn;for(;!this.J&&this.C<re.length;)if(xn=zE(this,re),xn==yu){Mt==4&&(this.s=4,Qt(14),p=!1),Xs(this.i,this.l,null,"[Incomplete Response]");break}else if(xn==vp){this.s=4,Qt(15),Xs(this.i,this.l,re,"[Invalid Chunk]"),p=!1;break}else Xs(this.i,this.l,xn,null),bu(this,xn);if(wp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||re.length!=0||this.h.h||(this.s=1,Qt(16),p=!1),this.o=this.o&&p,!p)Xs(this.i,this.l,re,"[Invalid Chunked Response]"),vs(this),ro(this);else if(0<re.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Su(Vt),Vt.M=!0,Qt(11))}}else Xs(this.i,this.l,re,null),bu(this,re);Mt==4&&vs(this),this.o&&!this.J&&(Mt==4?Gp(this.j,this):(this.o=!1,La(this)))}else oT(this.g),p==400&&0<re.indexOf("Unknown SID")?(this.s=3,Qt(12)):(this.s=0,Qt(13)),vs(this),ro(this)}}}catch{}finally{}};function wp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function zE(l,h){var p=l.C,y=h.indexOf(`
`,p);return y==-1?yu:(p=Number(h.substring(p,y)),isNaN(p)?vp:(y+=1,y+p>h.length?yu:(h=h.slice(y,y+p),l.C=y+p,h)))}Nr.prototype.cancel=function(){this.J=!0,vs(this)};function La(l){l.S=Date.now()+l.I,Ep(l,l.I)}function Ep(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=to(m(l.ba,l),h)}function vu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Nr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(BE(this.i,this.A),this.L!=2&&(eo(),Qt(17)),vs(this),this.s=2,ro(this)):Ep(this,this.S-l)};function ro(l){l.j.G==0||l.J||Gp(l.j,l)}function vs(l){vu(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Ji(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function bu(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||wu(p.h,l))){if(!l.K&&wu(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Wa(p),Ha(p);else break e;Au(p),Qt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=to(m(p.Za,p),6e3));if(1>=Ap(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ws(p,11)}else if((l.K||p.g==l)&&Wa(p),!x(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let qe=N[h];if(p.T=qe[0],qe=qe[1],p.G==2)if(qe[0]=="c"){p.K=qe[1],p.ia=qe[2];const Vt=qe[3];Vt!=null&&(p.la=Vt,p.j.info("VER="+p.la));const Mt=qe[4];Mt!=null&&(p.Aa=Mt,p.j.info("SVER="+p.Aa));const ei=qe[5];ei!=null&&typeof ei=="number"&&0<ei&&(y=1.5*ei,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const xn=l.g;if(xn){const Ga=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ga){var L=y.h;L.g||Ga.indexOf("spdy")==-1&&Ga.indexOf("quic")==-1&&Ga.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Eu(L,L.h),L.h=null))}if(y.D){const Ru=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ru&&(y.ya=Ru,rt(y.I,y.D,Ru))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var re=l;if(y.qa=Xp(y,y.J?y.ia:null,y.W),re.K){Sp(y.h,re);var Je=re,St=y.L;St&&(Je.I=St),Je.B&&(vu(Je),La(Je)),y.g=re}else Wp(y);0<p.i.length&&qa(p)}else qe[0]!="stop"&&qe[0]!="close"||ws(p,7);else p.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?ws(p,7):Iu(p):qe[0]!="noop"&&p.l&&p.l.ta(qe),p.v=0)}}eo(4)}catch{}}var HE=class{constructor(l,h){this.g=l,this.map=h}};function Tp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ip(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ap(l){return l.h?1:l.g?l.g.size:0}function wu(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Eu(l,h){l.g?l.g.add(h):l.h=h}function Sp(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Tp.prototype.cancel=function(){if(this.i=Rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Rp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return C(l.i)}function qE(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],p=l.length,y=0;y<p;y++)h.push(l[y]);return h}h=[],p=0;for(y in l)h[p++]=l[y];return h}function WE(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const y in l)h[p++]=y;return h}}}function Cp(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=WE(l),y=qE(l),N=y.length,L=0;L<N;L++)h.call(void 0,y[L],p&&p[L],l)}var Pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KE(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),N=null;if(0<=y){var L=l[p].substring(0,y);N=l[p].substring(y+1)}else L=l[p];h(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function bs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof bs){this.h=l.h,Fa(this,l.j),this.o=l.o,this.g=l.g,Ua(this,l.s),this.l=l.l;var h=l.i,p=new oo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),xp(this,p),this.m=l.m}else l&&(h=String(l).match(Pp))?(this.h=!1,Fa(this,h[1]||"",!0),this.o=so(h[2]||""),this.g=so(h[3]||"",!0),Ua(this,h[4]),this.l=so(h[5]||"",!0),xp(this,h[6]||"",!0),this.m=so(h[7]||"")):(this.h=!1,this.i=new oo(null,this.h))}bs.prototype.toString=function(){var l=[],h=this.j;h&&l.push(io(h,kp,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(io(h,kp,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(io(p,p.charAt(0)=="/"?QE:YE,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",io(p,JE)),l.join("")};function or(l){return new bs(l)}function Fa(l,h,p){l.j=p?so(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ua(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function xp(l,h,p){h instanceof oo?(l.i=h,ZE(l.i,l.h)):(p||(h=io(h,XE)),l.i=new oo(h,l.h))}function rt(l,h,p){l.i.set(h,p)}function $a(l){return rt(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function so(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function io(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,GE),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function GE(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var kp=/[#\/\?@]/g,YE=/[#\?:]/g,QE=/[#\?]/g,XE=/[#\?@]/g,JE=/#/g;function oo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Vr(l){l.g||(l.g=new Map,l.h=0,l.i&&KE(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=oo.prototype,t.add=function(l,h){Vr(this),this.i=null,l=Js(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Op(l,h){Vr(l),h=Js(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Dp(l,h){return Vr(l),h=Js(l,h),l.g.has(h)}t.forEach=function(l,h){Vr(this),this.g.forEach(function(p,y){p.forEach(function(N){l.call(h,N,y,this)},this)},this)},t.na=function(){Vr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const N=l[y];for(let L=0;L<N.length;L++)p.push(h[y])}return p},t.V=function(l){Vr(this);let h=[];if(typeof l=="string")Dp(this,l)&&(h=h.concat(this.g.get(Js(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Vr(this),this.i=null,l=Js(this,l),Dp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Np(l,h,p){Op(l,h),0<p.length&&(l.i=null,l.g.set(Js(l,h),C(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const L=encodeURIComponent(String(y)),re=this.V(y);for(y=0;y<re.length;y++){var N=L;re[y]!==""&&(N+="="+encodeURIComponent(String(re[y]))),l.push(N)}}return this.i=l.join("&")};function Js(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function ZE(l,h){h&&!l.j&&(Vr(l),l.i=null,l.g.forEach(function(p,y){var N=y.toLowerCase();y!=N&&(Op(this,y),Np(this,N,p))},l)),l.j=h}function eT(l,h){const p=new no;if(a.Image){const y=new Image;y.onload=g(Mr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=g(Mr,p,"TestLoadImage: error",!1,h,y),y.onabort=g(Mr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=g(Mr,p,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function tT(l,h){const p=new no,y=new AbortController,N=setTimeout(()=>{y.abort(),Mr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?Mr(p,"TestPingServer: ok",!0,h):Mr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Mr(p,"TestPingServer: error",!1,h)})}function Mr(l,h,p,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(p)}catch{}}function nT(){this.g=new Da}function rT(l,h,p){const y=p||"";try{Cp(l,function(N,L){let re=N;u(N)&&(re=At(N)),h.push(y+L+"="+encodeURIComponent(re))})}catch(N){throw h.push(y+"type="+encodeURIComponent("_badmap")),N}}function Ba(l){this.l=l.Ub||null,this.j=l.eb||!1}E(Ba,du),Ba.prototype.g=function(){return new ja(this.l,this.j)},Ba.prototype.i=function(l){return function(){return l}}({});function ja(l,h){be.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(ja,be),t=ja.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,lo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ao(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,lo(this)),this.g&&(this.readyState=3,lo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ao(this):lo(this),this.readyState==3&&Vp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ao(this))},t.Qa=function(l){this.g&&(this.response=l,ao(this))},t.ga=function(){this.g&&ao(this)};function ao(l){l.readyState=4,l.l=null,l.j=null,l.v=null,lo(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function lo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Mp(l){let h="";return se(l,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Tu(l,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Mp(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):rt(l,h,p))}function ut(l){be.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(ut,be);var sT=/^https?$/i,iT=["POST","PUT"];t=ut.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gu.g(),this.v=this.o?fp(this.o):fp(gu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(L){Lp(this,L);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)p.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(iT,h,void 0))||y||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,re]of p)this.g.setRequestHeader(L,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$p(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Lp(this,L)}};function Lp(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Fp(l),za(l)}function Fp(l){l.A||(l.A=!0,De(l,"complete"),De(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,De(this,"complete"),De(this,"abort"),za(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),za(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Up(this):this.bb())},t.bb=function(){Up(this)};function Up(l){if(l.h&&typeof o<"u"&&(!l.v[1]||ar(l)!=4||l.Z()!=2)){if(l.u&&ar(l)==4)Dt(l.Ea,0,l);else if(De(l,"readystatechange"),ar(l)==4){l.h=!1;try{const re=l.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=re===0){var N=String(l.D).match(Pp)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!sT.test(N?N.toLowerCase():"")}p=y}if(p)De(l,"complete"),De(l,"success");else{l.m=6;try{var L=2<ar(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Fp(l)}}finally{za(l)}}}}function za(l,h){if(l.g){$p(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||De(l,"ready");try{p.onreadystatechange=y}catch{}}}function $p(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function ar(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),En(h)}};function Bp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function oT(l){const h={};l=(l.g&&2<=ar(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(x(l[y]))continue;var p=T(l[y]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[N]||[];h[N]=L,L.push(p)}A(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function co(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function jp(l){this.Aa=0,this.i=[],this.j=new no,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=co("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=co("baseRetryDelayMs",5e3,l),this.cb=co("retryDelaySeedMs",1e4,l),this.Wa=co("forwardChannelMaxRetries",2,l),this.wa=co("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Tp(l&&l.concurrentRequestLimit),this.Da=new nT,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jp.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,y){Qt(0),this.W=l,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Xp(this,null,this.W),qa(this)};function Iu(l){if(zp(l),l.G==3){var h=l.U++,p=or(l.I);if(rt(p,"SID",l.K),rt(p,"RID",h),rt(p,"TYPE","terminate"),uo(l,p),h=new Nr(l,l.j,h),h.L=2,h.v=$a(or(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Jp(h.j,null),h.g.ea(h.v)),h.F=Date.now(),La(h)}Qp(l)}function Ha(l){l.g&&(Su(l),l.g.cancel(),l.g=null)}function zp(l){Ha(l),l.u&&(a.clearTimeout(l.u),l.u=null),Wa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function qa(l){if(!Ip(l.h)&&!l.s){l.s=!0;var h=l.Ga;J||pe(),B||(J(),B=!0),ue.add(h,l),l.B=0}}function aT(l,h){return Ap(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=to(m(l.Ga,l,h),Yp(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new Nr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=w(L),_(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=qp(this,N,h),p=or(this.I),rt(p,"RID",l),rt(p,"CVER",22),this.D&&rt(p,"X-HTTP-Session-Id",this.D),uo(this,p),L&&(this.O?h="headers="+encodeURIComponent(String(Mp(L)))+"&"+h:this.m&&Tu(p,this.m,L)),Eu(this.h,N),this.Ua&&rt(p,"TYPE","init"),this.P?(rt(p,"$req",h),rt(p,"SID","null"),N.T=!0,_u(N,p,null)):_u(N,p,h),this.G=2}}else this.G==3&&(l?Hp(this,l):this.i.length==0||Ip(this.h)||Hp(this))};function Hp(l,h){var p;h?p=h.l:p=l.U++;const y=or(l.I);rt(y,"SID",l.K),rt(y,"RID",p),rt(y,"AID",l.T),uo(l,y),l.m&&l.o&&Tu(y,l.m,l.o),p=new Nr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=qp(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Eu(l.h,p),_u(p,y,h)}function uo(l,h){l.H&&se(l.H,function(p,y){rt(h,y,p)}),l.l&&Cp({},function(p,y){rt(h,y,p)})}function qp(l,h,p){p=Math.min(l.i.length,p);var y=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let L=-1;for(;;){const re=["count="+p];L==-1?0<p?(L=N[0].g,re.push("ofs="+L)):L=0:re.push("ofs="+L);let Je=!0;for(let St=0;St<p;St++){let qe=N[St].g;const Vt=N[St].map;if(qe-=L,0>qe)L=Math.max(0,N[St].g-100),Je=!1;else try{rT(Vt,re,"req"+qe+"_")}catch{y&&y(Vt)}}if(Je){y=re.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,y}function Wp(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;J||pe(),B||(J(),B=!0),ue.add(h,l),l.v=0}}function Au(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=to(m(l.Fa,l),Yp(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Kp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=to(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Qt(10),Ha(this),Kp(this))};function Su(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Kp(l){l.g=new Nr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=or(l.qa);rt(h,"RID","rpc"),rt(h,"SID",l.K),rt(h,"AID",l.T),rt(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&rt(h,"TO",l.ja),rt(h,"TYPE","xmlhttp"),uo(l,h),l.m&&l.o&&Tu(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=$a(or(h)),p.m=null,p.P=!0,bp(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Ha(this),Au(this),Qt(19))};function Wa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Gp(l,h){var p=null;if(l.g==h){Wa(l),Su(l),l.g=null;var y=2}else if(wu(l.h,h))p=h.D,Sp(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=l.B;y=Na(),De(y,new gp(y,p)),qa(l)}else Wp(l);else if(N=h.s,N==3||N==0&&0<h.X||!(y==1&&aT(l,h)||y==2&&Au(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),N){case 1:ws(l,5);break;case 4:ws(l,10);break;case 3:ws(l,6);break;default:ws(l,2)}}}function Yp(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function ws(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),y=l.Xa;const N=!y;y=new bs(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Fa(y,"https"),$a(y),N?eT(y.toString(),p):tT(y.toString(),p)}else Qt(2);l.G=0,l.l&&l.l.sa(h),Qp(l),zp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Qt(2)):(this.j.info("Failed to ping google.com"),Qt(1))};function Qp(l){if(l.G=0,l.ka=[],l.l){const h=Rp(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Xp(l,h,p){var y=p instanceof bs?or(p):new bs(p);if(y.g!="")h&&(y.g=h+"."+y.g),Ua(y,y.s);else{var N=a.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var L=new bs(null);y&&Fa(L,y),h&&(L.g=h),N&&Ua(L,N),p&&(L.l=p),y=L}return p=l.D,h=l.ya,p&&h&&rt(y,p,h),rt(y,"VER",l.la),uo(l,y),y}function Jp(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new ut(new Ba({eb:p})):new ut(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zp(){}t=Zp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ka(){}Ka.prototype.g=function(l,h){return new fn(l,h)};function fn(l,h){be.call(this),this.g=new jp(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!x(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Zs(this)}E(fn,be),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Iu(this.g)},fn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=At(l),l=p);h.i.push(new HE(h.Ya++,l)),h.G==3&&qa(h)},fn.prototype.N=function(){this.g.l=null,delete this.j,Iu(this.g),delete this.g,fn.aa.N.call(this)};function em(l){pu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(em,pu);function tm(){mu.call(this),this.status=1}E(tm,mu);function Zs(l){this.g=l}E(Zs,Zp),Zs.prototype.ua=function(){De(this.g,"a")},Zs.prototype.ta=function(l){De(this.g,new em(l))},Zs.prototype.sa=function(l){De(this.g,new tm)},Zs.prototype.ra=function(){De(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,T0=function(){return new Ka},E0=function(){return Na()},w0=_s,Lf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Va.NO_ERROR=0,Va.TIMEOUT=8,Va.HTTP_ERROR=6,vl=Va,yp.COMPLETE="complete",b0=yp,hp.EventType=Zi,Zi.OPEN="a",Zi.CLOSE="b",Zi.ERROR="c",Zi.MESSAGE="d",be.prototype.listen=be.prototype.K,_o=hp,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,v0=ut}).apply(typeof el<"u"?el:typeof self<"u"?self:typeof window<"u"?window:{});const og="@firebase/firestore",ag="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Jh("@firebase/firestore");function ii(){return js.logLevel}function ce(t,...e){if(js.logLevel<=Fe.DEBUG){const n=e.map(fd);js.debug(`Firestore (${Hi}): ${t}`,...n)}}function Tr(t,...e){if(js.logLevel<=Fe.ERROR){const n=e.map(fd);js.error(`Firestore (${Hi}): ${t}`,...n)}}function Pi(t,...e){if(js.logLevel<=Fe.WARN){const n=e.map(fd);js.warn(`Firestore (${Hi}): ${t}`,...n)}}function fd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,I0(t,r,n)}function I0(t,e,n){let r=`FIRESTORE (${Hi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Tr(r),new Error(r)}function Xe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||I0(e,s,r)}function ke(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends xr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ut.UNAUTHENTICATED))}shutdown(){}}class mC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gC{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Xe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _r,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Xe(typeof r.accessToken=="string",31837,{l:r}),new A0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class yC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _C{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new yC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Xe(this.o===void 0,3512);const r=i=>{i.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new lg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new lg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=bC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Me(t,e){return t<e?-1:t>e?1:0}function Ff(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Me(r,s);{const i=S0(),o=wC(i.encode(cg(t,n)),i.encode(cg(e,n)));return o!==0?o:Me(r,s)}}n+=r>65535?2:1}return Me(t.length,e.length)}function cg(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function wC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Me(t[n],e[n]);return Me(t.length,e.length)}function xi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=-62135596800,fg=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*fg);return new wt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ug)throw new fe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fg}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ug;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new wt(0,0))}static max(){return new Pe(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="__name__";class Wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Wn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Me(e.length,n.length)}static compareSegments(e,n){const r=Wn.isNumericId(e),s=Wn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Wn.extractNumericId(e).compare(Wn.extractNumericId(n)):Ff(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class st extends Wn{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new fe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new st(n)}static emptyPath(){return new st([])}}const EC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Wn{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return EC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hg}static keyField(){return new xt([hg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new fe(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new fe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new fe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new fe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(st.fromString(e))}static fromName(e){return new ye(st.fromString(e).popFirst(5))}static empty(){return new ye(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new st(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=-1;function TC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Pe.fromTimestamp(r===1e9?new wt(n+1,0):new wt(n,r));return new os(s,ye.empty(),e)}function IC(t){return new os(t.readTime,t.key,ea)}class os{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new os(Pe.min(),ye.empty(),ea)}static max(){return new os(Pe.max(),ye.empty(),ea)}}function AC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(t.documentKey,e.documentKey),n!==0?n:Me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==SC)throw t;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function CC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Mc.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=-1;function Lc(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function PC(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="";function xC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dg(e)),e=kC(t.get(n),e);return dg(e)}function kC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case C0:n+="";break;default:n+=i}}return n}function dg(t){return t+C0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function P0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Pt.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tl(this.root,e,this.comparator,!0)}}class tl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Pt.RED,this.left=s??Pt.EMPTY,this.right=i??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mg(this.data.getIterator())}getIteratorFrom(e){return new mg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Et(this.comparator);return n.data=e,n}}class mg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new Nn([])}unionWith(e){let n=new Et(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new x0("Invalid base64 string: "+i):i}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const OC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function as(t){if(Xe(!!t,39018),typeof t=="string"){let e=0;const n=OC.exec(t);if(Xe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ls(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="server_timestamp",O0="__type__",D0="__previous_value__",N0="__local_write_time__";function dd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[O0])===null||n===void 0?void 0:n.stringValue)===k0}function Fc(t){const e=t.mapValue.fields[D0];return dd(e)?Fc(e):e}function ta(t){const e=as(t.mapValue.fields[N0].timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}const Jl="(default)";class na{constructor(e,n){this.projectId=e,this.database=n||Jl}static empty(){return new na("","")}get isDefaultDatabase(){return this.database===Jl}isEqual(e){return e instanceof na&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="__type__",NC="__max__",nl={mapValue:{}},M0="__vector__",Zl="value";function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dd(t)?4:MC(t)?9007199254740991:VC(t)?10:11:Ee(28295,{value:t})}function sr(t,e){if(t===e)return!0;const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=as(s.timestampValue),a=as(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ls(s.bytesValue).isEqual(ls(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ht(s.geoPointValue.latitude)===ht(i.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ht(s.integerValue)===ht(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ht(s.doubleValue),a=ht(i.doubleValue);return o===a?Xl(o)===Xl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(pg(o)!==pg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!sr(o[c],a[c])))return!1;return!0}(t,e);default:return Ee(52216,{left:t})}}function ra(t,e){return(t.values||[]).find(n=>sr(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=cs(t),r=cs(e);if(n!==r)return Me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ht(i.integerValue||i.doubleValue),c=ht(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return gg(t.timestampValue,e.timestampValue);case 4:return gg(ta(t),ta(e));case 5:return Ff(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ls(i),c=ls(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const f=Me(a[u],c[u]);if(f!==0)return f}return Me(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Me(ht(i.latitude),ht(o.latitude));return a!==0?a:Me(ht(i.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,f;const d=i.fields||{},m=o.fields||{},g=(a=d[Zl])===null||a===void 0?void 0:a.arrayValue,E=(c=m[Zl])===null||c===void 0?void 0:c.arrayValue,C=Me(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((f=E==null?void 0:E.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:yg(g,E)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===nl.mapValue&&o===nl.mapValue)return 0;if(i===nl.mapValue)return 1;if(o===nl.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const m=Ff(c[d],f[d]);if(m!==0)return m;const g=ki(a[c[d]],u[f[d]]);if(g!==0)return g}return Me(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Ee(23264,{Pe:n})}}function gg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Me(t,e);const n=as(t),r=as(e),s=Me(n.seconds,r.seconds);return s!==0?s:Me(n.nanos,r.nanos)}function yg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ki(n[s],r[s]);if(i)return i}return Me(n.length,r.length)}function Oi(t){return Uf(t)}function Uf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=as(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ls(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ye.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Uf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Uf(n.fields[o])}`;return s+"}"}(t.mapValue):Ee(61005,{value:t})}function bl(t){switch(cs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fc(t);return e?16+bl(e):16;case 5:return 2*t.stringValue.length;case 6:return ls(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+bl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ks(r.fields,(i,o)=>{s+=i.length+bl(o)}),s}(t.mapValue);default:throw Ee(13486,{value:t})}}function _g(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $f(t){return!!t&&"integerValue"in t}function pd(t){return!!t&&"arrayValue"in t}function vg(t){return!!t&&"nullValue"in t}function bg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wl(t){return!!t&&"mapValue"in t}function VC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[V0])===null||n===void 0?void 0:n.stringValue)===M0}function Do(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Do(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===NC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(n)}setAll(e){let n=xt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Do(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ks(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Sn(Do(this.value))}}function L0(t){const e=[];return Ks(t.fields,(n,r)=>{const s=new xt([n]);if(wl(r)){const i=L0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,Pe.min(),Pe.min(),Pe.min(),Sn.empty(),0)}static newFoundDocument(e,n,r,s){return new jt(e,1,n,Pe.min(),r,s,0)}static newNoDocument(e,n){return new jt(e,2,n,Pe.min(),Pe.min(),Sn.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,Pe.min(),Pe.min(),Sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.position=e,this.inclusive=n}}function wg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ye.comparator(ye.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Eg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n="asc"){this.field=e,this.dir=n}}function LC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{}class _t extends F0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UC(e,n,r):n==="array-contains"?new jC(e,r):n==="in"?new zC(e,r):n==="not-in"?new HC(e,r):n==="array-contains-any"?new qC(e,r):new _t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $C(e,r):new BC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ki(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends F0{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Un(e,n)}matches(e){return U0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function U0(t){return t.op==="and"}function $0(t){return FC(t)&&U0(t)}function FC(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function Bf(t){if(t instanceof _t)return t.field.canonicalString()+t.op.toString()+Oi(t.value);if($0(t))return t.filters.map(e=>Bf(e)).join(",");{const e=t.filters.map(n=>Bf(n)).join(",");return`${t.op}(${e})`}}function B0(t,e){return t instanceof _t?function(r,s){return s instanceof _t&&r.op===s.op&&r.field.isEqual(s.field)&&sr(r.value,s.value)}(t,e):t instanceof Un?function(r,s){return s instanceof Un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&B0(o,s.filters[a]),!0):!1}(t,e):void Ee(19439)}function j0(t){return t instanceof _t?function(n){return`${n.field.canonicalString()} ${n.op} ${Oi(n.value)}`}(t):t instanceof Un?function(n){return n.op.toString()+" {"+n.getFilters().map(j0).join(" ,")+"}"}(t):"Filter"}class UC extends _t{constructor(e,n,r){super(e,n,r),this.key=ye.fromName(r.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.matchesComparison(n)}}class $C extends _t{constructor(e,n){super(e,"in",n),this.keys=z0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BC extends _t{constructor(e,n){super(e,"not-in",n),this.keys=z0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ye.fromName(r.referenceValue))}class jC extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pd(n)&&ra(n.arrayValue,this.value)}}class zC extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ra(this.value.arrayValue,n)}}class HC extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ra(this.value.arrayValue,n)}}class qC extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ra(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Ie=null}}function Tg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new WC(t,e,n,r,s,i,o)}function md(t){const e=ke(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oi(r)).join(",")),e.Ie=n}return e.Ie}function gd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Eg(t.startAt,e.startAt)&&Eg(t.endAt,e.endAt)}function jf(t){return ye.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function KC(t,e,n,r,s,i,o,a){return new wa(t,e,n,r,s,i,o,a)}function yd(t){return new wa(t)}function Ig(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function H0(t){return t.collectionGroup!==null}function No(t){const e=ke(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Et(xt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new tc(i,r))}),n.has(xt.keyField().canonicalString())||e.Ee.push(new tc(xt.keyField(),r))}return e.Ee}function Zn(t){const e=ke(t);return e.de||(e.de=GC(e,No(t))),e.de}function GC(t,e){if(t.limitType==="F")return Tg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new tc(s.field,i)});const n=t.endAt?new ec(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ec(t.startAt.position,t.startAt.inclusive):null;return Tg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zf(t,e){const n=t.filters.concat([e]);return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hf(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return gd(Zn(t),Zn(e))&&t.limitType===e.limitType}function q0(t){return`${md(Zn(t))}|lt:${t.limitType}`}function oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>j0(s)).join(", ")}]`),Lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Oi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Oi(s)).join(",")),`Target(${r})`}(Zn(t))}; limitType=${t.limitType})`}function $c(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ye.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of No(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=wg(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,No(r),s)||r.endAt&&!function(o,a,c){const u=wg(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,No(r),s))}(t,e)}function YC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function W0(t){return(e,n)=>{let r=!1;for(const s of No(t)){const i=QC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QC(t,e,n){const r=t.field.isKeyField()?ye.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?ki(c,u):Ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ks(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return P0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=new ct(ye.comparator);function Ir(){return XC}const K0=new ct(ye.comparator);function vo(...t){let e=K0;for(const n of t)e=e.insert(n.key,n);return e}function G0(t){let e=K0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Os(){return Vo()}function Y0(){return Vo()}function Vo(){return new Gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const JC=new ct(ye.comparator),ZC=new Et(ye.comparator);function Ue(...t){let e=ZC;for(const n of t)e=e.add(n);return e}const eP=new Et(Me);function tP(){return eP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function Q0(t){return{integerValue:""+t}}function nP(t,e){return PC(e)?Q0(e):_d(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this._=void 0}}function rP(t,e,n){return t instanceof nc?function(s,i){const o={fields:{[O0]:{stringValue:k0},[N0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&dd(i)&&(i=Fc(i)),i&&(o.fields[D0]=i),{mapValue:o}}(n,e):t instanceof sa?J0(t,e):t instanceof ia?Z0(t,e):function(s,i){const o=X0(s,i),a=Ag(o)+Ag(s.Re);return $f(o)&&$f(s.Re)?Q0(a):_d(s.serializer,a)}(t,e)}function sP(t,e,n){return t instanceof sa?J0(t,e):t instanceof ia?Z0(t,e):n}function X0(t,e){return t instanceof rc?function(r){return $f(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class nc extends Bc{}class sa extends Bc{constructor(e){super(),this.elements=e}}function J0(t,e){const n=eb(e);for(const r of t.elements)n.some(s=>sr(s,r))||n.push(r);return{arrayValue:{values:n}}}class ia extends Bc{constructor(e){super(),this.elements=e}}function Z0(t,e){let n=eb(e);for(const r of t.elements)n=n.filter(s=>!sr(s,r));return{arrayValue:{values:n}}}class rc extends Bc{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Ag(t){return ht(t.integerValue||t.doubleValue)}function eb(t){return pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof sa&&s instanceof sa||r instanceof ia&&s instanceof ia?xi(r.elements,s.elements,sr):r instanceof rc&&s instanceof rc?sr(r.Re,s.Re):r instanceof nc&&s instanceof nc}(t.transform,e.transform)}class oP{constructor(e,n){this.version=e,this.transformResults=n}}class vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function El(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function tb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rb(t.key,vr.none()):new Ea(t.key,t.data,vr.none());{const n=t.data,r=Sn.empty();let s=new Et(xt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ys(t.key,r,new Nn(s.toArray()),vr.none())}}function aP(t,e,n){t instanceof Ea?function(s,i,o){const a=s.value.clone(),c=Rg(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ys?function(s,i,o){if(!El(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Rg(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(nb(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Mo(t,e,n,r){return t instanceof Ea?function(i,o,a,c){if(!El(i.precondition,o))return a;const u=i.value.clone(),f=Cg(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ys?function(i,o,a,c){if(!El(i.precondition,o))return a;const u=Cg(i.fieldTransforms,c,o),f=o.data;return f.setAll(nb(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return El(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=X0(r.transform,s||null);i!=null&&(n===null&&(n=Sn.empty()),n.set(r.field,i))}return n||null}function Sg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xi(r,s,(i,o)=>iP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ea extends jc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ys extends jc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rg(t,e,n){const r=new Map;Xe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,sP(o,a,n[s]))}return r}function Cg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rP(i,o,e))}return r}class rb extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cP extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Mo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Mo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Y0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=tb(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ue())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>Sg(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>Sg(n,r))}}class vd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Xe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return JC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vd(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,je;function dP(t){switch(t){case H.OK:return Ee(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return Ee(15467,{code:t})}}function sb(t){if(t===void 0)return Tr("GRPC error has no .code"),H.UNKNOWN;switch(t){case pt.OK:return H.OK;case pt.CANCELLED:return H.CANCELLED;case pt.UNKNOWN:return H.UNKNOWN;case pt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case pt.INTERNAL:return H.INTERNAL;case pt.UNAVAILABLE:return H.UNAVAILABLE;case pt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case pt.NOT_FOUND:return H.NOT_FOUND;case pt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case pt.ABORTED:return H.ABORTED;case pt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case pt.DATA_LOSS:return H.DATA_LOSS;default:return Ee(39323,{code:t})}}(je=pt||(pt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=new ts([4294967295,4294967295],0);function Pg(t){const e=S0().encode(t),n=new _0;return n.update(e),new Uint8Array(n.digest())}function xg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ts([n,r],0),new ts([s,i],0)]}class bd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new bo(`Invalid padding: ${n}`);if(r<0)throw new bo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new bo(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=ts.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(ts.fromNumber(r)));return s.compare(pP)===1&&(s=new ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Pg(e),[r,s]=xg(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.pe===0)return;const n=Pg(e),[r,s]=xg(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class bo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zc(Pe.min(),s,new ct(Me),Ir(),Ue())}}class Ta{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ta(r,n,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class ib{constructor(e,n){this.targetId=e,this.Ce=n}}class ob{constructor(e,n,r=Ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kg{constructor(){this.Fe=0,this.Me=Og(),this.xe=Ot.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ue(),n=Ue(),r=Ue();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Ee(38017,{changeType:i})}}),new Ta(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Og()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Xe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class mP{constructor(e){this.ze=e,this.je=new Map,this.He=Ir(),this.Je=rl(),this.Ye=rl(),this.Ze=new ct(Me)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:Ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(jf(i))if(r===0){const o=new ye(i.path);this.tt(n,o,jt.newNoDocument(o,Pe.min()))}else Xe(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const a=this.ct(e),c=a?this.lt(a,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ls(r).toUint8Array()}catch(c){if(c instanceof x0)return Pi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new bd(o,s,i)}catch(c){return Pi(c instanceof bo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.pe===0?null:a}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const a=this._t(o);if(a){if(i.current&&jf(a.target)){const c=new ye(a.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,jt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Ue();this.Ye.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new zc(e,n,this.Ze,this.He,r);return this.He=Ir(),this.Je=rl(),this.Ye=rl(),this.Ze=new ct(Me),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new kg,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new Et(Me),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Et(Me),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new kg),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function rl(){return new ct(ye.comparator)}function Og(){return new ct(ye.comparator)}const gP={asc:"ASCENDING",desc:"DESCENDING"},yP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_P={and:"AND",or:"OR"};class vP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qf(t,e){return t.useProto3Json||Lc(e)?e:{value:e}}function sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ab(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bP(t,e){return sc(t,e.toTimestamp())}function er(t){return Xe(!!t,49232),Pe.fromTimestamp(function(n){const r=as(n);return new wt(r.seconds,r.nanos)}(t))}function wd(t,e){return Wf(t,e).canonicalString()}function Wf(t,e){const n=function(s){return new st(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lb(t){const e=st.fromString(t);return Xe(db(e),10190,{key:e.toString()}),e}function Kf(t,e){return wd(t.databaseId,e.path)}function Hu(t,e){const n=lb(e);if(n.get(1)!==t.databaseId.projectId)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(ub(n))}function cb(t,e){return wd(t.databaseId,e)}function wP(t){const e=lb(t);return e.length===4?st.emptyPath():ub(e)}function Gf(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ub(t){return Xe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Dg(t,e,n){return{name:Kf(t,e),fields:n.value.mapValue.fields}}function EP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ee(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Xe(f===void 0||typeof f=="string",58123),Ot.fromBase64String(f||"")):(Xe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?H.UNKNOWN:sb(u.code);return new fe(f,u.message||"")}(o);n=new ob(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hu(t,r.document.name),i=er(r.document.updateTime),o=r.document.createTime?er(r.document.createTime):Pe.min(),a=new Sn({mapValue:{fields:r.document.fields}}),c=jt.newFoundDocument(s,i,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Tl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hu(t,r.document),i=r.readTime?er(r.readTime):Pe.min(),o=jt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Tl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hu(t,r.document),i=r.removedTargetIds||[];n=new Tl([],i,s,null)}else{if(!("filter"in e))return Ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new hP(s,i),a=r.targetId;n=new ib(a,o)}}return n}function TP(t,e){let n;if(e instanceof Ea)n={update:Dg(t,e.key,e.value)};else if(e instanceof rb)n={delete:Kf(t,e.key)};else if(e instanceof Ys)n={update:Dg(t,e.key,e.data),updateMask:OP(e.fieldMask)};else{if(!(e instanceof cP))return Ee(16599,{ft:e.type});n={verify:Kf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof nc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rc)return{fieldPath:o.field.canonicalString(),increment:a.Re};throw Ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ee(27497)}(t,e.precondition)),n}function IP(t,e){return t&&t.length>0?(Xe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?er(s.updateTime):er(i);return o.isEqual(Pe.min())&&(o=er(i)),new oP(o,s.transformResults||[])}(n,e))):[]}function AP(t,e){return{documents:[cb(t,e.path)]}}function SP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cb(t,s);const i=function(u){if(u.length!==0)return hb(Un.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:ai(m.field),direction:PP(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=qf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function RP(t){let e=wP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Xe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const m=fb(d);return m instanceof Un&&$0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(E){return new tc(li(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,Lc(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,g=d.values||[];return new ec(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new ec(g,m)}(n.endAt)),KC(e,s,o,i,a,"F",c,u)}function CP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=li(n.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=li(n.unaryFilter.field);return _t.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=li(n.unaryFilter.field);return _t.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=li(n.unaryFilter.field);return _t.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return _t.create(li(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Un.create(n.compositeFilter.filters.map(r=>fb(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}}(n.compositeFilter.op))}(t):Ee(30097,{filter:t})}function PP(t){return gP[t]}function xP(t){return yP[t]}function kP(t){return _P[t]}function ai(t){return{fieldPath:t.canonicalString()}}function li(t){return xt.fromServerFormat(t.fieldPath)}function hb(t){return t instanceof _t?function(n){if(n.op==="=="){if(bg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NAN"}};if(vg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NAN"}};if(vg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(n.field),op:xP(n.op),value:n.value}}}(t):t instanceof Un?function(n){const r=n.getFilters().map(s=>hb(s));return r.length===1?r[0]:{compositeFilter:{op:kP(n.op),filters:r}}}(t):Ee(54877,{filter:t})}function OP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function db(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r,s,i=Pe.min(),o=Pe.min(),a=Ot.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.wt=e}}function NP(t){const e=RP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.yn=new MP}addToCollectionParentIndex(e,n){return this.yn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(os.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(os.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class MP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Et(st.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Et(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pb=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(pb,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Di(0)}static ir(){return new Di(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="LruGarbageCollector",LP=1048576;function Mg([t,e],[n,r]){const s=Me(t,n);return s===0?Me(e,r):s}class FP{constructor(e){this.cr=e,this.buffer=new Et(Mg),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Mg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){ce(Vg,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Wi(n)?ce(Vg,"Ignoring IndexedDB error during garbage collection: ",n):await qi(n)}await this.Ir(3e5)})}}class $P{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return z.resolve(Mc.le);const r=new FP(n);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Ng)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ng):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,s,i,o,a,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),ii()<=Fe.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function BP(t,e){return new $P(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(){this.changes=new Gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Mo(r.mutation,s,Nn.empty(),wt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ue()){const s=Os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=vo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Ir();const o=Vo(),a=function(){return Vo()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Ys)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Mo(f.mutation,u,f.mutation.getFieldMask(),wt.now())):o.set(u.key,Nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var d;return a.set(u,new zP(f,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Vo();let s=new ct((o,a)=>o-a),i=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Nn.empty();f=a.applyToLocalView(u,f),r.set(c,f);const d=(s.get(a.batchId)||Ue()).add(c);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,f=c.value,d=Y0();f.forEach(m=>{if(!i.has(m)){const g=tb(n.get(m),r.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ye.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):H0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(Os());let a=ea,c=i;return o.next(u=>z.forEach(u,(f,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(f)?z.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ue())).next(f=>({batchId:a,changes:G0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(r=>{let s=vo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=vo();return this.indexManager.getCollectionParents(e,i).next(a=>z.forEach(a,c=>{const u=function(d,m){return new wa(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,jt.newInvalidDocument(f)))});let a=vo();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Mo(f.mutation,u,Nn.empty(),wt.now()),$c(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return z.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:er(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(s){return{name:s.name,query:NP(s.bundledQuery),readTime:er(s.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this.overlays=new ct(ye.comparator),this.Or=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Os();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=Os(),i=n.length+1,o=new ye(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ct((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Os(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=Os(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=s)););return z.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fP(n,r));let i=this.Or.get(n);i===void 0&&(i=Ue(),this.Or.set(n,i)),this.Or.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.Nr=new Et(Tt.Br),this.Lr=new Et(Tt.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new Tt(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new Tt(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new ye(new st([])),r=new Tt(n,e),s=new Tt(n,e+1),i=[];return this.Lr.forEachInRange([r,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new ye(new st([])),r=new Tt(n,e),s=new Tt(n,e+1);let i=Ue();return this.Lr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Tt(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Tt{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return ye.comparator(e.key,n.key)||Me(e.Gr,n.Gr)}static kr(e,n){return Me(e.Gr,n.Gr)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new Et(Tt.Br)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uP(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.zr=this.zr.add(new Tt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Hr(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?hd:this.Jn-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Tt(n,0),s=new Tt(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],o=>{const a=this.jr(o.Gr);i.push(a)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Et(Me);return n.forEach(s=>{const i=new Tt(s,0),o=new Tt(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],a=>{r=r.add(a.Gr)})}),z.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ye.isDocumentKey(i)||(i=i.child(""));const o=new Tt(new ye(i),0);let a=new Et(Me);return this.zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Gr)),!0)},o),z.resolve(this.Jr(a))}Jr(e){const n=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Xe(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return z.forEach(n.mutations,s=>{const i=new Tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new Tt(n,0),s=this.zr.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.Zr=e,this.docs=function(){return new ct(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Ir();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ir();const o=n.path,a=new ye(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AC(IC(f),r)<=0||(s.has(f.key)||$c(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Ee(9500)}Xr(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QP(this)}getSize(e){return z.resolve(this.size)}}class QP extends jP{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.persistence=e,this.ei=new Gs(n=>md(n),gd),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.ti=0,this.ni=new Ed,this.targetCount=0,this.ri=Di.rr()}forEachTarget(e,n){return this.ei.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),z.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new Di(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.ar(n),z.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ei.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.ni.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n){this.ii={},this.overlays={},this.si=new Mc(0),this.oi=!1,this.oi=!0,this._i=new KP,this.referenceDelegate=e(this),this.ai=new XP(this),this.indexManager=new VP,this.remoteDocumentCache=function(s){return new YP(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new DP(n),this.ci=new qP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new GP(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){ce("MemoryPersistence","Starting transaction:",e);const s=new JP(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,n){return z.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class JP extends RC{constructor(e){super(),this.currentSequenceNumber=e}}class Td{constructor(e){this.persistence=e,this.Ti=new Ed,this.Ii=null}static Ei(e){return new Td(e)}get di(){if(this.Ii)return this.Ii;throw Ee(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.di,r=>{const s=ye.fromPath(r);return this.Ai(e,s).next(i=>{i||n.removeEntry(s,Pe.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return z.or([()=>z.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class ic{constructor(e,n){this.persistence=e,this.Ri=new Gs(r=>xC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=BP(this,n)}static Ei(e,n){return new ic(e,n)}li(){}hi(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return z.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?z.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,Pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),z.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bl(e.data.value)),n}gr(e,n,r){return z.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.Ri.get(n);return z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=s}static Ps(e,n){let r=Ue(),s=Ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Id(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return G1()?8:CC(Gt())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ZP;return this.fs(e,n,o).next(a=>{if(i.result=a,this.Is)return this.gs(e,n,o,a.size)})}).next(()=>i.result)}gs(e,n,r,s){return r.documentReadCount<this.Es?(ii()<=Fe.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),z.resolve()):(ii()<=Fe.DEBUG&&ce("QueryEngine","Query:",oi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ii()<=Fe.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(n))):z.resolve())}Rs(e,n){if(Ig(n))return z.resolve(null);let r=Zn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hf(n,null,"F"),r=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ue(...i);return this.As.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ps(n,a);return this.ys(n,u,o,c.readTime)?this.Rs(e,Hf(n,null,"F")):this.ws(e,u,n,c)}))})))}Vs(e,n,r,s){return Ig(n)||s.isEqual(Pe.min())?z.resolve(null):this.As.getDocuments(e,r).next(i=>{const o=this.ps(n,i);return this.ys(n,o,r,s)?z.resolve(null):(ii()<=Fe.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),oi(n)),this.ws(e,o,n,TC(s,ea)).next(a=>a))})}ps(e,n){let r=new Et(W0(e));return n.forEach((s,i)=>{$c(e,i)&&(r=r.add(i))}),r}ys(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,n,r){return ii()<=Fe.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",oi(n)),this.As.getDocumentsMatchingQuery(e,n,os.min(),r)}ws(e,n,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="LocalStore",tx=3e8;class nx{constructor(e,n,r,s){this.persistence=e,this.bs=n,this.serializer=s,this.Ss=new ct(Me),this.Ds=new Gs(i=>md(i),gd),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HP(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function rx(t,e,n,r){return new nx(t,e,n,r)}async function gb(t,e){const n=ke(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Ue();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ms:u,removedBatchIds:o,addedBatchIds:a}))})})}function sx(t,e){const n=ke(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,f){const d=u.batch,m=d.keys();let g=z.resolve();return m.forEach(E=>{g=g.next(()=>f.getEntry(c,E)).next(C=>{const P=u.docVersions.get(E);Xe(P!==null,48541),C.version.compareTo(P)<0&&(d.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),f.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ue();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function yb(t){const e=ke(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function ix(t,e){const n=ke(t),r=e.snapshotVersion;let s=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});s=n.Ss;const a=[];e.targetChanges.forEach((f,d)=>{const m=s.get(d);if(!m)return;a.push(n.ai.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.ai.addMatchingKeys(i,f.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Ot.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),s=s.insert(d,g),function(C,P,k){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=tx?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,g,f)&&a.push(n.ai.updateTargetData(i,g))});let c=Ir(),u=Ue();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(ox(i,o,e.documentUpdates).next(f=>{c=f.xs,u=f.Os})),!r.isEqual(Pe.min())){const f=n.ai.getLastRemoteSnapshotVersion(i).next(d=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return z.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ss=s,i))}function ox(t,e,n){let r=Ue(),s=Ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ir();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Pe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ce(Ad,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{xs:o,Os:s}})}function ax(t,e){const n=ke(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=hd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lx(t,e){const n=ke(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ai.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.ai.allocateTargetId(r).next(o=>(s=new Gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function Yf(t,e,n){const r=ke(t),s=r.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wi(o))throw o;ce(Ad,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function Lg(t,e,n){const r=ke(t);let s=Pe.min(),i=Ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const d=ke(c),m=d.Ds.get(f);return m!==void 0?z.resolve(d.Ss.get(m)):d.ai.getTargetData(u,f)}(r,o,Zn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,n?s:Pe.min(),n?i:Ue())).next(a=>(cx(r,YC(e),a),{documents:a,Ns:i})))}function cx(t,e,n){let r=t.vs.get(e)||Pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.vs.set(e,r)}class Fg{constructor(){this.activeTargetIds=tP()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ux{constructor(){this.So=new Fg,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="ConnectivityMonitor";class $g{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){ce(Ug,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){ce(Ug,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl=null;function Qf(){return sl===null?sl=function(){return 268435456+Math.round(2147483648*Math.random())}():sl++,"0x"+sl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="RestConnection",hx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dx{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===Jl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,n,r,s,i){const o=Qf(),a=this.$o(e,n.toUriEncodedString());ce(qu,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(c,s,i),this.Ko(e,a,c,r).then(u=>(ce(qu,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Pi(qu,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Wo(e,n,r,s,i,o){return this.Qo(e,n,r,s,i)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,n){const r=hx[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class mx extends dx{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,s){const i=Qf();return new Promise((o,a)=>{const c=new v0;c.setWithCredentials(!0),c.listenOnce(b0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case vl.NO_ERROR:const f=c.getResponseJson();ce(Lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case vl.TIMEOUT:ce(Lt,`RPC '${e}' ${i} timed out`),a(new fe(H.DEADLINE_EXCEEDED,"Request time out"));break;case vl.HTTP_ERROR:const d=c.getStatus();if(ce(Lt,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const E=function(P){const k=P.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(k)>=0?k:H.UNKNOWN}(g.status);a(new fe(E,g.message))}else a(new fe(H.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new fe(H.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{s_:e,streamId:i,o_:c.getLastErrorCode(),__:c.getLastError()})}}finally{ce(Lt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ce(Lt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}a_(e,n,r){const s=Qf(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=T0(),a=E0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ce(Lt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const d=o.createWebChannel(f,c);let m=!1,g=!1;const E=new px({Go:P=>{g?ce(Lt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(ce(Lt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),ce(Lt,`RPC '${e}' stream ${s} sending:`,P),d.send(P))},zo:()=>d.close()}),C=(P,k,x)=>{P.listen(k,V=>{try{x(V)}catch(F){setTimeout(()=>{throw F},0)}})};return C(d,_o.EventType.OPEN,()=>{g||(ce(Lt,`RPC '${e}' stream ${s} transport opened.`),E.t_())}),C(d,_o.EventType.CLOSE,()=>{g||(g=!0,ce(Lt,`RPC '${e}' stream ${s} transport closed`),E.r_())}),C(d,_o.EventType.ERROR,P=>{g||(g=!0,Pi(Lt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),E.r_(new fe(H.UNAVAILABLE,"The operation could not be completed")))}),C(d,_o.EventType.MESSAGE,P=>{var k;if(!g){const x=P.data[0];Xe(!!x,16349);const V=x,F=(V==null?void 0:V.error)||((k=V[0])===null||k===void 0?void 0:k.error);if(F){ce(Lt,`RPC '${e}' stream ${s} received error:`,F);const Q=F.status;let se=function(v){const _=pt[v];if(_!==void 0)return sb(_)}(Q),A=F.message;se===void 0&&(se=H.INTERNAL,A="Unknown error status: "+Q+" with message "+F.message),g=!0,E.r_(new fe(se,A)),d.close()}else ce(Lt,`RPC '${e}' stream ${s} received:`,x),E.i_(x)}}),C(a,w0.STAT_EVENT,P=>{P.stat===Lf.PROXY?ce(Lt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Lf.NOPROXY&&ce(Lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.n_()},0),E}}function Wu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return new vP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,n-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="PersistentStream";class vb{constructor(e,n,r,s,i,o,a,c){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new _b(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===n&&this.B_(r,s)},r=>{e(()=>{const s=new fe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return ce(Bg,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(ce(Bg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gx extends vb{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=EP(this.serializer,e),r=function(i){if(!("targetChange"in i))return Pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Pe.min():o.readTime?er(o.readTime):Pe.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=Gf(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=jf(c)?{documents:AP(i,c)}:{query:SP(i,c).gt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ab(i,o.resumeToken);const u=qf(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Pe.min())>0){a.readTime=sc(i,o.snapshotVersion.toTimestamp());const u=qf(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=CP(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=Gf(this.serializer),n.removeTarget=e,this.F_(n)}}class yx extends vb{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=IP(e.writeResults,e.commitTime),r=er(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=Gf(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TP(this.serializer,r))};this.F_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{}class vx extends _x{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,Wf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new fe(H.UNKNOWN,i.toString())})}Wo(e,n,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,Wf(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new fe(H.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class bx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Tr(n),this.ea=!1):ce("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="RemoteStore";class wx{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{r.enqueueAndForget(async()=>{Qs(this)&&(ce(zs,"Restarting streams for network reachability change."),await async function(c){const u=ke(c);u.aa.add(4),await Ia(u),u.la.set("Unknown"),u.aa.delete(4),await qc(u)}(this))})}),this.la=new bx(r,s)}}async function qc(t){if(Qs(t))for(const e of t.ua)await e(!0)}async function Ia(t){for(const e of t.ua)await e(!1)}function bb(t,e){const n=ke(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),Pd(n)?Cd(n):Ki(n).b_()&&Rd(n,e))}function Sd(t,e){const n=ke(t),r=Ki(n);n._a.delete(e),r.b_()&&wb(n,e),n._a.size===0&&(r.b_()?r.v_():Qs(n)&&n.la.set("Unknown"))}function Rd(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ki(t).U_(e)}function wb(t,e){t.ha.Ke(e),Ki(t).K_(e)}function Cd(t){t.ha=new mP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Ki(t).start(),t.la.ta()}function Pd(t){return Qs(t)&&!Ki(t).w_()&&t._a.size>0}function Qs(t){return ke(t).aa.size===0}function Eb(t){t.ha=void 0}async function Ex(t){t.la.set("Online")}async function Tx(t){t._a.forEach((e,n)=>{Rd(t,e)})}async function Ix(t,e){Eb(t),Pd(t)?(t.la.ia(e),Cd(t)):t.la.set("Unknown")}async function Ax(t,e,n){if(t.la.set("Online"),e instanceof ob&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s._a.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s._a.delete(a),s.ha.removeTarget(a))}(t,e)}catch(r){ce(zs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oc(t,r)}else if(e instanceof Tl?t.ha.Xe(e):e instanceof ib?t.ha.ot(e):t.ha.nt(e),!n.isEqual(Pe.min()))try{const r=await yb(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.ha.It(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i._a.get(u);f&&i._a.set(u,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const f=i._a.get(c);if(!f)return;i._a.set(c,f.withResumeToken(Ot.EMPTY_BYTE_STRING,f.snapshotVersion)),wb(i,c);const d=new Gr(f.target,c,u,f.sequenceNumber);Rd(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ce(zs,"Failed to raise snapshot:",r),await oc(t,r)}}async function oc(t,e,n){if(!Wi(e))throw e;t.aa.add(1),await Ia(t),t.la.set("Offline"),n||(n=()=>yb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ce(zs,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await qc(t)})}function Tb(t,e){return e().catch(n=>oc(t,n,e))}async function Wc(t){const e=ke(t),n=us(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:hd;for(;Sx(e);)try{const s=await ax(e.localStore,r);if(s===null){e.oa.length===0&&n.v_();break}r=s.batchId,Rx(e,s)}catch(s){await oc(e,s)}Ib(e)&&Ab(e)}function Sx(t){return Qs(t)&&t.oa.length<10}function Rx(t,e){t.oa.push(e);const n=us(t);n.b_()&&n.W_&&n.G_(e.mutations)}function Ib(t){return Qs(t)&&!us(t).w_()&&t.oa.length>0}function Ab(t){us(t).start()}async function Cx(t){us(t).H_()}async function Px(t){const e=us(t);for(const n of t.oa)e.G_(n.mutations)}async function xx(t,e,n){const r=t.oa.shift(),s=vd.from(r,e,n);await Tb(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wc(t)}async function kx(t,e){e&&us(t).W_&&await async function(r,s){if(function(o){return dP(o)&&o!==H.ABORTED}(s.code)){const i=r.oa.shift();us(r).D_(),await Tb(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wc(r)}}(t,e),Ib(t)&&Ab(t)}async function jg(t,e){const n=ke(t);n.asyncQueue.verifyOperationInProgress(),ce(zs,"RemoteStore received new credentials");const r=Qs(n);n.aa.add(3),await Ia(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await qc(n)}async function Ox(t,e){const n=ke(t);e?(n.aa.delete(2),await qc(n)):e||(n.aa.add(2),await Ia(n),n.la.set("Unknown"))}function Ki(t){return t.Pa||(t.Pa=function(n,r,s){const i=ke(n);return i.Y_(),new gx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:Ex.bind(null,t),Jo:Tx.bind(null,t),Zo:Ix.bind(null,t),Q_:Ax.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),Pd(t)?Cd(t):t.la.set("Unknown")):(await t.Pa.stop(),Eb(t))})),t.Pa}function us(t){return t.Ta||(t.Ta=function(n,r,s){const i=ke(n);return i.Y_(),new yx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:Cx.bind(null,t),Zo:kx.bind(null,t),z_:Px.bind(null,t),j_:xx.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await Wc(t)):(await t.Ta.stop(),t.oa.length>0&&(ce(zs,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new xd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kd(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),Wi(t))return new fe(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{static emptySet(e){return new Ii(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ye.comparator(n.key,r.key):(n,r)=>ye.comparator(n.key,r.key),this.keyedMap=vo(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.Ia=new ct(ye.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):Ee(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ni{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ni(e,n,Ii.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class Nx{constructor(){this.queries=Hg(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const s=ke(n),i=s.queries;s.queries=Hg(),i.forEach((o,a)=>{for(const c of a.Ra)c.onError(r)})})(this,new fe(H.ABORTED,"Firestore shutting down"))}}function Hg(){return new Gs(t=>q0(t),Uc)}async function Sb(t,e){const n=ke(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new Dx,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await n.onListen(s,!0);break;case 1:i.Aa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=kd(o,`Initialization of query '${oi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&Od(n)}async function Rb(t,e){const n=ke(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Vx(t,e){const n=ke(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Ra)a.pa(s)&&(r=!0);o.Aa=s}}r&&Od(n)}function Mx(t,e,n){const r=ke(t),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(n);r.queries.delete(e)}function Od(t){t.fa.forEach(e=>{e.next()})}var Xf,qg;(qg=Xf||(Xf={})).ya="default",qg.Cache="cache";class Cb{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ni(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=Ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Xf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.key=e}}class xb{constructor(e){this.key=e}}class Lx{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Ue(),this.mutatedKeys=Ue(),this.Ua=W0(e),this.Ka=new Ii(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new zg,s=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const m=s.get(f),g=$c(this.query,d)?d:null,E=!!m&&this.mutatedKeys.has(m.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;m&&g?m.data.isEqual(g.data)?E!==C&&(r.track({type:3,doc:g}),P=!0):this.ja(m,g)||(r.track({type:2,doc:g}),P=!0,(c&&this.Ua(g,c)>0||u&&this.Ua(g,u)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),P=!0):m&&!g&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(a=!0)),P&&(g?(o=o.add(g),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ka:o,za:r,ys:a,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((f,d)=>function(g,E){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Vt:P})}};return C(g)-C(E)}(f.type,d.type)||this.Ua(f.doc,d.doc)),this.Ha(r),s=s!=null&&s;const a=n&&!s?this.Ja():[],c=this.$a.size===0&&this.current&&!s?1:0,u=c!==this.Qa;return this.Qa=c,o.length!==0||u?{snapshot:new Ni(this.query,e.Ka,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:a}:{Ya:a}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new zg,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Ue(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new xb(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new Pb(r))}),n}Xa(e){this.qa=e.Ns,this.$a=Ue();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return Ni.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Dd="SyncEngine";class Fx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ux{constructor(e){this.key=e,this.tu=!1}}class $x{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Gs(a=>q0(a),Uc),this.iu=new Map,this.su=new Set,this.ou=new ct(ye.comparator),this._u=new Map,this.au=new Ed,this.uu={},this.cu=new Map,this.lu=Di.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function Bx(t,e,n=!0){const r=Mb(t);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await kb(r,e,n,!0),s}async function jx(t,e){const n=Mb(t);await kb(n,e,!0,!1)}async function kb(t,e,n,r){const s=await lx(t.localStore,Zn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await zx(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&bb(t.remoteStore,s),a}async function zx(t,e,n,r,s){t.Pu=(d,m,g)=>async function(C,P,k,x){let V=P.view.Ga(k);V.ys&&(V=await Lg(C.localStore,P.query,!1).then(({documents:A})=>P.view.Ga(A,V)));const F=x&&x.targetChanges.get(P.targetId),Q=x&&x.targetMismatches.get(P.targetId)!=null,se=P.view.applyChanges(V,C.isPrimaryClient,F,Q);return Kg(C,P.targetId,se.Ya),se.snapshot}(t,d,m,g);const i=await Lg(t.localStore,e,!0),o=new Lx(e,i.Ns),a=o.Ga(i.documents),c=Ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);Kg(t,n,u.Ya);const f=new Fx(e,n,o);return t.ru.set(e,f),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),u.snapshot}async function Hx(t,e,n){const r=ke(t),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(o=>!Uc(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Sd(r.remoteStore,s.targetId),Jf(r,s.targetId)}).catch(qi)):(Jf(r,s.targetId),await Yf(r.localStore,s.targetId,!0))}async function qx(t,e){const n=ke(t),r=n.ru.get(e),s=n.iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sd(n.remoteStore,r.targetId))}async function Wx(t,e,n){const r=Zx(t);try{const s=await function(o,a){const c=ke(o),u=wt.now(),f=a.reduce((g,E)=>g.add(E.key),Ue());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let E=Ir(),C=Ue();return c.Cs.getEntries(g,f).next(P=>{E=P,E.forEach((k,x)=>{x.isValidDocument()||(C=C.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,E)).next(P=>{d=P;const k=[];for(const x of a){const V=lP(x,d.get(x.key).overlayedDocument);V!=null&&k.push(new Ys(x.key,V,L0(V.value.mapValue),vr.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,k,a)}).next(P=>{m=P;const k=P.applyToLocalDocumentSet(d,C);return c.documentOverlayCache.saveOverlays(g,P.batchId,k)})}).then(()=>({batchId:m.batchId,changes:G0(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.uu[o.currentUser.toKey()];u||(u=new ct(Me)),u=u.insert(a,c),o.uu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Aa(r,s.changes),await Wc(r.remoteStore)}catch(s){const i=kd(s,"Failed to persist write");n.reject(i)}}async function Ob(t,e){const n=ke(t);try{const r=await ix(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n._u.get(i);o&&(Xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?Xe(o.tu,14607):s.removedDocuments.size>0&&(Xe(o.tu,42227),o.tu=!1))}),await Aa(n,r,e)}catch(r){await qi(r)}}function Wg(t,e,n){const r=ke(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ru.forEach((i,o)=>{const a=o.view.ga(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ke(o);c.onlineState=a;let u=!1;c.queries.forEach((f,d)=>{for(const m of d.Ra)m.ga(a)&&(u=!0)}),u&&Od(c)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Kx(t,e,n){const r=ke(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r._u.get(e),i=s&&s.key;if(i){let o=new ct(ye.comparator);o=o.insert(i,jt.newNoDocument(i,Pe.min()));const a=Ue().add(i),c=new zc(Pe.min(),new Map,new ct(Me),o,a);await Ob(r,c),r.ou=r.ou.remove(i),r._u.delete(e),Nd(r)}else await Yf(r.localStore,e,!1).then(()=>Jf(r,e,n)).catch(qi)}async function Gx(t,e){const n=ke(t),r=e.batch.batchId;try{const s=await sx(n.localStore,e);Nb(n,r,null),Db(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Aa(n,s)}catch(s){await qi(s)}}async function Yx(t,e,n){const r=ke(t);try{const s=await function(o,a){const c=ke(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(Xe(d!==null,37113),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Nb(r,e,n),Db(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Aa(r,s)}catch(s){await qi(s)}}function Db(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function Nb(t,e,n){const r=ke(t);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function Jf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||Vb(t,r)})}function Vb(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(Sd(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),Nd(t))}function Kg(t,e,n){for(const r of n)r instanceof Pb?(t.au.addReference(r.key,e),Qx(t,r)):r instanceof xb?(ce(Dd,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||Vb(t,r.key)):Ee(19791,{Iu:r})}function Qx(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(ce(Dd,"New document in limbo: "+n),t.su.add(r),Nd(t))}function Nd(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new ye(st.fromString(e)),r=t.lu.next();t._u.set(r,new Ux(n)),t.ou=t.ou.insert(n,r),bb(t.remoteStore,new Gr(Zn(yd(n.path)),r,"TargetPurposeLimboResolution",Mc.le))}}async function Aa(t,e,n){const r=ke(t),s=[],i=[],o=[];r.ru.isEmpty()||(r.ru.forEach((a,c)=>{o.push(r.Pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Id.Ps(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.nu.Q_(s),await async function(c,u){const f=ke(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>z.forEach(u,m=>z.forEach(m.ls,g=>f.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>z.forEach(m.hs,g=>f.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!Wi(d))throw d;ce(Ad,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=f.Ss.get(m),E=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(E);f.Ss=f.Ss.insert(m,C)}}}(r.localStore,i))}async function Xx(t,e){const n=ke(t);if(!n.currentUser.isEqual(e)){ce(Dd,"User change. New user:",e.toKey());const r=await gb(n.localStore,e);n.currentUser=e,function(i,o){i.cu.forEach(a=>{a.forEach(c=>{c.reject(new fe(H.CANCELLED,o))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Aa(n,r.Ms)}}function Jx(t,e){const n=ke(t),r=n._u.get(e);if(r&&r.tu)return Ue().add(r.key);{let s=Ue();const i=n.iu.get(e);if(!i)return s;for(const o of i){const a=n.ru.get(o);s=s.unionWith(a.view.Wa)}return s}}function Mb(t){const e=ke(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ob.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kx.bind(null,e),e.nu.Q_=Vx.bind(null,e.eventManager),e.nu.Tu=Mx.bind(null,e.eventManager),e}function Zx(t){const e=ke(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yx.bind(null,e),e}class ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return rx(this.persistence,new ex,e.initialUser,this.serializer)}Ru(e){return new mb(Td.Ei,this.serializer)}Au(e){return new ux}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ac.provider={build:()=>new ac};class ek extends ac{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Xe(this.persistence.referenceDelegate instanceof ic,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new UP(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new mb(r=>ic.Ei(r,n),this.serializer)}}class Zf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xx.bind(null,this.syncEngine),await Ox(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nx}()}createDatastore(e){const n=Hc(e.databaseInfo.databaseId),r=function(i){return new mx(i)}(e.databaseInfo);return function(i,o,a,c){return new vx(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new wx(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Wg(this.syncEngine,n,0),function(){return $g.C()?new $g:new fx}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,f){const d=new $x(s,i,o,a,c,u);return f&&(d.hu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ke(s);ce(zs,"RemoteStore shutting down."),i.aa.add(5),await Ia(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zf.provider={build:()=>new Zf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="FirestoreClient";class tk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ut.UNAUTHENTICATED,this.clientId=R0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ce(fs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ce(fs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ku(t,e){t.asyncQueue.verifyOperationInProgress(),ce(fs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gb(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nk(t);ce(fs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>jg(e.remoteStore,s)),t._onlineComponents=e}async function nk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ce(fs,"Using user provided OfflineComponentProvider");try{await Ku(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await Ku(t,new ac)}}else ce(fs,"Using default OfflineComponentProvider"),await Ku(t,new ek(void 0));return t._offlineComponents}async function Fb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ce(fs,"Using user provided OnlineComponentProvider"),await Gg(t,t._uninitializedComponentsProvider._online)):(ce(fs,"Using default OnlineComponentProvider"),await Gg(t,new Zf))),t._onlineComponents}function rk(t){return Fb(t).then(e=>e.syncEngine)}async function Ub(t){const e=await Fb(t),n=e.eventManager;return n.onListen=Bx.bind(null,e.syncEngine),n.onUnlisten=Hx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qx.bind(null,e.syncEngine),n}function sk(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const f=new Lb({next:m=>{f.yu(),o.enqueueAndForget(()=>Rb(i,d));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new fe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new Cb(yd(a.path),f,{includeMetadataChanges:!0,Fa:!0});return Sb(i,d)}(await Ub(t),t.asyncQueue,e,n,r)),r.promise}function ik(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const f=new Lb({next:m=>{f.yu(),o.enqueueAndForget(()=>Rb(i,d)),m.fromCache&&c.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new Cb(a,f,{includeMetadataChanges:!0,Fa:!0});return Sb(i,d)}(await Ub(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t,e,n){if(!n)throw new fe(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ok(t,e,n,r){if(e===!0&&r===!0)throw new fe(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qg(t){if(!ye.isDocumentKey(t))throw new fe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xg(t){if(ye.isDocumentKey(t))throw new fe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ee(12329,{type:typeof t})}function Vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kc(t);throw new fe(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb="firestore.googleapis.com",Jg=!0;class Zg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jb,this.ssl=Jg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Jg;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LP)throw new fe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ok("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$b((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new fe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new fe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new fe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pC;switch(r.type){case"firstParty":return new _C(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new fe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yg.get(n);r&&(ce("ComponentProvider","Removing Datastore"),Yg.delete(n),r.terminate())}(this),Promise.resolve()}}function ak(t,e,n,r={}){var s;const i=(t=Vi(t,Gc))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;i.host!==jb&&i.host!==a&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:a,ssl:!1,emulatorOptions:r});if(!Us(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Ut.MOCK_USER;else{u=B1(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new fe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ut(d)}t._authCredentials=new mC(new A0(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gi(this.firestore,e,this._query)}}class _n{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class ns extends Gi{constructor(e,n,r){super(e,n,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new ye(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function zb(t,e,...n){if(t=Pn(t),Bb("collection","path",e),t instanceof Gc){const r=st.fromString(e,...n);return Xg(r),new ns(t,null,r)}{if(!(t instanceof _n||t instanceof ns))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return Xg(r),new ns(t.firestore,null,r)}}function Hb(t,e,...n){if(t=Pn(t),arguments.length===1&&(e=R0.newId()),Bb("doc","path",e),t instanceof Gc){const r=st.fromString(e,...n);return Qg(r),new _n(t,null,new ye(r))}{if(!(t instanceof _n||t instanceof ns))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return Qg(r),new _n(t.firestore,t instanceof ns?t.converter:null,new ye(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="AsyncQueue";class ty{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new _b(this,"async_queue_retry"),this.ju=()=>{const r=Wu();r&&ce(ey,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=Wu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new _r;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Wi(e))throw e;ce(ey,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Tr("INTERNAL UNHANDLED ERROR: ",ny(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const s=xd.createAndSchedule(this,e,n,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&Ee(47125,{ec:ny(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function ny(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Yc extends Gc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ty,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ty(e),this._firestoreClient=void 0,await e}}}function lk(t,e){const n=typeof t=="object"?t:Fv(),r=typeof t=="string"?t:Jl,s=ed(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=U1("firestore");i&&ak(s,...i)}return s}function Vd(t){if(t._terminated)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ck(t),t._firestoreClient}function ck(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,u,f){return new DC(a,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$b(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new tk(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mi(Ot.fromBase64String(e))}catch(n){throw new fe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mi(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=/^__.*__$/;class fk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ys(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}function Wb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{oc:t})}}class Ud{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Ud(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return lc(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(Wb(this.oc)&&uk.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class hk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hc(e)}dc(e,n,r,s=!1){return new Ud({oc:e,methodName:n,Ec:r,path:xt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kb(t){const e=t._freezeSettings(),n=Hc(t._databaseId);return new hk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dk(t,e,n,r,s,i={}){const o=t.dc(i.merge||i.mergeFields?2:0,e,n,s);Qb("Data must be an object, but it was:",o,r);const a=Gb(r,o);let c,u;if(i.merge)c=new Nn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=mk(e,d,n);if(!o.contains(m))throw new fe(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);yk(f,m)||f.push(m)}c=new Nn(f),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new fk(new Sn(a),c,u)}function pk(t,e,n,r=!1){return $d(n,t.dc(r?4:3,e))}function $d(t,e){if(Yb(t=Pn(t)))return Qb("Unsupported field value:",e,t),Gb(t,e);if(t instanceof qb)return function(r,s){if(!Wb(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=$d(a,s.Pc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Pn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=wt.fromDate(r);return{timestampValue:sc(s.serializer,i)}}if(r instanceof wt){const i=new wt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sc(s.serializer,i)}}if(r instanceof Ld)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mi)return{bytesValue:ab(s.serializer,r._byteString)};if(r instanceof _n){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fd)return function(o,a){return{mapValue:{fields:{[V0]:{stringValue:M0},[Zl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Tc("VectorValues must only contain numeric values.");return _d(a.serializer,u)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${Kc(r)}`)}(t,e)}function Gb(t,e){const n={};return P0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ks(t,(r,s)=>{const i=$d(s,e.uc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Yb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof Ld||t instanceof Mi||t instanceof _n||t instanceof qb||t instanceof Fd)}function Qb(t,e,n){if(!Yb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Kc(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function mk(t,e,n){if((e=Pn(e))instanceof Md)return e._internalPath;if(typeof e=="string")return Xb(t,e);throw lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const gk=new RegExp("[~\\*/\\[\\]]");function Xb(t,e,n){if(e.search(gk)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Md(...e.split("."))._internalPath}catch{throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new fe(H.INVALID_ARGUMENT,a+t+c)}function yk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _k(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _k extends Jb{data(){return super.data()}}function Bd(t,e){return typeof e=="string"?Xb(t,e):e instanceof Md?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new fe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jd{}class bk extends jd{}function wk(t,e,...n){let r=[];e instanceof jd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof zd).length,a=i.filter(c=>c instanceof Qc).length;if(o>1||o>0&&a>0)throw new fe(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Qc extends bk{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qc(e,n,r)}_apply(e){const n=this._parse(e);return Zb(e._query,n),new Gi(e.firestore,e.converter,zf(e._query,n))}_parse(e){const n=Kb(e.firestore);return function(i,o,a,c,u,f,d){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new fe(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){sy(d,f);const E=[];for(const C of d)E.push(ry(c,i,C));m={arrayValue:{values:E}}}else m=ry(c,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||sy(d,f),m=pk(a,o,d,f==="in"||f==="not-in");return _t.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ek(t,e,n){const r=e,s=Bd("where",t);return Qc._create(s,r,n)}class zd extends jd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Zb(o,c),o=zf(o,c)}(e._query,n),new Gi(e.firestore,e.converter,zf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ry(t,e,n){if(typeof(n=Pn(n))=="string"){if(n==="")throw new fe(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!H0(e)&&n.indexOf("/")!==-1)throw new fe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(st.fromString(n));if(!ye.isDocumentKey(r))throw new fe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _g(t,new ye(r))}if(n instanceof _n)return _g(t,n._key);throw new fe(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kc(n)}.`)}function sy(t,e){if(!Array.isArray(t)||t.length===0)throw new fe(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zb(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new fe(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Tk{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ks(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Zl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ht(o.doubleValue));return new Fd(i)}convertGeoPoint(e){return new Ld(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=as(e);return new wt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);Xe(db(r),9688,{name:e});const s=new na(r.get(1),r.get(3)),i=new ye(r.popFirst(5));return s.isEqual(n)||Tr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ew extends Jb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Il extends ew{data(e={}){return super.data(e)}}class Ak{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new wo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Il(this._firestore,this._userDataWriter,r.key,r,new wo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Il(s._firestore,s._userDataWriter,a.doc.key,a.doc,new wo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Il(s._firestore,s._userDataWriter,a.doc.key,a.doc,new wo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:Sk(a.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Sk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){t=Vi(t,_n);const e=Vi(t.firestore,Yc);return sk(Vd(e),t._key).then(n=>kk(e,t,n))}class tw extends Tk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function Ck(t){t=Vi(t,Gi);const e=Vi(t.firestore,Yc),n=Vd(e),r=new tw(e);return vk(t._query),ik(n,t._query).then(s=>new Ak(e,r,t,s))}function Pk(t,e){const n=Vi(t.firestore,Yc),r=Hb(t),s=Ik(t.converter,e);return xk(n,[dk(Kb(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,vr.exists(!1))]).then(()=>r)}function xk(t,e){return function(r,s){const i=new _r;return r.asyncQueue.enqueueAndForget(async()=>Wx(await rk(r),s,i)),i.promise}(Vd(t),e)}function kk(t,e,n){const r=n.docs.get(e._key),s=new tw(t);return new ew(t,s,e._key,r,new wo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Hi=s})(ji),Ci(new $s("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Yc(new gC(r.getProvider("auth-internal")),new vC(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new fe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new na(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Zr(og,ag,e),Zr(og,ag,"esm2017")})();const Ok={apiKey:"AIzaSyCG9Z5aha-FVNDjt12qxP06Pep_6IdFRyk",authDomain:"planner-76848.firebaseapp.com",projectId:"planner-76848",storageBucket:"planner-76848.firebasestorage.app",messagingSenderId:"68503912535",appId:"1:68503912535:web:71e4922f352b20e4766312",measurementId:"G-ZJDVJJ4D88"},nw=Lv(Ok),Ms=hC(nw),Dk=new pr,Hd=lk(nw);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ci=typeof document<"u";function rw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&rw(t.default)}const We=Object.assign;function Gu(t,e){const n={};for(const r in e){const s=e[r];n[r]=$n(s)?s.map(t):t(s)}return n}const Lo=()=>{},$n=Array.isArray,sw=/#/g,Vk=/&/g,Mk=/\//g,Lk=/=/g,Fk=/\?/g,iw=/\+/g,Uk=/%5B/g,$k=/%5D/g,ow=/%5E/g,Bk=/%60/g,aw=/%7B/g,jk=/%7C/g,lw=/%7D/g,zk=/%20/g;function qd(t){return encodeURI(""+t).replace(jk,"|").replace(Uk,"[").replace($k,"]")}function Hk(t){return qd(t).replace(aw,"{").replace(lw,"}").replace(ow,"^")}function eh(t){return qd(t).replace(iw,"%2B").replace(zk,"+").replace(sw,"%23").replace(Vk,"%26").replace(Bk,"`").replace(aw,"{").replace(lw,"}").replace(ow,"^")}function qk(t){return eh(t).replace(Lk,"%3D")}function Wk(t){return qd(t).replace(sw,"%23").replace(Fk,"%3F")}function Kk(t){return t==null?"":Wk(t).replace(Mk,"%2F")}function oa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Gk=/\/$/,Yk=t=>t.replace(Gk,"");function Yu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Zk(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:oa(o)}}function Qk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function iy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Li(e.matched[r],n.matched[s])&&cw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Li(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jk(t[n],e[n]))return!1;return!0}function Jk(t,e){return $n(t)?oy(t,e):$n(e)?oy(e,t):t===e}function oy(t,e){return $n(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Zk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var aa;(function(t){t.pop="pop",t.push="push"})(aa||(aa={}));var Fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fo||(Fo={}));function e2(t){if(!t)if(ci){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Yk(t)}const t2=/^[^#]+#/;function n2(t,e){return t.replace(t2,"#")+e}function r2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xc=()=>({left:window.scrollX,top:window.scrollY});function s2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=r2(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ay(t,e){return(history.state?history.state.position-e:-1)+t}const th=new Map;function i2(t,e){th.set(t,e)}function o2(t){const e=th.get(t);return th.delete(t),e}let a2=()=>location.protocol+"//"+location.host;function uw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),iy(c,"")}return iy(n,t)+r+s}function l2(t,e,n,r){let s=[],i=[],o=null;const a=({state:m})=>{const g=uw(t,location),E=n.value,C=e.value;let P=0;if(m){if(n.value=g,e.value=m,o&&o===E){o=null;return}P=C?m.position-C.position:0}else r(g);s.forEach(k=>{k(n.value,E,{delta:P,type:aa.pop,direction:P?P>0?Fo.forward:Fo.back:Fo.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const E=s.indexOf(m);E>-1&&s.splice(E,1)};return i.push(g),g}function f(){const{history:m}=window;m.state&&m.replaceState(We({},m.state,{scroll:Xc()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function ly(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xc():null}}function c2(t){const{history:e,location:n}=window,r={value:uw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:a2()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[f?"replace":"assign"](m)}}function o(c,u){const f=We({},e.state,ly(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,u){const f=We({},s.value,e.state,{forward:c,scroll:Xc()});i(f.current,f,!0);const d=We({},ly(r.value,c,null),{position:f.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function u2(t){t=e2(t);const e=c2(t),n=l2(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=We({location:"",base:t,go:r,createHref:n2.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function f2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),u2(t)}function h2(t){return typeof t=="string"||t&&typeof t=="object"}function fw(t){return typeof t=="string"||typeof t=="symbol"}const hw=Symbol("");var cy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cy||(cy={}));function Fi(t,e){return We(new Error,{type:t,[hw]:!0},e)}function cr(t,e){return t instanceof Error&&hw in t&&(e==null||!!(t.type&e))}const uy="[^/]+?",d2={sensitive:!1,strict:!1,start:!0,end:!0},p2=/[.+*?^${}()[\]/\\]/g;function m2(t,e){const n=We({},d2,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(p2,"\\$&"),g+=40;else if(m.type===1){const{value:E,repeatable:C,optional:P,regexp:k}=m;i.push({name:E,repeatable:C,optional:P});const x=k||uy;if(x!==uy){g+=10;try{new RegExp(`(${x})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${E}" (${x}): `+F.message)}}let V=C?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(V=P&&u.length<2?`(?:/${V})`:"/"+V),P&&(V+="?"),s+=V,g+=20,P&&(g+=-8),C&&(g+=-20),x===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const g=f[m]||"",E=i[m-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function c(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of m)if(g.type===0)f+=g.value;else if(g.type===1){const{value:E,repeatable:C,optional:P}=g,k=E in u?u[E]:"";if($n(k)&&!C)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const x=$n(k)?k.join("/"):k;if(!x)if(P)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function g2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function dw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=g2(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fy(r))return 1;if(fy(s))return-1}return s.length-r.length}function fy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const y2={type:0,value:""},_2=/[a-zA-Z0-9_]/;function v2(t){if(!t)return[[]];if(t==="/")return[[y2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:_2.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function b2(t,e,n){const r=m2(v2(t.path),n),s=We(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function w2(t,e){const n=[],r=new Map;e=my({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,g){const E=!g,C=dy(d);C.aliasOf=g&&g.record;const P=my(e,d),k=[C];if("alias"in d){const F=typeof d.alias=="string"?[d.alias]:d.alias;for(const Q of F)k.push(dy(We({},C,{components:g?g.record.components:C.components,path:Q,aliasOf:g?g.record:C})))}let x,V;for(const F of k){const{path:Q}=F;if(m&&Q[0]!=="/"){const se=m.record.path,A=se[se.length-1]==="/"?"":"/";F.path=m.record.path+(Q&&A+Q)}if(x=b2(F,m,P),g?g.alias.push(x):(V=V||x,V!==x&&V.alias.push(x),E&&d.name&&!py(x)&&o(d.name)),pw(x)&&c(x),C.children){const se=C.children;for(let A=0;A<se.length;A++)i(se[A],x,g&&g.children[A])}g=g||x}return V?()=>{o(V)}:Lo}function o(d){if(fw(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const m=I2(d,n);n.splice(m,0,d),d.record.name&&!py(d)&&r.set(d.record.name,d)}function u(d,m){let g,E={},C,P;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Fi(1,{location:d});P=g.record.name,E=We(hy(m.params,g.keys.filter(V=>!V.optional).concat(g.parent?g.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),d.params&&hy(d.params,g.keys.map(V=>V.name))),C=g.stringify(E)}else if(d.path!=null)C=d.path,g=n.find(V=>V.re.test(C)),g&&(E=g.parse(C),P=g.record.name);else{if(g=m.name?r.get(m.name):n.find(V=>V.re.test(m.path)),!g)throw Fi(1,{location:d,currentLocation:m});P=g.record.name,E=We({},m.params,d.params),C=g.stringify(E)}const k=[];let x=g;for(;x;)k.unshift(x.record),x=x.parent;return{name:P,path:C,params:E,matched:k,meta:T2(k)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function hy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dy(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:E2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function E2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function py(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function T2(t){return t.reduce((e,n)=>We(e,n.meta),{})}function my(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function I2(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;dw(t,e[i])<0?r=i:n=i+1}const s=A2(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function A2(t){let e=t;for(;e=e.parent;)if(pw(e)&&dw(t,e)===0)return e}function pw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function S2(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(iw," "),o=i.indexOf("="),a=oa(o<0?i:i.slice(0,o)),c=o<0?null:oa(i.slice(o+1));if(a in e){let u=e[a];$n(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function gy(t){let e="";for(let n in t){const r=t[n];if(n=qk(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($n(r)?r.map(i=>i&&eh(i)):[r&&eh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function R2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$n(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const C2=Symbol(""),yy=Symbol(""),Jc=Symbol(""),Wd=Symbol(""),nh=Symbol("");function mo(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(Fi(4,{from:n,to:e})):m instanceof Error?c(m):h2(m)?c(Fi(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Qu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(rw(c)){const f=(c.__vccOpts||c)[e];f&&i.push(jr(f,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=Nk(f)?f.default:f;o.mods[a]=f,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&jr(g,n,r,o,a,s)()}))}}return i}function _y(t){const e=ln(Jc),n=ln(Wd),r=at(()=>{const c=Ce(t.to);return e.resolve(c)}),s=at(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(Li.bind(null,f));if(m>-1)return m;const g=vy(c[u-2]);return u>1&&vy(f)===g&&d[d.length-1].path!==g?d.findIndex(Li.bind(null,c[u-2])):m}),i=at(()=>s.value>-1&&D2(n.params,r.value.params)),o=at(()=>s.value>-1&&s.value===n.matched.length-1&&cw(n.params,r.value.params));function a(c={}){if(O2(c)){const u=e[Ce(t.replace)?"replace":"push"](Ce(t.to)).catch(Lo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:at(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function P2(t){return t.length===1?t[0]:t}const x2=Gh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_y,setup(t,{slots:e}){const n=Bi(_y(t)),{options:r}=ln(Jc),s=at(()=>({[by(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[by(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&P2(e.default(n));return t.custom?i:Xh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),k2=x2;function O2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function D2(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$n(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const by=(t,e,n)=>t??e??n,N2=Gh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ln(nh),s=at(()=>t.route||r.value),i=ln(yy,0),o=at(()=>{let u=Ce(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),a=at(()=>s.value.matched[o.value]);xo(yy,at(()=>o.value+1)),xo(C2,a),xo(nh,s);const c=_e();return Mn(()=>[c.value,a.value,t.name],([u,f,d],[m,g,E])=>{f&&(f.instances[d]=u,g&&g!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),u&&f&&(!g||!Li(f,g)||!m)&&(f.enterCallbacks[d]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=a.value,m=d&&d.components[f];if(!m)return wy(n.default,{Component:m,route:u});const g=d.props[f],E=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=Xh(m,We({},E,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return wy(n.default,{Component:P,route:u})||P}}});function wy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const V2=N2;function M2(t){const e=w2(t.routes,t),n=t.parseQuery||S2,r=t.stringifyQuery||gy,s=t.history,i=mo(),o=mo(),a=mo(),c=BT(Fr);let u=Fr;ci&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Gu.bind(null,U=>""+U),d=Gu.bind(null,Kk),m=Gu.bind(null,oa);function g(U,le){let oe,he;return fw(U)?(oe=e.getRecordMatcher(U),he=le):he=U,e.addRoute(he,oe)}function E(U){const le=e.getRecordMatcher(U);le&&e.removeRoute(le)}function C(){return e.getRoutes().map(U=>U.record)}function P(U){return!!e.getRecordMatcher(U)}function k(U,le){if(le=We({},le||c.value),typeof U=="string"){const O=Yu(n,U,le.path),$=e.resolve({path:O.path},le),q=s.createHref(O.fullPath);return We(O,$,{params:m($.params),hash:oa(O.hash),redirectedFrom:void 0,href:q})}let oe;if(U.path!=null)oe=We({},U,{path:Yu(n,U.path,le.path).path});else{const O=We({},U.params);for(const $ in O)O[$]==null&&delete O[$];oe=We({},U,{params:d(O)}),le.params=d(le.params)}const he=e.resolve(oe,le),He=U.hash||"";he.params=f(m(he.params));const I=Qk(r,We({},U,{hash:Hk(He),path:he.path})),R=s.createHref(I);return We({fullPath:I,hash:He,query:r===gy?R2(U.query):U.query||{}},he,{redirectedFrom:void 0,href:R})}function x(U){return typeof U=="string"?Yu(n,U,c.value.path):We({},U)}function V(U,le){if(u!==U)return Fi(8,{from:le,to:U})}function F(U){return A(U)}function Q(U){return F(We(x(U),{replace:!0}))}function se(U){const le=U.matched[U.matched.length-1];if(le&&le.redirect){const{redirect:oe}=le;let he=typeof oe=="function"?oe(U):oe;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=x(he):{path:he},he.params={}),We({query:U.query,hash:U.hash,params:he.path!=null?{}:U.params},he)}}function A(U,le){const oe=u=k(U),he=c.value,He=U.state,I=U.force,R=U.replace===!0,O=se(oe);if(O)return A(We(x(O),{state:typeof O=="object"?We({},He,O.state):He,force:I,replace:R}),le||oe);const $=oe;$.redirectedFrom=le;let q;return!I&&Xk(r,he,oe)&&(q=Fi(16,{to:$,from:he}),Ve(he,he,!0,!1)),(q?Promise.resolve(q):_($,he)).catch(j=>cr(j)?cr(j,2)?j:pe(j):B(j,$,he)).then(j=>{if(j){if(cr(j,2))return A(We({replace:R},x(j.to),{state:typeof j.to=="object"?We({},He,j.to.state):He,force:I}),le||$)}else j=S($,he,!0,R,He);return T($,he,j),j})}function w(U,le){const oe=V(U,le);return oe?Promise.reject(oe):Promise.resolve()}function v(U){const le=bn.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(U):U()}function _(U,le){let oe;const[he,He,I]=L2(U,le);oe=Qu(he.reverse(),"beforeRouteLeave",U,le);for(const O of he)O.leaveGuards.forEach($=>{oe.push(jr($,U,le))});const R=w.bind(null,U,le);return oe.push(R),nn(oe).then(()=>{oe=[];for(const O of i.list())oe.push(jr(O,U,le));return oe.push(R),nn(oe)}).then(()=>{oe=Qu(He,"beforeRouteUpdate",U,le);for(const O of He)O.updateGuards.forEach($=>{oe.push(jr($,U,le))});return oe.push(R),nn(oe)}).then(()=>{oe=[];for(const O of I)if(O.beforeEnter)if($n(O.beforeEnter))for(const $ of O.beforeEnter)oe.push(jr($,U,le));else oe.push(jr(O.beforeEnter,U,le));return oe.push(R),nn(oe)}).then(()=>(U.matched.forEach(O=>O.enterCallbacks={}),oe=Qu(I,"beforeRouteEnter",U,le,v),oe.push(R),nn(oe))).then(()=>{oe=[];for(const O of o.list())oe.push(jr(O,U,le));return oe.push(R),nn(oe)}).catch(O=>cr(O,8)?O:Promise.reject(O))}function T(U,le,oe){a.list().forEach(he=>v(()=>he(U,le,oe)))}function S(U,le,oe,he,He){const I=V(U,le);if(I)return I;const R=le===Fr,O=ci?history.state:{};oe&&(he||R?s.replace(U.fullPath,We({scroll:R&&O&&O.scroll},He)):s.push(U.fullPath,He)),c.value=U,Ve(U,le,oe,R),pe()}let b;function de(){b||(b=s.listen((U,le,oe)=>{if(!jn.listening)return;const he=k(U),He=se(he);if(He){A(We(He,{replace:!0,force:!0}),he).catch(Lo);return}u=he;const I=c.value;ci&&i2(ay(I.fullPath,oe.delta),Xc()),_(he,I).catch(R=>cr(R,12)?R:cr(R,2)?(A(We(x(R.to),{force:!0}),he).then(O=>{cr(O,20)&&!oe.delta&&oe.type===aa.pop&&s.go(-1,!1)}).catch(Lo),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),B(R,he,I))).then(R=>{R=R||S(he,I,!1),R&&(oe.delta&&!cr(R,8)?s.go(-oe.delta,!1):oe.type===aa.pop&&cr(R,20)&&s.go(-1,!1)),T(he,I,R)}).catch(Lo)}))}let te=mo(),W=mo(),J;function B(U,le,oe){pe(U);const he=W.list();return he.length?he.forEach(He=>He(U,le,oe)):console.error(U),Promise.reject(U)}function ue(){return J&&c.value!==Fr?Promise.resolve():new Promise((U,le)=>{te.add([U,le])})}function pe(U){return J||(J=!U,de(),te.list().forEach(([le,oe])=>U?oe(U):le()),te.reset()),U}function Ve(U,le,oe,he){const{scrollBehavior:He}=t;if(!ci||!He)return Promise.resolve();const I=!oe&&o2(ay(U.fullPath,0))||(he||!oe)&&history.state&&history.state.scroll||null;return rs().then(()=>He(U,le,I)).then(R=>R&&s2(R)).catch(R=>B(R,U,le))}const Ie=U=>s.go(U);let nt;const bn=new Set,jn={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:C,resolve:k,options:t,push:F,replace:Q,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:ue,install(U){const le=this;U.component("RouterLink",k2),U.component("RouterView",V2),U.config.globalProperties.$router=le,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(c)}),ci&&!nt&&c.value===Fr&&(nt=!0,F(s.location).catch(He=>{}));const oe={};for(const He in Fr)Object.defineProperty(oe,He,{get:()=>c.value[He],enumerable:!0});U.provide(Jc,le),U.provide(Wd,j_(oe)),U.provide(nh,c);const he=U.unmount;bn.add(U),U.unmount=function(){bn.delete(U),bn.size<1&&(u=Fr,b&&b(),b=null,c.value=Fr,nt=!1,J=!1),he()}}};function nn(U){return U.reduce((le,oe)=>le.then(()=>v(oe)),Promise.resolve())}return jn}function L2(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Li(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Li(u,c))||s.push(c))}return[n,r,s]}function Zc(){return ln(Jc)}function F2(t){return ln(Wd)}const mw=_e(!1),U2={__name:"App",setup(t){const e=_e(null),n=_e(!0),r=Zc();return Pr(()=>{const s=Ms.onAuthStateChanged(i=>{e.value=i,n.value=!1,mw.value=!0,i&&r.currentRoute.value.path==="/login"?r.push("/"):!i&&r.currentRoute.value.path!=="/login"&&r.push("/login")});return()=>s()}),xo("currentUser",e),(s,i)=>{const o=nv("router-view");return K(),qt(o)}}},Sa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},$2={__name:"CreatePlan",emits:["planCreated","close"],setup(t,{emit:e}){const n=ln("currentUser"),r=_e(""),s=_e(!1),i=_e(!1),o=_e(!1),a=_e(!1),c=Zc();async function u(){var E;if(!r.value){alert("Please enter a title for your travel plan.");return}if(!((E=n.value)!=null&&E.uid)){alert("You must be logged in to create a plan.");return}const d={};let m=1;s.value&&(d.table_1={tabPosition:m++,tabId:1,title:"Itinerary",type:"table",value:{headers:[{position:1,type:"date",value:"Date"},{position:2,type:"text",value:"Activity"},{position:3,type:"notes",value:"Notes"}],tableData:[{type:"title",value:[{cellType:"date",value:"Mon, Jan 22"},{cellType:"default",value:""},{cellType:"note",value:""}]},{type:"default",value:[{cellType:"date",value:"8:00 AM"},{cellType:"default",value:"Breakfast"},{cellType:"note",value:""}]},{type:"default",value:[{cellType:"date",value:"9:00 AM"},{cellType:"default",value:"Explore"},{cellType:"note",value:{text:"",links:[{label:"Hotel California",url:"https://maps.app.goo.gl/xdvwc5kk9BQ48tge7"},{label:"Tiktok",url:"https://vt.tiktok.com/ZShYfhXJF/"}]}}]}]}}),i.value&&(d.notes_1={tabPosition:m++,tabId:2,title:"Notes",type:"notes",value:{notesList:[{title:"",checklistId:"20",isChecklist:!0,items:[{id:"10",text:"NoteCheck 1",completed:!1},{id:"11",text:"NoteCheck 2",completed:!1}],content:""},{title:"Title goes here!",checklistId:"21",isChecklist:!1,items:[],content:"Hello world!"}]}}),o.value&&(d.checklist_1={tabPosition:m++,tabId:3,title:"Things to Bring",type:"checklist",value:{title:"",items:[{id:"1",text:"Bag",completed:!1},{id:"2",text:"Tissue",completed:!1},{id:"3",text:"First aid kit",completed:!1}]}}),a.value&&(d.checklist_2={tabPosition:m++,tabId:4,title:"Things to Do",type:"checklist",value:{title:"Priorities",items:[{id:"4",text:"Check packing list",completed:!1},{id:"5",text:"Pack",completed:!1}]}});const g={title:r.value,tabs:d,createdAt:new Date,createdBy:n.value.uid};try{const C=await Pk(zb(Hd,`users/${n.value.uid}/travelPlans`),g);console.log("Travel Plan created with ID: ",C.id),f("planCreated"),f("close"),c.push(`/plan/${C.id}`)}catch(C){console.error("Error creating travel plan: ",C),alert("Failed to create travel plan.")}}const f=e;return(d,m)=>(K(),ee("div",null,[m[13]||(m[13]=D("h2",null,"Create Your Travel Plan",-1)),D("form",{onSubmit:fr(u,["prevent"])},[D("div",null,[m[6]||(m[6]=D("label",{for:"title"},"Title:",-1)),en(D("input",{type:"text",id:"title","onUpdate:modelValue":m[0]||(m[0]=g=>r.value=g),required:""},null,512),[[Gn,r.value]])]),D("div",null,[m[11]||(m[11]=D("h2",null,"Include in your plan:",-1)),D("div",null,[en(D("input",{type:"checkbox",id:"itinerary","onUpdate:modelValue":m[1]||(m[1]=g=>s.value=g)},null,512),[[Ja,s.value]]),m[7]||(m[7]=D("label",{for:"itinerary"},"Itinerary (Table)",-1))]),D("div",null,[en(D("input",{type:"checkbox",id:"notes","onUpdate:modelValue":m[2]||(m[2]=g=>i.value=g)},null,512),[[Ja,i.value]]),m[8]||(m[8]=D("label",{for:"notes"},"Notes",-1))]),D("div",null,[en(D("input",{type:"checkbox",id:"thingsToBring","onUpdate:modelValue":m[3]||(m[3]=g=>o.value=g)},null,512),[[Ja,o.value]]),m[9]||(m[9]=D("label",{for:"thingsToBring"},"Things to Bring (Checklist)",-1))]),D("div",null,[en(D("input",{type:"checkbox",id:"thingsToDo","onUpdate:modelValue":m[4]||(m[4]=g=>a.value=g)},null,512),[[Ja,a.value]]),m[10]||(m[10]=D("label",{for:"thingsToDo"},"Things to Do (Checklist)",-1))])]),m[12]||(m[12]=D("button",{type:"submit"},"Create Plan",-1)),D("button",{type:"button",onClick:m[5]||(m[5]=g=>d.$emit("close"))},"Cancel")],32)]))}},B2=Sa($2,[["__scopeId","data-v-5143da13"]]),j2={key:1},z2={key:2},H2={key:3},q2={key:4},W2={__name:"PlansList",setup(t){const e=ln("currentUser"),n=_e([]),r=_e(!0),s=_e(null),i=_e(!1);Pr(async()=>{await o()});async function o(){var a;if(r.value=!0,s.value=null,!((a=e.value)!=null&&a.uid)){s.value="User not authenticated.",r.value=!1;return}try{console.log(`currentUser: ${e.value.uid}`);const c=zb(Hd,`users/${e.value.uid}/travelPlans`),u=wk(c,Ek("createdBy","==",e.value.uid)),f=await Ck(u);n.value=f.docs.map(d=>({id:d.id,...d.data()}))}catch(c){console.error("Error fetching plans: ",c),s.value="Failed to fetch travel plans."}finally{r.value=!1}}return(a,c)=>{const u=nv("router-link");return K(),ee("div",null,[c[3]||(c[3]=D("h1",null,"Your Travel Plans",-1)),D("button",{onClick:c[0]||(c[0]=f=>i.value=!0)},"Create a New Plan"),i.value?(K(),qt(B2,{key:0,onPlanCreated:o,onClose:c[1]||(c[1]=f=>i.value=!1)})):yt("",!0),r.value?(K(),ee("div",j2,"Loading plans...")):s.value?(K(),ee("div",z2,Ye(s.value),1)):n.value.length>0?(K(),ee("div",H2,[D("ul",null,[(K(!0),ee(Qe,null,tn(n.value,f=>(K(),ee("li",{key:f.id},[ze(u,{to:`/plan/${f.id}`},{default:Wh(()=>[In(Ye(f.title),1)]),_:2},1032,["to"])]))),128))])])):(K(),ee("div",q2,c[2]||(c[2]=[D("p",null,"You haven't created any travel plans yet.",-1)])))])}}},K2=Sa(W2,[["__scopeId","data-v-f21201ac"]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function G2(t,e,n){return(e=Q2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ey(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ey(Object(n),!0).forEach(function(r){G2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ey(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Y2(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Q2(t){var e=Y2(t,"string");return typeof e=="symbol"?e:e+""}const Ty=()=>{};let Kd={},gw={},yw=null,_w={mark:Ty,measure:Ty};try{typeof window<"u"&&(Kd=window),typeof document<"u"&&(gw=document),typeof MutationObserver<"u"&&(yw=MutationObserver),typeof performance<"u"&&(_w=performance)}catch{}const{userAgent:Iy=""}=Kd.navigator||{},hs=Kd,it=gw,Ay=yw,il=_w;hs.document;const kr=!!it.documentElement&&!!it.head&&typeof it.addEventListener=="function"&&typeof it.createElement=="function",vw=~Iy.indexOf("MSIE")||~Iy.indexOf("Trident/");var X2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,J2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,bw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Z2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ww=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Yt="classic",eu="duotone",eO="sharp",tO="sharp-duotone",Ew=[Yt,eu,eO,tO],nO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},rO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},sO=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),iO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},oO=["fak","fa-kit","fakd","fa-kit-duotone"],Sy={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},aO=["kit"],lO={kit:{"fa-kit":"fak"}},cO=["fak","fakd"],uO={kit:{fak:"fa-kit"}},Ry={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ol={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fO=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],hO=["fak","fa-kit","fakd","fa-kit-duotone"],dO={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},mO={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},rh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},gO=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],sh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...fO,...gO],yO=["solid","regular","light","thin","duotone","brands"],Tw=[1,2,3,4,5,6,7,8,9,10],_O=Tw.concat([11,12,13,14,15,16,17,18,19,20]),vO=[...Object.keys(mO),...yO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ol.GROUP,ol.SWAP_OPACITY,ol.PRIMARY,ol.SECONDARY].concat(Tw.map(t=>"".concat(t,"x"))).concat(_O.map(t=>"w-".concat(t))),bO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ar="___FONT_AWESOME___",ih=16,Iw="fa",Aw="svg-inline--fa",Hs="data-fa-i2svg",oh="data-fa-pseudo-element",wO="data-fa-pseudo-element-pending",Gd="data-prefix",Yd="data-icon",Cy="fontawesome-i2svg",EO="async",TO=["HTML","HEAD","STYLE","SCRIPT"],Sw=(()=>{try{return!0}catch{return!1}})();function Ra(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Yt]}})}const Rw=Y({},bw);Rw[Yt]=Y(Y(Y(Y({},{"fa-duotone":"duotone"}),bw[Yt]),Sy.kit),Sy["kit-duotone"]);const IO=Ra(Rw),ah=Y({},iO);ah[Yt]=Y(Y(Y(Y({},{duotone:"fad"}),ah[Yt]),Ry.kit),Ry["kit-duotone"]);const Py=Ra(ah),lh=Y({},rh);lh[Yt]=Y(Y({},lh[Yt]),uO.kit);const Qd=Ra(lh),ch=Y({},pO);ch[Yt]=Y(Y({},ch[Yt]),lO.kit);Ra(ch);const AO=X2,Cw="fa-layers-text",SO=J2,RO=Y({},nO);Ra(RO);const CO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xu=Z2,PO=[...aO,...vO],Uo=hs.FontAwesomeConfig||{};function xO(t){var e=it.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function kO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}it&&typeof it.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=kO(xO(n));s!=null&&(Uo[r]=s)});const Pw={styleDefault:"solid",familyDefault:Yt,cssPrefix:Iw,replacementClass:Aw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Uo.familyPrefix&&(Uo.cssPrefix=Uo.familyPrefix);const Ui=Y(Y({},Pw),Uo);Ui.autoReplaceSvg||(Ui.observeMutations=!1);const me={};Object.keys(Pw).forEach(t=>{Object.defineProperty(me,t,{enumerable:!0,set:function(e){Ui[t]=e,$o.forEach(n=>n(me))},get:function(){return Ui[t]}})});Object.defineProperty(me,"familyPrefix",{enumerable:!0,set:function(t){Ui.cssPrefix=t,$o.forEach(e=>e(me))},get:function(){return Ui.cssPrefix}});hs.FontAwesomeConfig=me;const $o=[];function OO(t){return $o.push(t),()=>{$o.splice($o.indexOf(t),1)}}const Ur=ih,Yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function DO(t){if(!t||!kr)return;const e=it.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=it.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return it.head.insertBefore(e,r),t}const NO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function la(){let t=12,e="";for(;t-- >0;)e+=NO[Math.random()*62|0];return e}function Yi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xd(t){return t.classList?Yi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function xw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function VO(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(xw(t[n]),'" '),"").trim()}function tu(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Jd(t){return t.size!==Yn.size||t.x!==Yn.x||t.y!==Yn.y||t.rotate!==Yn.rotate||t.flipX||t.flipY}function MO(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function LO(t){let{transform:e,width:n=ih,height:r=ih,startCentered:s=!1}=t,i="";return s&&vw?i+="translate(".concat(e.x/Ur-n/2,"em, ").concat(e.y/Ur-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Ur,"em), calc(-50% + ").concat(e.y/Ur,"em)) "):i+="translate(".concat(e.x/Ur,"em, ").concat(e.y/Ur,"em) "),i+="scale(".concat(e.size/Ur*(e.flipX?-1:1),", ").concat(e.size/Ur*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var FO=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function kw(){const t=Iw,e=Aw,n=me.cssPrefix,r=me.replacementClass;let s=FO;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let xy=!1;function Ju(){me.autoAddCss&&!xy&&(DO(kw()),xy=!0)}var UO={mixout(){return{dom:{css:kw,insertCss:Ju}}},hooks(){return{beforeDOMElementCreation(){Ju()},beforeI2svg(){Ju()}}}};const Sr=hs||{};Sr[Ar]||(Sr[Ar]={});Sr[Ar].styles||(Sr[Ar].styles={});Sr[Ar].hooks||(Sr[Ar].hooks={});Sr[Ar].shims||(Sr[Ar].shims=[]);var Qn=Sr[Ar];const Ow=[],Dw=function(){it.removeEventListener("DOMContentLoaded",Dw),cc=1,Ow.map(t=>t())};let cc=!1;kr&&(cc=(it.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(it.readyState),cc||it.addEventListener("DOMContentLoaded",Dw));function $O(t){kr&&(cc?setTimeout(t,0):Ow.push(t))}function Ca(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?xw(t):"<".concat(e," ").concat(VO(n),">").concat(r.map(Ca).join(""),"</").concat(e,">")}function ky(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Zu=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,c,u,f;for(r===void 0?(c=1,f=e[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=a(f,e[u],u,e);return f};function BO(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function uh(t){const e=BO(t);return e.length===1?e[0].toString(16):null}function jO(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Oy(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function fh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Oy(e);typeof Qn.hooks.addPack=="function"&&!r?Qn.hooks.addPack(t,Oy(e)):Qn.styles[t]=Y(Y({},Qn.styles[t]||{}),s),t==="fas"&&fh("fa",e)}const{styles:ca,shims:zO}=Qn,Nw=Object.keys(Qd),HO=Nw.reduce((t,e)=>(t[e]=Object.keys(Qd[e]),t),{});let Zd=null,Vw={},Mw={},Lw={},Fw={},Uw={};function qO(t){return~PO.indexOf(t)}function WO(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!qO(s)?s:null}const $w=()=>{const t=r=>Zu(ca,(s,i,o)=>(s[o]=Zu(i,r,{}),s),{});Vw=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Mw=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Uw=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ca||me.autoFetchSvg,n=Zu(zO,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Lw=n.names,Fw=n.unicodes,Zd=nu(me.styleDefault,{family:me.familyDefault})};OO(t=>{Zd=nu(t.styleDefault,{family:me.familyDefault})});$w();function ep(t,e){return(Vw[t]||{})[e]}function KO(t,e){return(Mw[t]||{})[e]}function Ds(t,e){return(Uw[t]||{})[e]}function Bw(t){return Lw[t]||{prefix:null,iconName:null}}function GO(t){const e=Fw[t],n=ep("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ds(){return Zd}const jw=()=>({prefix:null,iconName:null,rest:[]});function YO(t){let e=Yt;const n=Nw.reduce((r,s)=>(r[s]="".concat(me.cssPrefix,"-").concat(s),r),{});return Ew.forEach(r=>{(t.includes(n[r])||t.some(s=>HO[r].includes(s)))&&(e=r)}),e}function nu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Yt}=e,r=IO[n][t];if(n===eu&&!t)return"fad";const s=Py[n][t]||Py[n][r],i=t in Qn.styles?t:null;return s||i||null}function QO(t){let e=[],n=null;return t.forEach(r=>{const s=WO(me.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Dy(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function ru(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=sh.concat(hO),i=Dy(t.filter(d=>s.includes(d))),o=Dy(t.filter(d=>!sh.includes(d))),a=i.filter(d=>(r=d,!ww.includes(d))),[c=null]=a,u=YO(i),f=Y(Y({},QO(o)),{},{prefix:nu(c,{family:u})});return Y(Y(Y({},f),eD({values:t,family:u,styles:ca,config:me,canonical:f,givenPrefix:r})),XO(n,r,f))}function XO(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Bw(s):{},o=Ds(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!ca.far&&ca.fas&&!me.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const JO=Ew.filter(t=>t!==Yt||t!==eu),ZO=Object.keys(rh).filter(t=>t!==Yt).map(t=>Object.keys(rh[t])).flat();function eD(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===eu,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(c||u||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&JO.includes(n)&&(Object.keys(i).find(m=>ZO.includes(m))||o.autoFetchSvg)){const m=sO.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=Ds(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=ds()||"fas"),r}class tD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=Y(Y({},this.definitions[i]||{}),s[i]),fh(i,s[i]);const o=Qd[Yt][i];o&&fh(o,s[i]),$w()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],c=a[2];e[i]||(e[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let Ny=[],hi={};const Ai={},nD=Object.keys(Ai);function rD(t,e){let{mixoutsTo:n}=e;return Ny=t,hi={},Object.keys(Ai).forEach(r=>{nD.indexOf(r)===-1&&delete Ai[r]}),Ny.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{hi[o]||(hi[o]=[]),hi[o].push(i[o])})}r.provides&&r.provides(Ai)}),n}function hh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(hi[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function qs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(hi[t]||[]).forEach(i=>{i.apply(null,n)})}function ps(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ai[t]?Ai[t].apply(null,e):void 0}function dh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ds();if(e)return e=Ds(n,e)||e,ky(zw.definitions,n,e)||ky(Qn.styles,n,e)}const zw=new tD,sD=()=>{me.autoReplaceSvg=!1,me.observeMutations=!1,qs("noAuto")},iD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kr?(qs("beforeI2svg",t),ps("pseudoElements2svg",t),ps("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;me.autoReplaceSvg===!1&&(me.autoReplaceSvg=!0),me.observeMutations=!0,$O(()=>{aD({autoReplaceSvgRoot:e}),qs("watch",t)})}},oD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ds(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=nu(t[0]);return{prefix:n,iconName:Ds(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(me.cssPrefix,"-"))>-1||t.match(AO))){const e=ru(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ds(),iconName:Ds(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ds();return{prefix:e,iconName:Ds(e,t)||t}}}},vn={noAuto:sD,config:me,dom:iD,parse:oD,library:zw,findIconDefinition:dh,toHtml:Ca},aD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=it}=t;(Object.keys(Qn.styles).length>0||me.autoFetchSvg)&&kr&&me.autoReplaceSvg&&vn.dom.i2svg({node:e})};function su(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ca(n))}}),Object.defineProperty(t,"node",{get:function(){if(!kr)return;const n=it.createElement("div");return n.innerHTML=t.html,n.children}}),t}function lD(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Jd(o)&&n.found&&!r.found){const{width:a,height:c}=n,u={x:a/c/2,y:.5};s.style=tu(Y(Y({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function cD(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(me.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},s),{},{id:o}),children:r}]}]}function tp(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:c,titleId:u,extra:f,watchable:d=!1}=t,{width:m,height:g}=n.found?n:e,E=cO.includes(r),C=[me.replacementClass,s?"".concat(me.cssPrefix,"-").concat(s):""].filter(Q=>f.classes.indexOf(Q)===-1).filter(Q=>Q!==""||!!Q).concat(f.classes).join(" ");let P={children:[],attributes:Y(Y({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:C,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})};const k=E&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(P.attributes[Hs]=""),a&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||la())},children:[a]}),delete P.attributes.title);const x=Y(Y({},P),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:Y(Y({},k),f.styles)}),{children:V,attributes:F}=n.found&&e.found?ps("generateAbstractMask",x)||{children:[],attributes:{}}:ps("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=V,x.attributes=F,o?cD(x):lD(x)}function Vy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,c=Y(Y(Y({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(c[Hs]="");const u=Y({},o.styles);Jd(s)&&(u.transform=LO({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=tu(u);f.length>0&&(c.style=f);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function uD(t){const{content:e,title:n,extra:r}=t,s=Y(Y(Y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tu(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ef}=Qn;function ph(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(me.cssPrefix,"-").concat(Xu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(me.cssPrefix,"-").concat(Xu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(me.cssPrefix,"-").concat(Xu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const fD={found:!1,width:512,height:512};function hD(t,e){!Sw&&!me.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function mh(t,e){let n=e;return e==="fa"&&me.styleDefault!==null&&(e=ds()),new Promise((r,s)=>{if(n==="fa"){const i=Bw(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ef[e]&&ef[e][t]){const i=ef[e][t];return r(ph(i))}hD(t,e),r(Y(Y({},fD),{},{icon:me.showMissingIcons&&t?ps("missingIconAbstract")||{}:{}}))})}const My=()=>{},gh=me.measurePerformance&&il&&il.mark&&il.measure?il:{mark:My,measure:My},Eo='FA "6.7.2"',dD=t=>(gh.mark("".concat(Eo," ").concat(t," begins")),()=>Hw(t)),Hw=t=>{gh.mark("".concat(Eo," ").concat(t," ends")),gh.measure("".concat(Eo," ").concat(t),"".concat(Eo," ").concat(t," begins"),"".concat(Eo," ").concat(t," ends"))};var np={begin:dD,end:Hw};const Al=()=>{};function Ly(t){return typeof(t.getAttribute?t.getAttribute(Hs):null)=="string"}function pD(t){const e=t.getAttribute?t.getAttribute(Gd):null,n=t.getAttribute?t.getAttribute(Yd):null;return e&&n}function mD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(me.replacementClass)}function gD(){return me.autoReplaceSvg===!0?Sl.replace:Sl[me.autoReplaceSvg]||Sl.replace}function yD(t){return it.createElementNS("http://www.w3.org/2000/svg",t)}function _D(t){return it.createElement(t)}function qw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?yD:_D}=e;if(typeof t=="string")return it.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(qw(i,{ceFn:n}))}),r}function vD(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Sl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(qw(n),e)}),e.getAttribute(Hs)===null&&me.keepOriginalSource){let n=it.createComment(vD(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Xd(e).indexOf(me.replacementClass))return Sl.replace(t);const r=new RegExp("".concat(me.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===me.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Ca(i)).join(`
`);e.setAttribute(Hs,""),e.innerHTML=s}};function Fy(t){t()}function Ww(t,e){const n=typeof e=="function"?e:Al;if(t.length===0)n();else{let r=Fy;me.mutateApproach===EO&&(r=hs.requestAnimationFrame||Fy),r(()=>{const s=gD(),i=np.begin("mutate");t.map(s),i(),n()})}}let rp=!1;function Kw(){rp=!0}function yh(){rp=!1}let uc=null;function Uy(t){if(!Ay||!me.observeMutations)return;const{treeCallback:e=Al,nodeCallback:n=Al,pseudoElementsCallback:r=Al,observeMutationsRoot:s=it}=t;uc=new Ay(i=>{if(rp)return;const o=ds();Yi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Ly(a.addedNodes[0])&&(me.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&me.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Ly(a.target)&&~CO.indexOf(a.attributeName))if(a.attributeName==="class"&&pD(a.target)){const{prefix:c,iconName:u}=ru(Xd(a.target));a.target.setAttribute(Gd,c||o),u&&a.target.setAttribute(Yd,u)}else mD(a.target)&&n(a.target)})}),kr&&uc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function bD(){uc&&uc.disconnect()}function wD(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function ED(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=ru(Xd(t));return s.prefix||(s.prefix=ds()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=KO(s.prefix,t.innerText)||ep(s.prefix,uh(t.innerText))),!s.iconName&&me.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function TD(t){const e=Yi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return me.autoA11y&&(n?e["aria-labelledby"]="".concat(me.replacementClass,"-title-").concat(r||la()):(e["aria-hidden"]="true",e.focusable="false")),e}function ID(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $y(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=ED(t),i=TD(t),o=hh("parseNodeAttributes",{},t);let a=e.styleParser?wD(t):[];return Y({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:AD}=Qn;function Gw(t){const e=me.autoReplaceSvg==="nest"?$y(t,{styleParser:!1}):$y(t);return~e.extra.classes.indexOf(Cw)?ps("generateLayersText",t,e):ps("generateSvgReplacementMutation",t,e)}function SD(){return[...oO,...sh]}function By(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kr)return Promise.resolve();const n=it.documentElement.classList,r=f=>n.add("".concat(Cy,"-").concat(f)),s=f=>n.remove("".concat(Cy,"-").concat(f)),i=me.autoFetchSvg?SD():ww.concat(Object.keys(AD));i.includes("fa")||i.push("fa");const o=[".".concat(Cw,":not([").concat(Hs,"])")].concat(i.map(f=>".".concat(f,":not([").concat(Hs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Yi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const c=np.begin("onTree"),u=a.reduce((f,d)=>{try{const m=Gw(d);m&&f.push(m)}catch(m){Sw||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,d)=>{Promise.all(u).then(m=>{Ww(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(m=>{c(),d(m)})})}function RD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gw(t).then(n=>{n&&Ww([n],e)})}function CD(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:dh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:dh(s||{})),t(r,Y(Y({},n),{},{mask:s}))}}const PD=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Yn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:c=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:g}=t;return su(Y({type:"icon"},t),()=>(qs("beforeDOMElementCreation",{iconDefinition:t,params:e}),me.autoA11y&&(o?u["aria-labelledby"]="".concat(me.replacementClass,"-title-").concat(a||la()):(u["aria-hidden"]="true",u.focusable="false")),tp({icons:{main:ph(g),mask:s?ph(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:Y(Y({},Yn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:f,classes:c}})))};var xD={mixout(){return{icon:CD(PD)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=By,t.nodeCallback=RD,t}}},provides(t){t.i2svg=function(e){const{node:n=it,callback:r=()=>{}}=e;return By(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:c,mask:u,maskId:f,extra:d}=n;return new Promise((m,g)=>{Promise.all([mh(r,o),u.iconName?mh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[C,P]=E;m([e,tp({icons:{main:C,mask:P},prefix:o,iconName:r,transform:a,symbol:c,maskId:f,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=tu(o);a.length>0&&(r.style=a);let c;return Jd(i)&&(c=ps("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},kD={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return su({type:"layer"},()=>{qs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(me.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},OD={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return su({type:"counter",content:t},()=>(qs("beforeDOMElementCreation",{content:t,params:e}),uD({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(me.cssPrefix,"-layers-counter"),...r]}})))}}}},DD={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Yn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return su({type:"text",content:t},()=>(qs("beforeDOMElementCreation",{content:t,params:e}),Vy({content:t,transform:Y(Y({},Yn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(me.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(vw){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,a=u.height/c}return me.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Vy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const ND=new RegExp('"',"ug"),jy=[1105920,1112319],zy=Y(Y(Y(Y({},{FontAwesome:{normal:"fas",400:"fas"}}),rO),bO),dO),_h=Object.keys(zy).reduce((t,e)=>(t[e.toLowerCase()]=zy[e],t),{}),VD=Object.keys(_h).reduce((t,e)=>{const n=_h[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function MD(t){const e=t.replace(ND,""),n=jO(e,0),r=n>=jy[0]&&n<=jy[1],s=e.length===2?e[0]===e[1]:!1;return{value:uh(s?e[0]:e),isSecondary:r||s}}function LD(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(_h[n]||{})[s]||VD[n]}function Hy(t,e){const n="".concat(wO).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Yi(t.children).filter(m=>m.getAttribute(oh)===e)[0],a=hs.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),u=c.match(SO),f=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const m=a.getPropertyValue("content");let g=LD(c,f);const{value:E,isSecondary:C}=MD(m),P=u[0].startsWith("FontAwesome");let k=ep(g,E),x=k;if(P){const V=GO(E);V.iconName&&V.prefix&&(k=V.iconName,g=V.prefix)}if(k&&!C&&(!o||o.getAttribute(Gd)!==g||o.getAttribute(Yd)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);const V=ID(),{extra:F}=V;F.attributes[oh]=e,mh(k,g).then(Q=>{const se=tp(Y(Y({},V),{},{icons:{main:Q,mask:jw()},prefix:g,iconName:x,extra:F,watchable:!0})),A=it.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=se.map(w=>Ca(w)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function FD(t){return Promise.all([Hy(t,"::before"),Hy(t,"::after")])}function UD(t){return t.parentNode!==document.head&&!~TO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(oh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function qy(t){if(kr)return new Promise((e,n)=>{const r=Yi(t.querySelectorAll("*")).filter(UD).map(FD),s=np.begin("searchPseudoElements");Kw(),Promise.all(r).then(()=>{s(),yh(),e()}).catch(()=>{s(),yh(),n()})})}var $D={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=qy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=it}=e;me.searchPseudoElements&&qy(n)}}};let Wy=!1;var BD={mixout(){return{dom:{unwatch(){Kw(),Wy=!0}}}},hooks(){return{bootstrap(){Uy(hh("mutationObserverCallbacks",{}))},noAuto(){bD()},watch(t){const{observeMutationsRoot:e}=t;Wy?yh():Uy(hh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ky=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var jD={mixout(){return{parse:{transform:t=>Ky(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ky(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(c," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:f,path:d};return{tag:"g",attributes:Y({},m.outer),children:[{tag:"g",attributes:Y({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Y(Y({},n.icon.attributes),m.path)}]}]}}}};const tf={x:0,y:0,width:"100%",height:"100%"};function Gy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zD(t){return t.tag==="g"?t.children:[t]}var HD={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ru(n.split(" ").map(s=>s.trim())):jw();return r.prefix||(r.prefix=ds()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:c,icon:u}=s,{width:f,icon:d}=i,m=MO({transform:a,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:Y(Y({},tf),{},{fill:"white"})},E=u.children?{children:u.children.map(Gy)}:{},C={tag:"g",attributes:Y({},m.inner),children:[Gy(Y({tag:u.tag,attributes:Y(Y({},u.attributes),m.path)},E))]},P={tag:"g",attributes:Y({},m.outer),children:[C]},k="mask-".concat(o||la()),x="clip-".concat(o||la()),V={tag:"mask",attributes:Y(Y({},tf),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,P]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:zD(d)},V]};return n.push(F,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")")},tf)}),{children:n,attributes:r}}}},qD={provides(t){let e=!1;hs.matchMedia&&(e=hs.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Y(Y({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=Y(Y({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Y(Y({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:Y(Y({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:Y(Y({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Y(Y({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:Y(Y({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},WD={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},KD=[UO,xD,kD,OD,DD,$D,BD,jD,HD,qD,WD];rD(KD,{mixoutsTo:vn});vn.noAuto;vn.config;vn.library;vn.dom;const vh=vn.parse;vn.findIconDefinition;vn.toHtml;const GD=vn.icon;vn.layer;vn.text;vn.counter;function Yy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function mr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yy(Object(n),!0).forEach(function(r){sn(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function YD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function QD(t){var e=YD(t,"string");return typeof e=="symbol"?e:e+""}function fc(t){"@babel/helpers - typeof";return fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fc(t)}function sn(t,e,n){return e=QD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function XD(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function JD(t,e){if(t==null)return{};var n=XD(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var ZD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yw={exports:{}};(function(t){(function(e){var n=function(k,x,V){if(!u(x)||d(x)||m(x)||g(x)||c(x))return x;var F,Q=0,se=0;if(f(x))for(F=[],se=x.length;Q<se;Q++)F.push(n(k,x[Q],V));else{F={};for(var A in x)Object.prototype.hasOwnProperty.call(x,A)&&(F[k(A,V)]=n(k,x[A],V))}return F},r=function(k,x){x=x||{};var V=x.separator||"_",F=x.split||/(?=[A-Z])/;return k.split(F).join(V)},s=function(k){return E(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(x,V){return V?V.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var x=s(k);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(k,x){return r(k,x).toLowerCase()},a=Object.prototype.toString,c=function(k){return typeof k=="function"},u=function(k){return k===Object(k)},f=function(k){return a.call(k)=="[object Array]"},d=function(k){return a.call(k)=="[object Date]"},m=function(k){return a.call(k)=="[object RegExp]"},g=function(k){return a.call(k)=="[object Boolean]"},E=function(k){return k=k-0,k===k},C=function(k,x){var V=x&&"process"in x?x.process:x;return typeof V!="function"?k:function(F,Q){return V(F,k,Q)}},P={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,x){return n(C(s,x),k)},decamelizeKeys:function(k,x){return n(C(o,x),k,x)},pascalizeKeys:function(k,x){return n(C(i,x),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:e.humps=P})(ZD)})(Yw);var eN=Yw.exports,tN=["class","style"];function nN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=eN.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function rN(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Qw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Qw(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=rN(f);break;case"style":c.style=nN(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=JD(n,tN);return Xh(t.tag,mr(mr(mr({},e),{},{class:s.class,style:mr(mr({},s.style),o)},s.attrs),a),r)}var Xw=!1;try{Xw=!0}catch{}function sN(){if(!Xw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function nf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?sn({},t,e):{}}function iN(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},sn(sn(sn(sn(sn(sn(sn(sn(sn(sn(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),sn(sn(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Qy(t){if(t&&fc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(vh.icon)return vh.icon(t);if(t===null)return null;if(fc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var bt=Gh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=at(function(){return Qy(e.icon)}),i=at(function(){return nf("classes",iN(e))}),o=at(function(){return nf("transform",typeof e.transform=="string"?vh.transform(e.transform):e.transform)}),a=at(function(){return nf("mask",Qy(e.mask))}),c=at(function(){return GD(s.value,mr(mr(mr(mr({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Mn(c,function(f){if(!f)return sN("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=at(function(){return c.value?Qw(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const oN={prefix:"fas",iconName:"table",icon:[512,512,[],"f0ce","M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},aN={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},bh={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},Jw={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"]},lN={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},wh={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},cN={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},hc={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},uN={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Eh=uN,fN={class:"list-view px-2 sm:px-4 overflow-y-scroll w-full max-h-[calc(100dvh-200px)]"},hN={class:"flex flex-row w-full"},dN={class:"font-bold bg-gray-200 p-2"},pN={class:"font-bold bg-gray-200 flex-col flex-grow-1 pt-2 pb-2"},mN={key:0,class:"ms-2"},gN=["href"],yN={class:"flex flex-col"},_N={class:"flex flex-row w-full bg-white p-2"},vN={class:"text-end w-22"},bN={class:"ms-2 ps-2"},wN={class:""},EN={class:"text-gray-600"},TN=["href"],IN={__name:"ListView",props:{data:{type:Array,required:!0},headers:{type:Array,required:!0}},setup(t){const e=t,n=at(()=>{const s=[];let i=null;return e.data.forEach(o=>{if(o.type==="title"){i&&s.push(i);const a=o.value[0].value,c=o.value[1].value,u=o.value[2].value;i={titleRow:{date:a,titleLabel:c,notes:u},rowsUnderGroup:[]}}else if(i){const a=o.value[0].value,c=o.value[1].value,u=o.value[2].value;i.rowsUnderGroup.push({date:a||"",activity:c||"",notes:u||""})}}),i&&s.push(i),s}),r=s=>typeof s=="string"&&s.startsWith("maps");return(s,i)=>(K(),ee("div",fN,[(K(!0),ee(Qe,null,tn(n.value,(o,a)=>(K(),ee("div",{key:a,class:"mb-4 border border-gray-200 shadow-sm"},[D("div",hN,[D("div",dN,Ye(o.titleRow.date),1),D("div",pN,[o.titleRow.titleLabel?(K(),ee("span",mN,Ye(o.titleRow.titleLabel),1)):yt("",!0),D("div",null,[(K(!0),ee(Qe,null,tn(o.titleRow.notes,(c,u)=>(K(),ee("span",{key:u},[D("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",class:"bg-gray-300 px-2 py-1 w-full rounded-xl text-[11px] me-1"},[r(c.url)?(K(),qt(Ce(bt),{key:0,icon:Ce(wh),class:"me-1"},null,8,["icon"])):(K(),qt(Ce(bt),{key:1,icon:Ce(bh),class:"me-1"},null,8,["icon"])),In(" "+Ye(c.label),1)],8,gN)]))),128))])])]),(K(!0),ee(Qe,null,tn(o.rowsUnderGroup,(c,u)=>(K(),ee("div",yN,[D("div",_N,[D("div",vN,Ye(c.date),1),D("div",bN,[D("div",wN,Ye(c.activity),1),D("div",EN,Ye(c.notes.text),1),D("div",null,[(K(!0),ee(Qe,null,tn(c.notes.links,(f,d)=>(K(),ee("span",{key:d,class:""},[D("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",class:"bg-gray-300 px-2 py-1 w-full rounded-xl text-[11px] me-1"},[r(f.url)?(K(),qt(Ce(bt),{key:0,icon:Ce(wh),class:"me-1"},null,8,["icon"])):(K(),qt(Ce(bt),{key:1,icon:Ce(bh),class:"me-1"},null,8,["icon"])),In(" "+Ye(f.label),1)],8,TN)]))),128))])])])]))),256))]))),128))]))}},AN={key:0,class:"fixed z-20 inset-0 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center"},SN={class:"relative bg-white rounded-lg shadow-xl w-full max-w-md"},RN={class:"flex items-start justify-between p-4 border-b rounded-t"},CN={class:"text-xl font-semibold text-gray-900"},PN={class:"p-6 space-y-4"},xN={__name:"LinkModal",props:{title:{type:String,default:"Add Link"},isVisible:{type:Boolean,default:!1}},emits:["save","close"],setup(t,{emit:e}){const n=t,r=e,s=at({get(){return n.isVisible},set(c){}}),i=_e({label:"",url:""}),o=()=>{s.value=!1,r("close")},a=()=>{r("save",{...i.value}),o()};return(c,u)=>s.value?(K(),ee("div",AN,[D("div",SN,[D("div",RN,[D("h3",CN,Ye(t.title),1),D("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",onClick:o},[ze(Ce(bt),{icon:Ce(Eh),class:"me-1"},null,8,["icon"])])]),D("div",PN,[D("div",null,[u[2]||(u[2]=D("label",{for:"label",class:"block mb-2 text-sm font-medium text-gray-900"},"Label",-1)),en(D("input",{type:"text",id:"label","onUpdate:modelValue":u[0]||(u[0]=f=>i.value.label=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Link Text",required:""},null,512),[[Gn,i.value.label]])]),D("div",null,[u[3]||(u[3]=D("label",{for:"url",class:"block mb-2 text-sm font-medium text-gray-900"},"URL",-1)),en(D("input",{type:"url",id:"url","onUpdate:modelValue":u[1]||(u[1]=f=>i.value.url=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"https://example.com",required:""},null,512),[[Gn,i.value.url]])])]),D("div",{class:"flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b"},[D("button",{onClick:a,type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Save Link"),D("button",{onClick:o,type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900"},"Cancel")])])])):yt("",!0)}},kN={class:"grid-view flex flex-col w-full h-[calc(100dvh-140px)]"},ON={class:"flex justify-between items-center mb-1 px-2 py-2"},DN={class:"flex overflow-hidden text-sm"},NN={class:"flex-grow overflow-hidden"},VN={key:0,class:"overflow-hidden w-[102%] sm:w-[101%]"},MN={class:"w-full overflow-hidden flex flex-col"},LN={class:"me-2"},FN={class:"min-w-full border-collapse text-sm w-full table-fixed"},UN={class:"bg-white"},$N={class:"mx-2 my-2"},BN={class:"row-body overflow-y-scroll w-full max-h-[calc(100dvh-260px)]"},jN={class:"min-w-full border-collapse text-sm w-full table-fixed"},zN={key:0,class:"item-container"},HN=["onBlur","onKeydown"],qN={key:1,class:"item-container"},WN=["onBlur","onKeydown"],KN={class:"item-container"},GN=["onBlur","onKeydown"],YN={key:0,class:"m-1"},QN=["href"],XN={key:3},JN={class:"border p-2 relative border-gray-200 row-item h-auto w-8 min-w-8"},ZN={class:"flex"},eV=["onClick"],tV={class:"me-2"},nV={class:"min-w-full border-collapse text-sm w-full table-fixed border border-gray-200 border-t-0"},rV=["colspan"],sV={key:1,class:"h-full w-full"},iV={__name:"Grid",props:{title:{type:String,default:"Data Grid"},initialData:{type:Array,default:()=>[]},initialHeaders:{type:Array,default:()=>[{value:"Date",type:"date"},{value:"Activity",type:"text"},{value:"Notes",type:"text"}]}},emits:["update:data","update:headers"],setup(t,{emit:e}){const n=t,r=e,s=_e("grid"),i=_e([...n.initialData]),o=_e([...n.initialHeaders]),a=_e(null),c=_e({}),u=_e(!1),f=_e(null),d=Bi({visible:!1,top:0,left:0,rowIndex:null}),m=v=>{f.value=v,u.value=!0,a.value=null,d.visible=!1};Mn(()=>n.initialHeaders,v=>{o.value=[...v]},{deep:!0}),Mn(i,v=>{console.log("Changed:",JSON.parse(JSON.stringify(v))),r("update:data",v)},{deep:!0}),Mn(o,v=>{r("update:headers",v)},{deep:!0});const g=v=>{if(d.visible){const _=document.querySelector(".dropdown-container");_&&!_.contains(v.target)&&(d.visible=!1)}},E=()=>{d.visible&&(d.visible=!1)},C=(v,_,T)=>{const S=T.target.textContent.trim(),b=[...i.value],de=b[v];de.type==="title"?de.value[_].value=S:_===2&&typeof de.value[_].value=="object"&&de.value[_].value!==null?de.value[_].value.text=S:de.value[_].value=S,i.value=b},P=v=>{const _={type:"default",value:o.value.map(S=>S.type==="date"?{cellType:"date",value:""}:S.value==="Notes"?{cellType:"note",value:""}:{cellType:"default",value:""})},T=[...i.value];T.splice(v+1,0,_),i.value=T,rs(()=>{c.value[v+1]&&c.value[v+1][0]&&c.value[v+1][0].focus()}),d.visible=!1},k=v=>{const _={type:"title",value:o.value.map(S=>S.type==="date"?{cellType:"date",value:""}:S.value==="Notes"?{cellType:"note",value:""}:{cellType:"default",value:""})},T=[...i.value];T.splice(v+1,0,_),i.value=T,rs(()=>{c.value[v+1]&&c.value[v+1][0]&&c.value[v+1][0].focus()}),d.visible=!1},x=(v,_)=>{_.stopPropagation();const T=_.target.getBoundingClientRect();d.visible&&d.tabIndex===v?d.visible=!1:(d.visible=!d.visible||d.rowIndex!==v,d.rowIndex=v,d.top=T.bottom+4,d.left=T.left-120)},V=v=>{const _=[...i.value];_.splice(v,1),i.value=_,a.value=null,d.visible=!1},F=v=>{const _=[...i.value],T=_[v];if(T.type==="title"){const S=T.value.map(b=>b.value);_[v]=S}else{const S={type:"title",value:T.map(b=>({cellType:"default",value:b}))};_[v]=S}i.value=_,a.value=null},Q=(v,_,T)=>{v.key==="Tab"&&T===o.value.length-1&&(v.preventDefault(),P(_))},se=(v,_,T)=>{c.value[_]||(c.value[_]=[]),c.value[_][T]=v},A=v=>typeof v=="string"&&v.includes("maps"),w=v=>{if(f.value!==null){const _=`[${v.label}](${v.url})`,T=f.value;if(o.value.findIndex(b=>b.value==="Notes")!==-1){const b=[...i.value];b[T].value.length&&b[T].value[2].push({cellType:"link",value:_})}else console.warn('The "Notes" column was not found.');f.value=null}u.value=!1};return Pr(()=>{document.addEventListener("click",g),window.addEventListener("resize",E)}),(v,_)=>{var T;return K(),ee("div",kN,[D("div",ON,[_[12]||(_[12]=D("h2",{class:"text-xl font-bold"},null,-1)),D("div",DN,[D("button",{onClick:_[0]||(_[0]=S=>s.value="grid"),class:gn(["px-2 py-1 flex items-center w-16 justify-center transition-colors h-7 ",s.value==="grid"?"bg-red-500 text-white border border-red-700  rounded-tl-lg rounded-bl-lg":"bg-gray-100 hover:bg-gray-200 border border-gray-400 rounded-tl-lg rounded-bl-lg"])},[ze(Ce(bt),{icon:Ce(oN),class:"me-1"},null,8,["icon"]),_[10]||(_[10]=In(" Grid "))],2),D("button",{onClick:_[1]||(_[1]=S=>s.value="list"),class:gn(["px-4 py-2 flex items-center w-16 justify-center transition-colors h-7",s.value==="list"?"bg-red-500 text-white border border-red-700 rounded-tr-lg rounded-br-lg":"bg-gray-100 hover:bg-gray-200 border-gray-400 rounded-tr-lg rounded-br-lg"])},[ze(Ce(bt),{icon:Ce(cN),class:"me-1"},null,8,["icon"]),_[11]||(_[11]=In(" List "))],2)])]),D("div",NN,[s.value==="grid"?(K(),ee("div",VN,[D("div",MN,[D("div",LN,[D("table",FN,[D("thead",UN,[D("tr",null,[(K(!0),ee(Qe,null,tn(o.value,(S,b)=>(K(),ee("th",{key:b,class:gn(["text-start",{"w-1/4":b==0," w-1/4":b===2}])},[D("div",$N,Ye(S.value),1)],2))),128)),_[13]||(_[13]=D("th",{class:"w-8 min-w-8 extra-header"},null,-1))])])])]),D("div",BN,[D("table",jN,[D("tbody",null,[(K(!0),ee(Qe,null,tn(i.value,(S,b)=>(K(),ee("tr",{key:b,class:gn(["w-full",[S.type==="title"?"bg-gray-100":"bg-white"]])},[(K(!0),ee(Qe,null,tn(S.value,(de,te)=>(K(),ee("td",{key:te,class:gn(["border border-gray-200 row-item h-auto data-row",{"w-1/4":te===0," w-1/4":te===2}])},[de.cellType==="date"?(K(),ee("div",zN,[D("div",{contenteditable:"true",class:gn(["outline-none focus:ring-1 focus:ring-gray-300 p-1 flex flex-col gap-1 h-full w-full min-h-10",{"font-bold":S.type==="title","text-right":S.type!=="title"}]),onBlur:W=>C(b,te,W),onKeydown:W=>Q(W,b,te),ref_for:!0,ref:W=>se(W,b,te)},Ye(de.value),43,HN)])):de.cellType==="default"?(K(),ee("div",qN,[D("div",{contenteditable:"true",class:"outline-none focus:ring-1 focus:ring-gray-300 p-1 flex flex-col gap-1 h-full w-full px-2 min-h-10",onBlur:W=>C(b,te,W),onKeydown:W=>Q(W,b,te),ref_for:!0,ref:W=>se(W,b,te)},Ye(de.value),41,WN)])):de.cellType==="note"?(K(),ee(Qe,{key:2},[D("div",KN,[D("div",{contenteditable:"true",class:"outline-none focus:ring-1 focus:ring-gray-300 p-1 flex flex-col gap-1 min-h-10 w-full",onBlur:W=>C(b,te,W),onKeydown:W=>Q(W,b,te),ref_for:!0,ref:W=>se(W,b,te)},[de.value?(K(),ee(Qe,{key:0},[In(Ye(de.value.text),1)],64)):yt("",!0)],40,GN)]),de.value&&de.value.links?(K(),ee("div",YN,[(K(!0),ee(Qe,null,tn(de.value.links,(W,J)=>(K(),ee("span",{key:J,class:"bg-gray-300 px-2 py-1 me-1 w-full rounded-xl text-[11px]"},[D("a",{href:W.url,target:"_blank",rel:"noopener noreferrer",class:"text-gray-600 hover:text-blue-800"},[A(W.url)?(K(),qt(Ce(bt),{key:0,size:"xs",icon:Ce(wh)},null,8,["icon"])):(K(),qt(Ce(bt),{key:1,icon:Ce(bh)},null,8,["icon"])),In(" "+Ye(W.label),1)],8,QN)]))),128))])):yt("",!0)],64)):(K(),ee("pre",XN," "+Ye(de),1))],2))),128)),D("td",JN,[D("div",ZN,[D("button",{onClick:de=>x(b,de),class:"text-gray-500 hover:text-gray-800 focus:outline-none w-5"},[ze(Ce(bt),{icon:Ce(Jw)},null,8,["icon"])],8,eV)])])],2))),128))])])]),D("div",tV,[D("table",nV,[D("tfoot",null,[D("tr",null,[D("td",{colspan:o.value.length+1,class:"py-2 bg-gray-100 space-x-2 px-4 row-item h-auto"},[D("button",{class:"bg-gray-100 text-[11px] text-gray-600 focus:outline-none",onClick:_[2]||(_[2]=S=>P(i.value.length-1))},[ze(Ce(bt),{icon:Ce(hc),class:"me-1"},null,8,["icon"]),_[14]||(_[14]=In(" Add New Row "))]),D("button",{class:"bg-gray-100 text-[11px] text-gray-600 focus:outline-none",onClick:_[3]||(_[3]=S=>k(i.value.length-1))},[ze(Ce(bt),{icon:Ce(hc),class:"me-1"},null,8,["icon"]),_[15]||(_[15]=In(" Add New Title Row "))])],8,rV)])])])])])])):(K(),ee("div",sV,[ze(IN,{data:i.value,headers:o.value},null,8,["data","headers"])]))]),d.visible?(K(),ee("div",{key:0,style:ha({position:"fixed",top:d.top+"px",left:d.left+"px",zIndex:1e3}),class:"dropdown-container w-32 rounded-md shadow-lg bg-white ring-1 ring-gray-300 ring-opacity-5 focus:outline-none py-1 text-[11px]",role:"menu","aria-orientation":"vertical"},[D("button",{onClick:_[4]||(_[4]=S=>P(d.rowIndex)),class:"block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100",role:"menuitem"}," Add Row Below "),D("button",{onClick:_[5]||(_[5]=S=>k(d.rowIndex)),class:"block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100",role:"menuitem"}," Add Title Row Below "),D("button",{onClick:_[6]||(_[6]=S=>m(d.rowIndex)),class:"block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100",role:"menuitem"}," Add Link "),D("button",{onClick:_[7]||(_[7]=S=>F(d.rowIndex)),class:"block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100",role:"menuitem"},Ye(((T=i.value[d.rowIndex])==null?void 0:T.type)==="title"?"Set to Default":"Set to Title"),1),D("button",{onClick:_[8]||(_[8]=S=>V(d.rowIndex)),class:"block w-full text-left px-4 py-2 text-red-700 hover:bg-red-100",role:"menuitem"}," Delete Row ")],4)):yt("",!0),ze(xN,{"is-visible":u.value,title:"Add Link",onSave:w,onClose:_[9]||(_[9]=S=>u.value=!1)},null,8,["is-visible"])])}}},oV=Sa(iV,[["__scopeId","data-v-5a30f371"]]),aV={class:"h-dvh bg-gray-50"},lV={class:""},cV={class:"flex justify-between items-center mb-4"},uV={class:"bg-white rounded-lg shadow-sm w-full"},fV={__name:"Home",setup(t){const e=_e(null);return Pr(()=>{e.value=Ms.currentUser}),(n,r)=>(K(),ee("div",aV,[D("div",lV,[D("div",cV,[r[2]||(r[2]=D("h1",{class:"text-2xl font-bold"},"My Travel Planner",-1)),D("button",{onClick:r[0]||(r[0]=s=>Ce(Ms).signOut()),class:"text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"},r[1]||(r[1]=[D("span",null,"Sign Out",-1),D("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1)]))]),D("div",uV,[ze(K2)])])]))}},hV={class:"min-h-dvh bg-gray-50 flex items-center justify-center p-4"},dV={class:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full"},pV={key:0,class:"mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm"},mV={class:"space-y-4"},gV=["disabled"],yV=["disabled"],_V={key:1,class:"mt-4 text-center text-gray-500"},vV={__name:"Login",setup(t){const e=Zc(),n=_e(!1),r=_e(null);Pr(()=>{const o=Ms.onAuthStateChanged(a=>{a&&e.push("/")});return()=>o()});const s=async()=>{n.value=!0,r.value=null;try{await wR(Ms,Dk),e.push("/")}catch(o){r.value=o.message,console.error("Error signing in with Google:",o)}finally{n.value=!1}},i=async()=>{n.value=!0,r.value=null;try{await QS(Ms),e.push("/")}catch(o){r.value=o.message,console.error("Error signing in as guest:",o)}finally{n.value=!1}};return(o,a)=>(K(),ee("div",hV,[D("div",dV,[a[2]||(a[2]=D("h1",{class:"text-2xl font-bold mb-6 text-center"},"My Travel Planner",-1)),r.value?(K(),ee("div",pV,Ye(r.value),1)):yt("",!0),D("div",mV,[D("button",{onClick:i,class:"w-full bg-gray-800 text-white rounded-md p-3 font-medium hover:bg-gray-700 transition-colors disabled:opacity-70",disabled:n.value}," Continue as Guest ",8,gV),a[1]||(a[1]=D("div",{className:"relative flex items-center justify-center my-6"},[D("div",{className:"absolute left-0 w-full border-t border-black"}),D("span",{className:"relative z-10 bg-white px-4 font-semibold text-gray-700"}," OR ")],-1)),D("button",{onClick:s,class:"w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-md p-3 font-medium hover:bg-gray-50 transition-colors disabled:opacity-70",disabled:n.value},a[0]||(a[0]=[HI('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg> Continue with Google ',2)]),8,yV)]),n.value?(K(),ee("div",_V," Signing in... ")):yt("",!0)])]))}},Rt=[];for(let t=0;t<256;++t)Rt.push((t+256).toString(16).slice(1));function bV(t,e=0){return(Rt[t[e+0]]+Rt[t[e+1]]+Rt[t[e+2]]+Rt[t[e+3]]+"-"+Rt[t[e+4]]+Rt[t[e+5]]+"-"+Rt[t[e+6]]+Rt[t[e+7]]+"-"+Rt[t[e+8]]+Rt[t[e+9]]+"-"+Rt[t[e+10]]+Rt[t[e+11]]+Rt[t[e+12]]+Rt[t[e+13]]+Rt[t[e+14]]+Rt[t[e+15]]).toLowerCase()}let rf;const wV=new Uint8Array(16);function EV(){if(!rf){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");rf=crypto.getRandomValues.bind(crypto)}return rf(wV)}const TV=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Xy={randomUUID:TV};function xs(t,e,n){var s;if(Xy.randomUUID&&!t)return Xy.randomUUID();t=t||{};const r=t.random??((s=t.rng)==null?void 0:s.call(t))??EV();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,bV(r)}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Jy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function ir(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jy(Object(n),!0).forEach(function(r){IV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Rl(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Rl=function(e){return typeof e}:Rl=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rl(t)}function IV(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rr(){return Rr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rr.apply(this,arguments)}function AV(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function SV(t,e){if(t==null)return{};var n=AV(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var RV="1.15.6";function br(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var Or=br(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Pa=br(/Edge/i),Zy=br(/firefox/i),Bo=br(/safari/i)&&!br(/chrome/i)&&!br(/android/i),sp=br(/iP(ad|od|hone)/i),Zw=br(/chrome/i)&&br(/android/i),eE={capture:!1,passive:!1};function $e(t,e,n){t.addEventListener(e,n,!Or&&eE)}function Le(t,e,n){t.removeEventListener(e,n,!Or&&eE)}function dc(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function tE(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function On(t,e,n,r){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&dc(t,e):dc(t,e))||r&&t===n)return t;if(t===n)break}while(t=tE(t))}return null}var e_=/\s+/g;function hn(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(e_," ").replace(" "+e+" "," ");t.className=(r+(n?" "+e:"")).replace(e_," ")}}function Se(t,e,n){var r=t&&t.style;if(r){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=n+(typeof n=="string"?"":"px")}}function Si(t,e){var n="";if(typeof t=="string")n=t;else do{var r=Se(t,"transform");r&&r!=="none"&&(n=r+" "+n)}while(!e&&(t=t.parentNode));var s=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return s&&new s(n)}function nE(t,e,n){if(t){var r=t.getElementsByTagName(e),s=0,i=r.length;if(n)for(;s<i;s++)n(r[s],s);return r}return[]}function tr(){var t=document.scrollingElement;return t||document.documentElement}function gt(t,e,n,r,s){if(!(!t.getBoundingClientRect&&t!==window)){var i,o,a,c,u,f,d;if(t!==window&&t.parentNode&&t!==tr()?(i=t.getBoundingClientRect(),o=i.top,a=i.left,c=i.bottom,u=i.right,f=i.height,d=i.width):(o=0,a=0,c=window.innerHeight,u=window.innerWidth,f=window.innerHeight,d=window.innerWidth),(e||n)&&t!==window&&(s=s||t.parentNode,!Or))do if(s&&s.getBoundingClientRect&&(Se(s,"transform")!=="none"||n&&Se(s,"position")!=="static")){var m=s.getBoundingClientRect();o-=m.top+parseInt(Se(s,"border-top-width")),a-=m.left+parseInt(Se(s,"border-left-width")),c=o+i.height,u=a+i.width;break}while(s=s.parentNode);if(r&&t!==window){var g=Si(s||t),E=g&&g.a,C=g&&g.d;g&&(o/=C,a/=E,d/=E,f/=C,c=o+f,u=a+d)}return{top:o,left:a,bottom:c,right:u,width:d,height:f}}}function t_(t,e,n){for(var r=Yr(t,!0),s=gt(t)[e];r;){var i=gt(r)[n],o=void 0;if(o=s>=i,!o)return r;if(r===tr())break;r=Yr(r,!1)}return!1}function $i(t,e,n,r){for(var s=0,i=0,o=t.children;i<o.length;){if(o[i].style.display!=="none"&&o[i]!==we.ghost&&(r||o[i]!==we.dragged)&&On(o[i],n.draggable,t,!1)){if(s===e)return o[i];s++}i++}return null}function ip(t,e){for(var n=t.lastElementChild;n&&(n===we.ghost||Se(n,"display")==="none"||e&&!dc(n,e));)n=n.previousElementSibling;return n||null}function Tn(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==we.clone&&(!e||dc(t,e))&&n++;return n}function n_(t){var e=0,n=0,r=tr();if(t)do{var s=Si(t),i=s.a,o=s.d;e+=t.scrollLeft*i,n+=t.scrollTop*o}while(t!==r&&(t=t.parentNode));return[e,n]}function CV(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[n][r])return Number(n)}return-1}function Yr(t,e){if(!t||!t.getBoundingClientRect)return tr();var n=t,r=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var s=Se(n);if(n.clientWidth<n.scrollWidth&&(s.overflowX=="auto"||s.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(s.overflowY=="auto"||s.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return tr();if(r||e)return n;r=!0}}while(n=n.parentNode);return tr()}function PV(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function sf(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var jo;function rE(t,e){return function(){if(!jo){var n=arguments,r=this;n.length===1?t.call(r,n[0]):t.apply(r,n),jo=setTimeout(function(){jo=void 0},e)}}}function xV(){clearTimeout(jo),jo=void 0}function sE(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function iE(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function oE(t,e,n){var r={};return Array.from(t.children).forEach(function(s){var i,o,a,c;if(!(!On(s,e.draggable,t,!1)||s.animated||s===n)){var u=gt(s);r.left=Math.min((i=r.left)!==null&&i!==void 0?i:1/0,u.left),r.top=Math.min((o=r.top)!==null&&o!==void 0?o:1/0,u.top),r.right=Math.max((a=r.right)!==null&&a!==void 0?a:-1/0,u.right),r.bottom=Math.max((c=r.bottom)!==null&&c!==void 0?c:-1/0,u.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var an="Sortable"+new Date().getTime();function kV(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(s){if(!(Se(s,"display")==="none"||s===we.ghost)){t.push({target:s,rect:gt(s)});var i=ir({},t[t.length-1].rect);if(s.thisAnimationDuration){var o=Si(s,!0);o&&(i.top-=o.f,i.left-=o.e)}s.fromRect=i}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(CV(t,{target:r}),1)},animateAll:function(r){var s=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,o=0;t.forEach(function(a){var c=0,u=a.target,f=u.fromRect,d=gt(u),m=u.prevFromRect,g=u.prevToRect,E=a.rect,C=Si(u,!0);C&&(d.top-=C.f,d.left-=C.e),u.toRect=d,u.thisAnimationDuration&&sf(m,d)&&!sf(f,d)&&(E.top-d.top)/(E.left-d.left)===(f.top-d.top)/(f.left-d.left)&&(c=DV(E,m,g,s.options)),sf(d,f)||(u.prevFromRect=f,u.prevToRect=d,c||(c=s.options.animation),s.animate(u,E,d,c)),c&&(i=!0,o=Math.max(o,c),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},c),u.thisAnimationDuration=c)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},o):typeof r=="function"&&r(),t=[]},animate:function(r,s,i,o){if(o){Se(r,"transition",""),Se(r,"transform","");var a=Si(this.el),c=a&&a.a,u=a&&a.d,f=(s.left-i.left)/(c||1),d=(s.top-i.top)/(u||1);r.animatingX=!!f,r.animatingY=!!d,Se(r,"transform","translate3d("+f+"px,"+d+"px,0)"),this.forRepaintDummy=OV(r),Se(r,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),Se(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){Se(r,"transition",""),Se(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},o)}}}}function OV(t){return t.offsetWidth}function DV(t,e,n,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*r.animation}var ni=[],of={initializeByDefault:!0},xa={mount:function(e){for(var n in of)of.hasOwnProperty(n)&&!(n in e)&&(e[n]=of[n]);ni.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),ni.push(e)},pluginEvent:function(e,n,r){var s=this;this.eventCanceled=!1,r.cancel=function(){s.eventCanceled=!0};var i=e+"Global";ni.forEach(function(o){n[o.pluginName]&&(n[o.pluginName][i]&&n[o.pluginName][i](ir({sortable:n},r)),n.options[o.pluginName]&&n[o.pluginName][e]&&n[o.pluginName][e](ir({sortable:n},r)))})},initializePlugins:function(e,n,r,s){ni.forEach(function(a){var c=a.pluginName;if(!(!e.options[c]&&!a.initializeByDefault)){var u=new a(e,n,e.options);u.sortable=e,u.options=e.options,e[c]=u,Rr(r,u.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var o=this.modifyOption(e,i,e.options[i]);typeof o<"u"&&(e.options[i]=o)}},getEventProperties:function(e,n){var r={};return ni.forEach(function(s){typeof s.eventProperties=="function"&&Rr(r,s.eventProperties.call(n[s.pluginName],e))}),r},modifyOption:function(e,n,r){var s;return ni.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[n]=="function"&&(s=i.optionListeners[n].call(e[i.pluginName],r))}),s}};function NV(t){var e=t.sortable,n=t.rootEl,r=t.name,s=t.targetEl,i=t.cloneEl,o=t.toEl,a=t.fromEl,c=t.oldIndex,u=t.newIndex,f=t.oldDraggableIndex,d=t.newDraggableIndex,m=t.originalEvent,g=t.putSortable,E=t.extraEventProperties;if(e=e||n&&n[an],!!e){var C,P=e.options,k="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!Or&&!Pa?C=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(C=document.createEvent("Event"),C.initEvent(r,!0,!0)),C.to=o||n,C.from=a||n,C.item=s||n,C.clone=i,C.oldIndex=c,C.newIndex=u,C.oldDraggableIndex=f,C.newDraggableIndex=d,C.originalEvent=m,C.pullMode=g?g.lastPutMode:void 0;var x=ir(ir({},E),xa.getEventProperties(r,e));for(var V in x)C[V]=x[V];n&&n.dispatchEvent(C),P[k]&&P[k].call(e,C)}}var VV=["evt"],rn=function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.evt,i=SV(r,VV);xa.pluginEvent.bind(we)(e,n,ir({dragEl:Z,parentEl:ft,ghostEl:xe,rootEl:ot,nextEl:Cs,lastDownEl:Cl,cloneEl:lt,cloneHidden:Kr,dragStarted:To,putSortable:Ct,activeSortable:we.active,originalEvent:s,oldIndex:di,oldDraggableIndex:zo,newIndex:pn,newDraggableIndex:zr,hideGhostForTarget:uE,unhideGhostForTarget:fE,cloneNowHidden:function(){Kr=!0},cloneNowShown:function(){Kr=!1},dispatchSortableEvent:function(a){Jt({sortable:n,name:a,originalEvent:s})}},i))};function Jt(t){NV(ir({putSortable:Ct,cloneEl:lt,targetEl:Z,rootEl:ot,oldIndex:di,oldDraggableIndex:zo,newIndex:pn,newDraggableIndex:zr},t))}var Z,ft,xe,ot,Cs,Cl,lt,Kr,di,pn,zo,zr,al,Ct,ui=!1,pc=!1,mc=[],Is,kn,af,lf,r_,s_,To,ri,Ho,qo=!1,ll=!1,Pl,Ft,cf=[],Th=!1,gc=[],iu=typeof document<"u",cl=sp,i_=Pa||Or?"cssFloat":"float",MV=iu&&!Zw&&!sp&&"draggable"in document.createElement("div"),aE=function(){if(iu){if(Or)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),lE=function(e,n){var r=Se(e),s=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=$i(e,0,n),o=$i(e,1,n),a=i&&Se(i),c=o&&Se(o),u=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+gt(i).width,f=c&&parseInt(c.marginLeft)+parseInt(c.marginRight)+gt(o).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&a.float!=="none"){var d=a.float==="left"?"left":"right";return o&&(c.clear==="both"||c.clear===d)?"vertical":"horizontal"}return i&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||u>=s&&r[i_]==="none"||o&&r[i_]==="none"&&u+f>s)?"vertical":"horizontal"},LV=function(e,n,r){var s=r?e.left:e.top,i=r?e.right:e.bottom,o=r?e.width:e.height,a=r?n.left:n.top,c=r?n.right:n.bottom,u=r?n.width:n.height;return s===a||i===c||s+o/2===a+u/2},FV=function(e,n){var r;return mc.some(function(s){var i=s[an].options.emptyInsertThreshold;if(!(!i||ip(s))){var o=gt(s),a=e>=o.left-i&&e<=o.right+i,c=n>=o.top-i&&n<=o.bottom+i;if(a&&c)return r=s}}),r},cE=function(e){function n(i,o){return function(a,c,u,f){var d=a.options.group.name&&c.options.group.name&&a.options.group.name===c.options.group.name;if(i==null&&(o||d))return!0;if(i==null||i===!1)return!1;if(o&&i==="clone")return i;if(typeof i=="function")return n(i(a,c,u,f),o)(a,c,u,f);var m=(o?a:c).options.group.name;return i===!0||typeof i=="string"&&i===m||i.join&&i.indexOf(m)>-1}}var r={},s=e.group;(!s||Rl(s)!="object")&&(s={name:s}),r.name=s.name,r.checkPull=n(s.pull,!0),r.checkPut=n(s.put),r.revertClone=s.revertClone,e.group=r},uE=function(){!aE&&xe&&Se(xe,"display","none")},fE=function(){!aE&&xe&&Se(xe,"display","")};iu&&!Zw&&document.addEventListener("click",function(t){if(pc)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),pc=!1,!1},!0);var As=function(e){if(Z){e=e.touches?e.touches[0]:e;var n=FV(e.clientX,e.clientY);if(n){var r={};for(var s in e)e.hasOwnProperty(s)&&(r[s]=e[s]);r.target=r.rootEl=n,r.preventDefault=void 0,r.stopPropagation=void 0,n[an]._onDragOver(r)}}},UV=function(e){Z&&Z.parentNode[an]._isOutsideThisEl(e.target)};function we(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Rr({},e),t[an]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return lE(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,a){o.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:we.supportPointer!==!1&&"PointerEvent"in window&&(!Bo||sp),emptyInsertThreshold:5};xa.initializePlugins(this,t,n);for(var r in n)!(r in e)&&(e[r]=n[r]);cE(e);for(var s in this)s.charAt(0)==="_"&&typeof this[s]=="function"&&(this[s]=this[s].bind(this));this.nativeDraggable=e.forceFallback?!1:MV,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?$e(t,"pointerdown",this._onTapStart):($e(t,"mousedown",this._onTapStart),$e(t,"touchstart",this._onTapStart)),this.nativeDraggable&&($e(t,"dragover",this),$e(t,"dragenter",this)),mc.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Rr(this,kV())}we.prototype={constructor:we,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(ri=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,Z):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,r=this.el,s=this.options,i=s.preventOnFilter,o=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,c=(a||e).target,u=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||c,f=s.filter;if(KV(r),!Z&&!(/mousedown|pointerdown/.test(o)&&e.button!==0||s.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Bo&&c&&c.tagName.toUpperCase()==="SELECT")&&(c=On(c,s.draggable,r,!1),!(c&&c.animated)&&Cl!==c)){if(di=Tn(c),zo=Tn(c,s.draggable),typeof f=="function"){if(f.call(this,e,c,this)){Jt({sortable:n,rootEl:u,name:"filter",targetEl:c,toEl:r,fromEl:r}),rn("filter",n,{evt:e}),i&&e.preventDefault();return}}else if(f&&(f=f.split(",").some(function(d){if(d=On(u,d.trim(),r,!1),d)return Jt({sortable:n,rootEl:d,name:"filter",targetEl:c,fromEl:r,toEl:r}),rn("filter",n,{evt:e}),!0}),f)){i&&e.preventDefault();return}s.handle&&!On(u,s.handle,r,!1)||this._prepareDragStart(e,a,c)}}},_prepareDragStart:function(e,n,r){var s=this,i=s.el,o=s.options,a=i.ownerDocument,c;if(r&&!Z&&r.parentNode===i){var u=gt(r);if(ot=i,Z=r,ft=Z.parentNode,Cs=Z.nextSibling,Cl=r,al=o.group,we.dragged=Z,Is={target:Z,clientX:(n||e).clientX,clientY:(n||e).clientY},r_=Is.clientX-u.left,s_=Is.clientY-u.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,Z.style["will-change"]="all",c=function(){if(rn("delayEnded",s,{evt:e}),we.eventCanceled){s._onDrop();return}s._disableDelayedDragEvents(),!Zy&&s.nativeDraggable&&(Z.draggable=!0),s._triggerDragStart(e,n),Jt({sortable:s,name:"choose",originalEvent:e}),hn(Z,o.chosenClass,!0)},o.ignore.split(",").forEach(function(f){nE(Z,f.trim(),uf)}),$e(a,"dragover",As),$e(a,"mousemove",As),$e(a,"touchmove",As),o.supportPointer?($e(a,"pointerup",s._onDrop),!this.nativeDraggable&&$e(a,"pointercancel",s._onDrop)):($e(a,"mouseup",s._onDrop),$e(a,"touchend",s._onDrop),$e(a,"touchcancel",s._onDrop)),Zy&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Z.draggable=!0),rn("delayStart",this,{evt:e}),o.delay&&(!o.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(Pa||Or))){if(we.eventCanceled){this._onDrop();return}o.supportPointer?($e(a,"pointerup",s._disableDelayedDrag),$e(a,"pointercancel",s._disableDelayedDrag)):($e(a,"mouseup",s._disableDelayedDrag),$e(a,"touchend",s._disableDelayedDrag),$e(a,"touchcancel",s._disableDelayedDrag)),$e(a,"mousemove",s._delayedDragTouchMoveHandler),$e(a,"touchmove",s._delayedDragTouchMoveHandler),o.supportPointer&&$e(a,"pointermove",s._delayedDragTouchMoveHandler),s._dragStartTimer=setTimeout(c,o.delay)}else c()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Z&&uf(Z),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Le(e,"mouseup",this._disableDelayedDrag),Le(e,"touchend",this._disableDelayedDrag),Le(e,"touchcancel",this._disableDelayedDrag),Le(e,"pointerup",this._disableDelayedDrag),Le(e,"pointercancel",this._disableDelayedDrag),Le(e,"mousemove",this._delayedDragTouchMoveHandler),Le(e,"touchmove",this._delayedDragTouchMoveHandler),Le(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?$e(document,"pointermove",this._onTouchMove):n?$e(document,"touchmove",this._onTouchMove):$e(document,"mousemove",this._onTouchMove):($e(Z,"dragend",this),$e(ot,"dragstart",this._onDragStart));try{document.selection?xl(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(ui=!1,ot&&Z){rn("dragStarted",this,{evt:n}),this.nativeDraggable&&$e(document,"dragover",UV);var r=this.options;!e&&hn(Z,r.dragClass,!1),hn(Z,r.ghostClass,!0),we.active=this,e&&this._appendGhost(),Jt({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(kn){this._lastX=kn.clientX,this._lastY=kn.clientY,uE();for(var e=document.elementFromPoint(kn.clientX,kn.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(kn.clientX,kn.clientY),e!==n);)n=e;if(Z.parentNode[an]._isOutsideThisEl(e),n)do{if(n[an]){var r=void 0;if(r=n[an]._onDragOver({clientX:kn.clientX,clientY:kn.clientY,target:e,rootEl:n}),r&&!this.options.dragoverBubble)break}e=n}while(n=tE(n));fE()}},_onTouchMove:function(e){if(Is){var n=this.options,r=n.fallbackTolerance,s=n.fallbackOffset,i=e.touches?e.touches[0]:e,o=xe&&Si(xe,!0),a=xe&&o&&o.a,c=xe&&o&&o.d,u=cl&&Ft&&n_(Ft),f=(i.clientX-Is.clientX+s.x)/(a||1)+(u?u[0]-cf[0]:0)/(a||1),d=(i.clientY-Is.clientY+s.y)/(c||1)+(u?u[1]-cf[1]:0)/(c||1);if(!we.active&&!ui){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(xe){o?(o.e+=f-(af||0),o.f+=d-(lf||0)):o={a:1,b:0,c:0,d:1,e:f,f:d};var m="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");Se(xe,"webkitTransform",m),Se(xe,"mozTransform",m),Se(xe,"msTransform",m),Se(xe,"transform",m),af=f,lf=d,kn=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!xe){var e=this.options.fallbackOnBody?document.body:ot,n=gt(Z,!0,cl,!0,e),r=this.options;if(cl){for(Ft=e;Se(Ft,"position")==="static"&&Se(Ft,"transform")==="none"&&Ft!==document;)Ft=Ft.parentNode;Ft!==document.body&&Ft!==document.documentElement?(Ft===document&&(Ft=tr()),n.top+=Ft.scrollTop,n.left+=Ft.scrollLeft):Ft=tr(),cf=n_(Ft)}xe=Z.cloneNode(!0),hn(xe,r.ghostClass,!1),hn(xe,r.fallbackClass,!0),hn(xe,r.dragClass,!0),Se(xe,"transition",""),Se(xe,"transform",""),Se(xe,"box-sizing","border-box"),Se(xe,"margin",0),Se(xe,"top",n.top),Se(xe,"left",n.left),Se(xe,"width",n.width),Se(xe,"height",n.height),Se(xe,"opacity","0.8"),Se(xe,"position",cl?"absolute":"fixed"),Se(xe,"zIndex","100000"),Se(xe,"pointerEvents","none"),we.ghost=xe,e.appendChild(xe),Se(xe,"transform-origin",r_/parseInt(xe.style.width)*100+"% "+s_/parseInt(xe.style.height)*100+"%")}},_onDragStart:function(e,n){var r=this,s=e.dataTransfer,i=r.options;if(rn("dragStart",this,{evt:e}),we.eventCanceled){this._onDrop();return}rn("setupClone",this),we.eventCanceled||(lt=iE(Z),lt.removeAttribute("id"),lt.draggable=!1,lt.style["will-change"]="",this._hideClone(),hn(lt,this.options.chosenClass,!1),we.clone=lt),r.cloneId=xl(function(){rn("clone",r),!we.eventCanceled&&(r.options.removeCloneOnHide||ot.insertBefore(lt,Z),r._hideClone(),Jt({sortable:r,name:"clone"}))}),!n&&hn(Z,i.dragClass,!0),n?(pc=!0,r._loopId=setInterval(r._emulateDragOver,50)):(Le(document,"mouseup",r._onDrop),Le(document,"touchend",r._onDrop),Le(document,"touchcancel",r._onDrop),s&&(s.effectAllowed="move",i.setData&&i.setData.call(r,s,Z)),$e(document,"drop",r),Se(Z,"transform","translateZ(0)")),ui=!0,r._dragStartId=xl(r._dragStarted.bind(r,n,e)),$e(document,"selectstart",r),To=!0,window.getSelection().removeAllRanges(),Bo&&Se(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,r=e.target,s,i,o,a=this.options,c=a.group,u=we.active,f=al===c,d=a.sort,m=Ct||u,g,E=this,C=!1;if(Th)return;function P(B,ue){rn(B,E,ir({evt:e,isOwner:f,axis:g?"vertical":"horizontal",revert:o,dragRect:s,targetRect:i,canSort:d,fromSortable:m,target:r,completed:x,onMove:function(Ve,Ie){return ul(ot,n,Z,s,Ve,gt(Ve),e,Ie)},changed:V},ue))}function k(){P("dragOverAnimationCapture"),E.captureAnimationState(),E!==m&&m.captureAnimationState()}function x(B){return P("dragOverCompleted",{insertion:B}),B&&(f?u._hideClone():u._showClone(E),E!==m&&(hn(Z,Ct?Ct.options.ghostClass:u.options.ghostClass,!1),hn(Z,a.ghostClass,!0)),Ct!==E&&E!==we.active?Ct=E:E===we.active&&Ct&&(Ct=null),m===E&&(E._ignoreWhileAnimating=r),E.animateAll(function(){P("dragOverAnimationComplete"),E._ignoreWhileAnimating=null}),E!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(r===Z&&!Z.animated||r===n&&!r.animated)&&(ri=null),!a.dragoverBubble&&!e.rootEl&&r!==document&&(Z.parentNode[an]._isOutsideThisEl(e.target),!B&&As(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),C=!0}function V(){pn=Tn(Z),zr=Tn(Z,a.draggable),Jt({sortable:E,name:"change",toEl:n,newIndex:pn,newDraggableIndex:zr,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=On(r,a.draggable,n,!0),P("dragOver"),we.eventCanceled)return C;if(Z.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||E._ignoreWhileAnimating===r)return x(!1);if(pc=!1,u&&!a.disabled&&(f?d||(o=ft!==ot):Ct===this||(this.lastPutMode=al.checkPull(this,u,Z,e))&&c.checkPut(this,u,Z,e))){if(g=this._getDirection(e,r)==="vertical",s=gt(Z),P("dragOverValid"),we.eventCanceled)return C;if(o)return ft=ot,k(),this._hideClone(),P("revert"),we.eventCanceled||(Cs?ot.insertBefore(Z,Cs):ot.appendChild(Z)),x(!0);var F=ip(n,a.draggable);if(!F||zV(e,g,this)&&!F.animated){if(F===Z)return x(!1);if(F&&n===e.target&&(r=F),r&&(i=gt(r)),ul(ot,n,Z,s,r,i,e,!!r)!==!1)return k(),F&&F.nextSibling?n.insertBefore(Z,F.nextSibling):n.appendChild(Z),ft=n,V(),x(!0)}else if(F&&jV(e,g,this)){var Q=$i(n,0,a,!0);if(Q===Z)return x(!1);if(r=Q,i=gt(r),ul(ot,n,Z,s,r,i,e,!1)!==!1)return k(),n.insertBefore(Z,Q),ft=n,V(),x(!0)}else if(r.parentNode===n){i=gt(r);var se=0,A,w=Z.parentNode!==n,v=!LV(Z.animated&&Z.toRect||s,r.animated&&r.toRect||i,g),_=g?"top":"left",T=t_(r,"top","top")||t_(Z,"top","top"),S=T?T.scrollTop:void 0;ri!==r&&(A=i[_],qo=!1,ll=!v&&a.invertSwap||w),se=HV(e,r,i,g,v?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,ll,ri===r);var b;if(se!==0){var de=Tn(Z);do de-=se,b=ft.children[de];while(b&&(Se(b,"display")==="none"||b===xe))}if(se===0||b===r)return x(!1);ri=r,Ho=se;var te=r.nextElementSibling,W=!1;W=se===1;var J=ul(ot,n,Z,s,r,i,e,W);if(J!==!1)return(J===1||J===-1)&&(W=J===1),Th=!0,setTimeout(BV,30),k(),W&&!te?n.appendChild(Z):r.parentNode.insertBefore(Z,W?te:r),T&&sE(T,0,S-T.scrollTop),ft=Z.parentNode,A!==void 0&&!ll&&(Pl=Math.abs(A-gt(r)[_])),V(),x(!0)}if(n.contains(Z))return x(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Le(document,"mousemove",this._onTouchMove),Le(document,"touchmove",this._onTouchMove),Le(document,"pointermove",this._onTouchMove),Le(document,"dragover",As),Le(document,"mousemove",As),Le(document,"touchmove",As)},_offUpEvents:function(){var e=this.el.ownerDocument;Le(e,"mouseup",this._onDrop),Le(e,"touchend",this._onDrop),Le(e,"pointerup",this._onDrop),Le(e,"pointercancel",this._onDrop),Le(e,"touchcancel",this._onDrop),Le(document,"selectstart",this)},_onDrop:function(e){var n=this.el,r=this.options;if(pn=Tn(Z),zr=Tn(Z,r.draggable),rn("drop",this,{evt:e}),ft=Z&&Z.parentNode,pn=Tn(Z),zr=Tn(Z,r.draggable),we.eventCanceled){this._nulling();return}ui=!1,ll=!1,qo=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Ih(this.cloneId),Ih(this._dragStartId),this.nativeDraggable&&(Le(document,"drop",this),Le(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Bo&&Se(document.body,"user-select",""),Se(Z,"transform",""),e&&(To&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),xe&&xe.parentNode&&xe.parentNode.removeChild(xe),(ot===ft||Ct&&Ct.lastPutMode!=="clone")&&lt&&lt.parentNode&&lt.parentNode.removeChild(lt),Z&&(this.nativeDraggable&&Le(Z,"dragend",this),uf(Z),Z.style["will-change"]="",To&&!ui&&hn(Z,Ct?Ct.options.ghostClass:this.options.ghostClass,!1),hn(Z,this.options.chosenClass,!1),Jt({sortable:this,name:"unchoose",toEl:ft,newIndex:null,newDraggableIndex:null,originalEvent:e}),ot!==ft?(pn>=0&&(Jt({rootEl:ft,name:"add",toEl:ft,fromEl:ot,originalEvent:e}),Jt({sortable:this,name:"remove",toEl:ft,originalEvent:e}),Jt({rootEl:ft,name:"sort",toEl:ft,fromEl:ot,originalEvent:e}),Jt({sortable:this,name:"sort",toEl:ft,originalEvent:e})),Ct&&Ct.save()):pn!==di&&pn>=0&&(Jt({sortable:this,name:"update",toEl:ft,originalEvent:e}),Jt({sortable:this,name:"sort",toEl:ft,originalEvent:e})),we.active&&((pn==null||pn===-1)&&(pn=di,zr=zo),Jt({sortable:this,name:"end",toEl:ft,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){rn("nulling",this),ot=Z=ft=xe=Cs=lt=Cl=Kr=Is=kn=To=pn=zr=di=zo=ri=Ho=Ct=al=we.dragged=we.ghost=we.clone=we.active=null,gc.forEach(function(e){e.checked=!0}),gc.length=af=lf=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":Z&&(this._onDragOver(e),$V(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,r=this.el.children,s=0,i=r.length,o=this.options;s<i;s++)n=r[s],On(n,o.draggable,this.el,!1)&&e.push(n.getAttribute(o.dataIdAttr)||WV(n));return e},sort:function(e,n){var r={},s=this.el;this.toArray().forEach(function(i,o){var a=s.children[o];On(a,this.options.draggable,s,!1)&&(r[i]=a)},this),n&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(s.removeChild(r[i]),s.appendChild(r[i]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return On(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var r=this.options;if(n===void 0)return r[e];var s=xa.modifyOption(this,e,n);typeof s<"u"?r[e]=s:r[e]=n,e==="group"&&cE(r)},destroy:function(){rn("destroy",this);var e=this.el;e[an]=null,Le(e,"mousedown",this._onTapStart),Le(e,"touchstart",this._onTapStart),Le(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Le(e,"dragover",this),Le(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),mc.splice(mc.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Kr){if(rn("hideClone",this),we.eventCanceled)return;Se(lt,"display","none"),this.options.removeCloneOnHide&&lt.parentNode&&lt.parentNode.removeChild(lt),Kr=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(Kr){if(rn("showClone",this),we.eventCanceled)return;Z.parentNode==ot&&!this.options.group.revertClone?ot.insertBefore(lt,Z):Cs?ot.insertBefore(lt,Cs):ot.appendChild(lt),this.options.group.revertClone&&this.animate(Z,lt),Se(lt,"display",""),Kr=!1}}};function $V(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function ul(t,e,n,r,s,i,o,a){var c,u=t[an],f=u.options.onMove,d;return window.CustomEvent&&!Or&&!Pa?c=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(c=document.createEvent("Event"),c.initEvent("move",!0,!0)),c.to=e,c.from=t,c.dragged=n,c.draggedRect=r,c.related=s||e,c.relatedRect=i||gt(e),c.willInsertAfter=a,c.originalEvent=o,t.dispatchEvent(c),f&&(d=f.call(u,c,o)),d}function uf(t){t.draggable=!1}function BV(){Th=!1}function jV(t,e,n){var r=gt($i(n.el,0,n.options,!0)),s=oE(n.el,n.options,xe),i=10;return e?t.clientX<s.left-i||t.clientY<r.top&&t.clientX<r.right:t.clientY<s.top-i||t.clientY<r.bottom&&t.clientX<r.left}function zV(t,e,n){var r=gt(ip(n.el,n.options.draggable)),s=oE(n.el,n.options,xe),i=10;return e?t.clientX>s.right+i||t.clientY>r.bottom&&t.clientX>r.left:t.clientY>s.bottom+i||t.clientX>r.right&&t.clientY>r.top}function HV(t,e,n,r,s,i,o,a){var c=r?t.clientY:t.clientX,u=r?n.height:n.width,f=r?n.top:n.left,d=r?n.bottom:n.right,m=!1;if(!o){if(a&&Pl<u*s){if(!qo&&(Ho===1?c>f+u*i/2:c<d-u*i/2)&&(qo=!0),qo)m=!0;else if(Ho===1?c<f+Pl:c>d-Pl)return-Ho}else if(c>f+u*(1-s)/2&&c<d-u*(1-s)/2)return qV(e)}return m=m||o,m&&(c<f+u*i/2||c>d-u*i/2)?c>f+u/2?1:-1:0}function qV(t){return Tn(Z)<Tn(t)?1:-1}function WV(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,r=0;n--;)r+=e.charCodeAt(n);return r.toString(36)}function KV(t){gc.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var r=e[n];r.checked&&gc.push(r)}}function xl(t){return setTimeout(t,0)}function Ih(t){return clearTimeout(t)}iu&&$e(document,"touchmove",function(t){(we.active||ui)&&t.cancelable&&t.preventDefault()});we.utils={on:$e,off:Le,css:Se,find:nE,is:function(e,n){return!!On(e,n,e,!1)},extend:PV,throttle:rE,closest:On,toggleClass:hn,clone:iE,index:Tn,nextTick:xl,cancelNextTick:Ih,detectDirection:lE,getChild:$i,expando:an};we.get=function(t){return t[an]};we.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(we.utils=ir(ir({},we.utils),r.utils)),xa.mount(r)})};we.create=function(t,e){return new we(t,e)};we.version=RV;var mt=[],Io,Ah,Sh=!1,ff,hf,yc,Ao;function GV(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var r=n.originalEvent;this.sortable.nativeDraggable?$e(document,"dragover",this._handleAutoScroll):this.options.supportPointer?$e(document,"pointermove",this._handleFallbackAutoScroll):r.touches?$e(document,"touchmove",this._handleFallbackAutoScroll):$e(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var r=n.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?Le(document,"dragover",this._handleAutoScroll):(Le(document,"pointermove",this._handleFallbackAutoScroll),Le(document,"touchmove",this._handleFallbackAutoScroll),Le(document,"mousemove",this._handleFallbackAutoScroll)),o_(),kl(),xV()},nulling:function(){yc=Ah=Io=Sh=Ao=ff=hf=null,mt.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,r){var s=this,i=(n.touches?n.touches[0]:n).clientX,o=(n.touches?n.touches[0]:n).clientY,a=document.elementFromPoint(i,o);if(yc=n,r||this.options.forceAutoScrollFallback||Pa||Or||Bo){df(n,this.options,a,r);var c=Yr(a,!0);Sh&&(!Ao||i!==ff||o!==hf)&&(Ao&&o_(),Ao=setInterval(function(){var u=Yr(document.elementFromPoint(i,o),!0);u!==c&&(c=u,kl()),df(n,s.options,u,r)},10),ff=i,hf=o)}else{if(!this.options.bubbleScroll||Yr(a,!0)===tr()){kl();return}df(n,this.options,Yr(a,!1),!1)}}},Rr(t,{pluginName:"scroll",initializeByDefault:!0})}function kl(){mt.forEach(function(t){clearInterval(t.pid)}),mt=[]}function o_(){clearInterval(Ao)}var df=rE(function(t,e,n,r){if(e.scroll){var s=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,o=e.scrollSensitivity,a=e.scrollSpeed,c=tr(),u=!1,f;Ah!==n&&(Ah=n,kl(),Io=e.scroll,f=e.scrollFn,Io===!0&&(Io=Yr(n,!0)));var d=0,m=Io;do{var g=m,E=gt(g),C=E.top,P=E.bottom,k=E.left,x=E.right,V=E.width,F=E.height,Q=void 0,se=void 0,A=g.scrollWidth,w=g.scrollHeight,v=Se(g),_=g.scrollLeft,T=g.scrollTop;g===c?(Q=V<A&&(v.overflowX==="auto"||v.overflowX==="scroll"||v.overflowX==="visible"),se=F<w&&(v.overflowY==="auto"||v.overflowY==="scroll"||v.overflowY==="visible")):(Q=V<A&&(v.overflowX==="auto"||v.overflowX==="scroll"),se=F<w&&(v.overflowY==="auto"||v.overflowY==="scroll"));var S=Q&&(Math.abs(x-s)<=o&&_+V<A)-(Math.abs(k-s)<=o&&!!_),b=se&&(Math.abs(P-i)<=o&&T+F<w)-(Math.abs(C-i)<=o&&!!T);if(!mt[d])for(var de=0;de<=d;de++)mt[de]||(mt[de]={});(mt[d].vx!=S||mt[d].vy!=b||mt[d].el!==g)&&(mt[d].el=g,mt[d].vx=S,mt[d].vy=b,clearInterval(mt[d].pid),(S!=0||b!=0)&&(u=!0,mt[d].pid=setInterval((function(){r&&this.layer===0&&we.active._onTouchMove(yc);var te=mt[this.layer].vy?mt[this.layer].vy*a:0,W=mt[this.layer].vx?mt[this.layer].vx*a:0;typeof f=="function"&&f.call(we.dragged.parentNode[an],W,te,t,yc,mt[this.layer].el)!=="continue"||sE(mt[this.layer].el,W,te)}).bind({layer:d}),24))),d++}while(e.bubbleScroll&&m!==c&&(m=Yr(m,!1)));Sh=u}},30),hE=function(e){var n=e.originalEvent,r=e.putSortable,s=e.dragEl,i=e.activeSortable,o=e.dispatchSortableEvent,a=e.hideGhostForTarget,c=e.unhideGhostForTarget;if(n){var u=r||i;a();var f=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,d=document.elementFromPoint(f.clientX,f.clientY);c(),u&&!u.el.contains(d)&&(o("spill"),this.onSpill({dragEl:s,putSortable:r}))}};function op(){}op.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var s=$i(this.sortable.el,this.startIndex,this.options);s?this.sortable.el.insertBefore(n,s):this.sortable.el.appendChild(n),this.sortable.animateAll(),r&&r.animateAll()},drop:hE};Rr(op,{pluginName:"revertOnSpill"});function ap(){}ap.prototype={onSpill:function(e){var n=e.dragEl,r=e.putSortable,s=r||this.sortable;s.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),s.animateAll()},drop:hE};Rr(ap,{pluginName:"removeOnSpill"});we.mount(new GV);we.mount(ap,op);const YV=["data-checklist-id"],QV={class:"mb-3"},XV=["onMousedown","data-id"],JV={class:"flex items-center flex-grow"},ZV=["checked","onChange"],e4=["onClick"],t4=["onKeyup"],n4=["onClick"],r4={class:"flex items-center text-gray-500"},s4={key:0,class:"mt-3"},i4=["data-id"],o4={class:"flex items-center"},a4=["checked","onChange"],l4=["onClick"],c4=["onClick"],u4={__name:"Checklist",props:{initialItems:{type:Array,default:()=>[]},initialTitle:{type:String,default:""},isEditing:{type:Boolean,default:!1},storageKey:{type:String,default:null},checklistId:{type:String,default:()=>xs()}},emits:["update:items","update:title","change"],setup(t,{expose:e,emit:n}){const r=t,s=n,i=_e(r.initialTitle||""),o=_e(!1),a=_e(""),c=_e([]),u=_e(null),f=_e(null);let d=null;const m=_e(!1),g=_e(null),E=_e(null),C=_e(""),P={mounted:B=>B.focus()},k=()=>r.storageKey?r.storageKey:`checklist-${r.checklistId}`;Pr(()=>{k(),r.initialItems&&r.initialItems.length&&(c.value=r.initialItems.map(B=>({id:B.id||xs(),text:B.text||"",completed:B.completed||!1}))),u.value&&(d=new we(u.value,{animation:150,onEnd:B=>{const ue=B.newIndex,pe=B.oldIndex,Ve=c.value.filter(bn=>!bn.completed),Ie=Ve.splice(pe,1)[0];Ve.splice(ue,0,Ie);const nt=c.value.filter(bn=>bn.completed);c.value=[...Ve,...nt],m.value=!1,g.value=null,V()},onStart:B=>{if(E.value!==null)return B.preventDefault(),!1;g.value=B.oldIndex,m.value=!0}}))});const x=()=>{s("update:items",c.value),s("update:title",i.value),V()},V=()=>{s("change",{id:r.checklistId,title:i.value,items:c.value}),s("update:title",i.value)};Mn(c,x,{deep:!0}),Mn(i,x);const F=()=>{a.value=i.value,o.value=!0},Q=()=>{i.value=a.value.trim(),o.value=!1,V()},se=()=>{o.value=!1},A=()=>{const B={id:xs(),text:"",completed:!1},ue=c.value.filter(Ve=>!Ve.completed);ue.push(B);const pe=c.value.filter(Ve=>Ve.completed);c.value=[...ue,...pe],rs(()=>{w(B.id)})},w=B=>{const ue=c.value.find(pe=>pe.id===B);ue&&(E.value=B,C.value=ue.text)},v=()=>{if(E.value!==null){const B=c.value.find(ue=>ue.id===E.value);B&&(B.text=C.value),E.value=null,V()}},_=()=>{E.value=null},T=B=>{v();const ue={id:xs(),text:"",completed:!1},pe=c.value.filter(Ie=>!Ie.completed);pe.splice(B+1,0,ue);const Ve=c.value.filter(Ie=>Ie.completed);c.value=[...pe,...Ve],rs(()=>{w(ue.id)})},S=B=>{const ue=c.value.find(pe=>pe.id===B);if(ue){ue.completed=!ue.completed,E.value===B&&v();const pe=c.value.filter(Ie=>Ie.completed),Ve=c.value.filter(Ie=>!Ie.completed);c.value=[...Ve,...pe],V()}},b=B=>{E.value===B&&(E.value=null),c.value=c.value.filter(ue=>ue.id!==B),V()},de=at(()=>c.value.filter(B=>!B.completed)),te=at(()=>c.value.filter(B=>B.completed)),W=(B,ue)=>{ue.target.tagName==="INPUT"||ue.target.tagName==="BUTTON"||E.value!==null||c.value[B].completed||(g.value=B,m.value=!0)},J=()=>{m.value=!1,g.value=null};return ev(()=>{d&&(d.destroy(),d=null)}),e({items:c,title:i,checklistId:r.checklistId,reset:()=>{c.value=[],i.value="",x()},setTitle:B=>{i.value=B,x()},setItems:B=>{c.value=B.map(ue=>({id:ue.id||xs(),text:ue.text||"",completed:ue.completed||!1})),x()}}),(B,ue)=>(K(),ee("div",{class:"checklist p-3","data-checklist-id":t.checklistId},[D("div",QV,[o.value?en((K(),ee("input",{key:1,type:"text","onUpdate:modelValue":ue[0]||(ue[0]=pe=>a.value=pe),onKeyup:[fi(Q,["enter"]),fi(se,["esc"])],onBlur:Q,class:"text-xl font-semibold w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-1"},null,544)),[[Gn,a.value],[P]]):(K(),ee("h2",{key:0,onClick:F,class:gn(["text-xl font-semibold cursor-text truncate",{"text-gray-400":!i.value}])},Ye(i.value||"Title"),3))]),D("ul",{class:"checklist-items mt-1",ref_key:"incompleteItemsContainer",ref:u},[(K(!0),ee(Qe,null,tn(de.value,(pe,Ve)=>(K(),ee("li",{key:pe.id,class:gn(["flex items-center justify-between bg-white p-2 mb-1 cursor-grab rounded-md border border-gray-200 shadow-sm",{"cursor-grabbing":m.value&&g.value===Ve}]),onMousedown:Ie=>W(Ve,Ie),onMouseup:J,"data-id":pe.id},[D("div",JV,[pe.completed?yt("",!0):(K(),qt(Ce(bt),{key:0,icon:Ce(aN),class:"me-3"},null,8,["icon"])),D("input",{type:"checkbox",checked:pe.completed,onChange:Ie=>S(pe.id),class:"mr-2 rounded-md focus:ring-blue-500 h-5 w-5 cursor-pointer"},null,40,ZV),E.value!==pe.id?(K(),ee("span",{key:1,onClick:Ie=>w(pe.id),class:"flex-grow cursor-text"},Ye(pe.text||"New item"),9,e4)):en((K(),ee("input",{key:2,type:"text","onUpdate:modelValue":ue[1]||(ue[1]=Ie=>C.value=Ie),onKeyup:[fi(Ie=>T(Ve),["enter"]),fi(_,["esc"])],onBlur:v,class:"flex-grow rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-1"},null,40,t4)),[[Gn,C.value],[P]])]),D("button",{onClick:Ie=>b(pe.id),class:"text-gray-500 hover:text-red-500 transition-colors focus:outline-none"},[ze(Ce(bt),{icon:Ce(Eh),class:"me-3"},null,8,["icon"])],8,n4)],42,XV))),128))],512),D("div",{class:"flex items-center justify-between bg-white p-2 cursor-pointer rounded-md border border-gray-200 shadow-sm",onClick:A},[D("div",r4,[ze(Ce(bt),{icon:Ce(hc),class:"me-2"},null,8,["icon"]),ue[2]||(ue[2]=D("span",null,"Add new item",-1))])]),te.value.length>0?(K(),ee("div",s4,[ue[3]||(ue[3]=D("h3",{class:"text-lg font-semibold mb-2 text-gray-700"},"Completed Items",-1)),D("ul",{class:"checklist-items space-y-2",ref_key:"completedItemsContainer",ref:f},[(K(!0),ee(Qe,null,tn(te.value,(pe,Ve)=>(K(),ee("li",{key:pe.id,class:"flex items-center justify-between bg-white rounded-md p-2 shadow-sm opacity-50 line-through text-gray-400 border","data-id":pe.id},[D("div",o4,[D("input",{type:"checkbox",checked:pe.completed,onChange:Ie=>S(pe.id),class:"mr-2 rounded-md focus:ring-blue-500 h-5 w-5"},null,40,a4),D("span",{class:"line-through text-gray-400 cursor-text",onClick:Ie=>w(pe.id)},Ye(pe.text),9,l4)]),D("button",{onClick:Ie=>b(pe.id),class:"text-gray-500 hover:text-red-500 transition-colors focus:outline-none"},[ze(Ce(bt),{icon:Ce(Eh),class:"me-3"},null,8,["icon"])],8,c4)],8,i4))),128))],512)])):yt("",!0)],8,YV))}},Rh=Sa(u4,[["__scopeId","data-v-586cc6fa"]]),f4={class:"fixed inset-0 z-50 flex justify-center items-center"},h4={class:"bg-white rounded-2xl shadow-xl w-[95%] max-w-lg"},d4={class:"modal-body p-4"},p4={__name:"Modal",props:{modelValue:{type:Boolean,default:!1},width:{type:String,default:"500px"},maxWidth:{type:String,default:"80vw"}},emits:["update:modelValue","close"],setup(t,{emit:e}){const n=t,r=e;return at({get(){return n.modelValue},set(s){r("update:modelValue",s),s||r("close")}}),at(()=>({width:n.width,maxWidth:n.maxWidth})),(s,i)=>(K(),ee(Qe,null,[i[1]||(i[1]=D("div",{class:"fixed inset-0 bg-black opacity-50 z-30"},null,-1)),D("div",f4,[D("div",h4,[D("div",d4,[hI(s.$slots,"default",{},()=>[i[0]||(i[0]=D("p",null,"This is the default modal content.",-1))])])])])],64))}},m4={class:"notes-container p-4 bg-white"},g4={class:"new-note-input-container mb-6"},y4={key:1,class:"bg-white shadow rounded-lg p-4"},_4={key:1},v4={key:2},b4={class:"flex justify-between pt-2 border-t border-gray-200 mt-2"},w4={class:"overflow-auto h-[calc(100dvh-230px)]"},E4=["onClick"],T4={class:"note-menu-container relative w-full"},I4=["onClick"],A4=["onClick"],S4=["onClick"],R4=["onClick"],C4={class:"text-xl font-semibold text-gray-800"},P4={key:0,class:"text-gray-700 whitespace-pre-line"},x4={key:1},k4={class:"list-disc pl-5 text-gray-700"},O4={key:0,class:"text-center text-gray-500 mt-8"},D4={key:1},N4={key:2},V4={__name:"Notes",props:{initialNotes:{type:Array,default:()=>[]}},setup(t){const e=t,n=_e([]),r=_e(!1),s=_e(null),i=_e(u()),o=_e(!1),a=_e(null),c=_e(null);Pr(()=>{f(),rs(()=>{c.value&&we.create(c.value,{animation:150,onEnd:_=>{const T=n.value.splice(_.oldIndex,1)[0];n.value.splice(_.newIndex,0,T)}})})}),Mn(n,d,{deep:!0});function u(){return{id:xs(),title:"",content:"",isChecklist:!1,items:[],timestamp:new Date().toISOString()}}function f(){e.initialNotes&&e.initialNotes.length>0&&(n.value=[...e.initialNotes])}function d(){}function m(){r.value=!0,i.value=u()}function g(){n.value.unshift({...i.value}),E()}function E(){i.value=u(),r.value=!1}function C(){E()}function P(){i.value.isChecklist=!i.value.isChecklist}function k(_){i.value.items=_.items}function x(_){i.value&&(i.value.title=_)}const V=_=>{s.value=s.value===_?null:_},F=_=>{n.value.splice(_,1)},Q=_=>{const T={...n.value[_],id:xs()};n.value.push(T)};function se(_){a.value=JSON.parse(JSON.stringify(_)),o.value=!0}function A(){const _=n.value.findIndex(T=>T.id===a.value.id);_!==-1&&(n.value[_]={...a.value}),w()}function w(){o.value=!1,a.value=null}function v(_){a.value.title=_.title,a.value.items=_.items}return(_,T)=>(K(),ee("div",m4,[D("div",g4,[r.value?(K(),ee("div",y4,[i.value.isChecklist?yt("",!0):en((K(),ee("input",{key:0,"onUpdate:modelValue":T[0]||(T[0]=S=>i.value.title=S),type:"text",class:"w-full border-b mb-2 text-xl font-semibold p-1 focus:outline-none",placeholder:"Title"},null,512)),[[Gn,i.value.title]]),i.value.isChecklist?(K(),ee("div",v4,[ze(Rh,{initialItems:i.value.items,"onUpdate:title":x,onChange:k},null,8,["initialItems"])])):(K(),ee("div",_4,[en(D("textarea",{"onUpdate:modelValue":T[1]||(T[1]=S=>i.value.content=S),placeholder:"Take a note...",class:"w-full h-20 border-0 resize-none focus:outline-none"},null,512),[[Gn,i.value.content]])])),D("div",b4,[D("button",{onClick:g,class:"px-3 py-1 rounded bg-blue-100 text-gray-700 text-sm"},"Save"),D("div",null,[D("button",{onClick:P,class:gn(["px-3 py-1 rounded text-sm me-1",i.value.isChecklist?"bg-blue-100 text-blue-700":"bg-green-100 text-gray-700"])},Ye(i.value.isChecklist?"Switch to Note":"Switch to Checklist"),3),D("button",{onClick:C,class:"px-3 py-1 rounded bg-gray-100 text-gray-700 text-sm"},"Close")])])])):(K(),ee("div",{key:0,onClick:m,class:"bg-white shadow rounded-lg h-12 flex items-center px-4 cursor-text"},T[6]||(T[6]=[D("span",{class:"text-gray-500"},"Take a note...",-1)])))]),D("div",w4,[D("div",{class:"notes-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-3",ref_key:"notesGrid",ref:c},[(K(!0),ee(Qe,null,tn(n.value,(S,b)=>(K(),ee("div",{key:S.id,class:"note-card bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200",onClick:de=>se(S)},[D("div",T4,[D("button",{class:"note-menu-button absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none p-2",onClick:fr(de=>V(S.id),["stop"])},[ze(Ce(bt),{icon:Ce(Jw)},null,8,["icon"])],8,I4),s.value===S.id?(K(),ee("div",{key:0,class:"note-menu absolute top-8 right-0 bg-white rounded-md shadow-lg border border-gray-200 w-32 z-10",onClick:T[2]||(T[2]=fr(()=>{},["stop"]))},[D("button",{class:"note-menu-item block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left",onClick:de=>{Q(b),V(null)}}," Duplicate ",8,A4),D("button",{class:"note-menu-item block px-4 py-2 text-red-500 hover:bg-gray-100 w-full text-left",onClick:de=>{F(b),V(null)}}," Delete ",8,S4),D("button",{class:"note-menu-item block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left",onClick:de=>{_.convertToChecklist(b),V(null)}}," Checklist ",8,R4)])):yt("",!0)]),D("h3",C4,Ye(S.title),1),S.isChecklist?(K(),ee("div",x4,[D("ul",k4,[(K(!0),ee(Qe,null,tn(S.items,de=>(K(),ee("li",{key:de.id},Ye(de.text),1))),128))])])):(K(),ee("p",P4,Ye(S.content),1))],8,E4))),128))],512)]),n.value.length===0?(K(),ee("div",O4," No notes yet. Add some! ")):yt("",!0),a.value?(K(),qt(p4,{key:1,modelValue:o.value,"onUpdate:modelValue":T[5]||(T[5]=S=>o.value=S)},{default:Wh(()=>{var S;return[(S=a.value)!=null&&S.isChecklist?yt("",!0):en((K(),ee("input",{key:0,"onUpdate:modelValue":T[3]||(T[3]=b=>a.value.title=b),type:"text",class:"w-full border mb-2 p-2 rounded focus:outline-none",placeholder:"Title"},null,512)),[[Gn,a.value.title]]),a.value.isChecklist?(K(),ee("div",N4,[ze(Rh,{initialItems:a.value.items,initialTitle:a.value.title,onChange:v},null,8,["initialItems","initialTitle"])])):(K(),ee("div",D4,[en(D("textarea",{"onUpdate:modelValue":T[4]||(T[4]=b=>a.value.content=b),class:"w-full h-24 border p-2 rounded focus:outline-none"},null,512),[[Gn,a.value.content]])])),D("div",{class:"flex justify-end mt-4"},[D("button",{onClick:A,class:"bg-blue-500 text-white px-4 py-2 rounded mr-2"},"Save"),D("button",{onClick:w,class:"bg-gray-300 px-4 py-2 rounded"},"Cancel")])]}),_:1},8,["modelValue"])):yt("",!0)]))}},M4=Sa(V4,[["__scopeId","data-v-82f19f44"]]),L4={key:0},F4={key:1},U4={key:2},$4={class:"flex flex-col w-full relative"},B4={class:"flex border-b border-gray-200 bg-gray-50 relative"},j4={class:"flex items-center overflow-x-auto flex-grow"},z4=["onClick"],H4={class:"flex items-center space-x-2"},q4={key:0},W4={key:1,class:"select-none"},K4={class:"relative"},G4=["onClick"],Y4={class:"bg-white flex-grow relative z-10"},Q4={class:"h-full"},X4={class:"relative"},J4={__name:"Plan",setup(t){const e=F2(),n=Zc(),r=ln("currentUser"),s=_e(e.params.travelPlanId),i=_e(null),o=_e(!0),a=_e(null),c=_e(0),u=_e(null),f=_e(""),d=_e([]),m=_e(!1),g=Bi({visible:!1,top:0,left:0,tabIndex:null}),E=_e([{value:"Date",type:"date",position:1},{value:"Activity",type:"text",position:2},{value:"Notes",type:"notes",position:3}]),C=_e([{type:"title",value:[{value:"",cellType:"date"},{value:"",cellType:"default"},{value:"",cellType:"note"}]},{type:"default",value:[{value:"",cellType:"date"},{value:"",cellType:"default"},{value:"",cellType:"note"}]}]),P=at(()=>i.value&&i.value.tabs?Object.values(i.value.tabs).sort((te,W)=>te.tabPosition-W.tabPosition):[]),k=()=>{n.push("/")};Pr(async()=>{var te;try{const W=(te=r.value)==null?void 0:te.uid;if(!W){a.value="User not authenticated.",o.value=!1;return}console.log(`user: ${W}`);const J=Hb(Hd,`users/${W}/travelPlans`,s.value),B=await Rk(J);B.exists()?(i.value={id:B.id,...B.data()},console.log("plan:",JSON.parse(JSON.stringify(i.value)))):a.value="Travel plan not found."}catch(W){console.error("Error fetching travel plan: ",W),a.value="Failed to fetch travel plan."}finally{o.value=!1}document.addEventListener("click",x),window.addEventListener("resize",V),"ontouchstart"in window&&(isTouch.value=!0)});const x=te=>{if(g.visible){const W=document.querySelector(".dropdown-container");W&&!W.contains(te.target)&&(g.visible=!1,m.value=!1)}},V=()=>{g.visible&&(g.visible=!1,m.value=!1)},F=te=>{te&&te.stopPropagation(),m.value=!m.value},Q=te=>{c.value=te,g.visible=!1,m.value=!1},se=()=>{u.value!==null&&(f.value.trim()&&(P.value[u.value].name=f.value.trim()),u.value=null)},A=()=>{u.value=null},w=(te,W)=>{W.stopPropagation();const J=W.target.getBoundingClientRect();g.visible&&g.tabIndex===te?g.visible=!1:(g.visible=!0,g.tabIndex=te,g.top=J.bottom+4,g.left=J.left,m.value=!1)},v=te=>{te!==null&&(u.value=te,console.log("editingTabIndex",te),f.value=P.value[te].title,g.visible=!1,rs(()=>{d.value[te]?(d.value[te].focus(),d.value[te].select()):console.warn(`Input at index ${te} not found.`)}))},_=te=>{const J=Object.keys(i.value.tabs).filter(B=>B.startsWith(`${te}_`)).reduce((B,ue)=>{const pe=ue.split("_");if(pe.length===2&&pe[0]===te){const Ve=parseInt(pe[1],10);return isNaN(Ve)?B:Math.max(B,Ve)}return B},0);return`${te}_${J+1}`},T=(te="table")=>{const W=_(te),J=Object.keys(P.value).length+1;let B,ue;switch(te){case"table":ue="New Table",B={headers:E.value.map(Ve=>({...Ve})),tableData:C.value.map(Ve=>({...Ve}))};break;case"checklist":ue="New Checklist",B={title:"",items:[]};break;case"notes":ue="New Notes",B={notesList:[]};break;default:console.error(`Unknown tab type: ${te}`);return}const pe={tabPosition:J,type:te,title:ue,tabId:J,value:B};i.value.tabs[W]=pe},S=(te,W)=>{try{if(W!==null){const J=P.value[W];J.variant=te,g.visible=!1,m.value=!1,te!=="table"?(delete J.tabData,delete J.tableHeaders,J.content=""):te==="table"&&!J.tabData&&(J.tabData=C.map(B=>({...B})),J.tableHeaders=[...E])}}catch(J){console.error("Error in setTabVariant:",J)}},b=te=>{if(te!==null){const W=P.value[te],J=`${W.name} (copy)`,B=W.tabData?W.tabData.map(pe=>pe.value?{...pe,value:pe.value.map(Ve=>Ve.map(Ie=>({...Ie})))}:{...pe}):void 0,ue=W.tableHeaders?W.tableHeaders.map(pe=>({...pe})):void 0;P.value.splice(te+1,0,{name:J,content:W.content,variant:W.variant,tabData:B,tableHeaders:ue}),Q(te+1),g.visible=!1}},de=te=>{te!==null&&(P.value.splice(te,1),te<=c.value&&(c.value=Math.max(0,c.value-1)),g.visible=!1)};return(te,W)=>(K(),ee("div",null,[D("button",{onClick:k,class:"back-button"},"Back to Home"),W[10]||(W[10]=D("h1",null,"Travel Plan Details",-1)),o.value?(K(),ee("div",L4,"Loading plan details...")):a.value?(K(),ee("div",F4,Ye(a.value),1)):i.value?(K(),ee("div",U4,[D("h2",null,Ye(i.value.title),1),D("div",$4,[D("div",B4,[D("div",j4,[(K(!0),ee(Qe,null,tn(P.value,(J,B)=>(K(),ee("div",{key:B,class:"flex items-center whitespace-nowrap relative"},[D("div",{class:gn(["flex items-center px-4 pt-1.5 pb-2 border-r text-sm  cursor-pointer rounded-tr-xl rounded-tl-sm",c.value===B?"bg-white border-t-3  font-bold border-t-red-400 border-r-gray-200":"hover:bg-gray-100 font-medium border-t-2 border-gray-200"]),onClick:ue=>Q(B)},[D("div",H4,[u.value===B?(K(),ee("div",q4,[In(" index:"+Ye(B)+" ",1),en(D("input",{ref_for:!0,ref:ue=>d.value[B]=ue,"onUpdate:modelValue":W[0]||(W[0]=ue=>f.value=ue),class:"border px-1 py-0.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 w-24",onBlur:se,onKeyup:[fi(se,["enter"]),fi(A,["esc"])]},null,544),[[Gn,f.value]])])):(K(),ee("span",W4,Ye(J.title),1)),D("div",K4,[D("button",{class:"text-gray-500 hover:text-gray-800 focus:outline-none cursor-pointer pl-1 pt-1.5",onClick:fr(ue=>w(B,ue),["stop"])},[ze(Ce(bt),{icon:Ce(lN),class:"me-1"},null,8,["icon"])],8,G4)])])],10,z4)]))),128)),D("button",{class:"flex items-center justify-center h-9 w-9 text-gray-500 hover:text-gray-700 hover:bg-gray-100",onClick:W[1]||(W[1]=J=>T("table"))},[ze(Ce(bt),{icon:Ce(hc),class:"me-1"},null,8,["icon"])])])]),D("div",Y4,[(K(!0),ee(Qe,null,tn(P.value,(J,B)=>(K(),ee("div",{key:`content-${B}`},[en(D("div",Q4,[J.type==="table"?(K(),qt(oV,{key:0,initialHeaders:J.value.headers,initialData:J.value.tableData},null,8,["initialHeaders","initialData"])):J.type==="checklist"?(K(),qt(Rh,{key:1,initialItems:J.value.items,initialTitle:J.value.title},null,8,["initialItems","initialTitle"])):J.type==="notes"?(K(),qt(M4,{key:2,initialNotes:J.value.notesList},null,8,["initialNotes"])):yt("",!0)],512),[[a1,c.value===B]])]))),128))]),g.visible?(K(),ee("div",{key:0,class:"dropdown-container absolute top-0 left-0 mt-1 w-32 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-40",style:ha({position:"fixed",top:g.top+"px",left:g.left+"px",zIndex:1e3})},[D("button",{class:"block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100",onClick:W[2]||(W[2]=fr(J=>v(g.tabIndex),["stop"]))}," Rename "),D("button",{class:"block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100",onClick:W[3]||(W[3]=fr(J=>b(g.tabIndex),["stop"]))}," Duplicate "),D("div",X4,[D("button",{class:"block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100",onClick:fr(F,["stop"])},W[9]||(W[9]=[In(" Variant "),D("span",{class:"float-right text-xs"},"▶",-1)])),m.value?(K(),ee("div",{key:0,class:"absolute left-full top-0 ml-[-1px] w-32 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-50",onClick:W[7]||(W[7]=fr(()=>{},["stop"]))},[D("button",{class:"block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100",onClick:W[4]||(W[4]=J=>S("table",g.tabIndex))}," Table "),D("button",{class:"block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100",onClick:W[5]||(W[5]=J=>S("checklist",g.tabIndex))}," Checklist "),D("button",{class:"block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100",onClick:W[6]||(W[6]=J=>S("notes",g.tabIndex))}," Notes ")])):yt("",!0)]),P.value.length>1?(K(),ee("button",{key:0,class:"block w-full text-left px-4 py-1 text-sm text-red-600 hover:bg-gray-100",onClick:W[8]||(W[8]=fr(J=>de(g.tabIndex),["stop"]))}," Delete ")):yt("",!0)],4)):yt("",!0)])])):yt("",!0)]))}},Z4=[{path:"/",name:"Home",component:fV,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:vV},{path:"/plan/:travelPlanId",name:"PlanDetails",component:J4}],dE=M2({history:f2(),routes:Z4});dE.beforeEach(async(t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=Ms.currentUser;await new Promise(i=>{const o=setInterval(()=>{mw.value&&(clearInterval(o),i())},50)}),r&&!s?n("/login"):t.name==="Login"&&s?n("/"):n()});function pE(t,e){return function(){return t.apply(e,arguments)}}const{toString:eM}=Object.prototype,{getPrototypeOf:lp}=Object,{iterator:ou,toStringTag:mE}=Symbol,au=(t=>e=>{const n=eM.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Bn=t=>(t=t.toLowerCase(),e=>au(e)===t),lu=t=>e=>typeof e===t,{isArray:Qi}=Array,ua=lu("undefined");function tM(t){return t!==null&&!ua(t)&&t.constructor!==null&&!ua(t.constructor)&&cn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const gE=Bn("ArrayBuffer");function nM(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&gE(t.buffer),e}const rM=lu("string"),cn=lu("function"),yE=lu("number"),cu=t=>t!==null&&typeof t=="object",sM=t=>t===!0||t===!1,Ol=t=>{if(au(t)!=="object")return!1;const e=lp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(mE in t)&&!(ou in t)},iM=Bn("Date"),oM=Bn("File"),aM=Bn("Blob"),lM=Bn("FileList"),cM=t=>cu(t)&&cn(t.pipe),uM=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||cn(t.append)&&((e=au(t))==="formdata"||e==="object"&&cn(t.toString)&&t.toString()==="[object FormData]"))},fM=Bn("URLSearchParams"),[hM,dM,pM,mM]=["ReadableStream","Request","Response","Headers"].map(Bn),gM=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ka(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Qi(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function _E(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Ns=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vE=t=>!ua(t)&&t!==Ns;function Ch(){const{caseless:t}=vE(this)&&this||{},e={},n=(r,s)=>{const i=t&&_E(e,s)||s;Ol(e[i])&&Ol(r)?e[i]=Ch(e[i],r):Ol(r)?e[i]=Ch({},r):Qi(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ka(arguments[r],n);return e}const yM=(t,e,n,{allOwnKeys:r}={})=>(ka(e,(s,i)=>{n&&cn(s)?t[i]=pE(s,n):t[i]=s},{allOwnKeys:r}),t),_M=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),vM=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},bM=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&lp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},wM=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},EM=t=>{if(!t)return null;if(Qi(t))return t;let e=t.length;if(!yE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},TM=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&lp(Uint8Array)),IM=(t,e)=>{const r=(t&&t[ou]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},AM=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},SM=Bn("HTMLFormElement"),RM=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),a_=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),CM=Bn("RegExp"),bE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ka(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},PM=t=>{bE(t,(e,n)=>{if(cn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(cn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},xM=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Qi(t)?r(t):r(String(t).split(e)),n},kM=()=>{},OM=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function DM(t){return!!(t&&cn(t.append)&&t[mE]==="FormData"&&t[ou])}const NM=t=>{const e=new Array(10),n=(r,s)=>{if(cu(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Qi(r)?[]:{};return ka(r,(o,a)=>{const c=n(o,s+1);!ua(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},VM=Bn("AsyncFunction"),MM=t=>t&&(cu(t)||cn(t))&&cn(t.then)&&cn(t.catch),wE=((t,e)=>t?setImmediate:e?((n,r)=>(Ns.addEventListener("message",({source:s,data:i})=>{s===Ns&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Ns.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",cn(Ns.postMessage)),LM=typeof queueMicrotask<"u"?queueMicrotask.bind(Ns):typeof process<"u"&&process.nextTick||wE,FM=t=>t!=null&&cn(t[ou]),M={isArray:Qi,isArrayBuffer:gE,isBuffer:tM,isFormData:uM,isArrayBufferView:nM,isString:rM,isNumber:yE,isBoolean:sM,isObject:cu,isPlainObject:Ol,isReadableStream:hM,isRequest:dM,isResponse:pM,isHeaders:mM,isUndefined:ua,isDate:iM,isFile:oM,isBlob:aM,isRegExp:CM,isFunction:cn,isStream:cM,isURLSearchParams:fM,isTypedArray:TM,isFileList:lM,forEach:ka,merge:Ch,extend:yM,trim:gM,stripBOM:_M,inherits:vM,toFlatObject:bM,kindOf:au,kindOfTest:Bn,endsWith:wM,toArray:EM,forEachEntry:IM,matchAll:AM,isHTMLForm:SM,hasOwnProperty:a_,hasOwnProp:a_,reduceDescriptors:bE,freezeMethods:PM,toObjectSet:xM,toCamelCase:RM,noop:kM,toFiniteNumber:OM,findKey:_E,global:Ns,isContextDefined:vE,isSpecCompliantForm:DM,toJSONObject:NM,isAsyncFn:VM,isThenable:MM,setImmediate:wE,asap:LM,isIterable:FM};function Ne(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}M.inherits(Ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.status}}});const EE=Ne.prototype,TE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{TE[t]={value:t}});Object.defineProperties(Ne,TE);Object.defineProperty(EE,"isAxiosError",{value:!0});Ne.from=(t,e,n,r,s,i)=>{const o=Object.create(EE);return M.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),Ne.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const UM=null;function Ph(t){return M.isPlainObject(t)||M.isArray(t)}function IE(t){return M.endsWith(t,"[]")?t.slice(0,-2):t}function l_(t,e,n){return t?t.concat(e).map(function(s,i){return s=IE(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function $M(t){return M.isArray(t)&&!t.some(Ph)}const BM=M.toFlatObject(M,{},null,function(e){return/^is[A-Z]/.test(e)});function uu(t,e,n){if(!M.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=M.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,P){return!M.isUndefined(P[C])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&M.isSpecCompliantForm(e);if(!M.isFunction(s))throw new TypeError("visitor must be a function");function u(E){if(E===null)return"";if(M.isDate(E))return E.toISOString();if(!c&&M.isBlob(E))throw new Ne("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(E)||M.isTypedArray(E)?c&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function f(E,C,P){let k=E;if(E&&!P&&typeof E=="object"){if(M.endsWith(C,"{}"))C=r?C:C.slice(0,-2),E=JSON.stringify(E);else if(M.isArray(E)&&$M(E)||(M.isFileList(E)||M.endsWith(C,"[]"))&&(k=M.toArray(E)))return C=IE(C),k.forEach(function(V,F){!(M.isUndefined(V)||V===null)&&e.append(o===!0?l_([C],F,i):o===null?C:C+"[]",u(V))}),!1}return Ph(E)?!0:(e.append(l_(P,C,i),u(E)),!1)}const d=[],m=Object.assign(BM,{defaultVisitor:f,convertValue:u,isVisitable:Ph});function g(E,C){if(!M.isUndefined(E)){if(d.indexOf(E)!==-1)throw Error("Circular reference detected in "+C.join("."));d.push(E),M.forEach(E,function(k,x){(!(M.isUndefined(k)||k===null)&&s.call(e,k,M.isString(x)?x.trim():x,C,m))===!0&&g(k,C?C.concat(x):[x])}),d.pop()}}if(!M.isObject(t))throw new TypeError("data must be an object");return g(t),e}function c_(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function cp(t,e){this._pairs=[],t&&uu(t,this,e)}const AE=cp.prototype;AE.append=function(e,n){this._pairs.push([e,n])};AE.toString=function(e){const n=e?function(r){return e.call(this,r,c_)}:c_;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function jM(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function SE(t,e,n){if(!e)return t;const r=n&&n.encode||jM;M.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=M.isURLSearchParams(e)?e.toString():new cp(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class u_{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){M.forEach(this.handlers,function(r){r!==null&&e(r)})}}const RE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zM=typeof URLSearchParams<"u"?URLSearchParams:cp,HM=typeof FormData<"u"?FormData:null,qM=typeof Blob<"u"?Blob:null,WM={isBrowser:!0,classes:{URLSearchParams:zM,FormData:HM,Blob:qM},protocols:["http","https","file","blob","url","data"]},up=typeof window<"u"&&typeof document<"u",xh=typeof navigator=="object"&&navigator||void 0,KM=up&&(!xh||["ReactNative","NativeScript","NS"].indexOf(xh.product)<0),GM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",YM=up&&window.location.href||"http://localhost",QM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:up,hasStandardBrowserEnv:KM,hasStandardBrowserWebWorkerEnv:GM,navigator:xh,origin:YM},Symbol.toStringTag,{value:"Module"})),Ht={...QM,...WM};function XM(t,e){return uu(t,new Ht.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Ht.isNode&&M.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function JM(t){return M.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ZM(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function CE(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&M.isArray(s)?s.length:o,c?(M.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!M.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&M.isArray(s[o])&&(s[o]=ZM(s[o])),!a)}if(M.isFormData(t)&&M.isFunction(t.entries)){const n={};return M.forEachEntry(t,(r,s)=>{e(JM(r),s,n,0)}),n}return null}function eL(t,e,n){if(M.isString(t))try{return(e||JSON.parse)(t),M.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Oa={transitional:RE,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=M.isObject(e);if(i&&M.isHTMLForm(e)&&(e=new FormData(e)),M.isFormData(e))return s?JSON.stringify(CE(e)):e;if(M.isArrayBuffer(e)||M.isBuffer(e)||M.isStream(e)||M.isFile(e)||M.isBlob(e)||M.isReadableStream(e))return e;if(M.isArrayBufferView(e))return e.buffer;if(M.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return XM(e,this.formSerializer).toString();if((a=M.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return uu(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),eL(e)):e}],transformResponse:[function(e){const n=this.transitional||Oa.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(M.isResponse(e)||M.isReadableStream(e))return e;if(e&&M.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ne.from(a,Ne.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],t=>{Oa.headers[t]={}});const tL=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nL=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&tL[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},f_=Symbol("internals");function go(t){return t&&String(t).trim().toLowerCase()}function Dl(t){return t===!1||t==null?t:M.isArray(t)?t.map(Dl):String(t)}function rL(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const sL=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function pf(t,e,n,r,s){if(M.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!M.isString(e)){if(M.isString(r))return e.indexOf(r)!==-1;if(M.isRegExp(r))return r.test(e)}}function iL(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function oL(t,e){const n=M.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let un=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,u){const f=go(c);if(!f)throw new Error("header name must be a non-empty string");const d=M.findKey(s,f);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||c]=Dl(a))}const o=(a,c)=>M.forEach(a,(u,f)=>i(u,f,c));if(M.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(M.isString(e)&&(e=e.trim())&&!sL(e))o(nL(e),n);else if(M.isObject(e)&&M.isIterable(e)){let a={},c,u;for(const f of e){if(!M.isArray(f))throw TypeError("Object iterator must return a key-value pair");a[u=f[0]]=(c=a[u])?M.isArray(c)?[...c,f[1]]:[c,f[1]]:f[1]}o(a,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=go(e),e){const r=M.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return rL(s);if(M.isFunction(n))return n.call(this,s,r);if(M.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=go(e),e){const r=M.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||pf(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=go(o),o){const a=M.findKey(r,o);a&&(!n||pf(r,r[a],a,n))&&(delete r[a],s=!0)}}return M.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||pf(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return M.forEach(this,(s,i)=>{const o=M.findKey(r,i);if(o){n[o]=Dl(s),delete n[i];return}const a=e?iL(i):String(i).trim();a!==i&&delete n[i],n[a]=Dl(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return M.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&M.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[f_]=this[f_]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=go(o);r[a]||(oL(s,o),r[a]=!0)}return M.isArray(e)?e.forEach(i):i(e),this}};un.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);M.reduceDescriptors(un.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});M.freezeMethods(un);function mf(t,e){const n=this||Oa,r=e||n,s=un.from(r.headers);let i=r.data;return M.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function PE(t){return!!(t&&t.__CANCEL__)}function Xi(t,e,n){Ne.call(this,t??"canceled",Ne.ERR_CANCELED,e,n),this.name="CanceledError"}M.inherits(Xi,Ne,{__CANCEL__:!0});function xE(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new Ne("Request failed with status code "+n.status,[Ne.ERR_BAD_REQUEST,Ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function aL(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function lL(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),f=r[i];o||(o=u),n[s]=c,r[s]=u;let d=i,m=0;for(;d!==s;)m+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const g=f&&u-f;return g?Math.round(m*1e3/g):void 0}}function cL(t,e){let n=0,r=1e3/e,s,i;const o=(u,f=Date.now())=>{n=f,s=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const f=Date.now(),d=f-n;d>=r?o(u,f):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-d)))},()=>s&&o(s)]}const _c=(t,e,n=3)=>{let r=0;const s=lL(50,250);return cL(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,u=s(c),f=o<=a;r=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a&&f?(a-o)/u:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},h_=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},d_=t=>(...e)=>M.asap(()=>t(...e)),uL=Ht.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Ht.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Ht.origin),Ht.navigator&&/(msie|trident)/i.test(Ht.navigator.userAgent)):()=>!0,fL=Ht.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];M.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),M.isString(r)&&o.push("path="+r),M.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function hL(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function dL(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function kE(t,e,n){let r=!hL(e);return t&&(r||n==!1)?dL(t,e):e}const p_=t=>t instanceof un?{...t}:t;function Ws(t,e){e=e||{};const n={};function r(u,f,d,m){return M.isPlainObject(u)&&M.isPlainObject(f)?M.merge.call({caseless:m},u,f):M.isPlainObject(f)?M.merge({},f):M.isArray(f)?f.slice():f}function s(u,f,d,m){if(M.isUndefined(f)){if(!M.isUndefined(u))return r(void 0,u,d,m)}else return r(u,f,d,m)}function i(u,f){if(!M.isUndefined(f))return r(void 0,f)}function o(u,f){if(M.isUndefined(f)){if(!M.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function a(u,f,d){if(d in e)return r(u,f);if(d in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,f,d)=>s(p_(u),p_(f),d,!0)};return M.forEach(Object.keys(Object.assign({},t,e)),function(f){const d=c[f]||s,m=d(t[f],e[f],f);M.isUndefined(m)&&d!==a||(n[f]=m)}),n}const OE=t=>{const e=Ws({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=un.from(o),e.url=SE(kE(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(M.isFormData(n)){if(Ht.hasStandardBrowserEnv||Ht.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[u,...f]=c?c.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...f].join("; "))}}if(Ht.hasStandardBrowserEnv&&(r&&M.isFunction(r)&&(r=r(e)),r||r!==!1&&uL(e.url))){const u=s&&i&&fL.read(i);u&&o.set(s,u)}return e},pL=typeof XMLHttpRequest<"u",mL=pL&&function(t){return new Promise(function(n,r){const s=OE(t);let i=s.data;const o=un.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:u}=s,f,d,m,g,E;function C(){g&&g(),E&&E(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let P=new XMLHttpRequest;P.open(s.method.toUpperCase(),s.url,!0),P.timeout=s.timeout;function k(){if(!P)return;const V=un.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),Q={data:!a||a==="text"||a==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:V,config:t,request:P};xE(function(A){n(A),C()},function(A){r(A),C()},Q),P=null}"onloadend"in P?P.onloadend=k:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(k)},P.onabort=function(){P&&(r(new Ne("Request aborted",Ne.ECONNABORTED,t,P)),P=null)},P.onerror=function(){r(new Ne("Network Error",Ne.ERR_NETWORK,t,P)),P=null},P.ontimeout=function(){let F=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const Q=s.transitional||RE;s.timeoutErrorMessage&&(F=s.timeoutErrorMessage),r(new Ne(F,Q.clarifyTimeoutError?Ne.ETIMEDOUT:Ne.ECONNABORTED,t,P)),P=null},i===void 0&&o.setContentType(null),"setRequestHeader"in P&&M.forEach(o.toJSON(),function(F,Q){P.setRequestHeader(Q,F)}),M.isUndefined(s.withCredentials)||(P.withCredentials=!!s.withCredentials),a&&a!=="json"&&(P.responseType=s.responseType),u&&([m,E]=_c(u,!0),P.addEventListener("progress",m)),c&&P.upload&&([d,g]=_c(c),P.upload.addEventListener("progress",d),P.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(f=V=>{P&&(r(!V||V.type?new Xi(null,t,P):V),P.abort(),P=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const x=aL(s.url);if(x&&Ht.protocols.indexOf(x)===-1){r(new Ne("Unsupported protocol "+x+":",Ne.ERR_BAD_REQUEST,t));return}P.send(i||null)})},gL=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,a();const f=u instanceof Error?u:this.reason;r.abort(f instanceof Ne?f:new Xi(f instanceof Error?f.message:f))}};let o=e&&setTimeout(()=>{o=null,i(new Ne(`timeout ${e} of ms exceeded`,Ne.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>M.asap(a),c}},yL=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},_L=async function*(t,e){for await(const n of vL(t))yield*yL(n,e)},vL=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},m_=(t,e,n,r)=>{const s=_L(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:f}=await s.next();if(u){a(),c.close();return}let d=f.byteLength;if(n){let m=i+=d;n(m)}c.enqueue(new Uint8Array(f))}catch(u){throw a(u),u}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},fu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",DE=fu&&typeof ReadableStream=="function",bL=fu&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),NE=(t,...e)=>{try{return!!t(...e)}catch{return!1}},wL=DE&&NE(()=>{let t=!1;const e=new Request(Ht.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),g_=64*1024,kh=DE&&NE(()=>M.isReadableStream(new Response("").body)),vc={stream:kh&&(t=>t.body)};fu&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!vc[e]&&(vc[e]=M.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new Ne(`Response type '${e}' is not supported`,Ne.ERR_NOT_SUPPORT,r)})})})(new Response);const EL=async t=>{if(t==null)return 0;if(M.isBlob(t))return t.size;if(M.isSpecCompliantForm(t))return(await new Request(Ht.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(M.isArrayBufferView(t)||M.isArrayBuffer(t))return t.byteLength;if(M.isURLSearchParams(t)&&(t=t+""),M.isString(t))return(await bL(t)).byteLength},TL=async(t,e)=>{const n=M.toFiniteNumber(t.getContentLength());return n??EL(e)},IL=fu&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:f,withCredentials:d="same-origin",fetchOptions:m}=OE(t);u=u?(u+"").toLowerCase():"text";let g=gL([s,i&&i.toAbortSignal()],o),E;const C=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let P;try{if(c&&wL&&n!=="get"&&n!=="head"&&(P=await TL(f,r))!==0){let Q=new Request(e,{method:"POST",body:r,duplex:"half"}),se;if(M.isFormData(r)&&(se=Q.headers.get("content-type"))&&f.setContentType(se),Q.body){const[A,w]=h_(P,_c(d_(c)));r=m_(Q.body,g_,A,w)}}M.isString(d)||(d=d?"include":"omit");const k="credentials"in Request.prototype;E=new Request(e,{...m,signal:g,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:k?d:void 0});let x=await fetch(E);const V=kh&&(u==="stream"||u==="response");if(kh&&(a||V&&C)){const Q={};["status","statusText","headers"].forEach(v=>{Q[v]=x[v]});const se=M.toFiniteNumber(x.headers.get("content-length")),[A,w]=a&&h_(se,_c(d_(a),!0))||[];x=new Response(m_(x.body,g_,A,()=>{w&&w(),C&&C()}),Q)}u=u||"text";let F=await vc[M.findKey(vc,u)||"text"](x,t);return!V&&C&&C(),await new Promise((Q,se)=>{xE(Q,se,{data:F,headers:un.from(x.headers),status:x.status,statusText:x.statusText,config:t,request:E})})}catch(k){throw C&&C(),k&&k.name==="TypeError"&&/Load failed|fetch/i.test(k.message)?Object.assign(new Ne("Network Error",Ne.ERR_NETWORK,t,E),{cause:k.cause||k}):Ne.from(k,k&&k.code,t,E)}}),Oh={http:UM,xhr:mL,fetch:IL};M.forEach(Oh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const y_=t=>`- ${t}`,AL=t=>M.isFunction(t)||t===null||t===!1,VE={getAdapter:t=>{t=M.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!AL(n)&&(r=Oh[(o=String(n)).toLowerCase()],r===void 0))throw new Ne(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(y_).join(`
`):" "+y_(i[0]):"as no adapter specified";throw new Ne("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Oh};function gf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Xi(null,t)}function __(t){return gf(t),t.headers=un.from(t.headers),t.data=mf.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),VE.getAdapter(t.adapter||Oa.adapter)(t).then(function(r){return gf(t),r.data=mf.call(t,t.transformResponse,r),r.headers=un.from(r.headers),r},function(r){return PE(r)||(gf(t),r&&r.response&&(r.response.data=mf.call(t,t.transformResponse,r.response),r.response.headers=un.from(r.response.headers))),Promise.reject(r)})}const ME="1.9.0",hu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{hu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const v_={};hu.transitional=function(e,n,r){function s(i,o){return"[Axios v"+ME+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new Ne(s(o," has been removed"+(n?" in "+n:"")),Ne.ERR_DEPRECATED);return n&&!v_[o]&&(v_[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};hu.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function SL(t,e,n){if(typeof t!="object")throw new Ne("options must be an object",Ne.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new Ne("option "+i+" must be "+c,Ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ne("Unknown option "+i,Ne.ERR_BAD_OPTION)}}const Nl={assertOptions:SL,validators:hu},Hn=Nl.validators;let Ls=class{constructor(e){this.defaults=e||{},this.interceptors={request:new u_,response:new u_}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ws(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Nl.assertOptions(r,{silentJSONParsing:Hn.transitional(Hn.boolean),forcedJSONParsing:Hn.transitional(Hn.boolean),clarifyTimeoutError:Hn.transitional(Hn.boolean)},!1),s!=null&&(M.isFunction(s)?n.paramsSerializer={serialize:s}:Nl.assertOptions(s,{encode:Hn.function,serialize:Hn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Nl.assertOptions(n,{baseUrl:Hn.spelling("baseURL"),withXsrfToken:Hn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&M.merge(i.common,i[n.method]);i&&M.forEach(["delete","get","head","post","put","patch","common"],E=>{delete i[E]}),n.headers=un.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(n)===!1||(c=c&&C.synchronous,a.unshift(C.fulfilled,C.rejected))});const u=[];this.interceptors.response.forEach(function(C){u.push(C.fulfilled,C.rejected)});let f,d=0,m;if(!c){const E=[__.bind(this),void 0];for(E.unshift.apply(E,a),E.push.apply(E,u),m=E.length,f=Promise.resolve(n);d<m;)f=f.then(E[d++],E[d++]);return f}m=a.length;let g=n;for(d=0;d<m;){const E=a[d++],C=a[d++];try{g=E(g)}catch(P){C.call(this,P);break}}try{f=__.call(this,g)}catch(E){return Promise.reject(E)}for(d=0,m=u.length;d<m;)f=f.then(u[d++],u[d++]);return f}getUri(e){e=Ws(this.defaults,e);const n=kE(e.baseURL,e.url,e.allowAbsoluteUrls);return SE(n,e.params,e.paramsSerializer)}};M.forEach(["delete","get","head","options"],function(e){Ls.prototype[e]=function(n,r){return this.request(Ws(r||{},{method:e,url:n,data:(r||{}).data}))}});M.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Ws(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Ls.prototype[e]=n(),Ls.prototype[e+"Form"]=n(!0)});let RL=class LE{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Xi(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new LE(function(s){e=s}),cancel:e}}};function CL(t){return function(n){return t.apply(null,n)}}function PL(t){return M.isObject(t)&&t.isAxiosError===!0}const Dh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dh).forEach(([t,e])=>{Dh[e]=t});function FE(t){const e=new Ls(t),n=pE(Ls.prototype.request,e);return M.extend(n,Ls.prototype,e,{allOwnKeys:!0}),M.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return FE(Ws(t,s))},n}const dt=FE(Oa);dt.Axios=Ls;dt.CanceledError=Xi;dt.CancelToken=RL;dt.isCancel=PE;dt.VERSION=ME;dt.toFormData=uu;dt.AxiosError=Ne;dt.Cancel=dt.CanceledError;dt.all=function(e){return Promise.all(e)};dt.spread=CL;dt.isAxiosError=PL;dt.mergeConfig=Ws;dt.AxiosHeaders=un;dt.formToJSON=t=>CE(M.isHTMLForm(t)?new FormData(t):t);dt.getAdapter=VE.getAdapter;dt.HttpStatusCode=Dh;dt.default=dt;const{Axios:NL,AxiosError:VL,CanceledError:ML,isCancel:LL,CancelToken:FL,VERSION:UL,all:$L,Cancel:BL,isAxiosError:jL,spread:zL,toFormData:HL,AxiosHeaders:qL,HttpStatusCode:WL,formToJSON:KL,getAdapter:GL,mergeConfig:YL}=dt;dt.defaults.baseURL="http://localhost:3000";const xL=C1(U2);xL.use(dE).mount("#app");
