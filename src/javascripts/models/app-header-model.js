const api = require(`../api`);
const { getMetaContent } = require(`./app-model`);

const getHeaderNav = () => {
    return getMetaContent().categories;
}

const getTitleName = () => {
    return getMetaContent().title.name;
}

module.exports = { getHeaderNav, getTitleName };