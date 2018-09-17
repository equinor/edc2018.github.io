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

const DayWrapper = styled.div`
  margin: 30px 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DayHeader = styled.h2`
  //   margin: 30px 10px;
  color: rgb(26, 108, 118);
`;

const CONF_DAY = styled.h2`
  margin: 0px;
  color: rgb(26, 108, 118);
`;

const CAL_DATE = styled.h2`
  margin: 0px;
  color: rgb(26, 108, 118);
`;

class Schedule extends Component {
  render() {
    return (
      <div>
        <Header location={this.props.location} />
        <div>
          {schedule.map(({ conferenceDay, calendarDate, timeSlots }) => (
            <DaySchedule key={conferenceDay}>
              <DayWrapper>
                <CONF_DAY>{conferenceDay}</CONF_DAY>
                <CAL_DATE>{` – ${calendarDate}`}</CAL_DATE>
              </DayWrapper>
              {timeSlots.map(({ time, heading, events, leisure }) => (
                <TimeSlot
                  key={`${conferenceDay} ${time}`}
                  time={time}
                  heading={heading}
                  events={events}
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
