const {getRepliesCount, getContext} = require('../../models/article/app-article-main-model')
const {allPress} = require('../app-main-controlle');
const render = async () => {
  /* 获取articleMain视图 */
  let appArticleMainView = require('../../views/article/article-main.html')

  /* 模板引擎解析视图 */
  let template = Handlebars.compile(appArticleMainView)

  /* 解析id */
  let id = location.href.split('?')[1].split('=')[1]

  /* 请求文章借口数据 */
  let text = allPress

  /* 请求留言接口数据 */
  let repliesCountList = await getRepliesCount(id)
  console.log(repliesCountList)
  console.log(text)



  /* 模板引擎渲染 */
  $('#app #app-main').html(template({rclist: repliesCountList}))
}
  
  

module.exports = {render}