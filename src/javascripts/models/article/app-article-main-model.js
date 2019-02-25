const api = require('../../api')
const getContext = () => {
  return api.request({
    url: '/science_api/articles?limit=10&page=1'
  })
}


module.exports = {
  getContext
}