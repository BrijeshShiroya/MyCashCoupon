import { StyleSheet } from 'react-native';
import { Colors, Fonts, verticalScale } from '../../theme';
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(32)
  },
  balance: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    color: Colors.themeGrey,
    marginTop: verticalScale(32),
    alignSelf: 'center'
  },
  amountContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(18),
    alignItems: 'center',
    justifyContent: 'center'
  },
  rs: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.h1,
    color: Colors.themeGrey,
    alignSelf: 'center'
  },
  amount: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.h1,
    color: Colors.darkBlue,
    alignSelf: 'center',
    marginLeft: 6
  }
});

export default styles;
