import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("device_model", { schema: "mydb" })
export class DeviceModel {
  @PrimaryGeneratedColumn({ type: "int", name: "device_model_id" })
  deviceModelId: number;

  @Column("varchar", { name: "model_name", length: 100 })
  modelName: string;

  @Column("varchar", { name: "manufacturer", length: 100 })
  manufacturer: string;

  @Column("tinyint", { name: "color_support" })
  colorSupport: number;

  constructor(init?: Partial<DeviceModel>) {
    Object.assign(this, init);
  }
}
