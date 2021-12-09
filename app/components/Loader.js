import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../theme/Colors';
import styles from './styles/LoaderStyles';

const Loader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.indicator}>
                <ActivityIndicator color={colors.white} size={'large'} />
            </View>
        </View>
    );
};

export default Loader;
