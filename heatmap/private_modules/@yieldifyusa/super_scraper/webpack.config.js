var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        //'lib/super_scraper': './src/main.js',
        'test/test-scrape': './test/test-scrape.js'
    },
    output: {
        path: './',
        filename: '[name].built.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'test')
                ],
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
}