import React from 'react';
import styled from 'styled-components';
import logo from './equinor-logo.png';
import { Link } from 'react-router-dom';

const HeaderTitle = styled.h1`
  font-size: 3em;
  color: #ec384a;
`;

const Logo = styled.img`
  height: 80px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -15px 0px;
`;

const StyledHeader = styled.header`
  height: 50px;
  padding: 20px;
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

/* <ScheduleLink to="/">Schedule</ScheduleLink> */

const Header = ({ location }) => (
  <StyledHeader>
    {/* <div style={{ width: '200px' }}> </div> */}
    <NavWrapper>
      <NavBar>
        <ScheduleLink selected={location.pathname === '/'} to="/">
          Schedule
        </ScheduleLink>
        <ScheduleLink
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
        </ScheduleLink>
      </NavBar>
    </NavWrapper>
    <HeaderWrapper>
      <HeaderTitle>Equinor Developer Conference 2018</HeaderTitle>
      <Logo src={logo} alt="Equnior logo" />
    </HeaderWrapper>
  </StyledHeader>
);

export default Header;
