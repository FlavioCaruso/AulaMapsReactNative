import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

// Screens
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import TabRouter from '../tabs';

// Types
import type {MainStackParamList} from './types';

const Stack = createStackNavigator<MainStackParamList>();

const headerDefaultStyles: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#ed145b',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
};

export default function MainRouter() {
  return (
    <Stack.Navigator
      initialRouteName="TabRouter"
      screenOptions={headerDefaultStyles}>
      <Stack.Screen
        name="SignIn"
        options={{headerShown: false}}
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerBackTitleVisible: false,
          title: '',
        }}
        component={SignUp}
      />
      <Stack.Screen
        name="TabRouter"
        options={{
          title: 'FIAP',
          headerTitleAlign: 'center',
        }}
        component={TabRouter}
      />
    </Stack.Navigator>
  );
}
