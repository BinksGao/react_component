<!--
 * @Description: 组件说明文档
 * @Github: git@codeup.aliyun.com:5e9ad1c5e17c0e0001fd8d5b/WMS3RD/FE/Tolstoy.git
 * @Date: 2021-03-30 09:54:08
 * @LastEditTime: 2021-03-30 09:55:41
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