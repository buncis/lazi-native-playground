import React from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class KelasScreen extends React.Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
         backgroundColor:"midnightblue"
       },
    title: 'Tambah Kelas Baru',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <Text>Bottom fishing</Text>
      </View>
    );
  }
}
