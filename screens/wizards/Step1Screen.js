import React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { saveKelas, fetchKelas, updateKelas } from '../../actions';
import Spinner from 'react-native-loading-spinner-overlay';
import { NavigationActions } from 'react-navigation';

const Form = t.form.Form;

const Step1 = t.struct({
  title: t.String,                         
  subtitle: t.String,  
});

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

let _this = null;

export default class KelasForm extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
         backgroundColor:"midnightblue"
       },
    title: 'Step1',
    headerRight: <Button title="Next" onPress={() => _this.onPress()}/>,
  });

  componentDidMount(){
    _this = this;
  }

  onPress = () => {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
       this.props.navigation.navigate('Step2')
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Form
          ref="form"
          type={Step1}
        />
        <Button title="Diteken" onPress={this.onPress}></Button>
      </View>
    );
  }
}
