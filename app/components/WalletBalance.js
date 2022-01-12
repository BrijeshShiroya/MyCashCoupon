import React from 'react';
import { Text, View } from 'react-native';
import strings from '../constants/Strings';
import styles from './styles/WalletBalanceStyles';

const WalletBalance = ({ amount, title = strings.balance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>{title}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.rs}>{strings.rs}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
};

export default WalletBalance;
