import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { CustomButton, CustomHeader, CustomTextInput, WalletBalance } from '../../components';
import strings from '../../constants/Strings';
import { isAmountValid, isEnoughBalance, showAlert } from '../../services/Utils';
import styles from './styles/WithdrawScreenStyles';

const WithdrawScreen = ({ navigation }) => {
  const dispatch = useDispatch();
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
        title={strings.withdraw}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <WalletBalance title={strings.currentBalance} amount={user?.wallet || '0'} />
      <View style={styles.withDrawContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.rs}>{strings.rs}</Text>
          <CustomTextInput
            numberOfLines={1}
            value={withdrawAmount}
            keyboardType={'number-pad'}
            placeholder={''}
            style={styles.input}
            containerStyle={styles.emailContainer}
            onChangeText={text => setWithdrawAmount(text)}
          />
        </View>
        <View style={styles.bottomLine} />
        <Text style={styles.limit}>{`You can withdraw min. ${min_withdraw} and maximum upto ${max_withdraw}.`}</Text>
      </View>
      <CustomButton
        title={strings.withdraw}
        style={styles.withdrawButton}
        titleStyle={styles.buttonTitle}
        onPress={onWithdrawPress} />
    </View>
  );
};

export default WithdrawScreen;
