import { Injectable } from "@angular/core";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    firebaseConfig = {
        apiKey: "AIzaSyDvftoho_WC8we3CGFsqQHRf828GYRY48w",
        authDomain: "baubiblio.firebaseapp.com",
        projectId: "baubiblio",
        storageBucket: "baubiblio.appspot.com",
        messagingSenderId: "12941679308",
        appId: "1:12941679308:web:e96ca52db025e6cb8e0069",
        measurementId: "G-65EYN0JKCB"
    };

    app = initializeApp(this.firebaseConfig);
    analytics = getAnalytics(this.app);
    db = getFirestore(this.app);

    constructor() { }
}