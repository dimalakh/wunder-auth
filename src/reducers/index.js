import { combineReducers } from 'redux';

import personalInfo from './personalInfo';

const authForm = combineReducers({
  personalInfo
});

export default authForm;
