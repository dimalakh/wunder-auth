import { PAYMENT_API } from '../constants/urls';

export const sendPaymentData = data =>
  fetch(PAYMENT_API, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data)
  }).then(res => res.json());
