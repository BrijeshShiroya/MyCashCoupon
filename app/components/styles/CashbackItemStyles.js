import { StyleSheet } from 'react-native';
import { Fonts, scale, verticalScale, Colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(23),
    paddingHorizontal: scale(23)
  },
  icon: {
    width: 65,
    height: 73
  },
  sep: {
    height: 1,
    width: 65,
    backgroundColor: Colors.itemSeparator,
    marginTop: verticalScale(6)
  },
  title: {
    fontFamily: Fonts.type.regular,
    color: Colors.themeBlack,
    fontSize: Fonts.size.tiny,
    alignSelf: "center",
    marginTop: verticalScale(10)
  }
});

export default styles;
