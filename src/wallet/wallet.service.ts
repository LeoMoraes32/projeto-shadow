import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>
    ){}

    findAll() {
        return this.walletRepository.find();
    }
    
    findOne(id: string) {
        const wallet = this.walletRepository.findOne(id);
        if(!wallet) {
            throw new NotFoundException(
                `Wallet ID ${id} not found`
            );
        }
        return wallet;
    }

    async create(createWalletDto: CreateWalletDto): Promise<CreateWalletDto> {
        const wallet = await this.walletRepository.create(createWalletDto);
        return await this.walletRepository.save(wallet);
    }

    async update(id: string, updateWalletDto: UpdateWalletDto) {
        const wallet = await this.walletRepository.update(id,updateWalletDto);
        
        return await this.walletRepository.findOne(id);
    }

    async remove(id: string) {
        const wallet = await this.walletRepository.findOne(id);

        if(!wallet){
            throw new NotFoundException(`Wallet ID ${id} not found`);
        }
        return this.walletRepository.remove(wallet);
    }
}
