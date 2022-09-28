import {
  ApplicationCommandDataResolvable,
  Client,
  Collection,
  GatewayIntentBits,
} from "discord.js";
import fs from "fs";
import path from "path";

interface slashCommandsOptions {
  guildId?: string;
  commands: ApplicationCommandDataResolvable[];
}

export default class ExtendedClient extends Client {
  public commands: Collection<string, any> = new Collection();

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers,
      ],
    });
  }

  start() {
    this.login(process.env.DISCORD_TOKEN);
    this.eventHandler();
    this.slashCommandsHandler(this, "../commands");
  }

  async importFile(file: string) {
    return (await import(file))?.default;
  }

  async addCommands({ guildId, commands }: slashCommandsOptions) {
    if (guildId) {
      this.guilds.cache.get(guildId)?.commands.set(commands);
      console.log(`Adding commands to ${guildId}`);
    } else if (!guildId) {
      this.application?.commands.set(commands);
      console.log(`Adding commands globally`);
    }
  }

  async slashCommandsHandler(bot: Client, dir: string): Promise<void> {
    const commandsPath: string = path.join(__dirname, dir); // => C:/Users/...
    const commandsRecords: string[] = fs.readdirSync(commandsPath);

    for (const record of commandsRecords) {
      const stats = fs.statSync(path.join(commandsPath, record));

      if (stats.isDirectory()) {
        this.slashCommandsHandler(bot, path.join(dir, record));
      }

      if (record.endsWith(".ts") || record.endsWith(".js")) {
        const command = await this.importFile(path.join(commandsPath, record));
        this.commands.set(command.data.name, command);
      }
    }

    const slashCommands: ApplicationCommandDataResolvable[] = [
      ...Array.from(this.commands.values()).map((c) => c.data.toJSON()),
    ];

    this.on("ready", () => {
      this.addCommands({
        guildId: process.env.GUILD_ID,
        commands: slashCommands,
      });
    });
  }

  async eventHandler() {
    const eventFolderPath = path.join(__dirname, "..", "events");
    const eventFolder = fs.readdirSync(eventFolderPath);

    for (const event of eventFolder) {
      const eventFile = await this.importFile(
        path.join(eventFolderPath, event)
      );
      this.on(eventFile.name, (...args) => eventFile.run(this, ...args));
    }
  }
}
