const appArticleHeadController = require('./app-article-header-controller')
const appArticleMainController = require('./app-article-main-controller')

const render = () => {
  // console.log(appArticleHeadController)
  appArticleHeadController.render()
  appArticleMainController.render()
} 

module.exports = {render}