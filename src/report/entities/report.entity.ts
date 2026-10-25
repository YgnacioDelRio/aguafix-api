import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


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

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;

    @Column({
        nullable: true
    })
    photoUrl?:String;
}