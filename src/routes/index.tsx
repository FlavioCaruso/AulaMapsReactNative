import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Router
import MainRouter from './stack';

export default function Routes() {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
}
