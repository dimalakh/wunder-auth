import { UPDATE_PERSONAL_INFO } from '../constants/actionTypes';

const defaultState = {
  firstName: '',
  lastName: '',
  telephone: ''
};

const personalInfo = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PERSONAL_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default personalInfo;
