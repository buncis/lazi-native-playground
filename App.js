import React, { Component } from 'react';
import AppNavigator from './navigators/AppNavigator';
import { Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './rootReducer'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
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