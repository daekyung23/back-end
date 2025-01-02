import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma, CreateInputData, UncheckedUpdateInput, FindUniqueWhere } from '@lib/prisma'
import type { Simplify } from 'type-fest'
import type { SearchQuery, SearchResult } from '@base/types'

const MODEL = 'device_install_info' as const
const VIEW = 'v_device_install_info' as const

export class DeviceInstallInfoService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.device_install_info, prisma.v_device_install_info)
  // Defined At Controller & Service -------------------------------------------
  createWithClientBranchId = async (
    body: CreateInputData<typeof MODEL> & { device_id: number, client_branch_id: number }
  ) => {
    const { client_branch_id, device_id, ...installInfo } = body

    return prisma.$transaction(async (tx) => {
      // 1) 설치 정보 생성
      const created = await tx.device_install_info.create({
        data: {
          device_id,
          ...installInfo
        }
      })

      // 2) client_branch 위치 검색
      const location = await tx.location.findFirst({
        where: { client_branch_id }
      })
      if (!location) throw new Error('유효하지 않은 client_branch_id')

      // 3) location_log 생성
      const locationLog = await tx.device_location_log.create({
        data: {
          device_id,
          location_id: location.location_id,
          location_date: new Date(),
          location_detail: "장비 설치"
        }
      })

      // 4) device의 last_location_log 업데이트
      await tx.device.update({
        where: { device_id },
        data: { last_location_log_id: locationLog.device_location_log_id }
      })

      return { 
        [MODEL]: {
          ...created,
          location: location,
          location_log: locationLog
        }
      }
    })
  }

  deleteWithWarehouseId = async (query: { device_id: number, warehouse_id: number }) => {
    const { device_id, warehouse_id } = query

    return prisma.$transaction(async (tx) => {
      // 1) 설치 정보 삭제
      const deleted = await tx.device_install_info.delete({
        where: { device_id }
      })

      // 2) warehouse 위치 검색
      const location = await tx.location.findFirst({
        where: { warehouse_id },
      })
      if (!location) throw new Error('유효하지 않은 warehouse_id')

      // 3) location_log 생성
      const locationLog = await tx.device_location_log.create({
        data: {
          device_id,
          location_id: location.location_id,
          location_date: new Date(),
          location_detail: "장비 회수"
        }
      })

      // 4) device의 last_location_log 업데이트
      const device = await tx.device.update({
        where: { device_id },
        data: { last_location_log_id: locationLog.device_location_log_id }
      })

      return { 
        [MODEL]: {
          ...deleted,
          location: location,
          location_log: locationLog,
          updated_device: device
        }
      }
    })
  }

  // Override At Service -------------------------------------------------------
  override update = async (data: UncheckedUpdateInput<typeof MODEL>) => {
    const { device_id, ...updateData } = data
    return this.repository.update({
      where: { device_id },
      data: updateData
    })
  }
}