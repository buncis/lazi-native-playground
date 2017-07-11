import React from 'react';
import {
  Button,
  View,
  Text,
  ActivityIndicator,
  ProgressBarAndroid
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
         backgroundColor:"midnightblue"
       },
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1, backgroundColor: '#4286f4'}}>
        <Text>Lontong</Text>
      </View>
    );
  }
}
