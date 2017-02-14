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
        quoteNum = Math.floor(Math.random() * 1000) % 11;
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
        case 8:
          author = "tostoday";
          authorImage = "https://yt3.ggpht.com/-gNRclMiHzN4/AAAAAAAAAAI/AAAAAAAAAAA/BNEDEUakd4A/s48-c-k-no-mo-rj-c0xffffff/photo.jpg";
          quote = "I don't know why but Visopsys sounds like a medical condition﻿";
          year = "circa. 2015";
          url = "https://www.youtube.com/watch?v=5T-vEZeY2v0";
          break;
        case 9:
          author = "Diana Adams";
          authorImage = "https://yt3.ggpht.com/-tQLg1M-3org/AAAAAAAAAAI/AAAAAAAAAAA/-kkOvupMHXQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg";
          quote = "4 × 1 000 000!? 4 000 000! It's not that hard...﻿";
          year = "2014";
          url = "https://youtu.be/5T-vEZeY2v0?t=9m28s";
          break;
        case 10:
          author = "Victor Tran";
          authorImage = "https://yt3.ggpht.com/-Iuf1v4-SSSM/AAAAAAAAAAI/AAAAAAAAAAA/89IYeQw--wU/photo.jpg";
          quote = "Yes! I'm not *just* a blue happy face!﻿";
          year = "2016";
          url = "https://youtu.be/2E21oad5pWQ";
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

function messageDeleteTimer(msg, msgArray) {
  msg.delete(5000);
}

function messageDeleteTimer20s(msg, msgArray) {
  msg.delete(20000);
}

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('<:vtBoshyTime:280178631886635008> PONG! I want to play pong... :\'(').then(messageDeleteTimer);
  } else if (message.content === '!pong') {
    message.channel.send('<:vtBoshyTime:280178631886635008> PING!').then(messageDeleteTimer);
  } else if (message.content === '!isthisthingon') {
    message.channel.send('no 💤').then(messageDeleteTimer);
  } else if (message.content === '!quoteoftheday') {
    var quoteofday = GetQuoteOfTheDay();
    message.channel.send("Here's the quote of the day (as of " + QuoteOfTheDayStartTime.toUTCString() + ")").then(messageDeleteTimer20s);
    message.channel.sendEmbed(quoteofday).then(messageDeleteTimer20s);
  } else if (message.content === "!forcequote") {
    QuoteOfTheDayExpiry = 0;
    var quoteofday = GetQuoteOfTheDay();
    message.channel.send("New quote of the day!").then(messageDeleteTimer20s);
    message.channel.sendEmbed(quoteofday).then(messageDeleteTimer20s);
  } else if (message.content === '!reboot') {
    message.channel.send("Goodbye! We'll be back in a moment!").then(messageDeleteTimer);
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
    
    message.channel.send("Well... vicr123 tried to code this... but it kept crashing... Ironic isn't it? :(").then(messageDeleteTimer);
  } else if (message.content === '!help') {
    message.channel.send("Available commands:\n```\n" +
      "!ping, !pong     Requests AstralQuote to reply with a message\n" +
      "!quoteoftheday   Requests AstralQuote for the quote of the day\n" +
      "!forcequote      Requests AstralQuote to reset the quote of the day\n" +
      "!reboot          Requests AstralQuote to reboot\n" +
      "!poweroff        Tells AstralQuote to leave\n```"
    ).then(messageDeleteTimer20s);
  } else if (message.content === '!easteregg') {
    message.channel.send("```cpp\n" +
    "There are no easter eggs to be found here. Begone!" +
    "\n```").then(messageDeleteTimer20s);
  } else if (message.content === '!easterwgg') {
    message.channel.send("```cpp\n" +
    "Ha, you found an easter egg! Take that, !easteregg!" +
    "\n```").then(messageDeleteTimer20s);
  } else if (message.content === '!about') {
    message.channel.send("Made in Node.js by TheRandomMelon and vicr123. Crafted for the AstralPhaser Central Discord server!").then(messageDeleteTimer20s);
  } else if (message.content.startsWith("!")) {
      deleteOriginalMessage = false;
      
      console.log("[ERROR] " + message.content + " [Unrecognised command]");
      var msg;
      switch (Math.floor(Math.random() * 1000) % 8) {
        case 0:
          msg = "Trying to break me, are you?";
          break;
        case 1:
          msg = "Sorry, what was that?";
          break;
        case 2:
          msg = "Oops... I missed that.";
          break;
        case 3:
          msg = "Either you typed something wrong... Or I'm not smart enough to understand you.";
          break;
        case 4:
          msg = "What are you trying to do!?";
          break;
        case 5:
          msg = "Is this the end of AstralQuote?";
          break;
        case 6:
          msg = "Not sure what you mean.";
          break;
        case 7:
          msg = "Pretty sure you didn't expect this message to appear...";
          break;
      }
      message.channel.send("<:vtBoshyTime:280178631886635008> GAH! " + msg + " Refer to !help for syntax and other stuff.").then(messageDeleteTimer);
  }
});

client.on('guildMemberAdd', usr => {
  
  var embed = new Discord.RichEmbed();
  
  embed.setAuthor("Victor Tran", "https://yt3.ggpht.com/-Iuf1v4-SSSM/AAAAAAAAAAI/AAAAAAAAAAA/89IYeQw--wU/photo.jpg");
  embed.setColor("#0096FF");
  embed.setDescription("Welcome " + usr.displayName + " to AstralPhaser Central! Before you start, we recommend you check the rules over at https://docs.google.com/spreadsheets/d/1Et4DilaZzfnqinxhqOy5Ej_3M_-xznEN21zsuJkGurc/edit?usp=sharing. Thanks, and enjoy the community. - Victor");
  embed.setURL("https://docs.google.com/spreadsheets/d/1Et4DilaZzfnqinxhqOy5Ej_3M_-xznEN21zsuJkGurc/edit?usp=sharing");
  
  usr.sendEmbed(embed)
});

client.login('MjgwMjQ1MDAwMDI0MDk2NzY4.C4K8Nw.InlnQvRmbvfJG0nv13FXtoVzXwc').catch(
  function() {
    console.log("[ERROR] Login failed.");
  });
