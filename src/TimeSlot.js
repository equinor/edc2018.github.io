import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  z-index: -2;
  height: 140px;
`;

const Time = styled.h3`
  // position: absolute;
  // left: 0;
  // right: 0;
  // margin: auto;
  // color: white;
  // z-index: -1;
  // font-size: 7em;
  position: absolute;
  /* left: -32px; */
  /* right: 0; */
  margin: auto;
  padding-left: 100px;
  color: white;
  z-index: -1;
  font-size: 7em;
`;

const TimeSlotHeading = styled.h4`
  color: #ec384a;
`;

const Lectures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Lecture = styled.div`
  padding: 0px 20px;
`;

const LectureTitle = styled.p``;

const Lecturer = styled.p`
  font-size: 0.8em;
  font-style: oblique;
  color: gray;
  ::before {
    content: '– ';
  }
`;

const LeisureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Leisure = styled.p``;

const TimeSlot = ({ time, heading, lectures, leisure }) => (
  <Wrapper>
    <Time>{time}</Time>
    {heading && <TimeSlotHeading>{heading}</TimeSlotHeading>}
    {lectures && (
      <Lectures>
        {lectures.map(({ title, lecturer }) => (
          <Lecture>
            <LectureTitle>{title}</LectureTitle>
            {lecturer && <Lecturer>{lecturer}</Lecturer>}
          </Lecture>
        ))}
      </Lectures>
    )}
    {leisure && (
      <LeisureWrapper>
        <Leisure>{leisure}</Leisure>
      </LeisureWrapper>
    )}
  </Wrapper>
);

export default TimeSlot;
