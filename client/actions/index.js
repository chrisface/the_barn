import uuid from 'uuid/v4';

export const ADD_HORSE = 'ADD_HORSE';
export const UPDATE_HORSE = 'UPDATE_HORSE';
export const SELECT_HORSE = 'SELECT_HORSE';
export const DELETE_HORSE = 'DELETE_HORSE';

const horseDefaults = {
  name: '',
  tier: 1,
  level: 1,
  breeds: 0,
  deaths: 0
};

export const addHorse = (horse) => {
  return Object.assign({
    type: ADD_HORSE,
    id: uuid()
  }, horseDefaults, horse);
};

export const updateHorse = (horse) => {
  return {
    type: UPDATE_HORSE,
    horse: horse
  };
};

export const deleteHorse = (horseId) => {
  return {
    type: DELETE_HORSE,
    horseId: horseId
  };
};

export const selectHorse = (horseId) => {
  return {
    type: SELECT_HORSE,
    horseId: horseId
  };
};
