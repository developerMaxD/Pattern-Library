'use strict';

let path = require('path');
let webpack = require('webpack');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let NODE_ENV = process.env.NODE_ENV;
let env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

Object.assign(env, {
  build: (env.production || env.staging)
});

module.exports = {
  target: 'web',

  entry: [
    './src/app'
  ],

  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: './bundle.js'
  },

  resolve: {
    modules: [
      'web_modules',
      'node_modules',
      path.resolve(__dirname, "src")
    ],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  },

  devtool: 'source-map',
  
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './src',
    port: 9088
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:9088' }),
    new webpack.DefinePlugin({
        'process.env': {
            'API_HOST': JSON.stringify('http://localhost:9088'),
            'THUMB_PRE':JSON.stringify('http://photo.lifepics-qa.inet/common/images/retail/products/')
        }
    })
  ],

  module: {
    loaders: [
	  {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'autoprefixer-loader?browsers=last 2 versions', 'sass-loader?sourceMap&outputStyle=expanded']
      },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ],
    noParse: /\.min\.js/
  }
};