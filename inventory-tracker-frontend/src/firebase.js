import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey:`${process.env.REACT_APP_API_KEY}`,
  authDomain: "authentication-e76ce.firebaseapp.com",
  projectId: "authentication-e76ce",
  storageBucket: "authentication-e76ce.appspot.com",
  messagingSenderId: "143387716249",
  appId: "1:143387716249:web:5fe45f2c26e2cc9ba7e608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;