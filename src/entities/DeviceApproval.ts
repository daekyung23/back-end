import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_approval_approver_group1_idx", ["approverRoleId"], {})
@Index("fk_device_approval_device_approval1_idx", ["subApprovalId"], {})
@Index("fk_device_approval_device_approval_type1_idx", ["approvalTypeId"], {})
@Index("fk_device_approval_location1_idx", ["originLocationId"], {})
@Index("fk_device_approval_location2_idx", ["destinationLocationId"], {})
@Index("fk_device_approval_user1_idx", ["requesterId"], {})
@Index("fk_device_approval_user2_idx", ["approverId"], {})
@Entity("device_approval", { schema: "mydb" })
export class DeviceApproval {
  @PrimaryGeneratedColumn({ type: "int", name: "approval_id" })
  approvalId: number;

  @Column("int", { name: "approval_type_id" })
  approvalTypeId: number;

  @Column("int", { name: "sub_approval_id", nullable: true })
  subApprovalId: number | null;

  @Column("int", { name: "requester_id" })
  requesterId: number;

  @Column("timestamp", { name: "request_at" })
  requestAt: Date;

  @Column("int", { name: "approver_role_id" })
  approverRoleId: number;

  @Column("int", { name: "origin_location_id", nullable: true })
  originLocationId: number | null;

  @Column("int", { name: "destination_location_id", nullable: true })
  destinationLocationId: number | null;

  @Column("int", { name: "approver_id", nullable: true })
  approverId: number | null;

  @Column("timestamp", { name: "approve_at", nullable: true })
  approveAt: Date | null;

  @Column("tinyint", { name: "is_approved", nullable: true })
  isApproved: number | null;

  constructor(init?: Partial<DeviceApproval>) {
    Object.assign(this, init);
  }
}
