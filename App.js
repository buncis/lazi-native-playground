import React, { Component } from 'react';
import AppNavigator from './navigators/AppNavigator';
import { Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reducers from './reducers/index'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default App