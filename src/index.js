const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { readdirSync } = require("fs");

const config = require("./config.json")

const client = new Client({ intents: 32767 });
client.commands = new Collection();
client.buttons = new Collection();
client.modals = new Collection();
client.commandArray = [];

const functionFolders = readdirSync("./src/functions");
for (const folder of functionFolders) {
  const functionFiles = readdirSync(`./src/functions/${folder}`).filter((file) =>
    file.endsWith(".js")
  );
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(config.token);
