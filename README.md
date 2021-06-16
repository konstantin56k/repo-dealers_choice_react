# repo-dealers_choice_react

NPM install:
npm i webpack webpack-cli react react-dom babel-loader @babel/core @babel/preset-react --save-dev && npm i express pg sequelize

packege.json scripts to add:
"build": "webpack",
"build:dev": "npm run build -- --watch --mode=development",
"start:dev": "npm run build:dev & nodemon server --ignore dist/ --ignore src/"

webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
};
