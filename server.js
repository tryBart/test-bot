const Discord = require("discord.js")
const { WebhookClient } = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_BANS", "GUILD_MEMBERS", "GUILD_WEBHOOKS"] }
)
const prefix = ";"
const token = "OTYzMDU2NjU4MDY0NDc4MjE5.YlQiaA.UQqsDhYylwDBqKCXZnTWlLu3XhY"


// Comando per il test1
client.on("messageCreate", (message) => {
    if (message.content == prefix + "test2")
    if (message.author.username == "Xerusシ")
    message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": "**Puoi eseguire** questo comando!",
            "color": null
          }
        ],
        "attachments": []
      })
    else
    message.channel.send({
        "content": null,
        "embeds": [ 
          {
            "description": "**Non puoi eseguire** questo comando!",
            "color": null
          }
        ],
        "attachments": []
      })
});

// Comando per il test2
client.on("messageCreate", (message) => {
    if (message.content == prefix + "test2") 
    if (message.member.roles.cache.has("963068846531563530")) {
    message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": "**Puoi eseguire** questo comando!",
            "color": null
          }
        ],
        "attachments": []
      });
     } else {
    message.channel.send({
        "content": null,
        "embeds": [ 
          {
            "description": "**Non puoi eseguire** questo comando!",
            "color": null
          }
        ],
        "attachments": []
       }
    )};
});

// Comando per il test3
client.on("messageCreate", (message) => {
    if (message.content == prefix + "test3") 
    if (message.member.roles.cache.has("963068846531563530")) {
    message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": "**Puoi eseguire** questo comando!",
            "color": null
          }
        ],
        "attachments": []
    });
 }  else 
      message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": "**Puoi eseguire** questo comando!",
            "color": null
          }
        ],
        "attachments": []
    }
      )
})

// Comando per test4
client.on("messageCreate", (message) => {
  if (message.content == prefix + "test4") {
      const canale = client.channels.cache.find(channel => channel.id === "963181636764176384")
      canale.send({
          "content": null,
          "embeds": [
            {
              "color": null,
              "fields": [
                {
                  "name": "Comando eseguito:",
                  "value": message.content
                },
                {
                  "name": "Comando eseguito dal player:",
                  "value": message.author.username
                }
              ]
            }
          ],
          "attachments": []
        })
      }
});

// Comando per generare un numero casuale
client.on("messageCreate", (message) => {
  if (message.content == prefix + "numerocasuale") {
  const numeroCasuale = client.uptime.toPrecision()
  message.channel.send({
      "content": null,
      "embeds": [
        {
          "color": null,
          "fields": [
            {
              "name": "Numero casuale generato:",
              "value": "Numero casuale generato: " + numeroCasuale
            },
            {
              "name": "Comando eseguito dal player:",
              "value": message.author.username
            },
            {
              "name": "Nota:",
              "value": "Probabilità di numeri bassi: 50%"
            }
          ]
        }
      ],
      "attachments": []
    })
  }
})

// Comando per il kick
client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "kick")) {
    var autore = message.member;
    var target = message.mentions.members.first();
    if (autore == target) {
      message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": ":warning: • **Errore riscontrato**",
            "color": 12064021,
            "fields": [
              {
                "name": "Motivazione:",
                "value": "Non puoi kickarti da solo!"
              }
            ]
          }
        ],
        "attachments": []
      })
      return;
    }
    if (!target.kickable) {
      message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": ":warning: • **Errore riscontrato**",
            "color": 12064021,
            "fields": [
              {
                "name": "Motivazione:",
                "value": "Non riesco a kickare questo utente!"
              }
            ]
          }
        ],
        "attachments": []
      })
      return;
    }
    if (autore.roles.highest.position <= target.roles.highest.position) {
      message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": ":warning: • **Errore riscontrato**",
            "color": 12064021,
            "fields": [
              {
                "name": "Motivazione:",
                "value": "Non puoi kickare una persona con un grado piu' alto di te."
              }
            ]
          }
        ],
        "attachments": []
      })
      return;
  }
    if (target.kickable) {
      const canale = client.channels.cache.find(channel => channel.id === "963181636764176384")
      target.kick()
     canale.send({
        "content": null,
        "embeds": [
          {
            "description": ":warning: • **Kick registrato...**",
            "color": 12064021,
            "fields": [
              {
                "name": "Utente kickato:",
                "value": target.user.username + " è stato kickato dal Server"
              },
              {
                "name": "Motivazione:",
                "value": "--- (in sviluppo)."
              }
            ]
          }
        ],
        "attachments": []
      })
      return
  }
}
});

// Comando per il BAN
client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "ban")) {
    var autore = message.member;
    var target = message.mentions.members.first();
    if (autore == target) {
      message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": ":warning: • **Errore riscontrato**",
            "color": 12064021,
            "fields": [
              {
                "name": "Motivazione:",
                "value": "Non puoi bannarti da solo!"
              }
            ]
          }
        ],
        "attachments": []
      })
      return;
    }
    if (!target.bannable) {
      message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": ":warning: • **Errore riscontrato**",
            "color": 12064021,
            "fields": [
              {
                "name": "Motivazione:",
                "value": "Non riesco a bannare questo utente!"
              }
            ]
          }
        ],
        "attachments": []
      })
      return;
    }
    if (autore.roles.highest.position <= target.roles.highest.position) {
      message.channel.send({
        "content": null,
        "embeds": [
          {
            "description": ":warning: • **Errore riscontrato**",
            "color": 12064021,
            "fields": [
              {
                "name": "Motivazione:",
                "value": "Non puoi bannare una persona con un grado piu' alto di te."
              }
            ]
          }
        ],
        "attachments": []
      })
      return;
  }
    if (target.bannable) {
      const canale = client.channels.cache.find(channel => channel.id === "963181636764176384")
      target.ban()
     canale.send({
        "content": null,
        "embeds": [
          {
            "description": ":warning: • **Ban registrato...**",
            "color": 12064021,
            "fields": [
              {
                "name": "Utente bannato:",
                "value": target.user.username + " è stato bannato dal Server"
              },
              {
                "name": "Motivazione:",
                "value": "--- (in sviluppo)"
              }
            ]
          }
        ],
        "attachments": []
      })
      return
  }
}
});

// Comando per l'unban
client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "unban")) {
    var autore = message.member;
    var target = message.mentions.members.first();
    if (autore.roles.cache.has("963068846531563530")) {
      const canale = client.channels.cache.find(channel => channel.id === "963181636764176384")
     canale.send({
        "content": null,
        "embeds": [
          {
            "description": ":warning: • **Unban registrato...**",
            "color": 12064021,
            "fields": [
              {
                "name": "Utente unbannato:",
                "value": target.user.username + " è stato unbannato dal Server"
              },
              {
                "name": "Motivazione:",
                "value": "--- (in sviluppo)"
              }
            ]
          }
        ],
        "attachments": []
      })
      return
  }
}
});

// Comando Ping
client.on("messageCreate", (message) => {
  if (message.content == prefix + "ping") {
  message.channel.send({
      "content": null,
      "embeds": [
        {
          "color": null,
          "fields": [
            {
              "name": "Ping del bot:",
              "value": `${client.ws.ping}ms`
            }
          ]
        }
      ],
      "attachments": []
    })
  }
})

// Comando AccettaAppello
client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "accettaAppello")) {
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const nomeAppellato = args.join(" ");
    if (!nomeAppellato) return message.channel.send({
      "content": null,
      "embeds": [
        {
          "color": 14622495,
          "fields": [
            {
              "name": "Errore nel comando:",
              "value": "Aggiungi un nome di un utente"
            }
          ]
        }
      ],
      "attachments": []
    })
  message.channel.send({
    "content": null,
    "embeds": [
      {
        "title": "Moderazione - Udine, Italy",
        "color": 14622495,
        "fields": [
          {
            "name": "Appello di:",
            "value": nomeAppellato
          },
          {
            "name": "Risposta appello:",
            "value": "Accettato"
          },
          {
            "name": "Staffer:",
            "value": message.author.username
          }
        ]
      }
    ],
    "attachments": []
    })
   }
})

// Comando AccettaAppello
client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "rifiutaAppello")) {
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const nomeAppellato = args.join(" ");
    if (!nomeAppellato) return message.channel.send({
      "content": null,
      "embeds": [
        {
          "color": 14622495,
          "fields": [
            {
              "name": "Errore nel comando:",
              "value": "Aggiungi un nome di un utente"
            }
          ]
        }
      ],
      "attachments": []
    })
  message.channel.send({
    "content": null,
    "embeds": [
      {
        "title": "Moderazione - Udine, Italy",
        "color": 14622495,
        "fields": [
          {
            "name": "Appello di:",
            "value": nomeAppellato
          },
          {
            "name": "Risposta appello:",
            "value": "Rifiutato"
          },
          {
            "name": "Staffer:",
            "value": message.author.username
          }
        ]
      }
    ],
    "attachments": []
    })
   }
})


// Comando che viene settato quando il bot si AVVIA
client.on("ready", (client) => {
    console.log("BOT avviato!"),
    client.user.setActivity('Moderando Udine', { type: "PLAYING"})
});


// Comando per l'avvio del bot
client.login(token);


