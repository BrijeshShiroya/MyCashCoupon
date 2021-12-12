import React from 'react';
import { FlatList, Text, View } from 'react-native';
import icons from '../../assets/icons';
import { CustomHeader, HistoryItem, WalletBalance } from '../../components';
import { BalanceType } from '../../components/HistoryItem';
import strings from '../../constants/Strings';
import styles from './styles/HistoryScreenStyles';

const HistoryScreen = () => {
  const data = [
    { type: BalanceType.added, date: '10-Nov-2021', price: '200' },
    { type: BalanceType.added, date: '12-Nov-2021', price: '310' },
    { type: BalanceType.withdraw, date: '14-Nov-2021', price: '150' },
    { type: BalanceType.added, date: '16-Nov-2021', price: '180' },
    { type: BalanceType.added, date: '18-Nov-2021', price: '180' },
    { type: BalanceType.added, date: '20-Nov-2021', price: '180' },
    { type: BalanceType.added, date: '01-Dec-2021', price: '180' },
  ]
  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        left
        title={strings.history}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={() => <WalletBalance amount={'5000'} />}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={({ item }) => <HistoryItem {...item} />}
      />
    </View>
  );
};

export default HistoryScreen;
