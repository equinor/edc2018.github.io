import React from 'react';
import styled from 'styled-components';
import { lectures } from './data.js';
import Header from './Header';

const Wrapper = styled.div`
  margin: 20px;
  text-align: left;
`;

const Title = styled.h2``;

const Lecturer = styled.h3``;

const Description = styled.p`
  max-width: 900px;
  line-height: 1.4;
`;

const ConferenceDay = styled.p`
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
  margin-right: 10px;
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
`;

const When = styled.div`
  display: flex;
`;

const Lecture = ({ match, location }) => {
  const { id } = match.params;
  const {
    title,
    lecturer,
    description,
    conferenceDay,
    timeSlot,
    category,
  } = lectures.find(lecture => lecture.id === id);
  return (
    <div>
      <Header location={location} />
      <Wrapper>
        <What>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </What>
        <When>
          <ConferenceDay>{conferenceDay}</ConferenceDay>
          <Time>{timeSlot}</Time>
        </When>
        <Lecturer>{lecturer}</Lecturer>
        <Description>{description}</Description>
      </Wrapper>
    </div>
  );
};

export default Lecture;
