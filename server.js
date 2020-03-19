require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
  
  var nmsg = msg.content.toLowerCase()
  
  switch (nmsg) {
    //Start Map Links
    case '~shoreline':
      msg.reply('https://i.redd.it/qlwzubo6y0c21.jpg')
      break;
      
    case '~customs':
      msg.reply('https://i.redd.it/zmanfyd558841.png')
      break;
      
    case '~factory':
      msg.reply('https://i.imgur.com/FP3eIYa.png')
      break;
      
    case '~reserve':
      msg.reply('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/c0/ReserveMap3d.jpg/1280px-ReserveMap3d.jpg?version=6708e054d1a0a18df621d0edf287b7c3')
      break;
    
    case '~interchange':
      msg.reply('https://i.imgur.com/aUXxB3j.jpg')
      break;
      
    case '~lab':
      msg.reply('https://i.redd.it/el7cgdzcno721.jpg')
      break;
      
    case '~woods':
      msg.reply('https://i.redd.it/ygn3whnwc6c41.png')
      break;
      
    //End Map Links
    //Start Ammo Info
    case '~ammochart':
      msg.reply('https://i.imgur.com/JskiR3X.png')
      break;
      
    case '~noobammo':
      msg.reply('https://i.redd.it/kvd1b7wqjvk41.png')
      break;
      
    case '~help':
      msg.reply('Hello! Here\'s a list of commands I can handle: \n' +
                '~lab, ~reserve, ~woods, ~factory, ~interchange, ~customs, ~shoreline will give you maps \n ' +
                '~ammochart gives you an image of NoFoodAfterMidnight\'s ammo damage chart \n ' +
                '~noobammo will provide a more streamlined ammo chart by u/Rune_Master')
      break;
      
  }
  
})



client.login(process.env.BOT_TOK)