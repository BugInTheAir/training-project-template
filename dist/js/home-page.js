/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _utilities_init_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_init-data */ "./src/scripts/utilities/_init-data.ts");


const aFewSecond = 'A few seconds ago';
const admin = 'Administrator MOD';
const initialData = [{
  icon: 'ms-Icon--FabricFolderFill',
  name: 'CAS',
  modifedBy: 'Megan Bowen',
  modified: 'April 30'
}, {
  icon: 'ms-Icon--ExcelDocument',
  name: 'CoasterAndBargeLoading.xlsx',
  modified: aFewSecond,
  modifedBy: admin
}, {
  icon: 'ms-Icon--ExcelDocument',
  name: 'RevenueByServices.xlsx',
  modified: aFewSecond,
  modifedBy: admin
}, {
  icon: 'ms-Icon--ExcelDocument',
  name: 'RevenueByServices2016.xlsx',
  modified: aFewSecond,
  modifedBy: admin
}, {
  icon: 'ms-Icon--ExcelDocument',
  name: 'RevenueByServices2017.xlsx',
  modified: aFewSecond,
  modifedBy: admin
}];
Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  // renderGrid();
  Object(_utilities_init_data__WEBPACK_IMPORTED_MODULE_1__["default"])(initialData);
});

/***/ }),

/***/ "./src/scripts/utilities/_create-row-content.ts":
/*!******************************************************!*\
  !*** ./src/scripts/utilities/_create-row-content.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createRowContent = element => {
  const detailRow = document.createElement('div');
  detailRow.classList.add('detail__row');
  const detailBtnPlaceholder = document.createElement('div');
  detailBtnPlaceholder.classList.add('detail__btn__placeholder');
  const iconColumn = document.createElement('div');
  iconColumn.classList.add('icon__column');
  const iconSpan = document.createElement('span');
  const img = document.createElement('i');
  img.classList.add('ms-Icon');
  img.classList.add('ms-font-xl');
  img.classList.add(element.icon);

  if (element.icon.includes('FabricFolderFill')) {
    img.style.color = 'Yellow';
  }

  iconSpan.appendChild(img);
  iconColumn.appendChild(iconSpan);
  const fileColumn = document.createElement('div');
  const fileSpan = document.createElement('span');
  const fileText = document.createTextNode(element.name);
  fileSpan.appendChild(fileText);
  fileSpan.classList.add('file__name');
  fileColumn.appendChild(fileSpan);
  fileColumn.classList.add('file__column');
  const modColumn = document.createElement('div');
  const modSpan = document.createElement('span');
  const modText = document.createTextNode(element.modified);
  modSpan.appendChild(modText);
  modColumn.appendChild(modSpan);
  modColumn.classList.add('rest__column');
  const modByColumn = document.createElement('div');
  const modBySpan = document.createElement('span');
  const modByText = document.createTextNode(element.modifedBy);
  modBySpan.appendChild(modByText);
  modByColumn.appendChild(modBySpan);
  modByColumn.classList.add('rest__column');
  detailRow.appendChild(detailBtnPlaceholder);
  detailRow.appendChild(iconColumn);
  detailRow.appendChild(fileColumn);
  detailRow.appendChild(modColumn);
  detailRow.appendChild(modByColumn);
  return detailRow;
};

/* harmony default export */ __webpack_exports__["default"] = (createRowContent);

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ready = fn => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/scripts/utilities/_init-data.ts":
/*!*********************************************!*\
  !*** ./src/scripts/utilities/_init-data.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_row_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_create-row-content */ "./src/scripts/utilities/_create-row-content.ts");


const initData = data => {
  // TODO: implement code to Render grid'
  const ele = document.getElementById('detail__content');

  if (ele) {
    data.forEach(element => {
      ele.appendChild(Object(_create_row_content__WEBPACK_IMPORTED_MODULE_0__["default"])(element));
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (initData);

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map