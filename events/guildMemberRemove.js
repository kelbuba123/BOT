module.exports = member => {
  let guild = member.guild;
  member.send('dırırırı');
  guild.defaultChannel.defaultChannel(`${member.user.tag} gitti.`);
};
