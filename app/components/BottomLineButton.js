import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../theme/Colors';
import styles from './styles/BottomLineButtonStyles';

const BottomLineButton = ({ onPress, style, title, textColor = colors.themePurple, lineColor = colors.lightPurple }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.buttonTouchable, style]}
    onPress={onPress}>
    <Text style={[styles.buttonText, { color: textColor }]} textBreakStrategy={'simple'}>
      {title}
    </Text>
    <View style={[styles.separate, { backgroundColor: lineColor }]} />
  </TouchableOpacity>
);

BottomLineButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  title: PropTypes.string,
};

export default BottomLineButton;
