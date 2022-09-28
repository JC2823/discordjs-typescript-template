import ExtendedClient from "../structures/Client";

export = {
  name: "ready",
  run(client: ExtendedClient) {
    console.log(`Connected as ${client.user?.tag}`);
  },
};
