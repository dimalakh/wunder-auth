import * as actionTypes from '../constants/actionTypes';

export const activateNextStep = () => ({
  type: actionTypes.UI_ACTIVATE_NEXT_STEP
});

export const activatePreviousStep = () => ({
  type: actionTypes.UI_ACTIVATE_PREVIOUS_STEP
});
