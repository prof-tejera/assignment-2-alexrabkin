import React from "react";
import Button from "../../generic/Button";
import Form from "../../generic/Form";
import DisplayTime from "../../generic/DisplayTime";
import PropTypes from "prop-types";
import "./Timer.scss";

// Import React Transition Group
import { CSSTransition } from "react-transition-group";

// Import FontAwesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    // Used for CSSTransition
    this.nodeRef = React.createRef();
  }

  state = {
    // currently timer is ticking by default
    isTicking: true,
    showTimer: true,
    showForm: false,
  };

  // Will refactor using hooks in the next assignment
  showTimer = (showTimer) => {
    this.setState({ showTimer: showTimer });
  };

  showForm = (showForm) => {
    this.setState({ showForm: showForm });
  };

  render() {
    return (
      <div className="panel">
        {this.state.showTimer && (
          <>
            <Button
              className="settings-btn"
              text={
                <FontAwesomeIcon
                  className="settings-icon"
                  icon={faCog}
                  onClick={() => this.showForm(true)}
                />
              }
            />
            <div className="timer-container">
              <h1>{this.props.type}</h1>
              <DisplayTime />
              <div className="button-group">
                {!this.state.isTicking && (
                  <Button
                    className="start-btn"
                    onClick={() => console.log("Click Start")}
                    text="Start"
                  />
                )}
                {this.state.isTicking && (
                  <Button
                    className="start-btn"
                    onClick={() => console.log("Click Pause")}
                    text="Pause"
                  />
                )}
                <Button
                  className="round-btn"
                  onClick={() => console.log("Click Reset")}
                  text="Reset"
                />
              </div>
            </div>
          </>
        )}

        <CSSTransition
          in={this.state.showForm}
          nodeRef={this.nodeRef}
          timeout={300}
          classNames="form"
          unmountOnExit
          onEnter={() => this.showTimer(false)}
          onExited={() => this.showTimer(true)}
        >
          <div ref={this.nodeRef}>
            <Form type={this.props.type} onSave={() => this.showForm(false)} />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

Timer.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Timer;
