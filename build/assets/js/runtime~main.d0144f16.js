(()=>{"use strict";var e,a,t,f,d,r={},b={};function c(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=r,c.c=b,e=[],c.O=(a,t,f,d)=>{if(!t){var r=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],d=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&d||r>=d)&&Object.keys(c.O).every((e=>c.O[e](t[o])))?t.splice(o--,1):(b=!1,d<r&&(r=d));if(b){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[t,f,d]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);c.r(d);var r={};a=a||[null,t({}),t([]),t(t)];for(var b=2&f&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,c.d(d,r),d},c.d=(e,a)=>{for(var t in a)c.o(a,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,t)=>(c.f[t](e,a),a)),[])),c.u=e=>"assets/js/"+({53:"935f2afb",529:"88091aac",616:"946bd85a",953:"bb85420c",1241:"16aeca76",1665:"8ee72870",1843:"68e633d4",1892:"a1dd620e",2384:"d5893b4b",2511:"01a9ee34",2525:"ea3e4ec7",2642:"1c3ad8a7",2849:"f6040c25",2983:"ba8b3534",3003:"1fe0714a",3085:"1f391b9e",3102:"6794d4cd",3415:"c743b8e8",3533:"0565d5a9",3850:"eab20cc6",4195:"c4f5d8e4",4653:"53fdfa12",4721:"b98ff639",4813:"04871479",5115:"4026ee8f",5127:"ede3a018",5400:"8a605b37",5568:"71e88f49",5861:"d766afa5",6076:"b4ae192e",6087:"9a6df880",6539:"fa59601b",6661:"e336966d",6733:"ed56bb64",7020:"93ba4d8b",7414:"393be207",7706:"e1a11919",7747:"7e0674fe",7883:"dea1bcce",7918:"17896441",7920:"1a4e3797",8009:"a707f78d",8132:"86765210",8798:"ea89b0bd",8840:"b9e9565f",9076:"f6a44ef3",9285:"246f2c6f",9286:"cbd006e4",9479:"3d5edd8a",9514:"1be78505",9577:"094f1c28",9627:"23abe487",9983:"ebff14e4"}[e]||e)+"."+{24:"eed31e8a",53:"ac19fca6",529:"04452c07",616:"14e6bfd2",658:"ea030def",953:"8b83d172",1241:"abfbc38a",1665:"92d1e860",1722:"191a7426",1843:"94620025",1850:"f327b9f7",1892:"7a24e63a",2384:"239bdd58",2511:"2d291cb7",2525:"5cec2314",2642:"7b370cdc",2849:"b1fe8451",2983:"c75bd66e",3003:"f49b60fb",3085:"16c709d3",3102:"0cc86216",3415:"c529c9ec",3533:"41402845",3850:"d954107d",4195:"a7e4a3f2",4653:"64695f0a",4721:"dee2c58e",4813:"e6f81f24",5045:"5a8d1fb3",5115:"3c8161dd",5127:"615aa365",5400:"134c2abe",5568:"42f0e817",5861:"c4254802",6076:"949634aa",6087:"d191883d",6131:"62e7cf5f",6423:"99ba586b",6539:"26e47fd1",6661:"c27c8de6",6733:"93e6214b",7020:"03f54867",7414:"1c706cdb",7706:"84bfe1bc",7747:"877c0aef",7883:"8b1d199f",7918:"99aa5721",7920:"70bc3b86",8009:"76ebe9d2",8060:"b84997a1",8132:"775aaeb5",8175:"2547424e",8798:"0550dc06",8840:"28c225eb",9076:"28dec43c",9285:"6ffccaf0",9286:"d08e86ee",9479:"daa35daa",9514:"ff4007e5",9577:"8a7c5b5a",9627:"8601c717",9983:"2afed0b8"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},d="dgiot-website:",c.l=(e,a,t,r)=>{if(f[e])f[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+t){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,c.nc&&b.setAttribute("nonce",c.nc),b.setAttribute("data-webpack",d+t),b.src=e),f[e]=[a];var l=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var d=f[e];if(delete f[e],b.parentNode&&b.parentNode.removeChild(b),d&&d.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",c.gca=function(e){return e={17896441:"7918",86765210:"8132","935f2afb":"53","88091aac":"529","946bd85a":"616",bb85420c:"953","16aeca76":"1241","8ee72870":"1665","68e633d4":"1843",a1dd620e:"1892",d5893b4b:"2384","01a9ee34":"2511",ea3e4ec7:"2525","1c3ad8a7":"2642",f6040c25:"2849",ba8b3534:"2983","1fe0714a":"3003","1f391b9e":"3085","6794d4cd":"3102",c743b8e8:"3415","0565d5a9":"3533",eab20cc6:"3850",c4f5d8e4:"4195","53fdfa12":"4653",b98ff639:"4721","04871479":"4813","4026ee8f":"5115",ede3a018:"5127","8a605b37":"5400","71e88f49":"5568",d766afa5:"5861",b4ae192e:"6076","9a6df880":"6087",fa59601b:"6539",e336966d:"6661",ed56bb64:"6733","93ba4d8b":"7020","393be207":"7414",e1a11919:"7706","7e0674fe":"7747",dea1bcce:"7883","1a4e3797":"7920",a707f78d:"8009",ea89b0bd:"8798",b9e9565f:"8840",f6a44ef3:"9076","246f2c6f":"9285",cbd006e4:"9286","3d5edd8a":"9479","1be78505":"9514","094f1c28":"9577","23abe487":"9627",ebff14e4:"9983"}[e]||e,c.p+c.u(e)},(()=>{var e={1303:0,532:0};c.f.j=(a,t)=>{var f=c.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((t,d)=>f=e[a]=[t,d]));t.push(f[2]=d);var r=c.p+c.u(a),b=new Error;c.l(r,(t=>{if(c.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var d=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+d+": "+r+")",b.name="ChunkLoadError",b.type=d,b.request=r,f[1](b)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,t)=>{var f,d,r=t[0],b=t[1],o=t[2],n=0;if(r.some((a=>0!==e[a]))){for(f in b)c.o(b,f)&&(c.m[f]=b[f]);if(o)var i=o(c)}for(a&&a(t);n<r.length;n++)d=r[n],c.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return c.O(i)},t=self.webpackChunkdgiot_website=self.webpackChunkdgiot_website||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();