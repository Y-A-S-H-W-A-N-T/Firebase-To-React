import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBrQnUVTK1k5QrEw0CBdY6IGf79YK8AoyE",
    authDomain: "test-c716a.firebaseapp.com",
    databaseURL: "https://test-c716a-default-rtdb.firebaseio.com",
    projectId: "test-c716a",
    storageBucket: "test-c716a.appspot.com",
    messagingSenderId: "769229904148",
    appId: "1:769229904148:web:20d3577b6f59959a2a4a01",
    measurementId: "G-TVKTM7DRPS"
  }

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)