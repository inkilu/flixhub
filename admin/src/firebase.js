import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "flixhub-4b629.firebaseapp.com",
  projectId: "flixhub-4b629",
  storageBucket: "flixhub-4b629.appspot.com",
  messagingSenderId: "551508198428",
  appId: "1:551508198428:web:145487e3e32be24a49cbd9",
  measurementId: "G-BVK9B8ZJQB"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
