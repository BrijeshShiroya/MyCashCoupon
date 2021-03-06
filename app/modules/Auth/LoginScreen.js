import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, View, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';
import icons from '../../assets/icons';
import { BottomLineButton, CustomButton, CustomTextInput, Loader } from '../../components';
import strings from '../../constants/Strings';
import colors from '../../theme/Colors';
import styles from './styles/LoginScreenStyles';
import appConstants from '../../constants/AppConsts';
import { useDispatch, useSelector } from 'react-redux';
import AuthTypes from '../../redux/AuthRedux';


const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { fetching } = useSelector(state => state.auth);

    const forgotPress = () => {

    }

    const onCreatePress = () => {
        navigation.navigate('RegisterScreen')
    }

    const onLoginPress = () => {
        if (appConstants.email_reg.test(email?.trim()) === false) {
            Alert.alert(strings.myCashCoupon, strings.invalidEmail);
        } else if (password?.trim() === '') {
            Alert.alert(strings.myCashCoupon, strings.invalidPassword);
        } else {
            Keyboard.dismiss();
            dispatch(AuthTypes.authRequest(email.toLocaleLowerCase(), password));
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container} >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <FastImage source={icons.logo} style={styles.logo} resizeMode={FastImage.resizeMode.contain} />
                    <Text style={styles.title}>{strings.myCashCoupon.toUpperCase()}</Text>
                    <CustomTextInput
                        value={email}
                        placeholder={strings.email}
                        keyboardType={'email-address'}
                        style={styles.input}
                        containerStyle={styles.emailContainer}
                        onChangeText={text => setEmail(text)}
                    />
                    <CustomTextInput
                        secureTextEntry
                        value={password}
                        placeholder={strings.password}
                        style={styles.input}
                        containerStyle={styles.passwordContainer}
                        onChangeText={text => setPassword(text)}
                    />
                    <View style={styles.buttonContainer}>
                        <CustomButton title={strings.loginButton} onPress={onLoginPress} />
                        <BottomLineButton title={strings.forgotPassword} onPress={forgotPress} />
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.stillWithout}>
                            {strings.stillWithout}
                        </Text>
                        <BottomLineButton title={strings.createOne} onPress={onCreatePress} textColor={colors.themeOrange} lineColor={colors.lightOrange} />
                    </View>
                </ScrollView>
            </View>
            {fetching && <Loader />}
        </View>
    );
};

export default LoginScreen;
