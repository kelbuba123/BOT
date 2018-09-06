const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Yetkin Yok Değişik!");
    if(args[0] == "help"){
      message.reply("Kullanımı: s!ban <Kişi> <Sebeb>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu Kişi Banlanamaz");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banlanan Kişi", `${bUser} ID Numarası: ${bUser.id}`)
    .addField("Banlayan Kişi", `<@${message.author.id}> ID Numarası ${message.author.id}`)
    .addField("Sebeb", bReason);

    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}