import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation/Navigation';
import Form from '../components/Form';
import { updateData } from '../actions/data';
import { previousStep, nextStep } from '../actions/UI';
import { isValid } from '../selectors';

const SecondStep = ({
  values,
  activeStep,
  onChange,
  onPreviousClick,
  onSubmit,
  valid
}) => {
  return (
    <Form values={values} onChange={onChange} onSubmit={onSubmit}>
      <label htmlFor="first-name">First name:</label>
      <input
        id="first-name"
        className="auth-input"
        type="text"
        name="firstName"
        placeholder="Type your first name..."
        required
      />

      <label htmlFor="last-name">Last name:</label>
      <input
        id="last-name"
        className="auth-input"
        type="text"
        name="lastName"
        placeholder="Type your last name..."
        required
      />

      <label htmlFor="telephone">Telephone:</label>
      <input
        id="telephone"
        className="auth-input"
        type="tel"
        name="telephone"
        placeholder="Type your telephone..."
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
  valid: isValid(state, ['firstName', 'lastName', 'telephone'])
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
