import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_user_approval_role1_idx", ["approvalRoleId"], {})
@Index("fk_user_dept1_idx", ["deptId"], {})
@Index("fk_user_user_position1_idx", ["positionId"], {})
@Index("login_id_UNIQUE", ["loginId"], { unique: true })
@Entity("user", { schema: "mydb" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
  userId: number;

  @Column("varchar", { name: "user_name", length: 45 })
  userName: string;

  @Column("varchar", { name: "login_id", unique: true, length: 45 })
  loginId: string;

  @Column("varchar", { name: "password", length: 50 })
  password: string;

  @Column("varchar", { name: "mobile_num", nullable: true, length: 20 })
  mobileNum: string | null;

  @Column("varchar", { name: "office_num", nullable: true, length: 20 })
  officeNum: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("timestamp", {
    name: "modified_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedAt: Date | null;

  @Column("int", { name: "dept_id" })
  deptId: number;

  @Column("int", { name: "approval_role_id", nullable: true })
  approvalRoleId: number | null;

  @Column("int", { name: "position_id" })
  positionId: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("tinyint", { name: "is_active", default: () => "'1'" })
  isActive: number;

  @Column("enum", {
    name: "permission",
    enum: ["user", "manager", "admin"],
    default: () => "'user'",
  })
  permission: "user" | "manager" | "admin";

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
