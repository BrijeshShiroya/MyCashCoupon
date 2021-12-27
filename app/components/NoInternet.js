import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import icons from '../assets/icons';
import strings from '../constants/Strings';
import styles from './styles/NoInternetStyles';

const NoInternet = () => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <FastImage source={icons.noInternet} style={styles.image} />
      <Text style={styles.title}>{strings.noInternet}</Text>
      <Text style={styles.subTitle}>{strings.pleaseCheckInternet}</Text>
    </View>
  );
};

export default NoInternet;
