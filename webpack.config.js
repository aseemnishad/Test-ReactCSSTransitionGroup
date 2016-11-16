var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './main.js',
  output: { 
  	 filename: './bundle.js',
  },
  devServer: {
    inline:true,
    port: 8000
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader',
      },
      { test: /\.jpg$/,
        loader: 'file' 
      },
    ]
  },
};
