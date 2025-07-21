// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase yapılandırma nesnesi
const firebaseConfig = {
  apiKey: "AIzaSyB706Rifh1L5no_osIEt30oNH2Oi6YQp_Q",
  authDomain: "burc-astroloji-uygulamasi.firebaseapp.com",
  projectId: "burc-astroloji-uygulamasi",
  storageBucket: "burc-astroloji-uygulamasi.firebasestorage.app",
  messagingSenderId: "54161699155",
  appId: "1:54161699155:web:77ca25ad80d7fcb9b0f1a6",
  measurementId: "G-WCVGV1T7TV"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Analytics'i isteğe bağlı başlat
const analytics = getAnalytics(app);

export { app, analytics };
