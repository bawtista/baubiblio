import { Timestamp } from "@firebase/firestore";

export class Libro {
    id: string;
    titulo: string;
    autores: string[];
    signatura?: string;
}

export class Biblioteca {
    id: string;
    nombre: string;
    publica: boolean;
    create_at: Timestamp;

    admins: any[];
    editores: any[];
    lectores: any[];
    libros: Libro[];
}