import React from 'react';
import styled from 'styled-components';
import { events } from './data.js';
import Header from './Header.js';

const Wrapper = styled.div`
  margin: 0px 20px;
  text-align: left;
`;

const Title = styled.h2``;

const Speaker = styled.h3``;

const Description = styled.p`
  max-width: 900px;
  line-height: 1.4;
`;

const Day = styled.p`
  margin: 0px;
`;

const Time = styled.p`
  margin: 0px 0px 0px 2px;
  ::before {
    content: '@ [';
  }
  ::after {
    content: ']';
  }
`;

const Category = styled.h2`
  color: #ec384a;
  margin: 0px 10px 0px 0px;
  ::before {
    content: '<';
  }
  ::after {
    content: '>';
  }
`;

const What = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const When = styled.div`
  display: flex;
`;

const Event = ({ match, location }) => {
  const { id } = match.params;
  const { title, speaker, description, timeSlots, category } = events.find(
    e => e.id === id
  );
  return (
    <div>
      <Header location={location} />
      <Wrapper>
        <What>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </What>
        {timeSlots.map(({ time, day }) => (
          <When key={`${day}@${time}`}>
            <Day>{day}</Day>
            <Time>{time}</Time>
          </When>
        ))}
        <Speaker>{speaker}</Speaker>
        <Description>{description}</Description>
      </Wrapper>
    </div>
  );
};

export default Event;
