import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import strings from '../constants/Strings';
import colors from '../theme/Colors';
import styles from './styles/WalletBalanceStyles';

const WalletBalance = ({ amount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>{strings.balance}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.rs}>{strings.rs}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
};

export default WalletBalance;
