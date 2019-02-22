const appControlles = require(`./controllers/app-controlles`);
const Router = require(`./router`);

appControlles.render();
new Router(`index`).init();