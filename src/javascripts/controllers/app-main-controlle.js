const { getFilmsList, getPressList } = require(`../models/app-main-model`);
const { getMetaContent } = require(`../models/app-model`);
const omain=$(`#app-main`);

const render = async () => {
    $(`#loading`).removeClass(`hide`);

    let appMainView = require(`../views/app-main.html`);
    let flimList = await getFilmsList();
    let pressList = getPressList();
    console.log(flimList,pressList);
    let template = Handlebars.compile(appMainView);
    omain.html( template({ flims: flimList.movieList , pressList}) );
    
}

module.exports = { render };