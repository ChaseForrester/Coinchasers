import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCx00XQkOg8SocJYf1wkrYrSKr78aACJYk",
  authDomain: "coinchasers-app-2026.firebaseapp.com",
  projectId: "coinchasers-app-2026",
  storageBucket: "coinchasers-app-2026.firebasestorage.app",
  messagingSenderId: "336158383836",
  appId: "1:336158383836:web:4faa4b15fdc43c14cf5e19"
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
