const Discord = require('discord.js');
const client = new Discord.Client();

var QuoteOfTheDay;
var QuoteOfTheDayExpiry;

function GetQuoteOfTheDay() {
    var embed = new Discord.RichEmbed();
    
    var author;
    var authorImage;
    var quote;
    var year;
    var url;
    
    switch (Math.floor(Math.random() * 1000) % 4) {
      case 0:
        author = "Victor Tran";
        authorImage = "https://yt3.ggpht.com/-Iuf1v4-SSSM/AAAAAAAAAAI/AAAAAAAAAAA/89IYeQw--wU/photo.jpg";
        quote = "A letter says a whole video!";
        year = "2017";
        url = "https://cdn.discordapp.com/attachments/278874966542385152/280566273992032258/Screenshot_20170213-160944.png";
        break;
      case 1:
        author = "Victor Tran";
        authorImage = "https://yt3.ggpht.com/-Iuf1v4-SSSM/AAAAAAAAAAI/AAAAAAAAAAA/89IYeQw--wU/photo.jpg";
        quote = "I don't know why I found that \"ten gazillion\" thing so funny...";
        year = "2017";
        url = "https://www.youtube.com/watch?v=zzKGnuvX6IQ&t=37s";
        break;
      case 2:
        author = "AKidFromTheUK";
        authorImage = "https://yt3.ggpht.com/-yPaKdXkNVgw/AAAAAAAAAAI/AAAAAAAAAAA/mXqfMs0uVkU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg";
        quote = "Listening to myself is quite awkward lmao";
        year = "2017";
        url = "https://www.example.com/";
        break;
      case 3:
        author = "Prince Hamlet: William Shakespeare";
        authorImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/468px-Shakespeare.jpg";
        quote = "To be, or not to be, that is the question";
        year = "circa. 1600";
        url = "https://en.wikipedia.org/wiki/To_be,_or_not_to_be";
        break;
    }

    embed.setAuthor(author, authorImage);
    embed.setColor("#FF0000");
    embed.setDescription(quote);
    embed.setFooter("- " + year);
    embed.setURL(url);
    
    return embed;
}

client.on('ready', () => {
  console.log('ARE YA READY KIDS? AYE AYE CAPTAIN!');
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('<:vtBoshyTime:280178631886635008> PING! Bot is coming soon.');
  } else if (message.content === '!isthisthingon') {
    message.channel.send('no 💤');
  } else if (message.content === '!quoteoftheday') {
    message.channel.send("Here's the quote of the day:");
    message.channel.sendEmbed(GetQuoteOfTheDay());
  }
});

client.login('MjgwMjQ1MDAwMDI0MDk2NzY4.C4K8Nw.InlnQvRmbvfJG0nv13FXtoVzXwc');
