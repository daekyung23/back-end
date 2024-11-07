import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_sigungu_sido1_idx", ["sidoId"], {})
@Entity("sigungu", { schema: "mydb" })
export class Sigungu {
  @PrimaryGeneratedColumn({ type: "int", name: "sigungu_id" })
  sigunguId: number;

  @Column("varchar", { name: "sigungu_name", length: 45 })
  sigunguName: string;

  @Column("int", { name: "sido_id" })
  sidoId: number;

  constructor(init?: Partial<Sigungu>) {
    Object.assign(this, init);
  }
}
