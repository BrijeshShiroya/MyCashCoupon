import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import { NoInternet } from '../components'
import { useDispatch } from 'react-redux';
import AppNavigation from '../navigation/AppNavigation';
import { ApplicationStyles, Colors } from '../theme';
import ConfigTypes from '../redux/ConfigRedux'

const RootContainer = () => {
  const navRef = useRef();
  const netInfo = useNetInfo();
  const dispatch = useDispatch()

  const [internet, setInternet] = useState(netInfo.isConnected);

  useEffect(() => {
    dispatch(ConfigTypes.configRequest())
  }, [dispatch])

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setInternet(state.isConnected);
    });
    unsubscribe();
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <View style={[ApplicationStyles.screen.mainContainer]}>
      <StatusBar barStyle={'dark-content'} />
      <AppNavigation ref={navRef} />
      <Toast ref={ref => Toast.setRef(ref)} />
      {/* <AppUpdateModal /> */}
      {!internet && <NoInternet />}
    </View>
  );
};

export default RootContainer;
