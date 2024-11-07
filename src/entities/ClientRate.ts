import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("client_rate", { schema: "mydb" })
export class ClientRate {
  @PrimaryGeneratedColumn({ type: "int", name: "client_rate_id" })
  clientRateId: number;

  @Column("varchar", { name: "rate_type", length: 10 })
  rateType: string;

  @Column("varchar", { name: "rate_detail", nullable: true, length: 45 })
  rateDetail: string | null;

  constructor(init?: Partial<ClientRate>) {
    Object.assign(this, init);
  }
}
