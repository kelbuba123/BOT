module.exports = member => {
  let guild = member.guild;
  member.send('dırırırı');
  guild.defaultChannel.sendMessage(`${member.user.tag} gitti.`);
};
