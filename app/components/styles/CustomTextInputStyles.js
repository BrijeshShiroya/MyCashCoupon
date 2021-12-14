import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  scale,
  verticalScale,
  moderateScale,
} from '../../theme';
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  textInput: {
    color: colors.inputColor,
    borderBottomColor: colors.themeGrey,
    borderBottomWidth: 1,
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.regular
  },
  alertText: {
    color: Colors.themeGreen,
    fontSize: Fonts.size.small,
    marginLeft: scale(5),
  },
  leftIcon: {
    height: verticalScale(17),
    width: scale(17),
    resizeMode: 'contain',
  },
  leftView: {
    position: 'absolute',
    right: 0,
    alignContent: 'center',
  },
  placeholderText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.type.regular,
  },
});

export default styles;
