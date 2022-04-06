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

let btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    getAllAssets()
})
export async function getAllAssets(){
    const querySnapshot = await getDocs(collection(db, "napoje"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());

        doc.data().forEach = addElement(doc.data()['nazwa'],doc.data()['pojemnosc(ml)'],doc.data()['gazowany']);

    });
}

function addElement(q,w,e){

  var drinkString = `            <div class = "drink">
  <span class = "field">${q}</span>
  <span class = "field">${w}</span>
  <span class = "field">${e}</span>
</div>`
  var drink = htmlToElement(drinkString);
  document.querySelector(".list").appendChild(drink);
}

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}
