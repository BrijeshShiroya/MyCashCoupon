import apisauce from 'apisauce';
import { Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import strings from '../constants/Strings';

export const messages = {
  productAdded: 'Product added in cart successfully.',
  productUpdated: 'Product updated in cart successfully.',
  stockNotAvailable: 'Stock not available',
  noDataFound: 'No data found',
};

export const apiConfig = baseURL =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: { 'Cache-Control': 'no-cache' },
  });

export async function getError(response) {
  // if (response.problem === 'CLIENT_ERROR') return response.data.error;
  if (response?.messages) {
    return response?.messages;
  }
  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.message)) {
    return 'Server is not available';
  }
  return 'Something went wrong';
}

export const getPriceWithSymbol = (price = '--') => {
  return `₹ ${price}`;
};

export const getDeviceId = async () => {
  return await DeviceInfo.getUniqueId();
};

export const showAlert = message => {
  Alert.alert(strings.myCashCoupon, message);
};