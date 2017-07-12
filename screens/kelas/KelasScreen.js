import React from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchKelas, deleteKelas } from '../../actions';
import { NavigationActions } from 'react-navigation';

const backAction = NavigationActions.back({
    key: null
})

class KelasScreen extends React.Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
         backgroundColor:"midnightblue"
       },
    title: 'Home',
  };

  componentDidMount(){
    this.props.fetchKelas(this.props.navigation.state.params.id);
    // console.log("KEMOUNT");
  }

  onPressur = () => {
    this.props.deleteKelas(this.props.kelas.id).then(
      () => {this.props.navigation.dispatch(backAction)},
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
      

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1, backgroundColor: '#005662'}}>
        <Text>Hello, Ini kelasnya kalo dipencet</Text>
        <Text>Aturan bawahnya ano tabnya ok</Text>
        <Text>{this.props.kelas.id}</Text>
                <Text>{this.props.kelas.avatar_url}</Text>
        <Text>{this.props.kelas.icon}</Text>
        <Text>{this.props.kelas.subtitle}</Text>
        <Text>{this.props.kelas.title}</Text>
        <Text>{this.props.kelas.name}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('KelasForm', {id: this.props.kelas.id})}
          title={"Edit user dengan ID: " + this.props.kelas.id}
          color="#841584"
        />
        <Button
          onPress={this.onPressur}
          title={"Delete user dengan ID: " + this.props.kelas.id}
          color="red"
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    kelas: state.kelas
  }
}

export default connect(mapStateToProps, { fetchKelas, deleteKelas })(KelasScreen);
