import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5TI8ycNDRG7vqW1Vv6rfNu1oQE6MqdrA",
  authDomain: "chat-app-8dfba.firebaseapp.com",
  projectId: "chat-app-8dfba",
  storageBucket: "chat-app-8dfba.appspot.com",
  messagingSenderId: "340770013687",
  appId: "1:340770013687:web:58baea4e940cee98c6eef2",
  measurementId: "G-KH4H3R3YJF"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
