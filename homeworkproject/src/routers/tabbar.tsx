import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyScreen from '../views/my';
import AddScreen from '../views/camera';
import HomeStackNavigator from './homeRouter';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{headerShown: false}}
    />
    <Tab.Screen name="Add" component={AddScreen} />
    <Tab.Screen name="My" component={MyScreen} />
  </Tab.Navigator>
);

export default MainTabs;
