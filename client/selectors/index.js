export const getHorses = (state) => state.horses.horsesList;
export const selectedHorseId = (state) => state.horses.selectedHorse;
export const selectedHorse = (state) => lookupHorse(getHorses(state), selectedHorseId(state));

const lookupHorse = (horses, id) => horses.find((horse) => horse.id === id);
