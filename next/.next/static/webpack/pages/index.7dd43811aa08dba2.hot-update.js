"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/initMap.ts":
/*!******************************!*\
  !*** ./src/utils/initMap.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMap: function() { return /* binding */ initMap; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// //マップを表示する\nvar initMap = /*#__PURE__*/function () {\n  var _ref = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(setMap) {\n    var mapElement, map;\n    return _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          mapElement = document.getElementById('map');\n          if (mapElement) {\n            map = new google.maps.Map(mapElement, {\n              zoom: 16,\n              mapId: 'DEMO_MAP_ID',\n              maxZoom: 25,\n              center: {\n                lat: 35.681236,\n                lng: 139.767125\n              }\n            });\n            setMap(map);\n          } else {\n            console.error('Google Maps API is not available');\n          }\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function initMap(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaW5pdE1hcC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNPLElBQU1BLE9BQU87RUFBQSxJQUFBQyxJQUFBLEdBQUFDLDhIQUFBLGVBQUFDLGdHQUFBLENBQUcsU0FBQUUsUUFBT0MsTUFBVztJQUFBLElBQUFDLFVBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFMLGdHQUFBLFVBQUFPLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQ2pDTixVQUFVLEdBQUdPLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztVQUVqRCxJQUFJUixVQUFVLEVBQUU7WUFDUkMsR0FBRyxHQUFHLElBQUlRLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUNYLFVBQVUsRUFBRTtjQUMxQ1ksSUFBSSxFQUFFLEVBQUU7Y0FDUkMsS0FBSyxFQUFFLGFBQWE7Y0FDcEJDLE9BQU8sRUFBRSxFQUFFO2NBQ1hDLE1BQU0sRUFBRTtnQkFBRUMsR0FBRyxFQUFFLFNBQVM7Z0JBQUVDLEdBQUcsRUFBRTtjQUFXO1lBQzVDLENBQUMsQ0FBQztZQUVGbEIsTUFBTSxDQUFDRSxHQUFHLENBQUM7VUFDYixDQUFDLE1BQU07WUFDTGlCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO1VBQ25EO1FBQUM7UUFBQTtVQUFBLE9BQUFmLFFBQUEsQ0FBQWdCLElBQUE7TUFBQTtJQUFBLEdBQUF0QixPQUFBO0VBQUEsQ0FDRjtFQUFBLGdCQWZZTCxPQUFPQSxDQUFBNEIsRUFBQTtJQUFBLE9BQUEzQixJQUFBLENBQUE0QixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBZW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9pbml0TWFwLnRzPzJhMWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy/jg57jg4Pjg5fjgpLooajnpLrjgZnjgotcbmV4cG9ydCBjb25zdCBpbml0TWFwID0gYXN5bmMgKHNldE1hcDogYW55KSA9PiB7XG4gIGNvbnN0IG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJylcblxuICBpZiAobWFwRWxlbWVudCkge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwge1xuICAgICAgem9vbTogMTYsXG4gICAgICBtYXBJZDogJ0RFTU9fTUFQX0lEJyxcbiAgICAgIG1heFpvb206IDI1LFxuICAgICAgY2VudGVyOiB7IGxhdDogMzUuNjgxMjM2LCBsbmc6IDEzOS43NjcxMjUgfSxcbiAgICB9KVxuXG4gICAgc2V0TWFwKG1hcClcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGUgTWFwcyBBUEkgaXMgbm90IGF2YWlsYWJsZScpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpbml0TWFwIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwic2V0TWFwIiwibWFwRWxlbWVudCIsIm1hcCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsInpvb20iLCJtYXBJZCIsIm1heFpvb20iLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJjb25zb2xlIiwiZXJyb3IiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/initMap.ts\n"));

/***/ })

});