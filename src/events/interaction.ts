import { ChatInputCommandInteraction } from "discord.js";
import ExtendedClient from "../structures/Client";

export = {
  name: "interactionCreate",
  run(client: ExtendedClient, interaction: ChatInputCommandInteraction) {
    if (!interaction.isChatInputCommand) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    command.execute(interaction, client);
  },
};
