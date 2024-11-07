import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("consumable_model", { schema: "mydb" })
export class ConsumableModel {
  @PrimaryGeneratedColumn({ type: "int", name: "consumable_model_id" })
  consumableModelId: number;

  @Column("varchar", { name: "manufacturer", length: 100 })
  manufacturer: string;

  @Column("varchar", { name: "consumable_name", length: 100 })
  consumableName: string;

  @Column("varchar", { name: "consumable_type", length: 100 })
  consumableType: string;

  constructor(init?: Partial<ConsumableModel>) {
    Object.assign(this, init);
  }
}
