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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AddMarkers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AddMarkers */ \"./src/components/AddMarkers.tsx\");\n/* harmony import */ var _components_geoLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/geoLocation */ \"./src/components/geoLocation.tsx\");\n/* harmony import */ var _utils_loadGoogleMapsAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/loadGoogleMapsAPI */ \"./src/utils/loadGoogleMapsAPI.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    map = _useState[0],\n    setMap = _useState[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_utils_loadGoogleMapsAPI__WEBPACK_IMPORTED_MODULE_3__.loadGoogleMapsAPI)(setMap);\n  }, []);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n      maxWidth: \"xl\",\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        id: \"map\",\n        style: {\n          height: '80vh',\n          width: '100%'\n        },\n        children: [' ', (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_geoLocation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          map: map\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        id: \"infoPanel\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_AddMarkers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        map: map\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n_s(Index, \"4bJBv0PO2rrDzFRchWWuXyIru0A=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBRUg7QUFDSztBQUNFO0FBQ1c7QUFBQTtBQUFBO0FBRTdELElBQU1XLEtBQWUsR0FBRyxTQUFsQkEsS0FBZUEsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDNUIsSUFBQUMsU0FBQSxHQUFzQlYsK0NBQVEsQ0FBeUIsSUFBSSxDQUFDO0lBQXJEVyxHQUFHLEdBQUFELFNBQUE7SUFBRUUsTUFBTSxHQUFBRixTQUFBO0VBRWxCWCxnREFBUyxDQUFDLFlBQU07SUFDZEksMkVBQWlCLENBQUNTLE1BQU0sQ0FBQztFQUMzQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sT0FDRVAsc0VBQUEsQ0FBQUUsb0VBQUE7SUFBQU0sUUFBQSxFQUNFUixzRUFBQSxDQUFDUCxvREFBUztNQUFDZ0IsUUFBUSxFQUFDLElBQUk7TUFBQUQsUUFBQSxHQUN0QlIsc0VBQUEsQ0FBQ1IsOENBQUc7UUFBQ2tCLEVBQUUsRUFBQyxLQUFLO1FBQUNDLEtBQUssRUFBRTtVQUFFQyxNQUFNLEVBQUUsTUFBTTtVQUFFQyxLQUFLLEVBQUU7UUFBTyxDQUFFO1FBQUFMLFFBQUEsR0FDcEQsR0FBRyxFQUNKUixzRUFBQSxDQUFDSCwrREFBVztVQUFDUyxHQUFHLEVBQUVBO1FBQUk7VUFBQVEsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFDLEtBQUUsQ0FBQztNQUFBO1FBQUFKLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUN0QixDQUFDLEVBQ05sQixzRUFBQSxDQUFDUiw4Q0FBRztRQUFDa0IsRUFBRSxFQUFDO01BQVc7UUFBQUksUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQU0sQ0FBQyxFQUMxQmxCLHNFQUFBLENBQUNKLDhEQUFVO1FBQUNVLEdBQUcsRUFBRUE7TUFBSTtRQUFBUSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsR0FBQUMsS0FBRSxDQUFDO0lBQUE7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ2Y7RUFBQyxnQkFDWixDQUFDO0FBRVAsQ0FBQztBQUFBZCxFQUFBLENBbkJLRCxLQUFlO0FBQUFnQixFQUFBLEdBQWZoQixLQUFlO0FBcUJyQiwrREFBZUEsS0FBSztBQUFBLElBQUFnQixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDb250YWluZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRkTWFya2VycyBmcm9tICdAL2NvbXBvbmVudHMvQWRkTWFya2VycydcbmltcG9ydCBHZW9Mb2NhdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvZ2VvTG9jYXRpb24nXG5pbXBvcnQgeyBsb2FkR29vZ2xlTWFwc0FQSSB9IGZyb20gJ0AvdXRpbHMvbG9hZEdvb2dsZU1hcHNBUEknXG5cbmNvbnN0IEluZGV4OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IHVzZVN0YXRlPGdvb2dsZS5tYXBzLk1hcCB8IG51bGw+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkR29vZ2xlTWFwc0FQSShzZXRNYXApXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxuICAgICAgICA8Qm94IGlkPVwibWFwXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODB2aCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8R2VvTG9jYXRpb24gbWFwPXttYXB9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGlkPVwiaW5mb1BhbmVsXCI+PC9Cb3g+XG4gICAgICAgIDxBZGRNYXJrZXJzIG1hcD17bWFwfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJuYW1lcyI6WyJCb3giLCJDb250YWluZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFkZE1hcmtlcnMiLCJHZW9Mb2NhdGlvbiIsImxvYWRHb29nbGVNYXBzQVBJIiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiSW5kZXgiLCJfcyIsIl91c2VTdGF0ZSIsIm1hcCIsInNldE1hcCIsImNoaWxkcmVuIiwibWF4V2lkdGgiLCJpZCIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});