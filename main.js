const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("guildMemberAdd", member => {
  member.send("Salut à toi !");
  const channel = client.channels.find(r => r.name === "logs");
  channel.send(`${member} a rejoint le serveur !`);
});

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) msg.channel.send("Pong!");
  if (cmd === `${PREFIX}pong`) msg.channel.send("Ping!");
  if (cmd === `${PREFIX}lol`) msg.channel.send("c?lol");
});

client.login(TOKEN);

// ----------------------------

client.on("ready", () => console.log("Je suis prêt !"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
