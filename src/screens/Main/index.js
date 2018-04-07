import React, { Component } from 'react';
import { View } from 'react-native';
import I18n from '../../i18n';
import { Router, Scene, Stack } from 'react-native-router-flux';
import styles from './styles';
import Register from '../Register';

class Main extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Router>
          <Stack key="root">
            <Scene key="register" component={Register} title={I18n.t('title_register')} />
          </Stack>
        </Router>
      </View>
    );
  }
}

export default Main;
