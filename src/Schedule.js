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
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ConferenceDay = styled.h2`
  margin: 0px;
  color: rgb(26, 108, 118);
  @media (max-width: 500px) {
    margin: 5px 0px;
  }
`;

const CalendarDate = styled(ConferenceDay)`
  @media (min-width: 501px) {
    ::before {
      content: ' – ';
    }
  }
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
                <ConferenceDay>{conferenceDay}</ConferenceDay>
                <CalendarDate>{calendarDate}</CalendarDate>
              </DayWrapper>
              {timeSlots.map(
                ({ time, heading, events, leisure, background }) => (
                  <TimeSlot
                    key={`${conferenceDay} ${time}`}
                    time={time}
                    heading={heading}
                    events={events}
                    leisure={leisure}
                    background={background}
                  />
                )
              )}
            </DaySchedule>
          ))}
        </div>
      </div>
    );
  }
}

export default Schedule;
