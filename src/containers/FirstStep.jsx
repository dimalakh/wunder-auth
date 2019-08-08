import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

import { activatePreviousStep, activateNextStep } from '../actions/UI';
import { updatePersonalInfo } from '../actions';
import FirstStep from '../components/FirstStepForm/FirstStepForm';

const FirstStepForm = withFormik({
  mapPropsToValues: ({ firstName, lastName, telephone }) => ({
    firstName,
    lastName,
    telephone
  }),
  validate: values => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { props }) => {
    props.updatePersonalInfo(values);
    props.activateNextStep();
  },

  displayName: 'PersonalInfo'
})(FirstStep);

const mapStateToProps = state => ({
  firstName: state.personalInfo.firstName,
  lastName: state.personalInfo.lastName,
  telephone: state.personalInfo.telephone,
  activeStep: state.UI.activeStep
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { activatePreviousStep, activateNextStep, updatePersonalInfo },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstStepForm);
