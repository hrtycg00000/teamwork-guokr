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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/api/index.js":
/*!**************************************!*\
  !*** ./src/javascripts/api/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const api = {\r\n    request ({\r\n        url, data, methods,success\r\n    }) {\r\n        return $.ajax({\r\n            url: `/guokr` + url,\r\n            data: data || {},\r\n            methods: methods || `get`, \r\n            success: (res) => {\r\n                return res;\r\n            },\r\n            error: (error) => console.log(`请求出错了${error}`),\r\n        })\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = api;\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-controlles.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/app-controlles.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appMainController = __webpack_require__(/*! ./app-main-controlle */ \"./src/javascripts/controllers/app-main-controlle.js\");\r\nconst appHeadController = __webpack_require__(/*! ./app-header-controlle */ \"./src/javascripts/controllers/app-header-controlle.js\");\r\nconst Router = __webpack_require__(/*! ../router */ \"./src/javascripts/router/index.js\")\r\n\r\nconst render = () => {\r\n    $(`#loading`).removeClass(`hide`);\r\n\r\n    appHeadController.render();\r\n    \r\n\r\n    $(`#loading`).addClass(`hide`);\r\n};\r\n\r\n\r\n\r\nmodule.exports = {render};\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-controlles.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-header-controlle.js":
/*!*************************************************************!*\
  !*** ./src/javascripts/controllers/app-header-controlle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { getHeaderNav, getTitleName } = __webpack_require__(/*! ../models/app-header-model */ \"./src/javascripts/models/app-header-model.js\");\r\n\r\nconst render = async () => {\r\n    let appHeaderView = __webpack_require__(/*! ../views/app-header.html */ \"./src/javascripts/views/app-header.html\");\r\n    let navList = getHeaderNav();\r\n    let titleName = getTitleName();\r\n    let template = Handlebars.compile(appHeaderView);\r\n    console.log(navList);\r\n    \r\n    $(`#app-header`).append(template({navList,titleName}));\r\n}\r\n\r\nmodule.exports = { render };\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-header-controlle.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-main-controlle.js":
/*!***********************************************************!*\
  !*** ./src/javascripts/controllers/app-main-controlle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { getFilmsList, getPressList } = __webpack_require__(/*! ../models/app-main-model */ \"./src/javascripts/models/app-main-model.js\");\r\nconst { getMetaContent } = __webpack_require__(/*! ../models/app-model */ \"./src/javascripts/models/app-model.js\");\r\nconst omain=$(`#app-main`);\r\n\r\nconst render = async () => {\r\n    $(`#loading`).removeClass(`hide`);\r\n\r\n    let appMainView = __webpack_require__(/*! ../views/app-main.html */ \"./src/javascripts/views/app-main.html\");\r\n    let flimList = await getFilmsList();\r\n    let pressList = getPressList();\r\n    console.log(flimList,pressList);\r\n    let template = Handlebars.compile(appMainView);\r\n    omain.html( template({ flims: flimList.movieList , pressList}) );\r\n    \r\n}\r\n\r\nmodule.exports = { render };\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-main-controlle.js?");

/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appControlles = __webpack_require__(/*! ./controllers/app-controlles */ \"./src/javascripts/controllers/app-controlles.js\");\r\nconst Router = __webpack_require__(/*! ./router */ \"./src/javascripts/router/index.js\");\r\n\r\nappControlles.render();\r\nnew Router(`index`).init();\n\n//# sourceURL=webpack:///./src/javascripts/index.js?");

/***/ }),

/***/ "./src/javascripts/models/app-header-model.js":
/*!****************************************************!*\
  !*** ./src/javascripts/models/app-header-model.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\");\r\nconst { getMetaContent } = __webpack_require__(/*! ./app-model */ \"./src/javascripts/models/app-model.js\");\r\n\r\nconst getHeaderNav = () => {\r\n    return getMetaContent().categories;\r\n}\r\n\r\nconst getTitleName = () => {\r\n    return getMetaContent().title.name;\r\n}\r\n\r\nmodule.exports = { getHeaderNav, getTitleName };\n\n//# sourceURL=webpack:///./src/javascripts/models/app-header-model.js?");

/***/ }),

/***/ "./src/javascripts/models/app-main-model.js":
/*!**************************************************!*\
  !*** ./src/javascripts/models/app-main-model.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\");\r\nconst { getMetaContent } = __webpack_require__(/*! ./app-model */ \"./src/javascripts/models/app-model.js\");\r\n\r\nlet filmsPage = 1;\r\nconst getFilmsList = () => {\r\n    return api.request({\r\n        url: `/science_api/articles?limit=10&page=${filmsPage++}`\r\n    })\r\n}\r\n\r\nconst getPressList = () => {\r\n    return getMetaContent().firstScreen;\r\n}\r\n\r\nmodule.exports = { getFilmsList, getPressList };\n\n//# sourceURL=webpack:///./src/javascripts/models/app-main-model.js?");

/***/ }),

/***/ "./src/javascripts/models/app-model.js":
/*!*********************************************!*\
  !*** ./src/javascripts/models/app-model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const getMetaContent = () => {\r\n    return JSON.parse($(`[name=guokrStringify]`).attr(`content`)) ;\r\n}\r\n\r\nmodule.exports = { getMetaContent };\n\n//# sourceURL=webpack:///./src/javascripts/models/app-model.js?");

/***/ }),

/***/ "./src/javascripts/router/index.js":
/*!*****************************************!*\
  !*** ./src/javascripts/router/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let routes = __webpack_require__(/*! ./routes */ \"./src/javascripts/router/routes.js\");\r\nclass Router{\r\n    constructor(initial){\r\n        this.routes = routes;\r\n        this.initial = initial;\r\n    }\r\n    init(){\r\n        this.listenHashChenge();\r\n    }\r\n    chengHash(){\r\n        let path = location.hash.replace(\"#\", \"\");\r\n        let handler = this.routes[path];\r\n        if( handler ){\r\n            handler();\r\n        }else {\r\n            location.hash = this.initial;\r\n        } \r\n    }\r\n    listenHashChenge(){\r\n        this.chengHash();\r\n        window.addEventListener(`hashchange`,e => {            \r\n            this.chengHash();\r\n        })\r\n    } \r\n}\r\n\r\nmodule.exports = Router;\n\n//# sourceURL=webpack:///./src/javascripts/router/index.js?");

/***/ }),

/***/ "./src/javascripts/router/routes.js":
/*!******************************************!*\
  !*** ./src/javascripts/router/routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appMainController = __webpack_require__(/*! ../controllers/app-main-controlle */ \"./src/javascripts/controllers/app-main-controlle.js\");\r\n\r\nlet routes = {\r\n    \"index\": () => {appMainController.render();}, //例子\r\n}\r\n\r\nmodule.exports = routes;\n\n//# sourceURL=webpack:///./src/javascripts/router/routes.js?");

/***/ }),

/***/ "./src/javascripts/views/app-header.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-header.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"header-icon\\\">    <div class=\\\"header-icon__side\\\">        <i class=\\\"iconfont icon-sidebar\\\"></i>    </div>    <a class=\\\"header-icon__logo\\\"  href=\\\"./#index\\\">        <img src=\\\"./static/images/header/logo.png\\\" alt=\\\"\\\">        <span>·</span>        <span>{{titleName}}</span>    </a>    <div class=\\\"header-icon__search\\\"\\\">        <i class=\\\"iconfont icon-sousuo\\\"></i>    </div></div><div class=\\\"header-nav\\\">    <nav class=\\\"header-nav__item\\\">        <a class=\\\"navLink active\\\">全部</a>        <a class=\\\"navLink\\\">推荐</a>        {{#each navList}}        <a class=\\\"navLink\\\">{{name}}</a>        {{/each}}    </nav>     <div class=\\\"header-nav__side hide\\\"></div></div>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-header.html?");

/***/ }),

/***/ "./src/javascripts/views/app-main.html":
/*!*********************************************!*\
  !*** ./src/javascripts/views/app-main.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"main-banner\\\"></div>{{#each pressList}}<a class=\\\"press bor-bot\\\">    <div class=\\\"press-flex\\\">        <div class=\\\"press-flex__info\\\">            <h3>{{title}}</h1>            <p>{{summary}}</p>        </div>        <img src={{small_image}}?imageView2/1/w/240/h/150/ alt=\\\"\\\">    </div>    <div class=\\\"press-tags\\\">        <span class=\\\"press-tags__item\\\">{{subject.name}}</span>    </div></a>{{/each}}\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-main.html?");

/***/ })

/******/ });