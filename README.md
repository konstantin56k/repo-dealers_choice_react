# repo-dealers_choice_react

1) NPM install:
npm i webpack webpack-cli react react-dom babel-loader @babel/core @babel/preset-react --save-dev && npm i express pg sequelize

2) packege.json scripts to add:
"build": "webpack",
"build:dev": "npm run build -- --watch --mode=development",
"start:dev": "npm run build:dev & nodemon server --ignore dist/ --ignore src/"

3) webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|pdf|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
