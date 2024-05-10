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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/geoLocation.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\nvar GeoLocation = function GeoLocation(_ref) {\n  _s();\n  var map = _ref.map;\n  var locationButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (map && locationButtonRef.current) {\n      map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButtonRef.current);\n      console.log(locationButtonRef.current);\n    }\n    console.log(locationButtonRef);\n  }, [map]);\n  var userGeoLocation = function userGeoLocation() {\n    if (navigator.geolocation) {\n      navigator.geolocation.getCurrentPosition( /*#__PURE__*/function () {\n        var _ref2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(position) {\n          var userPos, userPositionImg, _ref3, AdvancedMarkerElement;\n          return _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n            while (1) switch (_context.prev = _context.next) {\n              case 0:\n                userPos = {\n                  lat: position.coords.latitude,\n                  lng: position.coords.longitude\n                };\n                userPositionImg = document.createElement('img');\n                userPositionImg.src = '/userposition.png';\n                userPositionImg.width = 75;\n                userPositionImg.height = 75;\n                // バウンドが機能しない\n                userPositionImg.classList.add('bounce');\n                _context.next = 8;\n                return google.maps.importLibrary('marker');\n              case 8:\n                _ref3 = _context.sent;\n                AdvancedMarkerElement = _ref3.AdvancedMarkerElement;\n                new AdvancedMarkerElement({\n                  map: map,\n                  position: userPos,\n                  title: 'Your Location',\n                  content: userPositionImg\n                });\n                map.setCenter(userPos);\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }, _callee);\n        }));\n        return function (_x) {\n          return _ref2.apply(this, arguments);\n        };\n      }(), function () {\n        // 現在地を取得できない場合、東京駅の位置を使用\n        var handleLocationError = /*#__PURE__*/function () {\n          var _ref4 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n            var tokyoStationPos,\n              userPositionImg,\n              _ref5,\n              AdvancedMarkerElement,\n              _args2 = arguments;\n            return _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n              while (1) switch (_context2.prev = _context2.next) {\n                case 0:\n                  tokyoStationPos = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {\n                    lat: 35.681236,\n                    lng: 139.767125\n                  };\n                  console.log(tokyoStationPos);\n                  userPositionImg = document.createElement('img');\n                  userPositionImg.src = '/userposition.png';\n                  userPositionImg.width = 75;\n                  userPositionImg.height = 75;\n                  // バウンドが機能しない\n                  userPositionImg.classList.add('bounce');\n                  console.log(userPositionImg);\n                  _context2.next = 10;\n                  return google.maps.importLibrary('marker');\n                case 10:\n                  _ref5 = _context2.sent;\n                  AdvancedMarkerElement = _ref5.AdvancedMarkerElement;\n                  new AdvancedMarkerElement({\n                    map: map,\n                    position: tokyoStationPos,\n                    title: 'Your Location',\n                    content: userPositionImg\n                  });\n                  map.setCenter(tokyoStationPos);\n                case 14:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }, _callee2);\n          }));\n          return function handleLocationError() {\n            return _ref4.apply(this, arguments);\n          };\n        }();\n        handleLocationError();\n      });\n    } else {\n      alert('Geolocation is not supported by this browser.');\n    }\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      sx: {\n        display: 'flex',\n        justifyContent: 'center'\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n        ref: locationButtonRef,\n        sx: {\n          height: '60px',\n          fontSize: '16px',\n          color: '#FFFFFF',\n          fontWeight: 'bold',\n          bgcolor: '#4CAF50',\n          pt: 2,\n          pb: 2,\n          pl: 4,\n          pr: 4,\n          mt: 2\n        },\n        onClick: userGeoLocation,\n        children: \"\\u6700\\u5BC4\\u308A\\u306E\\u30C8\\u30A4\\u30EC\\u3092\\u63A2\\u3059\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n_s(GeoLocation, \"rAJXvfghkuDI0qdvZ4vaeaO9n44=\");\n_c = GeoLocation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeoLocation);\nvar _c;\n$RefreshReg$(_c, \"GeoLocation\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixFQUFBLENBdkdLRixXQUFzQztBQUFBcUYsRUFBQSxHQUF0Q3JGLFdBQXNDO0FBeUc1QywrREFBZUEsV0FBVztBQUFBLElBQUFxRixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9nZW9Mb2NhdGlvbi50c3g/NjQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBBZGRNYXJrZXJzUHJvcHMge1xuICBtYXA6IGdvb2dsZS5tYXBzLk1hcCB8IG51bGxcbn1cblxuY29uc3QgR2VvTG9jYXRpb246IE5leHRQYWdlPEFkZE1hcmtlcnNQcm9wcz4gPSAoeyBtYXAgfSkgPT4ge1xuICBjb25zdCBsb2NhdGlvbkJ1dHRvblJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtYXAgJiYgbG9jYXRpb25CdXR0b25SZWYuY3VycmVudCkge1xuICAgICAgbWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5UT1BfQ0VOVEVSXS5wdXNoKFxuICAgICAgICBsb2NhdGlvbkJ1dHRvblJlZi5jdXJyZW50LFxuICAgICAgKVxuICAgICAgY29uc29sZS5sb2cobG9jYXRpb25CdXR0b25SZWYuY3VycmVudClcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbkJ1dHRvblJlZilcbiAgfSwgW21hcF0pXG5cbiAgY29uc3QgdXNlckdlb0xvY2F0aW9uID0gKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIGFzeW5jIChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHVzZXJQb3MgPSB7XG4gICAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB1c2VyUG9zaXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICAgIHVzZXJQb3NpdGlvbkltZy5zcmMgPSAnL3VzZXJwb3NpdGlvbi5wbmcnXG4gICAgICAgICAgdXNlclBvc2l0aW9uSW1nLndpZHRoID0gNzVcbiAgICAgICAgICB1c2VyUG9zaXRpb25JbWcuaGVpZ2h0ID0gNzVcbiAgICAgICAgICAvLyDjg5Djgqbjg7Pjg4njgYzmqZ/og73jgZfjgarjgYRcbiAgICAgICAgICB1c2VyUG9zaXRpb25JbWcuY2xhc3NMaXN0LmFkZCgnYm91bmNlJylcblxuICAgICAgICAgIGNvbnN0IHsgQWR2YW5jZWRNYXJrZXJFbGVtZW50IH0gPSAoYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeShcbiAgICAgICAgICAgICdtYXJrZXInLFxuICAgICAgICAgICkpIGFzIGdvb2dsZS5tYXBzLk1hcmtlckxpYnJhcnlcblxuICAgICAgICAgIG5ldyBBZHZhbmNlZE1hcmtlckVsZW1lbnQoe1xuICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgcG9zaXRpb246IHVzZXJQb3MsXG4gICAgICAgICAgICB0aXRsZTogJ1lvdXIgTG9jYXRpb24nLFxuICAgICAgICAgICAgY29udGVudDogdXNlclBvc2l0aW9uSW1nLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBtYXAuc2V0Q2VudGVyKHVzZXJQb3MpXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyDnj77lnKjlnLDjgpLlj5blvpfjgafjgY3jgarjgYTloLTlkIjjgIHmnbHkuqzpp4Xjga7kvY3nva7jgpLkvb/nlKhcbiAgICAgICAgICBjb25zdCBoYW5kbGVMb2NhdGlvbkVycm9yID0gYXN5bmMgKFxuICAgICAgICAgICAgdG9reW9TdGF0aW9uUG9zID0geyBsYXQ6IDM1LjY4MTIzNiwgbG5nOiAxMzkuNzY3MTI1IH0sXG4gICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2t5b1N0YXRpb25Qb3MpXG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQb3NpdGlvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgICAgICB1c2VyUG9zaXRpb25JbWcuc3JjID0gJy91c2VycG9zaXRpb24ucG5nJ1xuICAgICAgICAgICAgdXNlclBvc2l0aW9uSW1nLndpZHRoID0gNzVcbiAgICAgICAgICAgIHVzZXJQb3NpdGlvbkltZy5oZWlnaHQgPSA3NVxuICAgICAgICAgICAgLy8g44OQ44Km44Oz44OJ44GM5qmf6IO944GX44Gq44GEXG4gICAgICAgICAgICB1c2VyUG9zaXRpb25JbWcuY2xhc3NMaXN0LmFkZCgnYm91bmNlJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJQb3NpdGlvbkltZylcblxuICAgICAgICAgICAgY29uc3QgeyBBZHZhbmNlZE1hcmtlckVsZW1lbnQgfSA9IChhd2FpdCBnb29nbGUubWFwcy5pbXBvcnRMaWJyYXJ5KFxuICAgICAgICAgICAgICAnbWFya2VyJyxcbiAgICAgICAgICAgICkpIGFzIGdvb2dsZS5tYXBzLk1hcmtlckxpYnJhcnlcblxuICAgICAgICAgICAgbmV3IEFkdmFuY2VkTWFya2VyRWxlbWVudCh7XG4gICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRva3lvU3RhdGlvblBvcyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdZb3VyIExvY2F0aW9uJyxcbiAgICAgICAgICAgICAgY29udGVudDogdXNlclBvc2l0aW9uSW1nLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG1hcC5zZXRDZW50ZXIodG9reW9TdGF0aW9uUG9zKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhbmRsZUxvY2F0aW9uRXJyb3IoKVxuICAgICAgICB9LFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnR2VvbG9jYXRpb24gaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcmVmPXtsb2NhdGlvbkJ1dHRvblJlZn1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIGJnY29sb3I6ICcjNENBRjUwJyxcbiAgICAgICAgICAgIHB0OiAyLFxuICAgICAgICAgICAgcGI6IDIsXG4gICAgICAgICAgICBwbDogNCxcbiAgICAgICAgICAgIHByOiA0LFxuICAgICAgICAgICAgbXQ6IDIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsaWNrPXt1c2VyR2VvTG9jYXRpb259XG4gICAgICAgID5cbiAgICAgICAgICDmnIDlr4Tjgorjga7jg4jjgqTjg6zjgpLmjqLjgZlcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHZW9Mb2NhdGlvblxuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVJlZiIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkdlb0xvY2F0aW9uIiwiX3JlZiIsIl9zIiwibWFwIiwibG9jYXRpb25CdXR0b25SZWYiLCJjdXJyZW50IiwiY29udHJvbHMiLCJnb29nbGUiLCJtYXBzIiwiQ29udHJvbFBvc2l0aW9uIiwiVE9QX0NFTlRFUiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidXNlckdlb0xvY2F0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJfcmVmMiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicG9zaXRpb24iLCJ1c2VyUG9zIiwidXNlclBvc2l0aW9uSW1nIiwiX3JlZjMiLCJBZHZhbmNlZE1hcmtlckVsZW1lbnQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsImltcG9ydExpYnJhcnkiLCJzZW50IiwidGl0bGUiLCJjb250ZW50Iiwic2V0Q2VudGVyIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2NhdGlvbkVycm9yIiwiX3JlZjQiLCJfY2FsbGVlMiIsInRva3lvU3RhdGlvblBvcyIsIl9yZWY1IiwiX2FyZ3MyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWxlcnQiLCJjaGlsZHJlbiIsInN4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicmVmIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJiZ2NvbG9yIiwicHQiLCJwYiIsInBsIiwicHIiLCJtdCIsIm9uQ2xpY2siLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/geoLocation.tsx\n"));

/***/ })

});