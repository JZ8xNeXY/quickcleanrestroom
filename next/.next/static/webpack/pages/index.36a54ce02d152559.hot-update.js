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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadGoogleMapsAPI: function() { return /* binding */ loadGoogleMapsAPI; }\n/* harmony export */ });\n/* harmony import */ var _initMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMap */ \"./src/utils/initMap.ts\");\n\n//GoogleMapsAPIのマニュアルで公表されている式を修正\nvar loadGoogleMapsAPI = function loadGoogleMapsAPI(setMap) {\n  // Google Maps APIの設定\n  var config = {\n    key: \"AIzaSyAShpWqkPZNUZPyQfTIVRn2IPhNDoYmqRg\" || 0,\n    v: 'beta'\n  };\n\n  // Google Maps APIのスクリプトを非同期でロードする関数\n  var loadScript = function loadScript(src) {\n    return new Promise(function (resolve, reject) {\n      var script = document.createElement('script');\n      script.src = src;\n      script.onload = function () {\n        return resolve();\n      };\n      script.onerror = function () {\n        return reject(new Error('Script load error'));\n      };\n      document.head.appendChild(script);\n    });\n  };\n\n  // Google Maps APIのスクリプトURLを作成\n  var scriptSrc = \"https://maps.googleapis.com/maps/api/js?key=\".concat(config.key, \"&v=\").concat(config.v);\n\n  // スクリプトをロードして地図を初期化\n  loadScript(scriptSrc).then(function () {\n    (0,_initMap__WEBPACK_IMPORTED_MODULE_0__.initMap)(setMap); // スクリプトのロードが成功したら地図を初期化\n  })[\"catch\"](function (error) {\n    console.error(error); // エラーが発生したらログに出力\n  });\n};\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbG9hZEdvb2dsZU1hcHNBUEkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFPbkM7QUFDTyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUM1QkMsTUFBb0UsRUFDakU7RUFDSDtFQUNBLElBQU1DLE1BQXdCLEdBQUc7SUFDL0JDLEdBQUcsRUFBRUMseUNBQStCLElBQUksQ0FBRTtJQUMxQ0csQ0FBQyxFQUFFO0VBQ0wsQ0FBQzs7RUFFRDtFQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJQyxHQUFXLEVBQW9CO0lBQ2pELE9BQU8sSUFBSUMsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO01BQ3RDLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQy9DRixNQUFNLENBQUNKLEdBQUcsR0FBR0EsR0FBRztNQUNoQkksTUFBTSxDQUFDRyxNQUFNLEdBQUc7UUFBQSxPQUFNTCxPQUFPLENBQUMsQ0FBQztNQUFBO01BQy9CRSxNQUFNLENBQUNJLE9BQU8sR0FBRztRQUFBLE9BQU1MLE1BQU0sQ0FBQyxJQUFJTSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztNQUFBO01BQzdESixRQUFRLENBQUNLLElBQUksQ0FBQ0MsV0FBVyxDQUFDUCxNQUFNLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0VBQ0osQ0FBQzs7RUFFRDtFQUNBLElBQU1RLFNBQVMsa0RBQUFDLE1BQUEsQ0FBa0RwQixNQUFNLENBQUNDLEdBQUcsU0FBQW1CLE1BQUEsQ0FBTXBCLE1BQU0sQ0FBQ0ssQ0FBQyxDQUFFOztFQUUzRjtFQUNBQyxVQUFVLENBQUNhLFNBQVMsQ0FBQyxDQUNsQkUsSUFBSSxDQUFDLFlBQU07SUFDVnhCLGlEQUFPLENBQUNFLE1BQU0sQ0FBQyxFQUFDO0VBQ2xCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ3VCLEtBQUssRUFBSztJQUNoQkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQyxFQUFDO0VBQ3ZCLENBQUMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2xvYWRHb29nbGVNYXBzQVBJLnRzP2Q2YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdE1hcCB9IGZyb20gJy4vaW5pdE1hcCdcblxuaW50ZXJmYWNlIEdvb2dsZU1hcHNDb25maWcge1xuICBrZXk6IHN0cmluZ1xuICB2OiBzdHJpbmdcbn1cblxuLy9Hb29nbGVNYXBzQVBJ44Gu44Oe44OL44Ol44Ki44Or44Gn5YWs6KGo44GV44KM44Gm44GE44KL5byP44KS5L+u5q2jXG5leHBvcnQgY29uc3QgbG9hZEdvb2dsZU1hcHNBUEkgPSAoXG4gIHNldE1hcDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Z29vZ2xlLm1hcHMuTWFwIHwgbnVsbD4+LFxuKSA9PiB7XG4gIC8vIEdvb2dsZSBNYXBzIEFQSeOBruioreWumlxuICBjb25zdCBjb25maWc6IEdvb2dsZU1hcHNDb25maWcgPSB7XG4gICAga2V5OiBwcm9jZXNzLmVudi5HT09HTEVfTUFQU19BUElfS0VZIHx8ICcnLFxuICAgIHY6ICdiZXRhJyxcbiAgfVxuXG4gIC8vIEdvb2dsZSBNYXBzIEFQSeOBruOCueOCr+ODquODl+ODiOOCkumdnuWQjOacn+OBp+ODreODvOODieOBmeOCi+mWouaVsFxuICBjb25zdCBsb2FkU2NyaXB0ID0gKHNyYzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpXG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoJ1NjcmlwdCBsb2FkIGVycm9yJykpXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICB9KVxuICB9XG5cbiAgLy8gR29vZ2xlIE1hcHMgQVBJ44Gu44K544Kv44Oq44OX44OIVVJM44KS5L2c5oiQXG4gIGNvbnN0IHNjcmlwdFNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7Y29uZmlnLmtleX0mdj0ke2NvbmZpZy52fWBcblxuICAvLyDjgrnjgq/jg6rjg5fjg4jjgpLjg63jg7zjg4njgZfjgablnLDlm7PjgpLliJ3mnJ/ljJZcbiAgbG9hZFNjcmlwdChzY3JpcHRTcmMpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgaW5pdE1hcChzZXRNYXApIC8vIOOCueOCr+ODquODl+ODiOOBruODreODvOODieOBjOaIkOWKn+OBl+OBn+OCieWcsOWbs+OCkuWIneacn+WMllxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcikgLy8g44Ko44Op44O844GM55m655Sf44GX44Gf44KJ44Ot44Kw44Gr5Ye65YqbXG4gICAgfSlcbn1cbiJdLCJuYW1lcyI6WyJpbml0TWFwIiwibG9hZEdvb2dsZU1hcHNBUEkiLCJzZXRNYXAiLCJjb25maWciLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX01BUFNfQVBJX0tFWSIsInYiLCJsb2FkU2NyaXB0Iiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvbmxvYWQiLCJvbmVycm9yIiwiRXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzY3JpcHRTcmMiLCJjb25jYXQiLCJ0aGVuIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/loadGoogleMapsAPI.ts\n"));

/***/ })

});