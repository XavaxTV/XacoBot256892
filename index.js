// Modules //



const Discord = require('discord.js')
const ms = require('ms')
const fs = require('fs')
const chalk = require('chalk')
const nbx = require('noblox.js')

// Miscellaneous //
const client = new Discord.Client()


const welcome = require("./welcome");
welcome(client)

const {
    token,
    PREFIX,
    ANTI_INSULTE
} = require('./config.json')

const colors = require('./colors.json')
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

client.commands = new Discord.Collection()


// Bot Code //

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


const activities = [
    "!help | 🌀 BOT 1.0",
    `📷 » XavaxTV#0001`
];
client.setInterval(() => {
    const index = Math.floor(Math.random() * activities.length);
    client.user.setActivity(activities[index], {
        type: "WATCHING"

    });
}, 7000);


const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#2f3136",
        reaction: "🎉"
    }
});


client.on('messageDelete', async message => {
    db.set(`msg_${message.channel.id}`, message.content)
    db.set(`author_${message.channel.id}`, message.author.id)
})

client.on('message', async message => {

    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : PREFIX;


    if (!message.content.startsWith(prefix)) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();



    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    try {
        command.execute(message, args, client);
        console.log(chalk.greenBright('[COMMAND]'), `${message.author.tag} a utilisé la commande: ` + commandName)
    } catch (error) {
        console.log(error);
        message.reply('il y a eu une err avec cette commande! ```\n' + error + "\n```");
    }
});



client.on('message', message => {
    if(ANTI_INSULTE.some(word => message.content.toLowerCase().includes(word))){
  
           const antiinsulte = new Discord.MessageEmbed()
          .setTitle(":no_entry: Filtre anti-insulte détecté")
          .setDescription("**"+message.author.username+"** merci de ne pas mettre d'insulte dans tes messages.")
          .setTimestamp()
          .setColor("#2f3136")
          .setFooter(message.author.username)
          message.channel.send(antiinsulte).then(message => message.delete({ timeout: 5000 }));
          message.delete()
  
    }})


    client.on('message', message => {
        if (message.content === `!join`)
        client.emit(`guildMemberAdd`, message.member);
                                                               // A supprimer apres
      if (message.content === `!leave`)
        client.emit(`guildMemberRemove`, message.member);
      
      })


      client.on('message', message => {

        if (message.member.hasPermission('ADMINISTRATOR')) {
    
        var messagepourticket = new Discord.MessageEmbed()
        .setTitle('Les règles valent pour __tout le monde__.')
        .setDescription(`📜 *Tout le monde est censé les connaître et les appliquer sans discuter.*\n\n**I** - Le **respect** de tous et des opinions de tous est primordial.\n\n**II** - **Respect de la loi**, __toute activité illégale est punie__.\n\n**III** - __On ne remet pas en question les ordres et décisions du **staff**__, sauf si on est staff soi-même.\n\n**IV** - **Pub sans autorisation** (pas la peine de demander) = **ban**.\n\n**V** - **Pas de mentions inutiles**.\n\n**VI** - **Spam et flood interdits**. Gifs à utiliser avec modération.\n\n**VII** - Pas de NSFW (+18).\n\n**VIII** - Si vous êtes kick/ban et que vous invitez des gens pour plaider en votre faveur, **ils seront ban également**.\n\n**IX** - En vocal, __on ne crie pas__, et on ne spam pas la __connexion/déconnexion__.X - Si vous quittez le serveur alors qu'on vous accuse de quelque chose, pendant qu'un modo vous parle, ou que vous purgez un mute, **vous êtes ban**.\n\n\n**Passez un agréable moment sur le serveur Xaco Graphisme ! , apres avoir réagi avec la reaction si dessous attendez quelques secondes**`)
        .setColor("#BB0B0B")
    
        if(message.content === "!rg"){
            message.channel.send(messagepourticket).then(message => message.react('<a:certified:788930753958379580>')
            )
        } else {
          return 
        }
    }})

      client.on("messageReactionAdd", async (reaction, user) => {

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        
        if (user.bot) return;
        if (!reaction.message.guild) return;
        
        if (reaction.message.guild.id !== "780560795762950174") return; 
        
        
        if (reaction.message.channel.id === "780902566594478101") {

            if (reaction.message.message.id === '793194634402725950') {
          
          if (reaction.emoji.id === "788930753958379580") { // A changer
            await reaction.message.guild.members.cache.get(user.id).roles.add("780872652465766480") 
            await reaction.message.guild.members.cache.get(user.id).roles.remove("789624549490032669") 
          }
        }
        } else {
          return;
        }
      })

      client.on("messageReactionRemove", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.guild.id !== "780560795762950174") return; // A changer
        
        if (reaction.message.channel.id === "780902566594478101") {  // A changer
          if (reaction.emoji.id === "790280900873027585") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("789624549490032669")  // A changer

          }

        } else {
          return;
        }
      })


        
    client.on('guildCreate', guild => {

        if(!guild.id === '790019288190812171') return guild.leave
    })


    client.on('message', message => {

      if (message.author.id === '329323032143462420') {
  
      var messagepourticket = new Discord.MessageEmbed()
      .setTitle('Support / Help')
      .setDescription(`<a:fl:792483183986737192> ︙Questions ?\n<a:fl:792483183986737192> ︙Partenariats ?\n<a:fl:792483183986737192> ︙Plaintes ?\n<a:fl:792483183986737192> ︙Suggestions ?\n \n⭐️︙Ouvre un ticket !`)
  
      if(message.content === "!ticket"){
          message.channel.send(messagepourticket).then(message => message.react('📩')
          )
      } else {
        return 
      }
  }})


  client.db = require('./db.json')

  client.on('messageReactionAdd', async (reaction, user, message) => {
    if(reaction.emoji.name === "📩"){
    if (user.id === client.user.id) return;
    reaction.users.remove(user)
    if (Object.values(client.db.tickets).some(ticket => ticket.author === user.id)) return reaction.message.channel.send('Vous avez déjà un ticket d\'ouvert.').then(msg => {
                    msg.delete({ timeout: 3000 })
                  })
            const channel = await reaction.message.guild.channels.create(`ticket ${user.username}`, {
                type: 'text',
                parent: '792486549623013406',
                permissionOverwrites: [{
                    id: reaction.message.guild.id,
                    deny: 'VIEW_CHANNEL'
                }, {
                    id: user.id,
                    allow: 'VIEW_CHANNEL'
                }, {
                    id: "792443752957870151",
                    allow: 'VIEW_CHANNEL'
                }]
            })
            client.db.tickets[channel.id] = {
                author: user.id
            }
            fs.writeFileSync('./db.json', JSON.stringify(client.db))
            channel.send(`${user}`)
            channel.send(new Discord.MessageEmbed()
                .setDescription(`Bonjour / Bonsoir, ${user.username} un Staff va
                vous prendre en charge.\n
                
                **Ticket [ Aide/Question/Partner ]**`))
            reaction.message.channel.send(`Votre ticket ${channel} a été créé !`).then(msg => {
              msg.delete({ timeout: 3000 })
            })
        }


        if(reaction.emoji.id=== "792473065850273812"){

          const owner = reaction.guild.member.owner
          owner.send('slt')

        }
    });


    let stats = {
      serverID: '780560795762950174',
      member: "785118346290266143"
  }
  
    client.on('guildMemberAdd', member => {
      console.log("1")
         if(member.guild.id !== stats.serverID) return;
         client.channels.cache.get(stats.member).setName(`📍┃𝗠𝗲𝗺𝗯𝗿𝗲𝘀 : ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
     });
     
     client.on('guildMemberRemove', member => {
         console.log("2")
         if(member.guild.id !== stats.serverID) return;
         client.channels.cache.get(stats.member).setName(`📍┃𝗠𝗲𝗺𝗯𝗿𝗲𝘀 : ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
     })
     

;client.login(token).catch(error => {
    console.log(chalk.red('[ERROR] ') + error)
})
