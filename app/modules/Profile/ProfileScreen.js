import React from 'react';
import { Alert, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import strings from '../../constants/Strings';
import styles from './styles/ProfileScreenStyles';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    Alert.alert(strings.myCashCoupon, strings.logoutConfirmation, [
      { text: strings.cancel, style: 'cancel' },
      {
        text: strings.logout,
        style: 'destructive',
        onPress: () => dispatch({ type: 'LOGOUT' }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text onPress={onLogout}>Logout</Text>
    </View>
  );
};

export default ProfileScreen;
