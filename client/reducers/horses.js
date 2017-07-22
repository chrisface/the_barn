import { ADD_HORSE, UPDATE_HORSE, SELECT_HORSE, DESELECT_HORSE, DELETE_HORSE } from '../actions';

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
  case UPDATE_HORSE: {
    return Object.assign({}, state, {
      horsesList: state.horsesList.map(horse => action.horse.id === horse.id ? action.horse : horse )
    });
  }
  case SELECT_HORSE: {
    const horse = state.horsesList.find((horse) => horse.id === action.horseId);
    return Object.assign({}, state, {
      selectedHorse: horse.id
    });
  }
  case DESELECT_HORSE: {
    if (state.selectedHorse === action.horseId) {
      return Object.assign({}, state, {
        selectedHorse: null
      });
    }
    else {
      return state;
    }
  }
  case DELETE_HORSE: {
    return Object.assign({}, state, {
      horsesList: state.horsesList.filter((horse) => horse.id !== action.horseId),
      selectedHorse: null
    });
  }
  default: {
    return state;
  }
  }
};
