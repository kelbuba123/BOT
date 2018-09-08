module.exports = member => {
  let guild = member.guild;
  member.send('niye gittin?');
  member.guild.defaultChannel.send(`${member.user.username} gitti.`);
};

