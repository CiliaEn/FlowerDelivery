import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, initializeAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { app } from "./firebaseManager";

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

// Function to handle sign in
const handleSignIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Handle successful sign in (navigate to another screen, etc.)
  } catch (err) {
    return err.message;
  }
};

// Function to handle sign up
const handleSignUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // Handle successful sign up (navigate to another screen, etc.)
  } catch (err) {
    return err.message;
  }
};

export { auth, handleSignIn, handleSignUp };
