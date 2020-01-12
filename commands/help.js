exports.run = (client, message) => {
  message.channel.send("Les commandes du bot sont : animals <animal>, lol, ping, pong, repeat, role, sinfo. Celles-ci sont précédés du préfix : 'c?'.");
};

exports.help = {
  name: "help"
};
