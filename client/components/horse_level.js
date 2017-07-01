import React from 'react';
import { connect } from 'react-redux';

const HORSE_LEVELS = [...Array(30).keys()].map(i => ++i );
class HorseLevel extends React.Component {
  render() {
    const { horse } = this.props;
    const horseLevels = HORSE_LEVELS.map((level) => {
      return (
        <li key={level}>
          {level} { horse.level === level ? 'current' : ''}
        </li>
      )
    });

    return (
      <ul>
        { horseLevels }
      </ul>
    );
  }
}

HorseLevel.propTypes = {
  horse: React.PropTypes.object.isRequired
};


export default HorseLevel;
