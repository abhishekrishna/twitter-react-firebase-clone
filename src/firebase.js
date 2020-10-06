import firebase from 'firebase';

// eslint-disable-next-line
const firebaseConfig = {
    apiKey: "AIzaSyDWT_-asdNlLmTMzU99UXBuzRzjTuo9i50",
    authDomain: "twitter-clone-8b8b5.firebaseapp.com",
    databaseURL: "https://twitter-clone-8b8b5.firebaseio.com",
    projectId: "twitter-clone-8b8b5",
    storageBucket: "twitter-clone-8b8b5.appspot.com",
    messagingSenderId: "645918994372",
    appId: "1:645918994372:web:6a1a6fee989cfdb515be91",
    measurementId: "G-F2ZXQGFXJ4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;