export const getHorses = (state) => state.horses.horsesList;
export const selectedHorseid = (state) => state.horses.selectedHorse;
export const selectedHorse = (state) => lookupHorse(getHorses(state), selectedHorseid(state));

const lookupHorse = (horses, id) => horses.find((horse) => horse.id === id);
