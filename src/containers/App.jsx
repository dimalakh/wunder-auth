import '../styles/main.scss';

import React from 'react';

import { connect } from 'react-redux';

import FirstStep from './FirstStepForm';
import SecondStep from './SecondStepForm';
import ThirdStepForm from './ThirdStepForm';
import SuccessComponent from './SuccessComponent';

const App = ({ activeStep }) => {
  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStepForm />;
      case 4:
        return <SuccessComponent />;
      default:
        return <FirstStep />;
    }
  };

  return <>{getActiveStepComponent()}</>;
};

const mapStateToProps = state => ({
  activeStep: state.UI.activeStep
});

export default connect(mapStateToProps)(App);
