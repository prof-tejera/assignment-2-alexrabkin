import { Component } from "react";
import Input from "../Input";
import Button from "../Button";
import PropTypes from "prop-types";
import "./Form.scss";

class Form extends Component {
  handleSave = () => {
    this.props.onSave();
  };

  render() {
    return (
      <>
        <div className="form">
          <h2>{this.props.type} Settings</h2>

          {this.props.type === "Stopwatch" && (
            <Input
              label="Stop Time (s):"
              placeholder="60"
              onChange={(s) => console.log(s)}
            />
          )}

          {this.props.type === "Countdown" && (
            <Input
              label="Start Time (s):"
              placeholder="60"
              onChange={(s) => console.log(s)}
            />
          )}

          {this.props.type === "XY" && (
            <>
              <Input
                label="Time Per Round (s):"
                placeholder="30"
                onChange={(s) => console.log(s)}
              />
              <Input
                label="Rounds:"
                placeholder="3"
                onChange={(r) => console.log(r)}
              />
            </>
          )}

          {this.props.type === "Tabata" && (
            <>
              <Input
                label="Work Time (s):"
                placeholder="20"
                onChange={(s) => console.log(s)}
              />
              <Input
                label="Rest Time (s):"
                placeholder="10"
                onChange={(s) => console.log(s)}
              />
              <Input
                label="Rounds:"
                placeholder="3"
                onChange={(r) => console.log(r)}
              />
            </>
          )}

          <Button className="start-btn" text="Save" onClick={this.handleSave} />
        </div>
      </>
    );
  }
}

Form.propTypes = {
  type: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Form;
