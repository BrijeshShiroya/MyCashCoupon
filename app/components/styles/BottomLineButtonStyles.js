import { StyleSheet } from 'react-native';
import { Fonts } from '../../theme';
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
  buttonTouchable: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.input,
    color: colors.themePurple,
  },
  separate: {
    marginTop: 6,
    width: '100%',
    height: 2,
    backgroundColor: colors.lightPurple
  }
});

export default styles;
