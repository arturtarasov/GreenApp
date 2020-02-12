import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Explore,
    Browse,
    Product,
    Settings
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {}
    }
  }
);
