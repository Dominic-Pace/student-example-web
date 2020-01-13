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

const INITIAL_STATE = {
  all: [],
  current: {},
  errorMessage: '',
  isUpdatedSuccessful: false,
  isUpdating: false,
  loading: false,
  loadingStudent: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALL_STUDENTS_SUCCESS:
      return {
        ...state,
        all: action.students,
        current: {},
        isUpdatedSuccessful: false,
        loading: INITIAL_STATE.loading,
      };

    case FETCH_ALL_STUDENTS_FAILURE:
      return {
        ...state,
        loading: INITIAL_STATE.loading,
      };

    case FETCH_SINGLE_STUDENT_REQUEST:
      return {
        ...state,
        loadingStudent: true,
      };

    case FETCH_SINGLE_STUDENT_SUCCESS:
      return {
        ...state,
        current: action.student,
        loadingStudent: INITIAL_STATE.loading,
      };

    case FETCH_SINGLE_STUDENT_FAILURE:
      return {
        ...state,
        loadingStudent: INITIAL_STATE.loading,
      };

    case UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        isUpdating: true,
      };

    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        isUpdatedSuccessful: true,
        isUpdating: INITIAL_STATE.loading,
      };

    case UPDATE_STUDENT_FAILURE:
      return {
        ...state,
        isUpdating: INITIAL_STATE.loading,
      };

    default:
      return state;
  }
};
