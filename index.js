const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$$"

client.on('ready', () => {
  client.user.setGame('$$help ' , 'https://www.twitch.tv/lucasdavid913/')
})   

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('BOT INFO')
    .setDescription(`•prefix --> $$
BOT COMMANDS
• || $$mass || $$support || $$info || $$say || $$ping || $$serverinfo || $$restart  || $$invite || $$botinfo || `)
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '405337137735663618') {
    if (message.content.startsWith(`$$restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor('RANDOM')
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'botinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('BOT INFO')
  embed.addField('Name', '[Elite] Unknown Bot', true)
  embed.addField('Prefix', '$$', true)
  embed.addField('Tag:', '3810', true)
  embed.addField('Created at:', '2018-06-20 22:10:59.660000', true)
  embed.addField('ID', '458912845438910464', true)
  embed.addField('Made with:', 'Node')
  embed.addField('Creator', '<@419472407816830986>', true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});  
   
  client.on('message', message => {    
    if(message.content.startsWith('$$mass')) {
    if(message.author.id === "405337137735663618" ||
message.author.id === "405337137735663618"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === '$$invite') {
      msg.channel.send('Invite **BOT** https://discordapp.com/api/oauth2/authorize?client_id=459436217465831424&permissions=0&scope=bot  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === '$$support') {
      msg.channel.send('support server ---> hhttps://discord.gg/9GUx6TC');
    }
  });

client.on('message', msg => {
    if (msg.content === '$$info') {
      msg.channel.send('creatorul meu este : <@419472407816830986>  ');
    }
  });

client.on('guildMemberAdd', member => {
    let channel  = member.guild.channels.find('name', '🤗【𝖂elcome-𝕲oodbye】😢');
    let memberavatar  = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', ` **Bine ai venit pe server Speram sa te distrezi alaturi de noi. Si nu uita sa citesti :beginner:𝕽ules:beginner:-ul**  `)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '🤗【𝖂elcome-𝕲oodbye】😢');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Bye -', ` **A iesit :sob:... Speram sa te mai intorci pe la noi ... Esti mereu bine venit !** `)
        .setTimestamp()

        channel.sendEmbed(embed);
});



client.login(process.env.TOKEN);
