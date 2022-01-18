import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './configs/typeorm.config';
import { WalletModule } from './wallet/wallet.module';
import { WalletService } from './wallet/wallet.service';

@Module({
  imports: [WalletModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
