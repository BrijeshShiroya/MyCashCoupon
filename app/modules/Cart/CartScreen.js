import React from 'react';
import { FlatList, View } from 'react-native';
import icons from '../../assets/icons';
import { CartItem, CustomHeader } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/CartScreenStyles';


const CartScreen = ({ navigation }) => {
  const data = [1, 2, 3, 4, 5, 6, 7]

  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        left
        title={strings.cashbackStores}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <FlatList data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={({ item }) => <CartItem icon={icons.caskbackbg} />}
      />
    </View>
  );
};

export default CartScreen;
