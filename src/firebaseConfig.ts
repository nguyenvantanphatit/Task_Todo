import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQQZw7knjGqwK_jR14ILz8aCOnxfPDqPs",
  authDomain: "todo-list-7d99a.firebaseapp.com",
  projectId: "todo-list-7d99a",
  storageBucket: "todo-list-7d99a.appspot.com",
  messagingSenderId: "961691888080",
  appId: "1:961691888080:web:00a264565c7cfd875af1d5",
  measurementId: "G-YTX39QB5SN"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);