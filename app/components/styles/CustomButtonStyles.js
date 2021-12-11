import { StyleSheet } from 'react-native';
import { Colors, verticalScale, Fonts, scale } from '../../theme';

const styles = StyleSheet.create({
  buttonTouchable: {
    backgroundColor: Colors.lightPurple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: verticalScale(23),
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(14)
  },
  disabledButton: {
    backgroundColor: Colors.themeRedDisable,
  },
  buttonText: {
    fontFamily: Fonts.type.regular,
    color: Colors.themePurple,
    fontSize: Fonts.size.input,
  },
});

export default styles;
