import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyDR1q7DKX5hll5N7djrwgqP1Z15lwwI_Vc",
  authDomain: "slack-22dc7.firebaseapp.com",
  databaseURL: "https://slack-22dc7.firebaseio.com",
  projectId: "slack-22dc7",
  storageBucket: "slack-22dc7.appspot.com",
  messagingSenderId: "617678830880",
  appId: "1:617678830880:web:cb1658ce5d0eb093ffeb45",
  measurementId: "G-7JBHEM8HPQ"
};
firebase.initializeApp(config);

export default firebase;
