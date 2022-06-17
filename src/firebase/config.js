// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7H31L6xZwb__fZkmb0kDxECysl4BFUiA",
  authDomain: "thomaste-68443.firebaseapp.com",
  projectId: "thomaste-68443",
  storageBucket: "thomaste-68443.appspot.com",
  messagingSenderId: "203175381102",
  appId: "1:203175381102:web:4039b7c2d22f0c71b8be7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function getFirestoreApp(){
    return app
}
export const authentication = getAuth()