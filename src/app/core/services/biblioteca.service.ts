import { Injectable } from '@angular/core';
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { Biblioteca } from '../models/biblioteca.model';
import { Usuario } from '../models/usuario.model';
import { FirebaseService } from './firebase.service';

@Injectable({
    providedIn: 'root'
})
export class BibliotecaService extends FirebaseService {

    col = "bibliotecas";

    constructor() {
        super();
    }

    async getBiblioteca(id: string): Promise<Biblioteca> {
        const docRef = doc(this.db, this.col, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let biblioteca = docSnap.data() as Biblioteca;
            biblioteca.id = docSnap.id;
            console.log(biblioteca);
            return biblioteca;
        } else {
            return null; // TODO: Raise error
        }
    }

    /*async getBibliotecaX(id: string): Promise<Usuario> {
        const query = await getDocs(this.bibliotecas);
        let bibliotecaSelec: Usuario;
        query.forEach(doc => {
            let user = doc.data();
            if (user.username === username) {
                usuarioSelec = user as Usuario;
            }
        });
        return usuarioSelec;
    }

    async getBibliotecasFromUsuario(this.id) { }

    async createUsuario(usuario: Usuario): Promise<string> {
        try {
            const docRef = await addDoc(this.usuarios, usuario);
            return docRef.id;
        } catch (e) {
            return null;
        }
    }*/
}