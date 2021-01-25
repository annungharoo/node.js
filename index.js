const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
  if(message.content === 'ㅇㅅㅇ') {
    message.reply('야생의 상추를 잡았다');
  }
});

client.on('message', (message) => {
  if(message.content == '안녕') {
    const embed = new Discord.MessageEmbed()
      .setTitle('하루')
      .setDescription( '${message.author.username} 님안녕하세요')
      .setColor('#00ffff')
    message.channel.send(embed)
  };

});
client.on('message', (message) => {
  if(message.content == '심심해') {
    const embed = new Discord.MessageEmbed()
      .setTitle('놀자')
      .setDescription( '나랑 놀자')
      .setColor('GREEN')
    message.channel.send(embed)
  }

});

client.on('message', (message) => {
  if(message.content == '인성') {
    const embed = new Discord.MessageEmbed()
      .setTitle('펑...')
      .setDescription( '터졌따...')
      .setColor('RED')
      embed.setImage ("https://media.discordapp.net/attachments/727722365517168652/802898072086118410/image1.jpg")
      .setFooter('인성 괜찮으신가요?')
    message.channel.send(embed)
  }

});

client.on('message', (message) => {
  if(message.content == '초대코드') {
    const embed = new Discord.MessageEmbed()
      .setTitle('여기있어요')
      .setDescription( 'https://discord.com/api/oauth2/authorize?client_id=797423122357026827&permissions=8&scope=bot')
      .setColor('BLUE')
    message.channel.send(embed)
  }

});

client.on('message', (message) => {
  if(message.content == '상추') {
    const embed = new Discord.MessageEmbed()
      .setTitle('77ㅓ억')
      .setDescription( '아 오늘 저녁은 상추다')
      .setColor('GREEN')
    message.channel.send(embed)
  }

});


client.login(token);