import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyAsJYDFVbU7e_b2UTUNy__7bLaG4vRujQg",
  authDomain: "e-ride-3ba44.firebaseapp.com",
  projectId: "e-ride-3ba44",
  storageBucket: "e-ride-3ba44.appspot.com",
  messagingSenderId: "411492452659",
  appId: "1:411492452659:web:684ea4dc3c3221163a1646"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
