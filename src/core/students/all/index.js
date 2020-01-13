import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/students/actions';

import LoadingScreen from '../../../components/loading/screen';
import Table from './table';
import { Container } from './styles';

const AllStudents = ({ fetchAllStudents, isLoading, students }) => {
  useEffect(() => {
    fetchAllStudents();
  }, [fetchAllStudents]);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [{
          Header: 'Gender',
          accessor: 'gender',
        },
          {
            Header: 'Date of Birth',
            accessor: 'dateOfBirth',
          },
        ],
      },
    ],
    []
  );

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }
  return (
    <Container>
      <Table columns={columns} data={students}/>
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
)(AllStudents);
