import { combineReducers } from 'redux';

import StudentReducer from './students/reducer';

const RootReducer = combineReducers({
  students: StudentReducer,
});

export default RootReducer;
