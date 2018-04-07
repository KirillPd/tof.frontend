import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
// TODO: Add reducers to the store
// import store from './redux/store';
import Main from './screens/Main';

export default class App extends Component {
  render() {
    return (
      <Main />
    );
    // TODO: return component wrapped in Provider component
    // return (
    //   <Provider store={store}>
    //     <View />
    //   </Provider>
    // );
  }
};
