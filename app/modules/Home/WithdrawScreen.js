import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { CustomHeader, WalletBalance } from '../../components';
import strings from '../../constants/Strings';

const WithdrawScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)

  return (
    <View>
      <CustomHeader
        left
        title={strings.withdraw}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <WalletBalance title={strings.currentBalance} amount={user?.wallet || '0'} />
    </View>
  );
};

export default WithdrawScreen;
