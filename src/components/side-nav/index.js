import React from 'react';

import { Container, NavItem } from './styles';
import { Link, withRouter } from 'react-router-dom';

export const SideNav = ({ location }) => {
  console.log('window', window);
  return (
    <Container>
      <NavItem as={Link} isActive={location.pathname === '/'} to="/">Easy Solution</NavItem>
      <NavItem as={Link} isActive={location.pathname === '/custom'} to="/custom">Custom Solution</NavItem>
    </Container>
  );
};

export default withRouter(SideNav);
