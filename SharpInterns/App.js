/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import {
  StackNavigator, DrawerNavigator
} from 'react-navigation';

import LoginScreen from "./src/ui/screens/account/LoginScreen";
import SignUpScreen from "./src/ui/screens/account/SignUpScreen";
import AppTheme from "./src/ui/theme/AppTheme";
import HomeScreen from "./src/ui/screens/home/HomeScreen";
import SideMenu from "./src/ui/screens/menu/SideMenu";

//--- SignOut Route --
const routes_signin = {
    home: {
        screen: HomeScreen,
    },
};

const config_drawer = {
   // drawerComponent: props => <SideMenu />
};

const AuthStack = DrawerNavigator(routes_signin, config_drawer);


//-- SignIn Routes
const routes = {
    //--- Testing --
    // home: {
    //     screen: AuthStack,
    //     navigationOptions: {
    //         header: null
    //         // title: 'Home',
    //         // headerStyle: {
    //         //     backgroundColor: AppTheme.COLOR.STATUS_BAR_BACKGROUND
    //         // },
    //         // headerTintColor: AppTheme.COLOR.HEADER_TINT_COLOR
    //     }
    // },
    //---
    login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login',
            header: null,
        }
    },
    signup: {
        screen: SignUpScreen,
        navigationOptions: {
            title: 'Sign Up',
            headerStyle: {
                backgroundColor: AppTheme.COLOR.STATUS_BAR_BACKGROUND
            },
            headerTintColor: AppTheme.COLOR.HEADER_TINT_COLOR
        }
    },
    home: {
        screen: AuthStack,
        navigationOptions: {
            header: null
            // title: 'Home',
            // headerStyle: {
            //     backgroundColor: AppTheme.COLOR.STATUS_BAR_BACKGROUND
            // },
            // headerTintColor: AppTheme.COLOR.HEADER_TINT_COLOR
        }
    }
};

//== Configs
const config = {

};




//== App ==
const App = StackNavigator(routes, config);

export default App;