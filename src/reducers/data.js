import { UPDATE_DATA } from '../constants/actionTypes';

const defaultState = {
  firstName: '',
  lastName: '',
  telephone: '',
  address: '',
  house: '',
  city: '',
  zipCode: ''
};

const data = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default data;
