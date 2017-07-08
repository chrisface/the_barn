import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectedHorse } from '../selectors';
import { updateHorse } from '../actions';
import { GENDER_MALE, GENDER_FEMALE} from '../constants/horse';
import { Field, reduxForm } from 'redux-form';
import { Button, Row, Column, Colors } from 'react-foundation';


class EditHorse extends React.Component {
  render() {
    const { initialValues } = this.props;
    const { handleSubmit, pristine, reset, submitting } = this.props;

    if (!initialValues){
      return null;
    }

    return (
      <form onSubmit={handleSubmit}>
        <Row className="display">
          <Column large ={8}>
            <h1>Edit Horse</h1>
          </Column>
        </Row>
        <Row>
          <Column large={2}>
            <label>
              Horse Name
              <Field name="name" component="input" type="text" />
            </label>
          </Column>
          <Column large={2}>
            <label>
              Tier
              <Field name="tier" component="input" type="text" />
            </label>
          </Column>
          <Column large={2}>
            <label>
              Level
              <Field name="level" component="input" type="text" />
            </label>
          </Column>
          <Column large={6}>
            <label>
              Gender
              <Field name="gender" component="select">
                <option />
                <option value={GENDER_MALE}>{GENDER_MALE}</option>
                <option value={GENDER_FEMALE}>{GENDER_FEMALE}</option>
              </Field>
            </label>
          </Column>
        </Row>
        <Row>
          <Column large={2}>
            <Button type="submit" color={Colors.PRIMARY} disabled={pristine || submitting}>Submit</Button>
            <Button type="button" color={Colors.ALERT} disabled={pristine || submitting} onClick={reset}>
              Reset
            </Button>
          </Column>
        </Row>
      </form>
    );
  }
}

EditHorse.propTypes = {
  horse: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    initialValues: selectedHorse(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: horse => dispatch(updateHorse(horse))
  };
};

const EditHorseReduxForm = reduxForm({
  enableReinitialize: true,
  form: 'edit_horse'
})(EditHorse);
export default connect(mapStateToProps, mapDispatchToProps)(EditHorseReduxForm);
