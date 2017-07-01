import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HorseRow, HorseRowHeader } from './horse_row';
import { selectHorse } from '../actions';
import { getHorses } from '../selectors';

class HorseTable extends React.Component {
  render() {
    const { horses, onHorseSelected } = this.props;
    const horseRows = horses.map((horse) => {
      return <HorseRow horse={horse} key={horse.id} onSelection={onHorseSelected}/>;
    });

    return (
      <table>
        <thead>
          <HorseRowHeader/>
        </thead>
        <tbody>
          { horseRows }
        </tbody>
      </table>
    );
  }
}

HorseTable.propTypes = {
  horses: PropTypes.array.isRequired,
  onHorseSelected: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    horses: getHorses(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHorseSelected: (horseId) => {
      dispatch(selectHorse(horseId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorseTable);
