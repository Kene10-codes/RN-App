import React from 'react';
import {AntDesign, Feather, FontAwesome} from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {
  createMaterialBottomTabNavigator,
} from 'react-navigation-material-bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Rankings from '../screens/Rankings';
import Refer from '../screens/Refer';
import Shop from '../screens/Shop';

const TabNavigator = createMaterialBottomTabNavigator (
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: tabInfo => (
          <AntDesign
            name="home"
            size={tabInfo.focused ? 26 : 20}
            color="#fff"
          />
        ),
      },
    },
    Refer: {
      screen: Refer,
      navigationOptions: {
        tabBarLabel: 'Refer Friends',
        tabBarIcon: tabInfo => (
          <AntDesign
            name="user"
            size={tabInfo.focused ? 26 : 20}
            color="#fff"
          />
        ),
      },
    },
    Shop: {
      screen: Shop,
      navigationOptions: {
        tabBarLabel: 'Shop',
        tabBarIcon: tabInfo => (
          <Feather
            name="shopping-bag"
            size={tabInfo.focused ? 26 : 20}
            color="#fff"
          />
        ),
      },
    },
    Rankings: {
      screen: Rankings,
      navigationOptions: {
        tabBarLabel: 'Rankings',
        tabBarIcon: tabInfo => (
          <Feather
            name="pie-chart"
            size={tabInfo.focused ? 26 : 20}
            color="#fff"
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: tabInfo => (
          <FontAwesome
            name="user"
            size={tabInfo.focused ? 26 : 20}
            color="#fff"
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    barStyle: {backgroundColor: '#000'},
  }
);

export const Navigator = createAppContainer (TabNavigator);