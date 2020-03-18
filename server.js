const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
  
  
  switch (msg.content){
    case '!shoreline':
      msg.reply('https://cutt.ly/OtlbGTA')
      break;
      
    case '!customs':
      msg.reply('https://cutt.ly/3tlb3tF')
      break;
      
    case '!factory':
      msg.reply('https://cutt.ly/Otlb5PG')
      break;
      
    case '!reserve':
      msg.reply('https://cutt.ly/4tlnrbt')
      break;
    
    case '!interchange':
      msg.reply('https://cutt.ly/wtlnig8')
      break;
  }
  
})



client.login(process.env.BOT_TOK)