module.exports = member => {
  let guild = member.guild;
  member.send('dırırırı');
  guild.member.defaultChannel.send(`${member.user.tag} gitti.`);
};
