const {getRepliesCount, getContext, getRecommends} = require('../../models/article/app-article-main-model')
const {allPress} = require('../app-main-controlle');
const render = async () => {
  /* 获取articleMain视图 */
  let appArticleMainView = require('../../views/article/article-main.html')

  /* 模板引擎解析视图 */
  let template = Handlebars.compile(appArticleMainView)

  /* 解析id */
  let id = location.href.split('?')[1].split('=')[1]

  /* 请求留言接口数据 */
  let repliesCountList = await getRepliesCount(id)

  /* 请求推荐文章接口数据 */
  let recommendsList = await getRecommends(id)
  console.log(recommendsList)
  
  /* 请求文章借口数据 */
  let articleInfo = JSON.parse(localStorage.pressDetail)
  let text = articleInfo.content
  let tagList = []
  console.log(articleInfo)

  text = text.replace(/src="http:/g,'src="https:')

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




  /* 模板引擎渲染 */
  $('#app #app-main').html(template({rclist: repliesCountList, article: articleInfo, recommends: recommendsList}))
  let oDiv = document.getElementsByClassName('context')
  $('.context').html(text)
  // $('#app #app-main').html(text)
}
  
  

module.exports = {render}