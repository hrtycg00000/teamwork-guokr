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

/***/ "./src/javascripts/controllers/article/app-article-comments-controller.js":
/*!********************************************************************************!*\
  !*** ./src/javascripts/controllers/article/app-article-comments-controller.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {getRepliesCount, Num} = __webpack_require__(/*! ../../models/article/app-article-comments-model */ \"./src/javascripts/models/article/app-article-comments-model.js\")\r\n/* 定义点击请求留言时间的开关 */\r\nlet prevRenderBool = false\r\n/* 定义记录留言条数标志 */\r\nlet commentNum = 0\r\n/* 定义总留言条数标志 */\r\nlet replies_count\r\n\r\n\r\nconst render = async () => {\r\n  let appArtocleRepliesCountView = __webpack_require__(/*! ../../views/article/article-comments.html */ \"./src/javascripts/views/article/article-comments.html\")\r\n  let template = Handlebars.compile(appArtocleRepliesCountView)\r\n  \r\n  /* 获取id */\r\n  let id = location.href.split('?')[1].split('=')[1]\r\n  \r\n  /* 请求留言借口数据 */\r\n  let commentList_first = await getRepliesCount('/science_api/article/' + id + '/replies?limit=5&page=1')\r\n\r\n  /* 记录当前请求到的留言数目 */\r\n  commentNum = commentList_first.length\r\n\r\n  /* 请求文章接口数据以获取留言条数 */\r\n  let articleInfo = JSON.parse(localStorage.pressDetail)\r\n  replies_count = articleInfo.replies_count\r\n\r\n  $('#app #comments-box').html(template({comments: commentList_first}))\r\n  $('.comments-title').html(replies_count + '条评论')\r\n\r\n  /* 为查看更多绑定点击事件，点击之后请求更多留言 */\r\n  $('.comments-more').click(clickHandler)\r\n}\r\n\r\n\r\nfunction clickHandler (e) {\r\n  prevRender()\r\n}\r\n\r\nconst prevRender = async () => {\r\n  if ( prevRenderBool ) return;//如果已经开始加载则跳出,防止重复执行\r\n  prevRenderBool =true;\r\n\r\n  /* 获取后续留言视图 */\r\n  let prevRepliesCountView = __webpack_require__(/*! ../../views/article/article-comments_prev.html */ \"./src/javascripts/views/article/article-comments_prev.html\");\r\n  let template = Handlebars.compile(prevRepliesCountView)\r\n  \r\n  /* 后续请求留言借口数据 */\r\n  let commentList_first = await getRepliesCount(getUrl())\r\n  commentNum += commentList_first.length\r\n  $('.finish').before(template({comments: commentList_first}))\r\n  if (commentNum === replies_count || commentNum % 5 !== 0) {\r\n    $('.comments-more').addClass('hide')\r\n    $('.comments-finish').removeClass('hide')\r\n    return\r\n  }\r\n  prevRenderBool = false;\r\n}\r\n\r\nfunction getUrl(){\r\n  if (! new Num().num) {\r\n    new Num().init()\r\n  }\r\n  let url;\r\n  let id = location.href.split('?')[1].split('=')[1]\r\n  url = '/science_api/article/' + id + '/replies?limit=5&page=' + new Num().add()\r\n  return url;\r\n}\r\n\r\n\r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/article/app-article-comments-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/article/app-article-controller.js":
/*!***********************************************************************!*\
  !*** ./src/javascripts/controllers/article/app-article-controller.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appArticleHeadController = __webpack_require__(/*! ./app-article-header-controller */ \"./src/javascripts/controllers/article/app-article-header-controller.js\")\r\nconst appArticleMainController = __webpack_require__(/*! ./app-article-main-controller */ \"./src/javascripts/controllers/article/app-article-main-controller.js\")\r\nconst appArticleRecommendsController = __webpack_require__(/*! ./app-article-recommends */ \"./src/javascripts/controllers/article/app-article-recommends.js\")\r\nconst appArtocleCommentsController = __webpack_require__(/*! ./app-article-comments-controller */ \"./src/javascripts/controllers/article/app-article-comments-controller.js\")\r\n\r\nconst render = () => {\r\n  // console.log(appArticleHeadController)\r\n  /* 添加格式化日期的Helper */\r\n  Handlebars.registerHelper('formatDate', function(date) {  \r\n    return date.split('T')[0]\r\n  })\r\n  \r\n  /* 添加更改https的block Helper */\r\n  Handlebars.registerHelper('toHTTPS', function(options) {  \r\n    /* 如果连接中包含https，输出原链接 */\r\n    if (options.fn(this).indexOf('https') !== -1) {\r\n      return options.fn(this)\r\n    }\r\n    /* 否则将http改为https */\r\n    return options.fn(this).replace(/http/g,'https')\r\n  })\r\n\r\n  /* 添加为图片链接添加尾缀的Helper */\r\n  Handlebars.registerHelper('addTail', function(url) {  \r\n    if (url.indexOf('?imageView2/1/w/160/h/160') !== -1) {\r\n      return\r\n    }\r\n    return '?imageView2/1/w/160/h/160'\r\n  })\r\n  \r\n  appArticleHeadController.render()\r\n  appArticleMainController.render()\r\n  appArtocleCommentsController.render()\r\n  /* 定义滚动事件监听函数，只有触发滚动事件才开始请求留言接口和推荐接口的数据 */\r\n  document.addEventListener('scroll', scrollHandler)\r\n  function scrollHandler (e) {\r\n    if ($('#app-main').height() === 32) {\r\n      return\r\n    }\r\n    appArticleRecommendsController.render()\r\n    document.removeEventListener('scroll', scrollHandler)\r\n  }\r\n  \r\n} \r\n\r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/article/app-article-controller.js?");

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

eval("const render = async () => {\r\n  /* 获取articleMain视图 */\r\n  let appArticleMainView = __webpack_require__(/*! ../../views/article/article-main.html */ \"./src/javascripts/views/article/article-main.html\")\r\n\r\n  /* 模板引擎解析视图 */\r\n  let template = Handlebars.compile(appArticleMainView)\r\n  \r\n  /* 请求文章借口数据 */\r\n  let articleInfo = JSON.parse(localStorage.pressDetail)\r\n  let text = articleInfo.content.replace(/src=\"http:/g,'src=\"https:')\r\n\r\n  /* 模板引擎渲染 */\r\n  $('#app #app-main').html(template({article: articleInfo}))\r\n  let oDiv = document.getElementsByClassName('context')\r\n  $('.context').html(text)\r\n  // $('#app #app-main').html(text)\r\n}\r\n  \r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/article/app-article-main-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/article/app-article-recommends.js":
/*!***********************************************************************!*\
  !*** ./src/javascripts/controllers/article/app-article-recommends.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {getRecommends} = __webpack_require__(/*! ../../models/article/app-article-recommends-model */ \"./src/javascripts/models/article/app-article-recommends-model.js\")\r\n\r\nlet targetArticleList\r\nconst render = async () => {\r\n  let appArticleRecommendsView = __webpack_require__(/*! ../../views/article/app-article-recommends.html */ \"./src/javascripts/views/article/app-article-recommends.html\")\r\n  let template = Handlebars.compile(appArticleRecommendsView)\r\n  let id = location.href.split('?')[1].split('=')[1]\r\n  let recommendsList = await getRecommends(id)\r\n  targetArticleList = recommendsList\r\n  $('#app #recommends').html(template({recommends: recommendsList}))\r\n  $('.recommend-herf').on('click', clickHandler)\r\n}\r\n\r\nfunction clickHandler (e) {\r\n  let id = this.href.split('?')[1].split('=')[1]\r\n  let targetArticle = getPressDetail(targetArticleList, id)\r\n  localStorage.pressDetail=JSON.stringify(targetArticle);\r\n}\r\n\r\nfunction getPressDetail(list, id){\r\n  return list.filter(t => {\r\n    return Number(t.id) === Number(id);\r\n  })[0];\r\n}\r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/article/app-article-recommends.js?");

/***/ }),

/***/ "./src/javascripts/models/article/app-article-comments-model.js":
/*!**********************************************************************!*\
  !*** ./src/javascripts/models/article/app-article-comments-model.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../../api */ \"./src/javascripts/api/index.js\")\r\n/* 根据id获取留言借口数据 */\r\nconst getRepliesCount = (_url) => {\r\n  return api.request({\r\n    /* url: '/science_api/article/' + _id + '/replies?limit=5&page=' + _page */\r\n    url: _url\r\n  })\r\n}\r\n\r\nclass Num{\r\n  constructor (){\r\n      return Num.instance || this.init();\r\n  }\r\n  init (){\r\n      if( !Num.instance ){\r\n        Num.instance = new NumInstance();\r\n      }\r\n  }\r\n}\r\n\r\nclass NumInstance{\r\n  constructor (){\r\n      if ( !this.num ) {\r\n          this.init();\r\n      }\r\n\r\n      return this.num;\r\n  }\r\n  init (){\r\n      return this.num = 1;\r\n  }\r\n  add (){\r\n      return ++this.num ;\r\n  }\r\n}\r\n\r\nmodule.exports = {\r\n  getRepliesCount,\r\n  Num\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/models/article/app-article-comments-model.js?");

/***/ }),

/***/ "./src/javascripts/models/article/app-article-recommends-model.js":
/*!************************************************************************!*\
  !*** ./src/javascripts/models/article/app-article-recommends-model.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../../api */ \"./src/javascripts/api/index.js\")\r\n/* 根据id获取推荐文章借口数据 */\r\nconst getRecommends = (_id) => {\r\n  return api.request({\r\n    url: '/science_api/article/' + _id + '/recommends'\r\n  })\r\n}\r\nmodule.exports = {\r\n  getRecommends\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/models/article/app-article-recommends-model.js?");

/***/ }),

/***/ "./src/javascripts/views/article/app-article-recommends.html":
/*!*******************************************************************!*\
  !*** ./src/javascripts/views/article/app-article-recommends.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!-- 推荐 start -->{{#recommends}}<a class=\\\"recommend-herf\\\" href=\\\"./article.html?id={{id}}\\\">  <div class=\\\"recommend\\\">    <img src=\\\"{{small_image}}\\\" alt=\\\"\\\">    <p>{{title}}</p>  </div></a>{{/recommends}}\"\n\n//# sourceURL=webpack:///./src/javascripts/views/article/app-article-recommends.html?");

/***/ }),

/***/ "./src/javascripts/views/article/article-comments.html":
/*!*************************************************************!*\
  !*** ./src/javascripts/views/article/article-comments.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<p class=\\\"tip comments-title\\\">{{article_id}}</p><ul class=\\\"comments\\\">  {{#comments}}  <li>    <p></p>    {{{content}}}    <div class=\\\"info\\\">      <div class=\\\"avatar\\\">        <img src=\\\"{{author.avatar.large}}\\\">      </div>      <span class=\\\"author-name\\\">{{author.nickname}}</span>      <span class=\\\"time\\\">{{formatDate date_created}}</span>    </div>  </li>  {{/comments}}</ul><div class=\\\"finish\\\">  <p class=\\\"tip comments-more\\\">查看更多</p>  <p class=\\\"tip comments-finish hide\\\">我是有底线的</p></div>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/article/article-comments.html?");

/***/ }),

/***/ "./src/javascripts/views/article/article-comments_prev.html":
/*!******************************************************************!*\
  !*** ./src/javascripts/views/article/article-comments_prev.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<ul class=\\\"comments\\\">  {{#comments}}  <li>    <p></p>    {{{content}}}    <div class=\\\"info\\\">      <div class=\\\"avatar\\\">        <img src=\\\"{{author.avatar.large}}\\\">      </div>      <span class=\\\"author-name\\\">{{author.nickname}}</span>      <span class=\\\"time\\\">{{formatDate date_created}}</span>    </div>  </li>  {{/comments}}</ul>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/article/article-comments_prev.html?");

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

eval("module.exports = \"{{#article}}<h1>{{title}}</h1><div class=\\\"flex info\\\">  <div class=\\\"info-left\\\">{{author.nickname}}</div>  <div class=\\\"info-right\\\">{{formatDate date_created}}</div></div><p class=\\\"discription\\\">{{summary}}</p><div class=\\\"context\\\"></div><div class=\\\"flex tags\\\">  <div class=\\\"tags-title\\\">本文属于：</div>  <div class=\\\"tags-list\\\">    {{#with channels}}      {{#each this}}    <a href=\\\"\\\" class=\\\"tag\\\">{{name}}</a>      {{/each}}    {{/with}}    {{#if subject.name}}    <a href=\\\"\\\" class=\\\"tag\\\">{{subject.name}}</a>    {{/if}}  </div></div><div class=\\\"flex author\\\">  <div class=\\\"author-left\\\">    <p class=\\\"author-name\\\">{{author.nickname}}</p>    <p class=\\\"author-intro\\\">{{author.introduction}}</p>  </div>  <div class=\\\"author-right\\\">    <div class=\\\"avatar\\\">      <img src=\\\"{{#toHTTPS}}{{author.avatar.large}}{{/toHTTPS}}{{addTail author.avatar.large}}\\\" alt=\\\"\\\">    </div>  </div></div>{{/article}}\"\n\n//# sourceURL=webpack:///./src/javascripts/views/article/article-main.html?");

/***/ })

/******/ });