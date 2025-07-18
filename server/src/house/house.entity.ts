import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'house_entity' })
export class HouseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'state' })
  state: string;

  @Column({ name: 'photo' })
  photo: string;

  @Column({ name: 'available_units' })
  availableUnits: number;

  @Column({ name: 'wifi' })
  wifi: boolean;

  @Column({ name: 'laundry' })
  laundry: boolean;
}
