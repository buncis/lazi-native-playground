import React from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchKelas } from '../../actions';

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

        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    kelas: state.kelases
  }
}

export default connect(mapStateToProps, { fetchKelas })(KelasScreen);
