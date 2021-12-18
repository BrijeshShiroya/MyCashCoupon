import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BottomLineButton, CustomButton, CustomTextInput, Loader } from '../../components';
import appConstants from '../../constants/AppConsts';
import strings from '../../constants/Strings';
import AuthTypes from '../../redux/AuthRedux';
import { showAlert } from '../../services/Utils';
import colors from '../../theme/Colors';
import styles from './styles/RegisterScreenStyles';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const { fetching } = useSelector(state => state.auth);

  const onSignupPress = () => {
    if (name?.trim() === '') {
      showAlert(strings.invalidName);
    } else if (mobile?.trim() === '') {
      showAlert(strings.invalidMobile);
    } else if (mobile?.trim().length < 10) {
      showAlert(strings.mobileLength);
    } else if (appConstants.email_reg.test(email?.trim()) === false) {
      showAlert(strings.invalidEmail);
    } else if (username?.trim() === '') {
      showAlert(strings.invalidUsername);
    } else if (password?.trim() === '') {
      showAlert(strings.invalidPassword);
    } else if (password?.trim() !== cPassword?.trim()) {
      showAlert(strings.passwordMismatch);
    } else {
      Keyboard.dismiss();
      dispatch(
        AuthTypes.registerRequest(
          email?.toLocaleLowerCase(),
          name,
          name,
          mobile,
          password,
        ),
      );
    }
  }

  const onLoginPress = () => {
    navigation.navigate('LoginScreen')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container} >
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{strings.signup}</Text>
          <Text style={styles.subTitle}>{strings.signupSubTitle}</Text>
          <CustomTextInput
            value={name}
            placeholder={strings.name}
            style={styles.input}
            containerStyle={styles.nameContainer}
            onChangeText={text => setName(text)}
          />
          <CustomTextInput
            value={mobile}
            placeholder={strings.mobile}
            maxLength={10}
            keyboardType={'number-pad'}
            style={styles.input}
            containerStyle={styles.emailContainer}
            onChangeText={text => setMobile(text)}
          />
          <CustomTextInput
            value={email}
            placeholder={strings.email}
            keyboardType={'email-address'}
            style={styles.input}
            containerStyle={styles.emailContainer}
            onChangeText={text => setEmail(text)}
          />
          <CustomTextInput
            value={username}
            placeholder={strings.username}
            style={styles.input}
            containerStyle={styles.emailContainer}
            onChangeText={text => setUsername(text)}
          />
          <CustomTextInput
            secureTextEntry
            value={password}
            placeholder={strings.password}
            style={styles.input}
            containerStyle={styles.emailContainer}
            onChangeText={text => setPassword(text)}
          />
          <CustomTextInput
            secureTextEntry
            value={cPassword}
            placeholder={strings.confirmPassword}
            style={styles.input}
            containerStyle={styles.emailContainer}
            onChangeText={text => setCPassword(text)}
          />
          <View style={styles.buttonContainer}>
            <CustomButton title={strings.signup} onPress={onSignupPress} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.stillWithout}>
              {strings.alreadyAccount}
            </Text>
            <BottomLineButton title={strings.loginButton} onPress={onLoginPress} textColor={colors.themePurple} lineColor={'transparent'} />
          </View>
        </ScrollView>
      </View>
      {fetching && <Loader />}
    </View>
  );
};

export default RegisterScreen;
