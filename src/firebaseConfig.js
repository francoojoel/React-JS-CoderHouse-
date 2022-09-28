// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAz5fZ8gNto__S0vaYgMX7BSRaDbFwJGds",
	authDomain: "react-js-coder-house.firebaseapp.com",
	projectId: "react-js-coder-house",
	storageBucket: "react-js-coder-house.appspot.com",
	messagingSenderId: "966402084183",
	appId: "1:966402084183:web:e03c7a55fec94f76890212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);