import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HorseRow, HorseRowHeader } from './horse_row';
import { selectHorse, deleteHorse } from '../actions';
import { getHorses, selectedHorseId } from '../selectors';

class HorseTable extends React.Component {
  render() {
    const { horses, onHorseSelected, onHorseDeleted, selectedHorseId } = this.props;
    const horseRows = horses.map((horse) => {
      return (
        <HorseRow
          horse={horse}
          key={horse.id}
          onHorseSelected={onHorseSelected}
          onHorseDeleted={onHorseDeleted}
          selected={horse.id === selectedHorseId}
        />
      );
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
  onHorseSelected: PropTypes.func.isRequired,
  onHorseDeleted: PropTypes.func.isRequired,
  selectedHorseId: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    horses: getHorses(state),
    selectedHorseId: selectedHorseId(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHorseSelected: horseId => dispatch(selectHorse(horseId)),
    onHorseDeleted: horse => dispatch(deleteHorse(horse))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorseTable);
