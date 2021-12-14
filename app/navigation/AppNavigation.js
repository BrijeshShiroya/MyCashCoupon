import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import React, { forwardRef, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import icons from '../assets/icons';
import LoginScreen from '../modules/Auth/LoginScreen';
import RegisterScreen from '../modules/Auth/RegisterScreen';
import CartScreen from '../modules/Cart/CartScreen';
import HistoryScreen from '../modules/History/HistoryScreen';
import HomeScreen from '../modules/Home/HomeScreen';
import ProfileScreen from '../modules/Profile/ProfileScreen';
import colors from '../theme/Colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const iconStyle = (screenName, focused) => {
  let iconName;
  let iconSize;
  if (screenName === 'HomeStack') {
    iconName = icons.tabHome;
    iconSize = {
      height: 20,
      width: 20,
    };
  } else if (screenName === 'HistoryStack') {
    iconName = icons.tabHistory;
    iconSize = {
      height: 21,
      width: 24,
    };
  } else if (screenName === 'CartStack') {
    iconName = icons.tabCart;
    iconSize = {
      height: 20,
      width: 22,
    };
  } else if (screenName === 'ProfileStack') {
    iconName = icons.tabProfile;
    iconSize = {
      height: 22,
      width: 15,
    };
  }
  return {
    style: {
      ...iconSize,
      tintColor: focused ? colors.tabSelected : colors.darkBlue,
    },
    icon: iconName,
  };
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.themeWhite, borderRadius: 18 },
        tabBarIcon: ({ focused, color, size }) => {
          const { icon, style } = iconStyle(route.name, focused);
          return <Image source={icon} style={style} resizeMode={'contain'} />;
        },
        unmountOnBlur: true,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="HistoryStack" component={HistoryStack} />
      <Tab.Screen name="CartStack" component={CartStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const RootStackScreen = (props, ref) => {
  const { user } = useSelector(state => state.auth);

  const [authUser, setAuthUser] = useState(user)

  useEffect(() => {
    setAuthUser(user)
  }, [user])


  return (
    <SafeAreaProvider>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!authUser ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </>
          ) :
            <Stack.Screen name="TabBar" component={TabBar} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default forwardRef(RootStackScreen);
