import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_client_client1_idx", ["parentClientId"], {})
@Index("fk_client_client_branch_rate1_idx", ["defaultClientBranchRateId"], {})
@Entity("client", { schema: "mydb" })
export class Client {
  @PrimaryGeneratedColumn({ type: "int", name: "client_id" })
  clientId: number;

  @Column("int", { name: "parent_client_id", nullable: true })
  parentClientId: number | null;

  @Column("int", { name: "default_client_branch_rate_id" })
  defaultClientBranchRateId: number;

  @Column("varchar", { name: "client_name", length: 45 })
  clientName: string;

  @Column("tinyint", { name: "is_active", default: () => "'1'" })
  isActive: number;

  constructor(init?: Partial<Client>) {
    Object.assign(this, init);
  }
}
