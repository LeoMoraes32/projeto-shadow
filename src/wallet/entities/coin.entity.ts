import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('coins')
export class Coin {
    @PrimaryGeneratedColumn('uuid')
    idCoin: string;

    @Column( { nullable: false })
    fullname: string;

    @Column({ nullable:false })
    amount: number;

    @Column( { nullable: false, type: Date })
    birthdate: Date;

    @Exclude()
    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP(6)', select: false })
    created_at: Date;

    @Exclude()
    @UpdateDateColumn({
        default: () =>'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        select: false
    })
    updated_at: Date;
}