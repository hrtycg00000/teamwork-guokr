const { getFilmsList, getPressList, getBanner } = require(`../models/app-main-model`);
const { Num } = require(`../models/app-model`);
const omain=$(`#app-main`);
let PressRenderBool = false;
let allPress = [];

/* const render = () => {
    changeNav();
    let appMainView = require(`../views/app-main.html`);
    let pressList = getPressList();
    console.log(pressList);
    let template = Handlebars.compile( appMainView );
    omain.html( template({ pressList, banner: getBanner() }) );
    init();//渲染完开始监听
    
} */

const render = async (url) => {
    $(`#loading`).removeClass(`hide`);
    changeNav();

    let appMainView = require(`../views/app-main.html`);
    let pressList = await getFilmsList(url);
    let template = Handlebars.compile( appMainView );
    console.log(pressList);
    omain.html( template({ pressList , }) );
    

    init();//渲染完开始监听
    allPress=allPress.concat(pressList);
    console.log(allPress);
    
    $(`#loading`).addClass(`hide`);
}

const addPressRender = async () => {
    if ( PressRenderBool ) return;
    PressRenderBool =true;
    $(`#finish-border`).removeClass(`hide`);

    let appMainView = require(`../views/app-press.html`);
    let url = getUrl();
    
    let pressList = await getFilmsList(url);
    if ( pressList.length < 10 ){
        removeLoadHandler();
    }

    let template = Handlebars.compile( appMainView );
    $(`#finish`).before( template({ pressList }) );

    allPress=allPress.concat(pressList);
    console.log(allPress);
    $(`#finish-border`).addClass(`hide`);
    PressRenderBool = false;
}

function getUrl(){
    let url;
    let atNav =$('.header-nav__item>.active');    
    if ( atNav.attr(`id`) === `index` || atNav.attr(`id`) === `tuijian`){
        url = `/science_api/articles?limit=10&page=${new Num().add()}`;
    }else {
        url = `/science_api/articles?limit=10&page=${new Num().add()}&category_id=${atNav.attr(`nav-id`)}&retrieve_type=by_category`;
    }
    return url;
}

function changeNav(){
    let path = location.hash.replace("#", "");
    $(`.navLink`).removeClass("active");
    $(`#${path}`).addClass("active");
    $('.header-icon__logo span').eq(1).html($('.header-nav__item .active').html());
} 


function init(){
    allPress=[];
    listenerScroll();
    console.log(allPress)
}

function listenerScroll(){
    let scrollBool = true;
    $('#app-main').on('scroll', e => {
        if ( scrollBool ){
            scrollBool = false;
            if ( $("#finish").offset().top < document.documentElement.clientHeight + 50 ){
                addPressRender();
            }
            setTimeout(() => {
                scrollBool = true;
                if ( $("#finish").offset().top < document.documentElement.clientHeight + 50 ){
                    addPressRender();
                }
            },100)
        }
    })
}

function removeLoadHandler(){
    $(`#finish`).html(`我是有底线的!`)
    $('#app-main').off('scroll');
}

module.exports = { render, allPress };