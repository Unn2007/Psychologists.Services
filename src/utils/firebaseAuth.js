


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const API_KEY = import.meta.env.VITE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const API_ID = import.meta.env.VITE_API_ID;
const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: API_ID,
  databaseURL: DATABASE_URL,
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



