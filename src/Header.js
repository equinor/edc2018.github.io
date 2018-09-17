import React from 'react';
import styled from 'styled-components';
import logo from './equinor-logo.png';
import { Link } from 'react-router-dom';

const HeaderTitle = styled.h1`
  font-size: 3em;
  color: #ec384a;
  margin: 20px 0px 0px 0px;
  @media (min-width: 1100px) {
    ::before {
      content: 'Equinor Developer Conference ';
    }
  }
  @media (max-width: 1099px) {
    ::before {
      content: 'EDC ';
    }
  }
  @media (max-width: 500px) {
    font-size: 2em;
  }
  @media (max-width: 400px) {
    font-size: 1.7em;
  }
`;

const Logo = styled.img`
  height: 80px;
  @media (max-width: 500px) {
    height: 50px;
  }
  @media (max-width: 400px) {
    height: 45px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -20px 0px;
`;

const StyledHeader = styled.header`
  margin: 0px 20px;
`;

const ScheduleLink = styled(Link)`
  text-decoration: None;
  color: #ec384a;
  padding: 0px 20px 0px 0px;
  ${({ selected }) =>
    selected &&
    `
        text-decoration: underline;
  `};
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavBar = styled.div``;

const Header = ({ location }) => (
  <StyledHeader>
    <NavWrapper>
      <NavBar>
        <ScheduleLink selected={location.pathname === '/'} to="/">
          Schedule
        </ScheduleLink>
      </NavBar>
    </NavWrapper>
    <HeaderWrapper>
      <HeaderTitle>2018</HeaderTitle>
      <Logo src={logo} alt="Equnior logo" />
    </HeaderWrapper>
  </StyledHeader>
);

export default Header;
