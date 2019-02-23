const api = require('../../api');
/* 根据id获取留言借口数据 */
const getRepliesCount = (_id) => {
  return api.request({
    url: '/science_api/article/' + _id + '/replies?limit=5&page=1'
  })
}

/* 根据id获取推荐文章借口数据 */
const getRecommends = (_id) => {
  return api.request({
    url: '/science_api/article/' + _id + '/recommends'
  })
}

const getContext = () => {
  return api.request({
    url: '/science_api/articles?limit=10&page=1'
  })
}


module.exports = {
  getRepliesCount,
  getContext,
  getRecommends
}