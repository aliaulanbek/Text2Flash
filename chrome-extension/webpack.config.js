const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    popup: './src/index.js',
    background : './public/background.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
        { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use:[ {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
            }
        }] ,
        },{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template : "./src/index.html",
        filename : "index.html"
    }),
    new CopyPlugin({
        patterns: [
        { from: "public", },
        ],
    })
    ],
};