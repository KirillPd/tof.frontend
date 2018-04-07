import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import styles from './styles';

class Main extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <CustomStatusBar />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default Main;
