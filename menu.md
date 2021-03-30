<!--
 * @Description: 项目目录结构
 * @Github: binks
 * @Date: 2021-03-30 10:07:45
 * @LastEditTime: 2021-03-30 10:13:51
-->
react_component          
├─ components              // 组件封装文件夹
│  ├─ _util                // 常用方法封装
│  │  └─ index.js        
│  ├─ button               // button组件
│  │  ├─ button.js       
│  │  └─ index.js        
│  ├─ input                // input组件
│  │  ├─ index.js        
│  │  └─ input.js        
│  ├─ style                // 样式文件夹
│  │  ├─ themes            // 组件样式
│  │  │  ├─ button.less  
│  │  │  └─ input.less   
│  │  ├─ variables         
│  │  │  └─ base.less    
│  │  ├─ app.less        
│  │  ├─ index.less      
│  │  └─ reset.less      
│  └─ index.js           
├─ config                   // webpack配置文件夹 
│  ├─ webpack.config.js  
│  ├─ webpack.dev.js     
│  └─ webpack.prod.js    
├─ dist                     // 运行打包之后文件目录
│  ├─ index.html         
│  └─ index.js           
├─ lib                      // 生成待发布版本文件目录
│  ├─ binks.css          
│  ├─ binks.js           
│  └─ index.html         
├─ public                   // 本地测试项目html入口        
│  └─ index.html       
├─ src                      // 本地测试项目主入口
│  ├─ index.js           
│  └─ index.less         
├─ README.md                // 开发文档及部署文档
├─ package-lock.json     
└─ package.json             // package.json 
