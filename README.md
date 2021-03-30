<!--
 * @Description: 组件说明文档
 * @Github: binks
 * @Date: 2021-03-30 09:54:08
 * @LastEditTime: 2021-03-30 11:23:46
-->
### 打包发布

```
npm run lib

npm login

npm publish
```
### 安装

```
npm install react_ui_binks
```

### 引入样式

```
import "react_ui_binks/lib/binks.css"
```

### 引用示例

```
import React, { Component } from 'react';
import { Button } from "react_ui_binks";

class App extends Component {
  render(){
    return (
      <div className="main">
        <Button> Hi, Boy! </Button>
      </div>
    );
  }
}

export default App;
```

### webpack配置项安装
- 安装webpack 用于编译 JavaScript 模块
  - npm install webpack webpack-cli --save-dev
- 安装 babel 相关的编译库，将javascript 代码转换成 浏览器兼容的代码
  - npm install babel-loader @babel/core --save-dev
- 给 webpack.config.js 配置 babel-loader 解析信息
  ```js
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
  ```
- 创建 .babelrc 文件
  - 使用转换 ES2015+ 的 env preset
    - npm install @babel/preset-env --save-dev
  - 安装 编译 jsx 语法的库
    - npm install --save-dev @babel/preset-react

  ```js
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
  }
  ```
- 安装 html-webpack-plugin 插件，生成 html 文件.配置到 webpack.config.js 文件
  - npm install  html-webpack-plugin  --save-dev
- 安装 react 相关的包
  - npm i react react-dom --save-dev
- 安装 webpack-dev-server 作为本地开发环境
  - npm  i webpack-dev-server -g
  ```json
  "scripts": {
    "build": "webpack --config ./config/webpack.prod.js",
    "lib": "webpack --config ./config/webpack.config.js",
    "start": "webpack-dev-server -d --config ./config/webpack.dev.js"
  }
  ```
- 安装清理文件夹的插件
  - npm install clean-webpack-plugin --save-dev
- 安装提取 css 到一个文件的库
  - npm install --save-dev extract-text-webpack-plugin
- 安装支持 sass / less 文件的库
  - npm install --save-dev style-loader css-loader less-loader less  sass-loader node-sass webpack

