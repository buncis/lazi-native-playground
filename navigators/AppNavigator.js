import React from 'react';
import { StackNavigator,TabNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation'

import HomeScreen from '../screens/HomeScreen'
import ExploreScreen from '../screens/ExploreScreen'


import KelasScreen from '../screens/kelas/KelasScreen'
import QuestionsScreen from '../screens/kelas/QuestionsScreen'
import VideosScreen from '../screens/kelas/VideosScreen'
import MaterisScreen from '../screens/kelas/MaterisScreen'
import MembersScreen from '../screens/kelas/MembersScreen'

const KelasTab = TabNavigator ({
  KelasScreen: { screen: KelasScreen },
  QuestionScreen: { screen: QuestionsScreen },
  VideoScreen:{ screen: VideosScreen },
  MateriScreen:{ screen: MaterisScreen },
  MemberScreen:{ screen: MembersScreen },
})

const MainTab = TabNavigator ({
  HomeScreen: { screen: HomeScreen },
  ExploreScreen: { screen: ExploreScreen }
}, {
  tabBarPosition: 'bottom',
  lazy: true
})

const AppNavigator = StackNavigator ( {
  MainTab: { screen: MainTab},
  KelasTab: { screen: KelasTab}
})

export default AppNavigator;