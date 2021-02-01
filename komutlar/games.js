const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('----------------------').then(message => {
      var yeniyazi = ['https://cdn.discordapp.com/attachments/805524199078756413/805751903681511444/sailoradventures.png'];
      var yyazi = yeniyazi[Math.floor(Math.random() * yeniyazi.length)];
            message.channel.send('**Sailor Adventures**');
            message.channel.send(`${yyazi}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['games' , 'oyunlar'],
  permLevel: 0
};

exports.help = {
  name: 'games',
  description: 'Sunucuya ait oyunları gösterir!.',
  usage: 'games'
};