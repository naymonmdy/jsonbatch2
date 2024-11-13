console.log("hello sir");
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDfpRgO_i2d3RwFT7QZibmcJ8ekDWLvbA",
  authDomain: "my-first-project-f9e29.firebaseapp.com",
  projectId: "my-first-project-f9e29",
  storageBucket: "my-first-project-f9e29.firebasestorage.app",
  messagingSenderId: "1087927252789",
  appId: "1:1087927252789:web:faf04c52f8914783eb7e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

//create database
const db = getFirestore(app);
console.log(db);


//create database
// https://console.firebase.google.com/=>Build=>Firestore Database > Create Database

// addDoc(collection(db,"users"),{
//     name:"aung aung",
//     city:"Bago",
//     age:40,
// });

//=>displyay auto generate id ! after data set
addDoc(collection(db,"users"),{
    name:"aung aung",
    city:"Bago",
    age:40,
}).then(docRef=>{
    console.log(docRef.id);
}).catch(error=>{
    console.log(error);
});