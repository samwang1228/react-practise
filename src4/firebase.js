import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// 注意新版的引入要長這樣!!!

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyBT1TkTi_ggoQQUot4fJdmzTvL7bh0dBQQ",
     authDomain: "instagram-clone-81f72.firebaseapp.com",
     databaseUrl:"https://instagram-clone.firebaseio.com",
     projectId: "instagram-clone-81f72",
     storageBucket: "instagram-clone-81f72.appspot.com",
     messagingSenderId: "878261402640",
     appId: "1:878261402640:web:f64e8b10d1c1f39ab5de95",
     measurementId: "G-NQJ34CLP29"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };


