import { Column, Entity } from "typeorm";

@Entity("device_option_compatibility", { schema: "mydb" })
export class DeviceOptionCompatibility {
  @Column("int", { primary: true, name: "device_model_id" })
  deviceModelId: number;

  @Column("int", { primary: true, name: "option_model_id" })
  optionModelId: number;

  constructor(init?: Partial<DeviceOptionCompatibility>) {
    Object.assign(this, init);
  }
}
