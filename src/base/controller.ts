
import { Container } from '@base/container'
import { PrismaModels } from '@lib/prisma'
import type { Request, Response } from 'express'
import { Service } from '@base/service'

//역할: 응답 json 포맷팅, HTTP 상태 코드 반환, service 호출
export class Controller<
  ModelType extends keyof PrismaModels,
  ViewType extends keyof PrismaModels = ModelType
>  extends Container<ModelType, ViewType> {
  service: Service<ModelType, ViewType>
  
  create = async (req: Request, res: Response) => {
    const data = req.validated.body
    const result = await this.service.create({ 
      data 
    } as Parameters<PrismaModels[ModelType]['create']>[0])
    res.status(201).json(result)
  }

  findOne = async (req: Request, res: Response) => {
    const { [this.primaryKey]: fieldValue } = req.validated.query as Record<string, any>
    const result = await this.service.findOne({
      where: { [this.primaryKey]: fieldValue }
    } as Parameters<PrismaModels[ModelType]['findUnique']>[0])
    res.json(result)
  }

  findMany = async (req: Request, res: Response) => {
    const uniqueFieldPlural = this.primaryKey + 's'
    const { [uniqueFieldPlural]: fieldValue } = req.validated.query as Record<string, any>
    const result = await this.service.findMany({ 
      where: { [uniqueFieldPlural]: { in: fieldValue } }
    } as Parameters<PrismaModels[ModelType]['findMany']>[0])
    res.json(result)
  }

  update = async (req: Request, res: Response) => {
    const { [this.primaryKey]: value, ...data } = req.validated.body as Record<string, any>
    const result = await this.service.update({ 
      where: { [this.primaryKey]: value },
      data
    } as Parameters<PrismaModels[ModelType]['update']>[0])
    res.json(result)
  }

  delete = async (req: Request, res: Response) => { 
    const uniqueField = this.primaryKey as keyof typeof req.validated.query
    const { [uniqueField]: fieldValue } = req.validated.query as Record<string, any>
    const result = await this.service.delete({ 
      where: { [uniqueField]: fieldValue },
    } as Parameters<PrismaModels[ModelType]['delete']>[0])
    res.json(result)  
  }
}