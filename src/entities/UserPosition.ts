import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_position", { schema: "mydb" })
export class UserPosition {
  @PrimaryGeneratedColumn({ type: "int", name: "user_position_id" })
  userPositionId: number;

  @Column("varchar", { name: "position_name", length: 45 })
  positionName: string;

  constructor(init?: Partial<UserPosition>) {
    Object.assign(this, init);
  }
}
