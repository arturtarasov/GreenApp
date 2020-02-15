import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { theme } from '../constants';
import { Forgot } from '../screens/Forgot';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';
import Welcome from '../screens/Welcome';

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
    Forgot
    // Explore,
    // Browse,
    // Product,
    // Settings
  },
  {
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: "#FFFFFF" },
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white,
        borderBottomColor: "transparent",
        elevation: 0
      },
      headerBackImage: () => (
        <Image source={require("../assets/icons/back.png")} />
      ),
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      },
      headerTitle: () => null
    }
  }
);

export default createAppContainer(screens);
