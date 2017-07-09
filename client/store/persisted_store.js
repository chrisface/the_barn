import { createStore, applyMiddleware } from 'redux';
import * as storage from 'redux-storage';

import createEngine from 'redux-storage-engine-localstorage';
const engine = createEngine('the_barn');
const middleware = storage.createMiddleware(engine);

export const createPersistedStore = applyMiddleware(middleware)(createStore);
export const loadPersistedStore = storage.createLoader(engine);
