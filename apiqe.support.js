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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"een": "een",
              			"raze": "raze"
              		}
              	@end-include
              */

var een = require("een");
var raze = require("raze");

var apiqe = function apiqe(target, source) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"target:required": "[*]",
                                            			"source:required": "[*]"
                                            		}
                                            	@end-meta-configuration
                                            */

	target = raze(target);
	source = raze(source).reverse();

	var index = source.length;
	while (index--) {
		var value = source[index];
		!een(target, value) && target.push(value);
	}

	return target;
};

module.exports = apiqe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaXFlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZWVuIiwicmVxdWlyZSIsInJhemUiLCJhcGlxZSIsInRhcmdldCIsInNvdXJjZSIsInJldmVyc2UiLCJpbmRleCIsImxlbmd0aCIsInZhbHVlIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxNQUFNQyxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1FLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzdDOzs7Ozs7Ozs7QUFTQUQsVUFBU0YsS0FBTUUsTUFBTixDQUFUO0FBQ0FDLFVBQVNILEtBQU1HLE1BQU4sRUFBZUMsT0FBZixFQUFUOztBQUVBLEtBQUlDLFFBQVFGLE9BQU9HLE1BQW5CO0FBQ0EsUUFBT0QsT0FBUCxFQUFnQjtBQUNmLE1BQUlFLFFBQVFKLE9BQVFFLEtBQVIsQ0FBWjtBQUNBLEdBQUNQLElBQUtJLE1BQUwsRUFBYUssS0FBYixDQUFELElBQXlCTCxPQUFPTSxJQUFQLENBQWFELEtBQWIsQ0FBekI7QUFDQTs7QUFFRCxRQUFPTCxNQUFQO0FBQ0EsQ0FwQkQ7O0FBc0JBTyxPQUFPQyxPQUFQLEdBQWlCVCxLQUFqQiIsImZpbGUiOiJhcGlxZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImFwaXFlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImFwaXFlL2FwaXFlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImFwaXFlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiYXBpcWVcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYXBpcWUuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImFwaXFlLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0QXBwZW5kIHVuaXF1ZSBhcnJheSBlbGVtZW50cy5cclxuXHJcblx0XHRUaGlzIHdpbGwgZG8gc2hhbGxvdyBjb21wYXJpc29uLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZWVuXCI6IFwiZWVuXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZWVuID0gcmVxdWlyZSggXCJlZW5cIiApO1xyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcclxuXHJcbmNvbnN0IGFwaXFlID0gZnVuY3Rpb24gYXBpcWUoIHRhcmdldCwgc291cmNlICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogXCJbKl1cIixcclxuXHRcdFx0XHRcInNvdXJjZTpyZXF1aXJlZFwiOiBcIlsqXVwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0dGFyZ2V0ID0gcmF6ZSggdGFyZ2V0ICk7XHJcblx0c291cmNlID0gcmF6ZSggc291cmNlICkucmV2ZXJzZSggKTtcclxuXHJcblx0bGV0IGluZGV4ID0gc291cmNlLmxlbmd0aDtcclxuXHR3aGlsZSggaW5kZXgtLSApe1xyXG5cdFx0bGV0IHZhbHVlID0gc291cmNlWyBpbmRleCBdO1xyXG5cdFx0IWVlbiggdGFyZ2V0LCB2YWx1ZSApICYmIHRhcmdldC5wdXNoKCB2YWx1ZSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBpcWU7XHJcbiJdfQ==
//# sourceMappingURL=apiqe.support.js.map
