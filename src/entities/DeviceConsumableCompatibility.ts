import { Column, Entity } from "typeorm";

@Entity("device_consumable_compatibility", { schema: "mydb" })
export class DeviceConsumableCompatibility {
  @Column("int", { primary: true, name: "device_model_id" })
  deviceModelId: number;

  @Column("int", { primary: true, name: "consumable_model_id" })
  consumableModelId: number;

  constructor(init?: Partial<DeviceConsumableCompatibility>) {
    Object.assign(this, init);
  }
}
