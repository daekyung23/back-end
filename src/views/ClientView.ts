import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
  name: "client_view",
  expression: `
    SELECT 
      c.client_id,
      c.client_name,
      c.parent_client_id,
      c.default_client_branch_rate_id,
      c.is_active,
      p.client_name as parent_client_name,
      cr.rate_type,
      cr.rate_detail,
      COUNT(DISTINCT cb.client_branch_id) as branch_count
    FROM client c
    LEFT JOIN client p ON c.parent_client_id = p.client_id
    LEFT JOIN client_rate cr ON c.default_client_branch_rate_id = cr.client_rate_id
    LEFT JOIN client_branch cb ON c.client_id = cb.client_id
    GROUP BY 
      c.client_id,
      c.client_name,
      c.parent_client_id,
      c.default_client_branch_rate_id,
      c.is_active,
      p.client_name,
      cr.rate_type,
      cr.rate_detail
  `
})
export class ClientView {
  @ViewColumn()
  clientId: number;

  @ViewColumn()
  clientName: string;

  @ViewColumn()
  parentClientId: number | null;

  @ViewColumn()
  defaultClientBranchRateId: number;

  @ViewColumn()
  isActive: number;

  @ViewColumn()
  parentClientName: string | null;

  @ViewColumn()
  rateType: string;

  @ViewColumn()
  rateDetail: string | null;

  @ViewColumn()
  branchCount: number;
} 