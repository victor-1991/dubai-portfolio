/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/contacts.js":
/*!****************************!*\
  !*** ./src/js/contacts.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mobile-nav */ \"./src/js/modules/mobile-nav.js\");\n\r\n\r\n\r\n// PopUp \r\n(0,_modules_popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n// Mobile nav\r\n(0,_modules_mobile_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/js/contacts.js?");

/***/ }),

/***/ "./src/js/modules/mobile-nav.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobile-nav.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst mobileNav = () => {\r\n    function mobileMenuToggle() {\r\n        const hamburger = document.querySelector('.hamburger');\r\n        const hamburgerIcon = document.querySelector('.hamburger__icon');\r\n        const mobileMenuBody = document.querySelector('.mobile-menu');\r\n        const body = document.body;\r\n        hamburger.addEventListener('click', () => {\r\n            hamburgerIcon.classList.toggle('hamburger__icon--active');\r\n            mobileMenuBody.classList.toggle('open');\r\n            body.classList.toggle('disable-scroll');\r\n        })\r\n    }\r\n    mobileMenuToggle();\r\n\r\n    function subMenuToggle() { \r\n        const dropMenuItems = document.querySelectorAll('.mobile-nav__item-drop');\r\n\r\n        dropMenuItems.forEach(item => {\r\n            item.addEventListener('click', () => {\r\n                item.classList.toggle('active')\r\n                const subMenuBody = item.querySelector('.mobile-nav__drop-menu-wrapper');\r\n                if (subMenuBody.style.maxHeight) {\r\n                    subMenuBody.style.maxHeight = null;\r\n                  } else {\r\n                    subMenuBody.style.maxHeight = subMenuBody.scrollHeight + \"px\";\r\n                  }\r\n            })\r\n        })\r\n    }\r\n    subMenuToggle();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mobileNav);\n\n//# sourceURL=webpack:///./src/js/modules/mobile-nav.js?");

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction popupControls() {\r\n    const popupLinks = document.querySelectorAll('.popup-link');\r\n    const popupWindow = document.querySelector('.popup');\r\n    const popupCloseIcon = document.querySelectorAll('.popup__close');\r\n    const lockPadding = document.querySelectorAll('lock-padding');\r\n    const body = document.querySelector('body');\r\n\r\n    let unlock = true;\r\n    const timeout = 800;\r\n    \r\n\r\n    if (popupLinks.length > 0) {\r\n        popupLinks.forEach(item => {\r\n            item.addEventListener('click', function(e) {\r\n                popupOpen(popupWindow);\r\n                e.preventDefault();\r\n            })\r\n        })\r\n    }\r\n\r\n    function popupOpen(curentPopup) {\r\n        if (curentPopup && unlock) {\r\n            const popupActive = document.querySelector('.popup.active');\r\n            if (popupActive) {\r\n                popupClose(popupActive, false);\r\n            } else {\r\n                bodyLock();\r\n            }\r\n            curentPopup.classList.add('active');\r\n            curentPopup.addEventListener('click', function(e) {\r\n                if (!e.target.closest('.popup__content')) {\r\n                    popupClose(e.target.closest('.popup'));\r\n                }\r\n            })\r\n        }\r\n    }\r\n\r\n    if (popupCloseIcon.length > 0) {\r\n        popupCloseIcon.forEach(item => {\r\n            item.addEventListener('click', function(e) {\r\n                popupClose(this.closest('.popup'));\r\n                e.preventDefault();\r\n            })\r\n        })\r\n    }\r\n\r\n    function popupClose(curentPopup, doUnlock = true) {\r\n        if (unlock) {\r\n            curentPopup.classList.remove('active');\r\n            if (doUnlock) {\r\n                bodyUnlock();\r\n            }\r\n        }\r\n    }\r\n\r\n    function bodyLock() {\r\n        const pr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';\r\n        if (lockPadding.length > 0) {\r\n            lockPadding.forEach(item => {\r\n                item.style.paddingRight = pr;\r\n            });\r\n        }\r\n        body.style.paddingRight = pr;\r\n        body.classList.add('disable-scroll');\r\n        unlock = false;\r\n        setTimeout(function() {\r\n            unlock = true;\r\n        }, timeout);\r\n    }\r\n\r\n    function bodyUnlock() {\r\n        setTimeout(function() {\r\n            if (lockPadding.length > 0) {\r\n            lockPadding.forEach(item => {\r\n                item.style.paddingRight = '0px';\r\n            })\r\n            }\r\n            body.style.paddingRight = '0px';\r\n            body.classList.remove('disable-scroll');\r\n        }, 0);\r\n        unlock = false;\r\n        setTimeout(function() {\r\n            unlock = true;\r\n        }, timeout)\r\n    }\r\n    document.addEventListener('keydown', function(e) {\r\n        if (e.which === 27) {\r\n            const popupActive = document.querySelector('.popup.active');\r\n            popupClose(popupActive);\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (popupControls);\n\n//# sourceURL=webpack:///./src/js/modules/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/contacts.js");
/******/ 	
/******/ })()
;