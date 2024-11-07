import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_call_call_type1_idx", ["callTypeId"], {})
@Index("fk_call_client_branch1_idx", ["clientBranchId"], {})
@Index("fk_call_dept1_idx", ["transferredDeptId"], {})
@Index("fk_call_device1_idx", ["deviceId"], {})
@Index("fk_call_user1_idx", ["receiverId"], {})
@Index("fk_call_user2_idx", ["assignerId"], {})
@Entity("call", { schema: "mydb" })
export class Call {
  @PrimaryGeneratedColumn({ type: "int", name: "call_id" })
  callId: number;

  @Column("int", { name: "call_type_id" })
  callTypeId: number;

  @Column("int", { name: "client_branch_id" })
  clientBranchId: number;

  @Column("varchar", { name: "requester_name", length: 50 })
  requesterName: string;

  @Column("varchar", { name: "requester_num", length: 20 })
  requesterNum: string;

  @Column("tinyint", { name: "requester_black_consumer", default: () => "'0'" })
  requesterBlackConsumer: number;

  @Column("int", { name: "device_id", nullable: true })
  deviceId: number | null;

  @Column("varchar", { name: "detail", length: 200 })
  detail: string;

  @Column("varchar", { name: "state", length: 45 })
  state: string;

  @Column("timestamp", { name: "received_at" })
  receivedAt: Date;

  @Column("int", { name: "receiver_id" })
  receiverId: number;

  @Column("timestamp", { name: "transferred_at", nullable: true })
  transferredAt: Date | null;

  @Column("int", { name: "transferred_dept_id", nullable: true })
  transferredDeptId: number | null;

  @Column("int", { name: "assigner_id", nullable: true })
  assignerId: number | null;

  @Column("timestamp", { name: "completed_at", nullable: true })
  completedAt: Date | null;

  constructor(init?: Partial<Call>) {
    Object.assign(this, init);
  }
}
