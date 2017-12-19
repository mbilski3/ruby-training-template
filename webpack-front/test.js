var webpack = require('webpack');
module.exports = {
    devtool: 'inline-source-map',
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /\.spec\.js$/
            ],
            loader: 'isparta-loader'
        }],
        loaders: [{
                include: /\.json$/,
                loaders: ["json-loader"]
            },
            {
                test: /\.scss$/,
                loader: 'null-loader'
            }, {
                test: /\.css$/,
                loader: 'null-loader'
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'null-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'null-loader'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'null-loader'
            },
            {
                test: /\.html$/,
                // loader: 'null-loader'
                loader: 'raw-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['babel-preset-es2015']
                },
                options: {
                    sourceMap: 'inline',
                    plugins: ['istanbul']
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
};
