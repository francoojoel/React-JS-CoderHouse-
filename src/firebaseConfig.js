
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyAz5fZ8gNto__S0vaYgMX7BSRaDbFwJGds",
	authDomain: "react-js-coder-house.firebaseapp.com",
	projectId: "react-js-coder-house",
	storageBucket: "react-js-coder-house.appspot.com",
	messagingSenderId: "966402084183",
	appId: "1:966402084183:web:e03c7a55fec94f76890212"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);