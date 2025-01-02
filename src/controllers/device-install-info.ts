import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { CreateInputData, UncheckedUpdateInput } from '@lib/prisma'

const MODEL = 'device_install_info' as const
const VIEW = 'v_device_install_info' as const

export class DeviceInstallInfoController extends Controller<typeof MODEL, typeof VIEW> {
  service = services.deviceInstallInfo

  // Defined At Controller & Service -------------------------------------------
  createWithClientBranchId = async (req: Request, res: Response) => {
    const result = await this.service.createWithClientBranchId(
      req.validated.body as CreateInputData<typeof MODEL> & { 
        device_id: number, 
        client_branch_id: number 
      }
    )
    res.json(result)
  }

  deleteWithWarehouseId = async (req: Request, res: Response) => {
    const result = await this.service.deleteWithWarehouseId(
      req.validated.query as { 
        device_id: number, 
        warehouse_id: number 
      }
    )
    res.json(result)
  }

  // Override At Controller ---------------------------------------------------
  override update = async (req: Request, res: Response) => {
    const result = await this.service.update(
      req.validated.body as UncheckedUpdateInput<typeof MODEL>
    )
    res.json(result)
  }
}