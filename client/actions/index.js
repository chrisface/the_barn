export const ADD_HORSE = 'ADD_HORSE';
export const UPDATE_HORSE = 'UPDATE_HORSE';
export const SELECT_HORSE = 'SELECT_HORSE';
export const DESELECT_HORSE = 'DESELECT_HORSE';
export const DELETE_HORSE = 'DELETE_HORSE';

export const addHorse = () => {
  return {
    type: ADD_HORSE
  };
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

export const deselectHorse = (horseId) => {
  return {
    type: DESELECT_HORSE,
    horseId: horseId
  };
};
