const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Sunucu Hakkında")
        .setColor("#54ecf9")
        .setThumbnail(sicon)
        .addField("Sunucu Adı :", message.guild.name)
        .addField("Üzerinde Düzenlendi : ", message.guild.createdAt)
        .addField("Katıldığın Tarih :", message.member.joinedAt)
        .addField("Sunucudaki Kişi Sayısı", message.guild.memberCount);
        

        return message.channel.send(serverembed);

}

module.exports.help = {
  name:"botinfo"
}