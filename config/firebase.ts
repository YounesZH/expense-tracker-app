// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT6lmeAvsHSPfvwaXY1xeMNTUAUubtgLs",
  authDomain: "finance-tracker-2e3bd.firebaseapp.com",
  projectId: "finance-tracker-2e3bd",
  storageBucket: "finance-tracker-2e3bd.firebasestorage.app",
  messagingSenderId: "31257370066",
  appId: "1:31257370066:web:b58a79c640f2658856fc0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);