// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
   importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-analytics.js');
   importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js')

   if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
  }
   
// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  messagingSenderId: "975118271133",
  appId: "1:975118271133:web:7fa12577c88bd498e00a74",
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