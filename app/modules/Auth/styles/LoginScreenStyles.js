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
    input: {
        height: 48
    }
});

export default styles;
