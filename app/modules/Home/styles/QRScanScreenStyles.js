import { StyleSheet } from 'react-native';
import { Fonts, scale, verticalScale } from '../../../theme';
import colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cancelButton: {
    backgroundColor: colors.black
  },
  buttonTitle: {
    color: colors.white
  },
  footerContainer: {
    marginBottom: verticalScale(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
