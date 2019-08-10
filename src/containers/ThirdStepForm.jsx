import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation/Navigation';
import Form from '../components/Form';
import { updateData, sendPayment } from '../actions/data';
import { previousStep } from '../actions/UI';
import { isValid } from '../selectors';

const ThirdStep = ({
  values,
  activeStep,
  onChange,
  onPreviousClick,
  onSubmit,
  valid
}) => {
  return (
    <Form values={values} onChange={onChange} onSubmit={onSubmit} valid={valid}>
      <label htmlFor="customer">Customer id:</label>
      <input
        id="customer"
        className="auth-input"
        type="number"
        name="customerId"
        placeholder="Type id..."
        required
      />

      <label htmlFor="iban">IBan:</label>
      <input
        id="iban"
        className="auth-input"
        type="string"
        name="iban"
        placeholder="Type IBan number..."
        required
      />

      <label htmlFor="iban">Owner:</label>
      <input
        id="owner"
        className="auth-input"
        type="string"
        name="owner"
        placeholder="Type owner name..."
        required
      />

      <Navigation
        activeStep={activeStep}
        onPreviousClick={onPreviousClick}
        valid={valid}
      />
    </Form>
  );
};

const mapStateToProps = state => ({
  values: state.data,
  activeStep: state.UI.activeStep,
  valid: isValid(state, ['owner', 'iban', 'customerId'])
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
