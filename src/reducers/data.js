import { UPDATE_DATA, SET_PAYMENT_ID } from '../constants/actionTypes';

const defaultState = {
  firstName: '',
  lastName: '',
  telephone: '',
  address: '',
  house: '',
  city: '',
  zipCode: '',
  customerId: '',
  iban: '',
  owner: '',
  paymentDataId: null
};

const data = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_DATA:
      return { ...state, ...payload };
    case SET_PAYMENT_ID:
      return { ...state, paymentDataId: payload };
    default:
      return state;
  }
};

export default data;
