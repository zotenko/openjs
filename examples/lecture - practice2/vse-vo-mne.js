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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(3);


window.auth = __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* default */];

const one = new __WEBPACK_IMPORTED_MODULE_0__component_js__["a" /* default */](target, '<h1>Component One</h1>');
const two = new __WEBPACK_IMPORTED_MODULE_0__component_js__["a" /* default */](target, '<h1>Component Two</h1>');

document
    .querySelectorAll('a')
    .forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            console.log([e.target]);
            switch(e.target.dataset.ref) {
                case 'one':
                    one.render();
                break;
                case 'two':
                    two.render();
                break;
            }
        });
    })
    

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(3);


class Component {
    constructor(target, content) {
        this.target = target;
        this.content = content;
        this._session = __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */].getInstance();
        this._session.subscribe(this.render.bind(this));
    }

    render(content = this.content) {
        if (this._session.getUser()) {
            this.target.innerHTML = content;
            return;
        }
        this.target.innerHTML = '<h1>Not Authorized</h1>';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((() => {
    let _instance = null;

    class Auth {
        constructor() {
            this._listeners = [];
            this._user = null;
        }

        subscribe(cb) {
            this._listeners.push(cb);
        }

        _notify() {
            this._listeners.forEach(cb => cb());
        }

        login(user) {
            this._user = user;
            this._notify();
        }

        getUser() {
            return this._user;
        }

        clear() {
            this._user = null;
            this._notify();
        }
    }

    return {
        getInstance() {
            if (!_instance) {
                _instance = new Auth();
            }

            return _instance;
        }
    }
})());

/***/ })
/******/ ]);