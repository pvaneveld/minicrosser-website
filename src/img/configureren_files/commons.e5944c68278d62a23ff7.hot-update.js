webpackHotUpdate("commons",{

/***/ "./src/views/configurator/page-5/page-5.tsx":
/*!**************************************************!*\
  !*** ./src/views/configurator/page-5/page-5.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _page_5_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-5.module.css */ "./src/views/configurator/page-5/page-5.module.css");
/* harmony import */ var _page_5_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_5_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Configurator_Item_Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Configurator/Item/Item */ "./src/components/Configurator/Item/Item.tsx");
/* harmony import */ var _components_Configurator_SelectCard_SelectCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Configurator/SelectCard/SelectCard */ "./src/components/Configurator/SelectCard/SelectCard.tsx");
/* harmony import */ var _components_Configurator_SelectCard_Grid_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Configurator/SelectCard/Grid/Grid */ "./src/components/Configurator/SelectCard/Grid/Grid.tsx");



var _jsxFileName = "/Users/paulvaneveld/Documents/web/minicrosser-website/src/views/configurator/page-5/page-5.tsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var ConfiguratorPageFive = function ConfiguratorPageFive() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      seatAccessories = _useState[0],
      setSeatAccessories = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      otherAccessories = _useState2[0],
      setOtherAccessories = _useState2[1];

  var query = Object(gatsby__WEBPACK_IMPORTED_MODULE_5__["useStaticQuery"])("46222119");
  var content = query.markdownRemark.frontmatter;
  var accessoriesSeat = content.accessoriesSeat;
  var accessories = content.accessories;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _page_5_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: _page_5_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, accessories.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Configurator_SelectCard_Grid_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, accessoriesSeat.accessoriesSeatList.map(function (accessory, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Configurator_Item_Item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectMultiple: true,
      key: "seat-accessory-" + index,
      name: accessory.name,
      price: accessory.price,
      category: accessoriesSeat.category,
      isActiveCallback: function isActiveCallback(accessory) {
        return setSeatAccessories(!seatAccessories.includes(accessory) ? seatAccessories.concat(accessory) : seatAccessories);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Configurator_SelectCard_SelectCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isActive: seatAccessories.includes(accessory.name),
      fluid: accessory.image.childImageSharp.fluid,
      name: accessory.name,
      price: accessory.price,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: _page_5_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, accessoriesSeat.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Configurator_SelectCard_Grid_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, accessories.accessoriesList.map(function (accessory, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Configurator_Item_Item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectMultiple: true,
      key: "other-accessory-" + index,
      name: accessory.name,
      price: accessory.price,
      category: accessories.category,
      isActiveCallback: function isActiveCallback(accessory) {
        return setOtherAccessories(!otherAccessories.includes(accessory) ? otherAccessories.concat(accessory) : otherAccessories);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Configurator_SelectCard_SelectCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isActive: otherAccessories.includes(accessory.name),
      fluid: accessory.image.childImageSharp.fluid,
      name: accessory.name,
      price: accessory.price,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }));
  })));
};

__signature__(ConfiguratorPageFive, "useState{[seatAccessories, setSeatAccessories]([])}\nuseState{[otherAccessories, setOtherAccessories]([])}\nuseStaticQuery{query}", function () {
  return [gatsby__WEBPACK_IMPORTED_MODULE_5__["useStaticQuery"]];
});

var _default = ConfiguratorPageFive;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConfiguratorPageFive, "ConfiguratorPageFive", "/Users/paulvaneveld/Documents/web/minicrosser-website/src/views/configurator/page-5/page-5.tsx");
  reactHotLoader.register(_default, "default", "/Users/paulvaneveld/Documents/web/minicrosser-website/src/views/configurator/page-5/page-5.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=commons.e5944c68278d62a23ff7.hot-update.js.map