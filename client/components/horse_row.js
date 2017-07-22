import React from 'react';
import PropTypes from 'prop-types';
import { Button, Colors } from 'react-foundation';
import classNames from 'classnames';

class HorseRowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleHorseDelete = this.handleHorseDelete.bind(this);
    this.rowStyles = this.rowStyles.bind(this);
  }

  rowStyles() {
    const { selected } = this.props;
    return classNames(
      'horse-row',
      {
        'row-selected': selected
      }
    );
  }

  handleHorseDelete(event) {
    const { horse, onHorseDeleted} = this.props;
    event.stopPropagation();
    onHorseDeleted(horse.id);
  }

  render() {
    const { horse, onHorseSelected } = this.props;

    return (
      <tr onClick={ () => onHorseSelected(horse.id) } className={ this.rowStyles() } >
        <td>{ horse.name }</td>
        <td>{ horse.tier }</td>
        <td>{ horse.level }</td>
        <td>{ horse.gender }</td>
        <td>
          <Button type="button" color={Colors.ALERT} onClick={ this.handleHorseDelete }>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

HorseRowComponent.propTypes = {
  onHorseSelected: PropTypes.func.isRequired,
  onHorseDeleted: PropTypes.func.isRequired,
  horse: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired
};

class HorseHeaderRowComponent extends React.Component {
  render() {
    return (
      <tr>
        <td>Name</td>
        <td>Tier</td>
        <td>Level</td>
        <td>Gender</td>
        <td>Actions</td>
      </tr>
    );
  }
}

export const HorseRow = HorseRowComponent;
export const HorseRowHeader = HorseHeaderRowComponent;
// export default HorseRow;
