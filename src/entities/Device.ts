import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_device_dept1_idx", ["ownerDeptId"], {})
@Index("fk_device_dept2_idx", ["mgmtDeptId"], {})
@Index("fk_device_device_condition1_idx", ["statusId"], {})
@Index("fk_device_device_location_log1_idx", ["lastLocationLogId"], {})
@Index("fk_device_device_model1_idx", ["deviceModelId"], {})
@Index("fk_device_inspection_log1_idx", ["lastInspectionLogId"], {})
@Entity("device", { schema: "mydb" })
export class Device {
  @PrimaryGeneratedColumn({ type: "int", name: "device_id" })
  deviceId: number;

  @Column("int", { name: "device_model_id" })
  deviceModelId: number;

  @Column("int", { name: "owner_dept_id" })
  ownerDeptId: number;

  @Column("int", { name: "mgmt_dept_id" })
  mgmtDeptId: number;

  @Column("varchar", { name: "serial", length: 50 })
  serial: string;

  @Column("date", { name: "regi_date" })
  regiDate: string;

  @Column("varchar", { name: "mac", length: 50 })
  mac: string;

  @Column("int", { name: "last_inspection_log_id", nullable: true })
  lastInspectionLogId: number | null;

  @Column("int", { name: "last_location_log_id", nullable: true })
  lastLocationLogId: number | null;

  @Column("int", { name: "status_id", default: () => "'1'" })
  statusId: number;

  constructor(init?: Partial<Device>) {
    Object.assign(this, init);
  }
}
