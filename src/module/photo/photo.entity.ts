import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('photo')
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name: string;
}
