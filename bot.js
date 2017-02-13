const Discord = require('discord.js');
const client = new Discord.Client();

var QuoteOfTheDay;
var QuoteOfTheDayExpiry = 0;
var QuoteOfTheDayStartTime;
var DidReboot = false;

function GetQuoteOfTheDay(quoteNum = -1) {
    var now = new Date();
    
    if (QuoteOfTheDayExpiry < now.getTime()) {
      console.log("Getting new quote of the day...");
      console.log("This quote expires in 1 day.");
      
      QuoteOfTheDayStartTime = now;
      QuoteOfTheDayExpiry = now.getTime();
      QuoteOfTheDayExpiry += 86400000; //Add 8640000 milliseconds (24 hours) to the quote of the day
      
      QuoteOfTheDay = new Discord.RichEmbed();
      var author;
      var authorImage;
      var quote;
      var year;
      var url;
      
      if (quoteNum == -1) {
        quoteNum = Math.floor(Math.random() * 1000) % 8;
      }
      
      //New quotes should be kept clean. No expletives or really anything you don't want a 3 year old to see. Thanks :)
      // - Victor
      
      switch (quoteNum) {
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
          url = "https://www.example.com/"; //TODO: Find a URL
          break;
        case 3:
          author = "Prince Hamlet: William Shakespeare";
          authorImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/468px-Shakespeare.jpg";
          quote = "To be, or not to be, that is the question";
          year = "circa. 1600";
          url = "https://en.wikipedia.org/wiki/To_be,_or_not_to_be";
          break;
        case 4:
          author = "Diana Adams / Mitsubishi Mirage";
          authorImage = "https://yt3.ggpht.com/-tQLg1M-3org/AAAAAAAAAAI/AAAAAAAAAAA/-kkOvupMHXQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg";
          quote = "Dialing 000...\nNOOO!!!";
          year = "2017";
          url = "https://youtu.be/jDy57c7Y-4A?t=11m52s";
          break;
        case 5:
          author = "Diana Adams / Mitsubishi Mirage";
          authorImage = "https://yt3.ggpht.com/-tQLg1M-3org/AAAAAAAAAAI/AAAAAAAAAAA/-kkOvupMHXQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg";
          quote = "You'd have a crash by now!\nPardon?";
          year = "2017";
          url = "https://youtu.be/jDy57c7Y-4A?t=15m5s";
          break;
        case 6:
          author = "Ivoponop Pena";
          authorImage = "https://yt3.ggpht.com/-hZJxXIFsfB8/AAAAAAAAAAI/AAAAAAAAAAA/c_mjVjQWvTw/s48-c-k-no-mo-rj-c0xffffff/photo.jpg";
          quote = "i buy tablets for the bubble plastic﻿";
          year = "2016";
          url = "https://www.youtube.com/watch?v=AqFDn0TxwH4";
          break;
        case 7:
          author = "The Mill on the Floss: George Eliot";
          authorImage = "https://upload.wikimedia.org/wikipedia/commons/8/81/George_Eliot_at_30_by_François_D%27Albert_Durade.jpg";
          quote = "Don't judge a book by its cover﻿";
          year = "1860";
          url = "https://en.wikipedia.org/wiki/Don't_judge_a_book_by_its_cover";
          break;
      }
      
      QuoteOfTheDay.setAuthor(author, authorImage);
      QuoteOfTheDay.setColor("#FF0000");
      QuoteOfTheDay.setDescription(quote);
      QuoteOfTheDay.setFooter("- " + year);
      QuoteOfTheDay.setURL(url);
    } else {
      console.log("No need for new quote of the day");
    }

    
    return QuoteOfTheDay;
}

client.on('ready', () => {
  console.log('ARE YA READY KIDS? AYE AYE CAPTAIN!');
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('<:vtBoshyTime:280178631886635008> PONG!');
  } else if (message.content === '!isthisthingon') {
    message.channel.send('no 💤');
  } else if (message.content === '!quoteoftheday') {
    var quoteofday = GetQuoteOfTheDay();
    message.channel.send("Here's the quote of the day (as of " + QuoteOfTheDayStartTime.toUTCString() + ")");
    message.channel.sendEmbed(quoteofday);
  } else if (message.content === "!forcequote") {
    QuoteOfTheDayExpiry = 0;
    var quoteofday = GetQuoteOfTheDay();
    message.channel.send("New quote of the day!");
    message.channel.sendEmbed(quoteofday);
  } else if (message.content === '!reboot') {
    message.channel.send("Goodbye! We'll be back in a moment!");
    console.log('Reboot Requested. Rebooting...');
    client.destroy();
    DidReboot = true;
    client.login('MjgwMjQ1MDAwMDI0MDk2NzY4.C4K8Nw.InlnQvRmbvfJG0nv13FXtoVzXwc');
  } else if (message.content === '!poweroff') {
    /*
    console.log(message.guild.roles);
    if (message.guild.roles.get('Moderator').members.keyArray().includes(message.author.username)) {
      message.channel.send("Access Granted");
    } else {
      message.channel.send("Access Denied");
    }*/
    
    message.channel.send("Well... vicr123 tried to code this... but it kept crashing... Ironic isn't it? :(");
  } else if (message.content === '!help') {
    message.channel.send("Available commands:\n```\n" +
      "!ping            Requests AstralQuote to reply with a message\n" +
      "!quoteoftheday   Requests AstralQuote for the quote of the day\n" +
      "!forcequote      Requests AstralQuote to reset the quote of the day\n" +
      "!reboot          Requests AstralQuote to reboot\n" +
      "!poweroff        Tells AstralQuote to leave\n```"
    );
  }
});

client.login('MjgwMjQ1MDAwMDI0MDk2NzY4.C4K8Nw.InlnQvRmbvfJG0nv13FXtoVzXwc');
