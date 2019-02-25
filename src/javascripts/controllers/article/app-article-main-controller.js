const render = async () => {
  /* 获取articleMain视图 */
  let appArticleMainView = require('../../views/article/article-main.html')

  /* 模板引擎解析视图 */
  let template = Handlebars.compile(appArticleMainView)
  
  /* 请求文章借口数据 */
  let articleInfo = JSON.parse(localStorage.pressDetail)
  let text = articleInfo.content.replace(/src="http:/g,'src="https:')

  /* 模板引擎渲染 */
  $('#app #app-main').html(template({article: articleInfo}))
  let oDiv = document.getElementsByClassName('context')
  $('.context').html(text)
  // $('#app #app-main').html(text)
}
  

module.exports = {render}