// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
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

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});