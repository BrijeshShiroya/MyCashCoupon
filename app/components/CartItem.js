import React from 'react';
import FastImage from "react-native-fast-image";
import styles from './styles/CartItemStyles'

const CartItem = (props) => {
  return (
    <FastImage source={props.icon} style={styles.container} />
  )
}

export default CartItem;