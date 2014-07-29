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

var TinyGLRenderingContext;

function initializeTinyGLRuntime(options) {

	// guarantee TinyGL runtime be initialized only once
	if (TinyGLRenderingContext)
		return;

	// define a console for message output
	var debug_output = (typeof console) != 'undefined' ? console : {
		info:  function() {}, 
		warn:  function() {}, 
		error: function() {}
	};

	/*
	 * Parse options
	 */

	options = options || {};

	var Module = {};

	if (options.TOTAL_HEAP_MEMORY) {
		if ((typeof options.TOTAL_HEAP_MEMORY) == 'number') {
			Module.TOTAL_MEMORY = options.TOTAL_HEAP_MEMORY;
		} else if ((typeof options.TOTAL_HEAP_MEMORY) == 'string') {
			var match = /^\+?\b((?:[0-9]*\.)?[0-9]+)([KMG]?)$/.exec(options.TOTAL_HEAP_MEMORY);
			if (match) {
				switch (match[2]) {
				case 'K':
					Module.TOTAL_MEMORY = Math.floor(parseFloat(match[1]) * 1024);
					break;
				case 'M':
					Module.TOTAL_MEMORY = Math.floor(parseFloat(match[1]) * 1024 * 1024);
					break;
				case 'G':
					Module.TOTAL_MEMORY = Math.floor(parseFloat(match[1]) * 1024 * 1024 * 1024);
					break;
				default:
					Module.TOTAL_MEMORY = Math.floor(parseFloat(match[1]));
					break;
				}
			} else {
				debug_output.warn('Invalid value for option TOTAL_HEAP_MEMORY');
			}
		} else {
			debug_output.warn('Invalid value for option TOTAL_HEAP_MEMORY');
		}
	} else {
		// default to 32M heap memory following Emscripten's suggestion
		Module.TOTAL_MEMORY = 32 * 1024 * 1024;
	}

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
var sa=Math.abs,Ua=Math.cos,Va=Math.sin,Wa=Math.log,Xa=Math.sqrt,va=Math.ceil,ua=Math.floor,Ya=Math.pow,ta=Math.min,S=0,Za=m,$a=m;function ab(){S++;r.monitorRunDependencies&&r.monitorRunDependencies(S)}r.addRunDependency=ab;function bb(){S--;r.monitorRunDependencies&&r.monitorRunDependencies(S);if(0==S&&(Za!==m&&(clearInterval(Za),Za=m),$a)){var a=$a;$a=m;a()}}r.removeRunDependency=bb;r.preloadedImages={};r.preloadedAudios={};Ea=8;E=Ea+3416;La.push({Q:function(){cb()}});var db;db=db=N(1,"i32*",M);
N([216,5,0,0,200,4,0,0,120,3,0,0,56,3,0,0,248,2,0,0,224,2,0,0,64,11,0,0,40,11,0,0,72,10,0,0,56,10,0,0,32,10,0,0,232,9,0,0,128,9,0,0,112,9,0,0,88,9,0,0,32,9,0,0,224,8,0,0,192,8,0,0,80,8,0,0,48,8,0,0,16,8,0,0,208,7,0,0,176,7,0,0,144,7,0,0,88,7,0,0,56,7,0,0,8,7,0,0,248,6,0,0,192,6,0,0,176,6,0,0,160,6,0,0,112,6,0,0,88,6,0,0,56,6,0,0,16,6,0,0,248,5,0,0,192,5,0,0,176,5,0,0,120,5,0,0,96,5,0,0,80,5,0,0,64,5,0,0,48,5,0,0,24,5,0,0,0,5,0,0,232,4,0,0,168,4,0,0,136,4,0,0,72,4,0,0,40,4,0,0,8,4,0,0,232,3,0,0,200,
3,0,0,176,3,0,0,8,0,0,0,5,0,0,0,2,0,0,0,4,0,0,0,2,0,0,0,5,0,0,0,1,0,0,0,3,0,0,0,2,0,0,0,17,0,0,0,1,0,0,0,17,0,0,0,1,0,0,0,1,0,0,0,5,0,0,0,4,0,0,0,4,0,0,0,5,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,3,0,0,0,7,0,0,0,6,0,0,0,2,0,0,0,5,0,0,0,2,0,0,0,1,0,0,0,2,0,0,0,1,0,0,0,2,0,0,0,10,0,0,0,3,0,0,0,8,0,0,0,8,0,0,0,3,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,3,0,0,0,2,0,0,0,3,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,5,0,0,0,2,0,0,0,2,0,0,0,5,0,0,0,5,0,0,0,4,0,0,0,5,0,0,0,3,0,0,0,38,0,0,0,86,0,0,0,104,0,0,0,76,0,0,0,58,0,0,0,106,
0,0,0,42,0,0,0,2,0,0,0,60,0,0,0,16,0,0,0,12,0,0,0,36,0,0,0,20,0,0,0,22,0,0,0,108,0,0,0,48,0,0,0,10,0,0,0,30,0,0,0,80,0,0,0,14,0,0,0,54,0,0,0,96,0,0,0,46,0,0,0,6,0,0,0,64,0,0,0,84,0,0,0,26,0,0,0,32,0,0,0,88,0,0,0,66,0,0,0,98,0,0,0,34,0,0,0,72,0,0,0,8,0,0,0,92,0,0,0,18,0,0,0,50,0,0,0,70,0,0,0,62,0,0,0,78,0,0,0,4,0,0,0,100,0,0,0,24,0,0,0,94,0,0,0,40,0,0,0,74,0,0,0,56,0,0,0,102,0,0,0,90,0,0,0,82,0,0,0,44,0,0,0,28,0,0,0,52,0,0,0,68,0,0,0,8,0,0,0,10,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,12,0,0,0,103,108,84,101,
120,73,109,97,103,101,50,68,58,32,99,111,109,98,105,110,97,105,115,111,110,32,111,102,32,112,97,114,97,109,101,116,101,114,115,32,110,111,116,32,104,97,110,100,108,101,100,0,0,0,0,0,103,108,86,101,114,116,101,120,32,34,37,102,32,37,102,32,37,102,32,37,102,34,0,0,103,108,66,101,103,105,110,32,34,37,67,34,0,0,0,0,103,108,71,101,116,81,117,101,114,121,79,98,106,101,99,116,117,105,118,58,32,117,110,100,101,102,105,110,101,100,32,113,117,101,114,121,32,105,100,32,37,100,0,0,0,0,0,0,103,108,78,111,114,
109,97,108,32,34,37,102,32,37,102,32,37,102,34,0,0,0,0,0,103,108,71,101,116,81,117,101,114,121,79,98,106,101,99,116,117,105,118,58,32,117,110,115,117,112,112,111,114,116,101,100,32,111,112,116,105,111,110,0,103,108,69,100,103,101,70,108,97,103,32,34,37,100,34,0,117,110,97,98,108,101,32,116,111,32,97,108,108,111,99,97,116,101,32,71,76,86,101,114,116,101,120,32,97,114,114,97,121,46,10,0,0,0,0,0,103,108,80,111,108,121,103,111,110,79,102,102,115,101,116,32,34,37,102,32,37,102,34,0,103,108,84,101,120,
67,111,111,114,100,80,111,105,110,116,101,114,32,34,37,100,32,37,67,32,37,100,32,37,112,34,0,103,108,78,111,114,109,97,108,80,111,105,110,116,101,114,32,34,37,67,32,37,100,32,37,112,34,0,0,0,0,0,0,103,108,67,111,108,111,114,80,111,105,110,116,101,114,32,34,37,100,32,37,67,32,37,100,32,37,112,34,0,0,0,0,103,108,86,101,114,116,101,120,80,111,105,110,116,101,114,32,34,37,100,32,37,67,32,37,100,32,37,112,34,0,0,0,103,108,68,105,115,97,98,108,101,67,108,105,101,110,116,83,116,97,116,101,32,34,37,67,34,
0,0,0,0,0,0,0,103,108,69,110,100,81,117,101,114,121,58,32,110,111,116,32,105,110,32,113,117,101,114,121,0,0,0,0,0,0,0,0,103,108,69,110,97,98,108,101,67,108,105,101,110,116,83,116,97,116,101,32,34,37,67,34,0,0,0,0,0,0,0,0,103,108,68,114,97,119,69,108,101,109,101,110,116,115,32,34,37,67,32,37,100,32,37,67,32,37,112,34,0,0,0,0,103,108,84,101,120,67,111,111,114,100,32,34,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,0,0,0,0,0,103,108,68,114,97,119,65,114,114,97,121,115,32,34,37,67,32,37,100,32,37,100,
34,0,103,108,65,114,114,97,121,69,108,101,109,101,110,116,32,34,37,100,34,0,0,0,0,0,103,108,78,101,120,116,66,117,102,102,101,114,32,34,37,112,34,0,0,0,0,0,0,0,103,108,69,110,100,76,105,115,116,32,34,34,0,0,0,0,103,108,72,105,110,116,32,34,37,67,32,37,67,34,0,0,103,108,67,97,108,108,76,105,115,116,32,34,37,100,34,0,103,108,80,111,108,121,103,111,110,77,111,100,101,32,34,37,67,32,37,67,34,0,0,0,103,108,70,114,111,110,116,70,97,99,101,32,34,37,67,34,0,0,0,0,0,0,0,0,103,108,69,110,100,81,117,101,114,
121,58,32,105,108,108,101,103,97,108,32,116,97,114,103,101,116,32,37,100,0,0,0,103,108,67,117,108,108,70,97,99,101,32,34,37,67,34,0,103,108,83,104,97,100,101,77,111,100,101,108,32,34,37,67,34,0,0,0,0,0,0,0,103,108,67,111,108,111,114,32,34,37,102,32,37,102,32,37,102,32,37,102,32,37,100,32,37,100,32,37,100,34,0,0,103,108,80,105,120,101,108,83,116,111,114,101,32,34,37,67,32,37,67,34,0,0,0,0,103,108,84,101,120,80,97,114,97,109,101,116,101,114,32,34,37,67,32,37,67,32,37,67,32,37,102,32,37,102,32,37,102,
32,37,102,34,0,0,0,103,108,84,101,120,69,110,118,32,34,37,67,32,37,67,32,37,67,32,37,102,32,37,102,32,37,102,32,37,102,34,0,103,108,66,105,110,100,84,101,120,116,117,114,101,32,34,37,67,32,37,100,34,0,0,0,103,108,84,101,120,73,109,97,103,101,50,68,32,34,37,100,32,37,100,32,37,100,32,37,100,32,37,100,32,37,100,32,37,100,32,37,100,32,37,100,34,0,0,0,0,0,0,0,103,108,76,111,97,100,78,97,109,101,32,34,37,100,34,0,103,108,80,111,112,78,97,109,101,32,34,34,0,0,0,0,103,108,80,117,115,104,78,97,109,101,32,
34,37,100,34,0,103,108,66,101,103,105,110,81,117,101,114,121,58,32,117,110,100,101,102,105,110,101,100,32,113,117,101,114,121,32,105,100,32,37,100,0,0,0,0,0,103,108,73,110,105,116,78,97,109,101,115,32,34,34,0,0,103,108,67,108,101,97,114,68,101,112,116,104,32,34,37,102,34,0,0,0,0,0,0,0,108,105,115,116,32,37,100,32,110,111,116,32,100,101,102,105,110,101,100,0,0,0,0,0,103,108,67,108,101,97,114,67,111,108,111,114,32,34,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,0,0,0,103,108,67,108,101,97,114,32,34,
37,100,34,0,0,0,0,99,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,115,112,101,99,117,108,97,114,32,98,117,102,102,101,114,0,0,0,0,0,0,103,108,76,105,103,104,116,77,111,100,101,108,32,34,37,67,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,103,108,76,105,103,104,116,32,34,37,67,32,37,67,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,0,0,103,108,67,111,108,111,114,77,97,116,101,114,105,97,108,32,34,37,67,32,37,67,34,0,69,114,114,111,114,32,119,104,105,108,101,32,105,110,105,
116,105,97,108,105,122,105,110,103,32,90,32,98,117,102,102,101,114,10,0,0,0,0,0,0,103,108,77,97,116,101,114,105,97,108,32,34,37,67,32,37,67,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,103,108,79,114,116,104,111,32,34,37,102,32,37,102,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,0,0,103,108,70,114,117,115,116,117,109,32,34,37,102,32,37,102,32,37,102,32,37,102,32,37,102,32,37,102,34,0,0,0,103,108,66,101,103,105,110,81,117,101,114,121,58,32,108,97,115,116,32,113,117,101,114,121,32,105,115,32,
110,111,116,32,101,110,100,101,100,32,121,101,116,0,0,0,0,0,0,0,103,108,86,105,101,119,112,111,114,116,58,32,37,100,32,37,100,32,37,100,32,37,100,10,0,0,0,0,0,0,0,0,103,108,86,105,101,119,112,111,114,116,32,34,37,100,32,37,100,32,37,100,32,37,100,34,0,0,0,0,0,0,0,0,103,108,83,99,97,108,101,32,34,37,102,32,37,102,32,37,102,34,0,0,0,0,0,0,103,108,80,105,120,101,108,83,116,111,114,101,58,32,117,110,115,117,112,112,111,114,116,101,100,32,111,112,116,105,111,110,0,0,0,0,0,0,0,0,103,108,84,114,97,110,115,
108,97,116,101,32,34,37,102,32,37,102,32,37,102,34,0,0,103,108,71,101,116,58,32,111,112,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,0,0,103,108,82,111,116,97,116,101,32,34,37,102,32,37,102,32,37,102,32,37,102,34,0,0,103,108,80,111,112,77,97,116,114,105,120,32,34,34,0,0,103,108,80,117,115,104,77,97,116,114,105,120,32,34,34,0,103,108,66,101,103,105,110,58,32,116,121,112,101,32,37,120,32,110,111,116,32,104,97,110,100,108,101,100,10,0,0,0,103,108,71,101,110,81,117,
101,114,105,101,115,58,32,110,111,116,32,101,110,111,117,103,104,32,114,111,111,109,32,102,111,114,32,116,104,101,32,114,101,113,117,105,114,101,100,32,113,117,101,114,105,101,115,0,0,103,108,77,117,108,116,77,97,116,114,105,120,32,34,34,0,103,108,111,112,76,105,103,104,116,77,111,100,101,108,58,32,105,108,108,101,103,97,108,32,112,110,97,109,101,58,32,48,120,37,120,10,0,0,0,0,103,108,76,111,97,100,73,100,101,110,116,105,116,121,32,34,34,0,0,0,0,0,0,0,103,108,76,111,97,100,77,97,116,114,105,120,32,
34,34,0,103,108,77,97,116,114,105,120,77,111,100,101,32,34,37,67,34,0,0,0,0,0,0,0,119,97,114,110,105,110,103,58,32,117,110,107,110,111,119,110,32,112,110,97,109,101,32,105,110,32,103,108,71,101,116,70,108,111,97,116,118,40,41,10,0,0,0,0,0,0,0,0,103,108,66,101,103,105,110,81,117,101,114,121,58,32,105,108,108,101,103,97,108,32,116,97,114,103,101,116,32,37,100,0,103,108,86,105,101,119,112,111,114,116,58,32,101,114,114,111,114,32,119,104,105,108,101,32,114,101,115,105,122,105,110,103,32,100,105,115,112,
108,97,121,0,0,0,0,0,0,0,0,103,108,86,105,101,119,112,111,114,116,58,32,115,105,122,101,32,116,111,111,32,115,109,97,108,108,0,0,0,0,0,0,103,108,84,101,120,80,97,114,97,109,101,116,101,114,58,32,117,110,115,117,112,112,111,114,116,101,100,32,111,112,116,105,111,110,0,0,0,0,0,0,103,108,69,110,97,98,108,101,68,105,115,97,98,108,101,32,34,37,67,32,37,100,34,0,103,108,69,110,100,32,34,34,0,0,0,0,0,0,0,0,37,100,0,0,0,0,0,0,37,103,0,0,0,0,0,0],"i8",ya,x.Ob);var eb=x.aa(N(12,"i8",M),8);A(0==eb%8);
r._memcpy=fb;r._memset=gb;
var T={$:1,ga:2,$d:3,Yc:4,O:5,bb:6,vc:7,vd:8,fa:9,Ic:10,Z:11,je:11,Lb:12,Eb:13,Tc:14,Hd:15,Ya:16,Za:17,ke:18,$a:19,Mb:20,za:21,u:22,qd:23,Kb:24,Ld:25,ge:26,Uc:27,Dd:28,Ca:29,Xd:30,jd:31,Qd:32,Qc:33,Ud:34,zd:42,Wc:43,Jc:44,$c:45,ad:46,bd:47,hd:48,he:49,td:50,Zc:51,Oc:35,wd:37,Ac:52,Dc:53,le:54,rd:55,Ec:56,Fc:57,Pc:35,Gc:59,Fd:60,ud:61,de:62,Ed:63,Ad:64,Bd:65,Wd:66,xd:67,yc:68,ae:69,Kc:70,Rd:71,ld:72,Rc:73,Cc:74,Md:76,Bc:77,Vd:78,cd:79,dd:80,gd:81,fd:82,ed:83,Gd:38,ab:39,md:36,Aa:40,Ba:95,Pd:96,Nc:104,
sd:105,zc:97,Td:91,Jd:88,Cd:92,Yd:108,Mc:111,wc:98,Lc:103,pd:101,nd:100,ee:110,Vc:112,Hb:113,Ib:115,Fb:114,Gb:89,kd:90,Sd:93,Zd:94,xc:99,od:102,Jb:106,ha:107,fe:109,ie:87,Sc:122,be:116,Kd:95,yd:123,Xc:84,Nd:75,Hc:125,Id:131,Od:130,ce:86},hb={"0":"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",
12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",
34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",
53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",
74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",
90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",
107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"},ib=0;function jb(a){return L[ib>>2]=a}
function kb(a,b){for(var c=0,d=a.length-1;0<=d;d--){var f=a[d];"."===f?a.splice(d,1):".."===f?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}function U(a){var b="/"===a.charAt(0),c="/"===a.substr(-1),a=kb(a.split("/").filter(function(a){return!!a}),!b).join("/");!a&&!b&&(a=".");a&&c&&(a+="/");return(b?"/":"")+a}function lb(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}
function mb(){for(var a="",b=n,c=arguments.length-1;-1<=c&&!b;c--){var d=0<=c?arguments[c]:"/";"string"!==typeof d&&e(new TypeError("Arguments to path.resolve must be strings"));d&&(a=d+"/"+a,b="/"===d.charAt(0))}a=kb(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}var nb=[];function ob(a,b){nb[a]={input:[],S:[],ba:b};qb[a]={k:rb}}
var rb={open:function(a){var b=nb[a.e.ua];b||e(new V(T.$a));a.C=b;a.seekable=n},close:function(a){a.C.S.length&&a.C.ba.ta(a.C,10)},N:function(a,b,c,d){(!a.C||!a.C.ba.qb)&&e(new V(T.bb));for(var f=0,g=0;g<d;g++){var h;try{h=a.C.ba.qb(a.C)}catch(k){e(new V(T.O))}h===i&&0===f&&e(new V(T.Z));if(h===m||h===i)break;f++;b[c+g]=h}f&&(a.e.timestamp=Date.now());return f},write:function(a,b,c,d){(!a.C||!a.C.ba.ta)&&e(new V(T.bb));for(var f=0;f<d;f++)try{a.C.ba.ta(a.C,b[c+f])}catch(g){e(new V(T.O))}d&&(a.e.timestamp=
Date.now());return f}},W={F:m,Db:1,ya:2,Xa:3,M:function(){return W.createNode(m,"/",16895,0)},createNode:function(a,b,c,d){(24576===(c&61440)||4096===(c&61440))&&e(new V(T.$));W.F||(W.F={dir:{e:{L:W.n.L,A:W.n.A,Na:W.n.Na,qa:W.n.qa,rename:W.n.rename,Cb:W.n.Cb,Ab:W.n.Ab,xb:W.n.xb,wa:W.n.wa},G:{R:W.k.R}},file:{e:{L:W.n.L,A:W.n.A},G:{R:W.k.R,N:W.k.N,write:W.k.write,eb:W.k.eb,tb:W.k.tb}},link:{e:{L:W.n.L,A:W.n.A,va:W.n.va},G:{}},hb:{e:{L:W.n.L,A:W.n.A},G:sb}});c=tb(a,b,c,d);16384===(c.mode&61440)?(c.n=
W.F.dir.e,c.k=W.F.dir.G,c.o={}):32768===(c.mode&61440)?(c.n=W.F.file.e,c.k=W.F.file.G,c.o=[],c.ja=W.ya):40960===(c.mode&61440)?(c.n=W.F.link.e,c.k=W.F.link.G):8192===(c.mode&61440)&&(c.n=W.F.hb.e,c.k=W.F.hb.G);c.timestamp=Date.now();a&&(a.o[b]=c);return c},Ha:function(a){a.ja!==W.ya&&(a.o=Array.prototype.slice.call(a.o),a.ja=W.ya)},n:{L:function(a){var b={};b.Ce=8192===(a.mode&61440)?a.id:1;b.Me=a.id;b.mode=a.mode;b.Se=1;b.uid=0;b.Ke=0;b.ua=a.ua;b.size=16384===(a.mode&61440)?4096:32768===(a.mode&
61440)?a.o.length:40960===(a.mode&61440)?a.link.length:0;b.xe=new Date(a.timestamp);b.Qe=new Date(a.timestamp);b.Be=new Date(a.timestamp);b.Tb=4096;b.ye=Math.ceil(b.size/b.Tb);return b},A:function(a,b){b.mode!==i&&(a.mode=b.mode);b.timestamp!==i&&(a.timestamp=b.timestamp);if(b.size!==i){W.Ha(a);var c=a.o;if(b.size<c.length)c.length=b.size;else for(;b.size>c.length;)c.push(0)}},Na:function(){e(ub[T.ga])},qa:function(a,b,c,d){return W.createNode(a,b,c,d)},rename:function(a,b,c){if(16384===(a.mode&61440)){var d;
try{d=vb(b,c)}catch(f){}if(d)for(var g in d.o)e(new V(T.ab))}delete a.parent.o[a.name];a.name=c;b.o[c]=a;a.parent=b},Cb:function(a,b){delete a.o[b]},Ab:function(a,b){var c=vb(a,b),d;for(d in c.o)e(new V(T.ab));delete a.o[b]},xb:function(a){var b=[".",".."],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c);return b},wa:function(a,b,c){a=W.createNode(a,b,41471,0);a.link=c;return a},va:function(a){40960!==(a.mode&61440)&&e(new V(T.u));return a.link}},k:{N:function(a,b,c,d,f){a=a.e.o;if(f>=a.length)return 0;
d=Math.min(a.length-f,d);A(0<=d);if(8<d&&a.subarray)b.set(a.subarray(f,f+d),c);else for(var g=0;g<d;g++)b[c+g]=a[f+g];return d},write:function(a,b,c,d,f,g){var h=a.e;h.timestamp=Date.now();a=h.o;if(d&&0===a.length&&0===f&&b.subarray)return g&&0===c?(h.o=b,h.ja=b.buffer===K.buffer?W.Db:W.Xa):(h.o=new Uint8Array(b.subarray(c,c+d)),h.ja=W.Xa),d;W.Ha(h);for(a=h.o;a.length<f;)a.push(0);for(g=0;g<d;g++)a[f+g]=b[c+g];return d},R:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.e.mode&61440)&&(b+=a.e.o.length);
0>b&&e(new V(T.u));a.sc=[];return a.position=b},eb:function(a,b,c){W.Ha(a.e);a=a.e.o;for(b+=c;b>a.length;)a.push(0)},tb:function(a,b,c,d,f,g,h){32768!==(a.e.mode&61440)&&e(new V(T.$a));a=a.e.o;if(!(h&2)&&(a.buffer===b||a.buffer===b.buffer))f=n,d=a.byteOffset;else{if(0<f||f+d<a.length)a=a.subarray?a.subarray(f,f+d):Array.prototype.slice.call(a,f,f+d);f=j;(d=za(d))||e(new V(T.Lb));b.set(a,d)}return{Xe:d,ve:f}}}},wb=N(1,"i32*",M),xb=N(1,"i32*",M);db=N(1,"i32*",M);
var yb=m,qb=[m],X=[],zb=1,Ab=m,Bb=j,V=m,ub={};function Cb(a){a instanceof V||e(a+" : "+Ba());jb(a.jb)}
function Y(a,b){var a=mb("/",a),b=b||{},c={nb:j,Qa:0},d;for(d in c)b[d]===i&&(b[d]=c[d]);8<b.Qa&&e(new V(T.Aa));var c=kb(a.split("/").filter(function(a){return!!a}),n),f=yb,g="/";for(d=0;d<c.length;d++){var h=d===c.length-1;if(h&&b.parent)break;f=vb(f,c[d]);g=U(g+"/"+c[d]);if(f.ra&&(!h||h&&b.nb))f=f.ra.root;if(!h||b.Ja)for(h=0;40960===(f.mode&61440);){f=Y(g).e;f.n.va||e(new V(T.u));var f=f.n.va(f),k=mb;var l=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(g).slice(1),g=l[0],l=
l[1];!g&&!l?g=".":(l&&(l=l.substr(0,l.length-1)),g+=l);g=k(g,f);f=Y(g,{Qa:b.Qa}).e;40<h++&&e(new V(T.Aa))}}return{path:g,e:f}}function Db(a){for(var b;;){if(a===a.parent)return a=a.M.kc,!b?a:"/"!==a[a.length-1]?a+"/"+b:a+b;b=b?a.name+"/"+b:a.name;a=a.parent}}function Eb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%Ab.length}
function vb(a,b){var c=Fb(a,"x");c&&e(new V(c));for(c=Ab[Eb(a.id,b)];c;c=c.mc){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.n.Na(a,b)}
function tb(a,b,c,d){Gb||(Gb=function(a,b,c,d){a||(a=this);this.parent=a;this.M=a.M;this.ra=m;this.id=zb++;this.name=b;this.mode=c;this.n={};this.k={};this.ua=d},Gb.prototype={},Object.defineProperties(Gb.prototype,{N:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},ec:{get:function(){return 16384===(this.mode&61440)}},dc:{get:function(){return 8192===
(this.mode&61440)}}}));a=new Gb(a,b,c,d);b=Eb(a.parent.id,a.name);a.mc=Ab[b];return Ab[b]=a}var Hb={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function Ib(a){var b=Hb[a];"undefined"===typeof b&&e(Error("Unknown file open mode: "+a));return b}function Fb(a,b){return Bb?0:-1!==b.indexOf("r")&&!(a.mode&292)||-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73)?T.Eb:0}
function Jb(a,b){try{return vb(a,b),T.Za}catch(c){}return Fb(a,"wx")}
function Kb(a,b,c){Lb||(Lb=p(),Lb.prototype={},Object.defineProperties(Lb.prototype,{object:{get:function(){return this.e},set:function(a){this.e=a}},Oe:{get:function(){return 1!==(this.K&2097155)}},Pe:{get:function(){return 0!==(this.K&2097155)}},Ne:{get:function(){return this.K&1024}}}));if(a.__proto__)a.__proto__=Lb.prototype;else{var d=new Lb,f;for(f in a)d[f]=a[f];a=d}var g;a:{b=b||0;for(c=c||4096;b<=c;b++)if(!X[b]){g=b;break a}e(new V(T.Kb))}a.B=g;return X[g]=a}
var sb={open:function(a){a.k=qb[a.e.ua].k;a.k.open&&a.k.open(a)},R:function(){e(new V(T.Ca))}};function Mb(a,b){var c="/"===b,d=!b,f;c&&yb&&e(new V(T.Ya));!c&&!d&&(f=Y(b,{nb:n}),b=f.path,f=f.e,f.ra&&e(new V(T.Ya)),16384!==(f.mode&61440)&&e(new V(T.Mb)));var d={type:a,Ue:{},kc:b,lc:[]},g=a.M(d);g.M=d;d.root=g;c?yb=g:f&&(f.ra=d,f.M&&f.M.lc.push(d));return g}function Nb(a,b,c){var d=Y(a,{parent:j}).e,a=lb(a),f=Jb(d,a);f&&e(new V(f));d.n.qa||e(new V(T.$));return d.n.qa(d,a,b,c)}
function Ob(a,b){b=(b!==i?b:438)&4095;b|=32768;return Nb(a,b,0)}function Pb(a,b){b=(b!==i?b:511)&1023;b|=16384;return Nb(a,b,0)}function Qb(a,b,c){"undefined"===typeof c&&(c=b,b=438);return Nb(a,b|8192,c)}function Rb(a,b){var c=Y(b,{parent:j}).e,d=lb(b),f=Jb(c,d);f&&e(new V(f));c.n.wa||e(new V(T.$));return c.n.wa(c,d,a)}function Sb(a,b){var c;c="string"===typeof a?Y(a,{Ja:j}).e:a;c.n.A||e(new V(T.$));c.n.A(c,{mode:b&4095|c.mode&-4096,timestamp:Date.now()})}
function Tb(a,b){var c,b="string"===typeof b?Ib(b):b;c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;var d;if("object"===typeof a)d=a;else{a=U(a);try{d=Y(a,{Ja:!(b&131072)}).e}catch(f){}}b&64&&(d?b&128&&e(new V(T.Za)):d=Nb(a,c,0));d||e(new V(T.ga));8192===(d.mode&61440)&&(b&=-513);d?40960===(d.mode&61440)?c=T.Aa:16384===(d.mode&61440)&&(0!==(b&2097155)||b&512)?c=T.za:(c=["r","w","rw"][b&2097155],b&512&&(c+="w"),c=Fb(d,c)):c=T.ga;c&&e(new V(c));if(b&512){c=d;c="string"===typeof c?Y(c,{Ja:j}).e:
c;c.n.A||e(new V(T.$));16384===(c.mode&61440)&&e(new V(T.za));32768!==(c.mode&61440)&&e(new V(T.u));var g=Fb(c,"w");g&&e(new V(g));c.n.A(c,{size:0,timestamp:Date.now()})}b&=-641;d=Kb({e:d,path:Db(d),K:b,seekable:j,position:0,k:d.k,sc:[],error:n},i,i);d.k.open&&d.k.open(d);r.logReadFiles&&!(b&1)&&(Ub||(Ub={}),a in Ub||(Ub[a]=1,r.printErr("read file: "+a)));return d}function Vb(a){try{a.k.close&&a.k.close(a)}catch(b){e(b)}finally{X[a.B]=m}}
function Wb(a,b,c,d,f,g){(0>d||0>f)&&e(new V(T.u));0===(a.K&2097155)&&e(new V(T.fa));16384===(a.e.mode&61440)&&e(new V(T.za));a.k.write||e(new V(T.u));var h=j;"undefined"===typeof f?(f=a.position,h=n):a.seekable||e(new V(T.Ca));a.K&1024&&((!a.seekable||!a.k.R)&&e(new V(T.Ca)),a.k.R(a,0,2));b=a.k.write(a,b,c,d,f,g);h||(a.position+=b);return b}
function Xb(){V||(V=function(a){this.jb=a;for(var b in T)if(T[b]===a){this.code=b;break}this.message=hb[a]},V.prototype=Error(),[T.ga].forEach(function(a){ub[a]=new V(a);ub[a].stack="<generic error, no stack>"}))}var Yb;function Zb(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function $b(a,b,c,d,f,g){a=b?U(("string"===typeof a?a:Db(a))+"/"+b):a;d=Zb(d,f);f=Ob(a,d);if(c){if("string"===typeof c){for(var a=Array(c.length),b=0,h=c.length;b<h;++b)a[b]=c.charCodeAt(b);c=a}Sb(f,d|146);a=Tb(f,"w");Wb(a,c,0,c.length,0,g);Vb(a);Sb(f,d)}return f}
function ac(a,b,c,d){a=U(("string"===typeof a?a:Db(a))+"/"+b);b=Zb(!!c,!!d);ac.sb||(ac.sb=64);var f;f=ac.sb++<<8|0;qb[f]={k:{open:function(a){a.seekable=n},close:function(){d&&(d.buffer&&d.buffer.length)&&d(10)},N:function(a,b,d,f){for(var y=0,F=0;F<f;F++){var w;try{w=c()}catch(u){e(new V(T.O))}w===i&&0===y&&e(new V(T.Z));if(w===m||w===i)break;y++;b[d+F]=w}y&&(a.e.timestamp=Date.now());return y},write:function(a,b,c,f){for(var y=0;y<f;y++)try{d(b[c+y])}catch(F){e(new V(T.O))}f&&(a.e.timestamp=Date.now());
return y}}};return Qb(a,b,f)}function bc(a){if(a.dc||a.ec||a.link||a.o)return j;var b=j;"undefined"!==typeof XMLHttpRequest&&e(Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."));if(r.read)try{a.o=J(r.read(a.url),j)}catch(c){b=n}else e(Error("Cannot load without read() or XMLHttpRequest."));b||jb(T.O);return b}var Gb,Lb,Ub;function cc(){e("TODO")}
var Z={M:function(){return tb(m,"/",16895,0)},Xb:function(a,b,c){c&&A(1==b==(6==c));a={Zb:a,type:b,protocol:c,p:m,ca:{},Oa:[],V:[],X:Z.q};b=Z.sa();c=tb(Z.root,b,49152,0);c.W=a;b=Kb({path:b,e:c,K:Ib("r+"),seekable:n,k:Z.k});a.G=b;return a},ac:function(a){a=X[a];return!a||49152!==(a.e.mode&49152)?m:a.e.W},k:{wb:function(a){a=a.e.W;return a.X.wb(a)},rb:function(a,b,c){a=a.e.W;return a.X.rb(a,b,c)},N:function(a,b,c,d){a=a.e.W;d=a.X.oc(a,d);if(!d)return 0;b.set(d.buffer,c);return d.buffer.length},write:function(a,
b,c,d){a=a.e.W;return a.X.qc(a,b,c,d)},close:function(a){a=a.e.W;a.X.close(a)}},sa:function(){Z.sa.ib||(Z.sa.ib=0);return"socket["+Z.sa.ib++ +"]"},q:{ka:function(a,b,c){var d;"object"===typeof b&&(d=b,c=b=m);if(d)d._socket?(b=d._socket.remoteAddress,c=d._socket.remotePort):((c=/ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url))||e(Error("WebSocket URL must be in the format ws(s)://address:port")),b=c[1],c=parseInt(c[2],10));else try{var f=t?{headers:{"websocket-protocol":["binary"]}}:["binary"];d=new (t?require("ws"):
window.WebSocket)("ws://"+b+":"+c,f);d.binaryType="arraybuffer"}catch(g){e(new V(T.Hb))}b={H:b,port:c,g:d,la:[]};Z.q.cb(a,b);Z.q.cc(a,b);2===a.type&&"undefined"!==typeof a.Y&&b.la.push(new Uint8Array([255,255,255,255,112,111,114,116,(a.Y&65280)>>8,a.Y&255]));return b},pa:function(a,b,c){return a.ca[b+":"+c]},cb:function(a,b){a.ca[b.H+":"+b.port]=b},yb:function(a,b){delete a.ca[b.H+":"+b.port]},cc:function(a,b){function c(){try{for(var a=b.la.shift();a;)b.g.send(a),a=b.la.shift()}catch(c){b.g.close()}}
function d(c){A("string"!==typeof c&&c.byteLength!==i);var c=new Uint8Array(c),d=f;f=n;d&&10===c.length&&255===c[0]&&255===c[1]&&255===c[2]&&255===c[3]&&112===c[4]&&111===c[5]&&114===c[6]&&116===c[7]?(c=c[8]<<8|c[9],Z.q.yb(a,b),b.port=c,Z.q.cb(a,b)):a.V.push({H:b.H,port:b.port,data:c})}var f=j;t?(b.g.on("open",c),b.g.on("message",function(a,b){b.binary&&d((new Uint8Array(a)).buffer)}),b.g.on("error",p())):(b.g.onopen=c,b.g.onmessage=function(a){d(a.data)})},wb:function(a){if(1===a.type&&a.p)return a.Oa.length?
65:0;var b=0,c=1===a.type?Z.q.pa(a,a.I,a.J):m;if(a.V.length||!c||c&&c.g.readyState===c.g.ea||c&&c.g.readyState===c.g.CLOSED)b|=65;if(!c||c&&c.g.readyState===c.g.OPEN)b|=4;if(c&&c.g.readyState===c.g.ea||c&&c.g.readyState===c.g.CLOSED)b|=16;return b},rb:function(a,b,c){switch(b){case 21531:return b=0,a.V.length&&(b=a.V[0].data.length),L[c>>2]=b,0;default:return T.u}},close:function(a){if(a.p){try{a.p.close()}catch(b){}a.p=m}for(var c=Object.keys(a.ca),d=0;d<c.length;d++){var f=a.ca[c[d]];try{f.g.close()}catch(g){}Z.q.yb(a,
f)}return 0},bind:function(a,b,c){("undefined"!==typeof a.Sa||"undefined"!==typeof a.Y)&&e(new V(T.u));a.Sa=b;a.Y=c||cc();if(2===a.type){a.p&&(a.p.close(),a.p=m);try{a.X.ic(a,0)}catch(d){d instanceof V||e(d),d.jb!==T.Ba&&e(d)}}},Ae:function(a,b,c){a.p&&e(new V(ERRNO_CODS.Ba));if("undefined"!==typeof a.I&&"undefined"!==typeof a.J){var d=Z.q.pa(a,a.I,a.J);d&&(d.g.readyState===d.g.CONNECTING&&e(new V(T.Fb)),e(new V(T.Jb)))}b=Z.q.ka(a,b,c);a.I=b.H;a.J=b.port;e(new V(T.Ib))},ic:function(a){t||e(new V(T.Ba));
a.p&&e(new V(T.u));var b=require("ws").Server;a.p=new b({host:a.Sa,port:a.Y});a.p.on("connection",function(b){if(1===a.type){var d=Z.Xb(a.Zb,a.type,a.protocol),b=Z.q.ka(d,b);d.I=b.H;d.J=b.port;a.Oa.push(d)}else Z.q.ka(a,b)});a.p.on("closed",function(){a.p=m});a.p.on("error",p())},accept:function(a){a.p||e(new V(T.u));var b=a.Oa.shift();b.G.K=a.G.K;return b},Je:function(a,b){var c,d;b?((a.I===i||a.J===i)&&e(new V(T.ha)),c=a.I,d=a.J):(c=a.Sa||0,d=a.Y||0);return{H:c,port:d}},qc:function(a,b,c,d,f,g){if(2===
a.type){if(f===i||g===i)f=a.I,g=a.J;(f===i||g===i)&&e(new V(T.Gb))}else f=a.I,g=a.J;var h=Z.q.pa(a,f,g);1===a.type&&((!h||h.g.readyState===h.g.ea||h.g.readyState===h.g.CLOSED)&&e(new V(T.ha)),h.g.readyState===h.g.CONNECTING&&e(new V(T.Z)));b=b instanceof Array||b instanceof ArrayBuffer?b.slice(c,c+d):b.buffer.slice(b.byteOffset+c,b.byteOffset+c+d);if(2===a.type&&(!h||h.g.readyState!==h.g.OPEN)){if(!h||h.g.readyState===h.g.ea||h.g.readyState===h.g.CLOSED)h=Z.q.ka(a,f,g);h.la.push(b);return d}try{return h.g.send(b),
d}catch(k){e(new V(T.u))}},oc:function(a,b){1===a.type&&a.p&&e(new V(T.ha));var c=a.V.shift();if(!c){if(1===a.type){var d=Z.q.pa(a,a.I,a.J);if(d){if(d.g.readyState===d.g.ea||d.g.readyState===d.g.CLOSED)return m;e(new V(T.Z))}e(new V(T.ha))}e(new V(T.Z))}var d=c.data.byteLength||c.data.length,f=c.data.byteOffset||0,g=c.data.buffer||c.data,h=Math.min(b,d),k={buffer:new Uint8Array(g,f,h),H:c.H,port:c.port};1===a.type&&h<d&&(c.data=new Uint8Array(g,f+h,d-h),a.V.unshift(c));return k}}};
function dc(a,b,c){a=X[a];if(!a)return jb(T.fa),-1;try{return Wb(a,K,b,c)}catch(d){return Cb(d),-1}}function ec(a){return X[a-1].B}function fc(a,b,c,d){c*=b;if(0==c)return 0;a=dc(ec(d),a,c);if(-1==a){if(b=X[d-1])b.error=j;return 0}return Math.floor(a/b)}r._strlen=gc;function hc(a){return 0>a||0===a&&-Infinity===1/a}
function ic(a,b){function c(a){var c;"double"===a?c=xa[b+f>>3]:"i64"==a?(c=[L[b+f>>2],L[b+(f+8)>>2]],f+=8):(a="i32",c=L[b+f>>2]);f+=Math.max(x.ob(a),x.oa(a,m,j));return c}for(var d=a,f=0,g=[],h,k;;){var l=d;h=K[d];if(0===h)break;k=K[d+1|0];if(37==h){var y=n,F=n,w=n,u=n,C=n;a:for(;;){switch(k){case 43:y=j;break;case 45:F=j;break;case 35:w=j;break;case 48:if(u)break a;else{u=j;break}case 32:C=j;break;default:break a}d++;k=K[d+1|0]}var H=0;if(42==k)H=c("i32"),d++,k=K[d+1|0];else for(;48<=k&&57>=k;)H=
10*H+(k-48),d++,k=K[d+1|0];var I=n,B=-1;if(46==k){B=0;I=j;d++;k=K[d+1|0];if(42==k)B=c("i32"),d++;else for(;;){k=K[d+1|0];if(48>k||57<k)break;B=10*B+(k-48);d++}k=K[d+1|0]}0>B&&(B=6,I=n);var z;switch(String.fromCharCode(k)){case "h":k=K[d+2|0];104==k?(d++,z=1):z=2;break;case "l":k=K[d+2|0];108==k?(d++,z=8):z=4;break;case "L":case "q":case "j":z=8;break;case "z":case "t":case "I":z=4;break;default:z=m}z&&d++;k=K[d+1|0];switch(String.fromCharCode(k)){case "d":case "i":case "u":case "o":case "x":case "X":case "p":l=
100==k||105==k;z=z||4;var O=h=c("i"+8*z),q;8==z&&(h=x.jc(h[0],h[1],117==k));4>=z&&(h=(l?Ta:Sa)(h&Math.pow(256,z)-1,8*z));var qa=Math.abs(h),l="";if(100==k||105==k)q=8==z&&jc?jc.stringify(O[0],O[1],m):Ta(h,8*z).toString(10);else if(117==k)q=8==z&&jc?jc.stringify(O[0],O[1],j):Sa(h,8*z).toString(10),h=Math.abs(h);else if(111==k)q=(w?"0":"")+qa.toString(8);else if(120==k||88==k){l=w&&0!=h?"0x":"";if(8==z&&jc)if(O[1]){q=(O[1]>>>0).toString(16);for(w=(O[0]>>>0).toString(16);8>w.length;)w="0"+w;q+=w}else q=
(O[0]>>>0).toString(16);else if(0>h){h=-h;q=(qa-1).toString(16);O=[];for(w=0;w<q.length;w++)O.push((15-parseInt(q[w],16)).toString(16));for(q=O.join("");q.length<2*z;)q="f"+q}else q=qa.toString(16);88==k&&(l=l.toUpperCase(),q=q.toUpperCase())}else 112==k&&(0===qa?q="(nil)":(l="0x",q=qa.toString(16)));if(I)for(;q.length<B;)q="0"+q;0<=h&&(y?l="+"+l:C&&(l=" "+l));"-"==q.charAt(0)&&(l="-"+l,q=q.substr(1));for(;l.length+q.length<H;)F?q+=" ":u?q="0"+q:l=" "+l;q=l+q;q.split("").forEach(function(a){g.push(a.charCodeAt(0))});
break;case "f":case "F":case "e":case "E":case "g":case "G":h=c("double");if(isNaN(h))q="nan",u=n;else if(isFinite(h)){I=n;z=Math.min(B,20);if(103==k||71==k)I=j,B=B||1,z=parseInt(h.toExponential(z).split("e")[1],10),B>z&&-4<=z?(k=(103==k?"f":"F").charCodeAt(0),B-=z+1):(k=(103==k?"e":"E").charCodeAt(0),B--),z=Math.min(B,20);if(101==k||69==k)q=h.toExponential(z),/[eE][-+]\d$/.test(q)&&(q=q.slice(0,-1)+"0"+q.slice(-1));else if(102==k||70==k)q=h.toFixed(z),0===h&&hc(h)&&(q="-"+q);l=q.split("e");if(I&&
!w)for(;1<l[0].length&&-1!=l[0].indexOf(".")&&("0"==l[0].slice(-1)||"."==l[0].slice(-1));)l[0]=l[0].slice(0,-1);else for(w&&-1==q.indexOf(".")&&(l[0]+=".");B>z++;)l[0]+="0";q=l[0]+(1<l.length?"e"+l[1]:"");69==k&&(q=q.toUpperCase());0<=h&&(y?q="+"+q:C&&(q=" "+q))}else q=(0>h?"-":"")+"inf",u=n;for(;q.length<H;)q=F?q+" ":u&&("-"==q[0]||"+"==q[0])?q[0]+"0"+q.slice(1):(u?"0":" ")+q;97>k&&(q=q.toUpperCase());q.split("").forEach(function(a){g.push(a.charCodeAt(0))});break;case "s":u=(y=c("i8*"))?gc(y):6;
I&&(u=Math.min(u,B));if(!F)for(;u<H--;)g.push(32);if(y)for(w=0;w<u;w++)g.push(P[y++|0]);else g=g.concat(J("(null)".substr(0,u),j));if(F)for(;u<H--;)g.push(32);break;case "c":for(F&&g.push(c("i8"));0<--H;)g.push(32);F||g.push(c("i8"));break;case "n":F=c("i32*");L[F>>2]=g.length;break;case "%":g.push(h);break;default:for(w=l;w<d+2;w++)g.push(K[w])}d+=2}else g.push(h),d+=1}return g}function kc(a,b){var c=Sa(a&255);K[kc.zb|0]=c;if(-1==dc(ec(b),kc.zb,1)){if(c=X[b-1])c.error=j;return-1}return c}
var lc=sa;function mc(a){r.exit(a)}function nc(a){nc.Vb||(G=G+4095&-4096,nc.Vb=j,A(x.ma),nc.Sb=x.ma,x.ma=function(){D("cannot dynamically allocate, sbrk now has control")});var b=G;0!=a&&nc.Sb(a);return b}var oc=n,pc=n,qc=n,rc=n,sc=i,tc=i;function uc(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var vc=[];function wc(){var a=r.canvas;vc.forEach(function(b){b(a.width,a.height)})}
function xc(){var a=r.canvas;this.uc=a.width;this.tc=a.height;a.width=screen.width;a.height=screen.height;"undefined"!=typeof SDL&&(a=Da[SDL.screen+0*x.P>>2],L[SDL.screen+0*x.P>>2]=a|8388608);wc()}function yc(){var a=r.canvas;a.width=this.uc;a.height=this.tc;"undefined"!=typeof SDL&&(a=Da[SDL.screen+0*x.P>>2],L[SDL.screen+0*x.P>>2]=a&-8388609);wc()}var zc,Ac,Bc,Cc;Xb();Ab=Array(4096);Mb(W,"/");Pb("/tmp");Pb("/dev");qb[259]={k:{N:function(){return 0},write:function(){return 0}}};Qb("/dev/null",259);
ob(1280,{qb:function(a){if(!a.input.length){var b=m;if(t){if(b=process.stdin.read(),!b){if(process.stdin._readableState&&process.stdin._readableState.ended)return m;return}}else"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),b!==m&&(b+="\n")):"function"==typeof readline&&(b=readline(),b!==m&&(b+="\n"));if(!b)return m;a.input=J(b,j)}return a.input.shift()},ta:function(a,b){b===m||10===b?(r.print(a.S.join("")),a.S=[]):a.S.push(Dc.Pa(b))}});
ob(1536,{ta:function(a,b){b===m||10===b?(r.printErr(a.S.join("")),a.S=[]):a.S.push(Dc.Pa(b))}});Qb("/dev/tty",1280);Qb("/dev/tty1",1536);Pb("/dev/shm");Pb("/dev/shm/tmp");
La.unshift({Q:function(){if(!r.noFSInit&&!Yb){A(!Yb,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");Yb=j;Xb();r.stdin=r.stdin;r.stdout=r.stdout;r.stderr=r.stderr;r.stdin?ac("/dev","stdin",r.stdin):Rb("/dev/tty","/dev/stdin");r.stdout?ac("/dev","stdout",m,r.stdout):Rb("/dev/tty","/dev/stdout");r.stderr?ac("/dev","stderr",m,r.stderr):Rb("/dev/tty1","/dev/stderr");var a=Tb("/dev/stdin",
"r");L[wb>>2]=a?a.B+1:0;A(0===a.B,"invalid handle for stdin ("+a.B+")");a=Tb("/dev/stdout","w");L[xb>>2]=a?a.B+1:0;A(1===a.B,"invalid handle for stdout ("+a.B+")");a=Tb("/dev/stderr","w");L[db>>2]=a?a.B+1:0;A(2===a.B,"invalid handle for stderr ("+a.B+")")}}});Ma.push({Q:function(){Bb=n}});Na.push({Q:function(){Yb=n;for(var a=0;a<X.length;a++){var b=X[a];b&&Vb(b)}}});r.FS_createFolder=function(a,b,c,d){a=U(("string"===typeof a?a:Db(a))+"/"+b);return Pb(a,Zb(c,d))};
r.FS_createPath=function(a,b){for(var a="string"===typeof a?a:Db(a),c=b.split("/").reverse();c.length;){var d=c.pop();if(d){var f=U(a+"/"+d);try{Pb(f)}catch(g){}a=f}}return f};r.FS_createDataFile=$b;
r.FS_createPreloadedFile=function(a,b,c,d,f,g,h,k,l){function y(){qc=document.pointerLockElement===u||document.mozPointerLockElement===u||document.webkitPointerLockElement===u}function F(c){function u(c){k||$b(a,b,c,d,f,l);g&&g();bb()}var q=n;r.preloadPlugins.forEach(function(a){!q&&a.canHandle(C)&&(a.handle(c,C,u,function(){h&&h();bb()}),q=j)});q||u(c)}r.preloadPlugins||(r.preloadPlugins=[]);if(!zc&&!ca){zc=j;try{new Blob,Ac=j}catch(w){Ac=n,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Bc=
"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:!Ac?console.log("warning: no BlobBuilder"):m;Cc="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:i;!r.vb&&"undefined"===typeof Cc&&(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),r.vb=j);r.preloadPlugins.push({canHandle:function(a){return!r.vb&&/\.(jpg|jpeg|png|bmp)$/i.test(a)},handle:function(a,b,
c,d){var f=m;if(Ac)try{f=new Blob([a],{type:uc(b)}),f.size!==a.length&&(f=new Blob([(new Uint8Array(a)).buffer],{type:uc(b)}))}catch(g){x.da("Blob constructor present but fails: "+g+"; falling back to blob builder")}f||(f=new Bc,f.append((new Uint8Array(a)).buffer),f=f.getBlob());var h=Cc.createObjectURL(f),k=new Image;k.onload=function(){A(k.complete,"Image "+b+" could not be decoded");var d=document.createElement("canvas");d.width=k.width;d.height=k.height;d.getContext("2d").drawImage(k,0,0);r.preloadedImages[b]=
d;Cc.revokeObjectURL(h);c&&c(a)};k.onerror=function(){console.log("Image "+h+" could not be decoded");d&&d()};k.src=h}});r.preloadPlugins.push({canHandle:function(a){return!r.Te&&a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,c,d){function f(d){h||(h=j,r.preloadedAudios[b]=d,c&&c(a))}function g(){h||(h=j,r.preloadedAudios[b]=new Audio,d&&d())}var h=n;if(Ac){try{var k=new Blob([a],{type:uc(b)})}catch(u){return g()}var k=Cc.createObjectURL(k),l=new Audio;l.addEventListener("canplaythrough",
function(){f(l)},n);l.onerror=function(){if(!h){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var c="",d=0,g=0,k=0;k<a.length;k++){d=d<<8|a[k];for(g+=8;6<=g;)var q=d>>g-6&63,g=g-6,c=c+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[q]}2==g?(c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d&3)<<4],c+="=="):4==g&&(c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d&15)<<2],c+="=");
l.src="data:audio/x-"+b.substr(-3)+";base64,"+c;f(l)}};l.src=k;setTimeout(function(){ja||f(l)},1E4)}else return g()}});var u=r.canvas;u.Ra=u.requestPointerLock||u.mozRequestPointerLock||u.webkitRequestPointerLock;u.kb=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||p();u.kb=u.kb.bind(document);document.addEventListener("pointerlockchange",y,n);document.addEventListener("mozpointerlockchange",y,n);document.addEventListener("webkitpointerlockchange",y,n);r.elementPointerLock&&
u.addEventListener("click",function(a){!qc&&u.Ra&&(u.Ra(),a.preventDefault())},n)}var C=b?mb(U(a+"/"+b)):a;ab();if("string"==typeof c){var H=h,I=function(){H?H():e('Loading data file "'+c+'" failed.')},B=new XMLHttpRequest;B.open("GET",c,j);B.responseType="arraybuffer";B.onload=function(){if(200==B.status||0==B.status&&B.response){var a=B.response;A(a,'Loading data file "'+c+'" failed (no arrayBuffer).');a=new Uint8Array(a);F(a);bb()}else I()};B.onerror=I;B.send(m);ab()}else F(c)};
r.FS_createLazyFile=function(a,b,c,d,f){var g,h;"undefined"!==typeof XMLHttpRequest?(ca||e("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"),g=function(){this.Ma=n;this.ia=[]},g.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.Wb;return this.bc(Math.floor(a/this.Wb))[b]}},g.prototype.rc=function(a){this.bc=a},g.prototype.fb=function(){var a=new XMLHttpRequest;a.open("HEAD",c,n);a.send(m);200<=a.status&&300>a.status||
304===a.status||e(Error("Couldn't load "+c+". Status: "+a.status));var b=Number(a.getResponseHeader("Content-length")),d,f=1048576;if(!((d=a.getResponseHeader("Accept-Ranges"))&&"bytes"===d))f=b;var g=this;g.rc(function(a){var d=a*f,h=(a+1)*f-1,h=Math.min(h,b-1);if("undefined"===typeof g.ia[a]){var k=g.ia;d>h&&e(Error("invalid range ("+d+", "+h+") or no bytes requested!"));h>b-1&&e(Error("only "+b+" bytes available! programmer error!"));var l=new XMLHttpRequest;l.open("GET",c,n);b!==f&&l.setRequestHeader("Range",
"bytes="+d+"-"+h);"undefined"!=typeof Uint8Array&&(l.responseType="arraybuffer");l.overrideMimeType&&l.overrideMimeType("text/plain; charset=x-user-defined");l.send(m);200<=l.status&&300>l.status||304===l.status||e(Error("Couldn't load "+c+". Status: "+l.status));d=l.response!==i?new Uint8Array(l.response||[]):J(l.responseText||"",j);k[a]=d}"undefined"===typeof g.ia[a]&&e(Error("doXHR failed!"));return g.ia[a]});this.Rb=b;this.Qb=f;this.Ma=j},g=new g,Object.defineProperty(g,"length",{get:function(){this.Ma||
this.fb();return this.Rb}}),Object.defineProperty(g,"chunkSize",{get:function(){this.Ma||this.fb();return this.Qb}}),h=i):(h=c,g=i);var k,a=U(("string"===typeof a?a:Db(a))+"/"+b);k=Ob(a,Zb(d,f));g?k.o=g:h&&(k.o=m,k.url=h);var l={};Object.keys(k.k).forEach(function(a){var b=k.k[a];l[a]=function(){bc(k)||e(new V(T.O));return b.apply(m,arguments)}});l.N=function(a,b,c,d,f){bc(k)||e(new V(T.O));a=a.e.o;if(f>=a.length)return 0;d=Math.min(a.length-f,d);A(0<=d);if(a.slice)for(var g=0;g<d;g++)b[c+g]=a[f+
g];else for(g=0;g<d;g++)b[c+g]=a.get(f+g);return d};k.k=l;return k};r.FS_createLink=function(a,b,c){a=U(("string"===typeof a?a:Db(a))+"/"+b);return Rb(c,a)};r.FS_createDevice=ac;ib=x.Bb(4);L[ib>>2]=0;La.unshift({Q:p()});Na.push({Q:p()});var Dc=new x.Da;t&&(require("fs"),process.platform.match(/^win/));La.push({Q:function(){Z.root=Mb(Z,m)}});kc.zb=N([0],"i8",M);
r.requestFullScreen=function(a,b){function c(){pc=n;(document.webkitFullScreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.mozFullscreenElement||document.fullScreenElement||document.fullscreenElement)===d?(d.gb=document.cancelFullScreen||document.mozCancelFullScreen||document.webkitCancelFullScreen,d.gb=d.gb.bind(document),sc&&d.Ra(),pc=j,tc&&xc()):tc&&yc();if(r.onFullScreen)r.onFullScreen(pc)}sc=a;tc=b;"undefined"===typeof sc&&(sc=j);"undefined"===typeof tc&&
(tc=n);var d=r.canvas;rc||(rc=j,document.addEventListener("fullscreenchange",c,n),document.addEventListener("mozfullscreenchange",c,n),document.addEventListener("webkitfullscreenchange",c,n));d.pc=d.requestFullScreen||d.mozRequestFullScreen||(d.webkitRequestFullScreen?function(){d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:m);d.pc()};
r.requestAnimationFrame=function(a){"undefined"===typeof window?setTimeout(a,1E3/60):(window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.setTimeout),window.requestAnimationFrame(a))};r.setCanvasSize=function(a,b,c){var d=r.canvas;d.width=a;d.height=b;c||wc()};r.pauseMainLoop=p();r.resumeMainLoop=function(){oc&&(oc=n,m())};
r.getUserMedia=function(){window.pb||(window.pb=navigator.getUserMedia||navigator.mozGetUserMedia);window.pb(i)};Fa=v=x.aa(E);Ga=Fa+5242880;Ha=G=x.aa(Ga);A(Ha<ia,"TOTAL_MEMORY not big enough for stack");ta=Math.min;
var $=(function(global,env,buffer) {
// EMSCRIPTEN_START_ASM
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env._stderr|0;var n=+env.NaN;var o=+env.Infinity;var p=0;var q=0;var r=0;var s=0;var t=0,u=0,v=0,w=0,x=0.0,y=0,z=0,A=0,B=0.0;var C=0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=global.Math.floor;var N=global.Math.abs;var O=global.Math.sqrt;var P=global.Math.pow;var Q=global.Math.cos;var R=global.Math.sin;var S=global.Math.tan;var T=global.Math.acos;var U=global.Math.asin;var V=global.Math.atan;var W=global.Math.atan2;var X=global.Math.exp;var Y=global.Math.log;var Z=global.Math.ceil;var _=global.Math.imul;var $=env.abort;var aa=env.assert;var ba=env.asmPrintInt;var ca=env.asmPrintFloat;var da=env.min;var ea=env.invoke_ii;var fa=env.invoke_fiii;var ga=env.invoke_vi;var ha=env.invoke_vii;var ia=env.invoke_iiii;var ja=env.invoke_v;var ka=env.invoke_iii;var la=env.invoke_viiii;var ma=env._llvm_lifetime_end;var na=env._fabsf;var oa=env._sysconf;var pa=env._logf;var qa=env._abort;var ra=env._fprintf;var sa=env._sqrt;var ta=env._fflush;var ua=env.__reallyNegative;var va=env._sqrtf;var wa=env._fputc;var xa=env.___setErrNo;var ya=env._fwrite;var za=env._send;var Aa=env._write;var Ba=env._exit;var Ca=env._sin;var Da=env.__formatString;var Ea=env._emscripten_memcpy_big;var Fa=env._fileno;var Ga=env._cos;var Ha=env._pwrite;var Ia=env._llvm_pow_f64;var Ja=env._sbrk;var Ka=env.___errno_location;var La=env._llvm_lifetime_start;var Ma=env._mkport;var Na=env._time;var Oa=env.__exit;var Pa=0.0;
// EMSCRIPTEN_START_FUNCS
function Ya(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+7&-8;return b|0}function Za(){return i|0}function _a(a){a=a|0;i=a}function $a(a,b){a=a|0;b=b|0;if((p|0)==0){p=a;q=b}}function ab(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0]}function bb(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0];a[k+4|0]=a[b+4|0];a[k+5|0]=a[b+5|0];a[k+6|0]=a[b+6|0];a[k+7|0]=a[b+7|0]}function cb(a){a=a|0;C=a}function db(a){a=a|0;D=a}function eb(a){a=a|0;E=a}function fb(a){a=a|0;F=a}function gb(a){a=a|0;G=a}function hb(a){a=a|0;H=a}function ib(a){a=a|0;I=a}function jb(a){a=a|0;J=a}function kb(a){a=a|0;K=a}function lb(a){a=a|0;L=a}function mb(){}function nb(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+24|0;h=f|0;c[h>>2]=5;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;sc(h|0);i=f;return}function ob(a,b){a=+a;b=+b;var d=0,e=0;d=i;i=i+24|0;e=d|0;c[e>>2]=5;g[e+4>>2]=a;g[e+8>>2]=b;g[e+12>>2]=0.0;g[e+16>>2]=1.0;sc(e|0);i=d;return}function pb(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+24|0;f=e|0;c[f>>2]=5;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;g[f+16>>2]=1.0;sc(f|0);i=e;return}function qb(a){a=a|0;var b=0,d=0,e=0.0,f=0.0,h=0.0;b=i;i=i+24|0;d=b|0;h=+g[a>>2];f=+g[a+4>>2];e=+g[a+8>>2];c[d>>2]=5;g[d+4>>2]=h;g[d+8>>2]=f;g[d+12>>2]=e;g[d+16>>2]=1.0;sc(d|0);i=b;return}function rb(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+16|0;f=e|0;c[f>>2]=3;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;sc(f|0);i=e;return}function sb(a){a=a|0;var b=0,d=0,e=0.0,f=0.0,h=0.0;b=i;i=i+16|0;d=b|0;h=+g[a>>2];f=+g[a+4>>2];e=+g[a+8>>2];c[d>>2]=3;g[d+4>>2]=h;g[d+8>>2]=f;g[d+12>>2]=e;sc(d|0);i=b;return}function tb(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+32|0;h=f|0;c[h>>2]=0;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;c[h+20>>2]=~~(a*63488.0+1024.0);c[h+24>>2]=~~(b*64512.0+512.0);c[h+28>>2]=~~(d*63488.0+1024.0);sc(h|0);i=f;return}function ub(a){a=a|0;var b=0,d=0,e=0.0,f=0.0,h=0.0;b=i;i=i+32|0;d=b|0;c[d>>2]=0;h=+g[a>>2];g[d+4>>2]=h;f=+g[a+4>>2];g[d+8>>2]=f;e=+g[a+8>>2];g[d+12>>2]=e;g[d+16>>2]=+g[a+12>>2];c[d+20>>2]=~~(h*63488.0+1024.0);c[d+24>>2]=~~(f*64512.0+512.0);c[d+28>>2]=~~(e*63488.0+1024.0);sc(d|0);i=b;return}function vb(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=0;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;g[f+16>>2]=1.0;c[f+20>>2]=~~(a*63488.0+1024.0);c[f+24>>2]=~~(b*64512.0+512.0);c[f+28>>2]=~~(d*63488.0+1024.0);sc(f|0);i=e;return}function wb(a){a=a|0;var b=0,d=0,e=0.0,f=0.0,h=0.0;b=i;i=i+32|0;d=b|0;h=+g[a>>2];f=+g[a+4>>2];e=+g[a+8>>2];c[d>>2]=0;g[d+4>>2]=h;g[d+8>>2]=f;g[d+12>>2]=e;g[d+16>>2]=1.0;c[d+20>>2]=~~(h*63488.0+1024.0);c[d+24>>2]=~~(f*64512.0+512.0);c[d+28>>2]=~~(e*63488.0+1024.0);sc(d|0);i=b;return}function xb(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+24|0;h=f|0;c[h>>2]=1;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;sc(h|0);i=f;return}function yb(a,b){a=+a;b=+b;var d=0,e=0;d=i;i=i+24|0;e=d|0;c[e>>2]=1;g[e+4>>2]=a;g[e+8>>2]=b;g[e+12>>2]=0.0;g[e+16>>2]=1.0;sc(e|0);i=d;return}function zb(a){a=a|0;var b=0,d=0,e=0.0,f=0.0;b=i;i=i+24|0;d=b|0;f=+g[a>>2];e=+g[a+4>>2];c[d>>2]=1;g[d+4>>2]=f;g[d+8>>2]=e;g[d+12>>2]=0.0;g[d+16>>2]=1.0;sc(d|0);i=b;return}function Ab(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=2;c[d+4>>2]=a;sc(d|0);i=b;return}function Bb(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=36;c[d+4>>2]=a;sc(d|0);i=b;return}function Cb(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=37;c[d+4>>2]=a;sc(d|0);i=b;return}function Db(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=38;c[d+4>>2]=(a|0)!=2305;sc(d|0);i=b;return}function Eb(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=39;c[e+4>>2]=a;c[e+8>>2]=b;sc(e|0);i=d;return}function Fb(a){a=a|0;var b=0,d=0;b=i;i=i+16|0;d=b|0;c[d>>2]=7;c[d+4>>2]=a;c[d+8>>2]=1;sc(d|0);i=b;return}function Gb(a){a=a|0;var b=0,d=0;b=i;i=i+16|0;d=b|0;c[d>>2]=7;c[d+4>>2]=a;c[d+8>>2]=0;sc(d|0);i=b;return}function Hb(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=4;c[d+4>>2]=a;sc(d|0);i=b;return}function Ib(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=6;sc(b|0);i=a;return}function Jb(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=8;c[d+4>>2]=a;sc(d|0);i=b;return}function Kb(a){a=a|0;var b=0,d=0;b=i;d=i;i=i+68|0;i=i+7&-8;c[d>>2]=9;jf(d+4|0,a|0,64)|0;sc(d|0);i=b;return}function Lb(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=10;sc(b|0);i=a;return}function Mb(a){a=a|0;var b=0,d=0;b=i;d=i;i=i+68|0;i=i+7&-8;c[d>>2]=11;jf(d+4|0,a|0,64)|0;sc(d|0);i=b;return}function Nb(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=12;sc(b|0);i=a;return}function Ob(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=13;sc(b|0);i=a;return}function Pb(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+24|0;h=f|0;c[h>>2]=14;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;sc(h|0);i=f;return}function Qb(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+16|0;f=e|0;c[f>>2]=15;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;sc(f|0);i=e;return}function Rb(a,b,d){a=+a;b=+b;d=+d;var e=0,f=0;e=i;i=i+16|0;f=e|0;c[f>>2]=16;g[f+4>>2]=a;g[f+8>>2]=b;g[f+12>>2]=d;sc(f|0);i=e;return}function Sb(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;i=i+24|0;g=f|0;c[g>>2]=17;c[g+4>>2]=a;c[g+8>>2]=b;c[g+12>>2]=d;c[g+16>>2]=e;sc(g|0);i=f;return}function Tb(a,b,d,e,f,h){a=+a;b=+b;d=+d;e=+e;f=+f;h=+h;var j=0,k=0;j=i;i=i+32|0;k=j|0;c[k>>2]=18;g[k+4>>2]=a;g[k+8>>2]=b;g[k+12>>2]=d;g[k+16>>2]=e;g[k+20>>2]=f;g[k+24>>2]=h;sc(k|0);i=j;return}function Ub(a,b,d,e,f,h){a=+a;b=+b;d=+d;e=+e;f=+f;h=+h;var j=0,k=0;j=i;i=i+32|0;k=j|0;c[k>>2]=19;g[k+4>>2]=a;g[k+8>>2]=b;g[k+12>>2]=d;g[k+16>>2]=e;g[k+20>>2]=f;g[k+24>>2]=h;sc(k|0);i=j;return}function Vb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=i;g=d;d=i;i=i+28|0;i=i+7&-8;c[d>>2]=20;c[d+4>>2]=a;c[d+8>>2]=b;f=(b|0)==5633;b=d+12|0;c[b>>2]=c[g>>2];c[b+4>>2]=c[g+4>>2];c[b+8>>2]=c[g+8>>2];c[b+12>>2]=c[g+12>>2];b=d|0;a=f?1:4;if(!f){sc(b);i=e;return}f=a+1|0;kf(d+(a+3<<2)|0,0,(f>>>0>4>>>0?f:4)-a<<2|0)|0;sc(b);i=e;return}function Wb(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=20;c[f+4>>2]=a;c[f+8>>2]=b;g[f+12>>2]=d;kf(f+16|0,0,12)|0;sc(f|0);i=e;return}function Xb(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=21;c[e+4>>2]=a;c[e+8>>2]=b;sc(e|0);i=d;return}function Yb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;f=d;d=i;i=i+28|0;i=i+7&-8;c[d>>2]=22;c[d+4>>2]=a;c[d+8>>2]=b;a=d+12|0;c[a>>2]=c[f>>2];c[a+4>>2]=c[f+4>>2];c[a+8>>2]=c[f+8>>2];c[a+12>>2]=c[f+12>>2];sc(d|0);i=e;return}function Zb(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=22;c[f+4>>2]=a;c[f+8>>2]=b;g[f+12>>2]=d;kf(f+16|0,0,12)|0;sc(f|0);i=e;return}function _b(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+24|0;e=d|0;c[e>>2]=23;c[e+4>>2]=a;g[e+8>>2]=+(b|0);kf(e+12|0,0,16)|0;sc(e|0);i=d;return}function $b(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=b;b=i;i=i+24|0;c[b>>2]=23;c[b+4>>2]=a;a=b+8|0;c[a>>2]=c[e>>2];c[a+4>>2]=c[e+4>>2];c[a+8>>2]=c[e+8>>2];c[a+12>>2]=c[e+12>>2];sc(b|0);i=d;return}function ac(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=24;c[d+4>>2]=a;sc(d|0);i=b;return}function bc(a,b,d,e){a=+a;b=+b;d=+d;e=+e;var f=0,h=0;f=i;i=i+24|0;h=f|0;c[h>>2]=25;g[h+4>>2]=a;g[h+8>>2]=b;g[h+12>>2]=d;g[h+16>>2]=e;sc(h|0);i=f;return}function cc(a){a=+a;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=26;g[d+4>>2]=a;sc(d|0);i=b;return}function dc(a,b,d,e,f,g,h,j,k){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;k=k|0;var l=0,m=0;l=i;i=i+40|0;m=l|0;c[m>>2]=31;c[m+4>>2]=a;c[m+8>>2]=b;c[m+12>>2]=d;c[m+16>>2]=e;c[m+20>>2]=f;c[m+24>>2]=g;c[m+28>>2]=h;c[m+32>>2]=j;c[m+36>>2]=k;sc(m|0);i=l;return}function ec(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=32;c[e+4>>2]=a;c[e+8>>2]=b;sc(e|0);i=d;return}function fc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=33;c[f+4>>2]=a;c[f+8>>2]=b;c[f+12>>2]=d;kf(f+16|0,0,16)|0;sc(f|0);i=e;return}function gc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;i=i+32|0;f=e|0;c[f>>2]=34;c[f+4>>2]=a;c[f+8>>2]=b;c[f+12>>2]=d;kf(f+16|0,0,16)|0;sc(f|0);i=e;return}function hc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=35;c[e+4>>2]=a;c[e+8>>2]=b;sc(e|0);i=d;return}function ic(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=27;sc(b|0);i=a;return}function jc(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=28;c[d+4>>2]=a;sc(d|0);i=b;return}function kc(){var a=0,b=0;a=i;i=i+8|0;b=a|0;c[b>>2]=29;sc(b|0);i=a;return}function lc(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=30;c[d+4>>2]=a;sc(d|0);i=b;return}function mc(a,b){a=+a;b=+b;return}function nc(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=40;c[d+4>>2]=a;sc(d|0);i=b;return}function oc(){return}function pc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+16|0;e=d|0;c[e>>2]=41;c[e+4>>2]=a;c[e+8>>2]=b;sc(e|0);i=d;return}function qc(a){a=a|0;c[(rc()|0)+2412>>2]=a;return}function rc(){return c[734]|0}function sc(b){b=b|0;var d=0,e=0,f=0,j=0,k=0,l=0,n=0,o=0,p=0;d=i;j=c[734]|0;if((c[j+2404>>2]|0)!=0){Ta[c[440+(c[b>>2]<<2)>>2]&127](j,b)}if((c[j+2408>>2]|0)!=0){f=c[224+(c[b>>2]<<2)>>2]|0;e=j+2400|0;k=c[e>>2]|0;l=j+2396|0;n=c[l>>2]|0;if((k+f|0)>510){o=ef(2052)|0;p=o;c[o+2048>>2]=0;c[n+2048>>2]=p;c[n+(k<<2)>>2]=43;c[n+(k+1<<2)>>2]=o;c[l>>2]=p;k=0;n=p}l=(f|0)>1;o=k;p=0;while(1){c[n+(o<<2)>>2]=c[b+(p<<2)>>2];p=p+1|0;if((p|0)>=(f|0)){break}o=o+1|0}c[e>>2]=k+(l?f:1)}if((c[j+2412>>2]|0)==0){i=d;return}e=c[m>>2]|0;f=c[8+(c[b>>2]<<2)>>2]|0;a:while(1){b=b+4|0;while(1){j=a[f]|0;if((j<<24>>24|0)==37){break}else if((j<<24>>24|0)==0){break a}wa(j<<24>>24|0,e|0)|0;f=f+1|0}j=f+2|0;if((a[f+1|0]|0)==102){ra(e|0,2904,(f=i,i=i+8|0,h[f>>3]=+g[b>>2],f)|0)|0;i=f;f=j;continue}else{ra(e|0,2896,(f=i,i=i+8|0,c[f>>2]=c[b>>2],f)|0)|0;i=f;f=j;continue}}wa(10,e|0)|0;i=d;return}function tc(a,b){a=a|0;b=b|0;return}function uc(a,b){a=a|0;b=b|0;return}function vc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=c[b+4>>2]|0;b=c[(c[a+2384>>2]|0)+(e<<2)>>2]|0;if((b|0)==0){Yd(1824,(f=i,i=i+8|0,c[f>>2]=e,f)|0);i=f}b=c[b>>2]|0;while(1){e=c[b>>2]|0;if((e|0)==43){b=c[b+4>>2]|0;continue}else if((e|0)==42){break}else{Ta[c[440+(e<<2)>>2]&127](a,b);b=b+(c[224+(e<<2)>>2]<<2)|0;continue}}i=d;return}function wc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;e=c[734]|0;d=e+2384|0;f=c[(c[d>>2]|0)+(a<<2)>>2]|0;if((f|0)!=0){g=c[f>>2]|0;if((g|0)!=0){while(1){h=c[g+2048>>2]|0;cf(g);if((h|0)==0){break}else{g=h}}}cf(f);c[(c[d>>2]|0)+(a<<2)>>2]=0}g=ef(4)|0;f=ef(2052)|0;c[f+2048>>2]=0;h=g;c[h>>2]=f;c[f>>2]=42;c[(c[d>>2]|0)+(a<<2)>>2]=g;c[e+2396>>2]=c[h>>2];c[e+2400>>2]=0;c[e+2408>>2]=1;c[e+2404>>2]=(b|0)==4865;return}function xc(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,i=0;a=c[734]|0;b=a+2400|0;g=c[b>>2]|0;e=a+2396|0;d=c[e>>2]|0;f=g+1|0;if((f|0)>510){i=ef(2052)|0;h=i;c[i+2048>>2]=0;c[d+2048>>2]=h;c[d+(g<<2)>>2]=43;c[d+(f<<2)>>2]=i;c[e>>2]=h;g=0;d=h}c[d+(g<<2)>>2]=42;c[b>>2]=g+1;c[a+2408>>2]=0;c[a+2404>>2]=1;return}function yc(a){a=a|0;return(c[(c[(c[734]|0)+2384>>2]|0)+(a<<2)>>2]|0)!=0|0}function zc(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=(c[734]|0)+2384|0;e=c[b>>2]|0;f=0;g=0;while(1){if((c[e+(f<<2)>>2]|0)==0){g=g+1|0;if((g|0)==(a|0)){break}}else{g=0}f=f+1|0;if((f|0)>=1024){a=0;d=7;break}}if((d|0)==7){return a|0}d=f-a+1|0;if((a|0)>0){e=0}else{g=d;return g|0}while(1){g=ef(4)|0;f=ef(2052)|0;c[f+2048>>2]=0;c[g>>2]=f;c[f>>2]=42;c[(c[b>>2]|0)+(e+d<<2)>>2]=g;e=e+1|0;if((e|0)>=(a|0)){a=d;break}}return a|0}function Ac(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;d=c[734]|0;f=c[d+2396>>2]|0;if((b|0)<=0){return}e=d+2384|0;k=0;g=0;do{i=g+a|0;h=c[(c[e>>2]|0)+(i<<2)>>2]|0;if((h|0)!=0){j=h|0;a:do{if((k|0)==0){k=j;while(1){k=c[k>>2]|0;if((k|0)==0){k=0;break a}if((k|0)==(f|0)){k=1;break}else{k=k+2048|0}}}}while(0);j=c[j>>2]|0;if((j|0)!=0){while(1){l=c[j+2048>>2]|0;cf(j);if((l|0)==0){break}else{j=l}}}cf(h);c[(c[e>>2]|0)+(i<<2)>>2]=0}g=g+1|0;}while((g|0)<(b|0));if((k|0)==0){return}c[d+2408>>2]=0;c[d+2404>>2]=1;return}function Bc(a,b){a=a|0;b=b|0;var c=0.0,d=0.0;d=+g[b+8>>2];c=+g[b+12>>2];g[a+3012>>2]=+g[b+4>>2];g[a+3016>>2]=d;g[a+3020>>2]=c;g[a+3024>>2]=0.0;return}function Cc(a,b){a=a|0;b=b|0;g[a+3028>>2]=+g[b+4>>2];g[a+3032>>2]=+g[b+8>>2];g[a+3036>>2]=+g[b+12>>2];g[a+3040>>2]=+g[b+16>>2];return}function Dc(a,b){a=a|0;b=b|0;c[a+3044>>2]=c[b+4>>2];return}function Ec(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0,k=0;d=i;i=i+32|0;e=d|0;f=b+4|0;g[a+2984>>2]=+g[f>>2];h=b+8|0;g[a+2988>>2]=+g[h>>2];j=b+12|0;g[a+2992>>2]=+g[j>>2];k=b+16|0;g[a+2996>>2]=+g[k>>2];c[a+3e3>>2]=c[b+20>>2];c[a+3004>>2]=c[b+24>>2];c[a+3008>>2]=c[b+28>>2];if((c[a+2364>>2]|0)==0){i=d;return}c[e>>2]=20;c[e+4>>2]=c[a+2368>>2];c[e+8>>2]=c[a+2372>>2];g[e+12>>2]=+g[f>>2];g[e+16>>2]=+g[h>>2];g[e+20>>2]=+g[j>>2];g[e+24>>2]=+g[k>>2];nd(a,e|0);i=d;return}function Fc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0.0,h=0.0;d=i;i=i+64|0;e=d|0;c[a+3052>>2]=c[b+4>>2];c[a+3048>>2]=1;c[a+3056>>2]=0;c[a+3060>>2]=0;b=a+2584|0;if((c[b>>2]|0)!=0){do{if((c[a+2204>>2]|0)==0){qe(a+2520|0,c[a+2436>>2]|0,c[a+2432>>2]|0);e=a+2588|0;c[e>>2]=0;if(!(+g[a+2568>>2]==0.0)){break}if(!(+g[a+2572>>2]==0.0)){break}if(!(+g[a+2576>>2]==0.0)){break}c[e>>2]=1}else{we(e,c[a+2432>>2]|0);ue(a+2456|0,e)}}while(0);c[a+2592>>2]=(pe(c[a+2440>>2]|0)|0)==0;c[b>>2]=0}b=a+2636|0;if((c[b>>2]|0)!=0){h=(+(c[a+2604>>2]|0)+-.5)*.5;g[a+2624>>2]=+(c[a+2596>>2]|0)+h;f=+(c[a+2608>>2]|0)+-.5;g[a+2628>>2]=+(c[a+2600>>2]|0)+f*.5;g[a+2632>>2]=8388608.0;g[a+2612>>2]=h;g[a+2616>>2]=f*-.5;g[a+2620>>2]=-8388608.0;c[b>>2]=0}if((c[a+2676>>2]|0)==7170){c[a+2668>>2]=4;c[a+2672>>2]=4;i=d;return}b=c[a+2644>>2]|0;if((b|0)==6912){c[a+2668>>2]=6}else if((b|0)==6913){c[a+2668>>2]=8}else{c[a+2668>>2]=2}b=c[a+2640>>2]|0;if((b|0)==6912){c[a+2672>>2]=6;i=d;return}else if((b|0)==6913){c[a+2672>>2]=8;i=d;return}else{c[a+2672>>2]=2;i=d;return}}function Gc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0,k=0,l=0,m=0,n=0.0,o=0,p=0.0,q=0,r=0.0,s=0.0,t=0,u=0,v=0,w=0.0,x=0.0,y=0,z=0,A=0,B=0.0,C=0.0,D=0.0;d=i;f=a+3056|0;h=c[f>>2]|0;j=a+3060|0;e=(c[j>>2]|0)+1|0;c[j>>2]=e;j=a+3064|0;k=c[j>>2]|0;if((h|0)<(k|0)){m=c[a+3068>>2]|0}else{c[j>>2]=k<<1;j=df(k*288|0)|0;m=j;if((j|0)==0){Yd(904,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v}v=a+3068|0;jf(j|0,c[v>>2]|0,h*144|0)|0;cf(c[v>>2]|0);c[v>>2]=m}j=a+3068|0;l=m+(h*144|0)|0;k=h+1|0;p=+g[b+4>>2];g[m+(h*144|0)+16>>2]=p;x=+g[b+8>>2];g[m+(h*144|0)+20>>2]=x;w=+g[b+12>>2];g[m+(h*144|0)+24>>2]=w;g[m+(h*144|0)+28>>2]=+g[b+16>>2];b=a+2204|0;do{if((c[b>>2]|0)==0){n=+g[a+2532>>2]+(p*+g[a+2520>>2]+x*+g[a+2524>>2]+w*+g[a+2528>>2]);g[m+(h*144|0)+80>>2]=n;s=+g[a+2548>>2]+(p*+g[a+2536>>2]+x*+g[a+2540>>2]+w*+g[a+2544>>2]);g[m+(h*144|0)+84>>2]=s;r=+g[a+2564>>2]+(p*+g[a+2552>>2]+x*+g[a+2556>>2]+w*+g[a+2560>>2]);g[m+(h*144|0)+88>>2]=r;if((c[a+2588>>2]|0)==0){p=+g[a+2580>>2]+(p*+g[a+2568>>2]+x*+g[a+2572>>2]+w*+g[a+2576>>2]);g[m+(h*144|0)+92>>2]=p;break}else{p=+g[a+2580>>2];g[m+(h*144|0)+92>>2]=p;break}}else{o=c[a+2432>>2]|0;D=+g[o+12>>2]+(p*+g[o>>2]+x*+g[o+4>>2]+w*+g[o+8>>2]);g[m+(h*144|0)+64>>2]=D;C=+g[o+28>>2]+(p*+g[o+16>>2]+x*+g[o+20>>2]+w*+g[o+24>>2]);g[m+(h*144|0)+68>>2]=C;B=+g[o+44>>2]+(p*+g[o+32>>2]+x*+g[o+36>>2]+w*+g[o+40>>2]);g[m+(h*144|0)+72>>2]=B;p=+g[o+60>>2]+(p*+g[o+48>>2]+x*+g[o+52>>2]+w*+g[o+56>>2]);g[m+(h*144|0)+76>>2]=p;o=c[a+2436>>2]|0;n=D*+g[o>>2]+C*+g[o+4>>2]+B*+g[o+8>>2]+p*+g[o+12>>2];u=m+(h*144|0)+80|0;g[u>>2]=n;s=D*+g[o+16>>2]+C*+g[o+20>>2]+B*+g[o+24>>2]+p*+g[o+28>>2];t=m+(h*144|0)+84|0;g[t>>2]=s;r=D*+g[o+32>>2]+C*+g[o+36>>2]+B*+g[o+40>>2]+p*+g[o+44>>2];q=m+(h*144|0)+88|0;g[q>>2]=r;p=D*+g[o+48>>2]+C*+g[o+52>>2]+B*+g[o+56>>2]+p*+g[o+60>>2];o=m+(h*144|0)+92|0;g[o>>2]=p;A=a+3012|0;z=a+3016|0;y=a+3020|0;v=m+(h*144|0)+4|0;g[v>>2]=+g[A>>2]*+g[a+2456>>2]+ +g[z>>2]*+g[a+2460>>2]+ +g[y>>2]*+g[a+2464>>2];g[m+(h*144|0)+8>>2]=+g[A>>2]*+g[a+2472>>2]+ +g[z>>2]*+g[a+2476>>2]+ +g[y>>2]*+g[a+2480>>2];g[m+(h*144|0)+12>>2]=+g[A>>2]*+g[a+2488>>2]+ +g[z>>2]*+g[a+2492>>2]+ +g[y>>2]*+g[a+2496>>2];if((c[a+2664>>2]|0)==0){break}ye(v)|0;n=+g[u>>2];s=+g[t>>2];r=+g[q>>2];p=+g[o>>2]}}while(0);C=p*1.00001;D=-0.0-C;o=m+(h*144|0)+96|0;c[o>>2]=n<D|(C<n)<<1|(C<s)<<3|(C<r)<<5|(s<D)<<2|(r<D)<<4;if((c[b>>2]|0)==0){A=m+(h*144|0)+48|0;z=a+2984|0;c[A>>2]=c[z>>2];c[A+4>>2]=c[z+4>>2];c[A+8>>2]=c[z+8>>2];c[A+12>>2]=c[z+12>>2]}else{sd(a,l)}do{if((c[a+2380>>2]|0)!=0){m=m+(h*144|0)+32|0;if((c[a+2592>>2]|0)==0){A=m;z=a+3028|0;c[A>>2]=c[z>>2];c[A+4>>2]=c[z+4>>2];c[A+8>>2]=c[z+8>>2];c[A+12>>2]=c[z+12>>2];break}else{te(m,c[a+2440>>2]|0,a+3028|0);break}}}while(0);if((c[o>>2]|0)==0){zd(a,l)}c[l>>2]=c[a+3044>>2];l=c[a+3052>>2]|0;switch(l|0){case 0:{Ad(a,c[j>>2]|0);A=0;c[f>>2]=A;i=d;return};case 1:{if((k|0)!=2){A=k;c[f>>2]=A;i=d;return}A=c[j>>2]|0;Bd(a,A,A+144|0);A=0;c[f>>2]=A;i=d;return};case 3:case 2:{if((h|0)==0){A=c[j>>2]|0;jf(A+288|0,A|0,144)|0;A=k;c[f>>2]=A;i=d;return}if((k|0)!=2){A=k;c[f>>2]=A;i=d;return}A=c[j>>2]|0;Bd(a,A,A+144|0);A=c[j>>2]|0;jf(A|0,A+144|0,144)|0;A=1;c[f>>2]=A;i=d;return};case 4:{if((k|0)!=3){A=k;c[f>>2]=A;i=d;return}A=c[j>>2]|0;Id(a,A,A+144|0,A+288|0);A=0;c[f>>2]=A;i=d;return};case 5:{if((e|0)<=2){A=k;c[f>>2]=A;i=d;return}h=(k|0)==3?0:k;j=c[j>>2]|0;if((e&1|0)==0){Id(a,j+288|0,j+144|0,j);A=h;c[f>>2]=A;i=d;return}else{Id(a,j,j+144|0,j+288|0);A=h;c[f>>2]=A;i=d;return}};case 6:{if((k|0)!=3){A=k;c[f>>2]=A;i=d;return}A=c[j>>2]|0;Id(a,A,A+144|0,A+288|0);A=c[j>>2]|0;jf(A+144|0,A+288|0,144)|0;A=2;c[f>>2]=A;i=d;return};case 7:{if((k|0)!=4){A=k;c[f>>2]=A;i=d;return}A=c[j>>2]|0;c[A+288>>2]=0;Id(a,A,A+144|0,A+288|0);A=c[j>>2]|0;c[A+288>>2]=1;c[A>>2]=0;Id(a,A,A+288|0,A+432|0);A=0;c[f>>2]=A;i=d;return};case 8:{if((k|0)!=4){A=k;c[f>>2]=A;i=d;return}A=c[j>>2]|0;Id(a,A,A+144|0,A+288|0);A=c[j>>2]|0;Id(a,A+144|0,A+432|0,A+288|0);A=c[j>>2]|0;jf(A|0,A+288|0,144)|0;A=c[j>>2]|0;jf(A+144|0,A+432|0,144)|0;A=2;c[f>>2]=A;i=d;return};case 9:{A=k;c[f>>2]=A;i=d;return};default:{Yd(2448,(A=i,i=i+8|0,c[A>>2]=l,A)|0);i=A;A=k;c[f>>2]=A;i=d;return}}}function Hc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;b=c[a+3052>>2]|0;do{if((b|0)==2){if((c[a+3060>>2]|0)<=2){break}e=c[a+3068>>2]|0;Bd(a,e,e+288|0)}else if((b|0)==9){d=c[a+3060>>2]|0;if((d|0)<=2){break}b=a+3068|0;while(1){e=d-1|0;f=c[b>>2]|0;Id(a,f+(e*144|0)|0,f,f+((d-2|0)*144|0)|0);if((e|0)>2){d=e}else{break}}}}while(0);c[a+3048>>2]=0;return}function Ic(a){a=a|0;var b=0,d=0,e=0,f=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0;b=i;i=i+192|0;m=b|0;n=b+16|0;o=b+32|0;d=b+48|0;q=b+64|0;r=b+80|0;s=b+96|0;l=b+112|0;e=b+128|0;f=b+144|0;h=b+160|0;j=b+176|0;p=ef(3164)|0;k=p;c[734]=k;c[p>>2]=a;c[p+3064>>2]=16;c[p+3068>>2]=df(2304)|0;c[p+2596>>2]=0;c[p+2600>>2]=0;c[p+2604>>2]=c[a>>2];c[p+2608>>2]=c[a+4>>2];c[p+2636>>2]=1;c[p+2384>>2]=ef(4096)|0;c[p+2388>>2]=ef(1024)|0;c[p+2392>>2]=ef(2048)|0;Vc(k,0)|0;c[p+2404>>2]=1;c[p+2408>>2]=0;c[p+2412>>2]=0;c[p+3048>>2]=0;t=p+4|0;u=m;v=n;w=o;x=d;y=q;z=r;A=s;a=0;do{Ae(m,0.0,0.0,0.0,1.0);B=t+(a*136|0)|0;c[B>>2]=c[u>>2];c[B+4>>2]=c[u+4>>2];c[B+8>>2]=c[u+8>>2];c[B+12>>2]=c[u+12>>2];Ae(n,1.0,1.0,1.0,1.0);B=t+(a*136|0)+16|0;c[B>>2]=c[v>>2];c[B+4>>2]=c[v+4>>2];c[B+8>>2]=c[v+8>>2];c[B+12>>2]=c[v+12>>2];Ae(o,1.0,1.0,1.0,1.0);B=t+(a*136|0)+32|0;c[B>>2]=c[w>>2];c[B+4>>2]=c[w+4>>2];c[B+8>>2]=c[w+8>>2];c[B+12>>2]=c[w+12>>2];Ae(d,0.0,0.0,1.0,0.0);B=t+(a*136|0)+48|0;c[B>>2]=c[x>>2];c[B+4>>2]=c[x+4>>2];c[B+8>>2]=c[x+8>>2];c[B+12>>2]=c[x+12>>2];ze(q,0.0,0.0,1.0);B=t+(a*136|0)+112|0;c[B>>2]=c[y>>2];c[B+4>>2]=c[y+4>>2];c[B+8>>2]=c[y+8>>2];ze(r,0.0,0.0,-1.0);B=t+(a*136|0)+64|0;c[B>>2]=c[z>>2];c[B+4>>2]=c[z+4>>2];c[B+8>>2]=c[z+8>>2];ze(s,0.0,0.0,-1.0);B=t+(a*136|0)+100|0;c[B>>2]=c[A>>2];c[B+4>>2]=c[A+4>>2];c[B+8>>2]=c[A+8>>2];g[t+(a*136|0)+76>>2]=0.0;g[t+(a*136|0)+80>>2]=180.0;g[t+(a*136|0)+84>>2]=1.0;g[t+(a*136|0)+88>>2]=0.0;g[t+(a*136|0)+92>>2]=0.0;c[t+(a*136|0)+124>>2]=0;a=a+1|0;}while((a|0)<16);c[p+2180>>2]=0;B=p+2184|0;Ae(l,.20000000298023224,.20000000298023224,.20000000298023224,1.0);x=l;c[B>>2]=c[x>>2];c[B+4>>2]=c[x+4>>2];c[B+8>>2]=c[x+8>>2];c[B+12>>2]=c[x+12>>2];c[p+2200>>2]=0;c[p+2204>>2]=0;c[p+2208>>2]=0;B=p+2212|0;x=e;y=f;z=h;A=j;Ae(e,0.0,0.0,0.0,1.0);c[B>>2]=c[x>>2];c[B+4>>2]=c[x+4>>2];c[B+8>>2]=c[x+8>>2];c[B+12>>2]=c[x+12>>2];B=p+2228|0;Ae(f,.20000000298023224,.20000000298023224,.20000000298023224,1.0);c[B>>2]=c[y>>2];c[B+4>>2]=c[y+4>>2];c[B+8>>2]=c[y+8>>2];c[B+12>>2]=c[y+12>>2];B=p+2244|0;Ae(h,.800000011920929,.800000011920929,.800000011920929,1.0);c[B>>2]=c[z>>2];c[B+4>>2]=c[z+4>>2];c[B+8>>2]=c[z+8>>2];c[B+12>>2]=c[z+12>>2];B=p+2260|0;Ae(j,0.0,0.0,0.0,1.0);c[B>>2]=c[A>>2];c[B+4>>2]=c[A+4>>2];c[B+8>>2]=c[A+8>>2];c[B+12>>2]=c[A+12>>2];g[p+2276>>2]=0.0;B=p+2288|0;Ae(e,0.0,0.0,0.0,1.0);c[B>>2]=c[x>>2];c[B+4>>2]=c[x+4>>2];c[B+8>>2]=c[x+8>>2];c[B+12>>2]=c[x+12>>2];B=p+2304|0;Ae(f,.20000000298023224,.20000000298023224,.20000000298023224,1.0);c[B>>2]=c[y>>2];c[B+4>>2]=c[y+4>>2];c[B+8>>2]=c[y+8>>2];c[B+12>>2]=c[y+12>>2];B=p+2320|0;Ae(h,.800000011920929,.800000011920929,.800000011920929,1.0);c[B>>2]=c[z>>2];c[B+4>>2]=c[z+4>>2];c[B+8>>2]=c[z+8>>2];c[B+12>>2]=c[z+12>>2];B=p+2336|0;Ae(j,0.0,0.0,0.0,1.0);c[B>>2]=c[A>>2];c[B+4>>2]=c[A+4>>2];c[B+8>>2]=c[A+8>>2];c[B+12>>2]=c[A+12>>2];g[p+2352>>2]=0.0;c[p+2368>>2]=1032;c[p+2372>>2]=5634;c[p+2364>>2]=0;Wc(k);g[p+2984>>2]=1.0;g[p+2988>>2]=1.0;g[p+2992>>2]=1.0;g[p+2996>>2]=1.0;c[p+3e3>>2]=65535;c[p+3004>>2]=65535;c[p+3008>>2]=65535;g[p+3012>>2]=1.0;g[p+3016>>2]=0.0;g[p+3020>>2]=0.0;g[p+3024>>2]=0.0;c[p+3044>>2]=1;g[p+3028>>2]=0.0;g[p+3032>>2]=0.0;g[p+3036>>2]=0.0;g[p+3040>>2]=1.0;c[p+2644>>2]=6914;c[p+2640>>2]=6914;c[p+2648>>2]=0;c[p+2656>>2]=1029;c[p+2652>>2]=7425;c[p+2660>>2]=0;kf(p+2964|0,0,20)|0;c[p+2676>>2]=7168;c[p+2680>>2]=0;c[p+2960>>2]=0;c[p+2416>>2]=0;c[p+2444>>2]=32;c[p+2448>>2]=8;c[p+2452>>2]=8;B=ef(2048)|0;c[p+2420>>2]=B;c[p+2432>>2]=B;B=ef(c[p+2448>>2]<<6)|0;c[p+2424>>2]=B;c[p+2436>>2]=B;B=ef(c[p+2452>>2]<<6)|0;c[p+2428>>2]=B;c[p+2440>>2]=B;Jb(5889);Lb();Jb(5890);Lb();Jb(5888);Lb();c[p+2584>>2]=1;c[p+3116>>2]=0;c[p+3152>>2]=0;c[p+3160>>2]=0;kf(p+3128|0,0,20)|0;i=b;return}function Jc(){var a=0;a=rc()|0;cf(c[a+2384>>2]|0);cf(c[a+2388>>2]|0);cf(c[a+2392>>2]|0);cf(a);return}function Kc(a,b){a=a|0;b=b|0;b=c[b+4>>2]|0;if((b|0)==5888){c[a+2416>>2]=0;return}else if((b|0)==5889){c[a+2416>>2]=1;return}else if((b|0)==5890){c[a+2416>>2]=2;return}else{return}}function Lc(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a+2416>>2]|0;e=c[a+2432+(d<<2)>>2]|0;g[e>>2]=+g[b+4>>2];g[e+16>>2]=+g[b+8>>2];g[e+32>>2]=+g[b+12>>2];g[e+48>>2]=+g[b+16>>2];g[e+4>>2]=+g[b+20>>2];g[e+20>>2]=+g[b+24>>2];g[e+36>>2]=+g[b+28>>2];g[e+52>>2]=+g[b+32>>2];g[e+8>>2]=+g[b+36>>2];g[e+24>>2]=+g[b+40>>2];g[e+40>>2]=+g[b+44>>2];g[e+56>>2]=+g[b+48>>2];g[e+12>>2]=+g[b+52>>2];g[e+28>>2]=+g[b+56>>2];g[e+44>>2]=+g[b+60>>2];g[e+60>>2]=+g[b+64>>2];c[a+2584>>2]=(d|0)<2;return}function Mc(a,b){a=a|0;b=b|0;b=a+2416|0;oe(c[a+2432+(c[b>>2]<<2)>>2]|0);c[a+2584>>2]=(c[b>>2]|0)<2;return}function Nc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;i=i+64|0;e=d|0;g[e>>2]=+g[b+4>>2];g[e+16>>2]=+g[b+8>>2];g[e+32>>2]=+g[b+12>>2];g[e+48>>2]=+g[b+16>>2];g[e+4>>2]=+g[b+20>>2];g[e+20>>2]=+g[b+24>>2];g[e+36>>2]=+g[b+28>>2];g[e+52>>2]=+g[b+32>>2];g[e+8>>2]=+g[b+36>>2];g[e+24>>2]=+g[b+40>>2];g[e+40>>2]=+g[b+44>>2];g[e+56>>2]=+g[b+48>>2];g[e+12>>2]=+g[b+52>>2];g[e+28>>2]=+g[b+56>>2];g[e+44>>2]=+g[b+60>>2];g[e+60>>2]=+g[b+64>>2];b=a+2416|0;re(c[a+2432+(c[b>>2]<<2)>>2]|0,e);c[a+2584>>2]=(c[b>>2]|0)<2;i=d;return}function Oc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;b=a+2416|0;f=a+2432+(c[b>>2]<<2)|0;d=c[f>>2]|0;e=d+64|0;c[f>>2]=e;se(e,d);c[a+2584>>2]=(c[b>>2]|0)<2;return}function Pc(a,b){a=a|0;b=b|0;var d=0;b=a+2416|0;d=a+2432+(c[b>>2]<<2)|0;c[d>>2]=(c[d>>2]|0)-64;c[a+2584>>2]=(c[b>>2]|0)<2;return}function Qc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0.0,h=0.0,j=0.0,k=0.0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0,q=0.0;d=i;i=i+64|0;e=d|0;f=+g[b+4>>2]*3.141592653589793/180.0;h=+g[b+8>>2];j=+g[b+12>>2];k=+g[b+16>>2];b=(j!=0.0)<<1|(h!=0.0)<<2|k!=0.0;do{if((b|0)==0){oe(e)}else if((b|0)==4){if(h<0.0){f=-0.0-f}xe(e,f,0)}else if((b|0)==2){if(j<0.0){f=-0.0-f}xe(e,f,1)}else if((b|0)==1){if(k<0.0){f=-0.0-f}xe(e,f,2)}else{l=h*h+j*j+k*k;if(l==0.0){i=d;return}else{l=1.0/+O(l);n=h*l;o=j*l;l=k*l;j=f;k=+Q(j);j=+R(j);g[e+28>>2]=0.0;g[e+12>>2]=0.0;kf(e+44|0,0,16)|0;g[e+60>>2]=1.0;h=n*n;g[e>>2]=h+k*(1.0-h);h=1.0-k;q=n*o*h;p=l*j;g[e+16>>2]=q-p;m=l*n*h;f=o*j;g[e+32>>2]=m+f;g[e+4>>2]=q+p;p=o*o;g[e+20>>2]=p+k*(1.0-p);h=o*l*h;j=n*j;g[e+36>>2]=h-j;g[e+8>>2]=m-f;g[e+24>>2]=h+j;l=l*l;g[e+40>>2]=l+k*(1.0-l);break}}}while(0);b=a+2416|0;re(c[a+2432+(c[b>>2]<<2)>>2]|0,e);c[a+2584>>2]=(c[b>>2]|0)<2;i=d;return}function Rc(a,b){a=a|0;b=b|0;var d=0,e=0.0,f=0,h=0.0,i=0.0;i=+g[b+4>>2];h=+g[b+8>>2];e=+g[b+12>>2];b=c[a+2416>>2]|0;d=c[a+2432+(b<<2)>>2]|0;f=d|0;g[f>>2]=i*+g[f>>2];f=d+4|0;g[f>>2]=h*+g[f>>2];f=d+8|0;g[f>>2]=e*+g[f>>2];f=d+16|0;g[f>>2]=i*+g[f>>2];f=d+20|0;g[f>>2]=h*+g[f>>2];f=d+24|0;g[f>>2]=e*+g[f>>2];f=d+32|0;g[f>>2]=i*+g[f>>2];f=d+36|0;g[f>>2]=h*+g[f>>2];f=d+40|0;g[f>>2]=e*+g[f>>2];f=d+48|0;g[f>>2]=i*+g[f>>2];f=d+52|0;g[f>>2]=h*+g[f>>2];d=d+56|0;g[d>>2]=e*+g[d>>2];c[a+2584>>2]=(b|0)<2;return}function Sc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0.0,h=0.0,i=0.0;i=+g[b+4>>2];h=+g[b+8>>2];f=+g[b+12>>2];b=c[a+2416>>2]|0;e=c[a+2432+(b<<2)>>2]|0;d=e+12|0;g[d>>2]=+g[d>>2]+(i*+g[e>>2]+h*+g[e+4>>2]+f*+g[e+8>>2]);d=e+28|0;g[d>>2]=+g[d>>2]+(i*+g[e+16>>2]+h*+g[e+20>>2]+f*+g[e+24>>2]);d=e+44|0;g[d>>2]=+g[d>>2]+(i*+g[e+32>>2]+h*+g[e+36>>2]+f*+g[e+40>>2]);d=e+60|0;g[d>>2]=+g[d>>2]+(i*+g[e+48>>2]+h*+g[e+52>>2]+f*+g[e+56>>2]);c[a+2584>>2]=(b|0)<2;return}function Tc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0.0,h=0.0,j=0.0,k=0.0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0,q=0.0,r=0.0;d=i;i=i+64|0;e=d|0;r=+g[b+4>>2];q=+g[b+8>>2];n=+g[b+12>>2];m=+g[b+16>>2];k=+g[b+20>>2];h=+g[b+24>>2];j=k;o=j*2.0;p=q-r;l=m-n;f=h-k;g[e>>2]=o/p;g[e+4>>2]=0.0;g[e+8>>2]=(r+q)/p;g[e+12>>2]=0.0;g[e+16>>2]=0.0;g[e+20>>2]=o/l;g[e+24>>2]=(n+m)/l;g[e+28>>2]=0.0;g[e+32>>2]=0.0;g[e+36>>2]=0.0;g[e+40>>2]=(-0.0-(k+h))/f;g[e+44>>2]=(-0.0-j*h*2.0)/f;g[e+48>>2]=0.0;g[e+52>>2]=0.0;g[e+56>>2]=-1.0;g[e+60>>2]=0.0;b=a+2416|0;re(c[a+2432+(c[b>>2]<<2)>>2]|0,e);c[a+2584>>2]=(c[b>>2]|0)<2;i=d;return}function Uc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0.0,h=0.0,j=0.0,k=0.0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0;d=i;i=i+64|0;e=d|0;p=+g[b+4>>2];o=+g[b+8>>2];m=+g[b+12>>2];l=+g[b+16>>2];j=+g[b+20>>2];h=+g[b+24>>2];n=o-p;k=l-m;f=h-j;g[e>>2]=2.0/n;g[e+4>>2]=0.0;g[e+8>>2]=0.0;g[e+12>>2]=(-0.0-(p+o))/n;g[e+16>>2]=0.0;g[e+20>>2]=2.0/k;g[e+24>>2]=0.0;g[e+28>>2]=(-0.0-(m+l))/k;g[e+32>>2]=0.0;g[e+36>>2]=0.0;g[e+40>>2]=-2.0/f;g[e+44>>2]=(-0.0-(j+h))/f;g[e+48>>2]=0.0;g[e+52>>2]=0.0;g[e+56>>2]=0.0;g[e+60>>2]=1.0;b=a+2416|0;re(c[a+2432+(c[b>>2]<<2)>>2]|0,e);c[a+2584>>2]=(c[b>>2]|0)<2;i=d;return}function Vc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;e=ef(284)|0;d=e;a=(c[a+2388>>2]|0)+(((b|0)%256|0)<<2)|0;f=c[a>>2]|0;c[e+276>>2]=f;c[e+280>>2]=0;if((f|0)!=0){c[f+280>>2]=d}c[a>>2]=d;c[e+264>>2]=b;c[e+268>>2]=9728;c[e+272>>2]=9728;return d|0}function Wc(a){a=a|0;var b=0,d=0;c[a+2380>>2]=0;b=c[a+2388>>2]|0;while(1){d=c[b>>2]|0;if((d|0)==0){d=0;b=4;break}if((c[d+264>>2]|0)==0){b=4;break}else{b=d+276|0}}if((b|0)==4){c[a+2376>>2]=d;return}}function Xc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=c[(rc()|0)+2388>>2]|0;f=0;e=0;do{g=c[d+(e<<2)>>2]|0;if((g|0)!=0){do{h=c[g+264>>2]|0;f=(h|0)>(f|0)?h:f;g=c[g+276>>2]|0;}while((g|0)!=0)}e=e+1|0;}while((e|0)<256);if((a|0)<=0){return}d=f+1|0;e=0;do{c[b+(e<<2)>>2]=d+e;e=e+1|0;}while((e|0)<(a|0));return}function Yc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;f=rc()|0;if((a|0)<=0){return}d=f+2388|0;g=f+2376|0;f=0;do{j=b+(f<<2)|0;h=c[j>>2]|0;i=c[d>>2]|0;k=i+(((h|0)%256|0)<<2)|0;while(1){k=c[k>>2]|0;if((k|0)==0){break}if((c[k+264>>2]|0)==(h|0)){e=6;break}else{k=k+276|0}}if((e|0)==6){e=0;if((k|0)==(c[g>>2]|0)){ec(3553,0);j=c[j>>2]|0;i=c[d>>2]|0}else{j=h}h=i+(((j|0)%256|0)<<2)|0;while(1){h=c[h>>2]|0;if((h|0)==0){h=0;break}if((c[h+264>>2]|0)==(j|0)){break}else{h=h+276|0}}j=h+280|0;k=c[j>>2]|0;if((k|0)==0){c[i+(((c[h+264>>2]|0)%256|0)<<2)>>2]=c[h+276>>2]}else{c[k+276>>2]=c[h+276>>2]}i=c[h+276>>2]|0;if((i|0)!=0){c[i+280>>2]=c[j>>2]}i=c[h>>2]|0;if((i|0)!=0){cf(i)}i=c[h+24>>2]|0;if((i|0)!=0){cf(i)}i=c[h+48>>2]|0;if((i|0)!=0){cf(i)}i=c[h+72>>2]|0;if((i|0)!=0){cf(i)}i=c[h+96>>2]|0;if((i|0)!=0){cf(i)}i=c[h+120>>2]|0;if((i|0)!=0){cf(i)}i=c[h+144>>2]|0;if((i|0)!=0){cf(i)}i=c[h+168>>2]|0;if((i|0)!=0){cf(i)}i=c[h+192>>2]|0;if((i|0)!=0){cf(i)}i=c[h+216>>2]|0;if((i|0)!=0){cf(i)}i=c[h+240>>2]|0;if((i|0)!=0){cf(i)}cf(h)}f=f+1|0;}while((f|0)<(a|0));return}function Zc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;b=c[b+8>>2]|0;d=a+2388|0;e=(b|0)%256|0;g=(c[d>>2]|0)+(e<<2)|0;while(1){g=c[g>>2]|0;if((g|0)==0){break}if((c[g+264>>2]|0)==(b|0)){f=7;break}else{g=g+276|0}}if((f|0)==7){f=a+2376|0;c[f>>2]=g;return}g=ef(284)|0;f=g;d=(c[d>>2]|0)+(e<<2)|0;e=c[d>>2]|0;c[g+276>>2]=e;c[g+280>>2]=0;if((e|0)!=0){c[e+280>>2]=f}c[d>>2]=f;c[g+264>>2]=b;c[g+268>>2]=9728;c[g+272>>2]=9728;g=a+2376|0;c[g>>2]=f;return}function _c(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;f=c[b+8>>2]|0;g=c[b+16>>2]|0;h=c[b+20>>2]|0;j=c[b+36>>2]|0;if(!((c[b+4>>2]|0)==3553&(f|0)==0&(c[b+12>>2]|0)==4&(c[b+24>>2]|0)==0&(c[b+28>>2]|0)==6408&(c[b+32>>2]|0)==5121)){Yd(680,(m=i,i=i+1|0,i=i+7&-8,c[m>>2]=0,m)|0);i=m}k=De(g)|0;b=De(h)|0;if((g|0)==(k|0)&(h|0)==(b|0)){b=0}else{m=df(_(k<<2,b)|0)|0;Ce(m,k,b,j,g,h);g=k;h=b;b=1;j=m}k=c[a+2376>>2]|0;a=k+(f*24|0)|0;m=c[a>>2]|0;l=k+(f*24|0)+4|0;do{if((m|0)==0){m=0}else{if((c[l>>2]|0)==(g|0)){if((c[k+(f*24|0)+8>>2]|0)==(h|0)){break}}cf(m);c[a>>2]=0;m=0}}while(0);c[l>>2]=g;c[k+(f*24|0)+8>>2]=h;c[k+(f*24|0)+12>>2]=~~(+Y(+(g|0))*1.4426950408889634+.001);c[k+(f*24|0)+16>>2]=g-1;c[k+(f*24|0)+20>>2]=h-1;if((m|0)==0){m=df(_(h<<2,g)|0)|0;c[a>>2]=m;if((m|0)!=0){d=11}}else{d=11}if((d|0)==11){Be(m,j,g,h)}if((b|0)==0){i=e;return}cf(j);i=e;return}function $c(a,b){a=a|0;b=b|0;var d=0,e=0;a=i;d=(c[b+8>>2]|0)==8704;e=(c[b+12>>2]|0)==8449;if((c[b+4>>2]|0)==8960&d&e){i=a;return}if(!(d&e)){while(1){Yd(2816,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e}}Yd(2816,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e;i=a;return}function ad(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;e=i;f=c[b+8>>2]|0;d=c[b+12>>2]|0;if((c[b+4>>2]|0)!=3553){g=2}while(1){if((g|0)==2){Yd(2816,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b}b=c[a+2376>>2]|0;if((b|0)==0){g=8;break}if((f|0)==10240){g=6;break}else if((f|0)==10241){g=7;break}else if(!((f|0)==10242|(f|0)==10243)){g=8;break}if((d|0)==10497){g=8;break}else{g=2}}if((g|0)==6){c[b+268>>2]=d;i=e;return}else if((g|0)==7){c[b+272>>2]=d;i=e;return}else if((g|0)==8){i=e;return}}function bd(a,b){a=a|0;b=b|0;a=i;do{if((c[b+4>>2]|0)==3317){if((c[b+8>>2]|0)!=1){break}i=a;return}}while(0);Yd(2296,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b;i=a;return}function cd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;i=i+16|0;h=d|0;g=d+8|0;e=c[b+4>>2]|0;f=c[b+8>>2]|0;j=c[b+12>>2]|0;k=c[b+16>>2]|0;b=a+2596|0;do{if((c[b>>2]|0)==(e|0)){if((c[a+2600>>2]|0)!=(f|0)){break}if((c[a+2604>>2]|0)!=(j|0)){break}if((c[a+2608>>2]|0)!=(k|0)){break}i=d;return}}while(0);c[h>>2]=j+e;c[g>>2]=k+f;j=c[a+3152>>2]|0;do{if((j|0)!=0){if((Ua[j&1](a,h,g)|0)==0){break}Yd(2736,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0);i=k}}while(0);h=(c[h>>2]|0)-e|0;g=(c[g>>2]|0)-f|0;if((h|0)<1|(g|0)<1){Yd(2784,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0);i=k}Ke(2208,(k=i,i=i+32|0,c[k>>2]=e,c[k+8>>2]=f,c[k+16>>2]=h,c[k+24>>2]=g,k)|0);i=k;c[b>>2]=e;c[a+2600>>2]=f;c[a+2604>>2]=h;c[a+2608>>2]=g;c[a+2636>>2]=1;i=d;return}function dd(a,b){a=a|0;b=b|0;var d=0;d=c[b+4>>2]|0;b=c[b+8>>2]|0;if((d|0)==2884){c[a+2660>>2]=b;return}else if((d|0)==2896){c[a+2204>>2]=b;return}else if((d|0)==2903){c[a+2364>>2]=b;return}else if((d|0)==3553){c[a+2380>>2]=b;return}else if((d|0)==2977){c[a+2664>>2]=b;return}else if((d|0)==2929){c[a+3160>>2]=b;return}else if((d|0)==10754){a=a+3128|0;d=c[a>>2]|0;if((b|0)==0){c[a>>2]=d&-3;return}else{c[a>>2]=d|2;return}}else if((d|0)==32823){a=a+3128|0;d=c[a>>2]|0;if((b|0)==0){c[a>>2]=d&-2;return}else{c[a>>2]=d|1;return}}else if((d|0)==10753){a=a+3128|0;d=c[a>>2]|0;if((b|0)==0){c[a>>2]=d&-5;return}else{c[a>>2]=d|4;return}}else{d=d-16384|0;if(!(d>>>0<16>>>0)){return}rd(a,d,b);return}}function ed(a,b){a=a|0;b=b|0;c[a+2652>>2]=c[b+4>>2];return}function fd(a,b){a=a|0;b=b|0;c[a+2656>>2]=c[b+4>>2];return}function gd(a,b){a=a|0;b=b|0;c[a+2648>>2]=c[b+4>>2];return}function hd(a,b){a=a|0;b=b|0;var d=0;d=c[b+4>>2]|0;b=c[b+8>>2]|0;if((d|0)==1029){c[a+2640>>2]=b;return}else if((d|0)==1028){c[a+2644>>2]=b;return}else if((d|0)==1032){c[a+2644>>2]=b;c[a+2640>>2]=b;return}else{return}}function id(a,b){a=a|0;b=b|0;return}function jd(a,b){a=a|0;b=b|0;g[a+3120>>2]=+g[b+4>>2];g[a+3124>>2]=+g[b+8>>2];return}function kd(a,b){a=a|0;b=b|0;g[a+2968>>2]=+g[b+4>>2];g[a+2972>>2]=+g[b+8>>2];g[a+2976>>2]=+g[b+12>>2];g[a+2980>>2]=+g[b+16>>2];return}function ld(a,b){a=a|0;b=b|0;g[a+2964>>2]=+g[b+4>>2];return}function md(a,b){a=a|0;b=b|0;b=c[b+4>>2]|0;be(c[a>>2]|0,b&256,0,b&16384,~~(+g[a+2968>>2]*65535.0),~~(+g[a+2972>>2]*65535.0),~~(+g[a+2976>>2]*65535.0),~~(+g[a+2980>>2]*65535.0));return}function nd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0;f=b+4|0;h=c[f>>2]|0;e=c[b+8>>2]|0;d=b+12|0;if((h|0)==1032){c[f>>2]=1028;nd(a,b);h=1029}a=(h|0)==1028?a+2212|0:a+2288|0;switch(e|0){case 5634:{g[a+32>>2]=+g[d>>2];e=b+16|0;g[a+36>>2]=+g[e>>2];f=b+20|0;g[a+40>>2]=+g[f>>2];h=b+24|0;g[a+44>>2]=+g[h>>2];g[a+16>>2]=+g[d>>2];g[a+20>>2]=+g[e>>2];g[a+24>>2]=+g[f>>2];g[a+28>>2]=+g[h>>2];return};case 4610:{g[a+48>>2]=+g[d>>2];g[a+52>>2]=+g[b+16>>2];g[a+56>>2]=+g[b+20>>2];g[a+60>>2]=+g[b+24>>2];return};case 4609:{g[a+32>>2]=+g[d>>2];g[a+36>>2]=+g[b+16>>2];g[a+40>>2]=+g[b+20>>2];g[a+44>>2]=+g[b+24>>2];return};case 4608:{g[a+16>>2]=+g[d>>2];g[a+20>>2]=+g[b+16>>2];g[a+24>>2]=+g[b+20>>2];g[a+28>>2]=+g[b+24>>2];return};case 5632:{g[a>>2]=+g[d>>2];g[a+4>>2]=+g[b+16>>2];g[a+8>>2]=+g[b+20>>2];g[a+12>>2]=+g[b+24>>2];return};case 5633:{g[a+64>>2]=+g[d>>2];c[a+68>>2]=~~(+g[d>>2]*.0078125*1024.0);return};default:{return}}}function od(a,b){a=a|0;b=b|0;var d=0;d=c[b+8>>2]|0;c[a+2368>>2]=c[b+4>>2];c[a+2372>>2]=d;return}function pd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0.0,k=0,l=0;d=i;i=i+16|0;e=d|0;f=e;h=i;i=i+16|0;l=c[b+4>>2]|0;k=c[b+8>>2]|0;b=b+12|0;c[f>>2]=c[b>>2];c[f+4>>2]=c[b+4>>2];c[f+8>>2]=c[b+8>>2];c[f+12>>2]=c[b+12>>2];b=l-16384|0;switch(k|0){case 4612:{j=+g[e>>2];g[a+4+(b*136|0)+64>>2]=j;g[a+4+(b*136|0)+100>>2]=j;j=+g[e+4>>2];g[a+4+(b*136|0)+68>>2]=j;g[a+4+(b*136|0)+104>>2]=j;j=+g[e+8>>2];g[a+4+(b*136|0)+72>>2]=j;g[a+4+(b*136|0)+108>>2]=j;ye(a+4+(b*136|0)+100|0)|0;i=d;return};case 4617:{g[a+4+(b*136|0)+92>>2]=+g[e>>2];i=d;return};case 4608:{l=a+4+(b*136|0)|0;c[l>>2]=c[f>>2];c[l+4>>2]=c[f+4>>2];c[l+8>>2]=c[f+8>>2];c[l+12>>2]=c[f+12>>2];i=d;return};case 4609:{l=a+4+(b*136|0)+16|0;c[l>>2]=c[f>>2];c[l+4>>2]=c[f+4>>2];c[l+8>>2]=c[f+8>>2];c[l+12>>2]=c[f+12>>2];i=d;return};case 4613:{g[a+4+(b*136|0)+76>>2]=+g[e>>2];i=d;return};case 4610:{l=a+4+(b*136|0)+32|0;c[l>>2]=c[f>>2];c[l+4>>2]=c[f+4>>2];c[l+8>>2]=c[f+8>>2];c[l+12>>2]=c[f+12>>2];i=d;return};case 4616:{g[a+4+(b*136|0)+88>>2]=+g[e>>2];i=d;return};case 4611:{te(h,c[a+2432>>2]|0,e);l=a+4+(b*136|0)+48|0;k=h;c[l>>2]=c[k>>2];c[l+4>>2]=c[k+4>>2];c[l+8>>2]=c[k+8>>2];c[l+12>>2]=c[k+12>>2];if(!(+g[a+4+(b*136|0)+60>>2]==0.0)){i=d;return}l=a+4+(b*136|0)+112|0;g[l>>2]=+g[h>>2];g[a+4+(b*136|0)+116>>2]=+g[h+4>>2];g[a+4+(b*136|0)+120>>2]=+g[h+8>>2];ye(l)|0;i=d;return};case 4614:{j=+g[e>>2];g[a+4+(b*136|0)+80>>2]=j;if(!(j!=180.0)){i=d;return}g[a+4+(b*136|0)+96>>2]=+Q(j*3.141592653589793/180.0);i=d;return};case 4615:{g[a+4+(b*136|0)+84>>2]=+g[e>>2];i=d;return};default:{i=d;return}}}function qd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;f=c[b+4>>2]|0;e=b+8|0;if((f|0)==2899){g[a+2184>>2]=+g[e>>2];g[a+2188>>2]=+g[b+12>>2];g[a+2192>>2]=+g[b+16>>2];g[a+2196>>2]=+g[b+20>>2];i=d;return}else if((f|0)==2897){c[a+2200>>2]=~~+g[e>>2];i=d;return}else if((f|0)==2898){c[a+2208>>2]=~~+g[e>>2];i=d;return}else{Je(2552,(b=i,i=i+8|0,c[b>>2]=f,b)|0);i=b;i=d;return}}function rd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;g=a+4+(b*136|0)|0;f=a+4+(b*136|0)+124|0;e=(c[f>>2]|0)==0;if((d|0)!=0){if(!e){return}c[f>>2]=1;f=a+2180|0;c[a+4+(b*136|0)+128>>2]=c[f>>2];c[f>>2]=g;c[a+4+(b*136|0)+132>>2]=0;return}if(e){return}c[f>>2]=0;e=a+4+(b*136|0)+132|0;d=c[e>>2]|0;f=a+4+(b*136|0)+128|0;b=c[f>>2]|0;if((d|0)==0){c[a+2180>>2]=b}else{c[d+128>>2]=b}a=c[f>>2]|0;if((a|0)==0){return}c[a+132>>2]=c[e>>2];return}function sd(a,b){a=a|0;b=b|0;var d=0,e=0.0,f=0.0,h=0.0,j=0.0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0.0,F=0.0,G=0,H=0.0,I=0,J=0.0,K=0.0,L=0.0,M=0.0,N=0.0,Q=0.0,R=0.0,S=0.0,T=0.0,U=0;d=i;i=i+16|0;n=d|0;h=+g[b+4>>2];f=+g[b+8>>2];j=+g[b+12>>2];k=a+2228|0;L=+g[k>>2];H=+g[a+2212>>2]+L*+g[a+2184>>2];l=a+2232|0;K=+g[l>>2];F=+g[a+2216>>2]+K*+g[a+2188>>2];m=a+2236|0;J=+g[m>>2];E=+g[a+2220>>2]+J*+g[a+2192>>2];e=+g[a+2256>>2];if(e<0.0){e=0.0}else{e=e>1.0?1.0:e}G=c[a+2180>>2]|0;a:do{if((G|0)!=0){A=(c[a+2208>>2]|0)!=0;o=a+2244|0;s=a+2248|0;t=a+2252|0;u=a+2200|0;y=a+2280|0;z=a+2276|0;p=a+2260|0;r=a+2264|0;q=a+2268|0;B=b+64|0;C=n|0;D=b+68|0;x=n+4|0;w=b+72|0;v=n+8|0;M=J;while(1){J=+g[G>>2]*L;L=+g[G+4>>2]*K;M=+g[G+8>>2]*M;N=+g[G+48>>2];if(+g[G+60>>2]==0.0){K=1.0;Q=+g[G+52>>2];R=+g[G+56>>2]}else{N=N- +g[B>>2];Q=+g[G+52>>2]- +g[D>>2];R=+g[G+56>>2]- +g[w>>2];K=+O(N*N+Q*Q+R*R);if(K>.001){T=1.0/K;N=N*T;Q=Q*T;R=R*T}K=1.0/(+g[G+84>>2]+K*(+g[G+88>>2]+K*+g[G+92>>2]))}S=j*R+(f*Q+h*N);if(A&S<0.0){S=-0.0-S}b:do{if(S>0.0){J=J+S*+g[G+16>>2]*+g[o>>2];L=L+S*+g[G+20>>2]*+g[s>>2];M=M+S*+g[G+24>>2]*+g[t>>2];do{if(+g[G+80>>2]!=180.0){S=N*+g[G+100>>2]+Q*+g[G+104>>2]+R*+g[G+108>>2];S=A&S>-0.0?S:-0.0-S;if(S<+g[G+96>>2]){break b}T=+g[G+76>>2];if(!(T>0.0)){break}K=K*+P(+S,+T)}}while(0);if((c[u>>2]|0)==0){R=R+1.0}else{g[C>>2]=+g[B>>2];g[x>>2]=+g[D>>2];g[v>>2]=+g[w>>2];ye(n)|0;T=+g[C>>2];N=N-T;Q=Q-T;R=R-T}S=j*R+(f*Q+h*N);if(A&S<0.0){S=-0.0-S}if(!(S>0.0)){I=26;break}N=+O(R*R+(Q*Q+N*N));if(N>.001){S=S/N}U=bf(a,c[y>>2]|0,+g[z>>2])|0;I=~~(S*1024.0);T=+g[U+8+(((I|0)>1024?1024:I)<<2)>>2];L=L+T*+g[G+36>>2]*+g[r>>2];M=M+T*+g[G+40>>2]*+g[q>>2];J=J+T*+g[G+32>>2]*+g[p>>2];I=26}else{I=26}}while(0);if((I|0)==26){I=0;H=H+K*J;F=F+K*L;E=E+K*M}G=c[G+128>>2]|0;if((G|0)==0){break a}L=+g[k>>2];K=+g[l>>2];M=+g[m>>2]}}}while(0);if(H<0.0){f=0.0}else{f=H>1.0?1.0:H}g[b+48>>2]=f;if(F<0.0){f=0.0}else{f=F>1.0?1.0:F}g[b+52>>2]=f;if(E<0.0){T=0.0;U=b+56|0;g[U>>2]=T;U=b+60|0;g[U>>2]=e;i=d;return}T=E>1.0?1.0:E;U=b+56|0;g[U>>2]=T;U=b+60|0;g[U>>2]=e;i=d;return}function td(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;e=i;d=(rc()|0)+2392|0;h=0;g=0;do{if((c[(c[d>>2]|0)+(g<<2)>>2]|0)==0){j=ef(4)|0;c[(c[d>>2]|0)+(g<<2)>>2]=j;j=h+1|0;c[b+(h<<2)>>2]=g;if((j|0)==(a|0)){f=7;break}else{h=j}}g=g+1|0;}while((g|0)<512);if((f|0)==7){i=e;return}if((h|0)>=(a|0)){i=e;return}Yd(2480,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0);i=j;i=e;return}function ud(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;e=rc()|0;if((a|0)<=0){return}d=e+2392|0;e=e+3132|0;f=0;do{g=c[b+(f<<2)>>2]|0;h=(c[d>>2]|0)+(g<<2)|0;i=c[h>>2]|0;if((i|0)!=0){if((i|0)==(c[e>>2]|0)){c[e>>2]=0;i=c[h>>2]|0}cf(i);c[(c[d>>2]|0)+(g<<2)>>2]=0}f=f+1|0;}while((f|0)<(a|0));return}function vd(a){a=a|0;return(c[(c[(rc()|0)+2392>>2]|0)+(a<<2)>>2]|0)!=0|0}function wd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;e=i;d=rc()|0;if((a|0)!=35092){Je(2704,(f=i,i=i+8|0,c[f>>2]=a,f)|0);i=f}a=d+3132|0;if((c[a>>2]|0)!=0){Je(2160,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0);i=f}f=c[(c[d+2392>>2]|0)+(b<<2)>>2]|0;if((f|0)==0){Je(1744,(f=i,i=i+8|0,c[f>>2]=b,f)|0);i=f;f=d|0;f=c[f>>2]|0;f=f+56|0;c[f>>2]=0;i=e;return}else{c[f>>2]=0;c[a>>2]=f;f=d|0;f=c[f>>2]|0;f=f+56|0;c[f>>2]=0;i=e;return}}function xd(a){a=a|0;var b=0,d=0,e=0;d=i;b=rc()|0;if((a|0)!=35092){Je(1424,(e=i,i=i+8|0,c[e>>2]=a,e)|0);i=e}a=b+3132|0;e=c[a>>2]|0;if((e|0)==0){Je(1128,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e;e=c[a>>2]|0}c[e>>2]=c[(c[b>>2]|0)+56>>2];c[a>>2]=0;i=d;return}function yd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;f=rc()|0;if((b|0)!=34918){Je(848,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b}f=c[(c[f+2392>>2]|0)+(a<<2)>>2]|0;if((f|0)==0){Je(776,(b=i,i=i+8|0,c[b>>2]=a,b)|0);i=b;i=e;return}else{c[d>>2]=c[f>>2];i=e;return}}function zd(a,b){a=a|0;b=b|0;var d=0.0;d=1.0/+g[b+92>>2];c[b+100>>2]=~~(d*+g[b+80>>2]*+g[a+2612>>2]+ +g[a+2624>>2]);c[b+104>>2]=~~(d*+g[b+84>>2]*+g[a+2616>>2]+ +g[a+2628>>2]);c[b+108>>2]=~~(d*+g[b+88>>2]*+g[a+2620>>2]+ +g[a+2632>>2]);g[b+132>>2]=d;if((c[a+2204>>2]|0)==0){c[b+120>>2]=c[a+3e3>>2];c[b+124>>2]=c[a+3004>>2];c[b+128>>2]=c[a+3008>>2]}else{c[b+120>>2]=~~(+g[b+48>>2]*63488.0+1024.0);c[b+124>>2]=~~(+g[b+52>>2]*64512.0+512.0);c[b+128>>2]=~~(+g[b+56>>2]*63488.0+1024.0)}if((c[a+2380>>2]|0)==0){return}a=c[a+2376>>2]|0;c[b+112>>2]=~~(+g[b+32>>2]*+((c[a+16>>2]|0)>>>0>>>0));c[b+116>>2]=~~(+g[b+36>>2]*+((c[a+20>>2]|0)>>>0>>>0));return}function Ad(a,b){a=a|0;b=b|0;var d=0;if((c[b+96>>2]|0)!=0){return}if((c[a+2676>>2]|0)==7170){b=c[b+108>>2]|0;Vd(a,b,b);return}d=c[a>>2]|0;b=b+100|0;if((c[a+3132>>2]|0)==0){ce(d,b);return}else{de(d,b);return}}function Bd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,h=0,j=0.0,k=0.0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0,q=0.0,r=0.0,s=0.0,t=0.0,u=0.0,v=0,w=0,x=0.0,y=0.0,z=0.0,A=0.0;e=i;i=i+288|0;h=e|0;f=e+144|0;w=c[b+96>>2]|0;v=c[d+96>>2]|0;if((v|w|0)==0){if((c[a+2676>>2]|0)==7170){f=c[b+108>>2]|0;d=c[d+108>>2]|0;Vd(a,~(d>>>0<f>>>0?d:f),~(d>>>0>f>>>0?d:f));i=e;return}f=(c[a+3132>>2]|0)!=0;h=c[a>>2]|0;b=b+100|0;d=d+100|0;if((c[a+3160>>2]|0)==0){if(f){fe(h,b,d);i=e;return}else{he(h,b,d);i=e;return}}else{if(f){ee(h,b,d);i=e;return}else{ge(h,b,d);i=e;return}}}if((v&w|0)!=0){i=e;return}q=+g[b+80>>2];j=+g[d+80>>2]-q;m=+g[b+84>>2];l=+g[d+84>>2]-m;p=+g[b+88>>2];o=+g[d+88>>2]-p;n=+g[b+92>>2];k=+g[d+92>>2]-n;r=j+k;s=-0.0-q-n;do{if(r>0.0){s=s/r;if(s>1.0){i=e;return}if(!(s>0.0)){r=1.0;s=0.0;break}r=1.0}else{if(!(r<0.0)){if(!(s>0.0)){r=1.0;s=0.0;break}i=e;return}r=s/r;if(r<0.0){i=e;return}if(!(r<1.0)){r=1.0;s=0.0;break}s=0.0}}while(0);t=k-j;u=q-n;do{if(t>0.0){t=u/t;if(t>r){i=e;return}if(!(t>s)){break}s=t}else{if(!(t<0.0)){if(!(u>0.0)){break}i=e;return}t=u/t;if(t<s){i=e;return}if(!(t<r)){break}r=t}}while(0);u=l+k;t=-0.0-m-n;do{if(u>0.0){t=t/u;if(t>r){i=e;return}if(!(t>s)){break}s=t}else{if(!(u<0.0)){if(!(t>0.0)){break}i=e;return}t=t/u;if(t<s){i=e;return}if(!(t<r)){break}r=t}}while(0);t=k-l;u=m-n;do{if(t>0.0){t=u/t;if(t>r){i=e;return}if(!(t>s)){break}s=t}else{if(!(t<0.0)){if(!(u>0.0)){break}i=e;return}t=u/t;if(t<s){i=e;return}if(!(t<r)){break}r=t}}while(0);u=o+k;t=-0.0-p-n;do{if(u>0.0){t=t/u;if(t>r){i=e;return}if(!(t>s)){break}s=t}else{if(!(u<0.0)){if(!(t>0.0)){break}i=e;return}t=t/u;if(t<s){i=e;return}if(!(t<r)){break}r=t}}while(0);u=k-o;t=p-n;do{if(u>0.0){t=t/u;if(t>r){i=e;return}if(!(t>s)){break}s=t}else{if(!(u<0.0)){if(!(t>0.0)){break}i=e;return}t=t/u;if(t<s){i=e;return}if(!(t<r)){break}r=t}}while(0);g[h+80>>2]=q+s*j;g[h+84>>2]=m+s*l;g[h+88>>2]=p+s*o;g[h+92>>2]=n+s*k;A=+g[b+48>>2];z=+g[d+48>>2]-A;g[h+48>>2]=A+s*z;y=+g[b+52>>2];x=+g[d+52>>2]-y;g[h+52>>2]=y+s*x;t=+g[b+56>>2];u=+g[d+56>>2]-t;g[h+56>>2]=t+s*u;g[f+80>>2]=q+r*j;g[f+84>>2]=m+r*l;g[f+88>>2]=p+r*o;g[f+92>>2]=n+r*k;g[f+48>>2]=A+r*z;g[f+52>>2]=y+r*x;g[f+56>>2]=t+r*u;zd(a,h);zd(a,f);b=(c[a+3132>>2]|0)!=0;d=c[a>>2]|0;h=h+100|0;f=f+100|0;if((c[a+3160>>2]|0)==0){if(b){fe(d,h,f);i=e;return}else{he(d,h,f);i=e;return}}else{if(b){ee(d,h,f);i=e;return}else{ge(d,h,f);i=e;return}}}function Cd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0.0,f=0.0,h=0.0,i=0.0,j=0.0,k=0.0;i=+g[b>>2];f=+g[b+4>>2];d=b+8|0;e=+g[c+8>>2]- +g[d>>2];b=b+12|0;k=+g[b>>2];h=+g[c+12>>2]-k;j=+g[c>>2]-i+h;if(j==0.0){i=0.0}else{i=(-0.0-i-k)/j}g[a+4>>2]=f+(+g[c+4>>2]-f)*i;g[a+8>>2]=e*i+ +g[d>>2];k=h*i+ +g[b>>2];g[a+12>>2]=k;g[a>>2]=-0.0-k;return+i}function Dd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0.0,f=0.0,h=0.0,i=0.0,j=0.0,k=0.0;i=+g[b>>2];f=+g[b+4>>2];d=b+8|0;e=+g[c+8>>2]- +g[d>>2];b=b+12|0;k=+g[b>>2];h=+g[c+12>>2]-k;j=h-(+g[c>>2]-i);if(j==0.0){i=0.0}else{i=(i-k)/j}g[a+4>>2]=f+(+g[c+4>>2]-f)*i;g[a+8>>2]=e*i+ +g[d>>2];k=h*i+ +g[b>>2];g[a+12>>2]=k;g[a>>2]=k;return+i}function Ed(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0.0,f=0.0,h=0.0,i=0.0,j=0.0,k=0.0;f=+g[b>>2];i=+g[b+4>>2];d=b+8|0;e=+g[c+8>>2]- +g[d>>2];b=b+12|0;k=+g[b>>2];h=+g[c+12>>2]-k;j=+g[c+4>>2]-i+h;if(j==0.0){i=0.0}else{i=(-0.0-i-k)/j}g[a>>2]=f+(+g[c>>2]-f)*i;g[a+8>>2]=e*i+ +g[d>>2];k=h*i+ +g[b>>2];g[a+12>>2]=k;g[a+4>>2]=-0.0-k;return+i}function Fd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0.0,f=0.0,h=0.0,i=0.0,j=0.0,k=0.0;f=+g[b>>2];i=+g[b+4>>2];d=b+8|0;e=+g[c+8>>2]- +g[d>>2];b=b+12|0;k=+g[b>>2];h=+g[c+12>>2]-k;j=h-(+g[c+4>>2]-i);if(j==0.0){i=0.0}else{i=(i-k)/j}g[a>>2]=f+(+g[c>>2]-f)*i;g[a+8>>2]=e*i+ +g[d>>2];k=h*i+ +g[b>>2];g[a+12>>2]=k;g[a+4>>2]=k;return+i}function Gd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0.0,f=0.0,h=0.0,i=0.0,j=0.0,k=0.0;f=+g[b>>2];d=b+4|0;e=+g[c+4>>2]- +g[d>>2];i=+g[b+8>>2];b=b+12|0;k=+g[b>>2];h=+g[c+12>>2]-k;j=+g[c+8>>2]-i+h;if(j==0.0){i=0.0}else{i=(-0.0-i-k)/j}g[a>>2]=f+(+g[c>>2]-f)*i;g[a+4>>2]=e*i+ +g[d>>2];k=h*i+ +g[b>>2];g[a+12>>2]=k;g[a+8>>2]=-0.0-k;return+i}function Hd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0.0,f=0.0,h=0.0,i=0.0,j=0.0,k=0.0;f=+g[b>>2];d=b+4|0;e=+g[c+4>>2]- +g[d>>2];i=+g[b+8>>2];b=b+12|0;k=+g[b>>2];h=+g[c+12>>2]-k;j=h-(+g[c+8>>2]-i);if(j==0.0){i=0.0}else{i=(i-k)/j}g[a>>2]=f+(+g[c>>2]-f)*i;g[a+4>>2]=e*i+ +g[d>>2];k=h*i+ +g[b>>2];g[a+12>>2]=k;g[a+8>>2]=k;return+i}function Id(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0.0;h=c[b+96>>2]|0;f=c[d+96>>2]|0;g=c[e+96>>2]|0;if((f|h|g|0)!=0){if((f&h&g|0)!=0){return}Jd(a,b,d,e,0);return}g=c[b+100>>2]|0;h=c[b+104>>2]|0;i=+((c[d+100>>2]|0)-g|0)*+((c[e+104>>2]|0)-h|0)- +((c[e+100>>2]|0)-g|0)*+((c[d+104>>2]|0)-h|0);if(i==0.0){return}g=i<0.0|0;f=c[a+2648>>2]|0;if((c[a+2660>>2]|0)==0){if((g|0)==(f|0)){Xa[c[a+2672>>2]&15](a,b,d,e);return}else{Xa[c[a+2668>>2]&15](a,b,d,e);return}}h=c[a+2656>>2]|0;if((h|0)==1029){if((g|0)==(f|0)){return}Xa[c[a+2668>>2]&15](a,b,d,e);return}else if((h|0)==1028){if((g|0)!=(f|0)){return}Xa[c[a+2672>>2]&15](a,b,d,e);return}else{return}}function Jd(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;g=i;i=i+288|0;h=g|0;j=g+144|0;m=c[b+96>>2]|0;l=c[d+96>>2]|0;k=c[e+96>>2]|0;o=l|m|k;if((o|0)==0){Id(a,b,d,e);i=g;return}if((l&m&k|0)!=0){i=g;return}while(1){if((f|0)>=6){n=6;break}p=1<<f;if((p&o|0)==0){f=f+1|0}else{o=p;break}}do{if((n|0)==6){if((f|0)==6){i=g;return}else{o=1<<f;break}}}while(0);n=(o&m|0)==0;if((o&(l^m^k)|0)==0){if(n){k=b;l=d}else{m=(o&l|0)==0;k=m?d:e;l=m?e:b;e=m?b:d}o=656+(f<<2)|0;p=k+80|0;Od(a,h,k,l,+Ra[c[o>>2]&15](h+80|0,p,l+80|0));Od(a,j,k,e,+Ra[c[o>>2]&15](j+80|0,p,e+80|0));c[h>>2]=1;c[j>>2]=c[e>>2];Jd(a,k,h,j,f+1|0);i=g;return}else{if(n){m=(o&l|0)==0;l=m?e:d;k=m?b:e;e=m?d:b}else{l=b;k=d}o=656+(f<<2)|0;m=l+80|0;Od(a,h,l,k,+Ra[c[o>>2]&15](h+80|0,m,k+80|0));Od(a,j,l,e,+Ra[c[o>>2]&15](j+80|0,m,e+80|0));m=h|0;c[m>>2]=c[l>>2];o=e|0;n=c[o>>2]|0;c[o>>2]=0;p=f+1|0;Jd(a,h,k,e,p);c[j>>2]=1;c[m>>2]=0;c[o>>2]=n;Jd(a,j,h,e,p);i=g;return}}function Kd(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;b=c[b+108>>2]|0;d=c[d+108>>2]|0;e=c[e+108>>2]|0;f=d>>>0<b>>>0?d:b;b=d>>>0>b>>>0?d:b;Vd(a,~(f>>>0>e>>>0?e:f),~(b>>>0<e>>>0?e:b));return}function Ld(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;if((c[a+3132>>2]|0)!=0){ne(c[a>>2]|0,b+100|0,d+100|0,e+100|0);return}if((c[a+2380>>2]|0)==0){f=c[a>>2]|0;b=b+100|0;d=d+100|0;e=e+100|0;if((c[a+2652>>2]|0)==7425){je(f,b,d,e);return}else{ie(f,b,d,e);return}}f=a|0;a=a+2376|0;g=c[a>>2]|0;ke(c[f>>2]|0,c[g>>2]|0,c[g+16>>2]|0,c[g+20>>2]|0,c[g+12>>2]|0);a=c[a>>2]|0;do{if((c[a+268>>2]|0)==9728){if((c[a+272>>2]|0)!=9728){break}le(c[f>>2]|0,b+100|0,d+100|0,e+100|0);return}}while(0);me(c[f>>2]|0,b+100|0,d+100|0,e+100|0);return}function Md(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=(c[a+3132>>2]|0)!=0;f=(c[b>>2]|0)!=0;if((c[a+3160>>2]|0)==0){if(g){if(f){fe(c[a>>2]|0,b+100|0,d+100|0)}if((c[d>>2]|0)!=0){fe(c[a>>2]|0,d+100|0,e+100|0)}if((c[e>>2]|0)==0){return}fe(c[a>>2]|0,e+100|0,b+100|0);return}else{if(f){he(c[a>>2]|0,b+100|0,d+100|0)}if((c[d>>2]|0)!=0){he(c[a>>2]|0,d+100|0,e+100|0)}if((c[e>>2]|0)==0){return}he(c[a>>2]|0,e+100|0,b+100|0);return}}else{if(g){if(f){ee(c[a>>2]|0,b+100|0,d+100|0)}if((c[d>>2]|0)!=0){ee(c[a>>2]|0,d+100|0,e+100|0)}if((c[e>>2]|0)==0){return}ee(c[a>>2]|0,e+100|0,b+100|0);return}else{if(f){ge(c[a>>2]|0,b+100|0,d+100|0)}if((c[d>>2]|0)!=0){ge(c[a>>2]|0,d+100|0,e+100|0)}if((c[e>>2]|0)==0){return}ge(c[a>>2]|0,e+100|0,b+100|0);return}}}function Nd(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;f=(c[b>>2]|0)!=0;if((c[a+3132>>2]|0)==0){if(f){ce(c[a>>2]|0,b+100|0)}if((c[d>>2]|0)!=0){ce(c[a>>2]|0,d+100|0)}if((c[e>>2]|0)==0){return}ce(c[a>>2]|0,e+100|0);return}else{if(f){de(c[a>>2]|0,b+100|0)}if((c[d>>2]|0)!=0){de(c[a>>2]|0,d+100|0)}if((c[e>>2]|0)==0){return}de(c[a>>2]|0,e+100|0);return}}function Od(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=+f;var h=0.0,i=0.0,j=0.0,k=0.0;h=+g[d+48>>2];if((c[a+2652>>2]|0)==7425){g[b+48>>2]=h+(+g[e+48>>2]-h)*f;h=+g[d+52>>2];g[b+52>>2]=h+(+g[e+52>>2]-h)*f;h=+g[d+56>>2];g[b+56>>2]=h+(+g[e+56>>2]-h)*f}else{g[b+48>>2]=h;g[b+52>>2]=+g[d+52>>2];g[b+56>>2]=+g[d+56>>2]}if((c[a+2380>>2]|0)!=0){h=+g[d+32>>2];g[b+32>>2]=h+(+g[e+32>>2]-h)*f;h=+g[d+36>>2];g[b+36>>2]=h+(+g[e+36>>2]-h)*f}k=+g[b+80>>2];i=+g[b+84>>2];h=+g[b+88>>2];j=+g[b+92>>2]*1.00001;f=-0.0-j;e=k<f|(j<k)<<1|(j<i)<<3|(j<h)<<5|(i<f)<<2|(h<f)<<4;c[b+96>>2]=e;if((e|0)!=0){return}zd(a,b);return}function Pd(a){a=a|0;var b=0,d=0,e=0,f=0;d=rc()|0;b=d+2676|0;if((c[b>>2]|0)==7170){e=d+2696|0;f=c[d+2700>>2]|0;f=(c[e>>2]|0)==0?f:-f|0;c[e>>2]=0;c[d+2688>>2]=c[d+2680>>2];c[d+2960>>2]=0;e=f}else{e=0}if((a|0)==7168){c[b>>2]=7168;return e|0}else if((a|0)==7170){c[b>>2]=7170;c[d+2688>>2]=c[d+2680>>2];c[d+2700>>2]=0;c[d+2696>>2]=0;c[d+2692>>2]=0;return e|0}else{return e|0}return 0}function Qd(a,b){a=a|0;b=b|0;var d=0;d=rc()|0;c[d+2680>>2]=b;c[d+2684>>2]=a;return}function Rd(a,b){a=a|0;b=b|0;if((c[a+2676>>2]|0)!=7170){return}c[a+2960>>2]=0;c[a+2692>>2]=0;return}function Sd(a,b){a=a|0;b=b|0;var d=0,e=0;if((c[a+2676>>2]|0)!=7170){return}d=c[b+4>>2]|0;e=a+2960|0;b=c[e>>2]|0;c[e>>2]=b+1;c[a+2704+(b<<2)>>2]=d;c[a+2692>>2]=0;return}function Td(a,b){a=a|0;b=b|0;if((c[a+2676>>2]|0)!=7170){return}b=a+2960|0;c[b>>2]=(c[b>>2]|0)-1;c[a+2692>>2]=0;return}function Ud(a,b){a=a|0;b=b|0;if((c[a+2676>>2]|0)!=7170){return}c[a+2704+((c[a+2960>>2]|0)-1<<2)>>2]=c[b+4>>2];c[a+2692>>2]=0;return}function Vd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;i=a+2696|0;if((c[i>>2]|0)!=0){return}j=a+2692|0;e=c[j>>2]|0;if((e|0)!=0){a=e+4|0;if((c[a>>2]|0)>>>0>b>>>0){c[a>>2]=b}a=e+8|0;if(!((c[a>>2]|0)>>>0<d>>>0)){return}c[a>>2]=d;return}h=c[a+2960>>2]|0;e=a+2688|0;f=c[e>>2]|0;g=h+3|0;if((g+(f-(c[a+2680>>2]|0)>>2)|0)>(c[a+2684>>2]|0)){c[i>>2]=1;return}c[j>>2]=f;c[f>>2]=h;c[f+4>>2]=b;b=f+12|0;c[f+8>>2]=d;if((h|0)>0){d=b;b=0;while(1){c[d>>2]=c[a+2704+(b<<2)>>2];b=b+1|0;if((b|0)<(h|0)){d=d+4|0}else{break}}b=f+(g<<2)|0}c[e>>2]=b;j=a+2700|0;c[j>>2]=(c[j>>2]|0)+1;return}function Wd(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=rc()|0;switch(a|0){case 2978:{c[b>>2]=c[e+2596>>2];c[b+4>>2]=c[e+2600>>2];c[b+8>>2]=c[e+2604>>2];c[b+12>>2]=c[e+2608>>2];i=d;return};case 3385:{c[b>>2]=8;i=d;return};case 3384:{c[b>>2]=8;i=d;return};case 3382:{c[b>>2]=32;i=d;return};case 3377:{c[b>>2]=16;i=d;return};case 3379:{c[b>>2]=1024;i=d;return};default:{Yd(2360,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a;i=d;return}}}function Xd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;e=i;d=rc()|0;switch(a|0){case 2984:{a=2;f=3;break};case 2849:{g[b>>2]=1.0;i=e;return};case 2850:{g[b+4>>2]=1.0;g[b>>2]=1.0;i=e;return};case 2834:{g[b+4>>2]=1.0;g[b>>2]=1.0;i=e;return};case 2982:{a=0;break};case 2983:{a=1;f=3;break};case 2833:{g[b>>2]=1.0;i=e;return};default:{Je(2656,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a;i=e;return}}a=c[d+2432+(a<<2)>>2]|0;g[b>>2]=+g[a>>2];g[b+4>>2]=+g[a+16>>2];g[b+8>>2]=+g[a+32>>2];g[b+12>>2]=+g[a+48>>2];g[b+16>>2]=+g[a+4>>2];g[b+20>>2]=+g[a+20>>2];g[b+24>>2]=+g[a+36>>2];g[b+28>>2]=+g[a+52>>2];g[b+32>>2]=+g[a+8>>2];g[b+36>>2]=+g[a+24>>2];g[b+40>>2]=+g[a+40>>2];g[b+44>>2]=+g[a+56>>2];g[b+48>>2]=+g[a+12>>2];g[b+52>>2]=+g[a+28>>2];g[b+56>>2]=+g[a+44>>2];g[b+60>>2]=+g[a+60>>2];i=e;return}function Yd(a,b){a=a|0;b=b|0;return}function Zd(a,b,d,e,f,g,h){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0;f=df(60)|0;e=f;if((f|0)==0){i=0;return i|0}c[f>>2]=a;g=f+4|0;c[g>>2]=b;c[f+12>>2]=d;i=a<<2;a=f+8|0;c[a>>2]=i;a:do{if((d|0)==3|(d|0)==1){c[f+28>>2]=0;i=df(_(i,b)|0)|0;b=f+16|0;c[b>>2]=i;if((i|0)==0){break}do{if((h|0)==0){i=df(_(c[a>>2]|0,c[g>>2]|0)|0)|0;c[f+20>>2]=i;if((i|0)==0){cf(c[b>>2]|0);break a}else{c[f+24>>2]=1;break}}else{c[f+24>>2]=0;c[f+20>>2]=h}}while(0);c[f+40>>2]=0;i=e;return i|0}}while(0);cf(f);i=0;return i|0}function _d(a){a=a|0;if((c[a+24>>2]|0)!=0){cf(c[a+20>>2]|0)}cf(c[a+16>>2]|0);cf(a);return}function $d(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=d&-4;c[a>>2]=g;f=a+4|0;c[f>>2]=e;g=g<<2;d=a+8|0;c[d>>2]=g;g=_(g,e)|0;e=a+16|0;cf(c[e>>2]|0);c[e>>2]=df(g)|0;e=a+24|0;if((c[e>>2]|0)!=0){cf(c[a+20>>2]|0)}if((b|0)==0){c[a+20>>2]=df(_(c[d>>2]|0,c[f>>2]|0)|0)|0;g=1;c[e>>2]=g;return}else{c[a+20>>2]=b;g=0;c[e>>2]=g;return}}function ae(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;if((c[a+12>>2]|0)!=3){return}g=c[a>>2]<<2;f=a+4|0;if((c[f>>2]|0)<=0){return}e=a+8|0;h=c[a+20>>2]|0;a=0;while(1){jf(b|0,h|0,g)|0;a=a+1|0;if((a|0)<(c[f>>2]|0)){h=h+(c[e>>2]|0)|0;b=b+d|0}else{break}}return}function be(a,b,d,e,f,g,h,i){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,l=0,m=0,n=0;do{if((b|0)!=0){k=c[a+16>>2]|0;b=_(c[a+4>>2]|0,c[a>>2]|0)|0;l=b>>2;if((l|0)>0){j=l<<2;n=0;m=k;while(1){c[m>>2]=d;c[m+4>>2]=d;c[m+8>>2]=d;c[m+12>>2]=d;n=n+1|0;if((n|0)<(l|0)){m=m+16|0}else{break}}k=k+(j<<2)|0}b=b&3;if((b|0)==0){break}else{j=0}while(1){c[k>>2]=d;j=j+1|0;if((j|0)<(b|0)){k=k+4|0}else{break}}}}while(0);if((e|0)==0){return}d=a+4|0;if((c[d>>2]|0)<=0){return}f=f<<8&16711680|g&65280|h>>8|i<<16&-16777216;i=a|0;h=a+8|0;g=1;j=c[a+20>>2]|0;while(1){a=j;e=c[i>>2]|0;k=e>>2;if((k|0)>0){b=k<<2;m=0;l=j;while(1){c[l>>2]=f;c[l+4>>2]=f;c[l+8>>2]=f;c[l+12>>2]=f;m=m+1|0;if((m|0)<(k|0)){l=l+16|0}else{break}}j=j+(b<<2)|0}e=e&3;if((e|0)!=0){b=0;while(1){c[j>>2]=f;b=b+1|0;if((b|0)<(e|0)){j=j+4|0}else{break}}}if((g|0)>=(c[d>>2]|0)){break}g=g+1|0;j=a+(c[h>>2]|0)|0}return}function ce(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=c[b+4>>2]|0;g=_(c[a>>2]|0,d)|0;e=c[b>>2]|0;g=(c[a+16>>2]|0)+(g+e<<2)|0;f=c[b+8>>2]|0;if(f>>>0<(c[g>>2]|0)>>>0){return}d=_(c[a+8>>2]|0,d)|0;c[(c[a+20>>2]|0)+(d+(e<<2))>>2]=c[b+24>>2]&65280|c[b+20>>2]<<8&16711680|(c[b+28>>2]|0)>>>8|-16777216;c[g>>2]=f;return}function de(a,b){a=a|0;b=b|0;var d=0;d=_(c[a>>2]|0,c[b+4>>2]|0)|0;if((c[b+8>>2]|0)>>>0<(c[(c[a+16>>2]|0)+(d+(c[b>>2]|0)<<2)>>2]|0)>>>0){return}d=a+56|0;c[d>>2]=(c[d>>2]|0)+1;return}function ee(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;f=c[b+4>>2]|0;j=c[d+4>>2]|0;do{if((f|0)>(j|0)){e=4}else{if((f|0)!=(j|0)){g=b;i=f;break}if((c[b>>2]|0)>(c[d>>2]|0)){e=4}else{g=b;i=f;j=f}}}while(0);if((e|0)==4){g=d;d=b;i=j;j=f}e=c[a>>2]|0;k=c[g>>2]|0;f=(c[a+16>>2]|0)+((_(i,e)|0)+k<<2)|0;g=c[g+8>>2]|0;l=c[d>>2]|0;b=l-k|0;h=j-i|0;if((l|0)==(k|0)&(j|0)==(i|0)){if(g>>>0<(c[f>>2]|0)>>>0){return}l=a+56|0;c[l>>2]=(c[l>>2]|0)+1;return}if((b|0)>0){d=(c[d+8>>2]|0)-g|0;if((b|0)<(h|0)){d=(d|0)/(h|0)|0;b=b<<1;i=h<<1;a=a+56|0;j=b-h|0;while(1){if(!(g>>>0<(c[f>>2]|0)>>>0)){c[a>>2]=(c[a>>2]|0)+1}k=(j|0)>0;if((h|0)>0){g=g+d|0;f=f+((k&1)+e<<2)|0;j=j+b+(k?-i|0:0)|0;h=h-1|0}else{break}}return}d=(d|0)/(b|0)|0;h=h<<1;i=e+1|0;e=h-(b<<1)|0;a=a+56|0;j=h-b|0;while(1){if(!(g>>>0<(c[f>>2]|0)>>>0)){c[a>>2]=(c[a>>2]|0)+1}if((j|0)>0){f=f+(i<<2)|0;k=e}else{f=f+4|0;k=h}if((b|0)>0){g=g+d|0;j=k+j|0;b=b-1|0}else{break}}return}else{i=-b|0;d=(c[d+8>>2]|0)-g|0;if((h|0)>(i|0)){b=(d|0)/(h|0)|0;i=i<<1;d=h<<1;a=a+56|0;j=i-h|0;while(1){if(!(g>>>0<(c[f>>2]|0)>>>0)){c[a>>2]=(c[a>>2]|0)+1}k=(j|0)>0;if((h|0)>0){g=g+b|0;f=f+((k<<31>>31)+e<<2)|0;j=j+i+(k?-d|0:0)|0;h=h-1|0}else{break}}return}d=(d|0)/(i|0)|0;h=h<<1;e=e-1|0;j=h-(i<<1)|0;a=a+56|0;b=h+b|0;while(1){if(!(g>>>0<(c[f>>2]|0)>>>0)){c[a>>2]=(c[a>>2]|0)+1}if((b|0)>0){f=f+(e<<2)|0;k=j}else{f=f-4|0;k=h}if((i|0)>0){g=g+d|0;b=k+b|0;i=i-1|0}else{break}}return}}function fe(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;h=c[b+4>>2]|0;e=c[d+4>>2]|0;do{if((h|0)>(e|0)){g=4}else{if((h|0)!=(e|0)){f=b;b=h;break}if((c[b>>2]|0)>(c[d>>2]|0)){g=4}else{f=b;b=h;e=h}}}while(0);if((g|0)==4){f=d;d=b;b=e;e=h}f=c[f>>2]|0;g=c[d>>2]|0;d=g-f|0;h=e-b|0;if((g|0)==(f|0)&(e|0)==(b|0)){i=a+56|0;c[i>>2]=(c[i>>2]|0)+1;return}if((d|0)>0){i=a+56|0;a=c[i>>2]|0;if((d|0)<(h|0)){f=b-1-e|0;c[i>>2]=a+e+((f|0)>-1?f:-1)+2-b;return}else{b=f-1-g|0;c[i>>2]=a+g+((b|0)>-1?b:-1)+2-f;return}}else{i=a+56|0;a=c[i>>2]|0;if((h|0)>(-d|0)){f=b-1-e|0;c[i>>2]=a+e+((f|0)>-1?f:-1)+2-b;return}else{b=g-1-f|0;c[i>>2]=a+f+((b|0)>-1?b:-1)+2-g;return}}}function ge(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;j=c[b+20>>2]|0;i=c[b+24>>2]|0;h=c[b+28>>2]|0;g=j<<8&16711680|i&65280|h>>8;o=c[d+20>>2]|0;p=c[d+24>>2]|0;n=c[d+28>>2]|0;f=c[b+4>>2]|0;q=c[d+4>>2]|0;k=(f|0)>(q|0);if((g|0)==(o<<8&16711680|p&65280|n>>8|0)){do{if(k){e=5}else{if((f|0)!=(q|0)){h=b;b=f;break}if((c[b>>2]|0)>(c[d>>2]|0)){e=5}else{h=b;b=f;q=f}}}while(0);if((e|0)==5){h=d;d=b;b=q;q=f}e=c[a>>2]|0;f=_(c[a+8>>2]|0,b)|0;r=c[h>>2]|0;f=(c[a+20>>2]|0)+((r<<2)+f)|0;a=(c[a+16>>2]|0)+(r+(_(e,b)|0)<<2)|0;h=c[h+8>>2]|0;p=c[d>>2]|0;i=p-r|0;j=q-b|0;if((p|0)==(r|0)&(q|0)==(b|0)){if(h>>>0<(c[a>>2]|0)>>>0){return}c[f>>2]=g|-16777216;c[a>>2]=h;return}if((i|0)>0){b=(c[d+8>>2]|0)-h|0;if((i|0)<(j|0)){b=(b|0)/(j|0)|0;i=i<<1;k=g|-16777216;g=-(j<<1)|0;l=i-j|0;while(1){if(!(h>>>0<(c[a>>2]|0)>>>0)){c[f>>2]=k;c[a>>2]=h}m=(l|0)>0;n=(m&1)+e|0;if((j|0)>0){h=h+b|0;a=a+(n<<2)|0;f=f+(n<<2)|0;l=l+i+(m?g:0)|0;j=j-1|0}else{break}}return}b=(b|0)/(i|0)|0;j=j<<1;e=e+1|0;k=j-(i<<1)|0;g=g|-16777216;l=j-i|0;while(1){if(!(h>>>0<(c[a>>2]|0)>>>0)){c[f>>2]=g;c[a>>2]=h}if((l|0)>0){a=a+(e<<2)|0;f=f+(e<<2)|0;m=k}else{a=a+4|0;f=f+4|0;m=j}if((i|0)>0){h=h+b|0;l=m+l|0;i=i-1|0}else{break}}return}else{k=-i|0;b=(c[d+8>>2]|0)-h|0;if((j|0)>(k|0)){i=(b|0)/(j|0)|0;b=k<<1;k=g|-16777216;g=-(j<<1)|0;l=b-j|0;while(1){if(!(h>>>0<(c[a>>2]|0)>>>0)){c[f>>2]=k;c[a>>2]=h}n=(l|0)>0;m=(n<<31>>31)+e|0;if((j|0)>0){h=h+i|0;a=a+(m<<2)|0;f=f+(m<<2)|0;l=l+b+(n?g:0)|0;j=j-1|0}else{break}}return}b=(b|0)/(k|0)|0;j=j<<1;e=e-1|0;l=j-(k<<1)|0;g=g|-16777216;i=i+j|0;while(1){if(!(h>>>0<(c[a>>2]|0)>>>0)){c[f>>2]=g;c[a>>2]=h}if((i|0)>0){a=a+(e<<2)|0;f=f+(e<<2)|0;m=l}else{a=a-4|0;f=f-4|0;m=j}if((k|0)>0){h=h+b|0;i=m+i|0;k=k-1|0}else{break}}return}}else{do{if(k){e=37}else{if((f|0)!=(q|0)){l=b;m=f;break}if((c[b>>2]|0)>(c[d>>2]|0)){e=37}else{l=b;m=f;q=f}}}while(0);if((e|0)==37){l=d;d=b;m=q;q=f;o=j;p=i;n=h}f=c[a>>2]|0;e=_(c[a+8>>2]|0,m)|0;r=c[l>>2]|0;e=(c[a+20>>2]|0)+((r<<2)+e)|0;b=(c[a+16>>2]|0)+(r+(_(f,m)|0)<<2)|0;k=c[l+8>>2]|0;s=c[d>>2]|0;j=s-r|0;h=q-m|0;g=o<<8;a=p<<8;i=n<<8;if((s|0)==(r|0)&(q|0)==(m|0)){if(k>>>0<(c[b>>2]|0)>>>0){return}c[e>>2]=g&16711680|p&65280|n>>>8&65535|-16777216;c[b>>2]=k;return}if((j|0)>0){m=(c[d+8>>2]|0)-k|0;if((j|0)<(h|0)){m=(m|0)/(h|0)|0;d=(o-(c[l+20>>2]|0)<<8|0)/(h|0)|0;o=(p-(c[l+24>>2]|0)<<8|0)/(h|0)|0;l=(n-(c[l+28>>2]|0)<<8|0)/(h|0)|0;j=j<<1;n=-(h<<1)|0;p=j-h|0;while(1){if(!(k>>>0<(c[b>>2]|0)>>>0)){c[e>>2]=g&16711680|a>>>8&65280|i>>>16|-16777216;c[b>>2]=k}q=(p|0)>0;r=(q&1)+f|0;if((h|0)>0){k=k+m|0;b=b+(r<<2)|0;i=i+l|0;a=a+o|0;g=g+d|0;e=e+(r<<2)|0;p=p+j+(q?n:0)|0;h=h-1|0}else{break}}return}m=(m|0)/(j|0)|0;d=(o-(c[l+20>>2]|0)<<8|0)/(j|0)|0;o=(p-(c[l+24>>2]|0)<<8|0)/(j|0)|0;l=(n-(c[l+28>>2]|0)<<8|0)/(j|0)|0;h=h<<1;f=f+1|0;n=h-(j<<1)|0;p=h-j|0;while(1){if(!(k>>>0<(c[b>>2]|0)>>>0)){c[e>>2]=g&16711680|a>>>8&65280|i>>>16|-16777216;c[b>>2]=k}if((p|0)>0){b=b+(f<<2)|0;e=e+(f<<2)|0;q=n}else{b=b+4|0;e=e+4|0;q=h}if((j|0)>0){k=k+m|0;i=i+l|0;a=a+o|0;g=g+d|0;p=q+p|0;j=j-1|0}else{break}}return}else{m=-j|0;d=(c[d+8>>2]|0)-k|0;if((h|0)>(m|0)){j=(d|0)/(h|0)|0;d=(o-(c[l+20>>2]|0)<<8|0)/(h|0)|0;o=(p-(c[l+24>>2]|0)<<8|0)/(h|0)|0;l=(n-(c[l+28>>2]|0)<<8|0)/(h|0)|0;n=m<<1;m=-(h<<1)|0;p=n-h|0;while(1){if(!(k>>>0<(c[b>>2]|0)>>>0)){c[e>>2]=g&16711680|a>>>8&65280|i>>>16|-16777216;c[b>>2]=k}q=(p|0)>0;r=(q<<31>>31)+f|0;if((h|0)>0){k=k+j|0;b=b+(r<<2)|0;i=i+l|0;a=a+o|0;g=g+d|0;e=e+(r<<2)|0;p=p+n+(q?m:0)|0;h=h-1|0}else{break}}return}d=(d|0)/(m|0)|0;o=(o-(c[l+20>>2]|0)<<8|0)/(m|0)|0;p=(p-(c[l+24>>2]|0)<<8|0)/(m|0)|0;l=(n-(c[l+28>>2]|0)<<8|0)/(m|0)|0;h=h<<1;n=f-1|0;f=h-(m<<1)|0;j=j+h|0;while(1){if(!(k>>>0<(c[b>>2]|0)>>>0)){c[e>>2]=g&16711680|a>>>8&65280|i>>>16|-16777216;c[b>>2]=k}if((j|0)>0){b=b+(n<<2)|0;e=e+(n<<2)|0;q=f}else{b=b-4|0;e=e-4|0;q=h}if((m|0)>0){k=k+d|0;i=i+l|0;a=a+p|0;g=g+o|0;j=q+j|0;m=m-1|0}else{break}}return}}}function he(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;o=c[b+20>>2]|0;i=c[b+24>>2]|0;h=c[b+28>>2]|0;e=o<<8&16711680|i&65280|h>>8;n=c[d+20>>2]|0;m=c[d+24>>2]|0;k=c[d+28>>2]|0;g=c[b+4>>2]|0;l=c[d+4>>2]|0;j=(g|0)>(l|0);if((e|0)==(n<<8&16711680|m&65280|k>>8|0)){do{if(j){f=5}else{if((g|0)!=(l|0)){h=b;i=g;break}if((c[b>>2]|0)>(c[d>>2]|0)){f=5}else{h=b;i=g;l=g}}}while(0);if((f|0)==5){h=d;d=b;i=l;l=g}f=c[a>>2]|0;n=_(c[a+8>>2]|0,i)|0;o=c[h>>2]|0;a=(c[a+20>>2]|0)+((o<<2)+n)|0;n=c[d>>2]|0;h=n-o|0;g=l-i|0;if((n|0)==(o|0)&(l|0)==(i|0)){c[a>>2]=e|-16777216;return}if((h|0)>0){if((h|0)<(g|0)){d=h<<1;h=(f<<2)+4|0;i=e|-16777216;e=d-(g<<1)|0;j=d-g|0;while(1){c[a>>2]=i;if((j|0)>0){a=a+h|0;k=e}else{a=a+(f<<2)|0;k=d}if((g|0)>0){j=k+j|0;g=g-1|0}else{break}}return}else{g=g<<1;f=(f<<2)+4|0;d=e|-16777216;e=g-(h<<1)|0;i=g-h|0;while(1){c[a>>2]=d;if((i|0)>0){a=a+f|0;j=e}else{a=a+4|0;j=g}if((h|0)>0){i=j+i|0;h=h-1|0}else{break}}return}}else{d=-h|0;if((g|0)>(d|0)){d=d<<1;h=(f<<2)-4|0;i=e|-16777216;e=d-(g<<1)|0;j=d-g|0;while(1){c[a>>2]=i;if((j|0)>0){a=a+h|0;k=e}else{a=a+(f<<2)|0;k=d}if((g|0)>0){j=k+j|0;g=g-1|0}else{break}}return}else{g=g<<1;f=(f<<2)-4|0;i=e|-16777216;e=g-(d<<1)|0;h=h+g|0;while(1){c[a>>2]=i;if((h|0)>0){a=a+f|0;j=e}else{a=a-4|0;j=g}if((d|0)>0){h=j+h|0;d=d-1|0}else{break}}return}}}else{do{if(j){f=34}else{if((g|0)!=(l|0)){j=b;b=g;break}if((c[b>>2]|0)>(c[d>>2]|0)){f=34}else{j=b;b=g;l=g}}}while(0);if((f|0)==34){j=d;d=b;b=l;l=g;n=o;m=i;k=h}e=c[a>>2]|0;f=_(c[a+8>>2]|0,b)|0;o=c[j>>2]|0;f=(c[a+20>>2]|0)+((o<<2)+f)|0;p=c[d>>2]|0;i=p-o|0;h=l-b|0;a=n<<8;g=m<<8;d=k<<8;if((p|0)==(o|0)&(l|0)==(b|0)){c[f>>2]=a&16711680|m&65280|k>>>8&65535|-16777216;return}if((i|0)>0){b=n-(c[j+20>>2]|0)<<8;if((i|0)<(h|0)){b=(b|0)/(h|0)|0;l=(m-(c[j+24>>2]|0)<<8|0)/(h|0)|0;j=(k-(c[j+28>>2]|0)<<8|0)/(h|0)|0;i=i<<1;m=(e<<2)+4|0;k=i-(h<<1)|0;n=i-h|0;while(1){c[f>>2]=a&16711680|g>>>8&65280|d>>>16|-16777216;if((n|0)>0){f=f+m|0;o=k}else{f=f+(e<<2)|0;o=i}if((h|0)>0){d=d+j|0;g=g+l|0;a=a+b|0;n=o+n|0;h=h-1|0}else{break}}return}else{b=(b|0)/(i|0)|0;l=(m-(c[j+24>>2]|0)<<8|0)/(i|0)|0;j=(k-(c[j+28>>2]|0)<<8|0)/(i|0)|0;h=h<<1;e=(e<<2)+4|0;k=h-(i<<1)|0;m=h-i|0;while(1){c[f>>2]=a&16711680|g>>>8&65280|d>>>16|-16777216;if((m|0)>0){f=f+e|0;n=k}else{f=f+4|0;n=h}if((i|0)>0){d=d+j|0;g=g+l|0;a=a+b|0;m=n+m|0;i=i-1|0}else{break}}return}}else{b=-i|0;l=n-(c[j+20>>2]|0)<<8;if((h|0)>(b|0)){i=(l|0)/(h|0)|0;l=(m-(c[j+24>>2]|0)<<8|0)/(h|0)|0;j=(k-(c[j+28>>2]|0)<<8|0)/(h|0)|0;m=b<<1;b=(e<<2)-4|0;k=m-(h<<1)|0;n=m-h|0;while(1){c[f>>2]=a&16711680|g>>>8&65280|d>>>16|-16777216;if((n|0)>0){f=f+b|0;o=k}else{f=f+(e<<2)|0;o=m}if((h|0)>0){d=d+j|0;g=g+l|0;a=a+i|0;n=o+n|0;h=h-1|0}else{break}}return}else{l=(l|0)/(b|0)|0;m=(m-(c[j+24>>2]|0)<<8|0)/(b|0)|0;j=(k-(c[j+28>>2]|0)<<8|0)/(b|0)|0;h=h<<1;e=(e<<2)-4|0;k=h-(b<<1)|0;i=i+h|0;while(1){c[f>>2]=a&16711680|g>>>8&65280|d>>>16|-16777216;if((i|0)>0){f=f+e|0;n=k}else{f=f-4|0;n=h}if((b|0)>0){d=d+j|0;g=g+m|0;a=a+l|0;i=n+i|0;b=b-1|0}else{break}}return}}}}function ie(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0.0,V=0.0,W=0.0,X=0.0,Y=0.0,Z=0.0,$=0.0;h=(c[d+4>>2]|0)<(c[b+4>>2]|0);g=h?b:d;b=h?d:b;n=c[e+4>>2]|0;h=c[b+4>>2]|0;if((n|0)<(h|0)){d=e;i=h}else{j=(n|0)<(c[g+4>>2]|0);i=j?e:g;d=b;b=i;g=j?g:e;i=c[i+4>>2]|0;n=h}T=c[d>>2]|0;U=+((c[b>>2]|0)-T|0);h=b+4|0;e=d+4|0;Y=+(i-n|0);V=+((c[g>>2]|0)-T|0);i=g+4|0;X=+((c[i>>2]|0)-n|0);W=U*X-Y*V;if(W==0.0){return}W=1.0/W;j=c[d+8>>2]|0;Z=+((c[b+8>>2]|0)-j|0);$=+((c[g+8>>2]|0)-j|0);j=~~(X*W*Z-Y*W*$);k=~~(U*W*$-V*W*Z);m=a+8|0;E=(c[a+20>>2]|0)+(_(c[m>>2]|0,n)|0)|0;l=a|0;F=(c[a+16>>2]|0)+((_(c[l>>2]|0,n)|0)<<2)|0;p=c[g+24>>2]&65280|c[g+20>>2]<<8&16711680|(c[g+28>>2]|0)>>>8|-16777216;a=W>0.0;o=a?g:b;q=a?b:g;n=a&1;r=0;y=0;z=0;A=0;L=0;w=0;J=0;v=0;u=0;C=0;B=0;H=0;x=0;t=0;s=0;do{do{if((r|0)==0){s=c[e>>2]|0;G=1;I=(c[h>>2]|0)-s|0;y=o;D=d;A=q;x=d;f=9}else{y=a?y:g;z=a?z:b;A=a?g:A;x=a?b:x;I=(c[i>>2]|0)-(c[h>>2]|0)+1|0;if(a){G=n;break}G=n;D=z;s=c[z+4>>2]|0;f=9}}while(0);if((f|0)==9){f=0;t=(c[y+4>>2]|0)-s|0;s=D|0;if((t|0)>0){J=c[s>>2]|0;w=((c[y>>2]|0)-J<<16|0)/(t|0)|0}else{w=0;J=c[s>>2]|0}v=w>>16;t=(_(v,j)|0)+k|0;s=t+j|0;H=c[D+8>>2]|0;u=v+1|0;w=w&65535;L=0;z=D}if((G|0)!=0){C=x|0;B=(c[A+4>>2]|0)-(c[x+4>>2]|0)|0;if((B|0)>0){C=c[C>>2]|0;B=((c[A>>2]|0)-C<<16|0)/(B|0)|0}else{B=0;C=c[C>>2]|0}C=C<<16}if((I|0)>0){D=_(B,I)|0;G=C;while(1){I=I-1|0;M=G>>16;Q=M-J|0;K=E;P=E+(J<<2)|0;R=F+(J<<2)|0;if((Q|0)>2){S=M-3-J&-4;O=M-4-J-S|0;N=J+S|0;M=_(j,S+4|0)|0;S=H;while(1){if(!(S>>>0<(c[R>>2]|0)>>>0)){c[P>>2]=p;c[R>>2]=S}T=S+j|0;S=R+4|0;if(!(T>>>0<(c[S>>2]|0)>>>0)){c[P+4>>2]=p;c[S>>2]=T}T=T+j|0;S=R+8|0;if(!(T>>>0<(c[S>>2]|0)>>>0)){c[P+8>>2]=p;c[S>>2]=T}S=T+j|0;T=R+12|0;if(!(S>>>0<(c[T>>2]|0)>>>0)){c[P+12>>2]=p;c[T>>2]=S}Q=Q-4|0;if((Q|0)>2){P=P+16|0;R=R+16|0;S=S+j|0}else{break}}P=E+(N+4<<2)|0;R=F+(N+4<<2)|0;E=H+M|0}else{O=Q;E=H}if((O|0)>-1){while(1){if(!(E>>>0<(c[R>>2]|0)>>>0)){c[P>>2]=p;c[R>>2]=E}if((O|0)>0){P=P+4|0;O=O-1|0;R=R+4|0;E=E+j|0}else{break}}}L=L+w|0;E=(L|0)>0;L=E?L-65536|0:L;H=H+(E?s:t)|0;J=(E?u:v)+J|0;E=K+(c[m>>2]|0)|0;F=F+(c[l>>2]<<2)|0;if((I|0)>0){G=B+G|0}else{break}}C=C+D|0}r=r+1|0;}while((r|0)<2);return}function je(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0.0,pa=0.0,qa=0.0,ra=0.0,sa=0.0,ta=0.0,ua=0.0;h=(c[d+4>>2]|0)<(c[b+4>>2]|0);g=h?b:d;d=h?d:b;t=c[e+4>>2]|0;h=c[d+4>>2]|0;if((t|0)<(h|0)){b=e;i=h}else{j=(t|0)<(c[g+4>>2]|0);i=j?e:g;b=d;d=i;g=j?g:e;i=c[i+4>>2]|0;t=h}na=c[b>>2]|0;oa=+((c[d>>2]|0)-na|0);e=d+4|0;h=b+4|0;qa=+(i-t|0);sa=+((c[g>>2]|0)-na|0);i=g+4|0;pa=+((c[i>>2]|0)-t|0);ra=oa*pa-qa*sa;if(ra==0.0){return}ra=1.0/ra;oa=oa*ra;ta=qa*ra;qa=sa*ra;ua=pa*ra;r=c[b+8>>2]|0;sa=+((c[d+8>>2]|0)-r|0);pa=+((c[g+8>>2]|0)-r|0);r=~~(ua*sa-ta*pa);q=~~(oa*pa-qa*sa);j=c[b+20>>2]|0;sa=+((c[d+20>>2]|0)-j|0);pa=+((c[g+20>>2]|0)-j|0);j=~~(ua*sa-ta*pa);k=~~(oa*pa-qa*sa);p=c[b+24>>2]|0;sa=+((c[d+24>>2]|0)-p|0);pa=+((c[g+24>>2]|0)-p|0);p=~~(ua*sa-ta*pa);l=~~(oa*pa-qa*sa);o=c[b+28>>2]|0;sa=+((c[d+28>>2]|0)-o|0);pa=+((c[g+28>>2]|0)-o|0);o=~~(ua*sa-ta*pa);s=~~(oa*pa-qa*sa);n=a+8|0;Q=(c[a+20>>2]|0)+(_(c[n>>2]|0,t)|0)|0;m=a|0;P=(c[a+16>>2]|0)+((_(c[m>>2]|0,t)|0)<<2)|0;u=ra>0.0;v=u?g:d;t=u?d:g;a=u&1;w=0;S=0;L=0;R=0;G=0;F=0;O=0;M=0;U=0;E=0;D=0;J=0;V=0;I=0;K=0;C=0;B=0;X=0;H=0;A=0;z=0;Y=0;y=0;x=0;do{do{if((w|0)==0){x=c[h>>2]|0;W=1;T=(c[e>>2]|0)-x|0;J=v;N=b;K=t;H=b;f=9}else{J=u?J:g;I=u?I:d;K=u?g:K;H=u?d:H;T=(c[i>>2]|0)-(c[e>>2]|0)+1|0;if(u){W=a;break}W=a;N=I;x=c[I+4>>2]|0;f=9}}while(0);if((f|0)==9){f=0;y=(c[J+4>>2]|0)-x|0;x=N|0;if((y|0)>0){R=c[x>>2]|0;I=((c[J>>2]|0)-R<<16|0)/(y|0)|0}else{I=0;R=c[x>>2]|0}G=I>>16;E=(_(G,r)|0)+q|0;C=(_(G,j)|0)+k|0;A=(_(G,p)|0)+l|0;y=(_(G,o)|0)+s|0;x=y+o|0;Y=c[N+28>>2]|0;z=A+p|0;X=c[N+24>>2]|0;B=C+j|0;V=c[N+20>>2]|0;D=E+r|0;U=c[N+8>>2]|0;F=G+1|0;L=I&65535;S=0;I=N}if((W|0)!=0){N=H|0;M=(c[K+4>>2]|0)-(c[H+4>>2]|0)|0;if((M|0)>0){N=c[N>>2]|0;M=((c[K>>2]|0)-N<<16|0)/(M|0)|0}else{M=0;N=c[N>>2]|0}O=N<<16}if((T|0)>0){N=_(M,T)|0;Z=Q;Q=O;while(1){T=T-1|0;$=Q>>16;ga=$-R|0;W=Z;fa=Z+(R<<2)|0;ha=P+(R<<2)|0;if((ga|0)>2){ca=$-3-R&-4;ea=$-4-R-ca|0;da=R+ca|0;ca=ca+4|0;$=_(o,ca)|0;ba=_(j,ca)|0;aa=_(p,ca)|0;ca=_(r,ca)|0;na=U;ja=V;la=X;ma=Y;while(1){if(!(na>>>0<(c[ha>>2]|0)>>>0)){c[fa>>2]=la&65280|ja<<8&16711680|ma>>>8|-16777216;c[ha>>2]=na}ia=na+r|0;ka=la+p|0;la=ja+j|0;ma=ma+o|0;ja=ha+4|0;if(!(ia>>>0<(c[ja>>2]|0)>>>0)){c[fa+4>>2]=ka&65280|la<<8&16711680|ma>>>8|-16777216;c[ja>>2]=ia}ja=ia+r|0;ia=ka+p|0;ka=la+j|0;ma=ma+o|0;la=ha+8|0;if(!(ja>>>0<(c[la>>2]|0)>>>0)){c[fa+8>>2]=ia&65280|ka<<8&16711680|ma>>>8|-16777216;c[la>>2]=ja}ja=ja+r|0;ia=ia+p|0;la=ka+j|0;ka=ma+o|0;ma=ha+12|0;if(!(ja>>>0<(c[ma>>2]|0)>>>0)){c[fa+12>>2]=ia&65280|la<<8&16711680|ka>>>8|-16777216;c[ma>>2]=ja}ga=ga-4|0;if((ga|0)>2){fa=fa+16|0;ha=ha+16|0;na=ja+r|0;ja=la+j|0;la=ia+p|0;ma=ka+o|0}else{break}}fa=Z+(da+4<<2)|0;ha=P+(da+4<<2)|0;ca=U+ca|0;Z=V+ba|0;aa=X+aa|0;$=Y+$|0}else{ea=ga;ca=U;Z=V;aa=X;$=Y}if((ea|0)>-1){while(1){if(!(ca>>>0<(c[ha>>2]|0)>>>0)){c[fa>>2]=aa&65280|Z<<8&16711680|$>>>8|-16777216;c[ha>>2]=ca}if((ea|0)>0){fa=fa+4|0;ea=ea-1|0;ha=ha+4|0;ca=ca+r|0;Z=Z+j|0;aa=aa+p|0;$=$+o|0}else{break}}}S=S+L|0;Z=(S|0)>0;S=Z?S-65536|0:S;Y=Y+(Z?x:y)|0;X=X+(Z?z:A)|0;V=V+(Z?B:C)|0;U=U+(Z?D:E)|0;R=(Z?F:G)+R|0;Z=W+(c[n>>2]|0)|0;P=P+(c[m>>2]<<2)|0;if((T|0)>0){Q=M+Q|0}else{break}}Q=Z;O=O+N|0}w=w+1|0;}while((w|0)<2);return}function ke(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;c[a+40>>2]=b;c[a+48>>2]=d;c[a+52>>2]=e;c[a+44>>2]=f;return}function le(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0.0,l=0,m=0,n=0.0,o=0,p=0.0,q=0.0,r=0.0,s=0.0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0.0,D=0.0,E=0,F=0.0,G=0,H=0.0,I=0,J=0,K=0,L=0,M=0.0,N=0.0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0.0,X=0.0,Y=0,Z=0,$=0,aa=0.0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0.0,la=0.0,ma=0,na=0.0,oa=0.0,pa=0.0,qa=0,ra=0;i=(c[d+4>>2]|0)<(c[b+4>>2]|0);h=i?b:d;b=i?d:b;u=c[e+4>>2]|0;i=c[b+4>>2]|0;if((u|0)<(i|0)){d=e;j=i}else{l=(u|0)<(c[h+4>>2]|0);j=l?e:h;d=b;b=j;h=l?h:e;j=c[j+4>>2]|0;u=i}ra=c[d>>2]|0;k=+((c[b>>2]|0)-ra|0);i=b+4|0;e=d+4|0;n=+(j-u|0);r=+((c[h>>2]|0)-ra|0);j=h+4|0;q=+((c[j>>2]|0)-u|0);p=k*q-n*r;if(p==0.0){return}pa=1.0/p;la=k*pa;ka=n*pa;oa=r*pa;r=q*pa;t=c[d+8>>2]|0;aa=+((c[b+8>>2]|0)-t|0);k=+((c[h+8>>2]|0)-t|0);t=~~(r*aa-ka*k);o=~~(la*k-oa*aa);l=b+32|0;aa=+g[d+32>>2];k=+g[l>>2]-aa;v=h+32|0;s=+g[v>>2]-aa;p=r*k-ka*s;k=la*s-oa*k;$=d+36|0;g[$>>2]=aa*+(c[d+12>>2]|0);ba=d+40|0;g[ba>>2]=+(c[d+16>>2]|0)*aa;aa=+g[l>>2];l=b+36|0;g[l>>2]=+(c[b+12>>2]|0)*aa;m=b+40|0;g[m>>2]=+(c[b+16>>2]|0)*aa;aa=+g[v>>2];s=+(c[h+12>>2]|0)*aa;g[h+36>>2]=s;aa=+(c[h+16>>2]|0)*aa;g[h+40>>2]=aa;na=+g[$>>2];q=+g[l>>2]-na;na=s-na;s=r*q-ka*na;q=la*na-oa*q;na=+g[ba>>2];n=+g[m>>2]-na;na=aa-na;r=r*n-ka*na;n=la*na-oa*n;m=a+8|0;ba=(c[a+20>>2]|0)+(_(u,c[m>>2]|0)|0)|0;l=a|0;$=(c[a+16>>2]|0)+((_(c[l>>2]|0,u)|0)<<2)|0;v=c[a+40>>2]|0;w=c[a+44>>2]|0;u=c[a+48>>2]|0;z=c[a+52>>2]|0;y=pa>0.0;A=y?h:b;x=y?b:h;a=y&1;U=0;R=0;Q=0;P=0;W=0.0;S=0;O=0;N=0.0;M=0.0;X=0.0;L=0;Y=0;H=0.0;F=0.0;aa=0.0;E=0;ca=0;D=0.0;C=0.0;B=0;G=0;I=0;J=0;K=0;do{do{if((B|0)==0){E=c[e>>2]|0;Z=(c[i>>2]|0)-E|0;V=1;G=A;T=d;J=x;K=d;f=9}else{G=y?G:h;I=y?I:b;J=y?h:J;K=y?b:K;Z=(c[j>>2]|0)-(c[i>>2]|0)+1|0;if(y){V=a;break}V=a;T=I;E=c[I+4>>2]|0;f=9}}while(0);if((f|0)==9){f=0;E=(c[G+4>>2]|0)-E|0;I=T|0;if((E|0)>0){Y=c[I>>2]|0;E=((c[G>>2]|0)-Y<<16|0)/(E|0)|0}else{E=0;Y=c[I>>2]|0}O=E>>16;Q=(_(O,t)|0)+o|0;D=+(O|0);N=k+p*D;H=q+s*D;D=n+r*D;C=r+D;ca=0;E=E&65535;aa=+g[T+40>>2];F=s+H;L=O;X=+g[T+36>>2];M=p+N;O=O+1|0;W=+g[T+32>>2];P=Q+t|0;U=c[T+8>>2]|0;I=T}if((V|0)!=0){S=K|0;R=(c[J+4>>2]|0)-(c[K+4>>2]|0)|0;if((R|0)>0){S=c[S>>2]|0;R=((c[J>>2]|0)-S<<16|0)/(R|0)|0}else{R=0;S=c[S>>2]|0}S=S<<16}if((Z|0)>0){T=_(R,Z)|0;V=S;da=ba;while(1){Z=Z-1|0;ea=V>>16;ia=ea-Y|0;ba=da;ha=da+(Y<<2)|0;ja=$+(Y<<2)|0;if((ia|0)>2){ma=ea-3-Y&-4;ga=ea-4-Y-ma|0;fa=Y+ma|0;ea=_(t,ma+4|0)|0;ma=U;na=W;la=X;ka=aa;while(1){do{if(!(ma>>>0<(c[ja>>2]|0)>>>0)){pa=1.0/na;qa=c[v+(((~~(ka*pa)&z)<<w|~~(la*pa)&u)<<2)>>2]|0;if(!(qa>>>0>16777215>>>0)){break}c[ha>>2]=qa;c[ja>>2]=ma}}while(0);ma=ma+t|0;la=s+la;ka=r+ka;oa=p+na;qa=ja+4|0;do{if(!(ma>>>0<(c[qa>>2]|0)>>>0)){pa=1.0/oa;ra=c[v+(((~~(ka*pa)&z)<<w|~~(la*pa)&u)<<2)>>2]|0;if(!(ra>>>0>16777215>>>0)){break}c[ha+4>>2]=ra;c[qa>>2]=ma}}while(0);ma=ma+t|0;na=s+la;la=r+ka;ka=p+oa;qa=ja+8|0;do{if(!(ma>>>0<(c[qa>>2]|0)>>>0)){pa=1.0/ka;ra=c[v+(((~~(la*pa)&z)<<w|~~(na*pa)&u)<<2)>>2]|0;if(!(ra>>>0>16777215>>>0)){break}c[ha+8>>2]=ra;c[qa>>2]=ma}}while(0);ma=ma+t|0;pa=s+na;na=r+la;oa=p+ka;ra=ja+12|0;do{if(!(ma>>>0<(c[ra>>2]|0)>>>0)){la=1.0/oa;qa=c[v+(((~~(na*la)&z)<<w|~~(pa*la)&u)<<2)>>2]|0;if(!(qa>>>0>16777215>>>0)){break}c[ha+12>>2]=qa;c[ra>>2]=ma}}while(0);la=s+pa;ka=r+na;na=p+oa;ia=ia-4|0;if((ia|0)>2){ha=ha+16|0;ja=ja+16|0;ma=ma+t|0}else{break}}ha=da+(fa+4<<2)|0;ja=$+(fa+4<<2)|0;da=U+ea|0}else{ga=ia;da=U;na=W;la=X;ka=aa}if((ga|0)>-1){while(1){do{if(!(da>>>0<(c[ja>>2]|0)>>>0)){pa=1.0/na;ea=c[v+(((~~(ka*pa)&z)<<w|~~(la*pa)&u)<<2)>>2]|0;if(!(ea>>>0>16777215>>>0)){break}c[ha>>2]=ea;c[ja>>2]=da}}while(0);if((ga|0)>0){ha=ha+4|0;ga=ga-1|0;ja=ja+4|0;da=da+t|0;na=p+na;la=s+la;ka=r+ka}else{break}}}ca=ca+E|0;da=(ca|0)>0;ca=da?ca-65536|0:ca;aa=aa+(da?C:D);Y=(da?O:L)+Y|0;X=X+(da?F:H);W=W+(da?M:N);U=(da?P:Q)+U|0;ba=ba+(c[m>>2]|0)|0;$=$+(c[l>>2]<<2)|0;if((Z|0)>0){V=V+R|0;da=ba}else{break}}S=S+T|0}B=B+1|0;}while((B|0)<2);return}function me(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0.0,m=0.0,n=0.0,o=0,p=0.0,q=0,r=0.0,s=0.0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0.0,M=0.0,N=0.0,O=0.0,P=0.0,Q=0.0,R=0,S=0,T=0,U=0.0,V=0,W=0.0,X=0.0,Y=0,Z=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0.0,ma=0.0,na=0.0,oa=0.0,pa=0,qa=0,ra=0,sa=0.0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0;h=(c[d+4>>2]|0)<(c[b+4>>2]|0);i=h?b:d;b=h?d:b;u=c[e+4>>2]|0;d=c[b+4>>2]|0;if((u|0)<(d|0)){h=e;j=d}else{k=(u|0)<(c[i+4>>2]|0);j=k?e:i;h=b;b=j;i=k?i:e;j=c[j+4>>2]|0;u=d}xa=c[h>>2]|0;l=+((c[b>>2]|0)-xa|0);d=b+4|0;e=h+4|0;n=+(j-u|0);m=+((c[i>>2]|0)-xa|0);j=i+4|0;r=+((c[j>>2]|0)-u|0);p=l*r-n*m;if(p==0.0){return}sa=1.0/p;ma=l*sa;l=n*sa;oa=m*sa;la=r*sa;o=c[h+8>>2]|0;X=+((c[b+8>>2]|0)-o|0);s=+((c[i+8>>2]|0)-o|0);o=~~(la*X-l*s);k=~~(ma*s-oa*X);t=b+32|0;X=+g[h+32>>2];s=+g[t>>2]-X;v=i+32|0;m=+g[v>>2]-X;n=la*s-l*m;s=ma*m-oa*s;$=h+36|0;g[$>>2]=X*+(c[h+12>>2]|0);da=h+40|0;g[da>>2]=+(c[h+16>>2]|0)*X;X=+g[t>>2];t=b+36|0;g[t>>2]=+(c[b+12>>2]|0)*X;q=b+40|0;g[q>>2]=+(c[b+16>>2]|0)*X;X=+g[v>>2];m=+(c[i+12>>2]|0)*X;g[i+36>>2]=m;X=+(c[i+16>>2]|0)*X;g[i+40>>2]=X;na=+g[$>>2];r=+g[t>>2]-na;na=m-na;m=la*r-l*na;r=ma*na-oa*r;na=+g[da>>2];p=+g[q>>2]-na;na=X-na;l=la*p-l*na;p=ma*na-oa*p;q=a+8|0;da=(c[a+20>>2]|0)+(_(u,c[q>>2]|0)|0)|0;t=a|0;$=(c[a+16>>2]|0)+((_(c[t>>2]|0,u)|0)<<2)|0;v=c[a+40>>2]|0;u=c[a+44>>2]|0;w=c[a+48>>2]|0;y=c[a+52>>2]|0;x=sa>0.0;a=x?i:b;A=x?b:i;z=x&1;Q=0.0;P=0.0;U=0.0;O=0.0;N=0.0;W=0.0;M=0.0;L=0.0;X=0.0;J=0;I=0;Y=0;R=0;S=0;F=0;D=0;Z=0;C=0;ca=0;B=0;E=0;G=0;H=0;K=0;do{do{if((B|0)==0){C=c[e>>2]|0;aa=(c[d>>2]|0)-C|0;V=1;E=a;T=h;H=A;K=h;f=9}else{E=x?E:i;G=x?G:b;H=x?i:H;K=x?b:K;aa=(c[j>>2]|0)-(c[d>>2]|0)+1|0;if(x){V=z;break}V=z;T=G;C=c[G+4>>2]|0;f=9}}while(0);if((f|0)==9){f=0;C=(c[E+4>>2]|0)-C|0;D=T|0;if((C|0)>0){Z=c[D>>2]|0;C=((c[E>>2]|0)-Z<<16|0)/(C|0)|0}else{C=0;Z=c[D>>2]|0}F=C>>16;J=(_(F,o)|0)+k|0;Q=+(F|0);M=s+n*Q;O=r+m*Q;Q=p+l*Q;ca=0;C=C&65535;D=F;F=F+1|0;Y=c[T+8>>2]|0;I=J;J=J+o|0;X=+g[T+32>>2];L=M;M=n+M;W=+g[T+36>>2];N=O;O=m+O;U=+g[T+40>>2];P=Q;Q=l+Q;G=T}if((V|0)!=0){S=K|0;R=(c[H+4>>2]|0)-(c[K+4>>2]|0)|0;if((R|0)>0){S=c[S>>2]|0;R=((c[H>>2]|0)-S<<16|0)/(R|0)|0}else{R=0;S=c[S>>2]|0}S=S<<16}if((aa|0)>0){T=_(R,aa)|0;V=S;while(1){aa=aa-1|0;ea=V>>16;ia=ea-Z|0;ba=da;ja=da+(Z<<2)|0;ha=$+(Z<<2)|0;if((ia|0)>2){ga=ea-3-Z&-4;fa=ea-4-Z-ga|0;ea=Z+ga|0;ga=_(o,ga+4|0)|0;la=U;na=W;ma=X;ka=Y;while(1){do{if(!(ka>>>0<(c[ha>>2]|0)>>>0)){sa=1.0/ma;oa=na*sa;qa=~~oa;sa=la*sa;ra=~~sa;ua=(ra&y)<<u;va=qa&w;pa=c[v+((ua|va)<<2)>>2]|0;ta=pa&-16777216;if((ta|0)==0){break}xa=qa+1&w;ua=c[v+((ua|xa)<<2)>>2]|0;ya=(ra+1&y)<<u;wa=c[v+((ya|va)<<2)>>2]|0;va=c[v+((ya|xa)<<2)>>2]|0;if(!(ua>>>0>16777215>>>0&wa>>>0>16777215>>>0&va>>>0>16777215>>>0)){break}qa=~~((oa- +(qa>>>0>>>0))*16.0);xa=16-qa|0;ra=~~((sa- +(ra>>>0>>>0))*16.0);ya=16-ra|0;c[ja>>2]=((_((_(va&65280,qa)|0)+(_(wa&65280,xa)|0)|0,ra)|0)+(_((_(ua&65280,qa)|0)+(_(xa,pa&65280)|0)|0,ya)|0)|0)>>>8&65280|ta|((_((_(va&16711935,qa)|0)+(_(wa&16711935,xa)|0)|0,ra)|0)+(_((_(ua&16711935,qa)|0)+(_(xa,pa&16711935)|0)|0,ya)|0)|0)>>>8&16711935;c[ha>>2]=ka}}while(0);ka=ka+o|0;na=m+na;la=l+la;oa=n+ma;pa=ha+4|0;do{if(!(ka>>>0<(c[pa>>2]|0)>>>0)){sa=1.0/oa;ma=na*sa;qa=~~ma;sa=la*sa;ra=~~sa;va=(ra&y)<<u;wa=qa&w;ta=c[v+((va|wa)<<2)>>2]|0;ua=ta&-16777216;if((ua|0)==0){break}xa=qa+1&w;va=c[v+((va|xa)<<2)>>2]|0;ya=(ra+1&y)<<u;wa=c[v+((ya|wa)<<2)>>2]|0;xa=c[v+((ya|xa)<<2)>>2]|0;if(!(va>>>0>16777215>>>0&wa>>>0>16777215>>>0&xa>>>0>16777215>>>0)){break}za=~~((ma- +(qa>>>0>>>0))*16.0);qa=16-za|0;ra=~~((sa- +(ra>>>0>>>0))*16.0);ya=16-ra|0;c[ja+4>>2]=((_((_(xa&65280,za)|0)+(_(wa&65280,qa)|0)|0,ra)|0)+(_((_(va&65280,za)|0)+(_(qa,ta&65280)|0)|0,ya)|0)|0)>>>8&65280|ua|((_((_(xa&16711935,za)|0)+(_(wa&16711935,qa)|0)|0,ra)|0)+(_((_(va&16711935,za)|0)+(_(qa,ta&16711935)|0)|0,ya)|0)|0)>>>8&16711935;c[pa>>2]=ka}}while(0);ka=ka+o|0;na=m+na;ma=l+la;la=n+oa;ta=ha+8|0;do{if(!(ka>>>0<(c[ta>>2]|0)>>>0)){sa=1.0/la;oa=na*sa;ra=~~oa;sa=ma*sa;qa=~~sa;va=(qa&y)<<u;wa=ra&w;ua=c[v+((va|wa)<<2)>>2]|0;pa=ua&-16777216;if((pa|0)==0){break}xa=ra+1&w;va=c[v+((va|xa)<<2)>>2]|0;za=(qa+1&y)<<u;wa=c[v+((za|wa)<<2)>>2]|0;xa=c[v+((za|xa)<<2)>>2]|0;if(!(va>>>0>16777215>>>0&wa>>>0>16777215>>>0&xa>>>0>16777215>>>0)){break}ra=~~((oa- +(ra>>>0>>>0))*16.0);ya=16-ra|0;qa=~~((sa- +(qa>>>0>>>0))*16.0);za=16-qa|0;c[ja+8>>2]=((_((_(xa&65280,ra)|0)+(_(wa&65280,ya)|0)|0,qa)|0)+(_((_(va&65280,ra)|0)+(_(ya,ua&65280)|0)|0,za)|0)|0)>>>8&65280|pa|((_((_(xa&16711935,ra)|0)+(_(wa&16711935,ya)|0)|0,qa)|0)+(_((_(va&16711935,ra)|0)+(_(ya,ua&16711935)|0)|0,za)|0)|0)>>>8&16711935;c[ta>>2]=ka}}while(0);ka=ka+o|0;na=m+na;ma=l+ma;oa=n+la;pa=ha+12|0;do{if(!(ka>>>0<(c[pa>>2]|0)>>>0)){sa=1.0/oa;la=na*sa;ra=~~la;sa=ma*sa;ta=~~sa;va=(ta&y)<<u;wa=ra&w;ua=c[v+((va|wa)<<2)>>2]|0;qa=ua&-16777216;if((qa|0)==0){break}za=ra+1&w;va=c[v+((va|za)<<2)>>2]|0;ya=(ta+1&y)<<u;xa=c[v+((ya|wa)<<2)>>2]|0;wa=c[v+((ya|za)<<2)>>2]|0;if(!(va>>>0>16777215>>>0&xa>>>0>16777215>>>0&wa>>>0>16777215>>>0)){break}ra=~~((la- +(ra>>>0>>>0))*16.0);ya=16-ra|0;ta=~~((sa- +(ta>>>0>>>0))*16.0);za=16-ta|0;c[ja+12>>2]=((_((_(wa&65280,ra)|0)+(_(xa&65280,ya)|0)|0,ta)|0)+(_((_(va&65280,ra)|0)+(_(ya,ua&65280)|0)|0,za)|0)|0)>>>8&65280|qa|((_((_(wa&16711935,ra)|0)+(_(xa&16711935,ya)|0)|0,ta)|0)+(_((_(va&16711935,ra)|0)+(_(ya,ua&16711935)|0)|0,za)|0)|0)>>>8&16711935;c[pa>>2]=ka}}while(0);na=m+na;la=l+ma;ma=n+oa;ia=ia-4|0;if((ia|0)>2){ka=ka+o|0;ha=ha+16|0;ja=ja+16|0}else{break}}ga=Y+ga|0;ha=$+(ea+4<<2)|0;ja=da+(ea+4<<2)|0}else{la=U;na=W;ma=X;ga=Y;fa=ia}if((fa|0)>-1){da=ga;while(1){do{if(!(da>>>0<(c[ha>>2]|0)>>>0)){sa=1.0/ma;oa=na*sa;ea=~~oa;sa=la*sa;ga=~~sa;pa=(ga&y)<<u;qa=ea&w;ia=c[v+((pa|qa)<<2)>>2]|0;ka=ia&-16777216;if((ka|0)==0){break}ra=ea+1&w;pa=c[v+((pa|ra)<<2)>>2]|0;za=(ga+1&y)<<u;qa=c[v+((za|qa)<<2)>>2]|0;ra=c[v+((za|ra)<<2)>>2]|0;if(!(pa>>>0>16777215>>>0&qa>>>0>16777215>>>0&ra>>>0>16777215>>>0)){break}xa=~~((oa- +(ea>>>0>>>0))*16.0);ya=16-xa|0;wa=~~((sa- +(ga>>>0>>>0))*16.0);za=16-wa|0;c[ja>>2]=((_((_(ra&65280,xa)|0)+(_(qa&65280,ya)|0)|0,wa)|0)+(_((_(pa&65280,xa)|0)+(_(ya,ia&65280)|0)|0,za)|0)|0)>>>8&65280|ka|((_((_(ra&16711935,xa)|0)+(_(qa&16711935,ya)|0)|0,wa)|0)+(_((_(pa&16711935,xa)|0)+(_(ya,ia&16711935)|0)|0,za)|0)|0)>>>8&16711935;c[ha>>2]=da}}while(0);if((fa|0)>0){la=l+la;na=m+na;ma=n+ma;da=da+o|0;ha=ha+4|0;fa=fa-1|0;ja=ja+4|0}else{break}}}ca=ca+C|0;da=(ca|0)>0;ca=da?ca-65536|0:ca;Z=(da?F:D)+Z|0;Y=(da?J:I)+Y|0;X=X+(da?M:L);W=W+(da?O:N);U=U+(da?Q:P);da=ba+(c[q>>2]|0)|0;$=$+(c[t>>2]<<2)|0;if((aa|0)>0){V=V+R|0}else{break}}S=S+T|0}B=B+1|0;}while((B|0)<2);return}function ne(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0.0,Q=0.0,R=0.0,S=0.0,T=0.0,U=0.0,V=0.0;h=(c[d+4>>2]|0)<(c[b+4>>2]|0);g=h?b:d;b=h?d:b;m=c[e+4>>2]|0;h=c[b+4>>2]|0;if((m|0)<(h|0)){d=e;i=h}else{j=(m|0)<(c[g+4>>2]|0);i=j?e:g;d=b;b=i;g=j?g:e;i=c[i+4>>2]|0;m=h}O=c[d>>2]|0;P=+((c[b>>2]|0)-O|0);e=b+4|0;h=d+4|0;R=+(i-m|0);Q=+((c[g>>2]|0)-O|0);i=g+4|0;S=+((c[i>>2]|0)-m|0);T=P*S-R*Q;if(T==0.0){return}T=1.0/T;j=c[d+8>>2]|0;U=+((c[b+8>>2]|0)-j|0);V=+((c[g+8>>2]|0)-j|0);j=~~(S*T*U-R*T*V);k=~~(P*T*V-Q*T*U);l=c[a>>2]|0;B=(c[a+16>>2]|0)+((_(l,m)|0)<<2)|0;n=T>0.0;m=n?g:b;o=n?b:g;a=a+56|0;p=n&1;q=0;x=0;y=0;z=0;I=0;v=0;G=0;u=0;t=0;D=0;A=0;E=0;w=0;s=0;r=0;do{do{if((q|0)==0){r=c[h>>2]|0;F=1;H=(c[e>>2]|0)-r|0;x=m;C=d;z=o;w=d;f=9}else{x=n?x:g;y=n?y:b;z=n?g:z;w=n?b:w;H=(c[i>>2]|0)-(c[e>>2]|0)+1|0;if(n){F=p;break}F=p;C=y;r=c[y+4>>2]|0;f=9}}while(0);if((f|0)==9){f=0;s=(c[x+4>>2]|0)-r|0;r=C|0;if((s|0)>0){G=c[r>>2]|0;v=((c[x>>2]|0)-G<<16|0)/(s|0)|0}else{v=0;G=c[r>>2]|0}u=v>>16;s=(_(u,j)|0)+k|0;r=s+j|0;E=c[C+8>>2]|0;t=u+1|0;v=v&65535;I=0;y=C}if((F|0)!=0){C=w|0;A=(c[z+4>>2]|0)-(c[w+4>>2]|0)|0;if((A|0)>0){C=c[C>>2]|0;A=((c[z>>2]|0)-C<<16|0)/(A|0)|0}else{A=0;C=c[C>>2]|0}D=C<<16}if((H|0)>0){C=_(A,H)|0;F=D;while(1){H=H-1|0;J=F>>16;M=J-G|0;N=B+(G<<2)|0;if((M|0)>2){O=J-3-G&-4;L=J-4-G-O|0;K=G+O|0;J=_(j,O+4|0)|0;O=E;while(1){if(!(O>>>0<(c[N>>2]|0)>>>0)){c[a>>2]=(c[a>>2]|0)+1}O=O+j|0;if(!(O>>>0<(c[N+4>>2]|0)>>>0)){c[a>>2]=(c[a>>2]|0)+1}O=O+j|0;if(!(O>>>0<(c[N+8>>2]|0)>>>0)){c[a>>2]=(c[a>>2]|0)+1}O=O+j|0;if(!(O>>>0<(c[N+12>>2]|0)>>>0)){c[a>>2]=(c[a>>2]|0)+1}M=M-4|0;if((M|0)>2){N=N+16|0;O=O+j|0}else{break}}N=B+(K+4<<2)|0;J=E+J|0}else{L=M;J=E}if((L|0)>-1){while(1){if(!(J>>>0<(c[N>>2]|0)>>>0)){c[a>>2]=(c[a>>2]|0)+1}if((L|0)>0){L=L-1|0;N=N+4|0;J=J+j|0}else{break}}}I=I+v|0;J=(I|0)>0;I=J?I-65536|0:I;E=E+(J?r:s)|0;G=(J?t:u)+G|0;B=B+(l<<2)|0;if((H|0)>0){F=A+F|0}else{break}}D=D+C|0}q=q+1|0;}while((q|0)<2);return}function oe(a){a=a|0;g[a>>2]=1.0;kf(a+4|0,0,16)|0;g[a+20>>2]=1.0;kf(a+24|0,0,16)|0;g[a+40>>2]=1.0;kf(a+44|0,0,16)|0;g[a+60>>2]=1.0;return}function pe(a){a=a|0;do{if(+g[a>>2]!=1.0){a=0}else{if(+g[a+4>>2]!=0.0){a=0;break}if(+g[a+8>>2]!=0.0){a=0;break}if(+g[a+12>>2]!=0.0){a=0;break}if(+g[a+16>>2]!=0.0){a=0;break}if(+g[a+20>>2]!=1.0){a=0;break}if(+g[a+24>>2]!=0.0){a=0;break}if(+g[a+28>>2]!=0.0){a=0;break}if(+g[a+32>>2]!=0.0){a=0;break}if(+g[a+36>>2]!=0.0){a=0;break}if(+g[a+40>>2]!=1.0){a=0;break}if(+g[a+44>>2]!=0.0){a=0;break}if(+g[a+48>>2]!=0.0){a=0;break}if(+g[a+52>>2]!=0.0){a=0;break}if(+g[a+56>>2]!=0.0){a=0;break}if(+g[a+60>>2]!=1.0){a=0;break}a=1}}while(0);return a|0}function qe(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,h=0,i=0;d=0;do{i=b+(d<<4)|0;h=b+(d<<4)+4|0;f=b+(d<<4)+8|0;e=b+(d<<4)+12|0;g[a+(d<<4)>>2]=+g[i>>2]*+g[c>>2]+0.0+ +g[h>>2]*+g[c+16>>2]+ +g[f>>2]*+g[c+32>>2]+ +g[e>>2]*+g[c+48>>2];g[a+(d<<4)+4>>2]=+g[i>>2]*+g[c+4>>2]+0.0+ +g[h>>2]*+g[c+20>>2]+ +g[f>>2]*+g[c+36>>2]+ +g[e>>2]*+g[c+52>>2];g[a+(d<<4)+8>>2]=+g[i>>2]*+g[c+8>>2]+0.0+ +g[h>>2]*+g[c+24>>2]+ +g[f>>2]*+g[c+40>>2]+ +g[e>>2]*+g[c+56>>2];g[a+(d<<4)+12>>2]=+g[i>>2]*+g[c+12>>2]+0.0+ +g[h>>2]*+g[c+28>>2]+ +g[f>>2]*+g[c+44>>2]+ +g[e>>2]*+g[c+60>>2];d=d+1|0;}while((d|0)<4);return}function re(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0.0,h=0.0,j=0.0,k=0.0;c=i;i=i+64|0;d=c|0;jf(d|0,a|0,64)|0;e=0;do{k=+g[d+(e<<4)>>2];j=+g[d+(e<<4)+4>>2];h=+g[d+(e<<4)+8>>2];f=+g[d+(e<<4)+12>>2];g[a+(e<<4)>>2]=k*+g[b>>2]+0.0+j*+g[b+16>>2]+h*+g[b+32>>2]+f*+g[b+48>>2];g[a+(e<<4)+4>>2]=k*+g[b+4>>2]+0.0+j*+g[b+20>>2]+h*+g[b+36>>2]+f*+g[b+52>>2];g[a+(e<<4)+8>>2]=k*+g[b+8>>2]+0.0+j*+g[b+24>>2]+h*+g[b+40>>2]+f*+g[b+56>>2];g[a+(e<<4)+12>>2]=k*+g[b+12>>2]+0.0+j*+g[b+28>>2]+h*+g[b+44>>2]+f*+g[b+60>>2];e=e+1|0;}while((e|0)<4);i=c;return}function se(a,b){a=a|0;b=b|0;jf(a|0,b|0,64)|0;return}function te(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0;f=c|0;e=c+4|0;d=c+8|0;c=c+12|0;g[a>>2]=+g[b>>2]*+g[f>>2]+ +g[b+4>>2]*+g[e>>2]+ +g[b+8>>2]*+g[d>>2]+ +g[b+12>>2]*+g[c>>2];g[a+4>>2]=+g[b+16>>2]*+g[f>>2]+ +g[b+20>>2]*+g[e>>2]+ +g[b+24>>2]*+g[d>>2]+ +g[b+28>>2]*+g[c>>2];g[a+8>>2]=+g[b+32>>2]*+g[f>>2]+ +g[b+36>>2]*+g[e>>2]+ +g[b+40>>2]*+g[d>>2]+ +g[b+44>>2]*+g[c>>2];g[a+12>>2]=+g[b+48>>2]*+g[f>>2]+ +g[b+52>>2]*+g[e>>2]+ +g[b+56>>2]*+g[d>>2]+ +g[b+60>>2]*+g[c>>2];return}function ue(a,b){a=a|0;b=b|0;g[a>>2]=+g[b>>2];g[a+4>>2]=+g[b+16>>2];g[a+8>>2]=+g[b+32>>2];g[a+12>>2]=+g[b+48>>2];g[a+16>>2]=+g[b+4>>2];g[a+20>>2]=+g[b+20>>2];g[a+24>>2]=+g[b+36>>2];g[a+28>>2]=+g[b+52>>2];g[a+32>>2]=+g[b+8>>2];g[a+36>>2]=+g[b+24>>2];g[a+40>>2]=+g[b+40>>2];g[a+44>>2]=+g[b+56>>2];g[a+48>>2]=+g[b+12>>2];g[a+52>>2]=+g[b+28>>2];g[a+56>>2]=+g[b+44>>2];g[a+60>>2]=+g[b+60>>2];return}function ve(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,h=0,i=0,j=0.0,k=0,l=0.0,m=0,n=0,o=0,p=0;d=_(c,c)|0;if((d|0)!=0){kf(a|0,0,((d|0)>1?d<<2:4)|0)|0}d=(c|0)>0;if(d){e=0}else{m=0;return m|0}do{g[a+((_(e,c)|0)+e<<2)>>2]=1.0;e=e+1|0;}while((e|0)<(c|0));if(d){d=0}else{m=0;return m|0}while(1){e=_(d,c)|0;j=+g[b+(e+d<<2)>>2];h=d+1|0;f=(h|0)<(c|0);if(f){i=d;k=h;do{l=+g[b+((_(k,c)|0)+d<<2)>>2];m=+N(+l)>+N(+j);i=m?k:i;j=m?l:j;k=k+1|0;}while((k|0)<(c|0))}else{i=d}if(j==0.0){a=1;c=19;break}if((i|0)!=(d|0)){k=_(i,c)|0;i=0;do{n=i+e|0;p=b+(n<<2)|0;l=+g[p>>2];m=i+k|0;o=b+(m<<2)|0;g[p>>2]=+g[o>>2];g[o>>2]=l;n=a+(n<<2)|0;l=+g[n>>2];m=a+(m<<2)|0;g[n>>2]=+g[m>>2];g[m>>2]=l;i=i+1|0;}while((i|0)<(c|0))}j=1.0/j;i=0;while(1){p=i+e|0;o=b+(p<<2)|0;g[o>>2]=j*+g[o>>2];p=a+(p<<2)|0;g[p>>2]=j*+g[p>>2];i=i+1|0;if((i|0)>=(c|0)){k=0;break}}do{if((k|0)!=(d|0)){i=_(k,c)|0;j=+g[b+(i+d<<2)>>2];m=0;do{o=m+e|0;p=m+i|0;n=b+(p<<2)|0;g[n>>2]=+g[n>>2]-j*+g[b+(o<<2)>>2];p=a+(p<<2)|0;g[p>>2]=+g[p>>2]-j*+g[a+(o<<2)>>2];m=m+1|0;}while((m|0)<(c|0))}k=k+1|0;}while((k|0)<(c|0));if(f){d=h}else{a=0;c=19;break}}if((c|0)==19){return a|0}return 0}function we(a,b){a=a|0;b=b|0;var c=0,d=0;c=i;i=i+64|0;d=c|0;jf(d|0,b|0,64)|0;ve(a|0,d|0,4)|0;i=c;return}function xe(a,b,c){a=a|0;b=+b;c=c|0;var d=0,e=0.0;c=c+1|0;c=(c|0)>2?0:c;d=c+1|0;d=(d|0)>2?0:d;e=+R(b);b=+Q(b);g[a>>2]=1.0;kf(a+4|0,0,16)|0;g[a+20>>2]=1.0;kf(a+24|0,0,16)|0;g[a+40>>2]=1.0;kf(a+44|0,0,16)|0;g[a+60>>2]=1.0;g[a+(c<<4)+(c<<2)>>2]=b;g[a+(c<<4)+(d<<2)>>2]=-0.0-e;g[a+(d<<4)+(c<<2)>>2]=e;g[a+(d<<4)+(d<<2)>>2]=b;return}function ye(a){a=a|0;var b=0.0,c=0,d=0.0,e=0,f=0.0,h=0.0;c=a|0;b=+g[c>>2];e=a+4|0;d=+g[e>>2];a=a+8|0;h=+g[a>>2];f=+O(b*b+d*d+h*h);if(f==0.0){a=1;return a|0}g[c>>2]=b/f;g[e>>2]=d/f;g[a>>2]=h/f;a=0;return a|0}function ze(a,b,c,d){a=a|0;b=+b;c=+c;d=+d;g[a>>2]=b;g[a+4>>2]=c;g[a+8>>2]=d;return}function Ae(a,b,c,d,e){a=a|0;b=+b;c=+c;d=+d;e=+e;g[a>>2]=b;g[a+4>>2]=c;g[a+8>>2]=d;g[a+12>>2]=e;return}function Be(a,b,e,f){a=a|0;b=b|0;e=e|0;f=f|0;e=_(f,e)|0;if((e|0)>0){f=0}else{return}while(1){c[a+(f<<2)>>2]=(d[b+1|0]|0)<<8|(d[b]|0)<<16|(d[b+2|0]|0)|(d[b+3|0]|0)<<24;f=f+1|0;if((f|0)<(e|0)){b=b+4|0}else{break}}return}function Ce(b,c,d,e,f,g){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;h=~~(+(f<<16|0)/+(c|0));j=~~(+(g<<16|0)/+(d|0));if(!((d|0)>0&(c|0)>0)){return}i=c<<2;g=0;k=0;while(1){l=_(g>>16,f)|0;m=0;n=b;o=0;while(1){p=(m>>16)+l<<2;a[n]=a[e+p|0]|0;a[n+1|0]=a[e+(p|1)|0]|0;a[n+2|0]=a[e+(p|2)|0]|0;a[n+3|0]=a[e+(p|3)|0]|0;o=o+1|0;if((o|0)<(c|0)){m=m+h|0;n=n+4|0}else{break}}k=k+1|0;if((k|0)<(d|0)){g=g+j|0;b=b+i|0}else{break}}return}function De(a){a=a|0;do{if(a>>>0<9>>>0){a=8}else{if(a>>>0<17>>>0){a=16;break}if(a>>>0<33>>>0){a=32;break}if(a>>>0<65>>>0){a=64;break}if(a>>>0<129>>>0){a=128;break}if(a>>>0<257>>>0){a=256;break}a=a>>>0<513>>>0?512:1024}}while(0);return a|0}function Ee(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0;if((d|0)==32){h=3}else if((d|0)==24){h=4}else{h=1}i=df(20)|0;d=i;l=f<<2;g=i;c[g>>2]=df(l)|0;j=i+4|0;c[j>>2]=df(l)|0;a:do{if((f|0)>0){if((e|0)==0){e=0;while(1){k=Zd(a,b,h,0,0,0,0)|0;if((k|0)==0){break}c[(c[g>>2]|0)+(e<<2)>>2]=k;c[(c[j>>2]|0)+(e<<2)>>2]=c[k+20>>2];e=e+1|0;if((e|0)>=(f|0)){break a}}l=c[m>>2]|0;ya(2024,34,1,l|0)|0;Ba(1);return 0}else{k=0;while(1){l=Zd(a,b,h,0,0,0,c[e+(k<<2)>>2]|0)|0;if((l|0)==0){break}c[(c[g>>2]|0)+(k<<2)>>2]=l;c[(c[j>>2]|0)+(k<<2)>>2]=c[l+20>>2];k=k+1|0;if((k|0)>=(f|0)){break a}}l=c[m>>2]|0;ya(2024,34,1,l|0)|0;Ba(1);return 0}}}while(0);l=c[736]|0;c[736]=l+1;if((l|0)!=0){l=i+12|0;c[l>>2]=a;l=i+16|0;c[l>>2]=b;l=i+8|0;c[l>>2]=f;return d|0}Ic(c[c[g>>2]>>2]|0);l=i+12|0;c[l>>2]=a;l=i+16|0;c[l>>2]=b;l=i+8|0;c[l>>2]=f;return d|0}function Fe(a){a=a|0;var b=0,d=0,e=0,f=0;d=a+8|0;b=a|0;f=c[b>>2]|0;if((c[d>>2]|0)>0){e=0;do{_d(c[f+(e<<2)>>2]|0);e=e+1|0;f=c[b>>2]|0}while((e|0)<(c[d>>2]|0))}cf(f);cf(c[a+4>>2]|0);cf(a);f=(c[736]|0)-1|0;c[736]=f;if((f|0)!=0){return}Jc();return}function Ge(a,b){a=a|0;b=b|0;var d=0;d=rc()|0;c[d>>2]=c[(c[a>>2]|0)+(b<<2)>>2];return}function He(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=a+8|0;if((c[f>>2]|0)<=0){return}a=a|0;if((e|0)==0){e=0;do{$d(c[(c[a>>2]|0)+(e<<2)>>2]|0,0,b,d);e=e+1|0;}while((e|0)<(c[f>>2]|0));return}else{g=0;do{$d(c[(c[a>>2]|0)+(g<<2)>>2]|0,c[e+(g<<2)>>2]|0,b,d);g=g+1|0;}while((g|0)<(c[f>>2]|0));return}}function Ie(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;ae(c[(c[a>>2]|0)+(b<<2)>>2]|0,d,e);return}function Je(a,b){a=a|0;b=b|0;return}function Ke(a,b){a=a|0;b=b|0;return}function Le(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0,k=0,l=0.0,m=0;e=i;i=i+48|0;h=e|0;d=e+24|0;f=c[a+3116>>2]|0;b=c[b+4>>2]|0;if((f&2|0)!=0){m=c[a+3096>>2]|0;k=_((c[a+3100>>2]|0)+m|0,b)|0;j=c[a+3092>>2]|0;g[h+4>>2]=+g[j+(k<<2)>>2];g[h+8>>2]=+g[j+(k+1<<2)>>2];g[h+12>>2]=+g[j+(k+2<<2)>>2];if((m|0)>3){l=+g[j+(k+3<<2)>>2]}else{l=1.0}g[h+16>>2]=l;Ec(a,h|0)}if((f&4|0)!=0){m=_((c[a+3088>>2]|0)+3|0,b)|0;k=c[a+3084>>2]|0;g[a+3012>>2]=+g[k+(m<<2)>>2];g[a+3016>>2]=+g[k+(m+1<<2)>>2];g[a+3020>>2]=+g[k+(m+2<<2)>>2];g[a+3024>>2]=0.0}if((f&8|0)!=0){h=c[a+3108>>2]|0;k=_((c[a+3112>>2]|0)+h|0,b)|0;j=c[a+3104>>2]|0;g[a+3028>>2]=+g[j+(k<<2)>>2];g[a+3032>>2]=+g[j+(k+1<<2)>>2];do{if((h|0)>2){g[a+3036>>2]=+g[j+(k+2<<2)>>2];if((h|0)<=3){l=1.0;break}l=+g[j+(k+3<<2)>>2]}else{g[a+3036>>2]=0.0;l=1.0}}while(0);g[a+3040>>2]=l}if((f&1|0)==0){i=e;return}f=c[a+3076>>2]|0;h=_((c[a+3080>>2]|0)+f|0,b)|0;b=c[a+3072>>2]|0;g[d+4>>2]=+g[b+(h<<2)>>2];g[d+8>>2]=+g[b+(h+1<<2)>>2];do{if((f|0)>2){g[d+12>>2]=+g[b+(h+2<<2)>>2];if((f|0)<=3){l=1.0;break}l=+g[b+(h+3<<2)>>2]}else{g[d+12>>2]=0.0;l=1.0}}while(0);g[d+16>>2]=l;Gc(a,d|0);i=e;return}function Me(a){a=a|0;var b=0,d=0;b=i;i=i+8|0;d=b|0;c[d>>2]=44;c[d+4>>2]=a;sc(d|0);i=b;return}function Ne(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0.0;f=i;i=i+56|0;S=f|0;N=f+8|0;s=f+32|0;O=c[a+3116>>2]|0;e=c[b+8>>2]|0;d=c[b+12>>2]|0;c[S+4>>2]=c[b+4>>2];b=S|0;Fc(a,b);if((d|0)<=0){Hc(a,b);i=f;return}h=(O&4|0)==0;j=(O&8|0)==0;k=(O&1|0)==0;p=a+3076|0;q=a+3080|0;r=a+3072|0;n=s+4|0;l=s+8|0;o=s+12|0;m=s+16|0;t=s|0;v=a+3108|0;w=a+3112|0;x=a+3104|0;y=a+3028|0;s=a+3032|0;u=a+3036|0;z=a+3040|0;A=a+3088|0;B=a+3084|0;C=a+3012|0;D=a+3016|0;E=a+3020|0;F=a+3024|0;M=a+3096|0;L=a+3100|0;J=a+3092|0;I=N+4|0;H=N+8|0;G=N+12|0;K=N+16|0;N=N|0;if((O&2|0)==0){G=0;do{H=G+e|0;if(!h){S=_((c[A>>2]|0)+3|0,H)|0;R=c[B>>2]|0;g[C>>2]=+g[R+(S<<2)>>2];g[D>>2]=+g[R+(S+1<<2)>>2];g[E>>2]=+g[R+(S+2<<2)>>2];g[F>>2]=0.0}if(!j){K=c[v>>2]|0;I=_((c[w>>2]|0)+K|0,H)|0;J=c[x>>2]|0;g[y>>2]=+g[J+(I<<2)>>2];g[s>>2]=+g[J+(I+1<<2)>>2];do{if((K|0)>2){g[u>>2]=+g[J+(I+2<<2)>>2];if((K|0)<=3){T=1.0;break}T=+g[J+(I+3<<2)>>2]}else{g[u>>2]=0.0;T=1.0}}while(0);g[z>>2]=T}if(!k){I=c[p>>2]|0;H=_((c[q>>2]|0)+I|0,H)|0;J=c[r>>2]|0;g[n>>2]=+g[J+(H<<2)>>2];g[l>>2]=+g[J+(H+1<<2)>>2];do{if((I|0)>2){g[o>>2]=+g[J+(H+2<<2)>>2];if((I|0)<=3){T=1.0;break}T=+g[J+(H+3<<2)>>2]}else{g[o>>2]=0.0;T=1.0}}while(0);g[m>>2]=T;Gc(a,t)}G=G+1|0;}while((G|0)<(d|0));Hc(a,b);i=f;return}else{O=0}do{P=O+e|0;S=c[M>>2]|0;R=_((c[L>>2]|0)+S|0,P)|0;Q=c[J>>2]|0;g[I>>2]=+g[Q+(R<<2)>>2];g[H>>2]=+g[Q+(R+1<<2)>>2];g[G>>2]=+g[Q+(R+2<<2)>>2];if((S|0)>3){T=+g[Q+(R+3<<2)>>2]}else{T=1.0}g[K>>2]=T;Ec(a,N);if(!h){S=_((c[A>>2]|0)+3|0,P)|0;R=c[B>>2]|0;g[C>>2]=+g[R+(S<<2)>>2];g[D>>2]=+g[R+(S+1<<2)>>2];g[E>>2]=+g[R+(S+2<<2)>>2];g[F>>2]=0.0}if(!j){R=c[v>>2]|0;S=_((c[w>>2]|0)+R|0,P)|0;Q=c[x>>2]|0;g[y>>2]=+g[Q+(S<<2)>>2];g[s>>2]=+g[Q+(S+1<<2)>>2];do{if((R|0)>2){g[u>>2]=+g[Q+(S+2<<2)>>2];if((R|0)<=3){T=1.0;break}T=+g[Q+(S+3<<2)>>2]}else{g[u>>2]=0.0;T=1.0}}while(0);g[z>>2]=T}if(!k){Q=c[p>>2]|0;R=_((c[q>>2]|0)+Q|0,P)|0;P=c[r>>2]|0;g[n>>2]=+g[P+(R<<2)>>2];g[l>>2]=+g[P+(R+1<<2)>>2];do{if((Q|0)>2){g[o>>2]=+g[P+(R+2<<2)>>2];if((Q|0)<=3){T=1.0;break}T=+g[P+(R+3<<2)>>2]}else{g[o>>2]=0.0;T=1.0}}while(0);g[m>>2]=T;Gc(a,t)}O=O+1|0;}while((O|0)<(d|0));Hc(a,b);i=f;return}function Oe(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;i=i+16|0;f=e|0;c[f>>2]=45;c[f+4>>2]=a;c[f+8>>2]=b;c[f+12>>2]=d;sc(f|0);i=e;return}function Pe(a,b){a=a|0;b=b|0;var d=0,f=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0.0;j=i;i=i+56|0;W=j|0;R=j+8|0;w=j+32|0;o=c[a+3116>>2]|0;d=c[b+8>>2]|0;k=c[b+12>>2]|0;h=c[b+16>>2]|0;f=h;c[W+4>>2]=c[b+4>>2];b=W|0;Fc(a,b);if((d|0)<=0){Hc(a,b);i=j;return}n=(k|0)==5125;k=(o&2|0)==0;l=(o&4|0)==0;m=(o&8|0)==0;s=(o&1|0)==0;v=a+3076|0;o=a+3080|0;p=a+3072|0;q=w+4|0;r=w+8|0;u=w+12|0;t=w+16|0;y=w|0;B=a+3108|0;C=a+3112|0;D=a+3104|0;E=a+3028|0;F=a+3032|0;A=a+3036|0;z=a+3040|0;N=a+3088|0;I=a+3084|0;J=a+3012|0;K=a+3016|0;L=a+3020|0;M=a+3024|0;Q=a+3096|0;P=a+3100|0;w=a+3092|0;H=R+4|0;G=R+8|0;x=R+12|0;O=R+16|0;R=R|0;S=0;do{if(n){T=c[f+(S<<2)>>2]|0}else{T=e[h+(S<<1)>>1]|0}if(!k){W=c[Q>>2]|0;U=_((c[P>>2]|0)+W|0,T)|0;V=c[w>>2]|0;g[H>>2]=+g[V+(U<<2)>>2];g[G>>2]=+g[V+(U+1<<2)>>2];g[x>>2]=+g[V+(U+2<<2)>>2];if((W|0)>3){X=+g[V+(U+3<<2)>>2]}else{X=1.0}g[O>>2]=X;Ec(a,R)}if(!l){W=_((c[N>>2]|0)+3|0,T)|0;V=c[I>>2]|0;g[J>>2]=+g[V+(W<<2)>>2];g[K>>2]=+g[V+(W+1<<2)>>2];g[L>>2]=+g[V+(W+2<<2)>>2];g[M>>2]=0.0}if(!m){U=c[B>>2]|0;V=_((c[C>>2]|0)+U|0,T)|0;W=c[D>>2]|0;g[E>>2]=+g[W+(V<<2)>>2];g[F>>2]=+g[W+(V+1<<2)>>2];do{if((U|0)>2){g[A>>2]=+g[W+(V+2<<2)>>2];if((U|0)<=3){X=1.0;break}X=+g[W+(V+3<<2)>>2]}else{g[A>>2]=0.0;X=1.0}}while(0);g[z>>2]=X}if(!s){U=c[v>>2]|0;T=_((c[o>>2]|0)+U|0,T)|0;V=c[p>>2]|0;g[q>>2]=+g[V+(T<<2)>>2];g[r>>2]=+g[V+(T+1<<2)>>2];do{if((U|0)>2){g[u>>2]=+g[V+(T+2<<2)>>2];if((U|0)<=3){X=1.0;break}X=+g[V+(T+3<<2)>>2]}else{g[u>>2]=0.0;X=1.0}}while(0);g[t>>2]=X;Gc(a,y)}S=S+1|0;}while((S|0)<(d|0));Hc(a,b);i=j;return}function Qe(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;i=i+24|0;g=f|0;c[g>>2]=46;c[g+4>>2]=a;c[g+8>>2]=b;c[g+12>>2]=d;c[g+16>>2]=e;sc(g|0);i=f;return}function Re(a,b){a=a|0;b=b|0;a=a+3116|0;c[a>>2]=c[a>>2]|c[b+4>>2];return}function Se(a){a=a|0;var b=0,d=0,e=0;b=i;i=i+8|0;e=b|0;d=e|0;c[e>>2]=47;if((a|0)==32886){c[e+4>>2]=2}else if((a|0)==32884){c[e+4>>2]=1}else if((a|0)==32888){c[e+4>>2]=8}else if((a|0)==32885){c[e+4>>2]=4}sc(d);i=b;return}function Te(a,b){a=a|0;b=b|0;a=a+3116|0;c[a>>2]=c[a>>2]&c[b+4>>2];return}function Ue(a){a=a|0;var b=0,d=0,e=0;b=i;i=i+8|0;e=b|0;d=e|0;c[e>>2]=48;if((a|0)==32888){c[e+4>>2]=-9}else if((a|0)==32886){c[e+4>>2]=-3}else if((a|0)==32884){c[e+4>>2]=-2}else if((a|0)==32885){c[e+4>>2]=-5}sc(d);i=b;return}function Ve(a,b){a=a|0;b=b|0;c[a+3076>>2]=c[b+4>>2];c[a+3080>>2]=c[b+8>>2];c[a+3072>>2]=c[b+12>>2];return}function We(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;b=i;i=i+16|0;f=b|0;c[f>>2]=49;c[f+4>>2]=a;c[f+8>>2]=d;c[f+12>>2]=e;sc(f|0);i=b;return}function Xe(a,b){a=a|0;b=b|0;c[a+3096>>2]=c[b+4>>2];c[a+3100>>2]=c[b+8>>2];c[a+3092>>2]=c[b+12>>2];return}function Ye(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;b=i;i=i+16|0;f=b|0;c[f>>2]=50;c[f+4>>2]=a;c[f+8>>2]=d;c[f+12>>2]=e;sc(f|0);i=b;return}function Ze(a,b){a=a|0;b=b|0;c[a+3088>>2]=c[b+4>>2];c[a+3084>>2]=c[b+8>>2];return}function _e(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;a=i;i=i+16|0;e=a|0;c[e>>2]=51;c[e+4>>2]=b;c[e+8>>2]=d;sc(e|0);i=a;return}function $e(a,b){a=a|0;b=b|0;c[a+3108>>2]=c[b+4>>2];c[a+3112>>2]=c[b+8>>2];c[a+3104>>2]=c[b+12>>2];return}function af(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;b=i;i=i+16|0;f=b|0;c[f>>2]=52;c[f+4>>2]=a;c[f+8>>2]=d;c[f+12>>2]=e;sc(f|0);i=b;return}function bf(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0,h=0,j=0,k=0,l=0.0;e=i;h=a+3136|0;f=c[h>>2]|0;do{if((f|0)!=0){k=f;do{if((c[k>>2]|0)==(b|0)){j=4;break}f=(c[k+4>>2]|0)<(c[f+4>>2]|0)?k:f;k=c[k+4108>>2]|0;}while((k|0)!=0);if((j|0)==4){a=a+3140|0;j=c[a>>2]|0;c[a>>2]=j+1;c[k+4>>2]=j;i=e;return k|0}if((f|0)==0){break}if((c[a+3144>>2]|0)<8){break}c[f>>2]=b;k=a+3140|0;b=c[k>>2]|0;c[k>>2]=b+1;c[f+4>>2]=b;l=0.0;b=0;while(1){g[f+8+(b<<2)>>2]=+P(+l,+d);b=b+1|0;if((b|0)<1025){l=l+.0009765625}else{break}}i=e;return f|0}}while(0);j=df(4112)|0;f=j;if((j|0)==0){Yd(1896,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0);i=k}k=a+3144|0;c[k>>2]=(c[k>>2]|0)+1;c[j+4108>>2]=c[h>>2];c[h>>2]=f;a=a+3140|0;k=c[a>>2]|0;c[a>>2]=k+1;c[j+4>>2]=k;c[j>>2]=b;l=0.0;b=0;while(1){g[f+8+(b<<2)>>2]=+P(+l,+d);b=b+1|0;if((b|0)<1025){l=l+.0009765625}else{break}}i=e;return f|0}function cf(a){a=a|0;gf(a);return}function df(a){a=a|0;return ff(a)|0}function ef(a){a=a|0;return hf(1,a)|0}function ff(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;do{if(a>>>0<245>>>0){if(a>>>0<11>>>0){a=16}else{a=a+11&-8}f=a>>>3;d=c[738]|0;e=d>>>(f>>>0);if((e&3|0)!=0){h=(e&1^1)+f|0;b=h<<1;e=2992+(b<<2)|0;b=2992+(b+2<<2)|0;g=c[b>>2]|0;f=g+8|0;a=c[f>>2]|0;do{if((e|0)==(a|0)){c[738]=d&~(1<<h)}else{if(a>>>0<(c[742]|0)>>>0){qa();return 0}d=a+12|0;if((c[d>>2]|0)==(g|0)){c[d>>2]=e;c[b>>2]=a;break}else{qa();return 0}}}while(0);r=h<<3;c[g+4>>2]=r|3;r=g+(r|4)|0;c[r>>2]=c[r>>2]|1;r=f;return r|0}if(!(a>>>0>(c[740]|0)>>>0)){break}if((e|0)!=0){i=2<<f;i=e<<f&(i|-i);i=(i&-i)-1|0;b=i>>>12&16;i=i>>>(b>>>0);h=i>>>5&8;i=i>>>(h>>>0);e=i>>>2&4;i=i>>>(e>>>0);g=i>>>1&2;i=i>>>(g>>>0);f=i>>>1&1;f=(h|b|e|g|f)+(i>>>(f>>>0))|0;i=f<<1;g=2992+(i<<2)|0;i=2992+(i+2<<2)|0;e=c[i>>2]|0;b=e+8|0;h=c[b>>2]|0;do{if((g|0)==(h|0)){c[738]=d&~(1<<f)}else{if(h>>>0<(c[742]|0)>>>0){qa();return 0}d=h+12|0;if((c[d>>2]|0)==(e|0)){c[d>>2]=g;c[i>>2]=h;break}else{qa();return 0}}}while(0);f=f<<3;d=f-a|0;c[e+4>>2]=a|3;r=e;e=r+a|0;c[r+(a|4)>>2]=d|1;c[r+f>>2]=d;f=c[740]|0;if((f|0)!=0){a=c[743]|0;g=f>>>3;h=g<<1;f=2992+(h<<2)|0;i=c[738]|0;g=1<<g;do{if((i&g|0)==0){c[738]=i|g;g=f;h=2992+(h+2<<2)|0}else{h=2992+(h+2<<2)|0;g=c[h>>2]|0;if(!(g>>>0<(c[742]|0)>>>0)){break}qa();return 0}}while(0);c[h>>2]=a;c[g+12>>2]=a;c[a+8>>2]=g;c[a+12>>2]=f}c[740]=d;c[743]=e;r=b;return r|0}d=c[739]|0;if((d|0)==0){break}f=(d&-d)-1|0;q=f>>>12&16;f=f>>>(q>>>0);p=f>>>5&8;f=f>>>(p>>>0);r=f>>>2&4;f=f>>>(r>>>0);d=f>>>1&2;f=f>>>(d>>>0);e=f>>>1&1;e=c[3256+((p|q|r|d|e)+(f>>>(e>>>0))<<2)>>2]|0;f=e;d=e;e=(c[e+4>>2]&-8)-a|0;while(1){h=c[f+16>>2]|0;if((h|0)==0){h=c[f+20>>2]|0;if((h|0)==0){break}}i=(c[h+4>>2]&-8)-a|0;g=i>>>0<e>>>0;f=h;d=g?h:d;e=g?i:e}g=d;i=c[742]|0;if(g>>>0<i>>>0){qa();return 0}r=g+a|0;f=r;if(!(g>>>0<r>>>0)){qa();return 0}h=c[d+24>>2]|0;j=c[d+12>>2]|0;do{if((j|0)==(d|0)){k=d+20|0;j=c[k>>2]|0;if((j|0)==0){k=d+16|0;j=c[k>>2]|0;if((j|0)==0){j=0;break}}while(1){l=j+20|0;m=c[l>>2]|0;if((m|0)!=0){j=m;k=l;continue}m=j+16|0;l=c[m>>2]|0;if((l|0)==0){break}else{j=l;k=m}}if(k>>>0<i>>>0){qa();return 0}else{c[k>>2]=0;break}}else{k=c[d+8>>2]|0;if(k>>>0<i>>>0){qa();return 0}l=k+12|0;if((c[l>>2]|0)!=(d|0)){qa();return 0}i=j+8|0;if((c[i>>2]|0)==(d|0)){c[l>>2]=j;c[i>>2]=k;break}else{qa();return 0}}}while(0);a:do{if((h|0)!=0){k=c[d+28>>2]|0;i=3256+(k<<2)|0;do{if((d|0)==(c[i>>2]|0)){c[i>>2]=j;if((j|0)!=0){break}c[739]=c[739]&~(1<<k);break a}else{if(h>>>0<(c[742]|0)>>>0){qa();return 0}i=h+16|0;if((c[i>>2]|0)==(d|0)){c[i>>2]=j}else{c[h+20>>2]=j}if((j|0)==0){break a}}}while(0);if(j>>>0<(c[742]|0)>>>0){qa();return 0}c[j+24>>2]=h;h=c[d+16>>2]|0;do{if((h|0)!=0){if(h>>>0<(c[742]|0)>>>0){qa();return 0}else{c[j+16>>2]=h;c[h+24>>2]=j;break}}}while(0);h=c[d+20>>2]|0;if((h|0)==0){break}if(h>>>0<(c[742]|0)>>>0){qa();return 0}else{c[j+20>>2]=h;c[h+24>>2]=j;break}}}while(0);if(e>>>0<16>>>0){r=e+a|0;c[d+4>>2]=r|3;r=g+(r+4)|0;c[r>>2]=c[r>>2]|1}else{c[d+4>>2]=a|3;c[g+(a|4)>>2]=e|1;c[g+(e+a)>>2]=e;h=c[740]|0;if((h|0)!=0){g=c[743]|0;k=h>>>3;i=k<<1;h=2992+(i<<2)|0;j=c[738]|0;k=1<<k;do{if((j&k|0)==0){c[738]=j|k;j=h;i=2992+(i+2<<2)|0}else{i=2992+(i+2<<2)|0;j=c[i>>2]|0;if(!(j>>>0<(c[742]|0)>>>0)){break}qa();return 0}}while(0);c[i>>2]=g;c[j+12>>2]=g;c[g+8>>2]=j;c[g+12>>2]=h}c[740]=e;c[743]=f}d=d+8|0;if((d|0)==0){break}return d|0}else{if(a>>>0>4294967231>>>0){a=-1;break}d=a+11|0;a=d&-8;e=c[739]|0;if((e|0)==0){break}f=-a|0;d=d>>>8;do{if((d|0)==0){g=0}else{if(a>>>0>16777215>>>0){g=31;break}q=(d+1048320|0)>>>16&8;r=d<<q;p=(r+520192|0)>>>16&4;r=r<<p;g=(r+245760|0)>>>16&2;g=14-(p|q|g)+(r<<g>>>15)|0;g=a>>>((g+7|0)>>>0)&1|g<<1}}while(0);h=c[3256+(g<<2)>>2]|0;b:do{if((h|0)==0){d=0;j=0}else{if((g|0)==31){i=0}else{i=25-(g>>>1)|0}d=0;i=a<<i;j=0;while(1){l=c[h+4>>2]&-8;k=l-a|0;if(k>>>0<f>>>0){if((l|0)==(a|0)){d=h;f=k;j=h;break b}else{d=h;f=k}}k=c[h+20>>2]|0;h=c[h+16+(i>>>31<<2)>>2]|0;j=(k|0)==0|(k|0)==(h|0)?j:k;if((h|0)==0){break}else{i=i<<1}}}}while(0);if((j|0)==0&(d|0)==0){r=2<<g;e=e&(r|-r);if((e|0)==0){break}r=(e&-e)-1|0;o=r>>>12&16;r=r>>>(o>>>0);n=r>>>5&8;r=r>>>(n>>>0);p=r>>>2&4;r=r>>>(p>>>0);q=r>>>1&2;r=r>>>(q>>>0);j=r>>>1&1;j=c[3256+((n|o|p|q|j)+(r>>>(j>>>0))<<2)>>2]|0}if((j|0)!=0){while(1){g=(c[j+4>>2]&-8)-a|0;e=g>>>0<f>>>0;f=e?g:f;d=e?j:d;e=c[j+16>>2]|0;if((e|0)!=0){j=e;continue}j=c[j+20>>2]|0;if((j|0)==0){break}}}if((d|0)==0){break}if(!(f>>>0<((c[740]|0)-a|0)>>>0)){break}e=d;j=c[742]|0;if(e>>>0<j>>>0){qa();return 0}h=e+a|0;g=h;if(!(e>>>0<h>>>0)){qa();return 0}i=c[d+24>>2]|0;k=c[d+12>>2]|0;do{if((k|0)==(d|0)){l=d+20|0;k=c[l>>2]|0;if((k|0)==0){l=d+16|0;k=c[l>>2]|0;if((k|0)==0){k=0;break}}while(1){m=k+20|0;n=c[m>>2]|0;if((n|0)!=0){k=n;l=m;continue}m=k+16|0;n=c[m>>2]|0;if((n|0)==0){break}else{k=n;l=m}}if(l>>>0<j>>>0){qa();return 0}else{c[l>>2]=0;break}}else{l=c[d+8>>2]|0;if(l>>>0<j>>>0){qa();return 0}j=l+12|0;if((c[j>>2]|0)!=(d|0)){qa();return 0}m=k+8|0;if((c[m>>2]|0)==(d|0)){c[j>>2]=k;c[m>>2]=l;break}else{qa();return 0}}}while(0);c:do{if((i|0)!=0){l=c[d+28>>2]|0;j=3256+(l<<2)|0;do{if((d|0)==(c[j>>2]|0)){c[j>>2]=k;if((k|0)!=0){break}c[739]=c[739]&~(1<<l);break c}else{if(i>>>0<(c[742]|0)>>>0){qa();return 0}j=i+16|0;if((c[j>>2]|0)==(d|0)){c[j>>2]=k}else{c[i+20>>2]=k}if((k|0)==0){break c}}}while(0);if(k>>>0<(c[742]|0)>>>0){qa();return 0}c[k+24>>2]=i;i=c[d+16>>2]|0;do{if((i|0)!=0){if(i>>>0<(c[742]|0)>>>0){qa();return 0}else{c[k+16>>2]=i;c[i+24>>2]=k;break}}}while(0);i=c[d+20>>2]|0;if((i|0)==0){break}if(i>>>0<(c[742]|0)>>>0){qa();return 0}else{c[k+20>>2]=i;c[i+24>>2]=k;break}}}while(0);do{if(f>>>0<16>>>0){r=f+a|0;c[d+4>>2]=r|3;r=e+(r+4)|0;c[r>>2]=c[r>>2]|1}else{c[d+4>>2]=a|3;c[e+(a|4)>>2]=f|1;c[e+(f+a)>>2]=f;i=f>>>3;if(f>>>0<256>>>0){h=i<<1;f=2992+(h<<2)|0;j=c[738]|0;i=1<<i;do{if((j&i|0)==0){c[738]=j|i;i=f;h=2992+(h+2<<2)|0}else{h=2992+(h+2<<2)|0;i=c[h>>2]|0;if(!(i>>>0<(c[742]|0)>>>0)){break}qa();return 0}}while(0);c[h>>2]=g;c[i+12>>2]=g;c[e+(a+8)>>2]=i;c[e+(a+12)>>2]=f;break}g=f>>>8;do{if((g|0)==0){k=0}else{if(f>>>0>16777215>>>0){k=31;break}q=(g+1048320|0)>>>16&8;r=g<<q;p=(r+520192|0)>>>16&4;r=r<<p;k=(r+245760|0)>>>16&2;k=14-(p|q|k)+(r<<k>>>15)|0;k=f>>>((k+7|0)>>>0)&1|k<<1}}while(0);g=3256+(k<<2)|0;c[e+(a+28)>>2]=k;c[e+(a+20)>>2]=0;c[e+(a+16)>>2]=0;j=c[739]|0;i=1<<k;if((j&i|0)==0){c[739]=j|i;c[g>>2]=h;c[e+(a+24)>>2]=g;c[e+(a+12)>>2]=h;c[e+(a+8)>>2]=h;break}if((k|0)==31){i=0}else{i=25-(k>>>1)|0}i=f<<i;g=c[g>>2]|0;while(1){if((c[g+4>>2]&-8|0)==(f|0)){break}j=g+16+(i>>>31<<2)|0;k=c[j>>2]|0;if((k|0)==0){b=151;break}else{i=i<<1;g=k}}if((b|0)==151){if(j>>>0<(c[742]|0)>>>0){qa();return 0}else{c[j>>2]=h;c[e+(a+24)>>2]=g;c[e+(a+12)>>2]=h;c[e+(a+8)>>2]=h;break}}i=g+8|0;j=c[i>>2]|0;f=c[742]|0;if(g>>>0<f>>>0){qa();return 0}if(j>>>0<f>>>0){qa();return 0}else{c[j+12>>2]=h;c[i>>2]=h;c[e+(a+8)>>2]=j;c[e+(a+12)>>2]=g;c[e+(a+24)>>2]=0;break}}}while(0);d=d+8|0;if((d|0)==0){break}return d|0}}while(0);d=c[740]|0;if(!(a>>>0>d>>>0)){b=d-a|0;e=c[743]|0;if(b>>>0>15>>>0){r=e;c[743]=r+a;c[740]=b;c[r+(a+4)>>2]=b|1;c[r+d>>2]=b;c[e+4>>2]=a|3}else{c[740]=0;c[743]=0;c[e+4>>2]=d|3;r=e+(d+4)|0;c[r>>2]=c[r>>2]|1}r=e+8|0;return r|0}d=c[741]|0;if(a>>>0<d>>>0){p=d-a|0;c[741]=p;r=c[744]|0;q=r;c[744]=q+a;c[q+(a+4)>>2]=p|1;c[r+4>>2]=a|3;r=r+8|0;return r|0}do{if((c[728]|0)==0){d=oa(30)|0;if((d-1&d|0)==0){c[730]=d;c[729]=d;c[731]=-1;c[732]=-1;c[733]=0;c[849]=0;c[728]=(Na(0)|0)&-16^1431655768;break}else{qa();return 0}}}while(0);h=a+48|0;e=c[730]|0;g=a+47|0;d=e+g|0;e=-e|0;f=d&e;if(!(f>>>0>a>>>0)){r=0;return r|0}i=c[848]|0;do{if((i|0)!=0){q=c[846]|0;r=q+f|0;if(r>>>0<=q>>>0|r>>>0>i>>>0){d=0}else{break}return d|0}}while(0);d:do{if((c[849]&4|0)==0){i=c[744]|0;e:do{if((i|0)==0){b=181}else{m=3400;while(1){l=m|0;j=c[l>>2]|0;if(!(j>>>0>i>>>0)){k=m+4|0;if((j+(c[k>>2]|0)|0)>>>0>i>>>0){break}}m=c[m+8>>2]|0;if((m|0)==0){b=181;break e}}if((m|0)==0){b=181;break}i=d-(c[741]|0)&e;if(!(i>>>0<2147483647>>>0)){e=0;break}j=Ja(i|0)|0;b=(j|0)==((c[l>>2]|0)+(c[k>>2]|0)|0);d=b?j:-1;e=b?i:0;b=190}}while(0);do{if((b|0)==181){d=Ja(0)|0;if((d|0)==-1){e=0;break}i=d;j=c[729]|0;e=j-1|0;if((e&i|0)==0){i=f}else{i=f-i+(e+i&-j)|0}j=c[846]|0;e=j+i|0;if(!(i>>>0>a>>>0&i>>>0<2147483647>>>0)){e=0;break}k=c[848]|0;if((k|0)!=0){if(e>>>0<=j>>>0|e>>>0>k>>>0){e=0;break}}j=Ja(i|0)|0;b=(j|0)==(d|0);d=b?d:-1;e=b?i:0;b=190}}while(0);f:do{if((b|0)==190){b=-i|0;if(!((d|0)==-1)){b=201;break d}do{if((j|0)!=-1&i>>>0<2147483647>>>0&i>>>0<h>>>0){d=c[730]|0;d=g-i+d&-d;if(!(d>>>0<2147483647>>>0)){break}if((Ja(d|0)|0)==-1){Ja(b|0)|0;break f}else{i=d+i|0;break}}}while(0);if(!((j|0)==-1)){e=i;d=j;b=201;break d}}}while(0);c[849]=c[849]|4;b=198}else{e=0;b=198}}while(0);do{if((b|0)==198){if(!(f>>>0<2147483647>>>0)){break}d=Ja(f|0)|0;f=Ja(0)|0;if(!((f|0)!=-1&(d|0)!=-1&d>>>0<f>>>0)){break}f=f-d|0;g=f>>>0>(a+40|0)>>>0;d=g?d:-1;if(!((d|0)==-1)){e=g?f:e;b=201}}}while(0);do{if((b|0)==201){f=(c[846]|0)+e|0;c[846]=f;if(f>>>0>(c[847]|0)>>>0){c[847]=f}f=c[744]|0;g:do{if((f|0)==0){r=c[742]|0;if((r|0)==0|d>>>0<r>>>0){c[742]=d}c[850]=d;c[851]=e;c[853]=0;c[747]=c[728];c[746]=-1;b=0;do{r=b<<1;q=2992+(r<<2)|0;c[2992+(r+3<<2)>>2]=q;c[2992+(r+2<<2)>>2]=q;b=b+1|0;}while(b>>>0<32>>>0);b=d+8|0;if((b&7|0)==0){b=0}else{b=-b&7}r=e-40-b|0;c[744]=d+b;c[741]=r;c[d+(b+4)>>2]=r|1;c[d+(e-36)>>2]=40;c[745]=c[732]}else{g=3400;do{h=c[g>>2]|0;i=g+4|0;j=c[i>>2]|0;if((d|0)==(h+j|0)){b=213;break}g=c[g+8>>2]|0;}while((g|0)!=0);do{if((b|0)==213){if((c[g+12>>2]&8|0)!=0){break}g=f;if(!(g>>>0>=h>>>0&g>>>0<d>>>0)){break}c[i>>2]=j+e;b=(c[741]|0)+e|0;d=f+8|0;if((d&7|0)==0){d=0}else{d=-d&7}r=b-d|0;c[744]=g+d;c[741]=r;c[g+(d+4)>>2]=r|1;c[g+(b+4)>>2]=40;c[745]=c[732];break g}}while(0);if(d>>>0<(c[742]|0)>>>0){c[742]=d}g=d+e|0;i=3400;do{h=i|0;if((c[h>>2]|0)==(g|0)){b=223;break}i=c[i+8>>2]|0;}while((i|0)!=0);do{if((b|0)==223){if((c[i+12>>2]&8|0)!=0){break}c[h>>2]=d;f=i+4|0;c[f>>2]=(c[f>>2]|0)+e;f=d+8|0;if((f&7|0)==0){f=0}else{f=-f&7}g=d+(e+8)|0;if((g&7|0)==0){k=0}else{k=-g&7}n=d+(k+e)|0;m=n;g=f+a|0;i=d+g|0;h=i;j=n-(d+f)-a|0;c[d+(f+4)>>2]=a|3;do{if((m|0)==(c[744]|0)){r=(c[741]|0)+j|0;c[741]=r;c[744]=h;c[d+(g+4)>>2]=r|1}else{if((m|0)==(c[743]|0)){r=(c[740]|0)+j|0;c[740]=r;c[743]=h;c[d+(g+4)>>2]=r|1;c[d+(r+g)>>2]=r;break}l=e+4|0;p=c[d+(l+k)>>2]|0;if((p&3|0)==1){a=p&-8;o=p>>>3;h:do{if(p>>>0<256>>>0){l=c[d+((k|8)+e)>>2]|0;n=c[d+(e+12+k)>>2]|0;p=2992+(o<<1<<2)|0;do{if((l|0)!=(p|0)){if(l>>>0<(c[742]|0)>>>0){qa();return 0}if((c[l+12>>2]|0)==(m|0)){break}qa();return 0}}while(0);if((n|0)==(l|0)){c[738]=c[738]&~(1<<o);break}do{if((n|0)==(p|0)){o=n+8|0}else{if(n>>>0<(c[742]|0)>>>0){qa();return 0}o=n+8|0;if((c[o>>2]|0)==(m|0)){break}qa();return 0}}while(0);c[l+12>>2]=n;c[o>>2]=l}else{m=c[d+((k|24)+e)>>2]|0;o=c[d+(e+12+k)>>2]|0;do{if((o|0)==(n|0)){q=k|16;p=d+(l+q)|0;o=c[p>>2]|0;if((o|0)==0){p=d+(q+e)|0;o=c[p>>2]|0;if((o|0)==0){o=0;break}}while(1){q=o+20|0;r=c[q>>2]|0;if((r|0)!=0){o=r;p=q;continue}q=o+16|0;r=c[q>>2]|0;if((r|0)==0){break}else{o=r;p=q}}if(p>>>0<(c[742]|0)>>>0){qa();return 0}else{c[p>>2]=0;break}}else{q=c[d+((k|8)+e)>>2]|0;if(q>>>0<(c[742]|0)>>>0){qa();return 0}r=q+12|0;if((c[r>>2]|0)!=(n|0)){qa();return 0}p=o+8|0;if((c[p>>2]|0)==(n|0)){c[r>>2]=o;c[p>>2]=q;break}else{qa();return 0}}}while(0);if((m|0)==0){break}p=c[d+(e+28+k)>>2]|0;q=3256+(p<<2)|0;do{if((n|0)==(c[q>>2]|0)){c[q>>2]=o;if((o|0)!=0){break}c[739]=c[739]&~(1<<p);break h}else{if(m>>>0<(c[742]|0)>>>0){qa();return 0}p=m+16|0;if((c[p>>2]|0)==(n|0)){c[p>>2]=o}else{c[m+20>>2]=o}if((o|0)==0){break h}}}while(0);if(o>>>0<(c[742]|0)>>>0){qa();return 0}c[o+24>>2]=m;n=k|16;m=c[d+(n+e)>>2]|0;do{if((m|0)!=0){if(m>>>0<(c[742]|0)>>>0){qa();return 0}else{c[o+16>>2]=m;c[m+24>>2]=o;break}}}while(0);l=c[d+(l+n)>>2]|0;if((l|0)==0){break}if(l>>>0<(c[742]|0)>>>0){qa();return 0}else{c[o+20>>2]=l;c[l+24>>2]=o;break}}}while(0);m=d+((a|k)+e)|0;j=a+j|0}a=m+4|0;c[a>>2]=c[a>>2]&-2;c[d+(g+4)>>2]=j|1;c[d+(j+g)>>2]=j;a=j>>>3;if(j>>>0<256>>>0){e=a<<1;b=2992+(e<<2)|0;i=c[738]|0;a=1<<a;do{if((i&a|0)==0){c[738]=i|a;a=b;e=2992+(e+2<<2)|0}else{e=2992+(e+2<<2)|0;a=c[e>>2]|0;if(!(a>>>0<(c[742]|0)>>>0)){break}qa();return 0}}while(0);c[e>>2]=h;c[a+12>>2]=h;c[d+(g+8)>>2]=a;c[d+(g+12)>>2]=b;break}a=j>>>8;do{if((a|0)==0){e=0}else{if(j>>>0>16777215>>>0){e=31;break}q=(a+1048320|0)>>>16&8;r=a<<q;p=(r+520192|0)>>>16&4;r=r<<p;e=(r+245760|0)>>>16&2;e=14-(p|q|e)+(r<<e>>>15)|0;e=j>>>((e+7|0)>>>0)&1|e<<1}}while(0);a=3256+(e<<2)|0;c[d+(g+28)>>2]=e;c[d+(g+20)>>2]=0;c[d+(g+16)>>2]=0;h=c[739]|0;k=1<<e;if((h&k|0)==0){c[739]=h|k;c[a>>2]=i;c[d+(g+24)>>2]=a;c[d+(g+12)>>2]=i;c[d+(g+8)>>2]=i;break}if((e|0)==31){e=0}else{e=25-(e>>>1)|0}e=j<<e;a=c[a>>2]|0;while(1){if((c[a+4>>2]&-8|0)==(j|0)){break}k=a+16+(e>>>31<<2)|0;h=c[k>>2]|0;if((h|0)==0){b=296;break}else{e=e<<1;a=h}}if((b|0)==296){if(k>>>0<(c[742]|0)>>>0){qa();return 0}else{c[k>>2]=i;c[d+(g+24)>>2]=a;c[d+(g+12)>>2]=i;c[d+(g+8)>>2]=i;break}}b=a+8|0;e=c[b>>2]|0;h=c[742]|0;if(a>>>0<h>>>0){qa();return 0}if(e>>>0<h>>>0){qa();return 0}else{c[e+12>>2]=i;c[b>>2]=i;c[d+(g+8)>>2]=e;c[d+(g+12)>>2]=a;c[d+(g+24)>>2]=0;break}}}while(0);r=d+(f|8)|0;return r|0}}while(0);g=f;k=3400;while(1){j=c[k>>2]|0;if(!(j>>>0>g>>>0)){i=c[k+4>>2]|0;h=j+i|0;if(h>>>0>g>>>0){break}}k=c[k+8>>2]|0}k=j+(i-39)|0;if((k&7|0)==0){k=0}else{k=-k&7}i=j+(i-47+k)|0;i=i>>>0<(f+16|0)>>>0?g:i;j=i+8|0;k=d+8|0;if((k&7|0)==0){k=0}else{k=-k&7}r=e-40-k|0;c[744]=d+k;c[741]=r;c[d+(k+4)>>2]=r|1;c[d+(e-36)>>2]=40;c[745]=c[732];c[i+4>>2]=27;c[j>>2]=c[850];c[j+4>>2]=c[851];c[j+8>>2]=c[852];c[j+12>>2]=c[853];c[850]=d;c[851]=e;c[853]=0;c[852]=j;d=i+28|0;c[d>>2]=7;if((i+32|0)>>>0<h>>>0){while(1){e=d+4|0;c[e>>2]=7;if((d+8|0)>>>0<h>>>0){d=e}else{break}}}if((i|0)==(g|0)){break}e=i-f|0;r=g+(e+4)|0;c[r>>2]=c[r>>2]&-2;c[f+4>>2]=e|1;c[g+e>>2]=e;g=e>>>3;if(e>>>0<256>>>0){d=g<<1;b=2992+(d<<2)|0;e=c[738]|0;g=1<<g;do{if((e&g|0)==0){c[738]=e|g;e=b;d=2992+(d+2<<2)|0}else{d=2992+(d+2<<2)|0;e=c[d>>2]|0;if(!(e>>>0<(c[742]|0)>>>0)){break}qa();return 0}}while(0);c[d>>2]=f;c[e+12>>2]=f;c[f+8>>2]=e;c[f+12>>2]=b;break}d=f;g=e>>>8;do{if((g|0)==0){i=0}else{if(e>>>0>16777215>>>0){i=31;break}q=(g+1048320|0)>>>16&8;r=g<<q;p=(r+520192|0)>>>16&4;r=r<<p;i=(r+245760|0)>>>16&2;i=14-(p|q|i)+(r<<i>>>15)|0;i=e>>>((i+7|0)>>>0)&1|i<<1}}while(0);g=3256+(i<<2)|0;c[f+28>>2]=i;c[f+20>>2]=0;c[f+16>>2]=0;j=c[739]|0;h=1<<i;if((j&h|0)==0){c[739]=j|h;c[g>>2]=d;c[f+24>>2]=g;c[f+12>>2]=f;c[f+8>>2]=f;break}if((i|0)==31){h=0}else{h=25-(i>>>1)|0}h=e<<h;g=c[g>>2]|0;while(1){if((c[g+4>>2]&-8|0)==(e|0)){break}j=g+16+(h>>>31<<2)|0;i=c[j>>2]|0;if((i|0)==0){b=331;break}else{h=h<<1;g=i}}if((b|0)==331){if(j>>>0<(c[742]|0)>>>0){qa();return 0}else{c[j>>2]=d;c[f+24>>2]=g;c[f+12>>2]=f;c[f+8>>2]=f;break}}h=g+8|0;e=c[h>>2]|0;b=c[742]|0;if(g>>>0<b>>>0){qa();return 0}if(e>>>0<b>>>0){qa();return 0}else{c[e+12>>2]=d;c[h>>2]=d;c[f+8>>2]=e;c[f+12>>2]=g;c[f+24>>2]=0;break}}}while(0);b=c[741]|0;if(!(b>>>0>a>>>0)){break}p=b-a|0;c[741]=p;r=c[744]|0;q=r;c[744]=q+a;c[q+(a+4)>>2]=p|1;c[r+4>>2]=a|3;r=r+8|0;return r|0}}while(0);c[(Ka()|0)>>2]=12;r=0;return r|0}function gf(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;if((a|0)==0){return}p=a-8|0;s=p;q=c[742]|0;if(p>>>0<q>>>0){qa()}n=c[a-4>>2]|0;m=n&3;if((m|0)==1){qa()}h=n&-8;k=a+(h-8)|0;j=k;a:do{if((n&1|0)==0){u=c[p>>2]|0;if((m|0)==0){return}p=-8-u|0;s=a+p|0;m=s;n=u+h|0;if(s>>>0<q>>>0){qa()}if((m|0)==(c[743]|0)){b=a+(h-4)|0;if((c[b>>2]&3|0)!=3){b=m;l=n;break}c[740]=n;c[b>>2]=c[b>>2]&-2;c[a+(p+4)>>2]=n|1;c[k>>2]=n;return}t=u>>>3;if(u>>>0<256>>>0){b=c[a+(p+8)>>2]|0;l=c[a+(p+12)>>2]|0;o=2992+(t<<1<<2)|0;do{if((b|0)!=(o|0)){if(b>>>0<q>>>0){qa()}if((c[b+12>>2]|0)==(m|0)){break}qa()}}while(0);if((l|0)==(b|0)){c[738]=c[738]&~(1<<t);b=m;l=n;break}do{if((l|0)==(o|0)){r=l+8|0}else{if(l>>>0<q>>>0){qa()}o=l+8|0;if((c[o>>2]|0)==(m|0)){r=o;break}qa()}}while(0);c[b+12>>2]=l;c[r>>2]=b;b=m;l=n;break}r=c[a+(p+24)>>2]|0;u=c[a+(p+12)>>2]|0;do{if((u|0)==(s|0)){u=a+(p+20)|0;t=c[u>>2]|0;if((t|0)==0){u=a+(p+16)|0;t=c[u>>2]|0;if((t|0)==0){o=0;break}}while(1){w=t+20|0;v=c[w>>2]|0;if((v|0)!=0){t=v;u=w;continue}v=t+16|0;w=c[v>>2]|0;if((w|0)==0){break}else{t=w;u=v}}if(u>>>0<q>>>0){qa()}else{c[u>>2]=0;o=t;break}}else{t=c[a+(p+8)>>2]|0;if(t>>>0<q>>>0){qa()}q=t+12|0;if((c[q>>2]|0)!=(s|0)){qa()}v=u+8|0;if((c[v>>2]|0)==(s|0)){c[q>>2]=u;c[v>>2]=t;o=u;break}else{qa()}}}while(0);if((r|0)==0){b=m;l=n;break}q=c[a+(p+28)>>2]|0;t=3256+(q<<2)|0;do{if((s|0)==(c[t>>2]|0)){c[t>>2]=o;if((o|0)!=0){break}c[739]=c[739]&~(1<<q);b=m;l=n;break a}else{if(r>>>0<(c[742]|0)>>>0){qa()}q=r+16|0;if((c[q>>2]|0)==(s|0)){c[q>>2]=o}else{c[r+20>>2]=o}if((o|0)==0){b=m;l=n;break a}}}while(0);if(o>>>0<(c[742]|0)>>>0){qa()}c[o+24>>2]=r;q=c[a+(p+16)>>2]|0;do{if((q|0)!=0){if(q>>>0<(c[742]|0)>>>0){qa()}else{c[o+16>>2]=q;c[q+24>>2]=o;break}}}while(0);p=c[a+(p+20)>>2]|0;if((p|0)==0){b=m;l=n;break}if(p>>>0<(c[742]|0)>>>0){qa()}else{c[o+20>>2]=p;c[p+24>>2]=o;b=m;l=n;break}}else{b=s;l=h}}while(0);m=b;if(!(m>>>0<k>>>0)){qa()}n=a+(h-4)|0;o=c[n>>2]|0;if((o&1|0)==0){qa()}do{if((o&2|0)==0){if((j|0)==(c[744]|0)){w=(c[741]|0)+l|0;c[741]=w;c[744]=b;c[b+4>>2]=w|1;if((b|0)!=(c[743]|0)){return}c[743]=0;c[740]=0;return}if((j|0)==(c[743]|0)){w=(c[740]|0)+l|0;c[740]=w;c[743]=b;c[b+4>>2]=w|1;c[m+w>>2]=w;return}l=(o&-8)+l|0;n=o>>>3;b:do{if(o>>>0<256>>>0){g=c[a+h>>2]|0;h=c[a+(h|4)>>2]|0;a=2992+(n<<1<<2)|0;do{if((g|0)!=(a|0)){if(g>>>0<(c[742]|0)>>>0){qa()}if((c[g+12>>2]|0)==(j|0)){break}qa()}}while(0);if((h|0)==(g|0)){c[738]=c[738]&~(1<<n);break}do{if((h|0)==(a|0)){i=h+8|0}else{if(h>>>0<(c[742]|0)>>>0){qa()}a=h+8|0;if((c[a>>2]|0)==(j|0)){i=a;break}qa()}}while(0);c[g+12>>2]=h;c[i>>2]=g}else{i=c[a+(h+16)>>2]|0;n=c[a+(h|4)>>2]|0;do{if((n|0)==(k|0)){n=a+(h+12)|0;j=c[n>>2]|0;if((j|0)==0){n=a+(h+8)|0;j=c[n>>2]|0;if((j|0)==0){g=0;break}}while(1){p=j+20|0;o=c[p>>2]|0;if((o|0)!=0){j=o;n=p;continue}o=j+16|0;p=c[o>>2]|0;if((p|0)==0){break}else{j=p;n=o}}if(n>>>0<(c[742]|0)>>>0){qa()}else{c[n>>2]=0;g=j;break}}else{o=c[a+h>>2]|0;if(o>>>0<(c[742]|0)>>>0){qa()}p=o+12|0;if((c[p>>2]|0)!=(k|0)){qa()}j=n+8|0;if((c[j>>2]|0)==(k|0)){c[p>>2]=n;c[j>>2]=o;g=n;break}else{qa()}}}while(0);if((i|0)==0){break}n=c[a+(h+20)>>2]|0;j=3256+(n<<2)|0;do{if((k|0)==(c[j>>2]|0)){c[j>>2]=g;if((g|0)!=0){break}c[739]=c[739]&~(1<<n);break b}else{if(i>>>0<(c[742]|0)>>>0){qa()}j=i+16|0;if((c[j>>2]|0)==(k|0)){c[j>>2]=g}else{c[i+20>>2]=g}if((g|0)==0){break b}}}while(0);if(g>>>0<(c[742]|0)>>>0){qa()}c[g+24>>2]=i;i=c[a+(h+8)>>2]|0;do{if((i|0)!=0){if(i>>>0<(c[742]|0)>>>0){qa()}else{c[g+16>>2]=i;c[i+24>>2]=g;break}}}while(0);h=c[a+(h+12)>>2]|0;if((h|0)==0){break}if(h>>>0<(c[742]|0)>>>0){qa()}else{c[g+20>>2]=h;c[h+24>>2]=g;break}}}while(0);c[b+4>>2]=l|1;c[m+l>>2]=l;if((b|0)!=(c[743]|0)){break}c[740]=l;return}else{c[n>>2]=o&-2;c[b+4>>2]=l|1;c[m+l>>2]=l}}while(0);g=l>>>3;if(l>>>0<256>>>0){a=g<<1;d=2992+(a<<2)|0;h=c[738]|0;g=1<<g;do{if((h&g|0)==0){c[738]=h|g;f=d;e=2992+(a+2<<2)|0}else{h=2992+(a+2<<2)|0;g=c[h>>2]|0;if(!(g>>>0<(c[742]|0)>>>0)){f=g;e=h;break}qa()}}while(0);c[e>>2]=b;c[f+12>>2]=b;c[b+8>>2]=f;c[b+12>>2]=d;return}e=b;f=l>>>8;do{if((f|0)==0){a=0}else{if(l>>>0>16777215>>>0){a=31;break}v=(f+1048320|0)>>>16&8;w=f<<v;u=(w+520192|0)>>>16&4;w=w<<u;a=(w+245760|0)>>>16&2;a=14-(u|v|a)+(w<<a>>>15)|0;a=l>>>((a+7|0)>>>0)&1|a<<1}}while(0);f=3256+(a<<2)|0;c[b+28>>2]=a;c[b+20>>2]=0;c[b+16>>2]=0;h=c[739]|0;g=1<<a;do{if((h&g|0)==0){c[739]=h|g;c[f>>2]=e;c[b+24>>2]=f;c[b+12>>2]=b;c[b+8>>2]=b}else{if((a|0)==31){g=0}else{g=25-(a>>>1)|0}g=l<<g;f=c[f>>2]|0;while(1){if((c[f+4>>2]&-8|0)==(l|0)){break}h=f+16+(g>>>31<<2)|0;a=c[h>>2]|0;if((a|0)==0){d=129;break}else{g=g<<1;f=a}}if((d|0)==129){if(h>>>0<(c[742]|0)>>>0){qa()}else{c[h>>2]=e;c[b+24>>2]=f;c[b+12>>2]=b;c[b+8>>2]=b;break}}h=f+8|0;g=c[h>>2]|0;d=c[742]|0;if(f>>>0<d>>>0){qa()}if(g>>>0<d>>>0){qa()}else{c[g+12>>2]=e;c[h>>2]=e;c[b+8>>2]=g;c[b+12>>2]=f;c[b+24>>2]=0;break}}}while(0);w=(c[746]|0)-1|0;c[746]=w;if((w|0)==0){b=3408}else{return}while(1){b=c[b>>2]|0;if((b|0)==0){break}else{b=b+8|0}}c[746]=-1;return}function hf(a,b){a=a|0;b=b|0;var d=0;do{if((a|0)==0){d=0}else{d=_(b,a)|0;if(!((b|a)>>>0>65535>>>0)){break}d=((d>>>0)/(a>>>0)|0|0)==(b|0)?d:-1}}while(0);a=ff(d)|0;if((a|0)==0){return a|0}if((c[a-4>>2]&3|0)==0){return a|0}kf(a|0,0,d|0)|0;return a|0}function jf(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((e|0)>=4096)return Ea(b|0,d|0,e|0)|0;f=b|0;if((b&3)==(d&3)){while(b&3){if((e|0)==0)return f|0;a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function kf(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;i=b&3;h=d|d<<8|d<<16|d<<24;g=f&~3;if(i){i=b+4-i|0;while((b|0)<(i|0)){a[b]=d;b=b+1|0}}while((b|0)<(g|0)){c[b>>2]=h;b=b+4|0}}while((b|0)<(f|0)){a[b]=d;b=b+1|0}return b-e|0}function lf(b){b=b|0;var c=0;c=b;while(a[c]|0){c=c+1|0}return c-b|0}function mf(a,b){a=a|0;b=b|0;return Qa[a&1](b|0)|0}function nf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return+Ra[a&15](b|0,c|0,d|0)}function of(a,b){a=a|0;b=b|0;Sa[a&1](b|0)}function pf(a,b,c){a=a|0;b=b|0;c=c|0;Ta[a&127](b|0,c|0)}function qf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Ua[a&1](b|0,c|0,d|0)|0}function rf(a){a=a|0;Va[a&1]()}function sf(a,b,c){a=a|0;b=b|0;c=c|0;return Wa[a&1](b|0,c|0)|0}function tf(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;Xa[a&15](b|0,c|0,d|0,e|0)}function uf(a){a=a|0;$(0);return 0}function vf(a,b,c){a=a|0;b=b|0;c=c|0;$(1);return 0.0}function wf(a){a=a|0;$(2)}function xf(a,b){a=a|0;b=b|0;$(3)}function yf(a,b,c){a=a|0;b=b|0;c=c|0;$(4);return 0}function zf(){$(5)}function Af(a,b){a=a|0;b=b|0;$(6);return 0}function Bf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;$(7)}




// EMSCRIPTEN_END_FUNCS
var Qa=[uf,uf];var Ra=[vf,vf,Ed,vf,Fd,vf,Gd,vf,Cd,vf,Dd,vf,Hd,vf,vf,vf];var Sa=[wf,wf];var Ta=[xf,xf,dd,xf,vc,xf,qd,xf,$c,xf,Rc,xf,Mc,xf,Uc,xf,Lc,xf,bd,xf,Oc,xf,Pc,xf,tc,xf,ld,xf,Ze,xf,cd,xf,Rd,xf,_c,xf,Nc,xf,Ec,xf,Le,xf,Hc,xf,Xe,xf,pd,xf,Sc,xf,ed,xf,$e,xf,nd,xf,Pe,xf,Fc,xf,Kc,xf,gd,xf,md,xf,Td,xf,jd,xf,fd,xf,Zc,xf,Ne,xf,Bc,xf,hd,xf,Tc,xf,Ve,xf,kd,xf,Cc,xf,Sd,xf,Te,xf,ad,xf,uc,xf,od,xf,Ud,xf,id,xf,Re,xf,Dc,xf,Gc,xf,Qc,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf,xf];var Ua=[yf,yf];var Va=[zf,zf];var Wa=[Af,Af];var Xa=[Bf,Bf,Ld,Bf,Kd,Bf,Nd,Bf,Md,Bf,Bf,Bf,Bf,Bf,Bf,Bf];return{_ostgl_resize:He,_glGenQueries:td,_strlen:lf,_glPopName:kc,_glPushName:jc,_glIsQuery:vd,_glPushMatrix:Nb,_glLightfv:Yb,_glTranslatef:Qb,_memcpy:jf,_glPolygonOffset:mc,_glClear:ac,_glEndQuery:xd,_glMaterialf:Wb,_glColor4f:tb,_glTexCoord2f:yb,_glLoadIdentity:Lb,_glArrayElement:Me,_glScalef:Rb,_glMaterialfv:Vb,_free:gf,_glNormal3fv:sb,_glOrtho:Ub,_glVertexPointer:We,_glVertex3fv:qb,_glLightModeli:_b,_glNewList:wc,_glHint:pc,_glDeleteLists:Ac,_glBegin:Hb,_glColor3fv:wb,_glTexCoord2fv:zb,_glDrawElements:Qe,_glViewport:Sb,_glDeleteTextures:Yc,_ostgl_create_context:Ee,_glRenderMode:Pd,_glEnable:Fb,_glGenTextures:Xc,_glGetIntegerv:Wd,_glClose:Jc,_glBeginQuery:wd,_glTexCoord4f:xb,_glSelectBuffer:Qd,_glColor3f:vb,_glGenLists:zc,_glCullFace:Cb,_glLoadMatrixf:Kb,_glVertex2f:ob,_ostgl_copy_framebuffer:Ie,_glInit:Ic,_glLightf:Zb,_glEnableClientState:Se,_glCallList:nc,_glLoadName:lc,_memset:kf,_glNormalPointer:_e,_glClearColor:bc,_glBindTexture:ec,_glPolygonMode:Eb,_glGetFloatv:Xd,_glColor4fv:ub,_glDrawArrays:Oe,_glInitNames:ic,_glEdgeFlag:Ab,_glTexCoordPointer:af,_glFrontFace:Db,_glGetQueryObjectuiv:yd,_glRotatef:Pb,_malloc:ff,_glTexImage2D:dc,_glDisableClientState:Ue,_glFlush:oc,_glEndList:xc,_calloc:hf,_glTexEnvi:fc,_glColorPointer:Ye,_glDeleteQueries:ud,_glPopMatrix:Ob,_glMatrixMode:Jb,_glLightModelfv:$b,_glVertex4f:nb,_glNormal3f:rb,_glPixelStorei:hc,_glFrustum:Tb,_glVertex3f:pb,_glClearDepth:cc,_glShadeModel:Bb,_glDebug:qc,_ostgl_delete_context:Fe,_glEnd:Ib,_glIsList:yc,_glMultMatrixf:Mb,_glDisable:Gb,_glTexParameteri:gc,_ostgl_make_current:Ge,_glColorMaterial:Xb,runPostSets:mb,stackAlloc:Ya,stackSave:Za,stackRestore:_a,setThrew:$a,setTempRet0:cb,setTempRet1:db,setTempRet2:eb,setTempRet3:fb,setTempRet4:gb,setTempRet5:hb,setTempRet6:ib,setTempRet7:jb,setTempRet8:kb,setTempRet9:lb,dynCall_ii:mf,dynCall_fiii:nf,dynCall_vi:of,dynCall_vii:pf,dynCall_iiii:qf,dynCall_v:rf,dynCall_iii:sf,dynCall_viiii:tf}
// EMSCRIPTEN_END_ASM

})({Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array},{abort:D,assert:A,asmPrintInt:function(a,b){r.print("int "+a+","+b)},asmPrintFloat:function(a,b){r.print("float "+a+","+b)},min:ta,invoke_ii:function(a,b){try{return r.dynCall_ii(a,b)}catch(c){"number"!==typeof c&&"longjmp"!==c&&e(c),$.setThrew(1,0)}},invoke_fiii:function(a,
b,c,d){try{return r.dynCall_fiii(a,b,c,d)}catch(f){"number"!==typeof f&&"longjmp"!==f&&e(f),$.setThrew(1,0)}},invoke_vi:function(a,b){try{r.dynCall_vi(a,b)}catch(c){"number"!==typeof c&&"longjmp"!==c&&e(c),$.setThrew(1,0)}},invoke_vii:function(a,b,c){try{r.dynCall_vii(a,b,c)}catch(d){"number"!==typeof d&&"longjmp"!==d&&e(d),$.setThrew(1,0)}},invoke_iiii:function(a,b,c,d){try{return r.dynCall_iiii(a,b,c,d)}catch(f){"number"!==typeof f&&"longjmp"!==f&&e(f),$.setThrew(1,0)}},invoke_v:function(a){try{r.dynCall_v(a)}catch(b){"number"!==
typeof b&&"longjmp"!==b&&e(b),$.setThrew(1,0)}},invoke_iii:function(a,b,c){try{return r.dynCall_iii(a,b,c)}catch(d){"number"!==typeof d&&"longjmp"!==d&&e(d),$.setThrew(1,0)}},invoke_viiii:function(a,b,c,d,f){try{r.dynCall_viiii(a,b,c,d,f)}catch(g){"number"!==typeof g&&"longjmp"!==g&&e(g),$.setThrew(1,0)}},_llvm_lifetime_end:p(),_fabsf:lc,_sysconf:function(a){switch(a){case 30:return 4096;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 79:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:return 200809;
case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;
case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1E3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:return 1}jb(T.u);return-1},_logf:Wa,_abort:function(){r.abort()},_fprintf:function(a,
b,c){c=ic(b,c);b=x.Wa();a=fc(N(c,"i8",1),1,c.length,a);x.Va(b);return a},_sqrt:Xa,_fflush:p(),__reallyNegative:hc,_sqrtf:Xa,_fputc:kc,___setErrNo:jb,_fwrite:fc,_send:function(a,b,c){return!Z.ac(a)?(jb(T.fa),-1):dc(a,b,c)},_write:dc,_exit:function(a){mc(a)},_sin:Va,__formatString:ic,_emscripten_memcpy_big:function(a,b,c){P.set(P.subarray(b,b+c),a);return a},_fileno:ec,_cos:Ua,_pwrite:function(a,b,c,d){a=X[a];if(!a)return jb(T.fa),-1;try{return Wb(a,K,b,c,d)}catch(f){return Cb(f),-1}},_llvm_pow_f64:Ya,
_sbrk:nc,___errno_location:function(){return ib},_llvm_lifetime_start:p(),_mkport:cc,_time:function(a){var b=Math.floor(Date.now()/1E3);a&&(L[a>>2]=b);return b},__exit:mc,STACKTOP:v,STACK_MAX:Ga,tempDoublePtr:eb,ABORT:ja,NaN:NaN,Infinity:Infinity,_stderr:db},R);r._ostgl_resize=$._ostgl_resize;r._glGenQueries=$._glGenQueries;var gc=r._strlen=$._strlen;r._glPopName=$._glPopName;r._glPushName=$._glPushName;r._glIsQuery=$._glIsQuery;r._glPushMatrix=$._glPushMatrix;r._glLightfv=$._glLightfv;
r._glTranslatef=$._glTranslatef;var fb=r._memcpy=$._memcpy;r._glPolygonOffset=$._glPolygonOffset;r._glClear=$._glClear;r._glEndQuery=$._glEndQuery;r._glMaterialf=$._glMaterialf;r._glColor4f=$._glColor4f;r._glTexCoord2f=$._glTexCoord2f;r._glLoadIdentity=$._glLoadIdentity;r._glArrayElement=$._glArrayElement;r._glScalef=$._glScalef;r._glMaterialfv=$._glMaterialfv;r._free=$._free;r._glNormal3fv=$._glNormal3fv;r._glOrtho=$._glOrtho;r._glVertexPointer=$._glVertexPointer;r._glVertex3fv=$._glVertex3fv;
r._glLightModeli=$._glLightModeli;r._glNewList=$._glNewList;r._glHint=$._glHint;r._glDeleteLists=$._glDeleteLists;r._glBegin=$._glBegin;r._glColor3fv=$._glColor3fv;r._glTexCoord2fv=$._glTexCoord2fv;r._glDrawElements=$._glDrawElements;r._glViewport=$._glViewport;r._glDeleteTextures=$._glDeleteTextures;r._ostgl_create_context=$._ostgl_create_context;r._glRenderMode=$._glRenderMode;r._glEnable=$._glEnable;r._glGenTextures=$._glGenTextures;r._glGetIntegerv=$._glGetIntegerv;r._glClose=$._glClose;
r._glBeginQuery=$._glBeginQuery;r._glTexCoord4f=$._glTexCoord4f;r._glSelectBuffer=$._glSelectBuffer;r._glColor3f=$._glColor3f;r._glGenLists=$._glGenLists;r._glCullFace=$._glCullFace;r._glLoadMatrixf=$._glLoadMatrixf;r._glVertex2f=$._glVertex2f;r._ostgl_copy_framebuffer=$._ostgl_copy_framebuffer;r._glInit=$._glInit;r._glLightf=$._glLightf;r._glEnableClientState=$._glEnableClientState;r._glCallList=$._glCallList;r._glLoadName=$._glLoadName;var gb=r._memset=$._memset;r._glNormalPointer=$._glNormalPointer;
r._glClearColor=$._glClearColor;r._glBindTexture=$._glBindTexture;r._glPolygonMode=$._glPolygonMode;r._glGetFloatv=$._glGetFloatv;r._glColor4fv=$._glColor4fv;r._glDrawArrays=$._glDrawArrays;r._glInitNames=$._glInitNames;r._glEdgeFlag=$._glEdgeFlag;r._glTexCoordPointer=$._glTexCoordPointer;r._glFrontFace=$._glFrontFace;r._glGetQueryObjectuiv=$._glGetQueryObjectuiv;r._glRotatef=$._glRotatef;var za=r._malloc=$._malloc;r._glTexImage2D=$._glTexImage2D;r._glDisableClientState=$._glDisableClientState;
r._glFlush=$._glFlush;r._glEndList=$._glEndList;r._calloc=$._calloc;r._glTexEnvi=$._glTexEnvi;r._glColorPointer=$._glColorPointer;r._glDeleteQueries=$._glDeleteQueries;r._glPopMatrix=$._glPopMatrix;r._glMatrixMode=$._glMatrixMode;r._glLightModelfv=$._glLightModelfv;r._glVertex4f=$._glVertex4f;r._glNormal3f=$._glNormal3f;r._glPixelStorei=$._glPixelStorei;r._glFrustum=$._glFrustum;r._glVertex3f=$._glVertex3f;r._glClearDepth=$._glClearDepth;r._glShadeModel=$._glShadeModel;r._glDebug=$._glDebug;
r._ostgl_delete_context=$._ostgl_delete_context;r._glEnd=$._glEnd;r._glIsList=$._glIsList;r._glMultMatrixf=$._glMultMatrixf;r._glDisable=$._glDisable;r._glTexParameteri=$._glTexParameteri;r._ostgl_make_current=$._ostgl_make_current;r._glColorMaterial=$._glColorMaterial;var cb=r.runPostSets=$.runPostSets;r.dynCall_ii=$.dynCall_ii;r.dynCall_fiii=$.dynCall_fiii;r.dynCall_vi=$.dynCall_vi;r.dynCall_vii=$.dynCall_vii;r.dynCall_iiii=$.dynCall_iiii;r.dynCall_v=$.dynCall_v;r.dynCall_iii=$.dynCall_iii;
r.dynCall_viiii=$.dynCall_viiii;x.Ua=function(a){return $.stackAlloc(a)};x.Wa=function(){return $.stackSave()};x.Va=function(a){$.stackRestore(a)};var jc=m;function Ec(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ec.prototype=Error();var Fc,Gc=m,$a=function Hc(){!r.calledRun&&Ic&&Jc();r.calledRun||($a=Hc)};
r.callMain=r.ze=function(a){function b(){for(var a=0;3>a;a++)d.push(0)}A(0==S,"cannot call main when async dependencies remain! (listen on __ATMAIN__)");A(0==Ka.length,"cannot call main when preRun functions remain to be called");a=a||[];ba&&Gc!==m&&r.U("preload time: "+(Date.now()-Gc)+" ms");Pa||(Pa=j,Ja(La));var c=a.length+1,d=[N(J("/bin/this.program"),"i8",0)];b();for(var f=0;f<c-1;f+=1)d.push(N(J(a[f]),"i8",0)),b();d.push(0);d=N(d,"i32",0);Fc=v;try{var g=r._main(c,d,0);r.noExitRuntime||Kc(g)}catch(h){h instanceof
Ec||("SimulateInfiniteLoop"==h?r.noExitRuntime=j:(h&&("object"===typeof h&&h.stack)&&r.U("exception thrown: "+[h,h.stack]),e(h)))}finally{}};
function Jc(a){function b(){if(!r.calledRun){r.calledRun=j;Pa||(Pa=j,Ja(La));Ja(Ma);r._main&&Ic&&r.callMain(a);if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)Ra(r.postRun.shift());Ja(Oa)}}a=a||r.arguments;Gc===m&&(Gc=Date.now());if(0<S)r.U("run() called, but dependencies remain, so not running");else{if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)Qa(r.preRun.shift());Ja(Ka);!(0<S)&&!r.calledRun&&(r.setStatus?(r.setStatus("Running..."),
setTimeout(function(){setTimeout(function(){r.setStatus("")},1);ja||b()},1)):b())}}r.run=r.Ze=Jc;function Kc(a){ja=j;v=Fc;Ja(Na);e(new Ec(a))}r.exit=r.De=Kc;function D(a){a&&(r.print(a),r.U(a));ja=j;e("abort() at "+Ba())}r.abort=r.abort=D;if(r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();var Ic=j;r.noInitialRun&&(Ic=n);Jc();


	const BYTES_PER_INT8    = 1;
	const BYTES_PER_UINT8   = 1;
	const BYTES_PER_INT16   = 2;
	const BYTES_PER_UINT16  = 2;
	const BYTES_PER_INT32   = 4;
	const BYTES_PER_UINT32  = 4;
	const BYTES_PER_FLOAT32 = 4;
	const BYTES_PER_FLOAT64 = 8;

	/**
	 * Function exported from TinyGL
	 */
	
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
	var _glOrtho = Module.cwrap('glOrtho', null, ['number', 'number', 'number', 'number', 'number', 'number']);
	var _glGenLists = Module.cwrap('glGenLists', 'number', ['number']);
	var _glDeleteLists = Module.cwrap('glDeleteLists', null, ['number', 'number']);
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
	var _glDrawArrays = Module.cwrap('glDrawArrays', null, ['number', 'number', 'number']);
	var _glDrawElements = Module.cwrap('glDrawElements', null, ['number', 'number', 'number', 'number']);
	var _glVertexPointer = Module.cwrap('glVertexPointer', null, ['number', 'number', 'number', 'number']);
	var _glColorPointer = Module.cwrap('glColorPointer', null, ['number', 'number', 'number', 'number']);
	var _glNormalPointer = Module.cwrap('glNormalPointer', null, ['number', 'number', 'number']);
	var _glTexCoordPointer = Module.cwrap('glTexCoordPointer', null, ['number', 'number', 'number', 'number']);
	var _glPolygonOffset = Module.cwrap('glPolygonOffset', null, ['number', 'number']);
	var _glGenQueries = Module.cwrap('glGenQueries', null, ['number', 'number']);
	var _glDeleteQueries = Module.cwrap('glDeleteQueries', null, ['number', 'number']);
	var _glIsQuery = Module.cwrap('glIsQuery', 'number', ['number']);
	var _glBeginQuery = Module.cwrap('glBeginQuery', null, ['number', 'number']);
	var _glEndQuery = Module.cwrap('glEndQuery', null, ['number']);
	var _glGetQueryObjectuiv = Module.cwrap('glGetQueryObjectuiv', null, ['number', 'number', 'number']);
	var _glDebug = Module.cwrap('glDebug', null, ['number']);

	/**
	 * Utility functions
	 */
	
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

	function calculateAdjustedWidth(width) {
		// TinyGL requires the width of a framebuffer to be multiples of 4
		return width & ~3;
	}

	function calculateNextPowerOfTwo(n) {
		if (n <= 8)
			return 8;
		else if (n <= 16)
			return 16;
		else if (n <= 32)
			return 32;
		else if (n <= 64)
			return 64;
		else if (n <= 128)
			return 128;
		else if (n <= 256)
			return 256;
		else if (n <= 512)
			return 512;
		else
			return 1024;
	}

	function isArrayAllocatedOnHeap(arr) {
		return ((typeof arr.buffer) != 'undefined') && (arr.buffer == Module.HEAPU8.buffer);
	};

	var util_canvas = null;

	function getUtilCanvas(width, height, auto_align_dimensions) {
		var isClean = false;
		if (!util_canvas) {
			isClean = true;
			if ((typeof document) != 'undefined')
				util_canvas = document.createElement('canvas');
		}

		if (!util_canvas)
			return null;

		// adjust width and height to be next highest power of 2
		// the maximum available dimensions for TinyGL are 1024x1024
		//
		if (auto_align_dimensions == true) {
			width  = calculateNextPowerOfTwo(width);
			height = calculateNextPowerOfTwo(height);
		}

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

	function intersectRects(r0, r1) {
		var xmax0 = r0.x + r0.w;
		var ymax0 = r0.y + r0.h;
		var xmax1 = r1.x + r1.w;
		var ymax1 = r1.y + r1.h;

		var xmin = Math.max(r0.x, r1.x);
		var ymin = Math.max(r0.y, r1.y);
		return {
			x: xmin, 
			y: ymin, 
			w: Math.min(xmax0, xmax1) - xmin, 
			h: Math.min(ymax0, ymax1) - ymin
		};
	}

	// IE11 provides a partial implementation of WebGL. For this very browser, some special treatments are required.
	var is_ie11_compatible = (typeof navigator) != 'undefined' && /Trident\/\d+\.\d+;\s.*rv:(\d+(?:\.\d+)*)/.test(navigator.userAgent);

	function createWebGLProgram(ctx3d, vsrc, fsrc) {
		var vshader = ctx3d.createShader(ctx3d.VERTEX_SHADER);
		ctx3d.shaderSource(vshader, vsrc);
		ctx3d.compileShader(vshader);
		if (!ctx3d.getShaderParameter(vshader, ctx3d.COMPILE_STATUS)) {
			debug_output.warn('Vertex shader compilation failed: ' + ctx3d.getShaderInfoLog(vshader));
			return null;
		}

		var fshader = ctx3d.createShader(ctx3d.FRAGMENT_SHADER);
		ctx3d.shaderSource(fshader, fsrc);
		ctx3d.compileShader(fshader);
		if (!ctx3d.getShaderParameter(fshader, ctx3d.COMPILE_STATUS)) {
			debug_output.warn('Fragment shader compilation failed: ' + ctx3d.getShaderInfoLog(fshader));
			return null;
		}

		var program = ctx3d.createProgram();
		ctx3d.attachShader(program, vshader);
		ctx3d.attachShader(program, fshader);
		ctx3d.linkProgram(program);
		if (!ctx3d.getProgramParameter(program, ctx3d.LINK_STATUS)) {
			debug_output.warn('Program generation failed: ' + ctx3d.getProgramInfoLog(program));
			return null;
		}

		var attributes = {};
		var attrib_count = ctx3d.getProgramParameter(program, ctx3d.ACTIVE_ATTRIBUTES);
		for (var i=0; i<attrib_count; i++) {
			var attrib = ctx3d.getActiveAttrib(program, i);
			attributes[attrib.name] = ctx3d.getAttribLocation(program, attrib.name);
		}

		var uniforms = {};
		var uniform_count = ctx3d.getProgramParameter(program, ctx3d.ACTIVE_UNIFORMS);
		for (var i=0; i<uniform_count; i++) {
			var uniform = ctx3d.getActiveUniform(program, i);
			uniforms[uniform.name] = ctx3d.getUniformLocation(program, uniform.name);
		}

		return {
			program: program, 
			attributes: attributes, 
			uniforms: uniforms
		};
	}

	function createWebGLTextureCopyPixels(ctx3d, width, height, pixels) {
		//ASSERT: (pixels instanceof Uint8Array) || pixels == null
		//ASSERT: pixels.length == width * height * BYTES_PER_UINT32

		var texture = ctx3d.createTexture();
		ctx3d.bindTexture(ctx3d.TEXTURE_2D, texture);
		ctx3d.texImage2D(ctx3d.TEXTURE_2D, 0, ctx3d.RGBA, width, height, 0, ctx3d.RGBA, ctx3d.UNSIGNED_BYTE, pixels);
		ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_MAG_FILTER, ctx3d.NEAREST);
		ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_MIN_FILTER, ctx3d.NEAREST);
		ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_WRAP_S, ctx3d.CLAMP_TO_EDGE);
		ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_WRAP_T, ctx3d.CLAMP_TO_EDGE);
		return texture;
	}


	/**
	 * Utility classes
	 */

	function Canvas2DSurfaceDriver(canvas, framebuf_width, framebuf_height) {
		this._canvas = canvas;
		this._ctx2d = canvas.getContext('2d');
		if (!this._ctx2d) {
			throw 'Canvas2DSurfaceDriver constructor failed: cannot get 2D context.';
		}

		this._img_data = this._ctx2d.createImageData(canvas.width, canvas.height);
	}

	Canvas2DSurfaceDriver.prototype = {

		deliver: function(viewport, framebuf) {
			// recreate imageData with the new canvas dimensions if they have changed
			if (this._img_data.width != this._canvas.width || this._img_data.height != this._canvas.height)
				this._img_data = this._ctx2d.createImageData(this._canvas.width, this._canvas.height);

			var dirty_rect = intersectRects(viewport, {x: 0, y: 0, w: this._img_data.width, h: this._img_data.height});

			// copy pixels from framebuffer to imageData, swapping each R and B components
			var src, dest;
			var data = this._img_data.data;
			for (var i=dirty_rect.y, m=i+dirty_rect.h; i<m; i++) {
				src  = (i * viewport.W + dirty_rect.x) << 2;
				dest = (i * this._img_data.width + dirty_rect.x) << 2;
				for (var j=dirty_rect.x, n=j+dirty_rect.w; j<n; j++) {
					data[dest    ] = framebuf[src + 2];	// R
					data[dest + 1] = framebuf[src + 1];	// G
					data[dest + 2] = framebuf[src    ];	// B
					data[dest + 3] = framebuf[src + 3];	// Alpha
					src  += 4;
					dest += 4;
				}
			}

			// update canvas display
			this._ctx2d.putImageData(this._img_data, 0, 0);
		}

	};


	function WebGLSurfaceDriver(canvas, framebuf_width, framebuf_height) {
		this._canvas = canvas;

		var preferences = {
			antialias: false, 
			preserveDrawingBuffer: true
		};
		var ctx3d = canvas.getContext('experimental-webgl', preferences) || 
					canvas.getContext('webgl', preferences);
		if (!ctx3d) {
			throw 'WebGLSurfaceDriver constructor failed: cannot get WebGL context.';
		}
		this._ctx3d = ctx3d;

		var v_shader = [
			'#ifdef GL_ES', 
			'	precision mediump float;', 
			'#endif', 
			'', 
			'attribute vec2 a_position;', 
			'attribute vec2 a_texCoord;',
			'varying vec2 v_texCoord;', 
			'', 
			'void main(void) {', 
			'	v_texCoord = a_texCoord;', 
			'	gl_Position = vec4(a_position, 1.0, 1.0);', 
			'}'
		].join('\n');
		var f_shader = [
			'#ifdef GL_ES', 
			'	precision mediump float;', 
			'#endif', 
			'', 
			'uniform sampler2D s_canvasTex;', 
			'varying vec2 v_texCoord;', 
			'', 
			'void main(void) {', 
			'	vec4 texel = texture2D(s_canvasTex, v_texCoord);', 
			'	gl_FragColor = vec4(texel.b, texel.g, texel.r, texel.a);', 
			'}'
		].join('\n');

		// create program
		this._program_info = createWebGLProgram(ctx3d, v_shader, f_shader);

		// create canvas rectangle
		//
		this._canvas_rect_coords = ctx3d.createBuffer();
		ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_coords);
		ctx3d.bufferData(ctx3d.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1]), ctx3d.STATIC_DRAW);
		this._canvas_rect_texcoords = ctx3d.createBuffer();
		ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_texcoords);
		ctx3d.bufferData(ctx3d.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0]), ctx3d.STATIC_DRAW);
		ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, null);

		// create canvas texture with the dimensions of the framebuffer
		//
		this._canvas_texture = createWebGLTextureCopyPixels(ctx3d, framebuf_width, framebuf_height, null);
		ctx3d.bindTexture(ctx3d.TEXTURE_2D, null);

		this._canvas_texture_width = framebuf_width;
		this._canvas_texture_height = framebuf_height;
	}

	WebGLSurfaceDriver.prototype = {

		deliver: function(viewport, framebuf) {
			var ctx3d = this._ctx3d;

			ctx3d.viewport(0, 0, this._canvas.width, this._canvas.height);
			ctx3d.frontFace(ctx3d.CCW);
			ctx3d.disable(ctx3d.DEPTH_TEST);
			ctx3d.depthMask(false);

			ctx3d.useProgram(this._program_info.program);

			var x = -1;
			var y = 1 - 2 * viewport.H / this._canvas.height;
			var w = 2 * viewport.W / this._canvas.width;
			var h = 2 * viewport.H / this._canvas.height;

			// update canvas display with given framebuffer
			//
			ctx3d.activeTexture(ctx3d.TEXTURE0);
			ctx3d.bindTexture(ctx3d.TEXTURE_2D, this._canvas_texture);
			ctx3d.pixelStorei(ctx3d.UNPACK_FLIP_Y_WEBGL, true);
			if (this._canvas_texture_width != viewport.W || this._canvas_texture_height != viewport.H) {
				// recreate canvas texture from the given framebuffer since viewport has changed
				ctx3d.bindTexture(ctx3d.TEXTURE_2D, null);
				ctx3d.deleteTexture(this._canvas_texture);
				this._canvas_texture = createWebGLTextureCopyPixels(ctx3d, viewport.W, viewport.H, framebuf);
				this._canvas_texture_width  = viewport.W;
				this._canvas_texture_height = viewport.H;
			} else {
				// update texture data with pixels from framebuffer
				ctx3d.texSubImage2D(ctx3d.TEXTURE_2D, 0, 0, 0, this._canvas_texture_width, this._canvas_texture_height, ctx3d.RGBA, ctx3d.UNSIGNED_BYTE, framebuf);
			}
			ctx3d.pixelStorei(ctx3d.UNPACK_FLIP_Y_WEBGL, false);
			ctx3d.uniform1i(this._program_info.uniforms['s_canvasTex'], 0);
			ctx3d.enableVertexAttribArray(this._program_info.attributes['a_position']);
			if (!is_ie11_compatible) {
				// apply viewport
				ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_coords);
				ctx3d.bufferSubData(ctx3d.ARRAY_BUFFER, 0, new Float32Array([x, y, x + w, y, x + w, y + h, x + w, y + h, x, y + h, x, y]));
			} else {
				// IE11 does not implement bufferSubData(), so we just recreate the buffer for the viewport rectangle
				ctx3d.deleteBuffer(this._canvas_rect_coords);
				this._canvas_rect_coords = ctx3d.createBuffer();
				ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_coords);
				ctx3d.bufferData(ctx3d.ARRAY_BUFFER, new Float32Array([x, y, x + w, y, x + w, y + h, x + w, y + h, x, y + h, x, y]), ctx3d.STATIC_DRAW);
			}
			ctx3d.vertexAttribPointer(this._program_info.attributes['a_position'], 2, ctx3d.FLOAT, false, 0, 0);
			ctx3d.enableVertexAttribArray(this._program_info.attributes['a_texCoord']);
			ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_texcoords);
			ctx3d.vertexAttribPointer(this._program_info.attributes['a_texCoord'], 2, ctx3d.FLOAT, false, 0, 0);
			ctx3d.drawArrays(ctx3d.TRIANGLES, 0, 6);
			ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, null);
			ctx3d.bindTexture(ctx3d.TEXTURE_2D, null);

			ctx3d.flush();
		}

	};


	/**
	 * @class 
	 */
	function TinyGLRenderingContextCtor(canvas, attribs) {
		this._surface = canvas;
		this._attribs = attribs || {};

		var w = calculateAdjustedWidth(canvas.width);
		var h = canvas.height;

		this._frame_buf_ptr = reallocateFramebuffer(w, h, 0);
		this._frame_buf_width = w;
		this._frame_buf_height = h;

		this._tgl_ctx = createTGLContext(w, h, this._frame_buf_ptr);

		this._driver = null;
		if (this._attribs.surfaceDriver != 'webgl') {
			try {
				this._driver = new Canvas2DSurfaceDriver(canvas, w, h);
			} catch (e) {
			}
		}
		if (!this._driver) {
			if (this._attribs.surfaceDriver == '2d')
				throw 'Failed to initialize TinyGL with 2D context.';

			try {
				this._driver = new WebGLSurfaceDriver(canvas, w, h);
			} catch (e) {
			}
		}
		if (!this._driver) {
			if (this._attribs.surfaceDriver == 'webgl')
				throw 'Failed to initialize TinyGL with WebGL context.';
			else
				throw 'Failed to initialize TinyGL, neither 2D context nor WebGL context is available.';
		}

		this._temp_matrix_buf_ptr = Module._malloc(16 * BYTES_PER_FLOAT32);

		this._is_select_mode = false;
		this._select_internal_buf_ptr = 0;
		this._select_internal_buf_size = 0;
		this._select_output_buf = null;
		this._select_output_buf_length = 0;

		this._array_coord_buf_ptr = 0;
		this._array_color_buf_ptr = 0;
		this._array_normal_buf_ptr = 0;
		this._array_texcoord_buf_ptr = 0;
		this._array_coord_buf_size = 0;
		this._array_color_buf_size = 0;
		this._array_normal_buf_size = 0;
		this._array_texcoord_buf_size = 0;

		this._element_index_buf_ptr = 0;
		this._element_index_buf_size = 0;

		// local cache of the viewport
		this._vp = {
			x: 0, 
			y: 0, 
			w: w, 
			h: h, 
			// the dimensions of the framebuffer according to current viewport
			W: w, // W = x + w
			H: h  // H = y + h
		};

		this._pixelStoreFlipY = false;
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

		// Matrix Modes
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

		// Occlusion queries
		//

		QUERY_COUNTER_BITS:  0x8864, 
		CURRENT_QUERY:  0x8865, 
		QUERY_RESULT:  0x8866, 
		QUERY_RESULT_AVAILABLE:  0x8867, 
		SAMPLES_PASSED:  0x8914, 

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
		 * TinyGL.js specific
		 */

		UNPACK_FLIP_Y_TINYGL:  0x9240, 

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
			Module.HEAPF32.set(m, this._temp_matrix_buf_ptr / BYTES_PER_FLOAT32);
			//console.info(new Float32Array(Module.HEAPF32.subarray(buf_ptr >> 2, (buf_ptr >> 2) + 16)));
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLoadMatrixf(this._temp_matrix_buf_ptr);
		}, 

		multMatrixf: function(m) {
			Module.HEAPF32.set(m, this._temp_matrix_buf_ptr / BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glMultMatrixf(this._temp_matrix_buf_ptr);
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
			var req_framebuf_width  = calculateAdjustedWidth(x + width);
			var req_framebuf_height = y + height;

			// resize and reallocate framebuffer if necessary
			if( req_framebuf_width != this._frame_buf_width || 
				req_framebuf_height != this._frame_buf_height ) {
				this._frame_buf_ptr = reallocateFramebuffer(req_framebuf_width, req_framebuf_height, this._frame_buf_ptr);
				this._frame_buf_width = req_framebuf_width;
				this._frame_buf_height = req_framebuf_height;

				var framebuf_ptr_arr_ptr = Module._malloc(BYTES_PER_UINT32);
				Module.setValue(framebuf_ptr_arr_ptr, this._frame_buf_ptr, 'i32');
				_ostgl_resize(this._tgl_ctx, req_framebuf_width, req_framebuf_height, framebuf_ptr_arr_ptr);
				Module._free(framebuf_ptr_arr_ptr);
			}

			// calculate the adjusted width and height of the viewport
			width  = req_framebuf_width - x;
			height = req_framebuf_height - y;

			// cache the new viewport locally
			this._vp = {
				x: x, 
				y: y, 
				w: width, 
				h: height, 
				W: req_framebuf_width, 
				H: req_framebuf_height
			};

			_glViewport(x, y, width, height);
		}, 

		ortho: function(left, right, bottom, top, near, far) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glOrtho(left, right, bottom, top, near, far);
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

		deleteLists: function(list, range) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDeleteLists(list, range);
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
					for (var i=0, ptr=this._select_internal_buf_ptr; i<this._select_output_buf_length; i++, ptr+=BYTES_PER_UINT32) {
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
			// enlarge internal buffer if necessary to store selection results
			if (this._select_internal_buf_size < size * BYTES_PER_UINT32) {
				if (this._select_internal_buf_ptr)
					Module._free(this._select_internal_buf_ptr);
				this._select_internal_buf_size = size * BYTES_PER_UINT32;
				this._select_internal_buf_ptr = Module._malloc(this._select_internal_buf_size);
			}
			// clear internal buffer
			Module._memset(this._select_internal_buf_ptr, 0, this._select_internal_buf_size);

			_ostgl_make_current(this._tgl_ctx, 0);
			_glSelectBuffer(size, this._select_internal_buf_ptr);

			// The selection results will be copied to the given output array 
			// on next call of renderMode() with mode GL_RENDER.
			this._select_output_buf = buf;
			this._select_output_buf_length = size;
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
		//TODO: consider wrapping textures as objects like those in WebGL

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

				// TinyGL only accepts one simple subset of combinations of inputs for texImage2D().
				// We check if all the imputs comply with the limitation.
				if ( target != this.TEXTURE_2D || level != 0 || components != 4 || border != 0 || 
					 format != this.RGBA || type != this.UNSIGNED_BYTE ) {
					debug_output.warn('Unsupported combination of inputs for texImage2D()');
					return;
				}

				if ((typeof pixels.buffer) != 'undefined')
					pixels = new Uint8Array(pixels.buffer);
				if (this._attribs.flipTextureY || this._pixelStoreFlipY)
					pixels = flipPixelsY(pixels, 4/* RGBA */ * width, true);
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
				 *   texImage2D(target, level, components, format, type, domElement/imageData)
				 * 
				 * where domElement can be either <img>, <video> or <canvas>. 
				 * If the last parameter is given as an ImageData, it is expected to have (or 
				 * be compatible with) the following structure:
				 * 
				 *   ImageData {
				 *      width:  <number>, 
				 *      height: <number>, 
				 *      data:   <Array>/<TypedArray>
				 * }
				 * 
				 * where data array should have a size of at least 4 * width * height.
				 */

				var domElement = arguments[5];
				var elem_type = '';
				if ((typeof HTMLImageElement) != 'undefined' && (domElement instanceof HTMLImageElement)) {
					elem_type = 'image';
				} else if ((typeof HTMLVideoElement) != 'undefined' && (domElement instanceof HTMLVideoElement)) {
					elem_type = 'video';
				} else if ((typeof HTMLCanvasElement) != 'undefined' && (domElement instanceof HTMLCanvasElement)) {
					elem_type = 'canvas';
				} else if ((typeof domElement.width) == 'number' && (typeof domElement.height) == 'number' && 
						   domElement.data && (typeof domElement.data.length) == 'number') {
					if (domElement.data.length < 4 * domElement.width * domElement.height) {
						debug_output.warn('Insufficient data for texImage2D()');
						return;
					}
					elem_type = 'ImageData';
				}

				var imgData = null;
				switch (elem_type) {
				case 'image':
				case 'video':
					var cv = getUtilCanvas(domElement.width, domElement.height, true);
					var ctx2d = cv.getContext('2d');
					try {
						ctx2d.drawImage(domElement, 0, 0, cv.width, cv.height);
					} catch (e) {
					}
					imgData = ctx2d.getImageData(0, 0, cv.width, cv.height);
					break;
				case 'canvas':
					var ctx2d = domElement.getContext('2d');
					//TODO: shall we also resample the canvas input?
					imgData = ctx2d.getImageData(0, 0, domElement.width, domElement.height);
					break;
				case 'ImageData':
					imgData = domElement;
					break;
				default:
					debug_output.warn('Unacceptable inputs for texImage2D()');
					return;
				}

				var pixels = imgData.data;
				if (this._attribs.flipTextureY || this._pixelStoreFlipY)
					flipPixelsY(pixels, 4/* RGBA */ * imgData.width);

				var buf_ptr = Module._malloc(pixels.length);
				Module.HEAPU8.set(pixels, buf_ptr);
				_glTexImage2D(target, level, 4, imgData.width, imgData.height, 0, this.RGBA, this.UNSIGNED_BYTE, buf_ptr);
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
			switch (pname) {
			case this.UNPACK_FLIP_Y_TINYGL:
				// we implement the non-standard parameter UNPACK_FLIP_Y_TINYGL 
				// in the wrapper layer rather than in TinyGL
				this._pixelStoreFlipY = !!param;
				break;
			default:
				_glPixelStorei(pname, param);
				break;
			}
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
			var buf_ptr = Module._malloc(v.length * BYTES_PER_INT32);
			Module._memset(buf_ptr, 0, v.length * BYTES_PER_INT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glGetIntegerv(pname, buf_ptr);
			for (var i=0, ptr=buf_ptr; i<v.length; i++, ptr+=BYTES_PER_INT32) {
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

		drawArrays: function(mode, first, count) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDrawArrays(mode, first, count);
		}, 

		drawElements: function(mode, count, type, indices) {
			_ostgl_make_current(this._tgl_ctx, 0);

			// TinyGL's implementation of glDrawElements() accepts both GL_UNSIGNED_SHORT 
			// and GL_UNSIGNED_INT, the latter of which is nonstandard, as type of the 
			// given indices. This implies that the maximum index (65535) restriction will 
			// not be applied when type == GL_UNSIGNED_INT thus any integer number that is 
			// >= 0 can be used as a valid index value.
			if (type != this.UNSIGNED_SHORT && type != this.UNSIGNED_INT) {
				debug_output.warn('Unsupported type for drawElements()');
				return;
			}

			var bytesPerElement;
			switch (type) {
			case this.UNSIGNED_INT:
				bytesPerElement = BYTES_PER_UINT32;
				break;
			case this.UNSIGNED_SHORT:
			default:
				bytesPerElement = BYTES_PER_UINT16;
				break;
			}

			if ( isArrayAllocatedOnHeap(indices) && (indices.BYTES_PER_ELEMENT == bytesPerElement) )
				_glDrawElements(mode, count, type, indices.byteOffset);
			else {
				// enlarge index buffer if necessary to accept all the indices
				if (this._element_index_buf_size < indices.length * bytesPerElement) {
					if (this._element_index_buf_ptr)
						Module._free(this._element_index_buf_ptr);
					this._element_index_buf_size = indices.length * bytesPerElement;
					this._element_index_buf_ptr = Module._malloc(this._element_index_buf_size);
				}
				// copy indices into the internal buffer on heap
				switch (type) {
				case this.UNSIGNED_INT:
					Module.HEAPU32.set(indices, this._element_index_buf_ptr / bytesPerElement);
					break;
				case this.UNSIGNED_SHORT:
				default:
					Module.HEAPU16.set(indices, this._element_index_buf_ptr / bytesPerElement);
					break;
				}

				_glDrawElements(mode, count, type, this._element_index_buf_ptr);
			}
		}, 

		vertexPointer: function(size, type, stride, data) {
			_ostgl_make_current(this._tgl_ctx, 0);

			// Check if the inputs comply with TinyGL's limitation.
			if (type != this.FLOAT || stride != 0) {
				debug_output.warn('Unsupported combination of inputs for vertexPointer()');
				return;
			}

			if ( isArrayAllocatedOnHeap(data) && (data instanceof Float32Array) )
				_glVertexPointer(size, type, stride, data.byteOffset);
			else {
				// enlarge coord buffer if necessary to accept all the elements
				if (this._array_coord_buf_size < data.length * BYTES_PER_FLOAT32) {
					if (this._array_coord_buf_ptr)
						Module._free(this._array_coord_buf_ptr);
					this._array_coord_buf_size = data.length * BYTES_PER_FLOAT32;
					this._array_coord_buf_ptr = Module._malloc(this._array_coord_buf_size);
				}
				// copy elements into heap memory
				Module.HEAPF32.set(data, this._array_coord_buf_ptr / BYTES_PER_FLOAT32);

				_glVertexPointer(size, type, stride, this._array_coord_buf_ptr);
			}
		}, 

		colorPointer: function(size, type, stride, data) {
			_ostgl_make_current(this._tgl_ctx, 0);

			// Check if the inputs comply with TinyGL's limitation.
			if (type != this.FLOAT || stride != 0) {
				debug_output.warn('Unsupported combination of inputs for colorPointer()');
				return;
			}

			if ( isArrayAllocatedOnHeap(data) && (data instanceof Float32Array) )
				_glColorPointer(size, type, stride, data.byteOffset);
			else {
				// enlarge color buffer if necessary to accept all the elements
				if (this._array_color_buf_size < data.length * BYTES_PER_FLOAT32) {
					if (this._array_color_buf_ptr)
						Module._free(this._array_color_buf_ptr);
					this._array_color_buf_size = data.length * BYTES_PER_FLOAT32;
					this._array_color_buf_ptr = Module._malloc(this._array_color_buf_size);
				}
				// copy elements into heap memory
				Module.HEAPF32.set(data, this._array_color_buf_ptr / BYTES_PER_FLOAT32);

				_glColorPointer(size, type, stride, this._array_color_buf_ptr);
			}
		}, 

		normalPointer: function(type, stride, data) {
			_ostgl_make_current(this._tgl_ctx, 0);

			// Check if the inputs comply with TinyGL's limitation.
			if (type != this.FLOAT || stride != 0) {
				debug_output.warn('Unsupported combination of inputs for normalPointer()');
				return;
			}

			if ( isArrayAllocatedOnHeap(data) && (data instanceof Float32Array) )
				_glNormalPointer(type, stride, data.byteOffset);
			else {
				// enlarge normal buffer if necessary to accept all the elements
				if (this._array_normal_buf_size < data.length * BYTES_PER_FLOAT32) {
					if (this._array_normal_buf_ptr)
						Module._free(this._array_normal_buf_ptr);
					this._array_normal_buf_size = data.length * BYTES_PER_FLOAT32;
					this._array_normal_buf_ptr = Module._malloc(this._array_normal_buf_size);
				}
				// copy elements into heap memory
				Module.HEAPF32.set(data, this._array_normal_buf_ptr / BYTES_PER_FLOAT32);

				_glNormalPointer(type, stride, this._array_normal_buf_ptr);
			}
		}, 

		texCoordPointer: function(size, type, stride, data) {
			_ostgl_make_current(this._tgl_ctx, 0);

			// Check if the inputs comply with TinyGL's limitation.
			if (type != this.FLOAT || stride != 0) {
				debug_output.warn('Unsupported combination of inputs for texCoordPointer()');
				return;
			}

			if ( isArrayAllocatedOnHeap(data) && (data instanceof Float32Array) )
				_glTexCoordPointer(size, type, stride, data.byteOffset);
			else {
				// enlarge texcoord buffer if necessary to accept all the elements
				if (this._array_texcoord_buf_size < data.length * BYTES_PER_FLOAT32) {
					if (this._array_texcoord_buf_ptr)
						Module._free(this._array_texcoord_buf_ptr);
					this._array_texcoord_buf_size = data.length * BYTES_PER_FLOAT32;
					this._array_texcoord_buf_ptr = Module._malloc(this._array_texcoord_buf_size);
				}
				// copy elements into heap memory
				Module.HEAPF32.set(data, this._array_texcoord_buf_ptr / BYTES_PER_FLOAT32);

				_glTexCoordPointer(size, type, stride, this._array_texcoord_buf_ptr);
			}
		}, 

		// opengl 1.2 polygon offset
		//
		polygonOffset: function(factor, units) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPolygonOffset(factor, units);
		}, 

		// Occlusion queries
		//

		genQueries: function(num, ids) {
			ids = ids || new Uint32Array(num);
			var buf_ptr = Module._malloc(num * BYTES_PER_UINT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glGenQueries(num, buf_ptr);
			for (var i=0, ptr=buf_ptr; i<num; i++, ptr+=BYTES_PER_UINT32) {
				ids[i] = Module.getValue(ptr, 'i32');
			}
			Module._free(buf_ptr);
			return ids;
		}, 

		deleteQueries: function(num, ids) {
			var buf_ptr = Module._malloc(num * BYTES_PER_UINT32);
			Module.HEAPU32.set(ids, buf_ptr / BYTES_PER_UINT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDeleteQueries(num, buf_ptr);
			Module._free(buf_ptr);
		}, 

		isQuery: function(query) {
			_ostgl_make_current(this._tgl_ctx, 0);
			return _glIsQuery(query);
		}, 

		beginQuery: function(target, query) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glBeginQuery(target, query);
		}, 

		endQuery: function(target) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEndQuery(target);
		}, 

		getQueryObjectuiv: function(query, pname, v) {
			var buf_ptr = Module._malloc(BYTES_PER_INT32);
			Module._memset(buf_ptr, 0, BYTES_PER_INT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glGetQueryObjectuiv(query, pname, buf_ptr);
			var val = Module.getValue(buf_ptr, 'i32');
			Module._free(buf_ptr);
			if (v)
				v[0] = val;
			return val;
		}, 

		// Non-compatible functions
		//

		debug: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDebug(mode);
		}, 

		swapBuffers: function() {
			var frame_buf_size = this._frame_buf_width * this._frame_buf_height * BYTES_PER_UINT32;
			var frame_buf = Module.HEAPU8.subarray(this._frame_buf_ptr, this._frame_buf_ptr + frame_buf_size);
			this._driver.deliver(this._vp, frame_buf);
		}

	};


	/**
	 * Export TinyGL rendering context class
	 */
	TinyGLRenderingContext = TinyGLRenderingContextCtor;

}


/**
 * Replace the default HTMLCanvasElement.prototype.getContext() method with our homemade 
 * implementation, so that a TinyGL rendering context can be fetched using the following 
 * semantics: 
 *
 *   var canvas = document.getElementById(canvas_id);
 *   var gl = canvas.getContext('experimental-tinygl');
 *   ...
 *
 * just as what we do when requiring a canvas2D or a WebGL context. The function call will
 * automatically initialize the TinyGL runtime if it is not initialized yet.
 */
if ((typeof HTMLCanvasElement) != 'undefined') {
	try {
		var default_get_context_func = HTMLCanvasElement.prototype.getContext;
		HTMLCanvasElement.prototype.getContext = function() {
			if (arguments[0] == 'experimental-tinygl') {
				try {
					// initialize TinyGL runtime if not yet
					if (!TinyGLRenderingContext)
						initializeTinyGLRuntime(arguments[1]);
					return new TinyGLRenderingContext(this, arguments[1]);
				} catch (e) {
					return null;
				}
			}
			return default_get_context_func.apply(this, arguments);
		};
	} catch (e) {
	}
}
