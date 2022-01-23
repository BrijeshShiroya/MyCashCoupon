import { StyleSheet } from 'react-native';
import { Fonts, scale, verticalScale } from '../../../theme';
import colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  withdrawButton: {
    backgroundColor: colors.themeBlack,
    paddingVertical: 11,
    paddingHorizontal: 17,
    margin: 24,
    marginBottom: 0,
    width: 142,
    alignSelf: 'center'
  },
  buttonTitle: {
    color: colors.white,
    fontSize: Fonts.size.medium
  },
  itemContainer: {
    backgroundColor: colors.white,
    marginHorizontal: verticalScale(25),
    padding: 13,
    borderRadius: 5
  },
  sep: {
    height: 15
  },
  itemTitle: {
    fontFamily: Fonts.type.regular,
    color: colors.themeBlack,
    fontSize: Fonts.size.regular
  },
  itemSubTitle: {
    fontFamily: Fonts.type.regular,
    color: colors.limitText,
    fontSize: Fonts.size.medium
  }
});

export default styles;
