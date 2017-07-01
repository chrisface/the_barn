import { ADD_HORSE, SELECT_HORSE } from '../actions';

const defaultState = {
  selectedHorse: null,
  horsesList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case ADD_HORSE: {
    return Object.assign({}, state, {
      horsesList: [
        ...state.horsesList,
        {
          id: action.id,
          name: action.name,
          tier: action.tier,
          gender: action.gender,
          level: action.level
        }
      ]
    });
  }
  case SELECT_HORSE: {
    const horse = state.horsesList.find((horse) => horse.id === action.horseId);
    return Object.assign({}, state, {
      selectedHorse: horse.id
    });
  }
  default: {
    return state;
  }
  }
};
