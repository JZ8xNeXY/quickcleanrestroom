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

/***/ "./src/components/geoLocation.tsx":
/*!****************************************!*\
  !*** ./src/components/geoLocation.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_userGeoLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/userGeoLocation */ \"./src/utils/userGeoLocation.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/components/geoLocation.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\nvar GeoLocation = function GeoLocation(_ref) {\n  _s();\n  var map = _ref.map;\n  var locationButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (map && locationButtonRef.current) {\n      var controlPosition = google.maps.ControlPosition.TOP_CENTER;\n      map.controls[controlPosition].push(locationButtonRef.current);\n      return function () {\n        var controls = map.controls[controlPosition];\n        for (var i = 0; i < controls.getLength(); i++) {\n          // eslint-disable-next-line react-hooks/exhaustive-deps\n          if (controls.getAt(i) === locationButtonRef.current) {\n            controls.removeAt(i);\n            break;\n          }\n        }\n      };\n    }\n  }, [map]);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      sx: {\n        display: 'flex',\n        justifyContent: 'center'\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n        ref: locationButtonRef,\n        onClick: function onClick() {\n          return (0,_utils_userGeoLocation__WEBPACK_IMPORTED_MODULE_1__.userGeoLocation)({\n            map: map\n          });\n        },\n        sx: {\n          height: '60px',\n          fontSize: '16px',\n          color: '#FFFFFF',\n          fontWeight: 'bold',\n          bgcolor: '#4CAF50',\n          pt: 2,\n          pb: 2,\n          pl: 4,\n          pr: 4,\n          mt: 2\n        },\n        children: \"\\u6700\\u5BC4\\u308A\\u306E\\u30C8\\u30A4\\u30EC\\u3092\\u63A2\\u3059\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n_s(GeoLocation, \"rAJXvfghkuDI0qdvZ4vaeaO9n44=\");\n_c = GeoLocation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeoLocation);\nvar _c;\n$RefreshReg$(_c, \"GeoLocation\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nZW9Mb2NhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBRUY7QUFDZ0I7QUFBQTtBQUFBO0FBTXpELElBQU1TLFdBQXNDLEdBQUcsU0FBekNBLFdBQXNDQSxDQUFBQyxJQUFBLEVBQWdCO0VBQUFDLEVBQUE7RUFBQSxJQUFWQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztFQUNuRCxJQUFNQyxpQkFBaUIsR0FBR1YsNkNBQU0sQ0FBb0IsSUFBSSxDQUFDO0VBRXpERCxnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFJVSxHQUFHLElBQUlDLGlCQUFpQixDQUFDQyxPQUFPLEVBQUU7TUFDcEMsSUFBTUMsZUFBZSxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsZUFBZSxDQUFDQyxVQUFVO01BQzlEUCxHQUFHLENBQUNRLFFBQVEsQ0FBQ0wsZUFBZSxDQUFDLENBQUNNLElBQUksQ0FBQ1IsaUJBQWlCLENBQUNDLE9BQU8sQ0FBQztNQUU3RCxPQUFPLFlBQU07UUFDWCxJQUFNTSxRQUFRLEdBQUdSLEdBQUcsQ0FBQ1EsUUFBUSxDQUFDTCxlQUFlLENBQUM7UUFDOUMsS0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csU0FBUyxDQUFDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7VUFDN0M7VUFDQSxJQUFJRixRQUFRLENBQUNJLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDLEtBQUtULGlCQUFpQixDQUFDQyxPQUFPLEVBQUU7WUFDbkRNLFFBQVEsQ0FBQ0ssUUFBUSxDQUFDSCxDQUFDLENBQUM7WUFDcEI7VUFDRjtRQUNGO01BQ0YsQ0FBQztJQUNIO0VBQ0YsQ0FBQyxFQUFFLENBQUNWLEdBQUcsQ0FBQyxDQUFDO0VBRVQsT0FDRU4sc0VBQUEsQ0FBQUUsb0VBQUE7SUFBQWtCLFFBQUEsRUFDRXBCLHNFQUFBLENBQUNOLDhDQUFHO01BQUMyQixFQUFFLEVBQUU7UUFBRUMsT0FBTyxFQUFFLE1BQU07UUFBRUMsY0FBYyxFQUFFO01BQVMsQ0FBRTtNQUFBSCxRQUFBLEVBQ3JEcEIsc0VBQUEsQ0FBQ0wsaURBQU07UUFDTDZCLEdBQUcsRUFBRWpCLGlCQUFrQjtRQUN2QmtCLE9BQU8sRUFBRSxTQUFBQSxRQUFBO1VBQUEsT0FBTTNCLHVFQUFlLENBQUM7WUFBRVEsR0FBRyxFQUFIQTtVQUFJLENBQUMsQ0FBQztRQUFBLENBQUM7UUFDeENlLEVBQUUsRUFBRTtVQUNGSyxNQUFNLEVBQUUsTUFBTTtVQUNkQyxRQUFRLEVBQUUsTUFBTTtVQUNoQkMsS0FBSyxFQUFFLFNBQVM7VUFDaEJDLFVBQVUsRUFBRSxNQUFNO1VBQ2xCQyxPQUFPLEVBQUUsU0FBUztVQUNsQkMsRUFBRSxFQUFFLENBQUM7VUFDTEMsRUFBRSxFQUFFLENBQUM7VUFDTEMsRUFBRSxFQUFFLENBQUM7VUFDTEMsRUFBRSxFQUFFLENBQUM7VUFDTEMsRUFBRSxFQUFFO1FBQ04sQ0FBRTtRQUFBZixRQUFBLEVBQ0g7TUFFRDtRQUFBZ0IsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQVE7SUFBQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDTjtFQUFDLGdCQUNOLENBQUM7QUFFUCxDQUFDO0FBQUFuQyxFQUFBLENBN0NLRixXQUFzQztBQUFBc0MsRUFBQSxHQUF0Q3RDLFdBQXNDO0FBK0M1QywrREFBZUEsV0FBVztBQUFBLElBQUFzQyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9nZW9Mb2NhdGlvbi50c3g/NjQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VyR2VvTG9jYXRpb24gfSBmcm9tICdAL3V0aWxzL3VzZXJHZW9Mb2NhdGlvbidcblxuaW50ZXJmYWNlIEFkZE1hcmtlcnNQcm9wcyB7XG4gIG1hcDogZ29vZ2xlLm1hcHMuTWFwIHwgbnVsbFxufVxuXG5jb25zdCBHZW9Mb2NhdGlvbjogTmV4dFBhZ2U8QWRkTWFya2Vyc1Byb3BzPiA9ICh7IG1hcCB9KSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uQnV0dG9uUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1hcCAmJiBsb2NhdGlvbkJ1dHRvblJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBjb250cm9sUG9zaXRpb24gPSBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uVE9QX0NFTlRFUlxuICAgICAgbWFwLmNvbnRyb2xzW2NvbnRyb2xQb3NpdGlvbl0ucHVzaChsb2NhdGlvbkJ1dHRvblJlZi5jdXJyZW50KVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IG1hcC5jb250cm9sc1tjb250cm9sUG9zaXRpb25dXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICAgICAgICBpZiAoY29udHJvbHMuZ2V0QXQoaSkgPT09IGxvY2F0aW9uQnV0dG9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnRyb2xzLnJlbW92ZUF0KGkpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW21hcF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHJlZj17bG9jYXRpb25CdXR0b25SZWZ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdXNlckdlb0xvY2F0aW9uKHsgbWFwIH0pfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBoZWlnaHQ6ICc2MHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgYmdjb2xvcjogJyM0Q0FGNTAnLFxuICAgICAgICAgICAgcHQ6IDIsXG4gICAgICAgICAgICBwYjogMixcbiAgICAgICAgICAgIHBsOiA0LFxuICAgICAgICAgICAgcHI6IDQsXG4gICAgICAgICAgICBtdDogMixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAg5pyA5a+E44KK44Gu44OI44Kk44Os44KS5o6i44GZXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VvTG9jYXRpb25cbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VyR2VvTG9jYXRpb24iLCJqc3hERVYiLCJfanN4REVWIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJHZW9Mb2NhdGlvbiIsIl9yZWYiLCJfcyIsIm1hcCIsImxvY2F0aW9uQnV0dG9uUmVmIiwiY3VycmVudCIsImNvbnRyb2xQb3NpdGlvbiIsImdvb2dsZSIsIm1hcHMiLCJDb250cm9sUG9zaXRpb24iLCJUT1BfQ0VOVEVSIiwiY29udHJvbHMiLCJwdXNoIiwiaSIsImdldExlbmd0aCIsImdldEF0IiwicmVtb3ZlQXQiLCJjaGlsZHJlbiIsInN4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicmVmIiwib25DbGljayIsImhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiYmdjb2xvciIsInB0IiwicGIiLCJwbCIsInByIiwibXQiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/geoLocation.tsx\n"));

/***/ })

});