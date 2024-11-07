import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_driver_device_model1_idx", ["deviceModelId"], {})
@Entity("device_driver", { schema: "mydb" })
export class DeviceDriver {
  @PrimaryGeneratedColumn({ type: "int", name: "device_driver_id" })
  deviceDriverId: number;

  @Column("int", { name: "device_model_id" })
  deviceModelId: number;

  @Column("varchar", { name: "manufacturer", nullable: true, length: 100 })
  manufacturer: string | null;

  @Column("varchar", { name: "printer_language", nullable: true, length: 45 })
  printerLanguage: string | null;

  @Column("varchar", {
    name: "install_file_address",
    nullable: true,
    length: 200,
  })
  installFileAddress: string | null;

  constructor(init?: Partial<DeviceDriver>) {
    Object.assign(this, init);
  }
}
