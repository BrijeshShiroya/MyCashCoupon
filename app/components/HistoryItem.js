import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import icons from '../assets/icons';
import strings from '../constants/Strings';
import colors from '../theme/Colors';
import styles from './styles/HistoryItemStyles';

export const BalanceType = {
  added: '1',
  withdraw: '2'
}

const HistoryItem = ({ types = BalanceType?.added, transaction_date = '--', amount = '--', label = '--' }) => {
  const image = types === BalanceType.added ? icons.addMoney : icons.withdrawMoney
  const color = types === BalanceType?.added ? colors.themeGreen : colors.tabSelected
  return (
    <View style={styles.container}>
      <FastImage source={image} style={styles.icon} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{label}</Text>
        <Text style={styles.date}>{transaction_date}</Text>
      </View>
      <Text style={[styles.price, { color }]}>{strings.rs + ' ' + amount}</Text>
    </View>
  );
};

export default HistoryItem;
