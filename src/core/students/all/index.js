import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/students/actions';

import LoadingScreen from '../../../components/loading/screen';
import Table from './table';
import { Container } from './styles';

const EasySolution = ({ fetchAllStudents, isLoading, students }) => {
  useEffect(() => {
    fetchAllStudents();
  }, [fetchAllStudents]);

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }
  return (
    <Container>
      <Table students={students}/>
    </Container>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.students.loading,
    students: state.students.all,
  };
};

export default connect(
  mapStateToProps,
  { ...actions }
)(EasySolution);
