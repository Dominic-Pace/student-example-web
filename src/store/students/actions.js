import axios from 'axios';

import {
  FETCH_ALL_STUDENTS_REQUEST,
  FETCH_ALL_STUDENTS_SUCCESS,
  FETCH_ALL_STUDENTS_FAILURE,
  FETCH_SINGLE_STUDENT_REQUEST,
  FETCH_SINGLE_STUDENT_SUCCESS,
  FETCH_SINGLE_STUDENT_FAILURE,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE,
} from './types';

// Fetch All STUDENTS
export const fetchAllStudents = () => dispatch => {
  dispatch({ type: FETCH_ALL_STUDENTS_REQUEST });

  const fetchAllStudentsConfig = {
    baseURL: 'http://localhost:3005',
    method: 'get',
    url: '/students',
  };

  return axios(fetchAllStudentsConfig)
    .then(res => {
      dispatch({
        type: FETCH_ALL_STUDENTS_SUCCESS,
        students: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_ALL_STUDENTS_FAILURE,
        errorMessage:
          'Cannot get all students right now. Please try again later.',
      });
    });
};

export const fetchStudentById = id => dispatch => {
  dispatch({ type: FETCH_SINGLE_STUDENT_REQUEST });

  const fetchSingleStudentConfig = {
    baseURL: 'http://localhost:3005',
    method: 'get',
    url: `/students/${id}`,
  };

  return axios(fetchSingleStudentConfig)
    .then(res => {
      dispatch({
        type: FETCH_SINGLE_STUDENT_SUCCESS,
        student: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_SINGLE_STUDENT_FAILURE,
        errorMessage:
          'Cannot GET this student right now. Please try again later.',
      });
    });
};

export const updateStudent = (id, updates) => dispatch => {
  dispatch({ type: UPDATE_STUDENT_REQUEST });

  const updateStudentConfig = {
    baseURL: 'http://localhost:3005',
    data: updates,
    method: 'put',
    url: `/students/${id}`,
  };

  return axios(updateStudentConfig)
    .then(res => {
      dispatch({
        type: UPDATE_STUDENT_SUCCESS,
      });
    })
    .catch(() => {
      dispatch({
        type: UPDATE_STUDENT_FAILURE,
        errorMessage:
          'Cannot update this student right now. Please try again later.',
      });
    });
};
