import { Column, Entity, Index } from "typeorm";

@Index("fk_device_install_info_device1_idx", ["deviceId"], {})
@Index("fk_device_install_info_user1_idx", ["installerId"], {})
@Entity("device_install_info", { schema: "mydb" })
export class DeviceInstallInfo {
  @Column("int", { primary: true, name: "device_id" })
  deviceId: number;

  @Column("int", { name: "installer_id" })
  installerId: number;

  @Column("varchar", { name: "mgmt_num", length: 50 })
  mgmtNum: string;

  @Column("varchar", { name: "ip_address", nullable: true, length: 50 })
  ipAddress: string | null;

  @Column("varchar", { name: "subnet_mask", nullable: true, length: 50 })
  subnetMask: string | null;

  @Column("varchar", { name: "gateway", nullable: true, length: 50 })
  gateway: string | null;

  @Column("varchar", { name: "dns1", nullable: true, length: 50 })
  dns1: string | null;

  @Column("varchar", { name: "dns2", nullable: true, length: 50 })
  dns2: string | null;

  constructor(init?: Partial<DeviceInstallInfo>) {
    Object.assign(this, init);
  }
}
