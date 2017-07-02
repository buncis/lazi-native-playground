import React from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MembersScreen extends React.Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
         backgroundColor:"midnightblue"
       },
    title: 'Member',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1, backgroundColor: '#c94f7c'}}>
        <Text>Hello, Member PAGO!!</Text>
        <ActionButton 
          buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        </View>
    );
  }
}
