import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HorseTable from './horse_table';
import EditHorse from './edit_horse';
import { addHorse } from '../actions';
import { Button, Colors } from 'react-foundation';

class App extends React.Component {
  render() {
    const { addHorse } = this.props;

    return (
      <div>
        <Button color={Colors.PRIMARY} onClick={addHorse}>New Horse</Button>
        <HorseTable/>
        <EditHorse/>
      </div>
    );
  }
}

App.propTypes = {
  addHorse: PropTypes.func.isRequired
};

const mapStateToProps = (_state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHorse: () => dispatch(addHorse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
