import { combineReducers } from 'redux';
import horses from './horses';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  horses: horses,
  form: formReducer
});
