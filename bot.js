const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("اي دي الروم بش يعمل سبام")
setInterval(function() {
channel.send(`by [GoTo/متنكر] GG`);
}, 30)
})

client.login(process.env.BOT_TOKEN);