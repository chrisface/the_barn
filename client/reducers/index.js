import { combineReducers } from 'redux';
import horses from './horses';
import { reducer as formReducer } from 'redux-form';
import * as storage from 'redux-storage';

export default storage.reducer(combineReducers({
  horses: horses,
  form: formReducer
}));
