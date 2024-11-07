import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn()
  client_id: number

  @Column({ length: 45 })
  client_name: string

  @Column({ nullable: true })
  parent_client_id: number

  @Column()
  default_client_branch_rate_id: number

  @Column({ 
    type: "tinyint",
    width: 1,
    default: 1,
    transformer: {
      to: (value: boolean) => value ? 1 : 0,
      from: (value: number) => Boolean(value)
    }
  })
  is_active: boolean
}