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
import KelasForm from '../screens/forms/KelasForm'
import KelasForm2 from '../screens/forms/KelasForm2'

import Step1Screen from '../screens/wizards/Step1Screen'
import Step2Screen from '../screens/wizards/Step2Screen'
import Step3Screen from '../screens/wizards/Step3Screen'
import Step4Screen from '../screens/wizards/Step4Screen'


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
  KelasTab: { screen: KelasTab},
  KelasForm: { screen: KelasForm2},
  Step1: { screen: Step1Screen},
  Step2: { screen: Step2Screen},
  Step3: { screen: Step3Screen},
  Step4: { screen: Step4Screen},
})

export default AppNavigator;
