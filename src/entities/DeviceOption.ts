import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_device_option_device1_idx", ["locationDeviceId"], {})
@Index("fk_device_option_device_option_model1_idx", ["optionModelId"], {})
@Index("fk_device_option_warehouse1_idx", ["locationWarehouseId"], {})
@Entity("device_option", { schema: "mydb" })
export class DeviceOption {
  @PrimaryGeneratedColumn({ type: "int", name: "device_option_id" })
  deviceOptionId: number;

  @Column("int", { name: "option_model_id" })
  optionModelId: number;

  @Column("varchar", { name: "serial", nullable: true, length: 50 })
  serial: string | null;

  @Column("tinyint", { name: "is_active", default: () => "'1'" })
  isActive: number;

  @Column("enum", { name: "location_type", enum: ["warehouse", "device"] })
  locationType: "warehouse" | "device";

  @Column("int", { name: "location_warehouse_id", nullable: true })
  locationWarehouseId: number | null;

  @Column("int", { name: "location_device_id", nullable: true })
  locationDeviceId: number | null;

  constructor(init?: Partial<DeviceOption>) {
    Object.assign(this, init);
  }
}
