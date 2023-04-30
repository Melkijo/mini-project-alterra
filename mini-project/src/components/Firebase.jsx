import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA9VuNHJUzbdWsZqpNB1Zpf6N5NXzk0ETA",
  authDomain: "beasiswakita-3e322.firebaseapp.com",
  projectId: "beasiswakita-3e322",
  storageBucket: "beasiswakita-3e322.appspot.com",
  messagingSenderId: "1028273295288",
  appId: "1:1028273295288:web:afaa1b78d67324cb9bc94d",
  measurementId: "G-5D4CSXMFY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
