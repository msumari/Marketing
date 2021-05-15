import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChA_kkbOqKej0RfK9gYuVTODOu_Fq43eY",
  authDomain: "ecommerce-2050.firebaseapp.com",
  databaseURL: "https://ecommerce-2050.firebaseio.com",
  projectId: "ecommerce-2050",
  storageBucket: "ecommerce-2050.appspot.com",
  messagingSenderId: "471580670290",
  appId: "1:471580670290:web:01d3aa94b42dc98c81228b",
  measurementId: "G-R4DZ1EV93T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
