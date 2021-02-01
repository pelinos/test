const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Mesaj yükleniyor.').then(message => {
      var helpler = ['**Help komutu için şuanda kodlanmadım, lütfen biraz sabret!**'];
      var help = helpler[Math.floor(Math.random() * helpler.length)];
            message.edit(`${help}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'helped.',
  usage: 'help'
};