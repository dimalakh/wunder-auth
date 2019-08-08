import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FirstStep from './FirstStep';
import Navigation from '../components/Navigation/Navigation';
import { activateNextStep, activatePreviousStep } from '../actions/UI';

const App = ({ activeStep, activatePreviousStep, activateNextStep }) => {
  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 1:
        return <FirstStep />;
      default:
        return <FirstStep />;
    }
  };

  return <>{getActiveStepComponent()}</>;
};

const mapStateToProps = state => ({
  activeStep: state.UI.activeStep
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ activateNextStep, activatePreviousStep }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
