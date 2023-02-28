import React from 'react';
import {Feather, FontAwesome, MaterialIcons} from '@expo/vector-icons';
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
          <MaterialIcons
            name="home"
            size={tabInfo.focused ? 26 : 20}
            color="#FDFDFD"
          />
        ),
      },
    },
    Refer: {
      screen: Refer,
      navigationOptions: {
        tabBarLabel: 'Refer Friends',
        tabBarIcon: tabInfo => (
          <MaterialIcons
            name="people"
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
          <MaterialIcons
            name="add-shopping-cart"
            size={tabInfo.focused ? 26 : 20}
            color="#FDFDFD"
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
            color="#FDFDFD"
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
