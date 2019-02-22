const render = () => {
  let appArticleHeaderView = require('../../views/article/article-header.html')
  $('#app-header').append(appArticleHeaderView)
}

module.exports = {render}