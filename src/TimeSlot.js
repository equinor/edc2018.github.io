import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  position: relative;
  ${({ background }) =>
    background &&
    `
    background: ${`${background} !important`};
  `};
`;

const Time = styled.h3`
  position: absolute;
  margin: auto;
  padding: 10px 0px 0px 20px;
  color: rgb(12, 93, 103);
  font-size: 1.5em;
  font-family: monospace;
  @media (max-width: 500px) {
    padding: 10px 0px 0px 10px;
    font-size: 1em;
  }
`;

const TimeSlotHeading = styled.h3`
  color: #ec384a;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 100px;
  ${({ fullHeight }) =>
    fullHeight &&
    `
    height: 100%;
    align-items: center;
  `};
`;

const EventWrapper = styled.div`
  padding: 0px 20px;
`;

const EventTitle = styled.p`
  line-height: 1;
  font-weight: bold;
  margin: 0px;
  ${({ underline }) =>
    underline &&
    `
    text-decoration: underline;
  `} ${({ color }) =>
  color &&
  `
    color: ${color};
  `} ${({ heavyUnderline, color }) =>
  heavyUnderline &&
  `
    border-bottom: 5px solid ${color};
    display: inline-block;
  `};
`;

const Speaker = styled.p`
  font-size: 0.8em;
  font-style: oblique;
  color: gray;
  ::before {
    content: '– ';
  }
`;

const StyledLink = styled(Link)`
  text-decoration: None;
  color: black;
`;

const Part = styled.p`
  font-size: 0.8em;
  font-style: oblique;
  margin: 5px;
  color: ${({ color }) => color || 'gray'};
`;

const TimeSlot = ({ time, heading, events, background }) => (
  <Wrapper background={background}>
    <Time>{time}</Time>
    {heading && <TimeSlotHeading>{heading}</TimeSlotHeading>}
    <InnerWrapper fullHeight={!heading}>
      {events &&
        events.map(
          ({ id, title, speaker, shortTitle, company, color, part }) => (
            <EventWrapper key={id || shortTitle || title}>
              {id ? (
                <StyledLink to={`/event/${id}/`}>
                  <EventTitle
                    color={color}
                    underline={id && !part}
                    heavyUnderline={id && part}
                  >
                    {shortTitle || title}
                  </EventTitle>
                </StyledLink>
              ) : (
                <EventTitle color={color}>{title}</EventTitle>
              )}
              {part && <Part color={color}>{part}</Part>}
              {speaker && <Speaker>{company || speaker}</Speaker>}
            </EventWrapper>
          )
        )}
    </InnerWrapper>
  </Wrapper>
);

export default TimeSlot;
