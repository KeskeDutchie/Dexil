import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

dotenv.config(); // Load environment variables

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
});

console.log("Hello World");

client.login(process.env.BOT_TOKEN) // Logs in the bot with the token

client.once('ready', () => {
    console.log("Login was successful");
});

client.on('messageCreate', async function(message) {
    if(message.author.displayName === "Dex_Sleep") {
        message.reply(`Echo: ${message.content}`);
    }
});
