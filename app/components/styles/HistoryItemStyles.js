import { StyleSheet } from 'react-native';
import { Fonts } from '../../theme';
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 32,
    width: 32
  },
  titleContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: Fonts.type.regular,
    color: colors.darkBlue,
    fontSize: Fonts.size.medium,
  },
  date: {
    fontFamily: Fonts.type.regular,
    color: colors.themeGrey,
    fontSize: Fonts.size.small,
  },
  price: {
    fontFamily: Fonts.type.bold,
    color: colors.themeGreen,
    fontSize: Fonts.size.h5,
  }
});

export default styles;
