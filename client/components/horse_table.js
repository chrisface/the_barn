import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HorseRow, HorseRowHeader } from './horse_row';
import { selectHorse, deselectHorse, deleteHorse } from '../actions';
import { getHorses, selectedHorseId } from '../selectors';

class HorseTable extends React.Component {
  constructor(props) {
    super(props);
    this.onHorseClicked = this.onHorseClicked.bind(this);
  }

  onHorseClicked(horseId) {
    const { onHorseSelected, onHorseDeselected, selectedHorseId } = this.props;

    if (horseId === selectedHorseId){
      onHorseDeselected(horseId);
    }
    else {
      onHorseSelected(horseId);
    }
  }

  render() {
    const { horses, selectedHorseId, onHorseDeleted } = this.props;
    const horseRows = horses.map((horse) => {
      return (
        <HorseRow
          horse={ horse }
          key={ horse.id }
          onHorseClicked={ this.onHorseClicked }
          onHorseDeleted={ onHorseDeleted }
          selected={ horse.id === selectedHorseId }
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
  onHorseDeselected: PropTypes.func.isRequired,
  onHorseDeleted: PropTypes.func.isRequired,
  selectedHorseId: PropTypes.string
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
    onHorseDeselected: horseId => dispatch(deselectHorse(horseId)),
    onHorseDeleted: horse => dispatch(deleteHorse(horse))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorseTable);
