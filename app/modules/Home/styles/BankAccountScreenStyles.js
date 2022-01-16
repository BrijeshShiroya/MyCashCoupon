import { StyleSheet } from 'react-native';
import { Fonts, scale } from '../../../theme';
import colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  withdrawButton: {
    backgroundColor: colors.themeBlack,
    paddingVertical: 11,
    paddingHorizontal: 17,
    margin: 24
  },
  buttonTitle: {
    color: colors.white,
    fontSize: Fonts.size.medium
  },
});

export default styles;
