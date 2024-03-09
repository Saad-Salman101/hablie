// firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4l-MZamlohs7vD1aeKGHGr5Z3M4udc7c",
    authDomain: "habile-23db2.firebaseapp.com",
    projectId: "habile-23db2",
    storageBucket: "habile-23db2.appspot.com",
    messagingSenderId: "920965064180",
    appId: "1:920965064180:web:5a0346bb7491440b9005a1",
    measurementId: "G-PEYFCJWEQG"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };