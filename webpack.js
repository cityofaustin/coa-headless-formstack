const path = require("path");
const fs = require("fs");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.svg/,
        loaders: ["svg-url-loader"]
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, "src/index.html"),
      },
    ]),
  ],
};
