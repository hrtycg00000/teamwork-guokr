const {getRecommends} = require('../../models/article/app-article-recommends-model')

let targetArticleList
const render = async () => {
  let appArticleRecommendsView = require('../../views/article/app-article-recommends.html')
  let template = Handlebars.compile(appArticleRecommendsView)
  let id = location.href.split('?')[1].split('=')[1]
  let recommendsList = await getRecommends(id)
  targetArticleList = recommendsList
  $('#app #recommends').html(template({recommends: recommendsList}))
  $('.recommend-herf').on('click', clickHandler)
}

function clickHandler (e) {
  let id = this.href.split('?')[1].split('=')[1]
  let targetArticle = getPressDetail(targetArticleList, id)
  localStorage.pressDetail=JSON.stringify(targetArticle);
}

function getPressDetail(list, id){
  return list.filter(t => {
    return Number(t.id) === Number(id);
  })[0];
}

module.exports = {render}