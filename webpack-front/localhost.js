var helpers = require('./helpers');
var PATHS = {
    app: './src',
    build: './public/build'
};

module.exports = {
    entry: {
        main: PATHS.app + '/app/index.module.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /\.scss$/,
                // loader: 'style-loader!css-loader!sass-loader!resolve-url-loader!sass-loader?sourceMap'
                // loader: 'style!css?sourceMap!sass?sourceMap&sourceComments'
                loader: 'style!css?sourceMap!sass?sourceComments'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        proxy: [{
            context: ['/posts', '/css/app.css'],
            target: 'http://localhost:9292',
            changeOrigin: true,
            secure: false
        }],
        contentBase: PATHS.app + '/',
        inline: true,
        port: 9000,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: helpers.root('node_modules')
        },
        historyApiFallback: true,
        hot: true,
        compress: true,
        stats: {
            colors: true
        }
    }
};
