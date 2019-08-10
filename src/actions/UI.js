import * as actionTypes from '../constants/actionTypes';

export const nextStep = () => ({
  type: actionTypes.UI_ACTIVATE_NEXT_STEP
});

export const previousStep = () => ({
  type: actionTypes.UI_ACTIVATE_PREVIOUS_STEP
});
