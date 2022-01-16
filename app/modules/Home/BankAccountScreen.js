import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { CustomButton, CustomHeader, WalletBalance } from '../../components';
import strings from '../../constants/Strings';
import API from '../../services/Api';
import styles from './styles/BankAccountScreenStyles';
const api = API.home();

const BankAccountScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const amount = route?.params?.amount || '0'
  const [listBank, setListBank] = useState([])
  const [loading, setLoading] = useState(false)
  const { user } = useSelector(state => state.auth)

  useEffect(async () => {
    const payload = {
      user_id: user?.id
    }
    try {
      setLoading(true)
      const response = await api.getuserbank(payload);
      setLoading(false)
      if (response?.data?.status === 200 && !response?.data?.error) {
        setListBank(response?.data?.data)
      } else {
        Toast.show({
          type: 'info',
          position: 'bottom',
          text2: strings.somethingWentWrong,
        });
        setListBank([])
      }
    } catch (error) {
      setLoading(false)
    }
  }, [])

  return (
    <View>
      <CustomHeader
        left
        title={strings.bankAccounts}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <WalletBalance title={strings.withdrawalAmount} amount={amount} />
      <FlatList data={listBank} renderItem={({ item }) => <Text>{item?.type}</Text>} />
      <CustomButton
        title={strings.withdraw}
        style={styles.withdrawButton}
        titleStyle={styles.buttonTitle}
        onPress={() => { }} />
    </View>
  );
};

export default BankAccountScreen;
