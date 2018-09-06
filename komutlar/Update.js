const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
        let yicon = bot.user.displayAvatarURL;
        let Upembed = new Discord.RichEmbed()
        .setDescription("Yeni Güncellemeler :D")
        .setColor("#54ecf9")
        .setThumbnail(yicon)
        .addField("1. s!botinfo", "Komutu geldi")
        .addField("2. s!serverinfo", "Komutu Geldi")
        .addField("3. s!kick ", "Komutu geldi")
        .addField("4. s!ban ", "Komutu geldi")
        .addField("5. s!clear {sayı} ", "Komutu geldi")
        .addField("6. s!ascii {yazı} ", "Komutu geldi")
        .addField("7. s!oylama {yazı} ", "Komutu geldi")
        .addField("8. Reklam Engelleyici", "Eklenmiştir")
        .addField("9. s!ticket", "Komutu Geldi")
        
        return message.author.send(Upembed);
}

module.exports.help = {
  name:"botinfo"
}