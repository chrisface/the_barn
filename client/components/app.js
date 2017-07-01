import React from 'react';
import { connect } from 'react-redux';
import HorseTable from './horse_table';
import EditHorse from './edit_horse';

class App extends React.Component {

  render() {
    return (
      <div>
        <HorseTable/>
        <EditHorse/>
      </div>
    );
  }
}

App.propTypes = {
};

const mapStateToProps = (_state) => {
  return {
  };
};

const mapDispatchToProps = (_dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
