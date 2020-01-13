import React, { useMemo } from 'react';

import StudentsTable from './table';

import { Container } from './styles';

const AllStudents = ({ students }) => {
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

  return (
    <Container>
      <StudentsTable columns={columns} data={students} />
    </Container>
  );
};

export default AllStudents;
