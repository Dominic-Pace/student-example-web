import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllStudents from './students/all';
import SideNav from '../components/side-nav';

import { Container, PageContainer } from './styles';

const CoreApp = () => {
  return (
    <Router>
      <Container>
        <SideNav />
        <PageContainer>
          <Route exact path="/" component={AllStudents} />
        </PageContainer>
      </Container>
    </Router>
  );
};

export default CoreApp;
