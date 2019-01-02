import { Injectable, BadRequestException } from '@nestjs/common';
import { Cats } from '../../models/cats';
import { InjectRepository } from '@nestjs/typeorm';
import { CatEntity } from '../../entities/cats.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {

    private cats: Cats[];

    constructor(
        @InjectRepository(CatEntity)
        private readonly catRepository: Repository<CatEntity>,
    ) {
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

    async findAll() {
        return await this.catRepository.find();
    }

    async findById(id: number) {
        const cat = await this.catRepository.findOne(id);
        if (!cat) {
            throw new BadRequestException('No existe el recurso');
        }
        return cat;
    }

    async create(cat: Cats) {
        const _cat = this.catRepository.create(cat);
        return await this.catRepository.save(_cat);
    }

    async update(id: number, cat: Cats) {
        const _cat = await this.findById(id);
        this.catRepository.merge(_cat, cat);
        return await this.catRepository.save(_cat);
    }

    async remove(id: number) {
        const cat = await this.findById(id);
        return await this.catRepository.remove(cat);
    }
}
