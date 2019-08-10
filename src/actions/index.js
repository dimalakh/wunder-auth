import * as actionTypes from '../constants/actionTypes';
import { sendPaymentData } from '../services/payment';
import { nextStep } from './UI';

export const updateData = payload => ({
  type: actionTypes.UPDATE_DATA,
  payload
});

export const setPaymentId = payload => ({
  type: actionTypes.SET_PAYMENT_ID,
  payload
});

export const sendPayment = () => (dispatch, getState) => {
  const { customerId, iban, owner } = getState().data;

  // return sendPaymentData({ customerId, iban, owner }).then(res => {
  //   const { paymentDataId } = res;

  // });
  dispatch(setPaymentId(1));
  dispatch(nextStep());
};
