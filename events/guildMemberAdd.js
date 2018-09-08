const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("");

client.login(ayarlar.token);

client.on("ready", () => {
  client.user.setGame(`on ${client.guilds.size} servers`);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

client.on("guildMemberAdd", (member) => {
	console.log(`New User ${member.user.username} has joined ${member.guild.name}` );
	member.guild.defaultChannel.send(`${member.user} Sunucumuza Katıldı ! Hoşgeldin Dostum`);
});

client.on("message", (message) => {

	if (!message.content.startsWith(ayarlar.prefix) || message.author.bot) return;

	if (message.content.startsWith(ayarlar.prefix + "medgfx")) {
		message.channel.send("MEDİUM GFX TALEBİNİZ ALINMIŞTIR ! SERDARÜNLÜ İLE İLETİŞİME GEÇİNİZ.");
	} else

	if (message.content.startsWith(ayarlar.prefix + "foo")) {
		message.channel.send("bar!");
	}
});

  client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));
