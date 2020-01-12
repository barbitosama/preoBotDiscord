const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete({ timeout: 3000 });

  if (args[0] === "cat") {
    const cat = await fetch("https://aws.random.cat/meow")
      .then(res => res.json())
      .then(json => json.file);
    
    const embed = new MessageEmbed()
      .setImage(cat)
      .setFooter("Powered by 'https://aws.random.cat/meow'");
    message.channel.send(embed);
  } else if (args[0] === "dog") {
    const dog = await fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(json => json.message);
    
    const embed = new MessageEmbed()
      .setImage(dog)
      .setFooter("Powered by 'https://dog.ceo/api/breeds/image/random'");
    message.channel.send(embed);
  } else if (args[0] === "fox") {
    const fox = await fetch("https://randomfox.ca/floof/")
      .then(res => res.json())
      .then(json => json.image);
    
    const embed = new MessageEmbed()
      .setImage(fox)
      .setFooter("Powered by 'https://randomfox.ca/floof/'");
    message.channel.send(embed);
  } else if (args[0] === "panda") {
    const panda = await fetch("https://some-random-api.ml/img/panda")
      .then(res => res.json())
      .then(json => json.link);
    
    const embed = new MessageEmbed()
      .setImage(panda)
      .setFooter("Powered by 'https://some-random-api.ml/img/panda'");
    message.channel.send(embed);
  } else if (args[0] === "bird") {
    const bird = await fetch("https://some-random-api.ml/img/birb")
      .then(res => res.json())
      .then(json => json.link);
    
    const embed = new MessageEmbed()
      .setImage(bird)
      .setFooter("Powered by 'https://some-random-api.ml/img/birb'");
    message.channel.send(embed);
  } else if (args[0] === "koala") {
    const koala = await fetch("https://some-random-api.ml/img/koala")
      .then(res => res.json())
      .then(json => json.link);
    
    const embed = new MessageEmbed()
      .setImage(koala)
      .setFooter("Powered by 'https://some-random-api.ml/img/koala'");
    message.channel.send(embed);
  } else { 
    message.channel.send("Les animaux disponibles sont; cat, dog, fox, panda, bird, koala!");
  }
};

exports.help = {
  name: "animals"
};
