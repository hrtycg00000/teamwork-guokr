const { getHeaderNav, getTitleName } = require(`../models/app-header-model`);
const routes = require(`../router/index`);

const render = async () => {
    let appHeaderView = require(`../views/app-header.html`);
    let navList = getHeaderNav();
    let titleName = getTitleName();
    let template = Handlebars.compile(appHeaderView);
    console.log(navList);
    new routes().addRoutes(navList);
    $(`#app-header`).append(template({navList,titleName}));
}

module.exports = { render };