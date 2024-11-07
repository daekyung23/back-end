import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_dept_dept1_idx", ["parentDeptId"], {})
@Entity("dept", { schema: "mydb" })
export class Dept {
  @PrimaryGeneratedColumn({ type: "int", name: "dept_id" })
  deptId: number;

  @Column("int", { name: "parent_dept_id", nullable: true })
  parentDeptId: number | null;

  @Column("varchar", { name: "dept_name", length: 100 })
  deptName: string;

  constructor(init?: Partial<Dept>) {
    Object.assign(this, init);
  }
}
