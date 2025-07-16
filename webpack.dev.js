const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = merge(commonConfig, {
 mode: 'development',
 devServer: {
    // static: path.join(__dirname, '../dist'),   
    port: 3001,
    hot: true,
    historyApiFallback: true,
 }
});