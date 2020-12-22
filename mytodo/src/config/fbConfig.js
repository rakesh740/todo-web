import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyC8ErHsV5JCAMm_QhmMWwVMw2uRGln2WEg",
    authDomain: "task-app-beta.firebaseapp.com",
    projectId: "task-app-beta",
    storageBucket: "task-app-beta.appspot.com",
    messagingSenderId: "45098825214",
    appId: "1:45098825214:web:d2c10592b49ea28a937caf",
    measurementId: "G-0N0XR8PQ85"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;