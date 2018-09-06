const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Kullanıcı Bulunamadı!");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Yetkin yok Değişik");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu Kişi Atılamaz!");
    
    
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Atılan Kişi", `${kUser} ID Numarası : ${kUser.id}`)
    .addField("Atan Kişi :", `<@${message.author.id}> ID Numarası : ${message.author.id}`)
    .addField("Atıldığı Tarih :", message.createdAt)
    .addField("Sebeb :", kReason);

    let kickChannel = message.guild.channels.find(`name`, "bizden-olmayanlar");
    if(!kickChannel) return message.channel.send("bizden-olmayanlar metin Kanalı Bulunamadı!!");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
	
}exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

module.exports.help = {
  name:"kick"
}