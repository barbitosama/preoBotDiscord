module.exports = (client, message, args) => {
  message.channel.send(args.join(" "));
  message.delete({ timeout: 3000 }).then(console.log("Un Message a été supprimé"));
};
