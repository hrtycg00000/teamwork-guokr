const appMainController = require(`../controllers/app-main-controlle`);

let routes = {
    "index": () => {appMainController.render();}, //例子
}

module.exports = routes;