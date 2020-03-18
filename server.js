const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
  
  //Shoreline map
  if (msg.content === '!shore') {
    msg.reply('https://cutt.ly/OtlbGTA')
  }
  
  //Customs map
  if (msg.content === '!customs') {
    msg.reply('https://cutt.ly/3tlb3tF')
  }
  
  //Factory map
  if (msg.content === '!factory') {
    msg.reply('https://cutt.ly/Otlb5PG')
  }
  
  //Reserve map
  if (msg.content === '!reserve') {
    msg.reply('https://cutt.ly/4tlnrbt')
  }
              
  //Reserve map
  if (msg.content === '!reserve') {
    msg.reply('https://cutt.ly/4tlnrbt')
  }
  
  //Interchange map
  if (msg.content === '!interchange') {
    msg.reply('https://cutt.ly/wtlnig8')
  }
      
})



client.login(process.env.BOT_TOK)