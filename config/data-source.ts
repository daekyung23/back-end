import { DataSource } from "typeorm"
import config from "./index"

export const AppDataSource = new DataSource({
  ...config.typeorm,
  entities: [
    `${config.paths.absolute.entities}/**/*.{ts,js}`,
    `${config.paths.absolute.views}/**/*.{ts,js}`
  ],
  migrations: [`${config.paths.absolute.migrations}/**/*.{ts,js}`],
  subscribers: [`${config.paths.absolute.subscribers}/**/*.{ts,js}`]
})