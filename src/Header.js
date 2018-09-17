import React from 'react';
import styled from 'styled-components';
import logo from './equinor-logo.png';
import { Link } from 'react-router-dom';

const HeaderTitle = styled.h1`
  font-size: 3em;
  color: #ec384a;
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
`;

const Logo = styled.img`
  height: 80px;
  @media (max-width: 500px) {
    height: 40px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -15px 0px;
`;

const StyledHeader = styled.header`
  height: 50px;
  margin: 20px;
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
        {/* <ScheduleLink
          selected={location.pathname === '/keynotes/'}
          to="/keynotes/"
        >
          Keynotes
        </ScheduleLink>
        <ScheduleLink
          selected={location.pathname === '/lectures/'}
          to="/lectures/"
        >
          Lectures
        </ScheduleLink>
        <ScheduleLink
          selected={location.pathname === '/workshops/'}
          to="/workshops/"
        >
          Workshops
        </ScheduleLink> */}
      </NavBar>
    </NavWrapper>
    <HeaderWrapper>
      <HeaderTitle>2018</HeaderTitle>
      <Logo src={logo} alt="Equnior logo" />
    </HeaderWrapper>
  </StyledHeader>
);

export default Header;
