const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
 entry: './src/index.js',
 output: {
    publicPath: 'auto',
 },
 devtool: 'source-map',
 resolve: {
  extensions: ['.js','.jsx'],
 },
 module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']

    }
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: './public/index.html',
  }),
  new ModuleFederationPlugin({
   name: 'mfHeader',
   filename: 'remoteEntry.js',
   exposes: {
     './App': './src/App',
    './FooterButton': './src/FooterButton',
   },
   shared: {
    react: { singleton: true, eager: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
    'styled-components': { singleton: true, eager: true, requiredVersion: deps['styled-components'] }
   },
  }),
 ]
};
