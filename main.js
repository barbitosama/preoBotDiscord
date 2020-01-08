const { Client} = require('discord.js');
const client = new Client({ disableEveryone : true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '121') msg.channel.send('pong');
  if (msg.content === '122') msg.channel.send('@everyone, salut à tous !',{ disableEveryone : false});
  if (msg.content === '123') msg.channel.send('@everyone (noteveryone), salut à tous !');
});

client.login('NjY0NDgwNDc3NTQ5NDI4Nzc3.XhXr7g.aPFrdC19CZIxfrbePDMVlQq3BS0');