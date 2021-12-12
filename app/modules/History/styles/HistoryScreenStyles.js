import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
  listContainer: {
    paddingBottom: 100,
    paddingTop: verticalScale(20),
    paddingHorizontal: scale(20)
  },
  sep: {
    height: verticalScale(21)
  }
});

export default styles;
