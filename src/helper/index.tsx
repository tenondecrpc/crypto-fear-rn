import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';

const sendPushToken = async () => {
  try {
    const token = await messaging().getToken();
    if (token) {
      firestore()
        .collection('users')
        .doc(firebase.app().options.appId)
        .set({
          token,
          timestamp: Date.now(),
        })
        .then(() => {
          console.info('TOKEN_SENT');
        });
    }
  } catch (error) {
    console.info('ERROR_TOKEN', error);
  }
};

const requestPushPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.info('AUTH_STATUS', authStatus);
    sendPushToken();
  }
};

const getBackgroundNotification = async () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.info('BACKGROUND_MESSAGE', remoteMessage);
  });
};

export {requestPushPermission, getBackgroundNotification};
