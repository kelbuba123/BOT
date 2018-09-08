module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**!');
    member.guild.sendMessage('HoşGeldin  '+username+'İyi Gfxler Yaptırman Dileğiyle ! REVO');
};
