var __activeui_extensions__;(()=>{"use strict";var e,r,t,n,i,o,a,s,l,u,d,f,c,p,h,v,m,g,b,y={7550:(e,r,t)=>{var n={index:()=>Promise.all([t.e(885),t.e(366),t.e(242),t.e(903),t.e(362)]).then((()=>()=>t(2362)))},i=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",i=t.S[n];if(i&&i!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>i,init:()=>o})}},w={};function _(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return y[e](t,t.exports,_),t.loaded=!0,t.exports}_.m=y,_.c=w,e=[],_.O=(r,t,n,i)=>{if(!t){var o=1/0;for(u=0;u<e.length;u++){for(var[t,n,i]=e[u],a=!0,s=0;s<t.length;s++)(!1&i||o>=i)&&Object.keys(_.O).every((e=>_.O[e](t[s])))?t.splice(s--,1):(a=!1,i<o&&(o=i));if(a){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,n,i]},_.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return _.d(r,{a:r}),r},_.d=(e,r)=>{for(var t in r)_.o(r,t)&&!_.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},_.f={},_.e=e=>Promise.all(Object.keys(_.f).reduce(((r,t)=>(_.f[t](e,r),r)),[])),_.u=e=>885===e?"static/js/885.7d8f33ca.js":242===e?"static/js/242.976870c9.js":366===e?"static/js/366.482c7997.js":903===e?"static/js/903.99e086df.js":"static/js/"+e+"."+{8:"a5d54acd",353:"a2a59dae",362:"ff1ba73f",406:"042f921f",442:"de784972",467:"da7e5d9d",653:"1184823b",684:"d4decc3b",942:"bc43cccc"}[e]+".chunk.js",_.miniCssF=e=>{},_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="optimizerwidget-extension:",_.l=(e,n,i,o)=>{if(r[e])r[e].push(n);else{var a,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,_.nc&&a.setAttribute("nonce",_.nc),a.setAttribute("data-webpack",t+i),a.src=e),r[e]=[n];var f=(t,n)=>{a.onerror=a.onload=null,clearTimeout(c);var i=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(n))),t)return t(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}},_.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{_.S={};var e={},r={};_.I=(t,n)=>{n||(n=[]);var i=r[t];if(i||(i=r[t]={}),!(n.indexOf(i)>=0)){if(n.push(i),e[t])return e[t];_.o(_.S,t)||(_.S[t]={});var o=_.S[t],a="optimizerwidget-extension",s=(e,r,t,n)=>{var i=o[e]=o[e]||{},s=i[r];(!s||!s.loaded&&(!n!=!s.eager?n:a>s.from))&&(i[r]={get:t,from:a,eager:!!n})},l=[];if("default"===t)s("antd/es/button","5.6.1",(()=>Promise.all([_.e(8),_.e(885),_.e(653),_.e(353),_.e(242)]).then((()=>()=>_(653))))),s("antd/es/message","5.6.1",(()=>Promise.all([_.e(8),_.e(885),_.e(942),_.e(467),_.e(353),_.e(242),_.e(406)]).then((()=>()=>_(4467))))),s("antd/es/select","5.6.1",(()=>Promise.all([_.e(8),_.e(885),_.e(942),_.e(684),_.e(353),_.e(242),_.e(442)]).then((()=>()=>_(2684)))));return l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;_.g.importScripts&&(e=_.g.location+"");var r=_.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_.p=e})(),n=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},i=(e,r)=>{e=n(e),r=n(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var i=e[t],o=(typeof i)[0];if(t>=r.length)return"u"==o;var a=r[t],s=(typeof a)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&i!=a)return i<a;t++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(s=e[i]))[0]?"-":(n>0?".":"")+(n=2,s);return t}var a=[];for(i=1;i<e.length;i++){var s=e[i];a.push(0===s?"not("+l()+")":1===s?"("+l()+" || "+l()+")":2===s?a.pop()+" "+a.pop():o(s))}return l();function l(){return a.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=n(r);var t=e[0],i=t<0;i&&(t=-t-1);for(var o=0,s=1,l=!0;;s++,o++){var u,d,f=s<e.length?(typeof e[s])[0]:"";if(o>=r.length||"o"==(d=(typeof(u=r[o]))[0]))return!l||("u"==f?s>t&&!i:""==f!=i);if("u"==d){if(!l||"u"!=f)return!1}else if(l)if(f==d)if(s<=t){if(u!=e[s])return!1}else{if(i?u>e[s]:u<e[s])return!1;u!=e[s]&&(l=!1)}else if("s"!=f&&"n"!=f){if(i||s<=t)return!1;l=!1,s--}else{if(s<=t||d<f!=i)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,s--)}}var c=[],p=c.pop.bind(c);for(o=1;o<e.length;o++){var h=e[o];c.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},s=(e,r)=>{var t=_.S[e];if(!t||!_.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&i(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",d=(e,r,t,n)=>{var i=l(e,t);return a(n,i)||f(u(e,t,i,n)),c(e[t][i])},f=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},c=e=>(e.loaded=1,e.get()),h=(p=e=>function(r,t,n,i){var o=_.I(r);return o&&o.then?o.then(e.bind(e,r,_.S[r],t,n,i)):e(r,_.S[r],t,n,i)})(((e,r,t,n)=>(s(e,t),d(r,0,t,n)))),v=p(((e,r,t,n,i)=>r&&_.o(r,t)?d(r,0,t,n):i())),m={},g={1827:()=>h("default","react-dom",[0,16,9,0]),242:()=>h("default","react",[1,18,0,0]),1729:()=>h("default","@activeviam/activeui-sdk",[4,5,1,3]),4487:()=>v("default","antd/es/select",[1,5,1,0],(()=>Promise.all([_.e(8),_.e(942),_.e(684),_.e(353)]).then((()=>()=>_(2684))))),6193:()=>v("default","antd/es/button",[1,5,1,0],(()=>Promise.all([_.e(8),_.e(653),_.e(353)]).then((()=>()=>_(653))))),7667:()=>v("default","antd/es/message",[1,5,1,0],(()=>Promise.all([_.e(8),_.e(942),_.e(467),_.e(353)]).then((()=>()=>_(4467)))))},b={242:[242],353:[1827],903:[1729,4487,6193,7667]},_.f.consumes=(e,r)=>{_.o(b,e)&&b[e].forEach((e=>{if(_.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,_.m[e]=t=>{delete _.c[e],t.exports=r()}},n=r=>{delete m[e],_.m[e]=t=>{throw delete _.c[e],r}};try{var i=g[e]();i.then?r.push(m[e]=i.then(t).catch(n)):t(i)}catch(o){n(o)}}))},(()=>{var e={501:0,445:0};_.f.j=(r,t)=>{var n=_.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(242|353|445|903)$/.test(r))e[r]=0;else{var i=new Promise(((t,i)=>n=e[r]=[t,i]));t.push(n[2]=i);var o=_.p+_.u(r),a=new Error;_.l(o,(t=>{if(_.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,n[1](a)}}),"chunk-"+r,r)}},_.O.j=r=>0===e[r];var r=(r,t)=>{var n,i,[o,a,s]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in a)_.o(a,n)&&(_.m[n]=a[n]);if(s)var u=s(_)}for(r&&r(t);l<o.length;l++)i=o[l],_.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return _.O(u)},t=self.webpackChunkoptimizerwidget_extension=self.webpackChunkoptimizerwidget_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var j=_.O(void 0,[445],(()=>_(7550)));j=_.O(j),(__activeui_extensions__=void 0===__activeui_extensions__?{}:__activeui_extensions__)["optimizerwidget-extension"]=j})();