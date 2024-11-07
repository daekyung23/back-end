import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("device_approval_type", { schema: "mydb" })
export class DeviceApprovalType {
  @PrimaryGeneratedColumn({ type: "int", name: "approval_type_id" })
  approvalTypeId: number;

  @Column("varchar", { name: "approval_type_name", length: 45 })
  approvalTypeName: string;

  constructor(init?: Partial<DeviceApprovalType>) {
    Object.assign(this, init);
  }
}
