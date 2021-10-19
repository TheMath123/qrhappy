import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_IR,
  // appId: process.env.REACT_APP_API_ID
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