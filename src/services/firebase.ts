import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCZoTpzqIg_De4zbLwjvooYRIYtpviB4nw",
  authDomain: "qrhappy-123.firebaseapp.com",
  databaseURL: "https://qrhappy-123-default-rtdb.firebaseio.com",
  projectId: "qrhappy-123",
  storageBucket: "qrhappy-123.appspot.com",
  messagingSenderId: "941897608992",
  appId: "1:941897608992:web:0380477bbec18768e27145",
  measurementId: "G-RJY26776EX"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }