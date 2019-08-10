import { combineReducers } from 'redux';

import data from './data';
import UI from './UI';

const authForm = combineReducers({
  UI,
  data
});

export default authForm;
