import { ViewEntity, ViewColumn } from "typeorm"
import { Client } from "./entity"

@ViewEntity({
  name: "client_view",
  expression: `
    SELECT 
      c.*,
      p.client_name as parent_client_name,
      cr.rate_type,
      cr.rate_detail
    FROM client c
    LEFT JOIN client p ON c.parent_client_id = p.client_id
    LEFT JOIN client_rate cr ON c.default_client_branch_rate_id = cr.client_rate_id
  `
})
export class ClientView extends Client {
  @ViewColumn()
  parent_client_name: string

  @ViewColumn()
  rate_type: string

  @ViewColumn()
  rate_detail: string
} 