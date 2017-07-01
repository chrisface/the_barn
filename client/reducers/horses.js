import { ADD_HORSE, SELECT_HORSE } from '../actions';
import { GENDER_MALE, GENDER_FEMALE } from '../constants/horse';

const defaultState = {
  selectedHorse: null,
  horses: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_HORSE:
      return Object.assign({}, state, {
        horses: [
          ...state.horses,
          {
            id: action.id,
            name: action.name,
            tier: action.tier,
            gender: action.gender,
            level: action.level
          }
        ]
      });
    case SELECT_HORSE:
      const horse = state.horses.find((horse) => horse.id === action.horseId);
      return Object.assign({}, state, {
        selectedHorse: horse.id
      });
    default:
      return state;
  };
};
