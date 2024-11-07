import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_client_branch_client1_idx", ["clientId"], {})
@Index("fk_client_branch_client_branch_rate1_idx", ["clientBranchRateId"], {})
@Index("fk_client_branch_dept1_idx", ["mgmtDeptId"], {})
@Index("fk_client_branch_sigungu1_idx", ["sigunguId"], {})
@Entity("client_branch", { schema: "mydb" })
export class ClientBranch {
  @PrimaryGeneratedColumn({ type: "int", name: "client_branch_id" })
  clientBranchId: number;

  @Column("int", { name: "sigungu_id" })
  sigunguId: number;

  @Column("int", { name: "mgmt_dept_id" })
  mgmtDeptId: number;

  @Column("int", { name: "client_id" })
  clientId: number;

  @Column("varchar", { name: "client_branch_name", length: 100 })
  clientBranchName: string;

  @Column("int", { name: "client_branch_rate_id" })
  clientBranchRateId: number;

  @Column("varchar", { name: "branch_mgr_name", nullable: true, length: 45 })
  branchMgrName: string | null;

  @Column("varchar", {
    name: "branch_mgr_mobile_num",
    nullable: true,
    length: 45,
  })
  branchMgrMobileNum: string | null;

  @Column("varchar", {
    name: "branch_mgr_office_num",
    nullable: true,
    length: 45,
  })
  branchMgrOfficeNum: string | null;

  @Column("varchar", { name: "branch_mgr_email", nullable: true, length: 45 })
  branchMgrEmail: string | null;

  @Column("tinyint", { name: "is_active", default: () => "'1'" })
  isActive: number;

  @Column("tinyint", { name: "remote_support", default: () => "'0'" })
  remoteSupport: number;

  @Column("tinyint", { name: "push_alert", default: () => "'0'" })
  pushAlert: number;

  constructor(init?: Partial<ClientBranch>) {
    Object.assign(this, init);
  }
}
