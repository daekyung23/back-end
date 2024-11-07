import { Column, Entity } from "typeorm";

@Entity("user_role_assignment", { schema: "mydb" })
export class UserRoleAssignment {
  @Column("int", { primary: true, name: "role_id" })
  roleId: number;

  @Column("int", { primary: true, name: "approver_id" })
  approverId: number;

  constructor(init?: Partial<UserRoleAssignment>) {
    Object.assign(this, init);
  }
}
