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

const backAction = NavigationActions.back({
    key: null
})

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
    // this.props.navigation.dispatch(backAction)
    let errors = {};
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({ loading: true });
      this.props.saveKelas(value).then(
        () => { this.setState({ loading: false }),
                this.props.navigation.dispatch(backAction)},
        (err) => err.response.json().then(({errors}) => 
          {
            this.setState({loading: false});
            this.dropdown.alertWithType('error', 'Error', errors.icon.toString());
          }
        ) 
      )
    }
  }

  render() {
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
        {form}
      </View>
    );
  }
}

export default connect(null, { saveKelas })(KelasForm);

