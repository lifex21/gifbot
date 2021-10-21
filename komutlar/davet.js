 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 

.addField("Yapımcım ", " <@717428825579061280>")

.setDescription(`**Botun Davet Linki ;** [TIKLA](https://discord.com/oauth2/authorize?client_id=897094097909743677&scope=bot&permissions=8589803513) \n**Destek Sunucusu ;** [TIKLA](https://discord.gg/VtBEy5fM6k)`) 
.setThumbnail(client.user.avatarURL)
.setFooter(`${message.author.username} Başarıyla Davet Sistemi Kullandı!`, message.author.avatarURL)
.setColor(`GREEN`)

return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davet-et','botu-ekle'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'Astaroth',
  usage: 'davet'
}; 