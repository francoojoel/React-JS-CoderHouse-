
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAz5fZ8gNto__S0vaYgMX7BSRaDbFwJGds",
  authDomain: "react-js-coder-house.firebaseapp.com",
  projectId: "react-js-coder-house",
  storageBucket: "react-js-coder-house.appspot.com",
  messagingSenderId: "966402084183",
  appId: "1:966402084183:web:e03c7a55fec94f76890212"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode> 
);