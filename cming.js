const Discord = require('discord.js'); // require the discord.js module
const client = new Discord.Client();
const keyword = require('./keyword.json');
const talk = require('./talk.json');

client.login(process.env.DCB_TOKEN);

client.once('ready', () => {
	console.log(`${client.user.tag} is online!!`); 
}); 

