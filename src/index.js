/*
 * @Description: 
 * @Github: git@codeup.aliyun.com:5e9ad1c5e17c0e0001fd8d5b/WMS3RD/FE/Tolstoy.git
 * @Date: 2021-03-29 22:26:13
 * @LastEditTime: 2021-03-30 00:15:36
 */
import React from "react";
import ReactDOM from "react-dom";
import { Button, Input } from "../lib/binks";
import '../lib/binks.css'
ReactDOM.render(
  <div className="binks">
    <h1>Hello!</h1>
    <Button type="primary" onClick={() => alert("binks")}>
      binks
    </Button>
    <div>
      <Input onChange={() => console.log(1)} />
    </div>
  </div>,
  document.getElementById("root")
);
