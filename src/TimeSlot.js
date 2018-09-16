import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  position: relative;
`;

const Time = styled.h3`
  position: absolute;
  margin: auto;
  padding: 10px 0px 0px 20px;
  color: rgb(12, 93, 103);
  font-size: 1.5em;
`;

const TimeSlotHeading = styled.h4`
  color: #ec384a;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
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
  ${({ highlighted }) =>
    highlighted &&
    `
    color: #ec384a;
    font-weight: bold;
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

const TimeSlot = ({ time, heading, events }) => (
  <Wrapper>
    <Time>{time}</Time>
    {heading && <TimeSlotHeading>{heading}</TimeSlotHeading>}
    <InnerWrapper fullHeight={!heading}>
      {events &&
        events.map(
          ({ id, title, speaker, shortTitle, company, highlighted }) => (
            <EventWrapper key={id || shortTitle || title}>
              {id ? (
                <StyledLink to={`/event/${id}/`}>
                  <EventTitle highlighted={highlighted}>
                    {shortTitle || title}
                  </EventTitle>
                </StyledLink>
              ) : (
                <EventTitle highlighted={highlighted}>{title}</EventTitle>
              )}
              {speaker && <Speaker>{company || speaker}</Speaker>}
            </EventWrapper>
          )
        )}
    </InnerWrapper>
  </Wrapper>
);

export default TimeSlot;
