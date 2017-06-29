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
    title: 'Kelas',
  };

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
                                      title={item.name}
                                      subtitle={<View style={styles.subtitleView}>
                                                  <Text>emapt puluh</Text>
                                                  <Text>Tepat dibawahnya</Text>
                                                </View>
                                               }
                                      avatar={{uri:item.avatar_url}}
                                    />}
          />
      </List>
          <ActionButton 
            buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
              <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
              <Icon name="md-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
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
    paddingLeft: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})