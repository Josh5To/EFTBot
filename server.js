const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
  
  //Shoreline
  if (msg.content === '!shore') {
    msg.reply('https://cutt.ly/OtlbGTA')
  }
  
  //Customs
  if (msg.content === '!customs') {
    msg.reply('https://cutt.ly/3tlb3tF')
  }
  
  //Factory
  if (msg.content === '!factory) {
    msg.reply('https://cutt.ly/Otlb5PG')
  }
  
})



client.login(process.env.BOT_TOK)