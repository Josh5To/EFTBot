require('dotenv').config()
const {Client, MessageAttachment}= require('discord.js')
const client = new Client()

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
      msg.reply("Coming right up")
      msg.reply(new MessageAttachment(shoreline))
      break;
      
    case '~customs':
      msg.reply(new MessageAttachment(customs))
      break;
      
    case '~factory':
      msg.reply(new MessageAttachment(factory))
      break;
      
    case '~reserve':
      msg.reply(new MessageAttachment(reserve))
      break;
    
    case '~interchange':
      msg.reply(new MessageAttachment(interchange))
      break;
      
    case '~lab':
      msg.reply(new MessageAttachment(llab))
      break;
      
    case '~woods':
      msg.reply(new MessageAttachment(woods))
      break;

    case '~randommap':
      msg.reply(ranMap(msg))
      break;
    
    case '~random level 1':
      break;
      
    //End Map Links
    //Start Ammo Info
    case '~ammochart':
      msg.reply(ammochart)
      break;
      
    case '~noobammo':
      msg.reply(new MessageAttachment(noobammo))
      break;
      
    case '~help':
      msg.reply('Hello! Here\'s a list of commands I can handle: \n' +
                '~lab, ~reserve, ~woods, ~factory, ~interchange, ~customs, ~shoreline will give you maps \n ' +
                'Can\'t decide map? try ~random. \n ' +
                '~ammochart gives you an image of NoFoodAfterMidnight\'s ammo damage chart \n ' +
                '~noobammo will provide a more streamlined ammo chart by u/Rune_Master')
      break;
      
  }
  
})

function ranMap(imsg) {
  imsg.reply('Shuffling...')
  var maps = [shoreline, customs, factory, reserve, interchange, llab, woods]
  var rand = Math.floor((Math.random() * maps.length))

  return (new MessageAttachment(maps[rand]));
}



client.login(process.env.BOT_TOK)