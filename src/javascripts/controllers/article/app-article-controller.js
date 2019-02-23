const appArticleHeadController = require('./app-article-header-controller')
const appArticleMainController = require('./app-article-main-controller')
const appArticleRecommendsController = require('./app-article-recommends')

const render = () => {
  // console.log(appArticleHeadController)
  appArticleHeadController.render()
  appArticleMainController.render()
  appArticleRecommendsController.render()
} 

module.exports = {render}