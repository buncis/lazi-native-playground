import React from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { saveKelas } from '../../actions';

const Form = t.form.Form;

const List = t.struct({
  title: t.String,          
  icon: t.maybe(t.String),  
  name: t.String,              
  subtitle: t.String,
  avatar_url: t.maybe(t.String)
});

const options = {};


class KelasForm extends React.Component {
  state = {
    loading: false
  }
  
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
         backgroundColor:"midnightblue"
       },
    title: 'Tambah Kelas Baru',
  };

  onPressur = () => {
    const value = this.refs.form.getValue();
    // if (value) {
    //   console.log(value);
    //   this.props.saveKelas(value);
    // }
    this.setState({ loading: true });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <Form
          ref="form"
          type={List}
          options={options}
        />
        <Button 
          onPress={this.onPressur} 
          underlayColor='#99d9f4'
          title="Save">
        </Button>
      </View>
    );
  }
}

export default connect(null, { saveKelas })(KelasForm);

