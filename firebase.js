import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbs3BR26Xexro6U7VFZqyj5amYP6y_A6I",
  authDomain: "link-tautan-a0fab.firebaseapp.com",
  projectId: "link-tautan-a0fab",
  storageBucket: "link-tautan-a0fab.firebasestorage.app",
  messagingSenderId: "2749075402",
  appId: "1:2749075402:web:0ed70ba45845186bb04933"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
