import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_warehouse_dept1_idx", ["mgmtDeptId"], {})
@Entity("warehouse", { schema: "mydb" })
export class Warehouse {
  @PrimaryGeneratedColumn({ type: "int", name: "warehouse_id" })
  warehouseId: number;

  @Column("varchar", { name: "warehouse_name", length: 100 })
  warehouseName: string;

  @Column("int", { name: "mgmt_dept_id" })
  mgmtDeptId: number;

  constructor(init?: Partial<Warehouse>) {
    Object.assign(this, init);
  }
}
