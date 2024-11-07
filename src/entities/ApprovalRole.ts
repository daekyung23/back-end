import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_approval_role_approval_role1_idx", ["upperRoleId"], {})
@Entity("approval_role", { schema: "mydb" })
export class ApprovalRole {
  @PrimaryGeneratedColumn({ type: "int", name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "role_name", length: 45 })
  roleName: string;

  @Column("int", { name: "upper_role_id", nullable: true })
  upperRoleId: number | null;

  constructor(init?: Partial<ApprovalRole>) {
    Object.assign(this, init);
  }
}
