import React from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

class KelasScreen extends React.Component {
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
      <View style={{flex:1, backgroundColor: '#005662'}}>
        <Text>Hello, Ini kelasnya kalo dipencet</Text>
        <Text>Aturan bawahnya ano tabnya ok</Text>
        <Text>{this.props.game}</Text>
        </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    game: props.navigation.state.params.id
  }
}

export default connect(mapStateToProps)(KelasScreen)