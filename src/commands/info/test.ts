import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";
import ExtendedClient from "../../structures/Client";

export = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Just a regular ping command"),

  execute(interaction: ChatInputCommandInteraction, client: ExtendedClient) {
    const embed: EmbedBuilder = new EmbedBuilder()
      .setTitle("Hello World")
      .setDescription(`${client.ws.ping}`);

    interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
