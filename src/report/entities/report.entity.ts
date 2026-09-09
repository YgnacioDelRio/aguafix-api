import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import type { Point } from "typeorm";


@Entity('WATER_REPORT')
export class Report{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    address!: string;

    @Column()
    description!: string;

    @Column()
    severity!: string;

    @Column()
    reporterPhone!: string;

    @Column()
    isResolved!: boolean;

    @Column()
    createdAt!: Date;
}