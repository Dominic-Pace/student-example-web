import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllStudents from './students/all';
import StudentInfo from './students/info';
import SideNav from '../components/side-nav';

import { Container, PageContainer } from './styles';

const CoreApp = () => {
  return (
    <Router>
      <Container>
        <SideNav />
        <PageContainer>
          <Route exact path="/" component={AllStudents} />
          <Route path="/student/:id" component={StudentInfo} />
        </PageContainer>
      </Container>
    </Router>
  );
};

export default CoreApp;
