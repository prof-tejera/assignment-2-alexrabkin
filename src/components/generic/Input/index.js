import { Component } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

class Input extends Component {
  render() {
    return (
      <>
        <label>{this.props.label}</label>
        <input
          placeholder={this.props.placeholder}
          onChange={(e) => this.props.onChange(e.target.value)}
        />
      </>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default Input;
