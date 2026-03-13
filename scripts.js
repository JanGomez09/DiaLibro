import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "https://operis-19016-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


window.activate = function(){

    const name = document.getElementById("name").value;
    const secc = document.getElementById("secc").value;
    const roll = document.getElementById("roll").value;
    const clas = document.getElementById("clas").value;

    const userRef = ref(database, 'usuarios/' + name);

    set(userRef, {
        nombre: name,
        seccion: secc,
        rol: roll,
        clase: clas,
        verified: true
    })

    .then(() => {
        console.log("Datos guardados correctamente");
        alert("Datos enviados correctamente");
    })

    .catch((error) => {
        console.error("Error:", error);
    });

}