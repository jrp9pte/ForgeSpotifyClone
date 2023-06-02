import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6KKEPP8jRvz9hqbRdAXwIJRSE8GJ6q8Y",
  authDomain: "forgespotifydb.firebaseapp.com",
  projectId: "forgespotifydb",
  storageBucket: "forgespotifydb.appspot.com",
  messagingSenderId: "480321244304",
  appId: "1:480321244304:web:fb4443537203aad8441c15",
  measurementId: "G-97J6ELGFL3",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
