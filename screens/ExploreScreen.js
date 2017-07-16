import React from 'react';
import { List, ListItem } from 'react-native-elements'
import { FlatList, View, StyleSheet, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchKelases } from '../actions'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const dipencet = () => console.log("dipencet");

class KelasPage extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor:"midnightblue"
    },
    title: 'Explore',
    headerRight: <Button title="Info" onPress={() => navigation.navigate('Step1')}/>,
  });

  componentDidMount(){
    this.props.fetchKelases();
  }
  
  render () {
    return (
      <View style={{flex:1, backgroundColor: '#4286f4'}}>
        <List>
          <FlatList
              data={this.props.kelases}
              keyExtractor={item => item.id}
              renderItem={({item}) => <ListItem
                                        roundAvatar
                                        key={item.id}
                                        title={item.title}
                                        subtitle={<View 
                                                    style={styles.subtitleView}>
                                                    <Text>{item.subtitle}</Text>
                                                    <Text>{item.name}</Text>
                                                  </View>
                                                }
                                        avatar={{uri:item.avatar_url}}
                                        onPress={() => this.props.navigation.navigate('KelasTab', {id: item.id})}
                                      />}
          />
        </List>
        <ActionButton 
         buttonColor="rgba(231,76,60,1)"
         onPress={() => this.props.navigation.navigate('KelasForm')}
        >
        </ActionButton>
      </View>
    )
  }
}
        
const mapStateToProps = (state) => {
  return {
    kelases: state.kelases
  }
}

export default connect(mapStateToProps,{ fetchKelases })(KelasPage)

styles = StyleSheet.create({
  subtitleView: {
    paddingLeft: 10,
    paddingTop: 5
  }
})