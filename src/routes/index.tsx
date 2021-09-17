import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { List } from '../screen/List';
import { Register } from '../screen/Register';
import { Edit } from '../screen/Edit';

const stackRoutes = createNativeStackNavigator();

const Routes = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="List"
  >
    <stackRoutes.Screen name='List' component={List} />
    <stackRoutes.Screen name='Register' component={Register} />
    <stackRoutes.Screen name='Edit' component={Edit} />
  </stackRoutes.Navigator>
);


export default Routes;