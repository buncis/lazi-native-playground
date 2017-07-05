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
import DropdownAlert from 'react-native-dropdownalert';
import { NavigationActions } from 'react-navigation';

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
    errors: {},
    done: false
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
        () => { this.setState({ done: true })},
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
    const backAction = NavigationActions.back({})
    const form =(
      <View>
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
    
    return (
       <View style={{flex:1}}>
        { this.state.done ? this.props.navigation.dispatch(backAction) : form}
      </View>
    );
  }
}

export default connect(null, { saveKelas })(KelasForm);

