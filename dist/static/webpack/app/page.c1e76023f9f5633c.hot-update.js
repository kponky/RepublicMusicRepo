"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/home/VideoSection.tsx":
/*!**********************************************!*\
  !*** ./src/components/home/VideoSection.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Button */ \"(app-pages-browser)/./src/components/shared/Button.tsx\");\n/* harmony import */ var _data_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/data/video */ \"(app-pages-browser)/./src/data/video.ts\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/effect-fade */ \"(app-pages-browser)/./node_modules/swiper/modules/effect-fade.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var _shared_CustomCursor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/CustomCursor */ \"(app-pages-browser)/./src/components/shared/CustomCursor.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst VideoSection = ()=>{\n    _s();\n    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // Split articles into chunks of 5 for Swiper slides\n    const chunkedArticles = [];\n    for(let i = 0; i < _data_video__WEBPACK_IMPORTED_MODULE_6__[\"default\"].length; i += 4){\n        chunkedArticles.push(_data_video__WEBPACK_IMPORTED_MODULE_6__[\"default\"].slice(i, i + 4));\n    }\n    // Function to navigate to the previous slide\n    const handlePrev = ()=>{\n        if (swiperRef.current) {\n            swiperRef.current.swiper.slidePrev();\n        }\n    };\n    // Function to navigate to the next slide\n    const handleNext = ()=>{\n        if (swiperRef.current) {\n            swiperRef.current.swiper.slideNext();\n        }\n    };\n    const handleMouseEnter = ()=>{\n        if (cursorRef.current) cursorRef.current.setHovering(true);\n    };\n    const handleMouseLeave = ()=>{\n        if (cursorRef.current) cursorRef.current.setHovering(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pt-[50px] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto w-[95%] block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-[60px] lg:text-[160px] lowercase font-bold text-white -tracking-wider leading-none mx-auto w-[90%] lg:translate-y-[55px] z-[2] relative pointer-events-none mb-[10px]\",\n                    children: \"Videos\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handlePrev,\n                                className: \"slick-prev \",\n                                children: \"prev\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleNext,\n                                className: \"slick-next\",\n                                children: \"next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_CustomCursor__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ref: cursorRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {\n                        ref: swiperRef,\n                        modules: [\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation,\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_3__.EffectFade\n                        ],\n                        spaceBetween: 10,\n                        slidesPerView: 1,\n                        effect: \"fade\",\n                        navigation: false,\n                        loop: true,\n                        className: \"w-full\",\n                        children: chunkedArticles.map((chunk, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full relative flex flex-row flex-wrap h-full min-h-[1px] float-left\",\n                                    children: chunk.map((videoArticle)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                            className: \"video-article__card\",\n                                            onMouseEnter: handleMouseEnter,\n                                            onMouseLeave: handleMouseLeave,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                                className: \"relative block\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"video-article_card__thumb\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"video-article_card__thumb-overlay\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                                    href: videoArticle.link,\n                                                                    target: \"_blank\",\n                                                                    className: \"play-button\",\n                                                                    title: \"Play Video\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        children: \"Play Video\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                                                        lineNumber: 97,\n                                                                        columnNumber: 29\n                                                                    }, undefined)\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                                                    lineNumber: 91,\n                                                                    columnNumber: 27\n                                                                }, undefined)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                                                lineNumber: 90,\n                                                                columnNumber: 25\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"__thumb-bg-image\",\n                                                                style: {\n                                                                    backgroundImage: \"url(\".concat(videoArticle.imageUrl, \")\")\n                                                                }\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                                                lineNumber: 100,\n                                                                columnNumber: 25\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"video-article_card__footer\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"__footer-header\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                children: videoArticle.title\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                                                lineNumber: 109,\n                                                                columnNumber: 27\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                                            lineNumber: 108,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                                        lineNumber: 107,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, videoArticle.id, false, {\n                                            fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-[95%] mt-10 flex justify-end \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/videos\",\n                    className: \"mb-[50px] w-fit\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"outline\",\n                        children: \"view all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\John\\\\Desktop\\\\2024\\\\kponky-projects\\\\RepublicMusicRepo\\\\src\\\\components\\\\home\\\\VideoSection.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideoSection, \"K3FnTOJvCRNpHAHT02MqY2hap54=\");\n_c = VideoSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoSection);\nvar _c;\n$RefreshReg$(_c, \"VideoSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvVmlkZW9TZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDRTtBQUN5QjtBQUNNO0FBQ3hCO0FBRUc7QUFDckI7QUFDWTtBQUNEO0FBQ3dDO0FBRXZFLE1BQU1TLGVBQWU7O0lBQ25CLE1BQU1DLFlBQVlULDZDQUFNQSxDQUFtQjtJQUMzQyxNQUFNVSxZQUFZViw2Q0FBTUEsQ0FBeUI7SUFFakQsb0RBQW9EO0lBQ3BELE1BQU1XLGtCQUFrQixFQUFFO0lBQzFCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJTixtREFBYUEsQ0FBQ08sTUFBTSxFQUFFRCxLQUFLLEVBQUc7UUFDaERELGdCQUFnQkcsSUFBSSxDQUFDUixtREFBYUEsQ0FBQ1MsS0FBSyxDQUFDSCxHQUFHQSxJQUFJO0lBQ2xEO0lBRUEsNkNBQTZDO0lBQzdDLE1BQU1JLGFBQWE7UUFDakIsSUFBSVAsVUFBVVEsT0FBTyxFQUFFO1lBQ3JCUixVQUFVUSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUztRQUNwQztJQUNGO0lBRUEseUNBQXlDO0lBQ3pDLE1BQU1DLGFBQWE7UUFDakIsSUFBSVgsVUFBVVEsT0FBTyxFQUFFO1lBQ3JCUixVQUFVUSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0csU0FBUztRQUNwQztJQUNGO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCLElBQUlaLFVBQVVPLE9BQU8sRUFBRVAsVUFBVU8sT0FBTyxDQUFDTSxXQUFXLENBQUM7SUFDdkQ7SUFFQSxNQUFNQyxtQkFBbUI7UUFDdkIsSUFBSWQsVUFBVU8sT0FBTyxFQUFFUCxVQUFVTyxPQUFPLENBQUNNLFdBQVcsQ0FBQztJQUN2RDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDRTtvQkFBR0YsV0FBVTs4QkFBNks7Ozs7Ozs7Ozs7OzBCQU03TCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUViLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFPQyxTQUFTZDtnQ0FBWVUsV0FBVTswQ0FBYzs7Ozs7OzBDQUdyRCw4REFBQ0c7Z0NBQU9DLFNBQVNWO2dDQUFZTSxXQUFVOzBDQUFhOzs7Ozs7Ozs7Ozs7a0NBS3RELDhEQUFDbkIsNkRBQVlBO3dCQUFDd0IsS0FBS3JCOzs7Ozs7a0NBRW5CLDhEQUFDUCxnREFBTUE7d0JBQ0w0QixLQUFLdEI7d0JBQ0x1QixTQUFTOzRCQUFDOUIsc0RBQVVBOzRCQUFFRCxzREFBVUE7eUJBQUM7d0JBQ2pDZ0MsY0FBYzt3QkFDZEMsZUFBZTt3QkFDZkMsUUFBUTt3QkFDUkMsWUFBWTt3QkFDWkMsSUFBSTt3QkFDSlgsV0FBVTtrQ0FFVGYsZ0JBQWdCMkIsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUMzQiw4REFBQ3BDLHFEQUFXQTswQ0FDViw0RUFBQ3VCO29DQUFJRCxXQUFVOzhDQUNaYSxNQUFNRCxHQUFHLENBQUMsQ0FBQ0csNkJBQ1YsOERBQUNDOzRDQUVDaEIsV0FBVTs0Q0FDVmlCLGNBQWNyQjs0Q0FDZHNCLGNBQWNwQjtzREFFZCw0RUFBQ3FCO2dEQUFPbkIsV0FBVTs7a0VBQ2hCLDhEQUFDQzt3REFBSUQsV0FBVTs7MEVBQ2IsOERBQUNDO2dFQUFJRCxXQUFVOzBFQUNiLDRFQUFDM0IsaURBQUlBO29FQUNIK0MsTUFBTUwsYUFBYU0sSUFBSTtvRUFDdkJDLFFBQU87b0VBQ1B0QixXQUFVO29FQUNWdUIsT0FBTTs4RUFFTiw0RUFBQ0M7a0ZBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7MEVBR1YsOERBQUN2QjtnRUFDQ0QsV0FBVTtnRUFDVnlCLE9BQU87b0VBQ0xDLGlCQUFpQixPQUE2QixPQUF0QlgsYUFBYVksUUFBUSxFQUFDO2dFQUNoRDs7Ozs7Ozs7Ozs7O2tFQUdKLDhEQUFDMUI7d0RBQUlELFdBQVU7a0VBQ2IsNEVBQUNDOzREQUFJRCxXQUFVO3NFQUNiLDRFQUFDNEI7MEVBQUliLGFBQWFRLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBMUJ4QlIsYUFBYWMsRUFBRTs7Ozs7Ozs7OzsrQkFKVmY7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBMEN4Qiw4REFBQ2I7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUMzQixpREFBSUE7b0JBQUMrQyxNQUFLO29CQUFVcEIsV0FBVTs4QkFDN0IsNEVBQUNyQixzREFBTUE7d0JBQUNtRCxTQUFRO2tDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0dBbEhNaEQ7S0FBQUE7QUFvSE4saUVBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL1ZpZGVvU2VjdGlvbi50c3g/NGU5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRWZmZWN0RmFkZSwgTmF2aWdhdGlvbiB9IGZyb20gXCJzd2lwZXIvbW9kdWxlc1wiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclJlZiwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3NoYXJlZC9CdXR0b25cIjtcclxuXHJcbmltcG9ydCB2aWRlb0FydGljbGVzIGZyb20gXCJAL2RhdGEvdmlkZW9cIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL2VmZmVjdC1mYWRlXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQ3VzdG9tQ3Vyc29yLCB7IEN1c3RvbUN1cnNvclJlZiB9IGZyb20gXCIuLi9zaGFyZWQvQ3VzdG9tQ3Vyc29yXCI7XHJcblxyXG5jb25zdCBWaWRlb1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3dpcGVyUmVmID0gdXNlUmVmPFN3aXBlclJlZiB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IGN1cnNvclJlZiA9IHVzZVJlZjxDdXN0b21DdXJzb3JSZWYgfCBudWxsPihudWxsKTtcclxuXHJcbiAgLy8gU3BsaXQgYXJ0aWNsZXMgaW50byBjaHVua3Mgb2YgNSBmb3IgU3dpcGVyIHNsaWRlc1xyXG4gIGNvbnN0IGNodW5rZWRBcnRpY2xlcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmlkZW9BcnRpY2xlcy5sZW5ndGg7IGkgKz0gNCkge1xyXG4gICAgY2h1bmtlZEFydGljbGVzLnB1c2godmlkZW9BcnRpY2xlcy5zbGljZShpLCBpICsgNCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIHByZXZpb3VzIHNsaWRlXHJcbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcclxuICAgIGlmIChzd2lwZXJSZWYuY3VycmVudCkge1xyXG4gICAgICBzd2lwZXJSZWYuY3VycmVudC5zd2lwZXIuc2xpZGVQcmV2KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgc2xpZGVcclxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHN3aXBlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHN3aXBlclJlZi5jdXJyZW50LnN3aXBlci5zbGlkZU5leHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnNvclJlZi5jdXJyZW50KSBjdXJzb3JSZWYuY3VycmVudC5zZXRIb3ZlcmluZyh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnNvclJlZi5jdXJyZW50KSBjdXJzb3JSZWYuY3VycmVudC5zZXRIb3ZlcmluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LVs1MHB4XSBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy1bOTUlXSBibG9ja1wiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVs2MHB4XSBsZzp0ZXh0LVsxNjBweF0gbG93ZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIC10cmFja2luZy13aWRlciBsZWFkaW5nLW5vbmUgbXgtYXV0byB3LVs5MCVdIGxnOnRyYW5zbGF0ZS15LVs1NXB4XSB6LVsyXSByZWxhdGl2ZSBwb2ludGVyLWV2ZW50cy1ub25lIG1iLVsxMHB4XVwiPlxyXG4gICAgICAgICAgVmlkZW9zXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogdmlldyBjb250ZW50ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgey8qIGFycm93IGJ1dHRvbnMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2fSBjbGFzc05hbWU9XCJzbGljay1wcmV2IFwiPlxyXG4gICAgICAgICAgICBwcmV2XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dH0gY2xhc3NOYW1lPVwic2xpY2stbmV4dFwiPlxyXG4gICAgICAgICAgICBuZXh0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEN1c3RvbUN1cnNvciByZWY9e2N1cnNvclJlZn0gLz5cclxuXHJcbiAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgcmVmPXtzd2lwZXJSZWZ9XHJcbiAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbiwgRWZmZWN0RmFkZV19IC8vIEVuYWJsZSB0aGUgTmF2aWdhdGlvbiBtb2R1bGVcclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MTB9IC8vIFNwYWNlIGJldHdlZW4gc2xpZGVzXHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfSAvLyBTaG93IG9uZSBzbGlkZSAod2hpY2ggY29udGFpbnMgbXVsdGlwbGUgY2FyZHMpXHJcbiAgICAgICAgICBlZmZlY3Q9e1wiZmFkZVwifVxyXG4gICAgICAgICAgbmF2aWdhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICBsb29wXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaHVua2VkQXJ0aWNsZXMubWFwKChjaHVuaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1yb3cgZmxleC13cmFwIGgtZnVsbCBtaW4taC1bMXB4XSBmbG9hdC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICB7Y2h1bmsubWFwKCh2aWRlb0FydGljbGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3ZpZGVvQXJ0aWNsZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby1hcnRpY2xlX19jYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1hcnRpY2xlX2NhcmRfX3RodW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tYXJ0aWNsZV9jYXJkX190aHVtYi1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZpZGVvQXJ0aWNsZS5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYXktYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxheSBWaWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxheSBWaWRlbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiX190aHVtYi1iZy1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3ZpZGVvQXJ0aWNsZS5pbWFnZVVybH0pYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tYXJ0aWNsZV9jYXJkX19mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfX2Zvb3Rlci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3ZpZGVvQXJ0aWNsZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LVs5NSVdIG10LTEwIGZsZXgganVzdGlmeS1lbmQgXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi92aWRlb3NcIiBjbGFzc05hbWU9XCJtYi1bNTBweF0gdy1maXRcIj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIj52aWV3IGFsbDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvU2VjdGlvbjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSZWYiLCJFZmZlY3RGYWRlIiwiTmF2aWdhdGlvbiIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQnV0dG9uIiwidmlkZW9BcnRpY2xlcyIsIkN1c3RvbUN1cnNvciIsIlZpZGVvU2VjdGlvbiIsInN3aXBlclJlZiIsImN1cnNvclJlZiIsImNodW5rZWRBcnRpY2xlcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic2xpY2UiLCJoYW5kbGVQcmV2IiwiY3VycmVudCIsInN3aXBlciIsInNsaWRlUHJldiIsImhhbmRsZU5leHQiLCJzbGlkZU5leHQiLCJoYW5kbGVNb3VzZUVudGVyIiwic2V0SG92ZXJpbmciLCJoYW5kbGVNb3VzZUxlYXZlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInJlZiIsIm1vZHVsZXMiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiZWZmZWN0IiwibmF2aWdhdGlvbiIsImxvb3AiLCJtYXAiLCJjaHVuayIsImluZGV4IiwidmlkZW9BcnRpY2xlIiwiYXJ0aWNsZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImZpZ3VyZSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwidGl0bGUiLCJzcGFuIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZVVybCIsImgzIiwiaWQiLCJ2YXJpYW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/VideoSection.tsx\n"));

/***/ })

});