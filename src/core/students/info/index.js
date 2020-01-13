import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import Dropdown from 'react-dropdown';

import * as actions from '../../../store/students/actions';

import { LoadingScreen } from '../../../components/loading';

import { Button, Container, Input } from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-dropdown/style.css'

const StudentInfo = ({ fetchStudentById, isLoading, location, student, updateStudent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('Male');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const genderOptions = ['Male', 'Female'];

  useEffect(() => {
    fetchStudentById(location.pathname.split('/student/')[1])
  }, [fetchStudentById]);

  useEffect(() => {
    if (student._id) {
      setFirstName(student.firstName);
      setLastName(student.lastName);
      setGender(student.gender);
      setDateOfBirth(new Date(student.dateOfBirth));
    }
  }, [student]);

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <Container>
      <div>First Name</div>
      <Input
        onChange={event => {
          setFirstName(event.target.value);
        }}
        value={firstName}
      />

      <div>Last Name</div>
      <Input
        onChange={event => {
          setLastName(event.target.value);
        }}
        value={lastName}
      />

      <div>Gender</div>
      <Input
        as={Dropdown}
        onChange={item => setGender(item.value)}
        options={genderOptions}
        value={gender}
      />

      <div>DOB</div>
      <Input
        as={DatePicker}
        selected={dateOfBirth}
        onChange={date => setDateOfBirth(date)}
      />

      <Button
        onClick={() => {
          updateStudent(student._id, {
            firstName,
            lastName,
            gender,
            dateOfBirth,
          })
        }}
      >
        Update Student
      </Button>
    </Container>
  )
};


const mapStateToProps = state => {
  return {
    student: state.students.current,
    isLoading: state.students.loadingStudent,
  };
};

export default connect(
  mapStateToProps,
  { ...actions }
)(StudentInfo);
