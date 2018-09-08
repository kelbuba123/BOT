module.exports = member => {
  let guild = member.guild;
  member.send('dırırırı');
  guild.member.sendMessage(`${member.user.tag} gitti.`);
};
