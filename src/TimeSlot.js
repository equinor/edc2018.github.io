import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  position: relative;
  height: 140px;
`;

const Time = styled.h3`
  position: absolute;
  margin: auto;
  padding: 10px 0px 0px 100px;
  color: rgb(12, 93, 103);
  font-size: 3em;
`;

const TimeSlotHeading = styled.h4`
  color: #ec384a;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${({ fullHeight }) =>
    fullHeight &&
    `
    height: 100%;
    align-items: center;
  `};
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

const Leisure = styled.p``;

const StyledLink = styled(Link)`
  text-decoration: None;
  color: black;
`;

const TimeSlot = ({ time, heading, lectures, leisure }) => (
  <Wrapper>
    <Time>{time}</Time>
    {heading && <TimeSlotHeading>{heading}</TimeSlotHeading>}
    <InnerWrapper fullHeight={!heading}>
      {lectures &&
        lectures.map(({ id, title, lecturer }) => (
          <Lecture key={id}>
            <StyledLink to={`/lecture/${id}/`}>
              <LectureTitle>{title}</LectureTitle>
            </StyledLink>
            {lecturer && <Lecturer>{lecturer}</Lecturer>}
          </Lecture>
        ))}
      {leisure && <Leisure>{leisure}</Leisure>}
    </InnerWrapper>
  </Wrapper>
);

export default TimeSlot;
