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

/**
 * @preserve
 * var TinyGLRenderingContext;
 */

var DEBUG = true;

function initializeTinyGLRuntime(options) {
	// define a console for message output
	var debug_output = (typeof console) != 'undefined' ? console : {
		info:  function() {}, 
		warn:  function() {}, 
		error: function() {}
	};
	
	const print = console.log.bind(console);

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
