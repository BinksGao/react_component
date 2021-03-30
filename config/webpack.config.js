/*
 * @Description: webpack基础配置
 * @Github: git@codeup.aliyun.com:5e9ad1c5e17c0e0001fd8d5b/WMS3RD/FE/Tolstoy.git
 * @Date: 2021-03-29 22:26:13
 * @LastEditTime: 2021-03-30 11:07:34
 */
// 用于编译 Webpack 项目中的 html 类型的文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清除 打包之后 dist 目录下的其他多余或者无用的代码
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 将打包后的js和css抽离出
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  // 用于连接路径, 使用当前系统的路径分隔符
  entry: path.join(__dirname, "../components/index.js"),
  output: {
    filename: "binks.js",
    // 参数解析为绝对路径
    path: path.resolve(__dirname, "../lib"),
    // 作为变量声明导出
    library: "binks",
    // 将library 能够在所有的模块定义下都可运行的方式
    libraryTarget: "umd",
  },
  module: {
    rules: [
      // less-loader: 用于加载.less文件，将less转化为css
      // css-loader: 用于加载.css文件，将css转化为commonjs
      // style-loader: 将样式通过<style>标签插入到header中
      // use数组中下面的部分会先执行，所以他们的执行顺序其实是less-loader > css-loader > style-loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          // 编译后用什么loader来提取css文件
          fallback: "style-loader",
          // 需要什么样的loader去编译文件
          use: ["css-loader", "less-loader"],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 文件大小小于limit参数
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|otf|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        // 遇到js或者jsx文件就先用babel-loader处理，exclude表示排除 node_modules 文件夹中的文件
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    // 热加载时直接返回更新文件名, 用于开发环境
    new webpack.NamedModulesPlugin(),
    // 启用热替换模块, 方便调试css, 页面不会刷新
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("binks.css"),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "lib发布",
      template: path.join(__dirname, "../public/index.html"),
    }),
  ],
};
