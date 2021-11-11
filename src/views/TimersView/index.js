import { Component } from "react";

import Button from "../../components/generic/Button";
import Stopwatch from "../../components/timers/Stopwatch";
import Countdown from "../../components/timers/Countdown";
import XY from "../../components/timers/XY";
import Tabata from "../../components/timers/Tabata";
import "./TimersView.scss";

class TimersView extends Component {
  state = {
    timerSelected: "Stopwatch",
  };

  handleSelect = (timer) => {
    this.setState({ timerSelected: timer });
  };

  render() {
    const timers = [
      { title: "Stopwatch" },
      { title: "Countdown" },
      { title: "XY" },
      { title: "Tabata" },
    ];

    return (
      <div className="timers-view">
        <div className="timer-select">
          {timers.map((timer) => (
            <Button
              className={
                timer.title === this.state.timerSelected
                  ? "timer-selected-btn"
                  : "timer-select-btn"
              }
              key={timer.title}
              onClick={() => this.handleSelect(timer.title)}
              text={timer.title}
            />
          ))}
        </div>
        <div>
          {this.state.timerSelected === "Stopwatch" && <Stopwatch />}
          {this.state.timerSelected === "Countdown" && <Countdown />}
          {this.state.timerSelected === "XY" && <XY />}
          {this.state.timerSelected === "Tabata" && <Tabata />}
        </div>
      </div>
    );
  }
}

export default TimersView;
