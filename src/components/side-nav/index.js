import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Container, NavItem } from './styles';

export const SideNav = ({ location }) => {
  return (
    <Container>
      <NavItem as={Link} isActive={location.pathname === '/'} to="/">Solution</NavItem>
    </Container>
  );
};

export default withRouter(SideNav);
