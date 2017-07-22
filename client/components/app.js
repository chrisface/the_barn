import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HorseTable from './horse_table';
import EditHorse from './edit_horse';
import { addHorse } from '../actions';
import { selectedHorse } from '../selectors';
import { Button, Colors } from 'react-foundation';

class App extends React.Component {
  render() {
    const { addHorse, selectedHorse } = this.props;

    return (
      <div>
        <Button color={Colors.PRIMARY} onClick={addHorse}>New Horse</Button>
        <HorseTable/>
        { selectedHorse && <EditHorse initialValues={selectedHorse}/> }
      </div>
    );
  }
}

App.propTypes = {
  addHorse: PropTypes.func.isRequired,
  selectedHorse: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    selectedHorse: selectedHorse(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHorse: () => dispatch(addHorse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
