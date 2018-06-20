const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "."

client.on('ready', () => {
  client.user.setGame('$$help ' , 'https://www.twitch.tv/lucasdavid913/')
})   


client.login(process.env.TOKEN);
