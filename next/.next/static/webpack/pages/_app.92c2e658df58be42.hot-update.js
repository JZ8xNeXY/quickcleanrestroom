"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/components/Header.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    isOpen = _useState[0],\n    setIsOpen = _useState[1];\n  var toggleDrawer = function toggleDrawer(open) {\n    return function (event) {\n      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {\n        return;\n      }\n      setIsOpen(open);\n    };\n  };\n  var list = function list() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      role: \"presentation\",\n      onClick: toggleDrawer(false),\n      onKeyDown: toggleDrawer(false),\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {\n        children: ['紹介', '新規登録', 'ログイン', 'お問い合わせ'].map(function (text) {\n          return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {\n              primary: text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 13\n            }, _this)\n          }, text, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {\n    position: \"static\",\n    sx: {\n      backgroundColor: 'white',\n      color: 'black',\n      boxShadow: 'none',\n      py: '12px'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n      maxWidth: \"xl\",\n      sx: {\n        px: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'left',\n          alignItems: 'center'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {\n              position: \"static\",\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                  edge: \"start\",\n                  color: \"default\",\n                  \"aria-label\": \"menu\",\n                  sx: {\n                    mr: 2\n                  } // ロゴとの間隔を設定\n                  ,\n                  onClick: toggleDrawer(true),\n                  children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 75,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 68,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Drawer, {\n              anchor: \"left\",\n              open: isOpen,\n              onClose: toggleDrawer(false),\n              children: list()\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            href: \"/\",\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n              sx: {\n                width: '100%',\n                maxWidth: {\n                  xs: '120px',\n                  sm: '140px',\n                  md: '160px',\n                  lg: '180px',\n                  xl: '200px'\n                },\n                height: 'auto',\n                '& img': {\n                  width: '100%',\n                  height: 'auto'\n                }\n              },\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n                src: \"/headerlogo.png\",\n                alt: \"logo\",\n                width: 200,\n                height: 50,\n                priority: true\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n_s(Header, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFBaUQsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeD9hNjk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnXG5pbXBvcnQge1xuICBBcHBCYXIsXG4gIEJveCxcbiAgQ29udGFpbmVyLFxuICBMaW5rLFxuICBUb29sYmFyLFxuICBJY29uQnV0dG9uLFxuICBEcmF3ZXIsXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbVRleHQsXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChvcGVuKSA9PiAoZXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50eXBlID09PSAna2V5ZG93bicgJiZcbiAgICAgIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ1NoaWZ0JylcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRJc09wZW4ob3BlbilcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSAoKSA9PiAoXG4gICAgPGRpdlxuICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoZmFsc2UpfVxuICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoZmFsc2UpfVxuICAgID5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7WyfntLnku4snLCAn5paw6KaP55m76YyyJywgJ+ODreOCsOOCpOODsycsICfjgYrllY/jgYTlkIjjgo/jgZsnXS5tYXAoKHRleHQpID0+IChcbiAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt0ZXh0fT5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhclxuICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxuICAgICAgc3g9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgIHB5OiAnMTJweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiIHN4PXt7IHB4OiAyIH19PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6IDIgfX0gLy8g44Ot44K044Go44Gu6ZaT6ZqU44KS6Kit5a6aXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcih0cnVlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICAgICAgPERyYXdlciBhbmNob3I9XCJsZWZ0XCIgb3Blbj17aXNPcGVufSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICB7bGlzdCgpfVxuICAgICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDoge1xuICAgICAgICAgICAgICAgICAgICB4czogJzEyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgc206ICcxNDBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1kOiAnMTYwcHgnLFxuICAgICAgICAgICAgICAgICAgICBsZzogJzE4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgeGw6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAnJiBpbWcnOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaGVhZGVybG9nby5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9BcHBCYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsiTWVudUljb24iLCJBcHBCYXIiLCJCb3giLCJDb250YWluZXIiLCJMaW5rIiwiVG9vbGJhciIsIkljb25CdXR0b24iLCJEcmF3ZXIiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbVRleHQiLCJJbWFnZSIsInVzZVN0YXRlIiwianN4REVWIiwiX2pzeERFViIsIkhlYWRlciIsIl9zIiwiX3VzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRHJhd2VyIiwib3BlbiIsImV2ZW50IiwidHlwZSIsImtleSIsImxpc3QiLCJyb2xlIiwib25DbGljayIsIm9uS2V5RG93biIsImNoaWxkcmVuIiwibWFwIiwidGV4dCIsInByaW1hcnkiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInB5IiwibWF4V2lkdGgiLCJweCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJlZGdlIiwibXIiLCJhbmNob3IiLCJvbkNsb3NlIiwiaHJlZiIsIndpZHRoIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsImhlaWdodCIsInNyYyIsImFsdCIsInByaW9yaXR5IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n"));

/***/ })

});