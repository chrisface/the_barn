import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { GENDER_MALE, GENDER_FEMALE } from './constants/horse';
import App from './components/app';
import './main.scss';

import { addHorse } from './actions';

const render = () => {
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(() =>{
  render();
});

render();

store.dispatch(addHorse({name: 'Kevin', gender: GENDER_MALE}));
store.dispatch(addHorse({name: 'Darren', gender: GENDER_MALE}));
store.dispatch(addHorse({name: 'Cat', gender: GENDER_FEMALE}));
