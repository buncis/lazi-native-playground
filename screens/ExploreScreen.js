import React from 'react';
import { List, ListItem } from 'react-native-elements'
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchKelases } from '../actions'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class KelasPage extends React.Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor:"midnightblue"
    },
    title: 'Explore',
  };

  componentDidMount(){
    this.props.fetchKelases();
  }
  
  render () {
    return (
      <List>
        <FlatList
            data={this.props.kelases}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ListItem
                                      roundAvatar
                                      key={item.id}
                                      title={item.name}
                                      subtitle={<View 
                                                  style={styles.subtitleView}>
                                                  <Text>emapt puluh</Text>
                                                  <Text>Tepat dibawahnya</Text>
                                                </View>
                                               }
                                      avatar={{uri:item.avatar_url}}
                                    />}
        />
      </List>
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