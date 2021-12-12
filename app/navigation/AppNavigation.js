import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { forwardRef } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from '../modules/Auth/LoginScreen';
import RegisterScreen from '../modules/Auth/RegisterScreen';
import HomeScreen from '../modules/Home/HomeScreen';

const Stack = createNativeStackNavigator();

const RootStackScreen = (props, ref) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default forwardRef(RootStackScreen);
