const Discord = require('discord.js'); // require the discord.js module
const client = new Discord.Client();
const keyword = require('./keyword.json');
const talk = require('./talk.json');

client.login(process.env.DCB_TOKEN);

client.on('ready', () => {
	console.log(`${client.user.tag} is online!!`); 
}); 

client.on('message', () => {
	if(msg.content == "Ping!"){
		msg.reply('Pong!')
	}
})
