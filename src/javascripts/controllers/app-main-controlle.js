const { getFilmsList, getPressList, getBanner } = require(`../models/app-main-model`);
const { getMetaContent } = require(`../models/app-model`);
const omain=$(`#app-main`);
let flimList

const render = () => {
    changeNav();
    let appMainView = require(`../views/app-main.html`);
    let pressList = getPressList();
    console.log(pressList);
    let template = Handlebars.compile( appMainView );
    omain.html( template({ pressList, banner: getBanner() }) );
    
    
}

const nextRender = async (url) => {
    $(`#loading`).removeClass(`hide`);
    changeNav();
    let appMainView = require(`../views/app-main.html`);
    let flimList = await getFilmsList(url);
    let template = Handlebars.compile( appMainView );
    console.log(flimList);
    omain.html( template({ pressList: flimList}) );
    $(`#loading`).addClass(`hide`);
}

function changeNav(){
    let path = location.hash.replace("#", "");
    $(`.navLink`).removeClass("active");
    $(`#${path}`).addClass("active");
}

module.exports = { render, nextRender };