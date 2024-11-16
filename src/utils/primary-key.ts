// primary-key.ts
import { Prisma, PrismaClient } from '@prisma/client';

class PrimaryKey {
  private static instance: PrimaryKey;
  private primaryKeys: Record<string, string> = {};

  private constructor() {
    this.initializePrimaryKeys();
  }

  public static getInstance(): PrimaryKey {
    if (!PrimaryKey.instance) {
      PrimaryKey.instance = new PrimaryKey();
    }
    return PrimaryKey.instance;
  }

  private initializePrimaryKeys() {
    const models = Prisma.dmmf.datamodel.models;

    models.forEach(model => {
      const idField = model.fields.find(field => field.isId);
      if (idField) {
        this.primaryKeys[model.name] = idField.name;
      }
    });
  }

  public get<T>(model: T): string | undefined {
    const modelName = (model as any).constructor.name;
    return this.primaryKeys[modelName];
  }
}

export default PrimaryKey.getInstance();