const { Client, MessageEmbed } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("guildMemberAdd", member => {
  member.send("Salut à toi !");
  const channel = client.channels.find(r => r.name === "logs");
  channel.send(`${member} a rejoint le serveur !`);
});

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === "ping") msg.channel.send("Pong!");
  if (cmd === "pong") msg.channel.send("Ping!");
  if (cmd === "lol") msg.channel.send("c?lol");
  if (cmd === "repeat") {
    msg.channel.send(args.join(" "));
    msg.delete({ timeout: 3000 }).then(console.log("Un Message a été supprimé"));
  }
  if (cmd === "role") {
    const role = msg.guild.roles.find(r => r.name === args[0]);
    if(!role) return msg.channel.send("Ce rôle n'existe pas !");
    if (msg.member.roles.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      msg.channel.send(`J'ai supprimé le rôle ${role} à ${msg.author}.`);
    } else {
      msg.member.roles.add(role);
      msg.channel.send(`J'ai ajouté le rôle ${role} à ${msg.author}.`);
    }
  }
  if (cmd === "sinfo") {
    const embed = new MessageEmbed()
      .setDescription(msg.guild.name)
      .setThumbnail(msg.guild.iconURL())
      .addField("Owner", msg.guild.owner.user.tag, true)
      .addField("Membres", msg.guild.memberCount, true)
      .setImage(msg.guild.owner.user.avatarURL())
      .setFooter("Sincerely yours")
      .setTimestamp();
    msg.channel.send(embed);
  }
});

client.login(TOKEN);

// ----------------------------

client.on("ready", () => console.log("Je suis prêt !"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
