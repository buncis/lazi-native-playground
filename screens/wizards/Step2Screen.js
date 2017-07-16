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
import { saveKelas, fetchKelas, updateKelas } from '../../actions';
import Spinner from 'react-native-loading-spinner-overlay';
import { NavigationActions } from 'react-navigation';

const Form = t.form.Form;

const Step2 = t.struct({
  name: t.String
});

const options = {};

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

let _this = null;

class KelasForm extends React.Component {
  state = {
    loading: false,
    errors: {}
  }
  
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: {
         backgroundColor:"midnightblue"
       },
    title: 'Step 2',
    headerRight: <Button title="Next" onPress={() => _this.onPress()}/>,
  });

  componentDidMount(){
    _this = this;
  }

  onPress = () => {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
       this.props.navigation.navigate('Step3')
    }
  }
  
  default_value = {
    title: this.props.kelas ? this.props.kelas.title : '',         
    icon: this.props.kelas ? this.props.kelas.icon : '',  
    name: this.props.kelas ? this.props.kelas.name : '',                
    subtitle: this.props.kelas ? this.props.kelas.subtitle : '',  
    avatar_url: this.props.kelas ? this.props.kelas.avatar_url : ''
  }

  onPressur = () => {
    let errors = {};
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({ loading: true });
      if (this.props.navigation.state.params) {
        this.props.updateKelas(this.props.navigation.state.params.id,value).then(
          () => { this.setState({ loading: false }),
                  this.props.navigation.dispatch(resetAction)},
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
      } else {
        this.props.saveKelas(value).then(
          () => { this.setState({ loading: false }),
                  this.props.navigation.dispatch(resetAction)},
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
  }

  render() {
    const form =(
      <View>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Form
          ref="form"
          type={Step2}
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

const mapStateToProps = (state,props) => {
  if ( props.navigation.state.params !== undefined) {
    return {
      kelas: state.kelas
    }
  }
  return { kelas: null };
}

export default connect(mapStateToProps, { fetchKelas, saveKelas, updateKelas })(KelasForm);

