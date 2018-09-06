const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Oylama Başlatmak için Administratör Yetkiniz Olması Lazım');
        if(!args[0]) return message.channel.send('Kullanımı : s!oylama {Oylama Sorusu}');
        
        const oyembed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter('Oy Kullanabilmek için Tepki Ver')
        .setDescription(args.join(' '))
        .setTitle(`Oylamayı Oluşturan: ${message.author.username}`);

        let msg = await message.channel.send(oyembed)
        .then(function (msg) {
            msg.react("👍");
            msg.react("👎");
            
            }).catch(function(error) {
            console.log(error);
        });


}




module.exports.help = {
  name:"oylama"
}