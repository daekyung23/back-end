import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_inspection_approval_approval_role1_idx", ["approverRoleId"], {})
@Index(
  "fk_inspection_approval_device_inspection_log1_idx",
  ["deviceInspectionLogId"],
  {}
)
@Index("fk_inspection_approval_user1_idx", ["approverId"], {})
@Index("fk_inspection_approval_user2_idx", ["requesterId"], {})
@Entity("inspection_approval", { schema: "mydb" })
export class InspectionApproval {
  @PrimaryGeneratedColumn({ type: "int", name: "approval_id" })
  approvalId: number;

  @Column("int", { name: "requester_id" })
  requesterId: number;

  @Column("timestamp", { name: "request_at" })
  requestAt: Date;

  @Column("int", { name: "approver_role_id", nullable: true })
  approverRoleId: number | null;

  @Column("int", { name: "device_inspection_log_id" })
  deviceInspectionLogId: number;

  @Column("int", { name: "approver_id", nullable: true })
  approverId: number | null;

  @Column("timestamp", { name: "approved_at", nullable: true })
  approvedAt: Date | null;

  @Column("tinyint", { name: "is_approved", nullable: true })
  isApproved: number | null;

  constructor(init?: Partial<InspectionApproval>) {
    Object.assign(this, init);
  }
}
