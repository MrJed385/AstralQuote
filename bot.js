const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('ARE YA READY KIDS? AYE AYE CAPTAIN!');
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('<:vtBoshyTime:280178631886635008> PING! Bot is coming soon.');
  } else if (message.content === '!isthisthingon') {
    message.channel.send('no 💤');
  } else if (message.content === '!quoteoftheday') {
    var embed = new Discord.RichEmbed();

    embed.setAuthor("Victor Tran", "https://yt3.ggpht.com/-Iuf1v4-SSSM/AAAAAAAAAAI/AAAAAAAAAAA/89IYeQw--wU/photo.jpg");
    embed.setColor("#FF0000");
    embed.setDescription("A letter says a whole video!");
    embed.setFooter("- 2017.");
    embed.setURL("https://cdn.discordapp.com/attachments/278874966542385152/280566273992032258/Screenshot_20170213-160944.png");

    message.channel.send("Here's the quote of the day:");
    message.channel.sendEmbed(embed);
  }
});

client.login('MjgwMjQ1MDAwMDI0MDk2NzY4.C4K8Nw.InlnQvRmbvfJG0nv13FXtoVzXwc');