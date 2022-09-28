import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  userId: string;

  @Column()
  guildId: string;

  @Column()
  balance: number;
}
