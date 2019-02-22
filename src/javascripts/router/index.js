let routes = require(`./routes`);
const appMainController = require(`../controllers/app-main-controlle`);
const { Num } = require(`../models/app-model`);

class Router{
    constructor(initial){
        this.initial = initial;
        return Router.RouterInstance || this.creatRouter();
    }
    creatRouter(){
        Router.RouterInstance = new RouterInstance(this.initial);
        return Router.RouterInstance;
    }
}

class RouterInstance {
    constructor(initial){
        this.routes = routes;
        this.initial = initial;
    }
    init(){
        this.listenHashChenge();
    }
    chengHash(){
        let path = location.hash.replace("#", "");
        let handler = this.routes[path];
        if( handler ){
            handler();
        }else {
            location.hash = this.initial;
        } 
    }
    listenHashChenge(){
        new Num().init();
        this.chengHash();
        window.addEventListener(`hashchange`,e => {
            this.chengHash();
        })
    } 
    addRoutes(navList){
        navList.forEach(element => {
            routes[element.key] = () => appMainController.render(`/science_api/articles?limit=10&page=${new Num().init()}&category_id=${element.id}&retrieve_type=by_category`);
        });
    }
}

module.exports = Router;