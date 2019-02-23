const {getRecommends} = require('../../models/article/app-article-recommends-model')
const render = async () => {
  let appArticleRecommendsView = require('../../views/article/app-article-recommends.html')
  let template = Handlebars.compile(appArticleRecommendsView)
  let id = location.href.split('?')[1].split('=')[1]
  let recommendsList = await getRecommends(id)
  console.log(recommendsList)
  $('#app #recommends').html(template({recommends: recommendsList}))
}

module.exports = {render}