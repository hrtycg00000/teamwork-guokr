const appArticleHeadController = require('./app-article-header-controller')
const appArticleMainController = require('./app-article-main-controller')
const appArticleRecommendsController = require('./app-article-recommends')
const appArtocleCommentsController = require('./app-article-comments-controller')

const render = () => {
  // console.log(appArticleHeadController)
  /* 添加格式化日期的Helper */
  Handlebars.registerHelper('formatDate', function(date) {  
    return date.split('T')[0]
  })
  
  /* 添加更改https的block Helper */
  Handlebars.registerHelper('toHTTPS', function(options) {  
    /* 如果连接中包含https，输出原链接 */
    if (options.fn(this).indexOf('https') !== -1) {
      return options.fn(this)
    }
    /* 否则将http改为https */
    return options.fn(this).replace(/http/g,'https')
  })

  /* 添加为图片链接添加尾缀的Helper */
  Handlebars.registerHelper('addTail', function(url) {  
    if (url.indexOf('?imageView2/1/w/160/h/160') !== -1) {
      return
    }
    return '?imageView2/1/w/160/h/160'
  })
  
  appArticleHeadController.render()
  appArticleMainController.render()
  appArtocleCommentsController.render()
  /* 定义滚动事件监听函数，只有触发滚动事件才开始请求留言接口和推荐接口的数据 */
  document.addEventListener('scroll', scrollHandler)
  function scrollHandler (e) {
    if ($('#app-main').height() === 32) {
      return
    }
    appArticleRecommendsController.render()
    document.removeEventListener('scroll', scrollHandler)
  }
  
} 


module.exports = {render}