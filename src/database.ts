import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "main.db",
  synchronize: true,
  entities: [User],
  logging: true,
});
