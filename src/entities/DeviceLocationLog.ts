import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_device_location_log_device1_idx", ["deviceId"], {})
@Index("fk_device_location_log_location1_idx", ["locationId"], {})
@Entity("device_location_log", { schema: "mydb" })
export class DeviceLocationLog {
  @PrimaryGeneratedColumn({ type: "int", name: "device_location_log_id" })
  deviceLocationLogId: number;

  @Column("int", { name: "device_id" })
  deviceId: number;

  @Column("date", { name: "location_date" })
  locationDate: string;

  @Column("int", { name: "location_id" })
  locationId: number;

  @Column("varchar", { name: "location_detail", nullable: true, length: 200 })
  locationDetail: string | null;

  constructor(init?: Partial<DeviceLocationLog>) {
    Object.assign(this, init);
  }
}
