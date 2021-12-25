import React from 'react';
import { Alert, View } from 'react-native';
import { QRScannerView } from 'react-native-qrcode-scanner-view';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton } from '../../components';
import strings from '../../constants/Strings';
import AuthTypes from '../../redux/AuthRedux';
import Api from '../../services/Api';
import { showAlert } from '../../services/Utils';
import styles from './styles/QRScanScreenStyles';
const api = Api.home();


const QRScanScreen = ({ navigation }) => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const scanCoupon = async (coupon_code) => {
    const payload = {
      coupon_code,
      user_id: user?.id
    }
    const response = await api.getcoupon(payload);
    if (response?.data?.status === 200 &&
      !response?.data?.error &&
      response?.data?.messages === 'Coupon data') {
      showAlert(strings.couponAdded)
      dispatch(AuthTypes.updateWallet(response?.data?.wallet))
    } else {
      alert(response?.data?.messages)
    }
  }

  const onSuccess = e => {
    navigation.goBack()
    Alert.alert(
      strings.myCashCoupon,
      strings.confirmCoupon(e.data),
      [
        {
          text: strings.cancel,
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: strings.ok,
          onPress: () => scanCoupon(e.data)
        }
      ]
    )
  };

  const onCancel = () => {
    navigation.goBack()
  }

  const footer = () => {
    return (
      <View style={styles.footerContainer}>
        <CustomButton style={styles.cancelButton} titleStyle={styles.buttonTitle} title={strings.cancel} onPress={onCancel} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <QRScannerView
        hintText={strings.couponScanHint}
        onScanResult={onSuccess}
        scanBarAnimateReverse={true}
        renderFooterView={footer}
      />
    </View>
  );
};

export default QRScanScreen;
