const path = require(`path`)

const webpackConfig = {
    mode : `development`,//模式
    entry: {
        index : path.join(__dirname, `../src/javascripts/index.js`),
    },
    output: {
        filename : `[name].js`
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'string-loader'
            }
        ]
    }
}

module.exports = webpackConfig;