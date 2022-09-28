// Environment variables
import { config } from "dotenv";
config();
import "reflect-metadata";

// Importing and creating a client
import ExtendedClient from "./structures/Client";
import { AppDataSource } from "./database";

async function main() {
  try {
    await AppDataSource.initialize();
    const client: ExtendedClient = new ExtendedClient();
    client.start();
  } catch (e) {
    console.log(e);
  }
}

main();
