import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

// Routes
import Routes from './routes';

// Store
import {store} from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#be0e49'} />
      <Routes />
    </Provider>
  );
}
