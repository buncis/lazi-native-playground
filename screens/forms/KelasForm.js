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
import Spinner from 'react-native-loading-spinner-overlay';
import DropdownAlert from 'react-native-dropdownalert'

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
    loading: false,
    errors: {}
  }

  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
         backgroundColor:"midnightblue"
       },
    title: 'Tambah Kelas Baru',
  };

  onPressur = () => {
    let errors = {};
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({ loading: true });
      this.props.saveKelas(value).then(
        () => {},
        (err) => err.response.json().then(({errors}) => 
          {
            this.dropdown.alertWithType('error', 'Error', errors.icon.toString());
            this.setState({loading: false});
          }
        ) 
      )
    }
    
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
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
        <DropdownAlert
          ref={(ref) => this.dropdown = ref}/>
      </View>
    );
  }
}

export default connect(null, { saveKelas })(KelasForm);

