import axios from 'axios';

import {
  FETCH_ALL_STUDENTS_REQUEST,
  FETCH_ALL_STUDENTS_SUCCESS,
  FETCH_ALL_STUDENTS_FAILURE,
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
