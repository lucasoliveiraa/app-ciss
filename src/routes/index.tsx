import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screen/Home';
import { Register } from '../screen/Register';
import { Edit } from '../screen/Edit';

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
    <stackRoutes.Screen name='Edit' component={Edit} />
  </stackRoutes.Navigator>
);


export default Routes;