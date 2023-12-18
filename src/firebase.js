import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl_mVvBJeM41dxyxGfgnP-6y6FBC68kto",
  authDomain: "sihproject-5c912.firebaseapp.com",
  databaseURL: "https://sihproject-5c912-default-rtdb.firebaseio.com",
  projectId: "sihproject-5c912",
  storageBucket: "sihproject-5c912.appspot.com",
  messagingSenderId: "794667923049",
  appId: "1:794667923049:web:1595971c48679423a594f8",
  measurementId: "G-D046H5GK8M"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;