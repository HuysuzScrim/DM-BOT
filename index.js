const { Client, GatewayIntentBits, Partials } = require("discord.js");
const config = require("./config.js");

const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});
module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(config.token || process.env.TOKEN).catch(e => {
console.log("The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!")
})

client.on("messageCreate", async message => {
  let csl = "995107583717289984"
  const csdc = require("discord.js")

  if(message.author.id === client.user.id) return;
  if(!message.guild) { 
client.channels.cache.get(csl).send({embeds: [new csdc.EmbedBuilder()
  .setAuthor({name: `${message.author.username}`})
  .setColor("#f4ca02")
  .setFooter({text: 'Huysuz Dm Sistemi!'})
  .setDescription(`${message.author.id}`)
    .setTimestamp()
.setThumbnail(message.author.displayAvatarURL())
  .addFields({ name:"Mesajı;", value: message.content })
]
})
  }
  })

  client.on('messageCreate', message => {
    const csdc = require("discord.js")
    /*if(message.content.includes("discord.gg/")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda reklam kesinlikle yasaktır!`)
    }*/
    if(message.content.includes("aq")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("discord.gg/")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda reklam kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("amk")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("oç")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("piç")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("amına")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("salak")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("göt")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("orusbu")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("oruspu")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("siktir")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("sik")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("sikerim")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("yarrak")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("yarram")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("sübyan")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
    if(message.content.includes("sübyancı")) {
      message.delete()
      message.channel.send(`${message.member} bu sunucuda küfür kesinlikle yasaktır!`)
      message.channel.send({embeds: [new csdc.EmbedBuilder()
        .setColor("#f4ca02")
        .setDescription(`**<@${message.member.id}> Uyarıldınız!** :warning: \n\n**3 uyarı alırsanız sunucudan otomatik banlanırsınız. :x:**`)
        .setThumbnail(client.user.displayAvatarURL())

          .setTimestamp()
      ]
      })
    }
  })

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
