import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Usuario } from '../models/usuario.model';
import { FirebaseService } from './firebase.service';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends FirebaseService {

    public get usuario(): Usuario {
        let item = sessionStorage.getItem('usuario');
        if (item != null) {
            return JSON.parse(item) as Usuario;
        }
        return null;
    }

    guardarUsuario(usuario: any): void {
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
    }

    async crearUsuario(email: string, password: string) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.guardarUsuario(userCredential.user);
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    console.log(error.message);
                }
            });
    }

    async loginUsuario(email: string, password: string) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.guardarUsuario(userCredential.user);
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    console.log(error.message);
                }
            });
    }

    async logOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
            sessionStorage.removeItem('usuario');
        }).catch((error) => {
            console.log(error);
        });
    }
}

