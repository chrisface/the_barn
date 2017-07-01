import React from 'react';
import PropTypes from 'prop-types';

class HorseRowComponent extends React.Component {
  render() {
    const { horse, onSelection} = this.props;
    return (
      <tr onClick={()=>{ onSelection(horse.id); }} >
        <td>{ horse.id }</td>
        <td>{ horse.name }</td>
        <td>{ horse.tier }</td>
        <td>{ horse.level }</td>
        <td>{ horse.gender }</td>
      </tr>
    );
  }
}

HorseRowComponent.propTypes = {
  onSelection: PropTypes.func.isRequired,
  horse: PropTypes.object.isRequired
};

class HorseHeaderRowComponent extends React.Component {
  render() {
    return (
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Tier</td>
        <td>Level</td>
        <td>Gender</td>
      </tr>
    );
  }
}

export const HorseRow = HorseRowComponent;
export const HorseRowHeader = HorseHeaderRowComponent;
// export default HorseRow;
