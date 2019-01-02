import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column()
    edad: number;

    @Column({ length: 20 })
    genero: string;

    @Column()
    color: string;
}