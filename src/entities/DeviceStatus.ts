import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("device_status", { schema: "mydb" })
export class DeviceStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "status_id" })
  statusId: number;

  @Column("varchar", { name: "status_name", length: 45 })
  statusName: string;

  constructor(init?: Partial<DeviceStatus>) {
    Object.assign(this, init);
  }
}
