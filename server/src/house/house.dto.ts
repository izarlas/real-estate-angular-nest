import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class HouseDto {
  @ApiProperty({ example: "Main house", description: "The house name" })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: "Athens",
    description: "The city that the house is located at",
  })
  @IsString()
  readonly city: string;

  @ApiProperty({
    example: "Attica",
    description: "The state or region the house is located at",
  })
  @IsString()
  readonly state: string;

  @ApiProperty({ example: "house.jpg", description: "The house photo" })
  @IsString()
  readonly photo: string;

  @ApiProperty({
    example: 2,
    description: "The amount of available house units",
  })
  @IsNumber()
  readonly availableUnits: number;

  @ApiProperty({
    example: true,
    description: "Wifi availability of the house",
  })
  @IsBoolean()
  readonly wifi: boolean;

  @ApiProperty({
    example: true,
    description: "Laundry availability of the house",
  })
  @IsBoolean()
  readonly laundry: boolean;
}
