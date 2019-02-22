const { getFilmsList, getPressList, getBanner } = require(`../models/app-main-model`);
const { Num } = require(`../models/app-model`);
const omain=$(`#app-main`);
let PressRenderBool = false;

const render = () => {
    changeNav();
    let appMainView = require(`../views/app-main.html`);
    let pressList = getPressList();
    console.log(pressList);
    let template = Handlebars.compile( appMainView );
    omain.html( template({ pressList, banner: getBanner() }) );
    init();//渲染完开始监听
    
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
    init();//渲染完开始监听
}

const addPressRender = async (url) => {
    if ( PressRenderBool ) return;
    PressRenderBool =false;

    let appMainView = require(`../views/app-press.html`);
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
    $('.header-icon__logo span').eq(1).html($('.header-nav__item .active').html());
} 


function init(){
    listenerScroll();
}

function listenerScroll(){
    let scrollBool = true;
    $('#app-main').on('scroll', e => {
        if ( scrollBool ){
            scrollBool = false;
            if ( $("#finish").offset().top < document.documentElement.clientHeight + 50 ){
                console.log(new Num());
                
            }
            setTimeout(() => {
                scrollBool = true;
                if ( $("#finish").offset().top < document.documentElement.clientHeight + 50 ){
                    console.log(new Num());
                }
            },30)
        }
    })
}


module.exports = { render, nextRender };