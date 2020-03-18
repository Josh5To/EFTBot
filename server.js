const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
  
  var nmsg = msg.content.toLowerCase()
  
  switch (nmsg) {
    //Start Map Links
    case '~shoreline':
      msg.reply('https://cutt.ly/OtlbGTA')
      break;
      
    case '~customs':
      msg.reply('https://cutt.ly/3tlb3tF')
      break;
      
    case '~factory':
      msg.reply('https://cutt.ly/Otlb5PG')
      break;
      
    case '~reserve':
      msg.reply('https://cutt.ly/4tlnrbt')
      break;
    
    case '~interchange':
      msg.reply('https://cutt.ly/wtlnig8')
      break;
    //End Map Links
    //Start Ammo Info
    case '~ammochart':
      msg.reply('https://i.imgur.com/JskiR3X.png')
      break;
      
    case '~help':
      msg.reply('Hello! Here\'s a list of commands I can handle: \n ~reserve, ~factory, ~shoreline, ~interchange, ~customs, ~shoreline will give you maps \n ~ammochart gives you an image of NoFoodAfterMidnight\'s ammo damage chart')
      break;
      
  }
  
})



client.login(process.env.BOT_TOK)