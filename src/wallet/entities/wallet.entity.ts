import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('wallets')
export class Wallet {
    @PrimaryGeneratedColumn('uuid')
    address: string;

    @Column( { nullable: false, length: 120 })
    name: string;

    @Column({ nullable:false, unique: true })
    cpf: string;

    @Column( { nullable: false, type: Date })
    birthdate: Date;

    @Exclude()
    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP(6)', select: false })
    created_at: Date;

    @ManyToOne(() => Coin, coin => coin.wallet)
    coin: Coin;

    @Exclude()
    @UpdateDateColumn({
        default: () =>'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        select: false
    })
    updated_at: Date;
}