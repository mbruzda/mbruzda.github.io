import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'

// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpRtZOjlHkosYblKMs_fTN1j1HbE7Aoxg",
    authDomain: "mrocin-firebase-services.firebaseapp.com",
    projectId: "mrocin-firebase-services",
    storageBucket: "mrocin-firebase-services.appspot.com",
    messagingSenderId: "21615399150",
    appId: "1:21615399150:web:516a572905c719f2aca3ff",
    measurementId: "G-B1LV38310D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export async function getAllAssets(){
    const querySnapshot = await getDocs(collection(db, "napoje"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data()['nazwa'],doc.data()['pojemnosc(ml)']);
        return doc.data()
    });
}
