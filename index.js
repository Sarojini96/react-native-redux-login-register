import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';

export const storeApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => storeApp);
