const appMainController = require(`../controllers/app-main-controlle`);
const { Num } = require(`../models/app-model`);

let routes = {
    "index": () => {appMainController.render(`/science_api/articles?limit=10&page=${new Num().num}`);}, //例子
    "tuijian": () => {appMainController.nextRender(`/science_api/articles?limit=10&page=${new Num().num}`);}, //例子
}

module.exports = routes;