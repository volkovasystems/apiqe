"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "apiqe",
			"path": "apiqe/apiqe.js",
			"file": "apiqe.js",
			"module": "apiqe",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/apiqe.git",
			"test": "apiqe-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Append unique array elements.

		This will do shallow comparison.
	@end-module-documentation

	@include:
		{
			"eqe": "eqe",
			"doubt": "doubt",
			"een": "een"
		}
	@end-include
*/

const eqe = require( "eqe" );
const doubt = require( "doubt" );
const een = require( "een" );

const apiqe = function apiqe( target, source ){
	/*;
		@meta-configuration:
			{
				"target:required": Array,
				"source:required": Array
			}
		@end-meta-configuration
	*/

	if( !doubt( target, ARRAY ) ){
		throw new Error( "invalid target array" );
	}

	if( !doubt( source, ARRAY ) ){
		throw new Error( "invalid source array" );
	}

	source.forEach( ( value ) => {
		!een( target, value, ( element, value ) => eqe( element, value ) ) && target.push( value );
	} );

	return target;
};

module.exports = apiqe;
