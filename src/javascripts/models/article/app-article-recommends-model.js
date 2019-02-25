const api = require('../../api')
/* 根据id获取推荐文章借口数据 */
const getRecommends = (_id) => {
  return api.request({
    url: '/science_api/article/' + _id + '/recommends'
  })
}
module.exports = {
  getRecommends
}