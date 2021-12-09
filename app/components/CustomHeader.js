import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../assets/icons';
import styles from './styles/CustomHeaderStyles';

const leftSection = (leftIcon, leftIconStyle, leftOnPress) => (
    <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={styles.hitSlop}
        onPress={leftOnPress}>
        <FastImage source={leftIcon} style={[styles.iconStyle, leftIconStyle]} />
    </TouchableOpacity>
);

const centerSection = (title, titleStyle) => (
    <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={[styles.title, titleStyle]}>
        {title}
    </Text>
);

const centerLogoSection = (title, titleStyle) => (
    <Image
        source={icons.logo}
        style={styles.logo}
        resizeMode={FastImage.resizeMode.contain}
    />
);

const rightSection = (rightIcon, rightIconStyle, rightOnPress) => (
    <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={styles.hitSlop}
        onPress={rightOnPress}>
        <FastImage
            source={rightIcon}
            style={[styles.iconStyle, rightIconStyle]}
            resizeMode={FastImage.resizeMode.contain}
        />
    </TouchableOpacity>
);

const CustomHeader = ({
    logo = false,
    title = 'Header',
    left = false,
    center = true,
    right = false,
    leftIcon,
    rightIcon,
    leftOnPress,
    rightOnPress,
    rightIconStyle,
    leftIconStyle,
    titleStyle,
    headerStyle,
}) => (
    <SafeAreaView
        style={[styles.headerContainer, headerStyle]}
        edges={['right', 'top', 'left']}>
        <View style={[styles.iconView, styles.left]}>
            {left && leftSection(leftIcon, leftIconStyle, leftOnPress)}
        </View>
        {logo ? centerLogoSection(logo) : centerSection(title, titleStyle)}

        <View style={[styles.iconView, styles.right]}>
            {right && rightSection(rightIcon, rightIconStyle, rightOnPress)}
        </View>
    </SafeAreaView>
);

CustomHeader.propTypes = {
    left: PropTypes.bool,
    logo: PropTypes.bool,
    right: PropTypes.bool,
    center: PropTypes.bool,
    title: PropTypes.string,
    leftIcon: PropTypes.number,
    rightIcon: PropTypes.number,
    leftOnPress: PropTypes.func,
    rightOnPress: PropTypes.func,
    titleStyle: PropTypes.object,
    rightIconStyle: PropTypes.object,
    leftIconStyle: PropTypes.object,
    headerStyle: PropTypes.object,
};

export default CustomHeader;
