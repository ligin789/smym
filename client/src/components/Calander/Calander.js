import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from './event';

const localizer = momentLocalizer(moment);

class Calander extends Component {
  state = {
    events: [
      {
        start: new Date(2021, 0, 0),
        end:new Date(2021, 0, 2),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default Calander;
