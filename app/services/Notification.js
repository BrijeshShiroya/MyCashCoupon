import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import { Platform } from 'react-native';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const generateFirebaseToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log({ token });
};

export const onMessageReceived = async message => {
  // Do something
  const channelId = await notifee.createChannel({
    id: 'default',
    name: '@writeway'
  });
  await notifee.displayNotification({
    title: message?.notification?.title,
    body: message?.notification?.body,
    ios: {
      sound: 'default'
    },
    android: {
      channelId,
      smallIcon: 'ic_notification'
    },
  });
};

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(Platform.OS === 'ios' ? onMessageReceived : () => null);
