require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

const shoreline = process.env.SHORE_LINK
const customs = process.env.CUST_LINK
const factory = process.env.FACT_LINK
const reserve = process.env.RES_LINK
const interchange = process.env.INTER_LINK
const llab = process.env.LAB_LINK
const woods = process.env.WOOD_LINK
const ammochart = process.env.AMMO_LINK
const noobammo = process.env.NOOB_LINK


client.on('message', msg => {
  
  var nmsg = msg.content.toLowerCase()
  
  switch (nmsg) {
    //Start Map Links
    case '~shoreline':
      msg.reply(shoreline)
      break;
      
    case '~customs':
      msg.reply(customs)
      break;
      
    case '~factory':
      msg.reply(factory)
      break;
      
    case '~reserve':
      msg.reply(reserve)
      break;
    
    case '~interchange':
      msg.reply(interchange)
      break;
      
    case '~lab':
      msg.reply(llab)
      break;
      
    case '~woods':
      msg.reply(woods)
      break;
      
    //End Map Links
    //Start Ammo Info
    case '~ammochart':
      msg.reply(ammochart)
      break;
      
    case '~noobammo':
      msg.reply(noobammo)
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