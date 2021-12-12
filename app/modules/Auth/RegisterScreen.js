import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BottomLineButton, CustomButton, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import colors from '../../theme/Colors';
import styles from './styles/RegisterScreenStyles';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSignupPress = () => {

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
    </View>
  );
};

export default RegisterScreen;
