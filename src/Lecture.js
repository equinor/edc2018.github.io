import React from 'react';
import styled from 'styled-components';
import lectures from './lectures.js';

const Wrapper = styled.div``;

const Title = styled.h2``;

const Lecturer = styled.h3``;

const Description = styled.p``;

const Lecture = ({ id }) => {
  const { title, lecturer, description } = lectures.find(
    lecture => lecture.id === id
  );
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Lecturer>{lecturer}</Lecturer>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Lecture;
