import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Collection' })
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  carLbs: number;

  @Column()
  @Field()
  carRwhp: number;

  @Column()
  @Field()
  dailyRentingPrice: number;

  @Column()
  @Field()
  monthlyRentingPrice: number;

  @Column()
  @Field()
  carPrice: number;

  @Column()
  @Field()
  mileage: string;

  @Column()
  @Field()
  carType: string;

  @Column()
  @Field()
  gearType: string;

  @Column({ default: false })
  @Field()
  isFeaturedCar: boolean;

  @Column('longtext')
  @Field()
  imageUrl: string;
}
