import React, {Component} from 'react';
import {
  createStackNavigator, 
  createDrawerNavigator, 
  createBottomTabNavigator, 
  createSwitchNavigator, 
  createAppContainer
} from 'react-navigation';
import HomeScreen from './components/home/HomeScreen';
import Profile from './components/profile/Profile';
import Portfolio from './components/portfolio/Portfolio';
import Login from './components/auth/Login';

// Stack Navigator
const RootStack = createStackNavigator({
  Home: {screen: HomeScreen},
  Portfolio: {screen: Portfolio},
  Profile: {screen: Profile}
});

// Bottom Tab Navigator
const RootTab = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Portfolio: {screen: Portfolio},
  Profile: {screen: Profile}
});

// Bottom Tab Navigator
const RootDrawer = createDrawerNavigator(
  {
    Stacks: {
      screen: RootStack,
      navigationOptions: {}
    },
    Tabs: {
      screen: RootTab,
      navigationOptions: {}
    },
  }
);

const RootSwitch = createSwitchNavigator(
  {
    Login: {screen: Login},
    App: {screen: RootDrawer}
  }
);

const App = createAppContainer(RootSwitch);

export default App;