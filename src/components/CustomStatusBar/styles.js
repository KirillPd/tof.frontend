import { StyleSheet } from 'react-native';
import platformInfo from '../../constants/platformInfo';

export default StyleSheet.create({
  statusBar: {
    height: platformInfo.STATUSBAR_HEIGHT
  }
});