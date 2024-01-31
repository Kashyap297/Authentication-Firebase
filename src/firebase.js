// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyhmR5jaX75fPBc4099TvXByOJdnWXgdA",
  authDomain: "authentication-ed8a5.firebaseapp.com",
  projectId: "authentication-ed8a5",
  storageBucket: "authentication-ed8a5.appspot.com",
  messagingSenderId: "418868380777",
  appId: "1:418868380777:web:68f19966e9c924d7070ef8",
  measurementId: "G-JX10NS1VK5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
