import { StyleSheet } from 'react-native';
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: colors.lightblack,
    padding: 25,
    borderRadius: 6,
  },
});

export default styles;
