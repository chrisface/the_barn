export const ADD_HORSE = 'ADD_HORSE';
export const SELECT_HORSE = 'SELECT_HORSE';

const horseDefaults = {
  tier: 1,
  level: 1
};

let lastHorseId = 0;
const nextHorseId = () => {
  return ++lastHorseId;
};

export const addHorse = (horse) => {
  return Object.assign({
    type: ADD_HORSE,
    id: nextHorseId(),
    name: horse.name,
    gender: horse.gender
  }, horseDefaults);
};

export const selectHorse = (horseId) => {
  return {
    type: SELECT_HORSE,
    horseId: horseId
  }
};
