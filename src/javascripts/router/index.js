let routes = require(`./routes`);
class Router{
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
        this.chengHash();
        window.addEventListener(`hashchange`,e => {            
            this.chengHash();
        })
    } 
}

module.exports = Router;