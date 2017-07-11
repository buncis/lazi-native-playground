import React from 'react';
import {
  Button,
  View,
  Text,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { saveKelas, fetchKelas } from '../../actions';
import Spinner from 'react-native-loading-spinner-overlay';
import { NavigationActions } from 'react-navigation';

const Form = t.form.Form;

const List = t.struct({
  title: t.String,            
  icon: t.String,  
  name: t.String,                
  subtitle: t.String,  
  avatar_url: t.String
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

  componentDidMount(){
    this.props.fetchKelas(this.props.navigation.state.params.id);
    // console.log("KEMOUNT");
  }
  
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
            Alert.alert(
              'Error',
              errors.icon.toString(),
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )
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
      </View>
    );
    
    return (
       <View style={{flex:1}}>
        {form}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    kelas: state.kelases
  }
}

export default connect(mapStateToProps, { fetchKelas, saveKelas })(KelasForm);

