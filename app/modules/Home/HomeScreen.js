import React, { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import icons from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import { CashbackItem, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
    const [amount, setAmount] = useState('5000')
    const data = [
        { title: 'Amazon' },
        { title: 'Big bazar' },
        { title: 'Flipkart' },
        { title: 'Myntra' },
        { title: 'Ajio' },
    ]

    const onBarcodePress = () => {

    }

    const onWithdrawPress = () => {

    }

    const onHistoryPress = () => {
        navigation.navigate('HistoryStack')
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.headerTitle}>Hi, Murtaza</Text>
                <Text style={styles.welcomeBack}>{strings.welcomeBack}</Text>
                <View style={styles.balanceContainer}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.balance}>{strings.balance}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.rs}>{strings.rs}</Text>
                            <CustomTextInput
                                value={amount}
                                keyboardType={'number-pad'}
                                placeholder={''}
                                style={styles.input}
                                containerStyle={styles.emailContainer}
                                onChangeText={text => setAmount(text)} />
                        </View>
                        <View style={styles.sep} />
                    </View>
                    <TouchableOpacity onPress={onBarcodePress} activeOpacity={0.5}>
                        <FastImage source={icons.barcode} style={styles.barcode} />
                    </TouchableOpacity>
                </View>
                <View style={styles.withdraw}>
                    <CustomButton
                        title={strings.withdraw}
                        style={styles.withdrawButton}
                        titleStyle={styles.buttonTitle}
                        onPress={onWithdrawPress} />
                    <TouchableOpacity style={styles.historyContainer} onPress={onHistoryPress}>
                        <FastImage source={icons.tabHistory} style={styles.historyIcon} />
                        <Text style={styles.history}>{strings.history}</Text>
                    </TouchableOpacity>
                </View>
                <>
                    <Text style={styles.listHeader}>{strings.topCashback}</Text>
                    <FlatList
                        horizontal
                        contentContainerStyle={styles.cashbackList}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        ItemSeparatorComponent={() => <View style={styles.itemSep} />}
                        renderItem={({ item }) => <CashbackItem {...item} />} />
                </>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
