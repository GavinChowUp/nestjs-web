import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('hero')
export class Hero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    power: number;
}
