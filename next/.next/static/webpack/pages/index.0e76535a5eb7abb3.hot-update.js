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

/***/ "./src/components/AddMarkers.tsx":
/*!***************************************!*\
  !*** ./src/components/AddMarkers.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/AddMarkers.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar AddMarkers = function AddMarkers(props) {\n  _s();\n  //Railsからデータを読み込み indexアクション\n  var url = 'http://localhost:3000/api/v1/posts';\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_4__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  var posts = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(data);\n  var map = props.map;\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var addMarkers = /*#__PURE__*/function () {\n      var _ref = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var _yield$google$maps$im, AdvancedMarkerElement;\n        return _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              if (!(map && data)) {\n                _context.next = 6;\n                break;\n              }\n              _context.next = 3;\n              return google.maps.importLibrary('marker');\n            case 3:\n              _yield$google$maps$im = _context.sent;\n              AdvancedMarkerElement = _yield$google$maps$im.AdvancedMarkerElement;\n              new AdvancedMarkerElement({\n                map: map,\n                position: {\n                  lat: 35.681236,\n                  lng: 139.767125\n                },\n                title: 'Hello World!'\n              });\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      return function addMarkers() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n    addMarkers();\n  }, [map]);\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    children: \"An error has occurred.\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 21\n  }, _this);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}, void 0, false);\n};\n_s(AddMarkers, \"i5WvaAFDajHCNU98qq4Vb7coGq0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n_c = AddMarkers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddMarkers);\nvar _c;\n$RefreshReg$(_c, \"AddMarkers\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRNYXJrZXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEM7QUFFVDtBQUNUO0FBQ1M7QUFBQTtBQUFBO0FBWWpDLElBQU1RLFVBQW9CLEdBQUcsU0FBdkJBLFVBQW9CQSxDQUFJQyxLQUE2QixFQUFLO0VBQUFDLEVBQUE7RUFDOUQ7RUFDQSxJQUFNQyxHQUFHLEdBQUcsb0NBQW9DO0VBQ2hELElBQUFDLE9BQUEsR0FBd0JWLCtDQUFNLENBQUNTLEdBQUcsRUFBRVIsMkNBQU8sQ0FBQztJQUFwQ1UsSUFBSSxHQUFBRCxPQUFBLENBQUpDLElBQUk7SUFBRUMsS0FBSyxHQUFBRixPQUFBLENBQUxFLEtBQUs7RUFDbkIsSUFBTUMsS0FBa0IsR0FBR2YsMERBQWEsQ0FBQ2EsSUFBSSxDQUFDO0VBQzlDLElBQU1HLEdBQUcsR0FBR1AsS0FBSyxDQUFDTyxHQUFHO0VBRXJCZixnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFNZ0IsVUFBVTtNQUFBLElBQUFDLElBQUEsR0FBQUMsOEhBQUEsZUFBQUMsZ0dBQUEsQ0FBRyxTQUFBRSxRQUFBO1FBQUEsSUFBQUMscUJBQUEsRUFBQUMscUJBQUE7UUFBQSxPQUFBSixnR0FBQSxVQUFBTSxTQUFBQyxRQUFBO1VBQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7WUFBQTtjQUFBLE1BQ2JiLEdBQUcsSUFBSUgsSUFBSTtnQkFBQWMsUUFBQSxDQUFBRSxJQUFBO2dCQUFBO2NBQUE7Y0FBQUYsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FFTEMsTUFBTSxDQUFDQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFBQTtjQUFBVCxxQkFBQSxHQUFBSSxRQUFBLENBQUFNLElBQUE7Y0FEbkNULHFCQUFxQixHQUFBRCxxQkFBQSxDQUFyQkMscUJBQXFCO2NBRzdCLElBQUlBLHFCQUFxQixDQUFDO2dCQUN4QlIsR0FBRyxFQUFIQSxHQUFHO2dCQUNIa0IsUUFBUSxFQUFFO2tCQUFFQyxHQUFHLEVBQUUsU0FBUztrQkFBRUMsR0FBRyxFQUFFO2dCQUFXLENBQUM7Z0JBQzdDQyxLQUFLLEVBQUU7Y0FDVCxDQUFDLENBQUM7WUFBQTtZQUFBO2NBQUEsT0FBQVYsUUFBQSxDQUFBVyxJQUFBO1VBQUE7UUFBQSxHQUFBaEIsT0FBQTtNQUFBLENBRUw7TUFBQSxnQkFYS0wsVUFBVUEsQ0FBQTtRQUFBLE9BQUFDLElBQUEsQ0FBQXFCLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FXZjtJQUVEdkIsVUFBVSxDQUFDLENBQUM7RUFDZCxDQUFDLEVBQUUsQ0FBQ0QsR0FBRyxDQUFDLENBQUM7RUFFVCxJQUFJRixLQUFLLEVBQUUsT0FBT1Qsc0VBQUE7SUFBQW9DLFFBQUEsRUFBSztFQUFzQjtJQUFBQyxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsR0FBQUMsS0FBSyxDQUFDO0VBQ25ELElBQUksQ0FBQ2pDLElBQUksRUFBRSxPQUFPUixzRUFBQTtJQUFBb0MsUUFBQSxFQUFLO0VBQVU7SUFBQUMsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQUssQ0FBQztFQUV2QyxPQUFPekMsc0VBQUEsQ0FBQUUsb0VBQUEsbUJBQUksQ0FBQztBQUNkLENBQUM7QUFBQUcsRUFBQSxDQTVCS0YsVUFBb0I7RUFBQSxRQUdBTiwyQ0FBTTtBQUFBO0FBQUE2QyxFQUFBLEdBSDFCdkMsVUFBb0I7QUE4QjFCLCtEQUFlQSxVQUFVO0FBQUEsSUFBQXVDLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZE1hcmtlcnMudHN4PzA0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBjYW1lbGNhc2VLZXlzIGZyb20gJ2NhbWVsY2FzZS1rZXlzJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJ0AvdXRpbHMnXG5cbnR5cGUgUG9zdFByb3BzID0ge1xuICBpZDogbnVtYmVyXG4gIG5hbWU6IHN0cmluZ1xuICBhZGRyZXNzOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGxhdGl0dWRlOiBudW1iZXJcbiAgbG9uZ2l0dWRlOiBudW1iZXJcbiAgY3JlYXRlZEF0OiBzdHJpbmdcbn1cblxuY29uc3QgQWRkTWFya2VyczogTmV4dFBhZ2UgPSAocHJvcHM6IGdvb2dsZS5tYXBzLk1hcCB8IG51bGwpID0+IHtcbiAgLy9SYWlsc+OBi+OCieODh+ODvOOCv+OCkuiqreOBv+i+vOOBvyBpbmRleOOCouOCr+OCt+ODp+ODs1xuICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9wb3N0cydcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcilcbiAgY29uc3QgcG9zdHM6IFBvc3RQcm9wc1tdID0gY2FtZWxjYXNlS2V5cyhkYXRhKVxuICBjb25zdCBtYXAgPSBwcm9wcy5tYXBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFkZE1hcmtlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAobWFwICYmIGRhdGEpIHtcbiAgICAgICAgY29uc3QgeyBBZHZhbmNlZE1hcmtlckVsZW1lbnQgfSA9XG4gICAgICAgICAgYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeSgnbWFya2VyJylcblxuICAgICAgICBuZXcgQWR2YW5jZWRNYXJrZXJFbGVtZW50KHtcbiAgICAgICAgICBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHsgbGF0OiAzNS42ODEyMzYsIGxuZzogMTM5Ljc2NzEyNSB9LFxuICAgICAgICAgIHRpdGxlOiAnSGVsbG8gV29ybGQhJyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRNYXJrZXJzKClcbiAgfSwgW21hcF0pXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5BbiBlcnJvciBoYXMgb2NjdXJyZWQuPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuXG4gIHJldHVybiA8PjwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRNYXJrZXJzXG4iXSwibmFtZXMiOlsiY2FtZWxjYXNlS2V5cyIsInVzZUVmZmVjdCIsInVzZVNXUiIsImZldGNoZXIiLCJqc3hERVYiLCJfanN4REVWIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJBZGRNYXJrZXJzIiwicHJvcHMiLCJfcyIsInVybCIsIl91c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJwb3N0cyIsIm1hcCIsImFkZE1hcmtlcnMiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJfeWllbGQkZ29vZ2xlJG1hcHMkaW0iLCJBZHZhbmNlZE1hcmtlckVsZW1lbnQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZ29vZ2xlIiwibWFwcyIsImltcG9ydExpYnJhcnkiLCJzZW50IiwicG9zaXRpb24iLCJsYXQiLCJsbmciLCJ0aXRsZSIsInN0b3AiLCJhcHBseSIsImFyZ3VtZW50cyIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AddMarkers.tsx\n"));

/***/ })

});