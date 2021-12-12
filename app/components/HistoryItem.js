import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import icons from '../assets/icons';
import strings from '../constants/Strings';
import colors from '../theme/Colors';
import styles from './styles/HistoryItemStyles';

export const BalanceType = {
  added: 'MoneyAdded',
  withdraw: 'Withdraw'
}

const HistoryItem = ({ type = BalanceType?.added, date = '--', price = '--' }) => {
  const image = type === BalanceType.added ? icons.addMoney : icons.withdrawMoney
  const color = type === BalanceType?.added ? colors.themeGreen : colors.tabSelected
  return (
    <View style={styles.container}>
      <FastImage source={image} style={styles.icon} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={[styles.price, { color }]}>{strings.rs + ' ' + price}</Text>
    </View>
  );
};

export default HistoryItem;
