import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpCode, 
    HttpStatus, 
    Param, 
    Patch, 
    Post, 
    Res 
} from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
    constructor(private readonly walletService: WalletService){}

    @Get()
    getAll(){
        return this.walletService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.walletService.findOne(id);
    }

    @Post()
    async create(@Body() createWalletDto: CreateWalletDto){
        return this.walletService.create(createWalletDto);
    }   

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto){
        return this.walletService.update(id, updateWalletDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.walletService.remove(id);
    }
}
