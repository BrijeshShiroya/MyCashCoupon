import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { CustomButton, CustomHeader, CustomTextInput, WalletBalance } from '../../components';
import styles from './styles/WithdrawScreenStyles';
import strings from '../../constants/Strings';

const WithdrawScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [withdrawAmount, setWithdrawAmount] = useState('1000')
  const { user } = useSelector(state => state.auth)

  const onWithdrawPress = () => {

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
        <Text style={styles.limit}>{strings.withdrawLimit}</Text>
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
