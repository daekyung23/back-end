import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_location_client_branch1_idx", ["clientBranchId"], {})
@Index("fk_location_warehouse1_idx", ["warehouseId"], {})
@Entity("location", { schema: "mydb" })
export class Location {
  @PrimaryGeneratedColumn({ type: "int", name: "location_id" })
  locationId: number;

  @Column("enum", {
    name: "location_type",
    enum: ["warehouse", "client_branch"],
  })
  locationType: "warehouse" | "client_branch";

  @Column("int", { name: "warehouse_id", nullable: true })
  warehouseId: number | null;

  @Column("int", { name: "client_branch_id", nullable: true })
  clientBranchId: number | null;

  constructor(init?: Partial<Location>) {
    Object.assign(this, init);
  }
}
