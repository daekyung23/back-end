import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_call_type_call_type1_idx", ["parentCallTypeId"], {})
@Entity("call_type", { schema: "mydb" })
export class CallType {
  @PrimaryGeneratedColumn({ type: "int", name: "call_type_id" })
  callTypeId: number;

  @Column("varchar", { name: "call_type_name", length: 50 })
  callTypeName: string;

  @Column("int", { name: "parent_call_type_id", nullable: true })
  parentCallTypeId: number | null;

  constructor(init?: Partial<CallType>) {
    Object.assign(this, init);
  }
}
