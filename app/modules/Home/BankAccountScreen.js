import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { CustomButton, CustomHeader, CustomTextInput, WalletBalance } from '../../components';
import strings from '../../constants/Strings';
import { isAmountValid, isEnoughBalance, showAlert } from '../../services/Utils';
import styles from './styles/BankAccountScreenStyles';

const BankAccountScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const amount = route?.params?.amount || '0'
  const [withdrawAmount, setWithdrawAmount] = useState('1000')
  const { min_withdraw, max_withdraw } = useSelector(state => state.config.configData)
  const { user } = useSelector(state => state.auth)

  const onWithdrawPress = () => {
    if (!isEnoughBalance(user?.wallet, withdrawAmount)) {
      showAlert(strings.notEnoughBalance)
    } else if (!isAmountValid(withdrawAmount, min_withdraw, max_withdraw)) {
      showAlert(strings.invalidAmount)
    } else {
      showAlert('Valid')
    }
  }

  return (
    <View>
      <CustomHeader
        left
        title={strings.bankAccounts}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <WalletBalance title={strings.withdrawalAmount} amount={amount} />
      <CustomButton
        title={strings.withdraw}
        style={styles.withdrawButton}
        titleStyle={styles.buttonTitle}
        onPress={onWithdrawPress} />
    </View>
  );
};

export default BankAccountScreen;
