const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
    
.setColor('GREEN')
.setFooter("Astaroth Sunar")
.addField(`Kullanıcı Komutları`,
`\n

-**avatar** Etiketlediğiniz Kişinin Avatarını Gösterir!
-**sunucu-bilgi** Sunucunun İstatistiklerini Gösterir!
-**kullanıcı-bilgi** Etiketlediğiniz Kişinin Profilini Gösterir Veyada Kendi Profilnizi Gösterir!
-**ping** Botun Pingini Gösterir!
-**istatistik** Botun İstatistiğini Gösterir!

**Extra**

-**gif-help** Kullanıcı Komutlarını Gösterir!

**Linkler**

[**Botun Destek Sunucusuna Gitmek İçin** **__Tıkla__**](https://discord.gg/VtBEy5fM6k)    
`)
    
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-kullanıcı','kullanıcı-yardım','yardımkullanıcı','kullanıcıyardım'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Astaroth Sunar',
  usage: 'kullanıcı'
};