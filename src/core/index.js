import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CustomSolution from './custom';
import EasySolution from './easy';
import SideNav from '../components/side-nav';

import { Container } from './styles';

const CoreApp = () => {
  return (
    <Router>
      <Container>
        <SideNav />
        <Route exact path="/" component={EasySolution} />
        <Route exact path="/custom" component={CustomSolution} />
      </Container>
    </Router>
  );
};

export default CoreApp;
