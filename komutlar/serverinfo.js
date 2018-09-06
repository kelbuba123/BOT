const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Sunucu İsmi", message.guild.name)
    .addField("Kurulduğu Tarih", message.guild.createdAt)
    .addField("Katıldığon Tarih", message.member.joinedAt)
    .addField("Üye Sayısı", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
