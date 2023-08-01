(()=>{"use strict";var e,r,t,o={6469:(e,r,t)=>{var o=t(7622),n=t.n(o),a=(t(8537),t(242)),i=t(7538);var l=t(657),s=t.n(l),u=t(6193),d=t.n(u),f=t(7667),c=t.n(f),p=t(1729),h=t(4128),v=t(9644),m=t.n(v),g=t(286),y=t.n(g);const b="portfolioUploader",w=[{...{Component:e=>{const r=(0,a.useRef)(null),[t,o]=(0,a.useState)(),n=(0,p.useDataModels)();if(1!==Object.keys(n).length)return(0,i.tZ)("div",{children:"Not implemented for multiple servers yet."});const l=Object.keys(n)[0],u=`${(0,p.useActivePivotClient)(l).url}/atoti/pyapi`,f={beforeUpload:e=>(o(e),!0),multiple:!1,customRequest:async({onSuccess:e,onError:r})=>{y().parse(t,{complete:async t=>{console.log("Finished:",t.data),m().post(`${u}/upload/portfolio`,{portfolio:t.data}).then((r=>{null==e||e("OK",r.request),c().success("Portfolio(s) uploaded successfully."),console.log("Response",r)})).catch((e=>{const t=new Error("Some error");null==r||r(t,e),c().error("Error encountered during uploading of portfolio(s).")}))}})}};return(0,i.tZ)("div",{ref:r,style:{padding:"20px",height:"100%",width:"100%"},children:(0,i.tZ)(s(),{...f,accept:".csv",children:(0,i.tZ)(d(),{icon:(0,i.tZ)(h.Z,{}),type:"primary",children:"Upload"})})})},Icon:()=>(0,i.tZ)("svg",{height:"32",width:"44",viewBox:"0 0 32 32",children:(0,i.tZ)("path",{d:"M 6 3 L 6 29 L 26 29 L 26 9.5996094 L 25.699219 9.3007812 L 19.699219 3.3007812 L 19.400391 3 L 6 3 z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 L 8 5 z M 20 6.4003906 L 22.599609 9 L 20 9 L 20 6.4003906 z M 16 13 L 12 17 L 15 17 L 15 22 L 17 22 L 17 17 L 20 17 L 16 13 z M 12 23 L 12 25 L 20 25 L 20 23 L 12 23 z"})}),initialState:{widgetKey:b},key:b,translations:{"en-US":{key:"PortfolioUploader",defaultName:"Upload portfolio"}}},menuItems:["remove-widget"]}];n()(w,"key")}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=o,a.c=n,e=[],a.O=(r,t,o,n)=>{if(!t){var i=1/0;for(d=0;d<e.length;d++){for(var[t,o,n]=e[d],l=!0,s=0;s<t.length;s++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](t[s])))?t.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(d--,1);var u=o();void 0!==u&&(r=u)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,o,n]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>"static/js/"+e+"."+{53:"cd7c4dbe",238:"ae3033fe",353:"6eff8aef",390:"4a404b55",406:"39975448",889:"468e103a"}[e]+".chunk.js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="uploadwidget-extension:",a.l=(e,o,n,i)=>{if(r[e])r[e].push(o);else{var l,s;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==t+n){l=f;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+n),l.src=e),r[e]=[o];var c=(t,o)=>{l.onerror=l.onload=null,clearTimeout(p);var n=r[e];if(delete r[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),s&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{a.S={};var e={},r={};a.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];a.o(a.S,t)||(a.S[t]={});var i=a.S[t],l="uploadwidget-extension",s=(e,r,t,o)=>{var n=i[e]=i[e]||{},a=n[r];(!a||!a.loaded&&(!o!=!a.eager?o:l>a.from))&&(n[r]={get:t,from:l,eager:!!o})},u=[];if("default"===t)s("antd/es/button","5.6.1",(()=>Promise.all([a.e(238),a.e(885),a.e(390),a.e(353),a.e(242)]).then((()=>()=>a(1390))))),s("antd/es/message","5.6.1",(()=>Promise.all([a.e(238),a.e(885),a.e(889),a.e(353),a.e(242),a.e(406)]).then((()=>()=>a(3889))))),s("antd/es/upload","5.6.1",(()=>Promise.all([a.e(238),a.e(885),a.e(390),a.e(53),a.e(353),a.e(242)]).then((()=>()=>a(4053)))));return u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var r=a.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../"})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},r=(r,t)=>{r=e(r),t=e(t);for(var o=0;;){if(o>=r.length)return o<t.length&&"u"!=(typeof t[o])[0];var n=r[o],a=(typeof n)[0];if(o>=t.length)return"u"==a;var i=t[o],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},t=e=>{var r=e[0],o="";if(1===e.length)return"*";if(r+.5){o+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,o+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return o}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():t(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(r,t)=>{if(0 in r){t=e(t);var n=r[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,s=!0;;l++,i++){var u,d,f=l<r.length?(typeof r[l])[0]:"";if(i>=t.length||"o"==(d=(typeof(u=t[i]))[0]))return!s||("u"==f?l>n&&!a:""==f!=a);if("u"==d){if(!s||"u"!=f)return!1}else if(s)if(f==d)if(l<=n){if(u!=r[l])return!1}else{if(a?u>r[l]:u<r[l])return!1;u!=r[l]&&(s=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;s=!1,l--}else{if(l<=n||d<f!=a)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},n=(e,r)=>{var t=a.S[e];if(!t||!a.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},i=(e,t)=>{var o=e[t];return Object.keys(o).reduce(((e,t)=>!e||!o[e].loaded&&r(e,t)?t:e),0)},l=(e,r,o,n)=>"Unsatisfied version "+o+" from "+(o&&e[r][o].from)+" of shared singleton module "+r+" (required "+t(n)+")",s=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||u(l(e,t,a,n)),d(e[t][a])},u=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},d=e=>(e.loaded=1,e.get()),f=e=>function(r,t,o,n){var i=a.I(r);return i&&i.then?i.then(e.bind(e,r,a.S[r],t,o,n)):e(r,a.S[r],t,o,n)},c=f(((e,r,t,o)=>(n(e,t),s(r,0,t,o)))),p=f(((e,r,t,o,n)=>r&&a.o(r,t)?s(r,0,t,o):n())),h={},v={1827:()=>c("default","react-dom",[0,16,9,0]),242:()=>c("default","react",[1,18,0,0]),657:()=>p("default","antd/es/upload",[1,5,1,0],(()=>Promise.all([a.e(238),a.e(390),a.e(53),a.e(353)]).then((()=>()=>a(4053))))),1729:()=>c("default","@activeviam/activeui-sdk",[4,5,1,3]),6193:()=>p("default","antd/es/button",[1,5,1,0],(()=>Promise.all([a.e(238),a.e(390),a.e(353)]).then((()=>()=>a(1390))))),7667:()=>p("default","antd/es/message",[1,5,1,0],(()=>Promise.all([a.e(238),a.e(889),a.e(353)]).then((()=>()=>a(3889)))))};[242,657,1729,6193,7667].forEach((e=>{a.m[e]=r=>{h[e]=0,delete a.c[e];var t=v[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var m={353:[1827]};a.f.consumes=(e,r)=>{a.o(m,e)&&m[e].forEach((e=>{if(a.o(h,e))return r.push(h[e]);var t=r=>{h[e]=0,a.m[e]=t=>{delete a.c[e],t.exports=r()}},o=r=>{delete h[e],a.m[e]=t=>{throw delete a.c[e],r}};try{var n=v[e]();n.then?r.push(h[e]=n.then(t).catch(o)):t(n)}catch(i){o(i)}}))}})(),(()=>{var e={179:0,469:0,242:0,656:0,562:0};a.f.j=(r,t)=>{var o=a.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(242|353|562|656)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var i=a.p+a.u(r),l=new Error;a.l(i,(t=>{if(a.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}}),"chunk-"+r,r)}},a.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[i,l,s]=t,u=0;if(i.some((r=>0!==e[r]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(s)var d=s(a)}for(r&&r(t);u<i.length;u++)n=i[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},t=self.webpackChunkuploadwidget_extension=self.webpackChunkuploadwidget_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var i=a.O(void 0,[885,878,242,656,562],(()=>a(6469)));i=a.O(i)})();