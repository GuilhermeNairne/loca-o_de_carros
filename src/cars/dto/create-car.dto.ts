import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class CarroDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @MaxLength(7)
    placa: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    cor: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    modelo: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    marca: string
}

