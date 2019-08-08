import {
  UI_ACTIVATE_NEXT_STEP,
  UI_ACTIVATE_PREVIOUS_STEP
} from '../constants/actionTypes';

const defaultState = {
  activeStep: 1
};

const UI = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case UI_ACTIVATE_NEXT_STEP:
      return { ...state, activeStep: state.activeStep + 1 };
    case UI_ACTIVATE_PREVIOUS_STEP:
      return { ...state, activeStep: state.activeStep - 1 };
    default:
      return state;
  }
};

export default UI;
