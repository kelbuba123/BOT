const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = .;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^'); 
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gfxiste') {
	msg.reply('Merhabalar ! Gfx Talebiniz içinhttps://docs.google.com/forms/d/e/1FAIpQLSeVMwxwb6Xr6Jmx-KJ5o0ECkpwxa63cwP2hxTkeUZSURUsZ9g/viewform?usp=sf_link  Doldurunuz !');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'profgfx') {
	  if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Merhabalar ! Profösyonel Gfx Talebiniz Alınmıştır! Yakın Zamanda Bekleyin'); 
		} else {
	msg.reply('Merhabalar ! Profösyonel Gfx Talebiniz Alınmıştır! Yakın Zamanda Bekleyin');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'projesuresi') {
	msg.reply('Merhabalar ! Projeniz Hazırlanmaktadır ! Dmnize Mesaj Gelecektir !');
		}
	}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(NDg2ODkwMzE3ODkxNzY0MjI0.DnFr2g.X_1g-yzdA4w9IFpBdxLnEKJ9QVw);