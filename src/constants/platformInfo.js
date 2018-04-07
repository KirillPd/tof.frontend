import { Platform } from 'react-native';

export default {
  OS: Platform.OS,
  VERSION: parseInt(Platform.Version, 10),
  STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 20 : 0
};