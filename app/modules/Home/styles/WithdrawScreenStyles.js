import { StyleSheet } from 'react-native';
import { Fonts, scale } from '../../../theme';
import colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  withDrawContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
  },
  priceContainer: {
    padding: 15,
    flexDirection: 'row',
  },
  input: {
    borderBottomWidth: 0,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.input,
    color: colors.themeBlack,
  },
  rs: {
    marginRight: 6,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.h5,
    color: colors.themeBlack,
  },
  emailContainer: {
    flex: 1
  },
  bottomLine: {
    height: 1,
    width: '95%',
    backgroundColor: colors.themeGrey,
    alignSelf: 'center'
  },
  limit: {
    marginTop: 14,
    marginBottom: 8,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    color: colors.limitText,
    width: '95%',
    alignSelf: 'center'
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
