import React from 'react';
import { StackNavigator,TabNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Home from '../pages/Home'
import KelasPage from '../pages/KelasPage'


const Tab = TabNavigator ({
    Home: { screen: Home },
    KelasPage: { screen: KelasPage },
  }, {
    tabBarPosition: 'bottom',
  }
);

const AppNavigator = StackNavigator({
  Tab: { screen: Tab, Title: 'Mazi' },
});

export default AppNavigator;