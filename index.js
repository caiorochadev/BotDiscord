
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const dotenv = require('dotenv');
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

//importação dos cmd
const fs = require("node:fs")
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))



for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const commands = require(filePath)
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command)
  }else {
    console.log(`Esse comando em ${filePath} está com "Data ou "execute" ausente. `)
  }
}

client.once(Events.ClientReady, c => {
  console.log(`Pronto, ${c.user.tag} está pronto para te ajudar a estudar`);
});


client.login(TOKEN);


// client.on('message', msg => {
//   if (msg.content == 'cursos') {
//     msg.reply('Ola dev, como posso te ajudar? temos cursos NLW, Digita ai, IGNITE ou SPORTS')
//   }

// })
