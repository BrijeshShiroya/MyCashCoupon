import { StyleSheet } from 'react-native';
import { ApplicationStyles, scale } from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  listContainer: {
    padding: scale(20)
  },
  item: {
    height: 150,
    width: '100%',
    borderRadius: 5
  },
  sep: {
    height: 22
  }
});

export default styles;
