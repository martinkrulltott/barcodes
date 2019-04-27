(function(r){function e(e){for(var t,l,c=e[0],i=e[1],u=e[2],d=0,p=[];d<c.length;d++)l=c[d],a[l]&&p.push(a[l][0]),a[l]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(r[t]=i[t]);s&&s(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var r,e=0;e<n.length;e++){for(var o=n[e],t=!0,c=1;c<o.length;c++){var i=o[c];0!==a[i]&&(t=!1)}t&&(n.splice(e--,1),r=l(l.s=o[0]))}return r}var t={},a={app:0},n=[];function l(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=r,l.c=t,l.d=function(r,e,o){l.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:o})},l.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},l.t=function(r,e){if(1&e&&(r=l(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)l.d(o,t,function(e){return r[e]}.bind(null,t));return o},l.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return l.d(e,"a",e),e},l.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},l.p="/barcodes/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=i;n.push([0,"chunk-vendors"]),o()})({0:function(r,e,o){r.exports=o("56d7")},1114:function(r,e,o){"use strict";var t=o("39bf"),a=o.n(t);a.a},"21bb":function(r,e,o){"use strict";var t=o("bcc9"),a=o.n(t);a.a},"39bf":function(r,e,o){},"56d7":function(r,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var t=o("2b0e"),a=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("home")],1)},n=[],l=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",[o("h1",{staticClass:"page-title"},[r._v("Barcode editor")]),o("div",{staticClass:"section"},[o("h2",{staticClass:"section-title"},[r._v("Barcode number")]),o("input",{staticClass:"barcode-number",attrs:{type:"text",placeholder:"Enter number...",maxlength:"19"},domProps:{value:r.barcodeNumber},on:{keyup:function(e){return r.changeBarcodeNumber(e)}}})]),r.barValues&&r.barValues.length>0?o("div",{staticClass:"section"},[o("h2",{staticClass:"section-title"},[r._v("Barcode")]),o("div",{staticClass:"bars"},[r._l(r.barValues,function(e,t){return o("bar",{key:t,staticClass:"bar-wrapper",attrs:{value:e,backgroundColor:r.primaryColor.hex,borderColor:r.primaryColor.hex,textColor:r.secondaryColor.hex}})}),o("bar",{attrs:{value:r.checkSumValue,backgroundColor:r.secondaryColor.hex,borderColor:r.primaryColor.hex,textColor:r.primaryColor.hex}})],2)]):r._e(),r.barValues&&r.barValues.length>0?o("div",{staticClass:"section"},[o("h2",{staticClass:"section-title"},[r._v("Settings")]),r.displaySecondaryColorEditor?r._e():o("div",{staticClass:"primary-color-editor"},[o("button",{staticClass:"button",on:{click:function(e){r.displayPrimaryColorEditor=!r.displayPrimaryColorEditor}}},[r.displayPrimaryColorEditor?o("span",[r._v("Close")]):o("span",[r._v("Change primary color")])]),r.displayPrimaryColorEditor?o("color-picker",{model:{value:r.primaryColor,callback:function(e){r.primaryColor=e},expression:"primaryColor"}}):r._e()],1),r.displayPrimaryColorEditor?r._e():o("div",{staticClass:"secondary-color-editor"},[o("button",{staticClass:"button",on:{click:function(e){r.displaySecondaryColorEditor=!r.displaySecondaryColorEditor}}},[r.displaySecondaryColorEditor?o("span",[r._v("Close")]):o("span",[r._v("Change secondary color")])]),r.displaySecondaryColorEditor?o("color-picker",{model:{value:r.secondaryColor,callback:function(e){r.secondaryColor=e},expression:"secondaryColor"}}):r._e()],1)]):r._e()])},c=[],i=(o("c5f6"),o("6b54"),o("774e")),u=o.n(i),s=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{staticClass:"bar",class:"bar-"+r.value,style:{background:r.backgroundColor,"border-color":r.borderColor,color:r.textColor}},[r._v("\n  "+r._s(r.value)+"\n")])},d=[],p={name:"Bar",props:["value","backgroundColor","borderColor","textColor"]},b=p,f=(o("1114"),o("2877")),y=Object(f["a"])(b,s,d,!1,null,null,null),m=y.exports,C=o("c345"),v={hex:"#194a94"},h={hex:"#fff"},g={name:"home",components:{bar:m,"color-picker":C["Compact"]},data:function(){return{barcodeNumber:null,primaryColor:v,secondaryColor:h,displayPrimaryColorEditor:!1,displaySecondaryColorEditor:!1}},computed:{barValues:function(){return this.barcodeNumber?u()(this.barcodeNumber.toString()).map(Number):[]},checkSumValue:function(){return this.calculateCheckSumValue(this.barcodeNumber)}},methods:{calculateCheckSumValue:function(r){var e=null;if(r){var o=u()(this.barcodeNumber.toString()).map(Number),t=3*o.filter(function(r,e,o){return e%2===0}).reduce(function(r,e){return r+e},0),a=o.filter(function(r,e,o){return e%2!==0}).reduce(function(r,e){return r+e},0),n=t+a,l=n%10;e=0===l?0:10-l}return e},changeBarcodeNumber:function(r){isNaN(r.target.value)||"."===r.key?(r.preventDefault(),r.target.value=r.target.value.slice(0,r.target.value.length-1)):this.barcodeNumber=r.target.value}}},_=g,x=(o("21bb"),Object(f["a"])(_,l,c,!1,null,null,null)),k=x.exports,S={name:"app",components:{home:k}},E=S,N=(o("5c0b"),Object(f["a"])(E,a,n,!1,null,null,null)),P=N.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(r){return r(P)}}).$mount("#app")},"5c0b":function(r,e,o){"use strict";var t=o("5e27"),a=o.n(t);a.a},"5e27":function(r,e,o){},bcc9:function(r,e,o){}});
//# sourceMappingURL=app.19ab3fcd.js.map