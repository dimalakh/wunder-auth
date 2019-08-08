import { combineReducers } from 'redux';

import personalInfo from './personalInfo';
import UI from './UI';

const authForm = combineReducers({
  UI,
  personalInfo
});

export default authForm;
