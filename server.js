require('dotenv').config()
const {Client, MessageAttachment, MessageEmbed} = require('discord.js')
const EquipList = require('./EquipList.js')
const el = new EquipList()
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

console.log(el.getLevel1Armor())
client.on('message', msg => {
  
  var nmsg = msg.content.toLowerCase()
  
  switch (nmsg) {
    //Start Map Links
    case '~shoreline':
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
      msg.reply(ranOne())
      break;
    
    case '~random level 2':
      msg.reply(ranTwo())
      break;

    case '~random level 3':
      msg.reply(ranThree())
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

function ranOne() {
  var h = el.getLevel1Helm()
  var a = el.getLevel1Armor()
  var w = el.getLevel1Weapon()

  const randomSet = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Your Random Setup:')
    .setAuthor('Tarkov Bot', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f8830f0-679a-4974-977c-bd5802617c82/db0qvlo-32e8ff5c-d63b-429b-bf05-205b350157d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmODgzMGYwLTY3OWEtNDk3NC05NzdjLWJkNTgwMjYxN2M4MlwvZGIwcXZsby0zMmU4ZmY1Yy1kNjNiLTQyOWItYmYwNS0yMDViMzUwMTU3ZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HydlF-9X9oGF1XyU9PY3q9FCrtCjvHdLZohBrEQ5bbc', 'https://github.com/Josh5To/EFTBot')
    .setDescription('Level 1')
    .addFields(
      { name: 'Helmet:', value: h[Math.floor((Math.random() * h.length))] },
      { name: 'Armor:', value: a[Math.floor((Math.random() * a.length))] },
      { name: 'Weapon:', value: w[Math.floor((Math.random() * w.length))] },
  )
  return randomSet;
}

function ranTwo() {
  var h = el.getLevel2Helm()
  var a = el.getLevel2Armor()
  var w = el.getLevel2Weapon()

  const randomSet = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Your Random Setup:')
    .setAuthor('Tarkov Bot', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f8830f0-679a-4974-977c-bd5802617c82/db0qvlo-32e8ff5c-d63b-429b-bf05-205b350157d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmODgzMGYwLTY3OWEtNDk3NC05NzdjLWJkNTgwMjYxN2M4MlwvZGIwcXZsby0zMmU4ZmY1Yy1kNjNiLTQyOWItYmYwNS0yMDViMzUwMTU3ZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HydlF-9X9oGF1XyU9PY3q9FCrtCjvHdLZohBrEQ5bbc', 'https://github.com/Josh5To/EFTBot')
    .setDescription('Level 2')
    .addFields(
      { name: 'Helmet:', value: h[Math.floor((Math.random() * h.length))] },
      { name: 'Armor:', value: a[Math.floor((Math.random() * a.length))] },
      { name: 'Weapon:', value: w[Math.floor((Math.random() * w.length))] },
  )
  return randomSet;
}

function ranThree() {
  var h = el.getLevel3Helm()
  var a = el.getLevel3Armor()
  var w = el.getLevel3Weapon()

  const randomSet = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Your Random Setup:')
    .setAuthor('Tarkov Bot', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f8830f0-679a-4974-977c-bd5802617c82/db0qvlo-32e8ff5c-d63b-429b-bf05-205b350157d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmODgzMGYwLTY3OWEtNDk3NC05NzdjLWJkNTgwMjYxN2M4MlwvZGIwcXZsby0zMmU4ZmY1Yy1kNjNiLTQyOWItYmYwNS0yMDViMzUwMTU3ZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HydlF-9X9oGF1XyU9PY3q9FCrtCjvHdLZohBrEQ5bbc', 'https://github.com/Josh5To/EFTBot')
    .setDescription('Level 3')
    .addFields(
      { name: 'Helmet:', value: h[Math.floor((Math.random() * h.length))] },
      { name: 'Armor:', value: a[Math.floor((Math.random() * a.length))] },
      { name: 'Weapon:', value: w[Math.floor((Math.random() * w.length))] },
  )
  return randomSet;
}

function ranMap(imsg) {
  imsg.reply('Shuffling...')
  var maps = [shoreline, customs, factory, reserve, interchange, llab, woods]
  var rand = Math.floor((Math.random() * maps.length))

  return (new MessageAttachment(maps[rand]));
}



client.login(process.env.BOT_TOK)