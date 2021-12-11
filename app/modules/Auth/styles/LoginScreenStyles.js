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
    logo: {
        height: verticalScale(96),
        width: verticalScale(83),
        marginTop: verticalScale(75),
        alignSelf: 'center',
    },
    title: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.h5,
        color: Colors.darkBlue,
        marginTop: verticalScale(32),
        alignSelf: 'center'
    },
    emailContainer: {
        marginTop: verticalScale(120),
    },
    passwordContainer: {
        marginTop: verticalScale(18),
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: verticalScale(40),
        justifyContent: 'space-between'
    },
    bottomContainer: {
        marginTop: verticalScale(125),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    stillWithout: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.regular,
        color: colors.inputColor,
        alignSelf: 'center',
        marginBottom: 6,
        marginRight: 4
    },

});

export default styles;
