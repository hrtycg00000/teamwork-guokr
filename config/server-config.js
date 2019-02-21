const serverConfig = {
    livereload : {
        enable : true
    },
    directoryLisiting : false,
    open : false,
    port : 3000,
    proxies : [
        {
            source: `/guokr`,//暗号
            target: `https://m.guokr.com`,//目标
        },
    ]
}

module.exports = serverConfig;