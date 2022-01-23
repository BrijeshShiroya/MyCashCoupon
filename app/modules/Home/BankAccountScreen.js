import React, { useEffect, useState } from 'react';
import { FlatList, Platform, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { CustomButton, CustomHeader, Loader, WalletBalance } from '../../components';
import strings from '../../constants/Strings';
import AuthTypes from '../../redux/AuthRedux';
import API from '../../services/Api';
import styles from './styles/BankAccountScreenStyles';
const api = API.home();

const BankAccountItem = ({ onPress }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>9974979279@apl.com</Text>
      <Text style={styles.itemSubTitle}>UPI ID</Text>
      <CustomButton
        title={strings.confirm}
        style={styles.withdrawButton}
        titleStyle={styles.buttonTitle}
        onPress={onPress} />
    </View>
  )
}

const BankAccountScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const amount = route?.params?.amount || '0'
  const [listBank, setListBank] = useState([])
  const [loading, setLoading] = useState(false)
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    const getBankList = async () => {
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
    }
    getBankList()
  }, [])

  const onConfirmPress = async () => {
    const payload = {
      user_id: user?.id,
      amount: `${amount}`,
      user_account_id: user?.id,
      withdrawal_mode: "1",
      device_type: Platform.OS,
      device_id: 'device_id',
      status: "1"
    }
    try {
      setLoading(true)
      const response = await api.withdrawal(payload);
      setLoading(false)
      if (response?.data?.status === 200 && !response?.data?.error) {
        dispatch(AuthTypes.updateWallet(response?.data?.wallet))
      } else {
        Toast.show({
          type: 'info',
          position: 'bottom',
          text2: strings.somethingWentWrong,
        });
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <CustomHeader
        left
        title={strings.bankAccounts}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <WalletBalance title={strings.withdrawalAmount} amount={amount} />
      <FlatList
        contentContainerStyle={{ flexGrow: 0 }}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        data={listBank}
        renderItem={({ item }) => <BankAccountItem {...item} onPress={onConfirmPress} />}
      />
      {loading && <Loader />}
    </View>
  );
};

export default BankAccountScreen;
