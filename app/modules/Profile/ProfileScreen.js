import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ProfileScreenStyles';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('LoginScreen')}>Logout</Text>
    </View>
  );
};

export default ProfileScreen;
