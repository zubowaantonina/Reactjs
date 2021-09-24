import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvhG6Owl2X3ZsFR5EoQ39Zt9dMQvmhKGY",
  authDomain: "my-react-project-c0c58.firebaseapp.com",
  databaseURL: "https://my-react-project-c0c58-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-react-project-c0c58",
  storageBucket: "my-react-project-c0c58.appspot.com",
  messagingSenderId: "926748951675",
  appId: "1:926748951675:web:2644151290b48f32264ede"
};


export const app = initializeApp(firebaseConfig);

export const authFirebase = firebaseAuth;