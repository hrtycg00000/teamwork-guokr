const api = require('../../api');
const getRepliesCount = (_id) => {
  return api.request({
    url: '/science_api/article/' + _id + '/replies?limit=5&page=1'
  })
}

const getContext = () => {
  return api.request({
    url: '/science_api/articles?limit=10&page=2'
  })
}


module.exports = {
  getRepliesCount,
  getContext
}