export const getHorses = (state) => state.horses.horses;
export const getHorse = (state, id) => getHorses(state).find((horse) => horse.id === id);
export const selectedHorseid = (state) => state.horses.selectedHorse;
export const selectedHorse = (state) => getHorse(state, selectedHorseid(state));
