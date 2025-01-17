import { ApiProperty } from "@nestjs/swagger";
import { jenis_kelamin } from "@prisma/client";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateMahasiswaDTO {

    @ApiProperty({ description : "NIM", type : String, example : "105841109722" })
    @IsString({message : "NIM Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 12, {message : "Hanya bisa sampai 12 karakter"})
    nim : string;

    @ApiProperty({description :"Nama", type : String, example : "MUH FADHIL AHMAD"})
    @IsString({message : "Nama Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 50, {message : "Hanya bisa sampai 12 karakter"})
    nama : string;

    @ApiProperty({ description: "kelas", type: String, example: "5C" })
    @IsString({ message: "Kelas Harus Bertipe String" })
    @IsNotEmpty({ message: "Tidak Boleh Kosong" })
    @Length(1, 2, { message: "Hanya bisa sampai 2 karakter" })
    kelas: string;

    @ApiProperty({ description: "jurusan", type: String, example: "informatika" })
    @IsString({ message: "jurusan Harus Bertipe String" })
    @IsNotEmpty({ message: "Tidak Boleh Kosong" })
    @Length(1, 20, { message: "Hanya bisa sampai 20 karakter" })
    jurusan: string;


@ApiProperty({
    enum : jenis_kelamin,
    description : "L",
    
})
    jenis_kelamin : jenis_kelamin;

}