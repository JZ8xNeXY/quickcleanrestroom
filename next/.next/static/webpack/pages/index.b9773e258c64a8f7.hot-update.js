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

/***/ "./src/utils/loadGoogleMapsAPI.ts":
/*!****************************************!*\
  !*** ./src/utils/loadGoogleMapsAPI.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadGoogleMapsAPI: function() { return /* binding */ loadGoogleMapsAPI; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar loadGoogleMapsAPI = function loadGoogleMapsAPI() {\n  ;\n  (function (g) {\n    var h,\n      a,\n      k,\n      p = 'The Google Maps JavaScript API',\n      c = 'google',\n      l = 'importLibrary',\n      q = '__ib__',\n      m = document,\n      b = window;\n    b = b[c] || (b[c] = {});\n    var d = b.maps || (b.maps = {}),\n      e = new URLSearchParams(),\n      u = function u() {\n        return h || (h = new Promise( /*#__PURE__*/function () {\n          var _ref = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(f, n) {\n            var _m$querySelector;\n            return _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n              while (1) switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return a = m.createElement('script');\n                case 2:\n                  e.set('libraries', +'');\n                  for (k in g) e.set(k.replace(/[A-Z]/g, function (t) {\n                    return '_' + t[0].toLowerCase();\n                  }), g[k]);\n                  e.set('callback', c + '.maps.' + q);\n                  a.src = \"https://maps.\".concat(c, \"apis.com/maps/api/js?\") + e;\n                  d[q] = f;\n                  a.onerror = function () {\n                    return h = n(Error(p + ' could not load.'));\n                  };\n                  a.nonce = ((_m$querySelector = m.querySelector('script[nonce]')) === null || _m$querySelector === void 0 ? void 0 : _m$querySelector.nonce) || '';\n                  m.head.append(a);\n                case 10:\n                case \"end\":\n                  return _context.stop();\n              }\n            }, _callee);\n          }));\n          return function (_x, _x2) {\n            return _ref.apply(this, arguments);\n          };\n        }()));\n      };\n    if (!d[l]) {\n      d[l] = function (f) {\n        for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n          n[_key - 1] = arguments[_key];\n        }\n        return u().then(function () {\n          return d[l].apply(d, [f].concat(n));\n        });\n      };\n\n      // APIのロードを試みる\n      u().then(function () {\n        //ここは別のファイルへ移行させる予定\n        var mapElement = document.getElementById('map');\n        if (mapElement) {\n          var map = new google.maps.Map(mapElement, {\n            zoom: 16,\n            mapId: 'DEMO_MAP_ID',\n            maxZoom: 25,\n            center: {\n              lat: 35.681236,\n              lng: 139.767125\n            }\n          });\n        }\n      })[\"catch\"](function (error) {\n        console.error('Google Maps APIのロードに失敗しました:', error);\n      });\n    }\n  })({\n    key: 'AIzaSyBn3XhYjntZhpSHJJHtjc0AMsjXuhY-cPQ',\n    v: 'beta'\n  });\n};\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLHlDQUF5QztJQUM5Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvbG9hZEdvb2dsZU1hcHNBUEkudHM/ZDZhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbG9hZEdvb2dsZU1hcHNBUEkgPSAoKSA9PiB7XG4gIDsoKGcpID0+IHtcbiAgICBsZXQgaCxcbiAgICAgIGEsXG4gICAgICBrLFxuICAgICAgcCA9ICdUaGUgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEknLFxuICAgICAgYyA9ICdnb29nbGUnLFxuICAgICAgbCA9ICdpbXBvcnRMaWJyYXJ5JyxcbiAgICAgIHEgPSAnX19pYl9fJyxcbiAgICAgIG0gPSBkb2N1bWVudCxcbiAgICAgIGIgPSB3aW5kb3dcbiAgICBiID0gYltjXSB8fCAoYltjXSA9IHt9KVxuICAgIGNvbnN0IGQgPSBiLm1hcHMgfHwgKGIubWFwcyA9IHt9KSxcbiAgICAgIGUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCksXG4gICAgICB1ID0gKCkgPT5cbiAgICAgICAgaCB8fFxuICAgICAgICAoaCA9IG5ldyBQcm9taXNlKGFzeW5jIChmLCBuKSA9PiB7XG4gICAgICAgICAgYXdhaXQgKGEgPSBtLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVxuICAgICAgICAgIGUuc2V0KCdsaWJyYXJpZXMnLCArJycpXG4gICAgICAgICAgZm9yIChrIGluIGcpXG4gICAgICAgICAgICBlLnNldChcbiAgICAgICAgICAgICAgay5yZXBsYWNlKC9bQS1aXS9nLCAodCkgPT4gJ18nICsgdFswXS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgZ1trXSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICBlLnNldCgnY2FsbGJhY2snLCBjICsgJy5tYXBzLicgKyBxKVxuICAgICAgICAgIGEuc3JjID0gYGh0dHBzOi8vbWFwcy4ke2N9YXBpcy5jb20vbWFwcy9hcGkvanM/YCArIGVcbiAgICAgICAgICBkW3FdID0gZlxuICAgICAgICAgIGEub25lcnJvciA9ICgpID0+IChoID0gbihFcnJvcihwICsgJyBjb3VsZCBub3QgbG9hZC4nKSkpXG4gICAgICAgICAgYS5ub25jZSA9IG0ucXVlcnlTZWxlY3Rvcignc2NyaXB0W25vbmNlXScpPy5ub25jZSB8fCAnJ1xuICAgICAgICAgIG0uaGVhZC5hcHBlbmQoYSlcbiAgICAgICAgfSkpXG4gICAgaWYgKCFkW2xdKSB7XG4gICAgICBkW2xdID0gKGYsIC4uLm4pID0+IHUoKS50aGVuKCgpID0+IGRbbF0oZiwgLi4ubikpXG5cbiAgICAgIC8vIEFQSeOBruODreODvOODieOCkuippuOBv+OCi1xuICAgICAgdSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAvL+OBk+OBk+OBr+WIpeOBruODleOCoeOCpOODq+OBuOenu+ihjOOBleOBm+OCi+S6iOWumlxuICAgICAgICAgIGNvbnN0IG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJylcblxuICAgICAgICAgIGlmIChtYXBFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgem9vbTogMTYsXG4gICAgICAgICAgICAgIG1hcElkOiAnREVNT19NQVBfSUQnLFxuICAgICAgICAgICAgICBtYXhab29tOiAyNSxcbiAgICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogMzUuNjgxMjM2LCBsbmc6IDEzOS43NjcxMjUgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignR29vZ2xlIE1hcHMgQVBJ44Gu44Ot44O844OJ44Gr5aSx5pWX44GX44G+44GX44GfOicsIGVycm9yKVxuICAgICAgICB9KVxuICAgIH1cbiAgfSkoe1xuICAgIGtleTogJ0FJemFTeUJuM1hoWWpudFpocFNISkpIdGpjMEFNc2pYdWhZLWNQUScsXG4gICAgdjogJ2JldGEnLFxuICB9KVxufVxuIl0sIm5hbWVzIjpbImxvYWRHb29nbGVNYXBzQVBJIiwiZyIsImgiLCJhIiwiayIsInAiLCJjIiwibCIsInEiLCJtIiwiZG9jdW1lbnQiLCJiIiwid2luZG93IiwiZCIsIm1hcHMiLCJlIiwiVVJMU2VhcmNoUGFyYW1zIiwidSIsIlByb21pc2UiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJmIiwibiIsIl9tJHF1ZXJ5U2VsZWN0b3IiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiY3JlYXRlRWxlbWVudCIsInNldCIsInJlcGxhY2UiLCJ0IiwidG9Mb3dlckNhc2UiLCJzcmMiLCJjb25jYXQiLCJvbmVycm9yIiwiRXJyb3IiLCJub25jZSIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkIiwiYXBwZW5kIiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfbGVuIiwibGVuZ3RoIiwiQXJyYXkiLCJfa2V5IiwidGhlbiIsIm1hcEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsImdvb2dsZSIsIk1hcCIsInpvb20iLCJtYXBJZCIsIm1heFpvb20iLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJlcnJvciIsImNvbnNvbGUiLCJrZXkiLCJ2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/loadGoogleMapsAPI.ts\n"));

/***/ })

});