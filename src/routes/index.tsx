import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screen/Home';
import { Register } from '../screen/Register';

const stackRoutes = createNativeStackNavigator();

const Routes = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
  >
    <stackRoutes.Screen name='Home' component={Home} />
    <stackRoutes.Screen name='Register' component={Register} />
  </stackRoutes.Navigator>
);


export default Routes;