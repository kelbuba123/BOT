const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot İsmi", bot.user.username)
    .addField("Hizmete Girdiği Tarih", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
