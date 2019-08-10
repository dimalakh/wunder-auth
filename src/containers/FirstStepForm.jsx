import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation/Navigation';
import Form from '../components/Form';
import { updateData } from '../actions';
import { previousStep, nextStep } from '../actions/UI';

const SecondStep = ({
  values,
  activeStep,
  onChange,
  onPreviousClick,
  onSubmit
}) => {
  return (
    <Form values={values} onChange={onChange} onSubmit={onSubmit}>
      <input type="address" name="address" />
      <input type="text" name="city" />
      <input type="number" name="house" />
      <input type="number" name="zipCode" />

      <Navigation activeStep={activeStep} onPreviousClick={onPreviousClick} />
    </Form>
  );
};

const mapStateToProps = state => ({
  values: state.data,
  activeStep: state.UI.activeStep
});

const mapDispatchToProps = dispatch => ({
  onChange: values => dispatch(updateData(values)),
  onPreviousClick: () => dispatch(previousStep()),
  onSubmit: () => dispatch(nextStep())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondStep);
