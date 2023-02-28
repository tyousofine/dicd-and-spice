import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFOKU_n9TA5_xQ12Zgx9tpwTAMoms6_FA",
    authDomain: "dice-and-spice-site.firebaseapp.com",
    projectId: "dice-and-spice-site",
    storageBucket: "dice-and-spice-site.appspot.com",
    messagingSenderId: "670073460451",
    appId: "1:670073460451:web:a7a5cb259faaee2ae457d6"
};

// initialize app
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
