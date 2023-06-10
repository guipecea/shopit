import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyB7Fe2ZQtrFnHHBbOYmPdFyQRYt_2pWItA",
  authDomain: "coderhouse-43190-gpc.firebaseapp.com",
  projectId: "coderhouse-43190-gpc",
  storageBucket: "coderhouse-43190-gpc.appspot.com",
  messagingSenderId: "312662542384",
  appId: "1:312662542384:web:af3fc48b3ed4087240c5f5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)