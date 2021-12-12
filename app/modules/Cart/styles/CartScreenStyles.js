import { StyleSheet } from 'react-native';
import { ApplicationStyles, scale } from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    padding: scale(20),
  },
});

export default styles;
