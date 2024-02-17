import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Products } from './product';

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    products!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price!: number;

    @Column('int')
    amount!: number;

    @ManyToMany(() => Products)
    @JoinTable()
        product?: Products[];
}