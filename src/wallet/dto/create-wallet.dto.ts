import { IsDate, IsString, MaxLength, MinLength } from "class-validator";

export class CreateWalletDto {

    @IsString()
    @MaxLength(120)
    name: string;
    
    @IsString()
    @MinLength(11)
    @MaxLength(14)
    cpf: string;

    @IsDate()
    birthdate: Date;
}
