import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import 'firebase/compat/storage'; 
import 'firebase/compat/analytics'
import 'firebase/compat/messaging';

const SERVER_KEY_MESSAGE = "BBcHY4Z4zvitV931PthOtJfoNDpr3qW8O9cdUgZ_cm2D0HX5qut_IKJitLBGLMepF8ZNu-6bYJA-bGVuv7w-3x0"
var firebaseConfig = {
  apiKey: "AIzaSyCWR_9cNDnSpo59c-YCeC6BBi2IVRyEHyw",
  authDomain: "headphone-899cc.firebaseapp.com",
  projectId: "headphone-899cc",
  storageBucket: "headphone-899cc.appspot.com",
  messagingSenderId: "975118271133",
  appId: "1:975118271133:web:7fa12577c88bd498e00a74",
  measurementId: "G-3RCEQ439XG",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const messaging = firebase.messaging();
export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: SERVER_KEY_MESSAGE}).then((currentToken) => {
    if (currentToken) {
      // console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});