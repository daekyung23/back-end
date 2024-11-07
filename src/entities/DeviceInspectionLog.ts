import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_device_history_device_idx", ["deviceId"], {})
@Index("fk_device_inspection_log_user1_idx", ["inspectorId"], {})
@Index("fk_device_log_call1_idx", ["callId"], {})
@Entity("device_inspection_log", { schema: "mydb" })
export class DeviceInspectionLog {
  @PrimaryGeneratedColumn({ type: "int", name: "device_inspection_log_id" })
  deviceInspectionLogId: number;

  @Column("int", { name: "device_id" })
  deviceId: number;

  @Column("int", { name: "inspector_id" })
  inspectorId: number;

  @Column("date", { name: "inspection_date" })
  inspectionDate: string;

  @Column("varchar", { name: "visit_type", length: 45 })
  visitType: string;

  @Column("int", { name: "call_id", nullable: true })
  callId: number | null;

  @Column("int", { name: "FL", nullable: true })
  fl: number | null;

  @Column("int", { name: "FS", nullable: true })
  fs: number | null;

  @Column("int", { name: "BL", nullable: true })
  bl: number | null;

  @Column("int", { name: "BS", nullable: true })
  bs: number | null;

  @Column("int", { name: "toner_count_YE", nullable: true })
  tonerCountYe: number | null;

  @Column("int", { name: "toner_count_MA", nullable: true })
  tonerCountMa: number | null;

  @Column("int", { name: "toner_count_CY", nullable: true })
  tonerCountCy: number | null;

  @Column("int", { name: "toner_count_BK", nullable: true })
  tonerCountBk: number | null;

  @Column("int", { name: "toner_stock_YE", nullable: true })
  tonerStockYe: number | null;

  @Column("int", { name: "toner_stock_MA", nullable: true })
  tonerStockMa: number | null;

  @Column("int", { name: "toner_stock_CY", nullable: true })
  tonerStockCy: number | null;

  @Column("int", { name: "toner_stock_BK", nullable: true })
  tonerStockBk: number | null;

  @Column("int", { name: "toner_deliver_YE", nullable: true })
  tonerDeliverYe: number | null;

  @Column("int", { name: "toner_deliver_CY", nullable: true })
  tonerDeliverCy: number | null;

  @Column("int", { name: "toner_deliver_MA", nullable: true })
  tonerDeliverMa: number | null;

  @Column("int", { name: "toner_deliver_BK", nullable: true })
  tonerDeliverBk: number | null;

  @Column("int", { name: "drum_count_YE", nullable: true })
  drumCountYe: number | null;

  @Column("int", { name: "drum_count_MA", nullable: true })
  drumCountMa: number | null;

  @Column("int", { name: "drum_count_CY", nullable: true })
  drumCountCy: number | null;

  @Column("int", { name: "drum_count_BK", nullable: true })
  drumCountBk: number | null;

  @Column("varchar", {
    name: "drum_replacement_detail",
    nullable: true,
    length: 50,
  })
  drumReplacementDetail: string | null;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["normal", "pending"],
  })
  status: "normal" | "pending" | null;

  constructor(init?: Partial<DeviceInspectionLog>) {
    Object.assign(this, init);
  }
}
