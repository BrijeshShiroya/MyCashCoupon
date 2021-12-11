import PropTypes from 'prop-types';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors } from '../theme';
import colors from '../theme/Colors';
import styles from './styles/CustomTextInputStyles';

const LeftView = ({ leftIcon, onPress }) => (
  <TouchableOpacity style={styles.leftView} onPress={onPress}>
    <FastImage
      source={leftIcon}
      style={styles.leftIcon}
      resizeMode={FastImage.resizeMode.contain}
    />
  </TouchableOpacity>
);

const CustomTextInput = ({
  style,
  containerStyle,
  error,
  placeholder = '',
  placeholderTextColor = Colors.white,
  blurOnSubmit = true,
  returnKeyType = 'done',
  onLeftPress,
  leftIcon,
  ...otherProps
}) => (
  <View style={containerStyle}>
    <TextInput
      style={[styles.textInput, style, error && styles.redBorder]}
      placeholder={placeholder}
      placeholderTextColor={colors.inputColor}
      blurOnSubmit={blurOnSubmit}
      returnKeyType={returnKeyType}
      {...otherProps}
    />
    {onLeftPress && <LeftView onPress={onLeftPress} leftIcon={leftIcon} />}
  </View>
);

CustomTextInput.propTypes = {
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  error: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  returnKeyType: PropTypes.string,
  placeholder: PropTypes.string,
  onLeftPress: PropTypes.func,
  leftIcon: PropTypes.object,
};

export default CustomTextInput;
