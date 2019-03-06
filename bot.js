const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("552756874265493506")
setInterval(function() {
channel.send(`by [GoTo/متنكر] GG`);
}, 30)
})

client.login(process.env.BOT_TOKEN);