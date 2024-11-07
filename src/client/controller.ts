import { Request, Response } from 'express'
import { ClientSchema, ClientViewSchema } from './schema'
import { Client } from './entity'
import { ClientView } from './view'
import { DataSource } from 'typeorm'

export class ClientController {
  constructor(private dataSource: DataSource) {}

  async searchClients(
    req: Request<{}, {}, {}, typeof ClientViewSchema.request.search>, 
    res: Response<{ clients: ClientView[], total: number }>
  ) {
    const query = ClientViewSchema.schema.search.parse(req.query)
    const clientViewRepo = this.dataSource.getRepository(ClientView)
    
    const [clients, total] = await clientViewRepo.findAndCount({
      where: query
    })
    
    res.json({ clients, total })
  }

  async createClient(
    req: Request<{}, {}, typeof ClientSchema.request.create>, 
    res: Response<{ client: Client }>
  ) {
    const body = ClientSchema.schema.create.parse(req.body)
    
    const clientRepo = this.dataSource.getRepository(Client)
    const client = clientRepo.create(body)
    await clientRepo.save(client)
    
    res.json({ client })
  }

  async updateClient(
    req: Request<{ client_id: number }, {}, typeof ClientSchema.request.update>,
    res: Response<{ client: Client }>
  ) {
    const body = ClientSchema.schema.update.parse(req.body)
    
    const clientRepo = this.dataSource.getRepository(Client)
    await clientRepo.update(req.params.client_id, body)
    const client = await clientRepo.findOneByOrFail({ 
      client_id: req.params.client_id 
    })
    
    res.json({ client })
  }
}