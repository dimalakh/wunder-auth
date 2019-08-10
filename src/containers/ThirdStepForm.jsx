import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation/Navigation';
import Form from '../components/Form';
import { updateData, sendPayment } from '../actions';
import { previousStep } from '../actions/UI';

const ThirdStep = ({
  values,
  activeStep,
  onChange,
  onPreviousClick,
  onSubmit
}) => {
  return (
    <Form values={values} onChange={onChange} onSubmit={onSubmit}>
      <input type="number" name="customerId" />
      <input type="text" name="iban" />
      <input type="text" name="owner" />

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
  onSubmit: () => dispatch(sendPayment())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThirdStep);
