const appMainController = require(`./app-main-controlle`);
const appHeadController = require(`./app-header-controlle`);
const Router = require(`../router`)

const render = () => {
    $(`#loading`).removeClass(`hide`);

    appHeadController.render();
    

    $(`#loading`).addClass(`hide`);
};



module.exports = {render};