const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const embed = new MessageEmbed()
    .setDescription(message.guild.name)
    .setThumbnail(message.guild.iconURL())
    .addField("Owner", message.guild.owner.user.tag, true)
    .addField("Membres", message.guild.memberCount, true)
    .setImage(message.guild.owner.user.avatarURL())
    .setFooter("Sincerely yours")
    .setTimestamp();
  message.channel.send(embed);
};
