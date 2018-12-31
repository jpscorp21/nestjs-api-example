import { Injectable } from '@nestjs/common';
import { Cats } from '../../models/cats';

@Injectable()
export class CatsService {

    private cats: Cats[];

    constructor() {
        this.init();
    }

    init() {
        this.cats = [
            {id: 1, nombre: 'Perez', edad: 12, color: 'blanco', genero: 'M'},
            {id: 2, nombre: 'Yolanda', edad: 1, color: 'blanco', genero: 'F'},
            {id: 3, nombre: 'Karin', edad: 3, color: 'Azul', genero: 'M'},
            {id: 4, nombre: 'Marciano', edad: 7, color: 'blanco', genero: 'M'},
            {id: 5, nombre: 'Aurelio', edad: 10, color: 'Rojo', genero: 'M'},
            {id: 6, nombre: 'Buendia', edad: 9, color: 'Marron', genero: 'F'},
        ];
    }

    findAll() {
        return this.cats;
    }

    findById(id: number) {
        return this.cats.filter((x) => x.id === id);
    }

    create(cat: Cats) {
        this.cats.push(cat);
    }

    update(id: number, cat: Cats) {
        this.cats = this.cats.map((x) => {
            if (x.id === id) {
                x.color = cat.color;
                x.edad = cat.edad;
                x.nombre = cat.nombre;
                x.genero = cat.genero;
            }
            return x;
        });
    }

    remove(id: number) {
        this.cats = this.cats.filter((x) => x.id !== id);
    }
}
