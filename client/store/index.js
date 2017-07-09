import appReducer from '../reducers';
import { createPersistedStore, loadPersistedStore } from './persisted_store';

const store = createPersistedStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

loadPersistedStore(store);
export default store;
