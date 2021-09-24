// eslint - disable - next - line;
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuJLtMixN7Ex_WnW71j7KHarzix6Jcl-o",
  authDomain: "invoice-app-bfe69.firebaseapp.com",
  projectId: "invoice-app-bfe69",
  storageBucket: "invoice-app-bfe69.appspot.com",
  messagingSenderId: "192413687575",
  appId: "1:192413687575:web:64932d03014817352be152",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { auth, provider, db };
