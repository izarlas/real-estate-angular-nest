import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  photo: string;

  @Column()
  availableUnits: number;

  @Column()
  wifi: boolean;

  @Column()
  laundry: boolean;
}
