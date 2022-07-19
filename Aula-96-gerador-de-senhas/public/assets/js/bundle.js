(()=>{"use strict";var r,n,e,t,o,a,i,c,s,u,A,p,d,l,f,m,h,g,v,C,E,b,y,x,B,k,w,S={122:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),i.push([r.id,':root {\r\n  --primary-color: rgb(17, 86, 102);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: "Open sans", sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 15px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 21px var(--primary-color-darker);\r\n}\r\n\r\n#result {\r\n  font-size: 2em;\r\n  font-weight: bold;\r\n  color: var(--primary-color);\r\n  margin: 40px 0;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: left;\r\n  gap: 0.5rem;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\nbutton {\r\n  width: 200px;\r\n  height: 40px;\r\n  cursor: pointer;\r\n  font-size: 1em;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 8px;\r\n  transition: 0.3s ease;\r\n}\r\n\r\nbutton:focus,\r\nbutton:hover {\r\n  background: var(--primary-color-darker);\r\n  color: #fff;\r\n}\r\n',"",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,gDAAgD;AAClD;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,2BAA2B;EAC3B,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,cAAc;EACd,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;EAEE,uCAAuC;EACvC,WAAW;AACb",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");\r\n\r\n:root {\r\n  --primary-color: rgb(17, 86, 102);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: "Open sans", sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 15px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 21px var(--primary-color-darker);\r\n}\r\n\r\n#result {\r\n  font-size: 2em;\r\n  font-weight: bold;\r\n  color: var(--primary-color);\r\n  margin: 40px 0;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: left;\r\n  gap: 0.5rem;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\nbutton {\r\n  width: 200px;\r\n  height: 40px;\r\n  cursor: pointer;\r\n  font-size: 1em;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 8px;\r\n  transition: 0.3s ease;\r\n}\r\n\r\nbutton:focus,\r\nbutton:hover {\r\n  background: var(--primary-color-darker);\r\n  color: #fff;\r\n}\r\n'],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var A=[].concat(r[u]);t&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),e&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=e):A[2]=e),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),n.push(A))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */"),i=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],A=a[u]||0,p="".concat(u," ").concat(A);a[u]=A+1;var d=e(p),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(l);else{var f=o(l,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),u=0;u<a.length;u++){var A=e(a[u]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},j={};function I(r){var n=j[r];if(void 0!==n)return n.exports;var e=j[r]={id:r,exports:{}};return S[r](e,e.exports,I),e.exports}I.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return I.d(n,{a:n}),n},I.d=(r,n)=>{for(var e in n)I.o(n,e)&&!I.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},I.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),I.nc=void 0,r=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;return Math.floor(Math.random()*(n-r)+r)},n=function(){return String.fromCharCode(r(65,90))},e=function(){return String.fromCharCode(r(97,122))},t=function(){return String.fromCharCode(r(48,57))},o="!@#$%¨&;:/*-+?^~<>(){}[]",a=function(){return o[r(0,o.length)]},i=document.querySelector("form"),c=document.getElementById("result"),s=document.getElementById("character-amount"),u=document.getElementById("input-num"),A=document.getElementById("uppercase-letter"),p=document.getElementById("lowercase-letter"),d=document.getElementById("input-symbol"),l=I(379),f=I.n(l),m=I(795),h=I.n(m),g=I(569),v=I.n(g),C=I(565),E=I.n(C),b=I(216),y=I.n(b),x=I(589),B=I.n(x),k=I(122),(w={}).styleTagTransform=B(),w.setAttributes=E(),w.insert=v().bind(null,"head"),w.domAPI=h(),w.insertStyleElement=y(),f()(k.Z,w),k.Z&&k.Z.locals&&k.Z.locals,i.addEventListener("submit",(function(r){r.preventDefault(),c.innerHTML=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,o=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,c=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,u=[];r=Number(r);for(var A=0;A<r;A++)c&&u.push(n()),i&&u.push(e()),o&&u.push(t()),s&&u.push(a());return u.join("").slice(0,r)}(s.value,u.checked,A.checked,p.checked,d.checked)||"Nada selecionado."}))})();
//# sourceMappingURL=bundle.js.map