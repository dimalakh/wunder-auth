import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Form from '../components/Form';
import { updateData } from '../actions';
import { previousStep } from '../actions/UI';
import { connect } from 'react-redux';

const SecondStep = ({ values, activeStep, onChange, onPreviousClick }) => {
  return (
    <Form values={values} onChange={onChange}>
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
  onPreviousClick: () => dispatch(previousStep())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondStep);
