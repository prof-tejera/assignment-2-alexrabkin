import { Component } from "react";
import "./DisplayTime.scss";
import PropTypes from "prop-types";

/* 
  This component, at this stage, is the same for all timers.
  It starts ticking when it is mounted.
*/

class DisplayTime extends Component {
  state = {
    timeStart: 0,
    timeElapsed: "00:00:00",
  };

  componentDidMount() {
    this.handleStart();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  formatTime(date1, date2) {
    let difference = date1 - date2;

    let h = Math.floor(difference / 1000 / 60 / 60);
    difference -= h * 1000 * 60 * 60;

    let m = Math.floor(difference / 1000 / 60);
    difference -= m * 1000 * 60;

    let s = Math.floor(difference / 1000);

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    return `${h}:${m}:${s}`;
  }

  handleStart() {
    this.setState({ timeStart: Date.now() });

    this.timerID = setInterval(() => {
      this.setState({
        timeElapsed: this.formatTime(Date.now(), this.state.timeStart),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="circle">
        <div className="time">{this.state.timeElapsed}</div>
      </div>
    );
  }
}

DisplayTime.propTypes = {
  type: PropTypes.string,
};

export default DisplayTime;
