import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, scale, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        padding: 20
    },
    headerTitle: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.h5,
        color: Colors.themeBlack,
        marginTop: verticalScale(44),
    },
    welcomeBack: {
        marginTop: 5,
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.medium,
        color: Colors.themeBlack,
    },
    amountContainer: {
        flex: 1,
    },
    withdraw: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        paddingHorizontal: verticalScale(12),
        paddingBottom: verticalScale(14),
        alignItems: "center",
        justifyContent: 'space-between'
    },
    balanceContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        paddingVertical: verticalScale(20),
        paddingHorizontal: scale(12),
        marginTop: verticalScale(28)
    },
    balance: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.medium,
        color: Colors.themeGrey,
    },
    barcode: {
        height: 81,
        width: 81
    },
    historyIcon: {
        height: 12,
        width: 14,
        marginRight: 3
    },
    history: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.medium,
        color: Colors.themeBlack,
    },
    historyContainer: {
        flexDirection: 'row',
        paddingRight: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    withdrawButton: {
        backgroundColor: Colors.themeBlack,
        paddingVertical: 6,
        paddingHorizontal: 17
    },
    buttonTitle: {
        color: Colors.white,
        fontSize: Fonts.size.medium
    },
    sep: {
        width: 120,
        height: 1,
        backgroundColor: Colors.themeGrey,
        marginTop: verticalScale(16)
    },
    rs: {
        marginRight: 3,
        marginTop: 7,
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.h1,
        color: Colors.themeGrey,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 0,
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.h1,
        color: Colors.themeBlack,
        marginTop: 5
    },
    itemSep: {
        width: 20
    },
    cashbackList: {
        marginTop: verticalScale(18)
    },
    listHeader: {
        marginTop: verticalScale(18),
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.input,
        color: Colors.themeBlack,
    }
});

export default styles;
