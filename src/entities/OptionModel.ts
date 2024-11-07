import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("option_model", { schema: "mydb" })
export class OptionModel {
  @PrimaryGeneratedColumn({ type: "int", name: "option_model_id" })
  optionModelId: number;

  @Column("varchar", { name: "option_model_name", length: 100 })
  optionModelName: string;

  @Column("varchar", { name: "option_type", length: 45 })
  optionType: string;

  @Column("varchar", { name: "manufacturer", length: 100 })
  manufacturer: string;

  constructor(init?: Partial<OptionModel>) {
    Object.assign(this, init);
  }
}
