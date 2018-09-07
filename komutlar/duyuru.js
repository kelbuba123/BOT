const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let message = args.slice(0).join(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
    if (message.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(${message})
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuruyap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
