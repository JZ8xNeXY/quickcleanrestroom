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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _CalculateAndDisplayRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CalculateAndDisplayRoute */ \"./src/components/CalculateAndDisplayRoute.tsx\");\n/* harmony import */ var _PostModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostModal */ \"./src/components/PostModal.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/AddMarkers.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar AddMarkers = function AddMarkers(_ref) {\n  _s();\n  var map = _ref.map;\n  //Railsからデータを読み込み indexアクション\n  var url = 'http://localhost:3000/api/v1/posts';\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_6__.fetcher, {\n      revalidateOnFocus: false\n    }),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n    open = _useState[0],\n    setOpen = _useState[1];\n  var handleClose = function handleClose() {\n    return setOpen(false);\n  };\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n    selectedPostName = _useState2[0],\n    setSelectedPostName = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n    selectedPostAddress = _useState3[0],\n    setSelectedPostAddress = _useState3[1];\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n    selectedPostContent = _useState4[0],\n    setSelectedPostContent = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n    selectedPostLatitude = _useState5[0],\n    setSelectedPostLatitude = _useState5[1];\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n    selectedPostLongitude = _useState6[0],\n    setSelectedPostLongitude = _useState6[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var addMarkers = /*#__PURE__*/function () {\n      var _ref2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var posts, _ref3, AdvancedMarkerElement;\n        return _app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              if (!(map && data)) {\n                _context.next = 7;\n                break;\n              }\n              posts = data ? (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(data) : [];\n              _context.next = 4;\n              return google.maps.importLibrary('marker');\n            case 4:\n              _ref3 = _context.sent;\n              AdvancedMarkerElement = _ref3.AdvancedMarkerElement;\n              //マーカーの作成\n              posts.forEach(function (post) {\n                //画像の読み込み\n                var restroomImg = document.createElement('img');\n                restroomImg.src = '/restroom.png';\n                restroomImg.alt = post.name;\n                restroomImg.width = 75;\n                restroomImg.height = 75;\n\n                //マーカーの表示\n                var marker = new AdvancedMarkerElement({\n                  map: map,\n                  position: {\n                    lat: post.latitude,\n                    lng: post.longitude\n                  },\n                  title: post.name,\n                  content: restroomImg\n                });\n\n                //modalの表示\n                marker.addListener('gmp-click', function () {\n                  setOpen(true);\n                  setSelectedPostName(post.name);\n                  setSelectedPostAddress(post.address);\n                  setSelectedPostContent(post.content);\n                  //クリックしたら該当箇所の緯度経度情報に更新\n                  setSelectedPostLatitude(post.latitude);\n                  setSelectedPostLongitude(post.longitude);\n                });\n              });\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      return function addMarkers() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n    addMarkers();\n  }, [map, data]);\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n    children: \"An error has occurred.\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 21\n  }, _this);\n  var locationButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (map && locationButtonRef.current) {\n      var controlPosition = google.maps.ControlPosition.TOP_CENTER;\n      map.controls[controlPosition].push(locationButtonRef.current);\n      return function () {\n        var controls = map.controls[controlPosition];\n        for (var i = 0; i < controls.getLength(); i++) {\n          // eslint-disable-next-line react-hooks/exhaustive-deps\n          if (controls.getAt(i) === locationButtonRef.current) {\n            controls.removeAt(i);\n            break;\n          }\n        }\n      };\n    }\n  }, [map]);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_PostModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      open: open,\n      onClose: handleClose,\n      name: selectedPostName,\n      address: selectedPostAddress,\n      content: selectedPostContent\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_CalculateAndDisplayRoute__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      latitude: selectedPostLatitude,\n      longitude: selectedPostLongitude\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n      sx: {\n        display: 'flex',\n        justifyContent: 'center'\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Button, {\n        ref: locationButtonRef\n        //現在地を取得\n        ,\n        onClick: function onClick() {\n          return userGeoLocation({\n            map: map\n          });\n        },\n        sx: {\n          height: '60px',\n          fontSize: '16px',\n          color: '#FFFFFF',\n          fontWeight: 'bold',\n          bgcolor: '#4CAF50',\n          pt: 2,\n          pb: 2,\n          pl: 4,\n          pr: 4,\n          mt: 2\n        },\n        children: \"\\u6700\\u5BC4\\u308A\\u306E\\u30C8\\u30A4\\u30EC\\u3092\\u63A2\\u3059\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 5\n  }, _this);\n};\n_s(AddMarkers, \"kS89KL7Lg8b3ooaIJMCPyR3Zago=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n_c = AddMarkers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddMarkers);\nvar _c;\n$RefreshReg$(_c, \"AddMarkers\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ04sQ0FBQztFQUFBO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNILENBQUM7QUFFVixDQUFDO0FBQUF4RSxFQUFBLENBcEhLRixVQUFxQztFQUFBLFFBR2pCTiwyQ0FBTTtBQUFBO0FBQUE2RyxFQUFBLEdBSDFCdkcsVUFBcUM7QUFzSDNDLCtEQUFlQSxVQUFVO0FBQUEsSUFBQXVHLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZE1hcmtlcnMudHN4PzA0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBjYW1lbGNhc2VLZXlzIGZyb20gJ2NhbWVsY2FzZS1rZXlzJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IENhbGN1bGF0ZUFuZERpc3BsYXlSb3V0ZSBmcm9tICcuL0NhbGN1bGF0ZUFuZERpc3BsYXlSb3V0ZSdcbmltcG9ydCBQb3N0TW9kYWwgZnJvbSAnLi9Qb3N0TW9kYWwnXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnQC91dGlscydcblxuaW50ZXJmYWNlIFBvc3RQcm9wcyB7XG4gIGlkOiBudW1iZXJcbiAgbmFtZTogc3RyaW5nXG4gIGFkZHJlc3M6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbiAgbGF0aXR1ZGU6IG51bWJlclxuICBsb25naXR1ZGU6IG51bWJlclxuICBjcmVhdGVkQXQ6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQWRkTWFya2Vyc1Byb3BzIHtcbiAgbWFwOiBnb29nbGUubWFwcy5NYXAgfCBudWxsXG59XG5cbmNvbnN0IEFkZE1hcmtlcnM6IE5leHRQYWdlPEFkZE1hcmtlcnNQcm9wcz4gPSAoeyBtYXAgfSkgPT4ge1xuICAvL1JhaWxz44GL44KJ44OH44O844K/44KS6Kqt44G/6L6844G/IGluZGV444Ki44Kv44K344On44OzXG4gIGNvbnN0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3Bvc3RzJ1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyLCB7IHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSB9KVxuXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE9wZW4oZmFsc2UpXG5cbiAgY29uc3QgW3NlbGVjdGVkUG9zdE5hbWUsIHNldFNlbGVjdGVkUG9zdE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3QgW3NlbGVjdGVkUG9zdEFkZHJlc3MsIHNldFNlbGVjdGVkUG9zdEFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3QgW3NlbGVjdGVkUG9zdENvbnRlbnQsIHNldFNlbGVjdGVkUG9zdENvbnRlbnRdID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3QgW3NlbGVjdGVkUG9zdExhdGl0dWRlLCBzZXRTZWxlY3RlZFBvc3RMYXRpdHVkZV0gPSB1c2VTdGF0ZTxudW1iZXI+KClcbiAgY29uc3QgW3NlbGVjdGVkUG9zdExvbmdpdHVkZSwgc2V0U2VsZWN0ZWRQb3N0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlPG51bWJlcj4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYWRkTWFya2VycyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChtYXAgJiYgZGF0YSkge1xuICAgICAgICBjb25zdCBwb3N0czogUG9zdFByb3BzW10gPSBkYXRhID8gY2FtZWxjYXNlS2V5cyhkYXRhKSA6IFtdXG4gICAgICAgIGNvbnN0IHsgQWR2YW5jZWRNYXJrZXJFbGVtZW50IH0gPSAoYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeShcbiAgICAgICAgICAnbWFya2VyJyxcbiAgICAgICAgKSkgYXMgZ29vZ2xlLm1hcHMuTWFya2VyTGlicmFyeVxuXG4gICAgICAgIC8v44Oe44O844Kr44O844Gu5L2c5oiQXG4gICAgICAgIHBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcbiAgICAgICAgICAvL+eUu+WDj+OBruiqreOBv+i+vOOBv1xuICAgICAgICAgIGNvbnN0IHJlc3Ryb29tSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgICByZXN0cm9vbUltZy5zcmMgPSAnL3Jlc3Ryb29tLnBuZydcbiAgICAgICAgICByZXN0cm9vbUltZy5hbHQgPSBwb3N0Lm5hbWVcbiAgICAgICAgICByZXN0cm9vbUltZy53aWR0aCA9IDc1XG4gICAgICAgICAgcmVzdHJvb21JbWcuaGVpZ2h0ID0gNzVcblxuICAgICAgICAgIC8v44Oe44O844Kr44O844Gu6KGo56S6XG4gICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IEFkdmFuY2VkTWFya2VyRWxlbWVudCh7XG4gICAgICAgICAgICBtYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IHBvc3QubGF0aXR1ZGUsIGxuZzogcG9zdC5sb25naXR1ZGUgfSxcbiAgICAgICAgICAgIHRpdGxlOiBwb3N0Lm5hbWUsXG4gICAgICAgICAgICBjb250ZW50OiByZXN0cm9vbUltZyxcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgLy9tb2RhbOOBruihqOekulxuICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignZ21wLWNsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0T3Blbih0cnVlKVxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRQb3N0TmFtZShwb3N0Lm5hbWUpXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFBvc3RBZGRyZXNzKHBvc3QuYWRkcmVzcylcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUG9zdENvbnRlbnQocG9zdC5jb250ZW50KVxuICAgICAgICAgICAgLy/jgq/jg6rjg4Pjgq/jgZfjgZ/jgonoqbLlvZPnrofmiYDjga7nt6/luqbntYzluqbmg4XloLHjgavmm7TmlrBcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUG9zdExhdGl0dWRlKHBvc3QubGF0aXR1ZGUpXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFBvc3RMb25naXR1ZGUocG9zdC5sb25naXR1ZGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRNYXJrZXJzKClcbiAgfSwgW21hcCwgZGF0YV0pXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPEJveD5BbiBlcnJvciBoYXMgb2NjdXJyZWQuPC9Cb3g+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxCb3g+TG9hZGluZy4uLjwvQm94PlxuXG4gIGNvbnN0IGxvY2F0aW9uQnV0dG9uUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1hcCAmJiBsb2NhdGlvbkJ1dHRvblJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBjb250cm9sUG9zaXRpb24gPSBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uVE9QX0NFTlRFUlxuICAgICAgbWFwLmNvbnRyb2xzW2NvbnRyb2xQb3NpdGlvbl0ucHVzaChsb2NhdGlvbkJ1dHRvblJlZi5jdXJyZW50KVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IG1hcC5jb250cm9sc1tjb250cm9sUG9zaXRpb25dXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICAgICAgICBpZiAoY29udHJvbHMuZ2V0QXQoaSkgPT09IGxvY2F0aW9uQnV0dG9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnRyb2xzLnJlbW92ZUF0KGkpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW21hcF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIG1vZGFs44Gu6KGo56S6ICovfVxuICAgICAgPFBvc3RNb2RhbFxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgbmFtZT17c2VsZWN0ZWRQb3N0TmFtZX1cbiAgICAgICAgYWRkcmVzcz17c2VsZWN0ZWRQb3N0QWRkcmVzc31cbiAgICAgICAgY29udGVudD17c2VsZWN0ZWRQb3N0Q29udGVudH1cbiAgICAgIC8+XG4gICAgICA8Q2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlXG4gICAgICAgIGxhdGl0dWRlPXtzZWxlY3RlZFBvc3RMYXRpdHVkZX1cbiAgICAgICAgbG9uZ2l0dWRlPXtzZWxlY3RlZFBvc3RMb25naXR1ZGV9XG4gICAgICAvPlxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHJlZj17bG9jYXRpb25CdXR0b25SZWZ9XG4gICAgICAgICAgLy/nj77lnKjlnLDjgpLlj5blvpdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1c2VyR2VvTG9jYXRpb24oeyBtYXAgfSl9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGhlaWdodDogJzYwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICBiZ2NvbG9yOiAnIzRDQUY1MCcsXG4gICAgICAgICAgICBwdDogMixcbiAgICAgICAgICAgIHBiOiAyLFxuICAgICAgICAgICAgcGw6IDQsXG4gICAgICAgICAgICBwcjogNCxcbiAgICAgICAgICAgIG10OiAyLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICDmnIDlr4Tjgorjga7jg4jjgqTjg6zjgpLmjqLjgZlcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRNYXJrZXJzXG4iXSwibmFtZXMiOlsiQm94IiwiY2FtZWxjYXNlS2V5cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlU1dSIiwiQ2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlIiwiUG9zdE1vZGFsIiwiZmV0Y2hlciIsImpzeERFViIsIl9qc3hERVYiLCJBZGRNYXJrZXJzIiwiX3JlZiIsIl9zIiwibWFwIiwidXJsIiwiX3VzZVNXUiIsInJldmFsaWRhdGVPbkZvY3VzIiwiZGF0YSIsImVycm9yIiwiX3VzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbG9zZSIsIl91c2VTdGF0ZTIiLCJzZWxlY3RlZFBvc3ROYW1lIiwic2V0U2VsZWN0ZWRQb3N0TmFtZSIsIl91c2VTdGF0ZTMiLCJzZWxlY3RlZFBvc3RBZGRyZXNzIiwic2V0U2VsZWN0ZWRQb3N0QWRkcmVzcyIsIl91c2VTdGF0ZTQiLCJzZWxlY3RlZFBvc3RDb250ZW50Iiwic2V0U2VsZWN0ZWRQb3N0Q29udGVudCIsIl91c2VTdGF0ZTUiLCJzZWxlY3RlZFBvc3RMYXRpdHVkZSIsInNldFNlbGVjdGVkUG9zdExhdGl0dWRlIiwiX3VzZVN0YXRlNiIsInNlbGVjdGVkUG9zdExvbmdpdHVkZSIsInNldFNlbGVjdGVkUG9zdExvbmdpdHVkZSIsImFkZE1hcmtlcnMiLCJfcmVmMiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicG9zdHMiLCJfcmVmMyIsIkFkdmFuY2VkTWFya2VyRWxlbWVudCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJnb29nbGUiLCJtYXBzIiwiaW1wb3J0TGlicmFyeSIsInNlbnQiLCJmb3JFYWNoIiwicG9zdCIsInJlc3Ryb29tSW1nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFya2VyIiwicG9zaXRpb24iLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwiY29udGVudCIsImFkZExpc3RlbmVyIiwiYWRkcmVzcyIsInN0b3AiLCJhcHBseSIsImFyZ3VtZW50cyIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJsb2NhdGlvbkJ1dHRvblJlZiIsImN1cnJlbnQiLCJjb250cm9sUG9zaXRpb24iLCJDb250cm9sUG9zaXRpb24iLCJUT1BfQ0VOVEVSIiwiY29udHJvbHMiLCJwdXNoIiwiaSIsImdldExlbmd0aCIsImdldEF0IiwicmVtb3ZlQXQiLCJvbkNsb3NlIiwic3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJCdXR0b24iLCJyZWYiLCJvbkNsaWNrIiwidXNlckdlb0xvY2F0aW9uIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJiZ2NvbG9yIiwicHQiLCJwYiIsInBsIiwicHIiLCJtdCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AddMarkers.tsx\n"));

/***/ })

});