import React from 'react';
import { connect } from 'react-redux';
import { updateHorse } from '../actions';
import { GENDER_MALE, GENDER_FEMALE} from '../constants/horse';
import { Field, reduxForm } from 'redux-form';
import { Button, Row, Column, Colors } from 'react-foundation';


class EditHorse extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Row className="display">
          <Column large ={12}>
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
          <Column large={1}>
            <label>
              Tier
              <Field name="tier" component="input" type="number" min="1" max="8" />
            </label>
          </Column>
          <Column large={1}>
            <label>
              Level
              <Field name="level" component="input" type="number" min="1" max="30" />
            </label>
          </Column>
          <Column large={2}>
            <label>
              Available Breeds
              <Field name="availableBreeds" component="input" type="number" min="0" max="2" />
            </label>
          </Column>
          <Column large={2}>
            <label>
              Available Resets
              <Field name="availableResets" component="input" type="number" min="0" max="2" />
            </label>
          </Column>
          <Column large={1}>
            <label>
              Deaths
              <Field name="deaths" component="input" type="number" min="0" />
            </label>
          </Column>
          <Column large={2}>
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
            <Button type="submit" color={Colors.PRIMARY} disabled={pristine || submitting}>
              Submit
            </Button>
            <Button type="button" color={Colors.ALERT} disabled={pristine || submitting} onClick={reset}>
              Reset
            </Button>
          </Column>
        </Row>
      </form>
    );
  }
}

const mapStateToProps = (_state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: horse => dispatch(updateHorse(horse)),
  };
};

const EditHorseReduxForm = reduxForm({
  enableReinitialize: true,
  form: 'edit_horse'
})(EditHorse);
export default connect(mapStateToProps, mapDispatchToProps)(EditHorseReduxForm);
