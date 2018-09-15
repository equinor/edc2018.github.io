import React, { Component } from 'react';
import styled from 'styled-components';
import TimeSlot from './TimeSlot';
import Header from './Header';
import { schedule } from './data.js';

const DaySchedule = styled.div`
  display: flex;
  flex-direction: column;
  section:nth-child(even) {
    background: rgb(239, 239, 239);
  }
  section:nth-child(odd) {
    background: rgb(195, 230, 243);
  }
`;

const DayHeader = styled.h2`
  padding: 30px 0px;
  margin: 0px;
  color: rgb(26, 108, 118);
`;

class Schedule extends Component {
  render() {
    return (
      <div>
        <Header location={this.props.location} />
        <div>
          {schedule.map(({ conferenceDay, timeSlots }) => (
            <DaySchedule key={conferenceDay}>
              <DayHeader>{conferenceDay}</DayHeader>
              {timeSlots.map(({ time, heading, lectures, leisure }) => (
                <TimeSlot
                  key={`${conferenceDay} ${time}`}
                  time={time}
                  heading={heading}
                  lectures={lectures}
                  leisure={leisure}
                />
              ))}
            </DaySchedule>
          ))}
        </div>
      </div>
    );
  }
}

export default Schedule;
