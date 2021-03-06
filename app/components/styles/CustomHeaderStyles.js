import { Platform, StyleSheet } from 'react-native';
import { Colors, scale, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: Platform.OS === 'android' ? verticalScale(81) : verticalScale(81),
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
  },
  iconView: {
    height: verticalScale(40),
    width: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    height: verticalScale(20),
    width: scale(20),
    resizeMode: 'contain',
  },
  title: {
    maxWidth: scale(200),
    fontSize: verticalScale(18),
    fontFamily: Fonts.type.bold,
    color: Colors.darkBlue,
    textAlign: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  hitSlop: { left: 20, right: 20, top: 20, bottom: 20 },
  logo: {
    height: 24,
  },
});

export default styles;
