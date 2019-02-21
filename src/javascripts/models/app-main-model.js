const api = require(`../api`);
const { getMetaContent } = require(`./app-model`);

let filmsPage = 1;
const getFilmsList = () => {
    return api.request({
        url: `/science_api/articles?limit=10&page=${filmsPage++}`
    })
}

const getPressList = () => {
    return getMetaContent().firstScreen;
}

module.exports = { getFilmsList, getPressList };