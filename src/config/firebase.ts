import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlgmjM535qrQXpOXaac7csPbvcofjjAsE",
  authDomain: "social-media-platform-f0d4c.firebaseapp.com",
  projectId: "social-media-platform-f0d4c",
  storageBucket: "social-media-platform-f0d4c.appspot.com",
  messagingSenderId: "900699341682",
  appId: "1:900699341682:web:f93c0fd471a34f9670d3eb",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
