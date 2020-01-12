import {
  FETCH_ALL_STUDENTS_REQUEST,
  FETCH_ALL_STUDENTS_SUCCESS,
  FETCH_ALL_STUDENTS_FAILURE,
} from './types';

const INITIAL_STATE = {
  all: [],
  errorMessage: '',
  loading: false,
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
        loading: INITIAL_STATE.loading,
      };

    case FETCH_ALL_STUDENTS_FAILURE:
      return {
        ...state,
        loading: INITIAL_STATE.loading,
      };

    default:
      return state;
  }
};
