import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sido", { schema: "mydb" })
export class Sido {
  @PrimaryGeneratedColumn({ type: "int", name: "sido_id" })
  sidoId: number;

  @Column("varchar", { name: "sido_name", nullable: true, length: 45 })
  sidoName: string | null;

  constructor(init?: Partial<Sido>) {
    Object.assign(this, init);
  }
}
