import { StyleSheet } from 'react-native';
import { Fonts, Metrics, scale } from '../../theme';
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h5,
    color: colors.themeBlack,
  },
  subTitle: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.input,
    color: colors.themeBlack,
    marginTop: 30,
    paddingHorizontal: 70,
    textAlign: 'center',
  },
  image: {
    height: Metrics.screenWidth - scale(150),
    aspectRatio: 1,
  },
});

export default styles;
