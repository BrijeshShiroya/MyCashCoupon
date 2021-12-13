import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import icons from '../assets/icons';
import colors from '../theme/Colors';
import styles from './styles/CashbackItemStyles';

const CashbackItem = ({ title = 'Amazon', onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
      <FastImage source={icons.pen} style={styles.icon} resizeMode={FastImage.resizeMode.contain} />
      <View style={styles.sep} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CashbackItem;
