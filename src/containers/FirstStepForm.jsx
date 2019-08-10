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
      <label for="first-name">First name:</label>
      <input
        id="first-name"
        className="auth-input"
        type="text"
        name="firstName"
        placeholder="Type your first name..."
        required
      />

      <label for="last-name">Last name:</label>
      <input
        id="last-name"
        className="auth-input"
        type="text"
        name="LastName"
        placeholder="Type your last name..."
        required
      />

      <label for="telephone">Telephone:</label>
      <input
        id="telephone"
        className="auth-input"
        type="tel"
        name="telephone"
        placeholder="Type your telephone.."
        required
      />

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
