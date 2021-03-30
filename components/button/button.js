/*
 * @Description: 
 * @Github: git@codeup.aliyun.com:5e9ad1c5e17c0e0001fd8d5b/WMS3RD/FE/Tolstoy.git
 * @Date: 2021-03-29 22:26:13
 * @LastEditTime: 2021-03-30 00:07:02
 */
import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { PREFIX } from "../_util";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  };

  render() {
    const { children, type, disabled, onClick } = this.props;
    const cls = classNames(`${PREFIX}-btn`, `${PREFIX}-btn-${type}`);

    return (
      <React.Fragment>
        <button className={cls} onClick={this.handleClick} disabled={disabled}>
          {children}
        </button>
      </React.Fragment>
    );
  }
}

// 指定 props 的默认值：
Button.defaultProps = {
  type: "default",
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
