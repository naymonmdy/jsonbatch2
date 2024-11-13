console.log("hello sir");
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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


//In terminal
//cd l3npmjs

//=>installing nodemon in global
    //curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    //source ~/.nvm/nvm.sh
    //nvm use node
    //npm install -g nodemon 
//node index.js (auto reset after ctl+s)



//if doen't work, npm init -y
//npm install firebase

//for database creation , need import fire store
//firebase.com=>dou=>fund=>for web