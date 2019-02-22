const api = require(`../api`);
const { getMetaContent } = require(`./app-model`);
let filmsPage = 1;

const getFilmsList = (_url) => {
    return api.request({
        url: _url
    })
}
const get = () => {
    return api.request({
        url: `/science_api/articles?limit=10&page=5&category_id=1&retrieve_type=by_category`
    })
}

const getPressList = () => {
    return getMetaContent().firstScreen;
}
const getBanner = () => {
    return getMetaContent().flowingBoard.flowingBanner;
}


module.exports = { getFilmsList, getPressList, getBanner };