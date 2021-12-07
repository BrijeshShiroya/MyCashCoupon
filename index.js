/**
 * @format
 */
import { AppRegistry, Platform } from 'react-native';
import App from './app/modules/App';
import { name as appName } from './app.json';
import KeyboardManager from 'react-native-keyboard-manager';

if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setKeyboardDistanceFromTextField(10);
}
AppRegistry.registerComponent(appName, () => App);

