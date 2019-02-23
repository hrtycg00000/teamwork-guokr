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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/article.js");
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

/***/ "./src/javascripts/article.js":
/*!************************************!*\
  !*** ./src/javascripts/article.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appArticleControlles = __webpack_require__(/*! ./controllers/article/app-article-controller */ \"./src/javascripts/controllers/article/app-article-controller.js\")\r\n// console.log(appArticleControlles)\r\nappArticleControlles.render()\n\n//# sourceURL=webpack:///./src/javascripts/article.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-main-controlle.js":
/*!***********************************************************!*\
  !*** ./src/javascripts/controllers/app-main-controlle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { getFilmsList, getPressList, getBanner } = __webpack_require__(/*! ../models/app-main-model */ \"./src/javascripts/models/app-main-model.js\");\r\nconst { Num, Allpress } = __webpack_require__(/*! ../models/app-model */ \"./src/javascripts/models/app-model.js\");\r\nconst omain=$(`#app-main`);\r\nlet PressRenderBool = false;\r\nlet allPress = [];\r\n\r\n/* const render = () => {\r\n    changeNav();\r\n    let appMainView = require(`../views/app-main.html`);\r\n    let pressList = getPressList();\r\n    console.log(pressList);\r\n    let template = Handlebars.compile( appMainView );\r\n    omain.html( template({ pressList, banner: getBanner() }) );\r\n    init();//渲染完开始监听\r\n    \r\n} */\r\n\r\nconst render = async (url) => {\r\n    $(`#loading`).removeClass(`hide`);\r\n    changeNav();\r\n\r\n    let appMainView = __webpack_require__(/*! ../views/app-main.html */ \"./src/javascripts/views/app-main.html\");\r\n    let pressList = await getFilmsList(url);\r\n    let template = Handlebars.compile( appMainView );\r\n    console.log(pressList);\r\n    omain.html( template({ pressList , }) );\r\n    \r\n\r\n    init();//渲染完开始监听\r\n    new Allpress().addPress(pressList);\r\n    console.log(new Allpress().getPressList());\r\n    $(`#loading`).addClass(`hide`);\r\n}\r\n\r\nconst addPressRender = async () => {\r\n    if ( PressRenderBool ) return;\r\n    PressRenderBool =true;\r\n    $(`#finish-border`).removeClass(`hide`);\r\n\r\n    let appMainView = __webpack_require__(/*! ../views/app-press.html */ \"./src/javascripts/views/app-press.html\");\r\n    let url = getUrl();\r\n    \r\n    let pressList = await getFilmsList(url);\r\n    if ( pressList.length < 10 ){\r\n        removeLoadHandler();\r\n    }\r\n\r\n    let template = Handlebars.compile( appMainView );\r\n    $(`#finish`).before( template({ pressList }) );\r\n\r\n    new Allpress().addPress(pressList);\r\n    console.log(new Allpress().getPressList());\r\n    $(`#finish-border`).addClass(`hide`);\r\n    PressRenderBool = false;\r\n}\r\n\r\n//重置一些值并且添加事件\r\n//  切换页面或第一次渲染后(addPressRender)执行\r\nfunction init(){\r\n    //清空\r\n    new Allpress().resetPress();\r\n    //将滚轮位置设置为0,并委托点击事件\r\n    $('#app-main').scrollTop(0).on(`click`, `.press`, pressClickHandler);\r\n    //侦听滚轮位置\r\n    //  作用:滚轮位置到最下面时加载更多新闻\r\n    listenerScroll();\r\n}\r\n//新闻列表点击事件\r\n//  根据点击的id找到对应的信息并放入localStorage中\r\nfunction pressClickHandler(e){\r\n    let pressDetail =new Allpress().getPressDetail($(this).attr(`path-id`));\r\n    localStorage.pressDetail=JSON.stringify(pressDetail);\r\n    //JSON.parse(localStorage.pressDetail) 使用\r\n}\r\n\r\n//根据nav栏active类名来获取Url地址\r\nfunction getUrl(){\r\n    let url;\r\n    let atNav =$('.header-nav__item>.active');    \r\n    if ( atNav.attr(`id`) === `index` || atNav.attr(`id`) === `tuijian`){\r\n        url = `/science_api/articles?limit=10&page=${new Num().add()}`;\r\n    }else {\r\n        url = `/science_api/articles?limit=10&page=${new Num().add()}&category_id=${atNav.attr(`nav-id`)}&retrieve_type=by_category`;\r\n    }\r\n    return url;\r\n}\r\n\r\n//根据hash值改变nav栏按钮颜色\r\n//  切换页面或第一次渲染(addPressRender)后执行\r\nfunction changeNav(){\r\n    let path = location.hash.replace(\"#\", \"\");\r\n    $(`.navLink`).removeClass(\"active\");\r\n    $(`#${path}`).addClass(\"active\");\r\n    $('.header-icon__logo span').eq(1).html($('.header-nav__item .active').html());\r\n} \r\n\r\n//给#app-main侦听滚轮事件并减少触发频率\r\nfunction listenerScroll(){\r\n    let scrollBool = true;\r\n    $('#app-main').on('scroll', e => {\r\n        if ( scrollBool ){\r\n            scrollBool = false;\r\n            if ( $(\"#finish\").offset().top < document.documentElement.clientHeight + 50 ){\r\n                addPressRender();\r\n            }\r\n            setTimeout(() => {\r\n                scrollBool = true;\r\n                if ( $(\"#finish\").offset().top < document.documentElement.clientHeight + 50 ){\r\n                    addPressRender();\r\n                }\r\n            },100)\r\n        }\r\n    })\r\n}\r\n\r\n//\r\nfunction removeLoadHandler(){\r\n    $(`#finish`).html(`我是有底线的!`)\r\n    $('#app-main').off('scroll');\r\n}\r\n\r\nmodule.exports = { render };\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-main-controlle.js?");

/***/ }),

/***/ "./src/javascripts/controllers/article/app-article-controller.js":
/*!***********************************************************************!*\
  !*** ./src/javascripts/controllers/article/app-article-controller.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appArticleHeadController = __webpack_require__(/*! ./app-article-header-controller */ \"./src/javascripts/controllers/article/app-article-header-controller.js\")\r\nconst appArticleMainController = __webpack_require__(/*! ./app-article-main-controller */ \"./src/javascripts/controllers/article/app-article-main-controller.js\")\r\n\r\nconst render = () => {\r\n  // console.log(appArticleHeadController)\r\n  appArticleHeadController.render()\r\n  appArticleMainController.render()\r\n} \r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/article/app-article-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/article/app-article-header-controller.js":
/*!******************************************************************************!*\
  !*** ./src/javascripts/controllers/article/app-article-header-controller.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const render = () => {\r\n  let appArticleHeaderView = __webpack_require__(/*! ../../views/article/article-header.html */ \"./src/javascripts/views/article/article-header.html\")\r\n  $('#app-header').append(appArticleHeaderView)\r\n}\r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/article/app-article-header-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/article/app-article-main-controller.js":
/*!****************************************************************************!*\
  !*** ./src/javascripts/controllers/article/app-article-main-controller.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {getRepliesCount, getContext} = __webpack_require__(/*! ../../models/article/app-article-main-model */ \"./src/javascripts/models/article/app-article-main-model.js\")\r\nconst {allPress} = __webpack_require__(/*! ../app-main-controlle */ \"./src/javascripts/controllers/app-main-controlle.js\");\r\nconst render = async () => {\r\n  /* 获取articleMain视图 */\r\n  let appArticleMainView = __webpack_require__(/*! ../../views/article/article-main.html */ \"./src/javascripts/views/article/article-main.html\")\r\n\r\n  /* 模板引擎解析视图 */\r\n  let template = Handlebars.compile(appArticleMainView)\r\n\r\n  /* 解析id */\r\n  let id = location.href.split('?')[1].split('=')[1]\r\n\r\n  /* 请求文章借口数据 */\r\n  let text = allPress\r\n\r\n  /* 请求留言接口数据 */\r\n  let repliesCountList = await getRepliesCount(id)\r\n  console.log(repliesCountList)\r\n  console.log(text)\r\n\r\n\r\n\r\n  /* 模板引擎渲染 */\r\n  $('#app #app-main').html(template({rclist: repliesCountList}))\r\n}\r\n  \r\n  \r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/article/app-article-main-controller.js?");

/***/ }),

/***/ "./src/javascripts/models/app-main-model.js":
/*!**************************************************!*\
  !*** ./src/javascripts/models/app-main-model.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\");\r\nconst { getMetaContent } = __webpack_require__(/*! ./app-model */ \"./src/javascripts/models/app-model.js\");\r\nlet filmsPage = 1;\r\n\r\nconst getFilmsList = (_url) => {\r\n    return api.request({\r\n        url: _url\r\n    })\r\n}\r\nconst get = () => {\r\n    return api.request({\r\n        url: `/science_api/articles?limit=10&page=5&category_id=1&retrieve_type=by_category`\r\n    })\r\n}\r\n\r\nconst getPressList = () => {\r\n    return getMetaContent().firstScreen;\r\n}\r\nconst getBanner = () => {\r\n    return getMetaContent().flowingBoard.flowingBanner;\r\n}\r\n\r\n\r\nmodule.exports = { getFilmsList, getPressList, getBanner };\n\n//# sourceURL=webpack:///./src/javascripts/models/app-main-model.js?");

/***/ }),

/***/ "./src/javascripts/models/app-model.js":
/*!*********************************************!*\
  !*** ./src/javascripts/models/app-model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const getMetaContent = () => {\r\n    return JSON.parse($(`[name=guokrStringify]`).attr(`content`)) ;\r\n}\r\n\r\n\r\nclass Num{\r\n    constructor (){\r\n        return Num.instance || this.init();\r\n    }\r\n    init (){\r\n        if( !Num.instance ){\r\n            Num.instance = new NumInstance();\r\n        }\r\n    }\r\n}\r\n\r\nclass NumInstance{\r\n    constructor (){\r\n        if ( !this.num ) {\r\n            this.init();\r\n        }\r\n        return this.num;\r\n    }\r\n    init (){\r\n        return this.num = 1;\r\n    }\r\n    add (){\r\n        return ++this.num ;\r\n    }\r\n}\r\n\r\nclass Allpress{\r\n    constructor (){\r\n        return Allpress.instance || this.init();\r\n    }\r\n    init (){\r\n        if( !Allpress.instance ){\r\n            Allpress.instance = new AllpressInstance();\r\n        }\r\n        return Allpress.instance\r\n    }\r\n}\r\n\r\nclass AllpressInstance{\r\n    constructor (){\r\n        return this.press ;\r\n    }\r\n    resetPress (){\r\n        return this.press = [];\r\n    }\r\n    addPress (newPressList){\r\n        return this.press=this.press.concat(newPressList);\r\n    }\r\n    getPressList (){\r\n        return this.press;\r\n    }\r\n    getPressDetail(id){\r\n        return this.press.filter(t => {\r\n            return Number(t.id) === Number(id);\r\n        })[0];\r\n    }\r\n}\r\n\r\nmodule.exports = { getMetaContent, Num, Allpress };\n\n//# sourceURL=webpack:///./src/javascripts/models/app-model.js?");

/***/ }),

/***/ "./src/javascripts/models/article/app-article-main-model.js":
/*!******************************************************************!*\
  !*** ./src/javascripts/models/article/app-article-main-model.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../../api */ \"./src/javascripts/api/index.js\");\r\nconst getRepliesCount = (_id) => {\r\n  return api.request({\r\n    url: '/science_api/article/' + _id + '/replies?limit=5&page=1'\r\n  })\r\n}\r\n\r\nconst getContext = () => {\r\n  return api.request({\r\n    url: '/science_api/articles?limit=10&page=2'\r\n  })\r\n}\r\n\r\n\r\nmodule.exports = {\r\n  getRepliesCount,\r\n  getContext\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/models/article/app-article-main-model.js?");

/***/ }),

/***/ "./src/javascripts/views/app-main.html":
/*!*********************************************!*\
  !*** ./src/javascripts/views/app-main.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each pressList}}<a class=\\\"press bor-bot\\\" href=./article.html?id={{id}} path-id={{id}}>    <div class=\\\"press-flex\\\">        <div class=\\\"press-flex__info\\\">            <h3>{{title}}</h1>            <p>{{summary}}</p>        </div>        <img src={{small_image}}?imageView2/1/w/240/h/150/ alt=\\\"\\\">    </div>    <div class=\\\"press-tags\\\">        {{#if author.nickname}}        <span class=\\\"press-tags__name\\\">{{author.nickname}}</span>        {{/if}}        <span class=\\\"press-tags__item\\\">{{subject.name}}</span>        {{#if replies_count}}            <span class=\\\"press-tage__replies\\\"><span>{{replies_count}}</span>评论</span>        {{/if}}    </div></a>{{/each}}<div id=\\\"finish\\\">勤奋创作中...    <div id=\\\"finish-border\\\" class=\\\"hide\\\"></div></div>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-main.html?");

/***/ }),

/***/ "./src/javascripts/views/app-press.html":
/*!**********************************************!*\
  !*** ./src/javascripts/views/app-press.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each pressList}}<a class=\\\"press bor-bot\\\" href=./article.html?id={{id}} >    <div class=\\\"press-flex\\\">        <div class=\\\"press-flex__info\\\">            <h3>{{title}}</h1>            <p>{{summary}}</p>        </div>        <img src={{small_image}}?imageView2/1/w/240/h/150/ alt=\\\"\\\">    </div>    <div class=\\\"press-tags\\\">        {{#if author.nickname}}        <span class=\\\"press-tags__name\\\">{{author.nickname}}</span>        {{/if}}        <span class=\\\"press-tags__item\\\">{{subject.name}}</span>        {{#if replies_count}}            <span class=\\\"press-tage__replies\\\"><span>{{replies_count}}</span>评论</span>        {{/if}}    </div></a>{{/each}}\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-press.html?");

/***/ }),

/***/ "./src/javascripts/views/article/article-header.html":
/*!***********************************************************!*\
  !*** ./src/javascripts/views/article/article-header.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"header-icon\\\">    <div class=\\\"header-icon__side\\\">        <i class=\\\"iconfont icon-sidebar\\\"></i>    </div>    <a class=\\\"header-icon__logo\\\"  href=\\\"./#index\\\">    </a>    <div class=\\\"header-icon__search\\\"\\\">        <i class=\\\"iconfont icon-sousuo\\\"></i>    </div></div>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/article/article-header.html?");

/***/ }),

/***/ "./src/javascripts/views/article/article-main.html":
/*!*********************************************************!*\
  !*** ./src/javascripts/views/article/article-main.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#context}}<h1>{{title}}</h1><div class=\\\"flex-info\\\">  <div class=\\\"info-left\\\">{{author.nickname}}</div>  <div class=\\\"info-right\\\">{{date_created}}</div></div><p class=\\\"discription\\\">{{summary}}</p><div class=\\\"context\\\"></div><div class=\\\"flex tags\\\">  <div class=\\\"tags-title\\\">本文属于</div>  <div class=\\\"tags-list\\\">    {{#if channels}}    <a href=\\\"\\\" class=\\\"tag\\\">{{channels.name}}</a>    {{/if}}  </div></div>{{/context}}\"\n\n//# sourceURL=webpack:///./src/javascripts/views/article/article-main.html?");

/***/ })

/******/ });