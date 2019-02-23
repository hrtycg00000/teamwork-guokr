const appMainController = require(`../controllers/app-main-controlle`);
const { Num } = require(`../models/app-model`);

let routes = {
    "index": () => {
        appMainController.bannerRender();
        appMainController.render(`/science_api/articles?limit=10&page=${new Num().init()}`);
    },
    "tuijian": () => {appMainController.render(`/science_api/articles?limit=10&page=${new Num().init()}`);},
}

module.exports = routes;