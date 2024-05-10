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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/geoLocation.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\nvar GeoLocation = function GeoLocation(_ref) {\n  _s();\n  var map = _ref.map;\n  var locationButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (map && locationButtonRef.current) {\n      var controlPosition = google.maps.ControlPosition.TOP_CENTER;\n      map.controls[controlPosition].push(locationButtonRef.current);\n      return function () {\n        var controls = map.controls[controlPosition];\n        for (var i = 0; i < controls.getLength(); i++) {\n          if (controls.getAt(i) === locationButtonRef.current) {\n            controls.removeAt(i);\n            break;\n          }\n        }\n      };\n    }\n  }, [map]);\n  var userGeoLocation = function userGeoLocation() {\n    if (navigator.geolocation) {\n      navigator.geolocation.getCurrentPosition( /*#__PURE__*/function () {\n        var _ref2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(position) {\n          var userPos, userPositionImg, _ref3, AdvancedMarkerElement;\n          return _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n            while (1) switch (_context.prev = _context.next) {\n              case 0:\n                userPos = {\n                  lat: position.coords.latitude,\n                  lng: position.coords.longitude\n                };\n                userPositionImg = document.createElement('img');\n                userPositionImg.src = '/userposition.png';\n                userPositionImg.width = 75;\n                userPositionImg.height = 75;\n                // バウンドが機能しない\n                userPositionImg.classList.add('bounce');\n                _context.next = 8;\n                return google.maps.importLibrary('marker');\n              case 8:\n                _ref3 = _context.sent;\n                AdvancedMarkerElement = _ref3.AdvancedMarkerElement;\n                new AdvancedMarkerElement({\n                  map: map,\n                  position: userPos,\n                  title: 'Your Location',\n                  content: userPositionImg\n                });\n                map.setCenter(userPos);\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }, _callee);\n        }));\n        return function (_x) {\n          return _ref2.apply(this, arguments);\n        };\n      }(), function () {\n        // 現在地を取得できない場合、東京駅の位置を使用2\n        var handleLocationError = /*#__PURE__*/function () {\n          var _ref4 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n            var tokyoStationPos,\n              userPositionImg,\n              _ref5,\n              AdvancedMarkerElement,\n              _args2 = arguments;\n            return _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n              while (1) switch (_context2.prev = _context2.next) {\n                case 0:\n                  tokyoStationPos = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {\n                    lat: 35.681236,\n                    lng: 139.767125\n                  };\n                  console.log(tokyoStationPos);\n                  userPositionImg = document.createElement('img');\n                  userPositionImg.src = '/userposition.png';\n                  userPositionImg.width = 75;\n                  userPositionImg.height = 75;\n                  // バウンドが機能しない\n                  userPositionImg.classList.add('bounce');\n                  console.log(userPositionImg);\n                  _context2.next = 10;\n                  return google.maps.importLibrary('marker');\n                case 10:\n                  _ref5 = _context2.sent;\n                  AdvancedMarkerElement = _ref5.AdvancedMarkerElement;\n                  new AdvancedMarkerElement({\n                    map: map,\n                    position: tokyoStationPos,\n                    title: 'Your Location',\n                    content: userPositionImg\n                  });\n                  map.setCenter(tokyoStationPos);\n                case 14:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }, _callee2);\n          }));\n          return function handleLocationError() {\n            return _ref4.apply(this, arguments);\n          };\n        }();\n        handleLocationError();\n      });\n    } else {\n      alert('Geolocation is not supported by this browser.');\n    }\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      sx: {\n        display: 'flex',\n        justifyContent: 'center'\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n        ref: locationButtonRef,\n        sx: {\n          height: '60px',\n          fontSize: '16px',\n          color: '#FFFFFF',\n          fontWeight: 'bold',\n          bgcolor: '#4CAF50',\n          pt: 2,\n          pb: 2,\n          pl: 4,\n          pr: 4,\n          mt: 2\n        },\n        onClick: userGeoLocation,\n        children: \"\\u6700\\u5BC4\\u308A\\u306E\\u30C8\\u30A4\\u30EC\\u3092\\u63A2\\u3059\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n_s(GeoLocation, \"rAJXvfghkuDI0qdvZ4vaeaO9n44=\");\n_c = GeoLocation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeoLocation);\nvar _c;\n$RefreshReg$(_c, \"GeoLocation\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQztVQUNMQyxFQUFFLEVBQUU7UUFDTixDQUFFO1FBQ0ZDLE9BQU8sRUFBRW5FLGVBQWdCO1FBQUFxRCxRQUFBLEVBQzFCO01BRUQ7UUFBQWUsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQVE7SUFBQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDTjtFQUFDLGdCQUNOLENBQUM7QUFFUCxDQUFDO0FBQUF2RixFQUFBLENBN0dLRixXQUFzQztBQUFBMEYsRUFBQSxHQUF0QzFGLFdBQXNDO0FBK0c1QywrREFBZUEsV0FBVztBQUFBLElBQUEwRixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9nZW9Mb2NhdGlvbi50c3g/NjQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBBZGRNYXJrZXJzUHJvcHMge1xuICBtYXA6IGdvb2dsZS5tYXBzLk1hcCB8IG51bGxcbn1cblxuY29uc3QgR2VvTG9jYXRpb246IE5leHRQYWdlPEFkZE1hcmtlcnNQcm9wcz4gPSAoeyBtYXAgfSkgPT4ge1xuICBjb25zdCBsb2NhdGlvbkJ1dHRvblJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtYXAgJiYgbG9jYXRpb25CdXR0b25SZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgY29udHJvbFBvc2l0aW9uID0gZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLlRPUF9DRU5URVJcbiAgICAgIG1hcC5jb250cm9sc1tjb250cm9sUG9zaXRpb25dLnB1c2gobG9jYXRpb25CdXR0b25SZWYuY3VycmVudClcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSBtYXAuY29udHJvbHNbY29udHJvbFBvc2l0aW9uXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICBpZiAoY29udHJvbHMuZ2V0QXQoaSkgPT09IGxvY2F0aW9uQnV0dG9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnRyb2xzLnJlbW92ZUF0KGkpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW21hcF0pXG5cbiAgY29uc3QgdXNlckdlb0xvY2F0aW9uID0gKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIGFzeW5jIChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHVzZXJQb3MgPSB7XG4gICAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB1c2VyUG9zaXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICAgIHVzZXJQb3NpdGlvbkltZy5zcmMgPSAnL3VzZXJwb3NpdGlvbi5wbmcnXG4gICAgICAgICAgdXNlclBvc2l0aW9uSW1nLndpZHRoID0gNzVcbiAgICAgICAgICB1c2VyUG9zaXRpb25JbWcuaGVpZ2h0ID0gNzVcbiAgICAgICAgICAvLyDjg5Djgqbjg7Pjg4njgYzmqZ/og73jgZfjgarjgYRcbiAgICAgICAgICB1c2VyUG9zaXRpb25JbWcuY2xhc3NMaXN0LmFkZCgnYm91bmNlJylcblxuICAgICAgICAgIGNvbnN0IHsgQWR2YW5jZWRNYXJrZXJFbGVtZW50IH0gPSAoYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeShcbiAgICAgICAgICAgICdtYXJrZXInLFxuICAgICAgICAgICkpIGFzIGdvb2dsZS5tYXBzLk1hcmtlckxpYnJhcnlcblxuICAgICAgICAgIG5ldyBBZHZhbmNlZE1hcmtlckVsZW1lbnQoe1xuICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgcG9zaXRpb246IHVzZXJQb3MsXG4gICAgICAgICAgICB0aXRsZTogJ1lvdXIgTG9jYXRpb24nLFxuICAgICAgICAgICAgY29udGVudDogdXNlclBvc2l0aW9uSW1nLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBtYXAuc2V0Q2VudGVyKHVzZXJQb3MpXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyDnj77lnKjlnLDjgpLlj5blvpfjgafjgY3jgarjgYTloLTlkIjjgIHmnbHkuqzpp4Xjga7kvY3nva7jgpLkvb/nlKgyXG4gICAgICAgICAgY29uc3QgaGFuZGxlTG9jYXRpb25FcnJvciA9IGFzeW5jIChcbiAgICAgICAgICAgIHRva3lvU3RhdGlvblBvcyA9IHsgbGF0OiAzNS42ODEyMzYsIGxuZzogMTM5Ljc2NzEyNSB9LFxuICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9reW9TdGF0aW9uUG9zKVxuXG4gICAgICAgICAgICBjb25zdCB1c2VyUG9zaXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICAgICAgdXNlclBvc2l0aW9uSW1nLnNyYyA9ICcvdXNlcnBvc2l0aW9uLnBuZydcbiAgICAgICAgICAgIHVzZXJQb3NpdGlvbkltZy53aWR0aCA9IDc1XG4gICAgICAgICAgICB1c2VyUG9zaXRpb25JbWcuaGVpZ2h0ID0gNzVcbiAgICAgICAgICAgIC8vIOODkOOCpuODs+ODieOBjOapn+iDveOBl+OBquOBhFxuICAgICAgICAgICAgdXNlclBvc2l0aW9uSW1nLmNsYXNzTGlzdC5hZGQoJ2JvdW5jZScpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyUG9zaXRpb25JbWcpXG5cbiAgICAgICAgICAgIGNvbnN0IHsgQWR2YW5jZWRNYXJrZXJFbGVtZW50IH0gPSAoYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeShcbiAgICAgICAgICAgICAgJ21hcmtlcicsXG4gICAgICAgICAgICApKSBhcyBnb29nbGUubWFwcy5NYXJrZXJMaWJyYXJ5XG5cbiAgICAgICAgICAgIG5ldyBBZHZhbmNlZE1hcmtlckVsZW1lbnQoe1xuICAgICAgICAgICAgICBtYXAsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB0b2t5b1N0YXRpb25Qb3MsXG4gICAgICAgICAgICAgIHRpdGxlOiAnWW91ciBMb2NhdGlvbicsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJQb3NpdGlvbkltZyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtYXAuc2V0Q2VudGVyKHRva3lvU3RhdGlvblBvcylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGVMb2NhdGlvbkVycm9yKClcbiAgICAgICAgfSxcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0dlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLicpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHJlZj17bG9jYXRpb25CdXR0b25SZWZ9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGhlaWdodDogJzYwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICBiZ2NvbG9yOiAnIzRDQUY1MCcsXG4gICAgICAgICAgICBwdDogMixcbiAgICAgICAgICAgIHBiOiAyLFxuICAgICAgICAgICAgcGw6IDQsXG4gICAgICAgICAgICBwcjogNCxcbiAgICAgICAgICAgIG10OiAyLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17dXNlckdlb0xvY2F0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAg5pyA5a+E44KK44Gu44OI44Kk44Os44KS5o6i44GZXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VvTG9jYXRpb25cbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJqc3hERVYiLCJfanN4REVWIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJHZW9Mb2NhdGlvbiIsIl9yZWYiLCJfcyIsIm1hcCIsImxvY2F0aW9uQnV0dG9uUmVmIiwiY3VycmVudCIsImNvbnRyb2xQb3NpdGlvbiIsImdvb2dsZSIsIm1hcHMiLCJDb250cm9sUG9zaXRpb24iLCJUT1BfQ0VOVEVSIiwiY29udHJvbHMiLCJwdXNoIiwiaSIsImdldExlbmd0aCIsImdldEF0IiwicmVtb3ZlQXQiLCJ1c2VyR2VvTG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsIl9yZWYyIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJwb3NpdGlvbiIsInVzZXJQb3MiLCJ1c2VyUG9zaXRpb25JbWciLCJfcmVmMyIsIkFkdmFuY2VkTWFya2VyRWxlbWVudCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJsYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW1wb3J0TGlicmFyeSIsInNlbnQiLCJ0aXRsZSIsImNvbnRlbnQiLCJzZXRDZW50ZXIiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvY2F0aW9uRXJyb3IiLCJfcmVmNCIsIl9jYWxsZWUyIiwidG9reW9TdGF0aW9uUG9zIiwiX3JlZjUiLCJfYXJnczIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJjaGlsZHJlbiIsInN4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicmVmIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJiZ2NvbG9yIiwicHQiLCJwYiIsInBsIiwicHIiLCJtdCIsIm9uQ2xpY2siLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/geoLocation.tsx\n"));

/***/ })

});