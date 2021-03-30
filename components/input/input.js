/*
 * @Description: 
 * @Github: git@codeup.aliyun.com:5e9ad1c5e17c0e0001fd8d5b/WMS3RD/FE/Tolstoy.git
 * @Date: 2021-03-29 22:26:13
 * @LastEditTime: 2021-03-30 00:10:29
 */
import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { PREFIX } from "../_util";

console.log("input");

class Input extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = () => {
    const { onChange } = this.props;
    if (onChange) {
      onChange();
    }
  };

  render() {
    const { type, disabled, onClick } = this.props;
    const cls = classNames(`${PREFIX}-input`, `${PREFIX}-input-${type}`);

    return <React.Fragment>
      <input className={cls} onChange={this.handleChange} disabled={disabled} />
    </React.Fragment>
  }
}

// 指定 props 的默认值：
Input.defaultProps = {
  type: "default",
};

Input.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Input;
