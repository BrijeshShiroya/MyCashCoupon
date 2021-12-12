import React from 'react';
import { Text, View } from 'react-native';
import icons from '../../assets/icons';
import { CustomHeader } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/CartScreenStyles';

const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        left
        title={strings.history}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default CartScreen;
