import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

class CustomStatusBar extends Component {
  render() {
    return (<View style={styles.statusBar}></View>);
  }
}

export default CustomStatusBar;
