import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, scale, verticalScale } from '../../../theme';
import colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding: scale(20),
  },
  scrollContainer: {
    paddingBottom: 10,
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h4,
    color: Colors.darkBlue,
    marginTop: verticalScale(62),
  },
  subTitle: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.input,
    color: Colors.darkBlue,
    marginTop: verticalScale(21),
  },
  nameContainer: {
    marginTop: verticalScale(44),
  },
  emailContainer: {
    marginTop: verticalScale(24),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(40),
    justifyContent: 'space-between'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 14
  },
  stillWithout: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    color: colors.inputColor,
    alignSelf: 'flex-end',
    marginBottom: 7,
    marginRight: 4
  },

});

export default styles;
