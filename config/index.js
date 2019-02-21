
const path = require(`path`);
const serverConfig = require(`./server-config`);
const webpackConfig = require(`./webpack-config`)

//全局配置
const config = {
    path : {
        src : path.join(__dirname,`../src`),
        dist : path.join(__dirname,`../dist`),
        static : path.join(__dirname,`../src/static`)
    },
    serverConfig,webpackConfig
};

module.exports = config;