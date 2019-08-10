import React from 'react';

import { connect } from 'react-redux';

import FirstStep from './FirstStepForm';
import SecondStep from './SecondStepForm';

const App = ({ activeStep }) => {
  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      default:
        return <SecondStep />;
    }
  };

  return <>{getActiveStepComponent()}</>;
};

const mapStateToProps = state => ({
  activeStep: state.UI.activeStep
});

export default connect(mapStateToProps)(App);
