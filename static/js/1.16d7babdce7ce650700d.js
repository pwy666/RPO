webpackJsonp([1],{"0FNg":function(t,e,r){var n=r("ptZ+"),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=n.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*o.indexOf(this.data[e]);r+=o.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},"0xXI":function(t,e,r){var n=r("vgyE"),o=r("ptZ+");function i(t){this.mode=o.BYTE,this.data=n.from(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},t.exports=i},"1Dla":function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},"5qTo":function(t,e){var r,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return n[t]},e.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');r=t},e.isKanjiModeEnabled=function(){return void 0!==r},e.toSJIS=function(t){return r(t)}},"6XoG":function(t,e,r){var n=r("5qTo").getSymbolSize;e.getPositions=function(t){var e=n(t);return[[0,0],[e-7,0],[0,e-7]]}},"7UFq":function(t,e,r){var n=r("vgyE"),o=r("nhO/"),i=r("NfRg").Buffer;function a(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}a.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},a.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=n.alloc(this.degree),r=i.concat([t,e],t.length+this.degree),a=o.mod(r,this.genPoly),u=this.degree-a.length;if(u>0){var s=n.alloc(this.degree);return a.copy(s,u),s}return a},t.exports=a},"9MTv":function(t,e,r){var n=r("FLHK"),o=r("BPne"),i=r("U0IF"),a=r("VEbg");function u(t,e,r,i,a){var u=[].slice.call(arguments,1),s=u.length,f="function"==typeof u[s-1];if(!f&&!n())throw new Error("Callback required as last argument");if(!f){if(s<1)throw new Error("Too few arguments provided");return 1===s?(r=e,e=i=void 0):2!==s||e.getContext||(i=r,r=e,e=void 0),new Promise(function(n,a){try{var u=o.create(r,i);n(t(u,e,i))}catch(t){a(t)}})}if(s<2)throw new Error("Too few arguments provided");2===s?(a=r,r=e,e=i=void 0):3===s&&(e.getContext&&void 0===a?(a=i,i=void 0):(a=i,i=r,r=e,e=void 0));try{var c=o.create(r,i);a(null,t(c,e,i))}catch(t){a(t)}}e.create=o.create,e.toCanvas=u.bind(null,i.render),e.toDataURL=u.bind(null,i.renderToDataURL),e.toString=u.bind(null,function(t,e,r){return a.render(t,r)})},BPne:function(t,e,r){var n=r("vgyE"),o=r("5qTo"),i=r("eJs7"),a=r("drJb"),u=r("Xgz3"),s=r("b7MN"),f=r("6XoG"),c=r("ScXk"),l=r("aliF"),h=r("7UFq"),g=r("laM0"),d=r("So83"),p=r("ptZ+"),v=r("sfMC"),m=r("1Dla");function w(t,e,r){var n,o,i=t.size,a=d.getEncodedBits(e,r);for(n=0;n<15;n++)o=1==(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function y(t,e,r){var i=new a;r.forEach(function(e){i.put(e.mode.bit,4),i.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(i)});var u=8*(o.getSymbolTotalCodewords(t)-l.getTotalCodewordsCount(t,e));for(i.getLengthInBits()+4<=u&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);for(var s=(u-i.getLengthInBits())/8,f=0;f<s;f++)i.put(f%2?17:236,8);return function(t,e,r){for(var i=o.getSymbolTotalCodewords(e),a=l.getTotalCodewordsCount(e,r),u=i-a,s=l.getBlocksCount(e,r),f=s-i%s,c=Math.floor(i/s),g=Math.floor(u/s),d=g+1,p=c-g,v=new h(p),m=0,w=new Array(s),y=new Array(s),A=0,E=n.from(t.buffer),b=0;b<s;b++){var R=b<f?g:d;w[b]=E.slice(m,m+R),y[b]=v.encode(w[b]),m+=R,A=Math.max(A,R)}var B,M,T=n.alloc(i),C=0;for(B=0;B<A;B++)for(M=0;M<s;M++)B<w[M].length&&(T[C++]=w[M][B]);for(B=0;B<p;B++)for(M=0;M<s;M++)T[C++]=y[M][B];return T}(i,t,e)}function A(t,e,r,n){var i;if(m(t))i=v.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var a=e;if(!a){var l=v.rawSplit(t);a=g.getBestVersionForData(l,r)}i=v.fromString(t,a||40)}var h=g.getBestVersionForData(i,r);if(!h)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<h)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+h+".\n")}else e=h;var d=y(e,r,i),p=o.getSymbolSize(e),A=new u(p);return function(t,e){for(var r=t.size,n=f.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var s=-1;s<=7;s++)a+s<=-1||r<=a+s||(u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4?t.set(i+u,a+s,!0,!0):t.set(i+u,a+s,!1,!0))}(A,e),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(A),function(t,e){for(var r=s.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}(A,e),w(A,r,0),e>=7&&function(t,e){for(var r,n,o,i=t.size,a=g.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1==(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}(A,e),function(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2)for(6===u&&u--;;){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var f=!1;a<e.length&&(f=1==(e[a]>>>i&1)),t.set(o,u-s,f),-1==--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(A,d),isNaN(n)&&(n=c.getBestMask(A,w.bind(null,A,r))),c.applyMask(n,A),w(A,r,n),{modules:A,version:e,errorCorrectionLevel:r,maskPattern:n,segments:i}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,n,a=i.M;return void 0!==e&&(a=i.from(e.errorCorrectionLevel,i.M),r=g.from(e.version),n=c.from(e.maskPattern),e.toSJISFunc&&o.setToSJISFunction(e.toSJISFunc)),A(t,r,a,n)}},FLHK:function(t,e){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},Ly8g:function(t,e){var r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(r=r.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(n,"g"),e.NUMERIC=new RegExp("[0-9]+","g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var o=new RegExp("^"+r+"$"),i=new RegExp("^[0-9]+$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return o.test(t)},e.testNumeric=function(t){return i.test(t)},e.testAlphanumeric=function(t){return a.test(t)}},"OG1+":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc2MDkwMjlEMkQ5NDExRUI5ODEwQTNCMDJBQzcyRTY5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc2MDkwMjlFMkQ5NDExRUI5ODEwQTNCMDJBQzcyRTY5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzYwOTAyOUIyRDk0MTFFQjk4MTBBM0IwMkFDNzJFNjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzYwOTAyOUMyRDk0MTFFQjk4MTBBM0IwMkFDNzJFNjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Kt2asAAABj0lEQVR42uyXv0vDQBTHE38rhda5IsUtm4ObSEU3QdDBTRHc/Wd0cBAcdNU/QacuUgdx0sU4aHEMWCnV2vMbeQfXI8m9kAt1yBc+NKTtvbx33/eudYUQzrA0wvjMDDgFHSAs0AZHYMJlZH4BdnNI/NgUfBp8gFGwCRoWgq6DS/BpCl4DPl27FrMW3D0fquFy05hyHZa1qt2b07aAqz54Az/JxceeAw88CrtqgTqtr/MnabgmWAJf1M9ZNQmmwDuYB99Rhht4EqgW86RpKYEOrenFZa4bLrDkpXCKdZUq/D+3F30epx2wwRitt+Ak/ZAddHtFc6XP7OkeGNe+G9B7i3FuN2W+R6eQKfNmRC9nLnvD0jFauD1V2bfAKmOdB3DGjLlMr115sMifM7PaiPWZR2mfxmhPG9VlGrXq0Vqm13NT5gegzgh+rwVWVYo40a7AoSnzLJKZr4BX7X7A2XMbCgO/FK2W1GoL4NnCuhX6w+EkGNGRhrsGazkk9wQ8xdCRZd8HN5YD34HtuMChfgUYAB+cqp7JmetKAAAAAElFTkSuQmCC"},PRM6:function(t,e,r){var n=r("ptZ+"),o=r("5qTo");function i(t){this.mode=n.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=o.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}},t.exports=i},Qe2G:function(t,e,r){var n=r("vgyE"),o=n.alloc(512),i=n.alloc(256);!function(){for(var t=1,e=0;e<255;e++)o[e]=t,i[t]=e,256&(t<<=1)&&(t^=285);for(e=255;e<512;e++)o[e]=o[e-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return i[t]},e.exp=function(t){return o[t]},e.mul=function(t,e){return 0===t||0===e?0:o[i[t]+i[e]]}},RdxR:function(t,e,r){var n=r("ptZ+");function o(t){this.mode=n.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))},t.exports=o},ScXk:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var r=3,n=3,o=40,i=10;function a(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2==0;case e.Patterns.PATTERN001:return r%2==0;case e.Patterns.PATTERN010:return n%3==0;case e.Patterns.PATTERN011:return(r+n)%3==0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case e.Patterns.PATTERN101:return r*n%2+r*n%3==0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){for(var e=t.size,n=0,o=0,i=0,a=null,u=null,s=0;s<e;s++){o=i=0,a=u=null;for(var f=0;f<e;f++){var c=t.get(s,f);c===a?o++:(o>=5&&(n+=r+(o-5)),a=c,o=1),(c=t.get(f,s))===u?i++:(i>=5&&(n+=r+(i-5)),u=c,i=1)}o>=5&&(n+=r+(o-5)),i>=5&&(n+=r+(i-5))}return n},e.getPenaltyN2=function(t){for(var e=t.size,r=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||r++}return r*n},e.getPenaltyN3=function(t){for(var e=t.size,r=0,n=0,i=0,a=0;a<e;a++){n=i=0;for(var u=0;u<e;u++)n=n<<1&2047|t.get(a,u),u>=10&&(1488===n||93===n)&&r++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&r++}return r*o},e.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*i},e.applyMask=function(t,e){for(var r=e.size,n=0;n<r;n++)for(var o=0;o<r;o++)e.isReserved(o,n)||e.xor(o,n,a(t,o,n))},e.getBestMask=function(t,r){for(var n=Object.keys(e.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),e.applyMask(a,t);var u=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),u<i&&(i=u,o=a)}return o}},So83:function(t,e,r){var n=r("5qTo"),o=n.getBCHDigit(1335);e.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,i=r<<10;n.getBCHDigit(i)-o>=0;)i^=1335<<n.getBCHDigit(i)-o;return 21522^(r<<10|i)}},U0IF:function(t,e,r){var n=r("dR50");e.render=function(t,e,r){var o=r,i=e;void 0!==o||e&&e.getContext||(o=e,e=void 0),e||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=n.getOptions(o);var a=n.getImageWidth(t.modules.size,o),u=i.getContext("2d"),s=u.createImageData(a,a);return n.qrToImageData(s.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(u,i,a),u.putImageData(s,0,0),i},e.renderToDataURL=function(t,r,n){var o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=e.render(t,r,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}},VEbg:function(t,e,r){var n=r("dR50");function o(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function i(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}e.render=function(t,e,r){var a=n.getOptions(e),u=t.modules.size,s=t.modules.data,f=u+2*a.margin,c=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",l="<path "+o(a.color.dark,"stroke")+' d="'+function(t,e,r){for(var n="",o=0,a=!1,u=0,s=0;s<t.length;s++){var f=Math.floor(s%e),c=Math.floor(s/e);f||a||(a=!0),t[s]?(u++,s>0&&f>0&&t[s-1]||(n+=a?i("M",f+r,.5+c+r):i("m",o,0),o=0,a=!1),f+1<e&&t[s+1]||(n+=i("h",u),u=0)):o++}return n}(s,u,a.margin)+'"/>',h='viewBox="0 0 '+f+" "+f+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+c+l+"</svg>\n";return"function"==typeof r&&r(null,g),g}},W5Tm:function(t,e,r){"use strict";var n={single_source_shortest_paths:function(t,e,r){var o={},i={};i[e]=0;var a,u,s,f,c,l,h,g=n.PriorityQueue.make();for(g.push(e,0);!g.empty();)for(s in u=(a=g.pop()).value,f=a.cost,c=t[u]||{})c.hasOwnProperty(s)&&(l=f+c[s],h=i[s],(void 0===i[s]||h>l)&&(i[s]=l,g.push(s,l),o[s]=u));if(void 0!==r&&void 0===i[r]){var d=["Could not find a path from ",e," to ",r,"."].join("");throw new Error(d)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,e,r){var o=n.single_source_shortest_paths(t,e,r);return n.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var e,r=n.PriorityQueue,o={};for(e in t=t||{},r)r.hasOwnProperty(e)&&(o[e]=r[e]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=n},Xgz3:function(t,e,r){var n=r("vgyE");function o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=n.alloc(t*t),this.reservedBit=n.alloc(t*t)}o.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},o.prototype.get=function(t,e){return this.data[t*this.size+e]},o.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},o.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=o},aliF:function(t,e,r){var n=r("eJs7"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[4*(t-1)+0];case n.M:return i[4*(t-1)+1];case n.Q:return i[4*(t-1)+2];case n.H:return i[4*(t-1)+3];default:return}}},b7MN:function(t,e,r){var n=r("5qTo").getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}},dR50:function(t,e){function r(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,i=r.modules.data,a=e.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,f=[n.color.light,n.color.dark],c=0;c<u;c++)for(var l=0;l<u;l++){var h=4*(c*u+l),g=n.color.light;if(c>=s&&l>=s&&c<u-s&&l<u-s)g=f[i[Math.floor((c-s)/a)*o+Math.floor((l-s)/a)]?1:0];t[h++]=g.r,t[h++]=g.g,t[h++]=g.b,t[h]=g.a}}},drJb:function(t,e){function r(){this.buffer=[],this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},eJs7:function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return r}}},lANN:function(t,e){},laM0:function(t,e,r){var n=r("5qTo"),o=r("aliF"),i=r("eJs7"),a=r("ptZ+"),u=r("oRiS"),s=r("1Dla"),f=n.getBCHDigit(7973);function c(t,e){return a.getCharCountIndicator(t,e)+4}function l(t,e){var r=0;return t.forEach(function(t){var n=c(t.mode,e);r+=n+t.getBitsLength()}),r}e.from=function(t,e){return u.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!u.isValid(t))throw new Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);var i=8*(n.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(r===a.MIXED)return i;var s=i-c(r,t);switch(r){case a.NUMERIC:return Math.floor(s/10*3);case a.ALPHANUMERIC:return Math.floor(s/11*2);case a.KANJI:return Math.floor(s/13);case a.BYTE:default:return Math.floor(s/8)}},e.getBestVersionForData=function(t,r){var n,o=i.from(r,i.M);if(s(t)){if(t.length>1)return function(t,r){for(var n=1;n<=40;n++)if(l(t,n)<=e.getCapacity(n,r,a.MIXED))return n}(t,o);if(0===t.length)return 1;n=t[0]}else n=t;return function(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}(n.mode,n.getLength(),o)},e.getEncodedBits=function(t){if(!u.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;n.getBCHDigit(e)-f>=0;)e^=7973<<n.getBCHDigit(e)-f;return t<<12|e}},"nhO/":function(t,e,r){var n=r("vgyE"),o=r("Qe2G");e.mul=function(t,e){for(var r=n.alloc(t.length+e.length-1),i=0;i<t.length;i++)for(var a=0;a<e.length;a++)r[i+a]^=o.mul(t[i],e[a]);return r},e.mod=function(t,e){for(var r=n.from(t);r.length-e.length>=0;){for(var i=r[0],a=0;a<e.length;a++)r[a]^=o.mul(e[a],i);for(var u=0;u<r.length&&0===r[u];)u++;r=r.slice(u)}return r},e.generateECPolynomial=function(t){for(var r=n.from([1]),i=0;i<t;i++)r=e.mul(r,[1,o.exp(i)]);return r}},oRiS:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},"ptZ+":function(t,e,r){var n=r("oRiS"),o=r("Ly8g");e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return r}}},sfMC:function(t,e,r){var n=r("ptZ+"),o=r("RdxR"),i=r("0FNg"),a=r("0xXI"),u=r("PRM6"),s=r("Ly8g"),f=r("5qTo"),c=r("W5Tm");function l(t){return unescape(encodeURIComponent(t)).length}function h(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function g(t){var e,r,o=h(s.NUMERIC,n.NUMERIC,t),i=h(s.ALPHANUMERIC,n.ALPHANUMERIC,t);return f.isKanjiModeEnabled()?(e=h(s.BYTE,n.BYTE,t),r=h(s.KANJI,n.KANJI,t)):(e=h(s.BYTE_KANJI,n.BYTE,t),r=[]),o.concat(i,e,r).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function d(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return i.getBitsLength(t);case n.KANJI:return u.getBitsLength(t);case n.BYTE:return a.getBitsLength(t)}}function p(t,e){var r,s=n.getBestModeForData(t);if((r=n.from(e,s))!==n.BYTE&&r.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(s));switch(r!==n.KANJI||f.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(t);case n.ALPHANUMERIC:return new i(t);case n.KANJI:return new u(t);case n.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(p(e,null)):e.data&&t.push(p(e.data,e.mode)),t},[])},e.fromString=function(t,r){for(var o=function(t,e){for(var r={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],s=[],f=0;f<u.length;f++){var c=u[f],l=""+a+f;s.push(l),r[l]={node:c,lastCount:0},o[l]={};for(var h=0;h<i.length;h++){var g=i[h];r[g]&&r[g].node.mode===c.mode?(o[g][l]=d(r[g].lastCount+c.length,c.mode)-d(r[g].lastCount,c.mode),r[g].lastCount+=c.length):(r[g]&&(r[g].lastCount=c.length),o[g][l]=d(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,e))}}i=s}for(h=0;h<i.length;h++)o[i[h]].end=0;return{map:o,table:r}}(function(t){for(var e=[],r=0;r<t.length;r++){var o=t[r];switch(o.mode){case n.NUMERIC:e.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:e.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:e.push([o,{data:o.data,mode:n.BYTE,length:l(o.data)}]);break;case n.BYTE:e.push([{data:o.data,mode:n.BYTE,length:l(o.data)}])}}return e}(g(t,f.isKanjiModeEnabled())),r),i=c.find_path(o.map,"start","end"),a=[],u=1;u<i.length-1;u++)a.push(o.table[i[u]].node);return e.fromArray(function(t){return t.reduce(function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}(a))},e.rawSplit=function(t){return e.fromArray(g(t,f.isKanjiModeEnabled()))}},vgyE:function(t,e,r){"use strict";var n=r("1Dla");i.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}();var o=i.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function i(t,e,r){return i.TYPED_ARRAY_SUPPORT||this instanceof i?"number"==typeof t?s(this,t):function(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer)return function(t,e,r,n){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");var o;o=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);i.TYPED_ARRAY_SUPPORT?o.__proto__=i.prototype:o=f(t,o);return o}(t,e,r,n);if("string"==typeof e)return function(t,e){var r=0|l(e),n=u(t,r),o=n.write(e);o!==r&&(n=n.slice(0,o));return n}(t,e);return function(t,e){if(i.isBuffer(e)){var r=0|a(e.length),n=u(t,r);return 0===n.length?n:(e.copy(n,0,0,r),n)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(o=e.length)!=o?u(t,0):f(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return f(t,e.data)}var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}(this,t,e,r):new i(t,e,r)}function a(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function u(t,e){var r;return i.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e)).__proto__=i.prototype:(null===(r=t)&&(r=new i(e)),r.length=e),r}function s(t,e){var r=u(t,e<0?0:0|a(e));if(!i.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)r[n]=0;return r}function f(t,e){for(var r=e.length<0?0:0|a(e.length),n=u(t,r),o=0;o<r;o+=1)n[o]=255&e[o];return n}function c(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function l(t){return i.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:c(t).length)}i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),i.prototype.write=function(t,e,r){void 0===e?(r=this.length,e=0):void 0===r&&"string"==typeof e?(r=this.length,e=0):isFinite(e)&&(e|=0,isFinite(r)?r|=0:r=void 0);var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,e,r,n){return function(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}(c(e,t.length-r),t,r,n)}(this,t,e,r)},i.prototype.slice=function(t,e){var r,n=this.length;if(t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),i.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=i.prototype;else{var o=e-t;r=new i(o,void 0);for(var a=0;a<o;++a)r[a]=this[a+t]}return r},i.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,a=n-r;if(this===t&&r<e&&e<n)for(o=a-1;o>=0;--o)t[o+e]=this[o+r];else if(a<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<a;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+a),e);return a},i.prototype.fill=function(t,e,r){if("string"==typeof t){if("string"==typeof e?(e=0,r=this.length):"string"==typeof r&&(r=this.length),1===t.length){var n=t.charCodeAt(0);n<256&&(t=n)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var a=i.isBuffer(t)?t:new i(t),u=a.length;for(o=0;o<r-e;++o)this[o+e]=a[o%u]}return this},i.concat=function(t,e){if(!n(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u(null,0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var o=s(null,e),a=0;for(r=0;r<t.length;++r){var f=t[r];if(!i.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(o,a),a+=f.length}return o},i.byteLength=l,i.prototype._isBuffer=!0,i.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.exports.alloc=function(t){var e=new i(t);return e.fill(0),e},t.exports.from=function(t){return new i(t)}},yayV:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("lC5x"),o=r.n(n),i=r("J0Oq"),a=r.n(i),u=r("9MTv"),s=r.n(u),f=r("d7aC"),c={data:function(){return{address:"",host:""}},computed:{shareAddress:function(){return this.host+"?tgm="+this.address}},created:function(){this.getAccount();var t=window.location.href.indexOf("#");this.host=window.location.href.slice(0,t+2)},methods:{qrcode:function(){var t=document.getElementById("canvas");s.a.toCanvas(t,this.address,function(t){})},onCopy:function(){this.$toast("复制成功")},getAccount:function(){var t=this;return a()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.getAccount();case 2:t.address=e.sent,t.$nextTick(function(){t.qrcode()});case 4:case"end":return e.stop()}},e,t)}))()}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share"},[n("div",{staticClass:"box positionAll"},[n("ul",{staticClass:"box-link Wcolor allFlex column"},[n("li",{staticClass:"center font-Ts"},[t._v("我的链接")]),t._v(" "),n("li",{staticClass:"link-address allFlex"},[n("span",{staticClass:"textHidden  font-Eight "},[t._v(t._s(t.shareAddress))]),t._v(" "),n("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.shareAddress,expression:"shareAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"copy-pic ",attrs:{src:r("OG1+"),alt:""}})]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("canvas",{attrs:{id:"canvas"}})])}]};var h=r("C7Lr")(c,l,!1,function(t){r("lANN")},"data-v-2f1d42d3",null);e.default=h.exports}});