import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import throttle from 'lodash.throttle';

import rootReducer from './reducers';
import App from './containers/App';
import { saveState, loadState } from './services/localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(logger));

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }),
  500
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
