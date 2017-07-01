import React from 'react';
import { connect } from 'react-redux';
import HorseLevel from './horse_level';
import { selectedHorse } from '../selectors';


class EditHorse extends React.Component {
  render() {
    const { horse } = this.props;
    if (!horse){
      return null;
    }

    return (
      <div>
      <h3>Edit Horse</h3>
        <span>Horse Id: { horse.id }</span>
        <span>Horse Name: <input type="text" value={horse.name} onChange={(this.onHorseNameChange)} /></span>
      </div>);
  }
}

EditHorse.propTypes = {
  horse: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    horse: selectedHorse(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHorse);
