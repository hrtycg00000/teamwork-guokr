const { getFilmsList, getPressList, getBanner } = require(`../models/app-main-model`);
const { Num, Allpress } = require(`../models/app-model`);
const Swiper = require(`swiper`).default;
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

//渲染新闻
const render = async (url) => {
    $(`#loading`).removeClass(`hide`);
    changeNav();
    let bannerList = getBanner();

    let appMainView = require(`../views/app-main.html`);
    if($(`.header-nav__item .active`).attr(`id`) === `index`){//如果是index页就将banner模块插入
        let appMainBannerView = require(`../views/app-main__banner.html`);
        appMainView = appMainBannerView + appMainView;
    }
    console.log(bannerList);
    
    let template = Handlebars.compile( appMainView, bannerList );
    let pressList = await getFilmsList(url);
    omain.html( template({ pressList , bannerList}) );
    
    

    init();//渲染完开始监听
    new Allpress().addPress(pressList);
    // console.log(new Allpress().getPressList());
    $(`#loading`).addClass(`hide`);
}

//渲染更多新闻
const addPressRender = async () => {
    if ( PressRenderBool ) return;//如果已经开始加载则跳出,防止重复执行
    PressRenderBool =true;
    $(`#finish-border`).removeClass(`hide`);//显示加载动画
    
    let url = getUrl();
    let pressList = await getFilmsList(url);
    let appMainView = require(`../views/app-press.html`);
    let template = Handlebars.compile( appMainView );
    
    if ( pressList.length < 10 ){//如果加载来的新闻小于10说明没有更多新闻
        removeLoadHandler();
    }
    $(`#finish`).before( template({ pressList }) );//将内容插入到#finish前面
    new Allpress().addPress(pressList);//将新闻列表加入到Allpress类中
    // console.log(new Allpress().getPressList());
    $(`#finish-border`).addClass(`hide`);//关闭加载动画
    PressRenderBool = false;
}

const bannerRender = () => {
    let appMainBannerView = require(`../views/app-main__banner.html`);

}


//重置一些值并且添加事件
//  切换页面或第一次渲染后(addPressRender)执行
function init(){
    //清空
    new Allpress().resetPress();
    //将滚轮位置设置为0,并委托点击事件
    $('#app-main').scrollTop(0).on(`click`, `.press`, pressClickHandler);
    //侦听滚轮位置
    //  作用:滚轮位置到最下面时加载更多新闻
    listenerScroll();

    //如果有轮播图则初始化
    if( $(`.main-banner`)[0] ){
        var mySwiper = new Swiper ('.main-banner', {
            loop: true, // 循环模式选项
            // 如果需要分页器 
            pagination: {
              el: '.swiper-pagination',
              on: {
                resize: function(){
                  this.params.width = window.innerWidth;
                  this.update();
                },
             } ,
            }
        })   
    }
}

//新闻列表点击事件
//  根据点击的id找到对应的信息并放入localStorage中
function pressClickHandler(e){

    let pressDetail =new Allpress().getPressDetail($(this).attr(`path-id`));
    localStorage.pressDetail=JSON.stringify(pressDetail);
    // console.log(JSON.parse(localStorage.pressDetail));
    
}

//根据nav栏active类名来获取Url地址
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

//根据hash值改变nav栏按钮颜色
//  切换页面或第一次渲染(addPressRender)后执行
function changeNav(){
    let path = location.hash.replace("#", "");
    $(`.navLink`).removeClass("active");
    $(`#${path}`).addClass("active");
    $('.header-icon__logo span').eq(1).html($('.header-nav__item .active').html());
} 

//给#app-main侦听滚轮事件并减少触发频率
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

//更改底部html并且取消侦听scroll事件
function removeLoadHandler(){
    $(`#finish`).html(`我是有底线的!`)
    $('#app-main').off('scroll');
}

module.exports = { render };