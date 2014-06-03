/**
 * @preserve
 *
 * Copyright (C) 2014 Humu <humu2009@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @preserve
 *
 * This software contains a compiled copy of the TinyGL project developed by 
 * Fabrice Bellard, Olivier Landemarre and Peder Blekken. The original license 
 * is declared as following: 
 *
 * Copyright (C) 1997-2002 Fabrice Bellard
 * 
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product and its documentation 
 *    *is* required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

var TinyGLRenderingContext = (function() {

function e(a){throw a;}var i=void 0,j=!0,m=null,n=!1;function p(){return function(){}}var r;r||(r=eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));var aa={},s;for(s in r)r.hasOwnProperty(s)&&(aa[s]=r[s]);var t="object"===typeof process&&"function"===typeof require,ba="object"===typeof window,ca="function"===typeof importScripts,da=!ba&&!t&&!ca;
if(t){r.print||(r.print=function(a){process.stdout.write(a+"\n")});r.printErr||(r.printErr=function(a){process.stderr.write(a+"\n")});var ea=require("fs"),fa=require("path");r.read=function(a,b){var a=fa.normalize(a),c=ea.readFileSync(a);!c&&a!=fa.resolve(a)&&(a=path.join(__dirname,"..","src",a),c=ea.readFileSync(a));c&&!b&&(c=c.toString());return c};r.readBinary=function(a){return r.read(a,j)};r.load=function(a){ga(read(a))};r.arguments=process.argv.slice(2);module.exports=r}else da?(r.print||(r.print=
print),"undefined"!=typeof printErr&&(r.printErr=printErr),r.read="undefined"!=typeof read?read:function(){e("no read() available (jsc?)")},r.readBinary=function(a){return read(a,"binary")},"undefined"!=typeof scriptArgs?r.arguments=scriptArgs:"undefined"!=typeof arguments&&(r.arguments=arguments),this.Module=r,eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined")):ba||ca?(r.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,n);b.send(m);return b.responseText},
"undefined"!=typeof arguments&&(r.arguments=arguments),"undefined"!==typeof console?(r.print||(r.print=function(a){console.log(a)}),r.printErr||(r.printErr=function(a){console.log(a)})):r.print||(r.print=p()),ba?this.Module=r:r.load=importScripts):e("Unknown runtime environment. Where are we?");function ga(a){eval.call(m,a)}"undefined"==!r.load&&r.read&&(r.load=function(a){ga(r.read(a))});r.print||(r.print=p());r.printErr||(r.printErr=r.print);r.arguments||(r.arguments=[]);r.print=r.print;r.U=r.printErr;
r.preRun=[];r.postRun=[];for(s in aa)aa.hasOwnProperty(s)&&(r[s]=aa[s]);
var x={Wa:function(){return v},Va:function(a){v=a},Ee:function(a,b){b=b||4;return 1==b?a:isNumber(a)&&isNumber(b)?Math.ceil(a/b)*b:isNumber(b)&&isPowerOfTwo(b)?"((("+a+")+"+(b-1)+")&"+-b+")":"Math.ceil(("+a+")/"+b+")*"+b},fc:function(a){return a in x.Pb||a in x.Nb},gc:function(a){return"*"==a[a.length-1]},hc:function(a){return isPointerType(a)?n:isArrayType(a)||/<?\{ ?[^}]* ?\}>?/.test(a)?j:"%"==a[0]},Pb:{i1:0,i8:0,i16:0,i32:0,i64:0},Nb:{"float":0,"double":0},Ve:function(a,b){return(a|0|b|0)+4294967296*
(Math.round(a/4294967296)|Math.round(b/4294967296))},we:function(a,b){return((a|0)&(b|0))+4294967296*(Math.round(a/4294967296)&Math.round(b/4294967296))},af:function(a,b){return((a|0)^(b|0))+4294967296*(Math.round(a/4294967296)^Math.round(b/4294967296))},La:function(a){switch(a){case "i1":case "i8":return 1;case "i16":return 2;case "i32":return 4;case "i64":return 8;case "float":return 4;case "double":return 8;default:return"*"===a[a.length-1]?x.P:"i"===a[0]?(a=parseInt(a.substr(1)),A(0===a%8),a/
8):0}},ob:function(a){return Math.max(x.La(a),x.P)},Yb:function(a,b){var c={};return b?a.filter(function(a){return c[a[b]]?n:c[a[b]]=j}):a.filter(function(a){return c[a]?n:c[a]=j})},set:function(){for(var a="object"===typeof arguments[0]?arguments[0]:arguments,b={},c=0;c<a.length;c++)b[a[c]]=0;return b},me:8,oa:function(a,b,c){return c||!c&&("i64"==a||"double"==a)?8:!a?Math.min(b,8):Math.min(b||(a?x.ob(a):0),x.P)},Ub:function(a){a.D=0;a.T=0;var b=[],c=-1,d=0;a.mb=a.Ia.map(function(f){d++;var g,h;
x.fc(f)||x.gc(f)?(g=x.La(f),h=x.oa(f,g)):x.hc(f)?"0"===f[1]?(g=0,h=Types.types[f]?x.oa(m,Types.types[f].T):a.T||QUANTUM_SIZE):(g=Types.types[f].D,h=x.oa(m,Types.types[f].T)):"b"==f[0]?(g=f.substr(1)|0,h=1):"<"===f[0]?g=h=Types.types[f].D:"i"===f[0]?(g=h=parseInt(f.substr(1))/8,A(0===g%1,"cannot handle non-byte-size field "+f)):A(n,"invalid type for calculateStructAlignment");a.We&&(h=1);a.T=Math.max(a.T,h);f=x.aa(a.D,h);a.D=f+g;0<=c&&b.push(f-c);return c=f});a.ub&&"["===a.ub[0]&&(a.D=parseInt(a.ub.substr(1))*
a.D/2);a.D=x.aa(a.D,a.T);0==b.length?a.lb=a.D:1==x.Yb(b).length&&(a.lb=b[0]);a.Re=1!=a.lb;return a.mb},$b:function(a,b,c){var d,f;if(b){c=c||0;d=("undefined"===typeof Types?x.$e:Types.types)[b];if(!d)return m;if(d.Ia.length!=a.length)return printErr("Number of named fields must match the type for "+b+": possibly duplicate struct names. Cannot return structInfo"),m;f=d.mb}else d={Ia:a.map(function(a){return a[0]})},f=x.Ub(d);var g={oe:d.D};b?a.forEach(function(a,b){if("string"===typeof a)g[a]=f[b]+
c;else{var l,y;for(y in a)l=y;g[l]=x.$b(a[l],d.Ia[b],f[b])}}):a.forEach(function(a,b){g[a[1]]=f[b]});return g},Ga:function(a,b,c){return c&&c.length?(c.splice||(c=Array.prototype.slice.call(c)),c.splice(0,0,b),r["dynCall_"+a].apply(m,c)):r["dynCall_"+a].call(m,b)},na:[],pe:function(a){for(var b=0;b<x.na.length;b++)if(!x.na[b])return x.na[b]=a,2*(1+b);e("Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.")},Ye:function(a){x.na[(a-2)/2]=m},Fe:function(a,b){x.Fa||
(x.Fa={});var c=x.Fa[a];if(c)return c;for(var c=[],d=0;d<b;d++)c.push(String.fromCharCode(36)+d);a=ha(a);'"'===a[0]&&(a.indexOf('"',1)===a.length-1?a=a.substr(1,a.length-2):D("invalid EM_ASM input |"+a+"|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)"));return x.Fa[a]=eval("(function("+c.join(",")+"){ "+a+" })")},da:function(a){x.da.Ta||(x.da.Ta={});x.da.Ta[a]||(x.da.Ta[a]=1,r.U(a))},Ka:{},He:function(a,b){A(b);x.Ka[a]||(x.Ka[a]=function(){return x.Ga(b,
a,arguments)});return x.Ka[a]},Da:function(){var a=[],b=0;this.Pa=function(c){c&=255;if(0==a.length){if(0==(c&128))return String.fromCharCode(c);a.push(c);b=192==(c&224)?1:224==(c&240)?2:3;return""}if(b&&(a.push(c),b--,0<b))return"";var c=a[0],d=a[1],f=a[2],g=a[3];2==a.length?c=String.fromCharCode((c&31)<<6|d&63):3==a.length?c=String.fromCharCode((c&15)<<12|(d&63)<<6|f&63):(c=(c&7)<<18|(d&63)<<12|(f&63)<<6|g&63,c=String.fromCharCode(Math.floor((c-65536)/1024)+55296,(c-65536)%1024+56320));a.length=
0;return c};this.nc=function(a){for(var a=unescape(encodeURIComponent(a)),b=[],f=0;f<a.length;f++)b.push(a.charCodeAt(f));return b}},Ge:function(){e("You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work")},Ua:function(a){var b=v;v=v+a|0;v=v+7&-8;return b},Bb:function(a){var b=E;E=E+a|0;E=E+7&-8;return b},ma:function(a){var b=G;G=G+a|0;G=G+7&-8;G>=ia&&D("Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value "+
ia+", (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.");return b},aa:function(a,b){return Math.ceil(a/(b?b:8))*(b?b:8)},jc:function(a,b,c){return c?+(a>>>0)+4294967296*+(b>>>0):+(a>>>0)+4294967296*+(b|0)},Ob:8,P:4,ne:0};r.Runtime=x;var ja=n,ka,la;function A(a,b){a||D("Assertion failed: "+b)}r.ccall=function(a,b,c,d){return ma(na(a),b,c,d)};
function na(a){try{var b=r["_"+a];b||(b=eval("_"+a))}catch(c){}A(b,"Cannot call unknown function "+a+" (perhaps LLVM optimizations or closure removed it?)");return b}function ma(a,b,c,d){function f(a,b){if("string"==b){if(a===m||a===i||0===a)return 0;a=J(a);b="array"}if("array"==b){g||(g=x.Wa());var c=x.Ua(a.length);oa(a,c);return c}return a}var g=0,h=0,d=d?d.map(function(a){return f(a,c[h++])}):[];a=a.apply(m,d);"string"==b?b=ha(a):(A("array"!=b),b=a);g&&x.Va(g);return b}
r.cwrap=function(a,b,c){var d=na(a);return function(){return ma(d,b,c,Array.prototype.slice.call(arguments))}};
function pa(a,b,c){c=c||"i8";"*"===c.charAt(c.length-1)&&(c="i32");switch(c){case "i1":K[a]=b;break;case "i8":K[a]=b;break;case "i16":ra[a>>1]=b;break;case "i32":L[a>>2]=b;break;case "i64":la=[b>>>0,(ka=b,1<=+sa(ka)?0<ka?(ta(+ua(ka/4294967296),4294967295)|0)>>>0:~~+va((ka-+(~~ka>>>0))/4294967296)>>>0:0)];L[a>>2]=la[0];L[a+4>>2]=la[1];break;case "float":wa[a>>2]=b;break;case "double":xa[a>>3]=b;break;default:D("invalid type for setValue: "+c)}}r.setValue=pa;
r.getValue=function(a,b){b=b||"i8";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return K[a];case "i8":return K[a];case "i16":return ra[a>>1];case "i32":return L[a>>2];case "i64":return L[a>>2];case "float":return wa[a>>2];case "double":return xa[a>>3];default:D("invalid type for setValue: "+b)}return m};var M=2,ya=4;r.ALLOC_NORMAL=0;r.ALLOC_STACK=1;r.ALLOC_STATIC=M;r.ALLOC_DYNAMIC=3;r.ALLOC_NONE=ya;
function N(a,b,c,d){var f,g;"number"===typeof a?(f=j,g=a):(f=n,g=a.length);var h="string"===typeof b?b:m,c=c==ya?d:[za,x.Ua,x.Bb,x.ma][c===i?M:c](Math.max(g,h?1:b.length));if(f){d=c;A(0==(c&3));for(a=c+(g&-4);d<a;d+=4)L[d>>2]=0;for(a=c+g;d<a;)K[d++|0]=0;return c}if("i8"===h)return a.subarray||a.slice?P.set(a,c):P.set(new Uint8Array(a),c),c;for(var d=0,k,l;d<g;){var y=a[d];"function"===typeof y&&(y=x.Ie(y));f=h||b[d];0===f?d++:("i64"==f&&(f="i32"),pa(c+d,y,f),l!==f&&(k=x.La(f),l=f),d+=k)}return c}
r.allocate=N;function ha(a,b){for(var c=n,d,f=0;;){d=P[a+f|0];if(128<=d)c=j;else if(0==d&&!b)break;f++;if(b&&f==b)break}b||(b=f);var g="";if(!c){for(;0<b;)d=String.fromCharCode.apply(String,P.subarray(a,a+Math.min(b,1024))),g=g?g+d:d,a+=1024,b-=1024;return g}c=new x.Da;for(f=0;f<b;f++)d=P[a+f|0],g+=c.Pa(d);return g}r.Pointer_stringify=ha;r.UTF16ToString=function(a){for(var b=0,c="";;){var d=ra[a+2*b>>1];if(0==d)return c;++b;c+=String.fromCharCode(d)}};
r.stringToUTF16=function(a,b){for(var c=0;c<a.length;++c)ra[b+2*c>>1]=a.charCodeAt(c);ra[b+2*a.length>>1]=0};r.UTF32ToString=function(a){for(var b=0,c="";;){var d=L[a+4*b>>2];if(0==d)return c;++b;65536<=d?(d-=65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023)):c+=String.fromCharCode(d)}};r.stringToUTF32=function(a,b){for(var c=0,d=0;d<a.length;++d){var f=a.charCodeAt(d);if(55296<=f&&57343>=f)var g=a.charCodeAt(++d),f=65536+((f&1023)<<10)|g&1023;L[b+4*c>>2]=f;++c}L[b+4*c>>2]=0};
function Aa(a){function b(h,l,y){var l=l||Infinity,F="",w=[],u;if("N"===a[c]){c++;"K"===a[c]&&c++;for(u=[];"E"!==a[c];)if("S"===a[c]){c++;var C=a.indexOf("_",c);u.push(f[a.substring(c,C)||0]||"?");c=C+1}else if("C"===a[c])u.push(u[u.length-1]),c+=2;else{var C=parseInt(a.substr(c)),H=C.toString().length;if(!C||!H){c--;break}var I=a.substr(c+H,C);u.push(I);f.push(I);c+=H+C}c++;u=u.join("::");l--;if(0===l)return h?[u]:u}else if(("K"===a[c]||g&&"L"===a[c])&&c++,C=parseInt(a.substr(c)))H=C.toString().length,
u=a.substr(c+H,C),c+=H+C;g=n;"I"===a[c]?(c++,C=b(j),H=b(j,1,j),F+=H[0]+" "+u+"<"+C.join(", ")+">"):F=u;a:for(;c<a.length&&0<l--;)if(u=a[c++],u in d)w.push(d[u]);else switch(u){case "P":w.push(b(j,1,j)[0]+"*");break;case "R":w.push(b(j,1,j)[0]+"&");break;case "L":c++;C=a.indexOf("E",c)-c;w.push(a.substr(c,C));c+=C+2;break;case "A":C=parseInt(a.substr(c));c+=C.toString().length;"_"!==a[c]&&e("?");c++;w.push(b(j,1,j)[0]+" ["+C+"]");break;case "E":break a;default:F+="?"+u;break a}!y&&(1===w.length&&"void"===
w[0])&&(w=[]);return h?w:F+("("+w.join(", ")+")")}var c=3,d={v:"void",b:"bool",c:"char",s:"short",i:"int",l:"long",f:"float",d:"double",w:"wchar_t",a:"signed char",h:"unsigned char",t:"unsigned short",j:"unsigned int",m:"unsigned long",x:"long long",y:"unsigned long long",z:"..."},f=[],g=j;try{if("Object._main"==a||"_main"==a)return"main()";"number"===typeof a&&(a=ha(a));if("_"!==a[0]||"_"!==a[1]||"Z"!==a[2])return a;switch(a[3]){case "n":return"operator new()";case "d":return"operator delete()"}return b()}catch(h){return a}}
function Ba(){var a=Error().stack;return a?a.replace(/__Z[\w\d_]+/g,function(a){var c=Aa(a);return a===c?a:a+" ["+c+"]"}):"(no stack trace available)"}for(var K,P,ra,Ca,L,Da,wa,xa,Ea=0,E=0,Fa=0,v=0,Ga=0,Ha=0,G=0,Ia=r.TOTAL_STACK||5242880,ia=r.TOTAL_MEMORY||16777216,Q=4096;Q<ia||Q<2*Ia;)Q=16777216>Q?2*Q:Q+16777216;Q!==ia&&(r.U("increasing TOTAL_MEMORY to "+Q+" to be more reasonable"),ia=Q);
A("undefined"!==typeof Int32Array&&"undefined"!==typeof Float64Array&&!!(new Int32Array(1)).subarray&&!!(new Int32Array(1)).set,"JS engine does not provide full typed array support");var R=new ArrayBuffer(ia);K=new Int8Array(R);ra=new Int16Array(R);L=new Int32Array(R);P=new Uint8Array(R);Ca=new Uint16Array(R);Da=new Uint32Array(R);wa=new Float32Array(R);xa=new Float64Array(R);L[0]=255;A(255===P[0]&&0===P[3],"Typed arrays 2 must be run on a little-endian system");r.HEAP=i;r.HEAP8=K;r.HEAP16=ra;
r.HEAP32=L;r.HEAPU8=P;r.HEAPU16=Ca;r.HEAPU32=Da;r.HEAPF32=wa;r.HEAPF64=xa;function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Q;"number"===typeof c?b.Ea===i?x.Ga("v",c):x.Ga("vi",c,[b.Ea]):c(b.Ea===i?m:b.Ea)}}}var Ka=[],La=[],Ma=[],Na=[],Oa=[],Pa=n;function Qa(a){Ka.unshift(a)}r.addOnPreRun=r.ue=Qa;r.addOnInit=r.re=function(a){La.unshift(a)};r.addOnPreMain=r.te=function(a){Ma.unshift(a)};r.addOnExit=r.qe=function(a){Na.unshift(a)};
function Ra(a){Oa.unshift(a)}r.addOnPostRun=r.se=Ra;function J(a,b,c){a=(new x.Da).nc(a);c&&(a.length=c);b||a.push(0);return a}r.intArrayFromString=J;r.intArrayToString=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];255<d&&(d&=255);b.push(String.fromCharCode(d))}return b.join("")};r.writeStringToMemory=function(a,b,c){a=J(a,c);for(c=0;c<a.length;)K[b+c|0]=a[c],c+=1};function oa(a,b){for(var c=0;c<a.length;c++)K[b+c|0]=a[c]}r.writeArrayToMemory=oa;
r.writeAsciiToMemory=function(a,b,c){for(var d=0;d<a.length;d++)K[b+d|0]=a.charCodeAt(d);c||(K[b+a.length|0]=0)};function Sa(a,b){return 0<=a?a:32>=b?2*Math.abs(1<<b-1)+a:Math.pow(2,b)+a}function Ta(a,b){if(0>=a)return a;var c=32>=b?Math.abs(1<<b-1):Math.pow(2,b-1);if(a>=c&&(32>=b||a>c))a=-2*c+a;return a}if(!Math.imul||-5!==Math.imul(4294967295,5))Math.imul=function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16)*d+c*(b>>>16)<<16)|0};Math.Le=Math.imul;
var sa=Math.abs,Ua=Math.cos,Va=Math.sin,Wa=Math.sqrt,va=Math.ceil,ua=Math.floor,Xa=Math.pow,ta=Math.min,S=0,Ya=m,Za=m;function $a(){S++;r.monitorRunDependencies&&r.monitorRunDependencies(S)}r.addRunDependency=$a;function ab(){S--;r.monitorRunDependencies&&r.monitorRunDependencies(S);if(0==S&&(Ya!==m&&(clearInterval(Ya),Ya=m),Za)){var a=Za;Za=m;a()}}r.removeRunDependency=ab;r.preloadedImages={};r.preloadedAudios={};Ea=8;E=Ea+2976;La.push({Q:function(){bb()}});var cb;cb=cb=N(1,"i32*",M);
N([216,4,0,0,216,3,0,0,8,3,0,0,240,2,0,0,224,2,0,0,200,2,0,0,136,9,0,0,112,9,0,0,216,8,0,0,200,8,0,0,136,8,0,0,120,8,0,0,72,8,0,0,56,8,0,0,0,8,0,0,232,7,0,0,128,7,0,0,96,7,0,0,32,7,0,0,216,6,0,0,192,6,0,0,120,6,0,0,88,6,0,0,72,6,0,0,40,6,0,0,16,6,0,0,232,5,0,0,216,5,0,0,200,5,0,0,184,5,0,0,136,5,0,0,112,5,0,0,80,5,0,0,40,5,0,0,16,5,0,0,248,4,0,0,200,4,0,0,176,4,0,0,152,4,0,0,136,4,0,0,120,4,0,0,104,4,0,0,80,4,0,0,56,4,0,0,24,4,0,0,248,3,0,0,184,3,0,0,152,3,0,0,120,3,0,0,88,3,0,0,64,3,0,0,0,0,0,0,
8,0,0,0,5,0,0,0,2,0,0,0,4,0,0,0,2,0,0,0,5,0,0,0,1,0,0,0,3,0,0,0,2,0,0,0,17,0,0,0,1,0,0,0,17,0,0,0,1,0,0,0,1,0,0,0,5,0,0,0,4,0,0,0,4,0,0,0,5,0,0,0,7,0,0,0,7,0,0,0,3,0,0,0,7,0,0,0,6,0,0,0,2,0,0,0,5,0,0,0,2,0,0,0,1,0,0,0,2,0,0,0,1,0,0,0,2,0,0,0,10,0,0,0,3,0,0,0,8,0,0,0,8,0,0,0,3,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,3,0,0,0,2,0,0,0,3,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,5,0,0,0,5,0,0,0,4,0,0,0,5,0,0,0,3,0,0,0,0,0,0,0,34,0,0,0,80,0,0,0,98,0,0,0,70,0,0,0,54,0,0,0,100,0,0,0,38,0,0,0,2,0,0,0,56,0,0,0,14,
0,0,0,12,0,0,0,32,0,0,0,16,0,0,0,18,0,0,0,102,0,0,0,44,0,0,0,10,0,0,0,26,0,0,0,74,0,0,0,50,0,0,0,90,0,0,0,42,0,0,0,6,0,0,0,60,0,0,0,78,0,0,0,22,0,0,0,28,0,0,0,82,0,0,0,84,0,0,0,92,0,0,0,30,0,0,0,66,0,0,0,8,0,0,0,86,0,0,0,52,0,0,0,46,0,0,0,64,0,0,0,58,0,0,0,72,0,0,0,4,0,0,0,94,0,0,0,20,0,0,0,88,0,0,0,36,0,0,0,96,0,0,0,68,0,0,0,76,0,0,0,40,0,0,0,24,0,0,0,48,0,0,0,62,0,0,0,0,0,0,0,8,0,0,0,10,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,12,0,0,0,103,108,84,101,120,73,109,97,103,101,50,68,58,32,99,111,109,98,105,110,
97,105,115,111,110,32,111,102,32,112,97,114,97,109,101,116,101,114,115,32,110,111,116,32,104,97,110,100,108,101,100,0,0,0,0,0,103,108,86,101,114,116,101,120,32,34,37,102,32,37,102,32,37,102,32,37,102,34,0,0,103,108,66,101,103,105,110,32,34,37,67,34,0,0,0,0,103,108,78,111,114,109,97,108,32,34,37,102,32,37,102,32,37,102,34,0,0,0,0,0,103,108,69,100,103,101,70,108,97,103,32,34,37,100,34,0,117,110,97,98,108,101,32,116,111,32,97,108,108,111,99,97,116,101,32,71,76,86,101,114,116,101,120,32,97,114,114,97,
121,46,10,0,0,0,0,0,103,108,80,111,108,121,103,111,110,79,102,102,115,101,116,32,34,37,102,32,37,102,34,0,103,108,84,101,120,67,111,111,114,100,80,111,105,110,116,101,114,32,34,37,100,32,37,67,32,37,100,32,37,112,34,0,103,108,78,111,114,109,97,108,80,111,105,110,116,101,114,32,34,37,67,32,37,100,32,37,112,34,0,0,0,0,0,0,103,108,67,111,108,111,114,80,111,105,110,116,101,114,32,34,37,100,32,37,67,32,37,100,32,37,112,34,0,0,0,0,103,108,86,101,114,116,101,120,80,111,105,110,116,101,114,32,34,37,100,32,
37,67,32,37,100,32,37,112,34,0,0,0,103,108,84,101,120,67,111,111,114,100,32,34,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,0,0,0,0,0,103,108,68,105,115,97,98,108,101,67,108,105,101,110,116,83,116,97,116,101,32,34,37,67,34,0,0,0,0,0,0,0,103,108,69,110,97,98,108,101,67,108,105,101,110,116,83,116,97,116,101,32,34,37,67,34,0,0,0,0,0,0,0,0,103,108,65,114,114,97,121,69,108,101,109,101,110,116,32,34,37,100,34,0,0,0,0,0,103,108,78,101,120,116,66,117,102,102,101,114,32,34,37,112,34,0,0,0,0,0,0,0,103,108,
69,110,100,76,105,115,116,32,34,34,0,0,0,0,103,108,72,105,110,116,32,34,37,67,32,37,67,34,0,0,103,108,67,97,108,108,76,105,115,116,32,34,37,100,34,0,103,108,80,111,108,121,103,111,110,77,111,100,101,32,34,37,67,32,37,67,34,0,0,0,103,108,70,114,111,110,116,70,97,99,101,32,34,37,67,34,0,0,0,0,0,0,0,0,103,108,67,117,108,108,70,97,99,101,32,34,37,67,34,0,103,108,67,111,108,111,114,32,34,37,102,32,37,102,32,37,102,32,37,102,32,37,100,32,37,100,32,37,100,34,0,0,103,108,83,104,97,100,101,77,111,100,101,
108,32,34,37,67,34,0,0,0,0,0,0,0,103,108,80,105,120,101,108,83,116,111,114,101,32,34,37,67,32,37,67,34,0,0,0,0,103,108,84,101,120,80,97,114,97,109,101,116,101,114,32,34,37,67,32,37,67,32,37,67,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,103,108,84,101,120,69,110,118,32,34,37,67,32,37,67,32,37,67,32,37,102,32,37,102,32,37,102,32,37,102,34,0,103,108,66,105,110,100,84,101,120,116,117,114,101,32,34,37,67,32,37,100,34,0,0,0,103,108,84,101,120,73,109,97,103,101,50,68,32,34,37,100,32,37,100,32,37,100,
32,37,100,32,37,100,32,37,100,32,37,100,32,37,100,32,37,100,34,0,0,0,0,0,0,0,103,108,76,111,97,100,78,97,109,101,32,34,37,100,34,0,103,108,80,111,112,78,97,109,101,32,34,34,0,0,0,0,103,108,80,117,115,104,78,97,109,101,32,34,37,100,34,0,103,108,73,110,105,116,78,97,109,101,115,32,34,34,0,0,108,105,115,116,32,37,100,32,110,111,116,32,100,101,102,105,110,101,100,0,0,0,0,0,103,108,67,108,101,97,114,68,101,112,116,104,32,34,37,102,34,0,0,0,0,0,0,0,103,108,67,108,101,97,114,67,111,108,111,114,32,34,37,
102,32,37,102,32,37,102,32,37,102,34,0,0,0,0,0,0,103,108,67,108,101,97,114,32,34,37,100,34,0,0,0,0,103,108,76,105,103,104,116,77,111,100,101,108,32,34,37,67,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,103,108,76,105,103,104,116,32,34,37,67,32,37,67,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,0,0,99,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,115,112,101,99,117,108,97,114,32,98,117,102,102,101,114,0,0,0,0,0,0,103,108,67,111,108,111,114,77,97,116,101,114,105,97,108,32,
34,37,67,32,37,67,34,0,103,108,77,97,116,101,114,105,97,108,32,34,37,67,32,37,67,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,69,114,114,111,114,32,119,104,105,108,101,32,105,110,105,116,105,97,108,105,122,105,110,103,32,90,32,98,117,102,102,101,114,10,0,0,0,0,0,0,103,108,70,114,117,115,116,117,109,32,34,37,102,32,37,102,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,103,108,86,105,101,119,112,111,114,116,58,32,37,100,32,37,100,32,37,100,32,37,100,10,0,0,0,0,0,0,0,0,103,108,86,105,101,119,112,
111,114,116,32,34,37,100,32,37,100,32,37,100,32,37,100,34,0,0,0,0,0,0,0,0,103,108,83,99,97,108,101,32,34,37,102,32,37,102,32,37,102,34,0,0,0,0,0,0,103,108,80,105,120,101,108,83,116,111,114,101,58,32,117,110,115,117,112,112,111,114,116,101,100,32,111,112,116,105,111,110,0,0,0,0,0,0,0,0,103,108,84,101,120,80,97,114,97,109,101,116,101,114,58,32,117,110,115,117,112,112,111,114,116,101,100,32,111,112,116,105,111,110,0,0,0,0,0,0,103,108,84,114,97,110,115,108,97,116,101,32,34,37,102,32,37,102,32,37,102,
34,0,0,103,108,82,111,116,97,116,101,32,34,37,102,32,37,102,32,37,102,32,37,102,34,0,0,103,108,71,101,116,58,32,111,112,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,0,0,103,108,80,111,112,77,97,116,114,105,120,32,34,34,0,0,103,108,80,117,115,104,77,97,116,114,105,120,32,34,34,0,103,108,66,101,103,105,110,58,32,116,121,112,101,32,37,120,32,110,111,116,32,104,97,110,100,108,101,100,10,0,0,0,103,108,77,117,108,116,77,97,116,114,105,120,32,34,34,0,103,108,76,111,97,
100,73,100,101,110,116,105,116,121,32,34,34,0,0,0,0,0,0,0,103,108,111,112,76,105,103,104,116,77,111,100,101,108,58,32,105,108,108,101,103,97,108,32,112,110,97,109,101,58,32,48,120,37,120,10,0,0,0,0,103,108,76,111,97,100,77,97,116,114,105,120,32,34,34,0,103,108,77,97,116,114,105,120,77,111,100,101,32,34,37,67,34,0,0,0,0,0,0,0,119,97,114,110,105,110,103,58,32,117,110,107,110,111,119,110,32,112,110,97,109,101,32,105,110,32,103,108,71,101,116,70,108,111,97,116,118,40,41,10,0,0,0,0,0,0,0,0,103,108,86,
105,101,119,112,111,114,116,58,32,115,105,122,101,32,116,111,111,32,115,109,97,108,108,0,0,0,0,0,0,103,108,86,105,101,119,112,111,114,116,58,32,101,114,114,111,114,32,119,104,105,108,101,32,114,101,115,105,122,105,110,103,32,100,105,115,112,108,97,121,0,0,0,0,0,0,0,0,103,108,69,110,97,98,108,101,68,105,115,97,98,108,101,32,34,37,67,32,37,100,34,0,103,108,69,110,100,32,34,34,0,0,0,0,0,0,0,0,37,100,0,0,0,0,0,0,37,103,0,0,0,0,0,0],"i8",ya,x.Ob);var db=x.aa(N(12,"i8",M),8);A(0==db%8);r._memcpy=eb;
r._memset=fb;
var T={$:1,ga:2,$d:3,Yc:4,O:5,bb:6,vc:7,vd:8,fa:9,Ic:10,Z:11,je:11,Lb:12,Eb:13,Tc:14,Hd:15,Ya:16,Za:17,ke:18,$a:19,Mb:20,za:21,u:22,qd:23,Kb:24,Ld:25,ge:26,Uc:27,Dd:28,Ca:29,Xd:30,jd:31,Qd:32,Qc:33,Ud:34,zd:42,Wc:43,Jc:44,$c:45,ad:46,bd:47,hd:48,he:49,td:50,Zc:51,Oc:35,wd:37,Ac:52,Dc:53,le:54,rd:55,Ec:56,Fc:57,Pc:35,Gc:59,Fd:60,ud:61,de:62,Ed:63,Ad:64,Bd:65,Wd:66,xd:67,yc:68,ae:69,Kc:70,Rd:71,ld:72,Rc:73,Cc:74,Md:76,Bc:77,Vd:78,cd:79,dd:80,gd:81,fd:82,ed:83,Gd:38,ab:39,md:36,Aa:40,Ba:95,Pd:96,Nc:104,
sd:105,zc:97,Td:91,Jd:88,Cd:92,Yd:108,Mc:111,wc:98,Lc:103,pd:101,nd:100,ee:110,Vc:112,Hb:113,Ib:115,Fb:114,Gb:89,kd:90,Sd:93,Zd:94,xc:99,od:102,Jb:106,ha:107,fe:109,ie:87,Sc:122,be:116,Kd:95,yd:123,Xc:84,Nd:75,Hc:125,Id:131,Od:130,ce:86},gb={"0":"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",
12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",
34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",
53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",
74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",
90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",
107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"},hb=0;function ib(a){return L[hb>>2]=a}
function jb(a,b){for(var c=0,d=a.length-1;0<=d;d--){var f=a[d];"."===f?a.splice(d,1):".."===f?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}function U(a){var b="/"===a.charAt(0),c="/"===a.substr(-1),a=jb(a.split("/").filter(function(a){return!!a}),!b).join("/");!a&&!b&&(a=".");a&&c&&(a+="/");return(b?"/":"")+a}function kb(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}
function lb(){for(var a="",b=n,c=arguments.length-1;-1<=c&&!b;c--){var d=0<=c?arguments[c]:"/";"string"!==typeof d&&e(new TypeError("Arguments to path.resolve must be strings"));d&&(a=d+"/"+a,b="/"===d.charAt(0))}a=jb(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}var mb=[];function nb(a,b){mb[a]={input:[],S:[],ba:b};ob[a]={k:qb}}
var qb={open:function(a){var b=mb[a.e.ua];b||e(new V(T.$a));a.C=b;a.seekable=n},close:function(a){a.C.S.length&&a.C.ba.ta(a.C,10)},N:function(a,b,c,d){(!a.C||!a.C.ba.qb)&&e(new V(T.bb));for(var f=0,g=0;g<d;g++){var h;try{h=a.C.ba.qb(a.C)}catch(k){e(new V(T.O))}h===i&&0===f&&e(new V(T.Z));if(h===m||h===i)break;f++;b[c+g]=h}f&&(a.e.timestamp=Date.now());return f},write:function(a,b,c,d){(!a.C||!a.C.ba.ta)&&e(new V(T.bb));for(var f=0;f<d;f++)try{a.C.ba.ta(a.C,b[c+f])}catch(g){e(new V(T.O))}d&&(a.e.timestamp=
Date.now());return f}},W={F:m,Db:1,ya:2,Xa:3,M:function(){return W.createNode(m,"/",16895,0)},createNode:function(a,b,c,d){(24576===(c&61440)||4096===(c&61440))&&e(new V(T.$));W.F||(W.F={dir:{e:{L:W.n.L,A:W.n.A,Na:W.n.Na,qa:W.n.qa,rename:W.n.rename,Cb:W.n.Cb,Ab:W.n.Ab,xb:W.n.xb,wa:W.n.wa},G:{R:W.k.R}},file:{e:{L:W.n.L,A:W.n.A},G:{R:W.k.R,N:W.k.N,write:W.k.write,eb:W.k.eb,tb:W.k.tb}},link:{e:{L:W.n.L,A:W.n.A,va:W.n.va},G:{}},hb:{e:{L:W.n.L,A:W.n.A},G:rb}});c=sb(a,b,c,d);16384===(c.mode&61440)?(c.n=
W.F.dir.e,c.k=W.F.dir.G,c.o={}):32768===(c.mode&61440)?(c.n=W.F.file.e,c.k=W.F.file.G,c.o=[],c.ja=W.ya):40960===(c.mode&61440)?(c.n=W.F.link.e,c.k=W.F.link.G):8192===(c.mode&61440)&&(c.n=W.F.hb.e,c.k=W.F.hb.G);c.timestamp=Date.now();a&&(a.o[b]=c);return c},Ha:function(a){a.ja!==W.ya&&(a.o=Array.prototype.slice.call(a.o),a.ja=W.ya)},n:{L:function(a){var b={};b.Ce=8192===(a.mode&61440)?a.id:1;b.Me=a.id;b.mode=a.mode;b.Se=1;b.uid=0;b.Ke=0;b.ua=a.ua;b.size=16384===(a.mode&61440)?4096:32768===(a.mode&
61440)?a.o.length:40960===(a.mode&61440)?a.link.length:0;b.xe=new Date(a.timestamp);b.Qe=new Date(a.timestamp);b.Be=new Date(a.timestamp);b.Tb=4096;b.ye=Math.ceil(b.size/b.Tb);return b},A:function(a,b){b.mode!==i&&(a.mode=b.mode);b.timestamp!==i&&(a.timestamp=b.timestamp);if(b.size!==i){W.Ha(a);var c=a.o;if(b.size<c.length)c.length=b.size;else for(;b.size>c.length;)c.push(0)}},Na:function(){e(tb[T.ga])},qa:function(a,b,c,d){return W.createNode(a,b,c,d)},rename:function(a,b,c){if(16384===(a.mode&61440)){var d;
try{d=ub(b,c)}catch(f){}if(d)for(var g in d.o)e(new V(T.ab))}delete a.parent.o[a.name];a.name=c;b.o[c]=a;a.parent=b},Cb:function(a,b){delete a.o[b]},Ab:function(a,b){var c=ub(a,b),d;for(d in c.o)e(new V(T.ab));delete a.o[b]},xb:function(a){var b=[".",".."],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c);return b},wa:function(a,b,c){a=W.createNode(a,b,41471,0);a.link=c;return a},va:function(a){40960!==(a.mode&61440)&&e(new V(T.u));return a.link}},k:{N:function(a,b,c,d,f){a=a.e.o;if(f>=a.length)return 0;
d=Math.min(a.length-f,d);A(0<=d);if(8<d&&a.subarray)b.set(a.subarray(f,f+d),c);else for(var g=0;g<d;g++)b[c+g]=a[f+g];return d},write:function(a,b,c,d,f,g){var h=a.e;h.timestamp=Date.now();a=h.o;if(d&&0===a.length&&0===f&&b.subarray)return g&&0===c?(h.o=b,h.ja=b.buffer===K.buffer?W.Db:W.Xa):(h.o=new Uint8Array(b.subarray(c,c+d)),h.ja=W.Xa),d;W.Ha(h);for(a=h.o;a.length<f;)a.push(0);for(g=0;g<d;g++)a[f+g]=b[c+g];return d},R:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.e.mode&61440)&&(b+=a.e.o.length);
0>b&&e(new V(T.u));a.sc=[];return a.position=b},eb:function(a,b,c){W.Ha(a.e);a=a.e.o;for(b+=c;b>a.length;)a.push(0)},tb:function(a,b,c,d,f,g,h){32768!==(a.e.mode&61440)&&e(new V(T.$a));a=a.e.o;if(!(h&2)&&(a.buffer===b||a.buffer===b.buffer))f=n,d=a.byteOffset;else{if(0<f||f+d<a.length)a=a.subarray?a.subarray(f,f+d):Array.prototype.slice.call(a,f,f+d);f=j;(d=za(d))||e(new V(T.Lb));b.set(a,d)}return{Xe:d,ve:f}}}},vb=N(1,"i32*",M),wb=N(1,"i32*",M);cb=N(1,"i32*",M);
var xb=m,ob=[m],X=[],yb=1,zb=m,Ab=j,V=m,tb={};function Bb(a){a instanceof V||e(a+" : "+Ba());ib(a.jb)}
function Y(a,b){var a=lb("/",a),b=b||{},c={nb:j,Qa:0},d;for(d in c)b[d]===i&&(b[d]=c[d]);8<b.Qa&&e(new V(T.Aa));var c=jb(a.split("/").filter(function(a){return!!a}),n),f=xb,g="/";for(d=0;d<c.length;d++){var h=d===c.length-1;if(h&&b.parent)break;f=ub(f,c[d]);g=U(g+"/"+c[d]);if(f.ra&&(!h||h&&b.nb))f=f.ra.root;if(!h||b.Ja)for(h=0;40960===(f.mode&61440);){f=Y(g).e;f.n.va||e(new V(T.u));var f=f.n.va(f),k=lb;var l=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(g).slice(1),g=l[0],l=
l[1];!g&&!l?g=".":(l&&(l=l.substr(0,l.length-1)),g+=l);g=k(g,f);f=Y(g,{Qa:b.Qa}).e;40<h++&&e(new V(T.Aa))}}return{path:g,e:f}}function Cb(a){for(var b;;){if(a===a.parent)return a=a.M.kc,!b?a:"/"!==a[a.length-1]?a+"/"+b:a+b;b=b?a.name+"/"+b:a.name;a=a.parent}}function Db(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%zb.length}
function ub(a,b){var c=Eb(a,"x");c&&e(new V(c));for(c=zb[Db(a.id,b)];c;c=c.mc){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.n.Na(a,b)}
function sb(a,b,c,d){Fb||(Fb=function(a,b,c,d){a||(a=this);this.parent=a;this.M=a.M;this.ra=m;this.id=yb++;this.name=b;this.mode=c;this.n={};this.k={};this.ua=d},Fb.prototype={},Object.defineProperties(Fb.prototype,{N:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},ec:{get:function(){return 16384===(this.mode&61440)}},dc:{get:function(){return 8192===
(this.mode&61440)}}}));a=new Fb(a,b,c,d);b=Db(a.parent.id,a.name);a.mc=zb[b];return zb[b]=a}var Gb={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function Hb(a){var b=Gb[a];"undefined"===typeof b&&e(Error("Unknown file open mode: "+a));return b}function Eb(a,b){return Ab?0:-1!==b.indexOf("r")&&!(a.mode&292)||-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73)?T.Eb:0}
function Ib(a,b){try{return ub(a,b),T.Za}catch(c){}return Eb(a,"wx")}
function Jb(a,b,c){Kb||(Kb=p(),Kb.prototype={},Object.defineProperties(Kb.prototype,{object:{get:function(){return this.e},set:function(a){this.e=a}},Oe:{get:function(){return 1!==(this.K&2097155)}},Pe:{get:function(){return 0!==(this.K&2097155)}},Ne:{get:function(){return this.K&1024}}}));if(a.__proto__)a.__proto__=Kb.prototype;else{var d=new Kb,f;for(f in a)d[f]=a[f];a=d}var g;a:{b=b||0;for(c=c||4096;b<=c;b++)if(!X[b]){g=b;break a}e(new V(T.Kb))}a.B=g;return X[g]=a}
var rb={open:function(a){a.k=ob[a.e.ua].k;a.k.open&&a.k.open(a)},R:function(){e(new V(T.Ca))}};function Lb(a,b){var c="/"===b,d=!b,f;c&&xb&&e(new V(T.Ya));!c&&!d&&(f=Y(b,{nb:n}),b=f.path,f=f.e,f.ra&&e(new V(T.Ya)),16384!==(f.mode&61440)&&e(new V(T.Mb)));var d={type:a,Ue:{},kc:b,lc:[]},g=a.M(d);g.M=d;d.root=g;c?xb=g:f&&(f.ra=d,f.M&&f.M.lc.push(d));return g}function Mb(a,b,c){var d=Y(a,{parent:j}).e,a=kb(a),f=Ib(d,a);f&&e(new V(f));d.n.qa||e(new V(T.$));return d.n.qa(d,a,b,c)}
function Nb(a,b){b=(b!==i?b:438)&4095;b|=32768;return Mb(a,b,0)}function Ob(a,b){b=(b!==i?b:511)&1023;b|=16384;return Mb(a,b,0)}function Pb(a,b,c){"undefined"===typeof c&&(c=b,b=438);return Mb(a,b|8192,c)}function Qb(a,b){var c=Y(b,{parent:j}).e,d=kb(b),f=Ib(c,d);f&&e(new V(f));c.n.wa||e(new V(T.$));return c.n.wa(c,d,a)}function Rb(a,b){var c;c="string"===typeof a?Y(a,{Ja:j}).e:a;c.n.A||e(new V(T.$));c.n.A(c,{mode:b&4095|c.mode&-4096,timestamp:Date.now()})}
function Sb(a,b){var c,b="string"===typeof b?Hb(b):b;c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;var d;if("object"===typeof a)d=a;else{a=U(a);try{d=Y(a,{Ja:!(b&131072)}).e}catch(f){}}b&64&&(d?b&128&&e(new V(T.Za)):d=Mb(a,c,0));d||e(new V(T.ga));8192===(d.mode&61440)&&(b&=-513);d?40960===(d.mode&61440)?c=T.Aa:16384===(d.mode&61440)&&(0!==(b&2097155)||b&512)?c=T.za:(c=["r","w","rw"][b&2097155],b&512&&(c+="w"),c=Eb(d,c)):c=T.ga;c&&e(new V(c));if(b&512){c=d;c="string"===typeof c?Y(c,{Ja:j}).e:
c;c.n.A||e(new V(T.$));16384===(c.mode&61440)&&e(new V(T.za));32768!==(c.mode&61440)&&e(new V(T.u));var g=Eb(c,"w");g&&e(new V(g));c.n.A(c,{size:0,timestamp:Date.now()})}b&=-641;d=Jb({e:d,path:Cb(d),K:b,seekable:j,position:0,k:d.k,sc:[],error:n},i,i);d.k.open&&d.k.open(d);r.logReadFiles&&!(b&1)&&(Tb||(Tb={}),a in Tb||(Tb[a]=1,r.printErr("read file: "+a)));return d}function Ub(a){try{a.k.close&&a.k.close(a)}catch(b){e(b)}finally{X[a.B]=m}}
function Vb(a,b,c,d,f,g){(0>d||0>f)&&e(new V(T.u));0===(a.K&2097155)&&e(new V(T.fa));16384===(a.e.mode&61440)&&e(new V(T.za));a.k.write||e(new V(T.u));var h=j;"undefined"===typeof f?(f=a.position,h=n):a.seekable||e(new V(T.Ca));a.K&1024&&((!a.seekable||!a.k.R)&&e(new V(T.Ca)),a.k.R(a,0,2));b=a.k.write(a,b,c,d,f,g);h||(a.position+=b);return b}
function Wb(){V||(V=function(a){this.jb=a;for(var b in T)if(T[b]===a){this.code=b;break}this.message=gb[a]},V.prototype=Error(),[T.ga].forEach(function(a){tb[a]=new V(a);tb[a].stack="<generic error, no stack>"}))}var Xb;function Yb(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Zb(a,b,c,d,f,g){a=b?U(("string"===typeof a?a:Cb(a))+"/"+b):a;d=Yb(d,f);f=Nb(a,d);if(c){if("string"===typeof c){for(var a=Array(c.length),b=0,h=c.length;b<h;++b)a[b]=c.charCodeAt(b);c=a}Rb(f,d|146);a=Sb(f,"w");Vb(a,c,0,c.length,0,g);Ub(a);Rb(f,d)}return f}
function $b(a,b,c,d){a=U(("string"===typeof a?a:Cb(a))+"/"+b);b=Yb(!!c,!!d);$b.sb||($b.sb=64);var f;f=$b.sb++<<8|0;ob[f]={k:{open:function(a){a.seekable=n},close:function(){d&&(d.buffer&&d.buffer.length)&&d(10)},N:function(a,b,d,f){for(var y=0,F=0;F<f;F++){var w;try{w=c()}catch(u){e(new V(T.O))}w===i&&0===y&&e(new V(T.Z));if(w===m||w===i)break;y++;b[d+F]=w}y&&(a.e.timestamp=Date.now());return y},write:function(a,b,c,f){for(var y=0;y<f;y++)try{d(b[c+y])}catch(F){e(new V(T.O))}f&&(a.e.timestamp=Date.now());
return y}}};return Pb(a,b,f)}function ac(a){if(a.dc||a.ec||a.link||a.o)return j;var b=j;"undefined"!==typeof XMLHttpRequest&&e(Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."));if(r.read)try{a.o=J(r.read(a.url),j)}catch(c){b=n}else e(Error("Cannot load without read() or XMLHttpRequest."));b||ib(T.O);return b}var Fb,Kb,Tb;function bc(){e("TODO")}
var Z={M:function(){return sb(m,"/",16895,0)},Xb:function(a,b,c){c&&A(1==b==(6==c));a={Zb:a,type:b,protocol:c,p:m,ca:{},Oa:[],V:[],X:Z.q};b=Z.sa();c=sb(Z.root,b,49152,0);c.W=a;b=Jb({path:b,e:c,K:Hb("r+"),seekable:n,k:Z.k});a.G=b;return a},ac:function(a){a=X[a];return!a||49152!==(a.e.mode&49152)?m:a.e.W},k:{wb:function(a){a=a.e.W;return a.X.wb(a)},rb:function(a,b,c){a=a.e.W;return a.X.rb(a,b,c)},N:function(a,b,c,d){a=a.e.W;d=a.X.oc(a,d);if(!d)return 0;b.set(d.buffer,c);return d.buffer.length},write:function(a,
b,c,d){a=a.e.W;return a.X.qc(a,b,c,d)},close:function(a){a=a.e.W;a.X.close(a)}},sa:function(){Z.sa.ib||(Z.sa.ib=0);return"socket["+Z.sa.ib++ +"]"},q:{ka:function(a,b,c){var d;"object"===typeof b&&(d=b,c=b=m);if(d)d._socket?(b=d._socket.remoteAddress,c=d._socket.remotePort):((c=/ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url))||e(Error("WebSocket URL must be in the format ws(s)://address:port")),b=c[1],c=parseInt(c[2],10));else try{var f=t?{headers:{"websocket-protocol":["binary"]}}:["binary"];d=new (t?require("ws"):
window.WebSocket)("ws://"+b+":"+c,f);d.binaryType="arraybuffer"}catch(g){e(new V(T.Hb))}b={H:b,port:c,g:d,la:[]};Z.q.cb(a,b);Z.q.cc(a,b);2===a.type&&"undefined"!==typeof a.Y&&b.la.push(new Uint8Array([255,255,255,255,112,111,114,116,(a.Y&65280)>>8,a.Y&255]));return b},pa:function(a,b,c){return a.ca[b+":"+c]},cb:function(a,b){a.ca[b.H+":"+b.port]=b},yb:function(a,b){delete a.ca[b.H+":"+b.port]},cc:function(a,b){function c(){try{for(var a=b.la.shift();a;)b.g.send(a),a=b.la.shift()}catch(c){b.g.close()}}
function d(c){A("string"!==typeof c&&c.byteLength!==i);var c=new Uint8Array(c),d=f;f=n;d&&10===c.length&&255===c[0]&&255===c[1]&&255===c[2]&&255===c[3]&&112===c[4]&&111===c[5]&&114===c[6]&&116===c[7]?(c=c[8]<<8|c[9],Z.q.yb(a,b),b.port=c,Z.q.cb(a,b)):a.V.push({H:b.H,port:b.port,data:c})}var f=j;t?(b.g.on("open",c),b.g.on("message",function(a,b){b.binary&&d((new Uint8Array(a)).buffer)}),b.g.on("error",p())):(b.g.onopen=c,b.g.onmessage=function(a){d(a.data)})},wb:function(a){if(1===a.type&&a.p)return a.Oa.length?
65:0;var b=0,c=1===a.type?Z.q.pa(a,a.I,a.J):m;if(a.V.length||!c||c&&c.g.readyState===c.g.ea||c&&c.g.readyState===c.g.CLOSED)b|=65;if(!c||c&&c.g.readyState===c.g.OPEN)b|=4;if(c&&c.g.readyState===c.g.ea||c&&c.g.readyState===c.g.CLOSED)b|=16;return b},rb:function(a,b,c){switch(b){case 21531:return b=0,a.V.length&&(b=a.V[0].data.length),L[c>>2]=b,0;default:return T.u}},close:function(a){if(a.p){try{a.p.close()}catch(b){}a.p=m}for(var c=Object.keys(a.ca),d=0;d<c.length;d++){var f=a.ca[c[d]];try{f.g.close()}catch(g){}Z.q.yb(a,
f)}return 0},bind:function(a,b,c){("undefined"!==typeof a.Sa||"undefined"!==typeof a.Y)&&e(new V(T.u));a.Sa=b;a.Y=c||bc();if(2===a.type){a.p&&(a.p.close(),a.p=m);try{a.X.ic(a,0)}catch(d){d instanceof V||e(d),d.jb!==T.Ba&&e(d)}}},Ae:function(a,b,c){a.p&&e(new V(ERRNO_CODS.Ba));if("undefined"!==typeof a.I&&"undefined"!==typeof a.J){var d=Z.q.pa(a,a.I,a.J);d&&(d.g.readyState===d.g.CONNECTING&&e(new V(T.Fb)),e(new V(T.Jb)))}b=Z.q.ka(a,b,c);a.I=b.H;a.J=b.port;e(new V(T.Ib))},ic:function(a){t||e(new V(T.Ba));
a.p&&e(new V(T.u));var b=require("ws").Server;a.p=new b({host:a.Sa,port:a.Y});a.p.on("connection",function(b){if(1===a.type){var d=Z.Xb(a.Zb,a.type,a.protocol),b=Z.q.ka(d,b);d.I=b.H;d.J=b.port;a.Oa.push(d)}else Z.q.ka(a,b)});a.p.on("closed",function(){a.p=m});a.p.on("error",p())},accept:function(a){a.p||e(new V(T.u));var b=a.Oa.shift();b.G.K=a.G.K;return b},Je:function(a,b){var c,d;b?((a.I===i||a.J===i)&&e(new V(T.ha)),c=a.I,d=a.J):(c=a.Sa||0,d=a.Y||0);return{H:c,port:d}},qc:function(a,b,c,d,f,g){if(2===
a.type){if(f===i||g===i)f=a.I,g=a.J;(f===i||g===i)&&e(new V(T.Gb))}else f=a.I,g=a.J;var h=Z.q.pa(a,f,g);1===a.type&&((!h||h.g.readyState===h.g.ea||h.g.readyState===h.g.CLOSED)&&e(new V(T.ha)),h.g.readyState===h.g.CONNECTING&&e(new V(T.Z)));b=b instanceof Array||b instanceof ArrayBuffer?b.slice(c,c+d):b.buffer.slice(b.byteOffset+c,b.byteOffset+c+d);if(2===a.type&&(!h||h.g.readyState!==h.g.OPEN)){if(!h||h.g.readyState===h.g.ea||h.g.readyState===h.g.CLOSED)h=Z.q.ka(a,f,g);h.la.push(b);return d}try{return h.g.send(b),
d}catch(k){e(new V(T.u))}},oc:function(a,b){1===a.type&&a.p&&e(new V(T.ha));var c=a.V.shift();if(!c){if(1===a.type){var d=Z.q.pa(a,a.I,a.J);if(d){if(d.g.readyState===d.g.ea||d.g.readyState===d.g.CLOSED)return m;e(new V(T.Z))}e(new V(T.ha))}e(new V(T.Z))}var d=c.data.byteLength||c.data.length,f=c.data.byteOffset||0,g=c.data.buffer||c.data,h=Math.min(b,d),k={buffer:new Uint8Array(g,f,h),H:c.H,port:c.port};1===a.type&&h<d&&(c.data=new Uint8Array(g,f+h,d-h),a.V.unshift(c));return k}}};
function cc(a,b,c){a=X[a];if(!a)return ib(T.fa),-1;try{return Vb(a,K,b,c)}catch(d){return Bb(d),-1}}function dc(a){return X[a-1].B}function ec(a,b,c,d){c*=b;if(0==c)return 0;a=cc(dc(d),a,c);if(-1==a){if(b=X[d-1])b.error=j;return 0}return Math.floor(a/b)}r._strlen=fc;function gc(a){return 0>a||0===a&&-Infinity===1/a}
function hc(a,b){function c(a){var c;"double"===a?c=xa[b+f>>3]:"i64"==a?(c=[L[b+f>>2],L[b+(f+8)>>2]],f+=8):(a="i32",c=L[b+f>>2]);f+=Math.max(x.ob(a),x.oa(a,m,j));return c}for(var d=a,f=0,g=[],h,k;;){var l=d;h=K[d];if(0===h)break;k=K[d+1|0];if(37==h){var y=n,F=n,w=n,u=n,C=n;a:for(;;){switch(k){case 43:y=j;break;case 45:F=j;break;case 35:w=j;break;case 48:if(u)break a;else{u=j;break}case 32:C=j;break;default:break a}d++;k=K[d+1|0]}var H=0;if(42==k)H=c("i32"),d++,k=K[d+1|0];else for(;48<=k&&57>=k;)H=
10*H+(k-48),d++,k=K[d+1|0];var I=n,B=-1;if(46==k){B=0;I=j;d++;k=K[d+1|0];if(42==k)B=c("i32"),d++;else for(;;){k=K[d+1|0];if(48>k||57<k)break;B=10*B+(k-48);d++}k=K[d+1|0]}0>B&&(B=6,I=n);var z;switch(String.fromCharCode(k)){case "h":k=K[d+2|0];104==k?(d++,z=1):z=2;break;case "l":k=K[d+2|0];108==k?(d++,z=8):z=4;break;case "L":case "q":case "j":z=8;break;case "z":case "t":case "I":z=4;break;default:z=m}z&&d++;k=K[d+1|0];switch(String.fromCharCode(k)){case "d":case "i":case "u":case "o":case "x":case "X":case "p":l=
100==k||105==k;z=z||4;var O=h=c("i"+8*z),q;8==z&&(h=x.jc(h[0],h[1],117==k));4>=z&&(h=(l?Ta:Sa)(h&Math.pow(256,z)-1,8*z));var qa=Math.abs(h),l="";if(100==k||105==k)q=8==z&&ic?ic.stringify(O[0],O[1],m):Ta(h,8*z).toString(10);else if(117==k)q=8==z&&ic?ic.stringify(O[0],O[1],j):Sa(h,8*z).toString(10),h=Math.abs(h);else if(111==k)q=(w?"0":"")+qa.toString(8);else if(120==k||88==k){l=w&&0!=h?"0x":"";if(8==z&&ic)if(O[1]){q=(O[1]>>>0).toString(16);for(w=(O[0]>>>0).toString(16);8>w.length;)w="0"+w;q+=w}else q=
(O[0]>>>0).toString(16);else if(0>h){h=-h;q=(qa-1).toString(16);O=[];for(w=0;w<q.length;w++)O.push((15-parseInt(q[w],16)).toString(16));for(q=O.join("");q.length<2*z;)q="f"+q}else q=qa.toString(16);88==k&&(l=l.toUpperCase(),q=q.toUpperCase())}else 112==k&&(0===qa?q="(nil)":(l="0x",q=qa.toString(16)));if(I)for(;q.length<B;)q="0"+q;0<=h&&(y?l="+"+l:C&&(l=" "+l));"-"==q.charAt(0)&&(l="-"+l,q=q.substr(1));for(;l.length+q.length<H;)F?q+=" ":u?q="0"+q:l=" "+l;q=l+q;q.split("").forEach(function(a){g.push(a.charCodeAt(0))});
break;case "f":case "F":case "e":case "E":case "g":case "G":h=c("double");if(isNaN(h))q="nan",u=n;else if(isFinite(h)){I=n;z=Math.min(B,20);if(103==k||71==k)I=j,B=B||1,z=parseInt(h.toExponential(z).split("e")[1],10),B>z&&-4<=z?(k=(103==k?"f":"F").charCodeAt(0),B-=z+1):(k=(103==k?"e":"E").charCodeAt(0),B--),z=Math.min(B,20);if(101==k||69==k)q=h.toExponential(z),/[eE][-+]\d$/.test(q)&&(q=q.slice(0,-1)+"0"+q.slice(-1));else if(102==k||70==k)q=h.toFixed(z),0===h&&gc(h)&&(q="-"+q);l=q.split("e");if(I&&
!w)for(;1<l[0].length&&-1!=l[0].indexOf(".")&&("0"==l[0].slice(-1)||"."==l[0].slice(-1));)l[0]=l[0].slice(0,-1);else for(w&&-1==q.indexOf(".")&&(l[0]+=".");B>z++;)l[0]+="0";q=l[0]+(1<l.length?"e"+l[1]:"");69==k&&(q=q.toUpperCase());0<=h&&(y?q="+"+q:C&&(q=" "+q))}else q=(0>h?"-":"")+"inf",u=n;for(;q.length<H;)q=F?q+" ":u&&("-"==q[0]||"+"==q[0])?q[0]+"0"+q.slice(1):(u?"0":" ")+q;97>k&&(q=q.toUpperCase());q.split("").forEach(function(a){g.push(a.charCodeAt(0))});break;case "s":u=(y=c("i8*"))?fc(y):6;
I&&(u=Math.min(u,B));if(!F)for(;u<H--;)g.push(32);if(y)for(w=0;w<u;w++)g.push(P[y++|0]);else g=g.concat(J("(null)".substr(0,u),j));if(F)for(;u<H--;)g.push(32);break;case "c":for(F&&g.push(c("i8"));0<--H;)g.push(32);F||g.push(c("i8"));break;case "n":F=c("i32*");L[F>>2]=g.length;break;case "%":g.push(h);break;default:for(w=l;w<d+2;w++)g.push(K[w])}d+=2}else g.push(h),d+=1}return g}function jc(a,b){var c=Sa(a&255);K[jc.zb|0]=c;if(-1==cc(dc(b),jc.zb,1)){if(c=X[b-1])c.error=j;return-1}return c}
var kc=sa;function lc(a){r.exit(a)}function mc(a){mc.Vb||(G=G+4095&-4096,mc.Vb=j,A(x.ma),mc.Sb=x.ma,x.ma=function(){D("cannot dynamically allocate, sbrk now has control")});var b=G;0!=a&&mc.Sb(a);return b}var nc=n,oc=n,pc=n,qc=n,rc=i,sc=i;function tc(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var uc=[];function vc(){var a=r.canvas;uc.forEach(function(b){b(a.width,a.height)})}
function wc(){var a=r.canvas;this.uc=a.width;this.tc=a.height;a.width=screen.width;a.height=screen.height;"undefined"!=typeof SDL&&(a=Da[SDL.screen+0*x.P>>2],L[SDL.screen+0*x.P>>2]=a|8388608);vc()}function xc(){var a=r.canvas;a.width=this.uc;a.height=this.tc;"undefined"!=typeof SDL&&(a=Da[SDL.screen+0*x.P>>2],L[SDL.screen+0*x.P>>2]=a&-8388609);vc()}var yc,zc,Ac,Bc;Wb();zb=Array(4096);Lb(W,"/");Ob("/tmp");Ob("/dev");ob[259]={k:{N:function(){return 0},write:function(){return 0}}};Pb("/dev/null",259);
nb(1280,{qb:function(a){if(!a.input.length){var b=m;if(t){if(b=process.stdin.read(),!b){if(process.stdin._readableState&&process.stdin._readableState.ended)return m;return}}else"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),b!==m&&(b+="\n")):"function"==typeof readline&&(b=readline(),b!==m&&(b+="\n"));if(!b)return m;a.input=J(b,j)}return a.input.shift()},ta:function(a,b){b===m||10===b?(r.print(a.S.join("")),a.S=[]):a.S.push(Cc.Pa(b))}});
nb(1536,{ta:function(a,b){b===m||10===b?(r.printErr(a.S.join("")),a.S=[]):a.S.push(Cc.Pa(b))}});Pb("/dev/tty",1280);Pb("/dev/tty1",1536);Ob("/dev/shm");Ob("/dev/shm/tmp");
La.unshift({Q:function(){if(!r.noFSInit&&!Xb){A(!Xb,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");Xb=j;Wb();r.stdin=r.stdin;r.stdout=r.stdout;r.stderr=r.stderr;r.stdin?$b("/dev","stdin",r.stdin):Qb("/dev/tty","/dev/stdin");r.stdout?$b("/dev","stdout",m,r.stdout):Qb("/dev/tty","/dev/stdout");r.stderr?$b("/dev","stderr",m,r.stderr):Qb("/dev/tty1","/dev/stderr");var a=Sb("/dev/stdin",
"r");L[vb>>2]=a?a.B+1:0;A(0===a.B,"invalid handle for stdin ("+a.B+")");a=Sb("/dev/stdout","w");L[wb>>2]=a?a.B+1:0;A(1===a.B,"invalid handle for stdout ("+a.B+")");a=Sb("/dev/stderr","w");L[cb>>2]=a?a.B+1:0;A(2===a.B,"invalid handle for stderr ("+a.B+")")}}});Ma.push({Q:function(){Ab=n}});Na.push({Q:function(){Xb=n;for(var a=0;a<X.length;a++){var b=X[a];b&&Ub(b)}}});r.FS_createFolder=function(a,b,c,d){a=U(("string"===typeof a?a:Cb(a))+"/"+b);return Ob(a,Yb(c,d))};
r.FS_createPath=function(a,b){for(var a="string"===typeof a?a:Cb(a),c=b.split("/").reverse();c.length;){var d=c.pop();if(d){var f=U(a+"/"+d);try{Ob(f)}catch(g){}a=f}}return f};r.FS_createDataFile=Zb;
r.FS_createPreloadedFile=function(a,b,c,d,f,g,h,k,l){function y(){pc=document.pointerLockElement===u||document.mozPointerLockElement===u||document.webkitPointerLockElement===u}function F(c){function u(c){k||Zb(a,b,c,d,f,l);g&&g();ab()}var q=n;r.preloadPlugins.forEach(function(a){!q&&a.canHandle(C)&&(a.handle(c,C,u,function(){h&&h();ab()}),q=j)});q||u(c)}r.preloadPlugins||(r.preloadPlugins=[]);if(!yc&&!ca){yc=j;try{new Blob,zc=j}catch(w){zc=n,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Ac=
"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:!zc?console.log("warning: no BlobBuilder"):m;Bc="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:i;!r.vb&&"undefined"===typeof Bc&&(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),r.vb=j);r.preloadPlugins.push({canHandle:function(a){return!r.vb&&/\.(jpg|jpeg|png|bmp)$/i.test(a)},handle:function(a,b,
c,d){var f=m;if(zc)try{f=new Blob([a],{type:tc(b)}),f.size!==a.length&&(f=new Blob([(new Uint8Array(a)).buffer],{type:tc(b)}))}catch(g){x.da("Blob constructor present but fails: "+g+"; falling back to blob builder")}f||(f=new Ac,f.append((new Uint8Array(a)).buffer),f=f.getBlob());var h=Bc.createObjectURL(f),k=new Image;k.onload=function(){A(k.complete,"Image "+b+" could not be decoded");var d=document.createElement("canvas");d.width=k.width;d.height=k.height;d.getContext("2d").drawImage(k,0,0);r.preloadedImages[b]=
d;Bc.revokeObjectURL(h);c&&c(a)};k.onerror=function(){console.log("Image "+h+" could not be decoded");d&&d()};k.src=h}});r.preloadPlugins.push({canHandle:function(a){return!r.Te&&a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,c,d){function f(d){h||(h=j,r.preloadedAudios[b]=d,c&&c(a))}function g(){h||(h=j,r.preloadedAudios[b]=new Audio,d&&d())}var h=n;if(zc){try{var k=new Blob([a],{type:tc(b)})}catch(u){return g()}var k=Bc.createObjectURL(k),l=new Audio;l.addEventListener("canplaythrough",
function(){f(l)},n);l.onerror=function(){if(!h){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var c="",d=0,g=0,k=0;k<a.length;k++){d=d<<8|a[k];for(g+=8;6<=g;)var q=d>>g-6&63,g=g-6,c=c+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[q]}2==g?(c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d&3)<<4],c+="=="):4==g&&(c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d&15)<<2],c+="=");
l.src="data:audio/x-"+b.substr(-3)+";base64,"+c;f(l)}};l.src=k;setTimeout(function(){ja||f(l)},1E4)}else return g()}});var u=r.canvas;u.Ra=u.requestPointerLock||u.mozRequestPointerLock||u.webkitRequestPointerLock;u.kb=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||p();u.kb=u.kb.bind(document);document.addEventListener("pointerlockchange",y,n);document.addEventListener("mozpointerlockchange",y,n);document.addEventListener("webkitpointerlockchange",y,n);r.elementPointerLock&&
u.addEventListener("click",function(a){!pc&&u.Ra&&(u.Ra(),a.preventDefault())},n)}var C=b?lb(U(a+"/"+b)):a;$a();if("string"==typeof c){var H=h,I=function(){H?H():e('Loading data file "'+c+'" failed.')},B=new XMLHttpRequest;B.open("GET",c,j);B.responseType="arraybuffer";B.onload=function(){if(200==B.status||0==B.status&&B.response){var a=B.response;A(a,'Loading data file "'+c+'" failed (no arrayBuffer).');a=new Uint8Array(a);F(a);ab()}else I()};B.onerror=I;B.send(m);$a()}else F(c)};
r.FS_createLazyFile=function(a,b,c,d,f){var g,h;"undefined"!==typeof XMLHttpRequest?(ca||e("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"),g=function(){this.Ma=n;this.ia=[]},g.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.Wb;return this.bc(Math.floor(a/this.Wb))[b]}},g.prototype.rc=function(a){this.bc=a},g.prototype.fb=function(){var a=new XMLHttpRequest;a.open("HEAD",c,n);a.send(m);200<=a.status&&300>a.status||
304===a.status||e(Error("Couldn't load "+c+". Status: "+a.status));var b=Number(a.getResponseHeader("Content-length")),d,f=1048576;if(!((d=a.getResponseHeader("Accept-Ranges"))&&"bytes"===d))f=b;var g=this;g.rc(function(a){var d=a*f,h=(a+1)*f-1,h=Math.min(h,b-1);if("undefined"===typeof g.ia[a]){var k=g.ia;d>h&&e(Error("invalid range ("+d+", "+h+") or no bytes requested!"));h>b-1&&e(Error("only "+b+" bytes available! programmer error!"));var l=new XMLHttpRequest;l.open("GET",c,n);b!==f&&l.setRequestHeader("Range",
"bytes="+d+"-"+h);"undefined"!=typeof Uint8Array&&(l.responseType="arraybuffer");l.overrideMimeType&&l.overrideMimeType("text/plain; charset=x-user-defined");l.send(m);200<=l.status&&300>l.status||304===l.status||e(Error("Couldn't load "+c+". Status: "+l.status));d=l.response!==i?new Uint8Array(l.response||[]):J(l.responseText||"",j);k[a]=d}"undefined"===typeof g.ia[a]&&e(Error("doXHR failed!"));return g.ia[a]});this.Rb=b;this.Qb=f;this.Ma=j},g=new g,Object.defineProperty(g,"length",{get:function(){this.Ma||
this.fb();return this.Rb}}),Object.defineProperty(g,"chunkSize",{get:function(){this.Ma||this.fb();return this.Qb}}),h=i):(h=c,g=i);var k,a=U(("string"===typeof a?a:Cb(a))+"/"+b);k=Nb(a,Yb(d,f));g?k.o=g:h&&(k.o=m,k.url=h);var l={};Object.keys(k.k).forEach(function(a){var b=k.k[a];l[a]=function(){ac(k)||e(new V(T.O));return b.apply(m,arguments)}});l.N=function(a,b,c,d,f){ac(k)||e(new V(T.O));a=a.e.o;if(f>=a.length)return 0;d=Math.min(a.length-f,d);A(0<=d);if(a.slice)for(var g=0;g<d;g++)b[c+g]=a[f+
g];else for(g=0;g<d;g++)b[c+g]=a.get(f+g);return d};k.k=l;return k};r.FS_createLink=function(a,b,c){a=U(("string"===typeof a?a:Cb(a))+"/"+b);return Qb(c,a)};r.FS_createDevice=$b;hb=x.Bb(4);L[hb>>2]=0;La.unshift({Q:p()});Na.push({Q:p()});var Cc=new x.Da;t&&(require("fs"),process.platform.match(/^win/));La.push({Q:function(){Z.root=Lb(Z,m)}});jc.zb=N([0],"i8",M);
r.requestFullScreen=function(a,b){function c(){oc=n;(document.webkitFullScreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.mozFullscreenElement||document.fullScreenElement||document.fullscreenElement)===d?(d.gb=document.cancelFullScreen||document.mozCancelFullScreen||document.webkitCancelFullScreen,d.gb=d.gb.bind(document),rc&&d.Ra(),oc=j,sc&&wc()):sc&&xc();if(r.onFullScreen)r.onFullScreen(oc)}rc=a;sc=b;"undefined"===typeof rc&&(rc=j);"undefined"===typeof sc&&
(sc=n);var d=r.canvas;qc||(qc=j,document.addEventListener("fullscreenchange",c,n),document.addEventListener("mozfullscreenchange",c,n),document.addEventListener("webkitfullscreenchange",c,n));d.pc=d.requestFullScreen||d.mozRequestFullScreen||(d.webkitRequestFullScreen?function(){d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:m);d.pc()};
r.requestAnimationFrame=function(a){"undefined"===typeof window?setTimeout(a,1E3/60):(window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.setTimeout),window.requestAnimationFrame(a))};r.setCanvasSize=function(a,b,c){var d=r.canvas;d.width=a;d.height=b;c||vc()};r.pauseMainLoop=p();r.resumeMainLoop=function(){nc&&(nc=n,m())};
r.getUserMedia=function(){window.pb||(window.pb=navigator.getUserMedia||navigator.mozGetUserMedia);window.pb(i)};Fa=v=x.aa(E);Ga=Fa+5242880;Ha=G=x.aa(Ga);A(Ha<ia,"TOTAL_MEMORY not big enough for stack");ta=Math.min;
var $=(function(global,env,buffer) {
// EMSCRIPTEN_START_ASM
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env._stderr|0;var n=+env.NaN;var o=+env.Infinity;var p=0;var q=0;var r=0;var s=0;var t=0,u=0,v=0,w=0,x=0.0,y=0,z=0,A=0,B=0.0;var C=0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=global.Math.floor;var N=global.Math.abs;var O=global.Math.sqrt;var P=global.Math.pow;var Q=global.Math.cos;var R=global.Math.sin;var S=global.Math.tan;var T=global.Math.acos;var U=global.Math.asin;var V=global.Math.atan;var W=global.Math.atan2;var X=global.Math.exp;var Y=global.Math.log;var Z=global.Math.ceil;var _=global.Math.imul;var $=env.abort;var aa=env.assert;var ba=env.asmPrintInt;var ca=env.asmPrintFloat;var da=env.min;var ea=env.invoke_ii;var fa=env.invoke_fiii;var ga=env.invoke_vi;var ha=env.invoke_vii;var ia=env.invoke_iiii;var ja=env.invoke_v;var ka=env.invoke_iii;var la=env.invoke_viiii;var ma=env._llvm_lifetime_end;var na=env._fabsf;var oa=env._sysconf;var pa=env._abort;var qa=env._fprintf;var ra=env._sqrt;var sa=env._fflush;var ta=env.__reallyNegative;var ua=env._sqrtf;var va=env._fputc;var wa=env.___setErrNo;var xa=env._fwrite;var ya=env._send;var za=env._write;var Aa=env._exit;var Ba=env._sin;var Ca=env.__formatString;var Da=env._emscripten_memcpy_big;var Ea=env._fileno;var Fa=env._cos;var Ga=env._pwrite;var Ha=env._llvm_pow_f64;var Ia=env._sbrk;var Ja=env.___errno_location;var Ka=env._llvm_lifetime_start;var La=env._mkport;var Ma=env._time;var Na=env.__exit;var Oa=0.0;
// EMSCRIPTEN_START_FUNCS
function Xa(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+7&-8;return b|0}function Ya(){return i|0}function Za(a){a=a|0;i=a}function _a(a,b){a=a|0;b=b|0;if((p|0)==0){p=a;q=b}}function $a(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0]}function ab(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0];a[k+4|0]=a[b+4|0];a[k+5|0]=a[b+5|0];a[k+6|0]=a[b+6|0];a[k+7|0]=a[b+7|0]}function bb(a){a=a|0;C=a}function cb(a){a=a|0;D=a}function db(a){a=a|0;E=a}function eb(a){a=a|0;F=a}function fb(a){a=a|0;G=a}function gb(a){a=a|0;H=a}function hb(a){a=a|0;I=a}function ib(a){a=a|0;J=a}function jb(a){a=a|0;K=a}function kb(a){a=a|0;L=a}function lb(){}function mb(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+24|0;h=f|0;c[h>>2]=5;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;qc(h|0);i=f;return}function nb(a,b){a=+a;b=+b;var d=0,e=0;d=i;i=i+24|0;e=d|0;c[e>>2]=5;g[e+4>>2]=a;g[e+8>>2]=b;g[e+12>>2]=0.0;g[e+16>>2]=1.0;qc(e|0);i=d;return}function ob(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+24|0;f=e|0;c[f>>2]=5;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;g[f+16>>2]=1.0;qc(f|0);i=e;return}function pb(a){a=a|0;var b=0,d=0,e=0.0,f=0.0,h=0.0;b=i;i=i+24|0;d=b|0;e=+g[a>>2];f=+g[a+4>>2];h=+g[a+8>>2];c[d>>2]=5;g[d+4>>2]=e;g[d+8>>2]=f;g[d+12>>2]=h;g[d+16>>2]=1.0;qc(d|0);i=b;return}function qb(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+16|0;f=e|0;c[f>>2]=3;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;qc(f|0);i=e;return}function rb(a){a=a|0;var b=0,d=0,e=0.0,f=0.0,h=0.0;b=i;i=i+16|0;d=b|0;e=+g[a>>2];f=+g[a+4>>2];h=+g[a+8>>2];c[d>>2]=3;g[d+4>>2]=e;g[d+8>>2]=f;g[d+12>>2]=h;qc(d|0);i=b;return}function sb(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+32|0;h=f|0;c[h>>2]=0;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;c[h+20>>2]=~~(a*63488.0+1024.0);c[h+24>>2]=~~(b*64512.0+512.0);c[h+28>>2]=~~(d*63488.0+1024.0);qc(h|0);i=f;return}function tb(a){a=a|0;var b=0,d=0,e=0.0,f=0.0,h=0.0;b=i;i=i+32|0;d=b|0;c[d>>2]=0;e=+g[a>>2];g[d+4>>2]=e;f=+g[a+4>>2];g[d+8>>2]=f;h=+g[a+8>>2];g[d+12>>2]=h;g[d+16>>2]=+g[a+12>>2];c[d+20>>2]=~~(e*63488.0+1024.0);c[d+24>>2]=~~(f*64512.0+512.0);c[d+28>>2]=~~(h*63488.0+1024.0);qc(d|0);i=b;return}function ub(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=0;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;g[f+16>>2]=1.0;c[f+20>>2]=~~(a*63488.0+1024.0);c[f+24>>2]=~~(b*64512.0+512.0);c[f+28>>2]=~~(d*63488.0+1024.0);qc(f|0);i=e;return}function vb(a){a=a|0;var b=0,d=0,e=0.0,f=0.0,h=0.0;b=i;i=i+32|0;d=b|0;e=+g[a>>2];f=+g[a+4>>2];h=+g[a+8>>2];c[d>>2]=0;g[d+4>>2]=e;g[d+8>>2]=f;g[d+12>>2]=h;g[d+16>>2]=1.0;c[d+20>>2]=~~(e*63488.0+1024.0);c[d+24>>2]=~~(f*64512.0+512.0);c[d+28>>2]=~~(h*63488.0+1024.0);qc(d|0);i=b;return}function wb(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+24|0;h=f|0;c[h>>2]=1;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;qc(h|0);i=f;return}function xb(a,b){a=+a;b=+b;var d=0,e=0;d=i;i=i+24|0;e=d|0;c[e>>2]=1;g[e+4>>2]=a;g[e+8>>2]=b;g[e+12>>2]=0.0;g[e+16>>2]=1.0;qc(e|0);i=d;return}function yb(a){a=a|0;var b=0,d=0,e=0.0,f=0.0;b=i;i=i+24|0;d=b|0;e=+g[a>>2];f=+g[a+4>>2];c[d>>2]=1;g[d+4>>2]=e;g[d+8>>2]=f;g[d+12>>2]=0.0;g[d+16>>2]=1.0;qc(d|0);i=b;return}function zb(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=2;c[d+4>>2]=a;qc(d|0);i=b;return}function Ab(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=35;c[d+4>>2]=a;qc(d|0);i=b;return}function Bb(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=36;c[d+4>>2]=a;qc(d|0);i=b;return}function Cb(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=37;c[d+4>>2]=(a|0)!=2305;qc(d|0);i=b;return}function Db(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=38;c[e+4>>2]=a;c[e+8>>2]=b;qc(e|0);i=d;return}function Eb(a){a=a|0;var b=0,d=0;b=i;i=i+16|0;d=b|0;c[d>>2]=7;c[d+4>>2]=a;c[d+8>>2]=1;qc(d|0);i=b;return}function Fb(a){a=a|0;var b=0,d=0;b=i;i=i+16|0;d=b|0;c[d>>2]=7;c[d+4>>2]=a;c[d+8>>2]=0;qc(d|0);i=b;return}function Gb(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=4;c[d+4>>2]=a;qc(d|0);i=b;return}function Hb(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=6;qc(b|0);i=a;return}function Ib(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=8;c[d+4>>2]=a;qc(d|0);i=b;return}function Jb(a){a=a|0;var b=0,d=0;b=i;d=i;i=i+68|0;i=i+7&-8;c[d>>2]=9;Qe(d+4|0,a|0,64)|0;qc(d|0);i=b;return}function Kb(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=10;qc(b|0);i=a;return}function Lb(a){a=a|0;var b=0,d=0;b=i;d=i;i=i+68|0;i=i+7&-8;c[d>>2]=11;Qe(d+4|0,a|0,64)|0;qc(d|0);i=b;return}function Mb(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=12;qc(b|0);i=a;return}function Nb(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=13;qc(b|0);i=a;return}function Ob(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+24|0;h=f|0;c[h>>2]=14;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;qc(h|0);i=f;return}function Pb(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+16|0;f=e|0;c[f>>2]=15;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;qc(f|0);i=e;return}function Qb(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+16|0;f=e|0;c[f>>2]=16;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;qc(f|0);i=e;return}function Rb(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;i=i+24|0;g=f|0;c[g>>2]=17;c[g+4>>2]=a;c[g+8>>2]=b;c[g+12>>2]=d;c[g+16>>2]=e;qc(g|0);i=f;return}function Sb(a,b,d,e,f,h){a=+a;b=+b;d=+d;e=+e;f=+f;h=+h;var j=0,k=0;j=i;i=i+32|0;k=j|0;c[k>>2]=18;g[k+4>>2]=a;g[k+8>>2]=b;g[k+12>>2]=d;g[k+16>>2]=e;g[k+20>>2]=f;g[k+24>>2]=h;qc(k|0);i=j;return}function Tb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;f=d;d=i;i=i+28|0;i=i+7&-8;c[d>>2]=19;c[d+4>>2]=a;c[d+8>>2]=b;a=(b|0)==5633;b=d+12|0;c[b>>2]=c[f>>2];c[b+4>>2]=c[f+4>>2];c[b+8>>2]=c[f+8>>2];c[b+12>>2]=c[f+12>>2];f=d|0;b=a?1:4;if(!a){qc(f);i=e;return}a=b+1|0;Re(d+(b+3<<2)|0,0,(a>>>0>4>>>0?a:4)-b<<2|0)|0;qc(f);i=e;return}function Ub(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=19;c[f+4>>2]=a;c[f+8>>2]=b;g[f+12>>2]=d;Re(f+16|0,0,12)|0;qc(f|0);i=e;return}function Vb(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=20;c[e+4>>2]=a;c[e+8>>2]=b;qc(e|0);i=d;return}function Wb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;f=d;d=i;i=i+28|0;i=i+7&-8;c[d>>2]=21;c[d+4>>2]=a;c[d+8>>2]=b;b=d+12|0;c[b>>2]=c[f>>2];c[b+4>>2]=c[f+4>>2];c[b+8>>2]=c[f+8>>2];c[b+12>>2]=c[f+12>>2];qc(d|0);i=e;return}function Xb(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=21;c[f+4>>2]=a;c[f+8>>2]=b;g[f+12>>2]=d;Re(f+16|0,0,12)|0;qc(f|0);i=e;return}function Yb(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+24|0;e=d|0;c[e>>2]=22;c[e+4>>2]=a;g[e+8>>2]=+(b|0);Re(e+12|0,0,16)|0;qc(e|0);i=d;return}function Zb(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=b;b=i;i=i+24|0;c[b>>2]=22;c[b+4>>2]=a;a=b+8|0;c[a>>2]=c[e>>2];c[a+4>>2]=c[e+4>>2];c[a+8>>2]=c[e+8>>2];c[a+12>>2]=c[e+12>>2];qc(b|0);i=d;return}function _b(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=23;c[d+4>>2]=a;qc(d|0);i=b;return}function $b(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+24|0;h=f|0;c[h>>2]=24;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;qc(h|0);i=f;return}function ac(a){a=+a;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=25;g[d+4>>2]=a;qc(d|0);i=b;return}function bc(a,b,d,e,f,g,h,j,k){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;k=k|0;var l=0,m=0;l=i;i=i+40|0;m=l|0;c[m>>2]=30;c[m+4>>2]=a;c[m+8>>2]=b;c[m+12>>2]=d;c[m+16>>2]=e;c[m+20>>2]=f;c[m+24>>2]=g;c[m+28>>2]=h;c[m+32>>2]=j;c[m+36>>2]=k;qc(m|0);i=l;return}function cc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=31;c[e+4>>2]=a;c[e+8>>2]=b;qc(e|0);i=d;return}function dc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=32;c[f+4>>2]=a;c[f+8>>2]=b;c[f+12>>2]=d;Re(f+16|0,0,16)|0;qc(f|0);i=e;return}function ec(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=33;c[f+4>>2]=a;c[f+8>>2]=b;c[f+12>>2]=d;Re(f+16|0,0,16)|0;qc(f|0);i=e;return}function fc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=34;c[e+4>>2]=a;c[e+8>>2]=b;qc(e|0);i=d;return}function gc(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=26;qc(b|0);i=a;return}function hc(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=27;c[d+4>>2]=a;qc(d|0);i=b;return}function ic(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=28;qc(b|0);i=a;return}function jc(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=29;c[d+4>>2]=a;qc(d|0);i=b;return}function kc(a,b){a=+a;b=+b;return}function lc(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=39;c[d+4>>2]=a;qc(d|0);i=b;return}function mc(){return}function nc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=40;c[e+4>>2]=a;c[e+8>>2]=b;qc(e|0);i=d;return}function oc(a){a=a|0;c[(pc()|0)+2408>>2]=a;return}function pc(){return c[624]|0}function qc(b){b=b|0;var d=0,e=0,f=0,j=0,k=0,l=0,n=0,o=0,p=0,q=0,r=0,s=0;d=i;e=c[624]|0;if((c[e+2400>>2]|0)!=0){Sa[c[424+(c[b>>2]<<2)>>2]&127](e,b)}if((c[e+2404>>2]|0)!=0){f=c[216+(c[b>>2]<<2)>>2]|0;j=e+2396|0;k=c[j>>2]|0;l=e+2392|0;n=c[l>>2]|0;if((k+f|0)>510){o=Me(2052)|0;p=o;c[o+2048>>2]=0;c[n+2048>>2]=p;c[n+(k<<2)>>2]=42;c[n+(k+1<<2)>>2]=o;c[l>>2]=p;q=0;r=p}else{q=k;r=n}n=(f|0)>1;k=q;p=0;while(1){c[r+(k<<2)>>2]=c[b+(p<<2)>>2];l=p+1|0;if((l|0)>=(f|0)){break}k=k+1|0;p=l}c[j>>2]=q+(n?f:1)}if((c[e+2408>>2]|0)==0){i=d;return}e=c[m>>2]|0;f=c[8+(c[b>>2]<<2)>>2]|0;n=b;a:while(1){b=n+4|0;q=f;while(1){j=a[q]|0;if((j<<24>>24|0)==37){break}else if((j<<24>>24|0)==0){break a}va(j<<24>>24|0,e|0)|0;q=q+1|0}j=q+2|0;if((a[q+1|0]|0)==102){qa(e|0,2464,(s=i,i=i+8|0,h[s>>3]=+g[b>>2],s)|0)|0;i=s;f=j;n=b;continue}else{qa(e|0,2456,(s=i,i=i+8|0,c[s>>2]=c[b>>2],s)|0)|0;i=s;f=j;n=b;continue}}va(10,e|0)|0;i=d;return}function rc(a,b){a=a|0;b=b|0;return}function sc(a,b){a=a|0;b=b|0;return}function tc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=c[b+4>>2]|0;b=c[(c[a+2384>>2]|0)+(e<<2)>>2]|0;if((b|0)==0){Od(1528,(f=i,i=i+8|0,c[f>>2]=e,f)|0);i=f}f=c[b>>2]|0;while(1){b=c[f>>2]|0;if((b|0)==42){f=c[f+4>>2]|0;continue}else if((b|0)==41){break}else{Sa[c[424+(b<<2)>>2]&127](a,f);f=f+(c[216+(b<<2)>>2]<<2)|0;continue}}i=d;return}function uc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=c[624]|0;e=d+2384|0;f=c[(c[e>>2]|0)+(a<<2)>>2]|0;if((f|0)!=0){g=c[f>>2]|0;if((g|0)!=0){h=g;while(1){g=c[h+2048>>2]|0;Ke(h);if((g|0)==0){break}else{h=g}}}Ke(f);c[(c[e>>2]|0)+(a<<2)>>2]=0}f=Me(4)|0;h=Me(2052)|0;c[h+2048>>2]=0;g=f;c[g>>2]=h;c[h>>2]=41;c[(c[e>>2]|0)+(a<<2)>>2]=f;c[d+2392>>2]=c[g>>2];c[d+2396>>2]=0;c[d+2404>>2]=1;c[d+2400>>2]=(b|0)==4865;return}function vc(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;a=c[624]|0;b=a+2396|0;d=c[b>>2]|0;e=a+2392|0;f=c[e>>2]|0;g=d+1|0;if((g|0)>510){h=Me(2052)|0;i=h;c[h+2048>>2]=0;c[f+2048>>2]=i;c[f+(d<<2)>>2]=42;c[f+(g<<2)>>2]=h;c[e>>2]=i;j=0;k=i}else{j=d;k=f}c[k+(j<<2)>>2]=41;c[b>>2]=j+1;c[a+2404>>2]=0;c[a+2400>>2]=1;return}function wc(a){a=a|0;return(c[(c[(c[624]|0)+2384>>2]|0)+(a<<2)>>2]|0)!=0|0}function xc(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=(c[624]|0)+2384|0;d=c[b>>2]|0;e=0;f=0;while(1){if((c[d+(e<<2)>>2]|0)==0){g=f+1|0;if((g|0)==(a|0)){break}else{h=g}}else{h=0}g=e+1|0;if((g|0)<1024){e=g;f=h}else{i=0;j=7;break}}if((j|0)==7){return i|0}j=e-a+1|0;if((a|0)>0){k=0}else{i=j;return i|0}while(1){e=Me(4)|0;h=Me(2052)|0;c[h+2048>>2]=0;c[e>>2]=h;c[h>>2]=41;c[(c[b>>2]|0)+(k+j<<2)>>2]=e;e=k+1|0;if((e|0)<(a|0)){k=e}else{i=j;break}}return i|0}function yc(a,b){a=a|0;b=b|0;var c=0.0,d=0.0;c=+g[b+8>>2];d=+g[b+12>>2];g[a+3008>>2]=+g[b+4>>2];g[a+3012>>2]=c;g[a+3016>>2]=d;g[a+3020>>2]=0.0;return}function zc(a,b){a=a|0;b=b|0;g[a+3024>>2]=+g[b+4>>2];g[a+3028>>2]=+g[b+8>>2];g[a+3032>>2]=+g[b+12>>2];g[a+3036>>2]=+g[b+16>>2];return}function Ac(a,b){a=a|0;b=b|0;c[a+3040>>2]=c[b+4>>2];return}function Bc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0,k=0;d=i;i=i+32|0;e=d|0;f=b+4|0;g[a+2980>>2]=+g[f>>2];h=b+8|0;g[a+2984>>2]=+g[h>>2];j=b+12|0;g[a+2988>>2]=+g[j>>2];k=b+16|0;g[a+2992>>2]=+g[k>>2];c[a+2996>>2]=c[b+20>>2];c[a+3e3>>2]=c[b+24>>2];c[a+3004>>2]=c[b+28>>2];if((c[a+2364>>2]|0)==0){i=d;return}c[e>>2]=19;c[e+4>>2]=c[a+2368>>2];c[e+8>>2]=c[a+2372>>2];g[e+12>>2]=+g[f>>2];g[e+16>>2]=+g[h>>2];g[e+20>>2]=+g[j>>2];g[e+24>>2]=+g[k>>2];jd(a,e|0);i=d;return}function Cc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0.0,j=0.0;d=i;i=i+64|0;e=d|0;c[a+3048>>2]=c[b+4>>2];c[a+3044>>2]=1;c[a+3052>>2]=0;c[a+3056>>2]=0;b=a+2580|0;if((c[b>>2]|0)!=0){do{if((c[a+2204>>2]|0)==0){be(a+2516|0,c[a+2432>>2]|0,c[a+2428>>2]|0);f=a+2584|0;c[f>>2]=0;if(!(+g[a+2564>>2]==0.0)){break}if(!(+g[a+2568>>2]==0.0)){break}if(!(+g[a+2572>>2]==0.0)){break}c[f>>2]=1}else{he(e,c[a+2428>>2]|0);fe(a+2452|0,e)}}while(0);c[a+2588>>2]=(ae(c[a+2436>>2]|0)|0)==0;c[b>>2]=0}b=a+2632|0;if((c[b>>2]|0)!=0){h=(+(c[a+2600>>2]|0)+-.5)*.5;g[a+2620>>2]=+(c[a+2592>>2]|0)+h;j=+(c[a+2604>>2]|0)+-.5;g[a+2624>>2]=+(c[a+2596>>2]|0)+j*.5;g[a+2628>>2]=536879104.0;g[a+2608>>2]=h;g[a+2612>>2]=j*-.5;g[a+2616>>2]=-536870912.0;c[b>>2]=0}if((c[a+2672>>2]|0)==7170){c[a+2664>>2]=6;c[a+2668>>2]=6;i=d;return}b=c[a+2640>>2]|0;if((b|0)==6913){c[a+2664>>2]=8}else if((b|0)==6912){c[a+2664>>2]=4}else{c[a+2664>>2]=2}b=c[a+2636>>2]|0;if((b|0)==6912){c[a+2668>>2]=4;i=d;return}else if((b|0)==6913){c[a+2668>>2]=8;i=d;return}else{c[a+2668>>2]=2;i=d;return}}function Dc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0.0,p=0.0,q=0.0,r=0.0,s=0.0,t=0.0,u=0.0,v=0.0,w=0.0,x=0.0,y=0.0,z=0,A=0.0,B=0,C=0.0,D=0,E=0.0,F=0,G=0.0,H=0,I=0,J=0,K=0,L=0;d=i;e=a+3052|0;f=c[e>>2]|0;h=a+3056|0;j=(c[h>>2]|0)+1|0;c[h>>2]=j;h=a+3060|0;k=c[h>>2]|0;if((f|0)<(k|0)){l=c[a+3064>>2]|0}else{c[h>>2]=k<<1;h=Le(k*280|0)|0;k=h;if((h|0)==0){Od(792,(m=i,i=i+1|0,i=i+7&-8,c[m>>2]=0,m)|0);i=m}n=a+3064|0;Qe(h|0,c[n>>2]|0,f*140|0)|0;Ke(c[n>>2]|0);c[n>>2]=k;l=k}k=a+3064|0;n=l+(f*140|0)|0;h=f+1|0;o=+g[b+4>>2];g[l+(f*140|0)+16>>2]=o;p=+g[b+8>>2];g[l+(f*140|0)+20>>2]=p;q=+g[b+12>>2];g[l+(f*140|0)+24>>2]=q;g[l+(f*140|0)+28>>2]=+g[b+16>>2];b=a+2204|0;do{if((c[b>>2]|0)==0){r=+g[a+2528>>2]+(o*+g[a+2516>>2]+p*+g[a+2520>>2]+q*+g[a+2524>>2]);g[l+(f*140|0)+80>>2]=r;s=+g[a+2544>>2]+(o*+g[a+2532>>2]+p*+g[a+2536>>2]+q*+g[a+2540>>2]);g[l+(f*140|0)+84>>2]=s;t=+g[a+2560>>2]+(o*+g[a+2548>>2]+p*+g[a+2552>>2]+q*+g[a+2556>>2]);g[l+(f*140|0)+88>>2]=t;if((c[a+2584>>2]|0)==0){u=+g[a+2576>>2]+(o*+g[a+2564>>2]+p*+g[a+2568>>2]+q*+g[a+2572>>2]);g[l+(f*140|0)+92>>2]=u;v=r;w=s;x=t;y=u;break}else{u=+g[a+2576>>2];g[l+(f*140|0)+92>>2]=u;v=r;w=s;x=t;y=u;break}}else{z=c[a+2428>>2]|0;u=+g[z+12>>2]+(o*+g[z>>2]+p*+g[z+4>>2]+q*+g[z+8>>2]);g[l+(f*140|0)+64>>2]=u;t=+g[z+28>>2]+(o*+g[z+16>>2]+p*+g[z+20>>2]+q*+g[z+24>>2]);g[l+(f*140|0)+68>>2]=t;s=+g[z+44>>2]+(o*+g[z+32>>2]+p*+g[z+36>>2]+q*+g[z+40>>2]);g[l+(f*140|0)+72>>2]=s;r=+g[z+60>>2]+(o*+g[z+48>>2]+p*+g[z+52>>2]+q*+g[z+56>>2]);g[l+(f*140|0)+76>>2]=r;z=c[a+2432>>2]|0;A=u*+g[z>>2]+t*+g[z+4>>2]+s*+g[z+8>>2]+r*+g[z+12>>2];B=l+(f*140|0)+80|0;g[B>>2]=A;C=u*+g[z+16>>2]+t*+g[z+20>>2]+s*+g[z+24>>2]+r*+g[z+28>>2];D=l+(f*140|0)+84|0;g[D>>2]=C;E=u*+g[z+32>>2]+t*+g[z+36>>2]+s*+g[z+40>>2]+r*+g[z+44>>2];F=l+(f*140|0)+88|0;g[F>>2]=E;G=u*+g[z+48>>2]+t*+g[z+52>>2]+s*+g[z+56>>2]+r*+g[z+60>>2];z=l+(f*140|0)+92|0;g[z>>2]=G;H=a+3008|0;I=a+3012|0;J=a+3016|0;K=l+(f*140|0)+4|0;g[K>>2]=+g[H>>2]*+g[a+2452>>2]+ +g[I>>2]*+g[a+2456>>2]+ +g[J>>2]*+g[a+2460>>2];g[l+(f*140|0)+8>>2]=+g[H>>2]*+g[a+2468>>2]+ +g[I>>2]*+g[a+2472>>2]+ +g[J>>2]*+g[a+2476>>2];g[l+(f*140|0)+12>>2]=+g[H>>2]*+g[a+2484>>2]+ +g[I>>2]*+g[a+2488>>2]+ +g[J>>2]*+g[a+2492>>2];if((c[a+2660>>2]|0)==0){v=A;w=C;x=E;y=G;break}je(K)|0;v=+g[B>>2];w=+g[D>>2];x=+g[F>>2];y=+g[z>>2]}}while(0);q=y*1.00001;y=-0.0-q;z=l+(f*140|0)+96|0;c[z>>2]=v<y|(q<v)<<1|(q<w)<<3|(q<x)<<5|(w<y)<<2|(x<y)<<4;if((c[b>>2]|0)==0){b=l+(f*140|0)+48|0;F=a+2980|0;c[b>>2]=c[F>>2];c[b+4>>2]=c[F+4>>2];c[b+8>>2]=c[F+8>>2];c[b+12>>2]=c[F+12>>2]}else{od(a,n)}do{if((c[a+2380>>2]|0)!=0){F=l+(f*140|0)+32|0;if((c[a+2588>>2]|0)==0){b=F;D=a+3024|0;c[b>>2]=c[D>>2];c[b+4>>2]=c[D+4>>2];c[b+8>>2]=c[D+8>>2];c[b+12>>2]=c[D+12>>2];break}else{ee(F,c[a+2436>>2]|0,a+3024|0);break}}}while(0);if((c[z>>2]|0)==0){pd(a,n)}c[n>>2]=c[a+3040>>2];n=c[a+3048>>2]|0;switch(n|0){case 0:{qd(a,c[k>>2]|0);L=0;c[e>>2]=L;i=d;return};case 1:{if((h|0)!=2){L=h;c[e>>2]=L;i=d;return}z=c[k>>2]|0;rd(a,z,z+140|0);L=0;c[e>>2]=L;i=d;return};case 3:case 2:{if((f|0)==0){f=c[k>>2]|0;Qe(f+280|0,f|0,140)|0;L=h;c[e>>2]=L;i=d;return}if((h|0)!=2){L=h;c[e>>2]=L;i=d;return}f=c[k>>2]|0;rd(a,f,f+140|0);f=c[k>>2]|0;Qe(f|0,f+140|0,140)|0;L=1;c[e>>2]=L;i=d;return};case 4:{if((h|0)!=3){L=h;c[e>>2]=L;i=d;return}f=c[k>>2]|0;yd(a,f,f+140|0,f+280|0);L=0;c[e>>2]=L;i=d;return};case 5:{if((j|0)<=2){L=h;c[e>>2]=L;i=d;return}f=(h|0)==3?0:h;z=c[k>>2]|0;if((j&1|0)==0){yd(a,z+280|0,z+140|0,z);L=f;c[e>>2]=L;i=d;return}else{yd(a,z,z+140|0,z+280|0);L=f;c[e>>2]=L;i=d;return}break};case 6:{if((h|0)!=3){L=h;c[e>>2]=L;i=d;return}f=c[k>>2]|0;yd(a,f,f+140|0,f+280|0);f=c[k>>2]|0;Qe(f+140|0,f+280|0,140)|0;L=2;c[e>>2]=L;i=d;return};case 7:{if((h|0)!=4){L=h;c[e>>2]=L;i=d;return}f=c[k>>2]|0;c[f+280>>2]=0;yd(a,f,f+140|0,f+280|0);f=c[k>>2]|0;c[f+280>>2]=1;c[f>>2]=0;yd(a,f,f+280|0,f+420|0);L=0;c[e>>2]=L;i=d;return};case 8:{if((h|0)!=4){L=h;c[e>>2]=L;i=d;return}f=c[k>>2]|0;yd(a,f,f+140|0,f+280|0);f=c[k>>2]|0;yd(a,f+140|0,f+420|0,f+280|0);f=c[k>>2]|0;Qe(f|0,f+280|0,140)|0;f=c[k>>2]|0;Qe(f+140|0,f+420|0,140)|0;L=2;c[e>>2]=L;i=d;return};case 9:{L=h;c[e>>2]=L;i=d;return};default:{Od(2136,(m=i,i=i+8|0,c[m>>2]=n,m)|0);i=m;L=h;c[e>>2]=L;i=d;return}}}function Ec(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;b=c[a+3048>>2]|0;do{if((b|0)==2){if((c[a+3056>>2]|0)<=2){break}d=c[a+3064>>2]|0;rd(a,d,d+280|0)}else if((b|0)==9){d=c[a+3056>>2]|0;if((d|0)<=2){break}e=a+3064|0;f=d;while(1){d=f-1|0;g=c[e>>2]|0;yd(a,g+(d*140|0)|0,g,g+((f-2|0)*140|0)|0);if((d|0)>2){f=d}else{break}}}}while(0);c[a+3044>>2]=0;return}function Fc(a){a=a|0;var b=0,d=0,e=0,f=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0;b=i;i=i+192|0;d=b|0;e=b+16|0;f=b+32|0;h=b+48|0;j=b+64|0;k=b+80|0;l=b+96|0;m=b+112|0;n=b+128|0;o=b+144|0;p=b+160|0;q=b+176|0;r=Me(3152)|0;s=r;c[624]=s;c[r>>2]=a;c[r+3060>>2]=16;c[r+3064>>2]=Le(2240)|0;c[r+2592>>2]=0;c[r+2596>>2]=0;c[r+2600>>2]=c[a>>2];c[r+2604>>2]=c[a+4>>2];c[r+2632>>2]=1;c[r+2384>>2]=Me(4096)|0;c[r+2388>>2]=Me(1024)|0;Rc(s,0)|0;c[r+2400>>2]=1;c[r+2404>>2]=0;c[r+2408>>2]=0;c[r+3044>>2]=0;a=r+4|0;t=d;u=e;v=f;w=h;x=j;y=k;z=l;A=0;do{le(d,0.0,0.0,0.0,1.0);B=a+(A*136|0)|0;c[B>>2]=c[t>>2];c[B+4>>2]=c[t+4>>2];c[B+8>>2]=c[t+8>>2];c[B+12>>2]=c[t+12>>2];le(e,1.0,1.0,1.0,1.0);B=a+(A*136|0)+16|0;c[B>>2]=c[u>>2];c[B+4>>2]=c[u+4>>2];c[B+8>>2]=c[u+8>>2];c[B+12>>2]=c[u+12>>2];le(f,1.0,1.0,1.0,1.0);B=a+(A*136|0)+32|0;c[B>>2]=c[v>>2];c[B+4>>2]=c[v+4>>2];c[B+8>>2]=c[v+8>>2];c[B+12>>2]=c[v+12>>2];le(h,0.0,0.0,1.0,0.0);B=a+(A*136|0)+48|0;c[B>>2]=c[w>>2];c[B+4>>2]=c[w+4>>2];c[B+8>>2]=c[w+8>>2];c[B+12>>2]=c[w+12>>2];ke(j,0.0,0.0,1.0);B=a+(A*136|0)+112|0;c[B>>2]=c[x>>2];c[B+4>>2]=c[x+4>>2];c[B+8>>2]=c[x+8>>2];ke(k,0.0,0.0,-1.0);B=a+(A*136|0)+64|0;c[B>>2]=c[y>>2];c[B+4>>2]=c[y+4>>2];c[B+8>>2]=c[y+8>>2];ke(l,0.0,0.0,-1.0);B=a+(A*136|0)+100|0;c[B>>2]=c[z>>2];c[B+4>>2]=c[z+4>>2];c[B+8>>2]=c[z+8>>2];g[a+(A*136|0)+76>>2]=0.0;g[a+(A*136|0)+80>>2]=180.0;g[a+(A*136|0)+84>>2]=1.0;g[a+(A*136|0)+88>>2]=0.0;g[a+(A*136|0)+92>>2]=0.0;c[a+(A*136|0)+124>>2]=0;A=A+1|0;}while((A|0)<16);c[r+2180>>2]=0;A=r+2184|0;le(m,.20000000298023224,.20000000298023224,.20000000298023224,1.0);a=m;c[A>>2]=c[a>>2];c[A+4>>2]=c[a+4>>2];c[A+8>>2]=c[a+8>>2];c[A+12>>2]=c[a+12>>2];c[r+2200>>2]=0;c[r+2204>>2]=0;c[r+2208>>2]=0;a=r+2212|0;A=n;m=o;z=p;l=q;le(n,0.0,0.0,0.0,1.0);c[a>>2]=c[A>>2];c[a+4>>2]=c[A+4>>2];c[a+8>>2]=c[A+8>>2];c[a+12>>2]=c[A+12>>2];a=r+2228|0;le(o,.20000000298023224,.20000000298023224,.20000000298023224,1.0);c[a>>2]=c[m>>2];c[a+4>>2]=c[m+4>>2];c[a+8>>2]=c[m+8>>2];c[a+12>>2]=c[m+12>>2];a=r+2244|0;le(p,.800000011920929,.800000011920929,.800000011920929,1.0);c[a>>2]=c[z>>2];c[a+4>>2]=c[z+4>>2];c[a+8>>2]=c[z+8>>2];c[a+12>>2]=c[z+12>>2];a=r+2260|0;le(q,0.0,0.0,0.0,1.0);c[a>>2]=c[l>>2];c[a+4>>2]=c[l+4>>2];c[a+8>>2]=c[l+8>>2];c[a+12>>2]=c[l+12>>2];g[r+2276>>2]=0.0;a=r+2288|0;le(n,0.0,0.0,0.0,1.0);c[a>>2]=c[A>>2];c[a+4>>2]=c[A+4>>2];c[a+8>>2]=c[A+8>>2];c[a+12>>2]=c[A+12>>2];A=r+2304|0;le(o,.20000000298023224,.20000000298023224,.20000000298023224,1.0);c[A>>2]=c[m>>2];c[A+4>>2]=c[m+4>>2];c[A+8>>2]=c[m+8>>2];c[A+12>>2]=c[m+12>>2];m=r+2320|0;le(p,.800000011920929,.800000011920929,.800000011920929,1.0);c[m>>2]=c[z>>2];c[m+4>>2]=c[z+4>>2];c[m+8>>2]=c[z+8>>2];c[m+12>>2]=c[z+12>>2];z=r+2336|0;le(q,0.0,0.0,0.0,1.0);c[z>>2]=c[l>>2];c[z+4>>2]=c[l+4>>2];c[z+8>>2]=c[l+8>>2];c[z+12>>2]=c[l+12>>2];g[r+2352>>2]=0.0;c[r+2368>>2]=1032;c[r+2372>>2]=5634;c[r+2364>>2]=0;Sc(s);g[r+2980>>2]=1.0;g[r+2984>>2]=1.0;g[r+2988>>2]=1.0;g[r+2992>>2]=1.0;c[r+2996>>2]=65535;c[r+3e3>>2]=65535;c[r+3004>>2]=65535;g[r+3008>>2]=1.0;g[r+3012>>2]=0.0;g[r+3016>>2]=0.0;g[r+3020>>2]=0.0;c[r+3040>>2]=1;g[r+3024>>2]=0.0;g[r+3028>>2]=0.0;g[r+3032>>2]=0.0;g[r+3036>>2]=1.0;c[r+2640>>2]=6914;c[r+2636>>2]=6914;c[r+2644>>2]=0;c[r+2652>>2]=1029;c[r+2648>>2]=7425;c[r+2656>>2]=0;Re(r+2960|0,0,20)|0;c[r+2672>>2]=7168;c[r+2676>>2]=0;c[r+2956>>2]=0;c[r+2412>>2]=0;c[r+2440>>2]=32;c[r+2444>>2]=8;c[r+2448>>2]=8;s=Me(2048)|0;c[r+2416>>2]=s;c[r+2428>>2]=s;s=Me(c[r+2444>>2]<<6)|0;c[r+2420>>2]=s;c[r+2432>>2]=s;s=Me(c[r+2448>>2]<<6)|0;c[r+2424>>2]=s;c[r+2436>>2]=s;Ib(5889);Kb();Ib(5890);Kb();Ib(5888);Kb();c[r+2580>>2]=1;c[r+3112>>2]=0;c[r+3144>>2]=0;c[r+3148>>2]=0;Re(r+3124|0,0,16)|0;i=b;return}function Gc(){var a=0;a=pc()|0;Ke(c[a+2384>>2]|0);Ke(c[a+2388>>2]|0);Ke(a);return}function Hc(a,b){a=a|0;b=b|0;var d=0;d=c[b+4>>2]|0;if((d|0)==5888){c[a+2412>>2]=0;return}else if((d|0)==5889){c[a+2412>>2]=1;return}else if((d|0)==5890){c[a+2412>>2]=2;return}else{return}}function Ic(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a+2412>>2]|0;e=c[a+2428+(d<<2)>>2]|0;g[e>>2]=+g[b+4>>2];g[e+16>>2]=+g[b+8>>2];g[e+32>>2]=+g[b+12>>2];g[e+48>>2]=+g[b+16>>2];g[e+4>>2]=+g[b+20>>2];g[e+20>>2]=+g[b+24>>2];g[e+36>>2]=+g[b+28>>2];g[e+52>>2]=+g[b+32>>2];g[e+8>>2]=+g[b+36>>2];g[e+24>>2]=+g[b+40>>2];g[e+40>>2]=+g[b+44>>2];g[e+56>>2]=+g[b+48>>2];g[e+12>>2]=+g[b+52>>2];g[e+28>>2]=+g[b+56>>2];g[e+44>>2]=+g[b+60>>2];g[e+60>>2]=+g[b+64>>2];c[a+2580>>2]=(d|0)<2;return}function Jc(a,b){a=a|0;b=b|0;b=a+2412|0;$d(c[a+2428+(c[b>>2]<<2)>>2]|0);c[a+2580>>2]=(c[b>>2]|0)<2;return}function Kc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+64|0;e=d|0;g[e>>2]=+g[b+4>>2];g[e+16>>2]=+g[b+8>>2];g[e+32>>2]=+g[b+12>>2];g[e+48>>2]=+g[b+16>>2];g[e+4>>2]=+g[b+20>>2];g[e+20>>2]=+g[b+24>>2];g[e+36>>2]=+g[b+28>>2];g[e+52>>2]=+g[b+32>>2];g[e+8>>2]=+g[b+36>>2];g[e+24>>2]=+g[b+40>>2];g[e+40>>2]=+g[b+44>>2];g[e+56>>2]=+g[b+48>>2];g[e+12>>2]=+g[b+52>>2];g[e+28>>2]=+g[b+56>>2];g[e+44>>2]=+g[b+60>>2];g[e+60>>2]=+g[b+64>>2];b=a+2412|0;ce(c[a+2428+(c[b>>2]<<2)>>2]|0,e);c[a+2580>>2]=(c[b>>2]|0)<2;i=d;return}function Lc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;b=a+2412|0;d=a+2428+(c[b>>2]<<2)|0;e=c[d>>2]|0;f=e+64|0;c[d>>2]=f;de(f,e);c[a+2580>>2]=(c[b>>2]|0)<2;return}function Mc(a,b){a=a|0;b=b|0;var d=0;b=a+2412|0;d=a+2428+(c[b>>2]<<2)|0;c[d>>2]=(c[d>>2]|0)-64;c[a+2580>>2]=(c[b>>2]|0)<2;return}function Nc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0.0,h=0.0,j=0.0,k=0.0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0,q=0.0,r=0.0,s=0.0,t=0.0,u=0.0,v=0.0,w=0.0,x=0.0;d=i;i=i+64|0;e=d|0;f=+g[b+4>>2]*3.141592653589793/180.0;h=+g[b+8>>2];j=+g[b+12>>2];k=+g[b+16>>2];b=(j!=0.0)<<1|(h!=0.0)<<2|k!=0.0;do{if((b|0)==0){$d(e)}else if((b|0)==4){if(h<0.0){l=-0.0-f}else{l=f}ie(e,l,0)}else if((b|0)==1){if(k<0.0){m=-0.0-f}else{m=f}ie(e,m,2)}else if((b|0)==2){if(j<0.0){n=-0.0-f}else{n=f}ie(e,n,1)}else{o=h*h+j*j+k*k;if(o==0.0){i=d;return}else{p=1.0/+O(o);o=h*p;q=j*p;r=k*p;p=f;s=+Q(p);t=+R(p);g[e+28>>2]=0.0;g[e+12>>2]=0.0;Re(e+44|0,0,16)|0;g[e+60>>2]=1.0;p=o*o;g[e>>2]=p+s*(1.0-p);p=1.0-s;u=o*q*p;v=r*t;g[e+16>>2]=u-v;w=r*o*p;x=q*t;g[e+32>>2]=w+x;g[e+4>>2]=u+v;v=q*q;g[e+20>>2]=v+s*(1.0-v);v=q*r*p;p=o*t;g[e+36>>2]=v-p;g[e+8>>2]=w-x;g[e+24>>2]=v+p;p=r*r;g[e+40>>2]=p+s*(1.0-p);break}}}while(0);b=a+2412|0;ce(c[a+2428+(c[b>>2]<<2)>>2]|0,e);c[a+2580>>2]=(c[b>>2]|0)<2;i=d;return}function Oc(a,b){a=a|0;b=b|0;var d=0.0,e=0.0,f=0.0,h=0,i=0;d=+g[b+4>>2];e=+g[b+8>>2];f=+g[b+12>>2];b=c[a+2412>>2]|0;h=c[a+2428+(b<<2)>>2]|0;i=h|0;g[i>>2]=d*+g[i>>2];i=h+4|0;g[i>>2]=e*+g[i>>2];i=h+8|0;g[i>>2]=f*+g[i>>2];i=h+16|0;g[i>>2]=d*+g[i>>2];i=h+20|0;g[i>>2]=e*+g[i>>2];i=h+24|0;g[i>>2]=f*+g[i>>2];i=h+32|0;g[i>>2]=d*+g[i>>2];i=h+36|0;g[i>>2]=e*+g[i>>2];i=h+40|0;g[i>>2]=f*+g[i>>2];i=h+48|0;g[i>>2]=d*+g[i>>2];i=h+52|0;g[i>>2]=e*+g[i>>2];i=h+56|0;g[i>>2]=f*+g[i>>2];c[a+2580>>2]=(b|0)<2;return}function Pc(a,b){a=a|0;b=b|0;var d=0.0,e=0.0,f=0.0,h=0,i=0;d=+g[b+4>>2];e=+g[b+8>>2];f=+g[b+12>>2];b=c[a+2412>>2]|0;h=c[a+2428+(b<<2)>>2]|0;i=h+12|0;g[i>>2]=+g[i>>2]+(d*+g[h>>2]+e*+g[h+4>>2]+f*+g[h+8>>2]);i=h+28|0;g[i>>2]=+g[i>>2]+(d*+g[h+16>>2]+e*+g[h+20>>2]+f*+g[h+24>>2]);i=h+44|0;g[i>>2]=+g[i>>2]+(d*+g[h+32>>2]+e*+g[h+36>>2]+f*+g[h+40>>2]);i=h+60|0;g[i>>2]=+g[i>>2]+(d*+g[h+48>>2]+e*+g[h+52>>2]+f*+g[h+56>>2]);c[a+2580>>2]=(b|0)<2;return}function Qc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0.0,h=0.0,j=0.0,k=0.0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0,q=0.0,r=0.0;d=i;i=i+64|0;e=d|0;f=+g[b+4>>2];h=+g[b+8>>2];j=+g[b+12>>2];k=+g[b+16>>2];l=+g[b+20>>2];m=+g[b+24>>2];n=l;o=n*2.0;p=h-f;q=k-j;r=m-l;g[e>>2]=o/p;g[e+4>>2]=0.0;g[e+8>>2]=(f+h)/p;g[e+12>>2]=0.0;g[e+16>>2]=0.0;g[e+20>>2]=o/q;g[e+24>>2]=(j+k)/q;g[e+28>>2]=0.0;g[e+32>>2]=0.0;g[e+36>>2]=0.0;g[e+40>>2]=(-0.0-(l+m))/r;g[e+44>>2]=(-0.0-n*m*2.0)/r;g[e+48>>2]=0.0;g[e+52>>2]=0.0;g[e+56>>2]=-1.0;g[e+60>>2]=0.0;b=a+2412|0;ce(c[a+2428+(c[b>>2]<<2)>>2]|0,e);c[a+2580>>2]=(c[b>>2]|0)<2;i=d;return}function Rc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=Me(144)|0;e=d;f=(c[a+2388>>2]|0)+(((b|0)%256|0)<<2)|0;a=c[f>>2]|0;c[d+136>>2]=a;c[d+140>>2]=0;if((a|0)!=0){c[a+140>>2]=e}c[f>>2]=e;c[d+132>>2]=b;return e|0}function Sc(a){a=a|0;var b=0,d=0,e=0,f=0;c[a+2380>>2]=0;b=c[a+2388>>2]|0;while(1){d=c[b>>2]|0;if((d|0)==0){e=0;f=4;break}if((c[d+132>>2]|0)==0){e=d;f=4;break}else{b=d+136|0}}if((f|0)==4){c[a+2376>>2]=e;return}}function Tc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;d=c[(pc()|0)+2388>>2]|0;e=0;f=0;while(1){g=c[d+(f<<2)>>2]|0;if((g|0)==0){h=e}else{i=e;j=g;while(1){g=c[j+132>>2]|0;k=(g|0)>(i|0)?g:i;g=c[j+136>>2]|0;if((g|0)==0){h=k;break}else{i=k;j=g}}}j=f+1|0;if((j|0)<256){e=h;f=j}else{break}}if((a|0)<=0){return}f=h+1|0;h=0;do{c[b+(h<<2)>>2]=f+h;h=h+1|0;}while((h|0)<(a|0));return}function Uc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;d=pc()|0;if((a|0)<=0){return}e=d+2388|0;f=d+2376|0;d=0;do{g=b+(d<<2)|0;h=c[g>>2]|0;i=c[e>>2]|0;j=i+(((h|0)%256|0)<<2)|0;while(1){k=c[j>>2]|0;if((k|0)==0){break}if((c[k+132>>2]|0)==(h|0)){l=6;break}else{j=k+136|0}}if((l|0)==6){l=0;if((k|0)==(c[f>>2]|0)){cc(3553,0);m=c[g>>2]|0;n=c[e>>2]|0}else{m=h;n=i}j=n+(((m|0)%256|0)<<2)|0;while(1){o=c[j>>2]|0;if((o|0)==0){p=0;break}if((c[o+132>>2]|0)==(m|0)){p=o;break}else{j=o+136|0}}j=p+140|0;i=c[j>>2]|0;if((i|0)==0){c[n+(((c[p+132>>2]|0)%256|0)<<2)>>2]=c[p+136>>2]}else{c[i+136>>2]=c[p+136>>2]}i=c[p+136>>2]|0;if((i|0)!=0){c[i+140>>2]=c[j>>2]}j=c[p>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+12>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+24>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+36>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+48>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+60>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+72>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+84>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+96>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+108>>2]|0;if((j|0)!=0){Ke(j)}j=c[p+120>>2]|0;if((j|0)!=0){Ke(j)}Ke(p)}d=d+1|0;}while((d|0)<(a|0));return}function Vc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;d=c[b+8>>2]|0;b=a+2388|0;e=(d|0)%256|0;f=(c[b>>2]|0)+(e<<2)|0;while(1){g=c[f>>2]|0;if((g|0)==0){break}if((c[g+132>>2]|0)==(d|0)){h=g;i=7;break}else{f=g+136|0}}if((i|0)==7){j=a+2376|0;c[j>>2]=h;return}i=Me(144)|0;f=i;g=(c[b>>2]|0)+(e<<2)|0;e=c[g>>2]|0;c[i+136>>2]=e;c[i+140>>2]=0;if((e|0)!=0){c[e+140>>2]=f}c[g>>2]=f;c[i+132>>2]=d;h=f;j=a+2376|0;c[j>>2]=h;return}function Wc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;e=c[b+8>>2]|0;f=c[b+16>>2]|0;g=c[b+20>>2]|0;h=c[b+36>>2]|0;if(!((c[b+4>>2]|0)==3553&(e|0)==0&(c[b+12>>2]|0)==3&(c[b+24>>2]|0)==0&(c[b+28>>2]|0)==6407&(c[b+32>>2]|0)==5121)){Od(656,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b}if((f|0)==256&(g|0)==256){j=0;k=h}else{b=Le(196608)|0;ne(b,256,256,h,f,g);j=1;k=b}b=c[a+2376>>2]|0;c[b+(e*12|0)+4>>2]=256;c[b+(e*12|0)+8>>2]=256;a=b+(e*12|0)|0;e=c[a>>2]|0;if((e|0)!=0){Ke(e)}e=Le(262144)|0;c[a>>2]=e;if((e|0)!=0){me(e,k,256,256)}if((j|0)==0){i=d;return}Ke(k);i=d;return}function Xc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;a=i;d=(c[b+8>>2]|0)==8704;e=(c[b+12>>2]|0)==8449;if((c[b+4>>2]|0)==8960&d&e){i=a;return}if(!(d&e)){while(1){Od(1984,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0);i=f}}Od(1984,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0);i=f;i=a;return}function Yc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;a=i;d=c[b+8>>2]|0;e=c[b+12>>2]|0;if((c[b+4>>2]|0)==3553){f=3}else{f=2}while(1){if((f|0)==2){f=0;Od(1984,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b;f=3;continue}else if((f|0)==3){f=0;if((d-10242|0)>>>0>1>>>0|(e|0)==10497){break}else{f=2;continue}}}i=a;return}function Zc(a,b){a=a|0;b=b|0;a=i;do{if((c[b+4>>2]|0)==3317){if((c[b+8>>2]|0)!=1){break}i=a;return}}while(0);Od(1944,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b;i=a;return}function _c(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;i=i+16|0;e=d|0;f=d+8|0;g=c[b+4>>2]|0;h=c[b+8>>2]|0;j=c[b+12>>2]|0;k=c[b+16>>2]|0;b=a+2592|0;do{if((c[b>>2]|0)==(g|0)){if((c[a+2596>>2]|0)!=(h|0)){break}if((c[a+2600>>2]|0)!=(j|0)){break}if((c[a+2604>>2]|0)!=(k|0)){break}i=d;return}}while(0);c[e>>2]=j+g;c[f>>2]=k+h;k=c[a+3144>>2]|0;do{if((k|0)!=0){if((Ta[k&1](a,e,f)|0)==0){break}Od(2368,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l}}while(0);k=(c[e>>2]|0)-g|0;e=(c[f>>2]|0)-h|0;if((k|0)<1|(e|0)<1){Od(2336,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l}ue(1856,(l=i,i=i+32|0,c[l>>2]=g,c[l+8>>2]=h,c[l+16>>2]=k,c[l+24>>2]=e,l)|0);i=l;c[b>>2]=g;c[a+2596>>2]=h;c[a+2600>>2]=k;c[a+2604>>2]=e;c[a+2632>>2]=1;i=d;return}function $c(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=c[b+4>>2]|0;e=c[b+8>>2]|0;if((d|0)==10753){b=a+3124|0;f=c[b>>2]|0;if((e|0)==0){c[b>>2]=f&-5;return}else{c[b>>2]=f|4;return}}else if((d|0)==3553){c[a+2380>>2]=e;return}else if((d|0)==2884){c[a+2656>>2]=e;return}else if((d|0)==2896){c[a+2204>>2]=e;return}else if((d|0)==2903){c[a+2364>>2]=e;return}else if((d|0)==10754){f=a+3124|0;b=c[f>>2]|0;if((e|0)==0){c[f>>2]=b&-3;return}else{c[f>>2]=b|2;return}}else if((d|0)==2977){c[a+2660>>2]=e;return}else if((d|0)==32823){b=a+3124|0;f=c[b>>2]|0;if((e|0)==0){c[b>>2]=f&-2;return}else{c[b>>2]=f|1;return}}else if((d|0)==2929){c[a+3148>>2]=e;return}else{f=d-16384|0;if(!(f>>>0<16>>>0)){return}nd(a,f,e);return}}function ad(a,b){a=a|0;b=b|0;c[a+2648>>2]=c[b+4>>2];return}function bd(a,b){a=a|0;b=b|0;c[a+2652>>2]=c[b+4>>2];return}function cd(a,b){a=a|0;b=b|0;c[a+2644>>2]=c[b+4>>2];return}function dd(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[b+4>>2]|0;e=c[b+8>>2]|0;if((d|0)==1029){c[a+2636>>2]=e;return}else if((d|0)==1028){c[a+2640>>2]=e;return}else if((d|0)==1032){c[a+2640>>2]=e;c[a+2636>>2]=e;return}else{return}}function ed(a,b){a=a|0;b=b|0;return}function fd(a,b){a=a|0;b=b|0;g[a+3116>>2]=+g[b+4>>2];g[a+3120>>2]=+g[b+8>>2];return}function gd(a,b){a=a|0;b=b|0;g[a+2964>>2]=+g[b+4>>2];g[a+2968>>2]=+g[b+8>>2];g[a+2972>>2]=+g[b+12>>2];g[a+2976>>2]=+g[b+16>>2];return}function hd(a,b){a=a|0;b=b|0;g[a+2960>>2]=+g[b+4>>2];return}function id(a,b){a=a|0;b=b|0;var d=0;d=c[b+4>>2]|0;Td(c[a>>2]|0,d&256,0,d&16384,~~(+g[a+2964>>2]*65535.0),~~(+g[a+2968>>2]*65535.0),~~(+g[a+2972>>2]*65535.0));return}function jd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,i=0;d=b+4|0;e=c[d>>2]|0;f=c[b+8>>2]|0;h=b+12|0;if((e|0)==1032){c[d>>2]=1028;jd(a,b);i=1029}else{i=e}e=(i|0)==1028?a+2212|0:a+2288|0;switch(f|0){case 5634:{g[e+32>>2]=+g[h>>2];f=b+16|0;g[e+36>>2]=+g[f>>2];a=b+20|0;g[e+40>>2]=+g[a>>2];i=b+24|0;g[e+44>>2]=+g[i>>2];g[e+16>>2]=+g[h>>2];g[e+20>>2]=+g[f>>2];g[e+24>>2]=+g[a>>2];g[e+28>>2]=+g[i>>2];return};case 4610:{g[e+48>>2]=+g[h>>2];g[e+52>>2]=+g[b+16>>2];g[e+56>>2]=+g[b+20>>2];g[e+60>>2]=+g[b+24>>2];return};case 4609:{g[e+32>>2]=+g[h>>2];g[e+36>>2]=+g[b+16>>2];g[e+40>>2]=+g[b+20>>2];g[e+44>>2]=+g[b+24>>2];return};case 4608:{g[e+16>>2]=+g[h>>2];g[e+20>>2]=+g[b+16>>2];g[e+24>>2]=+g[b+20>>2];g[e+28>>2]=+g[b+24>>2];return};case 5632:{g[e>>2]=+g[h>>2];g[e+4>>2]=+g[b+16>>2];g[e+8>>2]=+g[b+20>>2];g[e+12>>2]=+g[b+24>>2];return};case 5633:{g[e+64>>2]=+g[h>>2];c[e+68>>2]=~~(+g[h>>2]*.0078125*1024.0);return};default:{return}}}function kd(a,b){a=a|0;b=b|0;var d=0;d=c[b+8>>2]|0;c[a+2368>>2]=c[b+4>>2];c[a+2372>>2]=d;return}function ld(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0,k=0,l=0,m=0.0;d=i;i=i+16|0;e=d|0;f=e;h=i;i=i+16|0;j=c[b+4>>2]|0;k=c[b+8>>2]|0;l=b+12|0;c[f>>2]=c[l>>2];c[f+4>>2]=c[l+4>>2];c[f+8>>2]=c[l+8>>2];c[f+12>>2]=c[l+12>>2];l=j-16384|0;switch(k|0){case 4612:{m=+g[e>>2];g[a+4+(l*136|0)+64>>2]=m;g[a+4+(l*136|0)+100>>2]=m;m=+g[e+4>>2];g[a+4+(l*136|0)+68>>2]=m;g[a+4+(l*136|0)+104>>2]=m;m=+g[e+8>>2];g[a+4+(l*136|0)+72>>2]=m;g[a+4+(l*136|0)+108>>2]=m;je(a+4+(l*136|0)+100|0)|0;i=d;return};case 4608:{k=a+4+(l*136|0)|0;c[k>>2]=c[f>>2];c[k+4>>2]=c[f+4>>2];c[k+8>>2]=c[f+8>>2];c[k+12>>2]=c[f+12>>2];i=d;return};case 4613:{g[a+4+(l*136|0)+76>>2]=+g[e>>2];i=d;return};case 4610:{k=a+4+(l*136|0)+32|0;c[k>>2]=c[f>>2];c[k+4>>2]=c[f+4>>2];c[k+8>>2]=c[f+8>>2];c[k+12>>2]=c[f+12>>2];i=d;return};case 4615:{g[a+4+(l*136|0)+84>>2]=+g[e>>2];i=d;return};case 4609:{k=a+4+(l*136|0)+16|0;c[k>>2]=c[f>>2];c[k+4>>2]=c[f+4>>2];c[k+8>>2]=c[f+8>>2];c[k+12>>2]=c[f+12>>2];i=d;return};case 4616:{g[a+4+(l*136|0)+88>>2]=+g[e>>2];i=d;return};case 4611:{ee(h,c[a+2428>>2]|0,e);f=a+4+(l*136|0)+48|0;k=h;c[f>>2]=c[k>>2];c[f+4>>2]=c[k+4>>2];c[f+8>>2]=c[k+8>>2];c[f+12>>2]=c[k+12>>2];if(!(+g[a+4+(l*136|0)+60>>2]==0.0)){i=d;return}k=a+4+(l*136|0)+112|0;g[k>>2]=+g[h>>2];g[a+4+(l*136|0)+116>>2]=+g[h+4>>2];g[a+4+(l*136|0)+120>>2]=+g[h+8>>2];je(k)|0;i=d;return};case 4617:{g[a+4+(l*136|0)+92>>2]=+g[e>>2];i=d;return};case 4614:{m=+g[e>>2];g[a+4+(l*136|0)+80>>2]=m;if(!(m!=180.0)){i=d;return}g[a+4+(l*136|0)+96>>2]=+Q(m*3.141592653589793/180.0);i=d;return};default:{i=d;return}}}function md(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=c[b+4>>2]|0;f=b+8|0;if((e|0)==2899){g[a+2184>>2]=+g[f>>2];g[a+2188>>2]=+g[b+12>>2];g[a+2192>>2]=+g[b+16>>2];g[a+2196>>2]=+g[b+20>>2];i=d;return}else if((e|0)==2897){c[a+2200>>2]=~~+g[f>>2];i=d;return}else if((e|0)==2898){c[a+2208>>2]=~~+g[f>>2];i=d;return}else{te(2208,(f=i,i=i+8|0,c[f>>2]=e,f)|0);i=f;i=d;return}}function nd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=a+4+(b*136|0)|0;f=a+4+(b*136|0)+124|0;g=(c[f>>2]|0)==0;if((d|0)!=0){if(!g){return}c[f>>2]=1;d=a+2180|0;c[a+4+(b*136|0)+128>>2]=c[d>>2];c[d>>2]=e;c[a+4+(b*136|0)+132>>2]=0;return}if(g){return}c[f>>2]=0;f=a+4+(b*136|0)+132|0;g=c[f>>2]|0;e=a+4+(b*136|0)+128|0;b=c[e>>2]|0;if((g|0)==0){c[a+2180>>2]=b}else{c[g+128>>2]=b}b=c[e>>2]|0;if((b|0)==0){return}c[b+132>>2]=c[f>>2];return}function od(a,b){a=a|0;b=b|0;var d=0,e=0,f=0.0,h=0.0,j=0.0,k=0,l=0.0,m=0.0,n=0,o=0.0,p=0.0,q=0,r=0.0,s=0.0,t=0.0,u=0.0,v=0,w=0.0,x=0.0,y=0.0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,Q=0,R=0.0,S=0.0,T=0,U=0.0,V=0.0,W=0.0,X=0.0,Y=0.0,Z=0.0,_=0.0,$=0.0,aa=0.0,ba=0.0,ca=0.0,da=0.0,ea=0.0,fa=0.0,ga=0.0,ha=0.0,ia=0.0,ja=0.0,ka=0.0,la=0.0,ma=0.0,na=0.0,oa=0.0,pa=0.0,qa=0.0,ra=0.0,sa=0.0,ta=0.0,ua=0.0,va=0.0,wa=0.0,xa=0,ya=0.0,za=0,Aa=0,Ba=0.0,Ca=0.0,Da=0.0,Ea=0,Fa=0;d=i;i=i+16|0;e=d|0;f=+g[b+4>>2];h=+g[b+8>>2];j=+g[b+12>>2];k=a+2228|0;l=+g[k>>2];m=+g[a+2212>>2]+l*+g[a+2184>>2];n=a+2232|0;o=+g[n>>2];p=+g[a+2216>>2]+o*+g[a+2188>>2];q=a+2236|0;r=+g[q>>2];s=+g[a+2220>>2]+r*+g[a+2192>>2];t=+g[a+2256>>2];if(t<0.0){u=0.0}else{u=t>1.0?1.0:t}v=c[a+2180>>2]|0;a:do{if((v|0)==0){w=s;x=p;y=m}else{z=(c[a+2208>>2]|0)!=0;A=a+2244|0;B=a+2248|0;C=a+2252|0;D=a+2200|0;E=a+2280|0;F=a+2276|0;G=a+2260|0;H=a+2264|0;I=a+2268|0;J=b+64|0;K=e|0;L=b+68|0;M=e+4|0;N=b+72|0;Q=e+8|0;t=s;R=p;S=m;T=v;U=l;V=o;W=r;while(1){X=+g[T>>2]*U;Y=+g[T+4>>2]*V;Z=+g[T+8>>2]*W;_=+g[T+48>>2];if(+g[T+60>>2]==0.0){$=1.0;aa=_;ba=+g[T+52>>2];ca=+g[T+56>>2]}else{da=_- +g[J>>2];_=+g[T+52>>2]- +g[L>>2];ea=+g[T+56>>2]- +g[N>>2];fa=+O(da*da+_*_+ea*ea);if(fa>.001){ga=1.0/fa;ha=da*ga;ia=_*ga;ja=ea*ga}else{ha=da;ia=_;ja=ea}$=1.0/(+g[T+84>>2]+fa*(+g[T+88>>2]+fa*+g[T+92>>2]));aa=ha;ba=ia;ca=ja}fa=j*ca+(h*ba+f*aa);if(z&fa<0.0){ka=-0.0-fa}else{ka=fa}b:do{if(ka>0.0){fa=X+ka*+g[T+16>>2]*+g[A>>2];ea=Y+ka*+g[T+20>>2]*+g[B>>2];_=Z+ka*+g[T+24>>2]*+g[C>>2];do{if(+g[T+80>>2]!=180.0){da=aa*+g[T+100>>2]+ba*+g[T+104>>2]+ca*+g[T+108>>2];ga=z&da>-0.0?da:-0.0-da;if(ga<+g[T+96>>2]){la=S;ma=R;na=t;break b}da=+g[T+76>>2];if(!(da>0.0)){oa=$;break}oa=$*+P(+ga,+da)}else{oa=$}}while(0);if((c[D>>2]|0)==0){pa=aa;qa=ba;ra=ca+1.0}else{g[K>>2]=+g[J>>2];g[M>>2]=+g[L>>2];g[Q>>2]=+g[N>>2];je(e)|0;da=+g[K>>2];pa=aa-da;qa=ba-da;ra=ca-da}da=j*ra+(h*qa+f*pa);if(z&da<0.0){sa=-0.0-da}else{sa=da}if(!(sa>0.0)){ta=ea;ua=_;va=fa;wa=oa;xa=26;break}da=+O(ra*ra+(qa*qa+pa*pa));if(da>.001){ya=sa/da}else{ya=sa}za=Je(a,c[E>>2]|0,+g[F>>2])|0;Aa=~~(ya*1024.0);da=+g[za+8+(((Aa|0)>1024?1024:Aa)<<2)>>2];ta=ea+da*+g[T+36>>2]*+g[H>>2];ua=_+da*+g[T+40>>2]*+g[I>>2];va=fa+da*+g[T+32>>2]*+g[G>>2];wa=oa;xa=26}else{ta=Y;ua=Z;va=X;wa=$;xa=26}}while(0);if((xa|0)==26){xa=0;la=S+wa*va;ma=R+wa*ta;na=t+wa*ua}Aa=c[T+128>>2]|0;if((Aa|0)==0){w=na;x=ma;y=la;break a}t=na;R=ma;S=la;T=Aa;U=+g[k>>2];V=+g[n>>2];W=+g[q>>2]}}}while(0);if(y<0.0){Ba=0.0}else{Ba=y>1.0?1.0:y}g[b+48>>2]=Ba;if(x<0.0){Ca=0.0}else{Ca=x>1.0?1.0:x}g[b+52>>2]=Ca;if(w<0.0){Da=0.0;Ea=b+56|0;g[Ea>>2]=Da;Fa=b+60|0;g[Fa>>2]=u;i=d;return}Da=w>1.0?1.0:w;Ea=b+56|0;g[Ea>>2]=Da;Fa=b+60|0;g[Fa>>2]=u;i=d;return}function pd(a,b){a=a|0;b=b|0;var d=0.0;d=1.0/+g[b+92>>2];c[b+100>>2]=~~(d*+g[b+80>>2]*+g[a+2608>>2]+ +g[a+2620>>2]);c[b+104>>2]=~~(d*+g[b+84>>2]*+g[a+2612>>2]+ +g[a+2624>>2]);c[b+108>>2]=~~(d*+g[b+88>>2]*+g[a+2616>>2]+ +g[a+2628>>2]);if((c[a+2204>>2]|0)==0){c[b+120>>2]=c[a+2996>>2];c[b+124>>2]=c[a+3e3>>2];c[b+128>>2]=c[a+3004>>2]}else{c[b+120>>2]=~~(+g[b+48>>2]*63488.0+1024.0);c[b+124>>2]=~~(+g[b+52>>2]*64512.0+512.0);c[b+128>>2]=~~(+g[b+56>>2]*63488.0+1024.0)}if((c[a+2380>>2]|0)==0){return}c[b+112>>2]=~~(+g[b+32>>2]*4177920.0+8192.0);c[b+116>>2]=~~(+g[b+36>>2]*1069547520.0+2097152.0);return}function qd(a,b){a=a|0;b=b|0;var d=0;if((c[b+96>>2]|0)!=0){return}if((c[a+2672>>2]|0)==7170){d=c[b+108>>2]|0;Ld(a,d,d);return}else{Ud(c[a>>2]|0,b+100|0);return}}function rd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0.0,p=0.0,q=0.0,r=0.0,s=0.0,t=0.0,u=0.0,v=0.0,w=0.0,x=0.0,y=0.0,z=0.0,A=0.0,B=0.0,C=0.0,D=0.0,E=0.0,F=0.0,G=0.0,H=0.0,I=0.0,J=0.0,K=0.0;e=i;i=i+288|0;f=e|0;h=e+144|0;j=c[b+96>>2]|0;k=c[d+96>>2]|0;if((k|j|0)==0){if((c[a+2672>>2]|0)==7170){l=c[b+108>>2]|0;m=c[d+108>>2]|0;Ld(a,~(m>>>0<l>>>0?m:l),~(m>>>0>l>>>0?m:l));i=e;return}l=c[a>>2]|0;m=b+100|0;n=d+100|0;if((c[a+3148>>2]|0)==0){Wd(l,m,n);i=e;return}else{Vd(l,m,n);i=e;return}}if((k&j|0)!=0){i=e;return}o=+g[b+80>>2];p=+g[d+80>>2]-o;q=+g[b+84>>2];r=+g[d+84>>2]-q;s=+g[b+88>>2];t=+g[d+88>>2]-s;u=+g[b+92>>2];v=+g[d+92>>2]-u;w=p+v;x=-0.0-o-u;do{if(w>0.0){y=x/w;if(y>1.0){i=e;return}if(!(y>0.0)){z=1.0;A=0.0;break}z=1.0;A=y}else{if(!(w<0.0)){if(!(x>0.0)){z=1.0;A=0.0;break}i=e;return}y=x/w;if(y<0.0){i=e;return}if(!(y<1.0)){z=1.0;A=0.0;break}z=y;A=0.0}}while(0);w=v-p;x=o-u;do{if(w>0.0){y=x/w;if(y>z){i=e;return}if(!(y>A)){B=z;C=A;break}B=z;C=y}else{if(!(w<0.0)){if(!(x>0.0)){B=z;C=A;break}i=e;return}y=x/w;if(y<A){i=e;return}if(!(y<z)){B=z;C=A;break}B=y;C=A}}while(0);A=r+v;z=-0.0-q-u;do{if(A>0.0){w=z/A;if(w>B){i=e;return}if(!(w>C)){D=B;E=C;break}D=B;E=w}else{if(!(A<0.0)){if(!(z>0.0)){D=B;E=C;break}i=e;return}w=z/A;if(w<C){i=e;return}if(!(w<B)){D=B;E=C;break}D=w;E=C}}while(0);C=v-r;B=q-u;do{if(C>0.0){A=B/C;if(A>D){i=e;return}if(!(A>E)){F=D;G=E;break}F=D;G=A}else{if(!(C<0.0)){if(!(B>0.0)){F=D;G=E;break}i=e;return}A=B/C;if(A<E){i=e;return}if(!(A<D)){F=D;G=E;break}F=A;G=E}}while(0);E=t+v;D=-0.0-s-u;do{if(E>0.0){C=D/E;if(C>F){i=e;return}if(!(C>G)){H=F;I=G;break}H=F;I=C}else{if(!(E<0.0)){if(!(D>0.0)){H=F;I=G;break}i=e;return}C=D/E;if(C<G){i=e;return}if(!(C<F)){H=F;I=G;break}H=C;I=G}}while(0);G=v-t;F=s-u;do{if(G>0.0){E=F/G;if(E>H){i=e;return}if(!(E>I)){J=H;K=I;break}J=H;K=E}else{if(!(G<0.0)){if(!(F>0.0)){J=H;K=I;break}i=e;return}E=F/G;if(E<I){i=e;return}if(!(E<H)){J=H;K=I;break}J=E;K=I}}while(0);g[f+80>>2]=o+K*p;g[f+84>>2]=q+K*r;g[f+88>>2]=s+K*t;g[f+92>>2]=u+K*v;I=+g[b+48>>2];H=+g[d+48>>2]-I;g[f+48>>2]=I+K*H;G=+g[b+52>>2];F=+g[d+52>>2]-G;g[f+52>>2]=G+K*F;E=+g[b+56>>2];D=+g[d+56>>2]-E;g[f+56>>2]=E+K*D;g[h+80>>2]=o+J*p;g[h+84>>2]=q+J*r;g[h+88>>2]=s+J*t;g[h+92>>2]=u+J*v;g[h+48>>2]=I+J*H;g[h+52>>2]=G+J*F;g[h+56>>2]=E+J*D;pd(a,f);pd(a,h);d=c[a>>2]|0;b=f+100|0;f=h+100|0;if((c[a+3148>>2]|0)==0){Wd(d,b,f);i=e;return}else{Vd(d,b,f);i=e;return}}function sd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0.0,f=0,h=0.0,i=0,j=0.0,k=0.0,l=0.0,m=0.0;d=+g[b>>2];e=+g[b+4>>2];f=b+8|0;h=+g[c+8>>2]- +g[f>>2];i=b+12|0;j=+g[i>>2];k=+g[c+12>>2]-j;l=+g[c>>2]-d+k;if(l==0.0){m=0.0}else{m=(-0.0-d-j)/l}g[a+4>>2]=e+(+g[c+4>>2]-e)*m;g[a+8>>2]=h*m+ +g[f>>2];h=k*m+ +g[i>>2];g[a+12>>2]=h;g[a>>2]=-0.0-h;return+m}function td(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0.0,f=0,h=0.0,i=0,j=0.0,k=0.0,l=0.0,m=0.0;d=+g[b>>2];e=+g[b+4>>2];f=b+8|0;h=+g[c+8>>2]- +g[f>>2];i=b+12|0;j=+g[i>>2];k=+g[c+12>>2]-j;l=k-(+g[c>>2]-d);if(l==0.0){m=0.0}else{m=(d-j)/l}g[a+4>>2]=e+(+g[c+4>>2]-e)*m;g[a+8>>2]=h*m+ +g[f>>2];h=k*m+ +g[i>>2];g[a+12>>2]=h;g[a>>2]=h;return+m}function ud(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0.0,f=0,h=0.0,i=0,j=0.0,k=0.0,l=0.0,m=0.0;d=+g[b>>2];e=+g[b+4>>2];f=b+8|0;h=+g[c+8>>2]- +g[f>>2];i=b+12|0;j=+g[i>>2];k=+g[c+12>>2]-j;l=+g[c+4>>2]-e+k;if(l==0.0){m=0.0}else{m=(-0.0-e-j)/l}g[a>>2]=d+(+g[c>>2]-d)*m;g[a+8>>2]=h*m+ +g[f>>2];h=k*m+ +g[i>>2];g[a+12>>2]=h;g[a+4>>2]=-0.0-h;return+m}function vd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0.0,f=0,h=0.0,i=0,j=0.0,k=0.0,l=0.0,m=0.0;d=+g[b>>2];e=+g[b+4>>2];f=b+8|0;h=+g[c+8>>2]- +g[f>>2];i=b+12|0;j=+g[i>>2];k=+g[c+12>>2]-j;l=k-(+g[c+4>>2]-e);if(l==0.0){m=0.0}else{m=(e-j)/l}g[a>>2]=d+(+g[c>>2]-d)*m;g[a+8>>2]=h*m+ +g[f>>2];h=k*m+ +g[i>>2];g[a+12>>2]=h;g[a+4>>2]=h;return+m}function wd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0,f=0.0,h=0.0,i=0,j=0.0,k=0.0,l=0.0,m=0.0;d=+g[b>>2];e=b+4|0;f=+g[c+4>>2]- +g[e>>2];h=+g[b+8>>2];i=b+12|0;j=+g[i>>2];k=+g[c+12>>2]-j;l=+g[c+8>>2]-h+k;if(l==0.0){m=0.0}else{m=(-0.0-h-j)/l}g[a>>2]=d+(+g[c>>2]-d)*m;g[a+4>>2]=f*m+ +g[e>>2];f=k*m+ +g[i>>2];g[a+12>>2]=f;g[a+8>>2]=-0.0-f;return+m}function xd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0,f=0.0,h=0.0,i=0,j=0.0,k=0.0,l=0.0,m=0.0;d=+g[b>>2];e=b+4|0;f=+g[c+4>>2]- +g[e>>2];h=+g[b+8>>2];i=b+12|0;j=+g[i>>2];k=+g[c+12>>2]-j;l=k-(+g[c+8>>2]-h);if(l==0.0){m=0.0}else{m=(h-j)/l}g[a>>2]=d+(+g[c>>2]-d)*m;g[a+4>>2]=f*m+ +g[e>>2];f=k*m+ +g[i>>2];g[a+12>>2]=f;g[a+8>>2]=f;return+m}function yd(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0.0;f=c[b+96>>2]|0;g=c[d+96>>2]|0;h=c[e+96>>2]|0;if((g|f|h|0)!=0){if((g&f&h|0)!=0){return}zd(a,b,d,e,0);return}h=c[b+100>>2]|0;f=c[b+104>>2]|0;i=+((c[d+100>>2]|0)-h|0)*+((c[e+104>>2]|0)-f|0)- +((c[e+100>>2]|0)-h|0)*+((c[d+104>>2]|0)-f|0);if(i==0.0){return}f=i<0.0|0;h=c[a+2644>>2]|0;if((c[a+2656>>2]|0)==0){if((f|0)==(h|0)){Wa[c[a+2668>>2]&15](a,b,d,e);return}else{Wa[c[a+2664>>2]&15](a,b,d,e);return}}g=c[a+2652>>2]|0;if((g|0)==1029){if((f|0)==(h|0)){return}Wa[c[a+2664>>2]&15](a,b,d,e);return}else if((g|0)==1028){if((f|0)!=(h|0)){return}Wa[c[a+2668>>2]&15](a,b,d,e);return}else{return}}function zd(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;g=i;i=i+288|0;h=g|0;j=g+144|0;k=c[b+96>>2]|0;l=c[d+96>>2]|0;m=c[e+96>>2]|0;n=l|k|m;if((n|0)==0){yd(a,b,d,e);i=g;return}if((l&k&m|0)==0){o=f}else{i=g;return}while(1){if((o|0)>=6){p=6;break}f=1<<o;if((f&n|0)==0){o=o+1|0}else{q=f;break}}do{if((p|0)==6){if((o|0)==6){i=g;return}else{q=1<<o;break}}}while(0);p=(q&k|0)==0;if((q&(l^k^m)|0)==0){if(p){r=b;s=d;t=e}else{m=(q&l|0)==0;r=m?d:e;s=m?e:b;t=m?b:d}m=632+(o<<2)|0;k=r+80|0;Ed(a,h,r,s,+Qa[c[m>>2]&15](h+80|0,k,s+80|0));Ed(a,j,r,t,+Qa[c[m>>2]&15](j+80|0,k,t+80|0));c[h>>2]=1;c[j>>2]=c[t>>2];zd(a,r,h,j,o+1|0);i=g;return}else{if(p){p=(q&l|0)==0;u=p?e:d;v=p?b:e;w=p?d:b}else{u=b;v=d;w=e}e=632+(o<<2)|0;d=u+80|0;Ed(a,h,u,v,+Qa[c[e>>2]&15](h+80|0,d,v+80|0));Ed(a,j,u,w,+Qa[c[e>>2]&15](j+80|0,d,w+80|0));d=h|0;c[d>>2]=c[u>>2];u=w|0;e=c[u>>2]|0;c[u>>2]=0;b=o+1|0;zd(a,h,v,w,b);c[j>>2]=1;c[d>>2]=0;c[u>>2]=e;zd(a,j,h,w,b);i=g;return}}function Ad(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=c[b+108>>2]|0;b=c[d+108>>2]|0;d=c[e+108>>2]|0;e=b>>>0<f>>>0?b:f;g=b>>>0>f>>>0?b:f;Ld(a,~(e>>>0>d>>>0?d:e),~(g>>>0<d>>>0?d:g));return}function Bd(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;if((c[a+2380>>2]|0)!=0){f=a|0;Zd(c[f>>2]|0,c[c[a+2376>>2]>>2]|0);_d(c[f>>2]|0,b+100|0,d+100|0,e+100|0);return}f=c[a>>2]|0;g=b+100|0;b=d+100|0;d=e+100|0;if((c[a+2648>>2]|0)==7425){Yd(f,g,b,d);return}else{Xd(f,g,b,d);return}}function Cd(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;f=(c[b>>2]|0)!=0;if((c[a+3148>>2]|0)==0){if(f){Wd(c[a>>2]|0,b+100|0,d+100|0)}if((c[d>>2]|0)!=0){Wd(c[a>>2]|0,d+100|0,e+100|0)}if((c[e>>2]|0)==0){return}Wd(c[a>>2]|0,e+100|0,b+100|0);return}else{if(f){Vd(c[a>>2]|0,b+100|0,d+100|0)}if((c[d>>2]|0)!=0){Vd(c[a>>2]|0,d+100|0,e+100|0)}if((c[e>>2]|0)==0){return}Vd(c[a>>2]|0,e+100|0,b+100|0);return}}function Dd(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if((c[b>>2]|0)!=0){Ud(c[a>>2]|0,b+100|0)}if((c[d>>2]|0)!=0){Ud(c[a>>2]|0,d+100|0)}if((c[e>>2]|0)==0){return}Ud(c[a>>2]|0,e+100|0);return}function Ed(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=+f;var h=0.0,i=0.0,j=0.0,k=0.0;h=+g[d+48>>2];if((c[a+2648>>2]|0)==7425){g[b+48>>2]=h+(+g[e+48>>2]-h)*f;i=+g[d+52>>2];g[b+52>>2]=i+(+g[e+52>>2]-i)*f;i=+g[d+56>>2];g[b+56>>2]=i+(+g[e+56>>2]-i)*f}else{g[b+48>>2]=h;g[b+52>>2]=+g[d+52>>2];g[b+56>>2]=+g[d+56>>2]}if((c[a+2380>>2]|0)!=0){h=+g[d+32>>2];g[b+32>>2]=h+(+g[e+32>>2]-h)*f;h=+g[d+36>>2];g[b+36>>2]=h+(+g[e+36>>2]-h)*f}f=+g[b+80>>2];h=+g[b+84>>2];i=+g[b+88>>2];j=+g[b+92>>2]*1.00001;k=-0.0-j;e=f<k|(j<f)<<1|(j<h)<<3|(j<i)<<5|(h<k)<<2|(i<k)<<4;c[b+96>>2]=e;if((e|0)!=0){return}pd(a,b);return}function Fd(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=pc()|0;d=b+2672|0;if((c[d>>2]|0)==7170){e=b+2692|0;f=c[b+2696>>2]|0;g=(c[e>>2]|0)==0?f:-f|0;c[e>>2]=0;c[b+2684>>2]=c[b+2676>>2];c[b+2956>>2]=0;h=g}else{h=0}if((a|0)==7168){c[d>>2]=7168;return h|0}else if((a|0)==7170){c[d>>2]=7170;c[b+2684>>2]=c[b+2676>>2];c[b+2696>>2]=0;c[b+2692>>2]=0;c[b+2688>>2]=0;return h|0}else{return h|0}return 0}function Gd(a,b){a=a|0;b=b|0;var d=0;d=pc()|0;c[d+2676>>2]=b;c[d+2680>>2]=a;return}function Hd(a,b){a=a|0;b=b|0;if((c[a+2672>>2]|0)!=7170){return}c[a+2956>>2]=0;c[a+2688>>2]=0;return}function Id(a,b){a=a|0;b=b|0;var d=0,e=0;if((c[a+2672>>2]|0)!=7170){return}d=c[b+4>>2]|0;b=a+2956|0;e=c[b>>2]|0;c[b>>2]=e+1;c[a+2700+(e<<2)>>2]=d;c[a+2688>>2]=0;return}function Jd(a,b){a=a|0;b=b|0;if((c[a+2672>>2]|0)!=7170){return}b=a+2956|0;c[b>>2]=(c[b>>2]|0)-1;c[a+2688>>2]=0;return}function Kd(a,b){a=a|0;b=b|0;if((c[a+2672>>2]|0)!=7170){return}c[a+2700+((c[a+2956>>2]|0)-1<<2)>>2]=c[b+4>>2];c[a+2688>>2]=0;return}function Ld(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=a+2692|0;if((c[e>>2]|0)!=0){return}f=a+2688|0;g=c[f>>2]|0;if((g|0)!=0){h=g+4|0;if((c[h>>2]|0)>>>0>b>>>0){c[h>>2]=b}h=g+8|0;if(!((c[h>>2]|0)>>>0<d>>>0)){return}c[h>>2]=d;return}h=c[a+2956>>2]|0;g=a+2684|0;i=c[g>>2]|0;j=h+3|0;if((j+(i-(c[a+2676>>2]|0)>>2)|0)>(c[a+2680>>2]|0)){c[e>>2]=1;return}c[f>>2]=i;c[i>>2]=h;c[i+4>>2]=b;b=i+12|0;c[i+8>>2]=d;if((h|0)>0){d=b;f=0;while(1){c[d>>2]=c[a+2700+(f<<2)>>2];e=f+1|0;if((e|0)<(h|0)){d=d+4|0;f=e}else{break}}k=i+(j<<2)|0}else{k=b}c[g>>2]=k;k=a+2696|0;c[k>>2]=(c[k>>2]|0)+1;return}function Md(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=pc()|0;switch(a|0){case 3379:{c[b>>2]=256;i=d;return};case 3384:{c[b>>2]=8;i=d;return};case 3382:{c[b>>2]=32;i=d;return};case 3377:{c[b>>2]=16;i=d;return};case 2978:{c[b>>2]=c[e+2592>>2];c[b+4>>2]=c[e+2596>>2];c[b+8>>2]=c[e+2600>>2];c[b+12>>2]=c[e+2604>>2];i=d;return};case 3385:{c[b>>2]=8;i=d;return};default:{Od(2072,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b;i=d;return}}}function Nd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0;d=i;e=pc()|0;switch(a|0){case 2982:{f=0;break};case 2834:{g[b+4>>2]=1.0;g[b>>2]=1.0;i=d;return};case 2850:{g[b+4>>2]=1.0;g[b>>2]=1.0;i=d;return};case 2983:{h=1;j=3;break};case 2849:{g[b>>2]=1.0;i=d;return};case 2984:{h=2;j=3;break};case 2833:{g[b>>2]=1.0;i=d;return};default:{te(2288,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a;i=d;return}}if((j|0)==3){f=h}h=c[e+2428+(f<<2)>>2]|0;g[b>>2]=+g[h>>2];g[b+4>>2]=+g[h+16>>2];g[b+8>>2]=+g[h+32>>2];g[b+12>>2]=+g[h+48>>2];g[b+16>>2]=+g[h+4>>2];g[b+20>>2]=+g[h+20>>2];g[b+24>>2]=+g[h+36>>2];g[b+28>>2]=+g[h+52>>2];g[b+32>>2]=+g[h+8>>2];g[b+36>>2]=+g[h+24>>2];g[b+40>>2]=+g[h+40>>2];g[b+44>>2]=+g[h+56>>2];g[b+48>>2]=+g[h+12>>2];g[b+52>>2]=+g[h+28>>2];g[b+56>>2]=+g[h+44>>2];g[b+60>>2]=+g[h+60>>2];i=d;return}function Od(a,b){a=a|0;b=b|0;return}function Pd(a,b,d,e,f,g,h){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0;g=Le(44)|0;f=g;if((g|0)==0){i=0;return i|0}c[g>>2]=a;e=g+4|0;c[e>>2]=b;c[g+12>>2]=d;j=g+8|0;c[j>>2]=a<<2;a:do{if((d|0)==3|(d|0)==4|(d|0)==1){c[g+28>>2]=0;k=Le(_(a<<1,b)|0)|0;l=g+16|0;c[l>>2]=k;if((k|0)==0){break}do{if((h|0)==0){k=Le(_(c[j>>2]|0,c[e>>2]|0)|0)|0;c[g+20>>2]=k;if((k|0)==0){Ke(c[l>>2]|0);break a}else{c[g+24>>2]=1;break}}else{c[g+24>>2]=0;c[g+20>>2]=h}}while(0);c[g+40>>2]=0;i=f;return i|0}}while(0);Ke(g);i=0;return i|0}function Qd(a){a=a|0;if((c[a+24>>2]|0)!=0){Ke(c[a+20>>2]|0)}Ke(c[a+16>>2]|0);Ke(a);return}function Rd(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=d&-4;c[a>>2]=f;d=a+4|0;c[d>>2]=e;g=a+8|0;c[g>>2]=f<<2;h=_(f<<1,e)|0;e=a+16|0;Ke(c[e>>2]|0);c[e>>2]=Le(h)|0;h=a+24|0;if((c[h>>2]|0)!=0){Ke(c[a+20>>2]|0)}if((b|0)==0){c[a+20>>2]=Le(_(c[g>>2]|0,c[d>>2]|0)|0)|0;i=1;c[h>>2]=i;return}else{c[a+20>>2]=b;i=0;c[h>>2]=i;return}}function Sd(a,d,e){a=a|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=c[a+12>>2]|0;if((f|0)==1){g=c[a+4>>2]|0;if((g|0)<=0){return}h=c[a>>2]>>2;i=-h|0;j=(((i|0)>-1?i:1073741823)+h<<2)+4|0;i=c[a+20>>2]|0;k=d;l=0;while(1){m=h;n=k;o=i;while(1){p=c[o>>2]|0;b[n>>1]=p>>>8&63488|p>>>5&2016|p>>>3&31;p=c[o+4>>2]|0;b[n+2>>1]=p>>>8&63488|p>>>5&2016|p>>>3&31;p=c[o+8>>2]|0;b[n+4>>1]=p>>>8&63488|p>>>5&2016|p>>>3&31;p=c[o+12>>2]|0;b[n+6>>1]=p>>>8&63488|p>>>5&2016|p>>>3&31;p=m-1|0;if((p|0)>0){m=p;n=n+8|0;o=o+16|0}else{break}}o=l+1|0;if((o|0)<(g|0)){i=i+(j<<2)|0;k=k+e|0;l=o}else{break}}return}else if((f|0)==3){f=c[a>>2]<<2;l=a+4|0;if((c[l>>2]|0)<=0){return}k=a+8|0;j=c[a+20>>2]|0;a=0;i=d;while(1){d=j;Qe(i|0,d|0,f)|0;g=a+1|0;if((g|0)<(c[l>>2]|0)){j=d+(c[k>>2]|0)|0;a=g;i=i+e|0}else{break}}return}else{return}}function Td(a,d,e,f,g,h,i){a=a|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;do{if((d|0)!=0){j=c[a+16>>2]|0;k=_(c[a+4>>2]|0,c[a>>2]|0)|0;l=j;m=e<<16|e;n=k>>3;if((n|0)>0){o=n<<3;p=0;q=l;while(1){c[q>>2]=m;c[q+4>>2]=m;c[q+8>>2]=m;c[q+12>>2]=m;r=p+1|0;if((r|0)<(n|0)){p=r;q=q+16|0}else{break}}s=j+(o<<1)|0}else{s=l}q=k&7;if((q|0)==0){break}p=e&65535;n=0;m=s;while(1){b[m>>1]=p;r=n+1|0;if((r|0)<(q|0)){n=r;m=m+2|0}else{break}}}}while(0);if((f|0)==0){return}f=a+4|0;if((c[f>>2]|0)<=0){return}s=g<<8&16711680|h&65280|i>>8;i=a|0;h=a+8|0;g=1;e=c[a+20>>2]|0;while(1){a=e;d=c[i>>2]|0;m=d>>2;if((m|0)>0){n=m<<2;q=0;p=e;while(1){c[p>>2]=s;c[p+4>>2]=s;c[p+8>>2]=s;c[p+12>>2]=s;k=q+1|0;if((k|0)<(m|0)){q=k;p=p+16|0}else{break}}t=e+(n<<2)|0}else{t=e}p=d&3;if((p|0)!=0){q=0;m=t;while(1){c[m>>2]=s;k=q+1|0;if((k|0)<(p|0)){q=k;m=m+4|0}else{break}}}if((g|0)>=(c[f>>2]|0)){break}g=g+1|0;e=a+(c[h>>2]|0)|0}return}function Ud(a,d){a=a|0;d=d|0;var f=0,g=0,h=0,i=0,j=0;f=c[d+4>>2]|0;g=_(c[a>>2]|0,f)|0;h=c[d>>2]|0;i=(c[a+16>>2]|0)+(g+h<<1)|0;g=c[d+8>>2]>>14;if((g|0)<(e[i>>1]|0|0)){return}j=_(c[a+8>>2]|0,f)|0;c[(c[a+20>>2]|0)+(j+(h<<2))>>2]=c[d+20>>2]<<8&16711680|c[d+24>>2]&65280|c[d+28>>2]>>8;b[i>>1]=g;return}function Vd(a,d,f){a=a|0;d=d|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,$=0,aa=0;g=c[d+20>>2]|0;h=c[d+24>>2]|0;i=c[d+28>>2]|0;j=g<<8&16711680|h&65280|i>>8;k=c[f+20>>2]|0;l=c[f+24>>2]|0;m=c[f+28>>2]|0;n=c[d+4>>2]|0;o=c[f+4>>2]|0;p=(n|0)>(o|0);if((j|0)==(k<<8&16711680|l&65280|m>>8|0)){do{if(p){q=5}else{if((n|0)!=(o|0)){r=d;s=f;t=n;u=o;break}if((c[d>>2]|0)>(c[f>>2]|0)){q=5}else{r=d;s=f;t=n;u=n}}}while(0);if((q|0)==5){r=f;s=d;t=o;u=n}v=c[a>>2]|0;w=_(c[a+8>>2]|0,t)|0;x=c[r>>2]|0;y=(c[a+20>>2]|0)+((x<<2)+w)|0;w=(c[a+16>>2]|0)+(x+(_(v,t)|0)<<1)|0;z=c[r+8>>2]|0;r=c[s>>2]|0;A=r-x|0;B=u-t|0;if((r|0)==(x|0)&(u|0)==(t|0)){t=z>>14;if((t|0)<(e[w>>1]|0|0)){return}c[y>>2]=j;b[w>>1]=t;return}if((A|0)>0){t=(c[s+8>>2]|0)-z|0;if((A|0)<(B|0)){u=(t|0)/(B|0)|0;x=A<<1;r=-(B<<1)|0;C=z;D=w;E=y;F=x-B|0;G=B;while(1){H=C>>14;if((H|0)>=(e[D>>1]|0|0)){c[E>>2]=j;b[D>>1]=H}H=(F|0)>0;I=(H&1)+v|0;if((G|0)>0){C=C+u|0;D=D+(I<<1)|0;E=E+(I<<2)|0;F=F+x+(H?r:0)|0;G=G-1|0}else{break}}return}G=(t|0)/(A|0)|0;t=B<<1;r=v+1|0;x=t-(A<<1)|0;F=z;E=w;D=y;u=t-A|0;C=A;while(1){H=F>>14;if((H|0)>=(e[E>>1]|0|0)){c[D>>2]=j;b[E>>1]=H}if((u|0)>0){J=E+(r<<1)|0;K=D+(r<<2)|0;L=x}else{J=E+2|0;K=D+4|0;L=t}if((C|0)>0){F=F+G|0;E=J;D=K;u=L+u|0;C=C-1|0}else{break}}return}else{C=-A|0;u=(c[s+8>>2]|0)-z|0;if((B|0)>(C|0)){s=(u|0)/(B|0)|0;L=C<<1;K=-(B<<1)|0;D=z;J=w;E=y;G=L-B|0;F=B;while(1){t=D>>14;if((t|0)>=(e[J>>1]|0|0)){c[E>>2]=j;b[J>>1]=t}t=(G|0)>0;x=(t<<31>>31)+v|0;if((F|0)>0){D=D+s|0;J=J+(x<<1)|0;E=E+(x<<2)|0;G=G+L+(t?K:0)|0;F=F-1|0}else{break}}return}F=(u|0)/(C|0)|0;u=B<<1;B=v-1|0;v=u-(C<<1)|0;K=z;z=w;w=y;y=A+u|0;A=C;while(1){C=K>>14;if((C|0)>=(e[z>>1]|0|0)){c[w>>2]=j;b[z>>1]=C}if((y|0)>0){M=z+(B<<1)|0;N=w+(B<<2)|0;O=v}else{M=z-2|0;N=w-4|0;O=u}if((A|0)>0){K=K+F|0;z=M;w=N;y=O+y|0;A=A-1|0}else{break}}return}}else{do{if(p){q=37}else{if((n|0)!=(o|0)){P=d;Q=f;R=n;S=o;T=k;U=l;V=m;break}if((c[d>>2]|0)>(c[f>>2]|0)){q=37}else{P=d;Q=f;R=n;S=n;T=k;U=l;V=m}}}while(0);if((q|0)==37){P=f;Q=d;R=o;S=n;T=g;U=h;V=i}i=c[a>>2]|0;h=_(c[a+8>>2]|0,R)|0;g=c[P>>2]|0;n=(c[a+20>>2]|0)+((g<<2)+h)|0;h=(c[a+16>>2]|0)+(g+(_(i,R)|0)<<1)|0;a=c[P+8>>2]|0;o=c[Q>>2]|0;d=o-g|0;f=S-R|0;q=T<<8;m=U<<8;l=V<<8;if((o|0)==(g|0)&(S|0)==(R|0)){R=a>>14;if((R|0)<(e[h>>1]|0|0)){return}c[n>>2]=q&16711680|U&65280|V>>>8&65535;b[h>>1]=R;return}if((d|0)>0){R=(c[Q+8>>2]|0)-a|0;if((d|0)<(f|0)){S=(R|0)/(f|0)|0;g=(T-(c[P+20>>2]|0)<<8|0)/(f|0)|0;o=(U-(c[P+24>>2]|0)<<8|0)/(f|0)|0;k=(V-(c[P+28>>2]|0)<<8|0)/(f|0)|0;p=d<<1;A=-(f<<1)|0;y=a;O=h;N=l;w=m;M=q;z=n;F=p-f|0;K=f;while(1){u=y>>14;if((u|0)>=(e[O>>1]|0|0)){c[z>>2]=w>>>8&65280|M&16711680|N>>>16;b[O>>1]=u}u=(F|0)>0;v=(u&1)+i|0;if((K|0)>0){y=y+S|0;O=O+(v<<1)|0;N=N+k|0;w=w+o|0;M=M+g|0;z=z+(v<<2)|0;F=F+p+(u?A:0)|0;K=K-1|0}else{break}}return}K=(R|0)/(d|0)|0;R=(T-(c[P+20>>2]|0)<<8|0)/(d|0)|0;A=(U-(c[P+24>>2]|0)<<8|0)/(d|0)|0;p=(V-(c[P+28>>2]|0)<<8|0)/(d|0)|0;F=f<<1;z=i+1|0;g=F-(d<<1)|0;M=a;o=h;w=l;k=m;N=q;O=n;S=F-d|0;y=d;while(1){u=M>>14;if((u|0)>=(e[o>>1]|0|0)){c[O>>2]=k>>>8&65280|N&16711680|w>>>16;b[o>>1]=u}if((S|0)>0){W=o+(z<<1)|0;X=O+(z<<2)|0;Y=g}else{W=o+2|0;X=O+4|0;Y=F}if((y|0)>0){M=M+K|0;o=W;w=w+p|0;k=k+A|0;N=N+R|0;O=X;S=Y+S|0;y=y-1|0}else{break}}return}else{y=-d|0;S=(c[Q+8>>2]|0)-a|0;if((f|0)>(y|0)){Q=(S|0)/(f|0)|0;Y=(T-(c[P+20>>2]|0)<<8|0)/(f|0)|0;X=(U-(c[P+24>>2]|0)<<8|0)/(f|0)|0;O=(V-(c[P+28>>2]|0)<<8|0)/(f|0)|0;R=y<<1;N=-(f<<1)|0;A=a;k=h;p=l;w=m;W=q;o=n;K=R-f|0;M=f;while(1){F=A>>14;if((F|0)>=(e[k>>1]|0|0)){c[o>>2]=w>>>8&65280|W&16711680|p>>>16;b[k>>1]=F}F=(K|0)>0;g=(F<<31>>31)+i|0;if((M|0)>0){A=A+Q|0;k=k+(g<<1)|0;p=p+O|0;w=w+X|0;W=W+Y|0;o=o+(g<<2)|0;K=K+R+(F?N:0)|0;M=M-1|0}else{break}}return}M=(S|0)/(y|0)|0;S=(T-(c[P+20>>2]|0)<<8|0)/(y|0)|0;T=(U-(c[P+24>>2]|0)<<8|0)/(y|0)|0;U=(V-(c[P+28>>2]|0)<<8|0)/(y|0)|0;P=f<<1;f=i-1|0;i=P-(y<<1)|0;V=a;a=h;h=l;l=m;m=q;q=n;n=d+P|0;d=y;while(1){y=V>>14;if((y|0)>=(e[a>>1]|0|0)){c[q>>2]=l>>>8&65280|m&16711680|h>>>16;b[a>>1]=y}if((n|0)>0){Z=a+(f<<1)|0;$=q+(f<<2)|0;aa=i}else{Z=a-2|0;$=q-4|0;aa=P}if((d|0)>0){V=V+M|0;a=Z;h=h+U|0;l=l+T|0;m=m+S|0;q=$;n=aa+n|0;d=d-1|0}else{break}}return}}}function Wd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0;e=c[b+20>>2]|0;f=c[b+24>>2]|0;g=c[b+28>>2]|0;h=e<<8&16711680|f&65280|g>>8;i=c[d+20>>2]|0;j=c[d+24>>2]|0;k=c[d+28>>2]|0;l=c[b+4>>2]|0;m=c[d+4>>2]|0;n=(l|0)>(m|0);if((h|0)==(i<<8&16711680|j&65280|k>>8|0)){do{if(n){o=5}else{if((l|0)!=(m|0)){p=b;q=d;r=l;s=m;break}if((c[b>>2]|0)>(c[d>>2]|0)){o=5}else{p=b;q=d;r=l;s=l}}}while(0);if((o|0)==5){p=d;q=b;r=m;s=l}t=c[a>>2]|0;u=_(c[a+8>>2]|0,r)|0;v=c[p>>2]|0;p=(c[a+20>>2]|0)+((v<<2)+u)|0;u=c[q>>2]|0;q=u-v|0;w=s-r|0;if((u|0)==(v|0)&(s|0)==(r|0)){c[p>>2]=h;return}if((q|0)>0){if((q|0)<(w|0)){r=q<<1;s=(t<<2)+4|0;v=r-(w<<1)|0;u=p;x=r-w|0;y=w;while(1){c[u>>2]=h;if((x|0)>0){z=u+s|0;A=v}else{z=u+(t<<2)|0;A=r}if((y|0)>0){u=z;x=A+x|0;y=y-1|0}else{break}}return}else{y=w<<1;x=(t<<2)+4|0;A=y-(q<<1)|0;z=p;u=y-q|0;r=q;while(1){c[z>>2]=h;if((u|0)>0){B=z+x|0;C=A}else{B=z+4|0;C=y}if((r|0)>0){z=B;u=C+u|0;r=r-1|0}else{break}}return}}else{r=-q|0;if((w|0)>(r|0)){u=r<<1;C=(t<<2)-4|0;B=u-(w<<1)|0;z=p;y=u-w|0;A=w;while(1){c[z>>2]=h;if((y|0)>0){D=z+C|0;E=B}else{D=z+(t<<2)|0;E=u}if((A|0)>0){z=D;y=E+y|0;A=A-1|0}else{break}}return}else{A=w<<1;w=(t<<2)-4|0;t=A-(r<<1)|0;y=p;p=q+A|0;q=r;while(1){c[y>>2]=h;if((p|0)>0){F=y+w|0;G=t}else{F=y-4|0;G=A}if((q|0)>0){y=F;p=G+p|0;q=q-1|0}else{break}}return}}}else{do{if(n){o=34}else{if((l|0)!=(m|0)){H=b;I=d;J=l;K=m;L=i;M=j;N=k;break}if((c[b>>2]|0)>(c[d>>2]|0)){o=34}else{H=b;I=d;J=l;K=l;L=i;M=j;N=k}}}while(0);if((o|0)==34){H=d;I=b;J=m;K=l;L=e;M=f;N=g}g=c[a>>2]|0;f=_(c[a+8>>2]|0,J)|0;e=c[H>>2]|0;l=(c[a+20>>2]|0)+((e<<2)+f)|0;f=c[I>>2]|0;I=f-e|0;a=K-J|0;m=L<<8;b=M<<8;d=N<<8;if((f|0)==(e|0)&(K|0)==(J|0)){c[l>>2]=m&16711680|M&65280|N>>>8&65535;return}if((I|0)>0){J=L-(c[H+20>>2]|0)<<8;if((I|0)<(a|0)){K=(J|0)/(a|0)|0;e=(M-(c[H+24>>2]|0)<<8|0)/(a|0)|0;f=(N-(c[H+28>>2]|0)<<8|0)/(a|0)|0;o=I<<1;k=(g<<2)+4|0;j=o-(a<<1)|0;i=d;n=b;q=m;p=l;G=o-a|0;F=a;while(1){c[p>>2]=n>>>8&65280|q&16711680|i>>>16;if((G|0)>0){O=p+k|0;P=j}else{O=p+(g<<2)|0;P=o}if((F|0)>0){i=i+f|0;n=n+e|0;q=q+K|0;p=O;G=P+G|0;F=F-1|0}else{break}}return}else{F=(J|0)/(I|0)|0;J=(M-(c[H+24>>2]|0)<<8|0)/(I|0)|0;G=(N-(c[H+28>>2]|0)<<8|0)/(I|0)|0;P=a<<1;O=(g<<2)+4|0;p=P-(I<<1)|0;K=d;q=b;e=m;n=l;f=P-I|0;i=I;while(1){c[n>>2]=q>>>8&65280|e&16711680|K>>>16;if((f|0)>0){Q=n+O|0;R=p}else{Q=n+4|0;R=P}if((i|0)>0){K=K+G|0;q=q+J|0;e=e+F|0;n=Q;f=R+f|0;i=i-1|0}else{break}}return}}else{i=-I|0;f=L-(c[H+20>>2]|0)<<8;if((a|0)>(i|0)){L=(f|0)/(a|0)|0;R=(M-(c[H+24>>2]|0)<<8|0)/(a|0)|0;Q=(N-(c[H+28>>2]|0)<<8|0)/(a|0)|0;n=i<<1;F=(g<<2)-4|0;e=n-(a<<1)|0;J=d;q=b;G=m;K=l;P=n-a|0;p=a;while(1){c[K>>2]=q>>>8&65280|G&16711680|J>>>16;if((P|0)>0){S=K+F|0;T=e}else{S=K+(g<<2)|0;T=n}if((p|0)>0){J=J+Q|0;q=q+R|0;G=G+L|0;K=S;P=T+P|0;p=p-1|0}else{break}}return}else{p=(f|0)/(i|0)|0;f=(M-(c[H+24>>2]|0)<<8|0)/(i|0)|0;M=(N-(c[H+28>>2]|0)<<8|0)/(i|0)|0;H=a<<1;a=(g<<2)-4|0;g=H-(i<<1)|0;N=d;d=b;b=m;m=l;l=I+H|0;I=i;while(1){c[m>>2]=d>>>8&65280|b&16711680|N>>>16;if((l|0)>0){U=m+a|0;V=g}else{U=m-4|0;V=H}if((I|0)>0){N=N+M|0;d=d+f|0;b=b+p|0;m=U;l=V+l|0;I=I-1|0}else{break}}return}}}}function Xd(a,d,f,g){a=a|0;d=d|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0.0,q=0.0,r=0.0,s=0.0,t=0.0,u=0.0,v=0.0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0;h=(c[f+4>>2]|0)<(c[d+4>>2]|0);i=h?d:f;j=h?f:d;d=c[g+4>>2]|0;f=c[j+4>>2]|0;if((d|0)<(f|0)){k=g;l=j;m=i;n=f;o=d}else{h=(d|0)<(c[i+4>>2]|0);d=h?g:i;k=j;l=d;m=h?i:g;n=c[d+4>>2]|0;o=f}f=c[k>>2]|0;p=+((c[l>>2]|0)-f|0);d=l+4|0;g=k+4|0;q=+(n-o|0);r=+((c[m>>2]|0)-f|0);f=m+4|0;s=+((c[f>>2]|0)-o|0);t=p*s-q*r;if(t==0.0){return}u=1.0/t;n=c[k+8>>2]|0;t=+((c[l+8>>2]|0)-n|0);v=+((c[m+8>>2]|0)-n|0);n=~~(s*u*t-q*u*v);i=~~(p*u*v-r*u*t);h=a+8|0;j=(c[a+20>>2]|0)+(_(c[h>>2]|0,o)|0)|0;w=a|0;x=(c[a+16>>2]|0)+((_(c[w>>2]|0,o)|0)<<1)|0;o=c[m+20>>2]<<8&16711680|c[m+24>>2]&65280|c[m+28>>2]>>8;a=u>0.0;y=a?m:l;z=a?l:m;A=a&1;B=0;C=0;D=x;x=j;j=0;E=0;F=0;G=0;H=0;I=0;J=0;K=0;L=0;M=0;N=0;O=0;P=0;while(1){do{if((j|0)==0){Q=c[g>>2]|0;R=y;S=k;T=1;U=(c[d>>2]|0)-Q|0;V=z;W=k;X=Q;Y=9}else{Q=a?B:m;Z=a?C:l;$=a?m:E;aa=a?l:F;ba=(c[f>>2]|0)-(c[d>>2]|0)+1|0;if(a){ca=P;da=O;ea=N;fa=K;ga=J;ha=I;ia=H;ja=G;ka=Q;la=Z;ma=A;na=ba;oa=$;pa=aa;break}R=Q;S=Z;T=A;U=ba;V=$;W=aa;X=c[Z+4>>2]|0;Y=9}}while(0);if((Y|0)==9){Y=0;Z=(c[R+4>>2]|0)-X|0;aa=S|0;if((Z|0)>0){$=c[aa>>2]|0;qa=((c[R>>2]|0)-$<<16|0)/(Z|0)|0;ra=$}else{qa=0;ra=c[aa>>2]|0}aa=qa>>16;$=(_(aa,n)|0)+i|0;ca=$+n|0;da=$;ea=c[S+8>>2]|0;fa=aa+1|0;ga=aa;ha=ra;ia=qa&65535;ja=0;ka=R;la=S;ma=T;na=U;oa=V;pa=W}if((ma|0)==0){sa=M;ta=L}else{aa=pa|0;$=(c[oa+4>>2]|0)-(c[pa+4>>2]|0)|0;if(($|0)>0){Z=c[aa>>2]|0;ua=((c[oa>>2]|0)-Z<<16|0)/($|0)|0;va=Z}else{ua=0;va=c[aa>>2]|0}sa=ua;ta=va<<16}if((na|0)>0){aa=_(sa,na)|0;Z=D;$=x;ba=na;Q=ja;wa=ha;xa=ta;ya=ea;while(1){za=ba-1|0;Aa=xa>>16;Ba=Aa-wa|0;Ca=$;Da=$+(wa<<2)|0;Ea=Z+(wa<<1)|0;if((Ba|0)>2){Fa=Aa-3-wa&-4;Ga=Aa-4-wa-Fa|0;Aa=wa+Fa|0;Ha=_(n,Fa+4|0)|0;Fa=Da;Ia=Ba;Ja=Ea;Ka=ya;while(1){La=Ka>>>14;if(!(La>>>0<(e[Ja>>1]|0)>>>0)){c[Fa>>2]=o;b[Ja>>1]=La}La=Ka+n|0;Ma=La>>>14;Na=Ja+2|0;if(!(Ma>>>0<(e[Na>>1]|0)>>>0)){c[Fa+4>>2]=o;b[Na>>1]=Ma}Ma=La+n|0;La=Ma>>>14;Na=Ja+4|0;if(!(La>>>0<(e[Na>>1]|0)>>>0)){c[Fa+8>>2]=o;b[Na>>1]=La}La=Ma+n|0;Ma=La>>>14;Na=Ja+6|0;if(!(Ma>>>0<(e[Na>>1]|0)>>>0)){c[Fa+12>>2]=o;b[Na>>1]=Ma}Ma=Ia-4|0;if((Ma|0)>2){Fa=Fa+16|0;Ia=Ma;Ja=Ja+8|0;Ka=La+n|0}else{break}}Oa=$+(Aa+4<<2)|0;Pa=Ga;Qa=Z+(Aa+4<<1)|0;Ra=ya+Ha|0}else{Oa=Da;Pa=Ba;Qa=Ea;Ra=ya}if((Pa|0)>-1){Ka=Oa;Ja=Pa;Ia=Qa;Fa=Ra;while(1){La=Fa>>>14;if(!(La>>>0<(e[Ia>>1]|0)>>>0)){c[Ka>>2]=o;b[Ia>>1]=La}if((Ja|0)>0){Ka=Ka+4|0;Ja=Ja-1|0;Ia=Ia+2|0;Fa=Fa+n|0}else{break}}}Fa=Q+ia|0;Ia=(Fa|0)>0;Sa=Ia?Fa-65536|0:Fa;Ta=ya+(Ia?ca:da)|0;Ua=(Ia?fa:ga)+wa|0;Va=Ca+(c[h>>2]|0)|0;Wa=Z+(c[w>>2]<<1)|0;if((za|0)>0){Z=Wa;$=Va;ba=za;Q=Sa;wa=Ua;xa=sa+xa|0;ya=Ta}else{break}}Xa=Wa;Ya=Va;Za=Sa;_a=Ua;$a=ta+aa|0;ab=Ta}else{Xa=D;Ya=x;Za=ja;_a=ha;$a=ta;ab=ea}ya=j+1|0;if((ya|0)<2){B=ka;C=la;D=Xa;x=Ya;j=ya;E=oa;F=pa;G=Za;H=ia;I=_a;J=ga;K=fa;L=$a;M=sa;N=ab;O=da;P=ca}else{break}}return}function Yd(a,d,f,g){a=a|0;d=d|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0.0,q=0.0,r=0.0,s=0.0,t=0.0,u=0.0,v=0.0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0,bb=0,cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=0,lb=0,mb=0,nb=0,ob=0,pb=0,qb=0,rb=0,sb=0,tb=0,ub=0,vb=0,wb=0,xb=0,yb=0,zb=0,Ab=0,Bb=0,Cb=0,Db=0,Eb=0,Fb=0,Gb=0,Hb=0,Ib=0,Jb=0,Kb=0,Lb=0,Mb=0,Nb=0,Ob=0,Pb=0,Qb=0,Rb=0,Sb=0;h=(c[f+4>>2]|0)<(c[d+4>>2]|0);i=h?d:f;j=h?f:d;d=c[g+4>>2]|0;f=c[j+4>>2]|0;if((d|0)<(f|0)){k=g;l=j;m=i;n=f;o=d}else{h=(d|0)<(c[i+4>>2]|0);d=h?g:i;k=j;l=d;m=h?i:g;n=c[d+4>>2]|0;o=f}f=c[k>>2]|0;p=+((c[l>>2]|0)-f|0);d=l+4|0;g=k+4|0;q=+(n-o|0);r=+((c[m>>2]|0)-f|0);f=m+4|0;s=+((c[f>>2]|0)-o|0);t=p*s-q*r;if(t==0.0){return}u=1.0/t;t=p*u;p=q*u;q=r*u;r=s*u;n=c[k+8>>2]|0;s=+((c[l+8>>2]|0)-n|0);v=+((c[m+8>>2]|0)-n|0);n=~~(r*s-p*v);i=~~(t*v-q*s);h=c[k+20>>2]|0;s=+((c[l+20>>2]|0)-h|0);v=+((c[m+20>>2]|0)-h|0);h=~~(r*s-p*v);j=~~(t*v-q*s);w=c[k+24>>2]|0;s=+((c[l+24>>2]|0)-w|0);v=+((c[m+24>>2]|0)-w|0);w=~~(r*s-p*v);x=~~(t*v-q*s);y=c[k+28>>2]|0;s=+((c[l+28>>2]|0)-y|0);v=+((c[m+28>>2]|0)-y|0);y=~~(r*s-p*v);z=~~(t*v-q*s);A=a+8|0;B=(c[a+20>>2]|0)+(_(c[A>>2]|0,o)|0)|0;C=a|0;D=(c[a+16>>2]|0)+((_(c[C>>2]|0,o)|0)<<1)|0;o=u>0.0;a=o?m:l;E=o?l:m;F=o&1;G=D;D=B;B=0;H=0;I=0;J=0;K=0;L=0;M=0;N=0;O=0;P=0;Q=0;R=0;S=0;T=0;U=0;V=0;W=0;X=0;Y=0;Z=0;$=0;aa=0;ba=0;ca=0;while(1){do{if((B|0)==0){da=c[g>>2]|0;ea=1;fa=(c[d>>2]|0)-da|0;ga=a;ha=k;ia=E;ja=k;ka=da;la=9}else{da=o?P:m;ma=o?Q:l;na=o?m:U;oa=o?l:V;pa=(c[f>>2]|0)-(c[d>>2]|0)+1|0;if(o){qa=ca;ra=ba;sa=aa;ta=$;ua=Z;va=Y;wa=X;xa=W;ya=T;za=S;Aa=R;Ba=O;Ca=L;Da=K;Ea=J;Fa=I;Ga=H;Ha=F;Ia=pa;Ja=da;Ka=ma;La=na;Ma=oa;break}ea=F;fa=pa;ga=da;ha=ma;ia=na;ja=oa;ka=c[ma+4>>2]|0;la=9}}while(0);if((la|0)==9){la=0;ma=(c[ga+4>>2]|0)-ka|0;oa=ha|0;if((ma|0)>0){na=c[oa>>2]|0;Na=((c[ga>>2]|0)-na<<16|0)/(ma|0)|0;Oa=na}else{Na=0;Oa=c[oa>>2]|0}oa=Na>>16;na=(_(oa,n)|0)+i|0;ma=(_(oa,h)|0)+j|0;da=(_(oa,w)|0)+x|0;pa=(_(oa,y)|0)+z|0;qa=pa+y|0;ra=pa;sa=c[ha+28>>2]|0;ta=da+w|0;ua=da;va=c[ha+24>>2]|0;wa=ma+h|0;xa=ma;ya=c[ha+20>>2]|0;za=na+n|0;Aa=na;Ba=c[ha+8>>2]|0;Ca=oa+1|0;Da=oa;Ea=Oa;Fa=Na&65535;Ga=0;Ha=ea;Ia=fa;Ja=ga;Ka=ha;La=ia;Ma=ja}if((Ha|0)==0){Pa=N;Qa=M}else{oa=Ma|0;na=(c[La+4>>2]|0)-(c[Ma+4>>2]|0)|0;if((na|0)>0){ma=c[oa>>2]|0;Ra=((c[La>>2]|0)-ma<<16|0)/(na|0)|0;Sa=ma}else{Ra=0;Sa=c[oa>>2]|0}Pa=Ra;Qa=Sa<<16}if((Ia|0)>0){oa=_(Pa,Ia)|0;ma=G;na=D;da=Ia;pa=Ga;Ta=Ea;Ua=Qa;Va=Ba;Wa=ya;Xa=va;Ya=sa;while(1){Za=da-1|0;_a=Ua>>16;$a=_a-Ta|0;ab=na;bb=na+(Ta<<2)|0;cb=ma+(Ta<<1)|0;if(($a|0)>2){db=_a-3-Ta&-4;eb=_a-4-Ta-db|0;_a=Ta+db|0;fb=db+4|0;db=_(y,fb)|0;gb=_(h,fb)|0;hb=_(w,fb)|0;ib=_(n,fb)|0;fb=bb;jb=$a;kb=cb;lb=Va;mb=Wa;nb=Xa;ob=Ya;while(1){pb=lb>>>14;if(!(pb>>>0<(e[kb>>1]|0)>>>0)){c[fb>>2]=mb<<8&16711680|nb&65280|ob>>>8;b[kb>>1]=pb}pb=lb+n|0;qb=nb+w|0;rb=mb+h|0;sb=ob+y|0;tb=pb>>>14;ub=kb+2|0;if(!(tb>>>0<(e[ub>>1]|0)>>>0)){c[fb+4>>2]=rb<<8&16711680|qb&65280|sb>>>8;b[ub>>1]=tb}tb=pb+n|0;pb=qb+w|0;qb=rb+h|0;rb=sb+y|0;sb=tb>>>14;ub=kb+4|0;if(!(sb>>>0<(e[ub>>1]|0)>>>0)){c[fb+8>>2]=qb<<8&16711680|pb&65280|rb>>>8;b[ub>>1]=sb}sb=tb+n|0;tb=pb+w|0;pb=qb+h|0;qb=rb+y|0;rb=sb>>>14;ub=kb+6|0;if(!(rb>>>0<(e[ub>>1]|0)>>>0)){c[fb+12>>2]=pb<<8&16711680|tb&65280|qb>>>8;b[ub>>1]=rb}rb=jb-4|0;if((rb|0)>2){fb=fb+16|0;jb=rb;kb=kb+8|0;lb=sb+n|0;mb=pb+h|0;nb=tb+w|0;ob=qb+y|0}else{break}}vb=na+(_a+4<<2)|0;wb=eb;xb=ma+(_a+4<<1)|0;yb=Va+ib|0;zb=Wa+gb|0;Ab=Xa+hb|0;Bb=Ya+db|0}else{vb=bb;wb=$a;xb=cb;yb=Va;zb=Wa;Ab=Xa;Bb=Ya}if((wb|0)>-1){ob=vb;nb=wb;mb=xb;lb=yb;kb=zb;jb=Ab;fb=Bb;while(1){qb=lb>>>14;if(!(qb>>>0<(e[mb>>1]|0)>>>0)){c[ob>>2]=kb<<8&16711680|jb&65280|fb>>>8;b[mb>>1]=qb}if((nb|0)>0){ob=ob+4|0;nb=nb-1|0;mb=mb+2|0;lb=lb+n|0;kb=kb+h|0;jb=jb+w|0;fb=fb+y|0}else{break}}}fb=pa+Fa|0;jb=(fb|0)>0;Cb=jb?fb-65536|0:fb;Db=Ya+(jb?qa:ra)|0;Eb=Xa+(jb?ta:ua)|0;Fb=Wa+(jb?wa:xa)|0;Gb=Va+(jb?za:Aa)|0;Hb=(jb?Ca:Da)+Ta|0;Ib=ab+(c[A>>2]|0)|0;Jb=ma+(c[C>>2]<<1)|0;if((Za|0)>0){ma=Jb;na=Ib;da=Za;pa=Cb;Ta=Hb;Ua=Pa+Ua|0;Va=Gb;Wa=Fb;Xa=Eb;Ya=Db}else{break}}Kb=Jb;Lb=Ib;Mb=Cb;Nb=Hb;Ob=Qa+oa|0;Pb=Gb;Qb=Fb;Rb=Eb;Sb=Db}else{Kb=G;Lb=D;Mb=Ga;Nb=Ea;Ob=Qa;Pb=Ba;Qb=ya;Rb=va;Sb=sa}Ya=B+1|0;if((Ya|0)<2){G=Kb;D=Lb;B=Ya;H=Mb;I=Fa;J=Nb;K=Da;L=Ca;M=Ob;N=Pa;O=Pb;P=Ja;Q=Ka;R=Aa;S=za;T=Qb;U=La;V=Ma;W=xa;X=wa;Y=Rb;Z=ua;$=ta;aa=Sb;ba=ra;ca=qa}else{break}}return}function Zd(a,b){a=a|0;b=b|0;c[a+40>>2]=b;return}function _d(a,d,f,h){a=a|0;d=d|0;f=f|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0.0,r=0.0,s=0.0,t=0.0,u=0.0,v=0.0,w=0.0,x=0,y=0,z=0,A=0.0,B=0.0,C=0.0,D=0.0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0.0,T=0,U=0,V=0.0,W=0.0,X=0,Y=0,Z=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0.0,la=0.0,ma=0.0,na=0.0,oa=0.0,pa=0.0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0.0,Ha=0.0,Ia=0.0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0.0,Xa=0.0,Ya=0.0,Za=0,_a=0,$a=0,ab=0,bb=0,cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=0,lb=0,mb=0,nb=0,ob=0,pb=0,qb=0.0,rb=0.0,sb=0.0,tb=0.0,ub=0.0,vb=0,wb=0,xb=0,yb=0,zb=0,Ab=0,Bb=0,Cb=0,Db=0,Eb=0,Fb=0,Gb=0,Hb=0,Ib=0.0,Jb=0.0,Kb=0,Lb=0,Mb=0,Nb=0,Ob=0,Pb=0,Qb=0,Rb=0,Sb=0,Tb=0,Ub=0.0,Vb=0.0;i=(c[f+4>>2]|0)<(c[d+4>>2]|0);j=i?d:f;k=i?f:d;d=c[h+4>>2]|0;f=c[k+4>>2]|0;if((d|0)<(f|0)){l=h;m=k;n=j;o=f;p=d}else{i=(d|0)<(c[j+4>>2]|0);d=i?h:j;l=k;m=d;n=i?j:h;o=c[d+4>>2]|0;p=f}f=c[l>>2]|0;q=+((c[m>>2]|0)-f|0);d=m+4|0;h=l+4|0;r=+(o-p|0);s=+((c[n>>2]|0)-f|0);f=n+4|0;t=+((c[f>>2]|0)-p|0);u=q*t-r*s;if(u==0.0){return}v=1.0/u;u=q*v;q=r*v;r=s*v;s=t*v;o=c[m+8>>2]|0;j=c[l+8>>2]|0;t=+(o-j|0);i=c[n+8>>2]|0;w=+(i-j|0);k=~~(s*t-q*w);x=~~(u*w-r*t);t=+(j|0);j=l+32|0;g[j>>2]=t*+(c[l+12>>2]|0);y=l+36|0;g[y>>2]=t*+(c[l+16>>2]|0);t=+(o|0);o=m+32|0;g[o>>2]=t*+(c[m+12>>2]|0);z=m+36|0;g[z>>2]=t*+(c[m+16>>2]|0);t=+(i|0);w=t*+(c[n+12>>2]|0);g[n+32>>2]=w;A=t*+(c[n+16>>2]|0);g[n+36>>2]=A;t=+g[j>>2];B=+g[o>>2]-t;C=w-t;t=s*B-q*C;w=u*C-r*B;B=+g[y>>2];C=+g[z>>2]-B;D=A-B;B=s*C-q*D;q=u*D-r*C;z=a+8|0;y=(c[a+20>>2]|0)+(_(p,c[z>>2]|0)|0)|0;o=a|0;j=(c[a+16>>2]|0)+((_(c[o>>2]|0,p)|0)<<1)|0;C=+(k|0);r=C*8.0;D=t*8.0;u=B*8.0;p=v>0.0;i=p?n:m;E=p?m:n;F=c[a+40>>2]|0;a=p&1;G=0;H=y;y=j;j=0;I=0;J=0;K=0;L=0;M=0;N=0;O=0;P=0;Q=0;v=0.0;R=0;s=0.0;A=0.0;S=0.0;T=0;U=0;V=0.0;W=0.0;X=0;while(1){do{if((G|0)==0){Y=c[h>>2]|0;Z=1;$=(c[d>>2]|0)-Y|0;aa=i;ba=l;ca=E;da=l;ea=Y;fa=9}else{Y=p?R:n;ga=p?T:m;ha=p?n:U;ia=p?m:X;ja=(c[f>>2]|0)-(c[d>>2]|0)+1|0;if(p){ka=W;la=V;ma=S;na=A;oa=s;pa=v;qa=Q;ra=P;sa=O;ta=L;ua=K;va=J;wa=I;xa=j;ya=a;za=ja;Aa=Y;Ba=ga;Ca=ha;Da=ia;break}Z=a;$=ja;aa=Y;ba=ga;ca=ha;da=ia;ea=c[ga+4>>2]|0;fa=9}}while(0);if((fa|0)==9){fa=0;ga=(c[aa+4>>2]|0)-ea|0;ia=ba|0;if((ga|0)>0){ha=c[ia>>2]|0;Ea=((c[aa>>2]|0)-ha<<16|0)/(ga|0)|0;Fa=ha}else{Ea=0;Fa=c[ia>>2]|0}ia=Ea>>16;ha=(_(ia,k)|0)+x|0;Ga=+(ia|0);Ha=w+t*Ga;Ia=q+B*Ga;ka=B+Ia;la=Ia;ma=+g[ba+36>>2];na=t+Ha;oa=Ha;pa=+g[ba+32>>2];qa=ha+k|0;ra=ha;sa=c[ba+8>>2]|0;ta=ia+1|0;ua=ia;va=Fa;wa=Ea&65535;xa=0;ya=Z;za=$;Aa=aa;Ba=ba;Ca=ca;Da=da}if((ya|0)==0){Ja=N;Ka=M}else{ia=Da|0;ha=(c[Ca+4>>2]|0)-(c[Da+4>>2]|0)|0;if((ha|0)>0){ga=c[ia>>2]|0;La=((c[Ca>>2]|0)-ga<<16|0)/(ha|0)|0;Ma=ga}else{La=0;Ma=c[ia>>2]|0}Ja=La;Ka=Ma<<16}if((za|0)>0){ia=_(Ja,za)|0;ga=za;ha=H;Y=y;ja=xa;Na=va;Oa=Ka;Pa=sa;Ha=pa;Ia=ma;while(1){Qa=ga-1|0;Ra=Oa>>16;Sa=Ra-Na|0;Ga=+(Pa|0);Ta=ha;Ua=ha+(Na<<2)|0;Va=Y+(Na<<1)|0;Wa=1.0/Ga;Xa=Ha*Wa;Ya=Ia*Wa;Za=~~Xa;_a=~~Ya;$a=~~(Wa*(t-C*Xa));ab=~~(Wa*(B-C*Ya));if((Sa|0)>6){bb=Ra-7-Na&-8;cb=Ra-8-Na-bb|0;Ra=Na+bb|0;db=_(k,bb+8|0)|0;bb=Va;eb=Ua;fb=Pa;gb=Sa;Ya=Ha;Wa=Ia;Xa=Ga;hb=Za;ib=_a;jb=$a;kb=ab;while(1){Ga=r+Xa;lb=fb>>>14;if(!(lb>>>0<(e[bb>>1]|0)>>>0)){c[eb>>2]=c[F+((ib&1069547520|hb&4177920)>>>12)>>2];b[bb>>1]=lb}lb=fb+k|0;mb=jb+hb|0;nb=kb+ib|0;ob=lb>>>14;pb=bb+2|0;if(!(ob>>>0<(e[pb>>1]|0)>>>0)){c[eb+4>>2]=c[F+((nb&1069547520|mb&4177920)>>>12)>>2];b[pb>>1]=ob}ob=lb+k|0;lb=mb+jb|0;mb=nb+kb|0;nb=ob>>>14;pb=bb+4|0;if(!(nb>>>0<(e[pb>>1]|0)>>>0)){c[eb+8>>2]=c[F+((mb&1069547520|lb&4177920)>>>12)>>2];b[pb>>1]=nb}nb=ob+k|0;ob=lb+jb|0;lb=mb+kb|0;mb=nb>>>14;pb=bb+6|0;if(!(mb>>>0<(e[pb>>1]|0)>>>0)){c[eb+12>>2]=c[F+((lb&1069547520|ob&4177920)>>>12)>>2];b[pb>>1]=mb}mb=nb+k|0;nb=ob+jb|0;ob=lb+kb|0;lb=mb>>>14;pb=bb+8|0;if(!(lb>>>0<(e[pb>>1]|0)>>>0)){c[eb+16>>2]=c[F+((ob&1069547520|nb&4177920)>>>12)>>2];b[pb>>1]=lb}lb=mb+k|0;mb=nb+jb|0;nb=ob+kb|0;ob=lb>>>14;pb=bb+10|0;if(!(ob>>>0<(e[pb>>1]|0)>>>0)){c[eb+20>>2]=c[F+((nb&1069547520|mb&4177920)>>>12)>>2];b[pb>>1]=ob}ob=lb+k|0;lb=mb+jb|0;mb=nb+kb|0;nb=ob>>>14;pb=bb+12|0;if(!(nb>>>0<(e[pb>>1]|0)>>>0)){c[eb+24>>2]=c[F+((mb&1069547520|lb&4177920)>>>12)>>2];b[pb>>1]=nb}nb=ob+k|0;ob=nb>>>14;pb=bb+14|0;if(!(ob>>>0<(e[pb>>1]|0)>>>0)){c[eb+28>>2]=c[F+((mb+kb&1069547520|lb+jb&4177920)>>>12)>>2];b[pb>>1]=ob}ob=gb-8|0;qb=D+Ya;rb=u+Wa;sb=1.0/Ga;tb=qb*sb;ub=rb*sb;vb=~~tb;wb=~~ub;xb=~~(sb*(t-C*tb));yb=~~(sb*(B-C*ub));if((ob|0)>6){bb=bb+16|0;eb=eb+32|0;fb=nb+k|0;gb=ob;Ya=qb;Wa=rb;Xa=Ga;hb=vb;ib=wb;jb=xb;kb=yb}else{break}}zb=Y+(Ra+8<<1)|0;Ab=ha+(Ra+8<<2)|0;Bb=Pa+db|0;Cb=cb;Db=vb;Eb=wb;Fb=xb;Gb=yb}else{zb=Va;Ab=Ua;Bb=Pa;Cb=Sa;Db=Za;Eb=_a;Fb=$a;Gb=ab}if((Cb|0)>-1){kb=zb;jb=Ab;ib=Db;hb=Eb;gb=Bb;fb=Cb;while(1){eb=gb>>>14;if(!(eb>>>0<(e[kb>>1]|0)>>>0)){c[jb>>2]=c[F+((hb&1069547520|ib&4177920)>>>12)>>2];b[kb>>1]=eb}if((fb|0)>0){kb=kb+2|0;jb=jb+4|0;ib=ib+Fb|0;hb=hb+Gb|0;gb=gb+k|0;fb=fb-1|0}else{break}}}fb=ja+wa|0;gb=(fb|0)>0;Hb=gb?fb-65536|0:fb;Ib=(gb?ka:la)+Ia;Jb=(gb?na:oa)+Ha;Kb=Pa+(gb?qa:ra)|0;Lb=(gb?ta:ua)+Na|0;Mb=Ta+(c[z>>2]|0)|0;Nb=Y+(c[o>>2]<<1)|0;if((Qa|0)>0){ga=Qa;ha=Mb;Y=Nb;ja=Hb;Na=Lb;Oa=Ja+Oa|0;Pa=Kb;Ha=Jb;Ia=Ib}else{break}}Ob=Mb;Pb=Nb;Qb=Hb;Rb=Lb;Sb=Ka+ia|0;Tb=Kb;Ub=Jb;Vb=Ib}else{Ob=H;Pb=y;Qb=xa;Rb=va;Sb=Ka;Tb=sa;Ub=pa;Vb=ma}Pa=G+1|0;if((Pa|0)<2){G=Pa;H=Ob;y=Pb;j=Qb;I=wa;J=Rb;K=ua;L=ta;M=Sb;N=Ja;O=Tb;P=ra;Q=qa;v=Ub;R=Aa;s=oa;A=na;S=Vb;T=Ba;U=Ca;V=la;W=ka;X=Da}else{break}}return}function $d(a){a=a|0;g[a>>2]=1.0;Re(a+4|0,0,16)|0;g[a+20>>2]=1.0;Re(a+24|0,0,16)|0;g[a+40>>2]=1.0;Re(a+44|0,0,16)|0;g[a+60>>2]=1.0;return}function ae(a){a=a|0;var b=0;do{if(+g[a>>2]!=1.0){b=0}else{if(+g[a+4>>2]!=0.0){b=0;break}if(+g[a+8>>2]!=0.0){b=0;break}if(+g[a+12>>2]!=0.0){b=0;break}if(+g[a+16>>2]!=0.0){b=0;break}if(+g[a+20>>2]!=1.0){b=0;break}if(+g[a+24>>2]!=0.0){b=0;break}if(+g[a+28>>2]!=0.0){b=0;break}if(+g[a+32>>2]!=0.0){b=0;break}if(+g[a+36>>2]!=0.0){b=0;break}if(+g[a+40>>2]!=1.0){b=0;break}if(+g[a+44>>2]!=0.0){b=0;break}if(+g[a+48>>2]!=0.0){b=0;break}if(+g[a+52>>2]!=0.0){b=0;break}if(+g[a+56>>2]!=0.0){b=0;break}if(+g[a+60>>2]!=1.0){b=0;break}b=1}}while(0);return b|0}function be(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,h=0,i=0;d=0;do{e=b+(d<<4)|0;f=b+(d<<4)+4|0;h=b+(d<<4)+8|0;i=b+(d<<4)+12|0;g[a+(d<<4)>>2]=+g[e>>2]*+g[c>>2]+0.0+ +g[f>>2]*+g[c+16>>2]+ +g[h>>2]*+g[c+32>>2]+ +g[i>>2]*+g[c+48>>2];g[a+(d<<4)+4>>2]=+g[e>>2]*+g[c+4>>2]+0.0+ +g[f>>2]*+g[c+20>>2]+ +g[h>>2]*+g[c+36>>2]+ +g[i>>2]*+g[c+52>>2];g[a+(d<<4)+8>>2]=+g[e>>2]*+g[c+8>>2]+0.0+ +g[f>>2]*+g[c+24>>2]+ +g[h>>2]*+g[c+40>>2]+ +g[i>>2]*+g[c+56>>2];g[a+(d<<4)+12>>2]=+g[e>>2]*+g[c+12>>2]+0.0+ +g[f>>2]*+g[c+28>>2]+ +g[h>>2]*+g[c+44>>2]+ +g[i>>2]*+g[c+60>>2];d=d+1|0;}while((d|0)<4);return}function ce(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0.0,h=0.0,j=0.0,k=0.0;c=i;i=i+64|0;d=c|0;Qe(d|0,a|0,64)|0;e=0;do{f=+g[d+(e<<4)>>2];h=+g[d+(e<<4)+4>>2];j=+g[d+(e<<4)+8>>2];k=+g[d+(e<<4)+12>>2];g[a+(e<<4)>>2]=f*+g[b>>2]+0.0+h*+g[b+16>>2]+j*+g[b+32>>2]+k*+g[b+48>>2];g[a+(e<<4)+4>>2]=f*+g[b+4>>2]+0.0+h*+g[b+20>>2]+j*+g[b+36>>2]+k*+g[b+52>>2];g[a+(e<<4)+8>>2]=f*+g[b+8>>2]+0.0+h*+g[b+24>>2]+j*+g[b+40>>2]+k*+g[b+56>>2];g[a+(e<<4)+12>>2]=f*+g[b+12>>2]+0.0+h*+g[b+28>>2]+j*+g[b+44>>2]+k*+g[b+60>>2];e=e+1|0;}while((e|0)<4);i=c;return}function de(a,b){a=a|0;b=b|0;Qe(a|0,b|0,64)|0;return}function ee(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,h=0;d=c|0;e=c+4|0;f=c+8|0;h=c+12|0;g[a>>2]=+g[b>>2]*+g[d>>2]+ +g[b+4>>2]*+g[e>>2]+ +g[b+8>>2]*+g[f>>2]+ +g[b+12>>2]*+g[h>>2];g[a+4>>2]=+g[b+16>>2]*+g[d>>2]+ +g[b+20>>2]*+g[e>>2]+ +g[b+24>>2]*+g[f>>2]+ +g[b+28>>2]*+g[h>>2];g[a+8>>2]=+g[b+32>>2]*+g[d>>2]+ +g[b+36>>2]*+g[e>>2]+ +g[b+40>>2]*+g[f>>2]+ +g[b+44>>2]*+g[h>>2];g[a+12>>2]=+g[b+48>>2]*+g[d>>2]+ +g[b+52>>2]*+g[e>>2]+ +g[b+56>>2]*+g[f>>2]+ +g[b+60>>2]*+g[h>>2];return}function fe(a,b){a=a|0;b=b|0;g[a>>2]=+g[b>>2];g[a+4>>2]=+g[b+16>>2];g[a+8>>2]=+g[b+32>>2];g[a+12>>2]=+g[b+48>>2];g[a+16>>2]=+g[b+4>>2];g[a+20>>2]=+g[b+20>>2];g[a+24>>2]=+g[b+36>>2];g[a+28>>2]=+g[b+52>>2];g[a+32>>2]=+g[b+8>>2];g[a+36>>2]=+g[b+24>>2];g[a+40>>2]=+g[b+40>>2];g[a+44>>2]=+g[b+56>>2];g[a+48>>2]=+g[b+12>>2];g[a+52>>2]=+g[b+28>>2];g[a+56>>2]=+g[b+44>>2];g[a+60>>2]=+g[b+60>>2];return}function ge(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,h=0,i=0.0,j=0,k=0,l=0.0,m=0,n=0.0,o=0,p=0,q=0.0,r=0,s=0.0,t=0,u=0,v=0,w=0;d=_(c,c)|0;if((d|0)!=0){Re(a|0,0,((d|0)>1?d<<2:4)|0)|0}d=(c|0)>0;if(d){e=0}else{f=0;return f|0}do{g[a+((_(e,c)|0)+e<<2)>>2]=1.0;e=e+1|0;}while((e|0)<(c|0));if(d){h=0}else{f=0;return f|0}while(1){d=_(h,c)|0;i=+g[b+(d+h<<2)>>2];e=h+1|0;j=(e|0)<(c|0);if(j){k=h;l=i;m=e;while(1){n=+g[b+((_(m,c)|0)+h<<2)>>2];o=+N(+n)>+N(+l);p=o?m:k;q=o?n:l;o=m+1|0;if((o|0)<(c|0)){k=p;l=q;m=o}else{r=p;s=q;break}}}else{r=h;s=i}if(s==0.0){f=1;t=19;break}if((r|0)!=(h|0)){m=_(r,c)|0;k=0;do{p=k+d|0;o=b+(p<<2)|0;l=+g[o>>2];u=k+m|0;v=b+(u<<2)|0;g[o>>2]=+g[v>>2];g[v>>2]=l;v=a+(p<<2)|0;l=+g[v>>2];p=a+(u<<2)|0;g[v>>2]=+g[p>>2];g[p>>2]=l;k=k+1|0;}while((k|0)<(c|0))}i=1.0/s;k=0;while(1){m=k+d|0;p=b+(m<<2)|0;g[p>>2]=i*+g[p>>2];p=a+(m<<2)|0;g[p>>2]=i*+g[p>>2];p=k+1|0;if((p|0)<(c|0)){k=p}else{w=0;break}}do{if((w|0)!=(h|0)){k=_(w,c)|0;i=+g[b+(k+h<<2)>>2];p=0;do{m=p+d|0;v=p+k|0;u=b+(v<<2)|0;g[u>>2]=+g[u>>2]-i*+g[b+(m<<2)>>2];u=a+(v<<2)|0;g[u>>2]=+g[u>>2]-i*+g[a+(m<<2)>>2];p=p+1|0;}while((p|0)<(c|0))}w=w+1|0;}while((w|0)<(c|0));if(j){h=e}else{f=0;t=19;break}}if((t|0)==19){return f|0}return 0}function he(a,b){a=a|0;b=b|0;var c=0,d=0;c=i;i=i+64|0;d=c|0;Qe(d|0,b|0,64)|0;ge(a|0,d|0,4)|0;i=c;return}function ie(a,b,c){a=a|0;b=+b;c=c|0;var d=0,e=0,f=0.0,h=0.0;d=c+1|0;c=(d|0)>2?0:d;d=c+1|0;e=(d|0)>2?0:d;f=b;b=+R(f);h=+Q(f);g[a>>2]=1.0;Re(a+4|0,0,16)|0;g[a+20>>2]=1.0;Re(a+24|0,0,16)|0;g[a+40>>2]=1.0;Re(a+44|0,0,16)|0;g[a+60>>2]=1.0;g[a+(c<<4)+(c<<2)>>2]=h;g[a+(c<<4)+(e<<2)>>2]=-0.0-b;g[a+(e<<4)+(c<<2)>>2]=b;g[a+(e<<4)+(e<<2)>>2]=h;return}function je(a){a=a|0;var b=0,c=0.0,d=0,e=0.0,f=0,h=0.0,i=0.0,j=0;b=a|0;c=+g[b>>2];d=a+4|0;e=+g[d>>2];f=a+8|0;h=+g[f>>2];i=+O(c*c+e*e+h*h);if(i==0.0){j=1;return j|0}g[b>>2]=c/i;g[d>>2]=e/i;g[f>>2]=h/i;j=0;return j|0}function ke(a,b,c,d){a=a|0;b=+b;c=+c;d=+d;g[a>>2]=b;g[a+4>>2]=c;g[a+8>>2]=d;return}function le(a,b,c,d,e){a=a|0;b=+b;c=+c;d=+d;e=+e;g[a>>2]=b;g[a+4>>2]=c;g[a+8>>2]=d;g[a+12>>2]=e;return}function me(a,b,e,f){a=a|0;b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0;g=_(f,e)|0;if((g|0)>0){h=0;i=b}else{return}while(1){c[a+(h<<2)>>2]=(d[i+1|0]|0)<<8|(d[i]|0)<<16|(d[i+2|0]|0);b=h+1|0;if((b|0)<(g|0)){h=b;i=i+3|0}else{break}}return}function ne(b,c,d,e,f,g){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;h=~~(+(f<<16|0)/+(c|0));i=~~(+(g<<16|0)/+(d|0));if(!((d|0)>0&(c|0)>0)){return}g=c*3|0;j=0;k=b;b=0;while(1){l=_(j>>16,f)|0;m=0;n=k;o=0;while(1){p=((m>>16)+l|0)*3|0;a[n]=a[e+p|0]|0;a[n+1|0]=a[e+(p+1)|0]|0;a[n+2|0]=a[e+(p+2)|0]|0;p=o+1|0;if((p|0)<(c|0)){m=m+h|0;n=n+3|0;o=p}else{break}}o=b+1|0;if((o|0)<(d|0)){j=j+i|0;k=k+g|0;b=o}else{break}}return}function oe(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;if((d|0)==32){g=3}else if((d|0)==24){g=4}else{g=1}d=Le(20)|0;h=d;i=f<<2;j=d;c[j>>2]=Le(i)|0;k=d+4|0;c[k>>2]=Le(i)|0;a:do{if((f|0)>0){if((e|0)==0){i=0;while(1){l=Pd(a,b,g,0,0,0,0)|0;if((l|0)==0){break}c[(c[j>>2]|0)+(i<<2)>>2]=l;c[(c[k>>2]|0)+(i<<2)>>2]=c[l+20>>2];i=i+1|0;if((i|0)>=(f|0)){break a}}n=c[m>>2]|0;o=xa(1784,34,1,n|0)|0;Aa(1);return 0}else{i=0;while(1){l=Pd(a,b,g,0,0,0,c[e+(i<<2)>>2]|0)|0;if((l|0)==0){break}c[(c[j>>2]|0)+(i<<2)>>2]=l;c[(c[k>>2]|0)+(i<<2)>>2]=c[l+20>>2];i=i+1|0;if((i|0)>=(f|0)){break a}}n=c[m>>2]|0;o=xa(1784,34,1,n|0)|0;Aa(1);return 0}}}while(0);n=c[626]|0;c[626]=n+1;if((n|0)!=0){p=d+12|0;q=p;c[q>>2]=a;r=d+16|0;s=r;c[s>>2]=b;t=d+8|0;u=t;c[u>>2]=f;return h|0}Fc(c[c[j>>2]>>2]|0);p=d+12|0;q=p;c[q>>2]=a;r=d+16|0;s=r;c[s>>2]=b;t=d+8|0;u=t;c[u>>2]=f;return h|0}function pe(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;b=a+8|0;d=a|0;e=c[d>>2]|0;if((c[b>>2]|0)>0){f=0;g=e;while(1){Qd(c[g+(f<<2)>>2]|0);h=f+1|0;i=c[d>>2]|0;if((h|0)<(c[b>>2]|0)){f=h;g=i}else{j=i;break}}}else{j=e}Ke(j);Ke(c[a+4>>2]|0);Ke(a);a=(c[626]|0)-1|0;c[626]=a;if((a|0)!=0){return}Gc();return}function qe(a,b){a=a|0;b=b|0;var d=0;d=pc()|0;c[d>>2]=c[(c[a>>2]|0)+(b<<2)>>2];return}function re(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=a+8|0;if((c[f>>2]|0)<=0){return}g=a|0;if((e|0)==0){a=0;do{Rd(c[(c[g>>2]|0)+(a<<2)>>2]|0,0,b,d);a=a+1|0;}while((a|0)<(c[f>>2]|0));return}else{a=0;do{Rd(c[(c[g>>2]|0)+(a<<2)>>2]|0,c[e+(a<<2)>>2]|0,b,d);a=a+1|0;}while((a|0)<(c[f>>2]|0));return}}function se(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;Sd(c[(c[a>>2]|0)+(b<<2)>>2]|0,d,e);return}function te(a,b){a=a|0;b=b|0;return}function ue(a,b){a=a|0;b=b|0;return}function ve(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0,k=0,l=0,m=0.0,n=0.0,o=0.0;d=i;i=i+48|0;e=d|0;f=d+24|0;h=c[a+3112>>2]|0;j=c[b+4>>2]|0;if((h&2|0)!=0){b=c[a+3092>>2]|0;k=_((c[a+3096>>2]|0)+b|0,j)|0;l=c[a+3088>>2]|0;g[e+4>>2]=+g[l+(k<<2)>>2];g[e+8>>2]=+g[l+(k+1<<2)>>2];g[e+12>>2]=+g[l+(k+2<<2)>>2];if((b|0)>3){m=+g[l+(k+3<<2)>>2]}else{m=1.0}g[e+16>>2]=m;Bc(a,e|0)}if((h&4|0)!=0){e=_((c[a+3084>>2]|0)+3|0,j)|0;k=c[a+3080>>2]|0;g[a+3008>>2]=+g[k+(e<<2)>>2];g[a+3012>>2]=+g[k+(e+1<<2)>>2];g[a+3016>>2]=0.0}if((h&8|0)!=0){e=c[a+3104>>2]|0;k=_((c[a+3108>>2]|0)+e|0,j)|0;l=c[a+3100>>2]|0;g[a+3024>>2]=+g[l+(k<<2)>>2];g[a+3028>>2]=+g[l+(k+1<<2)>>2];do{if((e|0)>2){g[a+3032>>2]=+g[l+(k+2<<2)>>2];if((e|0)<=3){n=1.0;break}n=+g[l+(k+3<<2)>>2]}else{g[a+3032>>2]=0.0;n=1.0}}while(0);g[a+3036>>2]=n}if((h&1|0)==0){i=d;return}h=c[a+3072>>2]|0;k=_((c[a+3076>>2]|0)+h|0,j)|0;j=c[a+3068>>2]|0;g[f+4>>2]=+g[j+(k<<2)>>2];g[f+8>>2]=+g[j+(k+1<<2)>>2];do{if((h|0)>2){g[f+12>>2]=+g[j+(k+2<<2)>>2];if((h|0)<=3){o=1.0;break}o=+g[j+(k+3<<2)>>2]}else{g[f+12>>2]=0.0;o=1.0}}while(0);g[f+16>>2]=o;Dc(a,f|0);i=d;return}function we(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=43;c[d+4>>2]=a;qc(d|0);i=b;return}function xe(a,b){a=a|0;b=b|0;var d=0;d=a+3112|0;c[d>>2]=c[d>>2]|c[b+4>>2];return}function ye(a){a=a|0;var b=0,d=0,e=0;b=i;i=i+8|0;d=b|0;e=d|0;c[d>>2]=44;if((a|0)==32885){c[d+4>>2]=4}else if((a|0)==32884){c[d+4>>2]=1}else if((a|0)==32888){c[d+4>>2]=8}else if((a|0)==32886){c[d+4>>2]=2}qc(e);i=b;return}function ze(a,b){a=a|0;b=b|0;var d=0;d=a+3112|0;c[d>>2]=c[d>>2]&c[b+4>>2];return}function Ae(a){a=a|0;var b=0,d=0,e=0;b=i;i=i+8|0;d=b|0;e=d|0;c[d>>2]=45;if((a|0)==32888){c[d+4>>2]=-9}else if((a|0)==32885){c[d+4>>2]=-5}else if((a|0)==32884){c[d+4>>2]=-2}else if((a|0)==32886){c[d+4>>2]=-3}qc(e);i=b;return}function Be(a,b){a=a|0;b=b|0;c[a+3072>>2]=c[b+4>>2];c[a+3076>>2]=c[b+8>>2];c[a+3068>>2]=c[b+12>>2];return}function Ce(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;b=i;i=i+16|0;f=b|0;c[f>>2]=46;c[f+4>>2]=a;c[f+8>>2]=d;c[f+12>>2]=e;qc(f|0);i=b;return}function De(a,b){a=a|0;b=b|0;c[a+3092>>2]=c[b+4>>2];c[a+3096>>2]=c[b+8>>2];c[a+3088>>2]=c[b+12>>2];return}function Ee(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;b=i;i=i+16|0;f=b|0;c[f>>2]=47;c[f+4>>2]=a;c[f+8>>2]=d;c[f+12>>2]=e;qc(f|0);i=b;return}function Fe(a,b){a=a|0;b=b|0;c[a+3084>>2]=c[b+4>>2];c[a+3080>>2]=c[b+8>>2];return}function Ge(a,b,c){a=a|0;b=b|0;c=c|0;return}function He(a,b){a=a|0;b=b|0;c[a+3104>>2]=c[b+4>>2];c[a+3108>>2]=c[b+8>>2];c[a+3100>>2]=c[b+12>>2];return}function Ie(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return}function Je(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0.0,q=0.0;e=i;f=a+3128|0;h=c[f>>2]|0;do{if((h|0)!=0){j=h;k=h;while(1){if((c[j>>2]|0)==(b|0)){l=4;break}m=(c[j+4>>2]|0)<(c[k+4>>2]|0)?j:k;n=c[j+4108>>2]|0;if((n|0)==0){break}else{j=n;k=m}}if((l|0)==4){k=a+3132|0;n=c[k>>2]|0;c[k>>2]=n+1;c[j+4>>2]=n;o=j;i=e;return o|0}if((m|0)==0){break}if((c[a+3136>>2]|0)<8){break}c[m>>2]=b;n=a+3132|0;k=c[n>>2]|0;c[n>>2]=k+1;c[m+4>>2]=k;p=d;q=0.0;k=0;while(1){g[m+8+(k<<2)>>2]=+P(+q,+p);n=k+1|0;if((n|0)<1025){q=q+.0009765625;k=n}else{o=m;break}}i=e;return o|0}}while(0);m=Le(4112)|0;l=m;if((m|0)==0){Od(1688,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h}h=a+3136|0;c[h>>2]=(c[h>>2]|0)+1;c[m+4108>>2]=c[f>>2];c[f>>2]=l;f=a+3132|0;a=c[f>>2]|0;c[f>>2]=a+1;c[m+4>>2]=a;c[m>>2]=b;q=d;d=0.0;b=0;while(1){g[l+8+(b<<2)>>2]=+P(+d,+q);m=b+1|0;if((m|0)<1025){d=d+.0009765625;b=m}else{o=l;break}}i=e;return o|0}function Ke(a){a=a|0;Oe(a);return}function Le(a){a=a|0;return Ne(a)|0}function Me(a){a=a|0;return Pe(1,a)|0}function Ne(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ka=0;do{if(a>>>0<245>>>0){if(a>>>0<11>>>0){b=16}else{b=a+11&-8}d=b>>>3;e=c[628]|0;f=e>>>(d>>>0);if((f&3|0)!=0){g=(f&1^1)+d|0;h=g<<1;i=2552+(h<<2)|0;j=2552+(h+2<<2)|0;h=c[j>>2]|0;k=h+8|0;l=c[k>>2]|0;do{if((i|0)==(l|0)){c[628]=e&~(1<<g)}else{if(l>>>0<(c[632]|0)>>>0){pa();return 0}m=l+12|0;if((c[m>>2]|0)==(h|0)){c[m>>2]=i;c[j>>2]=l;break}else{pa();return 0}}}while(0);l=g<<3;c[h+4>>2]=l|3;j=h+(l|4)|0;c[j>>2]=c[j>>2]|1;n=k;return n|0}if(!(b>>>0>(c[630]|0)>>>0)){o=b;break}if((f|0)!=0){j=2<<d;l=f<<d&(j|-j);j=(l&-l)-1|0;l=j>>>12&16;i=j>>>(l>>>0);j=i>>>5&8;m=i>>>(j>>>0);i=m>>>2&4;p=m>>>(i>>>0);m=p>>>1&2;q=p>>>(m>>>0);p=q>>>1&1;r=(j|l|i|m|p)+(q>>>(p>>>0))|0;p=r<<1;q=2552+(p<<2)|0;m=2552+(p+2<<2)|0;p=c[m>>2]|0;i=p+8|0;l=c[i>>2]|0;do{if((q|0)==(l|0)){c[628]=e&~(1<<r)}else{if(l>>>0<(c[632]|0)>>>0){pa();return 0}j=l+12|0;if((c[j>>2]|0)==(p|0)){c[j>>2]=q;c[m>>2]=l;break}else{pa();return 0}}}while(0);l=r<<3;m=l-b|0;c[p+4>>2]=b|3;q=p;e=q+b|0;c[q+(b|4)>>2]=m|1;c[q+l>>2]=m;l=c[630]|0;if((l|0)!=0){q=c[633]|0;d=l>>>3;l=d<<1;f=2552+(l<<2)|0;k=c[628]|0;h=1<<d;do{if((k&h|0)==0){c[628]=k|h;s=f;t=2552+(l+2<<2)|0}else{d=2552+(l+2<<2)|0;g=c[d>>2]|0;if(!(g>>>0<(c[632]|0)>>>0)){s=g;t=d;break}pa();return 0}}while(0);c[t>>2]=q;c[s+12>>2]=q;c[q+8>>2]=s;c[q+12>>2]=f}c[630]=m;c[633]=e;n=i;return n|0}l=c[629]|0;if((l|0)==0){o=b;break}h=(l&-l)-1|0;l=h>>>12&16;k=h>>>(l>>>0);h=k>>>5&8;p=k>>>(h>>>0);k=p>>>2&4;r=p>>>(k>>>0);p=r>>>1&2;d=r>>>(p>>>0);r=d>>>1&1;g=c[2816+((h|l|k|p|r)+(d>>>(r>>>0))<<2)>>2]|0;r=g;d=g;p=(c[g+4>>2]&-8)-b|0;while(1){g=c[r+16>>2]|0;if((g|0)==0){k=c[r+20>>2]|0;if((k|0)==0){break}else{u=k}}else{u=g}g=(c[u+4>>2]&-8)-b|0;k=g>>>0<p>>>0;r=u;d=k?u:d;p=k?g:p}r=d;i=c[632]|0;if(r>>>0<i>>>0){pa();return 0}e=r+b|0;m=e;if(!(r>>>0<e>>>0)){pa();return 0}e=c[d+24>>2]|0;f=c[d+12>>2]|0;do{if((f|0)==(d|0)){q=d+20|0;g=c[q>>2]|0;if((g|0)==0){k=d+16|0;l=c[k>>2]|0;if((l|0)==0){v=0;break}else{w=l;x=k}}else{w=g;x=q}while(1){q=w+20|0;g=c[q>>2]|0;if((g|0)!=0){w=g;x=q;continue}q=w+16|0;g=c[q>>2]|0;if((g|0)==0){break}else{w=g;x=q}}if(x>>>0<i>>>0){pa();return 0}else{c[x>>2]=0;v=w;break}}else{q=c[d+8>>2]|0;if(q>>>0<i>>>0){pa();return 0}g=q+12|0;if((c[g>>2]|0)!=(d|0)){pa();return 0}k=f+8|0;if((c[k>>2]|0)==(d|0)){c[g>>2]=f;c[k>>2]=q;v=f;break}else{pa();return 0}}}while(0);a:do{if((e|0)!=0){f=c[d+28>>2]|0;i=2816+(f<<2)|0;do{if((d|0)==(c[i>>2]|0)){c[i>>2]=v;if((v|0)!=0){break}c[629]=c[629]&~(1<<f);break a}else{if(e>>>0<(c[632]|0)>>>0){pa();return 0}q=e+16|0;if((c[q>>2]|0)==(d|0)){c[q>>2]=v}else{c[e+20>>2]=v}if((v|0)==0){break a}}}while(0);if(v>>>0<(c[632]|0)>>>0){pa();return 0}c[v+24>>2]=e;f=c[d+16>>2]|0;do{if((f|0)!=0){if(f>>>0<(c[632]|0)>>>0){pa();return 0}else{c[v+16>>2]=f;c[f+24>>2]=v;break}}}while(0);f=c[d+20>>2]|0;if((f|0)==0){break}if(f>>>0<(c[632]|0)>>>0){pa();return 0}else{c[v+20>>2]=f;c[f+24>>2]=v;break}}}while(0);if(p>>>0<16>>>0){e=p+b|0;c[d+4>>2]=e|3;f=r+(e+4)|0;c[f>>2]=c[f>>2]|1}else{c[d+4>>2]=b|3;c[r+(b|4)>>2]=p|1;c[r+(p+b)>>2]=p;f=c[630]|0;if((f|0)!=0){e=c[633]|0;i=f>>>3;f=i<<1;q=2552+(f<<2)|0;k=c[628]|0;g=1<<i;do{if((k&g|0)==0){c[628]=k|g;y=q;z=2552+(f+2<<2)|0}else{i=2552+(f+2<<2)|0;l=c[i>>2]|0;if(!(l>>>0<(c[632]|0)>>>0)){y=l;z=i;break}pa();return 0}}while(0);c[z>>2]=e;c[y+12>>2]=e;c[e+8>>2]=y;c[e+12>>2]=q}c[630]=p;c[633]=m}f=d+8|0;if((f|0)==0){o=b;break}else{n=f}return n|0}else{if(a>>>0>4294967231>>>0){o=-1;break}f=a+11|0;g=f&-8;k=c[629]|0;if((k|0)==0){o=g;break}r=-g|0;i=f>>>8;do{if((i|0)==0){A=0}else{if(g>>>0>16777215>>>0){A=31;break}f=(i+1048320|0)>>>16&8;l=i<<f;h=(l+520192|0)>>>16&4;j=l<<h;l=(j+245760|0)>>>16&2;B=14-(h|f|l)+(j<<l>>>15)|0;A=g>>>((B+7|0)>>>0)&1|B<<1}}while(0);i=c[2816+(A<<2)>>2]|0;b:do{if((i|0)==0){C=0;D=r;E=0}else{if((A|0)==31){F=0}else{F=25-(A>>>1)|0}d=0;m=r;p=i;q=g<<F;e=0;while(1){B=c[p+4>>2]&-8;l=B-g|0;if(l>>>0<m>>>0){if((B|0)==(g|0)){C=p;D=l;E=p;break b}else{G=p;H=l}}else{G=d;H=m}l=c[p+20>>2]|0;B=c[p+16+(q>>>31<<2)>>2]|0;j=(l|0)==0|(l|0)==(B|0)?e:l;if((B|0)==0){C=G;D=H;E=j;break}else{d=G;m=H;p=B;q=q<<1;e=j}}}}while(0);if((E|0)==0&(C|0)==0){i=2<<A;r=k&(i|-i);if((r|0)==0){o=g;break}i=(r&-r)-1|0;r=i>>>12&16;e=i>>>(r>>>0);i=e>>>5&8;q=e>>>(i>>>0);e=q>>>2&4;p=q>>>(e>>>0);q=p>>>1&2;m=p>>>(q>>>0);p=m>>>1&1;I=c[2816+((i|r|e|q|p)+(m>>>(p>>>0))<<2)>>2]|0}else{I=E}if((I|0)==0){J=D;K=C}else{p=I;m=D;q=C;while(1){e=(c[p+4>>2]&-8)-g|0;r=e>>>0<m>>>0;i=r?e:m;e=r?p:q;r=c[p+16>>2]|0;if((r|0)!=0){p=r;m=i;q=e;continue}r=c[p+20>>2]|0;if((r|0)==0){J=i;K=e;break}else{p=r;m=i;q=e}}}if((K|0)==0){o=g;break}if(!(J>>>0<((c[630]|0)-g|0)>>>0)){o=g;break}q=K;m=c[632]|0;if(q>>>0<m>>>0){pa();return 0}p=q+g|0;k=p;if(!(q>>>0<p>>>0)){pa();return 0}e=c[K+24>>2]|0;i=c[K+12>>2]|0;do{if((i|0)==(K|0)){r=K+20|0;d=c[r>>2]|0;if((d|0)==0){j=K+16|0;B=c[j>>2]|0;if((B|0)==0){L=0;break}else{M=B;N=j}}else{M=d;N=r}while(1){r=M+20|0;d=c[r>>2]|0;if((d|0)!=0){M=d;N=r;continue}r=M+16|0;d=c[r>>2]|0;if((d|0)==0){break}else{M=d;N=r}}if(N>>>0<m>>>0){pa();return 0}else{c[N>>2]=0;L=M;break}}else{r=c[K+8>>2]|0;if(r>>>0<m>>>0){pa();return 0}d=r+12|0;if((c[d>>2]|0)!=(K|0)){pa();return 0}j=i+8|0;if((c[j>>2]|0)==(K|0)){c[d>>2]=i;c[j>>2]=r;L=i;break}else{pa();return 0}}}while(0);c:do{if((e|0)!=0){i=c[K+28>>2]|0;m=2816+(i<<2)|0;do{if((K|0)==(c[m>>2]|0)){c[m>>2]=L;if((L|0)!=0){break}c[629]=c[629]&~(1<<i);break c}else{if(e>>>0<(c[632]|0)>>>0){pa();return 0}r=e+16|0;if((c[r>>2]|0)==(K|0)){c[r>>2]=L}else{c[e+20>>2]=L}if((L|0)==0){break c}}}while(0);if(L>>>0<(c[632]|0)>>>0){pa();return 0}c[L+24>>2]=e;i=c[K+16>>2]|0;do{if((i|0)!=0){if(i>>>0<(c[632]|0)>>>0){pa();return 0}else{c[L+16>>2]=i;c[i+24>>2]=L;break}}}while(0);i=c[K+20>>2]|0;if((i|0)==0){break}if(i>>>0<(c[632]|0)>>>0){pa();return 0}else{c[L+20>>2]=i;c[i+24>>2]=L;break}}}while(0);do{if(J>>>0<16>>>0){e=J+g|0;c[K+4>>2]=e|3;i=q+(e+4)|0;c[i>>2]=c[i>>2]|1}else{c[K+4>>2]=g|3;c[q+(g|4)>>2]=J|1;c[q+(J+g)>>2]=J;i=J>>>3;if(J>>>0<256>>>0){e=i<<1;m=2552+(e<<2)|0;r=c[628]|0;j=1<<i;do{if((r&j|0)==0){c[628]=r|j;O=m;P=2552+(e+2<<2)|0}else{i=2552+(e+2<<2)|0;d=c[i>>2]|0;if(!(d>>>0<(c[632]|0)>>>0)){O=d;P=i;break}pa();return 0}}while(0);c[P>>2]=k;c[O+12>>2]=k;c[q+(g+8)>>2]=O;c[q+(g+12)>>2]=m;break}e=p;j=J>>>8;do{if((j|0)==0){Q=0}else{if(J>>>0>16777215>>>0){Q=31;break}r=(j+1048320|0)>>>16&8;i=j<<r;d=(i+520192|0)>>>16&4;B=i<<d;i=(B+245760|0)>>>16&2;l=14-(d|r|i)+(B<<i>>>15)|0;Q=J>>>((l+7|0)>>>0)&1|l<<1}}while(0);j=2816+(Q<<2)|0;c[q+(g+28)>>2]=Q;c[q+(g+20)>>2]=0;c[q+(g+16)>>2]=0;m=c[629]|0;l=1<<Q;if((m&l|0)==0){c[629]=m|l;c[j>>2]=e;c[q+(g+24)>>2]=j;c[q+(g+12)>>2]=e;c[q+(g+8)>>2]=e;break}if((Q|0)==31){R=0}else{R=25-(Q>>>1)|0}l=J<<R;m=c[j>>2]|0;while(1){if((c[m+4>>2]&-8|0)==(J|0)){break}S=m+16+(l>>>31<<2)|0;j=c[S>>2]|0;if((j|0)==0){T=151;break}else{l=l<<1;m=j}}if((T|0)==151){if(S>>>0<(c[632]|0)>>>0){pa();return 0}else{c[S>>2]=e;c[q+(g+24)>>2]=m;c[q+(g+12)>>2]=e;c[q+(g+8)>>2]=e;break}}l=m+8|0;j=c[l>>2]|0;i=c[632]|0;if(m>>>0<i>>>0){pa();return 0}if(j>>>0<i>>>0){pa();return 0}else{c[j+12>>2]=e;c[l>>2]=e;c[q+(g+8)>>2]=j;c[q+(g+12)>>2]=m;c[q+(g+24)>>2]=0;break}}}while(0);q=K+8|0;if((q|0)==0){o=g;break}else{n=q}return n|0}}while(0);K=c[630]|0;if(!(o>>>0>K>>>0)){S=K-o|0;J=c[633]|0;if(S>>>0>15>>>0){R=J;c[633]=R+o;c[630]=S;c[R+(o+4)>>2]=S|1;c[R+K>>2]=S;c[J+4>>2]=o|3}else{c[630]=0;c[633]=0;c[J+4>>2]=K|3;S=J+(K+4)|0;c[S>>2]=c[S>>2]|1}n=J+8|0;return n|0}J=c[631]|0;if(o>>>0<J>>>0){S=J-o|0;c[631]=S;J=c[634]|0;K=J;c[634]=K+o;c[K+(o+4)>>2]=S|1;c[J+4>>2]=o|3;n=J+8|0;return n|0}do{if((c[618]|0)==0){J=oa(30)|0;if((J-1&J|0)==0){c[620]=J;c[619]=J;c[621]=-1;c[622]=-1;c[623]=0;c[739]=0;c[618]=(Ma(0)|0)&-16^1431655768;break}else{pa();return 0}}}while(0);J=o+48|0;S=c[620]|0;K=o+47|0;R=S+K|0;Q=-S|0;S=R&Q;if(!(S>>>0>o>>>0)){n=0;return n|0}O=c[738]|0;do{if((O|0)!=0){P=c[736]|0;L=P+S|0;if(L>>>0<=P>>>0|L>>>0>O>>>0){n=0}else{break}return n|0}}while(0);d:do{if((c[739]&4|0)==0){O=c[634]|0;e:do{if((O|0)==0){T=181}else{L=O;P=2960;while(1){U=P|0;M=c[U>>2]|0;if(!(M>>>0>L>>>0)){V=P+4|0;if((M+(c[V>>2]|0)|0)>>>0>L>>>0){break}}M=c[P+8>>2]|0;if((M|0)==0){T=181;break e}else{P=M}}if((P|0)==0){T=181;break}L=R-(c[631]|0)&Q;if(!(L>>>0<2147483647>>>0)){W=0;break}m=Ia(L|0)|0;e=(m|0)==((c[U>>2]|0)+(c[V>>2]|0)|0);X=e?m:-1;Y=e?L:0;Z=m;_=L;T=190}}while(0);do{if((T|0)==181){O=Ia(0)|0;if((O|0)==-1){W=0;break}g=O;L=c[619]|0;m=L-1|0;if((m&g|0)==0){$=S}else{$=S-g+(m+g&-L)|0}L=c[736]|0;g=L+$|0;if(!($>>>0>o>>>0&$>>>0<2147483647>>>0)){W=0;break}m=c[738]|0;if((m|0)!=0){if(g>>>0<=L>>>0|g>>>0>m>>>0){W=0;break}}m=Ia($|0)|0;g=(m|0)==(O|0);X=g?O:-1;Y=g?$:0;Z=m;_=$;T=190}}while(0);f:do{if((T|0)==190){m=-_|0;if(!((X|0)==-1)){aa=Y;ba=X;T=201;break d}do{if((Z|0)!=-1&_>>>0<2147483647>>>0&_>>>0<J>>>0){g=c[620]|0;O=K-_+g&-g;if(!(O>>>0<2147483647>>>0)){ca=_;break}if((Ia(O|0)|0)==-1){Ia(m|0)|0;W=Y;break f}else{ca=O+_|0;break}}else{ca=_}}while(0);if((Z|0)==-1){W=Y}else{aa=ca;ba=Z;T=201;break d}}}while(0);c[739]=c[739]|4;da=W;T=198}else{da=0;T=198}}while(0);do{if((T|0)==198){if(!(S>>>0<2147483647>>>0)){break}W=Ia(S|0)|0;Z=Ia(0)|0;if(!((Z|0)!=-1&(W|0)!=-1&W>>>0<Z>>>0)){break}ca=Z-W|0;Z=ca>>>0>(o+40|0)>>>0;Y=Z?W:-1;if(!((Y|0)==-1)){aa=Z?ca:da;ba=Y;T=201}}}while(0);do{if((T|0)==201){da=(c[736]|0)+aa|0;c[736]=da;if(da>>>0>(c[737]|0)>>>0){c[737]=da}da=c[634]|0;g:do{if((da|0)==0){S=c[632]|0;if((S|0)==0|ba>>>0<S>>>0){c[632]=ba}c[740]=ba;c[741]=aa;c[743]=0;c[637]=c[618];c[636]=-1;S=0;do{Y=S<<1;ca=2552+(Y<<2)|0;c[2552+(Y+3<<2)>>2]=ca;c[2552+(Y+2<<2)>>2]=ca;S=S+1|0;}while(S>>>0<32>>>0);S=ba+8|0;if((S&7|0)==0){ea=0}else{ea=-S&7}S=aa-40-ea|0;c[634]=ba+ea;c[631]=S;c[ba+(ea+4)>>2]=S|1;c[ba+(aa-36)>>2]=40;c[635]=c[622]}else{S=2960;while(1){fa=c[S>>2]|0;ga=S+4|0;ha=c[ga>>2]|0;if((ba|0)==(fa+ha|0)){T=213;break}ca=c[S+8>>2]|0;if((ca|0)==0){break}else{S=ca}}do{if((T|0)==213){if((c[S+12>>2]&8|0)!=0){break}ca=da;if(!(ca>>>0>=fa>>>0&ca>>>0<ba>>>0)){break}c[ga>>2]=ha+aa;Y=(c[631]|0)+aa|0;Z=da+8|0;if((Z&7|0)==0){ia=0}else{ia=-Z&7}Z=Y-ia|0;c[634]=ca+ia;c[631]=Z;c[ca+(ia+4)>>2]=Z|1;c[ca+(Y+4)>>2]=40;c[635]=c[622];break g}}while(0);if(ba>>>0<(c[632]|0)>>>0){c[632]=ba}S=ba+aa|0;Y=2960;while(1){ja=Y|0;if((c[ja>>2]|0)==(S|0)){T=223;break}ca=c[Y+8>>2]|0;if((ca|0)==0){break}else{Y=ca}}do{if((T|0)==223){if((c[Y+12>>2]&8|0)!=0){break}c[ja>>2]=ba;S=Y+4|0;c[S>>2]=(c[S>>2]|0)+aa;S=ba+8|0;if((S&7|0)==0){ka=0}else{ka=-S&7}S=ba+(aa+8)|0;if((S&7|0)==0){la=0}else{la=-S&7}S=ba+(la+aa)|0;ca=S;Z=ka+o|0;W=ba+Z|0;_=W;K=S-(ba+ka)-o|0;c[ba+(ka+4)>>2]=o|3;do{if((ca|0)==(c[634]|0)){J=(c[631]|0)+K|0;c[631]=J;c[634]=_;c[ba+(Z+4)>>2]=J|1}else{if((ca|0)==(c[633]|0)){J=(c[630]|0)+K|0;c[630]=J;c[633]=_;c[ba+(Z+4)>>2]=J|1;c[ba+(J+Z)>>2]=J;break}J=aa+4|0;X=c[ba+(J+la)>>2]|0;if((X&3|0)==1){$=X&-8;V=X>>>3;h:do{if(X>>>0<256>>>0){U=c[ba+((la|8)+aa)>>2]|0;Q=c[ba+(aa+12+la)>>2]|0;R=2552+(V<<1<<2)|0;do{if((U|0)!=(R|0)){if(U>>>0<(c[632]|0)>>>0){pa();return 0}if((c[U+12>>2]|0)==(ca|0)){break}pa();return 0}}while(0);if((Q|0)==(U|0)){c[628]=c[628]&~(1<<V);break}do{if((Q|0)==(R|0)){ma=Q+8|0}else{if(Q>>>0<(c[632]|0)>>>0){pa();return 0}m=Q+8|0;if((c[m>>2]|0)==(ca|0)){ma=m;break}pa();return 0}}while(0);c[U+12>>2]=Q;c[ma>>2]=U}else{R=S;m=c[ba+((la|24)+aa)>>2]|0;P=c[ba+(aa+12+la)>>2]|0;do{if((P|0)==(R|0)){O=la|16;g=ba+(J+O)|0;L=c[g>>2]|0;if((L|0)==0){e=ba+(O+aa)|0;O=c[e>>2]|0;if((O|0)==0){na=0;break}else{qa=O;ra=e}}else{qa=L;ra=g}while(1){g=qa+20|0;L=c[g>>2]|0;if((L|0)!=0){qa=L;ra=g;continue}g=qa+16|0;L=c[g>>2]|0;if((L|0)==0){break}else{qa=L;ra=g}}if(ra>>>0<(c[632]|0)>>>0){pa();return 0}else{c[ra>>2]=0;na=qa;break}}else{g=c[ba+((la|8)+aa)>>2]|0;if(g>>>0<(c[632]|0)>>>0){pa();return 0}L=g+12|0;if((c[L>>2]|0)!=(R|0)){pa();return 0}e=P+8|0;if((c[e>>2]|0)==(R|0)){c[L>>2]=P;c[e>>2]=g;na=P;break}else{pa();return 0}}}while(0);if((m|0)==0){break}P=c[ba+(aa+28+la)>>2]|0;U=2816+(P<<2)|0;do{if((R|0)==(c[U>>2]|0)){c[U>>2]=na;if((na|0)!=0){break}c[629]=c[629]&~(1<<P);break h}else{if(m>>>0<(c[632]|0)>>>0){pa();return 0}Q=m+16|0;if((c[Q>>2]|0)==(R|0)){c[Q>>2]=na}else{c[m+20>>2]=na}if((na|0)==0){break h}}}while(0);if(na>>>0<(c[632]|0)>>>0){pa();return 0}c[na+24>>2]=m;R=la|16;P=c[ba+(R+aa)>>2]|0;do{if((P|0)!=0){if(P>>>0<(c[632]|0)>>>0){pa();return 0}else{c[na+16>>2]=P;c[P+24>>2]=na;break}}}while(0);P=c[ba+(J+R)>>2]|0;if((P|0)==0){break}if(P>>>0<(c[632]|0)>>>0){pa();return 0}else{c[na+20>>2]=P;c[P+24>>2]=na;break}}}while(0);sa=ba+(($|la)+aa)|0;ta=$+K|0}else{sa=ca;ta=K}J=sa+4|0;c[J>>2]=c[J>>2]&-2;c[ba+(Z+4)>>2]=ta|1;c[ba+(ta+Z)>>2]=ta;J=ta>>>3;if(ta>>>0<256>>>0){V=J<<1;X=2552+(V<<2)|0;P=c[628]|0;m=1<<J;do{if((P&m|0)==0){c[628]=P|m;ua=X;va=2552+(V+2<<2)|0}else{J=2552+(V+2<<2)|0;U=c[J>>2]|0;if(!(U>>>0<(c[632]|0)>>>0)){ua=U;va=J;break}pa();return 0}}while(0);c[va>>2]=_;c[ua+12>>2]=_;c[ba+(Z+8)>>2]=ua;c[ba+(Z+12)>>2]=X;break}V=W;m=ta>>>8;do{if((m|0)==0){wa=0}else{if(ta>>>0>16777215>>>0){wa=31;break}P=(m+1048320|0)>>>16&8;$=m<<P;J=($+520192|0)>>>16&4;U=$<<J;$=(U+245760|0)>>>16&2;Q=14-(J|P|$)+(U<<$>>>15)|0;wa=ta>>>((Q+7|0)>>>0)&1|Q<<1}}while(0);m=2816+(wa<<2)|0;c[ba+(Z+28)>>2]=wa;c[ba+(Z+20)>>2]=0;c[ba+(Z+16)>>2]=0;X=c[629]|0;Q=1<<wa;if((X&Q|0)==0){c[629]=X|Q;c[m>>2]=V;c[ba+(Z+24)>>2]=m;c[ba+(Z+12)>>2]=V;c[ba+(Z+8)>>2]=V;break}if((wa|0)==31){xa=0}else{xa=25-(wa>>>1)|0}Q=ta<<xa;X=c[m>>2]|0;while(1){if((c[X+4>>2]&-8|0)==(ta|0)){break}ya=X+16+(Q>>>31<<2)|0;m=c[ya>>2]|0;if((m|0)==0){T=296;break}else{Q=Q<<1;X=m}}if((T|0)==296){if(ya>>>0<(c[632]|0)>>>0){pa();return 0}else{c[ya>>2]=V;c[ba+(Z+24)>>2]=X;c[ba+(Z+12)>>2]=V;c[ba+(Z+8)>>2]=V;break}}Q=X+8|0;m=c[Q>>2]|0;$=c[632]|0;if(X>>>0<$>>>0){pa();return 0}if(m>>>0<$>>>0){pa();return 0}else{c[m+12>>2]=V;c[Q>>2]=V;c[ba+(Z+8)>>2]=m;c[ba+(Z+12)>>2]=X;c[ba+(Z+24)>>2]=0;break}}}while(0);n=ba+(ka|8)|0;return n|0}}while(0);Y=da;Z=2960;while(1){za=c[Z>>2]|0;if(!(za>>>0>Y>>>0)){Aa=c[Z+4>>2]|0;Ba=za+Aa|0;if(Ba>>>0>Y>>>0){break}}Z=c[Z+8>>2]|0}Z=za+(Aa-39)|0;if((Z&7|0)==0){Ca=0}else{Ca=-Z&7}Z=za+(Aa-47+Ca)|0;W=Z>>>0<(da+16|0)>>>0?Y:Z;Z=W+8|0;_=ba+8|0;if((_&7|0)==0){Da=0}else{Da=-_&7}_=aa-40-Da|0;c[634]=ba+Da;c[631]=_;c[ba+(Da+4)>>2]=_|1;c[ba+(aa-36)>>2]=40;c[635]=c[622];c[W+4>>2]=27;c[Z>>2]=c[740];c[Z+4>>2]=c[741];c[Z+8>>2]=c[742];c[Z+12>>2]=c[743];c[740]=ba;c[741]=aa;c[743]=0;c[742]=Z;Z=W+28|0;c[Z>>2]=7;if((W+32|0)>>>0<Ba>>>0){_=Z;while(1){Z=_+4|0;c[Z>>2]=7;if((_+8|0)>>>0<Ba>>>0){_=Z}else{break}}}if((W|0)==(Y|0)){break}_=W-da|0;Z=Y+(_+4)|0;c[Z>>2]=c[Z>>2]&-2;c[da+4>>2]=_|1;c[Y+_>>2]=_;Z=_>>>3;if(_>>>0<256>>>0){K=Z<<1;ca=2552+(K<<2)|0;S=c[628]|0;m=1<<Z;do{if((S&m|0)==0){c[628]=S|m;Ea=ca;Fa=2552+(K+2<<2)|0}else{Z=2552+(K+2<<2)|0;Q=c[Z>>2]|0;if(!(Q>>>0<(c[632]|0)>>>0)){Ea=Q;Fa=Z;break}pa();return 0}}while(0);c[Fa>>2]=da;c[Ea+12>>2]=da;c[da+8>>2]=Ea;c[da+12>>2]=ca;break}K=da;m=_>>>8;do{if((m|0)==0){Ga=0}else{if(_>>>0>16777215>>>0){Ga=31;break}S=(m+1048320|0)>>>16&8;Y=m<<S;W=(Y+520192|0)>>>16&4;Z=Y<<W;Y=(Z+245760|0)>>>16&2;Q=14-(W|S|Y)+(Z<<Y>>>15)|0;Ga=_>>>((Q+7|0)>>>0)&1|Q<<1}}while(0);m=2816+(Ga<<2)|0;c[da+28>>2]=Ga;c[da+20>>2]=0;c[da+16>>2]=0;ca=c[629]|0;Q=1<<Ga;if((ca&Q|0)==0){c[629]=ca|Q;c[m>>2]=K;c[da+24>>2]=m;c[da+12>>2]=da;c[da+8>>2]=da;break}if((Ga|0)==31){Ha=0}else{Ha=25-(Ga>>>1)|0}Q=_<<Ha;ca=c[m>>2]|0;while(1){if((c[ca+4>>2]&-8|0)==(_|0)){break}Ka=ca+16+(Q>>>31<<2)|0;m=c[Ka>>2]|0;if((m|0)==0){T=331;break}else{Q=Q<<1;ca=m}}if((T|0)==331){if(Ka>>>0<(c[632]|0)>>>0){pa();return 0}else{c[Ka>>2]=K;c[da+24>>2]=ca;c[da+12>>2]=da;c[da+8>>2]=da;break}}Q=ca+8|0;_=c[Q>>2]|0;m=c[632]|0;if(ca>>>0<m>>>0){pa();return 0}if(_>>>0<m>>>0){pa();return 0}else{c[_+12>>2]=K;c[Q>>2]=K;c[da+8>>2]=_;c[da+12>>2]=ca;c[da+24>>2]=0;break}}}while(0);da=c[631]|0;if(!(da>>>0>o>>>0)){break}_=da-o|0;c[631]=_;da=c[634]|0;Q=da;c[634]=Q+o;c[Q+(o+4)>>2]=_|1;c[da+4>>2]=o|3;n=da+8|0;return n|0}}while(0);c[(Ja()|0)>>2]=12;n=0;return n|0}function Oe(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0;if((a|0)==0){return}b=a-8|0;d=b;e=c[632]|0;if(b>>>0<e>>>0){pa()}f=c[a-4>>2]|0;g=f&3;if((g|0)==1){pa()}h=f&-8;i=a+(h-8)|0;j=i;a:do{if((f&1|0)==0){k=c[b>>2]|0;if((g|0)==0){return}l=-8-k|0;m=a+l|0;n=m;o=k+h|0;if(m>>>0<e>>>0){pa()}if((n|0)==(c[633]|0)){p=a+(h-4)|0;if((c[p>>2]&3|0)!=3){q=n;r=o;break}c[630]=o;c[p>>2]=c[p>>2]&-2;c[a+(l+4)>>2]=o|1;c[i>>2]=o;return}p=k>>>3;if(k>>>0<256>>>0){k=c[a+(l+8)>>2]|0;s=c[a+(l+12)>>2]|0;t=2552+(p<<1<<2)|0;do{if((k|0)!=(t|0)){if(k>>>0<e>>>0){pa()}if((c[k+12>>2]|0)==(n|0)){break}pa()}}while(0);if((s|0)==(k|0)){c[628]=c[628]&~(1<<p);q=n;r=o;break}do{if((s|0)==(t|0)){u=s+8|0}else{if(s>>>0<e>>>0){pa()}v=s+8|0;if((c[v>>2]|0)==(n|0)){u=v;break}pa()}}while(0);c[k+12>>2]=s;c[u>>2]=k;q=n;r=o;break}t=m;p=c[a+(l+24)>>2]|0;v=c[a+(l+12)>>2]|0;do{if((v|0)==(t|0)){w=a+(l+20)|0;x=c[w>>2]|0;if((x|0)==0){y=a+(l+16)|0;z=c[y>>2]|0;if((z|0)==0){A=0;break}else{B=z;C=y}}else{B=x;C=w}while(1){w=B+20|0;x=c[w>>2]|0;if((x|0)!=0){B=x;C=w;continue}w=B+16|0;x=c[w>>2]|0;if((x|0)==0){break}else{B=x;C=w}}if(C>>>0<e>>>0){pa()}else{c[C>>2]=0;A=B;break}}else{w=c[a+(l+8)>>2]|0;if(w>>>0<e>>>0){pa()}x=w+12|0;if((c[x>>2]|0)!=(t|0)){pa()}y=v+8|0;if((c[y>>2]|0)==(t|0)){c[x>>2]=v;c[y>>2]=w;A=v;break}else{pa()}}}while(0);if((p|0)==0){q=n;r=o;break}v=c[a+(l+28)>>2]|0;m=2816+(v<<2)|0;do{if((t|0)==(c[m>>2]|0)){c[m>>2]=A;if((A|0)!=0){break}c[629]=c[629]&~(1<<v);q=n;r=o;break a}else{if(p>>>0<(c[632]|0)>>>0){pa()}k=p+16|0;if((c[k>>2]|0)==(t|0)){c[k>>2]=A}else{c[p+20>>2]=A}if((A|0)==0){q=n;r=o;break a}}}while(0);if(A>>>0<(c[632]|0)>>>0){pa()}c[A+24>>2]=p;t=c[a+(l+16)>>2]|0;do{if((t|0)!=0){if(t>>>0<(c[632]|0)>>>0){pa()}else{c[A+16>>2]=t;c[t+24>>2]=A;break}}}while(0);t=c[a+(l+20)>>2]|0;if((t|0)==0){q=n;r=o;break}if(t>>>0<(c[632]|0)>>>0){pa()}else{c[A+20>>2]=t;c[t+24>>2]=A;q=n;r=o;break}}else{q=d;r=h}}while(0);d=q;if(!(d>>>0<i>>>0)){pa()}A=a+(h-4)|0;e=c[A>>2]|0;if((e&1|0)==0){pa()}do{if((e&2|0)==0){if((j|0)==(c[634]|0)){B=(c[631]|0)+r|0;c[631]=B;c[634]=q;c[q+4>>2]=B|1;if((q|0)!=(c[633]|0)){return}c[633]=0;c[630]=0;return}if((j|0)==(c[633]|0)){B=(c[630]|0)+r|0;c[630]=B;c[633]=q;c[q+4>>2]=B|1;c[d+B>>2]=B;return}B=(e&-8)+r|0;C=e>>>3;b:do{if(e>>>0<256>>>0){u=c[a+h>>2]|0;g=c[a+(h|4)>>2]|0;b=2552+(C<<1<<2)|0;do{if((u|0)!=(b|0)){if(u>>>0<(c[632]|0)>>>0){pa()}if((c[u+12>>2]|0)==(j|0)){break}pa()}}while(0);if((g|0)==(u|0)){c[628]=c[628]&~(1<<C);break}do{if((g|0)==(b|0)){D=g+8|0}else{if(g>>>0<(c[632]|0)>>>0){pa()}f=g+8|0;if((c[f>>2]|0)==(j|0)){D=f;break}pa()}}while(0);c[u+12>>2]=g;c[D>>2]=u}else{b=i;f=c[a+(h+16)>>2]|0;t=c[a+(h|4)>>2]|0;do{if((t|0)==(b|0)){p=a+(h+12)|0;v=c[p>>2]|0;if((v|0)==0){m=a+(h+8)|0;k=c[m>>2]|0;if((k|0)==0){E=0;break}else{F=k;G=m}}else{F=v;G=p}while(1){p=F+20|0;v=c[p>>2]|0;if((v|0)!=0){F=v;G=p;continue}p=F+16|0;v=c[p>>2]|0;if((v|0)==0){break}else{F=v;G=p}}if(G>>>0<(c[632]|0)>>>0){pa()}else{c[G>>2]=0;E=F;break}}else{p=c[a+h>>2]|0;if(p>>>0<(c[632]|0)>>>0){pa()}v=p+12|0;if((c[v>>2]|0)!=(b|0)){pa()}m=t+8|0;if((c[m>>2]|0)==(b|0)){c[v>>2]=t;c[m>>2]=p;E=t;break}else{pa()}}}while(0);if((f|0)==0){break}t=c[a+(h+20)>>2]|0;u=2816+(t<<2)|0;do{if((b|0)==(c[u>>2]|0)){c[u>>2]=E;if((E|0)!=0){break}c[629]=c[629]&~(1<<t);break b}else{if(f>>>0<(c[632]|0)>>>0){pa()}g=f+16|0;if((c[g>>2]|0)==(b|0)){c[g>>2]=E}else{c[f+20>>2]=E}if((E|0)==0){break b}}}while(0);if(E>>>0<(c[632]|0)>>>0){pa()}c[E+24>>2]=f;b=c[a+(h+8)>>2]|0;do{if((b|0)!=0){if(b>>>0<(c[632]|0)>>>0){pa()}else{c[E+16>>2]=b;c[b+24>>2]=E;break}}}while(0);b=c[a+(h+12)>>2]|0;if((b|0)==0){break}if(b>>>0<(c[632]|0)>>>0){pa()}else{c[E+20>>2]=b;c[b+24>>2]=E;break}}}while(0);c[q+4>>2]=B|1;c[d+B>>2]=B;if((q|0)!=(c[633]|0)){H=B;break}c[630]=B;return}else{c[A>>2]=e&-2;c[q+4>>2]=r|1;c[d+r>>2]=r;H=r}}while(0);r=H>>>3;if(H>>>0<256>>>0){d=r<<1;e=2552+(d<<2)|0;A=c[628]|0;E=1<<r;do{if((A&E|0)==0){c[628]=A|E;I=e;J=2552+(d+2<<2)|0}else{r=2552+(d+2<<2)|0;h=c[r>>2]|0;if(!(h>>>0<(c[632]|0)>>>0)){I=h;J=r;break}pa()}}while(0);c[J>>2]=q;c[I+12>>2]=q;c[q+8>>2]=I;c[q+12>>2]=e;return}e=q;I=H>>>8;do{if((I|0)==0){K=0}else{if(H>>>0>16777215>>>0){K=31;break}J=(I+1048320|0)>>>16&8;d=I<<J;E=(d+520192|0)>>>16&4;A=d<<E;d=(A+245760|0)>>>16&2;r=14-(E|J|d)+(A<<d>>>15)|0;K=H>>>((r+7|0)>>>0)&1|r<<1}}while(0);I=2816+(K<<2)|0;c[q+28>>2]=K;c[q+20>>2]=0;c[q+16>>2]=0;r=c[629]|0;d=1<<K;do{if((r&d|0)==0){c[629]=r|d;c[I>>2]=e;c[q+24>>2]=I;c[q+12>>2]=q;c[q+8>>2]=q}else{if((K|0)==31){L=0}else{L=25-(K>>>1)|0}A=H<<L;J=c[I>>2]|0;while(1){if((c[J+4>>2]&-8|0)==(H|0)){break}M=J+16+(A>>>31<<2)|0;E=c[M>>2]|0;if((E|0)==0){N=129;break}else{A=A<<1;J=E}}if((N|0)==129){if(M>>>0<(c[632]|0)>>>0){pa()}else{c[M>>2]=e;c[q+24>>2]=J;c[q+12>>2]=q;c[q+8>>2]=q;break}}A=J+8|0;B=c[A>>2]|0;E=c[632]|0;if(J>>>0<E>>>0){pa()}if(B>>>0<E>>>0){pa()}else{c[B+12>>2]=e;c[A>>2]=e;c[q+8>>2]=B;c[q+12>>2]=J;c[q+24>>2]=0;break}}}while(0);q=(c[636]|0)-1|0;c[636]=q;if((q|0)==0){O=2968}else{return}while(1){q=c[O>>2]|0;if((q|0)==0){break}else{O=q+8|0}}c[636]=-1;return}function Pe(a,b){a=a|0;b=b|0;var d=0,e=0;do{if((a|0)==0){d=0}else{e=_(b,a)|0;if(!((b|a)>>>0>65535>>>0)){d=e;break}d=((e>>>0)/(a>>>0)|0|0)==(b|0)?e:-1}}while(0);b=Ne(d)|0;if((b|0)==0){return b|0}if((c[b-4>>2]&3|0)==0){return b|0}Re(b|0,0,d|0)|0;return b|0}function Qe(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((e|0)>=4096)return Da(b|0,d|0,e|0)|0;f=b|0;if((b&3)==(d&3)){while(b&3){if((e|0)==0)return f|0;a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function Re(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;g=b&3;h=d|d<<8|d<<16|d<<24;i=f&~3;if(g){g=b+4-g|0;while((b|0)<(g|0)){a[b]=d;b=b+1|0}}while((b|0)<(i|0)){c[b>>2]=h;b=b+4|0}}while((b|0)<(f|0)){a[b]=d;b=b+1|0}return b-e|0}function Se(b){b=b|0;var c=0;c=b;while(a[c]|0){c=c+1|0}return c-b|0}function Te(a,b){a=a|0;b=b|0;return Pa[a&1](b|0)|0}function Ue(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return+Qa[a&15](b|0,c|0,d|0)}function Ve(a,b){a=a|0;b=b|0;Ra[a&1](b|0)}function We(a,b,c){a=a|0;b=b|0;c=c|0;Sa[a&127](b|0,c|0)}function Xe(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Ta[a&1](b|0,c|0,d|0)|0}function Ye(a){a=a|0;Ua[a&1]()}function Ze(a,b,c){a=a|0;b=b|0;c=c|0;return Va[a&1](b|0,c|0)|0}function _e(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;Wa[a&15](b|0,c|0,d|0,e|0)}function $e(a){a=a|0;$(0);return 0}function af(a,b,c){a=a|0;b=b|0;c=c|0;$(1);return 0.0}function bf(a){a=a|0;$(2)}function cf(a,b){a=a|0;b=b|0;$(3)}function df(a,b,c){a=a|0;b=b|0;c=c|0;$(4);return 0}function ef(){$(5)}function ff(a,b){a=a|0;b=b|0;$(6);return 0}function gf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;$(7)}




// EMSCRIPTEN_END_FUNCS
var Pa=[$e,$e];var Qa=[af,af,ud,af,vd,af,wd,af,sd,af,td,af,xd,af,af,af];var Ra=[bf,bf];var Sa=[cf,cf,$c,cf,tc,cf,md,cf,Xc,cf,Oc,cf,Jc,cf,Ic,cf,Lc,cf,Mc,cf,rc,cf,hd,cf,Fe,cf,_c,cf,Hd,cf,Wc,cf,Kc,cf,Bc,cf,ve,cf,Ec,cf,De,cf,ld,cf,Pc,cf,ad,cf,He,cf,jd,cf,Zc,cf,Cc,cf,Hc,cf,cd,cf,id,cf,fd,cf,bd,cf,Vc,cf,ze,cf,yc,cf,dd,cf,Qc,cf,Be,cf,gd,cf,zc,cf,Id,cf,Jd,cf,Yc,cf,sc,cf,kd,cf,Kd,cf,ed,cf,xe,cf,Ac,cf,Dc,cf,Nc,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf,cf];var Ta=[df,df];var Ua=[ef,ef];var Va=[ff,ff];var Wa=[gf,gf,Bd,gf,Dd,gf,Ad,gf,Cd,gf,gf,gf,gf,gf,gf,gf];return{_ostgl_resize:re,_strlen:Se,_glPopName:ic,_glPushName:hc,_glPushMatrix:Mb,_glLightfv:Wb,_glTranslatef:Pb,_memcpy:Qe,_glPolygonOffset:kc,_glMaterialf:Ub,_glColor4f:sb,_glTexCoord2f:xb,_glLoadIdentity:Kb,_glArrayElement:we,_glScalef:Qb,_glMaterialfv:Tb,_free:Oe,_glNormal3fv:rb,_glVertexPointer:Ce,_glVertex3fv:pb,_glLightModeli:Yb,_glNewList:uc,_glHint:nc,_glBegin:Gb,_glColor3fv:vb,_glTexCoord2fv:yb,_glViewport:Rb,_glDeleteTextures:Uc,_ostgl_create_context:oe,_glRenderMode:Fd,_glEnable:Eb,_glGenTextures:Tc,_glGetIntegerv:Md,_glClose:Gc,_glTexCoord4f:wb,_glSelectBuffer:Gd,_glColor3f:ub,_glGenLists:xc,_glCullFace:Bb,_glLoadMatrixf:Jb,_glVertex2f:nb,_ostgl_copy_framebuffer:se,_glInit:Fc,_glLightf:Xb,_glEnableClientState:ye,_glCallList:lc,_glLoadName:jc,_memset:Re,_glNormalPointer:Ge,_glClearColor:$b,_glBindTexture:cc,_glPolygonMode:Db,_glGetFloatv:Nd,_glColor4fv:tb,_glInitNames:gc,_glEdgeFlag:zb,_glTexCoordPointer:Ie,_glFrontFace:Cb,_glRotatef:Ob,_malloc:Ne,_glTexImage2D:bc,_glDisableClientState:Ae,_glFlush:mc,_glEndList:vc,_calloc:Pe,_glTexEnvi:dc,_glColorPointer:Ee,_glClear:_b,_glPopMatrix:Nb,_glMatrixMode:Ib,_glLightModelfv:Zb,_glVertex4f:mb,_glNormal3f:qb,_glPixelStorei:fc,_glFrustum:Sb,_glVertex3f:ob,_glClearDepth:ac,_glShadeModel:Ab,_glDebug:oc,_ostgl_delete_context:pe,_glEnd:Hb,_glIsList:wc,_glMultMatrixf:Lb,_glDisable:Fb,_glTexParameteri:ec,_ostgl_make_current:qe,_glColorMaterial:Vb,runPostSets:lb,stackAlloc:Xa,stackSave:Ya,stackRestore:Za,setThrew:_a,setTempRet0:bb,setTempRet1:cb,setTempRet2:db,setTempRet3:eb,setTempRet4:fb,setTempRet5:gb,setTempRet6:hb,setTempRet7:ib,setTempRet8:jb,setTempRet9:kb,dynCall_ii:Te,dynCall_fiii:Ue,dynCall_vi:Ve,dynCall_vii:We,dynCall_iiii:Xe,dynCall_v:Ye,dynCall_iii:Ze,dynCall_viiii:_e}
// EMSCRIPTEN_END_ASM

})({Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array},{abort:D,assert:A,asmPrintInt:function(a,b){r.print("int "+a+","+b)},asmPrintFloat:function(a,b){r.print("float "+a+","+b)},min:ta,invoke_ii:function(a,b){try{return r.dynCall_ii(a,b)}catch(c){"number"!==typeof c&&"longjmp"!==c&&e(c),$.setThrew(1,0)}},invoke_fiii:function(a,
b,c,d){try{return r.dynCall_fiii(a,b,c,d)}catch(f){"number"!==typeof f&&"longjmp"!==f&&e(f),$.setThrew(1,0)}},invoke_vi:function(a,b){try{r.dynCall_vi(a,b)}catch(c){"number"!==typeof c&&"longjmp"!==c&&e(c),$.setThrew(1,0)}},invoke_vii:function(a,b,c){try{r.dynCall_vii(a,b,c)}catch(d){"number"!==typeof d&&"longjmp"!==d&&e(d),$.setThrew(1,0)}},invoke_iiii:function(a,b,c,d){try{return r.dynCall_iiii(a,b,c,d)}catch(f){"number"!==typeof f&&"longjmp"!==f&&e(f),$.setThrew(1,0)}},invoke_v:function(a){try{r.dynCall_v(a)}catch(b){"number"!==
typeof b&&"longjmp"!==b&&e(b),$.setThrew(1,0)}},invoke_iii:function(a,b,c){try{return r.dynCall_iii(a,b,c)}catch(d){"number"!==typeof d&&"longjmp"!==d&&e(d),$.setThrew(1,0)}},invoke_viiii:function(a,b,c,d,f){try{r.dynCall_viiii(a,b,c,d,f)}catch(g){"number"!==typeof g&&"longjmp"!==g&&e(g),$.setThrew(1,0)}},_llvm_lifetime_end:p(),_fabsf:kc,_sysconf:function(a){switch(a){case 30:return 4096;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 79:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:return 200809;
case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;
case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1E3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:return 1}ib(T.u);return-1},_abort:function(){r.abort()},_fprintf:function(a,b,c){c=
hc(b,c);b=x.Wa();a=ec(N(c,"i8",1),1,c.length,a);x.Va(b);return a},_sqrt:Wa,_fflush:p(),__reallyNegative:gc,_sqrtf:Wa,_fputc:jc,___setErrNo:ib,_fwrite:ec,_send:function(a,b,c){return!Z.ac(a)?(ib(T.fa),-1):cc(a,b,c)},_write:cc,_exit:function(a){lc(a)},_sin:Va,__formatString:hc,_emscripten_memcpy_big:function(a,b,c){P.set(P.subarray(b,b+c),a);return a},_fileno:dc,_cos:Ua,_pwrite:function(a,b,c,d){a=X[a];if(!a)return ib(T.fa),-1;try{return Vb(a,K,b,c,d)}catch(f){return Bb(f),-1}},_llvm_pow_f64:Xa,_sbrk:mc,
___errno_location:function(){return hb},_llvm_lifetime_start:p(),_mkport:bc,_time:function(a){var b=Math.floor(Date.now()/1E3);a&&(L[a>>2]=b);return b},__exit:lc,STACKTOP:v,STACK_MAX:Ga,tempDoublePtr:db,ABORT:ja,NaN:NaN,Infinity:Infinity,_stderr:cb},R);r._ostgl_resize=$._ostgl_resize;var fc=r._strlen=$._strlen;r._glPopName=$._glPopName;r._glPushName=$._glPushName;r._glPushMatrix=$._glPushMatrix;r._glLightfv=$._glLightfv;r._glTranslatef=$._glTranslatef;var eb=r._memcpy=$._memcpy;
r._glPolygonOffset=$._glPolygonOffset;r._glMaterialf=$._glMaterialf;r._glColor4f=$._glColor4f;r._glTexCoord2f=$._glTexCoord2f;r._glLoadIdentity=$._glLoadIdentity;r._glArrayElement=$._glArrayElement;r._glScalef=$._glScalef;r._glMaterialfv=$._glMaterialfv;r._free=$._free;r._glNormal3fv=$._glNormal3fv;r._glVertexPointer=$._glVertexPointer;r._glVertex3fv=$._glVertex3fv;r._glLightModeli=$._glLightModeli;r._glNewList=$._glNewList;r._glHint=$._glHint;r._glBegin=$._glBegin;r._glColor3fv=$._glColor3fv;
r._glTexCoord2fv=$._glTexCoord2fv;r._glViewport=$._glViewport;r._glDeleteTextures=$._glDeleteTextures;r._ostgl_create_context=$._ostgl_create_context;r._glRenderMode=$._glRenderMode;r._glEnable=$._glEnable;r._glGenTextures=$._glGenTextures;r._glGetIntegerv=$._glGetIntegerv;r._glClose=$._glClose;r._glTexCoord4f=$._glTexCoord4f;r._glSelectBuffer=$._glSelectBuffer;r._glColor3f=$._glColor3f;r._glGenLists=$._glGenLists;r._glCullFace=$._glCullFace;r._glLoadMatrixf=$._glLoadMatrixf;r._glVertex2f=$._glVertex2f;
r._ostgl_copy_framebuffer=$._ostgl_copy_framebuffer;r._glInit=$._glInit;r._glLightf=$._glLightf;r._glEnableClientState=$._glEnableClientState;r._glCallList=$._glCallList;r._glLoadName=$._glLoadName;var fb=r._memset=$._memset;r._glNormalPointer=$._glNormalPointer;r._glClearColor=$._glClearColor;r._glBindTexture=$._glBindTexture;r._glPolygonMode=$._glPolygonMode;r._glGetFloatv=$._glGetFloatv;r._glColor4fv=$._glColor4fv;r._glInitNames=$._glInitNames;r._glEdgeFlag=$._glEdgeFlag;r._glTexCoordPointer=$._glTexCoordPointer;
r._glFrontFace=$._glFrontFace;r._glRotatef=$._glRotatef;var za=r._malloc=$._malloc;r._glTexImage2D=$._glTexImage2D;r._glDisableClientState=$._glDisableClientState;r._glFlush=$._glFlush;r._glEndList=$._glEndList;r._calloc=$._calloc;r._glTexEnvi=$._glTexEnvi;r._glColorPointer=$._glColorPointer;r._glClear=$._glClear;r._glPopMatrix=$._glPopMatrix;r._glMatrixMode=$._glMatrixMode;r._glLightModelfv=$._glLightModelfv;r._glVertex4f=$._glVertex4f;r._glNormal3f=$._glNormal3f;r._glPixelStorei=$._glPixelStorei;
r._glFrustum=$._glFrustum;r._glVertex3f=$._glVertex3f;r._glClearDepth=$._glClearDepth;r._glShadeModel=$._glShadeModel;r._glDebug=$._glDebug;r._ostgl_delete_context=$._ostgl_delete_context;r._glEnd=$._glEnd;r._glIsList=$._glIsList;r._glMultMatrixf=$._glMultMatrixf;r._glDisable=$._glDisable;r._glTexParameteri=$._glTexParameteri;r._ostgl_make_current=$._ostgl_make_current;r._glColorMaterial=$._glColorMaterial;var bb=r.runPostSets=$.runPostSets;r.dynCall_ii=$.dynCall_ii;r.dynCall_fiii=$.dynCall_fiii;
r.dynCall_vi=$.dynCall_vi;r.dynCall_vii=$.dynCall_vii;r.dynCall_iiii=$.dynCall_iiii;r.dynCall_v=$.dynCall_v;r.dynCall_iii=$.dynCall_iii;r.dynCall_viiii=$.dynCall_viiii;x.Ua=function(a){return $.stackAlloc(a)};x.Wa=function(){return $.stackSave()};x.Va=function(a){$.stackRestore(a)};var ic=m;function Dc(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Dc.prototype=Error();var Ec,Fc=m,Za=function Gc(){!r.calledRun&&Hc&&Ic();r.calledRun||(Za=Gc)};
r.callMain=r.ze=function(a){function b(){for(var a=0;3>a;a++)d.push(0)}A(0==S,"cannot call main when async dependencies remain! (listen on __ATMAIN__)");A(0==Ka.length,"cannot call main when preRun functions remain to be called");a=a||[];ba&&Fc!==m&&r.U("preload time: "+(Date.now()-Fc)+" ms");Pa||(Pa=j,Ja(La));var c=a.length+1,d=[N(J("/bin/this.program"),"i8",0)];b();for(var f=0;f<c-1;f+=1)d.push(N(J(a[f]),"i8",0)),b();d.push(0);d=N(d,"i32",0);Ec=v;try{var g=r._main(c,d,0);r.noExitRuntime||Jc(g)}catch(h){h instanceof
Dc||("SimulateInfiniteLoop"==h?r.noExitRuntime=j:(h&&("object"===typeof h&&h.stack)&&r.U("exception thrown: "+[h,h.stack]),e(h)))}finally{}};
function Ic(a){function b(){if(!r.calledRun){r.calledRun=j;Pa||(Pa=j,Ja(La));Ja(Ma);r._main&&Hc&&r.callMain(a);if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)Ra(r.postRun.shift());Ja(Oa)}}a=a||r.arguments;Fc===m&&(Fc=Date.now());if(0<S)r.U("run() called, but dependencies remain, so not running");else{if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)Qa(r.preRun.shift());Ja(Ka);!(0<S)&&!r.calledRun&&(r.setStatus?(r.setStatus("Running..."),
setTimeout(function(){setTimeout(function(){r.setStatus("")},1);ja||b()},1)):b())}}r.run=r.Ze=Ic;function Jc(a){ja=j;v=Ec;Ja(Na);e(new Dc(a))}r.exit=r.De=Jc;function D(a){a&&(r.print(a),r.U(a));ja=j;e("abort() at "+Ba())}r.abort=r.abort=D;if(r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();var Hc=j;r.noInitialRun&&(Hc=n);Ic();


	const BYTES_PER_INT8    = 1;
	const BYTES_PER_UINT8   = 1;
	const BYTES_PER_INT16   = 2;
	const BYTES_PER_UINT16  = 2;
	const BYTES_PER_INT32   = 4;
	const BYTES_PER_UINT32  = 4;
	const BYTES_PER_FLOAT32 = 4;
	const BYTES_PER_FLOAT64 = 8;
	
	var _ostgl_create_context = Module.cwrap('ostgl_create_context', 'number', ['number', 'number', 'number', 'number', 'number']);
	var _ostgl_delete_context = Module.cwrap('ostgl_delete_context', null, ['number']);
	var _ostgl_make_current = Module.cwrap('ostgl_make_current', null, ['number', 'number']);
	var _ostgl_resize = Module.cwrap('ostgl_resize', null, ['number', 'number', 'number', 'number']);
	var _ostgl_copy_framebuffer = Module.cwrap('ostgl_copy_framebuffer', null, ['number', 'number', 'number', 'number']);

	var _glEnable = Module.cwrap('glEnable', null, ['number']);
	var _glDisable = Module.cwrap('glDisable', null, ['number']);
	var _glShadeModel = Module.cwrap('glShadeModel', null, ['number']);
	var _glCullFace = Module.cwrap('glCullFace', null, ['number']);
	var _glPolygonMode = Module.cwrap('glPolygonMode', null, ['number', 'number']);
	var _glBegin = Module.cwrap('glBegin', null, ['number']);
	var _glEnd = Module.cwrap('glEnd', null, []);
	var _glVertex2f = Module.cwrap('glVertex2f', null, ['number', 'number']);
	var _glVertex3f = Module.cwrap('glVertex3f', null, ['number', 'number', 'number']);
	var _glVertex4f = Module.cwrap('glVertex4f', null, ['number', 'number', 'number', 'number']);
	var _glColor3f = Module.cwrap('glColor3f', null, ['number', 'number', 'number']);
	var _glColor4f = Module.cwrap('glColor4f', null, ['number', 'number', 'number', 'number']);
	var _glNormal3f = Module.cwrap('glNormal3f', null, ['number', 'number', 'number']);
	var _glTexCoord2f = Module.cwrap('glTexCoord2f', null, ['number', 'number']);
	var _glTexCoord4f = Module.cwrap('glTexCoord4f', null, ['number', 'number', 'number', 'number']);
	var _glEdgeFlag = Module.cwrap('glEdgeFlag', null, ['number']);
	var _glMatrixMode = Module.cwrap('glMatrixMode', null, ['number']);
	var _glLoadIdentity = Module.cwrap('glLoadIdentity', null, []);
	var _glLoadMatrixf = Module.cwrap('glLoadMatrixf', null, ['number']);
	var _glMultMatrixf = Module.cwrap('glMultMatrixf', null, ['number']);
	var _glPushMatrix = Module.cwrap('glPushMatrix', null, []);
	var _glPopMatrix = Module.cwrap('glPopMatrix', null, []);
	var _glRotatef = Module.cwrap('glRotatef', null, ['number', 'number', 'number', 'number']);
	var _glTranslatef = Module.cwrap('glTranslatef', null, ['number', 'number', 'number']);
	var _glScalef = Module.cwrap('glScalef', null, ['number', 'number', 'number']);
	var _glViewport = Module.cwrap('glViewport', null, ['number', 'number', 'number', 'number']);
	var _glFrustum = Module.cwrap('glFrustum', null, ['number', 'number', 'number', 'number', 'number', 'number']);
	var _glGenLists = Module.cwrap('glGenLists', 'number', ['number']);
	var _glIsList = Module.cwrap('glIsList', 'number', ['number']);
	var _glNewList = Module.cwrap('glNewList', null, ['number', 'number']);
	var _glEndList = Module.cwrap('glEndList', null, []);
	var _glCallList = Module.cwrap('glCallList', null, ['number']);
	var _glClear = Module.cwrap('glClear', null, ['number']);
	var _glClearColor = Module.cwrap('glClearColor', null, ['number', 'number', 'number', 'number']);
	var _glClearDepth = Module.cwrap('glClearDepth', null, ['number']);
	var _glRenderMode = Module.cwrap('glRenderMode', 'number', ['number']);
	var _glSelectBuffer = Module.cwrap('glSelectBuffer', null, ['number', 'number']);
	var _glInitNames = Module.cwrap('glInitNames', null, []);
	var _glPushName = Module.cwrap('glPushName', null, ['number']);
	var _glPopName = Module.cwrap('glPopName', null, []);
	var _glLoadName = Module.cwrap('glLoadName', null, ['number']);	
	var _glGenTextures = Module.cwrap('glGenTextures', null, ['number', 'number']);
	var _glDeleteTextures = Module.cwrap('glDeleteTextures', null, ['number', 'number']);
	var _glBindTexture = Module.cwrap('glBindTexture', null, ['number', 'number']);
	var _glTexImage2D = Module.cwrap('glTexImage2D', null, ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']);
	var _glTexEnvi = Module.cwrap('glTexEnvi', null, ['number', 'number', 'number']);
	var _glTexParameteri = Module.cwrap('glTexParameteri', null, ['number', 'number', 'number']);
	var _glPixelStorei = Module.cwrap('glPixelStorei', null, ['number', 'number']);
	var _glMaterialf = Module.cwrap('glMaterialf', null, ['number', 'number', 'number']);
	var _glMaterialfv = Module.cwrap('glMaterialfv', null, ['number', 'number', 'number']);
	var _glColorMaterial = Module.cwrap('glColorMaterial', null, ['number', 'number']);
	var _glLightf = Module.cwrap('glLightf', null, ['number', 'number', 'number']);
	var _glLightfv = Module.cwrap('glLightfv', null, ['number', 'number', 'number']);
	var _glLightModeli = Module.cwrap('glLightModeli', null, ['number', 'number']);
	var _glLightModelfv = Module.cwrap('glLightModelfv', null, ['number', 'number']);
	var _glFlush = Module.cwrap('glFlush', null, []);
	var _glHint = Module.cwrap('glHint', null, ['number', 'number']);
	var _glGetIntegerv = Module.cwrap('glGetIntegerv', null, ['number', 'number']);
	var _glGetFloatv = Module.cwrap('glGetFloatv', null, ['number', 'number']);
	var _glFrontFace = Module.cwrap('glFrontFace', null, ['number']);
	var _glEnableClientState = Module.cwrap('glEnableClientState', null, ['number']);
	var _glDisableClientState = Module.cwrap('glDisableClientState', null, ['number']);
	var _glArrayElement = Module.cwrap('glArrayElement', null, ['number']);
	var _glVertexPointer = Module.cwrap('glVertexPointer', null, ['number', 'number', 'number', 'number']);
	var _glColorPointer = Module.cwrap('glColorPointer', null, ['number', 'number', 'number', 'number']);
	var _glNormalPointer = Module.cwrap('glNormalPointer', null, ['number', 'number', 'number', 'number']);
	var _glTexCoordPointer = Module.cwrap('glTexCoordPointer', null, ['number', 'number', 'number', 'number']);
	var _glPolygonOffset = Module.cwrap('glPolygonOffset', null, ['number', 'number']);
	var _glDebug = Module.cwrap('glDebug', null, ['number']);
	
	function createTGLContext(width, height, framebuf_ptr) {
		// use a temporary pointer array with only 1 element to pass in our own framebuffer
		var framebuf_ptr_arr_ptr = Module._malloc(BYTES_PER_UINT32);
		Module.setValue(framebuf_ptr_arr_ptr, framebuf_ptr, 'i32');
		var tgl_ctx_ptr = _ostgl_create_context(width, height, 32/* 32bit RGBA */, framebuf_ptr_arr_ptr, 1);
		Module._free(framebuf_ptr_arr_ptr);

		_ostgl_make_current(tgl_ctx_ptr, 0);
		return tgl_ctx_ptr;
	}

	function reallocateFramebuffer(width, height, old_framebuf_ptr) {
		if (old_framebuf_ptr)
			Module._free(old_framebuf_ptr);
		var new_framebuf_size = width * height * BYTES_PER_UINT32;
		// returns pointer to the new framebuffer on heap
		return Module._malloc(new_framebuf_size);
	}

	function calcAdjustedWidth(width) {
		// TinyGL requires the width of a framebuffer to be multiples of 4
		return width & ~3;
	}

	var util_canvas = null;

	function getUtilCanvas(width, height) {
		var isClean = false;
		if (!util_canvas) {
			isClean = true;
			if ((typeof document) != 'undefined')
				util_canvas = document.createElement('canvas');
		}

		if (!util_canvas)
			return null;

		if (util_canvas.width != width || util_canvas.height != height) {
			util_canvas.width  = width;
			util_canvas.height = height;
			isClean = true;
		}

		if (!isClean) {
			var ctx2d = util_canvas.getContext('2d');
			ctx2d.clearRect(0, 0, width, height);
		}

		return util_canvas;
	}

	function grabPixelsRGBToUint8Array(canvas) {
		var ctx2d = canvas.getContext('2d');
		var imgData = ctx2d.getImageData(0, 0, canvas.width, canvas.height);
		var data = imgData.data;
		var pixels = new Uint8Array(canvas.width * canvas.height * 3);
		for (var i=0, j=0, k=0, l=data.length>>2; i<l; i++, j+=3, k+=4) {
			pixels[j    ] = data[k    ];
			pixels[j + 1] = data[k + 1];
			pixels[j + 2] = data[k + 2];
		}
		return pixels;
	}

	function flipPixelsY(pixels, bytes_per_line, gen_new_array) {
		if (gen_new_array)
			pixels = new Uint8Array(pixels);

		var lines = pixels.length / bytes_per_line;
		var n = lines >> 1;
		for (var i=0; i<n; i++) {
			var p0 = i * bytes_per_line;
			var p1 = (lines - i - 1) * bytes_per_line;
			var tmp;
			for (var j=0; j<bytes_per_line; j++, p0++, p1++) {
				tmp = pixels[p0];
				pixels[p0] = pixels[p1];
				pixels[p1] = tmp;
			}
		}

		return pixels;
	}


	/**
	 * @class 
	 */
	function TinyGLRenderingContextCtor(canvas, attribs) {
		this._canvas = canvas;
		this._attribs = attribs || {};
		this._surface = canvas.getContext('2d');

		var w = calcAdjustedWidth(canvas.width);
		var h = canvas.height;

		this._back_data = this._surface.createImageData(w, h);
		this._frame_buf_ptr = reallocateFramebuffer(w, h, 0);
		this._tgl_ctx = createTGLContext(w, h, this._frame_buf_ptr);

		this._is_select_mode = false;
		this._select_output_buf = null;
		this._select_internal_buf_ptr = 0;
		this._select_buf_length = 0;

		this._array_coord_buf_ptr = 0;
		this._array_color_buf_ptr = 0;
		this._array_normal_buf_ptr = 0;
		this._array_texcoord_buf_ptr = 0;
	}

	TinyGLRenderingContextCtor.prototype = {

		// Boolean values
		//

		FALSE: 0, 
		TRUE: 1, 

		// Data types
		//

		BYTE: 0x1400, 
		UNSIGNED_BYTE: 0x1401, 
		SHORT: 0x1402, 
		UNSIGNED_SHORT: 0x1403, 
		INT: 0x1404, 
		UNSIGNED_INT: 0x1405, 
		FLOAT: 0x1406, 
		DOUBLE: 0x140A, 
//		2_BYTES: 0x1407, 
//		3_BYTES: 0x1408, 
//		4_BYTES: 0x1409, 

		// Primitives
		//

		POINTS: 0x0000, 
		LINES: 0x0001, 
		LINE_LOOP: 0x0002, 
		LINE_STRIP: 0x0003, 
		TRIANGLES: 0x0004, 
		TRIANGLE_STRIP: 0x0005, 
		TRIANGLE_FAN: 0x0006, 
		QUADS: 0x0007, 
		QUAD_STRIP: 0x0008, 
		POLYGON: 0x0009, 
		EDGE_FLAG: 0x0B43, 

		// Vertex Arrays
		//

		VERTEX_ARRAY: 0x8074, 
		NORMAL_ARRAY: 0x8075, 
		COLOR_ARRAY: 0x8076, 
		INDEX_ARRAY: 0x8077, 
		TEXTURE_COORD_ARRAY: 0x8078, 
		EDGE_FLAG_ARRAY: 0x8079, 
		VERTEX_ARRAY_SIZE: 0x807A, 
		VERTEX_ARRAY_TYPE: 0x807B, 
		VERTEX_ARRAY_STRIDE: 0x807C, 
		VERTEX_ARRAY_COUNT: 0x807D, 
		NORMAL_ARRAY_TYPE: 0x807E, 
		NORMAL_ARRAY_STRIDE: 0x807F, 
		NORMAL_ARRAY_COUNT: 0x8080, 
		COLOR_ARRAY_SIZE: 0x8081, 
		COLOR_ARRAY_TYPE:  0x8082,
		COLOR_ARRAY_STRIDE:  0x8083,
		COLOR_ARRAY_COUNT:  0x8084,
		INDEX_ARRAY_TYPE:  0x8085,
		INDEX_ARRAY_STRIDE:  0x8086,
		INDEX_ARRAY_COUNT:  0x8087,
		TEXTURE_COORD_ARRAY_SIZE:  0x8088,
		TEXTURE_COORD_ARRAY_TYPE:  0x8089,
		TEXTURE_COORD_ARRAY_STRIDE:  0x808A,
		TEXTURE_COORD_ARRAY_COUNT:  0x808B,
		EDGE_FLAG_ARRAY_STRIDE:  0x808C,
		EDGE_FLAG_ARRAY_COUNT:  0x808D,
		VERTEX_ARRAY_POINTER:  0x808E,
		NORMAL_ARRAY_POINTER:  0x808F,
		COLOR_ARRAY_POINTER:  0x8090,
		INDEX_ARRAY_POINTER:  0x8091,
		TEXTURE_COORD_ARRAY_POINTER:  0x8092,
		EDGE_FLAG_ARRAY_POINTER:  0x8093,
		V2F: 0x2A20,
		V3F:  0x2A21,
		C4UB_V2F:  0x2A22,
		C4UB_V3F:  0x2A23,
		C3F_V3F:  0x2A24,
		N3F_V3F:  0x2A25,
		C4F_N3F_V3F:  0x2A26,
		T2F_V3F:  0x2A27,
		T4F_V4F:  0x2A28,
		T2F_C4UB_V3F:  0x2A29,
		T2F_C3F_V3F:  0x2A2A,
		T2F_N3F_V3F:  0x2A2B,
		T2F_C4F_N3F_V3F:  0x2A2C,
		T4F_C4F_N3F_V4F:  0x2A2D,

		// Matrix Mode
		//

		MATRIX_MODE:  0x0BA0,
		MODELVIEW:  0x1700,
		PROJECTION:  0x1701,
		TEXTURE:  0x1702,

		// Points
		//

		POINT_SMOOTH:  0x0B10,
		POINT_SIZE:  0x0B11,
		POINT_SIZE_GRANULARITY :  0x0B13,
		POINT_SIZE_RANGE:  0x0B12,

		// Lines
		//

		LINE_SMOOTH:  0x0B20,
		LINE_STIPPLE:  0x0B24,
		LINE_STIPPLE_PATTERN:  0x0B25,
		LINE_STIPPLE_REPEAT:  0x0B26,
		LINE_WIDTH:  0x0B21,
		LINE_WIDTH_GRANULARITY:  0x0B23,
		LINE_WIDTH_RANGE:  0x0B22,

		// Polygons
		//

		POINT:  0x1B00,
		LINE:  0x1B01,
		FILL:  0x1B02,
		CCW:  0x0901,
		CW:  0x0900,
		FRONT:  0x0404,
		BACK:  0x0405,
		CULL_FACE:  0x0B44,
		CULL_FACE_MODE:  0x0B45,
		POLYGON_SMOOTH:  0x0B41,
		POLYGON_STIPPLE:  0x0B42,
		FRONT_FACE:  0x0B46,
		POLYGON_MODE:  0x0B40,
		POLYGON_OFFSET_FACTOR:  0x3038,
		POLYGON_OFFSET_UNITS:  0x2A00,
		POLYGON_OFFSET_POINT:  0x2A01,
		POLYGON_OFFSET_LINE:  0x2A02,
		POLYGON_OFFSET_FILL:  0x8037,

		// Display Lists
		//

		COMPILE:  0x1300,
		COMPILE_AND_EXECUTE:  0x1301,
		LIST_BASE:  0x0B32,
		LIST_INDEX:  0x0B33,
		LIST_MODE:  0x0B30,

		// Depth buffer
		//

		NEVER:  0x0200,
		LESS:  0x0201,
		GEQUAL:  0x0206,
		LEQUAL:  0x0203,
		GREATER:  0x0204,
		NOTEQUAL:  0x0205,
		EQUAL:  0x0202,
		ALWAYS:  0x0207,
		DEPTH_TEST:  0x0B71,
		DEPTH_BITS:  0x0D56,
		DEPTH_CLEAR_VALUE:  0x0B73,
		DEPTH_FUNC:  0x0B74,
		DEPTH_RANGE:  0x0B70,
		DEPTH_WRITEMASK:  0x0B72,
		DEPTH_COMPONENT:  0x1902,

		// Lighting
		//

		LIGHTING:  0x0B50,
		LIGHT0:  0x4000,
		LIGHT1:  0x4001,
		LIGHT2:  0x4002,
		LIGHT3:  0x4003,
		LIGHT4:  0x4004,
		LIGHT5:  0x4005,
		LIGHT6:  0x4006,
		LIGHT7:  0x4007,
		SPOT_EXPONENT:  0x1205,
		SPOT_CUTOFF:  0x1206,
		CONSTANT_ATTENUATION:  0x1207,
		LINEAR_ATTENUATION:  0x1208,
		QUADRATIC_ATTENUATION:  0x1209,
		AMBIENT:  0x1200,
		DIFFUSE:  0x1201,
		SPECULAR:  0x1202,
		SHININESS:  0x1601,
		EMISSION:  0x1600,
		POSITION:  0x1203,
		SPOT_DIRECTION:  0x1204,
		AMBIENT_AND_DIFFUSE:  0x1602,
		COLOR_INDEXES:  0x1603,
		LIGHT_MODEL_TWO_SIDE:  0x0B52,
		LIGHT_MODEL_LOCAL_VIEWER:  0x0B51,
		LIGHT_MODEL_AMBIENT:  0x0B53,
		FRONT_AND_BACK:  0x0408,
		SHADE_MODEL:  0x0B54,
		FLAT:  0x1D00,
		SMOOTH:  0x1D01,
		COLOR_MATERIAL:  0x0B57,
		COLOR_MATERIAL_FACE:  0x0B55,
		COLOR_MATERIAL_PARAMETER:  0x0B56,
		NORMALIZE:  0x0BA1,

		// User clipping planes
		//

		CLIP_PLANE0:  0x3000,
		CLIP_PLANE1:  0x3001,
		CLIP_PLANE2:  0x3002,
		CLIP_PLANE3:  0x3003,
		CLIP_PLANE4:  0x3004,
		CLIP_PLANE5:  0x3005,

		// Accumulation buffer
		//

		ACCUM_RED_BITS:  0x0D58,
		ACCUM_GREEN_BITS:  0x0D59,
		ACCUM_BLUE_BITS:  0x0D5A,
		ACCUM_ALPHA_BITS:  0x0D5B,
		ACCUM_CLEAR_VALUE:  0x0B80,
		ACCUM:  0x0100,
		ADD:  0x0104,
		LOAD:  0x0101,
		MULT:  0x0103,
		RETURN:  0x0102,

		// Alpha testing
		//

		ALPHA_TEST:  0x0BC0,
		ALPHA_TEST_REF:  0x0BC2,
		ALPHA_TEST_FUNC:  0x0BC1,

		// Blending
		//

		BLEND:  0x0BE2,
		BLEND_SRC:  0x0BE1,
		BLEND_DST:  0x0BE0,
		ZERO:  0,
		ONE:  1,
		SRC_COLOR:  0x0300,
		ONE_MINUS_SRC_COLOR:  0x0301,
		DST_COLOR:  0x0306,
		ONE_MINUS_DST_COLOR:  0x0307,
		SRC_ALPHA:  0x0302,
		ONE_MINUS_SRC_ALPHA:  0x0303,
		DST_ALPHA:  0x0304,
		ONE_MINUS_DST_ALPHA:  0x0305,
		SRC_ALPHA_SATURATE:  0x0308,
		CONSTANT_COLOR:  0x8001,
		ONE_MINUS_CONSTANT_COLOR:  0x8002,
		CONSTANT_ALPHA:  0x8003,
		ONE_MINUS_CONSTANT_ALPHA:  0x8004,

		// Render Mode
		//

		FEEDBACK:  0x1C01,
		RENDER:  0x1C00,
		SELECT:  0x1C02,

		// Feedback
		//

//		2D:  0x0600,
//		3D:  0x0601,
//		3D_COLOR:  0x0602,
//		3D_COLOR_TEXTURE:  0x0603,
//		4D_COLOR_TEXTURE:  0x0604,
		POINT_TOKEN:  0x0701,
		LINE_TOKEN:  0x0702,
		LINE_RESET_TOKEN:  0x0707,
		POLYGON_TOKEN:  0x0703,
		BITMAP_TOKEN:  0x0704,
		DRAW_PIXEL_TOKEN:  0x0705,
		COPY_PIXEL_TOKEN:  0x0706,
		PASS_THROUGH_TOKEN:  0x0700,

		// Fog
		//

		FOG:  0x0B60,
		FOG_MODE:  0x0B65,
		FOG_DENSITY:  0x0B62,
		FOG_COLOR:  0x0B66,
		FOG_INDEX:  0x0B61,
		FOG_START:  0x0B63,
		FOG_END:  0x0B64,
		LINEAR:  0x2601,
		EXP:  0x0800,
		EXP2:  0x0801,

		// Logic Ops
		//

		LOGIC_OP:  0x0BF1,
		LOGIC_OP_MODE:  0x0BF0,
		CLEAR:  0x1500,
		SET:  0x150F,
		COPY:  0x1503,
		COPY_INVERTED:  0x150C,
		NOOP:  0x1505,
		INVERT:  0x150A,
		AND:  0x1501,
		NAND:  0x150E,
		OR:  0x1507,
		NOR:  0x1508,
		XOR:  0x1506,
		EQUIV:  0x1509,
		AND_REVERSE:  0x1502,
		AND_INVERTED:  0x1504,
		OR_REVERSE:  0x150B,
		OR_INVERTED:  0x150D,

		// Stencil
		//

		STENCIL_TEST:  0x0B90,
		STENCIL_WRITEMASK:  0x0B98,
		STENCIL_BITS:  0x0D57,
		STENCIL_FUNC:  0x0B92,
		STENCIL_VALUE_MASK:  0x0B93,
		STENCIL_REF:  0x0B97,
		STENCIL_FAIL:  0x0B94,
		STENCIL_PASS_DEPTH_PASS:  0x0B96,
		STENCIL_PASS_DEPTH_FAIL:  0x0B95,
		STENCIL_CLEAR_VALUE:  0x0B91,
		STENCIL_INDEX:  0x1901,
		KEEP:  0x1E00,
		REPLACE:  0x1E01,
		INCR:  0x1E02,
		DECR:  0x1E03,

		// Buffers, Pixel Drawing/Reading
		//

		NONE:  0,
		LEFT:  0x0406,
		RIGHT:  0x0407,
		FRONT: 0x0404,
		BACK: 0x0405,
		FRONT_AND_BACK: 0x0408, 
		FRONT_LEFT:  0x0400,
		FRONT_RIGHT:  0x0401,
		BACK_LEFT:  0x0402,
		BACK_RIGHT:  0x0403,
		AUX0:  0x0409,
		AUX1:  0x040A,
		AUX2:  0x040B,
		AUX3:  0x040C,
		COLOR_INDEX:  0x1900,
		RED:  0x1903,
		GREEN:  0x1904,
		BLUE:  0x1905,
		ALPHA:  0x1906,
		LUMINANCE:  0x1909,
		LUMINANCE_ALPHA:  0x190A,
		ALPHA_BITS:  0x0D55,
		RED_BITS:  0x0D52,
		GREEN_BITS:  0x0D53,
		BLUE_BITS:  0x0D54,
		INDEX_BITS:  0x0D51,
		SUBPIXEL_BITS:  0x0D50,
		AUX_BUFFERS:  0x0C00,
		READ_BUFFER:  0x0C02,
		DRAW_BUFFER:  0x0C01,
		DOUBLEBUFFER:  0x0C32,
		STEREO:  0x0C33,
		BITMAP:  0x1A00,
		COLOR:  0x1800,
		DEPTH:  0x1801,
		STENCIL:  0x1802,
		DITHER:  0x0BD0,
		RGB:  0x1907,
		RGBA:  0x1908,

		// Implementation limits
		//

		MAX_LIST_NESTING:  0x0B31,
		MAX_ATTRIB_STACK_DEPTH:  0x0D35,
		MAX_MODELVIEW_STACK_DEPTH:  0x0D36,
		MAX_NAME_STACK_DEPTH:  0x0D37,
		MAX_PROJECTION_STACK_DEPTH:  0x0D38,
		MAX_TEXTURE_STACK_DEPTH:  0x0D39,
		MAX_EVAL_ORDER:  0x0D30,
		MAX_LIGHTS:  0x0D31,
		MAX_CLIP_PLANES:  0x0D32,
		MAX_TEXTURE_SIZE:  0x0D33,
		MAX_PIXEL_MAP_TABLE:  0x0D34,
		MAX_VIEWPORT_DIMS:  0x0D3A,
		MAX_CLIENT_ATTRIB_STACK_DEPTH: 0x0D3B,

		// Gets
		//

		ATTRIB_STACK_DEPTH:  0x0BB0,
		COLOR_CLEAR_VALUE:  0x0C22,
		COLOR_WRITEMASK:  0x0C23,
		CURRENT_INDEX:  0x0B01,
		CURRENT_COLOR:  0x0B00,
		CURRENT_NORMAL:  0x0B02,
		CURRENT_RASTER_COLOR:  0x0B04,
		CURRENT_RASTER_DISTANCE:  0x0B09,
		CURRENT_RASTER_INDEX:  0x0B05,
		CURRENT_RASTER_POSITION:  0x0B07,
		CURRENT_RASTER_TEXTURE_COORDS: 0x0B06,
		CURRENT_RASTER_POSITION_VALID: 0x0B08,
		CURRENT_TEXTURE_COORDS:  0x0B03,
		INDEX_CLEAR_VALUE:  0x0C20,
		INDEX_MODE:  0x0C30,
		INDEX_WRITEMASK:  0x0C21,
		MODELVIEW_MATRIX:  0x0BA6,
		MODELVIEW_STACK_DEPTH:  0x0BA3,
		NAME_STACK_DEPTH:  0x0D70,
		PROJECTION_MATRIX:  0x0BA7,
		PROJECTION_STACK_DEPTH:  0x0BA4,
		RENDER_MODE:  0x0C40,
		RGBA_MODE:  0x0C31,
		TEXTURE_MATRIX:  0x0BA8,
		TEXTURE_STACK_DEPTH:  0x0BA5,
		VIEWPORT:  0x0BA2,

		// Evaluators
		//

		AUTO_NORMAL:  0x0D80,
		MAP1_COLOR_4:  0x0D90,
		MAP1_GRID_DOMAIN:  0x0DD0,
		MAP1_GRID_SEGMENTS:  0x0DD1,
		MAP1_INDEX:  0x0D91,
		MAP1_NORMAL:  0x0D92,
		MAP1_TEXTURE_COORD_1:  0x0D93,
		MAP1_TEXTURE_COORD_2:  0x0D94,
		MAP1_TEXTURE_COORD_3:  0x0D95,
		MAP1_TEXTURE_COORD_4:  0x0D96,
		MAP1_VERTEX_3:  0x0D97,
		MAP1_VERTEX_4:  0x0D98,
		MAP2_COLOR_4:  0x0DB0,
		MAP2_GRID_DOMAIN:  0x0DD2,
		MAP2_GRID_SEGMENTS:  0x0DD3,
		MAP2_INDEX:  0x0DB1,
		MAP2_NORMAL:  0x0DB2,
		MAP2_TEXTURE_COORD_1:  0x0DB3,
		MAP2_TEXTURE_COORD_2:  0x0DB4,
		MAP2_TEXTURE_COORD_3:  0x0DB5,
		MAP2_TEXTURE_COORD_4:  0x0DB6,
		MAP2_VERTEX_3:  0x0DB7,
		MAP2_VERTEX_4:  0x0DB8,
		COEFF:  0x0A00,
		DOMAIN:  0x0A02,
		ORDER:  0x0A01,

		// Hints
		//

		FOG_HINT:  0x0C54,
		LINE_SMOOTH_HINT:  0x0C52,
		PERSPECTIVE_CORRECTION_HINT:  0x0C50,
		POINT_SMOOTH_HINT:  0x0C51,
		POLYGON_SMOOTH_HINT:  0x0C53,
		DONT_CARE:  0x1100,
		FASTEST:  0x1101,
		NICEST:  0x1102,

		// Scissor box
		//

		SCISSOR_TEST:  0x0C11,
		SCISSOR_BOX:  0x0C10,

		// Pixel Mode / Transfer
		//

		MAP_COLOR:  0x0D10,
		MAP_STENCIL:  0x0D11,
		INDEX_SHIFT:  0x0D12,
		INDEX_OFFSET:  0x0D13,
		RED_SCALE:  0x0D14,
		RED_BIAS:  0x0D15,
		GREEN_SCALE:  0x0D18,
		GREEN_BIAS:  0x0D19,
		BLUE_SCALE:  0x0D1A,
		BLUE_BIAS:  0x0D1B,
		ALPHA_SCALE:  0x0D1C,
		ALPHA_BIAS:  0x0D1D,
		DEPTH_SCALE:  0x0D1E,
		DEPTH_BIAS:  0x0D1F,
		PIXEL_MAP_S_TO_S_SIZE:  0x0CB1,
		PIXEL_MAP_I_TO_I_SIZE:  0x0CB0,
		PIXEL_MAP_I_TO_R_SIZE:  0x0CB2,
		PIXEL_MAP_I_TO_G_SIZE:  0x0CB3,
		PIXEL_MAP_I_TO_B_SIZE:  0x0CB4,
		PIXEL_MAP_I_TO_A_SIZE:  0x0CB5,
		PIXEL_MAP_R_TO_R_SIZE:  0x0CB6,
		PIXEL_MAP_G_TO_G_SIZE:  0x0CB7,
		PIXEL_MAP_B_TO_B_SIZE:  0x0CB8,
		PIXEL_MAP_A_TO_A_SIZE:  0x0CB9,
		PIXEL_MAP_S_TO_S:  0x0C71,
		PIXEL_MAP_I_TO_I:  0x0C70,
		PIXEL_MAP_I_TO_R:  0x0C72,
		PIXEL_MAP_I_TO_G:  0x0C73,
		PIXEL_MAP_I_TO_B:  0x0C74,
		PIXEL_MAP_I_TO_A:  0x0C75,
		PIXEL_MAP_R_TO_R:  0x0C76,
		PIXEL_MAP_G_TO_G:  0x0C77,
		PIXEL_MAP_B_TO_B:  0x0C78,
		PIXEL_MAP_A_TO_A:  0x0C79,
		PACK_ALIGNMENT:  0x0D05,
		PACK_LSB_FIRST:  0x0D01,
		PACK_ROW_LENGTH:  0x0D02,
		PACK_SKIP_PIXELS:  0x0D04,
		PACK_SKIP_ROWS:  0x0D03,
		PACK_SWAP_BYTES:  0x0D00,
		UNPACK_ALIGNMENT:  0x0CF5,
		UNPACK_LSB_FIRST:  0x0CF1,
		UNPACK_ROW_LENGTH:  0x0CF2,
		UNPACK_SKIP_PIXELS:  0x0CF4,
		UNPACK_SKIP_ROWS:  0x0CF3,
		UNPACK_SWAP_BYTES:  0x0CF0,
		ZOOM_X:  0x0D16,
		ZOOM_Y:  0x0D17,

		// Texture mapping
		//

		TEXTURE_ENV:  0x2300,
		TEXTURE_ENV_MODE:  0x2200,
		TEXTURE_1D:  0x0DE0,
		TEXTURE_2D:  0x0DE1,
		TEXTURE_WRAP_S:  0x2802,
		TEXTURE_WRAP_T:  0x2803,
		TEXTURE_MAG_FILTER:  0x2800,
		TEXTURE_MIN_FILTER:  0x2801,
		TEXTURE_ENV_COLOR:  0x2201,
		TEXTURE_GEN_S:  0x0C60,
		TEXTURE_GEN_T:  0x0C61,
		TEXTURE_GEN_MODE:  0x2500,
		TEXTURE_BORDER_COLOR:  0x1004,
		TEXTURE_WIDTH:  0x1000,
		TEXTURE_HEIGHT:  0x1001,
		TEXTURE_BORDER:  0x1005,
		TEXTURE_COMPONENTS:  0x1003,
		NEAREST_MIPMAP_NEAREST:  0x2700,
		NEAREST_MIPMAP_LINEAR:  0x2702,
		LINEAR_MIPMAP_NEAREST:  0x2701,
		LINEAR_MIPMAP_LINEAR:  0x2703,
		OBJECT_LINEAR:  0x2401,
		OBJECT_PLANE:  0x2501,
		EYE_LINEAR:  0x2400,
		EYE_PLANE:  0x2502,
		SPHERE_MAP:  0x2402,
		DECAL:  0x2101,
		MODULATE:  0x2100,
		NEAREST:  0x2600,
		REPEAT:  0x2901,
		CLAMP:  0x2900,
		S:  0x2000,
		T:  0x2001,
		R:  0x2002,
		Q:  0x2003,
		TEXTURE_GEN_R:  0x0C62,
		TEXTURE_GEN_Q:  0x0C63,
		PROXY_TEXTURE_1D:  0x8063,
		PROXY_TEXTURE_2D:  0x8064,
		TEXTURE_PRIORITY:  0x8066,
		TEXTURE_RESIDENT:  0x8067,
		TEXTURE_1D_BINDING:  0x8068,
		TEXTURE_2D_BINDING:  0x8069,

		// Internal texture formats
		//

		ALPHA4:  0x803B,
		ALPHA8:  0x803C,
		ALPHA12:  0x803D,
		ALPHA16:  0x803E,
		LUMINANCE4:  0x803F,
		LUMINANCE8:  0x8040,
		LUMINANCE12:  0x8041,
		LUMINANCE16:  0x8042,
		LUMINANCE4_ALPHA4:  0x8043,
		LUMINANCE6_ALPHA2:  0x8044,
		LUMINANCE8_ALPHA8:  0x8045,
		LUMINANCE12_ALPHA4:  0x8046,
		LUMINANCE12_ALPHA12:  0x8047,
		LUMINANCE16_ALPHA16:  0x8048,
		INTENSITY:  0x8049,
		INTENSITY4:  0x804A,
		INTENSITY8:  0x804B,
		INTENSITY12:  0x804C,
		INTENSITY16:  0x804D,
		R3_G3_B2:  0x2A10,
		RGB4:  0x804F,
		RGB5:  0x8050,
		RGB8:  0x8051,
		RGB10:  0x8052,
		RGB12:  0x8053,
		RGB16:  0x8054,
		RGBA2:  0x8055,
		RGBA4:  0x8056,
		RGB5_A1:  0x8057,
		RGBA8:  0x8058,
		RGB10_A2:  0x8059,
		RGBA12:  0x805A,
		RGBA16:  0x805B,

		// Utility
		//

		VENDOR:  0x1F00,
		RENDERER:  0x1F01,
		VERSION:  0x1F02,
		EXTENSIONS:  0x1F03,

		// Errors
		//

		INVALID_VALUE:  0x0501,
		INVALID_ENUM:  0x0500,
		INVALID_OPERATION:  0x0502,
		STACK_OVERFLOW:  0x0503,
		STACK_UNDERFLOW:  0x0504,
		OUT_OF_MEMORY:  0x0505,

		/*
		 * 1.0 Extensions
		 */

		// GL_EXT_blend_minmax and GL_EXT_blend_color
		//

		CONSTANT_COLOR_EXT:  0x8001,
		ONE_MINUS_CONSTANT_COLOR_EXT:  0x8002,
		CONSTANT_ALPHA_EXT:  0x8003,
		ONE_MINUS_CONSTANT_ALPHA_EXT:  0x8004,
		BLEND_EQUATION_EXT:  0x8009,
		MIN_EXT:  0x8007,
		MAX_EXT:  0x8008,
		FUNC_ADD_EXT:  0x8006,
		FUNC_SUBTRACT_EXT:  0x800A,
		FUNC_REVERSE_SUBTRACT_EXT:  0x800B,
		BLEND_COLOR_EXT:  0x8005,

		// GL_EXT_polygon_offset
		//

		POLYGON_OFFSET_EXT: 0x8037,
		POLYGON_OFFSET_FACTOR_EXT: 0x8038,
		POLYGON_OFFSET_BIAS_EXT: 0x8039,

		// GL_EXT_vertex_array
		//

		VERTEX_ARRAY_EXT:  0x8074,
		NORMAL_ARRAY_EXT:  0x8075,
		COLOR_ARRAY_EXT:  0x8076,
		INDEX_ARRAY_EXT:  0x8077,
		TEXTURE_COORD_ARRAY_EXT:  0x8078,
		EDGE_FLAG_ARRAY_EXT:  0x8079,
		VERTEX_ARRAY_SIZE_EXT:  0x807A,
		VERTEX_ARRAY_TYPE_EXT:  0x807B,
		VERTEX_ARRAY_STRIDE_EXT:  0x807C,
		VERTEX_ARRAY_COUNT_EXT:  0x807D,
		NORMAL_ARRAY_TYPE_EXT:  0x807E,
		NORMAL_ARRAY_STRIDE_EXT:  0x807F,
		NORMAL_ARRAY_COUNT_EXT:  0x8080,
		COLOR_ARRAY_SIZE_EXT:  0x8081,
		COLOR_ARRAY_TYPE_EXT:  0x8082,
		COLOR_ARRAY_STRIDE_EXT:  0x8083,
		COLOR_ARRAY_COUNT_EXT:  0x8084,
		INDEX_ARRAY_TYPE_EXT:  0x8085,
		INDEX_ARRAY_STRIDE_EXT:  0x8086,
		INDEX_ARRAY_COUNT_EXT:  0x8087,
		TEXTURE_COORD_ARRAY_SIZE_EXT:  0x8088,
		TEXTURE_COORD_ARRAY_TYPE_EXT:  0x8089,
		TEXTURE_COORD_ARRAY_STRIDE_EXT: 0x808A,
		TEXTURE_COORD_ARRAY_COUNT_EXT: 0x808B,
		EDGE_FLAG_ARRAY_STRIDE_EXT:  0x808C,
		EDGE_FLAG_ARRAY_COUNT_EXT:  0x808D,
		VERTEX_ARRAY_POINTER_EXT:  0x808E,
		NORMAL_ARRAY_POINTER_EXT:  0x808F,
		COLOR_ARRAY_POINTER_EXT:  0x8090,
		INDEX_ARRAY_POINTER_EXT:  0x8091,
		TEXTURE_COORD_ARRAY_POINTER_EXT: 0x8092,
		EDGE_FLAG_ARRAY_POINTER_EXT:  0x8093, 

		CURRENT_BIT:  0x00000001,
		POINT_BIT:  0x00000002,
		LINE_BIT:  0x00000004,
		POLYGON_BIT:  0x00000008,
		POLYGON_STIPPLE_BIT:  0x00000010,
		PIXEL_MODE_BIT:  0x00000020,
		LIGHTING_BIT:  0x00000040,
		FOG_BIT:  0x00000080,
		DEPTH_BUFFER_BIT:  0x00000100,
		ACCUM_BUFFER_BIT:  0x00000200,
		STENCIL_BUFFER_BIT:  0x00000400,
		VIEWPORT_BIT:  0x00000800,
		TRANSFORM_BIT:  0x00001000,
		ENABLE_BIT:  0x00002000,
		COLOR_BUFFER_BIT:  0x00004000,
		HINT_BIT:  0x00008000,
		EVAL_BIT:  0x00010000,
		LIST_BIT:  0x00020000,
		TEXTURE_BIT:  0x00040000,
		SCISSOR_BIT:  0x00080000,
		ALL_ATTRIB_BITS:  0x000FFFFF, 

		/* 
		 * Functions
		 */

		enable: function(code) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEnable(code);
		}, 

		disable: function(code) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDisable(code);
		}, 

		shadeModel: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glShadeModel(mode);
		}, 

		cullFace: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glCullFace(mode);
		}, 

		polygonMode: function(face, mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPolygonMode(face, mode);
		}, 

		begin: function(type) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glBegin(type);
		}, 

		end: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEnd();
		}, 

		vertex2f: function(x, y) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex2f(x, y);
		}, 

		vertex2d: function(x, y) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex2f(x, y);
		}, 

		vertex2fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex2f.apply(null, v);
		}, 

		vertex2dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex2f.apply(null, v);
		}, 

		vertex3f: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex3f(x, y, z);
		}, 

		vertex3d: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex3f(x, y, z);
		}, 

		vertex3fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex3f.apply(null, v);
		}, 

		vertex3dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex3f.apply(null, v);
		}, 

		vertex4f: function(x, y, z, w) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex4f(x, y, z, w);
		}, 

		vertex4d: function(x, y, z, w) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex4f(x, y, z, w);
		}, 

		vertex4fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex4f.apply(null, v);
		}, 

		vertex4dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex4f.apply(null, v);
		}, 

		color3f: function(r, g, b) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor3f(r, g, b);
		}, 

		color3d: function(r, g, b) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor3f(r, g, b);
		}, 

		color3fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor3f.apply(null, v);
		}, 

		color3dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor3f.apply(null, v);
		}, 

		color4f: function(r, g, b, a) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor4f(r, g, b, a);
		}, 

		color4d: function(r, g, b, a) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor4f(r, g, b, a);
		}, 

		color4fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor4f.apply(null, v);
		}, 

		color4dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor4f.apply(null, v);
		}, 

		normal3f: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNormal3f(x, y, z);
		}, 

		normal3d: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNormal3f(x, y, z);
		}, 

		normal3fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNormal3f.apply(null, v);
		}, 

		normal3dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNormal3f.apply(null, v);
		}, 

		texCoord1f: function(s) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord1d: function(s) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord1fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord1dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord2f: function(s, t) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord2f(s, t);
		}, 

		texCoord2d: function(s, t) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord2f(s, t);
		}, 

		texCoord2fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord2f.apply(null, v);
		}, 

		texCoord2dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord2f.apply(null, v);
		},

		texCoord3f: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord3d: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord3fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord3d: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord4f: function(s, t, r, q) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord4f(s, t, r, q);
		}, 

		texCoord4d: function(s, t, r, q) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord4f(s, t, r, q);
		}, 

		texCoord4fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord4f.apply(null, v);
		}, 

		texCoord4dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord4f.apply(null, v);
		}, 

		edgeFlag: function(flag) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEdgeFlag(flag);
		}, 

		// Matrices
		//

		matrixMode: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glMatrixMode(mode);
		}, 

		loadIdentity: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLoadIdentity();
		}, 

		loadMatrixf: function(m) {
			var buf_ptr = Module._malloc(m.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(m, buf_ptr / BYTES_PER_FLOAT32);
			//console.info(new Float32Array(Module.HEAPF32.subarray(buf_ptr >> 2, (buf_ptr >> 2) + 16)));
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLoadMatrixf(buf_ptr);
			Module._free(buf_ptr);
		}, 

		multMatrixf: function(m) {
			var buf_ptr = Module._malloc(m.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(m, buf_ptr / BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glMultMatrixf(buf_ptr);
			Module._free(buf_ptr);
		}, 

		pushMatrix: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPushMatrix();
		}, 

		popMatrix: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPopMatrix();
		}, 

		rotatef: function(angle, x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glRotatef(angle, x, y, z);
		}, 

		translatef: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTranslatef(x, y, z);
		}, 

		scalef: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glScalef(x, y, z);
		}, 

		viewport: function(x, y, width, height) {
			_ostgl_make_current(this._tgl_ctx, 0);

			// calculate new framebuffer dimensions from the given viewport
			var req_framebuf_width  = calcAdjustedWidth(x + width);
			var req_framebuf_height = y + height;

			// resize and reallocate framebuffer as well as imageData if necessary
			if( req_framebuf_width != this._back_data.width || 
				req_framebuf_height != this._back_data.height ) {
				this._frame_buf_ptr = reallocateFramebuffer(req_framebuf_width, req_framebuf_height, this._frame_buf_ptr);

				var framebuf_ptr_arr_ptr = Module._malloc(BYTES_PER_UINT32);
				Module.setValue(framebuf_ptr_arr_ptr, this._frame_buf_ptr, 'i32');
				_ostgl_resize(this._tgl_ctx, req_framebuf_width, req_framebuf_height, framebuf_ptr_arr_ptr);
				Module._free(framebuf_ptr_arr_ptr);

				this._back_data = this._surface.createImageData(req_framebuf_width, req_framebuf_height);
			}

			// calculate the adjusted width and height of the viewport
			width  = req_framebuf_width - x;
			height = req_framebuf_height - y;

			_glViewport(x, y, width, height);
		}, 

		frustum: function(left, right, bottom, top, near, far) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glFrustum(left, right, bottom, top, near, far);
		}, 

		// Lists
		//
		//TODO: consider wrapping lists as objects

		genLists: function(range) {
			_ostgl_make_current(this._tgl_ctx, 0);
			return _glGenLists(range);
		}, 

		isList: function(list) {
			_ostgl_make_current(this._tgl_ctx, 0);
			return _glIsList(list);
		}, 

		newList: function(list, mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNewList(list, mode);
		}, 

		endList: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEndList();
		}, 

		callList: function(list) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glCallList(list);
		}, 

		// Clear
		//

		clear: function(mask) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glClear(mask);
		}, 

		clearColor: function(r, g, b, a) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glClearColor(r, g, b, a);
		}, 

		clearDepth: function(depth) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glClearDepth(depth);
		}, 

		// Selection
		//

		renderMode: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			var result = _glRenderMode(mode);

			switch (mode) {
			case this.SELECT:
				this._is_select_mode = true;
				break;
			case this.RENDER:
				// copy selection results from heap memory to output buffer on exit of selection mode
				if (this._is_select_mode) {
					for (var i=0, ptr=this._select_internal_buf_ptr; i<this._select_buf_length; i++, ptr+=BYTES_PER_UINT32) {
						this._select_output_buf[i] = Module.getValue(ptr, 'i32');
					}
				}
				// falls down
			default:
				this._is_select_mode = false;
				break;
			}

			return result;
		}, 

		selectBuffer: function(size, buf) {
			// reallocate heap memory to store selection results
			if (this._select_internal_buf_ptr)
				Module._free(this._select_internal_buf_ptr);
			this._select_internal_buf_ptr = Module._malloc(size * BYTES_PER_UINT32);
			// clear memory block
			Module._memset(this._select_internal_buf_ptr, 0, size * BYTES_PER_UINT32);

			_ostgl_make_current(this._tgl_ctx, 0);
			_glSelectBuffer(size, this._select_internal_buf_ptr);

			// The results will be copied to the given array on next call 
			// of renderMode() method with mode GL_RENDER.
			this._select_output_buf = buf;
			this._select_buf_length = size;
		}, 

		initNames: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glInitNames();
		}, 

		pushName: function(name) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPushName(name);
		}, 

		popName: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPopName();
		}, 

		loadName: function(name) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLoadName(name);
		}, 

		// Textures
		//
		//TODO: consider wrapping textures as objects like that in WebGL implementation

		genTextures: function(num, ids) {
			ids = ids || new Uint32Array(num);
			var buf_ptr = Module._malloc(num * BYTES_PER_UINT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glGenTextures(num, buf_ptr);
			for (var i=0, ptr=buf_ptr; i<num; i++, ptr+=BYTES_PER_UINT32) {
				ids[i] = Module.getValue(ptr, 'i32');
			}
			Module._free(buf_ptr);
			return ids;
		}, 

		deleteTextures: function(num, ids) {
			var buf_ptr = Module._malloc(num * BYTES_PER_UINT32);
			Module.HEAPU32.set(ids, buf_ptr / BYTES_PER_UINT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDeleteTextures(num, buf_ptr);
			Module._free(buf_ptr);
		}, 

		bindTexture: function(target, texture) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glBindTexture(target, texture);
		}, 
		
		texImage2D: function(target, level, components, width, height, border, format, type, pixels) {
			_ostgl_make_current(this._tgl_ctx, 0);

			if (arguments.length == 9) {
				/*
				 * Signature 1: 
				 *
				 *   texImage2D(target, level, components, width, height, border, format, type, pixels)
				 *
				 * where pixels can be an array or a typed array.
				 */
				if ((typeof pixels.buffer) != 'undefined')
					pixels = new Uint8Array(pixels.buffer);
				if (this._attribs.flipTextureY)
					pixels = flipPixelsY(pixels, pixels.length, true);
				if ((typeof pixels.buffer) != 'undefined')
					pixels = new Uint8Array(pixels.buffer);

				var buf_ptr = Module._malloc(pixels.length);
				Module.HEAPU8.set(pixels, buf_ptr);
				_glTexImage2D(target, level, components, width, height, border, format, type, buf_ptr);
				Module._free(buf_ptr);
			} else if (arguments.length == 6) {
				/*
				 * Signature 2: 
				 *
				 *   texImage2D(target, level, components, format, type, domElement)
				 * 
				 * where domElement can be either <img>, <video> or <canvas>.
				 */
				var domElement = arguments[5];
				var elem_type = '';
				if ((typeof HTMLImageElement) != 'undefined' && (domElement instanceof HTMLImageElement)) {
					elem_type = 'image';
				} else if ((typeof HTMLVideoElement) != 'undefined' && (domElement instanceof HTMLVideoElement)) {
					elem_type = 'video';
				} else if ((typeof HTMLCanvasElement) != 'undefined' && (domElement instanceof HTMLCanvasElement)) {
					elem_type = 'canvas';
				}

				var cv = null;
				switch (elem_type) {
				case 'image':
				case 'video':
					cv = getUtilCanvas(/*domElement.width, domElement.height*/ 256, 256);
					var ctx2d = cv.getContext('2d');
					ctx2d.drawImage(domElement, 0, 0, cv.width, cv.height);
					break;
				case 'canvas':
					cv = domElement;
					break;
				default:
					//TODO: log warnings for the wrong input?
					return;
				}

				var pixels = grabPixelsRGBToUint8Array(cv);
				if (this._attribs.flipTextureY)
					flipPixelsY(pixels, 3 * cv.width);

				var buf_ptr = Module._malloc(pixels.length);
				Module.HEAPU8.set(pixels, buf_ptr);
				_glTexImage2D(target, level, 3, cv.width, cv.height, 0, gl.RGB, gl.UNSIGNED_BYTE, buf_ptr);
				Module._free(buf_ptr);
			}
		}, 

		texEnvi: function(target, pname, param) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexEnvi(target, pname, param);
		}, 

		texParameteri: function(target, pname, param) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexParameteri(target, pname, param);
		}, 

		pixelStorei: function(pname, param) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPixelStorei(pname, param);
		}, 

		// Lighting
		//

		materialf: function(mode, type, v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glMaterialf(mode, type, v);
		}, 

		materialfv: function(mode, type, v) {
			var buf_ptr = Module._malloc(v.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(v, buf_ptr / BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glMaterialfv(mode, type, buf_ptr);
			Module._free(buf_ptr);
		}, 

		colorMaterial: function(mode, type) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColorMaterial(mode, type);
		}, 

		lightf: function(light, type, v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLightf(light, type, v);
		}, 

		lightfv: function(light, type, v) {
			var buf_ptr = Module._malloc(v.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(v, buf_ptr / BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLightfv(light, type, buf_ptr);
			Module._free(buf_ptr);
		}, 

		lightModeli: function(pname, v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLightModeli(pname, v);
		}, 

		lightModelfv: function(pname, v) {
			var buf_ptr = Module._malloc(v.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(v, buf_ptr / BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLightModelfv(pname, buf_ptr);
			Module._free(buf_ptr);
		}, 

		// Misc
		//

		flush: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glFlush();
		}, 

		hint: function(target, mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glHint(target, mode);
		}, 

		getIntegerv: function(pname, v) {
			v = v || new Int32Array(4);
			var buf_ptr = Module._malloc(v.length * Int32Array.prototype.BYTES_PER_ELEMENT);
			Module._memset(buf_ptr, 0, v.length * Int32Array.prototype.BYTES_PER_ELEMENT);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glGetIntegerv(pname, buf_ptr);
			for (var i=0, ptr=buf_ptr; i<v.length; i++, ptr+=Int32Array.prototype.BYTES_PER_ELEMENT) {
				v[i] = Module.getValue(ptr, 'i32');
			}
			Module._free(buf_ptr);
			return v;
		}, 

		getFloatv: function(pname, v) {
			v = v || new Float32Array(16);
			var buf_ptr = Module._malloc(v.length * BYTES_PER_FLOAT32);
			Module._memset(buf_ptr, 0, v.length * BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glGetFloatv(pname, buf_ptr);
			for (var i=0, ptr=buf_ptr; i<v.length; i++, ptr+=BYTES_PER_FLOAT32) {
				v[i] = Module.getValue(ptr, 'float');
			}
			Module._free(buf_ptr);
			return v;
		}, 

		frontFace: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glFrontFace(mode);
		}, 

		// opengl 1.2 arrays
		//

		enableClientState: function(array) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEnableClientState(array);
		}, 

		disableClientState: function(array) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDisableClientState(array);
		}, 

		arrayElement: function(i) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glArrayElement(i);
		}, 

		vertexPointer: function(size, type, stride, pointer) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented yet
		}, 

		colorPointer: function(size, type, stride, pointer) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented yet
		}, 

		normalPointer: function(size, type, stride, pointer) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented yet
		}, 

		texCoordPointer: function(size, type, stride, pointer) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented yet
		}, 

		// opengl 1.2 polygon offset
		//
		polygonOffset: function(factor, units) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPolygonOffset(factor, units);
		}, 

		// Non-compatible functions
		//

		debug: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDebug(mode);
		}, 

		swapBuffers: function() {
			// copy pixels from framebuffer to imageData, swapping each R and B components
			var data = this._back_data.data;
			var frame_buf = Module.HEAPU8.subarray(this._frame_buf_ptr, this._frame_buf_ptr + data.length);
			for (var i=0, j=0, l=data.length>>2; i<l; i++, j+=4) {
				data[j    ] = frame_buf[j + 2];
				data[j + 1] = frame_buf[j + 1];
				data[j + 2] = frame_buf[j    ];
				data[j + 3] = 255;
			}

			// update canvas display
			this._surface.putImageData(this._back_data, 0, 0);

			// in case that the width of the canvas is not multiples of 4, we simply repeat 
			// the last column in the framebuffer to the remained columns on canvas
			//
			//TODO: any better solution?
			if (this._canvas.width > this._back_data.width) {
				var oddment = this._canvas.width - this._back_data.width;
				this._surface.drawImage(this._canvas, 
					this._back_data.width - 1, 0, 1, this._back_data.height, 
					this._back_data.width, 0, oddment, this._back_data.height);
			}
		}

	};


	/*
	 * Replace the default HTMLCanvasElement.prototype.getContext() method with our homemade 
	 * implementation, so that a TinyGL rendering context can be fetched using the following 
	 * semantics: 
	 *
	 *   var canvas = document.getElementById('canvas_id');
	 *   var gl = canvas.getContext('experimental-tinygl');
	 *   ...
	 *
	 * just as what we do for a canvas2D or a WebGL context.
	 */
	if ((typeof HTMLCanvasElement) != 'undefined') {
		try {
			var default_get_context_func = HTMLCanvasElement.prototype.getContext;
			HTMLCanvasElement.prototype.getContext = function() {
				if (arguments[0] == 'experimental-tinygl') {
					return new TinyGLRenderingContextCtor(this, arguments[1]);
				}
				return default_get_context_func.apply(this, arguments);
			};
		}
		catch (e) {}
	}


	return TinyGLRenderingContextCtor;

}) ();