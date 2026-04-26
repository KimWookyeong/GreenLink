import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBSBj2OghjVc6_lpE1yODy4mak8C-a1Xic",
  authDomain: "greenlink-31c0b.firebaseapp.com",
  databaseURL:
    "https://greenlink-31c0b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "greenlink-31c0b",
  storageBucket: "greenlink-31c0b.firebasestorage.app",
  messagingSenderId: "936943481363",
  appId: "1:936943481363:web:b5fe0596648141b35545e6",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);