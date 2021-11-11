import { Component } from "react";
import PropTypes from "prop-types";
import "./Button.scss";

class Button extends Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
