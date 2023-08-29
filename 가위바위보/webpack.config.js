const path = require('path');
const refreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
  name: 'word-relay setting',
  mode: "development",
  devtool: 'eval', 
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client'],
  },
  // 입력

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['react-refresh/babel'],
      },
    }],
  },

  plugins: [
    new refreshWebpackPlugin()
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },
  // 출력

  devServer: {
    devMiddleware: { publicPath: '/dist'}, // 후에 webpack이 설정해주는 파일 
    static: { directory: path.resolve(__dirname)}, //실제 존재하는 파일 
    hot: true,
  }
};